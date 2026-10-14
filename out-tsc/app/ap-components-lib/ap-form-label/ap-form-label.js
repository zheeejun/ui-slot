import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function ApFormLabel_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵtext(1, "*");
    i0.ɵɵelementEnd();
} }
function ApFormLabel_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, ApFormLabel_Conditional_2_Conditional_2_Template, 2, 0, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("block font-semibold text-zinc-800 dark:text-white dark:font-normal mb-2 whitespace-nowrap overflow-hidden text-ellipsis " + (ctx_r0.size() === "small" ? "text-xs" : ctx_r0.size() === "large" ? "text-base" : "text-sm"));
    i0.ɵɵattribute("title", ctx_r0.label());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.label(), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.required() ? 2 : -1);
} }
function ApFormLabel_Conditional_3_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.hint(), " ");
} }
function ApFormLabel_Conditional_3_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error(), " ");
} }
function ApFormLabel_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApFormLabel_Conditional_3_Conditional_0_Template, 2, 1, "p", 3);
    i0.ɵɵconditionalCreate(1, ApFormLabel_Conditional_3_Conditional_1_Template, 2, 1, "p", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.hint() && !ctx_r0.error() ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.error() ? 1 : -1);
} }
function ApFormLabel_Conditional_5_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.hint(), " ");
} }
function ApFormLabel_Conditional_5_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error(), " ");
} }
function ApFormLabel_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApFormLabel_Conditional_5_Conditional_0_Template, 2, 1, "p", 3);
    i0.ɵɵconditionalCreate(1, ApFormLabel_Conditional_5_Conditional_1_Template, 2, 1, "p", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.hint() && !ctx_r0.error() ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.error() ? 1 : -1);
} }
export class ApFormLabel {
    size = input('medium');
    label = input('Label');
    showTitle = input(true);
    required = input(false);
    hint = input(null);
    error = input(null);
    layout = input('inside');
    static ɵfac = function ApFormLabel_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApFormLabel)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApFormLabel, selectors: [["ap-form-label"]], inputs: { size: [1, "size"], label: [1, "label"], showTitle: [1, "showTitle"], required: [1, "required"], hint: [1, "hint"], error: [1, "error"], layout: [1, "layout"] }, ngContentSelectors: _c0, decls: 6, vars: 4, consts: [[1, "w-full", 3, "ngClass"], [3, "class"], [1, "text-red-500", "ml-1"], [1, "mt-1", "text-xs", "text-zinc-500"], [1, "mt-1", "text-xs", "text-red-500"]], template: function ApFormLabel_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div");
            i0.ɵɵconditionalCreate(2, ApFormLabel_Conditional_2_Template, 3, 5, "label", 1);
            i0.ɵɵconditionalCreate(3, ApFormLabel_Conditional_3_Template, 2, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(4);
            i0.ɵɵconditionalCreate(5, ApFormLabel_Conditional_5_Template, 2, 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.layout() === "between" ? "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4" : "");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showTitle() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.layout() === "between" ? 3 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.layout() === "inside" ? 5 : -1);
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApFormLabel, [{
        type: Component,
        args: [{ selector: 'ap-form-label', imports: [CommonModule], template: "<div class=\"w-full\" [ngClass]=\"layout() === 'between' ? 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4' : ''\">\n  <div>\n    @if (showTitle()) {\n      <label\n        [class]=\"\n          'block font-semibold text-zinc-800 dark:text-white dark:font-normal mb-2 whitespace-nowrap overflow-hidden text-ellipsis ' +\n          (size() === 'small' ? 'text-xs' : size() === 'large' ? 'text-base' : 'text-sm')\n        \"\n        [attr.title]=\"label()\"\n      >\n        {{ label() }}\n        @if (required()) {\n        <span class=\"text-red-500 ml-1\">*</span>\n        }\n      </label>\n    }\n\n    <!-- Layout: between -->\n    @if (layout() === 'between') {\n      <!-- Hint Text -->\n      @if (hint() && !error()) {\n        <p class=\"mt-1 text-xs text-zinc-500\">\n          {{ hint() }}\n        </p>\n      }\n\n      <!-- Error Message -->\n      @if (error()) {\n        <p class=\"mt-1 text-xs text-red-500\">\n          {{ error() }}\n        </p>\n      }\n    }\n  </div>\n\n  <ng-content></ng-content>\n\n  <!-- Layout: inside -->\n  @if (layout() === 'inside') {\n    <!-- Hint Text -->\n    @if (hint() && !error()) {\n      <p class=\"mt-1 text-xs text-zinc-500\">\n        {{ hint() }}\n      </p>\n    }\n\n    <!-- Error Message -->\n    @if (error()) {\n      <p class=\"mt-1 text-xs text-red-500\">\n        {{ error() }}\n      </p>\n    }\n  }\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApFormLabel, { className: "ApFormLabel", filePath: "src/ap-components-lib/ap-form-label/ap-form-label.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-form-label.js.map