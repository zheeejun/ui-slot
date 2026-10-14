import { CommonModule } from '@angular/common';
import { Component, input, output, signal, computed, ViewChild } from '@angular/core';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApHistoryCalenderComponent } from '../ap-history-calender/ap-history-calender.component';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/scrolling";
function ApHistoryListComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_17_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleCalendar()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_17_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r2); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "ap-history-calender", 24);
    i0.ɵɵlistener("onConfirm", function ApHistoryListComponent_Conditional_17_Template_ap_history_calender_onConfirm_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateRangeConfirm($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("allLabel", ctx_r2.allLabel())("dayLabel", ctx_r2.dayLabel())("todayLabel", ctx_r2.todayLabel())("customLabel", ctx_r2.customLabel())("getConfirmButtonText", ctx_r2.getConfirmButtonText());
} }
function ApHistoryListComponent_Conditional_29_tr_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 33);
} if (rf & 2) {
    i0.ɵɵproperty("name", "star");
} }
function ApHistoryListComponent_Conditional_29_tr_3_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 34);
} if (rf & 2) {
    i0.ɵɵproperty("name", "trophy");
} }
function ApHistoryListComponent_Conditional_29_tr_3_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "ap-button", 42);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Conditional_18_Template_ap_button_click_1_listener($event) { i0.ɵɵrestoreView(_r7); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onReplay(item_r6, $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(2, "button", 43)(3, "ap-icon", 44);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Conditional_18_Template_ap_icon_click_3_listener($event) { i0.ɵɵrestoreView(_r7); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onReplay(item_r6, $event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", "replay")("variant", "rounded-icon")("size", "small")("accentColor", "zinc");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", "replay");
} }
function ApHistoryListComponent_Conditional_29_tr_3_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "ap-button", 42);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Conditional_19_Template_ap_button_click_1_listener($event) { i0.ɵɵrestoreView(_r8); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onShare(item_r6, $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(2, "button", 43)(3, "ap-icon", 44);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Conditional_19_Template_ap_icon_click_3_listener($event) { i0.ɵɵrestoreView(_r8); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onShare(item_r6, $event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", "share")("variant", "rounded-icon")("size", "small")("accentColor", "zinc");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", "share");
} }
function ApHistoryListComponent_Conditional_29_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 30)(1, "td", 31)(2, "div", 32);
    i0.ɵɵconditionalCreate(3, ApHistoryListComponent_Conditional_29_tr_3_Conditional_3_Template, 1, 1, "ap-icon", 33);
    i0.ɵɵconditionalCreate(4, ApHistoryListComponent_Conditional_29_tr_3_Conditional_4_Template, 1, 1, "ap-icon", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "td", 35);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Template_td_click_5_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.detail.emit(item_r6)); });
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td", 36);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Template_td_click_10_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.detail.emit(item_r6)); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 37);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Template_td_click_12_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.detail.emit(item_r6)); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td", 38);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Template_td_click_14_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.detail.emit(item_r6)); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 39)(17, "div", 40);
    i0.ɵɵconditionalCreate(18, ApHistoryListComponent_Conditional_29_tr_3_Conditional_18_Template, 4, 5);
    i0.ɵɵconditionalCreate(19, ApHistoryListComponent_Conditional_29_tr_3_Conditional_19_Template, 4, 5);
    i0.ɵɵelementStart(20, "div", 41)(21, "ap-button", 42);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Template_ap_button_click_21_listener($event) { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.copyTransaction(item_r6, $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 43)(23, "ap-icon", 44);
    i0.ɵɵlistener("click", function ApHistoryListComponent_Conditional_29_tr_3_Template_ap_icon_click_23_listener($event) { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.copyTransaction(item_r6, $event)); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i_r9 % 2 === 1 ? "bg-zinc-900 hover:bg-zinc-300/15" : "bg-zinc-800 hover:bg-zinc-300/15");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r6.isTrnHighlight ? "border-l-2 border-yellow-400" : item_r6.isCashDropHighlight ? "border-l-2 border-lime-500" : item_r6.isBonusHighlight ? "border-l-2 border-purple-500" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r6.isStarred ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r6.isTrophy ? 4 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r6.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.time);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.isStarred && item_r6.isTrophy ? "Tournament" : item_r6.isStarred ? "Free Game" : item_r6.isTrophy ? "Tournament" : item_r6.rewardType, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", item_r6.currency, " ", ctx_r2.formatAmount(item_r6.bet), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r6.isWin ? "text-emerald-400 hover:text-emerald-300" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", item_r6.currency, " ", ctx_r2.formatAmount(item_r6.win), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.showReplayButton(item_r6) ? 18 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.showShareButton(item_r6) ? 19 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", "copy")("variant", "rounded-icon")("size", "small")("accentColor", "zinc");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", "copy");
} }
function ApHistoryListComponent_Conditional_29_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelement(1, "div", 45);
    i0.ɵɵelementStart(2, "span", 46);
    i0.ɵɵtext(3, "Loading more...");
    i0.ɵɵelementEnd()();
} }
function ApHistoryListComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 25);
    i0.ɵɵlistener("scroll", function ApHistoryListComponent_Conditional_29_Template_cdk_virtual_scroll_viewport_scroll_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onViewportScroll()); });
    i0.ɵɵelementStart(1, "table", 26)(2, "tbody", 27);
    i0.ɵɵtemplate(3, ApHistoryListComponent_Conditional_29_tr_3_Template, 24, 19, "tr", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(4, ApHistoryListComponent_Conditional_29_Conditional_4_Template, 4, 0, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("itemSize", 52);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkVirtualForOf", ctx_r2.sortedList());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.isLoadingMore() ? 4 : -1);
} }
function ApHistoryListComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 47)(2, "div", 48);
    i0.ɵɵelement(3, "ap-icon", 49);
    i0.ɵɵelementStart(4, "span", 50);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", "x-mark");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.emptyStateLabel());
} }
export class ApHistoryListComponent {
    list = input([]);
    isLoadingMore = input(false);
    dateLabel = input('DATE');
    betLabel = input('BET');
    winLoseLabel = input('WIN/LOSE');
    otherLabel = input('Others');
    allLabel = input('All');
    todayLabel = input('Today');
    dayLabel = input('Last 7 Days');
    customLabel = input('Custom');
    typeLabel = input('Type');
    /** EX: GMT+08:00 */
    zoneString = signal('GMT+08:00');
    getConfirmButtonText = input('Confirm');
    emptyStateLabel = input('No records available.');
    forcedReplayButton = input(false);
    forcedShareButton = input(false);
    serverReplayEnabled = input(true);
    share = output();
    replay = output();
    detail = output();
    dateRangeChange = output();
    winLoseLabelClick = output();
    scrollNearEnd = output(); // 新增：滚动接近底部时触发
    viewport;
    sortDirection = signal('desc');
    sortType = signal('date');
    filterWinLose = signal('ALL');
    showCalendar = signal(false);
    selectedDateRange = signal(null);
    constructor() {
        // 設定zoneString
        const offsetMinutes = new Date().getTimezoneOffset();
        const offsetHours = -offsetMinutes / 60;
        const sign = offsetHours >= 0 ? '+' : '-';
        const absOffsetHours = Math.abs(offsetHours);
        const hours = Math.floor(absOffsetHours);
        const minutes = (absOffsetHours - hours) * 60;
        this.zoneString.set(`GMT${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
    }
    onViewportScroll() {
        if (!this.viewport || this.isLoadingMore())
            return;
        const end = this.viewport.getRenderedRange().end;
        const total = this.viewport.getDataLength();
        if (end >= total - 5) {
            this.scrollNearEnd.emit();
        }
    }
    onReplay(item, event) {
        event?.stopPropagation();
        this.replay.emit(item);
    }
    onShare(item, event) {
        event?.stopPropagation();
        this.share.emit(item);
    }
    async copyTransaction(item, event) {
        event?.stopPropagation();
        try {
            await navigator.clipboard.writeText(item.transaction);
            alert(`${item.transaction} copied to clipboard!`);
        }
        catch (err) {
            alert('Failed to copy transaction to clipboard');
        }
    }
    showReplayButton(item) {
        if (this.forcedReplayButton())
            return true;
        return this.serverReplayEnabled() && item.replay;
    }
    showShareButton(item) {
        if (this.forcedShareButton())
            return true;
        return this.serverReplayEnabled() && item.replay;
    }
    getDateSortIcon() {
        if (this.sortType() !== 'date') {
            return 'bars-arrow-down';
        }
        return this.sortDirection() === 'asc' ? 'bars-arrow-up' : 'bars-arrow-down';
    }
    getBetSortIcon() {
        if (this.sortType() !== 'bet') {
            return 'bars-arrow-down';
        }
        return this.sortDirection() === 'asc' ? 'bars-arrow-up' : 'bars-arrow-down';
    }
    onWinLoseFilterClick() {
        this.winLoseLabelClick.emit();
        const current = this.filterWinLose();
        if (current === 'ALL') {
            this.filterWinLose.set('WIN');
        }
        else if (current === 'WIN') {
            this.filterWinLose.set('LOSE');
        }
        else {
            this.filterWinLose.set('ALL');
        }
    }
    getWinLoseTitle() {
        const filter = this.filterWinLose();
        if (filter === 'WIN')
            return 'WIN';
        if (filter === 'LOSE')
            return 'LOSE';
        return 'WIN/LOSE';
    }
    toggleCalendar() {
        this.showCalendar.set(!this.showCalendar());
    }
    onDateRangeConfirm(dateRange) {
        this.selectedDateRange.set(dateRange);
        this.showCalendar.set(false);
        this.dateRangeChange.emit(dateRange);
    }
    sortedList = computed(() => {
        let items = [...this.list()];
        const direction = this.sortDirection();
        const sortType = this.sortType();
        const filter = this.filterWinLose();
        const range = this.selectedDateRange();
        // 注意：日期过滤和 WIN/LOSE 过滤已经在父组件完成
        // 这里只做排序，不再做过滤
        /*
        if (range?.from && range?.to) {
          const fromDateOnly = this.formatDateOnly(range.from);
          const toDateOnly = this.formatDateOnly(range.to);
    
    
          if (fromDateOnly === toDateOnly) {
            items = items.filter((item) => (item.date || '').trim() === fromDateOnly);
          } else {
            const fromTime = new Date(
              range.from.getFullYear(),
              range.from.getMonth(),
              range.from.getDate(),
              0,
              0,
              0,
              0
            ).getTime();
            const toTime = new Date(
              range.to.getFullYear(),
              range.to.getMonth(),
              range.to.getDate(),
              23,
              59,
              59,
              999
            ).getTime();
            items = items.filter((item) => {
              const dt = this.parseItemDateTime(item.date, item.time);
              return dt.getTime() >= fromTime && dt.getTime() <= toTime;
            });
          }
        }
    
    
        if (filter === 'WIN') {
          items = items.filter((item) => item.isWin === true);
        } else if (filter === 'LOSE') {
          items = items.filter((item) => item.isWin === false);
        }
        */
        return items.sort((a, b) => {
            if (sortType === 'date') {
                const dateTimeA = this.parseItemDateTime(a.date, a.time);
                const dateTimeB = this.parseItemDateTime(b.date, b.time);
                if (direction === 'asc') {
                    return dateTimeA.getTime() - dateTimeB.getTime();
                }
                else {
                    return dateTimeB.getTime() - dateTimeA.getTime();
                }
            }
            else if (sortType === 'bet') {
                const betA = a.betRaw;
                const betB = b.betRaw;
                if (direction === 'asc') {
                    return betA - betB;
                }
                else {
                    return betB - betA;
                }
            }
            return 0;
        });
    });
    parseItemDateTime(date, time) {
        const isoString = `${(date || '').trim()}T${(time || '').trim()}`;
        const parsed = new Date(isoString);
        return isNaN(parsed.getTime()) ? new Date(date) : parsed;
    }
    formatDateOnly(d) {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    formatAmount(value) {
        const [integerPart, decimalPart] = value.split('.');
        const formattedInteger = Number(integerPart).toLocaleString('en-US');
        return decimalPart === undefined
            ? formattedInteger
            : `${formattedInteger}.${decimalPart}`;
    }
    static ɵfac = function ApHistoryListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApHistoryListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApHistoryListComponent, selectors: [["ap-history-list"]], viewQuery: function ApHistoryListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkVirtualScrollViewport, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewport = _t.first);
        } }, inputs: { list: [1, "list"], isLoadingMore: [1, "isLoadingMore"], dateLabel: [1, "dateLabel"], betLabel: [1, "betLabel"], winLoseLabel: [1, "winLoseLabel"], otherLabel: [1, "otherLabel"], allLabel: [1, "allLabel"], todayLabel: [1, "todayLabel"], dayLabel: [1, "dayLabel"], customLabel: [1, "customLabel"], typeLabel: [1, "typeLabel"], getConfirmButtonText: [1, "getConfirmButtonText"], emptyStateLabel: [1, "emptyStateLabel"], forcedReplayButton: [1, "forcedReplayButton"], forcedShareButton: [1, "forcedShareButton"], serverReplayEnabled: [1, "serverReplayEnabled"] }, outputs: { share: "share", replay: "replay", detail: "detail", dateRangeChange: "dateRangeChange", winLoseLabelClick: "winLoseLabelClick", scrollNearEnd: "scrollNearEnd" }, decls: 31, vars: 10, consts: [["calendarButtonDesktop", ""], [1, "relative", "h-full", "flex", "flex-col", "min-h-0"], [1, "w-full", "text-white", "shrink-0"], [1, "sticky", "z-sticky", "top-0", "bg-zinc-900", "text-zinc-300"], [1, "text-sm", "text-left", "border-b", "border-zinc-600", "sm:border-0", "uppercase"], [1, "py-2", "px-1", "sm:p-2", "w-[8%]", "sm:w-[5%]"], [1, "py-2", "px-1", "sm:p-2", "w-[22%]", "sm:w-[15%]"], [1, "flex", "items-center", "justify-start", "gap-1", "mx-auto", "text-yellow-400", "hover:text-yellow-200", "transition-colors", "underline", "underline-offset-2"], [1, "flex", "cursor-pointer", "items-center", "z-modal", "uppercase", "leading-none", "space-x-1", 3, "click"], [1, "size-4", 3, "name"], [1, "flex-col", "text-left", "leading-none"], [1, "text-xs"], [1, "relative"], [1, "flex", "items-center", "gap-1", "hover:text-white", "cursor-pointer", "transition-colors"], [1, "py-2", "px-1", "sm:p-2", "w-[15%]", "hidden", "sm:table-cell"], [1, "py-2", "px-1", "sm:p-2", "w-[20%]"], [1, "flex", "items-center", "gap-1"], [1, "py-2", "px-1", "sm:p-2", "w-[28%]", "sm:w-[20%]", "text-yellow-400", "cursor-pointer", 3, "click"], [1, "hover:text-yellow-200", "transition-colors", "uppercase", "underline", "underline-offset-2"], [1, "py-2", "px-1", "sm:p-2", "w-[22%]", "sm:w-[20%]", "uppercase"], [1, "flex-1", "min-h-0", "overflow-auto", "scroll-smooth", 2, "scroll-behavior", "smooth", "-webkit-overflow-scrolling", "touch", 3, "itemSize"], [1, "w-full", "border-b", "border-zinc-700", "text-white"], [1, "fixed", "inset-0", "z-overlay", 3, "click"], [1, "absolute", "top-full", "-left-28", "sm:translate-y-6", "translate-y-5", "z-modal", "shadow-lg", 3, "click"], [3, "onConfirm", "allLabel", "dayLabel", "todayLabel", "customLabel", "getConfirmButtonText"], [1, "flex-1", "min-h-0", "overflow-auto", "scroll-smooth", 2, "scroll-behavior", "smooth", "-webkit-overflow-scrolling", "touch", 3, "scroll", "itemSize"], [1, "w-full", "text-white"], [1, "text-sm", "font-medium", "cursor-pointer"], ["class", "border-b border-zinc-700 animate-fade-down animate-duration-500", 3, "ngClass", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "flex", "justify-center", "items-center", "py-4", "text-zinc-400"], [1, "border-b", "border-zinc-700", "animate-fade-down", "animate-duration-500", 3, "ngClass"], [1, "p-1", "sm:p-2", "w-[8%]", "sm:w-[5%]", 3, "ngClass"], [1, "flex", "space-x-2"], [1, "size-4", "text-yellow-300", 3, "name"], [1, "size-4", "text-zinc-300", 3, "name"], [1, "p-1", "sm:p-2", "w-[22%]", "sm:w-[15%]", "text-xs", "font-normal", 3, "click"], [1, "p-1", "sm:p-2", "w-[15%]", "hidden", "sm:table-cell", 3, "click"], [1, "p-1", "sm:p-2", "w-[20%]", 3, "click"], [1, "p-1", "sm:p-2", "w-[28%]", "sm:w-[20%]", 3, "click", "ngClass"], [1, "p-1", "sm:p-2", "w-[22%]", "sm:w-[20%]"], [1, "flex", "items-center", "gap-2"], [1, "hidden", "sm:block"], [3, "click", "icon", "variant", "size", "accentColor"], [1, "sm:hidden"], [1, "size-5", 3, "click", "name"], [1, "animate-spin", "rounded-full", "h-6", "w-6", "border-b-2", "border-white"], [1, "ml-2"], [1, "w-full", "p-1", "sm:p-3.5", "bg-zinc-800", "animate-fade-down", "animate-duration-500"], [1, "flex", "items-center", "justify-center", "gap-1", "sm:gap-2"], [1, "sm:size-5", "size-4", 3, "name"], [1, "text-sm"]], template: function ApHistoryListComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "table", 2)(2, "thead", 3)(3, "tr", 4);
            i0.ɵɵelement(4, "th", 5);
            i0.ɵɵelementStart(5, "th", 6)(6, "div", 7)(7, "button", 8, 0);
            i0.ɵɵlistener("click", function ApHistoryListComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.toggleCalendar()); });
            i0.ɵɵelement(9, "ap-icon", 9);
            i0.ɵɵelementStart(10, "div", 10)(11, "span");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 11);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "div", 12)(16, "button", 13);
            i0.ɵɵconditionalCreate(17, ApHistoryListComponent_Conditional_17_Template, 3, 5);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(18, "th", 14);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "th", 15)(21, "button", 16)(22, "span");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "th", 17);
            i0.ɵɵlistener("click", function ApHistoryListComponent_Template_th_click_24_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onWinLoseFilterClick()); });
            i0.ɵɵelementStart(25, "button", 18);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "th", 19);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(29, ApHistoryListComponent_Conditional_29_Template, 5, 3, "cdk-virtual-scroll-viewport", 20);
            i0.ɵɵconditionalCreate(30, ApHistoryListComponent_Conditional_30_Template, 6, 2, "div", 21);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("name", "calendar");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.dateLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.zoneString());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.showCalendar() ? 17 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.typeLabel(), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.betLabel());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.winLoseLabel(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.otherLabel(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.sortedList().length ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.sortedList().length && !ctx.isLoadingMore() ? 30 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent, ApButtonComponent, ApHistoryCalenderComponent, ScrollingModule, i2.CdkFixedSizeVirtualScroll, i2.CdkVirtualForOf, i2.CdkVirtualScrollViewport], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApHistoryListComponent, [{
        type: Component,
        args: [{ selector: 'ap-history-list', imports: [CommonModule, ApIconComponent, ApButtonComponent, ApHistoryCalenderComponent, ScrollingModule], template: "<!-- table view -->\n<div class=\"relative h-full flex flex-col min-h-0\">\n  <table class=\"w-full text-white shrink-0\">\n    <thead class=\"sticky z-sticky top-0 bg-zinc-900 text-zinc-300\">\n      <tr\n        class=\"text-sm text-left border-b border-zinc-600 sm:border-0 uppercase\"\n      >\n        <th class=\"py-2 px-1 sm:p-2 w-[8%] sm:w-[5%]\"></th>\n        <th class=\"py-2 px-1 sm:p-2 w-[22%] sm:w-[15%]\">\n          <div\n            class=\"flex items-center justify-start gap-1 mx-auto text-yellow-400 hover:text-yellow-200 transition-colors underline underline-offset-2\"\n          >\n            <button\n              #calendarButtonDesktop\n              (click)=\"toggleCalendar()\"\n              class=\"flex cursor-pointer items-center z-modal uppercase leading-none space-x-1\"\n            >\n              <ap-icon [name]=\"'calendar'\" class=\"size-4\" />\n              <div class=\"flex-col text-left leading-none\">\n                <span>{{ dateLabel() }}</span>\n                <div class=\"text-xs\">{{ zoneString() }}</div>\n              </div>\n            </button>\n\n            <div class=\"relative\">\n              <button\n                class=\"flex items-center gap-1 hover:text-white cursor-pointer transition-colors\"\n              >\n                <!--<ap-icon [name]=\"getDateSortIcon()\" class=\"sm:size-5 size-4\" />-->\n                <!-- Desktop Calendar Dropdown -->\n                @if (showCalendar()) {\n                  <!-- Backdrop -->\n                  <div\n                    class=\"fixed inset-0 z-overlay\"\n                    (click)=\"toggleCalendar()\"\n                  ></div>\n                  <!-- Calendar -->\n                  <div\n                    class=\"absolute top-full -left-28 sm:translate-y-6 translate-y-5 z-modal shadow-lg\"\n                    (click)=\"$event.stopPropagation()\"\n                  >\n                    <ap-history-calender\n                      [allLabel]=\"allLabel()\"\n                      [dayLabel]=\"dayLabel()\"\n                      [todayLabel]=\"todayLabel()\"\n                      [customLabel]=\"customLabel()\"\n                      [getConfirmButtonText]=\"getConfirmButtonText()\"\n                      (onConfirm)=\"onDateRangeConfirm($event)\"\n                    />\n                  </div>\n                }\n              </button>\n            </div>\n          </div>\n        </th>\n        <th class=\"py-2 px-1 sm:p-2 w-[15%] hidden sm:table-cell\">\n          {{ typeLabel() }}\n        </th>\n        <th class=\"py-2 px-1 sm:p-2 w-[20%]\">\n          <button class=\"flex items-center gap-1\">\n            <!--<ap-icon [name]=\"getBetSortIcon()\" class=\"size-4\" />-->\n            <span> {{ betLabel() }}</span>\n          </button>\n        </th>\n        <th\n          class=\"py-2 px-1 sm:p-2 w-[28%] sm:w-[20%] text-yellow-400 cursor-pointer\"\n          (click)=\"onWinLoseFilterClick()\"\n        >\n          <button\n            class=\"hover:text-yellow-200 transition-colors uppercase underline underline-offset-2\"\n          >\n            {{ winLoseLabel() }}\n          </button>\n        </th>\n        <th class=\"py-2 px-1 sm:p-2 w-[22%] sm:w-[20%] uppercase\">\n          {{ otherLabel() }}\n        </th>\n      </tr>\n    </thead>\n  </table>\n\n  <!-- Virtual Scroll Viewport -->\n  @if (sortedList().length) {\n    <cdk-virtual-scroll-viewport\n      [itemSize]=\"52\"\n      class=\"flex-1 min-h-0 overflow-auto scroll-smooth\"\n      style=\"scroll-behavior: smooth; -webkit-overflow-scrolling: touch\"\n      (scroll)=\"onViewportScroll()\"\n    >\n      <table class=\"w-full text-white\">\n        <tbody class=\"text-sm font-medium cursor-pointer\">\n          <tr\n            *cdkVirtualFor=\"let item of sortedList(); let i = index\"\n            class=\"border-b border-zinc-700 animate-fade-down animate-duration-500\"\n            [ngClass]=\"\n              i % 2 === 1\n                ? 'bg-zinc-900 hover:bg-zinc-300/15'\n                : 'bg-zinc-800 hover:bg-zinc-300/15'\n            \"\n          >\n            <!-- Icon -->\n            <td\n              class=\"p-1 sm:p-2 w-[8%] sm:w-[5%]\"\n              [ngClass]=\"\n                item.isTrnHighlight\n                  ? 'border-l-2 border-yellow-400'\n                  : item.isCashDropHighlight\n                    ? 'border-l-2 border-lime-500'\n                    : item.isBonusHighlight\n                    ? 'border-l-2 border-purple-500'\n                    : ''\n              \"\n            >\n              <div class=\"flex space-x-2\">\n                @if (item.isStarred) {\n                  <ap-icon [name]=\"'star'\" class=\"size-4 text-yellow-300\" />\n                }\n                @if (item.isTrophy) {\n                  <ap-icon [name]=\"'trophy'\" class=\"size-4 text-zinc-300\" />\n                }\n              </div>\n            </td>\n            <!-- Date -->\n            <td\n              (click)=\"detail.emit(item)\"\n              class=\"p-1 sm:p-2 w-[22%] sm:w-[15%] text-xs font-normal\"\n            >\n              <div>{{ item.date }}</div>\n              <div>{{ item.time }}</div>\n            </td>\n            <!-- Type -->\n            <td\n              (click)=\"detail.emit(item)\"\n              class=\"p-1 sm:p-2 w-[15%] hidden sm:table-cell\"\n            >\n              {{\n                item.isStarred && item.isTrophy\n                  ? \"Tournament\"\n                  : item.isStarred\n                    ? \"Free Game\"\n                    : item.isTrophy\n                      ? \"Tournament\"\n                      : item.rewardType\n              }}\n            </td>\n            <!-- Bet -->\n            <td (click)=\"detail.emit(item)\" class=\"p-1 sm:p-2 w-[20%]\">\n              {{ item.currency }} {{ formatAmount(item.bet) }}\n            </td>\n            <!-- Win/Lose -->\n            <td\n              (click)=\"detail.emit(item)\"\n              class=\"p-1 sm:p-2 w-[28%] sm:w-[20%]\"\n              [ngClass]=\"\n                item.isWin ? 'text-emerald-400 hover:text-emerald-300' : ''\n              \"\n            >\n              {{ item.currency }} {{ formatAmount(item.win) }}\n            </td>\n            <!-- Others -->\n            <td class=\"p-1 sm:p-2 w-[22%] sm:w-[20%]\">\n              <div class=\"flex items-center gap-2\">\n                @if (showReplayButton(item)) {\n                  <div class=\"hidden sm:block\">\n                    <ap-button\n                      [icon]=\"'replay'\"\n                      [variant]=\"'rounded-icon'\"\n                      [size]=\"'small'\"\n                      [accentColor]=\"'zinc'\"\n                      (click)=\"onReplay(item, $event)\"\n                    />\n                  </div>\n                  <button class=\"sm:hidden\">\n                    <ap-icon\n                      [name]=\"'replay'\"\n                      class=\"size-5\"\n                      (click)=\"onReplay(item, $event)\"\n                    />\n                  </button>\n                }\n\n                @if (showShareButton(item)) {\n                  <div class=\"hidden sm:block\">\n                    <ap-button\n                      [icon]=\"'share'\"\n                      [variant]=\"'rounded-icon'\"\n                      [size]=\"'small'\"\n                      [accentColor]=\"'zinc'\"\n                      (click)=\"onShare(item, $event)\"\n                    />\n                  </div>\n                  <button class=\"sm:hidden\">\n                    <ap-icon\n                      [name]=\"'share'\"\n                      class=\"size-5\"\n                      (click)=\"onShare(item, $event)\"\n                    />\n                  </button>\n                }\n\n                <div class=\"hidden sm:block\">\n                  <ap-button\n                    [icon]=\"'copy'\"\n                    [variant]=\"'rounded-icon'\"\n                    [size]=\"'small'\"\n                    [accentColor]=\"'zinc'\"\n                    (click)=\"copyTransaction(item, $event)\"\n                  />\n                </div>\n\n                <button class=\"sm:hidden\">\n                  <ap-icon\n                    [name]=\"'copy'\"\n                    class=\"size-5\"\n                    (click)=\"copyTransaction(item, $event)\"\n                  />\n                </button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <!-- Loading More Indicator for Desktop -->\n      @if (isLoadingMore()) {\n        <div class=\"flex justify-center items-center py-4 text-zinc-400\">\n          <div\n            class=\"animate-spin rounded-full h-6 w-6 border-b-2 border-white\"\n          ></div>\n          <span class=\"ml-2\">Loading more...</span>\n        </div>\n      }\n    </cdk-virtual-scroll-viewport>\n  }\n\n  <!-- None Data -->\n  @if (!sortedList().length && !isLoadingMore()) {\n    <div class=\"w-full border-b border-zinc-700 text-white\">\n      <div\n        class=\"w-full p-1 sm:p-3.5 bg-zinc-800 animate-fade-down animate-duration-500\"\n      >\n        <div class=\"flex items-center justify-center gap-1 sm:gap-2\">\n          <ap-icon [name]=\"'x-mark'\" class=\"sm:size-5 size-4\" />\n          <span class=\"text-sm\">{{ emptyStateLabel() }}</span>\n        </div>\n      </div>\n    </div>\n  }\n</div>\n" }]
    }], () => [], { viewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApHistoryListComponent, { className: "ApHistoryListComponent", filePath: "src/app/components/ap-history-list/ap-history-list.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=ap-history-list.component.js.map