import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ApCashDropListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 5)(5, "span", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.leftLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.rightLabel());
} }
function ApCashDropListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "span", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 10)(5, "span", 11);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.bgShade() === "900" ? "bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700" : "bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.leftValue());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r0.bgShade() === "900" ? "border-l border-zinc-700" : "border-l border-zinc-600");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.rightValue());
} }
export class ApCashDropListComponent {
    // Type
    variant = input('header');
    // Left
    leftLabel = input('Prize');
    leftValue = input('5,000,000');
    // Right
    rightLabel = input('Prize Left');
    rightValue = input('10');
    bgShade = input('900');
    static ɵfac = function ApCashDropListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApCashDropListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApCashDropListComponent, selectors: [["ap-cashdrop-list"]], inputs: { variant: [1, "variant"], leftLabel: [1, "leftLabel"], leftValue: [1, "leftValue"], rightLabel: [1, "rightLabel"], rightValue: [1, "rightValue"], bgShade: [1, "bgShade"] }, decls: 2, vars: 2, consts: [["class", "grid grid-cols-2 text-center bg-zinc-800 border-b border-zinc-600", 4, "ngIf"], ["class", "grid grid-cols-2 text-center", 3, "ngClass", 4, "ngIf"], [1, "grid", "grid-cols-2", "text-center", "bg-zinc-800", "border-b", "border-zinc-600"], [1, "px-2", "py-2", "flex", "items-center", "justify-center"], [1, "text-yellow-200", "font-semibold", "text-xl"], [1, "text-xl", "px-2", "py-2", "border-zinc-600"], [1, "text-white", "font-semibold", "text-lg"], [1, "grid", "grid-cols-2", "text-center", 3, "ngClass"], [1, "px-4", "py-4"], [1, "text-yellow-200", "font-semibold", "text-md"], [1, "px-4", "py-4", 3, "ngClass"], [1, "text-white", "font-semibold", "text-md"]], template: function ApCashDropListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ApCashDropListComponent_div_0_Template, 7, 2, "div", 0)(1, ApCashDropListComponent_div_1_Template, 7, 4, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.variant() === "header");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.variant() === "list");
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApCashDropListComponent, [{
        type: Component,
        args: [{ selector: 'ap-cashdrop-list', imports: [CommonModule], template: "<!-- Header -->\n<div\n  *ngIf=\"variant() === 'header'\"\n  class=\"grid grid-cols-2 text-center bg-zinc-800 border-b border-zinc-600\"\n>\n  <!-- Left-->\n  <div class=\"px-2 py-2 flex items-center justify-center\">\n    <span class=\"text-yellow-200 font-semibold text-xl\">{{ leftLabel() }}</span>\n  </div>\n\n  <!-- Right -->\n  <div class=\"text-xl px-2 py-2  border-zinc-600\">\n    <span class=\"text-white font-semibold text-lg\">{{ rightLabel() }}</span>\n  </div>\n</div>\n\n<!-- Content -->\n<!-- List -->\n<div\n  *ngIf=\"variant() === 'list'\"\n  class=\"grid grid-cols-2 text-center\"\n  [ngClass]=\"\n    bgShade() === '900'\n      ? 'bg-zinc-900 border-b border-zinc-700 hover:bg-zinc-700'\n      : 'bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-700'\n  \"\n>\n  <!-- Left -->\n  <div class=\"px-4 py-4\">\n    <span class=\"text-yellow-200 font-semibold text-md\">{{\n      leftValue()\n    }}</span>\n  </div>\n\n  <!-- Right -->\n  <div\n    class=\"px-4 py-4\"\n    [ngClass]=\"\n      bgShade() === '900'\n        ? 'border-l border-zinc-700'\n        : 'border-l border-zinc-600'\n    \"\n  >\n    <span class=\"text-white font-semibold text-md\">{{ rightValue() }}</span>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApCashDropListComponent, { className: "ApCashDropListComponent", filePath: "src/app/components/ap-cashdrop-list/ap-cashdrop-list.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=ap-cashdrop-list.component.js.map