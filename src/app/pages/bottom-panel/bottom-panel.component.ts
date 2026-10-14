import { Component, computed, HostListener, afterNextRender, AfterViewInit, inject, input, output, signal, effect, ElementRef, Signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Subject, interval, takeUntil } from 'rxjs';
import Decimal from 'decimal.js';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { ApButtonFreeSpinsComponent } from '../../components/ap-button-free-spins/ap-button-free-spins.component';
import { ApButtonAutoSpinTimesComponent } from '../../components/ap-button-auto-spin-times/ap-button-auto-spin-times.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApIconBadgeComponent } from '../../../ap-components-lib/ap-icon-badge/ap-icon-badge.component';
import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { BottomPanelBase } from './bottom-panel-base';
import { PointerDownSoundDirective } from "../../shared/directives/pointer-down-sound/pointer-down-sound.directive";
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { AutoButtonModeType, AutoSpinOption, BottomPanelInterface, MenuItem, MenuItemId } from './bottom-panel-interface';
import { RsBetaCtrlService } from '../../services/rs-beta-ctrl/rs-beta-ctrl.service';
import { SoundService } from '../../services/sound-service/sound-service';
import { CampaignType } from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { dec } from '../../services/player-wallet/player-wallet.function';
import { CashDropService } from '../../services/cash-drop/cash-drop.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { ApSpinButtonComponent } from '../../components/ap-spin-button/ap-spin-button.component';
import { ClickOutsideDirective } from '../../shared/directives/click-out-side/click-out-side.directive';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { SpinButtonMode, isAutoSpinTimesButtonMode as isAutoSpinTimesMode } from '../../services/bottom-panel/spin-button.type';
import { ApIconCampaignCircleComponent } from '../../icons/ap-icon-campaign-circle/ap-icon-campaign-circle.component';
import { ApIconBuyFeatureCircleComponent } from '../../icons/ap-icon-buy-feature-circle/ap-icon-buy-feature-circle.component';
import { ApIconMusicCircleComponent } from '../../icons/ap-icon-music-circle/ap-icon-music-circle.component';
import { ApIconAutoplayCircleComponent } from '../../icons/ap-icon-autoplay-circle/ap-icon-autoplay-circle.component';
import { ApIconTurboCircleComponent } from '../../icons/ap-icon-turbo-circle/ap-icon-turbo-circle.component';
import { ApIconDecreaseBoxComponent } from '../../icons/ap-icon-decrease-box/ap-icon-decrease-box.component';
import { ApIconIncreaseBoxComponent } from '../../icons/ap-icon-increase-box/ap-icon-increase-box.component';
import { TopStatusBarComponent } from '../top-status-bar/top-status-bar.component';


@Component({
  selector: 'bottom-panel',
  standalone: true,
  imports: [CommonModule, ApIconComponent, ApToggleSwitchComponent,
    ApButtonFreeSpinsComponent, ApButtonAutoSpinTimesComponent, ApIconBadgeComponent, ApSpinButtonComponent,
    PointerDownSoundDirective, ClickOutsideDirective, MoneyTextPipe, ApIconCampaignCircleComponent,
    ApIconBuyFeatureCircleComponent, ApIconMusicCircleComponent, ApIconAutoplayCircleComponent,
    ApIconTurboCircleComponent, ApIconDecreaseBoxComponent, ApIconIncreaseBoxComponent, TopStatusBarComponent,
    TopStatusBarComponent
  ],
  templateUrl: './bottom-panel.component.html',
  styleUrl: './bottom-panel.component.css',
})
export class BottomPanelComponent extends BottomPanelBase implements BottomPanelInterface {
  private static readonly BALANCE_ANIMATION_MS = 80;
  private readonly api = inject(AppInterfaceService);
  private readonly panel = inject(BottomPanelService);
  private readonly campaign = inject(CampaignFacadeService);
  private readonly wallet = inject(PlayerWalletService);
  private readonly eventCenter = inject(EventCenterCtrlService);
  private readonly rs = inject(RsBetaCtrlService);
  private readonly cashDrop = inject(CashDropService);
  private readonly soundService = inject(SoundService);
  private readonly game = inject(GameIframeCtrlService);

