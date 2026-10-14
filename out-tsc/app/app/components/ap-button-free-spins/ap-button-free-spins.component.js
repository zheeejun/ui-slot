import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => [a0];
export class ApButtonFreeSpinsComponent {
    currentSpins = input(103);
    totalSpins = input(486);
    scale = input(1);
    disabled = input(false);
    buttonClick = output();
    onClick() {
        if (!this.disabled()) {
            this.buttonClick.emit();
        }
    }
    getScaleStyle() {
        const scale = this.scale();
        if (!scale || scale === 1) {
            return null;
        }
        return `scale(${scale})`;
    }
    static ɵfac = function ApButtonFreeSpinsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApButtonFreeSpinsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApButtonFreeSpinsComponent, selectors: [["ap-button-free-spins"]], inputs: { currentSpins: [1, "currentSpins"], totalSpins: [1, "totalSpins"], scale: [1, "scale"], disabled: [1, "disabled"] }, outputs: { buttonClick: "buttonClick" }, decls: 7, vars: 10, consts: [[1, "relative", "items-center", "justify-center", "w-22", "h-22"], [1, "w-full", "h-full", "rounded-full", "flex", "flex-col", "items-center", "justify-center", "bg-zinc-800", "border-4", "border-yellow-300", "outline-5", "outline-zinc-900", "transition-all", "duration-200", 3, "click", "ngClass", "disabled"], [1, "font-anton", "text-yellow-200", "leading-none", "tracking-wide", "text-3xl"], [1, "w-3/4", "h-0.5", "bg-zinc-500", "my-1"], [1, "font-anton", "text-yellow-300", "leading-none", "tracking-wide", "text-xl"]], template: function ApButtonFreeSpinsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ApButtonFreeSpinsComponent_Template_button_click_1_listener() { return ctx.onClick(); });
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "div", 3);
            i0.ɵɵelementStart(5, "span", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("transform", ctx.getScaleStyle())("transform-origin", "center");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, ctx.disabled() ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-zinc-400 active:scale-95"))("disabled", ctx.disabled());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.currentSpins(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.totalSpins(), " ");
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApButtonFreeSpinsComponent, [{
        type: Component,
        args: [{ selector: 'ap-button-free-spins', imports: [CommonModule], template: "<div\n  class=\"relative items-center justify-center w-22 h-22\"\n  [style.transform]=\"getScaleStyle()\"\n  [style.transform-origin]=\"'center'\"\n>\n  <button\n    class=\"w-full h-full rounded-full flex flex-col items-center justify-center bg-zinc-800 border-4 border-yellow-300 outline-5 outline-zinc-900 transition-all duration-200\"\n    [ngClass]=\"[\n      disabled()\n        ? 'opacity-50 cursor-not-allowed'\n        : 'cursor-pointer hover:border-zinc-400 active:scale-95',\n    ]\"\n    [disabled]=\"disabled()\"\n    (click)=\"onClick()\"\n  >\n    <!-- Current Spins -->\n    <span\n      class=\"font-anton text-yellow-200 leading-none tracking-wide text-3xl\"\n    >\n      {{ currentSpins() }}\n    </span>\n\n    <!-- Divider line -->\n    <div class=\"w-3/4 h-0.5 bg-zinc-500 my-1\"></div>\n\n    <!-- Total Spins (bottom number) -->\n    <span\n      class=\"font-anton text-yellow-300 leading-none tracking-wide text-xl\"\n    >\n      {{ totalSpins() }}\n    </span>\n  </button>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApButtonFreeSpinsComponent, { className: "ApButtonFreeSpinsComponent", filePath: "src/app/components/ap-button-free-spins/ap-button-free-spins.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=ap-button-free-spins.component.js.map