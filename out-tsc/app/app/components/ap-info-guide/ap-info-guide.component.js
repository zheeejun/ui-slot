import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
function ApInfoGuideComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 2);
    i0.ɵɵelement(2, "ap-icon", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul", 4)(4, "li", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r0.icon());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.getItem1());
} }
function ApInfoGuideComponent_Conditional_1_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.getItem2());
} }
function ApInfoGuideComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵelement(2, "ap-icon", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 7)(4, "div", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ul", 9)(7, "li");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, ApInfoGuideComponent_Conditional_1_Conditional_9_Template, 2, 1, "li");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r0.icon());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.getItem1());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.getItem2() ? 9 : -1);
} }
export class ApInfoGuideComponent {
    icon = input('gift default');
    title = input('Title');
    getItem1 = input('Item 1');
    getItem2 = input('Item 2');
    variant = input('default');
    static ɵfac = function ApInfoGuideComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApInfoGuideComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApInfoGuideComponent, selectors: [["ap-info-guide"]], inputs: { icon: [1, "icon"], title: [1, "title"], getItem1: [1, "getItem1"], getItem2: [1, "getItem2"], variant: [1, "variant"] }, decls: 2, vars: 1, consts: [[1, "flex", "items-center", "gap-2", "p-2", "bg-zinc-900", "text-white"], [1, "flex", "items-start", "gap-4", "p-4", "bg-zinc-900", "text-white"], [1, "flex-shrink-0"], [1, "w-10", "h-10", 3, "name"], [1, "list-disc", "list-inside"], [1, "text-md"], [1, "w-16", "h-16", 3, "name"], [1, "flex-1"], [1, "text-2xl", "font-semibold", "text-yellow-200", "mb-4"], [1, "list-disc", "list-inside", "space-y-2", "text-base"]], template: function ApInfoGuideComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApInfoGuideComponent_Conditional_0_Template, 6, 2, "div", 0)(1, ApInfoGuideComponent_Conditional_1_Template, 10, 4, "div", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.variant() === "description" ? 0 : 1);
        } }, dependencies: [CommonModule, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApInfoGuideComponent, [{
        type: Component,
        args: [{ selector: 'ap-info-guide', imports: [CommonModule, ApIconComponent], template: "@if (variant() === \"description\") {\n  <div class=\"flex items-center gap-2 p-2 bg-zinc-900 text-white\">\n    <!-- Left: Icon (smaller) -->\n    <div class=\"flex-shrink-0\">\n      <ap-icon [name]=\"icon()\" class=\"w-10 h-10\" />\n    </div>\n    <!-- Right: single item (smaller text) -->\n    <ul class=\"list-disc list-inside\">\n      <li class=\"text-md\">{{ getItem1() }}</li>\n    </ul>\n  </div>\n} @else {\n  <div class=\"flex items-start gap-4 p-4 bg-zinc-900 text-white\">\n    <!-- Left: Icon -->\n    <div class=\"flex-shrink-0\">\n      <ap-icon [name]=\"icon()\" class=\"w-16 h-16\" />\n    </div>\n\n    <!-- Right: Title and List -->\n    <div class=\"flex-1\">\n      <div class=\"text-2xl font-semibold text-yellow-200 mb-4\">\n        {{ title() }}\n      </div>\n      <ul class=\"list-disc list-inside space-y-2 text-base\">\n        <li>{{ getItem1() }}</li>\n        @if (getItem2()) {\n          <li>{{ getItem2() }}</li>\n        }\n      </ul>\n    </div>\n  </div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApInfoGuideComponent, { className: "ApInfoGuideComponent", filePath: "src/app/components/ap-info-guide/ap-info-guide.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-info-guide.component.js.map