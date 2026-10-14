import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "bg-[linear-gradient(180deg,#E6D2A5_0%,#D4AF37_50%,#8B6E2C_100%)]": a0, "bg-[linear-gradient(180deg,#D8B4FE_0%,#A855F7_50%,#7C3AED_100%)]": a1 });
export class ApTrnCardMatchComponent {
    currentCount = input(0);
    totalCount = input(0);
    variant = input('quick');
    static ɵfac = function ApTrnCardMatchComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnCardMatchComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnCardMatchComponent, selectors: [["ap-trn-card-match"]], inputs: { currentCount: [1, "currentCount"], totalCount: [1, "totalCount"], variant: [1, "variant"] }, decls: 10, vars: 6, consts: [[1, "relative", "inline-block", "align-bottom", "select-none"], [1, "relative", "rounded-2xl", "p-[0.3rem]", 3, "ngClass"], [1, "rounded-xl", "bg-zinc-900", "w-32", "h-18", "px-2", "py-3", "flex", "items-center", "justify-center", "gap-1", "ring-1", "ring-zinc-600"], [1, "items-center", "justify-center"], ["name", "user", 1, "size-6"], [1, "flex", "items-center", "relative", "mt-4"], [1, "text-white", "text-4xl", "font-semibold", "-translate-y-1/4", "tracking-wide"], [1, "text-zinc-400", "text-lg", "font-semibold", "tracking-wide"]], template: function ApTrnCardMatchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "ap-icon", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 5)(6, "div", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx.variant() === "quick", ctx.variant() === "event"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.currentCount(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" /", ctx.totalCount(), " ");
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnCardMatchComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-card-match', standalone: true, imports: [CommonModule, ApIconComponent], template: "<div class=\"relative inline-block align-bottom select-none\">\n  <div\n    class=\"relative rounded-2xl p-[0.3rem]\"\n    [ngClass]=\"{\n      'bg-[linear-gradient(180deg,#E6D2A5_0%,#D4AF37_50%,#8B6E2C_100%)]':\n        variant() === 'quick',\n      'bg-[linear-gradient(180deg,#D8B4FE_0%,#A855F7_50%,#7C3AED_100%)]':\n        variant() === 'event'\n    }\"\n  >\n    <!-- Main card container -->\n    <div\n      class=\"rounded-xl bg-zinc-900 w-32 h-18 px-2 py-3 flex items-center justify-center gap-1 ring-1 ring-zinc-600\"\n    >\n      <div class=\"items-center justify-center\">\n        <ap-icon name=\"user\" class=\"size-6\"></ap-icon>\n      </div>\n\n      <!-- Count Display -->\n      <div class=\"flex items-center relative mt-4\">\n        <div\n          class=\"text-white text-4xl font-semibold -translate-y-1/4 tracking-wide\"\n        >\n          {{ currentCount() }}\n        </div>\n        <div class=\"text-zinc-400 text-lg font-semibold tracking-wide\">\n          /{{ totalCount() }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnCardMatchComponent, { className: "ApTrnCardMatchComponent", filePath: "src/app/components/ap-trn-card-match/ap-trn-card-match.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-trn-card-match.component.js.map