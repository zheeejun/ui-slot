import { Component, ViewChild, computed, inject, signal, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApInfoPayTableSymbolComponent, } from '../../components/ap-info-pay-table-symbol/ap-info-pay-table-symbol.component';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { tableData, symbolsListItems, paylineListItems, payline1, payline2, payline3, payline4, payline5, } from './info-pay-table.data';
import { ApInfoPayTablePaylineComponent } from '../../components/ap-info-pay-table-payline/ap-info-pay-table-payline.component';
import { InfoCtrlService } from '../../services/info-ctrl/info-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["contentScroller"];
const _c1 = (a0, a1, a2) => ({ "justify-start text-left": a0, "justify-center text-center": a1, "justify-end text-right": a2 });
const _c2 = (a0, a1, a2) => ({ "text-left": a0, "text-center": a1, "text-right": a2 });
function InfoPayTableComponent_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-info-pay-table-symbol", 10);
} if (rf & 2) {
    const symbolImage_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("symbolHeader", ctx_r2.symbolHeader())("paylineHeader", ctx_r2.paylineHeader())("symbolImage", symbolImage_r2)("tableData", ctx_r2.tableData);
} }
function InfoPayTableComponent_For_15_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c1, entry_r4.position === "left", entry_r4.position === "center", entry_r4.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", entry_r4.content, " ");
} }
function InfoPayTableComponent_For_15_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c2, entry_r4.position === "left", entry_r4.position === "center", entry_r4.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", entry_r4.content, " ");
} }
function InfoPayTableComponent_For_15_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "img", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(3, _c2, entry_r4.position === "left", entry_r4.position === "center", entry_r4.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.info.getImageUrl(entry_r4.content), i0.ɵɵsanitizeUrl)("alt", entry_r4.content);
} }
function InfoPayTableComponent_For_15_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "ul", 20)(2, "li");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const entry_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c2, entry_r4.position === "left", entry_r4.position === "center", entry_r4.position === "right"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r4.content);
} }
function InfoPayTableComponent_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, InfoPayTableComponent_For_15_Case_0_Template, 2, 6, "div", 15)(1, InfoPayTableComponent_For_15_Case_1_Template, 2, 6, "div", 16)(2, InfoPayTableComponent_For_15_Case_2_Template, 2, 7, "div", 17)(3, InfoPayTableComponent_For_15_Case_3_Template, 4, 6, "div", 18);
} if (rf & 2) {
    let tmp_11_0;
    const entry_r4 = ctx.$implicit;
    i0.ɵɵconditional((tmp_11_0 = entry_r4.category) === "title" ? 0 : tmp_11_0 === "subtitle" ? 1 : tmp_11_0 === "image" ? 2 : tmp_11_0 === "content" ? 3 : -1);
} }
function InfoPayTableComponent_For_45_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c1, entry_r5.position === "left", entry_r5.position === "center", entry_r5.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", entry_r5.content, " ");
} }
function InfoPayTableComponent_For_45_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c2, entry_r5.position === "left", entry_r5.position === "center", entry_r5.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", entry_r5.content, " ");
} }
function InfoPayTableComponent_For_45_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "img", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(3, _c2, entry_r5.position === "left", entry_r5.position === "center", entry_r5.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.info.getImageUrl(entry_r5.content), i0.ɵɵsanitizeUrl)("alt", entry_r5.content);
} }
function InfoPayTableComponent_For_45_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "ul", 20)(2, "li");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const entry_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c2, entry_r5.position === "left", entry_r5.position === "center", entry_r5.position === "right"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r5.content);
} }
function InfoPayTableComponent_For_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, InfoPayTableComponent_For_45_Case_0_Template, 2, 6, "div", 15)(1, InfoPayTableComponent_For_45_Case_1_Template, 2, 6, "div", 16)(2, InfoPayTableComponent_For_45_Case_2_Template, 2, 7, "div", 17)(3, InfoPayTableComponent_For_45_Case_3_Template, 4, 6, "div", 18);
} if (rf & 2) {
    let tmp_11_0;
    const entry_r5 = ctx.$implicit;
    i0.ɵɵconditional((tmp_11_0 = entry_r5.category) === "title" ? 0 : tmp_11_0 === "subtitle" ? 1 : tmp_11_0 === "image" ? 2 : tmp_11_0 === "content" ? 3 : -1);
} }
export class InfoPayTableComponent {
    login = inject(LoginCtrlService);
    contentScroller;
    api = inject(AppInterfaceService);
    info = inject(InfoCtrlService);
    appI18n = inject(AppI18nService);
    symbolLabel = this.appI18n.computed('history_symbol', 'Symbols');
    paylineLabel = this.appI18n.computed('history_line', 'Paylines');
    paylineHeader = this.appI18n.computed('history_line', 'Paylines');
    symbolHeader = this.appI18n.computed('history_symbol', 'Symbols');
    selectedTab = signal('SYMBOLS');
    isDragging = signal(false);
    dragStartY = 0;
    dragStartScrollTop = 0;
    tabs = computed(() => [
        { id: 'SYMBOLS', label: this.symbolLabel() },
        { id: 'PAYLINES', label: this.paylineLabel() },
    ]);
    tableData = tableData;
    symbolsListItems = computed(() => symbolsListItems.map((item) => this.appI18n.instant(item, item)));
    paylineListItems = computed(() => paylineListItems.map((item) => this.appI18n.instant(item, item)));
    symbolCodes = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'];
    symbolImages = computed(() => this.symbolCodes.map((symbol) => this.api.getSymbolTexture(symbol) || 'assets/images/info/default.png'));
    payline1 = payline1;
    payline2 = payline2;
    payline3 = payline3;
    payline4 = payline4;
    payline5 = payline5;
    ngOnInit() {
    }
    onCellClick(cell) {
    }
    onDragStart(event) {
        const scroller = this.contentScroller?.nativeElement;
        if (!scroller)
            return;
        this.isDragging.set(true);
        this.dragStartY = event.clientY;
        this.dragStartScrollTop = scroller.scrollTop;
    }
    onDragMove(event) {
        const scroller = this.contentScroller?.nativeElement;
        if (!scroller || !this.isDragging())
            return;
        const deltaY = event.clientY - this.dragStartY;
        scroller.scrollTop = this.dragStartScrollTop - deltaY;
    }
    onDragEnd() {
        this.isDragging.set(false);
    }
    selectTab(tabId) {
        if (tabId === 'SYMBOLS' || tabId === 'PAYLINES') {
            this.selectedTab.set(tabId);
            this.scrollToSection(tabId);
        }
    }
    scrollToSection(tabId) {
        const sectionId = tabId === 'SYMBOLS' ? 'symbols-section' : 'paylines-section';
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    static ɵfac = function InfoPayTableComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InfoPayTableComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoPayTableComponent, selectors: [["info-pay-table"]], viewQuery: function InfoPayTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentScroller = _t.first);
        } }, decls: 46, vars: 64, consts: [["contentScroller", ""], [1, "flex", "h-full", "max-h-full", "flex-col", "overflow-y-auto", "bg-zinc-900", "p-0", "pb-4", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "sticky", "z-sticky", "top-0", "bg-zinc-900", "px-4", "pt-6", "shrink-0"], [3, "tabChange", "tabs", "selectedTab"], ["id", "symbols-section", 1, "w-full", "max-w-3xl", "mx-auto", "flex", "flex-col", "items-center", "gap-6", "px-4", "select-none"], [1, "flex", "flex-col", "justify-center", "items-center", "w-full", "text-center"], [1, "flex", "flex-col", "items-center", "w-full"], [1, "text-yellow-200"], [1, "h-px", "w-full", "divider-gradient-yellow"], [1, "flex", "flex-wrap", "justify-center", "gap-8", "w-full"], [3, "symbolHeader", "paylineHeader", "symbolImage", "tableData"], [1, "w-full", "flex", "flex-col", "mt-4"], ["id", "paylines-section", 1, "w-full", "max-w-3xl", "mx-auto", "flex", "flex-col", "items-center", "gap-6", "px-4", "mt-16"], [1, "flex", "flex-wrap", "justify-center", "sm:gap-6", "gap-8", "w-full"], [3, "cellClick", "paylineNumber", "activeCells", "clickable"], [1, "w-full", "text-2xl", "font-semibold", "text-yellow-200", "mt-4", 3, "ngClass"], [1, "w-full", "font-semibold", "text-white", "mt-2", 3, "ngClass"], [1, "w-full", "mt-4", 3, "ngClass"], [1, "w-full", "flex", 3, "ngClass"], [1, "inline-block", "object-contain", 3, "src", "alt"], [1, "text-white", "leading-relaxed", "max-w-3xl", "space-y-2"]], template: function InfoPayTableComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1, 0);
            i0.ɵɵlistener("mousedown", function InfoPayTableComponent_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragStart($event)); })("mousemove", function InfoPayTableComponent_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragMove($event)); })("mouseup", function InfoPayTableComponent_Template_div_mouseup_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragEnd()); })("mouseleave", function InfoPayTableComponent_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragEnd()); });
            i0.ɵɵelementStart(2, "div", 2)(3, "ap-ui-tab-group", 3);
            i0.ɵɵlistener("tabChange", function InfoPayTableComponent_Template_ap_ui_tab_group_tabChange_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.selectTab($event)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "div", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 9);
            i0.ɵɵrepeaterCreate(11, InfoPayTableComponent_For_12_Template, 1, 4, "ap-info-pay-table-symbol", 10, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 11);
            i0.ɵɵrepeaterCreate(14, InfoPayTableComponent_For_15_Template, 4, 1, null, null, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 12)(17, "div", 5)(18, "div", 6)(19, "h2", 7);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "div", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 13)(23, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_23_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_24_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_25_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_26_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_27_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_28_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_29_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_30_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_31_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_32_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_33_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_34_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_35_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_36_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_37_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_38_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_39_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_40_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_41_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "ap-info-pay-table-payline", 14);
            i0.ɵɵlistener("cellClick", function InfoPayTableComponent_Template_ap_info_pay_table_payline_cellClick_42_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCellClick($event)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "div", 11);
            i0.ɵɵrepeaterCreate(44, InfoPayTableComponent_For_45_Template, 4, 1, null, null, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("tabs", ctx.tabs())("selectedTab", ctx.selectedTab());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.symbolLabel());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.symbolImages());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.info.paytableEntries());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.paylineLabel());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("paylineNumber", 1)("activeCells", ctx.payline1)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 2)("activeCells", ctx.payline2)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 3)("activeCells", ctx.payline3)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 4)("activeCells", ctx.payline4)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 5)("activeCells", ctx.payline5)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 6)("activeCells", ctx.payline5)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 7)("activeCells", ctx.payline2)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 8)("activeCells", ctx.payline4)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 9)("activeCells", ctx.payline1)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 10)("activeCells", ctx.payline3)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 11)("activeCells", ctx.payline4)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 12)("activeCells", ctx.payline5)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 13)("activeCells", ctx.payline3)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 14)("activeCells", ctx.payline1)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 15)("activeCells", ctx.payline2)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 16)("activeCells", ctx.payline1)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 17)("activeCells", ctx.payline2)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 18)("activeCells", ctx.payline3)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 19)("activeCells", ctx.payline4)("clickable", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("paylineNumber", 20)("activeCells", ctx.payline5)("clickable", true);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.info.paytableEntries());
        } }, dependencies: [CommonModule, i1.NgClass, ApInfoPayTableSymbolComponent, ApUiTabGroupComponent, ApInfoPayTablePaylineComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoPayTableComponent, [{
        type: Component,
        args: [{ selector: 'info-pay-table', imports: [CommonModule, ApInfoPayTableSymbolComponent, ApUiTabGroupComponent, ApInfoPayTablePaylineComponent], template: "<div\n  #contentScroller\n  class=\"flex h-full max-h-full flex-col overflow-y-auto bg-zinc-900 p-0 pb-4\"\n  (mousedown)=\"onDragStart($event)\"\n  (mousemove)=\"onDragMove($event)\"\n  (mouseup)=\"onDragEnd()\"\n  (mouseleave)=\"onDragEnd()\"\n>\n  <!-- Section 1: Tab Buttons -->\n  <div class=\"sticky z-sticky top-0 bg-zinc-900 px-4 pt-6 shrink-0\">\n    <ap-ui-tab-group\n      [tabs]=\"tabs()\"\n      [selectedTab]=\"selectedTab()\"\n      (tabChange)=\"selectTab($event)\"\n    ></ap-ui-tab-group>\n  </div>\n  <!-- Symbols -->\n  <div\n    id=\"symbols-section\"\n    class=\"w-full max-w-3xl mx-auto flex flex-col items-center gap-6 px-4 select-none\"\n  >\n    <!-- Title + Divider -->\n    <div class=\"flex flex-col justify-center items-center w-full text-center\">\n      <div class=\"flex flex-col items-center w-full\">\n        <h2 class=\"text-yellow-200\">{{ symbolLabel() }}</h2>\n        <div class=\"h-px w-full divider-gradient-yellow\"></div>\n      </div>\n    </div>\n\n    <div class=\"flex flex-wrap justify-center gap-8 w-full\">\n      @for (symbolImage of symbolImages(); track $index) {\n        <ap-info-pay-table-symbol\n          [symbolHeader]=\"symbolHeader()\"\n          [paylineHeader]=\"paylineHeader()\"\n          [symbolImage]=\"symbolImage\"\n          [tableData]=\"tableData\"\n        />\n      }\n    </div>\n    <div class=\"w-full flex flex-col mt-4\">\n      @for (entry of info.paytableEntries(); track $index) {\n        @switch (entry.category) {\n          @case (\"title\") {\n            <div\n              class=\"w-full text-2xl font-semibold text-yellow-200 mt-4\"\n              [ngClass]=\"{\n                'justify-start text-left': entry.position === 'left',\n                'justify-center text-center': entry.position === 'center',\n                'justify-end text-right': entry.position === 'right',\n              }\"\n            >\n              {{ entry.content }}\n            </div>\n          }\n          @case (\"subtitle\") {\n            <div\n              class=\"w-full font-semibold text-white mt-2\"\n              [ngClass]=\"{\n                'text-left': entry.position === 'left',\n                'text-center': entry.position === 'center',\n                'text-right': entry.position === 'right',\n              }\"\n            >\n              {{ entry.content }}\n            </div>\n          }\n          @case (\"image\") {\n            <div\n              class=\"w-full mt-4\"\n              [ngClass]=\"{\n                'text-left': entry.position === 'left',\n                'text-center': entry.position === 'center',\n                'text-right': entry.position === 'right',\n              }\"\n            >\n              <img\n                [src]=\"this.info.getImageUrl(entry.content)\"\n                [alt]=\"entry.content\"\n                class=\"inline-block object-contain\"\n              />\n            </div>\n          }\n          @case (\"content\") {\n            <div\n              class=\"w-full flex\"\n              [ngClass]=\"{\n                'text-left': entry.position === 'left',\n                'text-center': entry.position === 'center',\n                'text-right': entry.position === 'right',\n              }\"\n            >\n              <ul class=\"text-white leading-relaxed max-w-3xl space-y-2\">\n                <li>{{ entry.content }}</li>\n              </ul>\n            </div>\n          }\n        }\n      }\n    </div>\n\n    <!-- Paylines -->\n    <div\n      id=\"paylines-section\"\n      class=\"w-full max-w-3xl mx-auto flex flex-col items-center gap-6 px-4 mt-16\"\n    >\n      <!-- Title + Divider -->\n      <div class=\"flex flex-col justify-center items-center w-full text-center\">\n        <div class=\"flex flex-col items-center w-full\">\n          <h2 class=\"text-yellow-200\">{{ paylineLabel() }}</h2>\n          <div class=\"h-px w-full divider-gradient-yellow\"></div>\n        </div>\n      </div>\n\n      <div class=\"flex flex-wrap justify-center sm:gap-6 gap-8 w-full\">\n        <!-- 1-5 -->\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"1\"\n          [activeCells]=\"payline1\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"2\"\n          [activeCells]=\"payline2\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"3\"\n          [activeCells]=\"payline3\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"4\"\n          [activeCells]=\"payline4\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"5\"\n          [activeCells]=\"payline5\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n        <!-- 6-10 -->\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"6\"\n          [activeCells]=\"payline5\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"7\"\n          [activeCells]=\"payline2\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"8\"\n          [activeCells]=\"payline4\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"9\"\n          [activeCells]=\"payline1\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"10\"\n          [activeCells]=\"payline3\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n        <!-- 11-15 -->\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"11\"\n          [activeCells]=\"payline4\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"12\"\n          [activeCells]=\"payline5\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"13\"\n          [activeCells]=\"payline3\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"14\"\n          [activeCells]=\"payline1\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"15\"\n          [activeCells]=\"payline2\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <!-- 16-20 -->\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"16\"\n          [activeCells]=\"payline1\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"17\"\n          [activeCells]=\"payline2\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"18\"\n          [activeCells]=\"payline3\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"19\"\n          [activeCells]=\"payline4\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n\n        <ap-info-pay-table-payline\n          [paylineNumber]=\"20\"\n          [activeCells]=\"payline5\"\n          [clickable]=\"true\"\n          (cellClick)=\"onCellClick($event)\"\n        />\n      </div>\n\n      <div class=\"w-full flex flex-col mt-4\">\n        @for (entry of info.paytableEntries(); track $index) {\n          @switch (entry.category) {\n            @case (\"title\") {\n              <div\n                class=\"w-full text-2xl font-semibold text-yellow-200 mt-4\"\n                [ngClass]=\"{\n                  'justify-start text-left': entry.position === 'left',\n                  'justify-center text-center': entry.position === 'center',\n                  'justify-end text-right': entry.position === 'right',\n                }\"\n              >\n                {{ entry.content }}\n              </div>\n            }\n            @case (\"subtitle\") {\n              <div\n                class=\"w-full font-semibold text-white mt-2\"\n                [ngClass]=\"{\n                  'text-left': entry.position === 'left',\n                  'text-center': entry.position === 'center',\n                  'text-right': entry.position === 'right',\n                }\"\n              >\n                {{ entry.content }}\n              </div>\n            }\n            @case (\"image\") {\n              <div\n                class=\"w-full mt-4\"\n                [ngClass]=\"{\n                  'text-left': entry.position === 'left',\n                  'text-center': entry.position === 'center',\n                  'text-right': entry.position === 'right',\n                }\"\n              >\n                <img\n                  [src]=\"this.info.getImageUrl(entry.content)\"\n                  [alt]=\"entry.content\"\n                  class=\"inline-block object-contain\"\n                />\n              </div>\n            }\n            @case (\"content\") {\n              <div\n                class=\"w-full flex\"\n                [ngClass]=\"{\n                  'text-left': entry.position === 'left',\n                  'text-center': entry.position === 'center',\n                  'text-right': entry.position === 'right',\n                }\"\n              >\n                <ul class=\"text-white leading-relaxed max-w-3xl space-y-2\">\n                  <li>{{ entry.content }}</li>\n                </ul>\n              </div>\n            }\n          }\n        }\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, { contentScroller: [{
            type: ViewChild,
            args: ['contentScroller']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfoPayTableComponent, { className: "InfoPayTableComponent", filePath: "src/app/pages/info-pay-table/info-pay-table.component.ts", lineNumber: 43 }); })();
//# sourceMappingURL=info-pay-table.component.js.map