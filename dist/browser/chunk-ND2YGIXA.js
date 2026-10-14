import {
  EventCashdropToastComponent
} from "./chunk-DKWINHW7.js";
import {
  CampaignFacadeService
} from "./chunk-OXRM73HY.js";
import "./chunk-USS23RIW.js";
import {
  TrnCtrlService,
  generatePlayerList
} from "./chunk-T55X5QHE.js";
import {
  ApUiTabGroupComponent
} from "./chunk-47SOIXJB.js";
import {
  ApInputBox
} from "./chunk-H6P7MZH6.js";
import {
  HistoryCtrlService
} from "./chunk-5MA7HBPU.js";
import {
  ApSelectComponent
} from "./chunk-5KYQQMTR.js";
import {
  BottomPanelService,
  RULE_GA_ES,
  SPIN_BUTTON_MODES
} from "./chunk-NVHIFZTE.js";
import {
  ApUiReplayModeComponent,
  PlayerWalletService
} from "./chunk-HNY47POZ.js";
import {
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-YG42UXQC.js";
import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-NMZ7HZYU.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import "./chunk-TBKOLJZS.js";
import {
  ApToggleSwitchComponent
} from "./chunk-MKS37EB3.js";
import {
  ApButtonComponent
} from "./chunk-3HIHH7J6.js";
import {
  ApIconComponent
} from "./chunk-YL37OG34.js";
import {
  AppInterfaceService
} from "./chunk-Q3NF4QZ2.js";
import {
  LoggerService,
  calc
} from "./chunk-TIGXKRQH.js";
import {
  ClientSessionService,
  StorageCtrlService
} from "./chunk-B2M5HODU.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgComponentOutlet
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  Subject,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  take,
  takeUntil,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QGU3BS3L.js";

// src/app/pages/slot-reel-setting/slot-reel-setting.component.ts
function SlotReelSettingComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, " RollingSetting ");
    \u0275\u0275elementStart(3, "div", 5)(4, "span", 6);
    \u0275\u0275text(5, "symbolSpinTimes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.symbolSpinTimes1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.symbolSpinTimes2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.symbolSpinTimes3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 5)(11, "span", 9);
    \u0275\u0275text(12, "startUpTimes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7)(14, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startUpTimes1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startUpTimes2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startUpTimes3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 5)(18, "span", 10);
    \u0275\u0275text(19, "startUpDistances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 7)(21, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startUpDistances1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startUpDistances2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startUpDistances3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 5)(25, "span", 11);
    \u0275\u0275text(26, "startDownTimes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 7)(28, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startDownTimes1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startDownTimes2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startDownTimes3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 5)(32, "span", 12);
    \u0275\u0275text(33, "startDelays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 7)(35, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startDelays1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_36_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startDelays2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startDelays3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 5)(39, "span", 13);
    \u0275\u0275text(40, "startDelayInterval");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 7)(42, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startDelayInterval1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_43_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startDelayInterval2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_44_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startDelayInterval3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 5)(46, "span", 14);
    \u0275\u0275text(47, "endTimes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 7)(49, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_49_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endTimes1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_50_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endTimes2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_51_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endTimes3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 5)(53, "span", 15);
    \u0275\u0275text(54, "endUpTimes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 7)(56, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_56_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endUpTimes1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_57_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endUpTimes2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_58_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endUpTimes3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 5)(60, "span", 16);
    \u0275\u0275text(61, "endDownTimes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 7)(63, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_63_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endDownTimes1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_64_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endDownTimes2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_65_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endDownTimes3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 5)(67, "span", 17);
    \u0275\u0275text(68, "endBottomDistances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 7)(70, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_70_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endBottomDistances1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_71_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endBottomDistances2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_72_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endBottomDistances3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 5)(74, "span", 18);
    \u0275\u0275text(75, "endTopDistances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 7)(77, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_77_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endTopDistances1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_78_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endTopDistances2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_79_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endTopDistances3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "div", 19)(81, "div", 5)(82, "span", 20);
    \u0275\u0275text(83, "expectEndTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_84_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expectEndTime.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 5)(86, "span", 21);
    \u0275\u0275text(87, "expectEndUpTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_88_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expectEndUpTime.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 5)(90, "span", 22);
    \u0275\u0275text(91, "expectEndDownTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_92_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expectEndDownTime.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 5)(94, "span", 23);
    \u0275\u0275text(95, "expectEndBottomDistance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_96_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expectEndBottomDistance.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 5)(98, "span", 24);
    \u0275\u0275text(99, "expectEndTopDistance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_100_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expectEndTopDistance.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 5)(102, "span", 25);
    \u0275\u0275text(103, "nearMissDistance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_104_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nearMissDistance.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 5)(106, "span", 26);
    \u0275\u0275text(107, "nearMissTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_108_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nearMissTime.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 5)(110, "span", 27);
    \u0275\u0275text(111, "luckyBreakDistance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_112_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.luckyBreakDistance.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 5)(114, "span", 28);
    \u0275\u0275text(115, "luckyBreakTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_116_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.luckyBreakTime.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "div", 5)(118, "span", 29);
    \u0275\u0275text(119, "spinCounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 7)(121, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_121_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.spinCounts1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_122_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.spinCounts2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_123_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.spinCounts3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(124, "div", 5)(125, "span", 30);
    \u0275\u0275text(126, "extraSpinCounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 7)(128, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_128_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.extraSpinCounts1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_129_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.extraSpinCounts2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_130_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.extraSpinCounts3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(131, "div", 5)(132, "span", 31);
    \u0275\u0275text(133, "spinCountInterval");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 7)(135, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_135_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.spinCountInterval1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_136_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.spinCountInterval2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_137_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.spinCountInterval3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(138, "textarea", 32);
    \u0275\u0275listener("input", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_textarea_input_138_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateRollingFromJson($event));
    });
    \u0275\u0275text(139, "        ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "ap-button", 33);
    \u0275\u0275listener("click", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_button_click_140_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyRollingSettings());
    });
    \u0275\u0275text(141, "Apply");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.symbolSpinTimes1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.symbolSpinTimes2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.symbolSpinTimes3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.startUpTimes1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startUpTimes2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startUpTimes3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.startUpDistances1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startUpDistances2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startUpDistances3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.startDownTimes1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startDownTimes2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startDownTimes3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.startDelays1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startDelays2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startDelays3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.startDelayInterval1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startDelayInterval2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.startDelayInterval3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.endTimes1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endTimes2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endTimes3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.endUpTimes1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endUpTimes2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endUpTimes3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.endDownTimes1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endDownTimes2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endDownTimes3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.endBottomDistances1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endBottomDistances2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endBottomDistances3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.endTopDistances1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endTopDistances2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.endTopDistances3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.expectEndTime().toString());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.expectEndUpTime().toString());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.expectEndDownTime().toString());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.expectEndBottomDistance().toString());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.expectEndTopDistance().toString());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.nearMissDistance().toString());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.nearMissTime().toString());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.luckyBreakDistance().toString());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.luckyBreakTime().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.spinCounts1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.spinCounts2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.spinCounts3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.extraSpinCounts1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.extraSpinCounts2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.extraSpinCounts3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.spinCountInterval1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.spinCountInterval2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.spinCountInterval3().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.localRollingString());
  }
}
function SlotReelSettingComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " DroppingSetting ");
    \u0275\u0275elementStart(2, "div", 5)(3, "span", 34);
    \u0275\u0275text(4, "dropInTimes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7)(6, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropInTimes1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropInTimes2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropInTimes3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 5)(10, "span", 35);
    \u0275\u0275text(11, "dropInSybmolIntervals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7)(13, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropInSybmolIntervals1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropInSybmolIntervals2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropInSybmolIntervals3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 5)(17, "span", 36);
    \u0275\u0275text(18, "dropInReelIntervals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 7)(20, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropInReelIntervals1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropInReelIntervals2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropInReelIntervals3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 5)(24, "span", 37);
    \u0275\u0275text(25, "dropOutTimes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 7)(27, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropOutTimes1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropOutTimes2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropOutTimes3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 5)(31, "span", 38);
    \u0275\u0275text(32, "dropOutSymbolIntervals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 7)(34, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_34_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropOutSymbolIntervals1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropOutSymbolIntervals2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropOutSymbolIntervals3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 5)(38, "span", 39);
    \u0275\u0275text(39, "dropOutReelIntervals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 7)(41, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_41_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropOutReelIntervals1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_42_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropOutReelIntervals2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_43_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropOutReelIntervals3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 5)(45, "span", 40);
    \u0275\u0275text(46, "moveTimePerSymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 7)(48, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_48_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveTimePerSymbol1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_49_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveTimePerSymbol2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_50_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveTimePerSymbol3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 5)(52, "span", 41);
    \u0275\u0275text(53, "moveReelIntervals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 7)(55, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_55_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveReelIntervals1.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_56_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveReelIntervals2.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_57_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveReelIntervals3.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "textarea", 32);
    \u0275\u0275listener("input", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_textarea_input_58_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateDroppingFromJson($event));
    });
    \u0275\u0275text(59, "        ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ap-button", 33);
    \u0275\u0275listener("click", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_button_click_60_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyDroppingSettings());
    });
    \u0275\u0275text(61, "Apply");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.dropInTimes1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropInTimes2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropInTimes3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.dropInSybmolIntervals1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropInSybmolIntervals2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropInSybmolIntervals3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.dropInReelIntervals1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropInReelIntervals2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropInReelIntervals3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.dropOutTimes1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropOutTimes2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropOutTimes3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.dropOutSymbolIntervals1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropOutSymbolIntervals2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropOutSymbolIntervals3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.dropOutReelIntervals1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropOutReelIntervals2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.dropOutReelIntervals3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.moveTimePerSymbol1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.moveTimePerSymbol2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.moveTimePerSymbol3().toString());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.moveReelIntervals1().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.moveReelIntervals2().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.moveReelIntervals3().toString());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.localDroppingString());
  }
}
function SlotReelSettingComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " GameParameterSetting ");
    \u0275\u0275elementStart(2, "div", 5)(3, "span", 42);
    \u0275\u0275text(4, "debugWinScore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ap-input-box", 43);
    \u0275\u0275listener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_5_Template_ap_input_box_onInput_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.debugWinScore.set(ctx_r1.formatNumberStr($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ap-select", 44);
    \u0275\u0275listener("onSelect", function SlotReelSettingComponent_Conditional_0_Conditional_5_Template_ap_select_onSelect_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.debugWinType.set(+$event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ap-button", 33);
    \u0275\u0275listener("click", function SlotReelSettingComponent_Conditional_0_Conditional_5_Template_ap_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyGameParameterSettings());
    });
    \u0275\u0275text(8, "Apply");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.debugWinScore().toString());
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.selects())("selected", ctx_r1.debugWinType().toString());
  }
}
function SlotReelSettingComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " DemoTestCaseSetting ");
    \u0275\u0275elementStart(2, "ap-select", 44);
    \u0275\u0275listener("onSelect", function SlotReelSettingComponent_Conditional_0_Conditional_6_Template_ap_select_onSelect_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.demoCaseName.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "ap-button", 33);
    \u0275\u0275listener("click", function SlotReelSettingComponent_Conditional_0_Conditional_6_Template_ap_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyDemoTestCaseSettings());
    });
    \u0275\u0275text(4, "Apply");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.demoSelects())("selected", ctx_r1.demoCaseName());
  }
}
function SlotReelSettingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "ap-ui-tab-group", 1);
    \u0275\u0275listener("tabChange", function SlotReelSettingComponent_Conditional_0_Template_ap_ui_tab_group_tabChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275conditionalCreate(3, SlotReelSettingComponent_Conditional_0_Conditional_3_Template, 142, 52);
    \u0275\u0275conditionalCreate(4, SlotReelSettingComponent_Conditional_0_Conditional_4_Template, 62, 25);
    \u0275\u0275conditionalCreate(5, SlotReelSettingComponent_Conditional_0_Conditional_5_Template, 9, 3);
    \u0275\u0275conditionalCreate(6, SlotReelSettingComponent_Conditional_0_Conditional_6_Template, 5, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("tabs", ctx_r1.tabs())("selectedTab", ctx_r1.selectedTab());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showRolling() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showDropping() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showGameParameter() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showDemoTestCase() ? 6 : -1);
  }
}
var SlotReelSettingComponent = class _SlotReelSettingComponent {
  game;
  logger;
  showPanel = signal(true);
  destroy$ = new Subject();
  showRolling = computed(() => this.selectedTab() === "rolling");
  showDropping = computed(() => this.selectedTab() === "dropping");
  showGameParameter = computed(() => this.selectedTab() === "gameParameter");
  showDemoTestCase = computed(() => this.selectedTab() === "demoTestCase");
  selectedTab = signal("default");
  // Rolling Planner Settings
  symbolSpinTimes1 = signal(1);
  symbolSpinTimes2 = signal(1);
  symbolSpinTimes3 = signal(1);
  startUpTimes1 = signal(1);
  startUpTimes2 = signal(1);
  startUpTimes3 = signal(1);
  startUpDistances1 = signal(1);
  startUpDistances2 = signal(1);
  startUpDistances3 = signal(1);
  startDownTimes1 = signal(1);
  startDownTimes2 = signal(1);
  startDownTimes3 = signal(1);
  startDelays1 = signal(0);
  startDelays2 = signal(0);
  startDelays3 = signal(0);
  startDelayInterval1 = signal(0);
  startDelayInterval2 = signal(0);
  startDelayInterval3 = signal(0);
  endTimes1 = signal(1);
  endTimes2 = signal(1);
  endTimes3 = signal(1);
  endUpTimes1 = signal(1);
  endUpTimes2 = signal(1);
  endUpTimes3 = signal(1);
  endDownTimes1 = signal(1);
  endDownTimes2 = signal(1);
  endDownTimes3 = signal(1);
  endBottomDistances1 = signal(1);
  endBottomDistances2 = signal(1);
  endBottomDistances3 = signal(1);
  endTopDistances1 = signal(1);
  endTopDistances2 = signal(1);
  endTopDistances3 = signal(1);
  expectEndTime = signal(1);
  expectEndUpTime = signal(1);
  expectEndDownTime = signal(1);
  expectEndBottomDistance = signal(1);
  expectEndTopDistance = signal(1);
  nearMissDistance = signal(0);
  nearMissTime = signal(0);
  luckyBreakDistance = signal(0);
  luckyBreakTime = signal(0);
  spinCounts1 = signal(1);
  spinCounts2 = signal(1);
  spinCounts3 = signal(1);
  extraSpinCounts1 = signal(0);
  extraSpinCounts2 = signal(0);
  extraSpinCounts3 = signal(0);
  spinCountInterval1 = signal(0);
  spinCountInterval2 = signal(0);
  spinCountInterval3 = signal(0);
  // Dropping Planner Settings
  dropInTimes1 = signal(1);
  dropInTimes2 = signal(1);
  dropInTimes3 = signal(1);
  dropInSybmolIntervals1 = signal(0);
  dropInSybmolIntervals2 = signal(0);
  dropInSybmolIntervals3 = signal(0);
  dropInReelIntervals1 = signal(0);
  dropInReelIntervals2 = signal(0);
  dropInReelIntervals3 = signal(0);
  dropOutTimes1 = signal(1);
  dropOutTimes2 = signal(1);
  dropOutTimes3 = signal(1);
  dropOutSymbolIntervals1 = signal(0);
  dropOutSymbolIntervals2 = signal(0);
  dropOutSymbolIntervals3 = signal(0);
  dropOutReelIntervals1 = signal(0);
  dropOutReelIntervals2 = signal(0);
  dropOutReelIntervals3 = signal(0);
  moveTimePerSymbol1 = signal(1);
  moveTimePerSymbol2 = signal(1);
  moveTimePerSymbol3 = signal(1);
  moveSymbolIntervals1 = signal(0);
  moveSymbolIntervals2 = signal(0);
  moveSymbolIntervals3 = signal(0);
  moveReelIntervals1 = signal(0);
  moveReelIntervals2 = signal(0);
  moveReelIntervals3 = signal(0);
  // Game Parameter Settings
  debugWinScore = signal(0);
  debugWinType = signal(0);
  // demo test case settings
  demoCaseName = signal("null");
  tabs = signal([]);
  selects = signal([
    { value: "0", label: "None" },
    { value: "4", label: "BigWin" },
    { value: "5", label: "SuperWin" },
    { value: "6", label: "MegaWin" }
  ]);
  demoSelects = signal([
    { value: "null", label: "None" },
    { value: "demo1", label: "Demo Case 1" },
    { value: "demo2", label: "Demo Case 2" },
    { value: "demo3", label: "Demo Case 3" }
  ]);
  formatNumberStr(val) {
    return Math.round(+val * 100) / 100;
  }
  constructor(game, logger) {
    this.game = game;
    this.logger = logger;
    game.rollingSettings.forEach(this.updateRollingSetting.bind(this));
    game.droppingSettings.forEach(this.updateDroppingSetting.bind(this));
    this.tabs.set([
      ...this.tabs(),
      { id: "gameParameter", label: "Parameter" },
      { id: "demoTestCase", label: "Demo" }
    ]);
    this.selectedTab.set("gameParameter");
  }
  ngOnInit() {
    this.game.RollingSetting$.pipe(takeUntil(this.destroy$)).subscribe(this.updateRollingSetting.bind(this));
    this.game.DroppingSetting$.pipe(takeUntil(this.destroy$)).subscribe(this.updateDroppingSetting.bind(this));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /** 初始化或是收到message都要更新 Rolling Setting */
  updateRollingSetting(setting) {
    this.setRollingData(setting);
    this.tabs.set([
      ...this.tabs(),
      { id: "rolling", label: "Rolling" }
    ]);
    if (this.selectedTab() === "default")
      this.selectedTab.set("rolling");
  }
  /** 初始化或是收到message都要更新 Dropping Setting */
  updateDroppingSetting(setting) {
    this.setDroppingData(setting);
    this.tabs.set([
      ...this.tabs(),
      { id: "dropping", label: "Dropping" }
    ]);
    if (this.selectedTab() === "default")
      this.selectedTab.set("dropping");
  }
  setRollingData(settings) {
    this.symbolSpinTimes1.set(settings.symbolSpinTimes[0]);
    this.symbolSpinTimes2.set(settings.symbolSpinTimes[1]);
    this.symbolSpinTimes3.set(settings.symbolSpinTimes[2]);
    this.startUpTimes1.set(settings.startUpTimes[0]);
    this.startUpTimes2.set(settings.startUpTimes[1]);
    this.startUpTimes3.set(settings.startUpTimes[2]);
    this.startUpDistances1.set(settings.startUpDistances[0]);
    this.startUpDistances2.set(settings.startUpDistances[1]);
    this.startUpDistances3.set(settings.startUpDistances[2]);
    this.startDownTimes1.set(settings.startDownTimes[0]);
    this.startDownTimes2.set(settings.startDownTimes[1]);
    this.startDownTimes3.set(settings.startDownTimes[2]);
    this.startDelays1.set(settings.startDelays[0]);
    this.startDelays2.set(settings.startDelays[1]);
    this.startDelays3.set(settings.startDelays[2]);
    this.startDelayInterval1.set(settings.startDelayInterval[0]);
    this.startDelayInterval2.set(settings.startDelayInterval[1]);
    this.startDelayInterval3.set(settings.startDelayInterval[2]);
    this.endTimes1.set(settings.endTimes[0]);
    this.endTimes2.set(settings.endTimes[1]);
    this.endTimes3.set(settings.endTimes[2]);
    this.endUpTimes1.set(settings.endUpTimes[0]);
    this.endUpTimes2.set(settings.endUpTimes[1]);
    this.endUpTimes3.set(settings.endUpTimes[2]);
    this.endDownTimes1.set(settings.endDownTimes[0]);
    this.endDownTimes2.set(settings.endDownTimes[1]);
    this.endDownTimes3.set(settings.endDownTimes[2]);
    this.endBottomDistances1.set(settings.endBottomDistances[0]);
    this.endBottomDistances2.set(settings.endBottomDistances[1]);
    this.endBottomDistances3.set(settings.endBottomDistances[2]);
    this.endTopDistances1.set(settings.endTopDistances[0]);
    this.endTopDistances2.set(settings.endTopDistances[1]);
    this.endTopDistances3.set(settings.endTopDistances[2]);
    this.expectEndTime.set(settings.expectEndTime);
    this.expectEndUpTime.set(settings.expectEndUpTime);
    this.expectEndDownTime.set(settings.expectEndDownTime);
    this.expectEndBottomDistance.set(settings.expectEndBottomDistance);
    this.expectEndTopDistance.set(settings.expectEndTopDistance);
    this.nearMissDistance.set(settings.nearMissDistance);
    this.nearMissTime.set(settings.nearMissTime);
    this.luckyBreakDistance.set(settings.luckyBreakDistance);
    this.luckyBreakTime.set(settings.luckyBreakTime);
    this.spinCounts1.set(settings.spinCounts[0]);
    this.spinCounts2.set(settings.spinCounts[1]);
    this.spinCounts3.set(settings.spinCounts[2]);
    this.extraSpinCounts1.set(settings.extraSpinCounts[0]);
    this.extraSpinCounts2.set(settings.extraSpinCounts[1]);
    this.extraSpinCounts3.set(settings.extraSpinCounts[2]);
    this.spinCountInterval1.set(settings.spinCountInterval[0]);
    this.spinCountInterval2.set(settings.spinCountInterval[1]);
    this.spinCountInterval3.set(settings.spinCountInterval[2]);
  }
  setDroppingData(settings) {
    this.dropInTimes1.set(settings.dropInTimes[0]);
    this.dropInTimes2.set(settings.dropInTimes[1]);
    this.dropInTimes3.set(settings.dropInTimes[2]);
    this.dropInSybmolIntervals1.set(settings.dropInSybmolIntervals[0]);
    this.dropInSybmolIntervals2.set(settings.dropInSybmolIntervals[1]);
    this.dropInSybmolIntervals3.set(settings.dropInSybmolIntervals[2]);
    this.dropInReelIntervals1.set(settings.dropInReelIntervals[0]);
    this.dropInReelIntervals2.set(settings.dropInReelIntervals[1]);
    this.dropInReelIntervals3.set(settings.dropInReelIntervals[2]);
    this.dropOutTimes1.set(settings.dropOutTimes[0]);
    this.dropOutTimes2.set(settings.dropOutTimes[1]);
    this.dropOutTimes3.set(settings.dropOutTimes[2]);
    this.dropOutSymbolIntervals1.set(settings.dropOutSymbolIntervals[0]);
    this.dropOutSymbolIntervals2.set(settings.dropOutSymbolIntervals[1]);
    this.dropOutSymbolIntervals3.set(settings.dropOutSymbolIntervals[2]);
    this.dropOutReelIntervals1.set(settings.dropOutReelIntervals[0]);
    this.dropOutReelIntervals2.set(settings.dropOutReelIntervals[1]);
    this.dropOutReelIntervals3.set(settings.dropOutReelIntervals[2]);
    this.moveTimePerSymbol1.set(settings.moveTimePerSymbol[0]);
    this.moveTimePerSymbol2.set(settings.moveTimePerSymbol[1]);
    this.moveTimePerSymbol3.set(settings.moveTimePerSymbol[2]);
    this.moveReelIntervals1.set(settings.moveReelIntervals[0]);
    this.moveReelIntervals2.set(settings.moveReelIntervals[1]);
    this.moveReelIntervals3.set(settings.moveReelIntervals[2]);
  }
  onTabChange(tabId) {
    this.selectedTab.set(tabId);
  }
  onSelectChange(value) {
    this.debugWinType.set(+value);
  }
  onSelectDemoChange(value) {
    if (value === "null") {
      this.demoCaseName.set(null);
    } else {
      this.demoCaseName.set(value);
    }
  }
  localRollingSettings = computed(() => {
    return {
      symbolSpinTimes: [
        this.symbolSpinTimes1(),
        this.symbolSpinTimes2(),
        this.symbolSpinTimes3()
      ],
      startUpTimes: [
        this.startUpTimes1(),
        this.startUpTimes2(),
        this.startUpTimes3()
      ],
      startUpDistances: [
        this.startUpDistances1(),
        this.startUpDistances2(),
        this.startUpDistances3()
      ],
      startDownTimes: [
        this.startDownTimes1(),
        this.startDownTimes2(),
        this.startDownTimes3()
      ],
      startDelays: [
        this.startDelays1(),
        this.startDelays2(),
        this.startDelays3()
      ],
      startDelayInterval: [
        this.startDelayInterval1(),
        this.startDelayInterval2(),
        this.startDelayInterval3()
      ],
      endTimes: [
        this.endTimes1(),
        this.endTimes2(),
        this.endTimes3()
      ],
      endUpTimes: [
        this.endUpTimes1(),
        this.endUpTimes2(),
        this.endUpTimes3()
      ],
      endDownTimes: [
        this.endDownTimes1(),
        this.endDownTimes2(),
        this.endDownTimes3()
      ],
      endBottomDistances: [
        this.endBottomDistances1(),
        this.endBottomDistances2(),
        this.endBottomDistances3()
      ],
      endTopDistances: [
        this.endTopDistances1(),
        this.endTopDistances2(),
        this.endTopDistances3()
      ],
      expectEndTime: this.expectEndTime(),
      expectEndUpTime: this.expectEndUpTime(),
      expectEndDownTime: this.expectEndDownTime(),
      expectEndBottomDistance: this.expectEndBottomDistance(),
      expectEndTopDistance: this.expectEndTopDistance(),
      nearMissDistance: this.nearMissDistance(),
      nearMissTime: this.nearMissTime(),
      luckyBreakDistance: this.luckyBreakDistance(),
      luckyBreakTime: this.luckyBreakTime(),
      spinCounts: [
        this.spinCounts1(),
        this.spinCounts2(),
        this.spinCounts3()
      ],
      extraSpinCounts: [
        this.extraSpinCounts1(),
        this.extraSpinCounts2(),
        this.extraSpinCounts3()
      ],
      spinCountInterval: [
        this.spinCountInterval1(),
        this.spinCountInterval2(),
        this.spinCountInterval3()
      ]
    };
  });
  localRollingString = computed(() => {
    return this.formatJsonWithInlineArrays(this.localRollingSettings());
  });
  applyRollingSettings() {
    this.game.send({ type: "RollingSetting", content: this.localRollingSettings() });
  }
  updateRollingFromJson(event) {
    try {
      const target = event.target;
      const settings = JSON.parse(target.value);
      this.setRollingData(settings);
    } catch (e) {
      this.logger.error("Invalid JSON for rolling settings", e);
    }
  }
  localDroppingSettings = computed(() => {
    return {
      dropInTimes: [
        this.dropInTimes1(),
        this.dropInTimes2(),
        this.dropInTimes3()
      ],
      dropInSybmolIntervals: [
        this.dropInSybmolIntervals1(),
        this.dropInSybmolIntervals2(),
        this.dropInSybmolIntervals3()
      ],
      dropInReelIntervals: [
        this.dropInReelIntervals1(),
        this.dropInReelIntervals2(),
        this.dropInReelIntervals3()
      ],
      dropOutTimes: [
        this.dropOutTimes1(),
        this.dropOutTimes2(),
        this.dropOutTimes3()
      ],
      dropOutSymbolIntervals: [
        this.dropOutSymbolIntervals1(),
        this.dropOutSymbolIntervals2(),
        this.dropOutSymbolIntervals3()
      ],
      dropOutReelIntervals: [
        this.dropOutReelIntervals1(),
        this.dropOutReelIntervals2(),
        this.dropOutReelIntervals3()
      ],
      moveTimePerSymbol: [
        this.moveTimePerSymbol1(),
        this.moveTimePerSymbol2(),
        this.moveTimePerSymbol3()
      ],
      moveSymbolIntervals: [
        this.moveSymbolIntervals1(),
        this.moveSymbolIntervals2(),
        this.moveSymbolIntervals3()
      ],
      moveReelIntervals: [
        this.moveReelIntervals1(),
        this.moveReelIntervals2(),
        this.moveReelIntervals3()
      ]
    };
  });
  localDroppingString = computed(() => {
    return this.formatJsonWithInlineArrays(this.localDroppingSettings());
  });
  applyDroppingSettings() {
    this.game.send({ type: "DroppingSetting", content: this.localDroppingSettings() });
  }
  updateDroppingFromJson(event) {
    try {
      const target = event.target;
      const settings = JSON.parse(target.value);
      this.setDroppingData(settings);
    } catch (e) {
      this.logger.error("Invalid JSON for dropping settings", e);
    }
  }
  formatJsonWithInlineArrays(obj) {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/\[\s+([^\]]+)\s+\]/g, (match, content) => {
      const cleaned = content.replace(/\s+/g, " ").trim();
      return `[${cleaned}]`;
    });
  }
  // Game Parameter Settings
  applyGameParameterSettings() {
    this.game.send({ type: "GameParameterSetting", content: { debugWinScore: this.debugWinScore(), debugWinType: this.debugWinType() } });
  }
  // demo test case settings
  applyDemoTestCaseSettings() {
    this.game.send({ type: "GameDemoTestCase", content: { demoTestCaseName: this.demoCaseName() } });
  }
  static \u0275fac = function SlotReelSettingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlotReelSettingComponent)(\u0275\u0275directiveInject(GameIframeCtrlService), \u0275\u0275directiveInject(LoggerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotReelSettingComponent, selectors: [["slot-reel-setting"]], decls: 1, vars: 1, consts: [[1, "fixed", "top-0", "left-0"], [3, "tabChange", "tabs", "selectedTab"], [1, "bg-black/50", "text-zinc-300", "w-fit", "p-2", "rounded-2xl"], [1, "flex"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "justify-between", "items-center", "gap-1"], ["title", "\u6BCF\u500B\u5716\u6A19\u65CB\u8F49\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], [1, "flex", "gap-1"], ["type", "number", "step", "0.01", 3, "onInput", "value"], ["title", "\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0A\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0A\u6240\u9700\u7684\u8DDD\u96E2", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0B\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u7B2C\u4E00\u8EF8\u8F2A\u8EF8\u555F\u52D5\u5EF6\u9072\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u555F\u52D5\u5EF6\u9072\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0A\u53CD\u5F48\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0B\u53CD\u5F48\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0B\u53CD\u5F48\u984D\u5916\u6240\u9700\u7684\u8DDD\u96E2", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0A\u53CD\u5F48\u6240\u9700\u7684\u8DDD\u96E2", 1, "cursor-help"], [1, "flex", "flex-col", "gap-1", "ml-4", "mt-6"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendUpTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendDownTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendBottomDistances\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendTopDistances\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "NearMiss \u8DDD\u96E2", 1, "cursor-help"], ["title", "NearMiss \u6642\u9593", 1, "cursor-help"], ["title", "LuckyBreak \u8DDD\u96E2", 1, "cursor-help"], ["title", "LuckyBreak \u6642\u9593", 1, "cursor-help"], ["title", "\u63A7\u5236\u55AE\u8EF8 Rolling \u7684\u6642\u5019\u4F7F\u7528", 1, "cursor-help"], ["title", "\u7576 spinCounts \u4E0D\u5920\u4F7F\u7528\u6642\uFF0C\u88DC\u5145\u4F7F\u7528\u7684\u984D\u5916\u6B21\u6578", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u505C\u8F2A\u9593\u9694\u5716\u6A19\u6578\u91CF", 1, "cursor-help"], [1, "w-full", "mt-2", "p-2", "pl-4", "bg-zinc-800", "text-zinc-200", "rounded", "border", "border-zinc-600", "font-mono", "text-sm", "min-h-20", "resize-y", 3, "input", "value"], [1, "w-full", "mt-2", 3, "click"], ["title", "\u5716\u6A19\u6389\u843D\u9032\u5165\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u9032\u5165\u6642\u6BCF\u500B\u5716\u6A19\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u9032\u5165\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u96E2\u958B\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u96E2\u958B\u6642\u6BCF\u500B\u5716\u6A19\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u96E2\u958B\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u79FB\u52D5\u6642\u6BCF\u500B\u5716\u6A19\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u79FB\u52D5\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u8ABF\u8A66\u7528\u8D0F\u5206\u6578", 1, "cursor-help"], ["type", "number", "step", "1", 3, "onInput", "value"], [3, "onSelect", "options", "selected"]], template: function SlotReelSettingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SlotReelSettingComponent_Conditional_0_Template, 7, 6, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showPanel() ? 0 : -1);
    }
  }, dependencies: [ApInputBox, ApButtonComponent, ApUiTabGroupComponent, ApSelectComponent], styles: ["\n\n.cursor-help[title][_ngcontent-%COMP%] {\n  position: relative;\n}\n.cursor-help[title][_ngcontent-%COMP%]:hover::before {\n  content: attr(title);\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  background: rgba(0, 0, 0, 1);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n  font-size: 12px;\n  z-index: 1000;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_fadeIn 0.1s ease-in;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nap-input-box[_ngcontent-%COMP%] {\n  width: 100px;\n}\nap-select[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 100;\n}\n/*# sourceMappingURL=slot-reel-setting.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlotReelSettingComponent, [{
    type: Component,
    args: [{ selector: "slot-reel-setting", imports: [ApInputBox, ApButtonComponent, ApUiTabGroupComponent, ApSelectComponent], template: '\n<!--ap-icon name="pencil" class="size-6 text-zinc-200/30 hover:text-white cursor-pointer active:scale-95 transition-all" \n  (click)="showPanel.set(!showPanel())">\n</ap-icon-->\n@if(showPanel()){\n  <div class="fixed top-0 left-0 ">\n    <ap-ui-tab-group [tabs]="tabs()" [selectedTab]="selectedTab()" (tabChange)="onTabChange($event)"></ap-ui-tab-group>\n    <div class="bg-black/50 text-zinc-300 w-fit p-2 rounded-2xl">\n      @if(showRolling()){\n        <div class="flex">\n          <div class="flex flex-col gap-1">\n          RollingSetting\n          <div class="flex justify-between items-center gap-1">\n            <span title="\u6BCF\u500B\u5716\u6A19\u65CB\u8F49\u6240\u9700\u7684\u6642\u9593" class="cursor-help">symbolSpinTimes</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="symbolSpinTimes1().toString()" type="number" step="0.01" (onInput)="symbolSpinTimes1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="symbolSpinTimes2().toString()" type="number" step="0.01" (onInput)="symbolSpinTimes2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="symbolSpinTimes3().toString()" type="number" step="0.01" (onInput)="symbolSpinTimes3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0A\u6240\u9700\u7684\u6642\u9593" class="cursor-help">startUpTimes</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="startUpTimes1().toString()" type="number" step="0.01" (onInput)="startUpTimes1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startUpTimes2().toString()" type="number" step="0.01" (onInput)="startUpTimes2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startUpTimes3().toString()" type="number" step="0.01" (onInput)="startUpTimes3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0A\u6240\u9700\u7684\u8DDD\u96E2" class="cursor-help">startUpDistances</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="startUpDistances1().toString()" type="number" step="0.01" (onInput)="startUpDistances1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startUpDistances2().toString()" type="number" step="0.01" (onInput)="startUpDistances2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startUpDistances3().toString()" type="number" step="0.01" (onInput)="startUpDistances3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0B\u6240\u9700\u7684\u6642\u9593" class="cursor-help">startDownTimes</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="startDownTimes1().toString()" type="number" step="0.01" (onInput)="startDownTimes1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startDownTimes2().toString()" type="number" step="0.01" (onInput)="startDownTimes2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startDownTimes3().toString()" type="number" step="0.01" (onInput)="startDownTimes3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u7B2C\u4E00\u8EF8\u8F2A\u8EF8\u555F\u52D5\u5EF6\u9072\u6240\u9700\u7684\u6642\u9593" class="cursor-help">startDelays</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="startDelays1().toString()" type="number" step="0.01" (onInput)="startDelays1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startDelays2().toString()" type="number" step="0.01" (onInput)="startDelays2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startDelays3().toString()" type="number" step="0.01" (onInput)="startDelays3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8F2A\u8EF8\u555F\u52D5\u5EF6\u9072\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593" class="cursor-help">startDelayInterval</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="startDelayInterval1().toString()" type="number" step="0.01" (onInput)="startDelayInterval1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startDelayInterval2().toString()" type="number" step="0.01" (onInput)="startDelayInterval2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="startDelayInterval3().toString()" type="number" step="0.01" (onInput)="startDelayInterval3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8F2A\u8EF8\u7D50\u675F\u6240\u9700\u7684\u6642\u9593" class="cursor-help">endTimes</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="endTimes1().toString()" type="number" step="0.01" (onInput)="endTimes1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endTimes2().toString()" type="number" step="0.01" (onInput)="endTimes2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endTimes3().toString()" type="number" step="0.01" (onInput)="endTimes3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0A\u53CD\u5F48\u6240\u9700\u7684\u6642\u9593" class="cursor-help">endUpTimes</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="endUpTimes1().toString()" type="number" step="0.01" (onInput)="endUpTimes1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endUpTimes2().toString()" type="number" step="0.01" (onInput)="endUpTimes2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endUpTimes3().toString()" type="number" step="0.01" (onInput)="endUpTimes3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0B\u53CD\u5F48\u6240\u9700\u7684\u6642\u9593" class="cursor-help">endDownTimes</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="endDownTimes1().toString()" type="number" step="0.01" (onInput)="endDownTimes1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endDownTimes2().toString()" type="number" step="0.01" (onInput)="endDownTimes2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endDownTimes3().toString()" type="number" step="0.01" (onInput)="endDownTimes3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0B\u53CD\u5F48\u984D\u5916\u6240\u9700\u7684\u8DDD\u96E2" class="cursor-help">endBottomDistances</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="endBottomDistances1().toString()" type="number" step="0.01" (onInput)="endBottomDistances1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endBottomDistances2().toString()" type="number" step="0.01" (onInput)="endBottomDistances2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endBottomDistances3().toString()" type="number" step="0.01" (onInput)="endBottomDistances3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n\n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0A\u53CD\u5F48\u6240\u9700\u7684\u8DDD\u96E2" class="cursor-help">endTopDistances</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="endTopDistances1().toString()" type="number" step="0.01" (onInput)="endTopDistances1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endTopDistances2().toString()" type="number" step="0.01" (onInput)="endTopDistances2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="endTopDistances3().toString()" type="number" step="0.01" (onInput)="endTopDistances3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n\n          </div>\n          <div class="flex flex-col gap-1 ml-4 mt-6">\n            <div class="flex justify-between items-center gap-1">\n              <span title="\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389" class="cursor-help">expectEndTime</span>\n              <ap-input-box [value]="expectEndTime().toString()" type="number" step="0.01" (onInput)="expectEndTime.set(formatNumberStr($event))"/>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendUpTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389" class="cursor-help">expectEndUpTime</span>\n              <ap-input-box [value]="expectEndUpTime().toString()" type="number" step="0.01" (onInput)="expectEndUpTime.set(formatNumberStr($event))"/>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendDownTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389" class="cursor-help">expectEndDownTime</span>\n              <ap-input-box [value]="expectEndDownTime().toString()" type="number" step="0.01" (onInput)="expectEndDownTime.set(formatNumberStr($event))"/>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendBottomDistances\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389" class="cursor-help">expectEndBottomDistance</span>\n              <ap-input-box [value]="expectEndBottomDistance().toString()" type="number" step="0.01" (onInput)="expectEndBottomDistance.set(formatNumberStr($event))"/>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendTopDistances\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389" class="cursor-help">expectEndTopDistance</span>\n              <ap-input-box [value]="expectEndTopDistance().toString()" type="number" step="0.01" (onInput)="expectEndTopDistance.set(formatNumberStr($event))"/>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="NearMiss \u8DDD\u96E2" class="cursor-help">nearMissDistance</span>\n              <ap-input-box [value]="nearMissDistance().toString()" type="number" step="0.01" (onInput)="nearMissDistance.set(formatNumberStr($event))"/>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="NearMiss \u6642\u9593" class="cursor-help">nearMissTime</span>\n              <ap-input-box [value]="nearMissTime().toString()" type="number" step="0.01" (onInput)="nearMissTime.set(formatNumberStr($event))"/>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="LuckyBreak \u8DDD\u96E2" class="cursor-help">luckyBreakDistance</span>\n              <ap-input-box [value]="luckyBreakDistance().toString()" type="number" step="0.01" (onInput)="luckyBreakDistance.set(formatNumberStr($event))"/>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="LuckyBreak \u6642\u9593" class="cursor-help">luckyBreakTime</span>\n              <ap-input-box [value]="luckyBreakTime().toString()" type="number" step="0.01" (onInput)="luckyBreakTime.set(formatNumberStr($event))"/>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="\u63A7\u5236\u55AE\u8EF8 Rolling \u7684\u6642\u5019\u4F7F\u7528" class="cursor-help">spinCounts</span>\n              <div class="flex gap-1">\n                <ap-input-box [value]="spinCounts1().toString()" type="number" step="0.01" (onInput)="spinCounts1.set(formatNumberStr($event))"/>\n                <ap-input-box [value]="spinCounts2().toString()" type="number" step="0.01" (onInput)="spinCounts2.set(formatNumberStr($event))"/>\n                <ap-input-box [value]="spinCounts3().toString()" type="number" step="0.01" (onInput)="spinCounts3.set(formatNumberStr($event))"/>\n              </div>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="\u7576 spinCounts \u4E0D\u5920\u4F7F\u7528\u6642\uFF0C\u88DC\u5145\u4F7F\u7528\u7684\u984D\u5916\u6B21\u6578" class="cursor-help">extraSpinCounts</span>\n              <div class="flex gap-1">\n                <ap-input-box [value]="extraSpinCounts1().toString()" type="number" step="0.01" (onInput)="extraSpinCounts1.set(formatNumberStr($event))"/>\n                <ap-input-box [value]="extraSpinCounts2().toString()" type="number" step="0.01" (onInput)="extraSpinCounts2.set(formatNumberStr($event))"/>\n                <ap-input-box [value]="extraSpinCounts3().toString()" type="number" step="0.01" (onInput)="extraSpinCounts3.set(formatNumberStr($event))"/>\n              </div>\n            </div>\n            \n            <div class="flex justify-between items-center gap-1">\n              <span title="\u8F2A\u8EF8\u505C\u8F2A\u9593\u9694\u5716\u6A19\u6578\u91CF" class="cursor-help">spinCountInterval</span>\n              <div class="flex gap-1">\n                <ap-input-box [value]="spinCountInterval1().toString()" type="number" step="0.01" (onInput)="spinCountInterval1.set(formatNumberStr($event))"/>\n                <ap-input-box [value]="spinCountInterval2().toString()" type="number" step="0.01" (onInput)="spinCountInterval2.set(formatNumberStr($event))"/>\n                <ap-input-box [value]="spinCountInterval3().toString()" type="number" step="0.01" (onInput)="spinCountInterval3.set(formatNumberStr($event))"/>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n        <textarea \n          class="w-full mt-2 p-2 pl-4 bg-zinc-800 text-zinc-200 rounded border border-zinc-600 font-mono text-sm min-h-20 resize-y"\n          [value]="localRollingString()"\n          (input)="updateRollingFromJson($event)">\n        </textarea>\n        <ap-button class="w-full mt-2" (click)="applyRollingSettings()">Apply</ap-button>\n      }\n      @if(showDropping()){\n        <div class="flex flex-col gap-1">\n          DroppingSetting\n          <div class="flex justify-between items-center gap-1">\n            <span title="\u5716\u6A19\u6389\u843D\u9032\u5165\u6240\u9700\u7684\u6642\u9593" class="cursor-help">dropInTimes</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="dropInTimes1().toString()" type="number" step="0.01" (onInput)="dropInTimes1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropInTimes2().toString()" type="number" step="0.01" (onInput)="dropInTimes2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropInTimes3().toString()" type="number" step="0.01" (onInput)="dropInTimes3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u5716\u6A19\u6389\u843D\u9032\u5165\u6642\u6BCF\u500B\u5716\u6A19\u7684\u9593\u9694\u6642\u9593" class="cursor-help">dropInSybmolIntervals</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="dropInSybmolIntervals1().toString()" type="number" step="0.01" (onInput)="dropInSybmolIntervals1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropInSybmolIntervals2().toString()" type="number" step="0.01" (onInput)="dropInSybmolIntervals2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropInSybmolIntervals3().toString()" type="number" step="0.01" (onInput)="dropInSybmolIntervals3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u5716\u6A19\u6389\u843D\u9032\u5165\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593" class="cursor-help">dropInReelIntervals</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="dropInReelIntervals1().toString()" type="number" step="0.01" (onInput)="dropInReelIntervals1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropInReelIntervals2().toString()" type="number" step="0.01" (onInput)="dropInReelIntervals2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropInReelIntervals3().toString()" type="number" step="0.01" (onInput)="dropInReelIntervals3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u5716\u6A19\u6389\u843D\u96E2\u958B\u6240\u9700\u7684\u6642\u9593" class="cursor-help">dropOutTimes</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="dropOutTimes1().toString()" type="number" step="0.01" (onInput)="dropOutTimes1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropOutTimes2().toString()" type="number" step="0.01" (onInput)="dropOutTimes2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropOutTimes3().toString()" type="number" step="0.01" (onInput)="dropOutTimes3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u5716\u6A19\u6389\u843D\u96E2\u958B\u6642\u6BCF\u500B\u5716\u6A19\u7684\u9593\u9694\u6642\u9593" class="cursor-help">dropOutSymbolIntervals</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="dropOutSymbolIntervals1().toString()" type="number" step="0.01" (onInput)="dropOutSymbolIntervals1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropOutSymbolIntervals2().toString()" type="number" step="0.01" (onInput)="dropOutSymbolIntervals2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropOutSymbolIntervals3().toString()" type="number" step="0.01" (onInput)="dropOutSymbolIntervals3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u5716\u6A19\u6389\u843D\u96E2\u958B\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593" class="cursor-help">dropOutReelIntervals</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="dropOutReelIntervals1().toString()" type="number" step="0.01" (onInput)="dropOutReelIntervals1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropOutReelIntervals2().toString()" type="number" step="0.01" (onInput)="dropOutReelIntervals2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="dropOutReelIntervals3().toString()" type="number" step="0.01" (onInput)="dropOutReelIntervals3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u5716\u6A19\u79FB\u52D5\u6642\u6BCF\u500B\u5716\u6A19\u6240\u9700\u7684\u6642\u9593" class="cursor-help">moveTimePerSymbol</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="moveTimePerSymbol1().toString()" type="number" step="0.01" (onInput)="moveTimePerSymbol1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="moveTimePerSymbol2().toString()" type="number" step="0.01" (onInput)="moveTimePerSymbol2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="moveTimePerSymbol3().toString()" type="number" step="0.01" (onInput)="moveTimePerSymbol3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n          \n          <div class="flex justify-between items-center gap-1">\n            <span title="\u5716\u6A19\u79FB\u52D5\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593" class="cursor-help">moveReelIntervals</span>\n            <div class="flex gap-1">\n              <ap-input-box [value]="moveReelIntervals1().toString()" type="number" step="0.01" (onInput)="moveReelIntervals1.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="moveReelIntervals2().toString()" type="number" step="0.01" (onInput)="moveReelIntervals2.set(formatNumberStr($event))"/>\n              <ap-input-box [value]="moveReelIntervals3().toString()" type="number" step="0.01" (onInput)="moveReelIntervals3.set(formatNumberStr($event))"/>\n            </div>\n          </div>\n        </div>\n        <textarea \n          class="w-full mt-2 p-2 pl-4 bg-zinc-800 text-zinc-200 rounded border border-zinc-600 font-mono text-sm min-h-20 resize-y"\n          [value]="localDroppingString()"\n          (input)="updateDroppingFromJson($event)">\n        </textarea>\n        <ap-button class="w-full mt-2" (click)="applyDroppingSettings()">Apply</ap-button>\n      }\n      @if(showGameParameter()){\n        <div class="flex flex-col gap-1">\n          GameParameterSetting\n          <div class="flex justify-between items-center gap-1">\n            <span title="\u8ABF\u8A66\u7528\u8D0F\u5206\u6578" class="cursor-help">debugWinScore</span>\n            <ap-input-box [value]="debugWinScore().toString()" type="number" step="1" (onInput)="debugWinScore.set(formatNumberStr($event))"/>\n          </div>\n          <ap-select [options]="selects()" [selected]="debugWinType().toString()" (onSelect)="debugWinType.set(+$event)"></ap-select>\n        </div>\n        <ap-button class="w-full mt-2" (click)="applyGameParameterSettings()">Apply</ap-button>\n      }\n      @if(showDemoTestCase()){\n        <div class="flex flex-col gap-1">\n          DemoTestCaseSetting\n          <ap-select [options]="demoSelects()" [selected]="demoCaseName()" (onSelect)="demoCaseName.set($event)"></ap-select>\n        </div>\n        <ap-button class="w-full mt-2" (click)="applyDemoTestCaseSettings()">Apply</ap-button>\n      }\n    </div>\n </div>\n}\n', styles: ["/* src/app/pages/slot-reel-setting/slot-reel-setting.component.css */\n.cursor-help[title] {\n  position: relative;\n}\n.cursor-help[title]:hover::before {\n  content: attr(title);\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  background: rgba(0, 0, 0, 1);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n  font-size: 12px;\n  z-index: 1000;\n  pointer-events: none;\n  animation: fadeIn 0.1s ease-in;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nap-input-box {\n  width: 100px;\n}\nap-select {\n  position: relative;\n  z-index: 100;\n}\n/*# sourceMappingURL=slot-reel-setting.component.css.map */\n"] }]
  }], () => [{ type: GameIframeCtrlService }, { type: LoggerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotReelSettingComponent, { className: "SlotReelSettingComponent", filePath: "src/app/pages/slot-reel-setting/slot-reel-setting.component.ts", lineNumber: 22 });
})();

