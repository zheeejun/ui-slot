import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
const _c1 = (a0, a1, a2) => ({ "justify-start": a0, "justify-center": a1, "justify-end": a2 });
export class ApUiCardDevComponent {
    align = input('start');
    static ɵfac = function ApUiCardDevComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiCardDevComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiCardDevComponent, selectors: [["ap-ui-card-dev"]], inputs: { align: [1, "align"] }, ngContentSelectors: _c0, decls: 3, vars: 5, consts: [[1, "relative", "size-full", "my-4", "p-2", "rounded-xl", "bg-zinc-900", "border", "border-zinc-700", "text-md", "text-zinc-300", "overflow-visible"], [1, "relative", "flex", 3, "ngClass"]], template: function ApUiCardDevComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(1, _c1, ctx.align() === "start", ctx.align() === "center", ctx.align() === "end"));
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiCardDevComponent, [{
        type: Component,
        args: [{ selector: 'ap-ui-card-dev', imports: [CommonModule], template: "<div\n  class=\"relative size-full my-4 p-2 rounded-xl bg-zinc-900 border border-zinc-700 text-md text-zinc-300 overflow-visible\"\n>\n  <div class=\"relative flex\"\n    [ngClass]=\"{\n      'justify-start': align() === 'start',\n      'justify-center': align() === 'center',\n      'justify-end': align() === 'end'\n    }\"\n  >\n    <ng-content></ng-content>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiCardDevComponent, { className: "ApUiCardDevComponent", filePath: "src/app/components/ap-ui-card-dev/ap-ui-card-dev.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=ap-ui-card-dev.component.js.map