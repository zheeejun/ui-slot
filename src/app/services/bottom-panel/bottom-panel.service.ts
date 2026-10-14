import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import Decimal from 'decimal.js';
import { delay, Subject, Subscription, take, timer } from 'rxjs';
import { InsufficientBalanceEvent } from './bottom-panel.type';
import { environment } from '../../../environments/app-environment';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { PlayerWalletService } from '../player-wallet/player-wallet.service';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { ClientSessionService } from '../client-session/client-session.service';
import { SpinButtonMode } from './spin-button.type';
import { RULE_GA_ES } from '../../../chiikawa/Tool/util/IGameCustomData';

@Injectable({
  providedIn: 'root'
})
export class BottomPanelService {
  game = inject(GameIframeCtrlService);
  api = inject(AppInterfaceService);
  wallet = inject(PlayerWalletService);
  session = inject(ClientSessionService);

  /** Debug Panel用: 強制觸發Spin Button Mode */
  private debugSpinButtonModeSubject = new Subject<SpinButtonMode>();
  /** Debug Panel用: 強制觸發Spin Button Mode */
  public get debugSpinButtonMode$() { return this.debugSpinButtonModeSubject.asObservable(); }
  /** 判斷遊戲是否忙碌中 */
  public readonly isBusy = computed(() => this.isAutoSpinning() || this.isInGlobalCooldown() ||
    this.game.status() !== 'Idle' ||  this.game.isInGamePopup() || !this.game.isInteractionEnabled()
  );
  /** 目前的Bet*/
  public readonly bet = computed(() => this.wallet.displayBet());
  private readonly _balance = signal<number>(this.wallet.balance());
  /** 目前顯示在畫面的餘額, 不能完全反映userProfile的餘額, 需要有不同時機點更新 */
  public readonly balance = this._balance.asReadonly();
  private readonly _win = signal<number | null>(null);
  /** 顯示在Bottmon Panel欄位的贏分*/
  public readonly win = this._win.asReadonly();
  private readonly _autoSpinTotal = signal<number | null>(null);
  /** auto spin總共要自動幾次 */
  public readonly autoSpinTotal = this._autoSpinTotal.asReadonly();
  private readonly _autoSpinRemaining = signal<number | null>(null);
  /** auto spin剩下幾次 */
  public readonly autoSpinRemaining = this._autoSpinRemaining.asReadonly();
  /** 是否正在auto spin */
  public readonly isAutoSpinning = computed(() => this.autoSpinRemaining() !== null && this.autoSpinTotal() !== null);
  /** 目前的Feature Mode總共幾次, 沒有就null */
  public readonly featureTotal = computed<number | null>(() => { return this.game.featureModeTotal() || null });
  /** 目前的Feature Mode還剩幾次, 沒有就null */
  public readonly featureRemaining = computed<number | null>(() => { return this.game.featureModeRemaining() || null });
  /** 目前是否在Feature Mode */
  public readonly isFeatureMode = computed(() => this.game.isFeatureMode());
  /** auto spin事件 */
  private autoSpinSubject: Subscription | null = null;
  /** 餘額不足事件 */
  private insufficientBalanceSubject = new Subject<InsufficientBalanceEvent>();
  /** 餘額不足事件 */
  public get insufficientBalance$() { return this.insufficientBalanceSubject.asObservable(); }
  /** 離開確認事件 */
  private exitConfirmSubject = new Subject<void>();
  /** 離開確認事件 */
  public get exitConfirm$() { return this.exitConfirmSubject.asObservable(); }
  /** 餘額不足/離開確認等 message popup 是否顯示中 */
  public readonly isMessagePopupVisible = signal(false);
  /** 是否餘額不足 */
  public readonly isBalanceInsufficient = computed(() => {
    if (this.wallet.campaignSetting()?.displayType === 'freeSpins') return false;
    return this.wallet.balance() < this.wallet.realBet();
  });
  /** 每一回合(spin)結束才會更新的FreeSpin狀態 */
  readonly isFreeSpinRound = signal(false);
  /** 每一回合(spin)結束才會更新的FreeBonus狀態 */
  readonly isFreeBonusRound = signal(false);

