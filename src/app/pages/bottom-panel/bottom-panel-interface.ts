import { Input, InputSignal, signal, Signal } from '@angular/core';
import { SpinButtonMode } from '../../services/bottom-panel/spin-button.type';

export type MenuItemId = 'exit' | 'info' | 'history' | 'music' | 'sound';

export interface MenuItem {
  readonly id: MenuItemId;
  readonly label: string;
  readonly action: () => void;
  readonly hasToggle: boolean;
}

export interface AutoSpinOption {
  label: string;
  value: number;
  isInfinity: boolean;
}

export type AutoButtonModeType = 'default' | 'music-toggle' | 'rs-free-game';
export interface BottomPanelInterface {

  // ── Mode / State ──────────────────────────────────────────────
  spinButtonMode: Signal<SpinButtonMode> | InputSignal<SpinButtonMode>;
  isAutoSpinTimesButtonMode: Signal<boolean>;
  autoButtonMode: Signal<AutoButtonModeType>;

  // ── Spin Button value ─────────────────────────────────────────────────
  autoSpinTotal: Signal<number | null>;
  autoSpinRemaining: Signal<number | null>;
  featureTotal: Signal<number | null> | InputSignal<number>;
  featureRemaining: Signal<number | null> | InputSignal<number>;
  freeSpinRemaining: Signal<number | null>;
  freeSpinTotal: Signal<number | null>;

  // ── Icons ─────────────────────────────────────────────────────
  rsImgPath: Signal<string>;

  // ── Disabled States ───────────────────────────────────────────
  isSpinDisabled: Signal<boolean>;
  isAutoSpinInfinity: Signal<boolean>;
  isCampaignDisabled: Signal<boolean>;
  isFeatureDisabled: Signal<boolean>;
  isDecreaseDisabled: Signal<boolean>;
  isIncreaseDisabled: Signal<boolean>;
  isAutoPlayDisabled: Signal<boolean>;
  isMenuDisabled: Signal<boolean>;
  isMusicAtAutoButtonOn: Signal<boolean>;
  isBalanceHided: Signal<boolean>;
  isBetHided: Signal<boolean>;
  isWinHided: Signal<boolean>;
  isBonusWalletUsed: Signal<boolean>;
  isGameBusy: Signal<boolean>;
  isHoldTurboEnabled: Signal<boolean>;
  isFeatureCancelled: Signal<boolean>
  isClickToSpinTipEnabled: Signal<boolean>;
  autoSpinLightingEffectEnabled: Signal<boolean>;
  spinCount: Signal<number>;
  showRemainingTurnover: Signal<boolean>;
  showReplayStart: Signal<boolean>;
  showFeatureStart: Signal<boolean>;

  // ── Badge ─────────────────────────────────────────────────────
  campaignHasBadge: Signal<boolean>;

  // ── Menu / Autoplay ───────────────────────────────────────────
  isMenuOpen: Signal<boolean>;
  isAutoplayMenuOpen: Signal<boolean>;
  iconMap: Signal<Record<MenuItemId, string>>;
  toggleMap: Signal<Record<MenuItemId, boolean>>;
  menuItems: Signal<readonly MenuItem[]>;
  autoplayOptions: AutoSpinOption[];

  // ── Display Values ────────────────────────────────────────────
  displayCurrency: Signal<string | undefined> | InputSignal<string>;
  displayBalance: Signal<number> | InputSignal<number>;
  displayBet: Signal<number> | InputSignal<number>;
  displayWin: Signal<number | null> | InputSignal<number>;
  displayRemainingTurnover: Signal<number>;
  displayEndTime: Signal<string>;

  // ── Labels, Strings ────────────────────────────────────────────────────
  getBalanceLabel: Signal<string>;
  getBetLabel: Signal<string>;
  getWinLabel: Signal<string>;
  getRemainingTurnoverLabel: Signal<string>;

  // ── Event Handlers ────────────────────────────────────────────
  clickSpin(): void;
  clickCampaignSpin(): void;
  clickStopAutoSpin(): void;
  clickFeatureSpin(): void;
  clickCampaign(): void;
  clickFeature(): void;
  clickDecreaseBet(): void;
  clickIncreaseBet(): void;
  clickAutoplay(): void;
  closeAutoplayMenu(): void;
  clickAutoplayOption(value: number): void;
  clickTurbo(): void;
  toggleMenu(event: MouseEvent): void;
  closeMenu(): void;
  toggleMusicAtAutoButton(): void;
  toggleHoldTurbo(enable: boolean): void;
}