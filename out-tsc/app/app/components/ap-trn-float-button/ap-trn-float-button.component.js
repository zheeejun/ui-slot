import { Component, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4, a5) => ({ "border-yellow-300 hover:border-yellow-200": a0, "border-purple-400 hover:border-purple-200": a1, "btn-quick-idle": a2, "btn-quick-playing": a3, "btn-event-idle": a4, "btn-event-playing": a5 });
function ApTrnFloatButtonComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} }
function ApTrnFloatButtonComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} }
function ApTrnFloatButtonComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 4);
} }
function ApTrnFloatButtonComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 5);
} }
function ApTrnFloatButtonComponent_Conditional_7_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.rank());
} }
function ApTrnFloatButtonComponent_Conditional_7_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "?");
    i0.ɵɵelementEnd();
} }
function ApTrnFloatButtonComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 8);
    i0.ɵɵelement(2, "polygon", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵconditionalCreate(4, ApTrnFloatButtonComponent_Conditional_7_Conditional_4_Template, 2, 1, "span")(5, ApTrnFloatButtonComponent_Conditional_7_Conditional_5_Template, 2, 0, "span");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r0.rank() !== null && ctx_r0.rank() !== undefined ? 4 : 5);
} }
export class ApTrnFloatButtonComponent {
    iconImage = input('');
    variant = input('quick');
    isPlaying = input(false);
    rank = input(null);
    click = output();
    static ɵfac = function ApTrnFloatButtonComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnFloatButtonComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnFloatButtonComponent, selectors: [["ap-trn-float-button"]], inputs: { iconImage: [1, "iconImage"], variant: [1, "variant"], isPlaying: [1, "isPlaying"], rank: [1, "rank"] }, outputs: { click: "click" }, decls: 8, vars: 15, consts: [[1, "relative", "flex", "items-center", "justify-center", "cursor-pointer"], [1, "relative", "size-14", "rounded-full", "border-2", 3, "ngClass"], [1, "absolute", "-inset-[2px]", "rounded-full", "border-2", "border-transparent", "border-t-yellow-200", "border-r-yellow-300", "animate-spin", "pointer-events-none", 2, "animation-duration", "1.6s"], [1, "absolute", "-inset-[2px]", "rounded-full", "border-2", "border-transparent", "border-t-fuchsia-200", "border-r-purple-300", "animate-spin", "pointer-events-none", 2, "animation-duration", "1.6s"], ["name", "trophy", 1, "size-8", "mx-auto", "translate-y-[0.6rem]", "translate-x-[0.6rem]", "text-yellow-300"], ["name", "gift", 1, "size-8", "mx-auto", "translate-y-[0.6rem]", "translate-x-[0.6rem]", "text-purple-300"], [1, "absolute", "-right-4", "top-2", "-translate-y-1/2", 3, "size", "icon", "severity", "accentColor"], [1, "absolute", "top-1/2", "-left-2", "translate-y-1/6", "block", "w-8", "h-8"], ["viewBox", "0 0 100 115", 1, "w-full", "h-full", "drop-shadow-md"], ["points", "50,2 93,30 93,85 50,113 7,85 7,30", "stroke", "#FFD700", "stroke-width", "6"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-yellow-200", "text-sm", "font-bold"]], template: function ApTrnFloatButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, ApTrnFloatButtonComponent_Conditional_2_Template, 1, 0, "div", 2)(3, ApTrnFloatButtonComponent_Conditional_3_Template, 1, 0, "div", 3);
            i0.ɵɵconditionalCreate(4, ApTrnFloatButtonComponent_Conditional_4_Template, 1, 0, "ap-icon", 4)(5, ApTrnFloatButtonComponent_Conditional_5_Template, 1, 0, "ap-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "ap-button", 6);
            i0.ɵɵconditionalCreate(7, ApTrnFloatButtonComponent_Conditional_7_Template, 6, 1, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(8, _c0, ctx.variant() === "quick", ctx.variant() === "event", ctx.variant() === "quick" && !ctx.isPlaying(), ctx.variant() === "quick" && ctx.isPlaying(), ctx.variant() === "event" && !ctx.isPlaying(), ctx.variant() === "event" && ctx.isPlaying()));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "quick" && ctx.isPlaying() ? 2 : ctx.variant() === "event" && ctx.isPlaying() ? 3 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.variant() === "quick" ? 4 : 5);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("size", "small")("icon", "chevron-right")("severity", "contrast")("accentColor", ctx.variant() === "quick" ? "yellow" : "purple");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "quick" ? 7 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, ApButtonComponent, ApIconComponent], styles: [".btn-quick-idle[_ngcontent-%COMP%] {\n  background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #71471E 0%, #000002 100%);\n}\n\n.btn-quick-playing[_ngcontent-%COMP%] {\n  background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #FACC15 0%, #713F12 65%, #000002 100%);\n}\n\n.btn-event-idle[_ngcontent-%COMP%] {\n  background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #8A38F5 0%, #000002 100%);\n}\n\n.btn-event-playing[_ngcontent-%COMP%] {\n  background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #C084FC 0%, #3B0764 65%, #000002 100%);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnFloatButtonComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-float-button', imports: [CommonModule, ApButtonComponent, ApIconComponent], template: "<div class=\"relative flex items-center justify-center cursor-pointer\">\n  <div\n    class=\"relative size-14 rounded-full border-2\"\n    [ngClass]=\"{\n      'border-yellow-300 hover:border-yellow-200': variant() === 'quick',\n      'border-purple-400 hover:border-purple-200': variant() === 'event',\n      'btn-quick-idle':   variant() === 'quick' && !isPlaying(),\n      'btn-quick-playing': variant() === 'quick' && isPlaying(),\n      'btn-event-idle':    variant() === 'event' && !isPlaying(),\n      'btn-event-playing': variant() === 'event' && isPlaying()\n    }\"\n  >\n    @if (variant() === 'quick' && isPlaying()) {\n      <div\n        class=\"absolute -inset-[2px] rounded-full border-2 border-transparent border-t-yellow-200 border-r-yellow-300 animate-spin pointer-events-none\"\n        style=\"animation-duration: 1.6s;\"\n      ></div>\n    }\n    @else if (variant() === 'event' && isPlaying()) {\n      <div\n        class=\"absolute -inset-[2px] rounded-full border-2 border-transparent border-t-fuchsia-200 border-r-purple-300 animate-spin pointer-events-none\"\n        style=\"animation-duration: 1.6s;\"\n      ></div>\n    }\n\n    @if (variant() === 'quick') {\n      <ap-icon\n        name=\"trophy\"\n        class=\"size-8 mx-auto translate-y-[0.6rem] translate-x-[0.6rem] text-yellow-300\"\n      />\n    }\n    @else {\n      <ap-icon\n        name=\"gift\"\n        class=\"size-8 mx-auto translate-y-[0.6rem] translate-x-[0.6rem]  text-purple-300\"\n      />\n    }\n  </div>\n\n  <ap-button\n    class=\"absolute -right-4 top-2 -translate-y-1/2\"\n    [size]=\"'small'\"\n    [icon]=\"'chevron-right'\"\n    [severity]=\"'contrast'\"\n    [accentColor]=\"variant() === 'quick' ? 'yellow' : 'purple'\"\n  />\n\n  @if (variant() === 'quick') {\n  <div\n    class=\"absolute top-1/2 -left-2 translate-y-1/6 block w-8 h-8 \"\n  >\n    <!--Hexagon-->\n    <svg viewBox=\"0 0 100 115\" class=\"w-full h-full drop-shadow-md\">\n      <polygon\n        points=\"50,2 93,30 93,85 50,113 7,85 7,30\"\n        stroke=\"#FFD700\"\n        stroke-width=\"6\"\n      />\n    </svg>\n    <!--Rank Number-->\n    <div\n      class=\"absolute inset-0 flex items-center justify-center text-yellow-200 text-sm font-bold\"\n    >\n      @if (rank() !== null && rank() !== undefined) {\n      <span>{{ rank() }}</span>\n      } @else {\n      <span>?</span>\n      }\n    </div>\n  </div>\n  }\n</div>\n", styles: [".btn-quick-idle {\n  background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #71471E 0%, #000002 100%);\n}\n\n.btn-quick-playing {\n  background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #FACC15 0%, #713F12 65%, #000002 100%);\n}\n\n.btn-event-idle {\n  background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #8A38F5 0%, #000002 100%);\n}\n\n.btn-event-playing {\n  background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #C084FC 0%, #3B0764 65%, #000002 100%);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnFloatButtonComponent, { className: "ApTrnFloatButtonComponent", filePath: "src/app/components/ap-trn-float-button/ap-trn-float-button.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=ap-trn-float-button.component.js.map