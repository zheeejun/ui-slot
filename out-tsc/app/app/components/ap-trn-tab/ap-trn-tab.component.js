import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { ApTrnCardTitleComponent } from "../ap-trn-card-title/ap-trn-card-title.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
const _c1 = (a0, a1) => ({ "border-yellow-300": a0, "border-purple-300": a1 });
const _c2 = (a0, a1, a2, a3) => ({ "text-yellow-300 border-yellow-300": a0, "text-zinc-500 border-zinc-600": a1, "hover:bg-zinc-800 cursor-pointer": a2, "cursor-not-allowed": a3 });
const _c3 = (a0, a1, a2, a3) => ({ "text-purple-300 border-purple-300": a0, "text-zinc-500 border-zinc-600": a1, "hover:bg-zinc-800 cursor-pointer": a2, "cursor-not-allowed": a3 });
function ApTrnTabComponent_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.getQuickTabText());
} }
function ApTrnTabComponent_Conditional_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-trn-card-title", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r2.getQuickTabText());
} }
function ApTrnTabComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function ApTrnTabComponent_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onTabClick("quick")); });
    i0.ɵɵconditionalCreate(1, ApTrnTabComponent_Conditional_1_Conditional_1_Template, 2, 1, "span")(2, ApTrnTabComponent_Conditional_1_Conditional_2_Template, 1, 1, "ap-trn-card-title", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("w-22", ctx_r2.showTabEvent())("w-44", !ctx_r2.showTabEvent())("px-4", !ctx_r2.showTabEvent());
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(9, _c2, ctx_r2.currentTab() === "quick", ctx_r2.currentTab() !== "quick", !ctx_r2.isTabQuickDisabled() && ctx_r2.showTabEvent(), ctx_r2.isTabQuickDisabled()))("disabled", ctx_r2.isTabQuickDisabled());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.showTabEvent() ? 1 : 2);
} }
function ApTrnTabComponent_Conditional_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.getEventTabText());
} }
function ApTrnTabComponent_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-trn-card-title", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r2.getEventTabText());
} }
function ApTrnTabComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function ApTrnTabComponent_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onTabClick("event")); });
    i0.ɵɵconditionalCreate(1, ApTrnTabComponent_Conditional_2_Conditional_1_Template, 2, 1, "span")(2, ApTrnTabComponent_Conditional_2_Conditional_2_Template, 1, 1, "ap-trn-card-title", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("w-22", ctx_r2.showTabQuick())("w-44", !ctx_r2.showTabQuick())("px-4", !ctx_r2.showTabQuick());
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(9, _c3, ctx_r2.currentTab() === "event", ctx_r2.currentTab() !== "event", !ctx_r2.isTabEventDisabled() && ctx_r2.showTabQuick(), ctx_r2.isTabEventDisabled()))("disabled", ctx_r2.isTabEventDisabled());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.showTabQuick() ? 1 : 2);
} }
export class ApTrnTabComponent {
    /** 分頁文字 */
    getQuickTabText = input('QUICK');
    getEventTabText = input('EVENT');
    /** 預設選擇的分頁 */
    selected = input('quick');
    /** 選擇的分頁 */
    currentTab = signal('quick');
    /** 顯示快速賽事分頁 */
    showTabQuick = input(true);
    /** 顯示活動賽事分頁 */
    showTabEvent = input(true);
    /** 禁用快速賽事分頁 */
    isTabQuickDisabled = input(false);
    /** 禁用活動賽事分頁 */
    isTabEventDisabled = input(false);
    /** 點擊分頁事件 */
    clickTab = output();
    /** 點擊內容區背景事件 */
    clickBackground = output();
    ngOnInit() {
        this.currentTab.set(this.selected());
    }
    onTabClick(tab) {
        this.currentTab.set(tab);
        this.clickTab.emit(tab);
    }
    onBackgroundClick(event, contentEl) {
        const target = event.target;
        const currentTarget = event.currentTarget;
        if (!target || !currentTarget)
            return;
        // 僅在點擊黑色背景區(非互動元件)時觸發
        if (target === currentTarget || target === contentEl) {
            this.clickBackground.emit();
        }
    }
    static ɵfac = function ApTrnTabComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnTabComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnTabComponent, selectors: [["ap-trn-tab"]], inputs: { getQuickTabText: [1, "getQuickTabText"], getEventTabText: [1, "getEventTabText"], selected: [1, "selected"], showTabQuick: [1, "showTabQuick"], showTabEvent: [1, "showTabEvent"], isTabQuickDisabled: [1, "isTabQuickDisabled"], isTabEventDisabled: [1, "isTabEventDisabled"] }, outputs: { clickTab: "clickTab", clickBackground: "clickBackground" }, ngContentSelectors: _c0, decls: 7, vars: 6, consts: [["contentEl", ""], [1, "top-0", "left-0", "flex", "relative"], [1, "h-10", "font-anton", "font-bold", "text-2xl", "bg-black/80", "tracking-wide", "border-2", "border-b-0", "rounded-t-xl", "duration-200", 3, "ngClass", "w-22", "w-44", "px-4", "disabled"], [1, "relative", "w-44", "min-h-auto", "bg-black/80", "border-2", "rounded-b-lg", "cursor-pointer", 3, "click", "ngClass"], [1, "duration-200", "pt-1", "pb-2", "flex", "flex-col", "items-center", "gap-1"], [1, "h-10", "font-anton", "font-bold", "text-2xl", "bg-black/80", "tracking-wide", "border-2", "border-b-0", "rounded-t-xl", "duration-200", 3, "click", "ngClass", "disabled"], ["variant", "quick", "size", "small", 3, "title"], ["variant", "event", "size", "small", 3, "title"]], template: function ApTrnTabComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵconditionalCreate(1, ApTrnTabComponent_Conditional_1_Template, 3, 14, "button", 2);
            i0.ɵɵconditionalCreate(2, ApTrnTabComponent_Conditional_2_Template, 3, 14, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵlistener("click", function ApTrnTabComponent_Template_div_click_3_listener($event) { i0.ɵɵrestoreView(_r1); const contentEl_r5 = i0.ɵɵreference(5); return i0.ɵɵresetView(ctx.onBackgroundClick($event, contentEl_r5)); });
            i0.ɵɵelementStart(4, "div", 4, 0);
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showTabQuick() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showTabEvent() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c1, ctx.currentTab() === "quick", ctx.currentTab() === "event"));
        } }, dependencies: [CommonModule, i1.NgClass, ApTrnCardTitleComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnTabComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-tab', imports: [CommonModule, ApTrnCardTitleComponent], template: "<!-- Tab Buttons -->\n<div class=\"top-0 left-0 flex relative\">\n  <!--Quick-->\n  @if (showTabQuick()) {\n    <button\n      (click)=\"onTabClick('quick')\"\n      class=\"h-10 font-anton font-bold text-2xl bg-black/80 tracking-wide border-2 border-b-0 rounded-t-xl duration-200\"\n      [ngClass]=\"{\n        'text-yellow-300 border-yellow-300': currentTab() === 'quick',\n        'text-zinc-500 border-zinc-600': currentTab() !== 'quick',\n        'hover:bg-zinc-800 cursor-pointer': !isTabQuickDisabled() && showTabEvent(),\n        'cursor-not-allowed': isTabQuickDisabled()\n      }\"\n      [class.w-22]=\"showTabEvent()\"\n      [class.w-44]=\"!showTabEvent()\"\n      [class.px-4]=\"!showTabEvent()\"\n      [disabled]=\"isTabQuickDisabled()\"\n    >\n      @if (showTabEvent()) {\n        <span>{{ getQuickTabText() }}</span>\n      } @else {\n        <ap-trn-card-title variant=\"quick\" [title]=\"getQuickTabText()\" size=\"small\" />\n      }\n    </button>\n  }\n  <!--Event-->\n  @if (showTabEvent()) {\n    <button\n      (click)=\"onTabClick('event')\"\n      class=\"h-10 font-anton font-bold text-2xl bg-black/80 tracking-wide border-2 border-b-0 rounded-t-xl duration-200\"\n      [ngClass]=\"{\n        'text-purple-300 border-purple-300': currentTab() === 'event',\n        'text-zinc-500 border-zinc-600': currentTab() !== 'event',\n        'hover:bg-zinc-800 cursor-pointer': !isTabEventDisabled() && showTabQuick(),\n        'cursor-not-allowed': isTabEventDisabled()\n      }\"\n      [class.w-22]=\"showTabQuick()\"\n      [class.w-44]=\"!showTabQuick()\"\n      [class.px-4]=\"!showTabQuick()\"\n      [disabled]=\"isTabEventDisabled()\"\n    >\n      @if (showTabQuick()) {\n        <span>{{ getEventTabText() }}</span>\n      } @else {\n        <ap-trn-card-title variant=\"event\" [title]=\"getEventTabText()\" size=\"small\" />\n      }\n    </button>\n  }\n</div>\n<!-- Main Window -->\n<div\n  class=\"relative w-44 min-h-auto bg-black/80 border-2 rounded-b-lg cursor-pointer\"\n  (click)=\"onBackgroundClick($event, contentEl)\"\n  [ngClass]=\"{\n    'border-yellow-300': currentTab() === 'quick',\n    'border-purple-300': currentTab() === 'event'\n  }\"\n>\n  <!-- Content -->\n  <div\n    #contentEl\n    class=\"duration-200 pt-1 pb-2 flex flex-col items-center gap-1 \"\n  >\n    <ng-content></ng-content>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnTabComponent, { className: "ApTrnTabComponent", filePath: "src/app/components/ap-trn-tab/ap-trn-tab.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-trn-tab.component.js.map