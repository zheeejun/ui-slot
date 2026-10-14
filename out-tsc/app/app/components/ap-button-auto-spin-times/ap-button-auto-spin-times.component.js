import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => [a0, a1];
function ApButtonAutoSpinTimesComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 2);
} }
function ApButtonAutoSpinTimesComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementStart(3, "span", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.currentSpins(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.totalSpins(), " ");
} }
function ApButtonAutoSpinTimesComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} }
export class ApButtonAutoSpinTimesComponent {
    currentSpins = input(103);
    totalSpins = input(486);
    disabled = input(false);
    buttonClick = output();
    scale = input(1);
    accentColor = input(undefined);
    variant = input('default');
    getScaleStyle() {
        const scale = this.scale();
        if (!scale || scale === 1) {
            return null;
        }
        return `scale(${scale})`;
    }
    onClick() {
        if (!this.disabled()) {
            this.buttonClick.emit();
        }
    }
    getAccentClasses() {
        if (this.accentColor() === 'double-chance-auto-spin') {
            return 'bg-blue-700 ';
        }
        return 'bg-zinc-800 ';
    }
    static ɵfac = function ApButtonAutoSpinTimesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApButtonAutoSpinTimesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApButtonAutoSpinTimesComponent, selectors: [["ap-button-auto-spin-times"]], inputs: { currentSpins: [1, "currentSpins"], totalSpins: [1, "totalSpins"], disabled: [1, "disabled"], scale: [1, "scale"], accentColor: [1, "accentColor"], variant: [1, "variant"] }, outputs: { buttonClick: "buttonClick" }, decls: 5, vars: 11, consts: [[1, "relative", "items-center", "justify-center", "w-22", "h-22"], [1, "w-full", "h-full", "rounded-full", "flex", "flex-col", "items-center", "justify-center", "border-4", "outline-5", "transition-all", "duration-200", "border-zinc-300", "outline-zinc-900", 3, "pointerdown", "ngClass", "disabled"], ["name", "infinite default", 1, "size-16", "text-white"], [1, "opacity-60", "absolute", "inset-0", "rounded-full"], [1, "font-anton", "text-white", "leading-none", "text-3xl"], [1, "w-3/4", "h-0.5", "bg-zinc-400", "my-1"], [1, "font-anton", "text-zinc-300", "leading-none", "text-xl"]], template: function ApButtonAutoSpinTimesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("pointerdown", function ApButtonAutoSpinTimesComponent_Template_button_pointerdown_1_listener() { return ctx.onClick(); });
            i0.ɵɵconditionalCreate(2, ApButtonAutoSpinTimesComponent_Conditional_2_Template, 1, 0, "ap-icon", 2)(3, ApButtonAutoSpinTimesComponent_Conditional_3_Template, 5, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, ApButtonAutoSpinTimesComponent_Conditional_4_Template, 1, 0, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("transform", ctx.getScaleStyle())("transform-origin", "center");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0, ctx.getAccentClasses(), ctx.disabled() ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-zinc-400 active:scale-95"))("disabled", ctx.disabled());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "infinity" ? 2 : 3);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.disabled() ? 4 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApButtonAutoSpinTimesComponent, [{
        type: Component,
        args: [{ selector: 'ap-button-auto-spin-times', imports: [CommonModule, ApIconComponent], template: "<div\n  class=\"relative items-center justify-center w-22 h-22\"\n  [style.transform]=\"getScaleStyle()\"\n  [style.transform-origin]=\"'center'\"\n>\n  <button\n    class=\"w-full h-full rounded-full flex flex-col items-center justify-center border-4 outline-5 transition-all duration-200 border-zinc-300 outline-zinc-900\"\n    [ngClass]=\"[\n      getAccentClasses(),\n      disabled()\n        ? 'opacity-50 cursor-not-allowed'\n        : 'cursor-pointer hover:border-zinc-400 active:scale-95',\n    ]\"\n    [disabled]=\"disabled()\"\n    (pointerdown)=\"onClick()\"\n  >\n    @if (variant() === 'infinity') {\n      <!-- Infinity -->\n      <ap-icon name=\"infinite default\" class=\"size-16 text-white\"></ap-icon>\n    } @else {\n      <!-- Default layout: currentSpins / totalSpins -->\n      <span class=\"font-anton text-white leading-none text-3xl\">\n        {{ currentSpins() }}\n      </span>\n\n      <!-- Divider line -->\n      <div class=\"w-3/4 h-0.5 bg-zinc-400 my-1\"></div>\n\n      <!-- Total Spins (bottom number) -->\n      <span class=\"font-anton text-zinc-300 leading-none text-xl\">\n        {{ totalSpins() }}\n      </span>\n    }\n  </button>\n  @if (disabled()) {\n    <div class=\"opacity-60 absolute inset-0 rounded-full\"></div>\n  }\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApButtonAutoSpinTimesComponent, { className: "ApButtonAutoSpinTimesComponent", filePath: "src/app/components/ap-button-auto-spin-times/ap-button-auto-spin-times.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=ap-button-auto-spin-times.component.js.map