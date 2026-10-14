import {
  EventCashdropToastComponent
} from "./chunk-CFQ33M2E.js";
import {
  EventCenterComponent,
  TrnAllComponent
} from "./chunk-SRCP76W3.js";
import {
  FaviconCtrlService
} from "./chunk-3QQPW4OC.js";
import "./chunk-QOKWLLEK.js";
import "./chunk-7RUHSQL3.js";
import {
  CampaignFacadeService,
  CashDropService,
  EventCenterCtrlService
} from "./chunk-7XXHR6BD.js";
import "./chunk-USS23RIW.js";
import {
  TrnCtrlService
} from "./chunk-KCYX4D7Q.js";
import "./chunk-47SOIXJB.js";
import "./chunk-CYEAZPJ5.js";
import {
  BottomPanelPopupComponent,
  HistoryListComponent,
  InfoComponent
} from "./chunk-HAJJI7JE.js";
import {
  ApUiDeviceRotationComponent
} from "./chunk-L3FTOYHQ.js";
import "./chunk-2CCP266M.js";
import {
  ClickOutsideDirective
} from "./chunk-S5BUS6WA.js";
import "./chunk-W2PA37WH.js";
import "./chunk-WKKSI4JZ.js";
import "./chunk-M7JP5DRR.js";
import "./chunk-V4GGUMNZ.js";
import {
  GACollectorService
} from "./chunk-JGNZAH3T.js";
import {
  ApSpinButtonComponent,
  ApUiGameNameComponent,
  ApUiLogoNameComponent,
  BottomPanelBase,
  HistoryReplayService,
  TopStatusBarComponent
} from "./chunk-GORS6YCV.js";
import {
  ApUiVersionComponent
} from "./chunk-6H5XA62D.js";
import {
  GameIframeComponent
} from "./chunk-BTFWV2DH.js";
import {
  NavigatorShareService
} from "./chunk-DODGKEVZ.js";
import "./chunk-MMAYEOJZ.js";
import {
  ApButtonAutoSpinTimesComponent,
  ApButtonFreeSpinsComponent,
  ApIconAutoplayCircleComponent,
  ApIconBadgeComponent,
  ApIconBuyFeatureCircleComponent,
  ApIconCampaignCircleComponent,
  ApIconDecreaseBoxComponent,
  ApIconIncreaseBoxComponent,
  ApIconTurboCircleComponent
} from "./chunk-XYMPOXOA.js";
import {
  RouterCtrlService
} from "./chunk-57FVUZ33.js";
import "./chunk-3FMKOJKK.js";
import {
  takeUntilDestroyed
} from "./chunk-COCIR4RJ.js";
import "./chunk-7GQKM4M3.js";
import {
  ApUiFramePopupComponent
} from "./chunk-HUKCMLYY.js";
import {
  PointerDownSoundDirective
} from "./chunk-JHJKX6RD.js";
import {
  BaseSymbolTextureService
} from "./chunk-AYE6H5VR.js";
import {
  MoneyTextPipe
} from "./chunk-U7TK2FIU.js";
import {
  SoundService
} from "./chunk-FCZ4RVMP.js";
import {
  BottomPanelService,
  isAutoSpinTimesButtonMode
} from "./chunk-MQEPEO5W.js";
import {
  ApIconMusicCircleComponent,
  PlayerWalletService
} from "./chunk-5GFZDTRR.js";
import "./chunk-YG42UXQC.js";
import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-OW6577YR.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import "./chunk-MLWU5HFS.js";
import {
  ApToggleSwitchComponent
} from "./chunk-MKS37EB3.js";
import {
  ApButtonComponent
} from "./chunk-VX4L3GZI.js";
import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  AppInterfaceService
} from "./chunk-TLQLKLDD.js";
import {
  LoggerService,
  calc,
  dec,
  decimal_default
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
  DestroyRef,
  ElementRef,
  HostListener,
  Injectable,
  Subject,
  computed,
  effect,
  inject,
  input,
  interval,
  output,
  setClassMetadata,
  signal,
  takeUntil,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QGU3BS3L.js";

// src/app/services/rs-beta-ctrl/rs-beta-ctrl.service.ts
var RsBetaCtrlService = class _RsBetaCtrlService {
  game = inject(GameIframeCtrlService);
  session = inject(ClientSessionService);
  logger = inject(LoggerService);
  iconName = signal("");
  iconPath = computed(() => this.iconName() ? this.toRSItemIconAssetDownloadUrl(this.iconName()) : "");
  spinButtonMode = signal(null);
  isFreeGameMode = computed(() => this.spinButtonMode() === "free-game");
  totalSpins = signal(0);
  currentSpins = signal(0);
  displayBet = signal(0);
  hasNew = computed(() => this.game.rsNotification());
  constructor() {
    this.game.RSEnterRSItemSpinMode$.subscribe(this.onRSEnterRSItemSpinMode.bind(this));
    this.game.RSLeaveRSItemSpinMode$.subscribe(this.onRSLeaveRSItemSpinMode.bind(this));
    this.game.RSUpdateUseItemCount$.subscribe(this.onRSUpdateUseItemCount.bind(this));
  }
  onRSEnterRSItemSpinMode(message) {
    this.logger.rewardSystemLog("Enter RS Item Spin Mode:", message);
    this.iconName.set(message.iconName);
    this.spinButtonMode.set(message.BuyfeatureName ? "free-game" : "double-chance");
    this.totalSpins.set(message.UseAmout);
    this.currentSpins.set(message.UseAmout);
    this.displayBet.set(calc.s2c(message.BetValue));
  }
  onRSLeaveRSItemSpinMode(shouldLeave) {
    this.logger.rewardSystemLog("Leave RS Item Spin Mode:", shouldLeave);
    this.iconName.set("");
    this.spinButtonMode.set(null);
    this.totalSpins.set(0);
    this.currentSpins.set(0);
    this.displayBet.set(0);
  }
  onRSUpdateUseItemCount(message) {
    this.logger.rewardSystemLog("RS Update Use Item Count:", message);
    if (message.total !== void 0) {
      this.totalSpins.set(message.total);
    }
    if (message.remaining !== void 0) {
      this.currentSpins.set(message.remaining);
    }
  }
  toRSItemIconAssetDownloadUrl(imgname) {
    let ret = "";
    ret = this.toIMGDataAssetDownloadUrl("/system/Info/RewardSystem/store/item_icon/", imgname);
    return ret;
  }
  toIMGDataAssetDownloadUrl(relpath, imgname) {
    let ret = "";
    let l_strURL = location.origin;
    if (l_strURL.includes("192.168") || l_strURL.includes("localhost")) {
      l_strURL = this.session.assetUrl;
    } else {
      l_strURL = window.location.origin;
    }
    ret = l_strURL + relpath + imgname + ".png";
    return ret;
  }
  static \u0275fac = function RsBetaCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RsBetaCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RsBetaCtrlService, factory: _RsBetaCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RsBetaCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pages/bottom-panel/bottom-panel.component.ts
var _c0 = (a0, a1) => ({ "bottom-1/15": a0, "bottom-1/6": a1 });
var _c1 = (a0, a1) => [a0, a1];
var _c2 = (a0) => ({ "cursor-pointer hover:scale-105 transition-transform active:scale-95": a0 });
var _c3 = (a0) => [a0];
var _c4 = () => [];
var _c5 = () => ({ addSymbol: false });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function BottomPanelComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-icon-badge", 35);
    \u0275\u0275listener("click", function BottomPanelComponent_Conditional_9_Template_ap_icon_badge_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMusicAtAutoButton());
    });
    \u0275\u0275element(1, "ap-icon-music-circle", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.buttonIconSize());
    \u0275\u0275property("hasBadge", false);
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.isMusicAtAutoButtonOn() ? "default" : "pressed");
  }
}
function BottomPanelComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 36)(1, "img", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", "blank");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.rsImgPath() + `?v=${ctx_r1.version()}`, \u0275\u0275sanitizeUrl);
  }
}
function BottomPanelComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-icon-badge", 38);
    \u0275\u0275listener("click", function BottomPanelComponent_Conditional_11_Template_ap_icon_badge_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.clickAutoplay());
    });
    \u0275\u0275element(1, "ap-icon-autoplay-circle");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.isAutoPlayDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabled", ctx_r1.isAutoPlayDisabled());
    \u0275\u0275attribute("disabled", ctx_r1.isAutoPlayDisabled() ? "" : null);
  }
}
function BottomPanelComponent_Conditional_12_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 43);
  }
}
function BottomPanelComponent_Conditional_12_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const option_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", option_r6.value, " ");
  }
}
function BottomPanelComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function BottomPanelComponent_Conditional_12_For_3_Template_div_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clickAutoplayOption(option_r6.value));
    });
    \u0275\u0275conditionalCreate(1, BottomPanelComponent_Conditional_12_For_3_Conditional_1_Template, 1, 0, "ap-icon", 43)(2, BottomPanelComponent_Conditional_12_For_3_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const \u0275$index_39_r7 = ctx.$index;
    const \u0275$count_39_r8 = ctx.$count;
    \u0275\u0275styleProp("border-bottom", \u0275$index_39_r7 === \u0275$count_39_r8 - 1 ? "none" : "1px solid rgb(63 63 70)");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r6.isInfinity ? 1 : 2);
  }
}
function BottomPanelComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("clickOutside", function BottomPanelComponent_Conditional_12_Template_div_clickOutside_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAutoplayMenu());
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275repeaterCreate(2, BottomPanelComponent_Conditional_12_For_3_Template, 3, 3, "div", 41, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.autoplayOptions);
  }
}
function BottomPanelComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-turbo-circle", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("variant", "pressed2");
  }
}
function BottomPanelComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-turbo-circle", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("variant", ctx_r1.turboState());
  }
}
function BottomPanelComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 44);
    \u0275\u0275listener("buttonClick", function BottomPanelComponent_Conditional_23_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickFeatureSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pressHintEnabled", ctx_r1.featureStartTipEnabled())("pressHintTimerEnabled", ctx_r1.featureStartTipEnabled())("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.featureTotal() || 0)("currentSpins", ctx_r1.featureRemaining() || 0)("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 45);
    \u0275\u0275listener("buttonClick", function BottomPanelComponent_Conditional_24_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickStopAutoSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.autoSpinTotal() || 0)("currentSpins", ctx_r1.autoSpinRemaining() || 0)("variant", ctx_r1.isAutoSpinInfinity() ? "infinity" : "default")("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-spin-button", 46);
    \u0275\u0275listener("buttonClick", function BottomPanelComponent_Conditional_25_Template_ap_spin_button_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickCampaignSpin());
    })("turboHold", function BottomPanelComponent_Conditional_25_Template_ap_spin_button_turboHold_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHoldTurbo($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.spinIconSize());
    \u0275\u0275property("pressHintType", ctx_r1.pressHintType())("ngClass", \u0275\u0275pureFunction1(11, _c2, !ctx_r1.isSpinDisabled()))("spinCount", ctx_r1.spinCount())("disabled", ctx_r1.isSpinDisabled())("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled())("isSpinning", ctx_r1.isGameBusy())("holdTurboEnabled", ctx_r1.isHoldTurboEnabled())("turboHoldThresholdMs", ctx_r1.turboHoldThresholdMs())("idleTooltipMs", ctx_r1.idleTooltipMs());
  }
}
function BottomPanelComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-free-spins", 47);
    \u0275\u0275listener("buttonClick", function BottomPanelComponent_Conditional_26_Template_ap_button_free_spins_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickCampaignSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.freeSpinTotal() || 0)("currentSpins", ctx_r1.freeSpinRemaining() || 0);
  }
}
function BottomPanelComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 48);
    \u0275\u0275listener("buttonClick", function BottomPanelComponent_Conditional_27_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickStopAutoSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.autoSpinTotal() || 0)("currentSpins", ctx_r1.autoSpinRemaining() || 0)("variant", ctx_r1.isAutoSpinInfinity() ? "infinity" : "default")("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-spin-button", 49);
    \u0275\u0275listener("buttonClick", function BottomPanelComponent_Conditional_28_Template_ap_spin_button_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSpin());
    })("turboHold", function BottomPanelComponent_Conditional_28_Template_ap_spin_button_turboHold_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHoldTurbo($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.spinIconSize());
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c2, !ctx_r1.isSpinDisabled()))("spinCount", ctx_r1.spinCount())("disabled", ctx_r1.isSpinDisabled())("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled())("isSpinning", ctx_r1.isGameBusy())("holdTurboEnabled", ctx_r1.isHoldTurboEnabled())("turboHoldThresholdMs", ctx_r1.turboHoldThresholdMs())("idleTooltipMs", ctx_r1.idleTooltipMs());
  }
}
function BottomPanelComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 50);
    \u0275\u0275listener("buttonClick", function BottomPanelComponent_Conditional_29_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickStopAutoSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.autoSpinTotal() || 0)("currentSpins", ctx_r1.autoSpinRemaining() || 0)("variant", ctx_r1.isAutoSpinInfinity() ? "infinity" : "default")("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-spin-button", 51);
    \u0275\u0275listener("buttonClick", function BottomPanelComponent_Conditional_30_Template_ap_spin_button_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSpin());
    })("turboHold", function BottomPanelComponent_Conditional_30_Template_ap_spin_button_turboHold_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHoldTurbo($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.spinIconSize());
    \u0275\u0275property("pressHintEnabled", ctx_r1.isClickToSpinTipEnabled())("spinCount", ctx_r1.spinCount())("ngClass", \u0275\u0275pureFunction1(12, _c2, !ctx_r1.isSpinDisabled()))("disabled", ctx_r1.isSpinDisabled())("fastSpinDisabled", ctx_r1.isFastSpinDisabled())("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled())("isSpinning", ctx_r1.isGameBusy())("holdTurboEnabled", ctx_r1.isHoldTurboEnabled())("turboHoldThresholdMs", ctx_r1.turboHoldThresholdMs())("idleTooltipMs", ctx_r1.idleTooltipMs());
  }
}
function BottomPanelComponent_Conditional_31_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "circle", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ga-spin-progress-ring--auto-spin-times", ctx_r1.isAutoSpinTimesButtonMode());
  }
}
function BottomPanelComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BottomPanelComponent_Conditional_31_For_1_Template, 2, 2, ":svg:svg", 52, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.spinCooldownTick() > 0 ? \u0275\u0275pureFunction1(0, _c3, ctx_r1.spinCooldownTick()) : \u0275\u0275pureFunction0(2, _c4));
  }
}
function BottomPanelComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function BottomPanelComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function BottomPanelComponent_Conditional_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function BottomPanelComponent_For_40_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-toggle-switch", 59);
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("accentColor", "yellow")("checked", ctx_r1.toggleMap()[item_r19.id]);
  }
}
function BottomPanelComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function BottomPanelComponent_For_40_Template_div_click_0_listener() {
      const item_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(item_r19.action());
    });
    \u0275\u0275element(1, "ap-icon", 57);
    \u0275\u0275elementStart(2, "h3", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BottomPanelComponent_For_40_Conditional_4_Template, 1, 2, "ap-toggle-switch", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "panel-menu-" + item_r19.id);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.iconMap()[item_r19.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r19.hasToggle ? 4 : -1);
  }
}
function BottomPanelComponent_Conditional_41_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelComponent_Conditional_41_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBalance(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelComponent_Conditional_41_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelComponent_Conditional_41_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBet(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelComponent_Conditional_41_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelComponent_Conditional_41_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayWin(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelComponent_Conditional_41_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275conditionalCreate(1, BottomPanelComponent_Conditional_41_Conditional_19_Conditional_1_Template, 2, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.displayWin() !== null ? 1 : -1);
  }
}
function BottomPanelComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 60)(2, "h6", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62);
    \u0275\u0275conditionalCreate(5, BottomPanelComponent_Conditional_41_Conditional_5_Template, 1, 0)(6, BottomPanelComponent_Conditional_41_Conditional_6_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 63)(8, "h6", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 64)(11, "div", 65);
    \u0275\u0275conditionalCreate(12, BottomPanelComponent_Conditional_41_Conditional_12_Template, 1, 0)(13, BottomPanelComponent_Conditional_41_Conditional_13_Template, 2, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 66)(15, "h6", 61);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 67);
    \u0275\u0275conditionalCreate(18, BottomPanelComponent_Conditional_41_Conditional_18_Template, 1, 0)(19, BottomPanelComponent_Conditional_41_Conditional_19_Template, 2, 1, "div", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getBalanceLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBalanceHided() ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getBetLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isBetHided() ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getWinLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWinHided() ? 18 : 19);
  }
}
function BottomPanelComponent_Conditional_42_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelComponent_Conditional_42_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBalance(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelComponent_Conditional_42_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelComponent_Conditional_42_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBet(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelComponent_Conditional_42_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelComponent_Conditional_42_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayWin(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 69);
    \u0275\u0275element(2, "ap-icon", 70);
    \u0275\u0275elementStart(3, "div", 71);
    \u0275\u0275conditionalCreate(4, BottomPanelComponent_Conditional_42_Conditional_4_Template, 1, 0)(5, BottomPanelComponent_Conditional_42_Conditional_5_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 72)(7, "div", 73);
    \u0275\u0275element(8, "ap-icon", 74);
    \u0275\u0275elementStart(9, "div", 75);
    \u0275\u0275conditionalCreate(10, BottomPanelComponent_Conditional_42_Conditional_10_Template, 1, 0)(11, BottomPanelComponent_Conditional_42_Conditional_11_Template, 2, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 76)(13, "div", 73);
    \u0275\u0275element(14, "ap-icon", 77);
    \u0275\u0275elementStart(15, "div", 78);
    \u0275\u0275conditionalCreate(16, BottomPanelComponent_Conditional_42_Conditional_16_Template, 1, 0)(17, BottomPanelComponent_Conditional_42_Conditional_17_Template, 2, 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.bottomIconSize());
    \u0275\u0275property("name", ctx_r1.isBonusWalletUsed() ? "star" : "wallet");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBalanceHided() ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("height", ctx_r1.bottomIconSize());
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBetHided() ? 10 : 11);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("height", ctx_r1.bottomIconSize());
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWinHided() ? 16 : ctx_r1.displayWin() !== null ? 17 : -1);
  }
}
function BottomPanelComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "div", 81);
    \u0275\u0275element(3, "ap-icon", 82);
    \u0275\u0275elementStart(4, "div", 83);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 83)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "moneyText");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("bottom", ctx_r1.isPortrait() ? "16.6667%" : ctx_r1.middleListBottomHeight())("font-size", ctx_r1.middleHintFontSize());
    \u0275\u0275classProp("left-0", ctx_r1.isLandscape())("right-0", ctx_r1.isLandscape())("bg-linear-to-r", ctx_r1.isLandscape());
    \u0275\u0275advance();
    \u0275\u0275classProp("flex-col", ctx_r1.isPortrait())("items-center", ctx_r1.isPortrait())("flex-row", ctx_r1.isLandscape())("justify-between", ctx_r1.isLandscape());
    \u0275\u0275advance();
    \u0275\u0275classProp("order-2", ctx_r1.isLandscape());
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.middleHintIconSize());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayEndTime(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("order-1", ctx_r1.isLandscape());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRemainingTurnoverLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 27, ctx_r1.displayRemainingTurnover()));
  }
}
var BottomPanelComponent = class _BottomPanelComponent extends BottomPanelBase {
  static BALANCE_ANIMATION_MS = 80;
  api = inject(AppInterfaceService);
  panel = inject(BottomPanelService);
  campaign = inject(CampaignFacadeService);
  wallet = inject(PlayerWalletService);
  eventCenter = inject(EventCenterCtrlService);
  rs = inject(RsBetaCtrlService);
  cashDrop = inject(CashDropService);
  soundService = inject(SoundService);
  game = inject(GameIframeCtrlService);
  // =================== Balance/Bet/Win Labels ===================
  getBalanceLabel = computed(() => this.isBonusWalletUsed() ? this.appI18n.instant("spin_area_bonus", "BONUS") : this.appI18n.instant("spin_area_balance", "BALANCE"));
  getBetLabel = this.appI18n.computed("spin_area_bet", "BET");
  getWinLabel = this.appI18n.computed("spin_area_win", "WIN");
  getRemainingTurnoverLabel = this.appI18n.computed("promo_turnover_left", "Remaining turnover");
  replayStartTipLabel = signal(null);
  pressHintEnabled = input(false);
  pressHintType = input("blur");
  // =================== Balance/Bet/Win Value ===================
  displayCurrency = computed(() => this.api.currencySymbol());
  // 顯示的餘額、投注額、贏得金額等數值的貨幣符號
  animatedBalance = signal(this.panel.balance());
  displayBalance = computed(() => this.animatedBalance());
  displayBet = computed(() => {
    if (this.rs.spinButtonMode())
      return this.rs.displayBet();
    return this.panel.bet();
  });
  displayWin = computed(() => {
    return this.panel.win();
  });
  // 跟Campaign相關的的數值由 campaign service 提供，因為它是屬於活動相關的資訊
  displayRemainingTurnover = signal(0);
  displayEndTime = signal("");
  // =================== 一般 Outputs ===================
  spin = output();
  info = output();
  history = output();
  // =================== 各種控制項的狀態 ===================
  isSpinDisabled = computed(() => !this.game.isInteractionEnabled() || this.panel.isInGlobalCooldown());
  isFastSpinDisabled = computed(() => this.globalCooldownTime() > 0);
  isMenuOpen = signal(false);
  isAutoplayMenuOpen = signal(false);
  isMusicOn = signal(true);
  isMusicAtAutoButtonOn = signal(true);
  isSoundOn = signal(true);
  isMenuDisabled = computed(() => this.panel.isBusy());
  /** 判斷 Buy Feature 按鈕是否變成取消按鈕 */
  isFeatureCancelled = computed(() => {
    return this.panel.isDoubleChance() || this.wallet.campaignSetting() !== null;
  });
  /** 判斷 Buy Feature 按鈕是否禁用 */
  isFeatureDisabled = computed(() => {
    if (this.panel.isBusy())
      return true;
    if (this.isHoldingTurbo())
      return true;
    else if (this.wallet.campaignSetting() !== null) {
      return false;
    } else if (this.wallet.isBuyFeatureDisabled()) {
      return true;
    }
    return false;
  });
  /** 判斷 Campaign 按鈕是否禁用 */
  isCampaignDisabled = computed(() => {
    return this.panel.isBusy() || this.panel.isDoubleChance() || this.campaign.isRunning() || this.isHoldingTurbo();
  });
  isBonusWalletUsed = computed(() => this.panel.isFreeBonusRound() || this.panel.isFreeSpinRound());
  /** 判斷 Campaign 按鈕是否有紅點*/
  campaignHasBadge = computed(() => this.campaign.haveNewGroup() || this.rs.hasNew() || this.cashDrop.hasNew());
  /** 判斷 Increase 按鈕是否禁用 */
  isIncreaseDisabled = computed(() => {
    return this.panel.isBusy() || this.panel.isBetMax() || this.isHoldingTurbo();
  });
  /** 判斷 Decrease 按鈕是否禁用 */
  isDecreaseDisabled = computed(() => {
    return this.panel.isBusy() || this.panel.isBetMin() || this.isHoldingTurbo();
  });
  /** 判斷 AutoPlay 按鈕是否禁用 */
  isAutoPlayDisabled = computed(() => {
    return this.panel.isBusy() || this.isHoldingTurbo();
  });
  /** 判斷 Turbo 按鈕是否禁用 */
  isTurboDisabled = computed(() => {
    return this.panel.isFeatureMode() || !this.game.isInteractionEnabled();
  });
  /** 判斷遊戲是否忙碌 */
  isGameBusy = computed(() => this.panel.isBusy());
  /** Auto Spin 按鈕的 lighting effect 是否啟用；由 featureTransition 彈出視窗開啟時傳入的資料決定 */
  autoSpinLightingEffectEnabled = computed(() => this.game.featureTransitionLightingEffectEnabled());
  isBalanceHided = signal(false);
  isBetHided = signal(false);
  isWinHided = signal(false);
  isClickToSpinTipEnabled = signal(false);
  showRemainingTurnover = signal(false);
  /** 判斷 Exit 按鈕是否顯示 */
  showExit = computed(() => this.session.backurl && this.session.backurl.length > 3);
  /** 每次 spin 觸發時遞增，供 ap-icon-spin-button 驅動切換動畫 */
  spinCount = signal(0);
  /** 是否顯示Replay開始提示 */
  showReplayStart = signal(false);
  /** 是否顯示Feature開始提示 */
  showFeatureStart = signal(false);
  showStatusbar = signal(true);
  /** =================== Hold for Turbo Spin 相關 =================== */
  /** Hold for Turbo Spin 功能是否啟用；任何遊戲彈出視窗或 App 內彈窗(Event Center、Promo/Campaign 訊息、餘額不足/離開確認等)開啟時都會中斷，需重新按住才能再次啟動 */
  isHoldTurboEnabled = computed(() => this.panel.holdTurboEnabled() && !this.game.isInGamePopup() && !this.eventCenter.isVisible() && !this.campaign.popupMessageVisible() && !this.panel.isMessagePopupVisible());
  /** Hold for Turbo Spin 參數：長按門檻毫秒數 */
  turboHoldThresholdMs = computed(() => this.panel.turboHoldThresholdMs());
  /** Hold for Turbo Spin 參數：連續觸發間隔毫秒數 */
  turboSkipIntervalMs = computed(() => this.panel.turboSkipIntervalMs());
  /** Hold for Turbo Spin 參數：閒置提示延遲毫秒數 */
  idleTooltipMs = computed(() => this.panel.idleTooltipMs());
  /** 是否正在長按 Turbo 按鈕 */
  isHoldingTurbo = signal(false);
  /** Hold for Turbo Spin 期間，重複觸發 clickSpin() 的計時器 */
  stopHoldTurbo$ = new Subject();
  // =================== Icon外觀 ===================
  musicIcon = computed(() => this.isMusicOn() ? "musical-note" : "musical-note pressed");
  soundIcon = computed(() => this.isSoundOn() ? "speaker-wave" : "speaker-wave pressed");
  rsImgPath = computed(() => this.rs.iconPath());
  // =================== Menu 相關 ===================
  /** 定義選單圖示對應表 */
  iconMap = computed(() => ({
    info: "exclamation-circle",
    history: "document-text",
    music: this.musicIcon(),
    sound: this.soundIcon(),
    exit: "arrow-right-start-on-rectangle"
  }));
  /** 定義選單切換狀態對應表 */
  toggleMap = computed(() => ({
    info: false,
    history: false,
    music: this.isMusicOn(),
    sound: this.isSoundOn(),
    exit: false
  }));
  /** 定義選單項目 */
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
      action: () => this.toggleMusic(),
      hasToggle: true
    },
    {
      id: "sound",
      label: this.appI18n.instant("sound", "Sound"),
      action: () => this.toggleSound(),
      hasToggle: true
    }
  ]);
  /** 自動旋轉選項 */
  autoplayOptionsSignal = computed(() => {
    const values = this.autoSpinOptions();
    return values.map((value) => ({
      label: value === Infinity ? "\u221E" : value.toString(),
      value,
      isInfinity: value === Infinity
    }));
  });
  get autoplayOptions() {
    return this.autoplayOptionsSignal();
  }
  // =================== Spin Button 上面的數字 ===================
  autoSpinTotal = computed(() => this.panel.autoSpinTotal());
  autoSpinRemaining = computed(() => this.panel.autoSpinRemaining());
  isAutoSpinInfinity = computed(() => this.autoSpinTotal() === Infinity);
  featureTotal = computed(() => this.panel.featureTotal());
  featureRemaining = computed(() => this.panel.featureRemaining());
  freeSpinRemaining = signal(0);
  freeSpinTotal = signal(0);
  // =================== SpinButton / AutoButton / Bar狀態 ===================
  spinButtonMode = signal("default");
  /** 目前顯示的是否為 ap-button-auto-spin-times（外框比 ap-spin-button 小，繞圈特效需要放大） */
  isAutoSpinTimesButtonMode = computed(() => isAutoSpinTimesButtonMode(this.spinButtonMode()));
  autoButtonMode = computed(() => this.rs.isFreeGameMode() ? "rs-free-game" : "default");
  /** Global Cooldown的時間 (秒) */
  globalCooldownTime = computed(() => this.panel.globalCooldownTime());
  constructor() {
    super();
    this.panel.debugSpinButtonMode$.subscribe(this.debugSpinButtonMode.bind(this));
    effect(() => {
      if (this.panel.isFeatureMode()) {
        this.spinButtonMode.set("feature-mode");
        this.showFeatureStart.set(true);
      } else if (this.panel.isAutoSpinning() && this.panel.isFreeBonusRound()) {
        this.spinButtonMode.set("free-bonus-auto-spin");
      } else if (this.panel.isFreeBonusRound()) {
        this.spinButtonMode.set("free-bonus");
      } else if (this.panel.isFreeSpinRound()) {
        this.spinButtonMode.set("free-spin");
      } else if (this.panel.isAutoSpinning() && this.panel.isDoubleChance()) {
        this.spinButtonMode.set("double-chance-auto-spin");
      } else if (this.panel.isDoubleChance()) {
        this.spinButtonMode.set("double-chance");
      } else if (this.panel.isAutoSpinning()) {
        this.spinButtonMode.set("auto-spin");
      } else {
        this.spinButtonMode.set("default");
      }
    });
    this.game.featureModeUpdated$.subscribe(() => {
      this.showFeatureStart.set(false);
    });
    this.campaign.activatedCampaign$.subscribe(this.onActivatedCampaign.bind(this));
    this.campaign.requiredTurnover$.subscribe((message) => {
      this.onActivatedCampaign(message.campaignList[0]);
    });
    this.api.spinRequest$.subscribe(() => {
      this.freeSpinRemaining.update((current) => current - 1);
      const nextTurover = new decimal_default(this.displayRemainingTurnover()).sub(this.wallet.realBet()).toNumber();
      this.displayRemainingTurnover.update((current) => nextTurover >= 0 ? nextTurover : 0);
    });
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
        const progress = Math.min(1, (now - startedAt) / _BottomPanelComponent.BALANCE_ANIMATION_MS);
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
    this.game.isPressHolding$.subscribe((message) => {
      this.stopHoldTurbo$.next();
      if (this.isHoldTurboEnabled() && this.panel.isAutoSpinning()) {
        this.toggleHoldTurbo(message.holding);
      }
    });
    this.panel.globalCooldownStarted$.subscribe(() => {
      this.triggerCooldownAnimation();
    });
    this.game.startSpinning$.subscribe(() => {
      this.spinCount.update((v) => v + 1);
    });
  }
  debugSpinButtonMode(mode) {
    this.spinButtonMode.set(mode);
  }
  roundBalance(value) {
    const precision = Math.pow(10, dec.decimalPlaces);
    return Math.round(value * precision) / precision;
  }
  /**
   * 啟動（或重新啟動）3 秒外圈動畫。呼叫時即使前一輪動畫還沒跑完也會強制重播
   */
  triggerCooldownAnimation() {
    this.spinCooldownTick.update((tick) => tick + 1);
  }
  // =================== 各種點擊事件處理 ===================
  clickInfo() {
    this.info.emit();
    this.isMenuOpen.set(false);
  }
  clickHistory() {
    this.history.emit();
    this.isMenuOpen.set(false);
  }
  clickExit() {
    this.panel.sendExitRequest();
  }
  /** 切換音樂狀態 */
  toggleMusic() {
    this.isMusicOn.update((current) => {
      const newState = !current;
      return newState;
    });
    this.panel.enableMusic(this.isMusicOn());
  }
  /** 切換聲音狀態 */
  toggleSound() {
    this.isSoundOn.update((current) => !current);
    const soundOn = this.isSoundOn();
    this.panel.enableSound(soundOn);
    this.soundService.setMuted(!soundOn);
  }
  /** 處理 Spin 按鈕點擊事件 */
  clickSpin() {
    if (!this.isGameBusy())
      this.soundService.playClick();
    this.spin.emit();
    this.panel.spin();
  }
  clickCampaignSpin() {
    if (this.campaign.isFreeSpinRunning()) {
      if (this.panel.isAutoSpinning()) {
        this.panel.stopAutoSpin();
      } else {
        this.panel.spin();
      }
    } else if (this.campaign.isFreeBonusRunning()) {
      this.panel.spin();
    }
  }
  clickTurbo() {
    const speed = this.updateTurboState();
    this.panel.setGameSpeed(speed);
  }
  clickFeature() {
    if (this.panel.isDoubleChance()) {
      this.panel.stopDoubleChance();
    } else if (this.campaign.currentCampaign()) {
      this.campaign.setCurrentId(null);
    } else {
      this.eventCenter.open("buy-feature");
    }
  }
  clickFeatureCancel() {
    if (this.panel.isDoubleChance()) {
      this.panel.stopDoubleChance();
    } else if (this.wallet.campaignSetting()) {
      this.campaign.setCurrentId(null);
    }
  }
  clickCampaign() {
    this.eventCenter.open("campaign");
  }
  toggleMenu(event) {
    event.stopPropagation();
    this.isMenuOpen.update((open) => !open);
  }
  closeMenu() {
    this.isMenuOpen.set(false);
  }
  clickAutoplay() {
    if (this.campaign.isFreeSpinRunning()) {
      this.panel.startAutoSpin(this.campaign.currentCampaign()?.progressRemaining || 0);
    } else {
      this.isAutoplayMenuOpen.update((open) => !open);
    }
  }
  closeAutoplayMenu() {
    this.isAutoplayMenuOpen.set(false);
  }
  clickAutoplayOption(value) {
    this.closeAutoplayMenu();
    this.panel.startAutoSpin(value);
  }
  clickStopAutoSpin() {
    this.panel.stopAutoSpin();
  }
  clickFeatureSpin() {
    this.panel.immediatelyStop();
  }
  clickIncreaseBet() {
    this.panel.increaseBet();
  }
  clickDecreaseBet() {
    this.panel.decreaseBet();
  }
  /** 關閉自動旋轉選單 */
  onWindowBlur() {
    this.isAutoplayMenuOpen.set(false);
    this.isMenuOpen.set(false);
  }
  toggleMusicAtAutoButton() {
  }
  toggleHoldTurbo(enable) {
    this.isHoldingTurbo.set(enable);
    this.stopHoldTurbo$.next();
    if (enable) {
      interval(this.turboSkipIntervalMs()).pipe(takeUntil(this.stopHoldTurbo$), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        if (this.panel.isBalanceInsufficient()) {
          return;
        }
        this.clickSpin();
      });
    }
  }
  // =================== 其他功能函式 ===================
  onActivatedCampaign(campaign) {
    if (!campaign) {
      this.showRemainingTurnover.set(false);
    } else if (campaign.displayType === "freeBonus") {
      this.showRemainingTurnover.set(true);
      this.displayRemainingTurnover.set(campaign.progressRemaining || 0);
      this.displayEndTime.set(new Date(campaign.endTime).toLocaleString(this.session.locale, { hour12: false }));
    } else if (campaign.displayType === "freeSpins") {
      this.freeSpinTotal.set(campaign.progressTotal || 0);
      this.freeSpinRemaining.set(campaign.progressRemaining || 0);
    }
  }
  static \u0275fac = function BottomPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomPanelComponent, selectors: [["bottom-panel"]], hostBindings: function BottomPanelComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("blur", function BottomPanelComponent_blur_HostBindingHandler() {
        return ctx.onWindowBlur();
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { pressHintEnabled: [1, "pressHintEnabled"], pressHintType: [1, "pressHintType"] }, outputs: { spin: "spin", info: "info", history: "history" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 44, vars: 80, consts: [[1, "relative", "size-full", 2, "background", "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)"], [1, "absolute", "top-0", "left-1/2", "flex", "items-center", "justify-center", 2, "transform", "translateX(-50%)", 3, "fontSize"], [1, "absolute", "inset-0", 3, "ngClass"], [1, "absolute", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", 3, "click", "ngClass", "hasBadge", "disabled"], [1, "absolute", "-translate-x-1/2", "-translate-y-1/2", "cursor-pointer", "pointer-events-auto", 3, "click", "ngClass", "disabled"], [3, "variant"], [1, "absolute", "translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", 3, "ngClass"], [1, "relative", "shrink-0"], [1, "relative", "size-full", "cursor-pointer", "transition-transform", "hover:scale-105", "active:scale-95", 3, "height", "hasBadge"], ["data-testid", "panel-autoplay", 1, "relative", "size-full", 3, "ngClass", "disabled"], ["clickOutside", "", 1, "absolute", "left-1/2", "bottom-full", "mb-2", "z-sticky", 2, "-webkit-transform", "translateX(-50%)", "transform", "translateX(-50%)"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "absolute", "translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", "touch-none", 3, "touchstart", "pointerdown", "ngClass", "hasBadge", "disabled"], [1, "absolute", "flex", "items-center", "rounded-xl", "p-1", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", "touch-none", 2, "background-color", "rgba(24, 24, 27, 0.8)", 3, "touchstart"], ["data-testid", "panel-decrease", "appPointerDownSound", "", "data-no-click-sound", "", 3, "pointerdown", "ngClass", "disabledCoverVariant", "hasBadge", "disabled"], ["data-testid", "panel-increase", "appPointerDownSound", "", "data-no-click-sound", "", 3, "pointerdown", "ngClass", "disabledCoverVariant", "hasBadge", "disabled"], ["data-testid", "panel-spin", 1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", "touch-none", 3, "touchstart"], [3, "pressHintEnabled", "pressHintTimerEnabled", "scale", "totalSpins", "currentSpins", "enableLightingEffect"], ["mode", "free-bonus-auto-spin", 3, "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "bonus", "data-no-click-sound", "", 3, "pressHintType", "ngClass", "spinCount", "height", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [3, "scale", "totalSpins", "currentSpins"], ["mode", "double-chance-auto-spin", 3, "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "chance", "data-no-click-sound", "", 3, "ngClass", "spinCount", "height", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], ["mode", "auto-spin", 3, "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["data-no-click-sound", "", 3, "pressHintEnabled", "spinCount", "ngClass", "height", "disabled", "fastSpinDisabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [1, "absolute", "bottom-0", "left-0", "right-0", "flex", "items-center", "justify-between", "pr-4", "text-zinc-100", "font-semibold", 2, "border-top", "0.15rem solid rgba(161, 161, 170, 0.6)", "background-color", "rgba(0, 0, 0, 0.5)"], [1, "relative", "shrink-0", "flex", "justify-center", "items-center", "pointer-events-auto"], ["data-testid", "panel-menu", "name", "bar-3", "appPointerDownSound", "", "data-no-click-sound", "", 1, "relative", "size-full", "cursor-pointer", "hover:text-yellow-400", 3, "click"], ["data-testid", "panel-busy", 1, "absolute", "inset-0", "bg-black/50"], [1, "absolute", "inset-0"], ["clickOutside", "", 1, "absolute", "left-0", "bottom-full", "animate-fade-up", "animate-once", "animate-duration-200", "z-dropdown", 3, "clickOutside", "hidden"], [1, "min-w-56", "justify-center", "items-center", "rounded-t-md", "border", "border-zinc-400/50", "bg-zinc-900", "text-zinc-300", "p-2"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold"], [1, "grid", "flex-1", "grid-cols-3", "items-center"], [1, "grid", "flex-1", "grid-cols-3"], [1, "absolute", "mx-auto", "w-full", "px-2", "text-zinc-300", "from-black/50", "via-zinc-800/0", "to-black/50", "inline-flex", 3, "left-0", "right-0", "bg-linear-to-r", "bottom", "fontSize"], [1, "relative", "size-full", "cursor-pointer", "transition-transform", "hover:scale-105", "active:scale-95", 3, "click", "hasBadge"], [1, "absolute", "inset-0", "w-full", "h-full", "text-zinc-100", 3, "name"], ["alt", "RS", 1, "absolute", "left-1/2", "top-1/2", "z-10", "w-[90%]", "h-[90%]", "-translate-x-1/2", "-translate-y-1/2", "-rotate-6", "object-contain", "pointer-events-none", "drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]", 3, "src"], ["data-testid", "panel-autoplay", 1, "relative", "size-full", 3, "click", "ngClass", "disabled"], ["clickOutside", "", 1, "absolute", "left-1/2", "bottom-full", "mb-2", "z-sticky", 2, "-webkit-transform", "translateX(-50%)", "transform", "translateX(-50%)", 3, "clickOutside"], [1, "min-w-26", "rounded-2xl", "bg-zinc-800", "text-white", "cursor-pointer", "animate-fade-up", "animate-once", "animate-duration-200", 2, "border", "2px solid rgb(251 251 251)", "box-shadow", "0 0 0 3px rgb(24 24 27)"], [1, "flex", "items-center", "justify-center", "py-2", "text-xl", "font-bold", "text-white", "hover:text-yellow-300", 3, "border-bottom"], [1, "flex", "items-center", "justify-center", "py-2", "text-xl", "font-bold", "text-white", "hover:text-yellow-300", 3, "click"], ["name", "infinite default", 1, "size-6.5"], [3, "buttonClick", "pressHintEnabled", "pressHintTimerEnabled", "scale", "totalSpins", "currentSpins", "enableLightingEffect"], ["mode", "free-bonus-auto-spin", 3, "buttonClick", "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "bonus", "data-no-click-sound", "", 3, "buttonClick", "turboHold", "pressHintType", "ngClass", "spinCount", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [3, "buttonClick", "scale", "totalSpins", "currentSpins"], ["mode", "double-chance-auto-spin", 3, "buttonClick", "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "chance", "data-no-click-sound", "", 3, "buttonClick", "turboHold", "ngClass", "spinCount", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], ["mode", "auto-spin", 3, "buttonClick", "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["data-no-click-sound", "", 3, "buttonClick", "turboHold", "pressHintEnabled", "spinCount", "ngClass", "disabled", "fastSpinDisabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], ["viewBox", "0 0 100 100", "aria-hidden", "true", 1, "ga-spin-progress-ring", "absolute", "inset-0", 3, "ga-spin-progress-ring--auto-spin-times"], ["viewBox", "0 0 100 100", "aria-hidden", "true", 1, "ga-spin-progress-ring", "absolute", "inset-0"], ["cx", "50", "cy", "50", "r", "46", "pathLength", "100"], [1, "absolute", "inset-0", 3, "click"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold", 3, "click"], [1, "size-6", 3, "name"], [1, "flex-1", "uppercase"], ["variant", "quick", 3, "accentColor", "checked"], [1, "flex", "items-center", "justify-start", "space-x-2", "ml-2"], [1, "text-yellow-400"], ["data-testid", "panel-balance", 1, "space-x-1", "text-zinc-200", "whitespace-nowrap"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "inline-block", "min-w-[4ch]", "text-left", "tabular-nums", "text-zinc-200"], ["data-testid", "panel-bet", 1, "flex", "space-x-1"], [1, "flex", "items-center", "justify-start", "space-x-2", "ml-8", "sm:ml-10", "md:ml-12", "lg:ml-14"], [1, "inline-block", "min-w-[4ch]", "text-left", "text-zinc-200", "tabular-nums", "whitespace-nowrap"], ["data-testid", "panel-win", 1, "flex", "space-x-1"], [1, "flex", "justify-start", "items-center", "space-x-1", "ml-1"], [1, "text-yellow-400", 3, "name"], ["data-testid", "panel-balance", 1, "text-zinc-200", "whitespace-nowrap"], [1, "flex", "justify-center"], [1, "flex", "items-center", "space-x-1"], ["name", "prizes", 1, "text-yellow-400"], ["data-testid", "panel-bet", 1, "text-zinc-200"], [1, "flex", "justify-start", "ml-6"], ["name", "trophy", 1, "text-yellow-400"], ["data-testid", "panel-win", 1, "inline-block", "min-w-[4ch]", "text-left", "tabular-nums", "text-zinc-200"], [1, "absolute", "mx-auto", "w-full", "px-2", "text-zinc-300", "from-black/50", "via-zinc-800/0", "to-black/50", "inline-flex"], [1, "flex", "w-full"], [1, "flex", "items-center", "justify-center", "space-x-1"], ["name", "clock"], [1, "whitespace-nowrap", "leading-tight", "sm:py-0.5"]], template: function BottomPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "top-status-bar", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "ap-icon-badge", 3);
      \u0275\u0275listener("click", function BottomPanelComponent_Template_ap_icon_badge_click_3_listener() {
        return ctx.clickCampaign();
      });
      \u0275\u0275element(4, "ap-icon-campaign-circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ap-icon-badge", 4);
      \u0275\u0275listener("click", function BottomPanelComponent_Template_ap_icon_badge_click_5_listener() {
        return ctx.clickFeature();
      });
      \u0275\u0275element(6, "ap-icon-buy-feature-circle", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
      \u0275\u0275conditionalCreate(9, BottomPanelComponent_Conditional_9_Template, 2, 4, "ap-icon-badge", 8)(10, BottomPanelComponent_Conditional_10_Template, 2, 2)(11, BottomPanelComponent_Conditional_11_Template, 2, 3, "ap-icon-badge", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, BottomPanelComponent_Conditional_12_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ap-icon-badge", 11);
      \u0275\u0275listener("touchstart", function BottomPanelComponent_Template_ap_icon_badge_touchstart_13_listener($event) {
        return $event.preventDefault();
      })("pointerdown", function BottomPanelComponent_Template_ap_icon_badge_pointerdown_13_listener() {
        return ctx.clickTurbo();
      });
      \u0275\u0275conditionalCreate(14, BottomPanelComponent_Conditional_14_Template, 1, 1, "ap-icon-turbo-circle", 5)(15, BottomPanelComponent_Conditional_15_Template, 1, 1, "ap-icon-turbo-circle", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275listener("touchstart", function BottomPanelComponent_Template_div_touchstart_16_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275elementStart(17, "ap-icon-badge", 13);
      \u0275\u0275listener("pointerdown", function BottomPanelComponent_Template_ap_icon_badge_pointerdown_17_listener() {
        return ctx.clickDecreaseBet();
      });
      \u0275\u0275element(18, "ap-icon-decrease-box");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "div");
      \u0275\u0275elementStart(20, "ap-icon-badge", 14);
      \u0275\u0275listener("pointerdown", function BottomPanelComponent_Template_ap_icon_badge_pointerdown_20_listener() {
        return ctx.clickIncreaseBet();
      });
      \u0275\u0275element(21, "ap-icon-increase-box");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275listener("touchstart", function BottomPanelComponent_Template_div_touchstart_22_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275conditionalCreate(23, BottomPanelComponent_Conditional_23_Template, 1, 6, "ap-button-auto-spin-times", 16)(24, BottomPanelComponent_Conditional_24_Template, 1, 5, "ap-button-auto-spin-times", 17)(25, BottomPanelComponent_Conditional_25_Template, 1, 13, "ap-spin-button", 18)(26, BottomPanelComponent_Conditional_26_Template, 1, 3, "ap-button-free-spins", 19)(27, BottomPanelComponent_Conditional_27_Template, 1, 5, "ap-button-auto-spin-times", 20)(28, BottomPanelComponent_Conditional_28_Template, 1, 12, "ap-spin-button", 21)(29, BottomPanelComponent_Conditional_29_Template, 1, 5, "ap-button-auto-spin-times", 22)(30, BottomPanelComponent_Conditional_30_Template, 1, 14, "ap-spin-button", 23);
      \u0275\u0275conditionalCreate(31, BottomPanelComponent_Conditional_31_Template, 2, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 24)(33, "div", 25)(34, "ap-icon", 26);
      \u0275\u0275listener("click", function BottomPanelComponent_Template_ap_icon_click_34_listener($event) {
        return ctx.toggleMenu($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, BottomPanelComponent_Conditional_35_Template, 1, 0, "div", 27);
      \u0275\u0275conditionalCreate(36, BottomPanelComponent_Conditional_36_Template, 1, 0, "div", 28);
      \u0275\u0275elementStart(37, "div", 29);
      \u0275\u0275listener("clickOutside", function BottomPanelComponent_Template_div_clickOutside_37_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(38, "div", 30);
      \u0275\u0275repeaterCreate(39, BottomPanelComponent_For_40_Template, 5, 4, "div", 31, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(41, BottomPanelComponent_Conditional_41_Template, 20, 18, "div", 32)(42, BottomPanelComponent_Conditional_42_Template, 18, 16, "div", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(43, BottomPanelComponent_Conditional_43_Template, 12, 29, "div", 34);
    }
    if (rf & 2) {
      \u0275\u0275classProp("flex", ctx.isLandscape())("flex-col", ctx.isLandscape());
      \u0275\u0275advance();
      \u0275\u0275property("fontSize", ctx.topStatusBarFontSize());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(68, _c0, ctx.isLandscape(), ctx.isPortrait()));
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.buttonIconSize());
      \u0275\u0275classProp("invisible", ctx.isCampaignHidden());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(71, _c1, ctx.campaignButtonPositionClass(), !ctx.isCampaignDisabled() ? "cursor-pointer transition-transform hover:scale-105 active:scale-95" : ""))("hasBadge", ctx.campaignHasBadge())("disabled", ctx.isCampaignDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.buttonIconSize());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(74, _c1, ctx.featureButtonPositionClass(), !ctx.isFeatureDisabled() ? "transition-transform hover:scale-105 active:scale-95" : ""))("disabled", ctx.isFeatureDisabled());
      \u0275\u0275advance();
      \u0275\u0275property("variant", ctx.isFeatureCancelled() ? "cancel" : "default");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.autoplayButtonPositionClass());
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.buttonIconSize())("height", ctx.buttonIconSize());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.autoButtonMode() === "music-toggle" ? 9 : ctx.autoButtonMode() === "rs-free-game" ? 10 : 11);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isAutoplayMenuOpen() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.buttonIconSize());
      \u0275\u0275classProp("invisible", ctx.isTurboHidden());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(77, _c1, ctx.turboButtonPositionClass(), !ctx.isTurboDisabled() ? "cursor-pointer transition-transform hover:scale-105 active:scale-95" : ""))("hasBadge", false)("disabled", ctx.isTurboDisabled());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isHoldingTurbo() ? 14 : 15);
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
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("--ga-auto-spin-scale", ctx.freeSpinScale());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.spinButtonMode() === "feature-mode" ? 23 : ctx.spinButtonMode() === "free-bonus-auto-spin" ? 24 : ctx.spinButtonMode() === "free-bonus" ? 25 : ctx.spinButtonMode() === "free-spin" ? 26 : ctx.spinButtonMode() === "double-chance-auto-spin" ? 27 : ctx.spinButtonMode() === "double-chance" ? 28 : ctx.spinButtonMode() === "auto-spin" ? 29 : 30);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.isGameBusy() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize())("height", ctx.isLandscape() ? ctx.listBottomHeight() : null);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.bottomMenuIconSize())("width", ctx.bottomMenuIconSize());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMenuDisabled() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMenuOpen() ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("margin-bottom", ctx.menuOffset());
      \u0275\u0275property("hidden", !ctx.isMenuOpen());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.menuItems());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLandscape() ? 41 : 42);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showRemainingTurnover() ? 43 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    ApIconComponent,
    ApToggleSwitchComponent,
    ApButtonFreeSpinsComponent,
    ApButtonAutoSpinTimesComponent,
    ApIconBadgeComponent,
    ApSpinButtonComponent,
    PointerDownSoundDirective,
    ClickOutsideDirective,
    MoneyTextPipe,
    ApIconCampaignCircleComponent,
    ApIconBuyFeatureCircleComponent,
    ApIconMusicCircleComponent,
    ApIconAutoplayCircleComponent,
    ApIconTurboCircleComponent,
    ApIconDecreaseBoxComponent,
    ApIconIncreaseBoxComponent,
    TopStatusBarComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n  pointer-events: none;\n}\n.ga-spin-progress-ring[_ngcontent-%COMP%] {\n  inset: -0.2rem;\n  width: calc(100% + 0.4rem);\n  height: calc(100% + 0.4rem);\n  z-index: 1;\n  overflow: visible;\n  color: rgba(255, 255, 255, 0.8);\n  pointer-events: none;\n  transform: translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring--auto-spin-times[_ngcontent-%COMP%] {\n  transform: scale(var(--ga-auto-spin-scale, 1)) translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 4;\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: _ngcontent-%COMP%_ga-spin-progress-fill 3s linear forwards;\n}\n@keyframes _ngcontent-%COMP%_ga-spin-progress-fill {\n  0% {\n    stroke-dashoffset: 100;\n    opacity: 1;\n  }\n  99% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=bottom-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomPanelComponent, [{
    type: Component,
    args: [{ selector: "bottom-panel", standalone: true, imports: [
      CommonModule,
      ApIconComponent,
      ApToggleSwitchComponent,
      ApButtonFreeSpinsComponent,
      ApButtonAutoSpinTimesComponent,
      ApIconBadgeComponent,
      ApSpinButtonComponent,
      PointerDownSoundDirective,
      ClickOutsideDirective,
      MoneyTextPipe,
      ApIconCampaignCircleComponent,
      ApIconBuyFeatureCircleComponent,
      ApIconMusicCircleComponent,
      ApIconAutoplayCircleComponent,
      ApIconTurboCircleComponent,
      ApIconDecreaseBoxComponent,
      ApIconIncreaseBoxComponent,
      TopStatusBarComponent,
      TopStatusBarComponent
    ], template: `<div
  class="relative size-full"
  style="background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)"
  [class.flex]="isLandscape()"
  [class.flex-col]="isLandscape()"
>
  <top-status-bar
    [fontSize]="topStatusBarFontSize()"
    class="absolute top-0 left-1/2 flex items-center justify-center"
    style="transform: translateX(-50%)"
  />

  <!-- Buttons Area -->
  <div
    class="absolute inset-0 "
    [ngClass]="{
      'bottom-1/15': isLandscape(),
      'bottom-1/6': isPortrait(),
    }"
  >
    <!-- \u5DE6\u908A\u7B2C\u4E00\u500B\u6309\u9215 -->
    <ap-icon-badge
      class="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      [ngClass]="[
        campaignButtonPositionClass(),
        !isCampaignDisabled() ? 'cursor-pointer transition-transform hover:scale-105 active:scale-95' : '',
      ]"
      [class.invisible]="isCampaignHidden()"
      [style.height]="buttonIconSize()"
      [hasBadge]="campaignHasBadge()"
      [disabled]="isCampaignDisabled()"
      (click)="clickCampaign()"
    >
      <ap-icon-campaign-circle />
    </ap-icon-badge>

    <!-- \u5DE6\u908A\u7B2C\u4E8C\u500B\u6309\u9215 -->
    <ap-icon-badge
      class="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto"
      [ngClass]="[
        featureButtonPositionClass(),
        !isFeatureDisabled() ? 'transition-transform hover:scale-105 active:scale-95' : '',
      ]"
      [style.height]="buttonIconSize()"
      [disabled]="isFeatureDisabled()"
      (click)="clickFeature()"
    >
      <ap-icon-buy-feature-circle
        [variant]="isFeatureCancelled() ? 'cancel' : 'default'"
      />
    </ap-icon-badge>

    <!-- \u53F3\u908A\u7B2C\u4E8C\u500B\u6309\u9215 -->
    <div
      class="absolute translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      [ngClass]="autoplayButtonPositionClass()"
    >
      <div
        class="relative shrink-0"
        [style.width]="buttonIconSize()"
        [style.height]="buttonIconSize()"
      >
        @if (autoButtonMode() === "music-toggle") {
          <ap-icon-badge
            class="relative size-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
            [style.height]="buttonIconSize()"
            [hasBadge]="false"
            (click)="toggleMusicAtAutoButton()"
          >
            <ap-icon-music-circle
              [variant]="isMusicAtAutoButtonOn() ? 'default' : 'pressed'"
            />
          </ap-icon-badge>
        } @else if (autoButtonMode() === "rs-free-game") {
          <ap-icon
            [name]="'blank'"
            class="absolute inset-0 w-full h-full text-zinc-100"
          />
          <img
            [src]="rsImgPath() + \`?v=\${version()}\`"
            alt="RS"
            class="absolute left-1/2 top-1/2 z-10 w-[90%] h-[90%] -translate-x-1/2 -translate-y-1/2 -rotate-6 object-contain pointer-events-none drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]"
          />
        } @else {
          <ap-icon-badge
            data-testid="panel-autoplay"
            class="relative size-full"
            [ngClass]="
              isAutoPlayDisabled()
                ? ''
                : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'
            "
            [disabled]="isAutoPlayDisabled()"
            [attr.disabled]="isAutoPlayDisabled() ? '' : null"
            (click)="$event.stopPropagation(); clickAutoplay()"
          >
            <ap-icon-autoplay-circle />
          </ap-icon-badge>
        }
      </div>

      <!-- AutoPlay\u7684\u9078\u55AE -->
      @if (isAutoplayMenuOpen()) {
        <div
          class="absolute left-1/2 bottom-full mb-2 z-sticky"
          style="
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          "
          clickOutside
          (clickOutside)="closeAutoplayMenu()"
        >
          <div
            class="min-w-26 rounded-2xl bg-zinc-800 text-white cursor-pointer animate-fade-up animate-once animate-duration-200"
            style="
              border: 2px solid rgb(251 251 251);
              box-shadow: 0 0 0 3px rgb(24 24 27);
            "
          >
            @for (
              option of autoplayOptions;
              track option.value;
              let isLast = $last
            ) {
              <div
                class="flex items-center justify-center py-2 text-xl font-bold text-white hover:text-yellow-300"
                [style.border-bottom]="
                  isLast ? 'none' : '1px solid rgb(63 63 70)'
                "
                (click)="clickAutoplayOption(option.value)"
              >
                @if (option.isInfinity) {
                  <ap-icon name="infinite default" class="size-6.5" />
                } @else {
                  {{ option.value }}
                }
              </div>
            }
          </div>
        </div>
      }
    </div>

    <!-- \u53F3\u908A\u7B2C\u4E00\u500B\u6309\u9215 -->
    <ap-icon-badge
      class="absolute translate-x-1/2 -translate-y-1/2 pointer-events-auto touch-none"
      (touchstart)="$event.preventDefault()"
      [class.invisible]="isTurboHidden()"
      [ngClass]="[
        turboButtonPositionClass(),
        !isTurboDisabled() ? 'cursor-pointer transition-transform hover:scale-105 active:scale-95' : '',
      ]"
      appPointerDownSound
      data-no-click-sound
      [style.height]="buttonIconSize()"
      [hasBadge]="false"
      [disabled]="isTurboDisabled()"
      (pointerdown)="clickTurbo()"
    >
      @if (isHoldingTurbo()) {
        <ap-icon-turbo-circle [variant]="'pressed2'" />
      } @else {
        <ap-icon-turbo-circle [variant]="turboState()" />
      }
    </ap-icon-badge>

    <!-- Center Group -->
    <div
      class="absolute flex items-center rounded-xl p-1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto touch-none"
      (touchstart)="$event.preventDefault()"
      style="background-color: rgba(24, 24, 27, 0.8)"
      [style.gap]="centerGroupGap()"
    >
      <ap-icon-badge
        data-testid="panel-decrease"
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
        data-testid="panel-increase"
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

    <!-- Spin Button -->
    <!-- \u963B\u6B62 Safari \u5C07\u5FEB\u901F\u9023\u9EDE Spin \u6309\u9215\u5224\u5B9A\u70BA\u96D9\u64CA\u7E2E\u653E\u3002 -->
    <div
      data-testid="panel-spin"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto touch-none"
      (touchstart)="$event.preventDefault()"
      [style.--ga-auto-spin-scale]="freeSpinScale()"
    >
      @if (spinButtonMode() === "feature-mode") {
        <ap-button-auto-spin-times
          [pressHintEnabled]="featureStartTipEnabled()"
          [pressHintTimerEnabled]="featureStartTipEnabled()"
          [scale]="freeSpinScale()"
          [totalSpins]="featureTotal() || 0"
          [currentSpins]="featureRemaining() || 0"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickFeatureSpin()"
        />
      } @else if (spinButtonMode() === "free-bonus-auto-spin") {
        <ap-button-auto-spin-times
          mode="free-bonus-auto-spin"
          [scale]="freeSpinScale()"
          [totalSpins]="autoSpinTotal() || 0"
          [currentSpins]="autoSpinRemaining() || 0"
          [variant]="isAutoSpinInfinity() ? 'infinity' : 'default'"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickStopAutoSpin()"
        />
      } @else if (spinButtonMode() === "free-bonus") {
        <ap-spin-button
          variant="bonus"
          data-no-click-sound
          [pressHintType]="pressHintType()"
          [ngClass]="{
            'cursor-pointer hover:scale-105 transition-transform active:scale-95':
              !isSpinDisabled()
          }"
          [spinCount]="spinCount()"
          [style.height]="spinIconSize()"
          [disabled]="
            isSpinDisabled()
          "
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          [isSpinning]="isGameBusy()"
          [holdTurboEnabled]="isHoldTurboEnabled()"
          [turboHoldThresholdMs]="turboHoldThresholdMs()"
          [idleTooltipMs]="idleTooltipMs()"
          (buttonClick)="clickCampaignSpin()"
          (turboHold)="toggleHoldTurbo($event)"
        />
      } @else if (spinButtonMode() === "free-spin") {
        <ap-button-free-spins
          [scale]="freeSpinScale()"
          [totalSpins]="freeSpinTotal() || 0"
          [currentSpins]="freeSpinRemaining() || 0"
          (buttonClick)="clickCampaignSpin()"
        />
      } @else if (spinButtonMode() === "double-chance-auto-spin") {
        <ap-button-auto-spin-times
          mode="double-chance-auto-spin"
          [scale]="freeSpinScale()"
          [totalSpins]="autoSpinTotal() || 0"
          [currentSpins]="autoSpinRemaining() || 0"
          [variant]="isAutoSpinInfinity() ? 'infinity' : 'default'"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickStopAutoSpin()"
        />
      } @else if (spinButtonMode() === "double-chance") {
        <ap-spin-button
          variant="chance"
          data-no-click-sound
          [ngClass]="{
            'cursor-pointer hover:scale-105 transition-transform active:scale-95':
              !isSpinDisabled()
          }"
          [spinCount]="spinCount()"
          [style.height]="spinIconSize()"
          [disabled]="
            isSpinDisabled()
          "
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          [isSpinning]="isGameBusy()"
          [holdTurboEnabled]="isHoldTurboEnabled()"
          [turboHoldThresholdMs]="turboHoldThresholdMs()"
          [idleTooltipMs]="idleTooltipMs()"
          (buttonClick)="clickSpin()"
          (turboHold)="toggleHoldTurbo($event)"
        />
      } @else if (spinButtonMode() === "auto-spin") {
        <ap-button-auto-spin-times
          mode="auto-spin"
          [scale]="freeSpinScale()"
          [totalSpins]="autoSpinTotal() || 0"
          [currentSpins]="autoSpinRemaining() || 0"
          [variant]="isAutoSpinInfinity() ? 'infinity' : 'default'"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickStopAutoSpin()"
        />
      } @else {
        <ap-spin-button
          [pressHintEnabled]="isClickToSpinTipEnabled()"
          [spinCount]="spinCount()"
          data-no-click-sound
          [ngClass]="{
            'cursor-pointer hover:scale-105 transition-transform active:scale-95':
              !isSpinDisabled()
          }"
          [style.height]="spinIconSize()"
          [disabled]="
            isSpinDisabled()
          "
          [fastSpinDisabled]="isFastSpinDisabled()"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          [isSpinning]="isGameBusy()"
          [holdTurboEnabled]="isHoldTurboEnabled()"
          [turboHoldThresholdMs]="turboHoldThresholdMs()"
          [idleTooltipMs]="idleTooltipMs()"
          (buttonClick)="clickSpin()"
          (turboHold)="toggleHoldTurbo($event)"
        />
      }
      <!-- \u5728\u6309\u9215\u6700\u4E0A\u65B9\u986F\u793A 3 \u79D2\u7E5E\u5708\u51B7\u537B\u52D5\u756B\u3002
      \u7528 @for track spinCooldownTick() \u8B93\u6BCF\u6B21\u89F8\u767C\u90FD\u5F37\u5236\u92B7\u6BC0\u91CD\u5EFA svg \u7BC0\u9EDE\uFF0C\u78BA\u4FDD\u9023\u7E8C\u81EA\u52D5\u65CB\u8F49\u6BCF\u6B21\u90FD\u91CD\u65B0\u64AD\u653E\u7279\u6548\u3002 -->
      @if (isGameBusy()) {
        @for (tick of (spinCooldownTick() > 0 ? [spinCooldownTick()] : []); track tick) {
          <svg
            class="ga-spin-progress-ring absolute inset-0"
            [class.ga-spin-progress-ring--auto-spin-times]="isAutoSpinTimesButtonMode()"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="46" pathLength="100" />
          </svg>
        }
      }
    </div>
  </div>

  <!-- Bottom Bar -->
  <div
    class="absolute bottom-0 left-0 right-0 flex items-center justify-between pr-4 text-zinc-100 font-semibold"
    style="
      border-top: 0.15rem solid rgba(161, 161, 170, 0.6);
      background-color: rgba(0, 0, 0, 0.5);
    "
    [style.fontSize]="bottomBarFontSize()"
    [style.height]="isLandscape() ? listBottomHeight() : null"
  >
    <div class="relative shrink-0 flex justify-center items-center pointer-events-auto">
      <ap-icon
        data-testid="panel-menu"
        name="bar-3"
        appPointerDownSound
        data-no-click-sound
        class="relative size-full cursor-pointer hover:text-yellow-400"
        [style.height]="bottomMenuIconSize()"
        [style.width]="bottomMenuIconSize()"
        (click)="toggleMenu($event)"
      >
      </ap-icon>
      @if (isMenuDisabled()) {
        <div
          data-testid="panel-busy"
          class="absolute inset-0 bg-black/50"
        ></div>
      }
      @if (isMenuOpen()) {
        <div (click)="closeMenu()" class="absolute inset-0"></div>
      }
      <div
        class="absolute left-0 bottom-full animate-fade-up animate-once animate-duration-200 z-dropdown"
        [style.marginBottom]="menuOffset()"
        [hidden]="!isMenuOpen()"
        clickOutside
        (clickOutside)="closeMenu()"
      >
        <div
          class="min-w-56 justify-center items-center rounded-t-md border border-zinc-400/50 bg-zinc-900 text-zinc-300 p-2"
        >
          @for (item of menuItems(); track item.id) {
            <div
              [attr.data-testid]="'panel-menu-' + item.id"
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
    </div>

    @if (isLandscape()) {
      <div class="grid flex-1 grid-cols-3 items-center">
        <div class="flex items-center justify-start space-x-2 ml-2">
          <h6 class="text-yellow-400" [style.fontSize]="bottomBarFontSize()">
            {{ getBalanceLabel() }}
          </h6>
          <div
            data-testid="panel-balance"
            class="space-x-1 text-zinc-200 whitespace-nowrap"
            [style.fontSize]="bottomBarFontSize()"
          >
            @if (isBalanceHided()) {
              ***
            } @else {
              {{ displayCurrency() }}
              {{ displayBalance() | moneyText: { addSymbol: false } }}
            }
          </div>
        </div>

        <div class="flex items-center justify-center gap-2">
          <h6 class="text-yellow-400" [style.fontSize]="bottomBarFontSize()">
            {{ getBetLabel() }}
          </h6>
          <div
            class="inline-block min-w-[4ch] text-left tabular-nums text-zinc-200"
            [style.fontSize]="bottomBarFontSize()"
          >
            <div data-testid="panel-bet" class="flex space-x-1">
              @if (isBetHided()) {
                ***
              } @else {
                {{ displayCurrency() }}
                {{ displayBet() | moneyText: { addSymbol: false } }}
              }
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-start space-x-2 ml-8 sm:ml-10 md:ml-12 lg:ml-14"
        >
          <h6 class="text-yellow-400" [style.fontSize]="bottomBarFontSize()">
            {{ getWinLabel() }}
          </h6>
          <div
            class="inline-block min-w-[4ch] text-left text-zinc-200 tabular-nums whitespace-nowrap"
            [style.fontSize]="bottomBarFontSize()"
          >
            @if (isWinHided()) {
              ***
            } @else {
              <div data-testid="panel-win" class="flex space-x-1">
                @if (displayWin() !== null) {
                  {{ displayCurrency() }}
                  {{ displayWin()! | moneyText: { addSymbol: false } }}
                }
              </div>
            }
          </div>
        </div>
      </div>
      <!-- Mobile -->
    } @else {
      <!-- Balance -->
      <div class="grid flex-1 grid-cols-3">
        <div class="flex justify-start items-center space-x-1 ml-1">
          <ap-icon
            class="text-yellow-400"
            [style.height]="bottomIconSize()"
            [name]="isBonusWalletUsed() ? 'star' : 'wallet'"
          />
          <div
            data-testid="panel-balance"
            class="text-zinc-200 whitespace-nowrap"
            [style.fontSize]="bottomBarFontSize()"
          >
            @if (isBalanceHided()) {
              ***
            } @else {
              {{ displayCurrency() }}
              {{ displayBalance() | moneyText: { addSymbol: false } }}
            }
          </div>
        </div>

        <!-- Bet -->
        <div class="flex justify-center">
          <div class="flex items-center space-x-1">
            <ap-icon
              name="prizes"
              class="text-yellow-400"
              [style.height]="bottomIconSize()"
            />
            <div
              data-testid="panel-bet"
              class="text-zinc-200"
              [style.fontSize]="bottomBarFontSize()"
            >
              @if (isBetHided()) {
                ***
              } @else {
                {{ displayCurrency() }}
                {{ displayBet() | moneyText: { addSymbol: false } }}
              }
            </div>
          </div>
        </div>

        <!-- Win -->
        <div class="flex justify-start ml-6">
          <div class="flex items-center space-x-1">
            <ap-icon
              name="trophy"
              class="text-yellow-400"
              [style.height]="bottomIconSize()"
            />
            <div
              data-testid="panel-win"
              class="inline-block min-w-[4ch] text-left tabular-nums text-zinc-200"
              [style.fontSize]="bottomBarFontSize()"
            >
              @if (isWinHided()) {
                ***
              } @else if (displayWin() !== null) {
                {{ displayCurrency() }}
                {{ displayWin()! | moneyText: { addSymbol: false } }}
              }
            </div>
          </div>
        </div>
      </div>
    }
  </div>
</div>

@if (showRemainingTurnover()) {
  <div
    class="absolute mx-auto w-full px-2 text-zinc-300 from-black/50 via-zinc-800/0 to-black/50 inline-flex"
    [class.left-0]="isLandscape()"
    [class.right-0]="isLandscape()"
    [class.bg-linear-to-r]="isLandscape()"
    [style.bottom]="isPortrait() ? '16.6667%' : middleListBottomHeight()"
    [style.fontSize]="middleHintFontSize()"
  >
    <div
      class="flex w-full"
      [class.flex-col]="isPortrait()"
      [class.items-center]="isPortrait()"
      [class.flex-row]="isLandscape()"
      [class.justify-between]="isLandscape()"
    >
      <div
        class="flex items-center justify-center space-x-1"
        [class.order-2]="isLandscape()"
      >
        <ap-icon name="clock" [style.height]="middleHintIconSize()" />
        <div class="whitespace-nowrap leading-tight sm:py-0.5">
          {{ displayEndTime() }}
        </div>
      </div>
      <div
        class="whitespace-nowrap leading-tight sm:py-0.5"
        [class.order-1]="isLandscape()"
      >
        <span>{{ getRemainingTurnoverLabel() }}</span>
        <span> {{ displayRemainingTurnover()! | moneyText }}</span>
      </div>
    </div>
  </div>
}
`, styles: ["/* src/app/pages/bottom-panel/bottom-panel.component.css */\n:host {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n  pointer-events: none;\n}\n.ga-spin-progress-ring {\n  inset: -0.2rem;\n  width: calc(100% + 0.4rem);\n  height: calc(100% + 0.4rem);\n  z-index: 1;\n  overflow: visible;\n  color: rgba(255, 255, 255, 0.8);\n  pointer-events: none;\n  transform: translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring--auto-spin-times {\n  transform: scale(var(--ga-auto-spin-scale, 1)) translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring circle {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 4;\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: ga-spin-progress-fill 3s linear forwards;\n}\n@keyframes ga-spin-progress-fill {\n  0% {\n    stroke-dashoffset: 100;\n    opacity: 1;\n  }\n  99% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=bottom-panel.component.css.map */\n"] }]
  }], () => [], { onWindowBlur: [{
    type: HostListener,
    args: ["window:blur"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomPanelComponent, { className: "BottomPanelComponent", filePath: "src/app/pages/bottom-panel/bottom-panel.component.ts", lineNumber: 53 });
})();

// src/app/pages/campaign-popup-legacy/campaign-popup-legacy.component.ts
function CampaignPopupLegacyComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275listener("click", function CampaignPopupLegacyComponent_Conditional_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
    \u0275\u0275listener("close", function CampaignPopupLegacyComponent_Conditional_0_Template_ap_ui_frame_popup_close_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "ap-icon", 4)(5, "div", 5);
    \u0275\u0275elementStart(6, "h4", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "ap-button", 8);
    \u0275\u0275listener("clicked", function CampaignPopupLegacyComponent_Conditional_0_Template_ap_button_clicked_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAndCheckQueue());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("header", ctx_r1.header())("size", "mobile")("enableClose", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "gift default");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.windowContent(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r1.buttonText());
  }
}
var CampaignPopupLegacyComponent = class _CampaignPopupLegacyComponent {
  session = inject(ClientSessionService);
  ctrl = inject(CampaignFacadeService);
  lang = inject(ClientSessionService).language;
  locale = inject(ClientSessionService).locale;
  panel = inject(BottomPanelService);
  eventCenter = inject(EventCenterCtrlService);
  i18n = inject(AppI18nService);
  destroyRef = inject(DestroyRef);
  showWindow = this.ctrl.popupMessageVisible;
  windowContent = signal("");
  popupQueue = [];
  appI18n = inject(AppI18nService);
  header = computed(() => this.appI18n.instant("message", "Message"));
  buttonText = computed(() => this.appI18n.instant("Confirm_Btn", "Confirm"));
  close = output();
  constructor() {
    this.ctrl.underCondition$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onUnderConditionEvent.bind(this));
    this.ctrl.receivedFreeBonus$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onReceivedFreeBonus.bind(this));
    this.ctrl.receivedFreeSpin$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onReceivedFreeSpin.bind(this));
    this.ctrl.onGoingFreeBonus$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onOnGoingFreeBonus.bind(this));
    this.ctrl.onGoingFreeSpin$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onOnGoingFreeSpin.bind(this));
    this.ctrl.requiredTurnover$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onRequiredTurnover.bind(this));
    this.ctrl.freeSpinWithdrawMaximum$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onFreeSpinWithdrawMaximum.bind(this));
    this.ctrl.failed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onFailed.bind(this));
    this.ctrl.success$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onSuccess.bind(this));
    this.ctrl.sucessFullyClaim$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onSucessFullyClaim.bind(this));
    this.ctrl.failFullyRedeemed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onFailFullyRedeemed.bind(this));
    this.ctrl.openEventCenterCampaign$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onOpenEventCenterCampaign.bind(this));
  }
  ngAfterViewInit() {
    this.ctrl.setPopupActivated(true);
  }
  // 按popup外可以關閉popup
  onCancel() {
    this.close.emit();
  }
  closeAndCheckQueue() {
    this.ctrl.setPopupMessageVisible(false);
    if (this.popupQueue.length > 0) {
      const nextPopup = this.popupQueue.shift();
      if (nextPopup.content) {
        this.windowContent.set(nextPopup.content || "");
        this.ctrl.setPopupMessageVisible(true);
      } else if (nextPopup.groupId) {
        this.eventCenter.open(`campaign/${nextPopup.groupId}`);
      }
    }
  }
  addPopupToQueue(popup) {
    if (this.showWindow()) {
      this.popupQueue.push(popup);
    } else {
      if (popup.content) {
        this.windowContent.set(popup.content || "");
        this.ctrl.setPopupMessageVisible(true);
      } else if (popup.groupId) {
        this.eventCenter.open(`campaign/${popup.groupId}`);
      }
      this.panel.stopAutoSpin();
    }
  }
  onOnGoingFreeBonus(message) {
    if (message.campaignList.length === 0)
      return;
    const singleContent = this.i18n.instant("promo_popup4");
    const multiContent = this.i18n.instant("promo_popup_multi4");
    let popupContent = "";
    if (message.campaignList.length > 1) {
      const campaignNames = this.combineNames(message.campaignList);
      popupContent = multiContent.replace("{0}", `${campaignNames}
`);
    } else if (message.campaignList.length === 1) {
      const campaign = message.campaignList[0];
      popupContent = singleContent.replace("{0}", campaign.name);
      popupContent = popupContent.replace("{1}", new Date(campaign.endTime).toLocaleString(this.locale, { hour12: false }));
      popupContent = popupContent.replace("{2}", campaign.withdrawal?.turnoverThreshold ? dec.comma(campaign.withdrawal?.turnoverThreshold) : "N/A");
    }
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onReceivedFreeBonus(message) {
    if (message.campaignList.length === 0)
      return;
    const singleContent = this.i18n.instant("promo_popup1");
    const multiContent = this.i18n.instant("promo_popup_multi1");
    let popupContent = "";
    if (message.campaignList.length > 1) {
      const campaignNames = this.combineNames(message.campaignList);
      popupContent = multiContent.replace("{0}", `${campaignNames}`);
    } else if (message.campaignList.length === 1) {
      const campaign = message.campaignList[0];
      popupContent = singleContent.replace("{0}", campaign.name);
      popupContent = popupContent.replace("{1}", dec.comma(campaign.totalAmount));
    }
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onReceivedFreeSpin(message) {
    if (message.campaignList.length === 0)
      return;
    const singleContent = this.i18n.instant("promo_fs_13");
    const multiContent = this.i18n.instant("promo_fs_multi13");
    let popupContent = "";
    if (message.campaignList.length > 1) {
      const campaignNames = this.combineNames(message.campaignList);
      popupContent = multiContent.replace("{0}", `
${campaignNames}`);
    } else if (message.campaignList.length === 1) {
      const campaign = message.campaignList[0];
      popupContent = singleContent.replace("{0}", campaign.spinCount?.toString() ?? "0");
      popupContent = popupContent.replace("{1}", dec.comma(campaign.totalAmount));
    }
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onOnGoingFreeSpin(message) {
    if (message.campaignList.length === 0)
      return;
    const singleContent = this.i18n.instant("promo_fs_17");
    const multiContent = this.i18n.instant("promo_fs_multi17");
    let popupContent = "";
    if (message.campaignList.length > 1) {
      const campaignNames = this.combineNames(message.campaignList);
      popupContent = multiContent.replace("{0}", `
${campaignNames}`);
    } else if (message.campaignList.length === 1) {
      const campaign = message.campaignList[0];
      popupContent = singleContent.replace("{0}", campaign.name);
      popupContent = popupContent.replace("{1}", new Date(campaign.endTime).toLocaleString(this.locale, { hour12: false }));
    }
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onRequiredTurnover(message) {
    if (message.campaignList.length === 0)
      return;
    const content = this.i18n.instant("promo_fs_3_14");
    const popupContent = content.replace("{0}", this.combineNames(message.campaignList));
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onFreeSpinWithdrawMaximum(message) {
    if (message.campaignList.length === 0)
      return;
    const content = this.i18n.instant("promo_fs_3_15");
    const campaign = message.campaignList[0];
    let popupContent = content.replace("{0}", campaign.name);
    popupContent = popupContent.replace("{1}", dec.comma(campaign.balance));
    popupContent = popupContent.replace("{2}", campaign.withdrawal?.limit ? dec.comma(campaign.withdrawal.limit) : "N/A");
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onFailed(message) {
    if (message.campaignList.length === 0)
      return;
    const content = this.i18n.instant("promo_fs_19");
    const popupContent = content.replace("{0}", this.combineNames(message.campaignList));
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onSuccess(message) {
    if (message.campaignList.length === 0)
      return;
    const content = this.i18n.instant("promo_popup3");
    const campaign = message.campaignList[0];
    let popupContent = content.replace("{0}", campaign.name);
    popupContent = popupContent.replace("{1}", dec.comma(campaign.balance));
    popupContent = popupContent.replace("{2}", campaign.withdrawal?.limit ? dec.comma(campaign.withdrawal.limit) : "N/A");
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onSucessFullyClaim(message) {
    if (message.campaignList.length === 0)
      return;
    const content = this.i18n.instant("promo_fs_22");
    const popupContent = content.replace("{0}", message.campaignList[0].name);
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onFailFullyRedeemed(message) {
    if (message.campaignList.length === 0)
      return;
    const content = this.i18n.instant("promo_fs_23");
    const popupContent = content.replace("{0}", message.campaignList[0].name);
    const popup = {
      content: popupContent
    };
    this.addPopupToQueue(popup);
  }
  onUnderConditionEvent(message) {
    if (message.campaignList.length === 0)
      return;
    const singleContent = this.i18n.instant("promo_fs_21");
    const multiContent = this.i18n.instant("promo_multi_21");
    const pupupContent = message.campaignList.length > 1 ? multiContent : singleContent.replace("{0}", message.campaignList[0]?.name || "");
    const popup = {
      content: pupupContent
    };
    this.addPopupToQueue(popup);
  }
  /** 打開Event Center的Campaign tab
   * @param groupId 活動群組ID，如果有提供就打開對應活動群組的頁面，沒有提供就打開活動列表頁面
  */
  onOpenEventCenterCampaign(groupId) {
    if (this.showWindow() || this.popupQueue.length > 0) {
      const popup = {
        groupId
        // 點擊後會打開Event Center的Campaign tab裡面對應的groundId的頁面
      };
      this.addPopupToQueue(popup);
    } else {
      this.eventCenter.open(`campaign/${groupId}`);
    }
  }
  combineNames(campaigns) {
    const willEndOn = this.i18n.instant("promo_multi_content4");
    const retList = [];
    campaigns.forEach((c, index) => {
      const line = `${index + 1}. ${willEndOn.replace("{0}", c.name).replace("{1}", new Date(c.endTime).toLocaleString(this.locale, { hour12: false }))}`;
      retList.push(line);
    });
    return retList.join("\n");
  }
  getGroupIdByCampaign(campaign) {
    const group = this.ctrl.campaignGroupList().find((g) => g.campaignIdList.includes(campaign.id));
    return group ? group.id : "";
  }
  static \u0275fac = function CampaignPopupLegacyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignPopupLegacyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CampaignPopupLegacyComponent, selectors: [["campaign-popup-legacy"]], outputs: { close: "close" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", "fade-out", 3, "click"], [3, "close", "header", "size", "enableClose"], [1, "p-4", "text-center", "space-y-2"], [1, "popup-icon", "text-yellow-400", 3, "name"], [1, "h-px", "divider-gradient-yellow", "opacity-80", "w-[90%]", "mx-auto"], [1, "h-[10rem]", "overflow-y-auto", "whitespace-pre-wrap", "break-all", "text-zinc-300"], [1, "flex", "justify-center", "pb-4"], [1, "w-1/2", "[&>button]:w-full", 3, "clicked", "accentColor", "label"]], template: function CampaignPopupLegacyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CampaignPopupLegacyComponent_Conditional_0_Template, 10, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showWindow() ? 0 : -1);
    }
  }, dependencies: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignPopupLegacyComponent, [{
    type: Component,
    args: [{ selector: "campaign-popup-legacy", imports: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], template: `@if (showWindow()) {
  <div class="fixed inset-0 grid place-items-center">
    <div
      class="absolute inset-0 popup-overlay fade-out"
      (click)="onCancel()"
    ></div>
    <ap-ui-frame-popup
      [header]="header()"
      [size]="'mobile'"
      [enableClose]="false"
      (close)="close.emit()"
    >
      <div class="p-4 text-center space-y-2">
        <ap-icon [name]="'gift default'" class="popup-icon text-yellow-400" />
        <div
          class="h-px divider-gradient-yellow opacity-80 w-[90%] mx-auto"
        ></div>
        <h4
          class="h-[10rem] overflow-y-auto whitespace-pre-wrap break-all text-zinc-300"
        >
          {{ windowContent() }}
        </h4>
      </div>

      <div class="flex justify-center pb-4">
        <ap-button
          class="w-1/2 [&>button]:w-full"
          [accentColor]="'yellow'"
          [label]="buttonText()"
          (clicked)="closeAndCheckQueue()"
        />
      </div>
    </ap-ui-frame-popup>
  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CampaignPopupLegacyComponent, { className: "CampaignPopupLegacyComponent", filePath: "src/app/pages/campaign-popup-legacy/campaign-popup-legacy.component.ts", lineNumber: 28 });
})();

// src/app/pages/campaign-popup/campaign-popup.component.ts
function CampaignPopupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2)(3, "div", 3);
    \u0275\u0275element(4, "ap-icon", 4)(5, "div", 5);
    \u0275\u0275elementStart(6, "h4", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "ap-button", 8);
    \u0275\u0275listener("click", function CampaignPopupComponent_Conditional_0_Template_ap_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickFunc());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("header", ctx_r1.messageHeader())("size", "mobile")("enableClose", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "gift default");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.messageContent(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r1.buttonText());
  }
}
var CampaignPopupComponent = class _CampaignPopupComponent {
  campaign = inject(CampaignFacadeService);
  eventCenter = inject(EventCenterCtrlService);
  i18n = inject(AppI18nService);
  showMessage = computed(() => this.campaign.popupMessageVisible());
  messageHeader = signal("");
  messageContent = signal("");
  buttonText = signal("OK");
  clickFunc = () => {
  };
  constructor() {
    this.campaign.waitToJoin$.subscribe((message) => this.onWaitToJoin(message));
  }
  ngAfterViewInit() {
    this.campaign.setPopupActivated(true);
  }
  onWaitToJoin(message) {
    this.campaign.setPopupMessageVisible(true);
    this.messageHeader.set(this.i18n.instant("promo_manual_title"));
    this.messageContent.set(this.i18n.instant("promo_manual_body"));
    const firstId = message.campaignList[0].groupId;
    this.clickFunc = () => {
      this.campaign.setPopupMessageVisible(false);
      this.eventCenter.open(`campaign/${firstId}`);
    };
  }
  static \u0275fac = function CampaignPopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignPopupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CampaignPopupComponent, selectors: [["campaign-popup"]], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", "fade-out"], [3, "header", "size", "enableClose"], [1, "p-4", "text-center", "space-y-2"], [1, "popup-icon", "text-yellow-400", 3, "name"], [1, "h-px", "divider-gradient-yellow", "opacity-80", "w-[90%]", "mx-auto"], [1, "overflow-y-auto", "whitespace-pre-wrap", "break-all", "text-zinc-300"], [1, "flex", "justify-center", "pb-4"], [1, "w-1/2", "[&>button]:w-full", 3, "click", "accentColor", "label"]], template: function CampaignPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CampaignPopupComponent_Conditional_0_Template, 10, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showMessage() ? 0 : -1);
    }
  }, dependencies: [ApUiFramePopupComponent, ApIconComponent, ApButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignPopupComponent, [{
    type: Component,
    args: [{ selector: "campaign-popup", imports: [ApUiFramePopupComponent, ApIconComponent, ApButtonComponent], template: `@if (showMessage()) {
  <div class="fixed inset-0 grid place-items-center">
    <div
      class="absolute inset-0 popup-overlay fade-out"
    ></div>
    <ap-ui-frame-popup
      [header]="messageHeader()"
      [size]="'mobile'"
      [enableClose]="false"
    >
      <div class="p-4 text-center space-y-2">
        <ap-icon [name]="'gift default'" class="popup-icon text-yellow-400" />
        <div
          class="h-px divider-gradient-yellow opacity-80 w-[90%] mx-auto"
        ></div>
        <h4
          class="overflow-y-auto whitespace-pre-wrap break-all text-zinc-300"
        >
          {{ messageContent() }}
        </h4>
      </div>

      <div class="flex justify-center pb-4">
        <ap-button
          class="w-1/2 [&>button]:w-full"
          [accentColor]="'yellow'"
          [label]="buttonText()"
          (click)="clickFunc()"
        />
      </div>
    </ap-ui-frame-popup>
  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CampaignPopupComponent, { className: "CampaignPopupComponent", filePath: "src/app/pages/campaign-popup/campaign-popup.component.ts", lineNumber: 18 });
})();

// src/app/layouts/layout-cover/layout-cover.component.ts
function LayoutCoverComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-cashdrop-toast", 8);
  }
}
function LayoutCoverComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-cashdrop-toast", 9);
  }
}
function LayoutCoverComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "trn-all", 4);
  }
}
function LayoutCoverComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-list", 12);
    \u0275\u0275listener("close", function LayoutCoverComponent_Conditional_2_Conditional_5_Template_history_list_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showHistory.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function LayoutCoverComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-center", 10);
  }
}
function LayoutCoverComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "page-info", 13);
    \u0275\u0275listener("close", function LayoutCoverComponent_Conditional_2_Conditional_7_Template_page_info_close_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showInfo.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("hideNoteItem2", true);
  }
}
function LayoutCoverComponent_Conditional_2_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "campaign-popup", 4);
  }
}
function LayoutCoverComponent_Conditional_2_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "campaign-popup-legacy", 4);
  }
}
function LayoutCoverComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LayoutCoverComponent_Conditional_2_Conditional_8_Conditional_0_Template, 1, 0, "campaign-popup", 4)(1, LayoutCoverComponent_Conditional_2_Conditional_8_Conditional_1_Template, 1, 0, "campaign-popup-legacy", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.showLatestCampaign() ? 0 : 1);
  }
}
function LayoutCoverComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bottom-panel", 6);
    \u0275\u0275listener("info", function LayoutCoverComponent_Conditional_2_Template_bottom_panel_info_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showInfo.set(true));
    })("history", function LayoutCoverComponent_Conditional_2_Template_bottom_panel_history_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showHistory.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275conditionalCreate(2, LayoutCoverComponent_Conditional_2_Conditional_2_Template, 1, 0, "event-cashdrop-toast", 8);
    \u0275\u0275conditionalCreate(3, LayoutCoverComponent_Conditional_2_Conditional_3_Template, 1, 0, "event-cashdrop-toast", 9);
    \u0275\u0275conditionalCreate(4, LayoutCoverComponent_Conditional_2_Conditional_4_Template, 1, 0, "trn-all", 4);
    \u0275\u0275conditionalCreate(5, LayoutCoverComponent_Conditional_2_Conditional_5_Template, 1, 0, "history-list", 10);
    \u0275\u0275conditionalCreate(6, LayoutCoverComponent_Conditional_2_Conditional_6_Template, 1, 0, "event-center", 10);
    \u0275\u0275conditionalCreate(7, LayoutCoverComponent_Conditional_2_Conditional_7_Template, 1, 1, "page-info", 11);
    \u0275\u0275conditionalCreate(8, LayoutCoverComponent_Conditional_2_Conditional_8_Template, 2, 1);
    \u0275\u0275element(9, "bottom-panel-popup", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("hidden", ctx_r1.hidePanel())("customData", ctx_r1.customData());
    \u0275\u0275advance();
    \u0275\u0275property("hidden", ctx_r1.hideAll());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCashDropPassToast() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCashDropFailToast() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTrn() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showHistory() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showEventCenter() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showInfo() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCampaignPopup() ? 8 : -1);
  }
}
function LayoutCoverComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-logo-name", 2);
  }
}
function LayoutCoverComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-game-name", 3);
  }
}
function LayoutCoverComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-version", 4);
  }
}
function LayoutCoverComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-device-rotation", 5);
  }
}
var LayoutCoverComponent = class _LayoutCoverComponent {
  // inject在slot模式下會用到的services, 
  i18n = inject(AppI18nService);
  session = inject(ClientSessionService);
  favicon = inject(FaviconCtrlService);
  game = inject(GameIframeCtrlService);
  wallet = inject(PlayerWalletService);
  api = inject(AppInterfaceService);
  trn = inject(TrnCtrlService);
  campaign = inject(CampaignFacadeService);
  cashDrop = inject(CashDropService);
  eventCenter = inject(EventCenterCtrlService);
  bottomPanel = inject(BottomPanelService);
  replay = inject(HistoryReplayService);
  routerCtrl = inject(RouterCtrlService);
  navigator = inject(NavigatorShareService);
  gaCollector = inject(GACollectorService);
  elementRef = inject(ElementRef);
  symbolTexture = inject(BaseSymbolTextureService);
  destroyRef = inject(DestroyRef);
  /** 讀取結束, 開啟整個UI介面 */
  showAll = signal(false);
  showEventCenter = computed(() => this.eventCenter.isVisible() && !this.game.popupMessageBox());
  showHistory = signal(false);
  showInfo = signal(false);
  showAPLogo = signal(false);
  showGameLogo = signal(false);
  showVersion = signal(true);
  showTrn = computed(() => this.trn.enabled());
  showCampaignPopup = computed(() => this.campaign.popupEnabled());
  showCashDropFailToast = computed(() => this.cashDrop.isShowFailToast());
  showCashDropPassToast = computed(() => this.cashDrop.isShowPassToast());
  /** 顯示旋轉提示: 轉成直向模式 */
  showRotateTips = computed(() => this.session.isMobile() && this.session.isLandscape());
  showLatestCampaign = computed(() => this.session.isLatestCampaign);
  /** 會關掉AutoSpin的popup */
  popupTypesThatCloseAutoSpin = [
    "rewardSystemMain",
    "cashDropMain",
    "cashDropDialog",
    "cashDropPickup"
  ];
  customData = computed(() => this.game.customData());
  constructor() {
    effect(() => {
      const title = this.i18n.enGameName();
      untracked(() => {
        this.navigator.setPageTitle(title);
      });
    });
    effect(() => {
      const data = this.wallet.betData();
      untracked(() => {
        this.game.send(createApWebMessage("UpdateBetData", data));
      });
    });
    effect(() => {
      if (this.game.popupMessageBox()) {
        this.showHistory.set(false);
        this.showInfo.set(false);
      }
    });
    effect(() => {
      const customGameKey = this.game.customGameKey();
      untracked(() => {
        if (customGameKey) {
          this.symbolTexture.assignCustomGameKey(customGameKey);
          this.i18n.assignCustomGameKey(customGameKey);
        }
      });
    });
    this.game.customSetting$.subscribe((message) => {
      this.favicon.setByCustomKey(message.customData?.customGamekey ?? null);
    });
    this.game.startSpinning$.subscribe(() => {
      this.eventCenter.close();
      this.showHistory.set(false);
      this.showInfo.set(false);
    });
  }
  ngOnInit() {
    if (environment.production && !this.session.isUseHtmlUI) {
      this.routerCtrl.navigateRelative("");
      return;
    }
    this.gaCollector.loadGtagScript();
    this.api.setup(this.session.setting);
    this.api.connect();
    this.game.loadingFinished$.subscribe(this.onGameLoadingFinished.bind(this));
    this.game.InGamePopupOpened$.subscribe((popup) => {
      if (this.popupTypesThatCloseAutoSpin.includes(popup.category)) {
        this.bottomPanel.stopAutoSpin();
      }
    });
    this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
    this.game.betChanged$.subscribe(this.onChangeBet.bind(this));
    this.game.betModeChanged$.subscribe(this.onBetModeChanged.bind(this));
    this.navigator.preventPinchZoom(this.elementRef.nativeElement, this.destroyRef);
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
  }
  onGameLoadingFinished() {
    this.showAll.set(true);
    this.showGameLogo.set(true);
    this.wallet.buyFeatureModes().concat(this.wallet.buyChanceModes()).forEach((mode) => {
      const imageUrl = this.symbolTexture.getBuyFeatureTextureUrl(mode.name);
      if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
      }
    });
  }
  /** 偵測各種情況, 決定是否關閉目前UI */
  hideAll = computed(() => {
    const inGamePopupOpen = this.game.popupRewardSystemMain() || this.game.popupRewardSystemLevelUp() || this.game.popupCashDropMain() || this.game.popupCashDropDialog() || this.game.popupCashDropPickup() || this.game.popupFeatureTransition() || this.game.popupBigWinTransition() || this.game.popupMessageBox() || this.game.popupOther() || this.game.popupInGameSelection();
    return inGamePopupOpen;
  });
  hidePanel = computed(() => {
    return this.hideAll() || this.replay.showReplayViewer();
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
  onBetModeChanged(content) {
    this.wallet.updateSpinMode(content.modeName);
  }
  static \u0275fac = function LayoutCoverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutCoverComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutCoverComponent, selectors: [["layout-cover"]], hostBindings: function LayoutCoverComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("contextmenu", function LayoutCoverComponent_contextmenu_HostBindingHandler($event) {
        return $event.preventDefault();
      });
    }
  }, decls: 7, vars: 5, consts: [[1, "absolute"], ["uiMode", "ap-cover", 1, "absolute", "inset-0"], [1, "absolute", "top-0.5", "right-1", "pointer-events-none"], [1, "absolute", "top-0.5", "left-1", "pointer-events-none"], [1, "absolute", "top-0", "left-0"], [1, "absolute", "z-error", "inset-0"], [1, "relative", "animate-fade-up", "animate-duration-300", "animate-ease-in", "select-none", 3, "info", "history", "hidden", "customData"], [1, "relative", "contents", 3, "hidden"], ["variant", "pass", 1, "absolute", "top-7", "left-1/2", 2, "transform", "translateX(-50%)"], ["variant", "fail", 1, "absolute", "top-7", "left-1/2", 2, "transform", "translateX(-50%)"], [1, "absolute", "inset-0"], [3, "hideNoteItem2"], [1, "absolute", "inset-0", 3, "close"], [3, "close", "hideNoteItem2"]], template: function LayoutCoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ap-loading-overlay", 0)(1, "game-iframe", 1);
      \u0275\u0275conditionalCreate(2, LayoutCoverComponent_Conditional_2_Template, 10, 10);
      \u0275\u0275conditionalCreate(3, LayoutCoverComponent_Conditional_3_Template, 1, 0, "ap-ui-logo-name", 2);
      \u0275\u0275conditionalCreate(4, LayoutCoverComponent_Conditional_4_Template, 1, 0, "ap-ui-game-name", 3);
      \u0275\u0275conditionalCreate(5, LayoutCoverComponent_Conditional_5_Template, 1, 0, "ap-ui-version", 4);
      \u0275\u0275conditionalCreate(6, LayoutCoverComponent_Conditional_6_Template, 1, 0, "ap-ui-device-rotation", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showAll() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAPLogo() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showGameLogo() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showVersion() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showRotateTips() ? 6 : -1);
    }
  }, dependencies: [
    CommonModule,
    EventCenterComponent,
    HistoryListComponent,
    InfoComponent,
    GameIframeComponent,
    ApLoadingOverlayComponent,
    TrnAllComponent,
    BottomPanelComponent,
    ApUiLogoNameComponent,
    ApUiGameNameComponent,
    CampaignPopupLegacyComponent,
    BottomPanelPopupComponent,
    EventCashdropToastComponent,
    ApUiDeviceRotationComponent,
    ApUiVersionComponent,
    CampaignPopupComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: pan-x pan-y;\n}\n/*# sourceMappingURL=layout-cover.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutCoverComponent, [{
    type: Component,
    args: [{ selector: "layout-cover", imports: [
      CommonModule,
      EventCenterComponent,
      HistoryListComponent,
      InfoComponent,
      GameIframeComponent,
      ApLoadingOverlayComponent,
      TrnAllComponent,
      BottomPanelComponent,
      ApUiLogoNameComponent,
      ApUiGameNameComponent,
      CampaignPopupLegacyComponent,
      BottomPanelPopupComponent,
      EventCashdropToastComponent,
      ApUiDeviceRotationComponent,
      ApUiVersionComponent,
      CampaignPopupComponent
    ], host: {
      "(contextmenu)": "$event.preventDefault()"
      // 禁止右鍵選單
    }, template: '<ap-loading-overlay class="absolute" />\n<game-iframe class="absolute inset-0" uiMode="ap-cover" />\n\n@if (showAll()) {\n  <bottom-panel\n    [hidden]="hidePanel()"\n    [customData]="customData()"\n    class="relative animate-fade-up animate-duration-300 animate-ease-in select-none"\n    (info)="showInfo.set(true)"\n    (history)="showHistory.set(true)"\n  />\n  <div class="relative contents" [hidden]="hideAll()">\n    @if (showCashDropPassToast()) {\n      <event-cashdrop-toast\n        variant="pass"\n        class="absolute top-7 left-1/2"\n        style="transform: translateX(-50%)"\n      />\n    }\n    @if (showCashDropFailToast()) {\n      <event-cashdrop-toast\n        variant="fail"\n        class="absolute top-7 left-1/2"\n        style="transform: translateX(-50%)"\n      />\n    }\n    @if (showTrn()) {\n      <trn-all class="absolute top-0 left-0" />\n    }\n    @if (showHistory()) {\n      <history-list class="absolute inset-0" (close)="showHistory.set(false)" />\n    }\n    @if (showEventCenter()) {\n      <event-center class="absolute inset-0" />\n    }\n    @if (showInfo()) {\n      <page-info (close)="showInfo.set(false)" [hideNoteItem2]="true" />\n    }\n    @if (showCampaignPopup()) {\n      @if (showLatestCampaign()) {\n        <campaign-popup class="absolute top-0 left-0" />\n      }\n      @else {\n        <campaign-popup-legacy class="absolute top-0 left-0" />\n      }\n    }\n    <bottom-panel-popup class="absolute top-0 left-0" />\n  </div>\n}\n@if (showAPLogo()) {\n  <ap-ui-logo-name class="absolute top-0.5 right-1 pointer-events-none" />\n}\n@if (showGameLogo()) {\n  <ap-ui-game-name class="absolute top-0.5 left-1 pointer-events-none" />\n}\n@if (showVersion()) {\n  <ap-ui-version class="absolute top-0 left-0" />\n}\n@if (showRotateTips()) {\n  <ap-ui-device-rotation class="absolute z-error inset-0" />\n}\n', styles: ["/* src/app/layouts/layout-cover/layout-cover.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: pan-x pan-y;\n}\n/*# sourceMappingURL=layout-cover.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutCoverComponent, { className: "LayoutCoverComponent", filePath: "src/app/layouts/layout-cover/layout-cover.component.ts", lineNumber: 52 });
})();
export {
  LayoutCoverComponent
};
//# sourceMappingURL=chunk-O7GBK2O4.js.map
