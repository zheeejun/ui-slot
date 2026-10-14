import { Component, signal, output, input, computed, inject, } from '@angular/core';
import { ApTrnListGameComponent } from '../../components/ap-trn-list-game/ap-trn-list-game.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { defaultLevelTitles, defaultQuickSections, defaultEventSections, prizeDataByLevel, } from './event-trn-prize.data';
import { CommonModule } from '@angular/common';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { FloorNumberPipe } from '../../library/pipe/floor-number.pipe';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.number;
const _forTrack1 = ($index, $item) => $item.items;
const _forTrack2 = ($index, $item) => $item.key ?? $item.text;
function EventTrnPrizeComponent_Conditional_0_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function EventTrnPrizeComponent_Conditional_0_For_5_Template_button_click_0_listener() { const $index_r2 = i0.ɵɵrestoreView(_r1).$index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectLevel($index_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const title_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ɵ$index_10_r5 = ctx.$index;
    const ɵ$count_10_r6 = ctx.$count;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("rounded-tl-xl", ɵ$index_10_r5 === 0)("rounded-tr-xl", ɵ$index_10_r5 === ɵ$count_10_r6 - 1)("bg-yellow-400", ctx_r2.selectedLevel() === $index_r2)("text-black", ctx_r2.selectedLevel() === $index_r2)("text-zinc-400", ctx_r2.selectedLevel() !== $index_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", title_r4, " ");
} }
function EventTrnPrizeComponent_Conditional_0_For_18_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 23);
    i0.ɵɵelement(3, "ap-icon", 24);
    i0.ɵɵelementStart(4, "span", 25);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "floorNumber");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const prize_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", "wallet default");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(6, 2, prize_r7.tickets * 100, "1.0-1"), "% ");
} }
function EventTrnPrizeComponent_Conditional_0_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 16)(1, "td", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 18);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 19)(6, "div", 20)(7, "span", 21);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "floorNumber");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, EventTrnPrizeComponent_Conditional_0_For_18_Conditional_10_Template, 7, 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const prize_r7 = ctx.$implicit;
    const ɵ$index_33_r8 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("bg-zinc-800", ɵ$index_33_r8 % 2 === 0)("bg-zinc-900", !(ɵ$index_33_r8 % 2 === 0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", prize_r7.number, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", prize_r7.winner, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", ctx_r2.trn.currencySymbol(), " ", i0.ɵɵpipeBind2(9, 9, prize_r7.prize, "1.2-2"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(prize_r7.tickets > 0 ? 10 : -1);
} }
function EventTrnPrizeComponent_Conditional_0_For_22_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r9.text);
} }
function EventTrnPrizeComponent_Conditional_0_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, EventTrnPrizeComponent_Conditional_0_For_22_For_1_Template, 2, 1, "li", 26, _forTrack2);
} if (rf & 2) {
    const section_r10 = ctx.$implicit;
    i0.ɵɵrepeater(section_r10.items);
} }
function EventTrnPrizeComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "ap-trn-list-game", 1);
    i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
    i0.ɵɵrepeaterCreate(4, EventTrnPrizeComponent_Conditional_0_For_5_Template, 2, 11, "button", 4, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 5)(7, "table", 6)(8, "thead", 7)(9, "tr")(10, "th", 8);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 9);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 10);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody", 11);
    i0.ɵɵrepeaterCreate(17, EventTrnPrizeComponent_Conditional_0_For_18_Template, 11, 12, "tr", 12, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 13)(20, "ul", 14);
    i0.ɵɵrepeaterCreate(21, EventTrnPrizeComponent_Conditional_0_For_22_Template, 2, 0, null, null, _forTrack1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("trnData", ctx_r2.currentTrn())("getQuickTimeLabel", ctx_r2.getQuickTimeLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.levelTitles());
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getTableTitle1(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getTableTitle2(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getTableTitle3(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.getCurrentPrizes());
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r2.currentSections());
} }
function EventTrnPrizeComponent_Conditional_1_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function EventTrnPrizeComponent_Conditional_1_For_5_Template_button_click_0_listener() { const $index_r12 = i0.ɵɵrestoreView(_r11).$index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectLevel($index_r12)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const title_r13 = ctx.$implicit;
    const $index_r12 = ctx.$index;
    const ɵ$index_80_r14 = ctx.$index;
    const ɵ$count_80_r15 = ctx.$count;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("rounded-tl-xl", ɵ$index_80_r14 === 0)("rounded-tr-xl", ɵ$index_80_r14 === ɵ$count_80_r15 - 1)("bg-purple-300", ctx_r2.selectedLevel() === $index_r12)("text-black", ctx_r2.selectedLevel() === $index_r12)("text-zinc-400", ctx_r2.selectedLevel() !== $index_r12);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", title_r13, " ");
} }
function EventTrnPrizeComponent_Conditional_1_For_18_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵtext(1, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 23);
    i0.ɵɵelement(3, "ap-icon", 41);
    i0.ɵɵelementStart(4, "span", 42);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "floorNumber");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const prize_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", "wallet default");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(6, 2, prize_r16.tickets * 100, "1.0-1"), "% ");
} }
function EventTrnPrizeComponent_Conditional_1_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 36)(1, "td", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 38);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 19)(6, "div", 20)(7, "span", 39);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "floorNumber");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, EventTrnPrizeComponent_Conditional_1_For_18_Conditional_10_Template, 7, 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const prize_r16 = ctx.$implicit;
    const ɵ$index_103_r17 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("bg-zinc-800", ɵ$index_103_r17 % 2 === 0)("bg-zinc-900", !(ɵ$index_103_r17 % 2 === 0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", prize_r16.number, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", prize_r16.winner, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", ctx_r2.trn.currencySymbol(), " ", i0.ɵɵpipeBind2(9, 9, prize_r16.prize, "1.2-2"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(prize_r16.tickets > 0 ? 10 : -1);
} }
function EventTrnPrizeComponent_Conditional_1_For_22_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r18.text);
} }
function EventTrnPrizeComponent_Conditional_1_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, EventTrnPrizeComponent_Conditional_1_For_22_For_1_Template, 2, 1, "li", 26, _forTrack2);
} if (rf & 2) {
    const section_r19 = ctx.$implicit;
    i0.ɵɵrepeater(section_r19.items);
} }
function EventTrnPrizeComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "ap-trn-list-game", 27);
    i0.ɵɵelementStart(2, "div", 28)(3, "div", 29);
    i0.ɵɵrepeaterCreate(4, EventTrnPrizeComponent_Conditional_1_For_5_Template, 2, 11, "button", 30, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 31)(7, "table", 32)(8, "thead", 33)(9, "tr")(10, "th", 8);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 9);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 10);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody", 11);
    i0.ɵɵrepeaterCreate(17, EventTrnPrizeComponent_Conditional_1_For_18_Template, 11, 12, "tr", 34, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 13)(20, "ul", 14);
    i0.ɵɵrepeaterCreate(21, EventTrnPrizeComponent_Conditional_1_For_22_Template, 2, 0, null, null, _forTrack1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("trnData", ctx_r2.currentTrn())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("hasParticipated", true);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.levelTitles());
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getTableTitle1(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getTableTitle2(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getTableTitle3(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.getCurrentPrizes());
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r2.currentSections());
} }
export class EventTrnPrizeComponent {
    api = inject(AppInterfaceService);
    i18n = inject(AppI18nService);
    getQuickTimeLabel = this.i18n.computed('RegularEvent_Tag', 'Regular Event');
    getTableTitle1 = this.i18n.computed('Rank_PrizeList', 'Rank');
    getTableTitle2 = this.i18n.computed('Winners_PrizeList', 'Winners');
    getTableTitle3 = this.i18n.computed('Pirze_PrizeList', 'Prize');
    getDaysLabel = this.i18n.computed('DAYS', 'DAYS');
    getHoursLabel = this.i18n.computed('HRS', 'HRS');
    getMinutesLabel = this.i18n.computed('MINS', 'MINS');
    getSecondsLabel = this.i18n.computed('SECS', 'SECS');
    getCountdownStartTitle = this.i18n.computed('StartIn_Tip', 'Start in');
    getCountdownEndTitle = this.i18n.computed('EndIn_Tip', 'End in');
    //* 積分
    bonusPoint = signal(500) || null;
    trn = inject(TrnCtrlService);
    /** 上一頁 */
    goBack = output();
    /** 關閉 */
    close = output();
    // Component configuration
    variant = computed(() => {
        return this.currentTrn()?.type || 'event';
    });
    currentTrn = input(null);
    /** Level Tag Name */
    levelTitles = signal(defaultLevelTitles);
    quickSections = signal(defaultQuickSections);
    eventSections = signal(defaultEventSections);
    currentSections = computed(() => (this.variant() === 'quick' ? this.quickSections() : this.eventSections()).map((section) => ({
        ...section,
        items: section.items.map((item) => ({
            ...item,
            text: item.key ? this.i18n.instant(item.key, item.text) : item.text,
        })),
    })));
    // Level selection
    selectedLevel = signal(0);
    // Prize data for each level
    prizeData = signal(prizeDataByLevel);
    ngOnInit() {
        if (!this.currentTrn())
            return;
        const prizes = [];
        const titles = [];
        this.currentTrn()?.tiers.forEach((tier) => {
            titles.push(tier.name);
            const rows = this.formatPrizeRow(tier.fixedPrizes, tier.poolDistribution);
            prizes.push(rows);
        });
        this.prizeData.set(prizes);
        this.levelTitles.set(titles);
    }
    formatPrizeRow(fix, pool) {
        // 這裡的邏輯會根據實際的獎金結構來調整
        // 目前假設固定獎金和獎池分配是分開的，並且每個rank對應一個PrizeRow
        const rows = [];
        fix.forEach((fp, index) => {
            const poolRatio = pool[index]?.ratio || 0;
            if (fp.rank) {
                rows.push({
                    number: fp.rank.toString(),
                    winner: 1,
                    prize: fp.amount,
                    tickets: poolRatio, // 這裡的tickets數量需要根據實際情況來填充
                });
            }
            else if (fp.rankFrom && fp.rankTo) {
                rows.push({
                    number: `${fp.rankFrom}-${fp.rankTo}`,
                    winner: fp.rankTo - fp.rankFrom + 1,
                    prize: fp.amount,
                    tickets: poolRatio, // 這裡的tickets數量需要根據實際情況來填充
                });
            }
        });
        return rows;
    }
    // Methods
    getCurrentPrizes = computed(() => {
        const level = this.selectedLevel();
        return this.prizeData()[level] || [];
    });
    selectLevel(level) {
        this.selectedLevel.set(level);
    }
    handleBack() {
        this.goBack.emit();
    }
    handleClose() {
        this.close.emit();
    }
    // Get countdown time from data based on variant
    getCountdownTime() {
        return '';
    }
    static ɵfac = function EventTrnPrizeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventTrnPrizeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventTrnPrizeComponent, selectors: [["event-trn-prize"]], inputs: { currentTrn: [1, "currentTrn"] }, outputs: { goBack: "goBack", close: "close" }, decls: 2, vars: 2, consts: [[1, "px-4", "sm:px-6", "pt-4", "sm:pt-6", "pb-10"], [3, "trnData", "getQuickTimeLabel"], [1, "w-full", "mx-auto", "flex", "justify-start", "mt-6"], [1, "flex", "bg-zinc-800", "rounded-t-lg", "duration-300"], [1, "px-6", "py-1", "text-md", "font-semibold", "transition-colors", "hover:bg-yellow-200/60", "hover:text-black/80", "cursor-pointer", 3, "rounded-tl-xl", "rounded-tr-xl", "bg-yellow-400", "text-black", "text-zinc-400"], [1, "w-full", "mx-auto", "border-2", "border-yellow-300/20", "rounded-b-lg", "rounded-tr-xl", "overflow-hidden", "shadow-lg"], [1, "w-full"], [1, "bg-yellow-300/15", "rounded-tr-xl", "backdrop-blur-sm", "text-yellow-400"], [1, "w-[30%]", "px-4", "py-2", "text-left"], [1, "w-[20%]", "px-4", "py-2", "text-center"], [1, "w-[50%]", "px-4", "py-2", "text-right"], [1, "divide-y", "divide-zinc-700/50"], [1, "transition-all", "duration-200", "hover:bg-yellow-300/5", 3, "bg-zinc-800", "bg-zinc-900"], [1, "flex", "flex-col", "text-center", "gap-3", "sm:gap-4", "items-center", "px-4", "sm:px-6", "mt-6"], [1, "w-full", "list-disc", "list-inside", "text-zinc-300", "leading-relaxed", "mt-2", "space-y-2", "text-left"], [1, "px-6", "py-1", "text-md", "font-semibold", "transition-colors", "hover:bg-yellow-200/60", "hover:text-black/80", "cursor-pointer", 3, "click"], [1, "transition-all", "duration-200", "hover:bg-yellow-300/5"], [1, "px-4", "py-3", "text-yellow-50", "font-medium"], [1, "px-4", "py-3", "text-center", "text-yellow-50", "font-medium"], [1, "px-4", "py-3", "text-right"], [1, "flex", "items-center", "justify-end", "gap-2"], [1, "text-yellow-200", "font-medium"], [1, "text-yellow-300"], [1, "flex", "items-center", "gap-1"], [1, "size-5", "mb-1", "justify-center", "flex", "items-center", "text-yellow-400", 3, "name"], [1, "text-yellow-300", "font-medium"], [1, "text-sm", "sm:text-base"], [3, "trnData", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "hasParticipated"], [1, "w-full", "mx-auto", "flex", "justify-start", "mt-6", "font-semibold"], [1, "flex", "bg-purple-500/20", "rounded-t-lg"], [1, "px-6", "py-1", "text-md", "transition-colors", "hover:bg-purple-200/80", "hover:text-black/80", "cursor-pointer", 3, "rounded-tl-xl", "rounded-tr-xl", "bg-purple-300", "text-black", "text-zinc-400"], [1, "w-full", "mx-auto", "border-2", "border-purple-300/20", "rounded-b-lg", "rounded-tr-xl", "overflow-hidden", "shadow-lg", "pointer-events-none"], [1, "w-full", "text-zinc-300"], [1, "bg-purple-500/15", "rounded-tr-xl", "backdrop-blur-sm", "text-purple-200"], [1, "transition-all", "duration-200", "hover:bg-purple-400/5", 3, "bg-zinc-800", "bg-zinc-900"], [1, "px-6", "py-1", "text-md", "transition-colors", "hover:bg-purple-200/80", "hover:text-black/80", "cursor-pointer", 3, "click"], [1, "transition-all", "duration-200", "hover:bg-purple-400/5"], [1, "px-4", "py-3"], [1, "px-4", "py-3", "text-center"], [1, "text-purple-200", "font-semibold"], [1, "text-purple-300"], [1, "size-5", "mb-1", "justify-center", "flex", "items-center", "text-purple-400", 3, "name"], [1, "text-purple-300", "font-semibold"]], template: function EventTrnPrizeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, EventTrnPrizeComponent_Conditional_0_Template, 23, 5, "div", 0);
            i0.ɵɵconditionalCreate(1, EventTrnPrizeComponent_Conditional_1_Template, 23, 11, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.variant() === "quick" ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "event" ? 1 : -1);
        } }, dependencies: [ApTrnListGameComponent, ApIconComponent, CommonModule, FloorNumberPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventTrnPrizeComponent, [{
        type: Component,
        args: [{ selector: 'event-trn-prize', imports: [ApTrnListGameComponent, ApIconComponent, CommonModule, FloorNumberPipe,], template: "<!--Quick-->\n@if (variant() === \"quick\") {\n  <div class=\"px-4 sm:px-6 pt-4 sm:pt-6 pb-10\">\n    <!--List-->\n    <ap-trn-list-game\n      [trnData]=\"currentTrn()\"\n      [getQuickTimeLabel]=\"getQuickTimeLabel()\"\n    />\n    <!-- Level Selection Tabs -->\n    <div class=\"w-full mx-auto flex justify-start mt-6\">\n      <div class=\"flex bg-zinc-800 rounded-t-lg duration-300\">\n        @for (\n          title of levelTitles();\n          track title;\n          let first = $first;\n          let last = $last\n        ) {\n          <!-- first: rounded-tl-xl , last: rounded-tr-xl -->\n          <button\n            class=\"px-6 py-1 text-md font-semibold transition-colors hover:bg-yellow-200/60 hover:text-black/80 cursor-pointer\"\n            [class.rounded-tl-xl]=\"first\"\n            [class.rounded-tr-xl]=\"last\"\n            [class.bg-yellow-400]=\"selectedLevel() === $index\"\n            [class.text-black]=\"selectedLevel() === $index\"\n            [class.text-zinc-400]=\"selectedLevel() !== $index\"\n            (click)=\"selectLevel($index)\"\n          >\n            {{ title }}\n          </button>\n        }\n      </div>\n    </div>\n\n    <!-- Prize Table -->\n    <div\n      class=\"w-full mx-auto border-2 border-yellow-300/20 rounded-b-lg rounded-tr-xl overflow-hidden shadow-lg\"\n    >\n      <table class=\"w-full\">\n        <thead\n          class=\"bg-yellow-300/15 rounded-tr-xl backdrop-blur-sm text-yellow-400\"\n        >\n          <tr>\n            <th class=\"w-[30%] px-4 py-2 text-left\">\n              {{ getTableTitle1() }}\n            </th>\n            <th class=\"w-[20%] px-4 py-2 text-center\">\n              {{ getTableTitle2() }}\n            </th>\n            <th class=\"w-[50%] px-4 py-2 text-right\">\n              {{ getTableTitle3() }}\n            </th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-zinc-700/50\">\n          @for (\n            prize of getCurrentPrizes();\n            track prize.number;\n            let isEven = $even\n          ) {\n            <tr\n              class=\"transition-all duration-200 hover:bg-yellow-300/5\"\n              [class.bg-zinc-800]=\"isEven\"\n              [class.bg-zinc-900]=\"!isEven\"\n            >\n              <td class=\"px-4 py-3 text-yellow-50 font-medium\">\n                {{ prize.number }}\n              </td>\n              <td class=\"px-4 py-3 text-center text-yellow-50 font-medium\">\n                {{ prize.winner }}\n              </td>\n              <td class=\"px-4 py-3 text-right\">\n                <div class=\"flex items-center justify-end gap-2\">\n                  <span class=\"text-yellow-200 font-medium\">\n                    {{ trn.currencySymbol() }}\n                    {{ prize.prize | floorNumber: \"1.2-2\" }}\n                  </span>\n                  @if (prize.tickets > 0) {\n                    <span class=\"text-yellow-300\">+</span>\n                    <div class=\"flex items-center gap-1\">\n                      <ap-icon\n                        [name]=\"'wallet default'\"\n                        class=\"size-5 mb-1 justify-center flex items-center text-yellow-400\"\n                      ></ap-icon>\n                      <!-- ex: 30.1% or 20% -->\n                      <span class=\"text-yellow-300 font-medium\">\n                        {{ prize.tickets * 100 | floorNumber: \"1.0-1\" }}%\n                      </span>\n                    </div>\n                  }\n                </div>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n    <div\n      class=\"flex flex-col text-center gap-3 sm:gap-4 items-center px-4 sm:px-6 mt-6\"\n    >\n      <ul\n        class=\"w-full list-disc list-inside text-zinc-300 leading-relaxed mt-2 space-y-2 text-left\"\n      >\n        @for (section of currentSections(); track section.items) {\n          @for (item of section.items; track item.key ?? item.text) {\n            <li class=\"text-sm sm:text-base\">{{ item.text }}</li>\n          }\n        }\n      </ul>\n    </div>\n  </div>\n}\n\n<!--Event-->\n@if (variant() === \"event\") {\n  <div class=\"px-4 sm:px-6 pt-4 sm:pt-6 pb-10\">\n    <!--List-->\n    <ap-trn-list-game\n      [trnData]=\"currentTrn()\"\n      [getDaysLabel]=\"getDaysLabel()\"\n      [getHoursLabel]=\"getHoursLabel()\"\n      [getMinutesLabel]=\"getMinutesLabel()\"\n      [getSecondsLabel]=\"getSecondsLabel()\"\n      [getCountdownStartTitle]=\"getCountdownStartTitle()\"\n      [getCountdownEndTitle]=\"getCountdownEndTitle()\"\n      [hasParticipated]=\"true\"\n    />\n    <!-- Level Selection Tabs -->\n    <div class=\"w-full mx-auto flex justify-start mt-6 font-semibold\">\n      <div class=\"flex bg-purple-500/20 rounded-t-lg\">\n        @for (\n          title of levelTitles();\n          track title;\n          let first = $first;\n          let last = $last\n        ) {\n          <!-- first: rounded-tl-xl , last: rounded-tr-xl -->\n          <button\n            class=\"px-6 py-1 text-md transition-colors hover:bg-purple-200/80 hover:text-black/80 cursor-pointer\"\n            [class.rounded-tl-xl]=\"first\"\n            [class.rounded-tr-xl]=\"last\"\n            [class.bg-purple-300]=\"selectedLevel() === $index\"\n            [class.text-black]=\"selectedLevel() === $index\"\n            [class.text-zinc-400]=\"selectedLevel() !== $index\"\n            (click)=\"selectLevel($index)\"\n          >\n            {{ title }}\n          </button>\n        }\n      </div>\n    </div>\n\n    <!-- Prize Table -->\n    <div\n      class=\"w-full mx-auto border-2 border-purple-300/20 rounded-b-lg rounded-tr-xl overflow-hidden shadow-lg pointer-events-none\"\n    >\n      <table class=\"w-full text-zinc-300\">\n        <thead\n          class=\"bg-purple-500/15 rounded-tr-xl backdrop-blur-sm text-purple-200\"\n        >\n          <tr>\n            <th class=\"w-[30%] px-4 py-2 text-left\">\n              {{ getTableTitle1() }}\n            </th>\n            <th class=\"w-[20%] px-4 py-2 text-center\">\n              {{ getTableTitle2() }}\n            </th>\n            <th class=\"w-[50%] px-4 py-2 text-right\">\n              {{ getTableTitle3() }}\n            </th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-zinc-700/50\">\n          @for (\n            prize of getCurrentPrizes();\n            track prize.number;\n            let isEven = $even\n          ) {\n            <tr\n              class=\"transition-all duration-200 hover:bg-purple-400/5\"\n              [class.bg-zinc-800]=\"isEven\"\n              [class.bg-zinc-900]=\"!isEven\"\n            >\n              <td class=\"px-4 py-3\">\n                {{ prize.number }}\n              </td>\n              <td class=\"px-4 py-3 text-center\">\n                {{ prize.winner }}\n              </td>\n              <td class=\"px-4 py-3 text-right\">\n                <div class=\"flex items-center justify-end gap-2\">\n                  <span class=\"text-purple-200 font-semibold\">\n                    {{ trn.currencySymbol() }}\n                    {{ prize.prize | floorNumber: \"1.2-2\" }}\n                  </span>\n                  @if (prize.tickets > 0) {\n                    <span class=\"text-purple-300\">+</span>\n                    <div class=\"flex items-center gap-1\">\n                      <ap-icon\n                        [name]=\"'wallet default'\"\n                        class=\"size-5 mb-1 justify-center flex items-center text-purple-400\"\n                      ></ap-icon>\n                      <span class=\"text-purple-300 font-semibold\">\n                        {{ prize.tickets * 100 | floorNumber: \"1.0-1\" }}%\n                      </span>\n                    </div>\n                  }\n                </div>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n    <div\n      class=\"flex flex-col text-center gap-3 sm:gap-4 items-center px-4 sm:px-6 mt-6\"\n    >\n      <ul\n        class=\"w-full list-disc list-inside text-zinc-300 leading-relaxed mt-2 space-y-2 text-left\"\n      >\n        @for (section of currentSections(); track section.items) {\n          @for (item of section.items; track item.key ?? item.text) {\n            <li class=\"text-sm sm:text-base\">{{ item.text }}</li>\n          }\n        }\n      </ul>\n    </div>\n  </div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventTrnPrizeComponent, { className: "EventTrnPrizeComponent", filePath: "src/app/pages/event-trn-prize/event-trn-prize.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=event-trn-prize.component.js.map