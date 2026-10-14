import { Component, DestroyRef, ViewChild, computed, inject, input, output, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { ApIconComponent } from '../ap-icon/ap-icon.component';
import { ApIconBadgeComponent } from '../ap-icon-badge/ap-icon-badge.component';
import * as i0 from "@angular/core";
const _c0 = ["tabContainer"];
const _forTrack0 = ($index, $item) => $item.id;
function ApTabMenu4Component_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "ap-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", "chevron-left");
} }
function ApTabMenu4Component_For_6_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon-badge", 11);
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("name", tab_r3.icon)("badgeTop", "top-2")("hasBadge", tab_r3.hasBadge ?? false);
} }
function ApTabMenu4Component_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9, 1);
    i0.ɵɵlistener("click", function ApTabMenu4Component_For_6_Template_div_click_0_listener() { const tab_r3 = i0.ɵɵrestoreView(_r2).$implicit; const tabItem_r4 = i0.ɵɵreference(1); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(!tab_r3.disabled && ctx_r4.onTabClick(tab_r3.id, tabItem_r4)); });
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵconditionalCreate(3, ApTabMenu4Component_For_6_Conditional_3_Template, 1, 3, "ap-icon-badge", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", tab_r3.disabled);
    i0.ɵɵproperty("ngClass", ctx_r4.isSelected(tab_r3.id) ? ctx_r4.getActiveClasses() : ctx_r4.getInactiveClasses());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(tab_r3.icon ? 3 : -1);
} }
function ApTabMenu4Component_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "ap-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", "chevron-right");
} }
export class ApTabMenu4Component {
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
    isMobile = signal(false);
    canScrollLeft = signal(false);
    canScrollRight = signal(true);
    showOverflowHint = computed(() => this.tabs().length > (this.isMobile() ? 10 : 14));
    destroyRef = inject(DestroyRef);
    mediaQueryList;
    mediaQueryHandler;
    isDragging = false;
    startX = 0;
    scrollLeft = 0;
    hasDragged = false;
    scrollHandler = () => {
        if (!this.tabContainer?.nativeElement)
            return;
        const el = this.tabContainer.nativeElement;
        this.canScrollLeft.set(el.scrollLeft > 1);
        this.canScrollRight.set(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    constructor() {
        this.setupMediaQuery();
    }
    ngAfterViewInit() {
        const el = this.tabContainer?.nativeElement;
        if (!el)
            return;
        el.addEventListener('scroll', this.scrollHandler, { passive: true });
        this.destroyRef.onDestroy(() => {
            el.removeEventListener('scroll', this.scrollHandler);
        });
    }
    onTabClick(tabId, tabEl) {
        if (!this.hasDragged) {
            this.tabChange.emit(tabId);
            if (tabEl && this.tabContainer?.nativeElement) {
                this.scrollTabIntoCenter(tabEl);
            }
        }
    }
    isSelected(tabId) {
        return this.selectedTab() === tabId;
    }
    getSelectedLabel() {
        const selected = this.selectedTab();
        const tab = this.tabs().find((item) => item.id === selected);
        return tab?.label ?? '';
    }
    getActiveClasses() {
        const color = this.accentColor();
        return `text-${color}-400 border-${color}-400`;
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
    scrollTabIntoCenter(tabEl) {
        const container = this.tabContainer.nativeElement;
        const targetLeft = tabEl.offsetLeft - (container.clientWidth - tabEl.clientWidth) / 2;
        container.scrollTo({
            left: targetLeft,
            behavior: 'smooth'
        });
    }
    setupMediaQuery() {
        if (typeof window === 'undefined' || !window.matchMedia) {
            this.isMobile.set(false);
            return;
        }
        this.mediaQueryList = window.matchMedia('(max-width: 639px)');
        this.isMobile.set(this.mediaQueryList.matches);
        this.mediaQueryHandler = (event) => {
            this.isMobile.set(event.matches);
        };
        this.mediaQueryList.addEventListener('change', this.mediaQueryHandler);
        this.destroyRef.onDestroy(() => {
            if (this.mediaQueryList && this.mediaQueryHandler) {
                this.mediaQueryList.removeEventListener('change', this.mediaQueryHandler);
            }
        });
    }
    static ɵfac = function ApTabMenu4Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTabMenu4Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTabMenu4Component, selectors: [["ap-tab-menu-4"]], viewQuery: function ApTabMenu4Component_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabContainer = _t.first);
        } }, inputs: { tabs: [1, "tabs"], selectedTab: [1, "selectedTab"], color: [1, "color"], accentColor: [1, "accentColor"], justify: [1, "justify"] }, outputs: { tabChange: "tabChange" }, decls: 8, vars: 3, consts: [["tabContainer", ""], ["tabItem", ""], [1, "absolute", "sm:left-40", "left-4", "top-6", "flex", "h-8", "w-8", "items-center", "border", "border-zinc-400", "justify-center", "rounded-full", "bg-zinc-600", "animate-fade", "animate-infinite", "animate-duration-[2000ms]", "animate-delay-[30ms]", "animate-ease-in-out"], [1, "relative", "w-full", "overflow-hidden", "sm:h-18", "h-16", "text-2xl", "font-bold", "justify-center"], [1, "absolute", "bottom-0", "w-full", "overflow-x-hidden", "overflow-y-visible"], [1, "relative", "flex", "overflow-x-auto", "scrollbar-hide", "touch-pan-x", "select-none", "tab-container", "max-w-[24rem]", "sm:max-w-[45rem]", "mx-auto", 2, "scroll-behavior", "smooth", "cursor", "grab", 3, "mousedown", "mousemove", "mouseup", "mouseleave", "touchstart", "touchmove", "touchend", "ngClass"], [1, "group", "relative", "flex", "flex-col", "justify-center", "items-center", "p-1", "gap-2", "border-b-2", "cursor-pointer", "whitespace-nowrap", "shrink-0", "transition-colors", "duration-200", 3, "disabled", "ngClass"], [1, "absolute", "sm:right-40", "top-6", "right-4", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "border-zinc-400", "justify-center", "rounded-full", "bg-zinc-600", "animate-fade", "animate-infinite", "animate-duration-[2000ms]", "animate-delay-[30ms]", "animate-ease-in-out"], [1, "size-4", 3, "name"], [1, "group", "relative", "flex", "flex-col", "justify-center", "items-center", "p-1", "gap-2", "border-b-2", "cursor-pointer", "whitespace-nowrap", "shrink-0", "transition-colors", "duration-200", 3, "click", "ngClass"], [1, "flex", "justify-center", "items-center", "border-current"], [1, "sm:size-11", "size-9", 3, "name", "badgeTop", "hasBadge"]], template: function ApTabMenu4Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵconditionalCreate(0, ApTabMenu4Component_Conditional_0_Template, 2, 1, "div", 2);
            i0.ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "div", 5, 0);
            i0.ɵɵlistener("mousedown", function ApTabMenu4Component_Template_div_mousedown_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMouseDown($event)); })("mousemove", function ApTabMenu4Component_Template_div_mousemove_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMouseMove($event)); })("mouseup", function ApTabMenu4Component_Template_div_mouseup_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMouseUp($event)); })("mouseleave", function ApTabMenu4Component_Template_div_mouseleave_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMouseUp($event)); })("touchstart", function ApTabMenu4Component_Template_div_touchstart_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onTouchStart($event)); })("touchmove", function ApTabMenu4Component_Template_div_touchmove_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onTouchMove($event)); })("touchend", function ApTabMenu4Component_Template_div_touchend_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onTouchEnd($event)); });
            i0.ɵɵrepeaterCreate(5, ApTabMenu4Component_For_6_Template, 4, 4, "div", 6, _forTrack0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(7, ApTabMenu4Component_Conditional_7_Template, 2, 1, "div", 7);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showOverflowHint() && ctx.canScrollLeft() ? 0 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.justify() === "center" && !ctx.showOverflowHint() ? "justify-center" : "justify-start");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.tabs());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showOverflowHint() && ctx.canScrollRight() ? 7 : -1);
        } }, dependencies: [NgClass, ApIconComponent, ApIconBadgeComponent], styles: [".scrollbar-hide[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.scrollbar-hide[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTabMenu4Component, [{
        type: Component,
        args: [{ selector: 'ap-tab-menu-4', imports: [NgClass, ApIconComponent, ApIconBadgeComponent], template: "@if (showOverflowHint() && canScrollLeft()) {\n  <div\n    class=\"absolute sm:left-40 left-4 top-6 flex h-8 w-8 items-center border border-zinc-400 justify-center rounded-full bg-zinc-600 animate-fade animate-infinite animate-duration-[2000ms] animate-delay-[30ms] animate-ease-in-out\"\n  >\n    <ap-icon [name]=\"'chevron-left'\" class=\"size-4\"/>\n  </div>\n}\n<div\n  class=\"relative w-full overflow-hidden sm:h-18 h-16 text-2xl font-bold justify-center\"\n>\n  <div class=\"absolute bottom-0 w-full overflow-x-hidden overflow-y-visible\">\n    <div\n      class=\"relative flex overflow-x-auto scrollbar-hide touch-pan-x select-none tab-container  max-w-[24rem] sm:max-w-[45rem] mx-auto\"\n      [ngClass]=\"justify() === 'center' && !showOverflowHint() ? 'justify-center' : 'justify-start'\"\n      #tabContainer\n      (mousedown)=\"onMouseDown($event)\"\n      (mousemove)=\"onMouseMove($event)\"\n      (mouseup)=\"onMouseUp($event)\"\n      (mouseleave)=\"onMouseUp($event)\"\n      (touchstart)=\"onTouchStart($event)\"\n      (touchmove)=\"onTouchMove($event)\"\n      (touchend)=\"onTouchEnd($event)\"\n      style=\"scroll-behavior: smooth; cursor: grab\"\n    >\n        @for (tab of tabs(); track tab.id) {\n          <div\n            #tabItem\n            class=\"group relative flex flex-col justify-center items-center p-1 gap-2 border-b-2 cursor-pointer whitespace-nowrap shrink-0 transition-colors duration-200\"\n            [class.disabled]=\"tab.disabled\"\n            (click)=\"!tab.disabled && onTabClick(tab.id, tabItem)\"\n            [ngClass]=\"\n              isSelected(tab.id) ? getActiveClasses() : getInactiveClasses()\n            \"\n          >\n          <div class=\"flex justify-center items-center border-current\">\n            @if (tab.icon) {\n              <ap-icon-badge\n                [name]=\"tab.icon\"\n                [badgeTop]=\"'top-2'\" \n                [hasBadge]=\"tab.hasBadge ?? false\"\n                class=\"sm:size-11 size-9\"\n              />\n            }\n          </div>\n        </div>\n      }\n    </div>\n  </div>\n</div>\n@if (showOverflowHint() && canScrollRight()) {\n  <div\n    class=\"absolute sm:right-40 top-6 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-400 justify-center rounded-full bg-zinc-600 animate-fade animate-infinite animate-duration-[2000ms] animate-delay-[30ms] animate-ease-in-out\"\n  >\n    <ap-icon [name]=\"'chevron-right'\" class=\"size-4\"/>\n  </div>\n}\n", styles: [".scrollbar-hide::-webkit-scrollbar {\n  display: none;\n}\n\n.scrollbar-hide {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n"] }]
    }], () => [], { tabContainer: [{
            type: ViewChild,
            args: ['tabContainer', { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTabMenu4Component, { className: "ApTabMenu4Component", filePath: "src/ap-components-lib/ap-tab-menu-4/ap-tab-menu-4.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=ap-tab-menu-4.component.js.map