import { Component, output, input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => [a0, a1];
function ApTrnCardTitleComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "ap-icon", 1);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c0, ctx_r0.getGap(), ctx_r0.getContainerLayout()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r0.iconQuick())("ngClass", ctx_r0.getIconSize());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0, ctx_r0.getTextSize(), ctx_r0.getTextLayout()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title(), " ");
} }
function ApTrnCardTitleComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "ap-icon", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c0, ctx_r0.getGap(), ctx_r0.getContainerLayout()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r0.iconEvent())("ngClass", ctx_r0.getIconSize());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0, ctx_r0.getTextSize(), ctx_r0.getTextLayout()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title(), " ");
} }
export class ApTrnCardTitleComponent {
    /// 賽事類型，決定使用哪個圖示和標題
    variant = input('quick');
    title = input('Event Race');
    size = input('default');
    click = output();
    iconQuick = input('trophy');
    iconEvent = input('gift');
    getIconSize() {
        return this.size() === 'small' ? 'size-2' : 'size-6';
    }
    getTextSize() {
        return this.size() === 'small' ? 'text-xl' : 'text-2xl';
    }
    getGap() {
        return this.size() === 'small' ? 'gap-1' : 'gap-1';
    }
    getContainerLayout() {
        return this.size() === 'small'
            ? 'w-fit mx-auto justify-center'
            : 'w-full';
    }
    getTextLayout() {
        return this.size() === 'small'
            ? 'text-left flex-none whitespace-nowrap'
            : 'min-w-0 flex-1 text-left break-words whitespace-nowrap overflow-hidden text-ellipsis';
    }
    static ɵfac = function ApTrnCardTitleComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnCardTitleComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnCardTitleComponent, selectors: [["ap-trn-card-title"]], inputs: { variant: [1, "variant"], title: [1, "title"], size: [1, "size"], iconQuick: [1, "iconQuick"], iconEvent: [1, "iconEvent"] }, outputs: { click: "click" }, decls: 2, vars: 2, consts: [[1, "relative", "flex", "items-center", "flex-nowrap", 3, "ngClass"], [1, "text-yellow-200", "shrink-0", 3, "name", "ngClass"], [1, "font-anton", "text-yellow-200", "tracking-wider", 3, "ngClass"], [1, "text-[#CFCBFF]", "shrink-0", 3, "name", "ngClass"], [1, "font-anton", "text-[#CFCBFF]", "tracking-wider", 3, "ngClass"]], template: function ApTrnCardTitleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApTrnCardTitleComponent_Conditional_0_Template, 4, 11, "div", 0);
            i0.ɵɵconditionalCreate(1, ApTrnCardTitleComponent_Conditional_1_Template, 4, 11, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.variant() === "quick" ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "event" ? 1 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnCardTitleComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-card-title', imports: [CommonModule, NgClass, ApIconComponent], template: "<!-- Quick Variant -->\n@if (variant() === \"quick\") {\n  <div\n    class=\"relative flex items-center flex-nowrap\"\n    [ngClass]=\"[getGap(), getContainerLayout()]\"\n  >\n    <ap-icon\n      [name]=\"iconQuick()\"\n      [ngClass]=\"getIconSize()\"\n      class=\"text-yellow-200 shrink-0\"\n    />\n    <div\n      class=\"font-anton text-yellow-200 tracking-wider\"\n      [ngClass]=\"[getTextSize(), getTextLayout()]\"\n    >\n      {{ title() }}\n    </div>\n  </div>\n}\n\n<!-- Event Variant -->\n@if (variant() === \"event\") {\n  <div\n    class=\"relative flex items-center flex-nowrap\"\n    [ngClass]=\"[getGap(), getContainerLayout()]\"\n  >\n      <ap-icon\n      [name]=\"iconEvent()\"\n      [ngClass]=\"getIconSize()\"\n      class=\"text-[#CFCBFF] shrink-0\"\n    />\n    <div\n      class=\"font-anton text-[#CFCBFF] tracking-wider\"\n      [ngClass]=\"[getTextSize(), getTextLayout()]\"\n    >\n      {{ title() }}\n    </div>\n  </div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnCardTitleComponent, { className: "ApTrnCardTitleComponent", filePath: "src/app/components/ap-trn-card-title/ap-trn-card-title.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=ap-trn-card-title.component.js.map