  // =================== Balance/Bet/Win Labels ===================
  readonly getBalanceLabel = computed(() => this.isBonusWalletUsed() ?
    this.appI18n.instant('spin_area_bonus', 'BONUS') :
    this.appI18n.instant('spin_area_balance', 'BALANCE')
  );
  readonly getBetLabel = this.appI18n.computed('spin_area_bet', 'BET');
  readonly getWinLabel = this.appI18n.computed('spin_area_win', 'WIN');
  readonly getRemainingTurnoverLabel = this.appI18n.computed('promo_turnover_left', 'Remaining turnover');
  readonly replayStartTipLabel = signal<string | null>(null);
  readonly pressHintEnabled = input<boolean>(false);
  readonly pressHintType = input('blur');

  // =================== Balance/Bet/Win Value ===================
  readonly displayCurrency = computed(() => this.api.currencySymbol()); // 顯示的餘額、投注額、贏得金額等數值的貨幣符號
  private readonly animatedBalance = signal<number>(this.panel.balance());
  readonly displayBalance = computed<number>(() => this.animatedBalance());
  readonly displayBet = computed<number>(() => {
    if (this.rs.spinButtonMode()) return this.rs.displayBet();
    return this.panel.bet();
  });
  readonly displayWin = computed<number | null>(() => { return this.panel.win(); });

  // 跟Campaign相關的的數值由 campaign service 提供，因為它是屬於活動相關的資訊
  readonly displayRemainingTurnover = signal<number>(0);
  readonly displayEndTime = signal<string>('');
  // =================== 一般 Outputs ===================
  readonly spin = output<void>();
  readonly info = output<void>();
  readonly history = output<void>();

  // =================== 各種控制項的狀態 ===================
  readonly isSpinDisabled = computed(() => !this.game.isInteractionEnabled() || this.panel.isInGlobalCooldown());
  readonly isFastSpinDisabled = computed(() => this.globalCooldownTime() > 0);
  readonly isMenuOpen = signal(false);
  readonly isAutoplayMenuOpen = signal(false);
  readonly isMusicOn = signal(true);
  readonly isMusicAtAutoButtonOn = signal(true);
  readonly isSoundOn = signal(true);
  readonly isMenuDisabled = computed(() => this.panel.isBusy());
  /** 判斷 Buy Feature 按鈕是否變成取消按鈕 */
  readonly isFeatureCancelled = computed(() => {
    return this.panel.isDoubleChance() || this.wallet.campaignSetting() !== null;
  });
  /** 判斷 Buy Feature 按鈕是否禁用 */
  readonly isFeatureDisabled = computed(() => {
    if (this.panel.isBusy()) return true;
    if (this.isHoldingTurbo()) return true;
    else if (this.wallet.campaignSetting() !== null) {
      return false; // 如果是活動期間 強制打開
    }
    else if (this.wallet.isBuyFeatureDisabled()) {
      return true;
    }
    return false;
  });
  /** 判斷 Campaign 按鈕是否禁用 */
  readonly isCampaignDisabled = computed(() => {
    return this.panel.isBusy() ||
      this.panel.isDoubleChance() ||
      this.campaign.isRunning() ||
      this.isHoldingTurbo();
  });
  readonly isBonusWalletUsed = computed(() => this.panel.isFreeBonusRound() || this.panel.isFreeSpinRound());
  /** 判斷 Campaign 按鈕是否有紅點*/
  readonly campaignHasBadge = computed(() => this.campaign.haveNewGroup() || this.rs.hasNew() || this.cashDrop.hasNew());
  /** 判斷 Increase 按鈕是否禁用 */
  readonly isIncreaseDisabled = computed(() => {
    return this.panel.isBusy() || this.panel.isBetMax() || this.isHoldingTurbo();
  });
  /** 判斷 Decrease 按鈕是否禁用 */
  readonly isDecreaseDisabled = computed(() => {
    return this.panel.isBusy() || this.panel.isBetMin() || this.isHoldingTurbo();
  });
  /** 判斷 AutoPlay 按鈕是否禁用 */
  readonly isAutoPlayDisabled = computed(() => {
    return this.panel.isBusy() || this.isHoldingTurbo();
  })
  /** 判斷 Turbo 按鈕是否禁用 */
  readonly isTurboDisabled = computed(() => {
    return this.panel.isFeatureMode() || !this.game.isInteractionEnabled();
  })
  /** 判斷遊戲是否忙碌 */
  readonly isGameBusy = computed(() => this.panel.isBusy());
  /** Auto Spin 按鈕的 lighting effect 是否啟用；由 featureTransition 彈出視窗開啟時傳入的資料決定 */
  readonly autoSpinLightingEffectEnabled = computed(() => this.game.featureTransitionLightingEffectEnabled());
  readonly isBalanceHided = signal(false);
  readonly isBetHided = signal(false);
  readonly isWinHided = signal(false);
  readonly isClickToSpinTipEnabled = signal(false);
  readonly showRemainingTurnover = signal(false);

