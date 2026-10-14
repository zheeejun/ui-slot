import { Component, computed, DestroyRef, effect, input, output, signal, inject, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { PointerDownSoundDirective } from '../../shared/directives/pointer-down-sound/pointer-down-sound.directive';
import { ApOgInputComponent } from '../../components/ap-og-input/ap-og-input.component';
import { ApOgInputBetComponent } from '../../components/ap-og-input-bet/ap-og-input-bet.component';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { OgChickenDifficultyType, OgChickenGameRequest, OgChickenGameEvent, OgChickenGameStage as GameStage, OgChickenGameState, OgChickenDifficultyEnum } from './og-panel.interface';
import { LoggerService } from '../../services/logger/logger.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { calc, MoneyText } from '../../services/player-wallet/player-wallet.function';
import { ApIconChickenComponent } from '../../icons/ap-icon-chicken/ap-icon-chicken.component';
import { InGamePopupOpened } from '../../../chiikawa/ApWeb/ApWebInterface';
import { OgPanelPopupComponent } from "../og-panel-popup/og-panel-popup.component";
import { ApButtonCustomComponent } from "../../../ap-components-lib/ap-button-custom/ap-button-custom.component";

const PANEL_BUSY_FEEDBACK_DURATION_MS = 1000;
const AUTO_STOP_FEEDBACK_DURATION_MS = 1500;
const AUTO_SPIN_CONTINUE_DELAY_MS = 50;
// 自動投注不同難度下的最大自動提現步數
const AUTO_CASH_OUT_STEP_MAX_BY_DIFFICULTY: Record<OgChickenDifficultyEnum, number> = {
  [OgChickenDifficultyEnum.easy]: 28,
  [OgChickenDifficultyEnum.medium]: 24,
  [OgChickenDifficultyEnum.hard]: 20,
  [OgChickenDifficultyEnum.expert]: 16,
};

@Component({
  selector: 'og-panel',
  imports: [CommonModule, ApInputBox, PointerDownSoundDirective, ApOgInputComponent, ApOgInputBetComponent, AppI18nPipe, ApIconChickenComponent, OgPanelPopupComponent, ApButtonCustomComponent],
  templateUrl: './og-panel.component.html',
  styleUrl: './og-panel.component.css',
})
export class OgPanelComponent implements OnInit {
  // Services
  protected readonly appI18n = inject(AppI18nService);
  private readonly wallet = inject(OgWalletService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly logger = inject(LoggerService);
  private readonly game = inject(GameIframeCtrlService);

  // Panel Inputs
  readonly variant = input<'desktop' | 'mobile'>('desktop');

  // Panel Outputs
  readonly autoRunningChange = output<boolean>();
  readonly gameStateChange = output<OgChickenGameState>();

  // Panel Signals
  readonly isPanelBusy = signal(false);
  readonly isPanelBusyFeedbackVisible = signal(false);
  readonly isAutoRunning = signal(false);
  readonly isAutoStopRequested = signal(false);
  readonly isAutoStopFeedbackVisible = signal(false);
  readonly isInputBetDisabled = computed<boolean>(() => { return this.isPanelBusy() || this.isAutoRunning() || this.gameState() === 'playing'; });
  readonly isInputDifficultyDisabled = computed<boolean>(() => { return this.isPanelBusy() || this.isAutoRunning() || this.gameState() === 'playing'; });
  readonly isModeTabDisabled = computed<boolean>(() => { return this.isPanelBusy() || this.isAutoRunning() || this.gameState() === 'playing'; });
  /** 是否超過可用餘額 */
  readonly isBetAmountOverBalance = computed<boolean>(() => { return this.displayBet() > this.displayBalance(); });
  /** 當下注區忙碌或投注金額超過可用餘額時禁用投注按鈕 */
  readonly isBetButtonDisabled = computed<boolean>(() => { return this.isPanelBusy() || this.isBetAmountOverBalance(); });
  /** 是否顯示餘額不足彈窗 */
  readonly showInsufficientBalancePopup = signal(false);
  readonly activeTab = signal<'manual' | 'auto'>('manual');
  readonly onWinSettingTab = signal<'reset' | 'increase by'>('reset');
  readonly onLossSettingTab = signal<'reset' | 'increase by'>('reset');
  /** 當前顯示的餘額 */
  readonly displayBalance = computed<number>(() => this.wallet.displayBalance());
  /** 當前顯示的下注金額 */
  readonly displayBet = signal<number>(this.wallet.betAmount());
  readonly betLevel = computed(() => this.wallet.betLevel());
  /** 難度設定 */
  readonly difficulty = signal<number>(0);
  readonly difficultyString = computed<string>(() => { return OgChickenDifficultyEnum[this.difficulty()]; });
  /** 自動投注相關設定：提現步數與最大值 */
  readonly autoCashOutStep = signal<number>(1);
  readonly maxAutoCashOutStep = computed<number>(() => {
    return AUTO_CASH_OUT_STEP_MAX_BY_DIFFICULTY[this.difficulty() as OgChickenDifficultyEnum];
  });
  readonly autoCashOutStepString = computed<string>(() => { return this.autoCashOutStep().toString(); });
  /** 自動投注的注數 */
  readonly numberOfBets = signal<number>(0);
  readonly numberOfBetsString = computed<string>(() => { return this.numberOfBets().toString(); });
  /** 達到的盈利目標 */
  readonly stopProfitAmount = signal<number>(0);
  readonly stopProfitAmountString = signal<string>(this.formatStopAmount(0));
  /** 停利 / 停損數值，用於自動投注停止判斷 */
  readonly stopLossAmount = signal<number>(0);
  readonly stopLossAmountString = signal<string>(this.formatStopAmount(0));
  readonly stopAmountStep = computed<string>(() => {
    const decimalPlaces = this.wallet.decimalPlaces();
    return (1 / 10 ** decimalPlaces).toFixed(decimalPlaces);
  });
  /** 贏分時增加的金額 */
  readonly onWinAmount = signal<number>(0);
  readonly onWinAmountString = computed<string>(() => { return this.onWinAmount().toString(); });
  /** 輸分時增加的金額 */
  readonly onLossAmount = signal<number>(0);
  readonly onLossAmountString = computed<string>(() => { return this.onLossAmount().toString(); });
  /** 目前盈利 */
  readonly totalProfit = signal<number>(0);
  readonly totalProfitString = computed<string>(() => { return MoneyText.format(this.totalProfit(), { addSymbol: false }); });
  /** 目前倍率 */
  readonly totalRate = signal<number>(0);
  readonly totalRateString = computed<string>(() => { return this.totalRate().toString(); })
  readonly currencyImage = computed<string>(() => this.wallet.currencyIconUrl() ?? 'assets/images/currency/img_coin_DEMO.svg');

  // Game Signals：遊戲流程狀態與小雞位置相關資料
  readonly gameState = signal<OgChickenGameState>('ready');
  /** 0: 第一次Go, 1: 第二次之後的Go */
  readonly gameStage = signal<string>(GameStage.firstGo);
  readonly gameEvent = signal<OgChickenGameEvent | null>(null);
  readonly chickenLocation = signal<number>(0);
  readonly isCashoutDisabled = computed<boolean>(() => {
    return this.isPanelBusy() || this.gameState() !== 'playing' || this.gameStage() === GameStage.firstGo;
  });
  private panelBusyFeedbackTimer: ReturnType<typeof setTimeout> | undefined;
  private autoStopFeedbackTimer: ReturnType<typeof setTimeout> | undefined;
  private autoSpinContinueTimer: ReturnType<typeof setTimeout> | undefined;
  private autoBetsRemaining: number | null = null;
  private autoInitialBetAmount = 0;
  private autoCurrentRoundBetAmount = 0;
  private autoTotalProfit = 0;
  private isStopProfitAmountEdited = false;
  private isStopLossAmountEdited = false;

  public readonly colorTheme = signal<string>('#DB3737');

  constructor() {
    // 當下注區狀態改變時，觸發忙碌提示
    effect(() => {
      this.gameStateChange.emit(this.gameState());
    });

    effect(() => {
      // 當難度改變時，重新計算最大自動提現步數，並將自動提現步數限制在合法範圍內
      this.wallet.decimalPlaces();

      if (!this.isStopProfitAmountEdited) {
        this.stopProfitAmountString.set(this.formatStopAmount(this.stopProfitAmount()));
      }

      if (!this.isStopLossAmountEdited) {
        this.stopLossAmountString.set(this.formatStopAmount(this.stopLossAmount()));
      }
    });

    this.destroyRef.onDestroy(() => {
      if (this.panelBusyFeedbackTimer) {
        clearTimeout(this.panelBusyFeedbackTimer);
      }
      if (this.autoStopFeedbackTimer) {
        clearTimeout(this.autoStopFeedbackTimer);
      }
      this.clearAutoSpinContinueTimer();
    });
  }

  ngOnInit(): void {
    this.wallet.spinResultEvent$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      this.onSpinResultEvent(event as OgChickenGameEvent);
    });
    this.game.readyForSpin$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.onReadyForSpin();
    });
    this.game.balanceAdded$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      this.onBalanceAdded(message.amount);
    });
    this.game.InGamePopupOpened$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      this.onInGamePopupOpened(message);
    });
  }

  /** 
   * @param bet 使用者輸入介面得到的下注金額 是控制在最小與最大下注金額之間
   */
  onInputBetChanged(bet: number): void {
    this.displayBet.set(bet);

    if (this.isBetAmountOverBalance()) {
      this.showInsufficientBalancePopup.set(true);
    }

    if (isNaN(bet) || bet <= 0) {
      this.wallet.setBet(this.wallet.minBet());
    } else {
      this.wallet.setBet(bet);
    }
  }

  /** 讓cocos在贏分時可以增加目前顯示的餘額 */
  private onBalanceAdded(amount: number): void {
    const newBalance = new Decimal(this.displayBalance()).add(amount).toNumber();
    this.wallet.setDisplayBalance(newBalance);
  }

  onInsufficientBalancePopupConfirm(): void {
    // 當餘額不足彈窗確認後，隱藏彈窗並將下注金額設為目前可用餘額
    this.showInsufficientBalancePopup.set(false);
    this.wallet.setBet(this.displayBalance());
    // 更新
    this.displayBet.set(this.wallet.betAmount());
  }

  // 難度變更
  onDifficultyChange(value: string): void {
    this.difficulty.set(OgChickenDifficultyEnum[value as 'easy' | 'medium' | 'hard' | 'expert']);
    this.autoCashOutStep.set(this.clampAutoCashOutStep(this.autoCashOutStep()));
    this.game.sendCommand('difficulty', this.difficulty());
  }
  // 自動提現步數變更
  onAutoCashOutStepChange(value: string): void {
    this.autoCashOutStep.set(this.clampAutoCashOutStep(Number(value)));
  }
  // 自動投注注數變更
  onNumberOfBetsChange(value: string): void {
    this.numberOfBets.set(this.clampWholeNumber(Number(value)));
  }
  // 贏分時增加的金額變更
  onWinSettingTabChange(value: string): void {
    if (value === 'reset' || value === 'increase by') {
      this.onWinSettingTab.set(value);
      if (value === 'reset') {
        this.onWinAmount.set(0);
      }
    }
  }

  // 虧損設定標籤變更
  onLossSettingTabChange(value: string): void {
    if (value === 'reset' || value === 'increase by') {
      this.onLossSettingTab.set(value);
      if (value === 'reset') {
        this.onLossAmount.set(0);
      }
    }
  }
  // 贏分時增加的金額變更
  onWinAmountChange(value: string): void {
    const amount = Number(value);
    if (!Number.isNaN(amount)) {
      this.onWinAmount.set(amount);
    }
  }
  // 輸分時增加的金額變更
  onLossAmountChange(value: string): void {
    const amount = Number(value);
    if (!Number.isNaN(amount)) {
      this.onLossAmount.set(amount);
    }
  }
  // 停止獲利金額變更
  onStopProfitAmountChange(value: string): void {
    this.isStopProfitAmountEdited = true;
    this.stopProfitAmountString.set(value);
    this.setStopProfitAmount(value);
  }
  // 停止虧損金額變更
  onStopLossAmountChange(value: string): void {
    this.isStopLossAmountEdited = true;
    this.stopLossAmountString.set(value);
    this.setStopLossAmount(value);
  }
  // 投注方式變更
  onTabChange(value: string): void {
    if (this.isModeTabDisabled()) {
      return;
    }

    if (value === 'manual' || value === 'auto') {
      this.activeTab.set(value);
    }
  }

  // 接收來自遊戲的結果事件，儲存後續處理用
  onSpinResultEvent(event: OgChickenGameEvent) {
    this.gameEvent.set(event);
  }

  onReadyForSpin() {
    // 最後一個step裡面的end就是目前的chickenLocation
    let currentStepScore = 0;
    let isGameFinished = false;
    const event = this.gameEvent();
    const steps = event?.steps ?? [];
    if (event && steps.length > 0) {
      // 取最後一個step
      const lastStep = steps[steps.length - 1];
      const stepRate = Number(lastStep.step_rate.split('_')[0]);
      const stepScore = calc.s2c(Number(lastStep.step_rate.split('_')[1]));
      currentStepScore = event.finish ? calc.s2c(event.total_score) : stepScore;
      this.totalRate.set(stepRate);
      this.totalProfit.set(stepScore);
      this.logger.ogLog(`小雞從${lastStep.begin}移動到${lastStep.end}, 移動了${lastStep.move}步, 倍率:${stepRate}, 分數:${stepScore}`);
      this.logger.ogLog(event);
      this.chickenLocation.set(lastStep.end);

      // 如果本局已結算
      if (event.finish) {
        isGameFinished = true;
        //更新顯示的balance
        this.wallet.setFinalBalance();

        // 重置chickenLocation
        this.chickenLocation.set(0);
        this.logger.ogLog(`本局已結算, 總分:${currentStepScore}, 死亡:${event.dead ?? '無'}`);
        this.totalRate.set(0);
        this.totalProfit.set(0);
        this.gameState.set('ready');
      }
    }

    this.isPanelBusy.set(false);
    // 自動投注中, 需要排程下一步的自動投注
    if (this.isAutoRunning()) {
      this.queueNextAutoSpinStep(isGameFinished, currentStepScore);
    }
  }

  /** 處理遊戲內彈窗開啟事件 */
  onInGamePopupOpened(message: InGamePopupOpened) {
    // 目前只有最終大獎才會傳這個
    const event = this.gameEvent();
    const steps = event?.steps ?? [];
    if (event && steps.length > 0) {
      // 取最後一個step 直接更新totalRate與totalProfit
      const lastStep = steps[steps.length - 1];
      const stepRate = Number(lastStep.step_rate.split('_')[0]);
      const stepScore = calc.s2c(Number(lastStep.step_rate.split('_')[1]));
      this.totalRate.set(stepRate);
      this.totalProfit.set(stepScore);
    }
  }

  // 投注進行狀態
  private startPanelBusy(): void {
    this.isPanelBusy.set(true);
    this.isPanelBusyFeedbackVisible.set(true);
    // 如果之前有排程的計時器, 先清掉
    if (this.panelBusyFeedbackTimer) {
      clearTimeout(this.panelBusyFeedbackTimer);
    }
    // 排程一個計時器, 在 PANEL_BUSY_FEEDBACK_DURATION_MS 後隱藏忙碌提示
    this.panelBusyFeedbackTimer = setTimeout(() => {
      this.isPanelBusyFeedbackVisible.set(false);
      this.panelBusyFeedbackTimer = undefined;
    }, PANEL_BUSY_FEEDBACK_DURATION_MS);
  }
  // 將數值限制在合法的自動提現步數範圍內
  private clampAutoCashOutStep(value: number): number {
    if (Number.isNaN(value)) {
      return 1;
    }

    return Math.min(Math.max(Math.floor(value), 1), this.maxAutoCashOutStep());
  }
  // 將數值限制為整數且不小於0
  private clampWholeNumber(value: number): number {
    if (Number.isNaN(value)) {
      return 0;
    }

    return Math.max(Math.floor(value), 0);
  }
  // 將數值格式化為指定小數位數的字串
  private formatStopAmount(value: number): string {
    return value.toFixed(this.wallet.decimalPlaces());
  }
  // 將停止獲利金額設定為合法的數值
  private setStopProfitAmount(value: string): void {
    const amount = Number(value);
    if (!Number.isNaN(amount)) {
      this.stopProfitAmount.set(amount);
    }
  }
  // 將停止虧損金額設定為合法的數值
  private setStopLossAmount(value: string): void {
    const amount = Number(value);
    if (!Number.isNaN(amount)) {
      this.stopLossAmount.set(amount);
    }
  }
  // 當使用者按下投注按鈕時，將遊戲狀態設為playing，並將遊戲階段設為firstGo，然後發送bet 指令給遊戲
  onBet() {
    if (this.isBetButtonDisabled()) {
      return;
    }

    // 更新balance
    this.wallet.setDisplayBalance(new Decimal(this.displayBalance()).sub(this.displayBet()).toNumber());

    this.gameState.set('playing');
    this.gameStage.set(GameStage.firstGo);
    this.game.sendCommand('bet');
  }
  // 當使用者按下Go按鈕時，將遊戲狀態設為playing，並將遊戲階段設為afterFirstGo，然後發送 go 指令給遊戲
  onGo(): void {
    const gameRequest: OgChickenGameRequest = {
      risk: this.difficulty(),
      start: this.chickenLocation(),
      end: this.chickenLocation() + 1,
      finish: false,
    }
    const gameString = JSON.stringify(gameRequest);

    const didSendSpinRequest = this.wallet.sendSpinRequest({
      game_stage: this.gameStage(),
      game: gameString
    });
    if (!didSendSpinRequest) {
      return;
    }

    this.startPanelBusy();
    this.gameStage.set(GameStage.afterFirstGo);
    this.game.sendCommand('go');
  }
  // 當使用者按下Cashout按鈕時，將遊戲狀態設為playing，並將遊戲階段設為afterFirstGo，然後發送 cashout 指令給遊戲
  onCashout(): void {
    const gameRequest: OgChickenGameRequest = {
      risk: this.difficulty(),
      start: this.chickenLocation(),
      end: this.chickenLocation(),
      finish: true,
    }
    const gameString = JSON.stringify(gameRequest);
    // 發送 cashout 指令給遊戲
    const didSendSpinRequest = this.wallet.sendSpinRequest({
      game_stage: GameStage.afterFirstGo,
      game: gameString
    });
    if (!didSendSpinRequest) {
      return;
    }

    this.startPanelBusy();
    this.game.sendCommand('cashout');
  }
  // 當使用者按下自動提現按鈕時，將遊戲狀態設為playing，並將遊戲階段設為afterFirstGo，然後發送 cashout 指令給遊戲
  onStartAuto(): void {
    if (this.isAutoRunning()) {
      this.requestAutoStop();
      return;
    }
    // 如果面板忙碌或遊戲狀態不是ready，則不進行任何操作
    if (this.isPanelBusy() || this.gameState() !== 'ready') {
      return;
    }
    if (this.isBetAmountOverBalance()) {
      this.showInsufficientBalancePopup.set(true);
      return;
    }
    // 開始自動投注，初始化自動投注相關的狀態
    const betCount = this.numberOfBets();
    this.autoBetsRemaining = betCount > 0 ? betCount : null;
    this.autoInitialBetAmount = this.displayBet();
    this.autoTotalProfit = 0;
    this.isAutoStopRequested.set(false);
    this.isAutoRunning.set(true);
    this.autoRunningChange.emit(true);

    this.startAutoRound();
  }
  // 當使用者按下停止自動投注按鈕時，將isAutoStopRequested設為true，表示使用者請求停止自動投注
  private startAutoRound(): void {
    if (!this.isAutoRunning()) {
      return;
    }
    // 檢查餘額是否足夠，如果不足，則通知餘額不足並停止自動投注
    if (this.isBetAmountOverBalance()) {
      this.showInsufficientBalancePopup.set(true);
      this.stopAutoSpin();
      return;
    }
    // 設置當前輪的下注金額，將遊戲狀態設為playing，將遊戲階段設為firstGo，重置小雞位置、總倍率和總盈利，發送bet指令給遊戲，然後發送go指令給遊戲
    this.autoCurrentRoundBetAmount = this.displayBet();
    this.gameState.set('playing');
    this.gameStage.set(GameStage.firstGo);
    this.chickenLocation.set(0);
    this.totalRate.set(0);
    this.totalProfit.set(0);
    this.game.sendCommand('bet');
    this.sendAutoGo();
  }
  // 排程下一步的自動投注，根據是否遊戲已結束和當前步數的分數來決定是否繼續自動投注
  private queueNextAutoSpinStep(isGameFinished: boolean, currentStepScore: number): void {
    this.clearAutoSpinContinueTimer();
    this.autoSpinContinueTimer = setTimeout(() => {
      this.autoSpinContinueTimer = undefined;
      this.continueAutoSpin(isGameFinished, currentStepScore);
    }, AUTO_SPIN_CONTINUE_DELAY_MS);
  }
  // 清除自動投注的計時器，避免重複排程
  private continueAutoSpin(isGameFinished: boolean, currentStepScore: number): void {
    if (!this.isAutoRunning()) {
      return;
    }
    // 如果遊戲已結束，則完成當前輪的自動投注，並檢查是否需要停止自動投注
    if (isGameFinished) {
      this.completeAutoRound(currentStepScore);
      if (!this.isAutoRunning()) {
        return;
      }

      this.startAutoRound();
      return;
    }
    // 如果遊戲未結束，則檢查小雞位置是否達到自動提現步數，如果是，則發送自動提現指令；如果不是，則發送自動Go指令
    if (this.chickenLocation() >= this.autoCashOutStep()) {
      this.sendAutoCashout();
      return;
    }

    this.sendAutoGo();
  }
  // 完成當前輪的自動投注，計算本輪的盈利，並根據盈利情況調整下注金額，如果達到設定的停止條件，則停止自動投注
  private completeAutoRound(finalScore: number): void {
    const roundProfit = finalScore - this.autoCurrentRoundBetAmount;
    this.autoTotalProfit += roundProfit;

    if (this.autoBetsRemaining !== null) {
      this.autoBetsRemaining -= 1;
      if (this.autoBetsRemaining <= 0) {
        this.stopAutoSpin();
        return;
      }
    }
    // 檢查是否達到停止條件，如果是，則停止自動投注
    if (this.isAutoStopRequested()) {
      this.stopAutoSpin();
      return;
    }
    // 檢查是否達到停止條件，如果是，則停止自動投注
    if (this.stopProfitAmount() > 0 && this.autoTotalProfit >= this.stopProfitAmount()) {
      this.stopAutoSpin();
      return;
    }
    // 檢查是否達到停止條件，如果是，則停止自動投注
    if (this.stopLossAmount() > 0 && this.autoTotalProfit <= -this.stopLossAmount()) {
      this.stopAutoSpin();
      return;
    }

    this.applyAutoBetAdjustment(roundProfit);
  }
  // 根據本輪的盈利情況，調整下注金額，如果設定為重置，則將下注金額設為初始值；如果設定為增加，則將下注金額增加指定的百分比
  private applyAutoBetAdjustment(roundProfit: number): void {
    if (roundProfit > 0) {
      this.applyAutoBetSetting(this.onWinSettingTab(), this.onWinAmount());
      return;
    }
    // 如果本輪虧損，則根據設定調整下注金額
    if (roundProfit < 0) {
      this.applyAutoBetSetting(this.onLossSettingTab(), this.onLossAmount());
    }
  }
  // 根據設定調整下注金額，如果設定為重置，則將下注金額設為初始值；如果設定為增加，則將下注金額增加指定的百分比
  private applyAutoBetSetting(setting: 'reset' | 'increase by', amountPercent: number): void {
    if (setting === 'reset') {
      this.wallet.setBet(this.autoInitialBetAmount);
      return;
    }
    // 根據onWin/onLoss數值，調整自動投注額
    const nextBet = new Decimal(this.autoCurrentRoundBetAmount)
      .mul(new Decimal(1).add(new Decimal(amountPercent).div(100)))
      .toNumber();
    this.wallet.setBet(nextBet);
  }
  // 發送自動Go指令給遊戲
  private sendAutoGo(): void {
    this.sendGameRequest(false, 'go');
    this.gameStage.set(GameStage.afterFirstGo);
  }
  // 發送自動提現指令給遊戲
  private sendAutoCashout(): void {
    this.sendGameRequest(true, 'cashout');
  }
  // 發送遊戲請求給遊戲，包含是否結束遊戲和指令類型，並根據是否成功發送請求來決定是否停止自動投注
  private sendGameRequest(finish: boolean, command: 'go' | 'cashout'): void {
    const gameRequest: OgChickenGameRequest = {
      risk: this.difficulty(),
      start: this.chickenLocation(),
      end: finish ? this.chickenLocation() : this.chickenLocation() + 1,
      finish,
    };
    // 發送遊戲請求給遊戲，包含是否結束遊戲和指令類型，並根據是否成功發送請求來決定是否停止自動投注
    const didSendSpinRequest = this.wallet.sendSpinRequest({
      game_stage: finish ? GameStage.afterFirstGo : this.gameStage(),
      game: JSON.stringify(gameRequest),
    });
    if (!didSendSpinRequest) {
      this.stopAutoSpin();
      return;
    }
    // 發送請求成功，將面板設為忙碌狀態，並發送指令給遊戲
    this.startPanelBusy();
    this.game.sendCommand(command);
  }
  // 請求停止自動投注，將isAutoStopRequested設為true
  private requestAutoStop(): void {
    this.isAutoStopRequested.set(true);
  }
  // 停止自動投注，清除計時器，重置狀態，並顯示停止提示
  private stopAutoSpin(): void {
    this.clearAutoSpinContinueTimer();
    this.autoBetsRemaining = null;
    this.isAutoStopRequested.set(false);
    this.isAutoRunning.set(false);
    this.autoRunningChange.emit(false);
    this.isPanelBusy.set(false);
    // 顯示停止提示
    if (this.autoStopFeedbackTimer) {
      clearTimeout(this.autoStopFeedbackTimer);
    }

    this.isAutoStopFeedbackVisible.set(true);
    this.autoStopFeedbackTimer = setTimeout(() => {
      this.isAutoStopFeedbackVisible.set(false);
      this.autoStopFeedbackTimer = undefined;
    }, AUTO_STOP_FEEDBACK_DURATION_MS);
  }
  // 清除自動投注的計時器
  private clearAutoSpinContinueTimer(): void {
    if (this.autoSpinContinueTimer) {
      clearTimeout(this.autoSpinContinueTimer);
      this.autoSpinContinueTimer = undefined;
    }
  }
}
