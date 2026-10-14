import { Component, output, input, signal, computed, inject, } from '@angular/core';
import { delay, Subject, takeUntil } from 'rxjs';
import { ApTrnListGameComponent } from '../../components/ap-trn-list-game/ap-trn-list-game.component';
import { ApUiPaginationComponent } from '../../components/ap-ui-pagination/ap-pagination.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { defaultPlayersList } from '../../components/ap-trn-list-row/ap-trn-list-row.interface';
import { CommonModule } from '@angular/common';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.label;
function EventTrnRankingComponent_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r1 = ctx.$implicit;
    i0.ɵɵclassMap(header_r1.width + " px-4 py-2 " + header_r1.align);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", header_r1.label, " ");
} }
function EventTrnRankingComponent_For_13_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " You ");
} }
function EventTrnRankingComponent_For_13_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const data_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", data_r2.name, " ");
} }
function EventTrnRankingComponent_For_13_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "number");
} if (rf & 2) {
    const data_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate2(" ", ctx_r2.trn.currencySymbol(), "", i0.ɵɵpipeBind1(1, 2, data_r2.win), " ");
} }
function EventTrnRankingComponent_For_13_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " - ");
} }
function EventTrnRankingComponent_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 10)(1, "td", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 15);
    i0.ɵɵconditionalCreate(4, EventTrnRankingComponent_For_13_Conditional_4_Template, 1, 0)(5, EventTrnRankingComponent_For_13_Conditional_5_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td", 16);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 16);
    i0.ɵɵconditionalCreate(10, EventTrnRankingComponent_For_13_Conditional_10_Template, 2, 4)(11, EventTrnRankingComponent_For_13_Conditional_11_Template, 1, 0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ɵ$index_25_r4 = ctx.$index;
    i0.ɵɵproperty("ngClass", data_r2.highlighted ? "bg-purple-900/60 border-2 border-purple-400" : ɵ$index_25_r4 % 2 === 0 ? "bg-zinc-800" : "bg-zinc-900");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", data_r2.highlighted ? "text-zinc-300" : "text-purple-50");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", data_r2.rank === null || data_r2.rank === undefined ? "-" : data_r2.rank, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", data_r2.highlighted ? "text-purple-200" : "text-zinc-300");
    i0.ɵɵadvance();
    i0.ɵɵconditional(data_r2.highlighted ? 4 : 5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", data_r2.highlighted ? "text-purple-200" : "text-zinc-300");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(8, 9, data_r2.score, "1.0-0"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", data_r2.highlighted ? "text-purple-200" : "text-zinc-300");
    i0.ɵɵadvance();
    i0.ɵɵconditional(data_r2.win ? 10 : 11);
} }
function EventTrnRankingComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
function EventTrnRankingComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-loading-overlay", 13);
} }
export class EventTrnRankingComponent {
    appI18n = inject(AppI18nService);
    getRefreshButtonText = this.appI18n.computed('Refresh_Btn', 'Refresh');
    getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
    getHoursLabel = this.appI18n.computed('HRS', 'HRS');
    getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
    getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
    getCountdownStartTitle = this.appI18n.computed('StartIn_Tip', 'Start in');
    getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in');
    api = inject(AppInterfaceService);
    trn = inject(TrnCtrlService);
    currentTrn = input(null);
    isLoading = signal(true);
    goBack = output();
    getNOLabel = this.appI18n.computed('RankNo_RankList', 'No.');
    playerNameLabel = this.appI18n.computed('PlayerName__RankList', 'Player Name');
    scoreLabel = this.appI18n.computed('Score__RankList', 'Score');
    prizeLabel = this.appI18n.computed('Prize__RankList', 'Prize');
    tableHeaders = signal([
        { label: this.getNOLabel(), width: 'w-[15%]', align: 'text-left' },
        { label: this.playerNameLabel(), width: 'w-[15%]', align: 'text-left' },
        { label: this.scoreLabel(), width: 'w-[40%]', align: 'text-right' },
        { label: this.prizeLabel(), width: 'w-[40%]', align: 'text-right' },
    ]);
    //* 積分
    bonusPoint = signal(500) || null;
    //** 每頁顯示幾筆資料 */
    itemsPerPage = signal(10);
    currentPage = signal(1);
    totalPages = signal(1);
    currentPageData = signal(defaultPlayersList);
    destroy$ = new Subject();
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnInit() {
        this.trn.eventLeaderboard$
            .pipe(delay(500), takeUntil(this.destroy$))
            .subscribe(this.onLeadboardUpdate.bind(this));
        this.sendLeaderboardRequest();
    }
    paginationConfig = computed(() => ({
        currentPage: this.currentPage(),
        totalPages: this.totalPages(),
        showPages: 1,
    }));
    onPageChanged(page) {
        this.isLoading.set(true);
        this.currentPage.set(page);
        this.sendLeaderboardRequest();
    }
    handleBack() {
        this.goBack.emit();
    }
    clickRefresh() {
        this.sendLeaderboardRequest();
    }
    onLeadboardUpdate(data) {
        this.currentPageData.set(data.list);
        this.totalPages.set(data.totalPages);
        this.isLoading.set(false);
    }
    sendLeaderboardRequest() {
        this.trn.sendEvnetLeaderboard(this.currentTrn()?.id || '', this.currentPage(), this.itemsPerPage());
    }
    // Get countdown time from event data
    getCountdownTime() {
        return '';
    }
    static ɵfac = function EventTrnRankingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventTrnRankingComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventTrnRankingComponent, selectors: [["event-trn-ranking"]], inputs: { currentTrn: [1, "currentTrn"] }, outputs: { goBack: "goBack" }, decls: 17, vars: 15, consts: [[1, "relative", "px-4", "sm:px-6", "pt-4", "sm:pt-6"], [3, "trnData", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "hasParticipated"], [1, "relative"], [1, "relative", "flex", "justify-end", "mt-6", "gap-4", "items-center"], ["icon", "arrow-path", 3, "click", "label", "size", "accentColor"], [1, "relative", "w-full", "mx-auto", "border-2", "border-purple-300/20", "rounded-xl", "overflow-x-auto", "mt-2", "shadow-xl", "mb-4"], [1, "w-full", "min-w-150"], [1, "bg-purple-500/15", "rounded-t-xl", "backdrop-blur-sm", "text-purple-200", "text-md", "tracking-wide"], [3, "class"], [1, "divide-y", "divide-zinc-700/50"], [1, "transition-all", "duration-200", "hover:bg-purple-500/5", "text-md", "sm:text-base", 3, "ngClass"], [1, "absolute", "inset-0", "bg-black/50"], [3, "pageChanged", "variant", "config"], [1, "absolute", "inset-0"], [1, "px-4", "py-3", 3, "ngClass"], [1, "px-4", "py-3", "text-left", 3, "ngClass"], [1, "px-4", "py-3", "text-right", "font-medium", 3, "ngClass"]], template: function EventTrnRankingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "ap-trn-list-game", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "ap-button", 4);
            i0.ɵɵlistener("click", function EventTrnRankingComponent_Template_ap_button_click_4_listener() { return ctx.clickRefresh(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 5)(6, "table", 6)(7, "thead", 7)(8, "tr");
            i0.ɵɵrepeaterCreate(9, EventTrnRankingComponent_For_10_Template, 2, 3, "th", 8, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "tbody", 9);
            i0.ɵɵrepeaterCreate(12, EventTrnRankingComponent_For_13_Template, 12, 12, "tr", 10, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(14, EventTrnRankingComponent_Conditional_14_Template, 1, 0, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "ap-ui-pagination", 12);
            i0.ɵɵlistener("pageChanged", function EventTrnRankingComponent_Template_ap_ui_pagination_pageChanged_15_listener($event) { return ctx.onPageChanged($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, EventTrnRankingComponent_Conditional_16_Template, 1, 0, "ap-loading-overlay", 13);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("trnData", ctx.currentTrn())("getDaysLabel", ctx.getDaysLabel())("getHoursLabel", ctx.getHoursLabel())("getMinutesLabel", ctx.getMinutesLabel())("getSecondsLabel", ctx.getSecondsLabel())("getCountdownStartTitle", ctx.getCountdownStartTitle())("getCountdownEndTitle", ctx.getCountdownEndTitle())("hasParticipated", true);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("label", ctx.getRefreshButtonText())("size", "small")("accentColor", "purple");
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.tableHeaders());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.currentPageData());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isLoading() ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("variant", "event")("config", ctx.paginationConfig());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 16 : -1);
        } }, dependencies: [ApTrnListGameComponent, ApUiPaginationComponent, ApButtonComponent, CommonModule, i1.NgClass, i1.DecimalPipe, ApLoadingOverlayComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventTrnRankingComponent, [{
        type: Component,
        args: [{ selector: 'event-trn-ranking', imports: [ApTrnListGameComponent, ApUiPaginationComponent, ApButtonComponent, CommonModule, ApLoadingOverlayComponent,], template: "<div class=\"relative px-4 sm:px-6 pt-4 sm:pt-6\">\n  <!-- Tournament List -->\n  <ap-trn-list-game\n    [trnData]=\"currentTrn()\"\n    [getDaysLabel]=\"getDaysLabel()\"\n    [getHoursLabel]=\"getHoursLabel()\"\n    [getMinutesLabel]=\"getMinutesLabel()\"\n    [getSecondsLabel]=\"getSecondsLabel()\"\n    [getCountdownStartTitle]=\"getCountdownStartTitle()\"\n    [getCountdownEndTitle]=\"getCountdownEndTitle()\"\n    [hasParticipated]=\"true\"\n  />\n  <div class=\"relative\">\n    <!-- Refresh Button -->\n    <div class=\"relative flex justify-end mt-6 gap-4 items-center\">\n      <ap-button\n        [label]=\"getRefreshButtonText()\"\n        [size]=\"'small'\"\n        icon=\"arrow-path\"\n        [accentColor]=\"'purple'\"\n        (click)=\"clickRefresh()\"\n      />\n    </div>\n\n    <!-- Ranking Table -->\n    <div\n      class=\"relative w-full mx-auto border-2 border-purple-300/20 rounded-xl overflow-x-auto mt-2 shadow-xl mb-4\"\n    >\n      <table class=\"w-full min-w-150\">\n        <!-- Table Header -->\n        <thead\n          class=\"bg-purple-500/15 rounded-t-xl backdrop-blur-sm text-purple-200 text-md tracking-wide\"\n        >\n          <tr>\n            @for (header of tableHeaders(); track header.label) {\n              <th [class]=\"header.width + ' px-4 py-2 ' + header.align\">\n                {{ header.label }}\n              </th>\n            }\n          </tr>\n        </thead>\n\n        <!-- Table Body -->\n        <tbody class=\"divide-y divide-zinc-700/50\">\n          @for (data of currentPageData(); track $index; let isEven = $even) {\n            <tr\n              class=\"transition-all duration-200 hover:bg-purple-500/5 text-md sm:text-base\"\n              [ngClass]=\"\n                data.highlighted\n                  ? 'bg-purple-900/60 border-2 border-purple-400'\n                  : isEven\n                    ? 'bg-zinc-800'\n                    : 'bg-zinc-900'\n              \"\n            >\n              <!-- Rank Column -->\n              <td\n                class=\"px-4 py-3\"\n                [ngClass]=\"\n                  data.highlighted ? 'text-zinc-300' : 'text-purple-50'\n                \"\n              >\n                {{\n                  data.rank === null || data.rank === undefined\n                    ? \"-\"\n                    : data.rank\n                }}\n              </td>\n\n              <!-- Username Column -->\n              <td\n                class=\"px-4 py-3 text-left\"\n                [ngClass]=\"\n                  data.highlighted ? 'text-purple-200' : 'text-zinc-300'\n                \"\n              >\n                @if (data.highlighted) {\n                  You\n                } @else {\n                  {{ data.name }}\n                }\n              </td>\n\n              <!-- Score Column -->\n              <td\n                class=\"px-4 py-3 text-right font-medium\"\n                [ngClass]=\"\n                  data.highlighted ? 'text-purple-200' : 'text-zinc-300'\n                \"\n              >\n                <!-- \u986F\u793A\u6574\u6578 -->\n                {{ data.score | number:'1.0-0' }}\n              </td>\n\n              <!-- Prize Column -->\n              <td\n                class=\"px-4 py-3 text-right font-medium\"\n                [ngClass]=\"\n                  data.highlighted ? 'text-purple-200' : 'text-zinc-300'\n                \"\n              >\n                @if (data.win) {\n                  {{ trn.currencySymbol() }}{{ data.win | number }}\n                }\n                @else {\n                  -\n                }\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n      @if (isLoading()) {\n        <div class=\"absolute inset-0 bg-black/50\"></div>\n      }\n    </div>\n\n    <!-- Pagination -->\n    <ap-ui-pagination\n      [variant]=\"'event'\"\n      [config]=\"paginationConfig()\"\n      (pageChanged)=\"onPageChanged($event)\"\n    />\n    @if (isLoading()) {\n      <ap-loading-overlay class=\"absolute inset-0\" />\n    }\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventTrnRankingComponent, { className: "EventTrnRankingComponent", filePath: "src/app/pages/event-trn-ranking/event-trn-ranking.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=event-trn-ranking.component.js.map