  /** 判斷 Exit 按鈕是否顯示 */
  readonly showExit = computed(() => this.session.backurl && this.session.backurl.length > 3);
  /** 每次 spin 觸發時遞增，供 ap-icon-spin-button 驅動切換動畫 */
  readonly spinCount = signal(0);
  /** 是否顯示Replay開始提示 */
  readonly showReplayStart = signal(false);
  /** 是否顯示Feature開始提示 */
  readonly showFeatureStart = signal(false);
  readonly showStatusbar = signal(true);

  /** =================== Hold for Turbo Spin 相關 =================== */
  /** Hold for Turbo Spin 功能是否啟用；任何遊戲彈出視窗或 App 內彈窗(Event Center、Promo/Campaign 訊息、餘額不足/離開確認等)開啟時都會中斷，需重新按住才能再次啟動 */
  readonly isHoldTurboEnabled = computed(() =>
    this.panel.holdTurboEnabled() &&
    !this.game.isInGamePopup() &&
    !this.eventCenter.isVisible() &&
    !this.campaign.popupMessageVisible() &&
    !this.panel.isMessagePopupVisible()
  );
  /** Hold for Turbo Spin 參數：長按門檻毫秒數 */
  readonly turboHoldThresholdMs = computed(() => this.panel.turboHoldThresholdMs());
  /** Hold for Turbo Spin 參數：連續觸發間隔毫秒數 */
  readonly turboSkipIntervalMs = computed(() => this.panel.turboSkipIntervalMs());
  /** Hold for Turbo Spin 參數：閒置提示延遲毫秒數 */
  readonly idleTooltipMs = computed(() => this.panel.idleTooltipMs());
  /** 是否正在長按 Turbo 按鈕 */
  readonly isHoldingTurbo = signal(false);
  /** Hold for Turbo Spin 期間，重複觸發 clickSpin() 的計時器 */
  private readonly stopHoldTurbo$ = new Subject<void>();

  // =================== Icon外觀 ===================
  readonly musicIcon = computed(() =>
    this.isMusicOn() ? 'musical-note' : 'musical-note pressed',
  );

  readonly soundIcon = computed(() =>
    this.isSoundOn() ? 'speaker-wave' : 'speaker-wave pressed',
  );

  readonly rsImgPath = computed(() => this.rs.iconPath());