  // Hold for Turbo Spin（按住加速）相關設定
  private _holdTurboEnabled = signal(false);
  public setHoldTurboEnabled(value: boolean) {  this._holdTurboEnabled.set(value); }
  /** Hold for Turbo Spin（按住加速）功能開關，預設關閉，可由 Lab 的 Panel Debug 開啟 */
  public readonly holdTurboEnabled = computed(() => this._holdTurboEnabled());
  /** Hold for Turbo Spin 參數：長按門檻毫秒數 */
  public readonly turboHoldThresholdMs = signal(500);
  /** Hold for Turbo Spin 參數：連續觸發間隔毫秒數 */
  public readonly turboSkipIntervalMs = signal(100);
  /** Hold for Turbo Spin 參數：閒置提示顯示延遲毫秒數 */
  public readonly idleTooltipMs = signal(3000);

  // Global Cooldown相關設定
  /** Global Cooldown的時間 (秒), 預設 0 */
  private _globalCooldownTime = signal(0);
  /** Global Cooldown的時間 (秒), 預設 0 */
  public get globalCooldownTime() { return this._globalCooldownTime.asReadonly(); }
  /** 目前是否正處於Global Cooldown中 */
  private isGlobalCooldownActive = signal(false);
  /** 是否還在Global Cooldown中 */
  public readonly isInGlobalCooldown = computed(() => this.isGlobalCooldownActive());
  /** Global Cooldown開始事件 */
  private globalCooldownStartedSubject = new Subject<void>();
  /** Global Cooldown開始事件 */
  public get globalCooldownStarted$() { return this.globalCooldownStartedSubject.asObservable(); }
  /** Global Cooldown結束事件, 給等待中的auto spin訂閱 */
  private globalCooldownEndedSubject = new Subject<void>();
  /** Global Cooldown倒數計時器 */
  private globalCooldownSubscription: Subscription | null = null;
  /** auto spin等待Global Cooldown結束的訂閱 */
  private autoSpinCooldownWaitSubscription: Subscription | null = null;
  constructor() {
    if (!environment.production) {
      (window as any).panel = this
    }

    // 更新Balance顯示的時機點
    effect(() => {
      this.wallet.campaignId(); // 依賴campaignId的變化
      this.api.loginResult(); // 依賴loginResult的變化
      untracked(() => this._balance.set(this.wallet.balance())); // 更新餘額顯示
    });

    this.game.readyForSpin$.subscribe(() => { this._balance.set(this.wallet.balance()); });
    this.game.balanceAdded$.subscribe((message) => { this._balance.update(balance => new Decimal(balance).plus(message.amount).toNumber()) });
    this.game.finalBalanceShown$.subscribe(() => { this._balance.set(this.wallet.balance()) });

    // 更新Win顯示
    this.game.winMoneyUpdated$.subscribe((message) => { this._win.set((message.win > 0) ? message.win : null); });

    // 更新每一回合的FreeSpin/FreeBonus狀態
    this.game.readyForSpin$.subscribe(() => {
      const isFreeSpin = this.wallet.campaignSetting()?.displayType === 'freeSpins';
      const isFreeBonus = this.wallet.campaignSetting()?.displayType === 'freeBonus';
      this.isFreeSpinRound.set(isFreeSpin);
      this.isFreeBonusRound.set(isFreeBonus);
    });

    // campaign啟動 關閉也會更新FreeSpin/FreeBonus狀態
    effect(() => {
      this.wallet.campaignId(); // 依賴campaignId的變化
      untracked(() => {
        const campaign = this.wallet.campaignSetting();
        const isFreeSpin = campaign?.displayType === 'freeSpins';
        const isFreeBonus = campaign?.displayType === 'freeBonus';
        this.isFreeSpinRound.set(isFreeSpin);
        this.isFreeBonusRound.set(isFreeBonus);
      });
    });

    effect(() => {
      // 偵測autoSpinRemaining的變化
      const autoSpinRemaining = this.autoSpinRemaining();
      untracked(() => {
        this.wallet.autoSpinRemaining = autoSpinRemaining;
      });
    });

    effect(() => {
      // 客製化修正
      const customRule = this.game.customData()?.customRule || null;
      if (customRule === RULE_GA_ES) {
        this._globalCooldownTime.set(3);
      }
    });
  }

