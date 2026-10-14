import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function ApUiFramePageComponent_ap_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 6);
    i0.ɵɵlistener("click", function ApUiFramePageComponent_ap_button_4_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("size", "medium")("icon", "back-2-line")("severity", "contrast")("accentColor", "zinc");
} }
function ApUiFramePageComponent_ap_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 7);
    i0.ɵɵlistener("click", function ApUiFramePageComponent_ap_button_5_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("size", "medium")("icon", "x-mark")("severity", "contrast")("accentColor", "zinc");
} }
export class ApUiFramePageComponent {
    header = input('');
    enableBack = input(false);
    enableClose = input(true);
    close = output();
    back = output();
    static ɵfac = function ApUiFramePageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiFramePageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiFramePageComponent, selectors: [["ap-ui-frame-page"]], inputs: { header: [1, "header"], enableBack: [1, "enableBack"], enableClose: [1, "enableClose"] }, outputs: { close: "close", back: "back" }, ngContentSelectors: _c0, decls: 8, vars: 3, consts: [[1, "relative", "flex", "size-full", "bg-black/50", "justify-center", "items-center", "select-none"], [1, "relative", "size-full", "text-zinc-200", "bg-zinc-800", "border-zinc-500", "lg:border-2", "lg:rounded-xl", "lg:shadow-xl", "lg:max-w-5xl", "lg:max-h-[50rem]", "transition-all"], [1, "absolute", "w-full", "text-center", "text-4xl", "font-bold", "py-4", "h-18", "lg:rounded-t-xl", "bg-zinc-900"], ["class", "absolute left-4 top-4", 3, "size", "icon", "severity", "accentColor", "click", 4, "ngIf"], ["class", "absolute right-4 top-4", 3, "size", "icon", "severity", "accentColor", "click", 4, "ngIf"], [1, "absolute", "w-full", "top-18", "bottom-0", "lg:rounded-b-xl", "overflow-hidden"], [1, "absolute", "left-4", "top-4", 3, "click", "size", "icon", "severity", "accentColor"], [1, "absolute", "right-4", "top-4", 3, "click", "size", "icon", "severity", "accentColor"]], template: function ApUiFramePageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, ApUiFramePageComponent_ap_button_4_Template, 1, 4, "ap-button", 3)(5, ApUiFramePageComponent_ap_button_5_Template, 1, 4, "ap-button", 4);
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.header(), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableBack());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableClose());
        } }, dependencies: [ApButtonComponent, CommonModule, i1.NgIf], styles: ["[_nghost-%COMP%]{\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiFramePageComponent, [{
        type: Component,
        args: [{ selector: 'ap-ui-frame-page', imports: [ApButtonComponent, CommonModule], template: "<div\n  class=\"relative flex size-full bg-black/50 justify-center items-center select-none\"\n>\n  <div\n    class=\"relative size-full text-zinc-200 bg-zinc-800 border-zinc-500 lg:border-2 lg:rounded-xl lg:shadow-xl lg:max-w-5xl lg:max-h-[50rem] transition-all\"\n  >\n    <div\n      class=\"absolute w-full text-center text-4xl font-bold py-4 h-18 lg:rounded-t-xl bg-zinc-900\"\n    >\n      {{ header() }}\n    </div>\n\n    <ap-button\n      class=\"absolute left-4 top-4\"\n      [size]=\"'medium'\"\n      [icon]=\"'back-2-line'\"\n      [severity]=\"'contrast'\"\n      [accentColor]=\"'zinc'\"\n      *ngIf=\"enableBack()\"\n      (click)=\"back.emit()\"\n    ></ap-button>\n\n    <ap-button\n      class=\"absolute right-4 top-4\"\n      [size]=\"'medium'\"\n      [icon]=\"'x-mark'\"\n      [severity]=\"'contrast'\"\n      [accentColor]=\"'zinc'\"\n      *ngIf=\"enableClose()\"\n      (click)=\"close.emit()\"\n    ></ap-button>\n\n    <div\n      class=\"absolute w-full top-18 bottom-0 lg:rounded-b-xl overflow-hidden\"\n    >\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [":host{\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiFramePageComponent, { className: "ApUiFramePageComponent", filePath: "src/app/components/ap-ui-frame-page/ap-ui-frame-page.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-ui-frame-page.component.js.map