  // =================== Menu 相關 ===================
  /** 定義選單圖示對應表 */
  readonly iconMap = computed<Record<MenuItemId, string>>(() => ({
    info: 'exclamation-circle',
    history: 'document-text',
    music: this.musicIcon(),
    sound: this.soundIcon(),
    exit: 'arrow-right-start-on-rectangle',
  }));
  /** 定義選單切換狀態對應表 */
  readonly toggleMap = computed<Record<MenuItemId, boolean>>(() => ({
    info: false,
    history: false,
    music: this.isMusicOn(),
    sound: this.isSoundOn(),
    exit: false,
  }));
  /** 定義選單項目 */
  readonly menuItems = computed<readonly MenuItem[]>(() => [
    ...(this.showExit() ? [{
      id: 'exit' as MenuItemId,
      label: this.appI18n.instant('exit', 'Exit'),
      action: this.clickExit.bind(this),
      hasToggle: false,
    }] : []),
    {
      id: 'info' as MenuItemId,
      label: this.appI18n.instant('info', 'Info'),
      action: this.clickInfo.bind(this),
      hasToggle: false,
    },
    {
      id: 'history' as MenuItemId,
      label: this.appI18n.instant('history', 'History'),
      action: this.clickHistory.bind(this),
      hasToggle: false,
    },
    {
      id: 'music' as MenuItemId,
      label: this.appI18n.instant('music', 'Music'),
      action: () => this.toggleMusic(),
      hasToggle: true,
    },
    {
      id: 'sound' as MenuItemId,
      label: this.appI18n.instant('sound', 'Sound'),
      action: () => this.toggleSound(),
      hasToggle: true,
    },
  ]);

  /** 自動旋轉選項 */
  private readonly autoplayOptionsSignal = computed<AutoSpinOption[]>(() => {
    const values = this.autoSpinOptions();
    return values.map((value) => ({
      label: value === Infinity ? '∞' : value.toString(),
      value: value,
      isInfinity: value === Infinity,
    }));
  });
  get autoplayOptions(): AutoSpinOption[] { return this.autoplayOptionsSignal(); }

  // =================== Spin Button 上面的數字 ===================
  readonly autoSpinTotal = computed(() => this.panel.autoSpinTotal());
  readonly autoSpinRemaining = computed(() => this.panel.autoSpinRemaining());
  readonly isAutoSpinInfinity = computed(() => this.autoSpinTotal() === Infinity);
  readonly featureTotal = computed(() => this.panel.featureTotal());
  readonly featureRemaining = computed(() => this.panel.featureRemaining());
  readonly freeSpinRemaining = signal<number>(0);
  readonly freeSpinTotal = signal<number>(0);

