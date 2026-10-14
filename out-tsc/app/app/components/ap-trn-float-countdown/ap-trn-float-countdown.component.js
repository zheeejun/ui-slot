import { Component, input, output, signal, computed, } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "text-yellow-200": a0, "text-purple-200": a1 });
function ApTrnFloatCountdownComponent_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtext(4, "DD");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.timeRemaining().days), " ");
} }
function ApTrnFloatCountdownComponent_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtext(4, "HH");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.timeRemaining().hours), " ");
} }
function ApTrnFloatCountdownComponent_Conditional_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtext(4, "MM");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.timeRemaining().minutes), " ");
} }
function ApTrnFloatCountdownComponent_Conditional_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtext(4, "SS");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.timeRemaining().seconds), " ");
} }
function ApTrnFloatCountdownComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApTrnFloatCountdownComponent_Conditional_1_Conditional_0_Template, 5, 5, "div", 2);
    i0.ɵɵconditionalCreate(1, ApTrnFloatCountdownComponent_Conditional_1_Conditional_1_Template, 5, 5, "div", 2);
    i0.ɵɵconditionalCreate(2, ApTrnFloatCountdownComponent_Conditional_1_Conditional_2_Template, 5, 5, "div", 2);
    i0.ɵɵconditionalCreate(3, ApTrnFloatCountdownComponent_Conditional_1_Conditional_3_Template, 5, 5, "div", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.isShowDaysHours() ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isShowDaysHours() || ctx_r0.isShowHoursMinutes() ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isShowHoursMinutes() || ctx_r0.isShowMinutesSeconds() ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isShowMinutesSeconds() ? 3 : -1);
} }
function ApTrnFloatCountdownComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "span", 7);
    i0.ɵɵtext(2, "EXPIRED");
    i0.ɵɵelementEnd()();
} }
export class ApTrnFloatCountdownComponent {
    /** 結束的時間 (Unix timestamp 毫秒) */
    targetTime = input(Date.now() + 3 * 60 * 1000); // Default: 3 minutes from now
    variant = input('quick');
    onComplete = output();
    onUpdate = output(); // Emits remaining seconds
    /** 預設是5分鐘後 */
    target = computed(() => { return this.targetTime() ?? (new Date().getTime() + 5 * 60 * 1000); });
    timeRemaining = signal({ days: 0, hours: 0, minutes: 0, seconds: 0, });
    isExpired = signal(false);
    /** 是否顯示天數與小時 */
    isShowDaysHours = computed(() => {
        return this.timeRemaining().days > 0;
    });
    /** 是否顯示小時與分鐘 */
    isShowHoursMinutes = computed(() => {
        return this.timeRemaining().days <= 0 && this.timeRemaining().hours > 0;
    });
    /** 是否顯示分鐘與秒數 */
    isShowMinutesSeconds = computed(() => {
        return this.timeRemaining().days <= 0 && this.timeRemaining().hours <= 0 && (this.timeRemaining().minutes > 0 || this.timeRemaining().seconds >= 0);
    });
    intervalId;
    ngOnInit() {
        this.startCountdown();
    }
    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
    startCountdown() {
        this.updateCountdown();
        this.intervalId = setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }
    updateCountdown() {
        const difference = this.target() - Date.now();
        if (difference <= 0) {
            this.timeRemaining.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            this.isExpired.set(true);
            this.onComplete.emit();
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
            return;
        }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        this.timeRemaining.set({ days, hours, minutes, seconds });
        this.isExpired.set(false);
        // Emit total remaining seconds
        const totalSeconds = Math.floor(difference / 1000);
        this.onUpdate.emit(totalSeconds);
    }
    formatNumber(num) {
        return num.toString().padStart(2, '0');
    }
    static ɵfac = function ApTrnFloatCountdownComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnFloatCountdownComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnFloatCountdownComponent, selectors: [["ap-trn-float-countdown"]], inputs: { targetTime: [1, "targetTime"], variant: [1, "variant"] }, outputs: { onComplete: "onComplete", onUpdate: "onUpdate" }, decls: 3, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "gap-2", "w-full"], [1, "countdown-expired"], [1, "flex", "relative", "items-center", "gap-1"], [1, "flex", "relative", "items-center"], [1, "font-anton", "text-3xl", "tracking-[.05em]", 3, "ngClass"], [1, "font-anton", "text-md", "text-zinc-400", "tracking-wide", "ml-1"], [1, "font-anton", "text-3xl", "tracking-[.05em]", "drop-shadow-md", 3, "ngClass"], [1, "text-red-400", "text-2xl", "md:text-3xl", "font-bold"]], template: function ApTrnFloatCountdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, ApTrnFloatCountdownComponent_Conditional_1_Template, 4, 4)(2, ApTrnFloatCountdownComponent_Conditional_2_Template, 3, 0, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.isExpired() ? 1 : 2);
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnFloatCountdownComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-float-countdown', standalone: true, imports: [CommonModule], template: "<div class=\"flex items-center justify-center gap-2 w-full\">\n  @if (!isExpired()) {\n    <!-- Days -->\n    @if (isShowDaysHours()) {\n    <div class=\" flex relative items-center gap-1\">\n      <div \n        class=\"font-anton text-3xl tracking-[.05em]\"\n        [ngClass]=\"{\n          'text-yellow-200': variant() === 'quick',\n          'text-purple-200': variant() === 'event'\n        }\"\n      >\n        {{ formatNumber(timeRemaining().days) }}\n      </div>\n      <div class=\"font-anton text-md text-zinc-400 tracking-wide ml-1\">DD</div>\n    </div>}\n\n    <!-- Hours -->\n    @if (isShowDaysHours() || isShowHoursMinutes()) {\n    <div class=\" flex relative items-center gap-1\">\n      <div \n        class=\"font-anton text-3xl tracking-[.05em] drop-shadow-md\"\n        [ngClass]=\"{\n          'text-yellow-200': variant() === 'quick',\n          'text-purple-200': variant() === 'event'\n        }\"\n      >\n        {{ formatNumber(timeRemaining().hours) }}\n      </div>\n      <div class=\"font-anton text-md text-zinc-400 tracking-wide ml-1\">HH</div>\n    </div>}\n\n    <!-- Minutes -->\n    @if (isShowHoursMinutes() || isShowMinutesSeconds()) {\n    <div class=\" flex relative items-center gap-1\">\n      <div \n        class=\"font-anton text-3xl tracking-[.05em]\"\n        [ngClass]=\"{\n          'text-yellow-200': variant() === 'quick',\n          'text-purple-200': variant() === 'event'\n        }\"\n      >\n        {{ formatNumber(timeRemaining().minutes) }}\n      </div>\n      <div class=\"font-anton text-md text-zinc-400 tracking-wide ml-1\">MM</div>\n    </div>}\n\n    <!-- Seconds -->\n    @if (isShowMinutesSeconds()) {\n    <div class=\"flex relative items-center\">\n      <div \n        class=\"font-anton text-3xl tracking-[.05em]\"\n        [ngClass]=\"{\n          'text-yellow-200': variant() === 'quick',\n          'text-purple-200': variant() === 'event'\n        }\"\n      >\n        {{ formatNumber(timeRemaining().seconds) }}\n      </div>\n      <div class=\"font-anton text-md text-zinc-400 tracking-wide ml-1\">SS</div>\n    </div>}\n  } @else {\n    <!-- Expired Message -->\n    <div class=\"countdown-expired\">\n      <span class=\"text-red-400 text-2xl md:text-3xl font-bold\">EXPIRED</span>\n    </div>\n  }\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnFloatCountdownComponent, { className: "ApTrnFloatCountdownComponent", filePath: "src/app/components/ap-trn-float-countdown/ap-trn-float-countdown.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=ap-trn-float-countdown.component.js.map