// src/app/pages/trn-debug-panel/trn-debug-panel.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function TrnDebugPanelComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "ap-button", 17);
    \u0275\u0275listener("clicked", function TrnDebugPanelComponent_For_27_Template_ap_button_clicked_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSignal(item_r2.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
  }
}
function TrnDebugPanelComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "ap-loading-overlay");
    \u0275\u0275elementEnd();
  }
}
var TrnDebugPanelComponent = class _TrnDebugPanelComponent {
  trn = inject(TrnCtrlService);
  wallet = inject(PlayerWalletService);
  api = inject(AppInterfaceService);
  /** Debug Panel Loading顯示開關 */
  isDebugLoading = signal(false);
  destroy$ = new Subject();
  /** Debug: Status Options */
  trnStatusOptions = [
    { label: "idle", value: "idle" },
    { label: "matching", value: "matching" },
    { label: "playing quick", value: "playing-quick" },
    { label: "playing event", value: "playing-event" }
  ];
  /** Debug: 用 Quick Match Event ID Options */
  debugTrnIdOptions = computed(() => {
    return this.trn.trnList().map((trn) => {
      return { label: `${trn.name} (${trn.id})`, value: trn.id };
    });
  });
  /** Debug: 選擇的Trn ID */
  debugTrnId = signal("");
  /** 輸入的 Leader Board Page */
  inputPage = signal(1);
  /** 輸入的 Leader Board Size */
  inputSize = signal(10);
  /** 輸入的 Player History Limit */
  inputLimit = signal(10);
  /** 輸入的 Player History Offset */
  inputOffset = signal(0);
  /** 輸入的 Custom Action  */
  customAction = signal("");
  /** 顯示的 Spin Result */
  spinResultBalance = signal("");
  /** 所有Signal切換清單 */
  signalList = [
    { key: "game-starting", label: "Game Starting" },
    { key: "confirm-popup", label: "Confirm Popup" },
    { key: "event-popup", label: "Event Popup" },
    { key: "match-finished", label: "Match Finished" },
    { key: "created-notification", label: "Created Notification" },
    { key: "status-bar", label: "Status Bar" },
    { key: "game-result", label: "Game Result" },
    { key: "waiting-result", label: "Waiting Result" }
  ];
  constructor() {
  }
  ngOnInit() {
    this.api.spinResult$.pipe(takeUntil(this.destroy$)).subscribe(this.onSpinResult.bind(this));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngAfterViewInit() {
    this.spinResultBalance.set(this.wallet.balance().toString());
  }
  generateRoomState() {
    const list = generatePlayerList();
    const data = {
      id: "debug-room",
      rank: null,
      playersList: list,
      currentPool: Math.floor(Math.random() * 1e4)
    };
    this.trn.debugAssignRoomUpdate(data);
  }
  /** 跟Server取得可用的Event */
  clickEventList() {
    this.trn.sendEventList();
  }
  /** 執行自訂Action */
  sendCustomAction(action) {
    this.trn.sendCustomAction(action);
  }
  /** 送出Leaderboard請求 */
  sendEvnetLeaderboard() {
    this.trn.sendEvnetLeaderboard(this.debugTrnId() || "", this.inputPage(), this.inputSize());
  }
  sendJoinEvent() {
    const trn = this.trn.trnList().find((trn2) => trn2.id === this.debugTrnId());
    if (!trn)
      return;
    if (trn.type === "quick")
      return;
    this.trn.sendJoinEvent(this.debugTrnId());
  }
  /** 送出Player History請求 */
  sendPlayerHistory() {
    this.trn.sendPlayerHistory(this.inputLimit(), this.inputOffset());
  }
  /** 取得Slot Spin結果 */
  sendTrnSpin() {
    this.isDebugLoading.set(true);
    this.wallet.sendSpinRequest();
  }
  onSpinResult(result) {
    if (result.data.errorCode)
      throw new Error(`Error Code: ${result.data.errorCode}`);
    this.spinResultBalance.set(result.data.balance?.toString() || "No Result");
    this.isDebugLoading.set(false);
  }
  toggleSignal(key) {
    this.trn.debugToggleSignal(key);
  }
  togglePage(page) {
    this.trn.debugTogglePage(page);
  }
  static \u0275fac = function TrnDebugPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnDebugPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrnDebugPanelComponent, selectors: [["trn-debug-panel"]], decls: 31, vars: 6, consts: [[1, "relative", "w-xs", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl", "text-sm"], [1, "flex", "items-center", "gap-2", "text-xs"], [3, "checkedChange", "checked"], [3, "onSelect", "options"], [1, "flex", "items-center"], ["placeholder", "Action", 3, "onInput", "value"], ["size", "x-small", "label", "Custom Action", 3, "clicked"], ["size", "x-small", "label", "Event List", 3, "clicked"], ["size", "x-small", "label", "Join Event", 3, "clicked"], [1, "flex", "gap-2", "items-center", "text-xs"], [1, "w-12", 3, "onInput"], ["size", "x-small", "label", "Leader Board", 3, "clicked"], ["size", "x-small", "label", "Play History", 3, "clicked"], ["size", "x-small", "label", "Tournament Spin", 3, "clicked"], [1, "flex", "items-center", "gap-2"], ["size", "x-small", "label", "Generate List", 3, "clicked"], [1, "absolute", "inset-0", "bg-black/50"], ["size", "x-small", "label", "Toggle", 3, "clicked"]], template: function TrnDebugPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ap-toggle-switch", 2);
      \u0275\u0275listener("checkedChange", function TrnDebugPanelComponent_Template_ap_toggle_switch_checkedChange_2_listener($event) {
        return ctx.trn.debugForceEnable.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Force Enabled ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ap-select", 3);
      \u0275\u0275listener("onSelect", function TrnDebugPanelComponent_Template_ap_select_onSelect_4_listener($event) {
        return ctx.togglePage($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "ap-input-box", 5);
      \u0275\u0275listener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_6_listener($event) {
        return ctx.customAction.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ap-button", 6);
      \u0275\u0275listener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_7_listener() {
        return ctx.sendCustomAction(ctx.customAction());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "ap-button", 7);
      \u0275\u0275listener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_8_listener() {
        return ctx.clickEventList();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ap-select", 3);
      \u0275\u0275listener("onSelect", function TrnDebugPanelComponent_Template_ap_select_onSelect_9_listener($event) {
        return ctx.debugTrnId.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ap-button", 8);
      \u0275\u0275listener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_10_listener() {
        return ctx.sendJoinEvent();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275text(12, " Page ");
      \u0275\u0275elementStart(13, "ap-input-box", 10);
      \u0275\u0275listener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_13_listener($event) {
        return ctx.inputPage.set(+$event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Size ");
      \u0275\u0275elementStart(15, "ap-input-box", 10);
      \u0275\u0275listener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_15_listener($event) {
        return ctx.inputSize.set(+$event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ap-button", 11);
      \u0275\u0275listener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_16_listener() {
        return ctx.sendEvnetLeaderboard();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9);
      \u0275\u0275text(18, " Limit ");
      \u0275\u0275elementStart(19, "ap-input-box", 10);
      \u0275\u0275listener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_19_listener($event) {
        return ctx.inputLimit.set(+$event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Offset ");
      \u0275\u0275elementStart(21, "ap-input-box", 10);
      \u0275\u0275listener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_21_listener($event) {
        return ctx.inputOffset.set(+$event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ap-button", 12);
      \u0275\u0275listener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_22_listener() {
        return ctx.sendPlayerHistory();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 1);
      \u0275\u0275text(24);
      \u0275\u0275elementStart(25, "ap-button", 13);
      \u0275\u0275listener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_25_listener() {
        return ctx.sendTrnSpin();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(26, TrnDebugPanelComponent_For_27_Template, 3, 1, "div", 1, _forTrack0);
      \u0275\u0275elementStart(28, "div", 14)(29, "ap-button", 15);
      \u0275\u0275listener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_29_listener() {
        return ctx.generateRoomState();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(30, TrnDebugPanelComponent_Conditional_30_Template, 2, 0, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.trn.debugForceEnable());
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.trnStatusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.customAction());
      \u0275\u0275advance(3);
      \u0275\u0275property("options", ctx.debugTrnIdOptions());
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate1(" Balance: ", ctx.spinResultBalance(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.signalList);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isDebugLoading() ? 30 : -1);
    }
  }, dependencies: [ApSelectComponent, ApInputBox, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnDebugPanelComponent, [{
    type: Component,
    args: [{ selector: "trn-debug-panel", imports: [ApSelectComponent, ApInputBox, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent], template: '\n<div\n  class="relative w-xs flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl text-sm"\n>\n  <div class="flex items-center gap-2 text-xs">\n    <ap-toggle-switch  [checked]="trn.debugForceEnable()" (checkedChange)="trn.debugForceEnable.set($event)"/>\n    Force Enabled\n  </div>\n  <ap-select\n    [options]="trnStatusOptions"\n    (onSelect)="togglePage($event)"\n  >\n  </ap-select>\n  <div class="flex items-center">\n    <ap-input-box\n      placeholder="Action"\n      [value]="customAction()"\n      (onInput)="customAction.set($event)"\n    />\n    <ap-button\n      size="x-small"\n      label="Custom Action"\n      (clicked)="sendCustomAction(customAction())"\n    />\n  </div>\n  <ap-button size="x-small" label="Event List" (clicked)="clickEventList()" />\n  <ap-select\n    [options]="debugTrnIdOptions()"\n    (onSelect)="debugTrnId.set($event)"\n  />\n  <ap-button size="x-small" label="Join Event" (clicked)="sendJoinEvent()" />\n  <div class="flex gap-2 items-center text-xs">\n    Page\n    <ap-input-box class="w-12" (onInput)="inputPage.set(+$event)"/>\n    Size\n    <ap-input-box class="w-12"  (onInput)="inputSize.set(+$event)"/>\n    <ap-button size="x-small" label="Leader Board" (clicked)="sendEvnetLeaderboard()" />\n  </div>\n  <div class="flex gap-2 items-center text-xs">\n    Limit\n    <ap-input-box class="w-12" (onInput)="inputLimit.set(+$event)"/>\n    Offset\n    <ap-input-box class="w-12"  (onInput)="inputOffset.set(+$event)"/>\n    <ap-button size="x-small" label="Play History" (clicked)="sendPlayerHistory()" />\n  </div>\n  <div class="flex items-center gap-2 text-xs">\n    Balance: {{ spinResultBalance() }}\n    <ap-button size="x-small" label="Tournament Spin" (clicked)="sendTrnSpin()"></ap-button>\n  </div>\n  @for (item of signalList; track item.label) {\n    <div class="flex items-center gap-2 text-xs">\n      <ap-button\n        size="x-small"\n        label="Toggle"\n        (clicked)="toggleSignal(item.key)"\n      />\n      {{ item.label }}\n    </div>\n  }\n  <div class="flex items-center gap-2">\n    <ap-button size="x-small" label="Generate List" (clicked)="generateRoomState()"></ap-button>\n  </div>\n  @if (isDebugLoading()) {\n    <div class="absolute inset-0 bg-black/50">\n      <ap-loading-overlay />\n    </div>\n  }\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrnDebugPanelComponent, { className: "TrnDebugPanelComponent", filePath: "src/app/pages/trn-debug-panel/trn-debug-panel.component.ts", lineNumber: 24 });
})();

// src/app/pages/bottom-panel-debug/bottom-panel-debug.component.ts
function BottomPanelDebugComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 16);
    \u0275\u0275text(2, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.debugBalance());
  }
}
var BottomPanelDebugComponent = class _BottomPanelDebugComponent {
  panel = inject(BottomPanelService);
  wallet = inject(PlayerWalletService);
  api = inject(AppInterfaceService);
  /** 連續Spin次數 */
  spinLoopTimesLabel = signal("1");
  /** 連續Spin間隔時間 */
  spinLoopIntervalLabel = signal("0.5");
  /** 是否正在進行連續Spin */
  isSpinLooping = signal(false);
  /** Hold Turbo 參數：按住門檻毫秒 */
  turboHoldThresholdMsLabel = signal("500");
  /** Hold Turbo 參數：連續觸發間隔毫秒 */
  turboSkipIntervalMsLabel = signal("500");
  /** Hold Turbo 參數：閒置提示延遲毫秒 */
  idleTooltipMsLabel = signal("500");
  panelStatusOptions = [
    { value: "closed", label: "Closed" },
    { value: "freeSpins", label: "Free Spins" },
    { value: "freeBonus", label: "Free Bonus" }
  ];
  spinButtonModeOptions = SPIN_BUTTON_MODES.map((mode) => ({
    value: mode,
    label: mode
  }));
  debugSpinBet = signal("");
  debugSpinMode = signal("");
  debugBalance = signal(null);
  /** 是否顯示Remaining Turnover，獨立於panel，跟bottom-panel一樣自行持有狀態 */
  showRemainingTurnover = signal(false);
  spinLoopSubscription = null;
  ngOnInit() {
    this.api.spinResult$.subscribe(this.onSpinResult.bind(this));
    this.turboHoldThresholdMsLabel.set(String(this.panel.turboHoldThresholdMs()));
    this.turboSkipIntervalMsLabel.set(String(this.panel.turboSkipIntervalMs()));
    this.idleTooltipMsLabel.set(String(this.panel.idleTooltipMs()));
  }
  ngOnDestroy() {
    this.cancelSpinLoop();
  }
  sendPanelStatus(status) {
    if (status === "closed") {
      this.panel.sendDebugFreeBonusRound(false);
      this.panel.sendDebugFreeSpinRound(false);
    } else if (status === "freeSpins") {
      this.panel.sendDebugFreeSpinRound(true);
      this.panel.sendDebugFreeBonusRound(false);
    } else if (status === "freeBonus") {
      this.panel.sendDebugFreeBonusRound(true);
      this.panel.sendDebugFreeSpinRound(false);
    }
  }
  sendSpinButtonMode(mode) {
    this.panel.sendDebugSpinButtonMode(mode);
  }
  sendInsufficientBalance() {
    this.panel.sendDebugInsufficientBalance();
  }
  /** 切換 Hold for Turbo Spin（按住加速）功能 */
  sendHoldTurboEnabled(enabled) {
    this.panel.setHoldTurboEnabled(enabled);
  }
  sendTurboHoldThresholdMs(value) {
    const parsed = this.parseMsValue(value, 500);
    this.turboHoldThresholdMsLabel.set(String(parsed));
    this.panel.turboHoldThresholdMs.set(parsed);
  }
  sendTurboSkipIntervalMs(value) {
    const parsed = this.parseMsValue(value, 500);
    this.turboSkipIntervalMsLabel.set(String(parsed));
    this.panel.turboSkipIntervalMs.set(parsed);
  }
  sendIdleTooltipMs(value) {
    const parsed = this.parseMsValue(value, 500);
    this.idleTooltipMsLabel.set(String(parsed));
    this.panel.idleTooltipMs.set(parsed);
  }
  sendDebugSpin(bet, mode) {
    if (this.isSpinLooping()) {
      return;
    }
    this.cancelSpinLoop();
    this.debugBalance.set(null);
    const loopTimes = this.parseSpinLoopTimes();
    const intervalMs = this.parseSpinLoopIntervalMs();
    this.isSpinLooping.set(true);
    this.spinLoopSubscription = timer(0, intervalMs).pipe(take(loopTimes)).subscribe({
      next: () => {
        this.wallet.sendSpinRequest("", bet, mode);
      },
      complete: () => {
        this.spinLoopSubscription = null;
        this.isSpinLooping.set(false);
      }
    });
  }
  cancelSpinLoop() {
    if (this.spinLoopSubscription) {
      this.spinLoopSubscription.unsubscribe();
      this.spinLoopSubscription = null;
    }
    this.isSpinLooping.set(false);
  }
  parseSpinLoopTimes() {
    const value = Number(this.spinLoopTimesLabel());
    if (!Number.isFinite(value) || value < 1) {
      this.spinLoopTimesLabel.set("1");
      return 1;
    }
    const times = Math.floor(value);
    this.spinLoopTimesLabel.set(String(times));
    return times;
  }
  parseSpinLoopIntervalMs() {
    const value = Number(this.spinLoopIntervalLabel());
    if (!Number.isFinite(value) || value < 0) {
      this.spinLoopIntervalLabel.set("0");
      return 0;
    }
    const intervalSec = value;
    this.spinLoopIntervalLabel.set(String(intervalSec));
    return intervalSec * 1e3;
  }
  parseMsValue(value, fallback) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < 0) {
      return fallback;
    }
    return Math.floor(parsed);
  }
  /** 更新Balance */
  onSpinResult(result) {
    this.debugBalance.set(calc.s2c(result.data.balance));
  }
  static \u0275fac = function BottomPanelDebugComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomPanelDebugComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomPanelDebugComponent, selectors: [["bottom-panel-debug"]], decls: 17, vars: 18, consts: [[1, "relative", "w-xs", "flex", "flex-col", "gap-1", "p-1", "text-white", "bg-black/50", "rounded-xl"], [3, "checkedChange", "label", "checked"], ["size", "small", "label", "Panel Status", 3, "onSelect", "options"], [1, "flex", "flex-col", "gap-1", "border-t", "border-zinc-600", "pt-1"], ["size", "small", "label", "Spin Bet", "type", "number", "placeholder", "bet amount", 3, "valueChange", "value"], ["size", "small", "label", "Spin Mode", "type", "text", "placeholder", "mode (optional)", 3, "valueChange", "value"], ["size", "small", "label", "Spin Loop Times", "type", "number", "placeholder", "times", 3, "valueChange", "value"], ["size", "small", "label", "Spin Loop Interval(sec)", "type", "number", "placeholder", "interval (s)", 3, "valueChange", "step", "value"], ["size", "x-small", 3, "clicked", "label", "loading"], [1, "flex", "items-center", "justify-between", "px-1", "py-0.5", "rounded", "bg-zinc-800", "text-xs"], ["size", "small", "label", "Spin Button Status", 3, "onSelect", "options"], [1, "flex", "flex-col", "gap-1", "border-t", "border-zinc-600", "pt-1", "px-1"], ["size", "small", "label", "Turbo Hold Threshold (ms)", "type", "number", "placeholder", "500", 3, "valueChange", "onInput", "step", "value"], ["size", "small", "label", "Turbo Skip Interval (ms)", "type", "number", "placeholder", "500", 3, "valueChange", "onInput", "step", "value"], ["size", "small", "label", "Idle Tooltip Delay (ms)", "type", "number", "placeholder", "500", 3, "valueChange", "onInput", "step", "value"], ["size", "x-small", "accentColor", "zinc", "label", "Send Insufficient Balance", 3, "clicked"], [1, "text-zinc-400"], [1, "font-medium", "text-yellow-400"]], template: function BottomPanelDebugComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ap-toggle-switch", 1);
      \u0275\u0275listener("checkedChange", function BottomPanelDebugComponent_Template_ap_toggle_switch_checkedChange_1_listener($event) {
        return ctx.sendHoldTurboEnabled($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ap-select", 2);
      \u0275\u0275listener("onSelect", function BottomPanelDebugComponent_Template_ap_select_onSelect_2_listener($event) {
        return ctx.sendPanelStatus($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "ap-input-box", 4);
      \u0275\u0275twoWayListener("valueChange", function BottomPanelDebugComponent_Template_ap_input_box_valueChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.debugSpinBet, $event) || (ctx.debugSpinBet = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ap-input-box", 5);
      \u0275\u0275twoWayListener("valueChange", function BottomPanelDebugComponent_Template_ap_input_box_valueChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.debugSpinMode, $event) || (ctx.debugSpinMode = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "ap-input-box", 6);
      \u0275\u0275twoWayListener("valueChange", function BottomPanelDebugComponent_Template_ap_input_box_valueChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.spinLoopTimesLabel, $event) || (ctx.spinLoopTimesLabel = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ap-input-box", 7);
      \u0275\u0275twoWayListener("valueChange", function BottomPanelDebugComponent_Template_ap_input_box_valueChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.spinLoopIntervalLabel, $event) || (ctx.spinLoopIntervalLabel = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ap-button", 8);
      \u0275\u0275listener("clicked", function BottomPanelDebugComponent_Template_ap_button_clicked_9_listener() {
        return ctx.sendDebugSpin(+ctx.debugSpinBet(), ctx.debugSpinMode());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, BottomPanelDebugComponent_Conditional_10_Template, 5, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ap-select", 10);
      \u0275\u0275listener("onSelect", function BottomPanelDebugComponent_Template_ap_select_onSelect_11_listener($event) {
        return ctx.sendSpinButtonMode($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 11)(13, "ap-input-box", 12);
      \u0275\u0275twoWayListener("valueChange", function BottomPanelDebugComponent_Template_ap_input_box_valueChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.turboHoldThresholdMsLabel, $event) || (ctx.turboHoldThresholdMsLabel = $event);
        return $event;
      });
      \u0275\u0275listener("onInput", function BottomPanelDebugComponent_Template_ap_input_box_onInput_13_listener($event) {
        return ctx.sendTurboHoldThresholdMs($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ap-input-box", 13);
      \u0275\u0275twoWayListener("valueChange", function BottomPanelDebugComponent_Template_ap_input_box_valueChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.turboSkipIntervalMsLabel, $event) || (ctx.turboSkipIntervalMsLabel = $event);
        return $event;
      });
      \u0275\u0275listener("onInput", function BottomPanelDebugComponent_Template_ap_input_box_onInput_14_listener($event) {
        return ctx.sendTurboSkipIntervalMs($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ap-input-box", 14);
      \u0275\u0275twoWayListener("valueChange", function BottomPanelDebugComponent_Template_ap_input_box_valueChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.idleTooltipMsLabel, $event) || (ctx.idleTooltipMsLabel = $event);
        return $event;
      });
      \u0275\u0275listener("onInput", function BottomPanelDebugComponent_Template_ap_input_box_onInput_15_listener($event) {
        return ctx.sendIdleTooltipMs($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "ap-button", 15);
      \u0275\u0275listener("clicked", function BottomPanelDebugComponent_Template_ap_button_clicked_16_listener() {
        return ctx.sendInsufficientBalance();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("label", "Hold & Speed Up")("checked", ctx.panel.holdTurboEnabled());
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.panelStatusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("value", ctx.debugSpinBet);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("value", ctx.debugSpinMode);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("value", ctx.spinLoopTimesLabel);
      \u0275\u0275advance();
      \u0275\u0275property("step", 0.1);
      \u0275\u0275twoWayProperty("value", ctx.spinLoopIntervalLabel);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isSpinLooping() ? "Spinning..." : "Send Spin")("loading", ctx.isSpinLooping());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debugBalance() !== null ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.spinButtonModeOptions);
      \u0275\u0275advance(2);
      \u0275\u0275property("step", 1);
      \u0275\u0275twoWayProperty("value", ctx.turboHoldThresholdMsLabel);
      \u0275\u0275advance();
      \u0275\u0275property("step", 1);
      \u0275\u0275twoWayProperty("value", ctx.turboSkipIntervalMsLabel);
      \u0275\u0275advance();
      \u0275\u0275property("step", 1);
      \u0275\u0275twoWayProperty("value", ctx.idleTooltipMsLabel);
    }
  }, dependencies: [ApButtonComponent, ApSelectComponent, ApInputBox, ApToggleSwitchComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomPanelDebugComponent, [{
    type: Component,
    args: [{ selector: "bottom-panel-debug", imports: [ApButtonComponent, ApSelectComponent, ApInputBox, ApToggleSwitchComponent], template: `<div
  class="relative w-xs flex flex-col gap-1 p-1 text-white bg-black/50 rounded-xl"
>
  <ap-toggle-switch
    [label]="'Hold &amp; Speed Up'"
    [checked]="panel.holdTurboEnabled()"
    (checkedChange)="sendHoldTurboEnabled($event)"
  />
  <ap-select
    size="small"
    label="Panel Status"
    [options]="panelStatusOptions"
    (onSelect)="sendPanelStatus($event)"
  />
  <div class="flex flex-col gap-1 border-t border-zinc-600 pt-1">
    <ap-input-box
      size="small"
      label="Spin Bet"
      type="number"
      placeholder="bet amount"
      [(value)]="debugSpinBet"
    />
    <ap-input-box
      size="small"
      label="Spin Mode"
      type="text"
      placeholder="mode (optional)"
      [(value)]="debugSpinMode"
    />
    <div>
      <ap-input-box
        size="small"
        label="Spin Loop Times"
        type="number"
        placeholder="times"
        [(value)]="spinLoopTimesLabel"
      />
      <ap-input-box
        size="small"
        label="Spin Loop Interval(sec)"
        type="number"
        [step]="0.1"
        placeholder="interval (s)"
        [(value)]="spinLoopIntervalLabel"
      />
    </div>
    <ap-button
      size="x-small"
      [label]="isSpinLooping() ? 'Spinning...' : 'Send Spin'"
      [loading]="isSpinLooping()"
      (clicked)="sendDebugSpin(+debugSpinBet(), debugSpinMode())"
    />

    @if (debugBalance() !== null) {
      <div
        class="flex items-center justify-between px-1 py-0.5 rounded bg-zinc-800 text-xs"
      >
        <span class="text-zinc-400">Balance</span>
        <span class="font-medium text-yellow-400">{{ debugBalance() }}</span>
      </div>
    }
  </div>
  <ap-select size="small" label="Spin Button Status" [options]="spinButtonModeOptions" (onSelect)="sendSpinButtonMode($event)"
  />
  <div class="flex flex-col gap-1 border-t border-zinc-600 pt-1 px-1">
    <ap-input-box
      size="small"
      label="Turbo Hold Threshold (ms)"
      type="number"
      [step]="1"
      placeholder="500"
      [(value)]="turboHoldThresholdMsLabel"
      (onInput)="sendTurboHoldThresholdMs($event)"
    />
    <ap-input-box
      size="small"
      label="Turbo Skip Interval (ms)"
      type="number"
      [step]="1"
      placeholder="500"
      [(value)]="turboSkipIntervalMsLabel"
      (onInput)="sendTurboSkipIntervalMs($event)"
    />
    <ap-input-box
      size="small"
      label="Idle Tooltip Delay (ms)"
      type="number"
      [step]="1"
      placeholder="500"
      [(value)]="idleTooltipMsLabel"
      (onInput)="sendIdleTooltipMs($event)"
    />
  </div>
  <ap-button
    size="x-small"
    accentColor="zinc"
    label="Send Insufficient Balance"
    (clicked)="sendInsufficientBalance()"
  />
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomPanelDebugComponent, { className: "BottomPanelDebugComponent", filePath: "src/app/pages/bottom-panel-debug/bottom-panel-debug.component.ts", lineNumber: 22 });
})();

// src/app/pages/log-debug-panel/log-debug-panel.component.ts
var _forTrack02 = ($index, $item) => $item.label;
function LogDebugPanelComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-toggle-switch", 3);
    \u0275\u0275listener("checkedChange", function LogDebugPanelComponent_For_2_Template_ap_toggle_switch_checkedChange_0_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(item_r2.signal.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("label", item_r2.label)("checked", item_r2.signal());
  }
}
var LogDebugPanelComponent = class _LogDebugPanelComponent {
  logger = inject(LoggerService);
  toggleList = [
    { label: "Normal Log", signal: this.logger.logEnabled },
    { label: "Iframe Log", signal: this.logger.iframeLogEnabled },
    { label: "Iframe Socket Log", signal: this.logger.iframeSocketLogEnabled },
    { label: "API Log", signal: this.logger.apiLogEnabled },
    { label: "LeaderBoard Log", signal: this.logger.leaderboardLogEnabled },
    { label: "Iframe Replay Log", signal: this.logger.iframeReplayLogEnabled },
    { label: "Iframe History Log", signal: this.logger.iframeHistoryLogEnabled },
    { label: "Reward System Log", signal: this.logger.rewardSystemLogEnabled },
    { label: "Campaign Log", signal: this.logger.campaignLogEnabled },
    { label: "OG Log", signal: this.logger.ogLogEnabled }
  ];
  clickSave() {
    this.logger.saveSettings();
  }
  clickDelete() {
    this.logger.deleteSettings();
  }
  static \u0275fac = function LogDebugPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogDebugPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogDebugPanelComponent, selectors: [["log-debug-panel"]], decls: 7, vars: 0, consts: [[1, "relative", "w-xs", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl"], ["fitMode", "container", 3, "label", "checked"], [3, "click"], ["fitMode", "container", 3, "checkedChange", "label", "checked"]], template: function LogDebugPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, LogDebugPanelComponent_For_2_Template, 1, 2, "ap-toggle-switch", 1, _forTrack02);
      \u0275\u0275elementStart(3, "ap-button", 2);
      \u0275\u0275listener("click", function LogDebugPanelComponent_Template_ap_button_click_3_listener() {
        return ctx.clickSave();
      });
      \u0275\u0275text(4, "Save");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ap-button", 2);
      \u0275\u0275listener("click", function LogDebugPanelComponent_Template_ap_button_click_5_listener() {
        return ctx.clickDelete();
      });
      \u0275\u0275text(6, "Delete");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toggleList);
    }
  }, dependencies: [ApToggleSwitchComponent, ApButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogDebugPanelComponent, [{
    type: Component,
    args: [{ selector: "log-debug-panel", imports: [ApToggleSwitchComponent, ApButtonComponent], template: '<div class="relative w-xs flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl">\n  @for (item of toggleList; track item.label) {\n    <ap-toggle-switch\n      fitMode="container"\n      [label]="item.label"\n      [checked]="item.signal()"\n      (checkedChange)="item.signal.set($event)"\n    />\n  }\n  <!-- save button-->\n  <ap-button (click)="clickSave()">Save</ap-button>\n  <ap-button (click)="clickDelete()">Delete</ap-button>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogDebugPanelComponent, { className: "LogDebugPanelComponent", filePath: "src/app/pages/log-debug-panel/log-debug-panel.component.ts", lineNumber: 12 });
})();

// src/app/pages/misc-debug-panel/misc-debug-panel.component.ts
function MiscDebugPanelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-cashdrop-toast", 4);
  }
}
function MiscDebugPanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-replay-mode", 5);
  }
}
var MiscDebugPanelComponent = class _MiscDebugPanelComponent {
  i18n = inject(AppI18nService);
  replaceByKeyEnabled = this.i18n.replaceByKeyEnabled;
  showCashdropDebug = signal(false);
  showPlayModeDebug = signal(false);
  onReplaceByKeyChange(value) {
    this.i18n.setReplaceByKeyEnabled(value);
  }
  static \u0275fac = function MiscDebugPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MiscDebugPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MiscDebugPanelComponent, selectors: [["misc-debug-panel"]], decls: 6, vars: 5, consts: [[1, "relative", "w-xs", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl"], ["size", "small", "fitMode", "container", "label", "Replay/Demo Mode", 3, "checkedChange", "checked"], ["size", "small", "fitMode", "container", "label", "CashDrop Toast Debug", 3, "checkedChange", "checked"], ["size", "small", "fitMode", "container", "label", "Replace By Key", 3, "checkedChange", "checked"], [1, "fixed", "top-7", "left-1/4"], [1, "fixed", "top-1", "left-1/2", "-translate-x-1/2"]], template: function MiscDebugPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ap-toggle-switch", 1);
      \u0275\u0275listener("checkedChange", function MiscDebugPanelComponent_Template_ap_toggle_switch_checkedChange_1_listener($event) {
        return ctx.showPlayModeDebug.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ap-toggle-switch", 2);
      \u0275\u0275listener("checkedChange", function MiscDebugPanelComponent_Template_ap_toggle_switch_checkedChange_2_listener($event) {
        return ctx.showCashdropDebug.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ap-toggle-switch", 3);
      \u0275\u0275listener("checkedChange", function MiscDebugPanelComponent_Template_ap_toggle_switch_checkedChange_3_listener($event) {
        return ctx.onReplaceByKeyChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(4, MiscDebugPanelComponent_Conditional_4_Template, 1, 0, "event-cashdrop-toast", 4);
      \u0275\u0275conditionalCreate(5, MiscDebugPanelComponent_Conditional_5_Template, 1, 0, "ap-ui-replay-mode", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("checked", ctx.showPlayModeDebug());
      \u0275\u0275advance();
      \u0275\u0275property("checked", ctx.showCashdropDebug());
      \u0275\u0275advance();
      \u0275\u0275property("checked", ctx.replaceByKeyEnabled());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCashdropDebug() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPlayModeDebug() ? 5 : -1);
    }
  }, dependencies: [ApToggleSwitchComponent, EventCashdropToastComponent, ApUiReplayModeComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiscDebugPanelComponent, [{
    type: Component,
    args: [{ selector: "misc-debug-panel", imports: [ApToggleSwitchComponent, EventCashdropToastComponent, ApUiReplayModeComponent], template: '<div class="relative w-xs flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl">\n  <ap-toggle-switch size="small" fitMode="container" label="Replay/Demo Mode" [checked]="showPlayModeDebug()" (checkedChange)="showPlayModeDebug.set($event)" />\n  <ap-toggle-switch size="small" fitMode="container" label="CashDrop Toast Debug" [checked]="showCashdropDebug()" (checkedChange)="showCashdropDebug.set($event)" />\n  <ap-toggle-switch size="small" fitMode="container" label="Replace By Key" [checked]="replaceByKeyEnabled()" (checkedChange)="onReplaceByKeyChange($event)" />\n</div>\n\n@if (showCashdropDebug()) {<event-cashdrop-toast class="fixed top-7 left-1/4"/>}\n@if (showPlayModeDebug()) {<ap-ui-replay-mode class="fixed top-1 left-1/2 -translate-x-1/2"/>}\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MiscDebugPanelComponent, { className: "MiscDebugPanelComponent", filePath: "src/app/pages/misc-debug-panel/misc-debug-panel.component.ts", lineNumber: 13 });
})();

// src/app/pages/history-debug-panel/history-debug-panel.component.ts
var _forTrack03 = ($index, $item) => $item.label;
function HistoryDebugPanelComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-toggle-switch", 2);
    \u0275\u0275listener("checkedChange", function HistoryDebugPanelComponent_For_2_Template_ap_toggle_switch_checkedChange_0_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(item_r2.signal.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("label", item_r2.label)("checked", item_r2.signal());
  }
}
var HistoryDebugPanelComponent = class _HistoryDebugPanelComponent {
  ctrl = inject(HistoryCtrlService);
  toggleList = [
    { label: "Show Replay", signal: this.ctrl.forceReplayDisplayed },
    { label: "Show Share", signal: this.ctrl.forceShareDisplayed }
  ];
  historyStyleOptions = [
    { label: "Default", value: "default" },
    { label: "Style 1", value: "style1" }
  ];
  sendHistoryStyle(style) {
    this.ctrl.historyDetailStyle.set(style);
  }
  static \u0275fac = function HistoryDebugPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryDebugPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryDebugPanelComponent, selectors: [["history-debug-panel"]], decls: 3, vars: 0, consts: [[1, "relative", "w-xs", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl"], ["fitMode", "container", "size", "small", 3, "label", "checked"], ["fitMode", "container", "size", "small", 3, "checkedChange", "label", "checked"]], template: function HistoryDebugPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, HistoryDebugPanelComponent_For_2_Template, 1, 2, "ap-toggle-switch", 1, _forTrack03);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toggleList);
    }
  }, dependencies: [ApToggleSwitchComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryDebugPanelComponent, [{
    type: Component,
    args: [{ selector: "history-debug-panel", imports: [ApToggleSwitchComponent], template: '<div class="relative w-xs flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl">\n  @for (item of toggleList; track item.label) {\n    <ap-toggle-switch\n      fitMode="container"\n      size="small"\n      [label]="item.label"\n      [checked]="item.signal()"\n      (checkedChange)="item.signal.set($event)"\n    />\n  }\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryDebugPanelComponent, { className: "HistoryDebugPanelComponent", filePath: "src/app/pages/history-debug-panel/history-debug-panel.component.ts", lineNumber: 14 });
})();

// src/app/pages/campaign-debug-panel/campaign-debug-panel.component.ts
function CampaignDebugPanelComponent_Conditional_31_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "spinBet: ");
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "spinCount: ");
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.spinBet);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r1.spinCount);
  }
}
function CampaignDebugPanelComponent_Conditional_31_Conditional_53_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("betCount: ", c_r1.condition.betCount.current, " / ", c_r1.condition.betCount.target);
  }
}
function CampaignDebugPanelComponent_Conditional_31_Conditional_53_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("turnover: ", c_r1.condition.turnover.current, " / ", c_r1.condition.turnover.target);
  }
}
function CampaignDebugPanelComponent_Conditional_31_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "condition:");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, CampaignDebugPanelComponent_Conditional_31_Conditional_53_Conditional_2_Template, 2, 2, "span", 19);
    \u0275\u0275conditionalCreate(3, CampaignDebugPanelComponent_Conditional_31_Conditional_53_Conditional_3_Template, 2, 2, "span", 19);
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r1.condition.betCount ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.condition.turnover ? 3 : -1);
  }
}
function CampaignDebugPanelComponent_Conditional_31_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "withdrawal:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("turnover: ", c_r1.withdrawal.turnover, " / ", c_r1.withdrawal.turnoverThreshold);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("balance threshold: ", c_r1.withdrawal.balanceThreshold);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("limit: ", c_r1.withdrawal.limit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("amount: ", c_r1.withdrawal.amount);
  }
}
function CampaignDebugPanelComponent_Conditional_31_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 5);
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "Current Campaign Group:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "id: ");
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "title: ");
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "description: ");
    \u0275\u0275elementStart(13, "span", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "endTime: ");
    \u0275\u0275elementStart(17, "span", 15);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "img", 20);
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.selectedGroup()) == null ? null : tmp_3_0.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.selectedGroup()) == null ? null : tmp_4_0.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r1.selectedGroup()) == null ? null : tmp_5_0.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 5, (tmp_6_0 = ctx_r1.selectedGroup()) == null ? null : tmp_6_0.endTime, "yyyy-MM-dd HH:mm:ss"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (tmp_7_0 = ctx_r1.selectedGroup()) == null ? null : tmp_7_0.image, \u0275\u0275sanitizeUrl);
  }
}
function CampaignDebugPanelComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 14);
    \u0275\u0275text(2, "Current Campaign:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "id: ");
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "name: ");
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "type: ");
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "status: ");
    \u0275\u0275elementStart(17, "span", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "displayType: ");
    \u0275\u0275elementStart(21, "span", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "balance: ");
    \u0275\u0275elementStart(25, "span", 17);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "totalAmount: ");
    \u0275\u0275elementStart(29, "span", 15);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "progress: ");
    \u0275\u0275elementStart(33, "span", 15);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "hr", 5);
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "beginTime: ");
    \u0275\u0275elementStart(38, "span", 15);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "endTime: ");
    \u0275\u0275elementStart(43, "span", 15);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "lastBetTime: ");
    \u0275\u0275elementStart(48, "span", 15);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "hr", 5);
    \u0275\u0275conditionalCreate(52, CampaignDebugPanelComponent_Conditional_31_Conditional_52_Template, 8, 2);
    \u0275\u0275conditionalCreate(53, CampaignDebugPanelComponent_Conditional_31_Conditional_53_Template, 4, 2);
    \u0275\u0275conditionalCreate(54, CampaignDebugPanelComponent_Conditional_31_Conditional_54_Template, 10, 5);
    \u0275\u0275conditionalCreate(55, CampaignDebugPanelComponent_Conditional_31_Conditional_55_Template, 21, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r1.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r1.type);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r1.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r1.displayType);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r1.balance);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r1.totalAmount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("", c_r1.progressCurrent, " / ", c_r1.progressTotal, " (rem: ", c_r1.progressRemaining, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 17, c_r1.beginTime, "yyyy-MM-dd HH:mm:ss"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 20, c_r1.endTime, "yyyy-MM-dd HH:mm:ss"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 23, c_r1.lastBetTime, "yyyy-MM-dd HH:mm:ss"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(c_r1.type === "freeSpins" ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.condition ? 53 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.withdrawal ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedGroup() ? 55 : -1);
  }
}
function CampaignDebugPanelComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "(no campaign selected)");
    \u0275\u0275elementEnd();
  }
}
var CampaignDebugPanelComponent = class _CampaignDebugPanelComponent {
  session = inject(ClientSessionService);
  ctrl = inject(CampaignFacadeService);
  currentCampaignId = computed(() => this.ctrl.currentCampaign()?.id || "");
  storageCtrl = inject(StorageCtrlService);
  /** 下拉選單：從現有 campaignList 產生 */
  campaignOptions = computed(() => [
    { label: "(none)", value: "" },
    ...this.ctrl.campaignList().map((c) => ({
      label: `[${c.type}] ${c.name}, ${c.status}`,
      value: c.id
    }))
  ]);
  /** 目前選取的 ID（用於下拉顯示） */
  selectedCampaignId = signal("");
  selectedGroup = computed(() => {
    const current = this.ctrl.currentCampaign();
    if (!current || !current.groupId)
      return null;
    return this.ctrl.campaignGroupList().find((g) => g.id === current.groupId) || null;
  });
  onSelectCampaign(id) {
    this.selectedCampaignId.set(id);
    this.ctrl.setCurrentId(id.length > 0 ? id : null);
  }
  /** Campaign mode 切換選項 */
  campaignModeOptions = [
    { label: "legacy", value: "legacy" },
    { label: "current", value: "current" }
  ];
  /** 目前的 campaign mode，初始值來自 storageCtrl */
  campaignMode = signal(this.storageCtrl.campaignSetting?.mode ?? "legacy");
  onSelectCampaignMode(mode) {
    const pre = this.storageCtrl.campaignSetting?.mode || "legacy";
    const value = mode;
    this.campaignMode.set(value);
    this.storageCtrl.campaignSetting = { mode: value };
    if (pre !== value) {
      location.reload();
    }
  }
  onCleanClickedGroups() {
    this.ctrl.cleanClickedGroups();
  }
  onCleanCampaignMessageShown() {
    this.storageCtrl.campaignMessageShown = null;
  }
  /** Demo campaign 狀態下拉選項 */
  demoVariantOptions = [
    { label: "waitingToJoin", value: "waitingToJoin" },
    { label: "inChange", value: "underCondition" },
    { label: "inProgress", value: "inProgress" }
  ];
  /** 目前選取的 demo campaign 狀態 */
  selectedDemoVariant = signal("waitingToJoin");
  onSelectDemoVariant(variant) {
    this.selectedDemoVariant.set(variant);
  }
  actionName = signal("campaign.panel.get");
  commandId = signal("abc123");
  payloadString = signal('{"languageCode": "zh-TW"}');
  sendAction() {
    this.ctrl.sendAction({
      action: this.actionName(),
      command_id: this.commandId(),
      payload: JSON.parse(this.payloadString())
    });
  }
  static \u0275fac = function CampaignDebugPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignDebugPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CampaignDebugPanelComponent, selectors: [["campaign-debug-panel"]], decls: 40, vars: 10, consts: [[1, "relative", "w-xs", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl", "text-sm"], [1, "font-bold", "text-yellow-300"], [1, "flex", "flex-col", "gap-1"], [1, "text-xs", "text-gray-400"], [3, "onSelect", "options", "selected"], [1, "border-white/30"], ["type", "text", "placeholder", "action name", 1, "p-1", "text-xs", "bg-zinc-800", "border", "border-yellow-400/70", "rounded", 3, "input", "value"], ["type", "text", "placeholder", "command id", 1, "p-1", "text-xs", "bg-zinc-800", "border", "border-yellow-400/70", "rounded", 3, "input", "value"], ["placeholder", "payload json", "rows", "3", 1, "p-1", "text-xs", "bg-zinc-800", "border", "border-yellow-400/70", "rounded", "resize-y", 3, "input", "value"], [1, "p-1", "text-xs", "bg-blue-500", "rounded", "hover:bg-blue-600", 3, "click"], [1, "flex", "flex-col", "gap-0.5", "text-xs", "text-gray-300"], [1, "flex", "flex-col", "gap-0.5", "text-xs"], [1, "text-xs", "text-gray-500"], [1, "p-1", "text-xs", "bg-red-500", "rounded", "hover:bg-red-600", 3, "click"], [1, "text-gray-400", "font-semibold"], [1, "text-white"], [1, "text-yellow-300"], [1, "text-green-300"], [1, "text-gray-400", "mt-0.5"], [1, "pl-2"], ["alt", "Campaign Group Banner", 1, "w-full", "rounded", 3, "src"]], template: function CampaignDebugPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Campaign Debug");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "span", 3);
      \u0275\u0275text(5, "Campaign Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ap-select", 4);
      \u0275\u0275listener("onSelect", function CampaignDebugPanelComponent_Template_ap_select_onSelect_6_listener($event) {
        return ctx.onSelectCampaignMode($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "hr", 5);
      \u0275\u0275elementStart(8, "div", 2)(9, "span", 3);
      \u0275\u0275text(10, "Action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 6);
      \u0275\u0275listener("input", function CampaignDebugPanelComponent_Template_input_input_11_listener($event) {
        return ctx.actionName.set($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 3);
      \u0275\u0275text(13, "Command Id");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 7);
      \u0275\u0275listener("input", function CampaignDebugPanelComponent_Template_input_input_14_listener($event) {
        return ctx.commandId.set($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 3);
      \u0275\u0275text(16, "Payload (JSON)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "textarea", 8);
      \u0275\u0275listener("input", function CampaignDebugPanelComponent_Template_textarea_input_17_listener($event) {
        return ctx.payloadString.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 9);
      \u0275\u0275listener("click", function CampaignDebugPanelComponent_Template_button_click_18_listener() {
        return ctx.sendAction();
      });
      \u0275\u0275text(19, "Send Action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 10)(21, "span");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "hr", 5);
      \u0275\u0275elementStart(26, "div", 2)(27, "span", 3);
      \u0275\u0275text(28, "Select Current Campaign");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "ap-select", 4);
      \u0275\u0275listener("onSelect", function CampaignDebugPanelComponent_Template_ap_select_onSelect_29_listener($event) {
        return ctx.onSelectCampaign($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "hr", 5);
      \u0275\u0275conditionalCreate(31, CampaignDebugPanelComponent_Conditional_31_Template, 56, 26, "div", 11)(32, CampaignDebugPanelComponent_Conditional_32_Template, 2, 0, "span", 12);
      \u0275\u0275element(33, "hr", 5);
      \u0275\u0275elementStart(34, "div", 2)(35, "button", 13);
      \u0275\u0275listener("click", function CampaignDebugPanelComponent_Template_button_click_35_listener() {
        return ctx.onCleanClickedGroups();
      });
      \u0275\u0275text(36, "Clean Clicked Groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 13);
      \u0275\u0275listener("click", function CampaignDebugPanelComponent_Template_button_click_37_listener() {
        return ctx.onCleanCampaignMessageShown();
      });
      \u0275\u0275text(38, "Clean Campaign Message Shown");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(39, "hr", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_9_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.campaignModeOptions)("selected", ctx.campaignMode());
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.actionName());
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.commandId());
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.payloadString());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("showTab: ", ctx.ctrl.showTab());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("campaignList: ", ctx.ctrl.campaignList().length);
      \u0275\u0275advance(5);
      \u0275\u0275property("options", ctx.campaignOptions())("selected", ctx.currentCampaignId());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_9_0 = ctx.ctrl.currentCampaign()) ? 31 : 32, tmp_9_0);
    }
  }, dependencies: [CommonModule, DatePipe, ApSelectComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignDebugPanelComponent, [{
    type: Component,
    args: [{ selector: "campaign-debug-panel", imports: [CommonModule, ApSelectComponent, DatePipe], template: `<div class="relative w-xs flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl text-sm">
  <div class="font-bold text-yellow-300">Campaign Debug</div>
  
  <!-- \u5207\u63DB Campaign Mode -->
  <div class="flex flex-col gap-1">
    <span class="text-xs text-gray-400">Campaign Mode</span>
    <ap-select [options]="campaignModeOptions" [selected]="campaignMode()" (onSelect)="onSelectCampaignMode($event)" />
  </div>

  <hr class="border-white/30" />

  <!-- Action Panel -->
  <div class="flex flex-col gap-1">
    <span class="text-xs text-gray-400">Action</span>
    <input
      type="text"
      [value]="actionName()"
      (input)="actionName.set($any($event.target).value)"
      placeholder="action name"
      class="p-1 text-xs bg-zinc-800 border border-yellow-400/70 rounded"
    />
    <span class="text-xs text-gray-400">Command Id</span>
    <input
      type="text"
      [value]="commandId()"
      (input)="commandId.set($any($event.target).value)"
      placeholder="command id"
      class="p-1 text-xs bg-zinc-800 border border-yellow-400/70 rounded"
    />
    <span class="text-xs text-gray-400">Payload (JSON)</span>
    <textarea
      [value]="payloadString()"
      (input)="payloadString.set($any($event.target).value)"
      placeholder="payload json"
      rows="3"
      class="p-1 text-xs bg-zinc-800 border border-yellow-400/70 rounded resize-y"
    ></textarea>
  </div>

  <!-- Send Panel Get Action -->
  <button (click)="sendAction()" class="p-1 text-xs bg-blue-500 rounded hover:bg-blue-600">Send Action</button>

  <!-- \u76EE\u524D\u72C0\u614B -->
  <div class="flex flex-col gap-0.5 text-xs text-gray-300">
    <span>showTab: {{ ctrl.showTab() }}</span>
    <span>campaignList: {{ ctrl.campaignList().length }}</span>
  </div>

  <hr class="border-white/30" />

  <!-- \u9078\u64C7 Campaign -->
  <div class="flex flex-col gap-1">
    <span class="text-xs text-gray-400">Select Current Campaign</span>
    <ap-select [options]="campaignOptions()" [selected]="currentCampaignId()" (onSelect)="onSelectCampaign($event)" />
  </div>

  <!-- Campaign \u6E05\u55AE\u9810\u89BD 
  @if (ctrl.campaignList().length > 0) {
    <hr class="border-white/30" />
    <div class="flex flex-col gap-0.5 text-xs">
      <span class="text-gray-400">Campaign List:</span>
      @for (c of ctrl.campaignList(); track c.id) {
        <div
          class="flex justify-between px-1 rounded"
          [class.bg-yellow-600]="c.id === currentCampaignId()"
        >
          <span>{{ c.name }}</span>
          <span class="text-gray-400">{{ c.status }}</span>
        </div>
      }
    </div>
  }-->

  <hr class="border-white/30" />

  <!-- \u986F\u793AcurrentCampaign\u7684\u72C0\u614B -->
  @if (ctrl.currentCampaign(); as c) {
    <div class="flex flex-col gap-0.5 text-xs">
      <span class="text-gray-400 font-semibold">Current Campaign:</span>
      <span>id: <span class="text-white">{{ c.id }}</span></span>
      <span>name: <span class="text-white">{{ c.name }}</span></span>
      <span>type: <span class="text-yellow-300">{{ c.type }}</span></span>
      <span>status: <span class="text-yellow-300">{{ c.status }}</span></span>
      <span>displayType: <span class="text-white">{{ c.displayType }}</span></span>
      <span>balance: <span class="text-green-300">{{ c.balance }}</span></span>
      <span>totalAmount: <span class="text-white">{{ c.totalAmount }}</span></span>
      <span>progress: <span class="text-white">{{ c.progressCurrent }} / {{ c.progressTotal }} (rem: {{ c.progressRemaining }})</span></span>
      <!-- campaign time details -->
      <hr class="border-white/30" />
      <span>beginTime: <span class="text-white">{{ c.beginTime| date:'yyyy-MM-dd HH:mm:ss' }}</span></span>
      <span>endTime: <span class="text-white">{{ c.endTime| date:'yyyy-MM-dd HH:mm:ss' }}</span></span>
      <span>lastBetTime: <span class="text-white">{{ c.lastBetTime| date:'yyyy-MM-dd HH:mm:ss' }}</span></span>
      <hr class="border-white/30" />
      @if (c.type === 'freeSpins') {
        <span>spinBet: <span class="text-white">{{ c.spinBet }}</span></span>
        <span>spinCount: <span class="text-white">{{ c.spinCount }}</span></span>
      }
      @if (c.condition) {
        <span class="text-gray-400 mt-0.5">condition:</span>
        @if (c.condition.betCount) {
          <span class="pl-2">betCount: {{ c.condition.betCount.current }} / {{ c.condition.betCount.target }}</span>
        }
        @if (c.condition.turnover) {
          <span class="pl-2">turnover: {{ c.condition.turnover.current }} / {{ c.condition.turnover.target }}</span>
        }
      }
      @if (c.withdrawal) {
        <span class="text-gray-400 mt-0.5">withdrawal:</span>
        <span class="pl-2">turnover: {{ c.withdrawal.turnover }} / {{ c.withdrawal.turnoverThreshold }}</span>
        <span class="pl-2">balance threshold: {{ c.withdrawal.balanceThreshold }}</span>
        <span class="pl-2">limit: {{ c.withdrawal.limit }}</span>
        <span class="pl-2">amount: {{ c.withdrawal.amount }}</span>
      }
      @if (selectedGroup()) {
        <!-- campaign group details -->
        <hr class="border-white/30" />
        <span class="text-gray-400 font-semibold">Current Campaign Group:</span>
        <span>id: <span class="text-white">{{ selectedGroup()?.id }}</span></span>
        <span>title: <span class="text-white">{{ selectedGroup()?.title }}</span></span>
        <span>description: <span class="text-white">{{ selectedGroup()?.description }}</span></span>
        <span>endTime: <span class="text-white">{{ selectedGroup()?.endTime | date:'yyyy-MM-dd HH:mm:ss' }}</span></span>
        <!-- Banner Image-->
        <img [src]="selectedGroup()?.image" alt="Campaign Group Banner" class="w-full rounded" />
      }
    </div>
  } @else {
    <span class="text-xs text-gray-500">(no campaign selected)</span>
  }

  <hr class="border-white/30" />

  <div class="flex flex-col gap-1">
    <button (click)="onCleanClickedGroups()" class="p-1 text-xs bg-red-500 rounded hover:bg-red-600">Clean Clicked Groups</button>
    <button (click)="onCleanCampaignMessageShown()" class="p-1 text-xs bg-red-500 rounded hover:bg-red-600">Clean Campaign Message Shown</button>
  </div>

  <hr class="border-white/30" />

</div>

` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CampaignDebugPanelComponent, { className: "CampaignDebugPanelComponent", filePath: "src/app/pages/campaign-debug-panel/campaign-debug-panel.component.ts", lineNumber: 16 });
})();

// src/app/pages/slot-debug-panel/slot-debug-panel.component.ts
var SlotDebugPanelComponent = class _SlotDebugPanelComponent {
  gameIframeCtrl = inject(GameIframeCtrlService);
  storageCtrl = inject(StorageCtrlService);
  landscapeAspectRatio = signal(0.56);
  gameIframeSetting = signal(this.loadGameIframeSetting());
  onLandscapeAspectRatioChange(value) {
    const aspectRatio = +value;
    this.landscapeAspectRatio.set(aspectRatio);
    this.gameIframeCtrl.send(createApWebMessage("UpdatelandscapeAspectRatio", { aspectRatio }));
  }
  onGameIframeSettingChange(key, value) {
    this.gameIframeSetting.update((setting) => __spreadProps(__spreadValues({}, setting), { [key]: value }));
  }
  saveGameIframeSetting() {
    this.storageCtrl.gameIframeSetting = this.gameIframeSetting();
    location.reload();
  }
  loadGameIframeSetting() {
    const setting = this.storageCtrl.gameIframeSetting;
    return {
      closeInGameBuyFeature: setting?.closeInGameBuyFeature ?? false,
      closeInGameOpenPromo: setting?.closeInGameOpenPromo ?? false
    };
  }
  static \u0275fac = function SlotDebugPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlotDebugPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotDebugPanelComponent, selectors: [["slot-debug-panel"]], decls: 14, vars: 8, consts: [[1, "relative", "w-xs", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl"], [1, "flex", "justify-between", "items-center", "gap-1"], ["type", "number", "step", "0.01", 1, "w-30", 3, "onInput", "value"], [3, "checkedChange", "size", "checked"], [1, "w-full", "[&>button]:w-full", 3, "clicked", "size", "accentColor", "label"]], template: function SlotDebugPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span");
      \u0275\u0275text(3, "Aspect Ratio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ap-input-box", 2);
      \u0275\u0275listener("onInput", function SlotDebugPanelComponent_Template_ap_input_box_onInput_4_listener($event) {
        return ctx.onLandscapeAspectRatioChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 1)(6, "span");
      \u0275\u0275text(7, "Close In-Game Buy Feature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ap-toggle-switch", 3);
      \u0275\u0275listener("checkedChange", function SlotDebugPanelComponent_Template_ap_toggle_switch_checkedChange_8_listener($event) {
        return ctx.onGameIframeSettingChange("closeInGameBuyFeature", $event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 1)(10, "span");
      \u0275\u0275text(11, "Close In-Game Open Promo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ap-toggle-switch", 3);
      \u0275\u0275listener("checkedChange", function SlotDebugPanelComponent_Template_ap_toggle_switch_checkedChange_12_listener($event) {
        return ctx.onGameIframeSettingChange("closeInGameOpenPromo", $event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "ap-button", 4);
      \u0275\u0275listener("clicked", function SlotDebugPanelComponent_Template_ap_button_clicked_13_listener() {
        return ctx.saveGameIframeSetting();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.landscapeAspectRatio().toString());
      \u0275\u0275advance(4);
      \u0275\u0275property("size", "small")("checked", ctx.gameIframeSetting().closeInGameBuyFeature);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", "small")("checked", ctx.gameIframeSetting().closeInGameOpenPromo);
      \u0275\u0275advance();
      \u0275\u0275property("size", "small")("accentColor", "yellow")("label", "Save & Reload");
    }
  }, dependencies: [ApInputBox, ApToggleSwitchComponent, ApButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlotDebugPanelComponent, [{
    type: Component,
    args: [{ selector: "slot-debug-panel", imports: [ApInputBox, ApToggleSwitchComponent, ApButtonComponent], template: `<div class="relative w-xs flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl">
  <div class="flex justify-between items-center gap-1">
    <span>Aspect Ratio</span>
    <ap-input-box class="w-30" type="number" step="0.01" [value]="landscapeAspectRatio().toString()" (onInput)="onLandscapeAspectRatioChange($event)" />
  </div>

  <div class="flex justify-between items-center gap-1">
    <span>Close In-Game Buy Feature</span>
    <ap-toggle-switch [size]="'small'" [checked]="gameIframeSetting().closeInGameBuyFeature" (checkedChange)="onGameIframeSettingChange('closeInGameBuyFeature', $event)" />
  </div>

  <div class="flex justify-between items-center gap-1">
    <span>Close In-Game Open Promo</span>
    <ap-toggle-switch [size]="'small'" [checked]="gameIframeSetting().closeInGameOpenPromo" (checkedChange)="onGameIframeSettingChange('closeInGameOpenPromo', $event)" />
  </div>

  <ap-button class="w-full [&>button]:w-full" [size]="'small'" [accentColor]="'yellow'" [label]="'Save & Reload'" (clicked)="saveGameIframeSetting()" />

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotDebugPanelComponent, { className: "SlotDebugPanelComponent", filePath: "src/app/pages/slot-debug-panel/slot-debug-panel.component.ts", lineNumber: 16 });
})();

// src/app/pages/custom-debug-panel/custom-debug-panel.component.ts
var CustomDebugPanelComponent = class _CustomDebugPanelComponent {
  gameIframeCtrl = inject(GameIframeCtrlService);
  logoTypeOptions = [
    { value: "image", label: "image" },
    { value: "spine", label: "spine" }
  ];
  ruleOptions = [
    { value: RULE_GA_ES, label: RULE_GA_ES },
    { value: "bmm", label: "bmm" }
  ];
  customLogoKey = computed(() => this.gameIframeCtrl.customData()?.customLogoKey ?? "");
  customLogoType = computed(() => this.gameIframeCtrl.customData()?.customLogoType ?? "");
  customGamekey = computed(() => this.gameIframeCtrl.customData()?.customGamekey ?? "");
  customBackground = computed(() => this.gameIframeCtrl.customData()?.customBackground ?? "");
  customRule = computed(() => this.gameIframeCtrl.customData()?.customRule ?? "");
  customRTP = computed(() => this.gameIframeCtrl.customData()?.customRTP ?? "");
  onCustomLogoKeyChange(value) {
    this.updateCustomData({ customLogoKey: value || null });
  }
  onCustomLogoTypeChange(value) {
    this.updateCustomData({ customLogoType: value || null });
  }
  onCustomGamekeyChange(value) {
    this.updateCustomData({ customGamekey: value || null });
  }
  onCustomBackgroundChange(value) {
    this.updateCustomData({ customBackground: value || null });
  }
  onCustomRuleChange(value) {
    this.updateCustomData({ customRule: value || null });
  }
  onCustomRTPChange(value) {
    this.updateCustomData({ customRTP: value || null });
  }
  clearCustomData() {
    this.gameIframeCtrl.debugSetCustomData(null);
  }
  updateCustomData(partial) {
    const current = this.gameIframeCtrl.customData();
    const next = __spreadValues({
      customLogoKey: current?.customLogoKey ?? null,
      customLogoType: current?.customLogoType ?? null,
      customGamekey: current?.customGamekey ?? null,
      customBackground: current?.customBackground ?? null,
      customRule: current?.customRule ?? null,
      customRTP: current?.customRTP ?? null
    }, partial);
    this.gameIframeCtrl.debugSetCustomData(next);
  }
  static \u0275fac = function CustomDebugPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomDebugPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomDebugPanelComponent, selectors: [["custom-debug-panel"]], decls: 26, vars: 8, consts: [[1, "relative", "w-xs", "flex", "flex-col", "gap-1", "p-2", "space-y-1", "text-white", "popup-overlay", "rounded-md"], [1, "flex", "justify-between", "items-center", "gap-1"], ["size", "small", 1, "w-30", 3, "onInput", "value"], ["size", "small", "placeholder", "Select type", 1, "w-30", 3, "onSelect", "options", "selected"], ["size", "small", "placeholder", "Select rule", 1, "w-30", 3, "onSelect", "options", "selected"], ["accentColor", "zinc", "size", "x-small", "label", "Clear", 1, "w-full", "[&>button]:w-full", "mt-2", 3, "click"]], template: function CustomDebugPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span");
      \u0275\u0275text(3, "Logo Key");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ap-input-box", 2);
      \u0275\u0275listener("onInput", function CustomDebugPanelComponent_Template_ap_input_box_onInput_4_listener($event) {
        return ctx.onCustomLogoKeyChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 1)(6, "span");
      \u0275\u0275text(7, "Logo Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ap-select", 3);
      \u0275\u0275listener("onSelect", function CustomDebugPanelComponent_Template_ap_select_onSelect_8_listener($event) {
        return ctx.onCustomLogoTypeChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 1)(10, "span");
      \u0275\u0275text(11, "Game Key");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ap-input-box", 2);
      \u0275\u0275listener("onInput", function CustomDebugPanelComponent_Template_ap_input_box_onInput_12_listener($event) {
        return ctx.onCustomGamekeyChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 1)(14, "span");
      \u0275\u0275text(15, "Background");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ap-input-box", 2);
      \u0275\u0275listener("onInput", function CustomDebugPanelComponent_Template_ap_input_box_onInput_16_listener($event) {
        return ctx.onCustomBackgroundChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 1)(18, "span");
      \u0275\u0275text(19, "Rule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ap-select", 4);
      \u0275\u0275listener("onSelect", function CustomDebugPanelComponent_Template_ap_select_onSelect_20_listener($event) {
        return ctx.onCustomRuleChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 1)(22, "span");
      \u0275\u0275text(23, "RTP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "ap-input-box", 2);
      \u0275\u0275listener("onInput", function CustomDebugPanelComponent_Template_ap_input_box_onInput_24_listener($event) {
        return ctx.onCustomRTPChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "ap-button", 5);
      \u0275\u0275listener("click", function CustomDebugPanelComponent_Template_ap_button_click_25_listener() {
        return ctx.clearCustomData();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.customLogoKey());
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.logoTypeOptions)("selected", ctx.customLogoType());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.customGamekey());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.customBackground());
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.ruleOptions)("selected", ctx.customRule());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.customRTP());
    }
  }, dependencies: [ApInputBox, ApButtonComponent, ApSelectComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomDebugPanelComponent, [{
    type: Component,
    args: [{ selector: "custom-debug-panel", imports: [ApInputBox, ApButtonComponent, ApSelectComponent], template: '<div class="relative w-xs flex flex-col gap-1 p-2 space-y-1 text-white popup-overlay rounded-md">\n  <div class="flex justify-between items-center gap-1">\n    <span>Logo Key</span>\n    <ap-input-box class="w-30" size="small" [value]="customLogoKey()" (onInput)="onCustomLogoKeyChange($event)" />\n  </div>\n  <div class="flex justify-between items-center gap-1">\n    <span>Logo Type</span>\n    <ap-select class="w-30" size="small" placeholder="Select type" [options]="logoTypeOptions" [selected]="customLogoType()" (onSelect)="onCustomLogoTypeChange($event)" />\n  </div>\n  <div class="flex justify-between items-center gap-1">\n    <span>Game Key</span>\n    <ap-input-box class="w-30" size="small" [value]="customGamekey()" (onInput)="onCustomGamekeyChange($event)" />\n  </div>\n  <div class="flex justify-between items-center gap-1">\n    <span>Background</span>\n    <ap-input-box class="w-30" size="small" [value]="customBackground()" (onInput)="onCustomBackgroundChange($event)" />\n  </div>\n  <div class="flex justify-between items-center gap-1">\n    <span>Rule</span>\n    <ap-select class="w-30" size="small" placeholder="Select rule" [options]="ruleOptions" [selected]="customRule()" (onSelect)="onCustomRuleChange($event)" />\n  </div>\n  <div class="flex justify-between items-center gap-1">\n    <span>RTP</span>\n    <ap-input-box class="w-30" size="small" [value]="customRTP()" (onInput)="onCustomRTPChange($event)" />\n  </div>\n  <ap-button class="w-full [&>button]:w-full mt-2" accentColor="zinc" size="x-small" label="Clear" (click)="clearCustomData()"/>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomDebugPanelComponent, { className: "CustomDebugPanelComponent", filePath: "src/app/pages/custom-debug-panel/custom-debug-panel.component.ts", lineNumber: 16 });
})();

// src/app/layouts/layout-lab/layout-lab.component.ts
var _c0 = (a0) => ({ "lg:pr-84": a0 });
var _c1 = (a0) => ({ "mr-0": a0 });
var _c2 = (a0) => ({ "rotate-180": a0 });
var _forTrack04 = ($index, $item) => $item.label;
function LayoutLabComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "slot-reel-setting", 1);
  }
}
function LayoutLabComponent_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 8);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngComponentOutlet", item_r2.component);
  }
}
function LayoutLabComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function LayoutLabComponent_For_5_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(item_r2.signal.set(!item_r2.signal()));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "ap-icon", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LayoutLabComponent_For_5_Conditional_4_Template, 1, 1, "ng-container", 8);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c2, item_r2.signal()));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.signal() ? 4 : -1);
  }
}
var LayoutLabComponent = class _LayoutLabComponent {
  logger;
  router = inject(Router);
  showMenu = signal(false);
  showSlotSettings = signal(false);
  showTrnDebug = signal(false);
  showPanelDebug = signal(false);
  showLogDebug = signal(false);
  showMiscDebug = signal(false);
  showHistoryDebug = signal(false);
  showCampaignDebug = signal(false);
  showSlotDebug = signal(false);
  showCustomDebug = signal(false);
  toggleList = [];
  constructor(logger) {
    this.logger = logger;
    this.toggleList = [
      { label: "Panel Debug", signal: this.showPanelDebug, component: BottomPanelDebugComponent },
      { label: "Campaign Debug", signal: this.showCampaignDebug, component: CampaignDebugPanelComponent },
      { label: "Tournament Debug", signal: this.showTrnDebug, component: TrnDebugPanelComponent },
      { label: "Misc Debug", signal: this.showMiscDebug, component: MiscDebugPanelComponent },
      { label: "Log Debug", signal: this.showLogDebug, component: LogDebugPanelComponent },
      { label: "History Debug", signal: this.showHistoryDebug, component: HistoryDebugPanelComponent },
      { label: "Slot Debug", signal: this.showSlotDebug, component: SlotDebugPanelComponent },
      { label: "Custom Debug", signal: this.showCustomDebug, component: CustomDebugPanelComponent }
    ];
  }
  toggleSideMenu() {
    this.showMenu.set(!this.showMenu());
  }
  static \u0275fac = function LayoutLabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutLabComponent)(\u0275\u0275directiveInject(LoggerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutLabComponent, selectors: [["layout-lab"]], decls: 9, vars: 8, consts: [[1, "absolute", "inset-0", "duration-300", 3, "ngClass"], [1, "relative", "p-3"], [1, "absolute", "top-0", "right-0", "flex", "flex-col", "bg-zinc-800", "gap-2", "p-2", "pt-10", "w-84", "h-full", "-mr-84", "duration-300", "overflow-auto", "z-devtools", 3, "ngClass"], ["size", "small", "fitMode", "container", "label", "Show Slot Setting Panels", 3, "checkedChange", "checked"], [1, "absolute", "top-0", "right-0", "flex"], ["name", "bar-3", 1, "size-8", "text-zinc-300/50", "hover:text-zinc-200", "active:scale-95", "transition-all", "duration-200", "cursor-pointer", "z-devtools", 3, "click"], [1, "flex", "items-center", "bg-white/20", "justify-between", "w-full", "p-3", "rounded-2xl", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-zinc-400", "hover:text-zinc-200", "transition-colors", 3, "click"], ["name", "chevron-down", 1, "size-4", "transition-transform", "duration-200", 3, "ngClass"], [3, "ngComponentOutlet"]], template: function LayoutLabComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275conditionalCreate(2, LayoutLabComponent_Conditional_2_Template, 1, 0, "slot-reel-setting", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275repeaterCreate(4, LayoutLabComponent_For_5_Template, 5, 5, null, null, _forTrack04);
      \u0275\u0275elementStart(6, "ap-toggle-switch", 3);
      \u0275\u0275listener("checkedChange", function LayoutLabComponent_Template_ap_toggle_switch_checkedChange_6_listener($event) {
        return ctx.showSlotSettings.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "ap-icon", 5);
      \u0275\u0275listener("click", function LayoutLabComponent_Template_ap_icon_click_8_listener() {
        return ctx.toggleSideMenu();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx.showMenu()));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showSlotSettings() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx.showMenu()));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toggleList);
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.showSlotSettings());
    }
  }, dependencies: [CommonModule, NgClass, NgComponentOutlet, ApIconComponent, SlotReelSettingComponent, ApToggleSwitchComponent, RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutLabComponent, [{
    type: Component,
    args: [{ selector: "layout-lab", imports: [CommonModule, ApIconComponent, SlotReelSettingComponent, ApToggleSwitchComponent, RouterModule], template: `
<!-- Main Content -->
<div class="absolute inset-0 duration-300"
  [ngClass]="{ 'lg:pr-84': showMenu() }"
>
  <router-outlet></router-outlet>
  @if(showSlotSettings()){
    <slot-reel-setting class="relative p-3"></slot-reel-setting>
  }
</div>

<!-- Side Menu -->
<div class="absolute top-0 right-0 flex flex-col bg-zinc-800 gap-2 p-2 pt-10 w-84 h-full -mr-84 duration-300 overflow-auto z-devtools"
  [ngClass]="{ 'mr-0': showMenu() }"
>
  @for (item of toggleList; track item.label) {
    <button
      class="flex items-center bg-white/20 justify-between w-full p-3 rounded-2xl text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-200 transition-colors"
      (click)="item.signal.set(!item.signal())"
    >
      <span>{{ item.label }}</span>
      <ap-icon
        name="chevron-down"
        class="size-4 transition-transform duration-200"
        [ngClass]="{ 'rotate-180': item.signal() }"
      />
    </button>
    @if (item.signal()) {
      <ng-container [ngComponentOutlet]="item.component" />
    }
  }
  <ap-toggle-switch size="small" fitMode="container" label="Show Slot Setting Panels" [checked]="showSlotSettings()" (checkedChange)="showSlotSettings.set($event)"/>
</div>

<div class="absolute top-0 right-0 flex">
  <!-- Toggle Button -->
  <ap-icon name="bar-3" class="size-8 text-zinc-300/50 hover:text-zinc-200 active:scale-95 transition-all duration-200 cursor-pointer z-devtools" 
    (click)="toggleSideMenu()"
  />
</div>

` }]
  }], () => [{ type: LoggerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutLabComponent, { className: "LayoutLabComponent", filePath: "src/app/layouts/layout-lab/layout-lab.component.ts", lineNumber: 23 });
})();
export {
  LayoutLabComponent
};
//# sourceMappingURL=chunk-ND2YGIXA.js.map
