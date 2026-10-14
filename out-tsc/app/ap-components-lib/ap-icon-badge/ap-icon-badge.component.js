import { Component, input } from '@angular/core';
import { ApIconComponent } from '../ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
function ApIconBadgeComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵlistener("click", function ApIconBadgeComponent_Conditional_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.stopPropagation()); })("pointerdown", function ApIconBadgeComponent_Conditional_2_Template_div_pointerdown_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled-cover-full", ctx_r1.disabledCoverVariant() === "full")("disabled-cover-half", ctx_r1.disabledCoverVariant() === "half");
} }
function ApIconBadgeComponent_Conditional_3_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", "30%")("height", "30%");
    i0.ɵɵclassProp("disabled-cover-full", ctx_r1.disabledCoverVariant() === "full")("disabled-cover-half", ctx_r1.disabledCoverVariant() === "half")("top-0", ctx_r1.badgeTop() === "top-0");
} }
function ApIconBadgeComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 4);
    i0.ɵɵconditionalCreate(1, ApIconBadgeComponent_Conditional_3_Conditional_1_Template, 1, 10, "div", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", "30%")("height", "30%");
    i0.ɵɵclassProp("top-0", ctx_r1.badgeTop() === "top-0");
    i0.ɵɵproperty("name", "icon-badge");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.disabled() ? 1 : -1);
} }
export class ApIconBadgeComponent {
    name = input('gift default');
    hasBadge = input(false);
    badgeTop = input('top-0');
    disabled = input(false);
    disabledCoverVariant = input('full');
    static ɵfac = function ApIconBadgeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApIconBadgeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApIconBadgeComponent, selectors: [["ap-icon-badge"]], inputs: { name: [1, "name"], hasBadge: [1, "hasBadge"], badgeTop: [1, "badgeTop"], disabled: [1, "disabled"], disabledCoverVariant: [1, "disabledCoverVariant"] }, decls: 4, vars: 5, consts: [[1, "relative", "size-full"], [1, "size-full", 3, "name"], [1, "disabled-cover", "absolute", "inset-0", 3, "disabled-cover-full", "disabled-cover-half"], [1, "disabled-cover", "absolute", "inset-0", 3, "click", "pointerdown"], [1, "absolute", "right-0", "pointer-events-none", 3, "name"], [1, "disabled-cover", "absolute", "right-0", "pointer-events-none", 3, "disabled-cover-full", "disabled-cover-half", "top-0", "width", "height"], [1, "disabled-cover", "absolute", "right-0", "pointer-events-none"]], template: function ApIconBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "ap-icon", 1);
            i0.ɵɵconditionalCreate(2, ApIconBadgeComponent_Conditional_2_Template, 1, 4, "div", 2);
            i0.ɵɵconditionalCreate(3, ApIconBadgeComponent_Conditional_3_Template, 2, 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("cursor-not-allowed", ctx.disabled());
            i0.ɵɵadvance();
            i0.ɵɵproperty("name", ctx.name());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.disabled() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.hasBadge() ? 3 : -1);
        } }, dependencies: [ApIconComponent], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1 / 1;\n}\n\n.disabled-cover[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.disabled-cover-full[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n\n.disabled-cover-half[_ngcontent-%COMP%] {\n  border-radius: 20%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApIconBadgeComponent, [{
        type: Component,
        args: [{ selector: 'ap-icon-badge', standalone: true, imports: [ApIconComponent], template: "<div class=\"relative size-full\" [class.cursor-not-allowed]=\"disabled()\">\n  <ap-icon [name]=\"name()\" class=\"size-full\" />\n  @if (disabled()) {\n    <div\n      class=\"disabled-cover absolute inset-0\"\n      [class.disabled-cover-full]=\"disabledCoverVariant() === 'full'\"\n      [class.disabled-cover-half]=\"disabledCoverVariant() === 'half'\"\n      (click)=\"$event.stopPropagation()\"\n      (pointerdown)=\"$event.stopPropagation()\"\n    ></div>\n  }\n  @if (hasBadge()) {\n    <ap-icon [name]=\"'icon-badge'\"\n      class=\"absolute right-0 pointer-events-none\"\n      [class.top-0]=\"badgeTop() === 'top-0'\"\n      [style.width]=\"'30%'\"\n      [style.height]=\"'30%'\"\n    />\n    @if (disabled()) {\n      <div\n        class=\"disabled-cover absolute right-0 pointer-events-none\"\n        [class.disabled-cover-full]=\"disabledCoverVariant() === 'full'\"\n        [class.disabled-cover-half]=\"disabledCoverVariant() === 'half'\"\n        [class.top-0]=\"badgeTop() === 'top-0'\"\n        [style.width]=\"'30%'\"\n        [style.height]=\"'30%'\"\n      ></div>\n    }\n  }\n</div>\n", styles: [":host {\n  display: inline-block;\n  aspect-ratio: 1 / 1;\n}\n\n.disabled-cover {\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.disabled-cover-full {\n  border-radius: 100%;\n}\n\n.disabled-cover-half {\n  border-radius: 20%;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApIconBadgeComponent, { className: "ApIconBadgeComponent", filePath: "src/ap-components-lib/ap-icon-badge/ap-icon-badge.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-icon-badge.component.js.map