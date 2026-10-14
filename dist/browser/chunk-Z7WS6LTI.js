import {
  BottomPanelPopupComponent,
  HistoryListComponent,
  InfoComponent
} from "./chunk-HAJJI7JE.js";
import {
  ApUiDeviceRotationComponent
} from "./chunk-L3FTOYHQ.js";
import "./chunk-2CCP266M.js";
import "./chunk-S5BUS6WA.js";
import "./chunk-W2PA37WH.js";
import "./chunk-WKKSI4JZ.js";
import "./chunk-M7JP5DRR.js";
import "./chunk-V4GGUMNZ.js";
import "./chunk-JGNZAH3T.js";
import {
  ApSpinButtonComponent,
  BottomPanelBase,
  LAYOUT_CONFIG
} from "./chunk-GORS6YCV.js";
import "./chunk-6H5XA62D.js";
import {
  GameIframeComponent
} from "./chunk-BTFWV2DH.js";
import "./chunk-DODGKEVZ.js";
import "./chunk-MMAYEOJZ.js";
import {
  ApIconBadgeComponent,
  ApIconDecreaseBoxComponent,
  ApIconIncreaseBoxComponent
} from "./chunk-XYMPOXOA.js";
import {
  RouterCtrlService
} from "./chunk-57FVUZ33.js";
import "./chunk-3FMKOJKK.js";
import "./chunk-COCIR4RJ.js";
import "./chunk-7GQKM4M3.js";
import "./chunk-HUKCMLYY.js";
import {
  PointerDownSoundDirective
} from "./chunk-JHJKX6RD.js";
import "./chunk-AYE6H5VR.js";
import {
  MoneyTextPipe
} from "./chunk-U7TK2FIU.js";
import {
  SoundService
} from "./chunk-FCZ4RVMP.js";
import {
  BottomPanelService
} from "./chunk-MQEPEO5W.js";
import {
  PlayerWalletService
} from "./chunk-5GFZDTRR.js";
import "./chunk-YG42UXQC.js";
import {
  GameIframeCtrlService
} from "./chunk-OW6577YR.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import "./chunk-EOSIRHLO.js";
import "./chunk-MLWU5HFS.js";
import {
  ApToggleSwitchComponent
} from "./chunk-MKS37EB3.js";
import "./chunk-VX4L3GZI.js";
import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  AppInterfaceService
} from "./chunk-TLQLKLDD.js";
import {
  dec
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService,
  environment
} from "./chunk-54ITVL2G.js";
import {
  CommonModule,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  HostListener,
  computed,
  effect,
  inject,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/app/pages/bottom-panel-ghana/bottom-panel-ghana.component.ts
var _c0 = (a0) => ({ "cursor-pointer hover:scale-105 transition-transform active:scale-95 animate-infinite animate-duration-1500": a0 });
var _forTrack0 = ($index, $item) => $item.id;
function BottomPanelGhanaComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function BottomPanelGhanaComponent_Conditional_25_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-toggle-switch", 32);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("accentColor", "yellow")("checked", ctx_r1.toggleMap()[item_r4.id]);
  }
}
function BottomPanelGhanaComponent_Conditional_25_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function BottomPanelGhanaComponent_Conditional_25_For_4_Template_div_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(item_r4.action());
    });
    \u0275\u0275element(1, "ap-icon", 30);
    \u0275\u0275elementStart(2, "h3", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BottomPanelGhanaComponent_Conditional_25_For_4_Conditional_4_Template, 1, 2, "ap-toggle-switch", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.iconMap()[item_r4.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.hasToggle ? 4 : -1);
  }
}
function BottomPanelGhanaComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function BottomPanelGhanaComponent_Conditional_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 26)(2, "div", 27);
    \u0275\u0275repeaterCreate(3, BottomPanelGhanaComponent_Conditional_25_For_4_Template, 5, 3, "div", 28, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-bottom", ctx_r1.menuOffset());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.menuItems());
  }
}
function BottomPanelGhanaComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.displayWin()), " ");
  }
}
var BottomPanelGhanaComponent = class _BottomPanelGhanaComponent extends BottomPanelBase {
  static BALANCE_ANIMATION_MS = 80;
  static FAST_SPIN_COOLDOWN_MS = 1200;
  api = inject(AppInterfaceService);
  panel = inject(BottomPanelService);
  soundService = inject(SoundService);
  game = inject(GameIframeCtrlService);
  // 強制layout設定
  isMobile = computed(() => true);
  forcedPortrait = computed(() => true);
  isLandscape = computed(() => false);
  isPortrait = computed(() => true);
  getBalanceLabel = this.appI18n.computed("spin_area_balance", "BALANCE");
  getBetLabel = this.appI18n.computed("spin_area_stake", "STAKE");
  getWinLabel = this.appI18n.computed("spin_area_win", "WIN");
  isDecreaseDisabled = computed(() => this.panel.isBusy() || this.panel.isBetMin());
  isIncreaseDisabled = computed(() => this.panel.isBusy() || this.panel.isBetMax());
  spin = output();
  info = output();
  history = output();
  isSpinDisabled = signal(false);
  isGameBusy = computed(() => this.panel.isBusy());
  /** Hold for Turbo Spin 功能是否啟用；任何遊戲彈出視窗或 App 內彈窗(餘額不足/離開確認等)開啟時都會中斷，需重新按住才能再次啟動 */
  isHoldTurboEnabled = computed(() => this.panel.holdTurboEnabled() && !this.game.isInGamePopup() && !this.panel.isMessagePopupVisible());
  turboHoldThresholdMs = computed(() => this.panel.turboHoldThresholdMs());
  turboSkipIntervalMs = computed(() => this.panel.turboSkipIntervalMs());
  idleTooltipMs = computed(() => this.panel.idleTooltipMs());
  isMenuOpen = signal(false);
  isMenuDisabled = computed(() => this.panel.isBusy());
  isMusicOn = signal(true);
  isSoundOn = signal(true);
  spinCount = signal(0);
  borderSize = computed(() => `${0.1 * this.scale()}rem`);
  menuButtonSize = computed(() => `${1.6 * this.scale()}rem`);
  displayCurrency = computed(() => this.api.currencySymbol() ?? "");
  animatedBalance = signal(this.panel.balance());
  displayBalance = computed(() => this.animatedBalance());
  displayBet = computed(() => this.panel.bet());
  displayWin = computed(() => this.panel.win());
  musicIcon = computed(() => this.isMusicOn() ? "musical-note" : "musical-note pressed");
  soundIcon = computed(() => this.isSoundOn() ? "speaker-wave" : "speaker-wave pressed");
  iconMap = computed(() => ({
    info: "exclamation-circle",
    history: "document-text",
    music: this.musicIcon(),
    sound: this.soundIcon(),
    exit: "arrow-right-start-on-rectangle"
  }));
  toggleMap = computed(() => ({
    info: false,
    history: false,
    music: this.isMusicOn(),
    sound: this.isSoundOn(),
    exit: false
  }));
  showExit = computed(() => !!(this.session.backurl && this.session.backurl.length > 3));
  menuItems = computed(() => [
    ...this.showExit() ? [{
      id: "exit",
      label: this.appI18n.instant("exit", "Exit"),
      action: this.clickExit.bind(this),
      hasToggle: false
    }] : [],
    {
      id: "info",
      label: this.appI18n.instant("info", "Info"),
      action: this.clickInfo.bind(this),
      hasToggle: false
    },
    {
      id: "history",
      label: this.appI18n.instant("history", "History"),
      action: this.clickHistory.bind(this),
      hasToggle: false
    },
    {
      id: "music",
      label: this.appI18n.instant("music", "Music"),
      action: this.toggleMusic.bind(this),
      hasToggle: true
    },
    {
      id: "sound",
      label: this.appI18n.instant("sound", "Sound"),
      action: this.toggleSound.bind(this),
      hasToggle: true
    }
  ]);
  constructor() {
    super();
    effect((onCleanup) => {
      const nextBalance = this.panel.balance();
      const currentBalance = this.animatedBalance();
      if (currentBalance === 0 || Math.abs(nextBalance - currentBalance) < 1e-3) {
        this.animatedBalance.set(nextBalance);
        return;
      }
      const startValue = currentBalance;
      const startedAt = performance.now();
      let frameId = 0;
      const tick = (now) => {
        const progress = Math.min(1, (now - startedAt) / _BottomPanelGhanaComponent.BALANCE_ANIMATION_MS);
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
    this.game.startSpinning$.subscribe(() => this.spinCount.update((v) => v + 1));
  }
  roundBalance(value) {
    const precision = Math.pow(10, dec.decimalPlaces);
    return Math.round(value * precision) / precision;
  }
  /* force isMobile */
  applyHorizontalLayout(parent, heightRatio) {
    const gameHeight = parent.height;
    const gameWidth = gameHeight * LAYOUT_CONFIG.GAME_RATIO;
    if (this.forcedPortrait()) {
      this.hostWidth.set(gameWidth);
      this.hostHeight.set(gameHeight * LAYOUT_CONFIG.PANEL_PORTRAIT_RATIO);
      this.layoutMode.set("portrait");
      this.hostLeft.set((parent.width - gameWidth) / 2);
      this.hostBottom.set(0);
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      this.scale.set(this.hostHeight() / rootFontSize / 18 * 1.6);
      return;
    }
    super.applyHorizontalLayout(parent, heightRatio);
  }
  clickSpin() {
    this.spin.emit();
    this.panel.spin();
  }
  /**
   * Hold for Turbo Spin: 按住旋轉按鈕達門檻秒數後，由 ap-spin-button 每 0.5 秒觸發一次。
   * 遊戲忙碌時急停跳過動畫；回合已結束時自動觸發下一次 spin，直到玩家放開按鈕。
   */
  clickSpinHold() {
    if (this.panel.isBalanceInsufficient())
      return;
    this.clickSpin();
  }
  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }
  closeMenu() {
    this.isMenuOpen.set(false);
  }
  clickInfo() {
    this.info.emit();
    this.closeMenu();
  }
  clickHistory() {
    this.history.emit();
    this.closeMenu();
  }
  clickDecreaseBet() {
    this.panel.decreaseBet();
  }
  clickIncreaseBet() {
    this.panel.increaseBet();
  }
  clickExit() {
    this.closeMenu();
    this.panel.sendExitRequest();
  }
  toggleMusic() {
    this.isMusicOn.update((current) => !current);
    this.panel.enableMusic(this.isMusicOn());
  }
  toggleSound() {
    this.isSoundOn.update((current) => !current);
    const soundOn = this.isSoundOn();
    this.panel.enableSound(soundOn);
    this.soundService.setMuted(!soundOn);
  }
  onWindowBlur() {
    this.closeMenu();
  }
  static \u0275fac = function BottomPanelGhanaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomPanelGhanaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomPanelGhanaComponent, selectors: [["bottom-panel-ghana"]], hostBindings: function BottomPanelGhanaComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("blur", function BottomPanelGhanaComponent_blur_HostBindingHandler() {
        return ctx.onWindowBlur();
      }, \u0275\u0275resolveWindow);
    }
  }, outputs: { spin: "spin", info: "info", history: "history" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 42, vars: 84, consts: [[1, "relative", "size-full", "bg-linear-to-t", "from-black/90", "to-transparent"], [1, "absolute", "rounded-lg", "px-2", "text-black", "font-bold", 2, "left", "50%", "bottom", "25%", "transform", "translateX(-50%)", "background", "linear-gradient(to bottom, #62fecc, #34ff94)"], [1, "absolute", "-translate-x-1/2", "-translate-y-1/2", "left-1/2", "top-1/3", "flex-1", "flex", "items-center"], [1, "relative", "w-full", "flex", "items-center", "justify-center"], [1, "flex", "items-center", "bg-zinc-800/80", "rounded-xl", "p-1"], ["appPointerDownSound", "", "data-no-click-sound", "", 3, "pointerdown", "ngClass", "disabledCoverVariant", "hasBadge", "disabled"], [1, "fixed", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2"], ["variant", "red", "appPointerDownSound", "", "data-no-click-sound", "", 3, "pointerdown", "turboSkip", "spinCount", "ngClass", "disabled", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [1, "border-zinc-400/50", "text-zinc-100", "font-semibold", "bg-black/50"], [1, "grid", "grid-cols-3", "item-center", "justify-center", "text-center", "text-zinc-100", "tracking-wide", "-mb-0.5"], [1, "grid", "flex-1", "grid-cols-[auto_1fr_1fr_1fr]", "items-center", "border-zinc-400/50"], [1, "relative", "aspect-square", "flex", "justify-center", "items-center"], ["name", "bar-3", "appPointerDownSound", "", "data-no-click-sound", "", 1, "relative", "size-full", "cursor-pointer", "hover:text-yellow-400", 3, "click"], [1, "absolute", "inset-0", "bg-black/50"], [1, "flex", "justify-start", "items-center", "space-x-1", "ml-1"], [1, "text-yellow-400", 3, "name"], [1, "text-zinc-200", "whitespace-nowrap"], [1, "flex", "w-full", "justify-center", "items-center", "text-center"], [1, "flex", "items-center", "justify-center", "space-x-1", "whitespace-nowrap", "text-center"], ["name", "prizes", 1, "text-yellow-400"], [1, "text-zinc-200", "whitespace-nowrap", "mr-10"], [1, "flex", "justify-center"], [1, "flex", "items-center", "space-x-1", "whitespace-nowrap"], ["name", "trophy", 1, "text-yellow-400"], [1, "text-zinc-200"], [1, "fixed", "inset-0", 3, "click"], [1, "absolute", "left-0", "bottom-full", "animate-fade-up", "animate-once", "animate-duration-200", "z-dropdown"], [1, "min-w-56", "justify-center", "items-center", "rounded-t-md", "border", "border-zinc-400/50", "bg-zinc-900", "text-zinc-300", "p-2"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold", 3, "click"], [1, "size-6", 3, "name"], [1, "flex-1", "uppercase"], ["variant", "quick", 3, "accentColor", "checked"]], template: function BottomPanelGhanaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, " TAP TO STOP ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "ap-icon-badge", 5);
      \u0275\u0275listener("pointerdown", function BottomPanelGhanaComponent_Template_ap_icon_badge_pointerdown_6_listener() {
        return ctx.clickDecreaseBet();
      });
      \u0275\u0275element(7, "ap-icon-decrease-box");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "div");
      \u0275\u0275elementStart(9, "ap-icon-badge", 5);
      \u0275\u0275listener("pointerdown", function BottomPanelGhanaComponent_Template_ap_icon_badge_pointerdown_9_listener() {
        return ctx.clickIncreaseBet();
      });
      \u0275\u0275element(10, "ap-icon-increase-box");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "ap-spin-button", 7);
      \u0275\u0275listener("pointerdown", function BottomPanelGhanaComponent_Template_ap_spin_button_pointerdown_12_listener() {
        return ctx.clickSpin();
      })("turboSkip", function BottomPanelGhanaComponent_Template_ap_spin_button_turboSkip_12_listener() {
        return ctx.clickSpinHold();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "ap-icon", 12);
      \u0275\u0275listener("click", function BottomPanelGhanaComponent_Template_ap_icon_click_23_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, BottomPanelGhanaComponent_Conditional_24_Template, 1, 0, "div", 13);
      \u0275\u0275conditionalCreate(25, BottomPanelGhanaComponent_Conditional_25_Template, 5, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14);
      \u0275\u0275element(27, "ap-icon", 15);
      \u0275\u0275elementStart(28, "div", 16);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "moneyText");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "div", 18);
      \u0275\u0275element(33, "ap-icon", 19);
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "moneyText");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 21)(38, "div", 22);
      \u0275\u0275element(39, "ap-icon", 23);
      \u0275\u0275elementStart(40, "div", 24);
      \u0275\u0275conditionalCreate(41, BottomPanelGhanaComponent_Conditional_41_Template, 2, 3);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("flex", ctx.isLandscape())("flex-col", ctx.isLandscape());
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.middleHintFontSize());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("transform", ctx.buttonsAreaTranslateY());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("gap", ctx.centerGroupGap());
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.controlIconSize());
      \u0275\u0275property("ngClass", ctx.isDecreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isDecreaseDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.centerSpacerWidth());
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.controlIconSize());
      \u0275\u0275property("ngClass", ctx.isIncreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isIncreaseDisabled());
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("height", ctx.spinIconSize());
      \u0275\u0275property("spinCount", ctx.spinCount())("ngClass", \u0275\u0275pureFunction1(82, _c0, !ctx.isSpinDisabled() && !ctx.isGameBusy()))("disabled", ctx.isSpinDisabled() || ctx.isGameBusy())("isSpinning", ctx.isGameBusy())("holdTurboEnabled", ctx.isHoldTurboEnabled())("turboHoldThresholdMs", ctx.turboHoldThresholdMs())("idleTooltipMs", ctx.idleTooltipMs());
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize())("height", ctx.isLandscape() ? ctx.listBottomHeight() : null);
      \u0275\u0275classProp("absolute", ctx.isPortrait())("bottom-0", ctx.isPortrait())("left-0", ctx.isPortrait())("right-0", ctx.isPortrait());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getBalanceLabel(), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getBetLabel(), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getWinLabel(), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("border-top-width", ctx.borderSize());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.bottomMenuIconSize())("width", ctx.bottomMenuIconSize());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMenuDisabled() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMenuOpen() ? 25 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.bottomIconSize());
      \u0275\u0275property("name", "wallet");
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 78, ctx.displayBalance()), " ");
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("height", ctx.bottomIconSize());
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 80, ctx.displayBet()), " ");
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("height", ctx.bottomIconSize());
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.displayWin() !== null ? 41 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    ApIconBadgeComponent,
    ApSpinButtonComponent,
    ApIconComponent,
    ApToggleSwitchComponent,
    PointerDownSoundDirective,
    MoneyTextPipe,
    ApIconDecreaseBoxComponent,
    ApIconIncreaseBoxComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=bottom-panel-ghana.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomPanelGhanaComponent, [{
    type: Component,
    args: [{ selector: "bottom-panel-ghana", standalone: true, imports: [
      CommonModule,
      ApIconBadgeComponent,
      ApSpinButtonComponent,
      ApIconComponent,
      ApToggleSwitchComponent,
      PointerDownSoundDirective,
      MoneyTextPipe,
      ApIconDecreaseBoxComponent,
      ApIconIncreaseBoxComponent
    ], template: `<div
  class="relative size-full bg-linear-to-t from-black/90 to-transparent"
  [class.flex]="isLandscape()"
  [class.flex-col]="isLandscape()"
>
  <div
    class="absolute rounded-lg px-2 text-black font-bold"
    [style.fontSize]="middleHintFontSize()"
    style="left: 50%; bottom: 25%; transform: translateX(-50%); background: linear-gradient(to bottom, #62fecc, #34ff94);"
  >
    TAP TO STOP
  </div>
  <div
    class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/3 flex-1 flex items-center"
    [style.transform]="buttonsAreaTranslateY()"
  >
    <!-- Center Group -->
    <div class="relative w-full flex items-center justify-center">
      <div
        class="flex items-center bg-zinc-800/80 rounded-xl p-1"
        [style.gap]="centerGroupGap()"
      >
        <ap-icon-badge
          appPointerDownSound
          data-no-click-sound
          [ngClass]="
            isDecreaseDisabled()
              ? ''
              : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'
          "
          [style.height]="controlIconSize()"
          [disabledCoverVariant]="'half'"
          [hasBadge]="false"
          [disabled]="isDecreaseDisabled()"
          (pointerdown)="clickDecreaseBet()"
        >
          <ap-icon-decrease-box />
        </ap-icon-badge>

        <div [style.width]="centerSpacerWidth()"></div>

        <ap-icon-badge
          appPointerDownSound
          data-no-click-sound
          [ngClass]="
            isIncreaseDisabled()
              ? ''
              : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'
          "
          [style.height]="controlIconSize()"
          [disabledCoverVariant]="'half'"
          [hasBadge]="false"
          [disabled]="isIncreaseDisabled()"
          (pointerdown)="clickIncreaseBet()"
        >
          <ap-icon-increase-box />
        </ap-icon-badge>
      </div>
    </div>
    <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <ap-spin-button
        variant="red"
        [spinCount]="spinCount()"
        appPointerDownSound
        data-no-click-sound
        [ngClass]="{
          'cursor-pointer hover:scale-105 transition-transform active:scale-95 animate-infinite animate-duration-1500':
            !isSpinDisabled() && !isGameBusy(),
        }"
        [style.height]="spinIconSize()"
        [disabled]="isSpinDisabled() || isGameBusy()"
        [isSpinning]="isGameBusy()"
        [holdTurboEnabled]="isHoldTurboEnabled()"
        [turboHoldThresholdMs]="turboHoldThresholdMs()"
        [idleTooltipMs]="idleTooltipMs()"
        (pointerdown)="clickSpin()"
        (turboSkip)="clickSpinHold()"
      />
    </div>
  </div>
  <!-- Bottom Bar -->
  <div
    class="border-zinc-400/50 text-zinc-100 font-semibold bg-black/50"
    [class.absolute]="isPortrait()"
    [class.bottom-0]="isPortrait()"
    [class.left-0]="isPortrait()"
    [class.right-0]="isPortrait()"
    [style.fontSize]="bottomBarFontSize()"
    [style.height]="isLandscape() ? listBottomHeight() : null"
  >
    <!-- Title -->
    <div
      class="grid grid-cols-3 item-center justify-center text-center text-zinc-100 tracking-wide -mb-0.5"
    >
      <div [style.fontSize]="bottomBarFontSize()">
        {{ getBalanceLabel() }}
      </div>
      <div [style.fontSize]="bottomBarFontSize()">
        {{ getBetLabel() }}
      </div>
      <div [style.fontSize]="bottomBarFontSize()">
        {{ getWinLabel() }}
      </div>
    </div>

    <!--  Bottom Bar -->
    <div
      class="grid flex-1 grid-cols-[auto_1fr_1fr_1fr] items-center border-zinc-400/50"
      [style.borderTopWidth]="borderSize()"
    >
      <div class="relative aspect-square flex justify-center items-center">
        <ap-icon
          name="bar-3"
          appPointerDownSound
          data-no-click-sound
          class="relative size-full cursor-pointer hover:text-yellow-400"
          [style.height]="bottomMenuIconSize()"
          [style.width]="bottomMenuIconSize()"
          (click)="toggleMenu()"
        >
        </ap-icon>
        @if (isMenuDisabled()) {<div class="absolute inset-0 bg-black/50"> </div>}

        @if (isMenuOpen()) {
          <div class="fixed inset-0" (click)="closeMenu()"></div>
          <div
            class="absolute left-0 bottom-full animate-fade-up animate-once animate-duration-200 z-dropdown"
            [style.marginBottom]="menuOffset()"
          >
            <div
              class="min-w-56 justify-center items-center rounded-t-md border border-zinc-400/50 bg-zinc-900 text-zinc-300 p-2"
            >
              @for (item of menuItems(); track item.id) {
                <div
                  class="flex items-center justify-start relative gap-2 px-2 py-2 m-2 cursor-pointer hover:bg-zinc-800 hover:text-yellow-400 active:bg-zinc-700 hover:rounded-lg text-xl font-semibold"
                  (click)="item.action()"
                >
                  <ap-icon [name]="iconMap()[item.id]" class="size-6" />
                  <h3 class="flex-1 uppercase">{{ item.label }}</h3>
                  @if (item.hasToggle) {
                    <ap-toggle-switch
                      variant="quick"
                      [accentColor]="'yellow'"
                      [checked]="toggleMap()[item.id]"
                    />
                  }
                </div>
              }
            </div>
          </div>
        }
      </div>

      <div class="flex justify-start items-center space-x-1 ml-1">
        <ap-icon
          class="text-yellow-400"
          [style.height]="bottomIconSize()"
          [name]="'wallet'"
        />
        <div
          class="text-zinc-200 whitespace-nowrap"
          [style.fontSize]="bottomBarFontSize()"
        >
          {{ displayBalance() | moneyText }}
        </div>
      </div>

      <div class="flex w-full justify-center items-center text-center">
        <div
          class="flex items-center justify-center space-x-1 whitespace-nowrap text-center"
        >
          <ap-icon
            name="prizes"
            class="text-yellow-400"
            [style.height]="bottomIconSize()"
          />
          <div
            class="text-zinc-200 whitespace-nowrap mr-10"
            [style.fontSize]="bottomBarFontSize()"
          >
            {{ displayBet() | moneyText }}
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex items-center space-x-1 whitespace-nowrap">
          <ap-icon
            name="trophy"
            class="text-yellow-400"
            [style.height]="bottomIconSize()"
          />
          <div class="text-zinc-200" [style.fontSize]="bottomBarFontSize()">
            @if (displayWin() !== null) {
              {{ displayWin()! | moneyText }}
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/bottom-panel-ghana/bottom-panel-ghana.component.css */\n:host {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=bottom-panel-ghana.component.css.map */\n"] }]
  }], () => [], { onWindowBlur: [{
    type: HostListener,
    args: ["window:blur"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomPanelGhanaComponent, { className: "BottomPanelGhanaComponent", filePath: "src/app/pages/bottom-panel-ghana/bottom-panel-ghana.component.ts", lineNumber: 31 });
})();

// src/app/layouts/layout-ghana/layout-ghana.component.ts
function LayoutGhanaComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-list", 8);
    \u0275\u0275listener("close", function LayoutGhanaComponent_Conditional_2_Conditional_2_Template_history_list_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showHistory.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("hideTabMenu", true);
  }
}
function LayoutGhanaComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "page-info", 9);
    \u0275\u0275listener("close", function LayoutGhanaComponent_Conditional_2_Conditional_3_Template_page_info_close_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showInfo.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("hidePayTable", true)("hideTurboGuide", true)("hideAutoplay", true)("hideNoteItem2", true);
  }
}
function LayoutGhanaComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bottom-panel-ghana", 3);
    \u0275\u0275listener("info", function LayoutGhanaComponent_Conditional_2_Template_bottom_panel_ghana_info_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showInfo.set(true));
    })("history", function LayoutGhanaComponent_Conditional_2_Template_bottom_panel_ghana_history_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showHistory.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275conditionalCreate(2, LayoutGhanaComponent_Conditional_2_Conditional_2_Template, 1, 1, "history-list", 5);
    \u0275\u0275conditionalCreate(3, LayoutGhanaComponent_Conditional_2_Conditional_3_Template, 1, 4, "page-info", 6);
    \u0275\u0275element(4, "bottom-panel-popup", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showHistory() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showInfo() ? 3 : -1);
  }
}
function LayoutGhanaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-device-rotation", 2);
  }
}
var LayoutGhanaComponent = class _LayoutGhanaComponent {
  api = inject(AppInterfaceService);
  game = inject(GameIframeCtrlService);
  session = inject(ClientSessionService);
  routerCtrl = inject(RouterCtrlService);
  wallet = inject(PlayerWalletService);
  showAll = signal(false);
  showHistory = signal(false);
  showInfo = signal(false);
  showRotateTips = computed(() => this.session.isMobile() && this.session.isLandscape());
  ngOnInit() {
    if (environment.production && !this.session.isGhanaUI) {
      this.routerCtrl.navigateRelative("");
      return;
    }
    this.api.setup(this.session.setting);
    this.api.connect();
    this.game.loadingFinished$.subscribe(this.onGameLoadingFinished.bind(this));
    this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
    this.game.betChanged$.subscribe(this.onChangeBet.bind(this));
  }
  onGameLoadingFinished() {
    this.showAll.set(true);
  }
  /** 偵測各種情況, 決定是否關閉目前UI */
  hideAll = computed(() => {
    const inGamePopupOpen = this.game.popupMessageBox();
    return inGamePopupOpen;
  });
  /** 偵測遊戲準備好可以開始Spin的時候 */
  onReadyForSpin() {
    if (this.wallet.isBuyFeature()) {
      this.wallet.updateSpinMode(null);
    }
    this.wallet.updateGameDuration();
  }
  /** 遊戲更變下注 */
  onChangeBet(content) {
    this.wallet.updateBet(content.bet);
  }
  static \u0275fac = function LayoutGhanaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutGhanaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutGhanaComponent, selectors: [["layout-ghana"]], decls: 4, vars: 2, consts: [[1, "absolute"], ["uiMode", "ap-cover", 1, "absolute", "inset-0"], [1, "absolute", "z-error", "inset-0"], [1, "animate-fade-up", "animate-duration-300", "animate-ease-in", "select-none", 3, "info", "history"], [1, "contents"], [1, "absolute", "inset-0", 3, "hideTabMenu"], [3, "hidePayTable", "hideTurboGuide", "hideAutoplay", "hideNoteItem2"], [1, "absolute", "top-0", "left-0"], [1, "absolute", "inset-0", 3, "close", "hideTabMenu"], [3, "close", "hidePayTable", "hideTurboGuide", "hideAutoplay", "hideNoteItem2"]], template: function LayoutGhanaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ap-loading-overlay", 0)(1, "game-iframe", 1);
      \u0275\u0275conditionalCreate(2, LayoutGhanaComponent_Conditional_2_Template, 5, 2);
      \u0275\u0275conditionalCreate(3, LayoutGhanaComponent_Conditional_3_Template, 1, 0, "ap-ui-device-rotation", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showAll() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showRotateTips() ? 3 : -1);
    }
  }, dependencies: [ApLoadingOverlayComponent, GameIframeComponent, BottomPanelGhanaComponent, HistoryListComponent, InfoComponent, BottomPanelPopupComponent, ApUiDeviceRotationComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=layout-ghana.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutGhanaComponent, [{
    type: Component,
    args: [{ selector: "layout-ghana", imports: [ApLoadingOverlayComponent, GameIframeComponent, BottomPanelGhanaComponent, HistoryListComponent, InfoComponent, BottomPanelPopupComponent, ApUiDeviceRotationComponent], template: '<ap-loading-overlay class="absolute"/>\n<game-iframe class="absolute inset-0" uiMode="ap-cover"/>\n@if (showAll()) {\n  <bottom-panel-ghana class="animate-fade-up animate-duration-300 animate-ease-in select-none"\n      (info)="showInfo.set(true)"\n      (history)="showHistory.set(true)" />\n  <div class="contents">\n    @if (showHistory()) {<history-list class="absolute inset-0" [hideTabMenu]="true" (close)="showHistory.set(false)" />}\n    @if (showInfo()) {<page-info [hidePayTable]="true" [hideTurboGuide]="true" [hideAutoplay]="true" [hideNoteItem2]="true" (close)="showInfo.set(false)"/>}\n    <bottom-panel-popup class="absolute top-0 left-0" />\n  </div>\n}\n@if (showRotateTips()) {\n  <ap-ui-device-rotation class="absolute z-error inset-0" />\n}', styles: ["/* src/app/layouts/layout-ghana/layout-ghana.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=layout-ghana.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutGhanaComponent, { className: "LayoutGhanaComponent", filePath: "src/app/layouts/layout-ghana/layout-ghana.component.ts", lineNumber: 22 });
})();
export {
  LayoutGhanaComponent
};
//# sourceMappingURL=chunk-Z7WS6LTI.js.map
