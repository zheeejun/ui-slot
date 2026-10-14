import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApCashDropListComponent } from '../../components/ap-cashdrop-list/ap-cashdrop-list.component';
import { ApCashdropCardCountdownComponent } from '../../components/ap-cashdrop-card-countdown/ap-cashdrop-card-countdown.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { CashDropService } from '../../services/cash-drop/cash-drop.service';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { formatCashDropData } from '../../services/cash-drop/cash-drop.function';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { QueryParamsService } from '../../services/query-params/query-params.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { ApPopupComponent } from '../../components/ap-popup/ap-popup.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.index;
function EventCashdropComponent_Conditional_4_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-cashdrop-list", 13);
    i0.ɵɵpipe(1, "number");
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("variant", "list")("leftValue", `${ctx_r2.user.currencySymbol()} ${i0.ɵɵpipeBind1(1, 4, p_r1.prize)}`)("rightValue", `${p_r1.left}`)("bgShade", $index_r2 % 2 === 0 ? "800" : "900");
} }
function EventCashdropComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 10);
    i0.ɵɵelement(2, "ap-cashdrop-list", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 12);
    i0.ɵɵrepeaterCreate(4, EventCashdropComponent_Conditional_4_For_5_Template, 2, 6, "ap-cashdrop-list", 13, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("variant", "header")("leftLabel", ctx_r2.prizeHeaderLeftLabel())("rightLabel", ctx_r2.prizeHeaderRightLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.prizes());
} }
function EventCashdropComponent_Conditional_5_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-cashdrop-list", 18);
    i0.ɵɵpipe(1, "number");
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("leftValue", i0.ɵɵinterpolate(p_r5.player))("rightValue", i0.ɵɵinterpolate(`${ctx_r2.user.currencySymbol()} ${i0.ɵɵpipeBind1(1, 5, p_r5.prize)}`))("bgShade", $index_r6 % 2 === 0 ? "800" : "900");
} }
function EventCashdropComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 14)(2, "div", 15)(3, "ap-button", 16);
    i0.ɵɵlistener("click", function EventCashdropComponent_Conditional_5_Template_ap_button_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setPrevTable()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 17);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ap-button", 16);
    i0.ɵɵlistener("click", function EventCashdropComponent_Conditional_5_Template_ap_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setNextTable()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(7, "ap-cashdrop-list", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 12);
    i0.ɵɵrepeaterCreate(9, EventCashdropComponent_Conditional_5_For_10_Template, 2, 7, "ap-cashdrop-list", 18, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("variant", "rounded-outlined")("accentColor", "zinc")("size", "small")("icon", "chevron-left");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.selectedTableTitle(), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("variant", "rounded-outlined")("accentColor", "zinc")("size", "small")("icon", "chevron-right");
    i0.ɵɵadvance();
    i0.ɵɵproperty("variant", "header")("leftLabel", ctx_r2.winnerHeaderLeftLabel())("rightLabel", ctx_r2.winnerHeaderRightLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.selectedTableContent());
} }
function EventCashdropComponent_Conditional_6_For_4_Conditional_0_Template(rf, ctx) { }
function EventCashdropComponent_Conditional_6_For_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(rule_r7);
} }
function EventCashdropComponent_Conditional_6_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, EventCashdropComponent_Conditional_6_For_4_Conditional_0_Template, 0, 0)(1, EventCashdropComponent_Conditional_6_For_4_Conditional_1_Template, 2, 1, "p", 21);
} if (rf & 2) {
    const rule_r7 = ctx.$implicit;
    i0.ɵɵconditional(rule_r7 === "" ? 0 : 1);
} }
function EventCashdropComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 19)(2, "div", 20);
    i0.ɵɵrepeaterCreate(3, EventCashdropComponent_Conditional_6_For_4_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.rulesContent());
} }
function EventCashdropComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-cashdrop-card-countdown", 22);
    i0.ɵɵlistener("click", function EventCashdropComponent_For_11_Template_ap_cashdrop_card_countdown_click_0_listener() { const item_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.updatePage(item_r9.id)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("daysLabel", ctx_r2.daysLabel())("hoursLabel", ctx_r2.hoursLabel())("minutesLabel", ctx_r2.minutesLabel())("secondsLabel", ctx_r2.secondsLabel())("title", item_r9.name || ctx_r2.dailyRewardsTitle())("remainingLabel", ctx_r2.remainingLabel())("endTime", item_r9.endtime);
} }
function EventCashdropComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-popup", 23);
    i0.ɵɵlistener("close", function EventCashdropComponent_Conditional_12_Template_ap_popup_close_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeShowDailyReward()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("header", ctx_r2.popupHeader())("image", "assets/images/eventcenter/coin.png")("showTitle", true)("showStars", true)("showDivider", true)("starCount", 5)("showCountdown", true)("daysLabel", ctx_r2.popupDaysLabel())("hrsLabel", ctx_r2.popupHoursLabel())("minsLabel", ctx_r2.popupMinutesLabel())("secsLabel", ctx_r2.popupSecondsLabel())("remainingLabel", ctx_r2.remainingLabel())("showLists", true)("title", ctx_r2.popupTitle())("listItems", ctx_r2.popupListItems())("button", ctx_r2.popupButton());
} }
export class EventCashdropComponent {
    // Services
    appI18n = inject(AppI18nService);
    user = inject(UserProfileService);
    api = inject(AppInterfaceService);
    cashDrop = inject(CashDropService);
    query = inject(QueryParamsService);
    login = inject(LoginCtrlService);
    showDailyReward = signal(false);
    // Selected Tab & Table
    selectedTab = signal('PRIZES');
    selectedTable = signal('LatestWinner');
    dailyRewardItem = computed(() => {
        const items = this.cashDrop.cashDropsByEndTime();
        return items.length > 0 ? items[0] : null;
    });
    // Tab 標題
    latestWinnerTitle = this.appI18n.computed('cashdrop_W3', 'Latest Winners');
    biggestWinnerTitle = this.appI18n.computed('cashdrop_W4', 'Biggest Winners');
    youWinTitle = this.appI18n.computed('cashdrop_W6', 'You Win');
    selectedTableTitle = computed(() => {
        switch (this.selectedTable()) {
            case 'BiggestWinner':
                return this.biggestWinnerTitle();
            case 'YouWin':
                return this.youWinTitle();
            default:
                return this.latestWinnerTitle();
        }
    });
    // Tab 列表
    prizesTabLabel = this.appI18n.computed('cashdrop_tab1', 'PRIZES');
    winnersTabLabel = this.appI18n.computed('cashdrop_tab2', 'WINNERS');
    rulesTabLabel = this.appI18n.computed('cashdrop_tab3', 'RULES');
    tabs = computed(() => [
        { id: 'PRIZES', label: this.prizesTabLabel() },
        { id: 'WINNERS', label: this.winnersTabLabel() },
        { id: 'RULES', label: this.rulesTabLabel() },
    ]);
    // Table 標題
    prizeHeaderLeftLabel = this.appI18n.computed('cashdrop_P1', 'Prize');
    prizeHeaderRightLabel = this.appI18n.computed('cashdrop_P2', 'Prize Left');
    winnerHeaderLeftLabel = this.appI18n.computed('cashdrop_W1', 'Player ID');
    winnerHeaderRightLabel = this.appI18n.computed('cashdrop_W2', 'Prize');
    dailyRewardsTitle = this.appI18n.computed('cashdrop_logo', 'DAILY REWARDS');
    remainingLabel = this.appI18n.computed('cashdrop_D1_2', 'Event Remaining');
    // Popup 標題與內容
    popupHeader = this.appI18n.computed('cashdrop_logo', 'Daily Reward');
    popupDaysLabel = this.appI18n.computed('cashdrop_D4_4', 'DAYS');
    popupHoursLabel = this.appI18n.computed('cashdrop_D4_5', 'HRS');
    popupMinutesLabel = this.appI18n.computed('cashdrop_D4_6', 'MINS');
    popupSecondsLabel = this.appI18n.computed('cashdrop_D4_7', 'SECS');
    popupTitle = this.appI18n.computed('cashdrop_D1_5', 'Stand a chance to win Daily Cash Drops!');
    popupButton = this.appI18n.computed('cashdrop_btn2', 'OK');
    popupListItems = computed(() => [
        this.appI18n.instant('cashdrop_D4_8') || 'Expiry Date:',
        this.appI18n.instant('cashdrop_D4_1') || 'Number of prizes:',
        this.appI18n.instant('cashdrop_D4_2') || 'Max prize:',
        this.appI18n.instant('cashdrop_D4_3') || 'Min Bet:',
    ]);
    // Cache 頁面資料
    pageDataMap = {};
    prizes = signal([]);
    latestWinners = signal([]);
    biggestWinners = signal([]);
    youWins = signal([]);
    ruleData = signal(null);
    // Rules 內容
    rulesContent = computed(() => {
        const rule = this.ruleData();
        if (!rule)
            return [];
        const str = (key, fallback) => this.appI18n.instant(key, fallback);
        const result = [];
        if (Number(rule.all_day) > 0) {
            result.push(str('cashdrop_R1_1', '1. {0} Cash Drop event period from {2} to {3}')
                .replace('{0}', rule.name)
                .replace('{2}', rule.begin_time)
                .replace('{3}', rule.end_time));
        }
        else {
            result.push(str('cashdrop_R1_2', '1. {0} Cash Drop event period from {4} to {5}, and daily period from {6} to {7}')
                .replace('{0}', rule.name)
                .replace('{4}', rule.begin_time)
                .replace('{5}', rule.end_time)
                .replace('{6}', rule.begin_range)
                .replace('{7}', rule.end_range));
        }
        result.push(str('cashdrop_R2', '2. Minimum bet requirement to join in the event is {8}{1}')
            .replace('{8}', '')
            .replace('{1}', rule.min_bet_amount.toLocaleString()));
        result.push(str('cashdrop_R3', '3. Total amount of this event is {8}{9}, which will be randomly given to {10} lucky players.')
            .replace('{8}', '')
            .replace('{9}', rule.total_prizes_amount.toLocaleString())
            .replace('{10}', rule.total_prizes_count.toLocaleString()));
        result.push(str('cashdrop_R4', '4. During the event period, players have the chance to win more than one prizes with a random cash prize.'));
        result.push(str('cashdrop_R5', '5. Qualified Games for this event: ') + rule.game_code_list.join(', '));
        result.push(str('cashdrop_R6', '6. When you win a prize, the settlement will be completed within one hour at the latest, details available in game history.'));
        result.push(str('cashdrop_R7', 'Noted 1: When players win any Cash Drop prize, they can also click on the lucky items to get additional prize rewards.'));
        result.push(str('cashdrop_R8', 'Noted 2: Please make sure the internet is stable when participating in the event. If you disconnect when playing the mini-game, you will be directly settled with Cash Drop prize and the additional rewards obtained from the mini-game.'));
        result.push(str('cashdrop_R9', 'Noted 3: As mentioned note 2; incase you disconnected from the server during mysterious prize feature.'));
        result.push(str('cashdrop_R10', 'Situation 1: If you disconnect after clicking on the FALLING REWARDS and win 3 mysterious prizes, you will get the main prize and 3 mysterious prizes for settlement.'));
        result.push(str('cashdrop_R11', 'Situation 2: If you disconnect before you are able to click on any FALLING REWARDS, you will only get the main prize reward for settlement.'));
        return result;
    });
    daysLabel = this.appI18n.computed('DAYS', 'DAYS');
    hoursLabel = this.appI18n.computed('HRS', 'HRS');
    minutesLabel = this.appI18n.computed('MINS', 'MINS');
    secondsLabel = this.appI18n.computed('SECS', 'SECS');
    /** 載入 cash drop id 對應的頁面資料 */
    async getPageData(id) {
        if (this.pageDataMap[id]) {
            return this.pageDataMap[id];
        }
        const ruleDataRequest = {
            campaign_id: id,
            currency: this.user.currency(),
            language: this.login.language,
        };
        const prizeListRequest = {
            campaign_id: id,
            currency: this.user.currency(),
        };
        const winnerListRequest = {
            campaign_id: id,
            currency: this.user.currency(),
            page: 1,
            row_count: 100,
        };
        const [prizeList, ruleData, latestWinner, biggestWinner, mostWinner, youWin,] = await Promise.all([
            this.api.getCashDropResult('PrizeList', prizeListRequest),
            this.api.getCashDropResult('RuleData', ruleDataRequest),
            this.api.getCashDropResult('LatestWinnerList', winnerListRequest),
            this.api.getCashDropResult('BiggestWinnerList', winnerListRequest),
            this.api.getCashDropResult('MostWinnerList', winnerListRequest),
            this.api.getCashDropResult('YouWinList', winnerListRequest),
        ]);
        this.pageDataMap[id] = formatCashDropData({
            prizeList,
            ruleData,
            latestWinner,
            biggestWinner,
            mostWinner,
            youWin,
        });
        return this.pageDataMap[id];
    }
    // 更新頁面資料
    async updatePage(id) {
        const page = await this.getPageData(id);
        this.prizes.set(page.prizes);
        this.latestWinners.set(page.latestWinners);
        this.biggestWinners.set(page.biggestWinners);
        this.youWins.set(page.youWins);
        this.ruleData.set(page.ruleData);
    }
    ngOnInit() {
        this.updatePage(this.cashDrop.cashDrops()[0]?.id);
    }
    // 選擇 Tab
    selectTab(buttonType) {
        this.selectedTab.set(buttonType);
    }
    nextTable = {
        LatestWinner: 'BiggestWinner',
        BiggestWinner: 'YouWin',
        YouWin: 'LatestWinner',
    };
    // 切換到下一個 Table
    setNextTable() {
        this.selectedTable.set(this.nextTable[this.selectedTable()]);
    }
    prevTable = {
        LatestWinner: 'YouWin',
        BiggestWinner: 'LatestWinner',
        YouWin: 'BiggestWinner',
    };
    // 切換到上一個 Table
    setPrevTable() {
        this.selectedTable.set(this.prevTable[this.selectedTable()]);
    }
    selectedTableContent = computed(() => {
        const tableMap = {
            LatestWinner: this.latestWinners(),
            BiggestWinner: this.biggestWinners(),
            YouWin: this.youWins(),
        };
        return tableMap[this.selectedTable()];
    });
    closeShowDailyReward() {
        this.showDailyReward.set(false);
    }
    static ɵfac = function EventCashdropComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventCashdropComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventCashdropComponent, selectors: [["event-cashdrop"]], decls: 13, vars: 4, consts: [[1, "relative", "flex", "flex-col", "bg-zinc-900", "justify-center", "h-full"], [1, "sticky", "z-sticky", "top-0", "bg-zinc-900", "px-4", "pt-6", "pb-4", "shrink-0"], [3, "tabChange", "tabs", "selectedTab"], [1, "flex-1", "flex", "justify-center", "overflow-auto"], [1, "w-2xl", "animate-fade", "animate-ease-in-out", "animate-delay-[2ms]"], [1, "w-2xl", "tab-content", "px-4", "pb-4"], [1, "h-40", "w-full", "bg-zinc-900", "border-t", "border-zinc-700", "p-4", "overflow-x-auto", "overflow-y-hidden"], [1, "inline-flex", "justify-center", "gap-4"], [3, "daysLabel", "hoursLabel", "minutesLabel", "secondsLabel", "title", "remainingLabel", "endTime"], [1, "fixed", "inset-0", "z-50", 3, "header", "image", "showTitle", "showStars", "showDivider", "starCount", "showCountdown", "daysLabel", "hrsLabel", "minsLabel", "secsLabel", "remainingLabel", "showLists", "title", "listItems", "button"], [1, "sticky", "top-0", "bg-zinc-900", "py-2", "px-4"], [1, "cursor-pointer", "select-none", 3, "variant", "leftLabel", "rightLabel"], [1, "px-4", "pb-4"], [3, "variant", "leftValue", "rightValue", "bgShade"], [1, "sticky", "z-sticky", "top-0", "bg-zinc-900", "py-2", "px-4"], [1, "flex", "justify-center", "items-center", "space-x-2", "mb-2", "px-2"], [3, "click", "variant", "accentColor", "size", "icon"], [1, "flex-1", "text-lg", "text-center"], ["variant", "list", 1, "animate-fade-down", 3, "leftValue", "rightValue", "bgShade"], [1, "bg-zinc-900", "text-zinc-300"], [1, "space-y-2", "text-base", "leading-relaxed"], [1, "text-zinc-300"], [3, "click", "daysLabel", "hoursLabel", "minutesLabel", "secondsLabel", "title", "remainingLabel", "endTime"], [1, "fixed", "inset-0", "z-50", 3, "close", "header", "image", "showTitle", "showStars", "showDivider", "starCount", "showCountdown", "daysLabel", "hrsLabel", "minsLabel", "secsLabel", "remainingLabel", "showLists", "title", "listItems", "button"]], template: function EventCashdropComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "ap-ui-tab-group", 2);
            i0.ɵɵlistener("tabChange", function EventCashdropComponent_Template_ap_ui_tab_group_tabChange_2_listener($event) { return ctx.selectTab($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵconditionalCreate(4, EventCashdropComponent_Conditional_4_Template, 6, 3, "div", 4)(5, EventCashdropComponent_Conditional_5_Template, 11, 12, "div", 4)(6, EventCashdropComponent_Conditional_6_Template, 5, 0, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6)(8, "div")(9, "div", 7);
            i0.ɵɵrepeaterCreate(10, EventCashdropComponent_For_11_Template, 1, 7, "ap-cashdrop-card-countdown", 8, _forTrack0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(12, EventCashdropComponent_Conditional_12_Template, 1, 16, "ap-popup", 9);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("tabs", ctx.tabs())("selectedTab", ctx.selectedTab());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.selectedTab() === "PRIZES" ? 4 : ctx.selectedTab() === "WINNERS" ? 5 : ctx.selectedTab() === "RULES" ? 6 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.cashDrop.cashDropsByEndTime());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showDailyReward() ? 12 : -1);
        } }, dependencies: [CommonModule, i1.DecimalPipe, ApCashDropListComponent, ApCashdropCardCountdownComponent, ApButtonComponent, ApUiTabGroupComponent, ApPopupComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventCashdropComponent, [{
        type: Component,
        args: [{ selector: 'event-cashdrop', imports: [CommonModule, ApCashDropListComponent, ApCashdropCardCountdownComponent, ApButtonComponent, ApUiTabGroupComponent, ApPopupComponent,], template: "<div class=\"relative flex flex-col bg-zinc-900 justify-center h-full\">\n  <!-- Section 1: Tab Buttons -->\n  <div class=\"sticky z-sticky top-0 bg-zinc-900 px-4 pt-6 pb-4 shrink-0\">\n    <ap-ui-tab-group\n      [tabs]=\"tabs()\"\n      [selectedTab]=\"selectedTab()\"\n      (tabChange)=\"selectTab($event)\"\n    />\n  </div>\n\n  <!-- Section 2: Content Area (Scrollable) -->\n  <div class=\"flex-1 flex justify-center overflow-auto\">\n    @if (selectedTab() === \"PRIZES\") {\n      <div class=\"w-2xl animate-fade animate-ease-in-out animate-delay-[2ms]\">\n        <!-- Prizes Tab Content -->\n        <div class=\"sticky top-0 bg-zinc-900 py-2 px-4\">\n          <ap-cashdrop-list\n            [variant]=\"'header'\"\n            [leftLabel]=\"prizeHeaderLeftLabel()\"\n            [rightLabel]=\"prizeHeaderRightLabel()\"\n            class=\"cursor-pointer select-none\"\n          />\n        </div>\n\n        <div class=\"px-4 pb-4\">\n          <!-- Prize List -->\n          @for (p of prizes(); track p.index) {\n            <ap-cashdrop-list\n              [variant]=\"'list'\"\n              [leftValue]=\"`${user.currencySymbol()} ${(p.prize | number)}`\"\n              [rightValue]=\"`${p.left}`\"\n              [bgShade]=\"$index % 2 === 0 ? '800' : '900'\"\n            />\n          }\n        </div>\n      </div>\n    } @else if (selectedTab() === \"WINNERS\") {\n      <div class=\"w-2xl animate-fade animate-ease-in-out animate-delay-[2ms]\">\n        <!-- Winners Tab Content -->\n        <!-- Sticky Prize Header -->\n        <div class=\"sticky z-sticky top-0 bg-zinc-900 py-2 px-4\">\n          <div class=\"flex justify-center items-center space-x-2 mb-2 px-2\">\n            <ap-button\n              [variant]=\"'rounded-outlined'\"\n              [accentColor]=\"'zinc'\"\n              [size]=\"'small'\"\n              [icon]=\"'chevron-left'\"\n              (click)=\"setPrevTable()\"\n            />\n            <div class=\"flex-1 text-lg text-center\">\n              {{ selectedTableTitle() }}\n            </div>\n            <ap-button\n              [variant]=\"'rounded-outlined'\"\n              [accentColor]=\"'zinc'\"\n              [size]=\"'small'\"\n              [icon]=\"'chevron-right'\"\n              (click)=\"setNextTable()\"\n            />\n          </div>\n          <ap-cashdrop-list\n            [variant]=\"'header'\"\n            [leftLabel]=\"winnerHeaderLeftLabel()\"\n            [rightLabel]=\"winnerHeaderRightLabel()\"\n            class=\"cursor-pointer select-none\"\n          />\n        </div>\n\n        <div class=\"px-4 pb-4\">\n          <!-- Prize List -->\n          @for (p of selectedTableContent(); track p.index) {\n            <ap-cashdrop-list\n              variant=\"list\"\n              leftValue=\"{{ p.player }}\"\n              rightValue=\"{{\n                `${user.currencySymbol()} ${(p.prize | number)}`\n              }}\"\n              [bgShade]=\"$index % 2 === 0 ? '800' : '900'\"\n              class=\"animate-fade-down\"\n            />\n          }\n        </div>\n      </div>\n    } @else if (selectedTab() === \"RULES\") {\n      <div class=\"w-2xl tab-content px-4 pb-4\">\n        <!-- Rules Tab Content -->\n        <div class=\"bg-zinc-900 text-zinc-300\">\n          <div class=\"space-y-2 text-base leading-relaxed\">\n            @for (rule of rulesContent(); track $index) {\n              @if (rule === \"\") {\n              } @else {\n                <p class=\"text-zinc-300\">{{ rule }}</p>\n              }\n            }\n          </div>\n        </div>\n      </div>\n    }\n  </div>\n\n  <!-- Section 3: Event Cards (Sticky Bottom) -->\n  <div\n    class=\"h-40 w-full bg-zinc-900 border-t border-zinc-700 p-4 overflow-x-auto overflow-y-hidden\"\n  >\n    <div>\n      <div class=\"inline-flex justify-center gap-4\">\n        @for (item of cashDrop.cashDropsByEndTime(); track item.id) {\n          <ap-cashdrop-card-countdown\n            [daysLabel]=\"daysLabel()\"\n            [hoursLabel]=\"hoursLabel()\"\n            [minutesLabel]=\"minutesLabel()\"\n            [secondsLabel]=\"secondsLabel()\"\n            [title]=\"item.name || dailyRewardsTitle()\"\n            [remainingLabel]=\"remainingLabel()\"\n            [endTime]=\"item.endtime\"\n            (click)=\"updatePage(item.id)\"\n          />\n        }\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- \u66AB\u6642\u793A\u610F -->\n@if (showDailyReward()) {\n  <ap-popup\n    class=\"fixed inset-0 z-50\"\n    [header]=\"popupHeader()\"\n    [image]=\"'assets/images/eventcenter/coin.png'\"\n    [showTitle]=\"true\"\n    [showStars]=\"true\"\n    [showDivider]=\"true\"\n    [starCount]=\"5\"\n    [showCountdown]=\"true\"\n    [daysLabel]=\"popupDaysLabel()\"\n    [hrsLabel]=\"popupHoursLabel()\"\n    [minsLabel]=\"popupMinutesLabel()\"\n    [secsLabel]=\"popupSecondsLabel()\"\n    [remainingLabel]=\"remainingLabel()\"\n    [showLists]=\"true\"\n    [title]=\"popupTitle()\"\n    [listItems]=\"popupListItems()\"\n    [button]=\"popupButton()\"\n    (close)=\"closeShowDailyReward()\"\n  />\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventCashdropComponent, { className: "EventCashdropComponent", filePath: "src/app/pages/event-cashdrop/event-cashdrop.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=event-cashdrop.component.js.map