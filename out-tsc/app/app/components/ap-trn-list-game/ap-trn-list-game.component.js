import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApTrnCardTitleComponent } from '../ap-trn-card-title/ap-trn-card-title.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { trnDefaultDataList } from '../../services/trn-ctrl/trn-ctrl.data';
import * as i0 from "@angular/core";
function ApTrnListGameComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    i0.ɵɵelement(4, "img", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "ap-icon", 8);
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 10)(10, "div", 11);
    i0.ɵɵelement(11, "ap-trn-card-title", 12);
    i0.ɵɵelementStart(12, "div", 13);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("hover:border-yellow-400", !ctx_r0.isDisabled())("cursor-pointer", !ctx_r0.isDisabled());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r0.quickBannerImage(), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getQuickTimeLabel(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("variant", ((tmp_5_0 = ctx_r0.trnData()) == null ? null : tmp_5_0.type) ?? "quick")("title", ((tmp_6_0 = ctx_r0.trnData()) == null ? null : tmp_6_0.name) ?? "Quick Race")("size", "default");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.description(), " ");
} }
function ApTrnListGameComponent_Conditional_1_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-button", 38);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("label", ctx_r0.getFinishedButtonLabel())("accentColor", "purple")("disabled", true)("size", "small");
} }
function ApTrnListGameComponent_Conditional_1_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-button", 39);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("label", ctx_r0.getRejoinButtonLabel())("severity", "primary")("accentColor", "purple-dark")("size", "small");
} }
function ApTrnListGameComponent_Conditional_1_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-button", 39);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("label", ctx_r0.getJoinButtonLabel())("severity", "primary")("accentColor", "purple")("size", "small");
} }
function ApTrnListGameComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 3)(2, "div", 15)(3, "div", 16);
    i0.ɵɵelement(4, "img", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "ap-icon", 17);
    i0.ɵɵelementStart(7, "div", 18);
    i0.ɵɵtext(8);
    i0.ɵɵelementStart(9, "span", 19);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11);
    i0.ɵɵelementStart(12, "span", 19);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14);
    i0.ɵɵelementStart(15, "span", 19);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17);
    i0.ɵɵelementStart(18, "span", 19);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(20, "div", 20)(21, "div", 21)(22, "div", 22);
    i0.ɵɵelement(23, "ap-trn-card-title", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 23)(25, "div", 24)(26, "div", 25)(27, "div", 26)(28, "div", 27);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 28)(31, "div", 29);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 30);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "div", 31)(36, "div", 32);
    i0.ɵɵtext(37);
    i0.ɵɵelementStart(38, "span", 33);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 27);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 34);
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 35)(45, "div", 36)(46, "div", 37);
    i0.ɵɵtext(47);
    i0.ɵɵelementStart(48, "span", 33);
    i0.ɵɵtext(49);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 27);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(52, ApTrnListGameComponent_Conditional_1_Conditional_52_Template, 1, 4, "ap-button", 38)(53, ApTrnListGameComponent_Conditional_1_Conditional_53_Template, 1, 4, "ap-button", 39)(54, ApTrnListGameComponent_Conditional_1_Conditional_54_Template, 1, 4, "ap-button", 39);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("hover:border-purple-400", !ctx_r0.isDisabled())("cursor-pointer", !ctx_r0.isDisabled());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r0.eventBannerImage(), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.getCountdownEndTitle(), " ", ctx_r0.formatTime(ctx_r0.days()));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.getDaysLabel());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.hours()));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.getHoursLabel());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.minutes()));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.getMinutesLabel());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatTime(ctx_r0.seconds()));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.getSecondsLabel());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("variant", ((tmp_12_0 = ctx_r0.trnData()) == null ? null : tmp_12_0.type) ?? "event")("title", ((tmp_13_0 = ctx_r0.trnData()) == null ? null : tmp_13_0.name) ?? "Event Game")("size", "default");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getPrizePoolLabel(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.currencySymbol(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.prizePool(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.playerScore()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("( ", ctx_r0.getPointLabel(), ")");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getScoreLabel(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.description(), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.playerScore()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("( ", ctx_r0.getPointLabel(), ")");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getScoreLabel(), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isShowingDisabledButton() ? 52 : ctx_r0.isShowingRejoinButton() ? 53 : 54);
} }
export class ApTrnListGameComponent {
    // Quick 賽事的字串
    getQuickTimeLabel = input('Regular Event');
    // Event 賽事的字串
    getDaysLabel = input('D');
    getHoursLabel = input('H');
    getMinutesLabel = input('M');
    getSecondsLabel = input('S');
    getCountdownStartTitle = input('Start in');
    getCountdownEndTitle = input('End in');
    getRejoinButtonLabel = input('Rejoin');
    getJoinButtonLabel = input('Join');
    getFinishedButtonLabel = input('Finished');
    currencySymbol = input('USD');
    getScoreLabel = input(' Your Score');
    getPrizePoolLabel = input(' Prize Pool');
    getPointLabel = input(' Pts');
    // 賽事資料
    trnData = input(trnDefaultDataList[0]);
    variant = computed(() => { return this.trnData()?.type || 'event'; });
    isDisabled = signal(false);
    quickBannerImage = input('assets/images/banners/img-trn-quick-banner-default-h.jpg');
    eventBannerImage = input('assets/images/banners/img-trn-event-banner-default-2.jpg');
    description = computed(() => { return this.trnData()?.description || 'Default description'; });
    hasParticipated = input(false);
    highlightedPlayer = computed(() => this.trnData()?.raceData?.playersList.find((player) => player.highlighted) || null);
    getBonus = computed(() => { return this.highlightedPlayer()?.win || null; });
    playerScore = computed(() => { return this.highlightedPlayer()?.score || null; });
    prizePool = input('500,000');
    // 只有在活動賽事且處於公告或進行中狀態才顯示倒數計時
    isShowingCountdown() {
        return (this.variant() === 'event' &&
            (this.trnData()?.status === 'announced' || this.trnData()?.status === 'running'));
    }
    // 只有在賽事結束、結算或即將結束的狀態才顯示禁用按鈕
    isShowingDisabledButton() {
        return this.trnData()?.status === 'ending' || this.trnData()?.status === 'ended' || this.trnData()?.status === 'settled';
    }
    // 已參賽過但賽事已結束的情況下顯示重新參加按鈕
    isShowingRejoinButton() {
        return this.variant() === 'event' && this.hasParticipated();
    }
    // 只有在活動賽事且已參加的情況下才顯示獎金
    isShowingBonus() {
        return this.variant() === 'event' && this.hasParticipated() && this.getBonus() !== null;
    }
    // 根據賽事狀態決定顯示開始倒數還是結束倒數
    getCountdownTitle() {
        if (this.trnData()?.status === 'announced') {
            return this.getCountdownStartTitle();
        }
        return this.getCountdownEndTitle();
    }
    // 根據賽事狀態決定倒數的目標時間
    getCountdownTime() {
        if (this.trnData()?.status === 'announced') {
            return this.trnData()?.startTime || 0;
        }
        return this.trnData()?.endTime || 0;
    }
    now = signal(Date.now());
    intervalId = setInterval(() => this.now.set(Date.now()), 1000);
    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
    timeRemaining = computed(() => {
        const target = this.getCountdownTime();
        return Math.max(0, target - this.now());
    });
    days = computed(() => Math.floor(this.timeRemaining() / (1000 * 60 * 60 * 24)));
    hours = computed(() => Math.floor((this.timeRemaining() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    minutes = computed(() => Math.floor((this.timeRemaining() % (1000 * 60 * 60)) / (1000 * 60)));
    seconds = computed(() => Math.floor((this.timeRemaining() % (1000 * 60)) / 1000));
    formatTime(value) {
        return value.toString().padStart(2, '0');
    }
    formatNumber(value) {
        if (value === null || value === undefined) {
            return '--';
        }
        return new Intl.NumberFormat('en-US').format(value);
    }
    static ɵfac = function ApTrnListGameComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnListGameComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnListGameComponent, selectors: [["ap-trn-list-game"]], inputs: { getQuickTimeLabel: [1, "getQuickTimeLabel"], getDaysLabel: [1, "getDaysLabel"], getHoursLabel: [1, "getHoursLabel"], getMinutesLabel: [1, "getMinutesLabel"], getSecondsLabel: [1, "getSecondsLabel"], getCountdownStartTitle: [1, "getCountdownStartTitle"], getCountdownEndTitle: [1, "getCountdownEndTitle"], getRejoinButtonLabel: [1, "getRejoinButtonLabel"], getJoinButtonLabel: [1, "getJoinButtonLabel"], getFinishedButtonLabel: [1, "getFinishedButtonLabel"], currencySymbol: [1, "currencySymbol"], getScoreLabel: [1, "getScoreLabel"], getPrizePoolLabel: [1, "getPrizePoolLabel"], getPointLabel: [1, "getPointLabel"], trnData: [1, "trnData"], quickBannerImage: [1, "quickBannerImage"], eventBannerImage: [1, "eventBannerImage"], hasParticipated: [1, "hasParticipated"], prizePool: [1, "prizePool"] }, decls: 2, vars: 2, consts: [[1, "relative", "flex", "flex-col", "overflow-hidden", "rounded-xl", "border-2", "border-yellow-300/30", "bg-yellow-950/10", "p-2", "gap-3", "select-none", "md:flex-row", 3, "hover:border-yellow-400", "cursor-pointer"], [1, "relative", "flex", "flex-col", "overflow-hidden", "rounded-xl", "border-2", "border-purple-300/20", "bg-purple-950/10", "p-2", "gap-3", "select-none", "md:flex-row", 3, "hover:border-purple-400", "cursor-pointer"], [1, "relative", "flex", "flex-col", "overflow-hidden", "rounded-xl", "border-2", "border-yellow-300/30", "bg-yellow-950/10", "p-2", "gap-3", "select-none", "md:flex-row"], [1, "flex", "shrink-0", "flex-col", "gap-1"], [1, "relative", "w-full", "overflow-hidden", "border-2", "rounded-lg", "border-yellow-400/20", "md:w-[11rem]"], [1, "relative", "md:h-[6rem]", "h-[12rem]", "w-full"], [1, "absolute", "inset-0", "h-full", "w-full", "object-contain-scale", 3, "src"], [1, "flex", "items-center", "gap-1", "text-zinc-400"], ["name", "calendar default", 1, "md:size-3", "size-4"], [1, "md:text-xs", "text-sm", "uppercase", "tracking-wide"], [1, "flex", "min-w-0", "flex-1", "flex-col", "justify-between"], [1, "min-w-0"], [3, "variant", "title", "size"], [1, "min-w-0", "max-w-2xl", "md:text-sm", "text-md", "font-normal", "leading-tight", "text-zinc-400", "mt-1", "md:mt-0"], [1, "relative", "flex", "flex-col", "overflow-hidden", "rounded-xl", "border-2", "border-purple-300/20", "bg-purple-950/10", "p-2", "gap-3", "select-none", "md:flex-row"], [1, "relative", "w-full", "overflow-hidden", "border-2", "rounded-lg", "border-purple-400/20", "md:w-[11rem]"], [1, "relative", "md:h-[5.8rem]", "h-[12rem]", "w-full"], ["name", "clock default", 1, "md:size-3", "size-4"], [1, "flex", "flex-wrap", "md:text-xs", "text-sm", "uppercase", "tracking-wide", "space-x-1"], [1, "italic"], [1, "flex", "min-w-0", "flex-1", "flex-col", "text-left"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0", "flex-1"], [1, "grid", "grid-cols-1", "items-start", "gap-3", "md:grid-cols-[minmax(0,1fr)_11rem]", "md:gap-0", "mt-2", "md:mt-0"], [1, "min-w-0", "text-left"], [1, "flex", "items-start", "justify-between", "md:block"], [1, "inline-flex", "bg-gradient-to-r", "from-violet-500/20", "to-zinc-900/15", "flex-col", "pl-2"], [1, "md:text-[10px]", "text-xs", "italic", "text-zinc-400"], [1, "flex", "text-purple-300", "gap-1", "justify-start", "items-center"], [1, "m:text-sm", "text-md", "font-bold"], [1, "md:text-xl", "text-2xl", "font-bold"], [1, "shrink-0", "text-right", "md:hidden"], [1, "md:text-xl", "text-2xl", "font-bold", "text-zinc-200"], [1, "text-sm", "italic"], [1, "mt-1", "min-w-0", "text-left", "md:text-sm", "text-md", "font-normal", "leading-tight", "text-zinc-400"], [1, "flex", "flex-col", "md:w-[11rem]", "md:items-end"], [1, "hidden", "md:block", "shrink-0", "mb-2", "text-right"], [1, "text-xl", "font-bold", "text-zinc-200"], [1, "w-full", "whitespace-nowrap", "md:ml-auto", "md:w-[80%]", 3, "label", "accentColor", "disabled", "size"], [1, "w-full", "whitespace-nowrap", "md:ml-auto", "md:w-[80%]", 3, "label", "severity", "accentColor", "size"]], template: function ApTrnListGameComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApTrnListGameComponent_Conditional_0_Template, 14, 10, "div", 0);
            i0.ɵɵconditionalCreate(1, ApTrnListGameComponent_Conditional_1_Template, 55, 28, "div", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.variant() === "quick" ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "event" ? 1 : -1);
        } }, dependencies: [CommonModule, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnListGameComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-list-game', standalone: true, imports: [CommonModule, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent,], template: "@if (variant() === \"quick\") {\n  <div\n    class=\"relative flex flex-col overflow-hidden rounded-xl border-2 border-yellow-300/30 bg-yellow-950/10 p-2 gap-3 select-none md:flex-row\"\n    [class.hover:border-yellow-400]=\"!isDisabled()\"\n    [class.cursor-pointer]=\"!isDisabled()\"\n  >\n    <div class=\"flex shrink-0 flex-col gap-1\">\n      <div\n        class=\"relative w-full overflow-hidden border-2 rounded-lg border-yellow-400/20 md:w-[11rem]\"\n      >\n        <div class=\"relative md:h-[6rem] h-[12rem] w-full\">\n          <img\n            [src]=\"quickBannerImage()\"\n            class=\"absolute inset-0 h-full w-full object-contain-scale\"\n          />\n        </div>\n      </div>\n      <div class=\"flex items-center gap-1 text-zinc-400\">\n        <ap-icon name=\"calendar default\" class=\"md:size-3 size-4\" />\n        <div class=\"md:text-xs text-sm uppercase tracking-wide\">\n          {{ getQuickTimeLabel() }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex min-w-0 flex-1 flex-col justify-between\">\n      <div class=\"min-w-0\">\n        <ap-trn-card-title\n          [variant]=\"trnData()?.type ?? 'quick'\"\n          [title]=\"trnData()?.name ?? 'Quick Race'\"\n          [size]=\"'default'\"\n        />\n        <div\n          class=\"min-w-0 max-w-2xl md:text-sm text-md font-normal leading-tight text-zinc-400 mt-1 md:mt-0\"\n        >\n          {{ description() }}\n        </div>\n      </div>\n    </div>\n  </div>\n}\n@if (variant() === \"event\") {\n  <div\n    class=\"relative flex flex-col overflow-hidden rounded-xl border-2 border-purple-300/20 bg-purple-950/10 p-2 gap-3 select-none md:flex-row\"\n    [class.hover:border-purple-400]=\"!isDisabled()\"\n    [class.cursor-pointer]=\"!isDisabled()\"\n  >\n    <div class=\"flex shrink-0 flex-col gap-1\">\n      <div\n        class=\"relative w-full overflow-hidden border-2 rounded-lg border-purple-400/20 md:w-[11rem]\"\n      >\n        <div class=\"relative md:h-[5.8rem] h-[12rem] w-full\">\n          <img\n            [src]=\"eventBannerImage()\"\n            class=\"absolute inset-0 h-full w-full object-contain-scale\"\n          />\n        </div>\n      </div>\n      <div class=\"flex items-center gap-1 text-zinc-400\">\n        <ap-icon name=\"clock default\" class=\"md:size-3 size-4\" />\n        <div\n          class=\"flex flex-wrap md:text-xs text-sm uppercase tracking-wide space-x-1\"\n        >\n          {{ getCountdownEndTitle() }} {{ formatTime(days())\n          }}<span class=\"italic\">{{ getDaysLabel() }}</span>\n          {{ formatTime(hours())\n          }}<span class=\"italic\">{{ getHoursLabel() }}</span>\n          {{ formatTime(minutes())\n          }}<span class=\"italic\">{{ getMinutesLabel() }}</span>\n          {{ formatTime(seconds())\n          }}<span class=\"italic\">{{ getSecondsLabel() }}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex min-w-0 flex-1 flex-col text-left\">\n      <div class=\"flex items-start justify-between gap-3\">\n        <div class=\"min-w-0 flex-1\">\n          <ap-trn-card-title\n            [variant]=\"trnData()?.type ?? 'event'\"\n            [title]=\"trnData()?.name ?? 'Event Game'\"\n            [size]=\"'default'\"\n          />\n        </div>\n      </div>\n\n      <div\n        class=\"grid grid-cols-1 items-start gap-3 md:grid-cols-[minmax(0,1fr)_11rem] md:gap-0 mt-2 md:mt-0\"\n      >\n        <div class=\"min-w-0 text-left\">\n          <div class=\"flex items-start justify-between md:block\">\n            <div\n              class=\"inline-flex bg-gradient-to-r from-violet-500/20 to-zinc-900/15 flex-col pl-2\"\n            >\n              <div class=\"md:text-[10px] text-xs italic text-zinc-400\">\n                {{ getPrizePoolLabel() }}\n              </div>\n              <div\n                class=\"flex text-purple-300 gap-1 justify-start items-center\"\n              >\n                <div class=\"m:text-sm text-md font-bold\">\n                  {{ currencySymbol() }}\n                </div>\n                <div class=\"md:text-xl text-2xl font-bold\">\n                  {{ prizePool() }}\n                </div>\n              </div>\n            </div>\n            <div class=\"shrink-0 text-right md:hidden\">\n              <div class=\"md:text-xl text-2xl font-bold text-zinc-200\">\n                {{ formatNumber(playerScore()) }}\n                <span class=\"text-sm italic\">( {{ getPointLabel() }})</span>\n              </div>\n              <div class=\"md:text-[10px] text-xs italic text-zinc-400\">\n                {{ getScoreLabel() }}\n              </div>\n            </div>\n          </div>\n          <div\n            class=\"mt-1 min-w-0 text-left md:text-sm text-md font-normal leading-tight text-zinc-400\"\n          >\n            {{ description() }}\n          </div>\n        </div>\n        <div class=\"flex flex-col md:w-[11rem] md:items-end\">\n          <div class=\"hidden md:block shrink-0 mb-2 text-right\">\n            <div class=\"text-xl font-bold text-zinc-200\">\n              {{ formatNumber(playerScore()) }}\n              <span class=\"text-sm italic\">( {{ getPointLabel() }})</span>\n            </div>\n            <div class=\"md:text-[10px] text-xs italic text-zinc-400\">\n              {{ getScoreLabel() }}\n            </div>\n          </div>\n          @if (isShowingDisabledButton()) {\n            <ap-button\n              [label]=\"getFinishedButtonLabel()\"\n              [accentColor]=\"'purple'\"\n              [disabled]=\"true\"\n              [size]=\"'small'\"\n              class=\"w-full whitespace-nowrap md:ml-auto md:w-[80%]\"\n            />\n          } @else if (isShowingRejoinButton()) {\n            <ap-button\n              [label]=\"getRejoinButtonLabel()\"\n              [severity]=\"'primary'\"\n              [accentColor]=\"'purple-dark'\"\n              [size]=\"'small'\"\n              class=\"w-full whitespace-nowrap md:ml-auto md:w-[80%]\"\n            />\n          } @else {\n            <ap-button\n              [label]=\"getJoinButtonLabel()\"\n              [severity]=\"'primary'\"\n              [accentColor]=\"'purple'\"\n              [size]=\"'small'\"\n              class=\"w-full whitespace-nowrap md:ml-auto md:w-[80%]\"\n            />\n          }\n        </div>\n      </div>\n    </div>\n  </div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnListGameComponent, { className: "ApTrnListGameComponent", filePath: "src/app/components/ap-trn-list-game/ap-trn-list-game.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=ap-trn-list-game.component.js.map