import { Component, input, signal, effect, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { firstValueFrom, timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "opacity-0 duration-300": a0 });
const _c1 = a0 => ({ "animate-fade animate-once animate-duration-300": a0 });
export class ApTrnGameHintComponent {
    title = input('Bet x');
    multiplier = input(1);
    //* Hint Title */
    displayTitle = computed(() => {
        const text = this.title();
        if (text) {
            if (text.includes('{0}')) {
                return text.replace('{0}', `${this.multiplier()}`);
            }
            return `${text} ${this.multiplier()}`;
        }
        return `Bet x${this.multiplier()}`;
    });
    //** Hint Description */
    message = input('');
    displayMessage = computed(() => {
        const text = this.message();
        if (text) {
            if (text.includes('{0}')) {
                return text.replace('{0}', `${this.multiplier()}`);
            }
            return text;
        }
        return this.multiplier() > 1
            ? 'Points are earned for betting during the activation period.'
            : 'No points are earned for betting during the activation period.';
    });
    variant = input('quick');
    duration = input(3);
    animation = signal('in');
    close = output();
    constructor() {
        effect(async () => {
            if (this.duration() > 0) {
                this.animation.set('in');
                await firstValueFrom(timer(300 + this.duration() * 1000));
                this.animation.set('out');
                await firstValueFrom(timer(300));
                this.close.emit();
            }
        });
    }
    getBorderColor() {
        return this.variant() === 'quick'
            ? 'border-yellow-300/70'
            : 'border-purple-300/70';
    }
    getIconColor() {
        return this.variant() === 'quick' ? 'text-yellow-400' : 'text-purple-400';
    }
    static ɵfac = function ApTrnGameHintComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnGameHintComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnGameHintComponent, selectors: [["ap-trn-game-hint"]], inputs: { title: [1, "title"], multiplier: [1, "multiplier"], message: [1, "message"], variant: [1, "variant"], duration: [1, "duration"] }, outputs: { close: "close" }, decls: 9, vars: 14, consts: [[1, "relative", "w-56", "md:w-md", "duration-100", "items-center", "select-none", "ml-4", 3, "ngClass"], [1, "relative", "rounded-lg", "border-2", "bg-zinc-950/85", "shadow-2xl", "px-3", "py-3", "flex", "flex-row", "items-center", "gap-2", 3, "ngClass"], ["name", "prizes"], [1, "flex-1", "text-zinc-300"], [1, "text-sm", "font-medium"], [1, "text-sm", "text-zinc-300", "mt-1"]], template: function ApTrnGameHintComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "ap-icon", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx.animation() === "out"));
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.getBorderColor());
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c1, ctx.animation() === "in"));
            i0.ɵɵadvance();
            i0.ɵɵclassMap("size-6 shrink-0 " + ctx.getIconColor());
            i0.ɵɵadvance(3);
            i0.ɵɵclassMap(ctx.getIconColor());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.displayTitle());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.displayMessage(), " ");
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnGameHintComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-game-hint', standalone: true, imports: [CommonModule, ApIconComponent], template: "<div\n  class=\"relative w-56 md:w-md duration-100 items-center select-none ml-4\"\n  [ngClass]=\"{'opacity-0 duration-300': animation() === 'out'}\"\n>\n  <div\n    class=\"relative rounded-lg border-2 bg-zinc-950/85 shadow-2xl px-3 py-3 flex flex-row items-center gap-2\"\n    [class]=\"getBorderColor()\"\n    [ngClass]=\"{\n      'animate-fade animate-once animate-duration-300': animation() === 'in',\n    }\"\n  >\n    <!-- Icon -->\n    <ap-icon\n      name=\"prizes\"\n      [class]=\"'size-6 shrink-0 ' + getIconColor()\"/>\n\n    <!-- Content -->\n    <div class=\"flex-1 text-zinc-300\">\n      <div class=\"text-sm font-medium\">\n        <span [class]=\"getIconColor()\">{{ displayTitle() }}</span>\n      </div>\n      <div class=\"text-sm text-zinc-300 mt-1\">\n        {{ displayMessage() }}\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnGameHintComponent, { className: "ApTrnGameHintComponent", filePath: "src/app/components/ap-trn-game-hint/ap-trn-game-hint.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=ap-trn-game-hint.component.js.map