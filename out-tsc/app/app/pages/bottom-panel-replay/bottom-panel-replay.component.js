import { Component, computed, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApStatusModeBarComponent } from '../../components/ap-status-mode-bar/ap-status-mode-bar.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApIconBadgeComponent } from '../../../ap-components-lib/ap-icon-badge/ap-icon-badge.component';
import { ApButtonFreeSpinsComponent } from '../../components/ap-button-free-spins/ap-button-free-spins.component';
import { ApButtonAutoSpinTimesComponent } from '../../components/ap-button-auto-spin-times/ap-button-auto-spin-times.component';
import { BottomPanelBase } from '../bottom-panel/bottom-panel-base';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { DecimalCommaPipe } from '../../library/pipe/decimal-comma.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function BottomPanelReplayComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-button-free-spins", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("scale", ctx_r0.freeSpinScale());
} }
function BottomPanelReplayComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button-auto-spin-times", 26);
    i0.ɵɵlistener("buttonClick", function BottomPanelReplayComponent_Conditional_4_Template_ap_button_auto_spin_times_buttonClick_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.clickStopAutoSpin()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("accentColor", "auto-spin")("scale", ctx_r0.freeSpinScale())("totalSpins", ctx_r0.autoSpinTotal() || 0)("currentSpins", ctx_r0.autoSpinRemaining() || 0)("variant", ctx_r0.isAutoSpinInfinity() ? "infinity" : "default");
} }
function BottomPanelReplayComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-button-auto-spin-times", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("accentColor", "auto-spin")("scale", ctx_r0.freeSpinScale());
} }
function BottomPanelReplayComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button-auto-spin-times", 27);
    i0.ɵɵlistener("buttonClick", function BottomPanelReplayComponent_Conditional_6_Template_ap_button_auto_spin_times_buttonClick_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.clickFreeGameSpin()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("scale", ctx_r0.freeSpinScale())("totalSpins", ctx_r0.freeGameTotal() || 0)("currentSpins", ctx_r0.freeGameRemaining() || 0);
} }
function BottomPanelReplayComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-icon-badge", 28);
    i0.ɵɵlistener("click", function BottomPanelReplayComponent_Conditional_7_Template_ap_icon_badge_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.clickSpin()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r0.spinIconSize());
    i0.ɵɵproperty("name", ctx_r0.spinIcon())("ngClass", ctx_r0.isSpinDisabled() ? "" : "cursor-pointer hover:scale-105 transition-transform active:scale-95 animate-spin animate-infinite animate-duration-1500")("hasBadge", false)("disabled", ctx_r0.isSpinDisabled());
} }
function BottomPanelReplayComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-icon-badge", 29);
    i0.ɵɵlistener("click", function BottomPanelReplayComponent_Conditional_19_Template_ap_icon_badge_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleMusicAtAutoButton()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r0.buttonIconSize());
    i0.ɵɵproperty("name", ctx_r0.musicAtAutoButtonIcon())("hasBadge", false);
} }
function BottomPanelReplayComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 30)(1, "img", 31);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("name", "blank");
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.rsImgPath(), i0.ɵɵsanitizeUrl);
} }
function BottomPanelReplayComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-icon-badge", 32);
    i0.ɵɵlistener("click", function BottomPanelReplayComponent_Conditional_21_Template_ap_icon_badge_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.clickAutoplay()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.isAutoPlayDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabled", ctx_r0.isAutoPlayDisabled());
} }
function BottomPanelReplayComponent_Conditional_22_For_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 38);
} }
function BottomPanelReplayComponent_Conditional_22_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const option_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", option_r9.value, " ");
} }
function BottomPanelReplayComponent_Conditional_22_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵlistener("click", function BottomPanelReplayComponent_Conditional_22_For_4_Template_div_click_0_listener() { const option_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.clickAutoplayOption(option_r9.value)); });
    i0.ɵɵconditionalCreate(1, BottomPanelReplayComponent_Conditional_22_For_4_Conditional_1_Template, 1, 0, "ap-icon", 38)(2, BottomPanelReplayComponent_Conditional_22_For_4_Conditional_2_Template, 1, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(option_r9.isInfinity ? 1 : 2);
} }
function BottomPanelReplayComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵlistener("click", function BottomPanelReplayComponent_Conditional_22_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeAutoplayMenu()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "div", 34)(2, "div", 35);
    i0.ɵɵrepeaterCreate(3, BottomPanelReplayComponent_Conditional_22_For_4_Template, 3, 1, "div", 36, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.autoplayOptions);
} }
function BottomPanelReplayComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵelement(1, "ap-status-mode-bar", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("top", ctx_r0.statusBarGap());
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("height", ctx_r0.statusBarHeight())("width", ctx_r0.statusBarWidth())("font-size", ctx_r0.statusBarFontSize());
    i0.ɵɵproperty("mode", ctx_r0.statusBarMode());
} }
function BottomPanelReplayComponent_Conditional_29_For_4_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-toggle-switch", 47);
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("accentColor", "yellow")("checked", ctx_r0.toggleMap()[item_r12.id]);
} }
function BottomPanelReplayComponent_Conditional_29_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵlistener("click", function BottomPanelReplayComponent_Conditional_29_For_4_Template_div_click_0_listener() { const item_r12 = i0.ɵɵrestoreView(_r11).$implicit; return i0.ɵɵresetView(item_r12.action()); });
    i0.ɵɵelement(1, "ap-icon", 45);
    i0.ɵɵelementStart(2, "span", 46);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, BottomPanelReplayComponent_Conditional_29_For_4_Conditional_4_Template, 1, 2, "ap-toggle-switch", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r0.iconMap()[item_r12.id]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r12.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r12.hasToggle ? 4 : -1);
} }
function BottomPanelReplayComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵlistener("click", function BottomPanelReplayComponent_Conditional_29_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeMenu()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "div", 41)(2, "div", 42);
    i0.ɵɵrepeaterCreate(3, BottomPanelReplayComponent_Conditional_29_For_4_Template, 5, 3, "div", 43, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("margin-bottom", ctx_r0.menuOffset());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.menuItems);
} }
function BottomPanelReplayComponent_Conditional_30_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " *** ");
} }
function BottomPanelReplayComponent_Conditional_30_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "decimalComma");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.displayCurrency(), " ", i0.ɵɵpipeBind1(1, 2, ctx_r0.displayBalance()), " ");
} }
function BottomPanelReplayComponent_Conditional_30_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " *** ");
} }
function BottomPanelReplayComponent_Conditional_30_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "decimalComma");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.displayCurrency(), " ", i0.ɵɵpipeBind1(1, 2, ctx_r0.displayBet()), " ");
} }
function BottomPanelReplayComponent_Conditional_30_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " *** ");
} }
function BottomPanelReplayComponent_Conditional_30_Conditional_19_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.displayCurrency(), " ");
} }
function BottomPanelReplayComponent_Conditional_30_Conditional_19_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "decimalComma");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(1, 1, ctx_r0.displayWin()), " ");
} }
function BottomPanelReplayComponent_Conditional_30_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵconditionalCreate(1, BottomPanelReplayComponent_Conditional_30_Conditional_19_Conditional_1_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵconditionalCreate(3, BottomPanelReplayComponent_Conditional_30_Conditional_19_Conditional_3_Template, 2, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.displayCurrency() !== null ? 1 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.displayWin() !== null ? 3 : -1);
} }
function BottomPanelReplayComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 48)(2, "span", 49);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 50);
    i0.ɵɵconditionalCreate(5, BottomPanelReplayComponent_Conditional_30_Conditional_5_Template, 1, 0)(6, BottomPanelReplayComponent_Conditional_30_Conditional_6_Template, 2, 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 51)(8, "span", 49);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 52)(11, "div", 53);
    i0.ɵɵconditionalCreate(12, BottomPanelReplayComponent_Conditional_30_Conditional_12_Template, 1, 0)(13, BottomPanelReplayComponent_Conditional_30_Conditional_13_Template, 2, 4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 54)(15, "span", 49);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 55);
    i0.ɵɵconditionalCreate(18, BottomPanelReplayComponent_Conditional_30_Conditional_18_Template, 1, 0)(19, BottomPanelReplayComponent_Conditional_30_Conditional_19_Template, 4, 2);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.getBalanceLabel(), " ");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isBalanceHided() ? 5 : 6);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.getBetLabel(), " ");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.isBetHided() ? 12 : 13);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.getWinLabel(), " ");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isWinHided() ? 18 : 19);
} }
function BottomPanelReplayComponent_Conditional_31_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " *** ");
} }
function BottomPanelReplayComponent_Conditional_31_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "decimalComma");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.displayCurrency(), " ", i0.ɵɵpipeBind1(1, 2, ctx_r0.displayBalance()), " ");
} }
function BottomPanelReplayComponent_Conditional_31_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " *** ");
} }
function BottomPanelReplayComponent_Conditional_31_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "decimalComma");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.displayCurrency(), " ", i0.ɵɵpipeBind1(1, 2, ctx_r0.displayBet()), " ");
} }
function BottomPanelReplayComponent_Conditional_31_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " *** ");
} }
function BottomPanelReplayComponent_Conditional_31_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "decimalComma");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.displayCurrency());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, ctx_r0.displayWin()));
} }
function BottomPanelReplayComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "div", 56);
    i0.ɵɵelement(2, "ap-icon", 57);
    i0.ɵɵelementStart(3, "div", 58);
    i0.ɵɵconditionalCreate(4, BottomPanelReplayComponent_Conditional_31_Conditional_4_Template, 1, 0)(5, BottomPanelReplayComponent_Conditional_31_Conditional_5_Template, 2, 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 59)(7, "div", 60);
    i0.ɵɵelement(8, "ap-icon", 61);
    i0.ɵɵelementStart(9, "div", 62);
    i0.ɵɵconditionalCreate(10, BottomPanelReplayComponent_Conditional_31_Conditional_10_Template, 1, 0)(11, BottomPanelReplayComponent_Conditional_31_Conditional_11_Template, 2, 4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 59)(13, "div", 60);
    i0.ɵɵelement(14, "ap-icon", 63);
    i0.ɵɵelementStart(15, "div", 62);
    i0.ɵɵconditionalCreate(16, BottomPanelReplayComponent_Conditional_31_Conditional_16_Template, 1, 0)(17, BottomPanelReplayComponent_Conditional_31_Conditional_17_Template, 5, 4);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", ctx_r0.bottomIconSize());
    i0.ɵɵproperty("name", ctx_r0.statusBarMode() === "free-bonus" ? "star" : "wallet");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isBalanceHided() ? 4 : 5);
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("height", ctx_r0.bottomIconSize());
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isBetHided() ? 10 : 11);
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("height", ctx_r0.bottomIconSize());
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isWinHided() ? 16 : ctx_r0.displayWin() !== null ? 17 : -1);
} }
function BottomPanelReplayComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64)(1, "div", 65)(2, "div", 66);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "decimalComma");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 67);
    i0.ɵɵelement(6, "ap-icon", 68);
    i0.ɵɵelementStart(7, "div", 66);
    i0.ɵɵtext(8, " 2026-05-10 23:59:59 ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("bottom", ctx_r0.listBottomHeight())("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3(" ", ctx_r0.getRemainingTurnoverLabel(), ":", ctx_r0.displayCurrency(), "", i0.ɵɵpipeBind1(4, 9, ctx_r0.displayRemainingTurnover()), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("height", ctx_r0.bottomHintIconSize());
} }
export class BottomPanelReplayComponent extends BottomPanelBase {
    displayCurrency = input('$');
    displayBet = input(0);
    displayWin = input(0);
    musicPressedChange = output();
    turboStateChange = output();
    spin = output();
    autoButtonMode = signal('music-toggle');
    isAutoSpinInfinity = signal(false);
    spinIcon = signal('spin');
    musicAtAutoButtonIcon = computed(() => (this.isMusicAtAutoButtonOn() ? 'music' : 'music pressed'));
    featureIcon = signal('buy-feature');
    rsImgPath = signal('');
    isCampaignDisabled = signal(true);
    isFeatureDisabled = signal(true);
    isDecreaseDisabled = signal(true);
    isIncreaseDisabled = signal(true);
    isMenuDisabled = signal(true);
    isMusicAtAutoButtonOn = signal(true);
    campaignHasBadge = signal(false);
    isMenuOpen = signal(false);
    isAutoplayMenuOpen = signal(false);
    iconMap = signal({});
    toggleMap = signal({});
    menuItems = [];
    autoplayOptions = [];
    displayBalance = signal(0);
    isBalanceHided = signal(true);
    isBetHided = signal(false);
    isWinHided = signal(false);
    appI18n = inject(AppI18nService);
    getBalanceLabel = this.appI18n.computed('spin_area_balance', 'BALANCE');
    getBetLabel = this.appI18n.computed('spin_area_bet', 'BET');
    getWinLabel = this.appI18n.computed('spin_area_win', 'WIN');
    statusBarMode = signal('close');
    isSpinDisabled = signal(false);
    isAutoPlayDisabled = computed(() => true);
    isTurboDisabled = signal(false);
    isDemoMode = computed(() => this.statusBarMode() === 'demo-mode');
    autoSpinTotal = signal(0);
    autoSpinRemaining = signal(0);
    freeGameTotal = input(0);
    freeGameRemaining = input(0);
    spinButtonMode = input('default');
    musicIcon = computed(() => this.isMusicAtAutoButtonOn() ? 'music' : 'music pressed');
    clickSpin() {
        this.spin.emit();
    }
    clickFreeGameSpin() {
        this.spin.emit();
    }
    clickTurbo() {
        const speed = this.updateTurboState();
        this.turboStateChange.emit(speed);
    }
    toggleMusicAtAutoButton() {
        this.isMusicAtAutoButtonOn.update((current) => !current);
        this.musicPressedChange.emit(this.isMusicAtAutoButtonOn());
    }
    // 其他沒用到的方法
    clickStopAutoSpin() {
    }
    clickCampaign() {
    }
    clickFeature() {
    }
    clickDecreaseBet() {
    }
    clickIncreaseBet() {
    }
    clickAutoplay() {
    }
    closeAutoplayMenu() {
    }
    clickAutoplayOption(value) {
    }
    toggleMenu() {
    }
    closeMenu() {
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵBottomPanelReplayComponent_BaseFactory; return function BottomPanelReplayComponent_Factory(__ngFactoryType__) { return (ɵBottomPanelReplayComponent_BaseFactory || (ɵBottomPanelReplayComponent_BaseFactory = i0.ɵɵgetInheritedFactory(BottomPanelReplayComponent)))(__ngFactoryType__ || BottomPanelReplayComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomPanelReplayComponent, selectors: [["bottom-panel-replay"]], inputs: { displayCurrency: [1, "displayCurrency"], displayBet: [1, "displayBet"], displayWin: [1, "displayWin"], freeGameTotal: [1, "freeGameTotal"], freeGameRemaining: [1, "freeGameRemaining"], spinButtonMode: [1, "spinButtonMode"] }, outputs: { musicPressedChange: "musicPressedChange", turboStateChange: "turboStateChange", spin: "spin" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 33, vars: 81, consts: [[1, "size-full", "bg-linear-to-t", "from-black/90", "to-transparent"], [1, "relative", "w-full", "flex-1", "flex", "items-center", "px-6"], [1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-sticky"], [3, "scale"], [3, "accentColor", "scale", "totalSpins", "currentSpins", "variant"], [3, "accentColor", "scale"], [3, "scale", "totalSpins", "currentSpins"], [3, "name", "ngClass", "height", "hasBadge", "disabled"], [1, "relative", "w-full", "flex", "items-center", "justify-between"], [1, "flex", "items-center"], ["name", "campaign", 3, "click", "ngClass", "hasBadge", "disabled"], [3, "click", "name", "ngClass", "disabled"], [1, "flex", "items-center", "bg-zinc-900/80", "rounded-xl", "p-1"], [3, "pointerdown", "name", "ngClass", "disabledCoverVariant", "hasBadge", "disabled"], [1, "relative", "flex", "items-center"], [1, "relative", "shrink-0"], [1, "relative", "size-full", "cursor-pointer", "transition-transform", "hover:scale-105", "active:scale-95", 3, "name", "height", "hasBadge"], ["name", "autoplay default", 1, "relative", "size-full", 3, "ngClass", "disabled"], [1, "cursor-pointer", "transition-transform", "hover:scale-105", "active:scale-95", 3, "click", "name", "hasBadge"], [1, "absolute", "top-0", "left-1/2", "flex", "items-center", "justify-center", "-translate-x-1/2", 3, "top"], [1, "flex", "border-t-[0.15rem]", "border-zinc-400/50", "items-center", "justify-between", "pr-4", "text-zinc-100", "font-semibold", "bg-black/50"], ["type", "button", 1, "flex", "items-center", "justify-center", "w-6", "h-6", 3, "click", "disabled", "ngClass"], [1, "w-full", "h-full", 3, "name", "hasBadge", "disabledCoverVariant", "disabled"], [1, "grid", "flex-1", "grid-cols-3", "items-center"], [1, "grid", "flex-1", "grid-cols-3"], [1, "fixed", "left-0", "right-0", "px-2", "text-zinc-300", "bg-gradient-to-r", "from-black/50", "via-zinc-800/0", "to-black/50", "inline-flex", "z-sticky", 3, "bottom", "fontSize"], [3, "buttonClick", "accentColor", "scale", "totalSpins", "currentSpins", "variant"], [3, "buttonClick", "scale", "totalSpins", "currentSpins"], [3, "click", "name", "ngClass", "hasBadge", "disabled"], [1, "relative", "size-full", "cursor-pointer", "transition-transform", "hover:scale-105", "active:scale-95", 3, "click", "name", "hasBadge"], [1, "absolute", "inset-0", "w-full", "h-full", "text-zinc-100", 3, "name"], ["alt", "RS", 1, "absolute", "left-1/2", "top-1/2", "z-10", "w-[90%]", "h-[90%]", "-translate-x-1/2", "-translate-y-1/2", "-rotate-6", "object-contain", "pointer-events-none", "drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]", 3, "src"], ["name", "autoplay default", 1, "relative", "size-full", 3, "click", "ngClass", "disabled"], [1, "fixed", "inset-0", 3, "click"], [1, "absolute", "left-1/2", "-translate-x-1/2", "bottom-full", "mb-2", "animate-fade-up", "animate-once", "animate-duration-200", "z-sticky"], [1, "min-w-26", "rounded-2xl", "border-4", "border-zinc-50", "bg-zinc-800", "outline-3", "outline-zinc-900", "text-white", "cursor-pointer"], [1, "flex", "items-center", "justify-center", "py-2", "border-b", "border-zinc-700", "last:border-b-0", "text-xl", "font-bold", "text-white", "hover:text-yellow-300"], [1, "flex", "items-center", "justify-center", "py-2", "border-b", "border-zinc-700", "last:border-b-0", "text-xl", "font-bold", "text-white", "hover:text-yellow-300", 3, "click"], ["name", "infinite default", 1, "size-6.5"], [1, "absolute", "top-0", "left-1/2", "flex", "items-center", "justify-center", "-translate-x-1/2"], [3, "mode"], [1, "absolute", "left-0", "bottom-full", "animate-fade-up", "animate-once", "animate-duration-200", "z-dropdown"], [1, "min-w-56", "justify-center", "items-center", "rounded-t-md", "border", "border-zinc-400/50", "bg-zinc-900", "text-zinc-300", "p-2"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold", 3, "click"], [1, "size-6", 3, "name"], [1, "flex-1"], ["variant", "quick", 3, "accentColor", "checked"], [1, "flex", "items-center", "justify-start", "space-x-2", "ml-2"], [1, "text-yellow-400"], [1, "space-x-1", "text-zinc-200", "whitespace-nowrap"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "inline-block", "min-w-[4ch]", "text-left", "tabular-nums", "text-zinc-200"], [1, "flex", "space-x-1"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "flex", "space-x-1", "text-zinc-200"], [1, "flex", "justify-start", "items-center", "space-x-1", "ml-1"], [1, "text-yellow-400", 3, "name"], [1, "text-zinc-200", "whitespace-nowrap"], [1, "flex", "justify-center"], [1, "flex", "items-center", "space-x-1"], ["name", "prizes", 1, "text-yellow-400"], [1, "text-zinc-200"], ["name", "trophy", 1, "text-yellow-400"], [1, "fixed", "left-0", "right-0", "px-2", "text-zinc-300", "bg-gradient-to-r", "from-black/50", "via-zinc-800/0", "to-black/50", "inline-flex", "z-sticky"], [1, "flex", "item-between", "space-between", "justify-between", "w-full"], [1, "whitespace-nowrap", "leading-tight", "py-0.5"], [1, "flex", "items-center", "justify-center", "space-x-1"], ["name", "clock"]], template: function BottomPanelReplayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵconditionalCreate(3, BottomPanelReplayComponent_Conditional_3_Template, 1, 1, "ap-button-free-spins", 3)(4, BottomPanelReplayComponent_Conditional_4_Template, 1, 5, "ap-button-auto-spin-times", 4)(5, BottomPanelReplayComponent_Conditional_5_Template, 1, 2, "ap-button-auto-spin-times", 5)(6, BottomPanelReplayComponent_Conditional_6_Template, 1, 3, "ap-button-auto-spin-times", 6)(7, BottomPanelReplayComponent_Conditional_7_Template, 1, 6, "ap-icon-badge", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 8)(9, "div", 9)(10, "ap-icon-badge", 10);
            i0.ɵɵlistener("click", function BottomPanelReplayComponent_Template_ap_icon_badge_click_10_listener() { return ctx.clickCampaign(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "ap-icon-badge", 11);
            i0.ɵɵlistener("click", function BottomPanelReplayComponent_Template_ap_icon_badge_click_11_listener() { return ctx.clickFeature(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 12)(13, "ap-icon-badge", 13);
            i0.ɵɵlistener("pointerdown", function BottomPanelReplayComponent_Template_ap_icon_badge_pointerdown_13_listener() { return ctx.clickDecreaseBet(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "div");
            i0.ɵɵelementStart(15, "ap-icon-badge", 13);
            i0.ɵɵlistener("pointerdown", function BottomPanelReplayComponent_Template_ap_icon_badge_pointerdown_15_listener() { return ctx.clickIncreaseBet(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 9)(17, "div", 14)(18, "div", 15);
            i0.ɵɵconditionalCreate(19, BottomPanelReplayComponent_Conditional_19_Template, 1, 4, "ap-icon-badge", 16)(20, BottomPanelReplayComponent_Conditional_20_Template, 2, 2)(21, BottomPanelReplayComponent_Conditional_21_Template, 1, 2, "ap-icon-badge", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(22, BottomPanelReplayComponent_Conditional_22_Template, 5, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "ap-icon-badge", 18);
            i0.ɵɵlistener("click", function BottomPanelReplayComponent_Template_ap_icon_badge_click_23_listener() { return ctx.clickTurbo(); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(24, BottomPanelReplayComponent_Conditional_24_Template, 2, 9, "div", 19);
            i0.ɵɵelementStart(25, "div", 20)(26, "div", 15)(27, "button", 21);
            i0.ɵɵlistener("click", function BottomPanelReplayComponent_Template_button_click_27_listener() { return ctx.toggleMenu(); });
            i0.ɵɵelement(28, "ap-icon-badge", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(29, BottomPanelReplayComponent_Conditional_29_Template, 5, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(30, BottomPanelReplayComponent_Conditional_30_Template, 20, 18, "div", 23)(31, BottomPanelReplayComponent_Conditional_31_Template, 18, 16, "div", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(32, BottomPanelReplayComponent_Conditional_32_Template, 9, 11, "div", 25);
        } if (rf & 2) {
            i0.ɵɵclassProp("flex", ctx.isDesktop())("flex-col", ctx.isDesktop());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("transform", ctx.buttonsAreaTranslateY());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.spinButtonMode() === "free-spin" || ctx.statusBarMode() === "free-spin" ? 3 : ctx.spinButtonMode() === "auto-spin" ? 4 : ctx.spinButtonMode() === "double-chance" ? 5 : ctx.spinButtonMode() === "free-game" ? 6 : 7);
            i0.ɵɵadvance(6);
            i0.ɵɵstyleProp("gap", ctx.buttonGap());
            i0.ɵɵclassProp("flex-row", ctx.isDesktop())("flex-col", ctx.isMobile());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.buttonIconSize());
            i0.ɵɵproperty("ngClass", ctx.isCampaignDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("hasBadge", ctx.campaignHasBadge())("disabled", ctx.isCampaignDisabled());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.buttonIconSize());
            i0.ɵɵproperty("name", ctx.featureIcon())("ngClass", ctx.isFeatureDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabled", ctx.isFeatureDisabled());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("gap", ctx.centerGroupGap());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.controlIconSize());
            i0.ɵɵproperty("name", "decrease")("ngClass", ctx.isDecreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isDecreaseDisabled());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("width", ctx.centerSpacerWidth());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.controlIconSize());
            i0.ɵɵproperty("name", "increase")("ngClass", ctx.isIncreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isIncreaseDisabled());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("gap", ctx.buttonGap());
            i0.ɵɵclassProp("flex-row", ctx.isDesktop())("flex-col", ctx.isMobile());
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", ctx.buttonIconSize())("height", ctx.buttonIconSize());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.autoButtonMode() === "music-toggle" ? 19 : ctx.autoButtonMode() === "rs-free-game" ? 20 : 21);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.isAutoplayMenuOpen() ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.buttonIconSize());
            i0.ɵɵproperty("name", ctx.turboIcon())("hasBadge", false);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.statusBarMode() !== "auto-spin" ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("font-size", ctx.bottomBarFontSize())("height", ctx.isDesktop() ? ctx.listBottomHeight() : null);
            i0.ɵɵclassProp("shrink-0", ctx.isDesktop())("absolute", ctx.isMobile())("bottom-0", ctx.isMobile())("left-0", ctx.isMobile())("right-0", ctx.isMobile());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isDemoMode())("ngClass", ctx.isDemoMode() ? "cursor-not-allowed opacity-50" : "hover:text-yellow-200 active:text-zinc-400 cursor-pointer");
            i0.ɵɵadvance();
            i0.ɵɵproperty("name", "bar-3")("hasBadge", false)("disabledCoverVariant", "half")("disabled", ctx.isMenuDisabled());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isMenuOpen() ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isDesktop() ? 30 : 31);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showRemainingTurnover() ? 32 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent, ApStatusModeBarComponent, ApButtonFreeSpinsComponent, ApButtonAutoSpinTimesComponent, ApIconBadgeComponent, ApToggleSwitchComponent, DecimalCommaPipe], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomPanelReplayComponent, [{
        type: Component,
        args: [{ selector: 'bottom-panel-replay', standalone: true, imports: [CommonModule, ApIconComponent, ApStatusModeBarComponent, ApButtonFreeSpinsComponent, ApButtonAutoSpinTimesComponent, ApIconBadgeComponent, ApToggleSwitchComponent, DecimalCommaPipe], template: "<div\n  class=\"size-full bg-linear-to-t from-black/90 to-transparent\"\n  [class.flex]=\"isDesktop()\"\n  [class.flex-col]=\"isDesktop()\"\n>\n  <!-- Buttons Area -->\n  <div\n    class=\"relative w-full flex-1 flex items-center px-6\"\n    [style.transform]=\"buttonsAreaTranslateY()\"\n  >\n    <div\n      class=\"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-sticky\"\n    >\n      <!-- Spin Button -->\n      @if (\n        spinButtonMode() === \"free-spin\" || statusBarMode() === \"free-spin\"\n      ) {\n        <ap-button-free-spins [scale]=\"freeSpinScale()\" />\n      } @else if (spinButtonMode() === \"auto-spin\") {\n        <ap-button-auto-spin-times\n          [accentColor]=\"'auto-spin'\"\n          [scale]=\"freeSpinScale()\"\n          [totalSpins]=\"autoSpinTotal() || 0\"\n          [currentSpins]=\"autoSpinRemaining() || 0\"\n          [variant]=\"isAutoSpinInfinity() ? 'infinity' : 'default'\"\n          (buttonClick)=\"clickStopAutoSpin()\"\n        />\n      } @else if (spinButtonMode() === \"double-chance\") {\n        <ap-button-auto-spin-times\n          [accentColor]=\"'auto-spin'\"\n          [scale]=\"freeSpinScale()\"\n        />\n      } @else if (spinButtonMode() === \"free-game\") {\n        <ap-button-auto-spin-times\n          [scale]=\"freeSpinScale()\"\n          [totalSpins]=\"freeGameTotal() || 0\"\n          [currentSpins]=\"freeGameRemaining() || 0\"\n          (buttonClick)=\"clickFreeGameSpin()\"\n        />\n      } @else {\n        <ap-icon-badge\n          [name]=\"spinIcon()\"\n          [ngClass]=\"\n            isSpinDisabled()\n              ? ''\n              : 'cursor-pointer hover:scale-105 transition-transform active:scale-95 animate-spin animate-infinite animate-duration-1500'\n          \"\n          [style.height]=\"spinIconSize()\"\n          [hasBadge]=\"false\"\n          [disabled]=\"isSpinDisabled()\"\n          (click)=\"clickSpin()\"\n        />\n      }\n    </div>\n\n    <!-- All Buttons Row -->\n    <div class=\"relative w-full flex items-center justify-between\">\n      <!-- Left Group -->\n      <div\n        class=\"flex items-center\"\n        [class.flex-row]=\"isDesktop()\"\n        [class.flex-col]=\"isMobile()\"\n        [style.gap]=\"buttonGap()\"\n      >\n        <ap-icon-badge\n          name=\"campaign\"\n          [ngClass]=\"\n            isCampaignDisabled()\n              ? ''\n              : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'\n          \"\n          [style.height]=\"buttonIconSize()\"\n          [hasBadge]=\"campaignHasBadge()\"\n          [disabled]=\"isCampaignDisabled()\"\n          (click)=\"clickCampaign()\"\n        />\n        <ap-icon-badge\n          [name]=\"featureIcon()\"\n          [ngClass]=\"\n            isFeatureDisabled()\n              ? ''\n              : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'\n          \"\n          [style.height]=\"buttonIconSize()\"\n          [disabled]=\"isFeatureDisabled()\"\n          (click)=\"clickFeature()\"\n        />\n      </div>\n\n      <!-- Center Group -->\n      <div\n        class=\"flex items-center bg-zinc-900/80 rounded-xl p-1\"\n        [style.gap]=\"centerGroupGap()\"\n      >\n        <ap-icon-badge\n          [name]=\"'decrease'\"\n          [ngClass]=\"\n            isDecreaseDisabled()\n              ? ''\n              : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'\n          \"\n          [style.height]=\"controlIconSize()\"\n          [disabledCoverVariant]=\"'half'\"\n          [hasBadge]=\"false\"\n          [disabled]=\"isDecreaseDisabled()\"\n          (pointerdown)=\"clickDecreaseBet()\"\n        />\n\n        <div [style.width]=\"centerSpacerWidth()\"></div>\n\n        <ap-icon-badge\n          [name]=\"'increase'\"\n          [ngClass]=\"\n            isIncreaseDisabled()\n              ? ''\n              : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'\n          \"\n          [style.height]=\"controlIconSize()\"\n          [disabledCoverVariant]=\"'half'\"\n          [hasBadge]=\"false\"\n          [disabled]=\"isIncreaseDisabled()\"\n          (pointerdown)=\"clickIncreaseBet()\"\n        />\n      </div>\n\n      <!-- Right Group -->\n      <div\n        class=\"flex items-center\"\n        [class.flex-row]=\"isDesktop()\"\n        [class.flex-col]=\"isMobile()\"\n        [style.gap]=\"buttonGap()\"\n      >\n        <div class=\"relative flex items-center\">\n          <!-- \u53F3\u908A\u7B2C\u4E8C\u500B\u6309\u9215 -->\n          <div\n            class=\"relative shrink-0\"\n            [style.width]=\"buttonIconSize()\"\n            [style.height]=\"buttonIconSize()\"\n          >\n            @if (autoButtonMode() === \"music-toggle\") {\n              <ap-icon-badge\n                class=\"relative size-full cursor-pointer transition-transform hover:scale-105 active:scale-95\"\n                [name]=\"musicAtAutoButtonIcon()\"\n                [style.height]=\"buttonIconSize()\"\n                [hasBadge]=\"false\"\n                (click)=\"toggleMusicAtAutoButton()\"\n              />\n            } @else if (autoButtonMode() === \"rs-free-game\") {\n              <ap-icon\n                [name]=\"'blank'\"\n                class=\"absolute inset-0 w-full h-full text-zinc-100\"\n              />\n              <img\n                [src]=\"rsImgPath()\"\n                alt=\"RS\"\n                class=\"absolute left-1/2 top-1/2 z-10 w-[90%] h-[90%] -translate-x-1/2 -translate-y-1/2 -rotate-6 object-contain pointer-events-none drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]\"\n              />\n            } @else {\n              <ap-icon-badge\n                name=\"autoplay default\"\n                class=\"relative size-full\"\n                [ngClass]=\"\n                  isAutoPlayDisabled()\n                    ? ''\n                    : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'\n                \"\n                [disabled]=\"isAutoPlayDisabled()\"\n                (click)=\"clickAutoplay()\"\n              />\n            }\n          </div>\n          <!-- AutoPlay\u7684\u9078\u55AE -->\n          @if (isAutoplayMenuOpen()) {\n            <div class=\"fixed inset-0\" (click)=\"closeAutoplayMenu()\"></div>\n            <div\n              class=\"absolute left-1/2 -translate-x-1/2 bottom-full mb-2 animate-fade-up animate-once animate-duration-200 z-sticky\"\n            >\n              <div\n                class=\"min-w-26 rounded-2xl border-4 border-zinc-50 bg-zinc-800 outline-3 outline-zinc-900 text-white cursor-pointer\"\n              >\n                @for (option of autoplayOptions; track option.value) {\n                  <div\n                    class=\"flex items-center justify-center py-2 border-b border-zinc-700 last:border-b-0 text-xl font-bold text-white hover:text-yellow-300\"\n                    (click)=\"clickAutoplayOption(option.value)\"\n                  >\n                    @if (option.isInfinity) {\n                      <ap-icon name=\"infinite default\" class=\"size-6.5\" />\n                    } @else {\n                      {{ option.value }}\n                    }\n                  </div>\n                }\n              </div>\n            </div>\n          }\n        </div>\n        <!-- \u53F3\u908A\u7B2C\u4E00\u500B\u6309\u9215 -->\n        <ap-icon-badge\n          class=\"cursor-pointer transition-transform hover:scale-105 active:scale-95\"\n          [name]=\"turboIcon()\"\n          [style.height]=\"buttonIconSize()\"\n          [hasBadge]=\"false\"\n          (click)=\"clickTurbo()\"\n        />\n      </div>\n    </div>\n  </div>\n\n  @if (statusBarMode() !== \"auto-spin\") {\n    <div\n      class=\"absolute top-0 left-1/2 flex items-center justify-center -translate-x-1/2\"\n      [style.top]=\"statusBarGap()\"\n    >\n      <ap-status-mode-bar\n        [mode]=\"statusBarMode()\"\n        [style.height]=\"statusBarHeight()\"\n        [style.width]=\"statusBarWidth()\"\n        [style.fontSize]=\"statusBarFontSize()\"\n      />\n    </div>\n  }\n\n  <!-- Bottom Bar -->\n  <div\n    class=\"flex border-t-[0.15rem] border-zinc-400/50 items-center justify-between pr-4 text-zinc-100 font-semibold bg-black/50\"\n    [class.shrink-0]=\"isDesktop()\"\n    [class.absolute]=\"isMobile()\"\n    [class.bottom-0]=\"isMobile()\"\n    [class.left-0]=\"isMobile()\"\n    [class.right-0]=\"isMobile()\"\n    [style.fontSize]=\"bottomBarFontSize()\"\n    [style.height]=\"isDesktop() ? listBottomHeight() : null\"\n  >\n    <div class=\"relative shrink-0\">\n      <button\n        type=\"button\"\n        [disabled]=\"isDemoMode()\"\n        (click)=\"toggleMenu()\"\n        class=\"flex items-center justify-center w-6 h-6\"\n        [ngClass]=\"\n          isDemoMode()\n            ? 'cursor-not-allowed opacity-50'\n            : 'hover:text-yellow-200 active:text-zinc-400 cursor-pointer'\n        \"\n      >\n        <ap-icon-badge\n          [name]=\"'bar-3'\"\n          class=\"w-full h-full\"\n          [hasBadge]=\"false\"\n          [disabledCoverVariant]=\"'half'\"\n          [disabled]=\"isMenuDisabled()\"\n        />\n      </button>\n      @if (isMenuOpen()) {\n        <div class=\"fixed inset-0\" (click)=\"closeMenu()\"></div>\n        <div\n          class=\"absolute left-0 bottom-full animate-fade-up animate-once animate-duration-200 z-dropdown\"\n          [style.marginBottom]=\"menuOffset()\"\n        >\n          <div\n            class=\"min-w-56 justify-center items-center rounded-t-md border border-zinc-400/50 bg-zinc-900 text-zinc-300 p-2\"\n          >\n            @for (item of menuItems; track item.id) {\n              <div\n                class=\"flex items-center justify-start relative gap-2 px-2 py-2 m-2 cursor-pointer hover:bg-zinc-800 hover:text-yellow-400 active:bg-zinc-700 hover:rounded-lg text-xl font-semibold\"\n                (click)=\"item.action()\"\n              >\n                <ap-icon [name]=\"iconMap()[item.id]\" class=\"size-6\" />\n                <span class=\"flex-1\">{{ item.label }}</span>\n                @if (item.hasToggle) {\n                  <ap-toggle-switch\n                    variant=\"quick\"\n                    [accentColor]=\"'yellow'\"\n                    [checked]=\"toggleMap()[item.id]\"\n                  />\n                }\n              </div>\n            }\n          </div>\n        </div>\n      }\n    </div>\n\n    @if (isDesktop()) {\n      <div class=\"grid flex-1 grid-cols-3 items-center\">\n        <div class=\"flex items-center justify-start space-x-2 ml-2\">\n          <span class=\"text-yellow-400\" [style.fontSize]=\"bottomBarFontSize()\"\n            >{{ getBalanceLabel() }}\n          </span>\n          <div\n            class=\"space-x-1 text-zinc-200 whitespace-nowrap\"\n            [style.fontSize]=\"bottomBarFontSize()\"\n          >\n            @if (isBalanceHided()) {\n              ***\n            } @else {\n              {{ displayCurrency() }}\n              {{ displayBalance() | decimalComma }}\n            }\n          </div>\n        </div>\n\n        <div class=\"flex items-center justify-center gap-2\">\n          <span class=\"text-yellow-400\" [style.fontSize]=\"bottomBarFontSize()\"\n            >{{ getBetLabel() }}\n          </span>\n          <div\n            class=\"inline-block min-w-[4ch] text-left tabular-nums text-zinc-200\"\n            [style.fontSize]=\"bottomBarFontSize()\"\n          >\n            <div class=\"flex space-x-1\">\n              @if (isBetHided()) {\n                ***\n              } @else {\n                {{ displayCurrency() }}\n                {{ displayBet() | decimalComma }}\n              }\n            </div>\n          </div>\n        </div>\n\n        <div class=\"flex items-center justify-center space-x-2\">\n          <span class=\"text-yellow-400\" [style.fontSize]=\"bottomBarFontSize()\"\n            >{{ getWinLabel() }}\n          </span>\n          <div\n            class=\"flex space-x-1 text-zinc-200\"\n            [style.fontSize]=\"bottomBarFontSize()\"\n          >\n            @if (isWinHided()) {\n              ***\n            } @else {\n              <span>\n                @if (displayCurrency() !== null) {\n                  {{ displayCurrency() }}\n                }\n              </span>\n              <span>\n                @if (displayWin() !== null) {\n                  {{ displayWin()! | decimalComma }}\n                }\n              </span>\n            }\n          </div>\n        </div>\n      </div>\n      <!-- Mobile -->\n    } @else {\n      <!-- Balance -->\n      <div class=\"grid flex-1 grid-cols-3\">\n        <div class=\"flex justify-start items-center space-x-1 ml-1\">\n          <ap-icon\n            class=\"text-yellow-400\"\n            [style.height]=\"bottomIconSize()\"\n            [name]=\"statusBarMode() === 'free-bonus' ? 'star' : 'wallet'\"\n          />\n          <div\n            class=\"text-zinc-200 whitespace-nowrap\"\n            [style.fontSize]=\"bottomBarFontSize()\"\n          >\n            @if (isBalanceHided()) {\n              ***\n            } @else {\n              {{ displayCurrency() }}\n              {{ displayBalance() | decimalComma }}\n            }\n          </div>\n        </div>\n\n        <!-- Bet -->\n        <div class=\"flex justify-center\">\n          <div class=\"flex items-center space-x-1\">\n            <ap-icon\n              name=\"prizes\"\n              class=\"text-yellow-400\"\n              [style.height]=\"bottomIconSize()\"\n            />\n            <div class=\"text-zinc-200\" [style.fontSize]=\"bottomBarFontSize()\">\n              @if (isBetHided()) {\n                ***\n              } @else {\n                {{ displayCurrency() }}\n                {{ displayBet() | decimalComma }}\n              }\n            </div>\n          </div>\n        </div>\n\n        <!-- Win -->\n        <div class=\"flex justify-center\">\n          <div class=\"flex items-center space-x-1\">\n            <ap-icon\n              name=\"trophy\"\n              class=\"text-yellow-400\"\n              [style.height]=\"bottomIconSize()\"\n            />\n            <div class=\"text-zinc-200\" [style.fontSize]=\"bottomBarFontSize()\">\n              @if (isWinHided()) {\n                ***\n              } @else if (displayWin() !== null) {\n                <span>{{ displayCurrency() }}</span>\n                <span>{{ displayWin()! | decimalComma }}</span>\n              }\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n\n@if (showRemainingTurnover()) {\n  <div\n    class=\"fixed left-0 right-0 px-2 text-zinc-300 bg-gradient-to-r from-black/50 via-zinc-800/0 to-black/50 inline-flex z-sticky\"\n    [style.bottom]=\"listBottomHeight()\"\n    [style.fontSize]=\"bottomBarFontSize()\"\n  >\n    <div class=\"flex item-between space-between justify-between w-full\">\n      <div class=\"whitespace-nowrap leading-tight py-0.5\">\n        {{ getRemainingTurnoverLabel() }}:{{ displayCurrency()\n        }}{{ displayRemainingTurnover()! | decimalComma }}\n      </div>\n      <div class=\"flex items-center justify-center space-x-1\">\n        <ap-icon name=\"clock\" [style.height]=\"bottomHintIconSize()\" />\n        <div class=\"whitespace-nowrap leading-tight py-0.5\">\n          2026-05-10 23:59:59\n        </div>\n      </div>\n    </div>\n  </div>\n}\n", styles: [":host {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BottomPanelReplayComponent, { className: "BottomPanelReplayComponent", filePath: "src/app/pages/bottom-panel-replay/bottom-panel-replay.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=bottom-panel-replay.component.js.map