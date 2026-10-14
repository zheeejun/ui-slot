import { Component, signal } from '@angular/core';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { CommonModule } from '@angular/common';
import { SlotReelSettingComponent } from "../../pages/slot-reel-setting/slot-reel-setting.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { TrnDebugPanelComponent } from "../../pages/trn-debug-panel/trn-debug-panel.component";
import { RouterModule } from "@angular/router";
import { BottomPanelDebugComponent } from "../../pages/bottom-panel-debug/bottom-panel-debug.component";
import { LogDebugPanelComponent } from "../../pages/log-debug-panel/log-debug-panel.component";
import { MiscDebugPanelComponent } from "../../pages/misc-debug-panel/misc-debug-panel.component";
import { HistoryDebugPanelComponent } from "../../pages/history-debug-panel/history-debug-panel.component";
import { CampaignDebugPanelComponent } from "../../pages/campaign-debug-panel/campaign-debug-panel.component";
import * as i0 from "@angular/core";
import * as i1 from "../../services/logger/logger.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
const _c0 = a0 => ({ "pr-64": a0 });
const _c1 = a0 => ({ "mr-0": a0 });
const _forTrack0 = ($index, $item) => $item.label;
function LabLayoutComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "slot-reel-setting", 3);
} }
function LabLayoutComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "trn-debug-panel", 3);
} }
function LabLayoutComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bottom-panel-debug", 3);
} }
function LabLayoutComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "log-debug-panel", 3);
} }
function LabLayoutComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "misc-debug-panel", 3);
} }
function LabLayoutComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "history-debug-panel", 3);
} }
function LabLayoutComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "campaign-debug-panel", 3);
} }
function LabLayoutComponent_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-toggle-switch", 7);
    i0.ɵɵlistener("checkedChange", function LabLayoutComponent_For_13_Template_ap_toggle_switch_checkedChange_0_listener($event) { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; return i0.ɵɵresetView(item_r2.signal.set($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", item_r2.label)("checked", item_r2.signal());
} }
export class LabLayoutComponent {
    logger;
    showMenu = signal(false);
    showSlotSettings = signal(false);
    showTrnDebug = signal(false);
    showPanelDebug = signal(false);
    showLogDebug = signal(false);
    showMiscDebug = signal(false);
    showHistoryDebug = signal(false);
    showCampaignDebug = signal(false);
    toggleList = [];
    constructor(logger) {
        this.logger = logger;
        this.toggleList = [
            { label: 'Panel Debug', signal: this.showPanelDebug },
            { label: 'Campaign Debug', signal: this.showCampaignDebug },
            { label: 'Tournament Debug', signal: this.showTrnDebug },
            { label: 'Misc Debug', signal: this.showMiscDebug },
            { label: 'Log Debug', signal: this.showLogDebug },
            { label: 'History Debug', signal: this.showHistoryDebug },
            { label: 'Slot Reel Setting', signal: this.showSlotSettings },
        ];
    }
    toggleSideMenu() {
        this.showMenu.set(!this.showMenu());
    }
    static ɵfac = function LabLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LabLayoutComponent)(i0.ɵɵdirectiveInject(i1.LoggerService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LabLayoutComponent, selectors: [["lab-layout"]], decls: 15, vars: 13, consts: [[1, "absolute", "inset-0", "duration-300", 3, "ngClass"], [1, "relative", "size-full"], [1, "absolute", "top-7", "right-2"], [1, "relative", "z-overlay"], [1, "absolute", "flex", "flex-col", "gap-2", "p-2", "pt-10", "right-0", "w-64", "h-full", "-mr-64", "duration-300", 3, "ngClass"], ["fitMode", "container", 3, "label", "checked"], ["name", "bar-3", 1, "absolute", "size-8", "top-0", "right-0", "text-zinc-300/50", "hover:text-zinc-200", "active:scale-95", "transition-all", "duration-200", 3, "click"], ["fitMode", "container", 3, "checkedChange", "label", "checked"]], template: function LabLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "router-outlet");
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵconditionalCreate(4, LabLayoutComponent_Conditional_4_Template, 1, 0, "slot-reel-setting", 3);
            i0.ɵɵconditionalCreate(5, LabLayoutComponent_Conditional_5_Template, 1, 0, "trn-debug-panel", 3);
            i0.ɵɵconditionalCreate(6, LabLayoutComponent_Conditional_6_Template, 1, 0, "bottom-panel-debug", 3);
            i0.ɵɵconditionalCreate(7, LabLayoutComponent_Conditional_7_Template, 1, 0, "log-debug-panel", 3);
            i0.ɵɵconditionalCreate(8, LabLayoutComponent_Conditional_8_Template, 1, 0, "misc-debug-panel", 3);
            i0.ɵɵconditionalCreate(9, LabLayoutComponent_Conditional_9_Template, 1, 0, "history-debug-panel", 3);
            i0.ɵɵconditionalCreate(10, LabLayoutComponent_Conditional_10_Template, 1, 0, "campaign-debug-panel", 3);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 4);
            i0.ɵɵrepeaterCreate(12, LabLayoutComponent_For_13_Template, 1, 2, "ap-toggle-switch", 5, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "ap-icon", 6);
            i0.ɵɵlistener("click", function LabLayoutComponent_Template_ap_icon_click_14_listener() { return ctx.toggleSideMenu(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ctx.showMenu()));
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.showSlotSettings() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showTrnDebug() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showPanelDebug() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showLogDebug() ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showMiscDebug() ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showHistoryDebug() ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showCampaignDebug() ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c1, ctx.showMenu()));
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.toggleList);
        } }, dependencies: [CommonModule, i2.NgClass, ApIconComponent, SlotReelSettingComponent, ApToggleSwitchComponent, TrnDebugPanelComponent, RouterModule, i3.RouterOutlet, BottomPanelDebugComponent, LogDebugPanelComponent, MiscDebugPanelComponent, HistoryDebugPanelComponent, CampaignDebugPanelComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LabLayoutComponent, [{
        type: Component,
        args: [{ selector: 'lab-layout', imports: [CommonModule, ApIconComponent, SlotReelSettingComponent, ApToggleSwitchComponent, TrnDebugPanelComponent, RouterModule, BottomPanelDebugComponent, LogDebugPanelComponent, MiscDebugPanelComponent, HistoryDebugPanelComponent, CampaignDebugPanelComponent], template: "\n<!-- Main Content -->\n<div class=\"absolute inset-0 duration-300\"\n  [ngClass]=\"{ 'pr-64': showMenu() }\"\n>\n  <div class=\"relative size-full\">\n    <router-outlet></router-outlet>\n    <div class=\"absolute top-7 right-2\">\n      @if (showSlotSettings()) {<slot-reel-setting class=\"relative z-overlay\"/>}\n      @if (showTrnDebug()) {<trn-debug-panel class=\"relative z-overlay\"/>}\n      @if (showPanelDebug()) {<bottom-panel-debug class=\"relative z-overlay\"/>}\n      @if (showLogDebug()) {<log-debug-panel class=\"relative z-overlay\"/>}\n      @if (showMiscDebug()) {<misc-debug-panel class=\"relative z-overlay\"/>}\n      @if (showHistoryDebug()) {<history-debug-panel class=\"relative z-overlay\"/>}\n      @if (showCampaignDebug()) {<campaign-debug-panel class=\"relative z-overlay\"/>}\n    </div>\n  </div>\n</div>\n\n<!-- Side Menu -->\n<div class=\"absolute flex flex-col gap-2 p-2 pt-10 right-0 w-64 h-full -mr-64 duration-300\" \n  [ngClass]=\"{ 'mr-0': showMenu() }\"\n>\n  @for (item of toggleList; track item.label) {\n    <ap-toggle-switch\n      fitMode=\"container\"\n      [label]=\"item.label\"\n      [checked]=\"item.signal()\" \n      (checkedChange)=\"item.signal.set($event)\"\n    />\n  }\n</div>\n\n<!-- Toggle Button -->\n<ap-icon name=\"bar-3\" class=\"absolute size-8 top-0 right-0 text-zinc-300/50 hover:text-zinc-200 active:scale-95 transition-all duration-200\" \n  (click)=\"toggleSideMenu()\"\n/>\n" }]
    }], () => [{ type: i1.LoggerService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LabLayoutComponent, { className: "LabLayoutComponent", filePath: "src/app/layouts/lab-layout/lab-layout.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=lab-layout.component.js.map