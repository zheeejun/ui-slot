import { Component, input, signal, effect, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom, timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "scale-250 opacity-0 duration-500": a0 });
const _c1 = a0 => ({ "animate-fade animate-once animate-duration-200": a0 });
const _c2 = (a0, a1, a2) => ({ "animate-jump-in animate-ease-in-out animate-once duration-500 scale-120": a0, "text-yellow-300 font-anton": a1, "text-purple-400 font-anton": a2 });
export class ApTrnGameStartingComponent {
    variant = input('quick');
    message = input('Game Starting');
    duration = input(1500);
    setAnimation = input('default');
    animation = signal('default');
    close = output();
    constructor() {
        effect(async () => {
            if (this.setAnimation() === 'in') {
                this.animation.set('in');
                await firstValueFrom(timer(this.duration()));
                this.animation.set('out');
                await firstValueFrom(timer(500));
                this.close.emit();
            }
            else if (this.setAnimation() === 'out') {
                await firstValueFrom(timer(500));
                this.animation.set('out');
            }
        });
    }
    static ɵfac = function ApTrnGameStartingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnGameStartingComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnGameStartingComponent, selectors: [["ap-trn-game-starting"]], inputs: { variant: [1, "variant"], message: [1, "message"], duration: [1, "duration"], setAnimation: [1, "setAnimation"] }, outputs: { close: "close" }, decls: 4, vars: 12, consts: [[1, "relative", "flex", "w-full", "h-16", "items-center", "justify-center", "select-none", "font-anton", "transition-all", 3, "ngClass"], [1, "absolute", "w-full", "h-full", "bg-linear-to-r", "from-zinc-900/30", "via-zinc-900/95", "to-zinc-900/30", "transition-opacity", 3, "ngClass"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-center", "text-4xl", "tracking-[.05em]", "uppercase", "transition-all", "drop-shadow-lg", 3, "ngClass"]], template: function ApTrnGameStartingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx.animation() === "out"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1, ctx.animation() === "in"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c2, ctx.animation() === "in", ctx.variant() === "quick", ctx.variant() === "event"));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.message(), " ");
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnGameStartingComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-game-starting', imports: [CommonModule], template: "<div\n  class=\"relative flex w-full h-16 items-center justify-center select-none font-anton transition-all\"\n  [ngClass]=\"{ 'scale-250 opacity-0 duration-500': animation() === 'out' }\"\n>\n  <!-- Background bar -->\n  <div\n    class=\"absolute w-full h-full bg-linear-to-r from-zinc-900/30 via-zinc-900/95 to-zinc-900/30 transition-opacity\"\n    [ngClass]=\"{\n      'animate-fade animate-once animate-duration-200': animation() === 'in',\n    }\"\n  ></div>\n\n  <!-- Text -->\n  <div\n    class=\"absolute inset-0 flex items-center justify-center text-center text-4xl tracking-[.05em] uppercase transition-all drop-shadow-lg\"\n    [ngClass]=\"{\n      'animate-jump-in animate-ease-in-out animate-once duration-500 scale-120':\n        animation() === 'in',\n      'text-yellow-300 font-anton': variant() === 'quick',\n      'text-purple-400 font-anton': variant() === 'event',\n    }\"\n  >\n    {{ message() }}\n  </div>\n</div>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnGameStartingComponent, { className: "ApTrnGameStartingComponent", filePath: "src/app/components/ap-trn-game-starting/ap-trn-game-starting.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-trn-game-starting.component.js.map