  sendDebugSpinButtonMode(mode: SpinButtonMode) {
    this.debugSpinButtonModeSubject.next(mode);
  }

  sendDebugFreeSpinRound(enable: boolean) {
    this.isFreeSpinRound.set(enable);
  }

  sendDebugFreeBonusRound(enable: boolean) {
    this.isFreeBonusRound.set(enable);
  }

  sendDebugInsufficientBalance() {
    this.insufficientBalanceSubject.next({ current: this.wallet.balance(), required: this.wallet.bet() });
  }

  immediatelyStop() {
    this.game.immediatelyStop();
  }

  /** 觸發spin流程  */
  spin() {
    // 如果遊戲內有彈窗開啟, 不進行spin
    if (this.game.isInGamePopup()) {
      return;
    }

    // 當遊戲busy會下急停
    if (this.game.status() !== 'Idle') {
      this.game.immediatelyStop();
      return;
    }

    // Global Cooldown期間不觸發新的spin
    if (this.isInGlobalCooldown()) {
      return;
    }

    // 如果是Campaign的Free Spin, 流程不同
    if (this.wallet.campaignSetting()?.displayType === 'freeSpins') {
      // 轉畫面
      this.game.spin();
      this.startGlobalCooldown();

      const spinningSub = this.game.startSpinning$.subscribe((content) => {
        spinningSub.unsubscribe();
        // 確定開始Spin的時候, 傳送Spin Request給後端
        this.wallet.sendSpinRequest(content.gameString);
      });

      // 更新UI相關數值
      this._win.set(null);
      return;
    }

    // 一般情況下的Spin
    // 如果餘額不足, 觸發餘額不足事件, 不進行spin
    if (this.isBalanceInsufficient()) {
      this.insufficientBalanceSubject.next({ current: this.wallet.balance(), required: this.wallet.realBet() });
      return;
    }

    // 轉畫面
    this.game.spin();
    this.startGlobalCooldown();

    const spinningSub = this.game.startSpinning$.subscribe((content) => {
      spinningSub.unsubscribe();
      // 確定開始Spin的時候, 傳送Spin Request給後端
      this.wallet.sendSpinRequest(content.gameString);
    });

    // 更新UI相關數值
    this._balance.update(balance => new Decimal(balance).minus(this.wallet.realBet()).toNumber());
    this._win.set(null);
  }

  /** 開始auto spin, 傳入要自動幾次 */
  startAutoSpin(times: number) {
    // 如果傳入的次數不合法, 不進行auto spin
    if (times <= 0) return;

    // 如果已經在auto spin了, 無法生效
    if (this.autoSpinSubject) return;

    // 如果餘額不足, 觸發餘額不足事件, 不進行auto spin
    if (this.isBalanceInsufficient()) {
      this.insufficientBalanceSubject.next({ current: this.wallet.balance(), required: this.wallet.realBet() });
      return;
    }

    this._autoSpinTotal.set(times);
    this._autoSpinRemaining.set(times - 1);
    // 若還在Global Cooldown中, 等結束後才觸發第一次spin
    this.waitForCooldownThen(() => this.spin());
    // 每次ready for spin的時候, 延遲大概50ms去觸發下一次spin
    this.autoSpinSubject = this.game.readyForSpin$.pipe(delay(50)).subscribe(() => {
      const remaining = this.autoSpinRemaining();
      if (remaining === null || remaining <= 0) {
        // 如果剩餘次數為0, 停止auto spin
        this.stopAutoSpin();
      }
      else if (this.isBalanceInsufficient()) {
        // 如果是餘額不足, 觸發餘額不足事件, 停止auto spin
        this.insufficientBalanceSubject.next({ current: this.wallet.balance(), required: this.wallet.realBet() });
        this.stopAutoSpin();
      }
      else if (this.game.popupRewardSystemLevelUp()) {
        // 如果是RS等級提升的彈窗, 先不觸發spin, 等彈窗結束繼續spin
        const sub = this.game.InGamePopupClosed$.pipe(delay(50)).subscribe(() => {
          sub.unsubscribe();
          // 彈窗結束後若還在Global Cooldown中, 等結束後才觸發spin
          this.waitForCooldownThen(() => {
            this.spin();
            if (remaining !== null)
              this._autoSpinRemaining.set(remaining - 1);
          });
        });
      }
      else {
        // 其他情況下, 若還在Global Cooldown中, 等結束後才觸發spin
        this.waitForCooldownThen(() => {
          this.spin();
          if (remaining !== null)
            this._autoSpinRemaining.set(remaining - 1);
        });
      }
    });
  }

