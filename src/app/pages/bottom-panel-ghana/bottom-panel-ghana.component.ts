import { Component, HostListener, computed, effect, inject, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconBadgeComponent } from '../../../ap-components-lib/ap-icon-badge/ap-icon-badge.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { PointerDownSoundDirective } from '../../shared/directives/pointer-down-sound/pointer-down-sound.directive';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { BottomPanelBase } from '../bottom-panel/bottom-panel-base';
import { LAYOUT_CONFIG } from '../bottom-panel/bottom-panel-constants';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { SoundService } from '../../services/sound-service/sound-service';
import { MenuItem, MenuItemId } from '../bottom-panel/bottom-panel-interface';
import { dec } from '../../services/player-wallet/player-wallet.function';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { ApSpinButtonComponent } from '../../components/ap-spin-button/ap-spin-button.component';
import { ApIconDecreaseBoxComponent } from "../../icons/ap-icon-decrease-box/ap-icon-decrease-box.component";
import { ApIconIncreaseBoxComponent } from "../../icons/ap-icon-increase-box/ap-icon-increase-box.component";

@Component({
  selector: 'bottom-panel-ghana',
  standalone: true,
  imports: [CommonModule, ApIconBadgeComponent, ApSpinButtonComponent, ApIconComponent, ApToggleSwitchComponent,
    PointerDownSoundDirective, MoneyTextPipe, ApIconDecreaseBoxComponent, ApIconIncreaseBoxComponent,
  ],
  templateUrl: './bottom-panel-ghana.component.html',
  styleUrl: './bottom-panel-ghana.component.css',
})
export class BottomPanelGhanaComponent extends BottomPanelBase {
  private static readonly BALANCE_ANIMATION_MS = 80;
  private static readonly FAST_SPIN_COOLDOWN_MS = 1200;


  private readonly api = inject(AppInterfaceService);
  private readonly panel = inject(BottomPanelService);
  private readonly soundService = inject(SoundService);
  private readonly game = inject(GameIframeCtrlService);

  // 強制layout設定
  override isMobile = computed(() => true);
  protected override forcedPortrait = computed(() => true);
  protected override isLandscape = computed(() => false);
  protected override isPortrait = computed(() => true);

  readonly getBalanceLabel = this.appI18n.computed('spin_area_balance', 'BALANCE');
  readonly getBetLabel = this.appI18n.computed('spin_area_stake', 'STAKE');
  readonly getWinLabel = this.appI18n.computed('spin_area_win', 'WIN');

  readonly isDecreaseDisabled = computed(() => this.panel.isBusy() || this.panel.isBetMin());
  readonly isIncreaseDisabled = computed(() => this.panel.isBusy() || this.panel.isBetMax());
  readonly spin = output<void>();
  readonly info = output<void>();
  readonly history = output<void>();

  readonly isSpinDisabled = signal(false);
  readonly isGameBusy = computed(() => this.panel.isBusy());
  /** Hold for Turbo Spin 功能是否啟用；任何遊戲彈出視窗或 App 內彈窗(餘額不足/離開確認等)開啟時都會中斷，需重新按住才能再次啟動 */
  readonly isHoldTurboEnabled = computed(() =>
    this.panel.holdTurboEnabled() &&
    !this.game.isInGamePopup() &&
    !this.panel.isMessagePopupVisible()
  );
  readonly turboHoldThresholdMs = computed(() => this.panel.turboHoldThresholdMs());
  readonly turboSkipIntervalMs = computed(() => this.panel.turboSkipIntervalMs());
  readonly idleTooltipMs = computed(() => this.panel.idleTooltipMs());
  readonly isMenuOpen = signal(false);
  readonly isMenuDisabled = computed(() => this.panel.isBusy());
  readonly isMusicOn = signal(true);
  readonly isSoundOn = signal(true);
  readonly spinCount = signal(0);

  readonly borderSize = computed(() => `${0.1 * this.scale()}rem`);
  readonly menuButtonSize = computed(() => `${1.6 * this.scale()}rem`);
  readonly displayCurrency = computed(() => this.api.currencySymbol() ?? '');
  private readonly animatedBalance = signal<number>(this.panel.balance());
  readonly displayBalance = computed(() => this.animatedBalance());
  readonly displayBet = computed(() => this.panel.bet());
  readonly displayWin = computed(() => this.panel.win());

