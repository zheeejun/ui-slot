import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => [a0, a1];
function ApInfoPayTableSymbolComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "img", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.symbolImage(), i0.ɵɵsanitizeUrl)("alt", ctx_r0.symbolName());
} }
function ApInfoPayTableSymbolComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 9);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r2.multiplier);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r0.accentColor());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", row_r2.payline, " ");
} }
export class ApInfoPayTableSymbolComponent {
    symbolImage = input('');
    symbolName = input('Symbols');
    symbolHeader = input('Symbols');
    paylineHeader = input('Payline');
    /** Pay table data rows */
    tableData = input([
        { multiplier: 'x15+', payline: '15.00' },
        { multiplier: 'x14+', payline: '7.00' },
        { multiplier: 'x13', payline: '4.00' },
        { multiplier: 'x12', payline: '1.80' },
        { multiplier: 'x11', payline: '1.20' },
        { multiplier: 'x10', payline: '0.80' },
        { multiplier: 'x9', payline: '0.60' },
        { multiplier: 'x8', payline: '0.40' },
        { multiplier: 'x7', payline: '0.32' },
        { multiplier: 'x6', payline: '0.20' },
        { multiplier: 'x5', payline: '0.16' },
        { multiplier: 'x4', payline: '0.08' },
    ]);
    /** Background color */
    backgroundColor = input('bg-zinc-900');
    /** Text color */
    textColor = input('text-white');
    /** Accent color for payline values */
    accentColor = input('text-yellow-200');
    static ɵfac = function ApInfoPayTableSymbolComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApInfoPayTableSymbolComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApInfoPayTableSymbolComponent, selectors: [["ap-info-pay-table-symbol"]], inputs: { symbolImage: [1, "symbolImage"], symbolName: [1, "symbolName"], symbolHeader: [1, "symbolHeader"], paylineHeader: [1, "paylineHeader"], tableData: [1, "tableData"], backgroundColor: [1, "backgroundColor"], textColor: [1, "textColor"], accentColor: [1, "accentColor"] }, decls: 10, vars: 7, consts: [[1, "flex", "flex-col", "items-center", "w-40", "overflow-hidden", 3, "ngClass"], [1, "w-full", "p-2", "flex", "justify-center", "items-center"], [1, "w-full", "grid", "grid-cols-2", "font-medium", "sm:text-sm", "text-md"], [1, "text-left", "py-2", "px-2"], [1, "text-left", "text-yellow-200", "py-2", "px-2"], [1, "w-full"], [1, "grid", "grid-cols-2", "divide-x-1", "divide-zinc-700", "border-collapse", "border", "border-zinc-700", "sm:text-sm", "text-md", "hover:bg-zinc-800/50", "transition-colors"], [1, "w-16", "h-16", "object-contain", 3, "src", "alt"], [1, "text-left", "py-2", "px-3"], [1, "text-left", "font-semibold", "py-2", "px-3", 3, "ngClass"]], template: function ApInfoPayTableSymbolComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, ApInfoPayTableSymbolComponent_Conditional_1_Template, 2, 2, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵrepeaterCreate(8, ApInfoPayTableSymbolComponent_For_9_Template, 5, 3, "div", 6, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c0, ctx.backgroundColor(), ctx.textColor()));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.symbolImage() ? 1 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.symbolHeader());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.paylineHeader(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.tableData());
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApInfoPayTableSymbolComponent, [{
        type: Component,
        args: [{ selector: 'ap-info-pay-table-symbol', imports: [CommonModule], template: "<div\n  class=\"flex flex-col items-center w-40 overflow-hidden\"\n  [ngClass]=\"[backgroundColor(), textColor()]\"\n>\n  <!-- Symbol Image -->\n  @if (symbolImage()) {\n  <div class=\"w-full p-2 flex justify-center items-center\">\n    <img\n      [src]=\"symbolImage()\"\n      [alt]=\"symbolName()\"\n      class=\"w-16 h-16 object-contain\"\n    />\n  </div>\n  }\n\n  <!-- Table Header -->\n  <div class=\"w-full grid grid-cols-2 font-medium sm:text-sm text-md\">\n    <div class=\"text-left py-2 px-2\">{{ symbolHeader() }}</div>\n    <div class=\"text-left text-yellow-200 py-2 px-2\">\n      {{ paylineHeader() }}\n    </div>\n  </div>\n\n  <!-- Table Rows -->\n  <div class=\"w-full\">\n    @for (row of tableData(); track $index) {\n    <div\n      class=\"grid grid-cols-2 divide-x-1 divide-zinc-700 border-collapse border border-zinc-700 sm:text-sm text-md hover:bg-zinc-800/50 transition-colors\"\n    >\n      <div class=\"text-left py-2 px-3\">{{ row.multiplier }}</div>\n      <div class=\"text-left font-semibold py-2 px-3\" [ngClass]=\"accentColor()\">\n        {{ row.payline }}\n      </div>\n    </div>\n    }\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApInfoPayTableSymbolComponent, { className: "ApInfoPayTableSymbolComponent", filePath: "src/app/components/ap-info-pay-table-symbol/ap-info-pay-table-symbol.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=ap-info-pay-table-symbol.component.js.map