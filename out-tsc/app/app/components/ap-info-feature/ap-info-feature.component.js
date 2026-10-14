import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
function ApInfoFeatureComponent_Conditional_5_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "img", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imagePath_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", imagePath_r1, i0.ɵɵsanitizeUrl)("alt", "Symbol " + ($index_r2 + 1));
} }
function ApInfoFeatureComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵrepeaterCreate(1, ApInfoFeatureComponent_Conditional_5_For_2_Template, 2, 2, "div", 4, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.symbolImages());
} }
export class ApInfoFeatureComponent {
    title = input('Feature Title');
    description = input('Feature description goes here.');
    symbolImages = input([]);
    variant = input('with-images');
    static ɵfac = function ApInfoFeatureComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApInfoFeatureComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApInfoFeatureComponent, selectors: [["ap-info-feature"]], inputs: { title: [1, "title"], description: [1, "description"], symbolImages: [1, "symbolImages"], variant: [1, "variant"] }, decls: 6, vars: 3, consts: [[1, "flex", "flex-col", "items-start", "p-6"], [1, "text-2xl", "font-semibold", "mb-4", "text-yellow-200"], [1, "mb-4", "text-white"], [1, "flex", "flex-wrap", "gap-4", "mt-2"], [1, "flex", "items-center", "justify-center"], [1, "object-contain", "w-20", "h-20", 3, "src", "alt"]], template: function ApInfoFeatureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, ApInfoFeatureComponent_Conditional_5_Template, 3, 0, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.title(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.description(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "with-images" && ctx.symbolImages().length > 0 ? 5 : -1);
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApInfoFeatureComponent, [{
        type: Component,
        args: [{ selector: 'ap-info-feature', imports: [CommonModule], template: "<div class=\"flex flex-col items-start p-6\">\n  <!-- Title -->\n  <div class=\"text-2xl font-semibold mb-4 text-yellow-200\">\n    {{ title() }}\n  </div>\n\n  <!-- Description -->\n  <div class=\"mb-4 text-white\">\n    {{ description() }}\n  </div>\n\n  <!-- Symbol Images -->\n  @if (variant() === 'with-images' && symbolImages().length > 0) {\n  <div class=\"flex flex-wrap gap-4 mt-2\">\n    @for (imagePath of symbolImages(); track imagePath) {\n    <div class=\"flex items-center justify-center\">\n      <img\n        [src]=\"imagePath\"\n        [alt]=\"'Symbol ' + ($index + 1)\"\n        class=\"object-contain w-20 h-20 \"\n      />\n    </div>\n    }\n  </div>\n  }\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApInfoFeatureComponent, { className: "ApInfoFeatureComponent", filePath: "src/app/components/ap-info-feature/ap-info-feature.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=ap-info-feature.component.js.map