  readonly musicIcon = computed(() =>
    this.isMusicOn() ? 'musical-note' : 'musical-note pressed',
  );

  readonly soundIcon = computed(() =>
    this.isSoundOn() ? 'speaker-wave' : 'speaker-wave pressed',
  );

  readonly iconMap = computed<Record<MenuItemId, string>>(() => ({
    info: 'exclamation-circle',
    history: 'document-text',
    music: this.musicIcon(),
    sound: this.soundIcon(),
    exit: 'arrow-right-start-on-rectangle',
  }));

  readonly toggleMap = computed<Record<MenuItemId, boolean>>(() => ({
    info: false,
    history: false,
    music: this.isMusicOn(),
    sound: this.isSoundOn(),
    exit: false,
  }));

  readonly showExit = computed(() => !!(this.session.backurl && this.session.backurl.length > 3));

  readonly menuItems = computed<readonly MenuItem[]>(() => [
    ...(this.showExit()
      ? [{
        id: 'exit' as MenuItemId,
        label: this.appI18n.instant('exit', 'Exit'),
        action: this.clickExit.bind(this),
        hasToggle: false,
      }]
      : []),
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
      action: this.toggleMusic.bind(this),
      hasToggle: true,
    },
    {
      id: 'sound' as MenuItemId,
      label: this.appI18n.instant('sound', 'Sound'),
      action: this.toggleSound.bind(this),
      hasToggle: true,
    },
  ]);

  constructor() {
    super();

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
        const progress = Math.min(1, (now - startedAt) / BottomPanelGhanaComponent.BALANCE_ANIMATION_MS);
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

    // 處理快速旋轉動畫的觸發邏輯
    this.game.startSpinning$.subscribe(() => this.spinCount.update(v => v + 1));
  }

  private roundBalance(value: number): number {
    const precision = Math.pow(10, dec.decimalPlaces);
    return Math.round(value * precision) / precision;
  }
  /* force isMobile */
  protected override applyHorizontalLayout(parent: DOMRectReadOnly, heightRatio: number): void {
    const gameHeight = parent.height;
    const gameWidth = gameHeight * LAYOUT_CONFIG.GAME_RATIO;

    if (this.forcedPortrait()) {
      this.hostWidth.set(gameWidth);
      this.hostHeight.set(gameHeight * LAYOUT_CONFIG.PANEL_PORTRAIT_RATIO);
      this.layoutMode.set('portrait');
      this.hostLeft.set((parent.width - gameWidth) / 2);
      this.hostBottom.set(0);

      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      this.scale.set((this.hostHeight() / rootFontSize / 18) * 1.6);
      return;
    }

    super.applyHorizontalLayout(parent, heightRatio);
  }

  clickSpin(): void {
    this.spin.emit();
    this.panel.spin();
  }

  /**
   * Hold for Turbo Spin: 按住旋轉按鈕達門檻秒數後，由 ap-spin-button 每 0.5 秒觸發一次。
   * 遊戲忙碌時急停跳過動畫；回合已結束時自動觸發下一次 spin，直到玩家放開按鈕。
   */
  clickSpinHold(): void {
    // 餘額不足時不重複觸發 spin，避免每 0.5 秒重複跳出餘額不足提示
    if (this.panel.isBalanceInsufficient()) return;
    this.clickSpin();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  clickInfo(): void {
    this.info.emit();
    this.closeMenu();
  }

  clickHistory(): void {
    this.history.emit();
    this.closeMenu();
  }
  clickDecreaseBet(): void {
    this.panel.decreaseBet();
  }
  clickIncreaseBet(): void {
    this.panel.increaseBet();
  }

  clickExit(): void {
    this.closeMenu();
    this.panel.sendExitRequest();
  }

  toggleMusic(): void {
    this.isMusicOn.update((current) => !current);
    this.panel.enableMusic(this.isMusicOn());
  }

  toggleSound(): void {
    this.isSoundOn.update((current) => !current);
    const soundOn = this.isSoundOn();
    this.panel.enableSound(soundOn);
    this.soundService.setMuted(!soundOn);
  }

  @HostListener('window:blur')
  onWindowBlur(): void {
    this.closeMenu();
  }
}
