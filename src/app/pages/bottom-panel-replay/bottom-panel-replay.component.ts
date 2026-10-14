import { Component, computed, inject, input, output, signal, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApSpinButtonComponent } from '../../components/ap-spin-button/ap-spin-button.component';
import { ApIconBadgeComponent } from '../../../ap-components-lib/ap-icon-badge/ap-icon-badge.component';
import { ApButtonFreeSpinsComponent } from '../../components/ap-button-free-spins/ap-button-free-spins.component';
import { ApButtonAutoSpinTimesComponent } from '../../components/ap-button-auto-spin-times/ap-button-auto-spin-times.component';
import { BottomPanelBase } from '../bottom-panel/bottom-panel-base';
import { AutoSpinOption, BottomPanelInterface, MenuItem, MenuItemId, } from '../bottom-panel/bottom-panel-interface';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { SoundService } from '../../services/sound-service/sound-service';
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
  selector: 'bottom-panel-replay',
  standalone: true,
  imports: [
    CommonModule,
    ApIconComponent,
    ApButtonFreeSpinsComponent,
    ApButtonAutoSpinTimesComponent,
    ApIconBadgeComponent,
    ApSpinButtonComponent,
    ApToggleSwitchComponent,
    MoneyTextPipe,
    ApIconCampaignCircleComponent,
    ApIconBuyFeatureCircleComponent,
    ApIconMusicCircleComponent,
    ApIconAutoplayCircleComponent,
    ApIconTurboCircleComponent,
    ApIconDecreaseBoxComponent,
    ApIconIncreaseBoxComponent,
    TopStatusBarComponent,
  ],
  /** 請注意, bottom-panel-replay 使用 bottom-panel 的模板 這樣做是為了確保 replay 中的面板外觀和正式的 bottom-panel 完全一致。
   * 請記得implement BottomPanelInterface 中的所有屬性和方法，否則可能會導致模板中使用這些屬性或方法的部分無法正常工作。
   */
  templateUrl: '../bottom-panel/bottom-panel.component.html',
  styleUrl: '../bottom-panel/bottom-panel.component.css',
})
export class BottomPanelReplayComponent extends BottomPanelBase implements BottomPanelInterface {
  private readonly soundService = inject(SoundService);
  displayCurrency = input<string>('$');
  displayBet = input<number>(0);
  displayWin = input<number>(0);
  /* 觸發特效 */
  pressHintEnabled = model<boolean>(true);
  pressHintType = input('blur')
  musicPressedChange = output<boolean>();
  turboStateChange = output<number>();
  spin = output<void>();

  autoButtonMode = signal<'default' | 'music-toggle' | 'rs-free-game'>(
    'music-toggle',
  );
  isAutoSpinInfinity = signal(false);
  isFeatureCancelled = signal(false);
  rsImgPath = signal('');
  isCampaignDisabled = signal(true);
  isBonusWalletUsed = signal(false);
  isFeatureDisabled = signal(true);
  isDecreaseDisabled = signal(true);
  isIncreaseDisabled = signal(true);
  isMenuDisabled = signal(true);
  isMusicAtAutoButtonOn = signal(true);
  campaignHasBadge = signal(false);
  isMenuOpen = signal(false);
  isAutoplayMenuOpen = signal(false);
  isClickToSpinTipEnabled = signal(true);
  autoSpinLightingEffectEnabled = input<boolean>(true);
  iconMap = signal({} as Record<MenuItemId, string>);
  toggleMap = signal({} as Record<MenuItemId, boolean>);
  menuItems = signal<MenuItem[]>([]);
  autoplayOptions: AutoSpinOption[] = [];
  spinCount = signal(0);