  // =================== SpinButton / AutoButton / Bar狀態 ===================
  readonly spinButtonMode = signal<SpinButtonMode>('default');
  /** 目前顯示的是否為 ap-button-auto-spin-times（外框比 ap-spin-button 小，繞圈特效需要放大） */
  readonly isAutoSpinTimesButtonMode = computed(() => isAutoSpinTimesMode(this.spinButtonMode()));
  readonly autoButtonMode = computed<AutoButtonModeType>(() => this.rs.isFreeGameMode() ? 'rs-free-game' : 'default');
  /** Global Cooldown的時間 (秒) */
  readonly globalCooldownTime = computed(() => this.panel.globalCooldownTime());
  constructor() {
    super();

    this.panel.debugSpinButtonMode$.subscribe(this.debugSpinButtonMode.bind(this));

    // 切換spinButtonMode狀態優先度:
    // feature-mode > free-bonus-auto-spin > free-bonus > free-spin > double-chance-auto-spin > double-chance > auto-spin > default
    effect(() => {
      if (this.panel.isFeatureMode()) {
        this.spinButtonMode.set('feature-mode');
        this.showFeatureStart.set(true);
      }
      else if (this.panel.isAutoSpinning() && this.panel.isFreeBonusRound()) {
        this.spinButtonMode.set('free-bonus-auto-spin');
      }
      else if (this.panel.isFreeBonusRound()) {
        this.spinButtonMode.set('free-bonus');
      }
      else if (this.panel.isFreeSpinRound()) {
        this.spinButtonMode.set('free-spin');
      }
      else if (this.panel.isAutoSpinning() && this.panel.isDoubleChance()) {
        this.spinButtonMode.set('double-chance-auto-spin');
      }
      else if (this.panel.isDoubleChance()) {
        this.spinButtonMode.set('double-chance');
      }
      else if (this.panel.isAutoSpinning()) {
        this.spinButtonMode.set('auto-spin');
      }
      else {
        this.spinButtonMode.set('default');
      }
    });

    // 當遊戲的Feature Mode狀態更新時，因為玩家已經在執行Feature Mode了，不需要再提示Press To Start
    this.game.featureModeUpdated$.subscribe(() => {
      this.showFeatureStart.set(false);
    });

    // 處理Campaign相關的數值顯示邏輯
    this.campaign.activatedCampaign$.subscribe(this.onActivatedCampaign.bind(this));
    this.campaign.requiredTurnover$.subscribe((message) => { this.onActivatedCampaign(message.campaignList[0]); });
    this.api.spinRequest$.subscribe(() => {
      // 每次spin remaining都要-1
      this.freeSpinRemaining.update(current => current - 1);
      // 如果是freeBonus的活動，每次spin都要讓remainingTurnover減去realBet
      const nextTurover = new Decimal(this.displayRemainingTurnover()).sub(this.wallet.realBet()).toNumber();
      this.displayRemainingTurnover.update(current => nextTurover >= 0 ? nextTurover : 0);
    });

    /* 處理餘額動畫 */
    effect((onCleanup) => {
      const nextBalance = this.panel.balance();
      const currentBalance = this.animatedBalance();

      if (currentBalance === 0 || Math.abs(nextBalance - currentBalance) < 0.001) {
        this.animatedBalance.set(nextBalance);
        return;
      }

      const startValue = currentBalance;
      const startedAt = performance.now();
      let frameId = 0;

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / BottomPanelComponent.BALANCE_ANIMATION_MS);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        this.animatedBalance.set(this.roundBalance(startValue + (nextBalance - startValue) * easedProgress));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          this.animatedBalance.set(nextBalance);
        }
      };

