import { Component, ViewChild, inject, signal, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/info-ctrl/info-ctrl.service";
import * as i2 from "../../services/app-interface/app-interface.service";
import * as i3 from "@angular/common";
const _c0 = ["contentScroller"];
const _c1 = (a0, a1, a2) => ({ "text-left": a0, "text-center": a1, "text-right": a2 });
function InfoFeatureComponent_For_4_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c1, entry_r2.position === "left", entry_r2.position === "center", entry_r2.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", entry_r2.content, " ");
} }
function InfoFeatureComponent_For_4_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c1, entry_r2.position === "left", entry_r2.position === "center", entry_r2.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", entry_r2.content, " ");
} }
function InfoFeatureComponent_For_4_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "img", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(3, _c1, entry_r2.position === "left", entry_r2.position === "center", entry_r2.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.info.getImageUrl(entry_r2.content), i0.ɵɵsanitizeUrl)("alt", entry_r2.content);
} }
function InfoFeatureComponent_For_4_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "ul", 8)(2, "li");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const entry_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c1, entry_r2.position === "left", entry_r2.position === "center", entry_r2.position === "right"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r2.content);
} }
function InfoFeatureComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, InfoFeatureComponent_For_4_Case_0_Template, 2, 6, "div", 3)(1, InfoFeatureComponent_For_4_Case_1_Template, 2, 6, "div", 4)(2, InfoFeatureComponent_For_4_Case_2_Template, 2, 7, "div", 5)(3, InfoFeatureComponent_For_4_Case_3_Template, 4, 6, "div", 6);
} if (rf & 2) {
    let tmp_11_0;
    const entry_r2 = ctx.$implicit;
    i0.ɵɵconditional((tmp_11_0 = entry_r2.category) === "title" ? 0 : tmp_11_0 === "subtitle" ? 1 : tmp_11_0 === "image" ? 2 : tmp_11_0 === "content" ? 3 : -1);
} }
export class InfoFeatureComponent {
    info;
    api;
    login = inject(LoginCtrlService);
    contentScroller;
    isDragging = signal(false);
    dragStartY = 0;
    dragStartScrollTop = 0;
    constructor(info, api) {
        this.info = info;
        this.api = api;
    }
    ngOnInit() { }
    onCellClick(cell) { }
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
    static ɵfac = function InfoFeatureComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InfoFeatureComponent)(i0.ɵɵdirectiveInject(i1.InfoCtrlService), i0.ɵɵdirectiveInject(i2.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoFeatureComponent, selectors: [["info-feature"]], viewQuery: function InfoFeatureComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentScroller = _t.first);
        } }, decls: 5, vars: 0, consts: [["contentScroller", ""], [1, "flex", "h-full", "max-h-full", "flex-col", "overflow-y-auto", "bg-zinc-900", "pt-8", "pb-10", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "w-full", "max-w-xl", "mx-auto", "flex", "flex-col", "items-center", "px-4", "gap-4", "space-y-2", "select-none"], [1, "w-full", "text-2xl", "font-semibold", "text-yellow-200", 3, "ngClass"], [1, "w-full", "font-semibold", "text-white", 3, "ngClass"], [1, "w-full", 3, "ngClass"], [1, "w-full", "flex", 3, "ngClass"], [1, "inline-block", "object-contain-scale", "w-[40%]", 3, "src", "alt"], [1, "text-white", "leading-relaxed", "max-w-xl"]], template: function InfoFeatureComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1, 0);
            i0.ɵɵlistener("mousedown", function InfoFeatureComponent_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragStart($event)); })("mousemove", function InfoFeatureComponent_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragMove($event)); })("mouseup", function InfoFeatureComponent_Template_div_mouseup_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragEnd()); })("mouseleave", function InfoFeatureComponent_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragEnd()); });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵrepeaterCreate(3, InfoFeatureComponent_For_4_Template, 4, 1, null, null, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.info.featureEntries());
        } }, dependencies: [CommonModule, i3.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoFeatureComponent, [{
        type: Component,
        args: [{ selector: 'info-feature', imports: [CommonModule], template: "<div\n  #contentScroller\n  class=\"flex h-full max-h-full flex-col overflow-y-auto bg-zinc-900 pt-8 pb-10\"\n  (mousedown)=\"onDragStart($event)\"\n  (mousemove)=\"onDragMove($event)\"\n  (mouseup)=\"onDragEnd()\"\n  (mouseleave)=\"onDragEnd()\"\n>\n  <div\n    class=\"w-full max-w-xl mx-auto flex flex-col items-center px-4 gap-4 space-y-2 select-none\"\n  >\n    @for (entry of info.featureEntries(); track $index) {\n      @switch (entry.category) {\n        @case (\"title\") {\n          <div\n            class=\"w-full text-2xl font-semibold text-yellow-200\"\n            [ngClass]=\"{\n              'text-left': entry.position === 'left',\n              'text-center': entry.position === 'center',\n              'text-right': entry.position === 'right',\n            }\"\n          >\n            {{ entry.content }}\n          </div>\n        }\n        @case (\"subtitle\") {\n          <div\n            class=\"w-full font-semibold text-white\"\n            [ngClass]=\"{\n              'text-left': entry.position === 'left',\n              'text-center': entry.position === 'center',\n              'text-right': entry.position === 'right',\n            }\"\n          >\n            {{ entry.content }}\n          </div>\n        }\n        @case (\"image\") {\n          <div\n            class=\"w-full\"\n            [ngClass]=\"{\n              'text-left': entry.position === 'left',\n              'text-center': entry.position === 'center',\n              'text-right': entry.position === 'right',\n            }\"\n          >\n            <img\n              [src]=\"this.info.getImageUrl(entry.content)\"\n              [alt]=\"entry.content\"\n              class=\"inline-block object-contain-scale w-[40%]\"\n            />\n          </div>\n        }\n        @case (\"content\") {\n          <div\n            class=\"w-full flex\"\n            [ngClass]=\"{\n              'text-left': entry.position === 'left',\n              'text-center': entry.position === 'center',\n              'text-right': entry.position === 'right',\n            }\"\n          >\n            <ul class=\"text-white leading-relaxed max-w-xl\">\n              <li>{{ entry.content }}</li>\n            </ul>\n          </div>\n        }\n      }\n    }\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.InfoCtrlService }, { type: i2.AppInterfaceService }], { contentScroller: [{
            type: ViewChild,
            args: ['contentScroller']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfoFeatureComponent, { className: "InfoFeatureComponent", filePath: "src/app/pages/info-feature/info-feature.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=info-feature.component.js.map