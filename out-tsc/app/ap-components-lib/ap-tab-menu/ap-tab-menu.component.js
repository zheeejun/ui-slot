import { Component, input, output, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { ApIconComponent } from '../ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
const _c0 = ["tabContainer"];
const _forTrack0 = ($index, $item) => $item.id;
function ApTabMenuComponent_For_5_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 6);
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("name", tab_r3.icon);
} }
function ApTabMenuComponent_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function ApTabMenuComponent_For_5_Template_div_click_0_listener() { const tab_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onTabClick(tab_r3.id)); });
    i0.ɵɵconditionalCreate(1, ApTabMenuComponent_For_5_Conditional_1_Template, 1, 1, "ap-icon", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r3.isSelected(tab_r3.id) ? ctx_r3.getActiveClasses() : ctx_r3.getInactiveClasses());
    i0.ɵɵadvance();
    i0.ɵɵconditional(tab_r3.icon ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r3.label, " ");
} }
export class ApTabMenuComponent {
    tabContainer;
    tabs = input([
        { id: 'tab1', label: 'Tab 1', icon: 'star' },
        { id: 'tab2', label: 'Tab 2', icon: 'trophy' },
        { id: 'tab3', label: 'Tab 3', icon: 'sparkles' },
    ]);
    selectedTab = input('tab1');
    color = input('orange');
    accentColor = input('yellow');
    justify = input('center');
    tabChange = output();
    isDragging = false;
    startX = 0;
    scrollLeft = 0;
    hasDragged = false;
    onTabClick(tabId) {
        if (!this.hasDragged) {
            this.tabChange.emit(tabId);
        }
    }
    isSelected(tabId) {
        return this.selectedTab() === tabId;
    }
    getActiveClasses() {
        const color = this.accentColor();
        return `text-${color}-400 border-${color}-400 hover:text-${color}-200 hover:border-${color}-200`;
    }
    getInactiveClasses() {
        const color = this.color();
        const accent = this.accentColor();
        return `text-${color}-500 border-${color}-500 hover:text-${accent}-200 hover:border-${accent}-200`;
    }
    onMouseDown(event) {
        this.isDragging = true;
        this.hasDragged = false;
        this.startX = event.pageX - this.tabContainer.nativeElement.offsetLeft;
        this.scrollLeft = this.tabContainer.nativeElement.scrollLeft;
        this.tabContainer.nativeElement.style.cursor = 'grabbing';
        event.preventDefault();
    }
    onMouseMove(event) {
        if (!this.isDragging)
            return;
        event.preventDefault();
        const x = event.pageX - this.tabContainer.nativeElement.offsetLeft;
        const walk = (x - this.startX) * 2;
        this.tabContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
        if (Math.abs(walk) > 5) {
            this.hasDragged = true;
        }
    }
    onMouseUp(event) {
        this.isDragging = false;
        this.tabContainer.nativeElement.style.cursor = 'grab';
        setTimeout(() => {
            this.hasDragged = false;
        }, 100);
    }
    onTouchStart(event) {
        this.isDragging = true;
        this.hasDragged = false;
        this.startX = event.touches[0].pageX - this.tabContainer.nativeElement.offsetLeft;
        this.scrollLeft = this.tabContainer.nativeElement.scrollLeft;
    }
    onTouchMove(event) {
        if (!this.isDragging)
            return;
        const x = event.touches[0].pageX - this.tabContainer.nativeElement.offsetLeft;
        const walk = (x - this.startX) * 2;
        this.tabContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
        if (Math.abs(walk) > 5) {
            this.hasDragged = true;
        }
    }
    onTouchEnd(event) {
        this.isDragging = false;
        setTimeout(() => {
            this.hasDragged = false;
        }, 100);
    }
    static ɵfac = function ApTabMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTabMenuComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTabMenuComponent, selectors: [["ap-tab-menu"]], viewQuery: function ApTabMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabContainer = _t.first);
        } }, inputs: { tabs: [1, "tabs"], selectedTab: [1, "selectedTab"], color: [1, "color"], accentColor: [1, "accentColor"], justify: [1, "justify"] }, outputs: { tabChange: "tabChange" }, decls: 6, vars: 1, consts: [["tabContainer", ""], [1, "absolute", "w-full", "h-18", "text-2xl", "font-semibold", "justify-center"], [1, "absolute", "bottom-0", "w-full", "overflow-hidden"], [1, "flex", "overflow-x-auto", "sm:pl-4", "scrollbar-hide", "touch-pan-x", "select-none", "tab-container", "px-4", 2, "scroll-behavior", "smooth", "cursor", "grab", 3, "mousedown", "mousemove", "mouseup", "mouseleave", "touchstart", "touchmove", "touchend", "ngClass"], [1, "flex", "items-center", "p-2", "gap-2", "border-b-2", "cursor-pointer", "whitespace-nowrap", "shrink-0", 3, "ngClass"], [1, "flex", "items-center", "p-2", "gap-2", "border-b-2", "cursor-pointer", "whitespace-nowrap", "shrink-0", 3, "click", "ngClass"], [1, "size-7", 3, "name"]], template: function ApTabMenuComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3, 0);
            i0.ɵɵlistener("mousedown", function ApTabMenuComponent_Template_div_mousedown_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMouseDown($event)); })("mousemove", function ApTabMenuComponent_Template_div_mousemove_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMouseMove($event)); })("mouseup", function ApTabMenuComponent_Template_div_mouseup_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMouseUp($event)); })("mouseleave", function ApTabMenuComponent_Template_div_mouseleave_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMouseUp($event)); })("touchstart", function ApTabMenuComponent_Template_div_touchstart_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onTouchStart($event)); })("touchmove", function ApTabMenuComponent_Template_div_touchmove_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onTouchMove($event)); })("touchend", function ApTabMenuComponent_Template_div_touchend_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onTouchEnd($event)); });
            i0.ɵɵrepeaterCreate(4, ApTabMenuComponent_For_5_Template, 3, 3, "div", 4, _forTrack0);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.justify() === "center" ? "justify-center" : "justify-start");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.tabs());
        } }, dependencies: [NgClass, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTabMenuComponent, [{
        type: Component,
        args: [{ selector: 'ap-tab-menu', imports: [NgClass, ApIconComponent], template: "<div class=\"absolute w-full h-18 text-2xl font-semibold justify-center\">\n  <div class=\"absolute bottom-0 w-full overflow-hidden\">\n    <div\n      class=\"flex overflow-x-auto sm:pl-4 scrollbar-hide touch-pan-x select-none tab-container px-4\"\n      [ngClass]=\"justify() === 'center' ? 'justify-center' : 'justify-start'\"\n      #tabContainer\n      (mousedown)=\"onMouseDown($event)\"\n      (mousemove)=\"onMouseMove($event)\"\n      (mouseup)=\"onMouseUp($event)\"\n      (mouseleave)=\"onMouseUp($event)\"\n      (touchstart)=\"onTouchStart($event)\"\n      (touchmove)=\"onTouchMove($event)\"\n      (touchend)=\"onTouchEnd($event)\"\n      style=\"scroll-behavior: smooth; cursor: grab\"\n    >\n      @for (tab of tabs(); track tab.id) {\n      <div\n        class=\"flex items-center p-2 gap-2 border-b-2 cursor-pointer whitespace-nowrap shrink-0\"\n        (click)=\"onTabClick(tab.id)\"\n        [ngClass]=\"\n          isSelected(tab.id) ? getActiveClasses() : getInactiveClasses()\n        \"\n      >\n        @if (tab.icon) {\n        <ap-icon [name]=\"tab.icon\" class=\"size-7\"></ap-icon>\n        }\n        {{ tab.label }}\n      </div>\n      }\n    </div>\n  </div>\n</div>\n" }]
    }], null, { tabContainer: [{
            type: ViewChild,
            args: ['tabContainer', { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTabMenuComponent, { className: "ApTabMenuComponent", filePath: "src/ap-components-lib/ap-tab-menu/ap-tab-menu.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=ap-tab-menu.component.js.map