  displayBalance = signal<number>(0);
  isGameBusy = input(false);
  /** Replay 模式不啟用 Hold for Turbo Spin */
  isHoldTurboEnabled = signal(false);
  /** Replay 模式固定使用預設長按門檻毫秒數 */
  turboHoldThresholdMs = signal(500);
  /** Replay 模式固定使用預設Turbo間隔毫秒數 */
  turboSkipIntervalMs = signal(500);
  /** Replay 模式固定使用預設閒置提示毫秒數 */
  idleTooltipMs = signal(500);
  /** 是否正在長按 Turbo 按鈕 */
  readonly isHoldingTurbo = signal(false);
  isBalanceHided = signal(true);
  isBetHided = signal(false);
  isWinHided = signal(false);

  // Campaign 額外欄位
  readonly getRemainingTurnoverLabel = signal('Remaining turnover');
  readonly displayRemainingTurnover = signal<number>(0);
  readonly displayEndTime = signal<string>('2024/12/31 23:59:59');
  readonly showRemainingTurnover = signal(false);
  /** 是否顯示Replay開始提示 */
  readonly showReplayStart = signal(true);
  /** 是否顯示Feature開始提示 */
  readonly showFeatureStart = signal(false);

  readonly getBalanceLabel = this.appI18n.computed(
    'spin_area_balance',
    'BALANCE',
  );
  readonly getBetLabel = this.appI18n.computed('spin_area_bet', 'BET');
  readonly getWinLabel = this.appI18n.computed('spin_area_win', 'WIN');

  readonly isSpinDisabled = signal(false);
  readonly isFastSpinDisabled = signal(false);
  readonly isAutoPlayDisabled = computed(() => true);
  readonly isTurboDisabled = input(false);
  readonly autoSpinTotal = signal<number>(0);
  readonly autoSpinRemaining = signal<number>(0);
  readonly freeSpinRemaining = signal<number>(0);
  readonly freeSpinTotal = signal<number>(0);

  readonly featureTotal = input<number>(0);
  readonly featureRemaining = input<number>(0);
  readonly spinButtonMode = input<SpinButtonMode>('default');
  /** 目前顯示的是否為 ap-button-auto-spin-times（外框比 ap-spin-button 小，繞圈特效需要放大） */
  readonly isAutoSpinTimesButtonMode = computed(() => isAutoSpinTimesMode(this.spinButtonMode()));
  /** Global Cooldown的時間 (秒) */
  readonly globalCooldownTime = signal(0);
  readonly musicIcon = computed(() =>
    this.isMusicAtAutoButtonOn() ? 'music' : 'music pressed',
  );


  turnOnFeatureStart(): void {
    this.showFeatureStart.set(true);
  }

  turnOffFeatureStart(): void {
    this.showFeatureStart.set(false);
  }

  resetReplayStart(): void {
    this.showReplayStart.set(true);
  }

  clickSpin(): void {
    // 所以只有在遊戲不忙的時候才撥放點擊音效, 遊戲忙碌時是觸發急停功能
    if (!this.isGameBusy()) this.soundService.playClick();

    this.showReplayStart.set(false);
    this.spin.emit();
  }

  clickFeatureSpin(): void {
    this.spin.emit();
  }

  clickTurbo(): void {
    const speed = this.updateTurboState();
    this.turboStateChange.emit(speed);
  }

  toggleMusicAtAutoButton(): void {
    this.musicPressedChange.emit(this.isMusicAtAutoButtonOn());
    this.isMusicAtAutoButtonOn.update((current) => !current);
    this.soundService.setMuted(!this.isMusicAtAutoButtonOn());
  }

  // 其他沒用到的方法
  clickCampaignSpin(): void { }

  clickStopAutoSpin(): void { }

  clickCampaign(): void { }
  clickFeature(): void { }
  clickDecreaseBet(): void { }
  clickIncreaseBet(): void { }
  clickAutoplay(): void { }
  closeAutoplayMenu(): void { }
  clickAutoplayOption(value: number): void { }
  toggleMenu(event: MouseEvent): void { }
  closeMenu(): void { }
  toggleHoldTurbo(enable: boolean): void {}
}
