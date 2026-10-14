import { Component, computed, inject, signal } from '@angular/core';
import { ApUiPaginationComponent, } from '../../components/ap-ui-pagination/ap-pagination.component';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { delay, Subject, takeUntil } from 'rxjs';
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function EventTrnHistoryComponent_For_24_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 19);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", item_r1.image, i0.ɵɵsanitizeUrl)("alt", item_r1.game + " banner");
} }
function EventTrnHistoryComponent_For_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 17)(3, "div", 18);
    i0.ɵɵconditionalCreate(4, EventTrnHistoryComponent_For_24_Conditional_4_Template, 1, 2, "img", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 21);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "td", 22);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 23)(12, "div");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div");
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td", 22);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td", 24);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(" relative animate-fade-down animate-duration-300 hover:bg-zinc-600/50 " + ($index_r2 % 2 === 0 ? " bg-zinc-900" : " bg-zinc-800"));
    i0.ɵɵattribute("data-original-index", (ctx_r2.currentPage() - 1) * ctx_r2.itemsPerPage() + $index_r2 + 1);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("py-2 px-2 wrap-break-word overflow-hidden align-top " + ctx_r2.getGameListClass(item_r1.variant));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(item_r1.image ? 4 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.shortenGameName(item_r1.game, 12), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r1.game, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r1.status, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 14, item_r1.time, "yyyy-MM-dd"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(17, 17, item_r1.time, "HH:mm"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" No.", item_r1.rank, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", item_r1.currency, "", item_r1.prizeAmount, " ");
} }
function EventTrnHistoryComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 13);
} }
function EventTrnHistoryComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-loading-overlay", 16);
} }
export class EventTrnHistoryComponent {
    //** 服務注入 */
    appI18n = inject(AppI18nService);
    api = inject(AppInterfaceService);
    trn = inject(TrnCtrlService);
    getGameLabel = this.appI18n.computed('EventName_History', 'Event');
    getStatusLabel = this.appI18n.computed('history_jackpot_status', 'Status');
    getTimeLabel = this.appI18n.computed('Time_History', 'Time');
    getRankLabel = this.appI18n.computed('RankNo_History', 'Rank');
    getPrizeLabel = this.appI18n.computed('Prize_History', 'Prize');
    historyItems = signal([]);
    itemsPerPage = signal(10);
    currentPage = signal(1);
    totalPages = signal(1);
    limit = computed(() => this.itemsPerPage());
    offset = computed(() => (this.currentPage() - 1) * this.itemsPerPage());
    sortDirection = signal('desc');
    sortType = signal('time');
    isLoading = signal(true);
    destroy$ = new Subject();
    ngOnInit() {
        this.trn.playerHistory$.pipe(delay(500), takeUntil(this.destroy$)).subscribe(this.onPlayerHistory.bind(this));
        this.trn.sendPlayerHistory(this.limit(), this.offset());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onPlayerHistory(history) {
        this.isLoading.set(false);
        this.currentPage.set(history.page);
        this.itemsPerPage.set(history.pageSize);
        this.totalPages.set(history.totalPages);
        const items = history.list.map((item) => {
            return {
                game: item.name,
                id: item.id,
                status: item.status,
                time: item.time,
                rank: item.rank,
                currency: this.trn.currencySymbol(),
                variant: item.type,
                prizeAmount: item.prize,
                image: item.images,
            };
        });
        this.historyItems.set(items);
    }
    onTimeSortClick() {
        if (this.sortType() === 'time') {
            const currentDirection = this.sortDirection();
            this.sortDirection.set(currentDirection === 'asc' ? 'desc' : 'asc');
        }
        else {
            this.sortType.set('time');
            this.sortDirection.set('desc');
        }
        this.currentPage.set(1);
    }
    onRankSortClick() {
        if (this.sortType() === 'rank') {
            const currentDirection = this.sortDirection();
            this.sortDirection.set(currentDirection === 'asc' ? 'desc' : 'asc');
        }
        else {
            this.sortType.set('rank');
            this.sortDirection.set('asc');
        }
        this.currentPage.set(1);
    }
    onPrizeSortClick() {
        if (this.sortType() === 'prize') {
            const currentDirection = this.sortDirection();
            this.sortDirection.set(currentDirection === 'asc' ? 'desc' : 'asc');
        }
        else {
            this.sortType.set('prize');
            this.sortDirection.set('desc');
        }
        this.currentPage.set(1);
    }
    paginationConfig = computed(() => {
        return {
            currentPage: this.currentPage(),
            totalPages: this.totalPages(),
            showPages: 1,
        };
    });
    getGameBannerClass(variant, hasImage = false) {
        if (hasImage) {
            const borderColor = variant === 'quick' ? 'border-yellow-300/50' : 'border-purple-400/50';
            return `border-1 ${borderColor} bg-contain bg-center bg-no-repeat`;
        }
        return variant === 'quick'
            ? 'border-2 border-yellow-300'
            : 'border-2 border-purple-400';
    }
    getGameBannerStyle(image) {
        return image ? { 'background-image': `url(${image})` } : {};
    }
    getGameListClass(variant) {
        if (!variant) {
            return '';
        }
        return variant === 'quick'
            ? 'border-l-2 border-yellow-300'
            : 'border-l-2 border-purple-400';
    }
    // 縮短游戲名稱，超過長度則加上省略號
    shortenGameName(gameName = '', maxLength = 15) {
        return gameName.length > maxLength
            ? gameName.substring(0, maxLength) + '...'
            : gameName;
    }
    getTimeSortIcon() {
        return this.sortDirection() === 'asc'
            ? 'bars-arrow-up default'
            : 'bars-arrow-down default';
    }
    getRankSortIcon() {
        return this.sortDirection() === 'asc'
            ? 'bars-arrow-up default'
            : 'bars-arrow-down default';
    }
    getPrizeSortIcon() {
        return this.sortDirection() === 'asc'
            ? 'bars-arrow-up default'
            : 'bars-arrow-down default';
    }
    sortedItems = computed(() => {
        const items = [...this.historyItems()];
        const direction = this.sortDirection();
        const sortType = this.sortType();
        return items.sort((a, b) => {
            if (sortType === 'time') {
                if (direction === 'asc') {
                    return (a.time || 0) - (b.time || 0);
                }
                else {
                    return (b.time || 0) - (a.time || 0);
                }
            }
            else if (sortType === 'rank') {
                const rankA = a.rank || 0;
                const rankB = b.rank || 0;
                if (direction === 'asc') {
                    return rankA - rankB;
                }
                else {
                    return rankB - rankA;
                }
            }
            else if (sortType === 'prize') {
                // Sort by prize (extract number from "$X.XX" format, handle commas)
                const prizeA = a.prizeAmount || 0;
                const prizeB = b.prizeAmount || 0;
                if (direction === 'asc') {
                    return prizeA - prizeB;
                }
                else {
                    return prizeB - prizeA;
                }
            }
            return 0;
        });
    });
    paginationChanged(page) {
        this.currentPage.set(page);
        this.isLoading.set(true);
        this.trn.sendPlayerHistory(this.limit(), this.offset());
    }
    static ɵfac = function EventTrnHistoryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventTrnHistoryComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventTrnHistoryComponent, selectors: [["event-trn-history"]], decls: 29, vars: 12, consts: [[1, "relative", "flex", "flex-col", "h-full", "pt-2", "overflow-hidden"], [1, "relative", "flex-1", "min-h-0", "overflow-hidden"], [1, "relative", "size-full", "bg-zinc-900", "gap-1", "px-1", "md:px-20", "overflow-y-auto"], [1, "relative", "w-full", "table-fixed", "border-separate", "border-spacing-0", "text-zinc-200"], [1, "sticky", "top-0", "z-sticky"], [1, "text-md", "border-b", "border-zinc-600", "text-zinc-300"], [1, "sticky", "top-0", "z-sticky", "w-[25%]", "bg-zinc-800", "text-center"], [1, "sticky", "top-0", "z-sticky", "w-[15%]", "bg-zinc-800", "text-center"], [1, "sticky", "top-0", "z-sticky", "w-[25%]", "bg-zinc-800", "py-1", "px-1", "text-center"], [1, "w-full", "min-h-8", "flex", "items-center", "gap-1", "hover:text-zinc-100", "cursor-pointer", "transition-colors", "justify-center", 3, "click"], [1, "size-5", 3, "name"], [1, "sticky", "top-0", "z-sticky", "w-[15%]", "bg-zinc-800", "py-1", "px-1", "text-center"], [3, "class"], [1, "absolute", "inset-0", "bg-black/50"], [1, "relative", "shrink-0", "py-2"], [3, "pageChanged", "variant", "config"], [1, "absolute", "inset-0"], [1, "flex", "flex-wrap", "relative", "items-center", "sm:gap-2"], [1, "w-14", "h-8", "rounded", "shrink-0", "overflow-hidden"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "sm:hidden", "mt-1", "sm:mt-0", "sm:flex-1", "sm:min-w-0", "font-medium", "sm:text-sm", "text-xs"], [1, "hidden", "sm:inline", "sm:text-sm", "text-xs"], [1, "py-2", "px-1", "text-center", "font-medium", "text-sm"], [1, "py-2", "px-1", "text-center", "font-medium", "text-xs"], [1, "py-2", "px-1", "pr-4", "text-center", "font-medium", "text-sm"]], template: function EventTrnHistoryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "table", 3)(4, "thead", 4)(5, "tr", 5)(6, "th", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "th", 7);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "th", 8)(11, "button", 9);
            i0.ɵɵlistener("click", function EventTrnHistoryComponent_Template_button_click_11_listener() { return ctx.onTimeSortClick(); });
            i0.ɵɵelement(12, "ap-icon", 10);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "th", 11)(15, "button", 9);
            i0.ɵɵlistener("click", function EventTrnHistoryComponent_Template_button_click_15_listener() { return ctx.onRankSortClick(); });
            i0.ɵɵelement(16, "ap-icon", 10);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "th", 8)(19, "button", 9);
            i0.ɵɵlistener("click", function EventTrnHistoryComponent_Template_button_click_19_listener() { return ctx.onPrizeSortClick(); });
            i0.ɵɵelement(20, "ap-icon", 10);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(22, "tbody");
            i0.ɵɵrepeaterCreate(23, EventTrnHistoryComponent_For_24_Template, 22, 20, "tr", 12, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(25, EventTrnHistoryComponent_Conditional_25_Template, 1, 0, "div", 13);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "div", 14)(27, "ap-ui-pagination", 15);
            i0.ɵɵlistener("pageChanged", function EventTrnHistoryComponent_Template_ap_ui_pagination_pageChanged_27_listener($event) { return ctx.paginationChanged($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(28, EventTrnHistoryComponent_Conditional_28_Template, 1, 0, "ap-loading-overlay", 16);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.getGameLabel(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.getStatusLabel(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("name", ctx.getTimeSortIcon());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.getTimeLabel(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("name", ctx.getRankSortIcon());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.getRankLabel(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("name", ctx.getPrizeSortIcon());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.getPrizeLabel(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.sortedItems());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isLoading() ? 25 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("variant", "quick")("config", ctx.paginationConfig());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 28 : -1);
        } }, dependencies: [CommonModule, i1.DatePipe, ApUiPaginationComponent, ApIconComponent, ApLoadingOverlayComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventTrnHistoryComponent, [{
        type: Component,
        args: [{ selector: 'event-trn-history', imports: [CommonModule, ApUiPaginationComponent, ApIconComponent, ApLoadingOverlayComponent], template: "<div class=\"relative flex flex-col h-full pt-2 overflow-hidden\">\n  <div class=\"relative flex-1 min-h-0 overflow-hidden\">\n    <div\n      class=\"relative size-full bg-zinc-900 gap-1 px-1 md:px-20 overflow-y-auto\"\n    >\n      <table\n        class=\"relative w-full table-fixed border-separate border-spacing-0 text-zinc-200\"\n      >\n        <!--Title-->\n        <thead class=\"sticky top-0 z-sticky\">\n          <tr class=\"text-md border-b border-zinc-600 text-zinc-300\">\n            <th class=\"sticky top-0 z-sticky w-[25%] bg-zinc-800 text-center\">\n              {{ getGameLabel() }}\n            </th>\n            <th class=\"sticky top-0 z-sticky w-[15%] bg-zinc-800 text-center\">\n              {{ getStatusLabel() }}\n            </th>\n            <!--Time-->\n            <th\n              class=\"sticky top-0 z-sticky w-[25%] bg-zinc-800 py-1 px-1 text-center\"\n            >\n              <button\n                (click)=\"onTimeSortClick()\"\n                class=\"w-full min-h-8 flex items-center gap-1 hover:text-zinc-100 cursor-pointer transition-colors justify-center\"\n              >\n                <ap-icon [name]=\"getTimeSortIcon()\" class=\"size-5\" />{{\n                  getTimeLabel()\n                }}\n              </button>\n            </th>\n            <!--Rank-->\n            <th\n              class=\"sticky top-0 z-sticky w-[15%] bg-zinc-800 py-1 px-1 text-center\"\n            >\n              <button\n                (click)=\"onRankSortClick()\"\n                class=\"w-full min-h-8 flex items-center gap-1 hover:text-zinc-100 cursor-pointer transition-colors justify-center\"\n              >\n                <ap-icon [name]=\"getRankSortIcon()\" class=\"size-5\" />{{\n                  getRankLabel()\n                }}\n              </button>\n            </th>\n            <!--Prize-->\n            <th\n              class=\"sticky top-0 z-sticky w-[25%] bg-zinc-800 py-1 px-1 text-center\"\n            >\n              <button\n                (click)=\"onPrizeSortClick()\"\n                class=\"w-full min-h-8 flex items-center gap-1 hover:text-zinc-100 cursor-pointer transition-colors justify-center\"\n              >\n                <ap-icon [name]=\"getPrizeSortIcon()\" class=\"size-5\" />{{\n                  getPrizeLabel()\n                }}\n              </button>\n            </th>\n          </tr>\n        </thead>\n        <!-- Content -->\n        <tbody>\n          @for (item of sortedItems(); track $index) {\n            <tr\n              [class]=\"\n                ' relative animate-fade-down animate-duration-300 hover:bg-zinc-600/50 ' +\n                ($index % 2 === 0 ? ' bg-zinc-900' : ' bg-zinc-800')\n              \"\n              [attr.data-original-index]=\"\n                (currentPage() - 1) * itemsPerPage() + $index + 1\n              \"\n            >\n              <td\n                [class]=\"\n                  'py-2 px-2 wrap-break-word overflow-hidden align-top ' +\n                  getGameListClass(item.variant)\n                \"\n              >\n                <div class=\"flex flex-wrap relative items-center sm:gap-2\">\n                  <div class=\"w-14 h-8 rounded shrink-0 overflow-hidden\">\n                    @if (item.image) {\n                      <img\n                        [src]=\"item.image\"\n                        [alt]=\"item.game + ' banner'\"\n                        class=\"w-full h-full object-cover\"\n                        loading=\"lazy\"\n                      />\n                    }\n                  </div>\n                  <div\n                    class=\"sm:hidden mt-1 sm:mt-0 sm:flex-1 sm:min-w-0 font-medium sm:text-sm text-xs\"\n                  >\n                    {{ shortenGameName(item.game, 12) }}\n                  </div>\n                  <div class=\"hidden sm:inline sm:text-sm text-xs\">\n                    {{ item.game }}\n                  </div>\n                </div>\n              </td>\n              <td class=\"py-2 px-1 text-center font-medium text-sm\">\n                {{ item.status }}\n              </td>\n              <td class=\"py-2 px-1 text-center font-medium text-xs\">\n                <div>{{ item.time | date: \"yyyy-MM-dd\" }}</div>\n                <div>{{ item.time | date: \"HH:mm\" }}</div>\n              </td>\n              <td class=\"py-2 px-1 text-center font-medium text-sm\">\n                No.{{ item.rank }}\n              </td>\n              <td class=\"py-2 px-1 pr-4 text-center font-medium text-sm\">\n                {{ item.currency }}{{ item.prizeAmount }}\n              </td>\n            </tr>\n          }\n        </tbody>\n        @if (isLoading()) {\n          <div class=\"absolute inset-0 bg-black/50\"></div>\n        }\n      </table>\n    </div>\n  </div>\n\n  <div class=\"relative shrink-0 py-2\">\n    <ap-ui-pagination\n      [variant]=\"'quick'\"\n      [config]=\"paginationConfig()\"\n      (pageChanged)=\"paginationChanged($event)\"\n    />\n  </div>\n  @if (isLoading()) {\n    <ap-loading-overlay class=\"absolute inset-0\" />\n  }\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventTrnHistoryComponent, { className: "EventTrnHistoryComponent", filePath: "src/app/pages/event-trn-history/event-trn-history.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=event-trn-history.component.js.map