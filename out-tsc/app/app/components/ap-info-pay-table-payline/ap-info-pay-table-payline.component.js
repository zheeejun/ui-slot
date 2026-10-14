import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => [a0];
function ApInfoPayTablePaylineComponent_For_5_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function ApInfoPayTablePaylineComponent_For_5_For_2_Template_div_click_0_listener() { const col_r2 = i0.ɵɵrestoreView(_r1).$implicit; const row_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onCellClick(row_r3, col_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const row_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0, ctx_r3.isCellActive(row_r3, col_r2) ? ctx_r3.activeCellColor() : ctx_r3.inactiveCellColor()));
} }
function ApInfoPayTablePaylineComponent_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵrepeaterCreate(1, ApInfoPayTablePaylineComponent_For_5_For_2_Template, 1, 3, "div", 4, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r3.getGridCols());
} }
export class ApInfoPayTablePaylineComponent {
    /** Payline number to display */
    paylineNumber = input(1);
    /** Grid rows count */
    rows = input(3);
    /** Grid columns count */
    cols = input(5);
    /** Active cells in the payline (highlighted in yellow) */
    activeCells = input([
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 0, col: 3 },
        { row: 0, col: 4 },
    ]);
    /** Enable cell click interaction */
    clickable = input(true);
    /** Background color for the component */
    backgroundColor = input('bg-zinc-900');
    /** Active cell color */
    activeCellColor = input('bg-yellow-300');
    /** Inactive cell color */
    inactiveCellColor = input('bg-zinc-700');
    /** Cell click event */
    cellClick = output();
    /** Generate grid array */
    getGridRows() {
        return Array.from({ length: this.rows() }, (_, i) => i);
    }
    getGridCols() {
        return Array.from({ length: this.cols() }, (_, i) => i);
    }
    /** Check if a cell is active */
    isCellActive(row, col) {
        return this.activeCells().some((cell) => cell.row === row && cell.col === col);
    }
    /** Handle cell click */
    onCellClick(row, col) {
        if (this.clickable()) {
            this.cellClick.emit({ row, col });
        }
    }
    static ɵfac = function ApInfoPayTablePaylineComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApInfoPayTablePaylineComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApInfoPayTablePaylineComponent, selectors: [["ap-info-pay-table-payline"]], inputs: { paylineNumber: [1, "paylineNumber"], rows: [1, "rows"], cols: [1, "cols"], activeCells: [1, "activeCells"], clickable: [1, "clickable"], backgroundColor: [1, "backgroundColor"], activeCellColor: [1, "activeCellColor"], inactiveCellColor: [1, "inactiveCellColor"] }, outputs: { cellClick: "cellClick" }, decls: 6, vars: 2, consts: [[1, "flex", "flex-col", "items-center", "p-1", "rounded-lg", 3, "ngClass"], [1, "text-yellow-200", "font-medium", "text-md", "mb-1"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "gap-1"], [1, "w-5", "h-5", "rounded", "transition-all", "duration-200", "border", "border-zinc-600", 3, "ngClass"], [1, "w-5", "h-5", "rounded", "transition-all", "duration-200", "border", "border-zinc-600", 3, "click", "ngClass"]], template: function ApInfoPayTablePaylineComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵrepeaterCreate(4, ApInfoPayTablePaylineComponent_For_5_Template, 3, 0, "div", 3, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.backgroundColor());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.paylineNumber(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.getGridRows());
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApInfoPayTablePaylineComponent, [{
        type: Component,
        args: [{ selector: 'ap-info-pay-table-payline', imports: [CommonModule], template: "<div\n  class=\"flex flex-col items-center p-1 rounded-lg\"\n  [ngClass]=\"backgroundColor()\"\n>\n  <!-- Payline Number -->\n  <div class=\"text-yellow-200 font-medium text-md mb-1\">\n    {{ paylineNumber() }}\n  </div>\n\n  <!-- Grid -->\n  <div class=\"flex flex-col gap-1\">\n    @for (row of getGridRows(); track row) {\n    <div class=\"flex gap-1\">\n      @for (col of getGridCols(); track col) {\n      <div\n        class=\"w-5 h-5 rounded transition-all duration-200 border border-zinc-600\"\n        [ngClass]=\"[\n          isCellActive(row, col) ? activeCellColor() : inactiveCellColor()\n        ]\"\n        (click)=\"onCellClick(row, col)\"\n      ></div>\n      }\n    </div>\n    }\n  </div>\n</div>\n", styles: ["/* Add any custom styles here if needed */\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApInfoPayTablePaylineComponent, { className: "ApInfoPayTablePaylineComponent", filePath: "src/app/components/ap-info-pay-table-payline/ap-info-pay-table-payline.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=ap-info-pay-table-payline.component.js.map