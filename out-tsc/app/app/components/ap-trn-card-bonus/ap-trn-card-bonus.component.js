import { Component, computed, input, signal, effect, untracked, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "bg-[linear-gradient(180deg,#E6D2A5_0%,#D4AF37_50%,#8B6E2C_100%)]": a0, "bg-[linear-gradient(180deg,#D8B4FE_0%,#A855F7_50%,#7C3AED_100%)]": a1 });
const _c1 = (a0, a1) => ({ "text-yellow-gradient": a0, "text-purple-gradient": a1 });
function ApTrnCardBonusComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-loading-overlay", 7);
} }
export class ApTrnCardBonusComponent {
    multiplierTitle = input('BET');
    isLoading = input(false);
    currency = input('$');
    amount = input(null);
    isAnimated = input(false);
    _displayValue = signal(0);
    _initialized = false;
    _animationFrameId = null;
    displayAmount = computed(() => {
        if (!this.amount()) {
            return '----';
        }
        return this.formatNumber(Math.floor(this._displayValue()));
    });
    constructor() {
        effect(() => this.handleAmountChange());
    }
    /**  處理數字滾動動畫 */
    handleAmountChange() {
        // 不播動畫
        if (!this.isAnimated()) {
            this.cancelAnimation();
            this._displayValue.set(this.amount() || 0);
            return;
        }
        // 動畫演出
        const target = this.amount();
        untracked(() => {
            if (target === null || target === undefined) {
                this.cancelAnimation();
                this._displayValue.set(0);
                return;
            }
            if (!this._initialized) {
                this._displayValue.set(target);
                this._initialized = true;
                return;
            }
            const current = this._displayValue();
            if (target > current) {
                this.animateValue(current, target);
            }
            else {
                this.cancelAnimation();
                this._displayValue.set(target);
            }
        });
    }
    /** 執行數字滾動動畫 */
    animateValue(start, end) {
        this.cancelAnimation();
        const duration = 1000;
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            const nextVal = start + (end - start) * ease;
            this._displayValue.set(nextVal);
            if (progress < 1) {
                this._animationFrameId = requestAnimationFrame(animate);
            }
            else {
                this._displayValue.set(end);
                this._animationFrameId = null;
            }
        };
        this._animationFrameId = requestAnimationFrame(animate);
    }
    /** 取消數字滾動動畫 */
    cancelAnimation() {
        if (this._animationFrameId !== null) {
            cancelAnimationFrame(this._animationFrameId);
            this._animationFrameId = null;
        }
    }
    ngOnDestroy() {
        this.cancelAnimation();
    }
    multiplier = input(null);
    multiplierString = computed(() => {
        const mult = this.multiplier();
        return mult !== null && mult !== undefined ? `x${mult}` : '----';
    });
    multiplierDisplay = computed(() => {
        const text = this.multiplierTitle();
        if (text) {
            if (text.includes('{0}')) {
                const mult = this.multiplier();
                return text.replace('{0}', `${mult !== null && mult !== undefined ? mult : '----'}`);
            }
            return `${text} ${this.multiplierString()}`;
        }
        return this.multiplierString();
    });
    variant = input('quick');
    coinImage = input('');
    betImage = input('');
    // Format number same as ap-row-list
    formatNumber(value) {
        if (value === undefined)
            return "";
        const num = value;
        if (isNaN(num))
            return value.toString();
        if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
        }
        if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (num >= 100_000) {
            return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return num.toLocaleString();
    }
    static ɵfac = function ApTrnCardBonusComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnCardBonusComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnCardBonusComponent, selectors: [["ap-trn-card-bonus"]], inputs: { multiplierTitle: [1, "multiplierTitle"], isLoading: [1, "isLoading"], currency: [1, "currency"], amount: [1, "amount"], isAnimated: [1, "isAnimated"], multiplier: [1, "multiplier"], variant: [1, "variant"], coinImage: [1, "coinImage"], betImage: [1, "betImage"] }, decls: 10, vars: 12, consts: [[1, "relative", "inline-block", "align-bottom", "select-none"], [1, "relative", "rounded-2xl", "p-[0.3rem]", 3, "ngClass"], [1, "rounded-xl", "bg-zinc-900", "w-32", "h-18", "overflow-hidden", "ring-1", "ring-zinc-600"], [1, "bg-black", "h-12", "flex", "items-center", "justify-center", "relative"], [1, "font-anton", "text-3xl", "font-bold", 3, "ngClass"], [1, "bg-zinc-800", "h-6", "flex", "items-center", "justify-center"], [1, "text-md", "font-bold", "text-zinc-300", "ml-1"], [1, "absolute", "inset-0", "bg-black/50"]], template: function ApTrnCardBonusComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 5)(7, "span", 6);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(9, ApTrnCardBonusComponent_Conditional_9_Template, 1, 0, "ap-loading-overlay", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c0, ctx.variant() === "quick", ctx.variant() === "event"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c1, ctx.variant() === "quick", ctx.variant() === "event"));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate2(" ", ctx.currency(), "", ctx.displayAmount(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.multiplierDisplay());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 9 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, ApLoadingOverlayComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnCardBonusComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-card-bonus', standalone: true, imports: [CommonModule, ApLoadingOverlayComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"relative inline-block align-bottom select-none\">\n  <div\n    class=\"relative rounded-2xl p-[0.3rem]\"\n    [ngClass]=\"{\n      'bg-[linear-gradient(180deg,#E6D2A5_0%,#D4AF37_50%,#8B6E2C_100%)]':\n        variant() === 'quick',\n      'bg-[linear-gradient(180deg,#D8B4FE_0%,#A855F7_50%,#7C3AED_100%)]':\n        variant() === 'event'\n    }\"\n  >\n    <!-- Main card container -->\n    <div\n      class=\"rounded-xl bg-zinc-900 w-32 h-18 overflow-hidden ring-1 ring-zinc-600\"\n    >\n      <div class=\"bg-black h-12 flex items-center justify-center relative\">\n        <!-- Amount text -->\n        <div\n          class=\"font-anton text-3xl font-bold\"\n          [ngClass]=\"{\n            'text-yellow-gradient': variant() === 'quick',\n            'text-purple-gradient': variant() === 'event'\n          }\"\n        >\n          {{ currency() }}{{ displayAmount() }}\n        </div>\n      </div>\n\n      <!-- Bottom section: Bet multiplier -->\n      <div class=\" bg-zinc-800 h-6 flex items-center justify-center\">\n        <!-- Bet text -->\n        <span class=\"text-md font-bold text-zinc-300 ml-1\"\n          >{{ multiplierDisplay() }}</span>\n      </div>\n    </div>\n  </div>\n  @if (isLoading()) {<ap-loading-overlay class=\"absolute inset-0 bg-black/50\"/>}\n</div>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnCardBonusComponent, { className: "ApTrnCardBonusComponent", filePath: "src/app/components/ap-trn-card-bonus/ap-trn-card-bonus.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-trn-card-bonus.component.js.map