import { Component, computed, effect, input, output, signal, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { ApTrnCardBonusComponent } from "../../components/ap-trn-card-bonus/ap-trn-card-bonus.component";
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { ApTrnCardTitleComponent } from "../../components/ap-trn-card-title/ap-trn-card-title.component";
import { ApTrnListGameComponent } from '../../components/ap-trn-list-game/ap-trn-list-game.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["quickContent"];
const _c1 = ["eventContent"];
const _c2 = (a0, a1) => ({ "border-yellow-300": a0, "border-purple-300": a1 });
const _c3 = (a0, a1, a2) => ({ "text-yellow-300 border-yellow-300": a0, "text-zinc-500 border-zinc-600": a1, "hover:bg-zinc-800 cursor-pointer": a2 });
const _c4 = (a0, a1, a2) => ({ "text-purple-300 border-purple-300": a0, "text-zinc-500 border-zinc-600": a1, "hover:bg-zinc-800 cursor-pointer": a2 });
const _forTrack0 = ($index, $item) => $item.id;
function TrnIdleComponent_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.getQuickTabText());
} }
function TrnIdleComponent_Conditional_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-trn-card-title", 23);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r2.getQuickTabText());
} }
function TrnIdleComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function TrnIdleComponent_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onClickTab("quick")); });
    i0.ɵɵconditionalCreate(1, TrnIdleComponent_Conditional_1_Conditional_1_Template, 2, 1, "span")(2, TrnIdleComponent_Conditional_1_Conditional_2_Template, 1, 1, "ap-trn-card-title", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("w-22", ctx_r2.showTabEvent())("w-44", !ctx_r2.showTabEvent())("px-4", !ctx_r2.showTabEvent());
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c3, ctx_r2.currentTab() === "quick", ctx_r2.currentTab() !== "quick", ctx_r2.showTabEvent()));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.showTabEvent() ? 1 : 2);
} }
function TrnIdleComponent_Conditional_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.getEventTabText());
} }
function TrnIdleComponent_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-trn-card-title", 24);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r2.getEventTabText());
} }
function TrnIdleComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function TrnIdleComponent_Conditional_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.onClickTab("event"); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵconditionalCreate(1, TrnIdleComponent_Conditional_2_Conditional_1_Template, 2, 1, "span")(2, TrnIdleComponent_Conditional_2_Conditional_2_Template, 1, 1, "ap-trn-card-title", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("w-22", ctx_r2.showTabQuick())("w-44", !ctx_r2.showTabQuick())("px-4", !ctx_r2.showTabQuick());
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c4, ctx_r2.currentTab() === "event", ctx_r2.currentTab() !== "event", ctx_r2.showTabQuick()));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.showTabQuick() ? 1 : 2);
} }
function TrnIdleComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4, " Required: ");
    i0.ɵɵelementStart(5, "span", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.insufficientBalance());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.requiredBalanceString());
} }
function TrnIdleComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1, " Please use Cash Wallet to join the event. ");
    i0.ɵɵelementEnd();
} }
function TrnIdleComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "ap-icon", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r2.trn.currencySymbol(), "", i0.ɵɵpipeBind2(4, 2, ctx_r2.selectedEventUserPoint(), "1.0-3"), " ");
} }
function TrnIdleComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4, " Required: ");
    i0.ɵɵelementStart(5, "span", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.insufficientBalance());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.requiredBalanceString());
} }
function TrnIdleComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1, " Please use Cash Wallet to join the event. ");
    i0.ɵɵelementEnd();
} }
function TrnIdleComponent_Conditional_32_For_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-list-game", 35);
    i0.ɵɵlistener("click", function TrnIdleComponent_Conditional_32_For_7_Template_ap_trn_list_game_click_0_listener() { const trn_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onEventClick(trn_r7)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const trn_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("hasParticipated", ctx_r2.hasJoinedEvent(trn_r7))("trnData", trn_r7);
} }
function TrnIdleComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵlistener("click", function TrnIdleComponent_Conditional_32_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 30)(4, "div", 31)(5, "div", 32);
    i0.ɵɵrepeaterCreate(6, TrnIdleComponent_Conditional_32_For_7_Template, 1, 8, "ap-trn-list-game", 33, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "ap-button", 34);
    i0.ɵɵlistener("click", function TrnIdleComponent_Conditional_32_Template_ap_button_click_8_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.showEventSelection.set(false); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c2, ctx_r2.currentTab() === "quick", ctx_r2.currentTab() === "event"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.header(), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r2.trnList());
} }
export class TrnIdleComponent {
    dontShowStorageKey = 'ap_storage_trn_game_confirm_dont_show';
    appI18n = inject(AppI18nService);
    trn = inject(TrnCtrlService);
    user = inject(UserProfileService);
    game = inject(GameIframeCtrlService);
    eventCenter = inject(EventCenterCtrlService);
    getQuickTabText = this.appI18n.computed('QuickRace_Tab', 'QUICK');
    getEventTabText = this.appI18n.computed('EventRace_Tab', 'EVENT');
    getEventDetailsButtonText = this.appI18n.computed('GameResult_DetailLink', 'Event details');
    betMultiplierTitle = this.appI18n.computed('BetBoost', 'BET');
    getJoinButtonText = this.appI18n.computed('Join_Btn', 'Join Event');
    getRejoinButtonText = this.appI18n.computed('Rejoin_Btn', 'REJOIN');
    getMatchButtonText = this.appI18n.computed('Match_Btn', 'Find Match');
    insufficientBalance = this.appI18n.computed('not_enough_bet', 'Insufficient Balance');
    /** 是否顯示快速競賽分頁 */
    showTabQuick = computed(() => this.trn.trnQuick() !== null);
    /** 是否顯示長期競賽分頁 */
    showTabEvent = computed(() => (this.trn.trnEventRunningList()?.length || 0) > 0);
    /** 起始的分頁 */
    selectedTab = input('quick');
    /** 是否已經開啟主畫面 */
    windowOpened = input(false);
    /** 目前選擇的分頁 */
    currentTab = signal('quick');
    /** 目前選擇的長期競賽 */
    selectedEvent = signal(null);
    /** 長期競賽的總獎金 */
    selectedEventTotalPrize = signal(null);
    /** 長期競賽玩家自己的分數/獎金 */
    selectedEventUserPoint = signal(null);
    /** 是否正在跟Server拿取總獎金 */
    isTotalPrizeLoading = signal(false);
    /** 長期競賽的投注倍數 */
    betMultiplierEvent = computed(() => this.selectedEvent()?.betMultiplier || null);
    /** 快速競賽的總獎金 */
    prizeAmountQuick = computed(() => this.trn.currentTier()?.totalPrize || null);
    /** 快速競賽的投注倍數 */
    betMultiplierQuick = computed(() => this.currentQuick()?.betMultiplier || null);
    /** 長期競賽是否已經加入過 */
    isSelectedEventJoined = computed(() => this.selectedEventUserPoint() !== null);
    /* Tab 切換後內容高度與寬度 */
    quickContent = viewChild('quickContent');
    eventContent = viewChild('eventContent');
    contentHeight = signal(undefined);
    /** Event 選擇視窗面板開關 */
    showEventSelection = signal(false);
    getDaysLabel = input('DAYS');
    getHoursLabel = input('HRS');
    getMinutesLabel = input('MINS');
    getSecondsLabel = input('SECS');
    getCountdownStartTitle = input('Start in');
    getCountdownEndTitle = input('End in');
    trnList = computed(() => this.trn.trnEventRunningList() || []);
    selectEvent = output({ alias: 'selectedEvent' });
    header = input('Event Selection');
    /** 長期競賽按鈕文字 */
    joinEventButtonText = computed(() => this.isSelectedEventJoined()
        ? this.getRejoinButtonText()
        : this.getJoinButtonText());
    /** 按鈕載入中狀態 */
    isButtonLoading = computed(() => this.trn.status() !== 'idle');
    /** 是否允許加入競賽 */
    isJoinDisabled = signal(false);
    /** 關閉長期競賽加入按鈕 */
    isJoinEventDisabled = computed(() => {
        return this.isJoinDisabled() || !this.selectedEvent() || this.isInsufficientBalance() || this.isPlayerUseCampaign();
    });
    /** 關閉快速競賽加入按鈕 */
    isJoinQuickDisabled = computed(() => {
        return this.isJoinDisabled() || !this.currentQuick() || this.isInsufficientBalance() || this.isPlayerUseCampaign();
    });
    /** 使用者點選分頁 */
    clickTab = output();
    /** 如果user.campaignSetting有設定表示使用者正在使用campaign */
    isPlayerUseCampaign = computed(() => {
        const setting = this.user.campaignSetting();
        return setting ? true : false;
    });
    destroy$ = new Subject();
    destroyed = false;
    openConfirm = output();
    currentQuick = computed(() => this.trn.trnQuick());
    /** 快速競賽餘額不足 */
    isInsufficientBalance = computed(() => {
        const min = this.trn.currentTier()?.minPlayerBalance || 0;
        return this.user.balance() < min;
    });
    /** 快速競賽所需餘額 */
    requiredBalanceString = computed(() => `${this.trn.currencySymbol()}${this.trn.currentTier()?.minPlayerBalance || 0}`);
    constructor() {
        effect(() => {
            const event = this.selectedEvent();
            if (event) {
                this.selectedEventTotalPrize.set(null);
                this.selectedEventUserPoint.set(null);
                this.isTotalPrizeLoading.set(true);
                this.trn.sendEventRanking(event.id);
            }
        });
        effect(() => {
            if (!this.windowOpened())
                this.showEventSelection.set(false);
        });
    }
    ngAfterViewInit() {
        this.updateContentHeight();
        // 如果只有一個長期競賽正在進行，預設選擇它
        if (this.trn.trnEventRunningList()?.length === 1) {
            this.selectedEvent.set(this.trn.trnEventRunningList()[0]);
        }
    }
    ngOnInit() {
        this.currentTab.set(this.selectedTab());
        try {
            const saved = JSON.parse(localStorage.getItem('ap_storage_trn_idle_state') ?? 'null');
            if (saved?.selectedEventId) {
                const event = this.trn.trnEventRunningList()?.find(e => e.id === saved.selectedEventId);
                if (event)
                    this.selectedEvent.set(event);
            }
        }
        catch {
            localStorage.removeItem('ap_storage_trn_idle_state');
        }
        this.game.startSpinning$.pipe(takeUntil(this.destroy$)).subscribe(() => this.isJoinDisabled.set(true));
        this.game.readyForSpin$.pipe(takeUntil(this.destroy$)).subscribe(() => this.isJoinDisabled.set(false));
        this.trn.eventRanking$.pipe(takeUntil(this.destroy$)).subscribe(this.onEventRanking.bind(this));
    }
    ngOnDestroy() {
        this.destroyed = true;
        localStorage.setItem('ap_storage_trn_idle_state', JSON.stringify({
            selectedEventId: this.selectedEvent()?.id ?? null,
        }));
        this.destroy$.next();
        this.destroy$.complete();
    }
    /** 快速競賽
    onFindMatch(): void {
      this.trn.sendJoinQuick();
    }*/
    onJoinQuick() {
        const quick = this.currentQuick();
        if (!quick)
            return;
        const now = Date.now();
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        const last = this.getDontShowAgainByEvent(quick.id);
        // 跳出不足的條件
        if (!last || now - last > oneWeek) {
            this.openConfirm.emit({ variant: 'quick', event: quick });
            return;
        }
        this.trn.sendJoinQuick();
    }
    /** 長期競賽 */
    onJoinEvent() {
        const event = this.selectedEvent();
        if (!event)
            return;
        const now = Date.now();
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        const last = this.getDontShowAgainByEvent(event.id);
        if (!last || now - last > oneWeek) {
            this.openConfirm.emit({ variant: 'event', event });
            return;
        }
        this.trn.openEventRace(event.id);
    }
    getDontShowAgainByEvent(eventId) {
        const raw = localStorage.getItem(this.dontShowStorageKey);
        if (!raw)
            return null;
        try {
            const parsed = JSON.parse(raw);
            return typeof parsed?.[eventId] === 'number' ? parsed[eventId] : null;
        }
        catch {
            return null;
        }
    }
    onEventRanking(data) {
        this.selectedEventTotalPrize.set(data.currentPool);
        this.selectedEventUserPoint.set(data.playersList.find(p => p.highlighted)?.win ?? null);
        this.isTotalPrizeLoading.set(false);
        this.updateContentHeight();
    }
    onClickEventDetails() {
        if (!this.selectedEvent())
            return;
        this.eventCenter.open(`tournament/${this.selectedEvent().id}`);
    }
    onClickQuickDetails() {
        if (!this.currentQuick())
            return;
        this.eventCenter.open(`tournament/${this.currentQuick().id}`);
    }
    onClickTab(tab) {
        this.currentTab.set(tab);
        this.clickTab.emit(tab);
        this.updateContentHeight();
        // 如果有多於一個長期競賽，顯示長期競賽選擇面板
        if ((this.trn.trnEventRunningList()?.length || 0) > 1)
            this.showEventSelection.set(tab === 'event');
    }
    // 內容高度更新，包含初始載入和切換分頁
    updateContentHeight() {
        Promise.resolve().then(() => {
            requestAnimationFrame(() => {
                if (this.destroyed)
                    return;
                let newHeight;
                if (this.currentTab() === 'quick') {
                    newHeight = this.quickContent()?.nativeElement.scrollHeight;
                }
                else {
                    newHeight = this.eventContent()?.nativeElement.scrollHeight;
                }
                this.contentHeight.set(newHeight);
            });
        });
    }
    hasJoinedEvent(trn) {
        return trn.raceData?.rank !== null || !!trn.raceData?.playersList?.some(player => player.highlighted);
    }
    onEventClick(trn) {
        this.selectedEvent.set(trn);
        this.selectEvent.emit(trn);
        this.onJoinEvent();
    }
    clickClose() {
        this.showEventSelection.set(false);
    }
    static ɵfac = function TrnIdleComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnIdleComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrnIdleComponent, selectors: [["trn-idle"]], viewQuery: function TrnIdleComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.quickContent, _c0, 5);
            i0.ɵɵviewQuerySignal(ctx.eventContent, _c1, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance(2);
        } }, inputs: { selectedTab: [1, "selectedTab"], windowOpened: [1, "windowOpened"], getDaysLabel: [1, "getDaysLabel"], getHoursLabel: [1, "getHoursLabel"], getMinutesLabel: [1, "getMinutesLabel"], getSecondsLabel: [1, "getSecondsLabel"], getCountdownStartTitle: [1, "getCountdownStartTitle"], getCountdownEndTitle: [1, "getCountdownEndTitle"], header: [1, "header"] }, outputs: { selectEvent: "selectedEvent", clickTab: "clickTab", openConfirm: "openConfirm" }, decls: 33, vars: 39, consts: [["quickContent", ""], ["eventContent", ""], [1, "flex", "relative"], [1, "h-10", "font-anton", "font-bold", "text-2xl", "bg-black/80", "tracking-wide", "border-2", "border-b-0", "rounded-t-xl", "duration-200", 3, "ngClass", "w-22", "w-44", "px-4"], [1, "relative", "bg-black/80", "border-2", "rounded-b-lg", "cursor-pointer", "transition-all", "duration-400", "ease-in-out", "max-w-full", "w-44", 3, "ngClass"], [1, "relative", "inset-0"], [1, "absolute", "w-full", "pt-1", "pb-2", "flex", "flex-col", "items-center", "gap-1", "transition-opacity", "duration-300", 3, "click"], ["name", "trophy", 1, "size-14", "mt-2", "text-yellow-300", "cursor-pointer"], [1, "flex", "items-center", "text-zinc-300", "font-semibold", "tracking-wide", "-mb-3"], ["type", "button", 1, "appearance-none", "bg-transparent", "border-0", "p-0", "m-0", "cursor-pointer"], [1, "border-b", "border-zinc-300", "flex", "items-center", "gap-1"], ["name", "exclamation-circle default", 1, "size-4"], [1, "text-xs"], ["variant", "quick", 1, "mt-4", "cursor-pointer", 3, "currency", "amount", "multiplierTitle", "multiplier"], ["size", "small", "severity", "primary", "icon", "search", "accentColor", "yellow", 1, "w-[85%]", "mt-2", "mb-2", 3, "click", "clicked", "disabled", "loading", "label"], [1, "text-left", "text-sm", "font-semibold", "text-red-500", "animate-fade-down", "animate-duration-200"], [1, "relative", "w-full", "min-h-60", "pt-1", "pb-2", "flex", "flex-col", "items-center", "gap-1", "transition-opacity", "duration-300", 3, "click"], ["name", "gift", 1, "size-14", "mt-2", "text-purple-300", "cursor-pointer"], [1, "w-36", "flex", "items-center", "space-x-1", "bg-purple-950/50", "border-2", "border-purple-300", "rounded-md", "px-2", "py-1", "mt-4", "-mb-2"], ["variant", "event", 1, "mt-4", "cursor-pointer", 3, "isLoading", "currency", "amount", "multiplierTitle", "multiplier"], ["size", "small", "severity", "primary", "icon", "search", "accentColor", "purple", 1, "w-[85%]", "mt-2", "mb-2", 3, "clicked", "disabled", "loading", "label"], [1, "absolute", "top-12", "left-3", "w-screen", "sm:w-2xl", "text-zinc-300", "duration-300", "select-none", "h-[78vh]", "flex", "flex-col", "border-2", "rounded-lg", "z-overlay", 3, "ngClass"], [1, "h-10", "font-anton", "font-bold", "text-2xl", "bg-black/80", "tracking-wide", "border-2", "border-b-0", "rounded-t-xl", "duration-200", 3, "click", "ngClass"], ["variant", "quick", "size", "small", 3, "title"], ["variant", "event", "size", "small", 3, "title"], [1, "text-zinc-200"], ["name", "prizes", 1, "text-purple-300", "size-5"], [1, "font-semibold", "font-anton", "text-xl", "tracking-wider", "text-purple-100"], [1, "absolute", "top-12", "left-3", "w-screen", "sm:w-2xl", "text-zinc-300", "duration-300", "select-none", "h-[78vh]", "flex", "flex-col", "border-2", "rounded-lg", "z-overlay", 3, "click", "ngClass"], [1, "relative", "bg-zinc-900/70", "w-full", "text-center", "font-semibold", "h-16", "text-3xl", "sm:text-4xl", "pt-3", "pb-2", "shrink-0", "rounded-t-lg"], [1, "bg-zinc-800/70", "relative", "rounded-b-xl", "flex-1", "overflow-y-auto"], [1, "px-4", "py-4", "text-center", "select-none", "flex", "flex-col", "justify-center", "items-center"], [1, "relative", "w-full", "flex", "flex-col", "gap-4"], [3, "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "hasParticipated", "trnData"], ["variant", "rounded", "accentColor", "zinc", "icon", "x-mark", 1, "absolute", "top-2", "right-2", "opacity-50", "text-zinc-400", "hover:text-zinc-100", "cursor-pointer", "transition-colors", "duration-200", 3, "click"], [3, "click", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "hasParticipated", "trnData"]], template: function TrnIdleComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵconditionalCreate(1, TrnIdleComponent_Conditional_1_Template, 3, 12, "button", 3);
            i0.ɵɵconditionalCreate(2, TrnIdleComponent_Conditional_2_Template, 3, 12, "button", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 4)(4, "div", 5)(5, "div", 6, 0);
            i0.ɵɵlistener("click", function TrnIdleComponent_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onClickQuickDetails()); });
            i0.ɵɵelement(7, "ap-icon", 7);
            i0.ɵɵelementStart(8, "div", 8)(9, "button", 9)(10, "div", 10);
            i0.ɵɵelement(11, "ap-icon", 11);
            i0.ɵɵelementStart(12, "span", 12);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelement(14, "ap-trn-card-bonus", 13);
            i0.ɵɵelementStart(15, "ap-button", 14);
            i0.ɵɵlistener("click", function TrnIdleComponent_Template_ap_button_click_15_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.stopPropagation()); })("clicked", function TrnIdleComponent_Template_ap_button_clicked_15_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onJoinQuick()); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, TrnIdleComponent_Conditional_16_Template, 7, 2, "div", 15);
            i0.ɵɵconditionalCreate(17, TrnIdleComponent_Conditional_17_Template, 2, 0, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 16, 1);
            i0.ɵɵlistener("click", function TrnIdleComponent_Template_div_click_18_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onClickEventDetails()); });
            i0.ɵɵelement(20, "ap-icon", 17);
            i0.ɵɵelementStart(21, "div", 8)(22, "button", 9)(23, "div", 10);
            i0.ɵɵelement(24, "ap-icon", 11);
            i0.ɵɵelementStart(25, "span", 12);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(27, TrnIdleComponent_Conditional_27_Template, 5, 5, "div", 18);
            i0.ɵɵelement(28, "ap-trn-card-bonus", 19);
            i0.ɵɵelementStart(29, "ap-button", 20);
            i0.ɵɵlistener("clicked", function TrnIdleComponent_Template_ap_button_clicked_29_listener($event) { i0.ɵɵrestoreView(_r1); ctx.onJoinEvent(); return i0.ɵɵresetView($event.stopPropagation()); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(30, TrnIdleComponent_Conditional_30_Template, 7, 2, "div", 15);
            i0.ɵɵconditionalCreate(31, TrnIdleComponent_Conditional_31_Template, 2, 0, "div", 15);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(32, TrnIdleComponent_Conditional_32_Template, 9, 5, "div", 21);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showTabQuick() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showTabEvent() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.contentHeight(), "px");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(36, _c2, ctx.currentTab() === "quick", ctx.currentTab() === "event"));
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("opacity-0", ctx.currentTab() !== "quick")("invisible", ctx.currentTab() !== "quick");
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", ctx.getEventDetailsButtonText(), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("currency", ctx.trn.currencySymbol())("amount", ctx.prizeAmountQuick())("multiplierTitle", ctx.betMultiplierTitle())("multiplier", ctx.betMultiplierQuick());
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isJoinQuickDisabled())("loading", ctx.isButtonLoading())("label", ctx.getMatchButtonText());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isInsufficientBalance() ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isPlayerUseCampaign() ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("opacity-0", ctx.currentTab() !== "event")("invisible", ctx.currentTab() !== "event");
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", ctx.getEventDetailsButtonText(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.selectedEventUserPoint() !== null ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("isLoading", ctx.isTotalPrizeLoading())("currency", ctx.trn.currencySymbol())("amount", ctx.selectedEventTotalPrize())("multiplierTitle", ctx.betMultiplierTitle())("multiplier", ctx.betMultiplierEvent());
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isJoinEventDisabled())("loading", ctx.isButtonLoading())("label", ctx.joinEventButtonText());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isInsufficientBalance() ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isPlayerUseCampaign() ? 31 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showEventSelection() ? 32 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, i1.DecimalPipe, ApTrnCardTitleComponent, ApIconComponent, ApTrnCardBonusComponent, ApButtonComponent, ApTrnListGameComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnIdleComponent, [{
        type: Component,
        args: [{ selector: 'trn-idle', imports: [CommonModule, ApTrnCardTitleComponent, ApIconComponent, ApTrnCardBonusComponent, ApButtonComponent, ApTrnListGameComponent], template: "<!-- Tab Buttons -->\n<div class=\"flex relative\">\n  <!-- Quick -->\n  @if (showTabQuick()) {\n    <button\n      (click)=\"onClickTab('quick')\"\n      class=\"h-10 font-anton font-bold text-2xl bg-black/80 tracking-wide border-2 border-b-0 rounded-t-xl duration-200\"\n      [ngClass]=\"{\n        'text-yellow-300 border-yellow-300': currentTab() === 'quick',\n        'text-zinc-500 border-zinc-600': currentTab() !== 'quick',\n        'hover:bg-zinc-800 cursor-pointer': showTabEvent()\n      }\"\n      [class.w-22]=\"showTabEvent()\"\n      [class.w-44]=\"!showTabEvent()\"\n      [class.px-4]=\"!showTabEvent()\"\n    >\n      @if (showTabEvent()) {\n        <span>{{ getQuickTabText() }}</span>\n      } @else {\n        <ap-trn-card-title variant=\"quick\" [title]=\"getQuickTabText()\" size=\"small\" />\n      }\n    </button>\n  }\n\n  <!-- Event -->\n  @if (showTabEvent()) {\n    <button\n      (click)=\"onClickTab('event');  $event.stopPropagation()\"\n      class=\"h-10 font-anton font-bold text-2xl bg-black/80 tracking-wide border-2 border-b-0 rounded-t-xl duration-200\"\n      [ngClass]=\"{\n        'text-purple-300 border-purple-300': currentTab() === 'event',\n        'text-zinc-500 border-zinc-600': currentTab() !== 'event',\n        'hover:bg-zinc-800 cursor-pointer': showTabQuick()\n      }\"\n      [class.w-22]=\"showTabQuick()\"\n      [class.w-44]=\"!showTabQuick()\"\n      [class.px-4]=\"!showTabQuick()\"\n    >\n      @if (showTabQuick()) {\n        <span>{{ getEventTabText() }}</span>\n      } @else {\n        <ap-trn-card-title variant=\"event\" [title]=\"getEventTabText()\" size=\"small\" />\n      }\n    </button>\n  }\n</div>\n\n<div\n  class=\"relative bg-black/80 border-2 rounded-b-lg cursor-pointer transition-all duration-400 ease-in-out max-w-full w-44\"\n  [ngClass]=\"{\n    'border-yellow-300': currentTab() === 'quick',\n    'border-purple-300': currentTab() === 'event'\n  }\"\n  [style.height.px]=\"contentHeight()\"\n>\n  <div class=\"relative inset-0\">\n\n    <!-- QUICK -->\n    <div\n      #quickContent\n      class=\"absolute w-full pt-1 pb-2 flex flex-col items-center gap-1 transition-opacity duration-300\"\n      [class.opacity-0]=\"currentTab() !== 'quick'\"\n      [class.invisible]=\"currentTab() !== 'quick'\"\n      (click)=\"onClickQuickDetails()\"\n    >\n      <!-- Quick Icon -->\n      <ap-icon\n        name=\"trophy\"\n        class=\"size-14 mt-2 text-yellow-300 cursor-pointer\"\n      />\n\n      <!-- Details -->\n      <div class=\"flex items-center text-zinc-300 font-semibold tracking-wide -mb-3\">\n        <button\n          type=\"button\"\n          class=\"appearance-none bg-transparent border-0 p-0 m-0 cursor-pointer\"\n        >\n          <div class=\"border-b border-zinc-300 flex items-center gap-1\">\n            <ap-icon name=\"exclamation-circle default\" class=\"size-4\" />\n            <span class=\"text-xs\">\n              {{ getEventDetailsButtonText() }}\n            </span>\n          </div>\n        </button>\n      </div>\n\n      <!-- Bonus -->\n      <ap-trn-card-bonus\n        class=\"mt-4 cursor-pointer\"\n        [currency]=\"trn.currencySymbol()\"\n        [amount]=\"prizeAmountQuick()\"\n        variant=\"quick\"\n        [multiplierTitle]=\"betMultiplierTitle()\"\n        [multiplier]=\"betMultiplierQuick()\"\n      />\n\n      <!-- Match -->\n      <ap-button\n        class=\"w-[85%] mt-2 mb-2\"\n        size=\"small\"\n        severity=\"primary\"\n        icon=\"search\"\n        accentColor=\"yellow\"\n        [disabled]=\"isJoinQuickDisabled()\"\n        [loading]=\"isButtonLoading()\"\n        [label]=\"getMatchButtonText()\"\n        (click)=\"$event.stopPropagation()\"\n        (clicked)=\"onJoinQuick()\"\n      />\n\n      <!-- Insufficient -->\n      @if (isInsufficientBalance()) {\n        <div class=\"text-left text-sm font-semibold text-red-500 animate-fade-down animate-duration-200\">\n          <div>{{ insufficientBalance() }}</div>\n          <div>\n            Required:\n            <span class=\"text-zinc-200\">{{ requiredBalanceString() }}</span>\n          </div>\n        </div>\n      }\n      @if (isPlayerUseCampaign()) {\n        <div class=\"text-left text-sm font-semibold text-red-500 animate-fade-down animate-duration-200\">\n          Please use Cash Wallet to join the event.\n        </div>\n       }\n    </div>\n\n    <!-- EVENT -->\n    <div\n      #eventContent\n      class=\"relative w-full min-h-60 pt-1 pb-2 flex flex-col items-center gap-1 transition-opacity duration-300\" \n      [class.opacity-0]=\"currentTab() !== 'event'\"\n      [class.invisible]=\"currentTab() !== 'event'\"\n      (click)=\"onClickEventDetails()\"\n    >\n      <!-- Icon -->\n      <ap-icon\n        name=\"gift\"\n        class=\"size-14 mt-2 text-purple-300 cursor-pointer\"\n      />\n\n      <!-- Details -->\n      <div class=\"flex items-center text-zinc-300 font-semibold tracking-wide -mb-3\">\n        <button\n          type=\"button\"\n          class=\"appearance-none bg-transparent border-0 p-0 m-0 cursor-pointer\"\n        >\n          <div class=\"border-b border-zinc-300 flex items-center gap-1\">\n            <ap-icon name=\"exclamation-circle default\" class=\"size-4\" />\n            <span class=\"text-xs\">\n              {{ getEventDetailsButtonText() }}\n            </span>\n          </div>\n        </button>\n      </div>\n\n      <!-- User Point -->\n      @if (selectedEventUserPoint() !== null) {\n        <div\n          class=\"w-36 flex items-center space-x-1 bg-purple-950/50 border-2 border-purple-300 rounded-md px-2 py-1 mt-4 -mb-2\"\n        >\n          <ap-icon name=\"prizes\" class=\"text-purple-300 size-5\" />\n          <div class=\"font-semibold font-anton text-xl tracking-wider text-purple-100\">\n            {{ trn.currencySymbol() }}{{ selectedEventUserPoint()! | number: '1.0-3' }}\n          </div>\n        </div>\n      }\n\n      <!-- Bonus -->\n      <ap-trn-card-bonus\n        class=\"mt-4 cursor-pointer\"\n        [isLoading]=\"isTotalPrizeLoading()\"\n        [currency]=\"trn.currencySymbol()\"\n        [amount]=\"selectedEventTotalPrize()\"\n        variant=\"event\"\n        [multiplierTitle]=\"betMultiplierTitle()\"\n        [multiplier]=\"betMultiplierEvent()\"\n      />\n\n      <!-- Join -->\n      <ap-button\n        class=\"w-[85%] mt-2 mb-2\"\n        size=\"small\"\n        severity=\"primary\"\n        icon=\"search\"\n        accentColor=\"purple\"\n        [disabled]=\"isJoinEventDisabled()\"\n        [loading]=\"isButtonLoading()\"\n        [label]=\"joinEventButtonText()\"\n        (clicked)=\"onJoinEvent(); $event.stopPropagation()\"\n      />\n\n      <!-- Insufficient -->\n      @if (isInsufficientBalance()) {\n        <div class=\"text-left text-sm font-semibold text-red-500 animate-fade-down animate-duration-200\">\n          <div>{{ insufficientBalance() }}</div>\n          <div>\n            Required:\n            <span class=\"text-zinc-200\">{{ requiredBalanceString() }}</span>\n          </div>\n        </div>\n      }\n      @if (isPlayerUseCampaign()) {\n        <div class=\"text-left text-sm font-semibold text-red-500 animate-fade-down animate-duration-200\">\n          Please use Cash Wallet to join the event.\n        </div>\n      }\n    </div>\n\n  </div>\n</div>\n\n@if (showEventSelection() ) {\n  <div class=\"absolute top-12 left-3 w-screen sm:w-2xl text-zinc-300 duration-300 select-none h-[78vh] flex flex-col border-2 rounded-lg z-overlay\" \n    (click)=\"$event.stopPropagation()\"\n    [ngClass]=\"{\n      'border-yellow-300': currentTab() === 'quick',\n      'border-purple-300': currentTab() === 'event'\n    }\"\n  >\n    <div class=\"relative bg-zinc-900/70 w-full text-center font-semibold h-16 text-3xl sm:text-4xl pt-3 pb-2 shrink-0 rounded-t-lg\">\n      {{ header() }}\n    </div>\n    <div class=\"bg-zinc-800/70 relative rounded-b-xl flex-1 overflow-y-auto \">\n      <div class=\"px-4 py-4 text-center select-none flex flex-col justify-center items-center\">\n        <div class=\"relative w-full flex flex-col gap-4\">\n          @for (trn of trnList(); track trn.id) {\n            <ap-trn-list-game\n              [getCountdownStartTitle]=\"getCountdownStartTitle()\"\n              [getCountdownEndTitle]=\"getCountdownEndTitle()\"\n              [getDaysLabel]=\"getDaysLabel()\"\n              [getHoursLabel]=\"getHoursLabel()\"\n              [getMinutesLabel]=\"getMinutesLabel()\"\n              [getSecondsLabel]=\"getSecondsLabel()\"\n              [hasParticipated]=\"hasJoinedEvent(trn)\"\n              [trnData]=\"trn\"\n              (click)=\"onEventClick(trn);\"\n            />\n          }\n        </div>\n      </div>\n    </div>\n    <ap-button\n      class=\"absolute top-2 right-2 opacity-50 text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors duration-200\"\n      variant=\"rounded\" accentColor=\"zinc\" icon=\"x-mark\"\n      (click)=\"showEventSelection.set(false); $event.stopPropagation()\"\n    />\n    \n  </div>\n}\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrnIdleComponent, { className: "TrnIdleComponent", filePath: "src/app/pages/trn-idle/trn-idle.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=trn-idle.component.js.map