import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
function ApCashdropCardComponentCountdown_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "span", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 6);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 4)(9, "span", 5);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 6);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 4)(14, "span", 5);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 6);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 4)(19, "span", 5);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 6);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.days()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.daysLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.hours()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.hrsLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.minutes()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.minsLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.seconds()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.secsLabel());
} }
function ApCashdropCardComponentCountdown_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "span", 10);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 9)(9, "span", 10);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 11);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 9)(14, "span", 10);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 11);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 9)(19, "span", 10);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 11);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.days()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.daysLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.hours()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.hrsLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.minutes()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.minsLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.seconds()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.secsLabel());
} }
export class ApCashdropCardComponentCountdown {
    daysLabel = input('DAYS');
    hrsLabel = input('HRS');
    minsLabel = input('MINS');
    secsLabel = input('SECS');
    /** 結束時間 (Unix timestamp 豪秒) */
    endTime = input(null);
    days = signal(0);
    hours = signal(23);
    minutes = signal(59);
    seconds = signal(2);
    variant = input('default');
    timer;
    ngOnInit() {
        this.updateCountdown();
        this.timer = setInterval(() => this.updateCountdown(), 1000);
    }
    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    updateCountdown() {
        const endTime = this.endTime();
        if (endTime === null) {
            this.days.set(0);
            this.hours.set(0);
            this.minutes.set(0);
            this.seconds.set(0);
            return;
        }
        const distance = endTime - Date.now();
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.days.set(days);
            this.hours.set(hours);
            this.minutes.set(minutes);
            this.seconds.set(seconds);
        }
        else {
            this.days.set(0);
            this.hours.set(0);
            this.minutes.set(0);
            this.seconds.set(0);
        }
    }
    formatTime(value) {
        return value.toString().padStart(2, '0');
    }
    static ɵfac = function ApCashdropCardComponentCountdown_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApCashdropCardComponentCountdown)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApCashdropCardComponentCountdown, selectors: [["ap-cashdrop-card-component-countdown"]], inputs: { daysLabel: [1, "daysLabel"], hrsLabel: [1, "hrsLabel"], minsLabel: [1, "minsLabel"], secsLabel: [1, "secsLabel"], endTime: [1, "endTime"], variant: [1, "variant"] }, decls: 2, vars: 2, consts: [[1, "flex", "items-center", "justify-left"], [1, "flex", "items-center", "justify-center"], [1, "w-full", "max-w-[13.75rem]", "rounded-lg", "border", "border-yellow-200/90", "bg-gradient-to-b", "from-zinc-900", "to-zinc-00", "px-2", "py-2"], [1, "grid", "grid-cols-4", "gap-2", "sm:divide-x-2", "sm:divide-zinc-700/50"], [1, "flex", "flex-col", "items-center", "min-w-[3rem]"], [1, "text-yellow-200", "text-2xl", "font-bold", "leading-none"], [1, "text-yellow-200/90", "text-[0.6rem]", "font-medium", "tracking-wider", "mt-0.5"], [1, "w-full", "max-w-[13.75rem]", "rounded-lg", "border", "border-purple-200/90", "bg-gradient-to-b", "from-zinc-900", "to-zinc-00", "px-2", "py-2"], [1, "grid", "grid-cols-4", "gap-1", "sm:divide-x-2", "sm:divide-zinc-700/50"], [1, "flex", "flex-col", "items-center", "min-w-[1rem]"], [1, "text-purple-200", "text-md", "font-bold", "leading-none"], [1, "text-purple-200/90", "text-[0.55rem]", "font-medium", "tracking-wider", "mt-0.5"]], template: function ApCashdropCardComponentCountdown_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApCashdropCardComponentCountdown_Conditional_0_Template, 23, 8, "div", 0);
            i0.ɵɵconditionalCreate(1, ApCashdropCardComponentCountdown_Conditional_1_Template, 23, 8, "div", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.variant() === "default" ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "event" ? 1 : -1);
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApCashdropCardComponentCountdown, [{
        type: Component,
        args: [{ selector: 'ap-cashdrop-card-component-countdown', standalone: true, imports: [CommonModule], template: "<!-- Quick Variant -->\n@if (variant() === 'default') {\n<div class=\"flex items-center justify-left\">\n  <div\n    class=\"w-full max-w-[13.75rem] rounded-lg border border-yellow-200/90\n           bg-gradient-to-b from-zinc-900 to-zinc-00 \n           px-2 py-2\"\n  >\n    <div class=\"grid grid-cols-4 gap-2 sm:divide-x-2 sm:divide-zinc-700/50\">\n      <!-- DAYS -->\n      <div class=\"flex flex-col items-center min-w-[3rem]\">\n        <span class=\"text-yellow-200 text-2xl font-bold leading-none\">\n          {{ formatTime(days()) }}\n        </span>\n        <span class=\"text-yellow-200/90 text-[0.6rem] font-medium tracking-wider mt-0.5\">{{daysLabel()}}</span>\n      </div>\n      <!-- HRS -->\n      <div class=\"flex flex-col items-center min-w-[3rem]\">\n        <span class=\"text-yellow-200 text-2xl font-bold leading-none\">\n          {{ formatTime(hours()) }}\n        </span>\n        <span\n          class=\"text-yellow-200/90 text-[0.6rem] font-medium tracking-wider mt-0.5\"\n          >{{hrsLabel()}}</span\n        >\n      </div>\n      <!-- MINS -->\n      <div class=\"flex flex-col items-center min-w-[3rem]\">\n        <span class=\"text-yellow-200 text-2xl font-bold leading-none\">\n          {{ formatTime(minutes()) }}\n        </span>\n        <span\n          class=\"text-yellow-200/90 text-[0.6rem] font-medium tracking-wider mt-0.5\"\n          >{{minsLabel()}}</span\n        >\n      </div>\n      <!-- SECS -->\n      <div class=\"flex flex-col items-center min-w-[3rem]\">\n        <span class=\"text-yellow-200 text-2xl font-bold leading-none\">\n          {{ formatTime(seconds()) }}\n        </span>\n        <span\n          class=\"text-yellow-200/90 text-[0.6rem] font-medium tracking-wider mt-0.5\"\n          >{{secsLabel()}}</span\n        >\n      </div>\n    </div>\n  </div>\n</div>\n}\n\n<!-- Event Variant -->\n@if (variant() === 'event') {\n<div class=\"flex items-center justify-center\">\n  <div\n    class=\"w-full max-w-[13.75rem] rounded-lg border border-purple-200/90 bg-gradient-to-b from-zinc-900 to-zinc-00 px-2 py-2\"\n  >\n    <div class=\"grid grid-cols-4 gap-1 sm:divide-x-2 sm:divide-zinc-700/50\">\n      <!-- DAYS -->\n      <div class=\"flex flex-col items-center min-w-[1rem]\">\n        <span class=\"text-purple-200 text-md font-bold leading-none\">\n          {{ formatTime(days()) }}\n        </span>\n        <span\n          class=\"text-purple-200/90 text-[0.55rem] font-medium tracking-wider mt-0.5\"\n          >{{daysLabel()}}</span\n        >\n      </div>\n      <!-- HRS -->\n      <div class=\"flex flex-col items-center min-w-[1rem]\">\n        <span class=\"text-purple-200 text-md font-bold leading-none\">\n          {{ formatTime(hours()) }}\n        </span>\n        <span\n          class=\"text-purple-200/90 text-[0.55rem] font-medium tracking-wider mt-0.5\"\n          >{{hrsLabel()}}</span\n        >\n      </div>\n      <!-- MINS -->\n      <div class=\"flex flex-col items-center min-w-[1rem]\">\n        <span class=\"text-purple-200 text-md font-bold leading-none\">\n          {{ formatTime(minutes()) }}\n        </span>\n        <span\n          class=\"text-purple-200/90 text-[0.55rem] font-medium tracking-wider mt-0.5\"\n          >{{minsLabel()}}</span\n        >\n      </div>\n      <!-- SECS -->\n      <div class=\"flex flex-col items-center min-w-[1rem]\">\n        <span class=\"text-purple-200 text-md font-bold leading-none\">\n          {{ formatTime(seconds()) }}\n        </span>\n        <span\n          class=\"text-purple-200/90 text-[0.55rem] font-medium tracking-wider mt-0.5\"\n          >{{secsLabel()}}</span\n        >\n      </div>\n    </div>\n  </div>\n</div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApCashdropCardComponentCountdown, { className: "ApCashdropCardComponentCountdown", filePath: "src/app/components/ap-cashdrop-card-component-countdown/ap-cashdrop-card-component-countdown.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-cashdrop-card-component-countdown.component.js.map