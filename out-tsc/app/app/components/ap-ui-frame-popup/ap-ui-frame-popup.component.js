import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function ApUiFramePopupComponent_ap_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 4);
    i0.ɵɵlistener("click", function ApUiFramePopupComponent_ap_button_6_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", "x-mark")("size", "medium")("severity", "contrast")("accentColor", ctx_r1.variant() === "default" ? "zinc" : ctx_r1.variant() === "quick" ? "yellow" : "purple");
} }
function ApUiFramePopupComponent_ap_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 5);
    i0.ɵɵlistener("click", function ApUiFramePopupComponent_ap_button_7_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("size", "medium")("icon", "back-2-line")("severity", "contrast")("accentColor", ctx_r1.variant() === "default" ? "zinc" : ctx_r1.variant() === "quick" ? "yellow" : "purple");
} }
export class ApUiFramePopupComponent {
    header = input('Message');
    enableBack = input(false);
    enableClose = input(true);
    size = input('default');
    variant = input('default');
    close = output();
    back = output();
    getWidthClass() {
        return this.size() === 'mobile'
            ? 'w-[95%] xs:w-[90%] sm:w-[85%] md:w-[30rem] lg:w-[32rem] max-w-[32rem] transition-all duration-300'
            : 'w-[95%] xs:w-[90%] sm:w-[80%] md:w-[24rem] lg:w-[26rem] max-w-[26rem] transition-all duration-300';
    }
    getTextSizeClass() {
        return this.size() === 'mobile' ? 'text-4xl ' : 'text-3xl';
    }
    getPaddingClass() {
        return this.size() === 'mobile' ? 'py-4' : 'py-4';
    }
    getBorderClass() {
        switch (this.variant()) {
            case 'event':
                return 'border-purple-300';
            case 'quick':
                return 'border-yellow-300';
            default:
                return 'border-zinc-600';
        }
    }
    static ɵfac = function ApUiFramePopupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiFramePopupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiFramePopupComponent, selectors: [["ap-ui-frame-popup"]], inputs: { header: [1, "header"], enableBack: [1, "enableBack"], enableClose: [1, "enableClose"], size: [1, "size"], variant: [1, "variant"] }, outputs: { close: "close", back: "back" }, ngContentSelectors: _c0, decls: 8, vars: 7, consts: [[1, "relative", "w-full"], [1, "relative", "w-full", "bg-zinc-800", "rounded-b-xl"], ["class", "absolute right-3 top-3", 3, "icon", "size", "severity", "accentColor", "click", 4, "ngIf"], ["class", "absolute right-3 top-3", 3, "size", "icon", "severity", "accentColor", "click", 4, "ngIf"], [1, "absolute", "right-3", "top-3", 3, "click", "icon", "size", "severity", "accentColor"], [1, "absolute", "right-3", "top-3", 3, "click", "size", "icon", "severity", "accentColor"]], template: function ApUiFramePopupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "div");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, ApUiFramePopupComponent_ap_button_6_Template, 1, 4, "ap-button", 2)(7, ApUiFramePopupComponent_ap_button_7_Template, 1, 4, "ap-button", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap("relative border-2 bg-zinc-900 rounded-xl text-zinc-300 duration-300 select-none " + ctx.getWidthClass() + " " + ctx.getBorderClass());
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap("relative w-full flex justify-center items-center text-center font-semibold h-[4rem] " + ctx.getTextSizeClass() + " " + ctx.getPaddingClass());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.header(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.enableClose());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableBack());
        } }, dependencies: [CommonModule, i1.NgIf, ApButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiFramePopupComponent, [{
        type: Component,
        args: [{ selector: 'ap-ui-frame-popup', imports: [CommonModule, ApButtonComponent], template: "<div\n  [class]=\"\n    'relative border-2 bg-zinc-900 rounded-xl text-zinc-300 duration-300 select-none ' +\n    getWidthClass() +\n    ' ' +\n    getBorderClass()\n  \"\n>\n  <div class=\"relative w-full\">\n    <div\n      [class]=\"\n        'relative w-full flex justify-center items-center text-center font-semibold h-[4rem] ' +\n        getTextSizeClass() +\n        ' ' +\n        getPaddingClass()\n      \"\n    >\n      {{ header() }}\n    </div>\n    <div class=\"relative w-full bg-zinc-800 rounded-b-xl\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <ap-button\n    class=\"absolute right-3 top-3\"\n    [icon]=\"'x-mark'\"\n    [size]=\"'medium'\"\n    [severity]=\"'contrast'\"\n    [accentColor]=\"\n      variant() === 'default'\n        ? 'zinc'\n        : variant() === 'quick'\n        ? 'yellow'\n        : 'purple'\n    \"\n    *ngIf=\"enableClose()\"\n    (click)=\"close.emit()\"\n  />\n\n  <ap-button\n    class=\"absolute right-3 top-3\"\n    [size]=\"'medium'\"\n    [icon]=\"'back-2-line'\"\n    [severity]=\"'contrast'\"\n    [accentColor]=\"\n      variant() === 'default'\n        ? 'zinc'\n        : variant() === 'quick'\n        ? 'yellow'\n        : 'purple'\n    \"\n    *ngIf=\"enableBack()\"\n    (click)=\"back.emit()\"\n  />\n</div>\n", styles: [":host {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiFramePopupComponent, { className: "ApUiFramePopupComponent", filePath: "src/app/components/ap-ui-frame-popup/ap-ui-frame-popup.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-ui-frame-popup.component.js.map