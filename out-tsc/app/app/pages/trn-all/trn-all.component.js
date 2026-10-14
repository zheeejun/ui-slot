import { Component, computed, effect, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ApTrnFloatButtonComponent } from '../../components/ap-trn-float-button/ap-trn-float-button.component';
import { ApTrnGameStartingComponent } from '../../components/ap-trn-game-starting/ap-trn-game-starting.component';
import { TrnGameConfirmComponent } from '../trn-game-confirm/trn-game-confirm.component';
import { ApTrnStatusBarComponent } from '../../components/ap-trn-status-bar/ap-trn-status-bar.component';
import { ApTrnGameResultComponent } from '../../components/ap-trn-game-result/ap-trn-game-result.component';
import { ApTrnEventSelectionComponent } from '../../components/ap-trn-event-selection/ap-trn-event-selection.component';
import { defaultPlayersList } from '../../components/ap-trn-list-row/ap-trn-list-row.interface';
import { ApTrnGameMatchFinished } from '../../components/ap-trn-game-match-finished/ap-trn-game-match-finished.component';
import { TrnCreatedNotificationComponent } from '../trn-created-notification/trn-created-notification.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { TrnIdleComponent } from "../trn-idle/trn-idle.component";
import { TrnMatchingComponent } from "../trn-matching/trn-matching.component";
import { TrnPlayingQuickComponent } from "../trn-playing-quick/trn-playing-quick.component";
import { TrnPlayingEventComponent } from "../trn-playing-event/trn-playing-event.component";
import { firstValueFrom, timer } from 'rxjs';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { TrnGameEventLeaveConfirmComponent } from '../trn-game-event-leave-confirm/trn-game-event-leave-confirm.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-profile/user-profile.service";
import * as i2 from "../../services/trn-ctrl/trn-ctrl.service";
import * as i3 from "../../services/app-interface/app-interface.service";
import * as i4 from "@angular/common";
const _c0 = a0 => ({ "-ml-56": a0 });
const _c1 = a0 => ({ "-ml-28": a0 });
const _c2 = () => [];
function TrnAllComponent_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "trn-idle", 13);
    i0.ɵɵlistener("clickTab", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_clickTab_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onClickTab($event)); })("clickOpenList", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_clickOpenList_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onOpenEventPopup()); })("openConfirm", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_openConfirm_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.confirmVariant.set($event.variant); ctx_r2.selectedEventTrn.set($event.event); return i0.ɵɵresetView(ctx_r2.showConfirmPopup.set(true)); })("onClose", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_onClose_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.showEventPopup.set(false)); })("selectedEvent", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_selectedEvent_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onEventPopupSelected($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("windowOpened", ctx_r2.showWindow())("selectedTab", ctx_r2.themeType())("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("header", ctx_r2.getPopupHeader());
} }
function TrnAllComponent_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "trn-matching");
} }
function TrnAllComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "trn-playing-quick");
} }
function TrnAllComponent_Conditional_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "trn-playing-event", 14);
    i0.ɵɵlistener("exitLeave", function TrnAllComponent_Conditional_0_Conditional_4_Template_trn_playing_event_exitLeave_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.showExitPopup.set(true)); })("matchTimeout", function TrnAllComponent_Conditional_0_Conditional_4_Template_trn_playing_event_matchTimeout_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onEventMatchTimeout()); });
    i0.ɵɵelementEnd();
} }
function TrnAllComponent_Conditional_0_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "ap-icon", 15);
    i0.ɵɵelementStart(2, "div", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.progressLabel());
} }
function TrnAllComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵconditionalCreate(1, TrnAllComponent_Conditional_0_Conditional_1_Template, 1, 9, "trn-idle", 9);
    i0.ɵɵconditionalCreate(2, TrnAllComponent_Conditional_0_Conditional_2_Template, 1, 0, "trn-matching");
    i0.ɵɵconditionalCreate(3, TrnAllComponent_Conditional_0_Conditional_3_Template, 1, 0, "trn-playing-quick");
    i0.ɵɵconditionalCreate(4, TrnAllComponent_Conditional_0_Conditional_4_Template, 1, 0, "trn-playing-event");
    i0.ɵɵconditionalCreate(5, TrnAllComponent_Conditional_0_Conditional_5_Template, 4, 1, "div", 10);
    i0.ɵɵelementStart(6, "ap-button", 11);
    i0.ɵɵlistener("click", function TrnAllComponent_Conditional_0_Template_ap_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showWindow.set(false)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "ap-trn-float-button", 12);
    i0.ɵɵlistener("click", function TrnAllComponent_Conditional_0_Template_ap_trn_float_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showWindow.set(true)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0, !ctx_r2.showWindow()));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.currentPage() === "idle" ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.currentPage() === "matching" ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.currentPage() === "playing-quick" ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.currentPage() === "playing-event" ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.showWaitingResult() ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("severity", "contrast")("accentColor", ctx_r2.themeType() === "quick" ? "yellow" : "purple")("icon", "chevron-left default");
    i0.ɵɵadvance();
    i0.ɵɵproperty("rank", ctx_r2.userRank())("ngClass", i0.ɵɵpureFunction1(15, _c1, ctx_r2.showWindow()))("isPlaying", ctx_r2.isPlaying())("variant", ctx_r2.themeType());
} }
function TrnAllComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-event-selection", 17);
    i0.ɵɵlistener("onClose", function TrnAllComponent_Conditional_1_Template_ap_trn_event_selection_onClose_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showEventPopup.set(false)); })("selectedEvent", function TrnAllComponent_Conditional_1_Template_ap_trn_event_selection_selectedEvent_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onEventPopupSelected($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("header", ctx_r2.getPopupHeader())("trnList", ctx_r2.trn.trnEventRunningList() || i0.ɵɵpureFunction0(8, _c2));
} }
function TrnAllComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-game-starting", 18);
    i0.ɵɵlistener("close", function TrnAllComponent_Conditional_2_Template_ap_trn_game_starting_close_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showGameStarting.set(false)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("message", ctx_r2.getGameStarting())("variant", ctx_r2.themeType());
} }
function TrnAllComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "trn-game-confirm", 19);
    i0.ɵɵlistener("close", function TrnAllComponent_Conditional_4_Template_trn_game_confirm_close_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showConfirmPopup.set(false)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("variant", ctx_r2.confirmVariant())("header", ctx_r2.getConfirmHeader())("selectedEvent", ctx_r2.confirmVariant() === "event" ? ctx_r2.selectedEventTrn() : ctx_r2.trn.trnQuick());
} }
function TrnAllComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-game-match-finished", 20);
    i0.ɵɵlistener("onClose", function TrnAllComponent_Conditional_5_Template_ap_trn_game_match_finished_onClose_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onCloseMatchFinished()); })("onConfirm", function TrnAllComponent_Conditional_5_Template_ap_trn_game_match_finished_onConfirm_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onCloseMatchFinished()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("variant", ctx_r2.themeType())("header", ctx_r2.getHeaderFinished())("getQuickTitle", ctx_r2.getQuickTitle())("getEventTitle", ctx_r2.getEventTitle())("getConfirmButtonText", ctx_r2.getConfirmButtonText());
} }
function TrnAllComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-game-result", 21);
    i0.ɵɵlistener("clickClose", function TrnAllComponent_Conditional_6_Template_ap_trn_game_result_clickClose_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showGameResult.set(false)); })("clickConfirm", function TrnAllComponent_Conditional_6_Template_ap_trn_game_result_clickConfirm_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onClickResultConfirm(ctx_r2.resultNotificationId())); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("getEventTitle", ctx_r2.getEventTitle())("getQuickTitle", ctx_r2.getQuickTitle())("header", ctx_r2.getPopupResultHeader())("getPrizeLabel", ctx_r2.getPrizeLabel())("getButtonLabel", ctx_r2.getButtonLabel())("getEventDetailsButtonText", ctx_r2.getEventDetailsButtonText())("currency", ctx_r2.trn.currencySymbol())("variant", ctx_r2.resultTheme())("playList", ctx_r2.resultListPart())("rank", ctx_r2.resultRank())("prize", ctx_r2.resultPrize() || 0);
} }
function TrnAllComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "trn-game-event-leave-confirm", 22);
    i0.ɵɵlistener("close", function TrnAllComponent_Conditional_7_Template_trn_game_event_leave_confirm_close_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showExitPopup.set(false)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectedEvent", ctx_r2.trn.betDataTrn());
} }
export class TrnAllComponent {
    user;
    trn;
    api;
    appI18n = inject(AppI18nService);
    getGameStarting = this.appI18n.computed('GameStart_Banner', 'Game Start!');
    getStatusModeBar = this.appI18n.computed('BetOn_Header', 'Quick Race Mode');
    getConfirmHeader = this.appI18n.computed('JoinMessage_Title', 'Message');
    getPopupHeader = this.appI18n.computed('Tournament_EventCenter_Tab', 'Event Selection');
    getCountdownStartTitle = this.appI18n.computed('StartIn_Tip', 'Start in');
    getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in');
    getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
    getHoursLabel = this.appI18n.computed('HRS', 'HRS');
    getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
    getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
    getPopupResultHeader = this.appI18n.computed('GameResult_Title', 'Game Result');
    getEventDetailsButtonText = this.appI18n.computed('GameResult_DetailLink', 'Event details');
    getPrizeLabel = this.appI18n.computed('Prizes_EventDetailTab', 'Prize');
    getButtonLabel = this.appI18n.computed('OK_Btn', 'Confirm');
    getQuickTitle = this.appI18n.computed('QuickRace_Tab', 'QUICK');
    getEventTitle = this.appI18n.computed('EventRace_Tab', 'EVENT');
    getConfirmButtonText = this.appI18n.computed('OK_Btn', 'Confirm');
    getHeaderFinished = this.appI18n.computed('Finished_Tag', 'Match Finished');
    progressLabel = this.appI18n.computed('MatchFinished_Progress', 'Calculating results...');
    /** 顯示主畫面 */
    showWindow = signal(false);
    destroy$ = new Subject();
    /** 主畫面主題 */
    themeType = signal('quick');
    /** 顯示主畫面 */
    showMainPanel = computed(() => { return this.trn.showMainPanel(); });
    /** 目前選擇的長期競賽 */
    selectedEventTrn = signal(null);
    /** 顯示賽事選擇視窗 */
    showEventPopup = signal(false);
    /** 追蹤 trn-idle 內部的 showEventSelection 狀態 */
    showEventSelection = signal(false);
    /** 顯示完整玩家列表 */
    showAllPlayerList = signal(false);
    /** 顯示遊戲開始動畫 */
    showGameStarting = signal(false);
    /** 顯示彈出確認視窗 */
    showConfirmPopup = signal(false);
    /** Quick 或 Event 競賽確認視窗的類型 */
    confirmVariant = signal('event');
    /** 顯示配對結束畫面 */
    showMatchFinished = signal(false);
    /** 顯示退出競賽視窗 */
    showExitPopup = signal(false);
    /** Event 是否因時間到結束 */
    isEventTimeoutEnded = signal(false);
    /** 顯示等待結果中 */
    showWaitingResult = signal(false);
    /** 顯示上方狀態列 */
    showStatusBar = computed(() => { return this.user.trnSetting() ? true : this.debugShowStatusBar(); });
    /** 顯示啟動提示訊息 */
    showHint = signal(false);
    /** 顯示遊戲結果 */
    showGameResult = signal(false);
    /** 結果主題 */
    resultTheme = signal('quick');
    /** 結果倍率 */
    resultMultiplier = signal(1);
    /** 獎金結果 */
    resultPrize = signal(0);
    /** 遊戲結果完整列表 */
    resultListAll = signal(defaultPlayersList.slice(0, 20));
    /** 遊戲結果使用者排名 */
    resultRank = signal(null);
    /** 遊戲結果通知ID */
    resultNotificationId = signal('');
    /** 目前頁面 */
    currentPage = signal('idle');
    /** 目前使用者的排名 */
    userRank = computed(() => { return this.themeType() === 'quick' ? this.trn.roomRank() : null; });
    /** 是否啟用 BetData */
    isBetDataEnabled = computed(() => {
        return this.user.trnData() !== null;
    });
    /** 是否正在遊玩 */
    isPlaying = computed(() => {
        return this.trn.status() === 'playing-quick' || this.trn.status() === 'playing-event';
    });
    /** 測試用: 顯示上方狀態列 */
    debugShowStatusBar = signal(false);
    /** 控制用的signal*/
    signalList = [
        { key: 'game-starting', signal: this.showGameStarting },
        { key: 'confirm-popup', signal: this.showConfirmPopup },
        { key: 'event-popup', signal: this.showEventPopup },
        { key: 'match-finished', signal: this.showMatchFinished },
        { key: 'status-bar', signal: this.debugShowStatusBar },
        { key: 'game-result', signal: this.showGameResult },
        { key: 'waiting-result', signal: this.showWaitingResult },
    ];
    // injected services
    storage = inject(StorageCtrlService);
    constructor(user, trn, api) {
        this.user = user;
        this.trn = trn;
        this.api = api;
        // 根據目前頁面設定主題
        effect(() => {
            if (this.currentPage() === 'matching')
                this.themeType.set('quick');
            else if (this.currentPage() === 'playing-quick')
                this.themeType.set('quick');
            else if (this.currentPage() === 'playing-event')
                this.themeType.set('event');
        });
    }
    ngOnInit() {
        // 監聽房間配對事件
        this.trn.roomMatching$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomMatching.bind(this));
        // 監聽房間準備完成事件
        this.trn.roomReady$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomReady.bind(this));
        // 監聽房間結束事件
        this.trn.roomEnding$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomEnding.bind(this));
        // 監聽房間取消事件
        this.trn.roomCancelled$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomCancelled.bind(this));
        // 監聽活動賽事準備完成事件
        this.trn.eventRaceReady$.pipe(takeUntil(this.destroy$)).subscribe(this.onEventReady.bind(this));
        // 監聽活動賽事結束事件
        this.trn.eventRaceEnded$.pipe(takeUntil(this.destroy$)).subscribe(this.onEventEnded.bind(this));
        // 監聽獎項通知
        this.trn.prizeNotification$.pipe(takeUntil(this.destroy$)).subscribe(this.onPrizeNotification.bind(this));
        // 監聽錯誤
        this.trn.error$.pipe(takeUntil(this.destroy$)).subscribe(this.onError.bind(this));
        // 監聽Debug Panel強制切換頁面事件
        this.trn.debugPage$.pipe(takeUntil(this.destroy$)).subscribe(this.onDebugPage.bind(this));
        // 監聽Debug Panel強制觸發Signal事件
        this.trn.debugSignal$.pipe(takeUntil(this.destroy$)).subscribe(this.onDebugSignal.bind(this));
        // 如果有正在配對的快速賽事，直接進入配對畫面
        if (this.trn.status() === 'matching-quick') {
            this.showWindow.set(true);
            this.trn.enableBetListLimit(true);
            this.currentPage.set('matching');
        }
        // 如果有正在進行的快速賽事，直接進入遊玩畫面
        if (this.trn.status() === 'playing-quick') {
            this.showWindow.set(true);
            this.trn.enableBetData(true);
            this.currentPage.set('playing-quick');
        }
        // 如果有正在進行的活動賽事，直接進入遊玩畫面
        if (this.trn.status() === 'playing-event') {
            this.showWindow.set(true);
            this.trn.openEventRace(this.storage.trnEventRunning?.id || '');
            this.trn.enableBetData(this.storage.trnEventRunning?.betDataEnabled || false);
            this.selectedEventTrn.set(this.trn.betDataTrn());
            this.currentPage.set('playing-event');
        }
        // 如果沒有快速賽事，預設切換到長期競賽分頁
        if (this.trn.trnQuick() === null) {
            this.themeType.set('event');
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        this.trn.sendPrizeRequest();
    }
    /** 遊戲結果玩家列表 */
    resultListPart = computed(() => {
        // 包括isHighlight的玩家, 跟全部前四名
        const highlightIndex = this.resultListAll().findIndex(item => item.highlighted);
        if (highlightIndex === -1 || highlightIndex < 4) {
            return this.resultListAll().slice(0, 5);
        }
        else {
            // 取得前四名
            const topList = this.resultListAll().slice(0, 4);
            // 加上isHighlight的玩家
            const highlightItem = this.resultListAll()[highlightIndex];
            return topList.concat([highlightItem]);
        }
    });
    onDebugSignal(key) {
        const signalItem = this.signalList.find(item => item.key === key);
        if (signalItem) {
            signalItem.signal.set(!signalItem.signal());
        }
    }
    onDebugPage(page) {
        this.currentPage.set(page);
    }
    async onClickResultConfirm(notificationId) {
        this.trn.sendPrizeAck(notificationId);
        this.showGameResult.set(false);
        // 等待100毫秒確保視窗關閉動畫完成 這邊會有問題先暫時用timer解決
        await firstValueFrom(timer(100));
        // 請求獎項通知
        this.trn.sendPrizeRequest();
    }
    onEventPopupSelected(data) {
        this.selectedEventTrn.set(data);
        this.showEventPopup.set(false);
    }
    /** 房間開始配對 */
    onRoomMatching(data) {
        this.currentPage.set('matching');
    }
    /** 房間遊戲開始 */
    onRoomReady(data) {
        this.currentPage.set('playing-quick');
        this.showGameStarting.set(true);
    }
    /** 房間遊戲結束 */
    onRoomEnding(data) {
        // 關閉BetData 關閉遊戲畫面
        this.showMatchFinished.set(true);
        this.currentPage.set('idle');
    }
    onRoomCancelled() {
        this.currentPage.set('idle');
    }
    /** 長期活動進入賽事介面 */
    onEventReady(data) {
        this.showGameStarting.set(true);
        this.currentPage.set('playing-event');
    }
    /** 長期活動跳出競賽介面 */
    onEventEnded() {
        if (this.isEventTimeoutEnded()) {
            this.showMatchFinished.set(true);
            this.isEventTimeoutEnded.set(false);
        }
        this.showEventPopup.set(false);
        this.currentPage.set('idle');
    }
    /** 長期活動時間到結束 */
    onEventMatchTimeout() {
        this.isEventTimeoutEnded.set(true);
        this.trn.closeEventRace();
    }
    onClickTab(tab) {
        this.themeType.set(tab);
    }
    onCloseMatchFinished() {
        this.showMatchFinished.set(false);
    }
    onOpenEventPopup() {
        this.showEventPopup.set(true);
    }
    /** 退出競賽 */
    onExitEvent() {
        this.trn.closeEventRace();
        // 如果目前選擇的eventtrn正在運行，則保持選擇不變
        if (this.selectedEventTrn()?.status === 'running')
            return;
        // 如果目前選擇的eventtrn沒有運行，則嘗試自動選擇一個正在運行的競賽
        const firstEvent = this.trn.trnEventRunningList()?.[0] || null;
        this.selectedEventTrn.set(firstEvent);
    }
    onPrizeNotification(data) {
        // 顯示通知視窗
        this.showGameResult.set(true);
        this.showMatchFinished.set(false);
        this.resultNotificationId.set(data.notificationId);
        this.resultListAll.set(data.playersList);
        this.resultTheme.set(data.type || 'quick');
        this.resultPrize.set(data.prize);
        this.resultRank.set(data.rank);
    }
    onError(error) {
        alert(`${JSON.stringify(error)}`);
        this.currentPage.set('idle');
    }
    static ɵfac = function TrnAllComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnAllComponent)(i0.ɵɵdirectiveInject(i1.UserProfileService), i0.ɵɵdirectiveInject(i2.TrnCtrlService), i0.ɵɵdirectiveInject(i3.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrnAllComponent, selectors: [["trn-all"]], decls: 9, vars: 11, consts: [[1, "fixed", "inset-0", 3, "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "header", "trnList"], ["setAnimation", "in", 1, "fixed", "w-full", "bottom-1/2", 3, "message", "variant"], [1, "fixed", "top-0", "left-0", "right-0", "duration-200", 3, "text", "multiplier", "variant", "ngClass"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "variant", "header", "selectedEvent"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "variant", "header", "getQuickTitle", "getEventTitle", "getConfirmButtonText"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "getEventTitle", "getQuickTitle", "header", "getPrizeLabel", "getButtonLabel", "getEventDetailsButtonText", "currency", "variant", "playList", "rank", "prize"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "selectedEvent"], [1, "fixed", "bottom-10", "left-10", 3, "openWindow"], [1, "absolute", "top-10", "left-4", "duration-300", "scale-85", "sm:scale-100", "origin-top-left", 3, "ngClass"], [3, "windowOpened", "selectedTab", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "header"], [1, "w-full", "inline-flex", "items-center", "gap-1.5", "rounded-md", "bg-emerald-800/80", "px-2", "py-1", "font-bold", "text-emerald-100", "transition-all", "duration-200", "mt-1"], [1, "absolute", "-right-5", "top-26", "-translate-y-1/2", "flex", "items-center", "justify-center", "size-10", 3, "click", "severity", "accentColor", "icon"], [1, "absolute", "top-16", "left-4", "duration-300", 3, "click", "rank", "ngClass", "isPlaying", "variant"], [3, "clickTab", "clickOpenList", "openConfirm", "onClose", "selectedEvent", "windowOpened", "selectedTab", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "header"], [3, "exitLeave", "matchTimeout"], ["name", "loading", 1, "size-4"], [1, "text-xs", "shadow-sm", "tracking-wide"], [1, "fixed", "inset-0", 3, "onClose", "selectedEvent", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "header", "trnList"], ["setAnimation", "in", 1, "fixed", "w-full", "bottom-1/2", 3, "close", "message", "variant"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "close", "variant", "header", "selectedEvent"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "onClose", "onConfirm", "variant", "header", "getQuickTitle", "getEventTitle", "getConfirmButtonText"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "clickClose", "clickConfirm", "getEventTitle", "getQuickTitle", "header", "getPrizeLabel", "getButtonLabel", "getEventDetailsButtonText", "currency", "variant", "playList", "rank", "prize"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "close", "selectedEvent"]], template: function TrnAllComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, TrnAllComponent_Conditional_0_Template, 8, 17);
            i0.ɵɵconditionalCreate(1, TrnAllComponent_Conditional_1_Template, 1, 9, "ap-trn-event-selection", 0);
            i0.ɵɵconditionalCreate(2, TrnAllComponent_Conditional_2_Template, 1, 2, "ap-trn-game-starting", 1);
            i0.ɵɵelement(3, "ap-trn-status-bar", 2);
            i0.ɵɵconditionalCreate(4, TrnAllComponent_Conditional_4_Template, 1, 3, "trn-game-confirm", 3);
            i0.ɵɵconditionalCreate(5, TrnAllComponent_Conditional_5_Template, 1, 5, "ap-trn-game-match-finished", 4);
            i0.ɵɵconditionalCreate(6, TrnAllComponent_Conditional_6_Template, 1, 11, "ap-trn-game-result", 5);
            i0.ɵɵconditionalCreate(7, TrnAllComponent_Conditional_7_Template, 1, 1, "trn-game-event-leave-confirm", 6);
            i0.ɵɵelementStart(8, "trn-created-notification", 7);
            i0.ɵɵlistener("openWindow", function TrnAllComponent_Template_trn_created_notification_openWindow_8_listener() { return ctx.showWindow.set(true); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showMainPanel() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showEventPopup() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showGameStarting() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", ctx.getStatusModeBar())("multiplier", ctx.trn.betDataMultiplier())("variant", ctx.themeType())("ngClass", ctx.showStatusBar() ? "mt-0" : "-mt-10");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showConfirmPopup() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showMatchFinished() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showGameResult() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showExitPopup() ? 7 : -1);
        } }, dependencies: [CommonModule, i4.NgClass, ApButtonComponent, ApTrnFloatButtonComponent, ApTrnGameStartingComponent, TrnGameConfirmComponent, ApTrnStatusBarComponent, ApTrnGameResultComponent, ApTrnEventSelectionComponent, ApTrnGameMatchFinished, TrnIdleComponent, TrnMatchingComponent, TrnPlayingQuickComponent, TrnPlayingEventComponent, TrnCreatedNotificationComponent, TrnGameEventLeaveConfirmComponent, ApIconComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  -webkit-user-select: none;\n  user-select: none;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnAllComponent, [{
        type: Component,
        args: [{ selector: 'trn-all', imports: [CommonModule, ApButtonComponent, ApTrnFloatButtonComponent, ApButtonComponent, ApTrnGameStartingComponent, TrnGameConfirmComponent, ApTrnStatusBarComponent, ApTrnGameResultComponent, ApTrnEventSelectionComponent, ApTrnGameMatchFinished, TrnIdleComponent, TrnMatchingComponent, TrnPlayingQuickComponent, TrnPlayingEventComponent, TrnCreatedNotificationComponent, TrnGameEventLeaveConfirmComponent, ApIconComponent], template: "@if (showMainPanel()) {\n  <div\n    class=\"absolute top-10 left-4 duration-300 scale-85 sm:scale-100 origin-top-left\"\n    [ngClass]=\"{ '-ml-56': !showWindow() }\"\n  >\n    @if (currentPage() === \"idle\") {\n      <trn-idle\n        [windowOpened]=\"showWindow()\"\n        [selectedTab]=\"themeType()\"\n        (clickTab)=\"onClickTab($event)\"\n        (clickOpenList)=\"onOpenEventPopup()\"\n        (openConfirm)=\"confirmVariant.set($event.variant); selectedEventTrn.set($event.event); showConfirmPopup.set(true)\"\n        [getCountdownStartTitle]=\"getCountdownStartTitle()\"\n        [getCountdownEndTitle]=\"getCountdownEndTitle()\"\n        [getDaysLabel]=\"getDaysLabel()\"\n        [getHoursLabel]=\"getHoursLabel()\"\n        [getMinutesLabel]=\"getMinutesLabel()\"\n        [getSecondsLabel]=\"getSecondsLabel()\"\n        [header]=\"getPopupHeader()\"\n        (onClose)=\"showEventPopup.set(false)\"\n        (selectedEvent)=\"onEventPopupSelected($event)\"\n      />\n    }\n\n    @if (currentPage() === \"matching\") {\n      <trn-matching />\n    }\n\n    @if (currentPage() === \"playing-quick\") {\n      <trn-playing-quick />\n    }\n\n    @if (currentPage() === \"playing-event\") {\n      <trn-playing-event\n        (exitLeave)=\"showExitPopup.set(true)\"\n        (matchTimeout)=\"onEventMatchTimeout()\"\n      />\n    }\n\n    <!-- \u914D\u5C0D\u4E2D\u72C0\u614B\u5217 -->\n    @if (showWaitingResult()) {\n      <div\n        class=\"w-full inline-flex items-center gap-1.5 rounded-md bg-emerald-800/80 px-2 py-1 font-bold text-emerald-100 transition-all duration-200 mt-1\"\n      >\n        <ap-icon name=\"loading\" class=\"size-4\" />\n        <div class=\"text-xs shadow-sm tracking-wide\">{{ progressLabel() }}</div>\n      </div>\n    }\n\n    <!-- \u53F3\u5074\u5713\u5F62\u5207\u63DB/\u6536\u5408\u9215 -->\n      <ap-button\n      class=\"absolute -right-5 top-26 -translate-y-1/2 flex items-center justify-center size-10\"\n      [severity]=\"'contrast'\"\n      [accentColor]=\"themeType() === 'quick' ? 'yellow' : 'purple'\"\n      [icon]=\"'chevron-left default'\"\n      (click)=\"showWindow.set(false)\"\n    />  \n  </div>\n\n  <!-- \u7E2E\u5C0F\u6642\u5019\u7684\u6309\u9215 -->\n  <ap-trn-float-button\n    class=\"absolute top-16 left-4 duration-300\"\n    [rank]=\"userRank()\"\n    [ngClass]=\"{ '-ml-28': showWindow() }\"\n    [isPlaying]=\"isPlaying()\"\n    [variant]=\"themeType()\"\n    (click)=\"showWindow.set(true)\"\n  />\n}\n<!-- Event \u9078\u64C7\u8996\u7A97 -->\n@if (showEventPopup()) {\n  <ap-trn-event-selection\n    [getCountdownStartTitle]=\"getCountdownStartTitle()\"\n    [getCountdownEndTitle]=\"getCountdownEndTitle()\"\n    [getDaysLabel]=\"getDaysLabel()\"\n    [getHoursLabel]=\"getHoursLabel()\"\n    [getMinutesLabel]=\"getMinutesLabel()\"\n    [getSecondsLabel]=\"getSecondsLabel()\"\n    class=\"fixed inset-0\"\n    [header]=\"getPopupHeader()\"\n    [trnList]=\"trn.trnEventRunningList() || []\"\n    (onClose)=\"showEventPopup.set(false)\"\n    (selectedEvent)=\"onEventPopupSelected($event)\"\n  />\n}\n\n<!-- Game Starting Overlay -->\n@if (showGameStarting()) {\n  <ap-trn-game-starting\n    [message]=\"getGameStarting()\"\n    class=\"fixed w-full bottom-1/2\"\n    [variant]=\"themeType()\"\n    setAnimation=\"in\"\n    (close)=\"showGameStarting.set(false)\"\n  />\n}\n\n<!-- Status Tournament Bar -->\n<ap-trn-status-bar\n  class=\"fixed top-0 left-0 right-0 duration-200\"\n  [text]=\"getStatusModeBar()\"\n  [multiplier]=\"trn.betDataMultiplier()\"\n  [variant]=\"themeType()\"\n  [ngClass]=\"showStatusBar() ? 'mt-0' : '-mt-10'\"\n/>\n\n<!-- Confirmation Popup -->\n@if (showConfirmPopup()) {\n  <trn-game-confirm\n    [variant]=\"confirmVariant()\"\n    [header]=\"getConfirmHeader()\"\n    [selectedEvent]=\"confirmVariant() === 'event' ? selectedEventTrn() : trn.trnQuick()\"\n    class=\"fixed inset-0 animate-fade animate-duration-300\"\n    (close)=\"showConfirmPopup.set(false)\"\n  />\n}\n\n<!-- Match Finished -->\n@if (showMatchFinished()) {\n  <ap-trn-game-match-finished\n    class=\"fixed inset-0 animate-fade animate-duration-300\"\n    [variant]=\"themeType()\"\n    [header]=\"getHeaderFinished()\"\n    [getQuickTitle]=\"getQuickTitle()\"\n    [getEventTitle]=\"getEventTitle()\"\n    [getConfirmButtonText]=\"getConfirmButtonText()\"\n    (onClose)=\"onCloseMatchFinished()\"\n    (onConfirm)=\"onCloseMatchFinished()\"\n  />\n}\n\n<!-- Game Result Popup -->\n@if (showGameResult()) {\n  <ap-trn-game-result\n    class=\"fixed inset-0 animate-fade animate-duration-300\"\n    [getEventTitle]=\"getEventTitle()\"\n    [getQuickTitle]=\"getQuickTitle()\"\n    [header]=\"getPopupResultHeader()\"\n    [getPrizeLabel]=\"getPrizeLabel()\"\n    [getButtonLabel]=\"getButtonLabel()\"\n    [getEventDetailsButtonText]=\"getEventDetailsButtonText()\"\n    [currency]=\"trn.currencySymbol()\"\n    [variant]=\"resultTheme()\"\n    [playList]=\"resultListPart()\"\n    [rank]=\"resultRank()\"\n    [prize]=\"resultPrize() || 0\"\n    (clickClose)=\"showGameResult.set(false)\"\n    (clickConfirm)=\"onClickResultConfirm(resultNotificationId())\"\n  />\n}\n\n<!-- Game Leave Popup -->\n@if (showExitPopup()) {\n  <trn-game-event-leave-confirm\n    class=\"fixed inset-0 animate-fade animate-duration-300\"\n    [selectedEvent]=\"trn.betDataTrn()\"\n    (close)=\"showExitPopup.set(false)\"\n  />\n}\n\n<trn-created-notification\n  class=\"fixed bottom-10 left-10\"\n  (openWindow)=\"showWindow.set(true)\"\n/>\n", styles: [":host {\n  display: block;\n  -webkit-user-select: none;\n  user-select: none;\n}"] }]
    }], () => [{ type: i1.UserProfileService }, { type: i2.TrnCtrlService }, { type: i3.AppInterfaceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrnAllComponent, { className: "TrnAllComponent", filePath: "src/app/pages/trn-all/trn-all.component.ts", lineNumber: 35 }); })();
//# sourceMappingURL=trn-all.component.js.map