      frameId = requestAnimationFrame(tick);
      onCleanup(() => cancelAnimationFrame(frameId));
    });

    // 處理玩家是否按住遊戲畫面觸發Turbo
    this.game.isPressHolding$.subscribe((message) => {
      this.stopHoldTurbo$.next();
      // 目前只有autoSpin才能用遊戲畫面觸發Turbo
      if (this.isHoldTurboEnabled() && this.panel.isAutoSpinning()) {
        this.toggleHoldTurbo(message.holding);
      }
    });

    // 當Global Cooldown開始時，更新cooldown動畫
    this.panel.globalCooldownStarted$.subscribe(() => {
      this.triggerCooldownAnimation();
    });

    // 觸發旋轉動畫
    this.game.startSpinning$.subscribe(() => {
      this.spinCount.update(v => v + 1);
    });
  }

  debugSpinButtonMode(mode: SpinButtonMode): void {
    this.spinButtonMode.set(mode);
  }

  private roundBalance(value: number): number {
    const precision = Math.pow(10, dec.decimalPlaces);
    return Math.round(value * precision) / precision;
  }

  /** 
   * 啟動（或重新啟動）3 秒外圈動畫。呼叫時即使前一輪動畫還沒跑完也會強制重播 
   */
  triggerCooldownAnimation(): void {
    this.spinCooldownTick.update((tick) => tick + 1);
  }

  // =================== 各種點擊事件處理 ===================
  clickInfo(): void {
    this.info.emit()
    this.isMenuOpen.set(false);
  }

  clickHistory(): void {
    this.history.emit();
    this.isMenuOpen.set(false);
  }

  clickExit(): void {
    this.panel.sendExitRequest();
  }

  /** 切換音樂狀態 */
  toggleMusic(): void {
    this.isMusicOn.update((current) => {
      const newState = !current;
      return newState;
    });
    this.panel.enableMusic(this.isMusicOn());
  }

  /** 切換聲音狀態 */
  toggleSound(): void {
    this.isSoundOn.update((current) => !current);
    const soundOn = this.isSoundOn();
    this.panel.enableSound(soundOn);
    this.soundService.setMuted(!soundOn);
  }

  /** 處理 Spin 按鈕點擊事件 */
  clickSpin(): void {
    // 所以只有在遊戲不忙的時候才撥放點擊音效, 遊戲忙碌時是觸發急停功能
    if (!this.isGameBusy()) this.soundService.playClick();

    this.spin.emit();
    this.panel.spin();
  }

  clickCampaignSpin(): void {
    if (this.campaign.isFreeSpinRunning()) {
      if (this.panel.isAutoSpinning()) {
        this.panel.stopAutoSpin();
      }
      else {
        this.panel.spin();
      }
    }
    else if (this.campaign.isFreeBonusRunning()) {
      this.panel.spin();
    }
  }

  clickTurbo(): void {
    const speed = this.updateTurboState();
    this.panel.setGameSpeed(speed);
  }

  clickFeature(): void {
    if (this.panel.isDoubleChance()) {
      this.panel.stopDoubleChance();
    }
    else if (this.campaign.currentCampaign()) {
      this.campaign.setCurrentId(null);
    }
    else {
      this.eventCenter.open('buy-feature');
    }
  }

  clickFeatureCancel(): void {
    if (this.panel.isDoubleChance()) {
      this.panel.stopDoubleChance();
    }
    else if (this.wallet.campaignSetting()) {
      this.campaign.setCurrentId(null);
    }
  }

  clickCampaign(): void {
    this.eventCenter.open('campaign');
  }

  toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  clickAutoplay(): void {
    if (this.campaign.isFreeSpinRunning()) {
      this.panel.startAutoSpin(this.campaign.currentCampaign()?.progressRemaining || 0);
    }
    else {
      this.isAutoplayMenuOpen.update((open) => !open);
    }
  }

  closeAutoplayMenu(): void {
    this.isAutoplayMenuOpen.set(false);
  }

  clickAutoplayOption(value: number): void {
    this.closeAutoplayMenu();
    this.panel.startAutoSpin(value);
  }

  clickStopAutoSpin(): void {
    this.panel.stopAutoSpin();
  }

  clickFeatureSpin(): void {
    this.panel.immediatelyStop();
  }

  clickIncreaseBet(): void {
    this.panel.increaseBet();
  }

  clickDecreaseBet(): void {
    this.panel.decreaseBet();
  }

  /** 關閉自動旋轉選單 */
  @HostListener('window:blur')
  onWindowBlur(): void {
    this.isAutoplayMenuOpen.set(false);
    this.isMenuOpen.set(false);
  }

  toggleMusicAtAutoButton() {
    // 平常的panel不會有這個功能，只有在Replays模式才會有
  }

  toggleHoldTurbo(enable: boolean): void {
    this.isHoldingTurbo.set(enable);
    // 先停止先前的計時器: 啟用時避免重複建立, 停用時取消自動觸發 clickSpin()
    this.stopHoldTurbo$.next();
    if (enable) {
      // 啟用Hold Turbo功能, 每turboSkipIntervalMs觸發一次 clickSpin()
      interval(this.turboSkipIntervalMs())
        .pipe(
          takeUntil(this.stopHoldTurbo$),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(() => {
          if (this.panel.isBalanceInsufficient()) {
            return;
          }
          this.clickSpin();
        });
    }
  }

  // =================== 其他功能函式 ===================
  protected onActivatedCampaign(campaign: CampaignType | null): void {
    if (!campaign) {
      this.showRemainingTurnover.set(false);
    }
    else if (campaign.displayType === 'freeBonus') {
      this.showRemainingTurnover.set(true);
      this.displayRemainingTurnover.set(campaign.progressRemaining || 0);
      this.displayEndTime.set(new Date(campaign.endTime).toLocaleString(this.session.locale, { hour12: false }));
    }
    else if (campaign.displayType === 'freeSpins') {
      this.freeSpinTotal.set(campaign.progressTotal || 0);
      this.freeSpinRemaining.set(campaign.progressRemaining || 0);
    }
  }
}