  /** 停止auto spin, 清空相關狀態 */
  stopAutoSpin() {
    this._autoSpinTotal.set(null);
    this._autoSpinRemaining.set(null);
    this.autoSpinSubject?.unsubscribe();
    this.autoSpinSubject = null;
    // 取消等待Global Cooldown結束後觸發spin的訂閱
    this.autoSpinCooldownWaitSubscription?.unsubscribe();
    this.autoSpinCooldownWaitSubscription = null;
  }

  /** 音樂開關 */
  enableMusic(enabled: boolean) {
    this.game.send(createApWebMessage('SetMusic', { enabled: enabled }));
  }

  /** 音效開關 */
  enableSound(enabled: boolean) {
    this.game.send(createApWebMessage('SetSound', { enabled: enabled }));
  }

  /** 設定遊戲速度 0: 慢速, 1: 正常, 2: 快速 */
  setGameSpeed(speed: 0 | 1 | 2) {
    this.game.send(createApWebMessage('SetSpinType', { speed: speed }));
    // 把速度參數在spin時可以傳給遊戲端做效能參考
    this.wallet.gameSpeed = speed;
  }

  /** 觸發一次Global Cooldown倒數, 時間到後解除isInGlobalCooldown並通知等待中的auto spin */
  private startGlobalCooldown() {
    const cooldownTime = this.globalCooldownTime();
    if (cooldownTime <= 0) return;

    this.globalCooldownStartedSubject.next();

    this.isGlobalCooldownActive.set(true);
    this.globalCooldownSubscription?.unsubscribe();
    this.globalCooldownSubscription = timer(cooldownTime * 1000).subscribe(() => {
      this.isGlobalCooldownActive.set(false);
      this.globalCooldownEndedSubject.next();
    });
  }

  /** 若還在Global Cooldown中, 等到結束才執行action; 否則立即執行 */
  private waitForCooldownThen(action: () => void) {
    if (!this.isInGlobalCooldown()) {
      action();
      return;
    }

    this.autoSpinCooldownWaitSubscription?.unsubscribe();
    this.autoSpinCooldownWaitSubscription = this.globalCooldownEndedSubject.pipe(take(1)).subscribe(() => {
      this.autoSpinCooldownWaitSubscription = null;
      action();
    });
  }

  /** 是否為 Double Chance 模式 */
  public readonly isDoubleChance = computed(() => this.wallet.isDoubleChance());

  /** 關閉 Double Chance 模式 */
  stopDoubleChance() {
    this.wallet.updateSpinMode(null);
  }

  /** 是否達到最大投注 */
  isBetMax = computed(() => this.wallet.isBetMax());

  /** 增加投注 */
  increaseBet() {
    if (this.isBetMax()) return;
    this.wallet.increaseBet();
  }

  /** 是否達到最小投注 */
  isBetMin = computed(() => this.wallet.isBetMin());

  /** 減少投注 */
  decreaseBet() {
    if (this.isBetMin()) return;
    this.wallet.decreaseBet();
  }

  /** 觸發離開確認 */
  sendExitRequest() { this.exitConfirmSubject.next(); }

  exitAndRedirect() {
    if (this.session.backurl) {
      window.location.href = decodeURIComponent(this.session.backurl);
    }
  }
}
