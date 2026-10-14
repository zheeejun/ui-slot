import { Component, computed, inject, signal } from '@angular/core';
import { CampaignCtrlService } from '../../services/campaign-ctrl/campaign-ctrl.service';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { CommonModule, DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CampaignDebugPanelComponent_Conditional_14_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "spinBet: ");
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "spinCount: ");
    i0.ɵɵelementStart(6, "span", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(c_r1.spinBet);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(c_r1.spinCount);
} }
function CampaignDebugPanelComponent_Conditional_14_Conditional_57_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("betCount: ", c_r1.condition.betCount.current, " / ", c_r1.condition.betCount.target);
} }
function CampaignDebugPanelComponent_Conditional_14_Conditional_57_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("turnover: ", c_r1.condition.turnover.current, " / ", c_r1.condition.turnover.target);
} }
function CampaignDebugPanelComponent_Conditional_14_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, "condition:");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(2, CampaignDebugPanelComponent_Conditional_14_Conditional_57_Conditional_2_Template, 2, 2, "span", 15);
    i0.ɵɵconditionalCreate(3, CampaignDebugPanelComponent_Conditional_14_Conditional_57_Conditional_3_Template, 2, 2, "span", 15);
} if (rf & 2) {
    const c_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(c_r1.condition.betCount ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(c_r1.condition.turnover ? 3 : -1);
} }
function CampaignDebugPanelComponent_Conditional_14_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, "withdrawal:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 15);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 15);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 15);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("turnover: ", c_r1.withdrawal.turnover, " / ", c_r1.withdrawal.turnoverThreshold);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("balance threshold: ", c_r1.withdrawal.balanceThreshold);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("limit: ", c_r1.withdrawal.limit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("amount: ", c_r1.withdrawal.amount);
} }
function CampaignDebugPanelComponent_Conditional_14_Conditional_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr", 3);
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵtext(2, "Current Campaign Group:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "id: ");
    i0.ɵɵelementStart(5, "span", 11);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "title: ");
    i0.ɵɵelementStart(9, "span", 11);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "description: ");
    i0.ɵɵelementStart(13, "span", 11);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16, "endTime: ");
    i0.ɵɵelementStart(17, "span", 11);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(20, "img", 16);
} if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((tmp_3_0 = ctx_r1.selectedGroup()) == null ? null : tmp_3_0.id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_4_0 = ctx_r1.selectedGroup()) == null ? null : tmp_4_0.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_5_0 = ctx_r1.selectedGroup()) == null ? null : tmp_5_0.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(19, 5, (tmp_6_0 = ctx_r1.selectedGroup()) == null ? null : tmp_6_0.endTime, "yyyy-MM-dd HH:mm:ss"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", (tmp_7_0 = ctx_r1.selectedGroup()) == null ? null : tmp_7_0.image, i0.ɵɵsanitizeUrl);
} }
function CampaignDebugPanelComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "span", 10);
    i0.ɵɵtext(2, "Current Campaign:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "id: ");
    i0.ɵɵelementStart(5, "span", 11);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "name: ");
    i0.ɵɵelementStart(9, "span", 11);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "type: ");
    i0.ɵɵelementStart(13, "span", 12);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16, "status: ");
    i0.ɵɵelementStart(17, "span", 12);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "displayType: ");
    i0.ɵɵelementStart(21, "span", 11);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24, "balance: ");
    i0.ɵɵelementStart(25, "span", 13);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28, "totalAmount: ");
    i0.ɵɵelementStart(29, "span", 11);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "span");
    i0.ɵɵtext(32, "progress: ");
    i0.ɵɵelementStart(33, "span", 11);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "span");
    i0.ɵɵtext(36, "isChallenge: ");
    i0.ɵɵelementStart(37, "span", 11);
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(39, "hr", 3);
    i0.ɵɵelementStart(40, "span");
    i0.ɵɵtext(41, "beginTime: ");
    i0.ɵɵelementStart(42, "span", 11);
    i0.ɵɵtext(43);
    i0.ɵɵpipe(44, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "span");
    i0.ɵɵtext(46, "endTime: ");
    i0.ɵɵelementStart(47, "span", 11);
    i0.ɵɵtext(48);
    i0.ɵɵpipe(49, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "span");
    i0.ɵɵtext(51, "lastBetTime: ");
    i0.ɵɵelementStart(52, "span", 11);
    i0.ɵɵtext(53);
    i0.ɵɵpipe(54, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(55, "hr", 3);
    i0.ɵɵconditionalCreate(56, CampaignDebugPanelComponent_Conditional_14_Conditional_56_Template, 8, 2);
    i0.ɵɵconditionalCreate(57, CampaignDebugPanelComponent_Conditional_14_Conditional_57_Template, 4, 2);
    i0.ɵɵconditionalCreate(58, CampaignDebugPanelComponent_Conditional_14_Conditional_58_Template, 10, 5);
    i0.ɵɵconditionalCreate(59, CampaignDebugPanelComponent_Conditional_14_Conditional_59_Template, 21, 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(c_r1.id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(c_r1.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(c_r1.type);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(c_r1.status);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(c_r1.displayType);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(c_r1.balance);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(c_r1.totalAmount);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate3("", c_r1.progressCurrent, " / ", c_r1.progressTotal, " (rem: ", c_r1.progressRemaining, ")");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(c_r1.isChallenge);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(44, 18, c_r1.beginTime, "yyyy-MM-dd HH:mm:ss"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(49, 21, c_r1.endTime, "yyyy-MM-dd HH:mm:ss"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(54, 24, c_r1.lastBetTime, "yyyy-MM-dd HH:mm:ss"));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(c_r1.type === "freeSpins" ? 56 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(c_r1.condition ? 57 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(c_r1.withdrawal ? 58 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.selectedGroup() ? 59 : -1);
} }
function CampaignDebugPanelComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1, "(no campaign selected)");
    i0.ɵɵelementEnd();
} }
export class CampaignDebugPanelComponent {
    ctrl = inject(CampaignCtrlService);
    currentCampaignId = computed(() => this.ctrl.currentCampaign()?.id || '');
    /** 下拉選單：從現有 campaignList 產生 */
    campaignOptions = computed(() => [
        { label: '(none)', value: '' },
        ...this.ctrl.campaignList().map(c => ({
            label: `[${c.type}] ${c.name}, ${c.status}`,
            value: c.id
        }))
    ]);
    /** 目前選取的 ID（用於下拉顯示） */
    selectedCampaignId = signal('');
    selectedGroup = computed(() => {
        const current = this.ctrl.currentCampaign();
        if (!current || !current.groupId)
            return null;
        return this.ctrl.campaignGroupList().find(g => g.id === current.groupId) || null;
    });
    onSelectCampaign(id) {
        this.selectedCampaignId.set(id);
        this.ctrl.setCurrentId(id.length > 0 ? id : null);
    }
    onCleanClickedGroups() {
        this.ctrl.cleanClickedGroups();
    }
    static ɵfac = function CampaignDebugPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CampaignDebugPanelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CampaignDebugPanelComponent, selectors: [["campaign-debug-panel"]], decls: 21, vars: 5, consts: [[1, "relative", "w-xs", "top-5", "right-0", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl", "text-sm"], [1, "font-bold", "text-yellow-300"], [1, "flex", "flex-col", "gap-0.5", "text-xs", "text-gray-300"], [1, "border-white/30"], [1, "flex", "flex-col", "gap-1"], [1, "text-xs", "text-gray-400"], [3, "onSelect", "options", "selected"], [1, "flex", "flex-col", "gap-0.5", "text-xs"], [1, "text-xs", "text-gray-500"], [1, "p-1", "text-xs", "bg-red-500", "rounded", "hover:bg-red-600", 3, "click"], [1, "text-gray-400", "font-semibold"], [1, "text-white"], [1, "text-yellow-300"], [1, "text-green-300"], [1, "text-gray-400", "mt-0.5"], [1, "pl-2"], ["alt", "Campaign Group Banner", 1, "w-full", "rounded", 3, "src"]], template: function CampaignDebugPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtext(2, "Campaign Debug");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(8, "hr", 3);
            i0.ɵɵelementStart(9, "div", 4)(10, "span", 5);
            i0.ɵɵtext(11, "Select Current Campaign");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "ap-select", 6);
            i0.ɵɵlistener("onSelect", function CampaignDebugPanelComponent_Template_ap_select_onSelect_12_listener($event) { return ctx.onSelectCampaign($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(13, "hr", 3);
            i0.ɵɵconditionalCreate(14, CampaignDebugPanelComponent_Conditional_14_Template, 60, 27, "div", 7)(15, CampaignDebugPanelComponent_Conditional_15_Template, 2, 0, "span", 8);
            i0.ɵɵelement(16, "hr", 3);
            i0.ɵɵelementStart(17, "div", 4)(18, "button", 9);
            i0.ɵɵlistener("click", function CampaignDebugPanelComponent_Template_button_click_18_listener() { return ctx.onCleanClickedGroups(); });
            i0.ɵɵtext(19, "Clean Clicked Groups");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(20, "hr", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("showTab: ", ctx.ctrl.showTab());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("campaignList: ", ctx.ctrl.campaignList().length);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.campaignOptions())("selected", ctx.currentCampaignId());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_4_0 = ctx.ctrl.currentCampaign()) ? 14 : 15, tmp_4_0);
        } }, dependencies: [CommonModule, i1.DatePipe, ApSelectComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CampaignDebugPanelComponent, [{
        type: Component,
        args: [{ selector: 'campaign-debug-panel', imports: [CommonModule, ApSelectComponent, DatePipe], template: "<div class=\"relative w-xs top-5 right-0 flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl text-sm\">\n  <div class=\"font-bold text-yellow-300\">Campaign Debug</div>\n\n  <!-- \u76EE\u524D\u72C0\u614B -->\n  <div class=\"flex flex-col gap-0.5 text-xs text-gray-300\">\n    <span>showTab: {{ ctrl.showTab() }}</span>\n    <span>campaignList: {{ ctrl.campaignList().length }}</span>\n  </div>\n\n  <hr class=\"border-white/30\" />\n\n  <!-- \u9078\u64C7 Campaign -->\n  <div class=\"flex flex-col gap-1\">\n    <span class=\"text-xs text-gray-400\">Select Current Campaign</span>\n    <ap-select [options]=\"campaignOptions()\" [selected]=\"currentCampaignId()\" (onSelect)=\"onSelectCampaign($event)\" />\n  </div>\n\n  \n\n  <!-- Campaign \u6E05\u55AE\u9810\u89BD \n  @if (ctrl.campaignList().length > 0) {\n    <hr class=\"border-white/30\" />\n    <div class=\"flex flex-col gap-0.5 text-xs\">\n      <span class=\"text-gray-400\">Campaign List:</span>\n      @for (c of ctrl.campaignList(); track c.id) {\n        <div\n          class=\"flex justify-between px-1 rounded\"\n          [class.bg-yellow-600]=\"c.id === currentCampaignId()\"\n        >\n          <span>{{ c.name }}</span>\n          <span class=\"text-gray-400\">{{ c.status }}</span>\n        </div>\n      }\n    </div>\n  }-->\n\n  <hr class=\"border-white/30\" />\n\n  <!-- \u986F\u793AcurrentCampaign\u7684\u72C0\u614B -->\n  @if (ctrl.currentCampaign(); as c) {\n    <div class=\"flex flex-col gap-0.5 text-xs\">\n      <span class=\"text-gray-400 font-semibold\">Current Campaign:</span>\n      <span>id: <span class=\"text-white\">{{ c.id }}</span></span>\n      <span>name: <span class=\"text-white\">{{ c.name }}</span></span>\n      <span>type: <span class=\"text-yellow-300\">{{ c.type }}</span></span>\n      <span>status: <span class=\"text-yellow-300\">{{ c.status }}</span></span>\n      <span>displayType: <span class=\"text-white\">{{ c.displayType }}</span></span>\n      <span>balance: <span class=\"text-green-300\">{{ c.balance }}</span></span>\n      <span>totalAmount: <span class=\"text-white\">{{ c.totalAmount }}</span></span>\n      <span>progress: <span class=\"text-white\">{{ c.progressCurrent }} / {{ c.progressTotal }} (rem: {{ c.progressRemaining }})</span></span>\n      <span>isChallenge: <span class=\"text-white\">{{ c.isChallenge }}</span></span>\n      <!-- campaign time details -->\n      <hr class=\"border-white/30\" />\n      <span>beginTime: <span class=\"text-white\">{{ c.beginTime| date:'yyyy-MM-dd HH:mm:ss' }}</span></span>\n      <span>endTime: <span class=\"text-white\">{{ c.endTime| date:'yyyy-MM-dd HH:mm:ss' }}</span></span>\n      <span>lastBetTime: <span class=\"text-white\">{{ c.lastBetTime| date:'yyyy-MM-dd HH:mm:ss' }}</span></span>\n      <hr class=\"border-white/30\" />\n      @if (c.type === 'freeSpins') {\n        <span>spinBet: <span class=\"text-white\">{{ c.spinBet }}</span></span>\n        <span>spinCount: <span class=\"text-white\">{{ c.spinCount }}</span></span>\n      }\n      @if (c.condition) {\n        <span class=\"text-gray-400 mt-0.5\">condition:</span>\n        @if (c.condition.betCount) {\n          <span class=\"pl-2\">betCount: {{ c.condition.betCount.current }} / {{ c.condition.betCount.target }}</span>\n        }\n        @if (c.condition.turnover) {\n          <span class=\"pl-2\">turnover: {{ c.condition.turnover.current }} / {{ c.condition.turnover.target }}</span>\n        }\n      }\n      @if (c.withdrawal) {\n        <span class=\"text-gray-400 mt-0.5\">withdrawal:</span>\n        <span class=\"pl-2\">turnover: {{ c.withdrawal.turnover }} / {{ c.withdrawal.turnoverThreshold }}</span>\n        <span class=\"pl-2\">balance threshold: {{ c.withdrawal.balanceThreshold }}</span>\n        <span class=\"pl-2\">limit: {{ c.withdrawal.limit }}</span>\n        <span class=\"pl-2\">amount: {{ c.withdrawal.amount }}</span>\n      }\n      @if (selectedGroup()) {\n        <!-- campaign group details -->\n        <hr class=\"border-white/30\" />\n        <span class=\"text-gray-400 font-semibold\">Current Campaign Group:</span>\n        <span>id: <span class=\"text-white\">{{ selectedGroup()?.id }}</span></span>\n        <span>title: <span class=\"text-white\">{{ selectedGroup()?.title }}</span></span>\n        <span>description: <span class=\"text-white\">{{ selectedGroup()?.description }}</span></span>\n        <span>endTime: <span class=\"text-white\">{{ selectedGroup()?.endTime | date:'yyyy-MM-dd HH:mm:ss' }}</span></span>\n        <!-- Banner Image-->\n        <img [src]=\"selectedGroup()?.image\" alt=\"Campaign Group Banner\" class=\"w-full rounded\" />\n      }\n    </div>\n  } @else {\n    <span class=\"text-xs text-gray-500\">(no campaign selected)</span>\n  }\n\n  <hr class=\"border-white/30\" />\n\n  <div class=\"flex flex-col gap-1\">\n    <button (click)=\"onCleanClickedGroups()\" class=\"p-1 text-xs bg-red-500 rounded hover:bg-red-600\">Clean Clicked Groups</button>\n  </div>\n\n  <hr class=\"border-white/30\" />\n</div>\n\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CampaignDebugPanelComponent, { className: "CampaignDebugPanelComponent", filePath: "src/app/pages/campaign-debug-panel/campaign-debug-panel.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=campaign-debug-panel.component.js.map