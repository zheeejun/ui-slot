import { Component, computed, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApInputBox } from "../../../ap-components-lib/ap-input-box/ap-input-box";
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApUiTabGroupComponent } from "../../components/ap-ui-tab-group/ap-ui-tab-group.component";
import { ApSelectComponent } from "../../../ap-components-lib/ap-select/ap-select.component";
import * as i0 from "@angular/core";
import * as i1 from "../../services/game-iframe-ctrl/game-iframe-ctrl.service";
import * as i2 from "../../services/logger/logger.service";
function SlotReelSettingComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵtext(2, " RollingSetting ");
    i0.ɵɵelementStart(3, "div", 5)(4, "span", 6);
    i0.ɵɵtext(5, "symbolSpinTimes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7)(7, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_7_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.symbolSpinTimes1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_8_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.symbolSpinTimes2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_9_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.symbolSpinTimes3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 5)(11, "span", 9);
    i0.ɵɵtext(12, "startUpTimes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 7)(14, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_14_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startUpTimes1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_15_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startUpTimes2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_16_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startUpTimes3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 5)(18, "span", 10);
    i0.ɵɵtext(19, "startUpDistances");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 7)(21, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_21_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startUpDistances1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_22_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startUpDistances2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_23_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startUpDistances3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 5)(25, "span", 11);
    i0.ɵɵtext(26, "startDownTimes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 7)(28, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_28_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startDownTimes1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startDownTimes2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_30_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startDownTimes3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 5)(32, "span", 12);
    i0.ɵɵtext(33, "startDelays");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 7)(35, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_35_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startDelays1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_36_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startDelays2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_37_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startDelays3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 5)(39, "span", 13);
    i0.ɵɵtext(40, "startDelayInterval");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 7)(42, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_42_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startDelayInterval1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_43_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startDelayInterval2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_44_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startDelayInterval3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "div", 5)(46, "span", 14);
    i0.ɵɵtext(47, "endTimes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 7)(49, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_49_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endTimes1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_50_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endTimes2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_51_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endTimes3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "div", 5)(53, "span", 15);
    i0.ɵɵtext(54, "endUpTimes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div", 7)(56, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_56_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endUpTimes1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_57_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endUpTimes2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_58_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endUpTimes3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(59, "div", 5)(60, "span", 16);
    i0.ɵɵtext(61, "endDownTimes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div", 7)(63, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_63_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endDownTimes1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_64_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endDownTimes2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_65_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endDownTimes3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(66, "div", 5)(67, "span", 17);
    i0.ɵɵtext(68, "endBottomDistances");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "div", 7)(70, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_70_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endBottomDistances1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_71_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endBottomDistances2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_72_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endBottomDistances3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(73, "div", 5)(74, "span", 18);
    i0.ɵɵtext(75, "endTopDistances");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "div", 7)(77, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_77_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endTopDistances1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_78_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endTopDistances2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_79_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.endTopDistances3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(80, "div", 19)(81, "div", 5)(82, "span", 20);
    i0.ɵɵtext(83, "expectEndTime");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_84_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.expectEndTime.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(85, "div", 5)(86, "span", 21);
    i0.ɵɵtext(87, "expectEndUpTime");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(88, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_88_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.expectEndUpTime.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(89, "div", 5)(90, "span", 22);
    i0.ɵɵtext(91, "expectEndDownTime");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_92_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.expectEndDownTime.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(93, "div", 5)(94, "span", 23);
    i0.ɵɵtext(95, "expectEndBottomDistance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_96_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.expectEndBottomDistance.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(97, "div", 5)(98, "span", 24);
    i0.ɵɵtext(99, "expectEndTopDistance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_100_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.expectEndTopDistance.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(101, "div", 5)(102, "span", 25);
    i0.ɵɵtext(103, "nearMissDistance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_104_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.nearMissDistance.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(105, "div", 5)(106, "span", 26);
    i0.ɵɵtext(107, "nearMissTime");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(108, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_108_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.nearMissTime.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(109, "div", 5)(110, "span", 27);
    i0.ɵɵtext(111, "luckyBreakDistance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(112, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_112_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.luckyBreakDistance.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(113, "div", 5)(114, "span", 28);
    i0.ɵɵtext(115, "luckyBreakTime");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(116, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_116_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.luckyBreakTime.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(117, "div", 5)(118, "span", 29);
    i0.ɵɵtext(119, "spinCounts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(120, "div", 7)(121, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_121_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.spinCounts1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(122, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_122_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.spinCounts2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(123, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_123_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.spinCounts3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(124, "div", 5)(125, "span", 30);
    i0.ɵɵtext(126, "extraSpinCounts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(127, "div", 7)(128, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_128_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.extraSpinCounts1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(129, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_129_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.extraSpinCounts2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(130, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_130_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.extraSpinCounts3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(131, "div", 5)(132, "span", 31);
    i0.ɵɵtext(133, "spinCountInterval");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(134, "div", 7)(135, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_135_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.spinCountInterval1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(136, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_136_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.spinCountInterval2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(137, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_input_box_onInput_137_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.spinCountInterval3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(138, "textarea", 32);
    i0.ɵɵlistener("input", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_textarea_input_138_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateRollingFromJson($event)); });
    i0.ɵɵtext(139, "        ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(140, "ap-button", 33);
    i0.ɵɵlistener("click", function SlotReelSettingComponent_Conditional_0_Conditional_3_Template_ap_button_click_140_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyRollingSettings()); });
    i0.ɵɵtext(141, "Apply");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("value", ctx_r1.symbolSpinTimes1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.symbolSpinTimes2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.symbolSpinTimes3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.startUpTimes1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startUpTimes2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startUpTimes3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.startUpDistances1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startUpDistances2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startUpDistances3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.startDownTimes1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startDownTimes2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startDownTimes3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.startDelays1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startDelays2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startDelays3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.startDelayInterval1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startDelayInterval2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.startDelayInterval3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.endTimes1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endTimes2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endTimes3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.endUpTimes1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endUpTimes2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endUpTimes3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.endDownTimes1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endDownTimes2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endDownTimes3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.endBottomDistances1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endBottomDistances2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endBottomDistances3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.endTopDistances1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endTopDistances2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.endTopDistances3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.expectEndTime().toString());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.expectEndUpTime().toString());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.expectEndDownTime().toString());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.expectEndBottomDistance().toString());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.expectEndTopDistance().toString());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.nearMissDistance().toString());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.nearMissTime().toString());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.luckyBreakDistance().toString());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.luckyBreakTime().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.spinCounts1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.spinCounts2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.spinCounts3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.extraSpinCounts1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.extraSpinCounts2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.extraSpinCounts3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.spinCountInterval1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.spinCountInterval2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.spinCountInterval3().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.localRollingString());
} }
function SlotReelSettingComponent_Conditional_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1, " DroppingSetting ");
    i0.ɵɵelementStart(2, "div", 5)(3, "span", 34);
    i0.ɵɵtext(4, "dropInTimes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7)(6, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropInTimes1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_7_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropInTimes2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_8_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropInTimes3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 5)(10, "span", 35);
    i0.ɵɵtext(11, "dropInSybmolIntervals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 7)(13, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_13_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropInSybmolIntervals1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_14_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropInSybmolIntervals2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_15_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropInSybmolIntervals3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 5)(17, "span", 36);
    i0.ɵɵtext(18, "dropInReelIntervals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 7)(20, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_20_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropInReelIntervals1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_21_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropInReelIntervals2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_22_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropInReelIntervals3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 5)(24, "span", 37);
    i0.ɵɵtext(25, "dropOutTimes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 7)(27, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_27_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropOutTimes1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_28_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropOutTimes2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_29_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropOutTimes3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 5)(31, "span", 38);
    i0.ɵɵtext(32, "dropOutSymbolIntervals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 7)(34, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_34_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropOutSymbolIntervals1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_35_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropOutSymbolIntervals2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_36_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropOutSymbolIntervals3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 5)(38, "span", 39);
    i0.ɵɵtext(39, "dropOutReelIntervals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 7)(41, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_41_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropOutReelIntervals1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_42_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropOutReelIntervals2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_43_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropOutReelIntervals3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 5)(45, "span", 40);
    i0.ɵɵtext(46, "moveTimePerSymbol");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "div", 7)(48, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_48_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.moveTimePerSymbol1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_49_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.moveTimePerSymbol2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_50_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.moveTimePerSymbol3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(51, "div", 5)(52, "span", 41);
    i0.ɵɵtext(53, "moveReelIntervals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "div", 7)(55, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_55_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.moveReelIntervals1.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_56_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.moveReelIntervals2.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "ap-input-box", 8);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_input_box_onInput_57_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.moveReelIntervals3.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(58, "textarea", 32);
    i0.ɵɵlistener("input", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_textarea_input_58_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateDroppingFromJson($event)); });
    i0.ɵɵtext(59, "        ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "ap-button", 33);
    i0.ɵɵlistener("click", function SlotReelSettingComponent_Conditional_0_Conditional_4_Template_ap_button_click_60_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyDroppingSettings()); });
    i0.ɵɵtext(61, "Apply");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", ctx_r1.dropInTimes1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropInTimes2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropInTimes3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.dropInSybmolIntervals1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropInSybmolIntervals2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropInSybmolIntervals3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.dropInReelIntervals1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropInReelIntervals2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropInReelIntervals3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.dropOutTimes1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropOutTimes2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropOutTimes3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.dropOutSymbolIntervals1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropOutSymbolIntervals2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropOutSymbolIntervals3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.dropOutReelIntervals1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropOutReelIntervals2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.dropOutReelIntervals3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.moveTimePerSymbol1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.moveTimePerSymbol2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.moveTimePerSymbol3().toString());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.moveReelIntervals1().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.moveReelIntervals2().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.moveReelIntervals3().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.localDroppingString());
} }
function SlotReelSettingComponent_Conditional_0_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1, " GameParameterSetting ");
    i0.ɵɵelementStart(2, "div", 5)(3, "span", 42);
    i0.ɵɵtext(4, "debugWinScore");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ap-input-box", 43);
    i0.ɵɵlistener("onInput", function SlotReelSettingComponent_Conditional_0_Conditional_5_Template_ap_input_box_onInput_5_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.debugWinScore.set(ctx_r1.formatNumberStr($event))); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "ap-select", 44);
    i0.ɵɵlistener("onSelect", function SlotReelSettingComponent_Conditional_0_Conditional_5_Template_ap_select_onSelect_6_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.debugWinType.set(+$event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "ap-button", 33);
    i0.ɵɵlistener("click", function SlotReelSettingComponent_Conditional_0_Conditional_5_Template_ap_button_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyGameParameterSettings()); });
    i0.ɵɵtext(8, "Apply");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r1.debugWinScore().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r1.selects())("selected", ctx_r1.debugWinType().toString());
} }
function SlotReelSettingComponent_Conditional_0_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1, " DemoTestCaseSetting ");
    i0.ɵɵelementStart(2, "ap-select", 44);
    i0.ɵɵlistener("onSelect", function SlotReelSettingComponent_Conditional_0_Conditional_6_Template_ap_select_onSelect_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.demoCaseName.set($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "ap-button", 33);
    i0.ɵɵlistener("click", function SlotReelSettingComponent_Conditional_0_Conditional_6_Template_ap_button_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyDemoTestCaseSettings()); });
    i0.ɵɵtext(4, "Apply");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r1.demoSelects())("selected", ctx_r1.demoCaseName());
} }
function SlotReelSettingComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "ap-ui-tab-group", 1);
    i0.ɵɵlistener("tabChange", function SlotReelSettingComponent_Conditional_0_Template_ap_ui_tab_group_tabChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onTabChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵconditionalCreate(3, SlotReelSettingComponent_Conditional_0_Conditional_3_Template, 142, 52);
    i0.ɵɵconditionalCreate(4, SlotReelSettingComponent_Conditional_0_Conditional_4_Template, 62, 25);
    i0.ɵɵconditionalCreate(5, SlotReelSettingComponent_Conditional_0_Conditional_5_Template, 9, 3);
    i0.ɵɵconditionalCreate(6, SlotReelSettingComponent_Conditional_0_Conditional_6_Template, 5, 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("tabs", ctx_r1.tabs())("selectedTab", ctx_r1.selectedTab());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.showRolling() ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showDropping() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showGameParameter() ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showDemoTestCase() ? 6 : -1);
} }
export class SlotReelSettingComponent {
    game;
    logger;
    showPanel = signal(true);
    destroy$ = new Subject();
    showRolling = computed(() => this.selectedTab() === 'rolling');
    showDropping = computed(() => this.selectedTab() === 'dropping');
    showGameParameter = computed(() => this.selectedTab() === 'gameParameter');
    showDemoTestCase = computed(() => this.selectedTab() === 'demoTestCase');
    selectedTab = signal('default');
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
        { value: '0', label: 'None' },
        { value: '4', label: 'BigWin' },
        { value: '5', label: 'SuperWin' },
        { value: '6', label: 'MegaWin' }
    ]);
    demoSelects = signal([
        { value: 'null', label: 'None' },
        { value: 'demo1', label: 'Demo Case 1' },
        { value: 'demo2', label: 'Demo Case 2' },
        { value: 'demo3', label: 'Demo Case 3' }
    ]);
    formatNumberStr(val) {
        return (Math.round(+val * 100) / 100);
    }
    constructor(game, logger) {
        this.game = game;
        this.logger = logger;
        // 初始化更新
        game.rollingSettings.forEach(this.updateRollingSetting.bind(this));
        game.droppingSettings.forEach(this.updateDroppingSetting.bind(this));
        this.tabs.set([...this.tabs(),
            { id: 'gameParameter', label: 'Parameter' },
            { id: 'demoTestCase', label: 'Demo' }
        ]);
        this.selectedTab.set('gameParameter');
    }
    ngOnInit() {
        // 收到message更新
        this.game.RollingSetting$
            .pipe(takeUntil(this.destroy$))
            .subscribe(this.updateRollingSetting.bind(this));
        this.game.DroppingSetting$
            .pipe(takeUntil(this.destroy$))
            .subscribe(this.updateDroppingSetting.bind(this));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /** 初始化或是收到message都要更新 Rolling Setting */
    updateRollingSetting(setting) {
        this.setRollingData(setting);
        this.tabs.set([...this.tabs(),
            { id: 'rolling', label: 'Rolling' },
        ]);
        if (this.selectedTab() === 'default')
            this.selectedTab.set('rolling');
    }
    /** 初始化或是收到message都要更新 Dropping Setting */
    updateDroppingSetting(setting) {
        this.setDroppingData(setting);
        this.tabs.set([...this.tabs(),
            { id: 'dropping', label: 'Dropping' },
        ]);
        if (this.selectedTab() === 'default')
            this.selectedTab.set('dropping');
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
        if (value === 'null') {
            this.demoCaseName.set(null);
        }
        else {
            this.demoCaseName.set(value);
        }
    }
    localRollingSettings = computed(() => {
        return {
            symbolSpinTimes: [
                this.symbolSpinTimes1(), this.symbolSpinTimes2(), this.symbolSpinTimes3()
            ],
            startUpTimes: [
                this.startUpTimes1(), this.startUpTimes2(), this.startUpTimes3()
            ],
            startUpDistances: [
                this.startUpDistances1(), this.startUpDistances2(), this.startUpDistances3()
            ],
            startDownTimes: [
                this.startDownTimes1(), this.startDownTimes2(), this.startDownTimes3()
            ],
            startDelays: [
                this.startDelays1(), this.startDelays2(), this.startDelays3()
            ],
            startDelayInterval: [
                this.startDelayInterval1(), this.startDelayInterval2(), this.startDelayInterval3()
            ],
            endTimes: [
                this.endTimes1(), this.endTimes2(), this.endTimes3()
            ],
            endUpTimes: [
                this.endUpTimes1(), this.endUpTimes2(), this.endUpTimes3()
            ],
            endDownTimes: [
                this.endDownTimes1(), this.endDownTimes2(), this.endDownTimes3()
            ],
            endBottomDistances: [
                this.endBottomDistances1(), this.endBottomDistances2(), this.endBottomDistances3()
            ],
            endTopDistances: [
                this.endTopDistances1(), this.endTopDistances2(), this.endTopDistances3()
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
                this.spinCounts1(), this.spinCounts2(), this.spinCounts3()
            ],
            extraSpinCounts: [
                this.extraSpinCounts1(), this.extraSpinCounts2(), this.extraSpinCounts3()
            ],
            spinCountInterval: [
                this.spinCountInterval1(), this.spinCountInterval2(), this.spinCountInterval3()
            ]
        };
    });
    localRollingString = computed(() => {
        return this.formatJsonWithInlineArrays(this.localRollingSettings());
    });
    applyRollingSettings() {
        this.game.send({ type: 'RollingSetting', content: this.localRollingSettings() });
    }
    updateRollingFromJson(event) {
        try {
            const target = event.target;
            const settings = JSON.parse(target.value);
            this.setRollingData(settings);
        }
        catch (e) {
            this.logger.error('Invalid JSON for rolling settings', e);
        }
    }
    localDroppingSettings = computed(() => {
        return {
            dropInTimes: [
                this.dropInTimes1(), this.dropInTimes2(), this.dropInTimes3()
            ],
            dropInSybmolIntervals: [
                this.dropInSybmolIntervals1(), this.dropInSybmolIntervals2(), this.dropInSybmolIntervals3()
            ],
            dropInReelIntervals: [
                this.dropInReelIntervals1(), this.dropInReelIntervals2(), this.dropInReelIntervals3()
            ],
            dropOutTimes: [
                this.dropOutTimes1(), this.dropOutTimes2(), this.dropOutTimes3()
            ],
            dropOutSymbolIntervals: [
                this.dropOutSymbolIntervals1(), this.dropOutSymbolIntervals2(), this.dropOutSymbolIntervals3()
            ],
            dropOutReelIntervals: [
                this.dropOutReelIntervals1(), this.dropOutReelIntervals2(), this.dropOutReelIntervals3()
            ],
            moveTimePerSymbol: [
                this.moveTimePerSymbol1(), this.moveTimePerSymbol2(), this.moveTimePerSymbol3()
            ],
            moveSymbolIntervals: [
                this.moveSymbolIntervals1(), this.moveSymbolIntervals2(), this.moveSymbolIntervals3()
            ],
            moveReelIntervals: [
                this.moveReelIntervals1(), this.moveReelIntervals2(), this.moveReelIntervals3()
            ]
        };
    });
    localDroppingString = computed(() => {
        return this.formatJsonWithInlineArrays(this.localDroppingSettings());
    });
    applyDroppingSettings() {
        this.game.send({ type: 'DroppingSetting', content: this.localDroppingSettings() });
    }
    updateDroppingFromJson(event) {
        try {
            const target = event.target;
            const settings = JSON.parse(target.value);
            this.setDroppingData(settings);
        }
        catch (e) {
            this.logger.error('Invalid JSON for dropping settings', e);
        }
    }
    formatJsonWithInlineArrays(obj) {
        const json = JSON.stringify(obj, null, 2);
        // 將陣列格式化為單行
        return json.replace(/\[\s+([^\]]+)\s+\]/g, (match, content) => {
            // 移除陣列內容中的換行和多餘空格
            const cleaned = content.replace(/\s+/g, ' ').trim();
            return `[${cleaned}]`;
        });
    }
    // Game Parameter Settings
    applyGameParameterSettings() {
        this.game.send({ type: 'GameParameterSetting', content: { debugWinScore: this.debugWinScore(), debugWinType: this.debugWinType() } });
    }
    // demo test case settings
    applyDemoTestCaseSettings() {
        this.game.send({ type: 'GameDemoTestCase', content: { demoTestCaseName: this.demoCaseName() } });
    }
    static ɵfac = function SlotReelSettingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SlotReelSettingComponent)(i0.ɵɵdirectiveInject(i1.GameIframeCtrlService), i0.ɵɵdirectiveInject(i2.LoggerService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlotReelSettingComponent, selectors: [["slot-reel-setting"]], decls: 1, vars: 1, consts: [[1, "top-0", "right-0", "absolute"], [3, "tabChange", "tabs", "selectedTab"], [1, "bg-black/50", "text-zinc-300", "w-fit", "p-2", "rounded-2xl"], [1, "flex"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "justify-between", "items-center", "gap-1"], ["title", "\u6BCF\u500B\u5716\u6A19\u65CB\u8F49\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], [1, "flex", "gap-1"], ["type", "number", "step", "0.01", 3, "onInput", "value"], ["title", "\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0A\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0A\u6240\u9700\u7684\u8DDD\u96E2", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0B\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u7B2C\u4E00\u8EF8\u8F2A\u8EF8\u555F\u52D5\u5EF6\u9072\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u555F\u52D5\u5EF6\u9072\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0A\u53CD\u5F48\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0B\u53CD\u5F48\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0B\u53CD\u5F48\u984D\u5916\u6240\u9700\u7684\u8DDD\u96E2", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0A\u53CD\u5F48\u6240\u9700\u7684\u8DDD\u96E2", 1, "cursor-help"], [1, "flex", "flex-col", "gap-1", "ml-4", "mt-6"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendUpTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendDownTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendBottomDistances\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendTopDistances\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389", 1, "cursor-help"], ["title", "NearMiss \u8DDD\u96E2", 1, "cursor-help"], ["title", "NearMiss \u6642\u9593", 1, "cursor-help"], ["title", "LuckyBreak \u8DDD\u96E2", 1, "cursor-help"], ["title", "LuckyBreak \u6642\u9593", 1, "cursor-help"], ["title", "\u63A7\u5236\u55AE\u8EF8 Rolling \u7684\u6642\u5019\u4F7F\u7528", 1, "cursor-help"], ["title", "\u7576 spinCounts \u4E0D\u5920\u4F7F\u7528\u6642\uFF0C\u88DC\u5145\u4F7F\u7528\u7684\u984D\u5916\u6B21\u6578", 1, "cursor-help"], ["title", "\u8F2A\u8EF8\u505C\u8F2A\u9593\u9694\u5716\u6A19\u6578\u91CF", 1, "cursor-help"], [1, "w-full", "mt-2", "p-2", "pl-4", "bg-zinc-800", "text-zinc-200", "rounded", "border", "border-zinc-600", "font-mono", "text-sm", "min-h-20", "resize-y", 3, "input", "value"], [1, "w-full", "mt-2", 3, "click"], ["title", "\u5716\u6A19\u6389\u843D\u9032\u5165\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u9032\u5165\u6642\u6BCF\u500B\u5716\u6A19\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u9032\u5165\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u96E2\u958B\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u96E2\u958B\u6642\u6BCF\u500B\u5716\u6A19\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u6389\u843D\u96E2\u958B\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u79FB\u52D5\u6642\u6BCF\u500B\u5716\u6A19\u6240\u9700\u7684\u6642\u9593", 1, "cursor-help"], ["title", "\u5716\u6A19\u79FB\u52D5\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593", 1, "cursor-help"], ["title", "\u8ABF\u8A66\u7528\u8D0F\u5206\u6578", 1, "cursor-help"], ["type", "number", "step", "1", 3, "onInput", "value"], [3, "onSelect", "options", "selected"]], template: function SlotReelSettingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, SlotReelSettingComponent_Conditional_0_Template, 7, 6, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showPanel() ? 0 : -1);
        } }, dependencies: [ApInputBox, ApButtonComponent, ApUiTabGroupComponent, ApSelectComponent], styles: ["\n\n.cursor-help[title][_ngcontent-%COMP%] {\n  position: relative;\n}\n\n\n\n.cursor-help[title][_ngcontent-%COMP%]:hover::before {\n  content: attr(title);\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  background: rgba(0, 0, 0, 1);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n  font-size: 12px;\n  z-index: 1000;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_fadeIn 0.1s ease-in;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n\nap-input-box[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n\n\nap-select[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 100;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlotReelSettingComponent, [{
        type: Component,
        args: [{ selector: 'slot-reel-setting', imports: [ApInputBox, ApButtonComponent, ApUiTabGroupComponent, ApSelectComponent], template: "\n<!--ap-icon name=\"pencil\" class=\"size-6 text-zinc-200/30 hover:text-white cursor-pointer active:scale-95 transition-all\" \n  (click)=\"showPanel.set(!showPanel())\">\n</ap-icon-->\n@if(showPanel()){\n  <div class=\"top-0 right-0 absolute\">\n    <ap-ui-tab-group [tabs]=\"tabs()\" [selectedTab]=\"selectedTab()\" (tabChange)=\"onTabChange($event)\"></ap-ui-tab-group>\n    <div class=\"bg-black/50 text-zinc-300 w-fit p-2 rounded-2xl\">\n      @if(showRolling()){\n        <div class=\"flex\">\n          <div class=\"flex flex-col gap-1\">\n          RollingSetting\n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u6BCF\u500B\u5716\u6A19\u65CB\u8F49\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">symbolSpinTimes</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"symbolSpinTimes1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"symbolSpinTimes1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"symbolSpinTimes2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"symbolSpinTimes2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"symbolSpinTimes3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"symbolSpinTimes3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0A\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">startUpTimes</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"startUpTimes1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startUpTimes1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startUpTimes2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startUpTimes2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startUpTimes3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startUpTimes3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0A\u6240\u9700\u7684\u8DDD\u96E2\" class=\"cursor-help\">startUpDistances</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"startUpDistances1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startUpDistances1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startUpDistances2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startUpDistances2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startUpDistances3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startUpDistances3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8F2A\u8EF8\u555F\u52D5\u5F80\u4E0B\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">startDownTimes</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"startDownTimes1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startDownTimes1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startDownTimes2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startDownTimes2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startDownTimes3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startDownTimes3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u7B2C\u4E00\u8EF8\u8F2A\u8EF8\u555F\u52D5\u5EF6\u9072\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">startDelays</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"startDelays1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startDelays1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startDelays2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startDelays2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startDelays3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startDelays3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8F2A\u8EF8\u555F\u52D5\u5EF6\u9072\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593\" class=\"cursor-help\">startDelayInterval</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"startDelayInterval1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startDelayInterval1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startDelayInterval2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startDelayInterval2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"startDelayInterval3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"startDelayInterval3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8F2A\u8EF8\u7D50\u675F\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">endTimes</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"endTimes1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endTimes1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endTimes2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endTimes2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endTimes3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endTimes3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0A\u53CD\u5F48\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">endUpTimes</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"endUpTimes1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endUpTimes1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endUpTimes2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endUpTimes2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endUpTimes3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endUpTimes3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0B\u53CD\u5F48\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">endDownTimes</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"endDownTimes1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endDownTimes1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endDownTimes2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endDownTimes2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endDownTimes3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endDownTimes3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0B\u53CD\u5F48\u984D\u5916\u6240\u9700\u7684\u8DDD\u96E2\" class=\"cursor-help\">endBottomDistances</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"endBottomDistances1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endBottomDistances1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endBottomDistances2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endBottomDistances2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endBottomDistances3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endBottomDistances3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n\n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8F2A\u8EF8\u7D50\u675F\u6642\u5F80\u4E0A\u53CD\u5F48\u6240\u9700\u7684\u8DDD\u96E2\" class=\"cursor-help\">endTopDistances</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"endTopDistances1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endTopDistances1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endTopDistances2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endTopDistances2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"endTopDistances3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"endTopDistances3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n\n          </div>\n          <div class=\"flex flex-col gap-1 ml-4 mt-6\">\n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389\" class=\"cursor-help\">expectEndTime</span>\n              <ap-input-box [value]=\"expectEndTime().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"expectEndTime.set(formatNumberStr($event))\"/>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendUpTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389\" class=\"cursor-help\">expectEndUpTime</span>\n              <ap-input-box [value]=\"expectEndUpTime().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"expectEndUpTime.set(formatNumberStr($event))\"/>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendDownTimes\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389\" class=\"cursor-help\">expectEndDownTime</span>\n              <ap-input-box [value]=\"expectEndDownTime().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"expectEndDownTime.set(formatNumberStr($event))\"/>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendBottomDistances\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389\" class=\"cursor-help\">expectEndBottomDistance</span>\n              <ap-input-box [value]=\"expectEndBottomDistance().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"expectEndBottomDistance.set(formatNumberStr($event))\"/>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"\u671F\u5F85\u6846\u555F\u52D5\u6642, \u7576\u671F\u5F85\u6642\u628AendTopDistances\u7528\u9019\u6578\u503C\u66FF\u63DB\u6389\" class=\"cursor-help\">expectEndTopDistance</span>\n              <ap-input-box [value]=\"expectEndTopDistance().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"expectEndTopDistance.set(formatNumberStr($event))\"/>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"NearMiss \u8DDD\u96E2\" class=\"cursor-help\">nearMissDistance</span>\n              <ap-input-box [value]=\"nearMissDistance().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"nearMissDistance.set(formatNumberStr($event))\"/>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"NearMiss \u6642\u9593\" class=\"cursor-help\">nearMissTime</span>\n              <ap-input-box [value]=\"nearMissTime().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"nearMissTime.set(formatNumberStr($event))\"/>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"LuckyBreak \u8DDD\u96E2\" class=\"cursor-help\">luckyBreakDistance</span>\n              <ap-input-box [value]=\"luckyBreakDistance().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"luckyBreakDistance.set(formatNumberStr($event))\"/>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"LuckyBreak \u6642\u9593\" class=\"cursor-help\">luckyBreakTime</span>\n              <ap-input-box [value]=\"luckyBreakTime().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"luckyBreakTime.set(formatNumberStr($event))\"/>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"\u63A7\u5236\u55AE\u8EF8 Rolling \u7684\u6642\u5019\u4F7F\u7528\" class=\"cursor-help\">spinCounts</span>\n              <div class=\"flex gap-1\">\n                <ap-input-box [value]=\"spinCounts1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"spinCounts1.set(formatNumberStr($event))\"/>\n                <ap-input-box [value]=\"spinCounts2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"spinCounts2.set(formatNumberStr($event))\"/>\n                <ap-input-box [value]=\"spinCounts3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"spinCounts3.set(formatNumberStr($event))\"/>\n              </div>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"\u7576 spinCounts \u4E0D\u5920\u4F7F\u7528\u6642\uFF0C\u88DC\u5145\u4F7F\u7528\u7684\u984D\u5916\u6B21\u6578\" class=\"cursor-help\">extraSpinCounts</span>\n              <div class=\"flex gap-1\">\n                <ap-input-box [value]=\"extraSpinCounts1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"extraSpinCounts1.set(formatNumberStr($event))\"/>\n                <ap-input-box [value]=\"extraSpinCounts2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"extraSpinCounts2.set(formatNumberStr($event))\"/>\n                <ap-input-box [value]=\"extraSpinCounts3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"extraSpinCounts3.set(formatNumberStr($event))\"/>\n              </div>\n            </div>\n            \n            <div class=\"flex justify-between items-center gap-1\">\n              <span title=\"\u8F2A\u8EF8\u505C\u8F2A\u9593\u9694\u5716\u6A19\u6578\u91CF\" class=\"cursor-help\">spinCountInterval</span>\n              <div class=\"flex gap-1\">\n                <ap-input-box [value]=\"spinCountInterval1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"spinCountInterval1.set(formatNumberStr($event))\"/>\n                <ap-input-box [value]=\"spinCountInterval2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"spinCountInterval2.set(formatNumberStr($event))\"/>\n                <ap-input-box [value]=\"spinCountInterval3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"spinCountInterval3.set(formatNumberStr($event))\"/>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n        <textarea \n          class=\"w-full mt-2 p-2 pl-4 bg-zinc-800 text-zinc-200 rounded border border-zinc-600 font-mono text-sm min-h-20 resize-y\"\n          [value]=\"localRollingString()\"\n          (input)=\"updateRollingFromJson($event)\">\n        </textarea>\n        <ap-button class=\"w-full mt-2\" (click)=\"applyRollingSettings()\">Apply</ap-button>\n      }\n      @if(showDropping()){\n        <div class=\"flex flex-col gap-1\">\n          DroppingSetting\n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u5716\u6A19\u6389\u843D\u9032\u5165\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">dropInTimes</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"dropInTimes1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropInTimes1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropInTimes2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropInTimes2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropInTimes3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropInTimes3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u5716\u6A19\u6389\u843D\u9032\u5165\u6642\u6BCF\u500B\u5716\u6A19\u7684\u9593\u9694\u6642\u9593\" class=\"cursor-help\">dropInSybmolIntervals</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"dropInSybmolIntervals1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropInSybmolIntervals1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropInSybmolIntervals2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropInSybmolIntervals2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropInSybmolIntervals3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropInSybmolIntervals3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u5716\u6A19\u6389\u843D\u9032\u5165\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593\" class=\"cursor-help\">dropInReelIntervals</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"dropInReelIntervals1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropInReelIntervals1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropInReelIntervals2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropInReelIntervals2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropInReelIntervals3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropInReelIntervals3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u5716\u6A19\u6389\u843D\u96E2\u958B\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">dropOutTimes</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"dropOutTimes1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropOutTimes1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropOutTimes2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropOutTimes2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropOutTimes3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropOutTimes3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u5716\u6A19\u6389\u843D\u96E2\u958B\u6642\u6BCF\u500B\u5716\u6A19\u7684\u9593\u9694\u6642\u9593\" class=\"cursor-help\">dropOutSymbolIntervals</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"dropOutSymbolIntervals1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropOutSymbolIntervals1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropOutSymbolIntervals2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropOutSymbolIntervals2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropOutSymbolIntervals3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropOutSymbolIntervals3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u5716\u6A19\u6389\u843D\u96E2\u958B\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593\" class=\"cursor-help\">dropOutReelIntervals</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"dropOutReelIntervals1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropOutReelIntervals1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropOutReelIntervals2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropOutReelIntervals2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"dropOutReelIntervals3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"dropOutReelIntervals3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u5716\u6A19\u79FB\u52D5\u6642\u6BCF\u500B\u5716\u6A19\u6240\u9700\u7684\u6642\u9593\" class=\"cursor-help\">moveTimePerSymbol</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"moveTimePerSymbol1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"moveTimePerSymbol1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"moveTimePerSymbol2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"moveTimePerSymbol2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"moveTimePerSymbol3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"moveTimePerSymbol3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n          \n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u5716\u6A19\u79FB\u52D5\u6642\u6BCF\u4E00\u8EF8\u7684\u9593\u9694\u6642\u9593\" class=\"cursor-help\">moveReelIntervals</span>\n            <div class=\"flex gap-1\">\n              <ap-input-box [value]=\"moveReelIntervals1().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"moveReelIntervals1.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"moveReelIntervals2().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"moveReelIntervals2.set(formatNumberStr($event))\"/>\n              <ap-input-box [value]=\"moveReelIntervals3().toString()\" type=\"number\" step=\"0.01\" (onInput)=\"moveReelIntervals3.set(formatNumberStr($event))\"/>\n            </div>\n          </div>\n        </div>\n        <textarea \n          class=\"w-full mt-2 p-2 pl-4 bg-zinc-800 text-zinc-200 rounded border border-zinc-600 font-mono text-sm min-h-20 resize-y\"\n          [value]=\"localDroppingString()\"\n          (input)=\"updateDroppingFromJson($event)\">\n        </textarea>\n        <ap-button class=\"w-full mt-2\" (click)=\"applyDroppingSettings()\">Apply</ap-button>\n      }\n      @if(showGameParameter()){\n        <div class=\"flex flex-col gap-1\">\n          GameParameterSetting\n          <div class=\"flex justify-between items-center gap-1\">\n            <span title=\"\u8ABF\u8A66\u7528\u8D0F\u5206\u6578\" class=\"cursor-help\">debugWinScore</span>\n            <ap-input-box [value]=\"debugWinScore().toString()\" type=\"number\" step=\"1\" (onInput)=\"debugWinScore.set(formatNumberStr($event))\"/>\n          </div>\n          <ap-select [options]=\"selects()\" [selected]=\"debugWinType().toString()\" (onSelect)=\"debugWinType.set(+$event)\"></ap-select>\n        </div>\n        <ap-button class=\"w-full mt-2\" (click)=\"applyGameParameterSettings()\">Apply</ap-button>\n      }\n      @if(showDemoTestCase()){\n        <div class=\"flex flex-col gap-1\">\n          DemoTestCaseSetting\n          <ap-select [options]=\"demoSelects()\" [selected]=\"demoCaseName()\" (onSelect)=\"demoCaseName.set($event)\"></ap-select>\n        </div>\n        <ap-button class=\"w-full mt-2\" (click)=\"applyDemoTestCaseSettings()\">Apply</ap-button>\n      }\n    </div>\n </div>\n}\n", styles: ["/* \u52A0\u5FEB tooltip \u986F\u793A\u901F\u5EA6 */\n.cursor-help[title] {\n  position: relative;\n}\n\n/* \u7E2E\u77ED\u700F\u89BD\u5668\u539F\u751F tooltip \u7684\u5EF6\u9072\u6642\u9593 */\n.cursor-help[title]:hover::before {\n  content: attr(title);\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  background: rgba(0, 0, 0, 1);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n  font-size: 12px;\n  z-index: 1000;\n  pointer-events: none;\n  animation: fadeIn 0.1s ease-in;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* \u56FA\u5B9A\u8F38\u5165\u6846\u5BEC\u5EA6 */\nap-input-box {\n  width: 100px;\n}\n\n/* \u8B93\u4E0B\u62C9\u9078\u55AE\u53EF\u4EE5\u8D85\u51FA\u5BB9\u5668 */\nap-select {\n  position: relative;\n  z-index: 100;\n}\n"] }]
    }], () => [{ type: i1.GameIframeCtrlService }, { type: i2.LoggerService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SlotReelSettingComponent, { className: "SlotReelSettingComponent", filePath: "src/app/pages/slot-reel-setting/slot-reel-setting.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=slot-reel-setting.component.js.map