import { Component, computed, inject, output, signal, ViewChild } from '@angular/core';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { CommonModule } from '@angular/common';
import { ApHistoryListComponent } from '../../components/ap-history-list/ap-history-list.component';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { ApUiFramePageComponent } from '../../components/ap-ui-frame-page/ap-ui-frame-page.component';
import { ApHistoryPopupShareComponent } from '../../components/ap-history-popup-share/ap-history-popup-share.component';
import { ApTabMenuComponent, } from '../../../ap-components-lib/ap-tab-menu/ap-tab-menu.component';
import { HistoryDetailComponent } from '../history-detail/history-detail.component';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { AppI18nPipe } from '../../library/pipe/app-i18n.pipe';
import { calc } from '../../services/user-profile/user-profile.function';
import { HistoryReplayService } from '../../services/history-replay/history-replay.service';
import { HistoryReplayViewerComponent } from '../history-replay-viewer/history-replay-viewer.component';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';
import { CommonFunctionService } from '../../services/common-function/common-function.service';
import { LoggerService } from '../../services/logger/logger.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function HistoryListComponent_ap_ui_frame_page_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "ap-tab-menu", 8);
    i0.ɵɵlistener("tabChange", function HistoryListComponent_ap_ui_frame_page_0_div_2_Template_ap_tab_menu_tabChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onWalletTabChange($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("tabs", ctx_r1.walletTabs())("selectedTab", ctx_r1.wallet())("accentColor", "yellow")("color", "zinc");
} }
function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-history-list", 15);
    i0.ɵɵpipe(1, "appI18n");
    i0.ɵɵpipe(2, "appI18n");
    i0.ɵɵpipe(3, "appI18n");
    i0.ɵɵpipe(4, "appI18n");
    i0.ɵɵpipe(5, "appI18n");
    i0.ɵɵpipe(6, "appI18n");
    i0.ɵɵpipe(7, "appI18n");
    i0.ɵɵpipe(8, "appI18n");
    i0.ɵɵpipe(9, "appI18n");
    i0.ɵɵpipe(10, "appI18n");
    i0.ɵɵlistener("dateRangeChange", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_1_Template_ap_history_list_dateRangeChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onDateRangeChange($event)); })("share", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_1_Template_ap_history_list_share_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.showShare($event)); })("replay", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_1_Template_ap_history_list_replay_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.showReplay($event)); })("detail", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_1_Template_ap_history_list_detail_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.showDetail($event)); })("winLoseLabelClick", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_1_Template_ap_history_list_winLoseLabelClick_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onWinLabelClick()); })("scrollNearEnd", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_1_Template_ap_history_list_scrollNearEnd_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onScrollNearEnd()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("list", ctx_r1.cashList())("isLoadingMore", ctx_r1.isLoadingMore())("dateLabel", i0.ɵɵpipeBind2(1, 16, "history_date", "DATE"))("betLabel", i0.ɵɵpipeBind2(2, 19, "history_bet", "BET"))("winLoseLabel", ctx_r1.winLabel())("typeLabel", i0.ɵɵpipeBind2(3, 22, "history_type", "TYPE"))("otherLabel", i0.ɵɵpipeBind2(4, 25, "history_others", "OTHERS"))("allLabel", i0.ɵɵpipeBind2(5, 28, "history_all", "ALL"))("todayLabel", i0.ɵɵpipeBind2(6, 31, "history_today", "TODAY"))("dayLabel", i0.ɵɵpipeBind2(7, 34, "history_last_seven_days", "Last 7 days"))("customLabel", i0.ɵɵpipeBind2(8, 37, "history_custom", "CUSTOM"))("getConfirmButtonText", i0.ɵɵpipeBind2(9, 40, "Confirm_Btn", "Confirm"))("emptyStateLabel", i0.ɵɵpipeBind2(10, 43, "history_no_records_text", "No records available."))("forcedReplayButton", ctx_r1.historyCtrl.forceReplayDisplayed())("forcedShareButton", ctx_r1.historyCtrl.forceShareDisplayed())("serverReplayEnabled", ctx_r1.serverReplayEnabled() && !ctx_r1.isOldGame());
} }
function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-history-list", 16);
    i0.ɵɵpipe(1, "appI18n");
    i0.ɵɵpipe(2, "appI18n");
    i0.ɵɵpipe(3, "appI18n");
    i0.ɵɵpipe(4, "appI18n");
    i0.ɵɵpipe(5, "appI18n");
    i0.ɵɵpipe(6, "appI18n");
    i0.ɵɵpipe(7, "appI18n");
    i0.ɵɵpipe(8, "appI18n");
    i0.ɵɵpipe(9, "appI18n");
    i0.ɵɵpipe(10, "appI18n");
    i0.ɵɵlistener("dateRangeChange", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_2_Template_ap_history_list_dateRangeChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onDateRangeChange($event)); })("winLoseLabelClick", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_2_Template_ap_history_list_winLoseLabelClick_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onWinLabelClick()); })("share", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_2_Template_ap_history_list_share_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.showShare($event)); })("replay", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_2_Template_ap_history_list_replay_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.showReplay($event)); })("detail", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_2_Template_ap_history_list_detail_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.showDetail($event)); })("scrollNearEnd", function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_2_Template_ap_history_list_scrollNearEnd_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onScrollNearEnd()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("list", ctx_r1.bonusList())("isLoadingMore", ctx_r1.isLoadingMore())("dateLabel", i0.ɵɵpipeBind2(1, 16, "history_date", "DATE"))("betLabel", i0.ɵɵpipeBind2(2, 19, "history_bet", "BET"))("winLoseLabel", ctx_r1.winLabel())("typeLabel", i0.ɵɵpipeBind2(3, 22, "history_type", "TYPE"))("otherLabel", i0.ɵɵpipeBind2(4, 25, "history_others", "OTHERS"))("allLabel", i0.ɵɵpipeBind2(5, 28, "history_all", "ALL"))("todayLabel", i0.ɵɵpipeBind2(6, 31, "history_last_seven_days", "Last 7 days"))("dayLabel", i0.ɵɵpipeBind2(7, 34, "history_last_seven_days", "Last 7 days"))("customLabel", i0.ɵɵpipeBind2(8, 37, "history_custom", "CUSTOM"))("getConfirmButtonText", i0.ɵɵpipeBind2(9, 40, "Confirm_Btn", "Confirm"))("emptyStateLabel", i0.ɵɵpipeBind2(10, 43, "history_no_records_text", "No records available."))("forcedReplayButton", ctx_r1.historyCtrl.forceReplayDisplayed())("forcedShareButton", ctx_r1.historyCtrl.forceShareDisplayed())("serverReplayEnabled", ctx_r1.serverReplayEnabled() && !ctx_r1.isOldGame());
} }
function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_1_Template, 11, 46, "ap-history-list", 13)(2, HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_ap_history_list_2_Template, 11, 46, "ap-history-list", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.wallet() === "cash");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.wallet() === "bonus");
} }
function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "appI18n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 21);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 19)(9, "div", 20);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "appI18n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 22);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 19)(15, "div", 20);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "appI18n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 21);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 19)(21, "div", 20);
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "appI18n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 21);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 8, "history_transaction", "Number"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.historyNumber());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 11, "history_date", "Date"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.historyDateRange());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(17, 14, "history_total_bet_amount", "history_total_bet_amount"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.historyTotalBet());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(23, 17, "history_total_win_amount", "history_total_win_amount"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.historyBalance());
} }
function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_ap_loading_overlay_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-loading-overlay", 23);
} }
function HistoryListComponent_ap_ui_frame_page_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_1_Template, 3, 2, "div", 9)(2, HistoryListComponent_ap_ui_frame_page_0_Conditional_4_div_2_Template, 26, 20, "div", 10)(3, HistoryListComponent_ap_ui_frame_page_0_Conditional_4_ap_loading_overlay_3_Template, 1, 0, "ap-loading-overlay", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isLoading());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isLoading());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading());
} }
function HistoryListComponent_ap_ui_frame_page_0_Conditional_5_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-loading-overlay", 23);
} }
function HistoryListComponent_ap_ui_frame_page_0_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "history-detail", 24);
    i0.ɵɵlistener("replay", function HistoryListComponent_ap_ui_frame_page_0_Conditional_5_Template_history_detail_replay_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showReplay($event)); })("share", function HistoryListComponent_ap_ui_frame_page_0_Conditional_5_Template_history_detail_share_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showShare($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(1, HistoryListComponent_ap_ui_frame_page_0_Conditional_5_Conditional_1_Template, 1, 0, "ap-loading-overlay", 23);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("item", ctx_r1.detailItem());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isLoading() ? 1 : -1);
} }
function HistoryListComponent_ap_ui_frame_page_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "ap-history-popup-share", 25);
    i0.ɵɵpipe(2, "appI18n");
    i0.ɵɵpipe(3, "appI18n");
    i0.ɵɵlistener("close", function HistoryListComponent_ap_ui_frame_page_0_div_6_Template_ap_history_popup_share_close_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.isShare.set(false)); })("copyLink", function HistoryListComponent_ap_ui_frame_page_0_div_6_Template_ap_history_popup_share_copyLink_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onCopyLinkRequest($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("header", i0.ɵɵpipeBind2(2, 3, "share_title", "Share"))("linkLabel", i0.ɵɵpipeBind2(3, 6, "history_link_game", "Copy Link"))("item", ctx_r1.sharedItem());
} }
function HistoryListComponent_ap_ui_frame_page_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-ui-frame-page", 2);
    i0.ɵɵpipe(1, "appI18n");
    i0.ɵɵlistener("close", function HistoryListComponent_ap_ui_frame_page_0_Template_ap_ui_frame_page_close_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close.emit()); })("back", function HistoryListComponent_ap_ui_frame_page_0_Template_ap_ui_frame_page_back_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.isDetail.set(false)); });
    i0.ɵɵtemplate(2, HistoryListComponent_ap_ui_frame_page_0_div_2_Template, 2, 4, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵconditionalCreate(4, HistoryListComponent_ap_ui_frame_page_0_Conditional_4_Template, 4, 3, "div", 5)(5, HistoryListComponent_ap_ui_frame_page_0_Conditional_5_Template, 2, 2);
    i0.ɵɵtemplate(6, HistoryListComponent_ap_ui_frame_page_0_div_6_Template, 4, 9, "div", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("header", i0.ɵɵpipeBind2(1, 6, "history_history", "HISTORY"))("@fadeOut", undefined)("enableBack", ctx_r1.isDetail());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isDetail());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.isDetail() ? 4 : 5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isShare());
} }
export class HistoryListComponent {
    // Services
    api = inject(AppInterfaceService);
    game = inject(GameIframeCtrlService);
    appI18n = inject(AppI18nService);
    historyReplayService = inject(HistoryReplayService);
    login = inject(LoginCtrlService);
    historyCtrl = inject(HistoryCtrlService);
    commonFunction = inject(CommonFunctionService);
    logger = inject(LoggerService);
    // Localization
    winLabelState = signal('winlose');
    winLabel = computed(() => {
        const state = this.winLabelState();
        if (state === 'win')
            return this.appI18n.instant('history_win', 'WIN');
        if (state === 'lose')
            return this.appI18n.instant('history_lose', 'LOSE');
        return this.appI18n.instant('history_win_lose', 'WIN/LOSE');
    });
    /** server login 控制 replay, share 按鈕顯示 */
    serverReplayEnabled = computed(() => { return this.api.loginResult()?.note?.history_replay === 1; });
    // 舊遊戲不 replay.
    isOldGame = computed(() => this.login.isUseInGameUI());
    // Data
    cashList = signal([]);
    bonusList = signal([]);
    wallet = signal('cash');
    walletTabs = computed(() => [
        {
            id: 'cash',
            label: this.appI18n.instant('history_normal_game', 'Cash Wallet'),
            icon: 'wallet',
        },
        {
            id: 'bonus',
            label: this.appI18n.instant('history_bonus_game', 'Bonus Wallet'),
            icon: 'star',
        },
    ]);
    // Track which wallet data has been loaded
    cashLoaded = signal(false);
    bonusLoaded = signal(false);
    // Server response metadata
    cashTotalCount = signal(0);
    cashTotalBet = signal(0);
    cashTotalWin = signal(0);
    bonusTotalCount = signal(0);
    bonusTotalBet = signal(0);
    bonusTotalWin = signal(0);
    // Pagination
    cashFirstIndex = signal(0);
    bonusFirstIndex = signal(0);
    batchSize = 20;
    // Loading more state
    isLoadingMore = signal(false);
    // State
    isLoading = signal(true);
    isShare = signal(false);
    isReplay = signal(false);
    isSpin = signal(false);
    // Replay viewer 相關
    replayViewerComponent;
    showReplayConfirm = signal(false);
    isReplayPanel = signal(false);
    replayPopupLabel = this.appI18n.computed('replay_message_title', 'replay_message_title');
    replayPopupHint = this.appI18n.computed('replay_history_ticket_info', 'Spin History Replay. For display purposes only. This will not impact your balance or gameplay.');
    replayCancelLabel = this.appI18n.computed('replay_cancel', 'Cancel');
    replayConfirmLabel = this.appI18n.computed('replay_confirm', 'Confirm');
    replayGameName = signal('');
    isDetail = signal(false);
    replayItem = signal(null);
    sharedItem = signal(null);
    detailItem = signal(null);
    selectedDateRange = signal(this.getTodayRange());
    close = output();
    ngAfterViewInit() {
        // 只載入預設的 cash wallet 資料
        this.loadCashHistory();
    }
    /** 載入 Cash 錢包歷史記錄 */
    async loadCashHistory() {
        this.isLoading.set(true);
        try {
            const range = this.selectedDateRange();
            const startDate = this.formatDateTimeForServer(range?.from || new Date());
            const endDate = this.formatDateTimeForServer(range?.to || new Date());
            // 根據 winLabelState 決定過濾條件
            const filterType = this.getFilterTypeFromWinLabelState();
            // 重置分頁索引
            this.cashFirstIndex.set(0);
            const response = await this.historyCtrl.getCashHistoryList(filterType, startDate, endDate, 0, this.batchSize);
            this.cashList.set(response.items);
            this.cashTotalCount.set(response.total_count);
            this.cashTotalBet.set(response.total_bet);
            this.cashTotalWin.set(response.total_win);
            this.cashLoaded.set(true);
            // 更新下一批的起始索引
            this.cashFirstIndex.set(response.items.length);
        }
        catch (error) {
            this.logger.error('[History] Failed to load cash history:', error);
        }
        finally {
            this.isLoading.set(false);
        }
    }
    /** 載入 Bonus 錢包歷史記錄 */
    async loadBonusHistory() {
        this.isLoading.set(true);
        try {
            const range = this.selectedDateRange();
            const startDate = this.formatDateTimeForServer(range?.from || new Date());
            const endDate = this.formatDateTimeForServer(range?.to || new Date());
            // 根據 winLabelState 決定過濾條件
            const filterType = this.getFilterTypeFromWinLabelState();
            // 重置分頁索引
            this.bonusFirstIndex.set(0);
            const response = await this.historyCtrl.getBonusHistoryList(filterType, startDate, endDate, 0, this.batchSize);
            this.bonusList.set(response.items);
            this.bonusTotalCount.set(response.total_count);
            this.bonusTotalBet.set(response.total_bet);
            this.bonusTotalWin.set(response.total_win);
            this.bonusLoaded.set(true);
            // 更新下一批的起始索引
            this.bonusFirstIndex.set(response.items.length);
        }
        catch (error) {
            this.logger.error('[History] Failed to load bonus history:', error);
        }
        finally {
            this.isLoading.set(false);
        }
    }
    showReplay(item) {
        // 改用 history-replay-viewer 的確認對話框
        this.replayItem.set(item);
        this.showReplayConfirm.set(true);
    }
    /**
     * 處理 Replay 確認請求 - 生成並載入 Replay URL
     */
    async onReplayConfirmRequest() {
        const item = this.replayItem();
        if (!item) {
            this.logger.error('[History] No replay item selected');
            return;
        }
        try {
            // 關閉確認對話框
            this.showReplayConfirm.set(false);
            // 取得遊戲 ID
            const gameId = this.login.gameId ?? '';
            // 使用 AppI18nService 獲取遊戲名稱
            const gameName = this.appI18n.instant(gameId, gameId);
            this.replayGameName.set(gameName);
            // 取得 ticket number (從 transaction 欄位)
            const ticketNo = item.transaction || '';
            // 取得 platform name (從 loginResult 中的 pid，或使用預設值)
            const platformName = this.api.loginResult()?.note?.pid || 'default';
            // 生成加密的 Replay URL
            let replayUrl = this.historyReplayService.getEncryptedReplayAddress(gameId, ticketNo, platformName);
            if (!replayUrl) {
                this.logger.error('[History] Failed to generate replay URL');
                return;
            }
            // 呼叫子組件載入 URL
            if (this.replayViewerComponent) {
                this.isReplayPanel.set(true); // 顯示 replay panel
                this.replayViewerComponent.loadReplayUrl(replayUrl, this.isOldGame());
            }
            else {
                this.logger.error('[History] ReplayViewerComponent not found');
            }
        }
        catch (error) {
            this.logger.error('[History] Failed to load replay:', error);
        }
    }
    /**
     * 取消 Replay
     */
    onReplayCancel() {
        this.showReplayConfirm.set(false);
        this.replayItem.set(null);
    }
    /**
     * 關閉 Replay
     */
    onReplayClose() {
        this.showReplayConfirm.set(false);
        this.replayItem.set(null);
    }
    /**
     * 處理複製 Replay 連結請求
     */
    async onCopyLinkRequest(item) {
        if (!item) {
            this.logger.error('[History] No replay item selected');
            return;
        }
        try {
            // 取得遊戲 ID
            const gameId = this.login.gameId ?? '';
            // 取得 ticket number (從 transaction 欄位)
            const ticketNo = item.transaction || '';
            // 取得 platform name (從 loginResult 中的 pid，或使用預設值)
            const platformName = this.api.loginResult()?.note?.pid || 'default';
            // 生成分享連結
            const shareUrl = await this.historyReplayService.GetShareHistoryReplayAddress(gameId, platformName, ticketNo);
            if (!shareUrl) {
                this.logger.error('[History] Failed to generate share URL');
                return;
            }
            // 複製到剪貼板
            navigator.clipboard.writeText(shareUrl)
                .then(() => {
                // 顯示複製成功提示
                this.replayViewerComponent?.showCopyLinkToast();
            })
                .catch(err => {
                this.logger.error('[History] Failed to copy replay link:', err);
            });
        }
        catch (error) {
            this.logger.error('[History] Failed to generate share URL:', error);
        }
    }
    async showDetail(item) {
        this.isDetail.set(true);
        this.detailItem.set(item);
        //this.detailName.set(item.rewardType);
        const detailResult = await this.historyCtrl.getHistoryDetail(item);
    }
    async showShare(item) {
        if (!item)
            return;
        // 判斷是否是移動設備（檢查觸摸支持和用戶代理）
        const isMobile = this.commonFunction.isMobile();
        // 如果是移動設備，嘗試使用 Web Share API
        if (isMobile) {
            try {
                // 生成分享連結
                const gameId = this.login.gameId ?? '';
                const ticketNo = item.transaction || '';
                const platformName = this.api.loginResult()?.note?.pid || 'default';
                const shareUrl = await this.historyReplayService.GetShareHistoryReplayAddress(gameId, platformName, ticketNo);
                if (shareUrl) {
                    // 調用 Web Share API
                    const result = await this.commonFunction.shareToWebSns({
                        title: this.appI18n.instant('history_share_title', 'Share Game History'),
                        text: this.appI18n.instant('history_share_text', 'Check out my game result!'),
                        url: shareUrl
                    });
                    // 如果成功分享，直接返回
                    if (result.supported && result.success) {
                        return;
                    }
                }
            }
            catch (error) {
                this.logger.error('[History] Failed to share via Web Share API:', error);
            }
        }
        // 如果不是移動設備、不支持 Web Share API 或分享失敗，使用原本的方式
        this.isShare.set(true);
        this.sharedItem.set(item);
    }
    onWalletTabChange(tabId) {
        const walletType = tabId;
        this.wallet.set(walletType);
        // 切換到該 wallet 時，如果該 wallet 的資料還沒載入，就載入
        if (walletType === 'cash' && !this.cashLoaded()) {
            this.loadCashHistory();
        }
        else if (walletType === 'bonus' && !this.bonusLoaded()) {
            this.loadBonusHistory();
        }
    }
    onDateRangeChange(range) {
        this.selectedDateRange.set(range);
        // 重新載入當前錢包的數據
        this.reloadCurrentWallet();
    }
    onWinLabelClick() {
        const currentState = this.winLabelState();
        if (currentState === 'winlose') {
            this.winLabelState.set('win');
        }
        else if (currentState === 'win') {
            this.winLabelState.set('lose');
        }
        else {
            this.winLabelState.set('winlose');
        }
        // 重新載入當前錢包的數據
        this.reloadCurrentWallet();
    }
    /** 根據 winLabelState 獲取過濾類型 */
    getFilterTypeFromWinLabelState() {
        const state = this.winLabelState();
        if (state === 'win')
            return 'W';
        if (state === 'lose')
            return 'L';
        return 'A';
    }
    /** 重新載入當前錢包的數據 */
    reloadCurrentWallet() {
        const wallet = this.wallet();
        if (wallet === 'cash') {
            this.cashLoaded.set(false);
            this.loadCashHistory();
        }
        else {
            this.bonusLoaded.set(false);
            this.loadBonusHistory();
        }
    }
    /** 載入更多 Cash 記錄 */
    async loadMoreCash() {
        if (this.isLoadingMore() || this.isLoading())
            return;
        const currentCount = this.cashList().length;
        const totalCount = this.cashTotalCount();
        // 如果已經載入所有資料，不再請求
        if (currentCount >= totalCount) {
            return;
        }
        this.isLoadingMore.set(true);
        try {
            const range = this.selectedDateRange();
            const startDate = this.formatDateTimeForServer(range?.from || new Date());
            const endDate = this.formatDateTimeForServer(range?.to || new Date());
            const filterType = this.getFilterTypeFromWinLabelState();
            const firstIndex = this.cashFirstIndex();
            const response = await this.historyCtrl.getCashHistoryList(filterType, startDate, endDate, firstIndex, this.batchSize);
            // 追加資料到現有清單
            this.cashList.update(list => [...list, ...response.items]);
            // 更新下一批的起始索引
            this.cashFirstIndex.set(firstIndex + response.items.length);
        }
        catch (error) {
            this.logger.error('[History] Failed to load more cash history:', error);
        }
        finally {
            this.isLoadingMore.set(false);
        }
    }
    /** 載入更多 Bonus 記錄 */
    async loadMoreBonus() {
        if (this.isLoadingMore() || this.isLoading())
            return;
        const currentCount = this.bonusList().length;
        const totalCount = this.bonusTotalCount();
        // 如果已經載入所有資料，不再請求
        if (currentCount >= totalCount) {
            return;
        }
        this.isLoadingMore.set(true);
        try {
            const range = this.selectedDateRange();
            const startDate = this.formatDateTimeForServer(range?.from || new Date());
            const endDate = this.formatDateTimeForServer(range?.to || new Date());
            const filterType = this.getFilterTypeFromWinLabelState();
            const firstIndex = this.bonusFirstIndex();
            const response = await this.historyCtrl.getBonusHistoryList(filterType, startDate, endDate, firstIndex, this.batchSize);
            // 追加資料到現有清單
            this.bonusList.update(list => [...list, ...response.items]);
            // 更新下一批的起始索引
            this.bonusFirstIndex.set(firstIndex + response.items.length);
        }
        catch (error) {
            this.logger.error('[History] Failed to load more bonus history:', error);
        }
        finally {
            this.isLoadingMore.set(false);
        }
    }
    /** 處理滾動事件，快到底部時載入更多 */
    onScrollNearEnd() {
        const wallet = this.wallet();
        if (wallet === 'cash') {
            this.loadMoreCash();
        }
        else {
            this.loadMoreBonus();
        }
    }
    // Computed properties for bottom info table
    currentList = computed(() => {
        return this.wallet() === 'cash' ? this.cashList() : this.bonusList();
    });
    filterByDateRange(list) {
        const range = this.selectedDateRange();
        if (!range || (!range.from && !range.to))
            return list;
        if (range.from && range.to) {
            const fromDateOnly = this.formatDateOnly(range.from);
            const toDateOnly = this.formatDateOnly(range.to);
            if (fromDateOnly === toDateOnly) {
                return list.filter((item) => (item.date || '').trim() === fromDateOnly);
            }
            const fromTime = new Date(range.from.getFullYear(), range.from.getMonth(), range.from.getDate(), 0, 0, 0, 0).getTime();
            const toTime = new Date(range.to.getFullYear(), range.to.getMonth(), range.to.getDate(), 23, 59, 59, 999).getTime();
            return list.filter((item) => {
                const dt = this.parseItemDateTime(item.date, item.time).getTime();
                return dt >= fromTime && dt <= toTime;
            });
        }
        return list;
    }
    filteredList = computed(() => {
        return this.filterByDateRange(this.currentList());
    });
    historyNumber = computed(() => {
        const wallet = this.wallet();
        const totalCount = wallet === 'cash' ? this.cashTotalCount() : this.bonusTotalCount();
        return totalCount.toString();
    });
    historyDateRange = computed(() => {
        const list = this.filteredList();
        const range = this.selectedDateRange();
        if (range?.from && range?.to) {
            const fromStr = this.formatDateOnly(range.from);
            const toStr = this.formatDateOnly(range.to);
            return fromStr === toStr ? fromStr : `${fromStr} ~ ${toStr}`;
        }
        if (list.length === 0)
            return '-';
        // Sort by date to get oldest and newest
        const sortedByDate = [...list].sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateA.getTime() - dateB.getTime();
        });
        const oldest = sortedByDate[0];
        const newest = sortedByDate[sortedByDate.length - 1];
        return `${oldest.date}-${newest.date}`;
    });
    historyTotalBet = computed(() => {
        const wallet = this.wallet();
        const totalBet = wallet === 'cash' ? this.cashTotalBet() : this.bonusTotalBet();
        const list = this.currentList();
        const currency = list[0]?.currency || '$';
        // Server 回傳的 total_bet 要轉換.
        const totalInDollars = calc.s2c(totalBet);
        return `${currency} ${totalInDollars.toLocaleString('en-US', {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        })}`;
    });
    historyBalance = computed(() => {
        const wallet = this.wallet();
        //const totalBet = wallet === 'cash' ? this.cashTotalBet() : this.bonusTotalBet();
        const totalWin = wallet === 'cash' ? this.cashTotalWin() : this.bonusTotalWin();
        const list = this.currentList();
        const currency = list[0]?.currency || '$';
        // Server 回傳的 total_bet 和 total_win 是以分為單位，需要轉換為元
        const balance = calc.s2c(totalWin);
        return `${currency} ${balance.toLocaleString('en-US', {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        })}`;
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
    /** 格式化日期為服務器需要的格式 'YYYY/MM/DD HH:mm:ss' */
    formatDateTimeForServer(d) {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');
        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    }
    /** 獲取本地今天的日期範圍（00:00:00 到 隔日 00:00:00）是要傳給服務器使用所以要轉成 GMT+00 時區的時間
     * @example (GMT+8) 會傳出 {from: 2026/04/09 16:00:00 , to: 2026/04/10 16:00:00}
    */
    getTodayRange() {
        const now = new Date();
        const offsetMs = now.getTimezoneOffset() * 60 * 1000;
        const localFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
        const localTo = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
        const from = new Date(localFrom.getTime() + offsetMs);
        const to = new Date(localTo.getTime() + offsetMs);
        return { from, to };
    }
    static ɵfac = function HistoryListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistoryListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HistoryListComponent, selectors: [["history-list"]], viewQuery: function HistoryListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(HistoryReplayViewerComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.replayViewerComponent = _t.first);
        } }, outputs: { close: "close" }, decls: 2, vars: 10, consts: [[3, "header", "enableBack", "close", "back", 4, "ngIf"], [3, "confirmReplayRequest", "cancelReplay", "copyLinkRequest", "close", "showConfirmDialog", "popupLabel", "popupHintReplay", "cancelLabel", "confirmLabel", "showWatchAgain", "showCopyLink", "isReplayPanel", "gameName"], [3, "close", "back", "header", "enableBack"], ["class", "relative z-sticky", "style", "pointer-events: auto", 4, "ngIf"], [1, "relative", "flex", "flex-col", "h-full"], [1, "h-[calc(100%-4.5rem)]", "mt-18", "overflow-visible", "flex", "flex-col"], [4, "ngIf"], [1, "relative", "z-sticky", 2, "pointer-events", "auto"], [3, "tabChange", "tabs", "selectedTab", "accentColor", "color"], ["class", "flex-1 bg-zinc-900 md:px-20", 4, "ngIf"], ["class", "shrink-0 bg-zinc-950 border-t border-zinc-700", 4, "ngIf"], ["class", "absolute inset-0 bg-black/50", 4, "ngIf"], [1, "flex-1", "bg-zinc-900", "md:px-20"], [3, "list", "isLoadingMore", "dateLabel", "betLabel", "winLoseLabel", "typeLabel", "otherLabel", "allLabel", "todayLabel", "dayLabel", "customLabel", "getConfirmButtonText", "emptyStateLabel", "forcedReplayButton", "forcedShareButton", "serverReplayEnabled", "dateRangeChange", "share", "replay", "detail", "winLoseLabelClick", "scrollNearEnd", 4, "ngIf"], [3, "list", "isLoadingMore", "dateLabel", "betLabel", "winLoseLabel", "typeLabel", "otherLabel", "allLabel", "todayLabel", "dayLabel", "customLabel", "getConfirmButtonText", "emptyStateLabel", "forcedReplayButton", "forcedShareButton", "serverReplayEnabled", "dateRangeChange", "winLoseLabelClick", "share", "replay", "detail", "scrollNearEnd", 4, "ngIf"], [3, "dateRangeChange", "share", "replay", "detail", "winLoseLabelClick", "scrollNearEnd", "list", "isLoadingMore", "dateLabel", "betLabel", "winLoseLabel", "typeLabel", "otherLabel", "allLabel", "todayLabel", "dayLabel", "customLabel", "getConfirmButtonText", "emptyStateLabel", "forcedReplayButton", "forcedShareButton", "serverReplayEnabled"], [3, "dateRangeChange", "winLoseLabelClick", "share", "replay", "detail", "scrollNearEnd", "list", "isLoadingMore", "dateLabel", "betLabel", "winLoseLabel", "typeLabel", "otherLabel", "allLabel", "todayLabel", "dayLabel", "customLabel", "getConfirmButtonText", "emptyStateLabel", "forcedReplayButton", "forcedShareButton", "serverReplayEnabled"], [1, "shrink-0", "bg-zinc-950", "border-t", "border-zinc-700"], [1, "grid", "grid-cols-4", "gap-2", "px-2", "md:px-20", "py-3", "text-sm", "text-zinc-400", "uppercase"], [1, "text-center"], [1, "mb-1"], [1, "font-medium", "text-white"], [1, "font-medium", "text-yellow-400"], [1, "absolute", "inset-0", "bg-black/50"], [1, "flex-1", 3, "replay", "share", "item"], [1, "absolute", "inset-0", "z-overlay", 3, "close", "copyLink", "header", "linkLabel", "item"]], template: function HistoryListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, HistoryListComponent_ap_ui_frame_page_0_Template, 7, 9, "ap-ui-frame-page", 0);
            i0.ɵɵelementStart(1, "history-replay-viewer", 1);
            i0.ɵɵlistener("confirmReplayRequest", function HistoryListComponent_Template_history_replay_viewer_confirmReplayRequest_1_listener() { return ctx.onReplayConfirmRequest(); })("cancelReplay", function HistoryListComponent_Template_history_replay_viewer_cancelReplay_1_listener() { return ctx.onReplayCancel(); })("copyLinkRequest", function HistoryListComponent_Template_history_replay_viewer_copyLinkRequest_1_listener() { return ctx.onCopyLinkRequest(ctx.replayItem()); })("close", function HistoryListComponent_Template_history_replay_viewer_close_1_listener() { return ctx.onReplayClose(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isSpin());
            i0.ɵɵadvance();
            i0.ɵɵproperty("showConfirmDialog", ctx.showReplayConfirm())("popupLabel", ctx.replayPopupLabel())("popupHintReplay", ctx.replayPopupHint())("cancelLabel", ctx.replayCancelLabel())("confirmLabel", ctx.replayConfirmLabel())("showWatchAgain", true)("showCopyLink", true)("isReplayPanel", ctx.isReplayPanel())("gameName", ctx.replayGameName());
        } }, dependencies: [CommonModule, i1.NgIf, ApUiFramePageComponent, ApHistoryListComponent, ApLoadingOverlayComponent, ApHistoryPopupShareComponent, ApTabMenuComponent, HistoryDetailComponent, AppI18nPipe, HistoryReplayViewerComponent], encapsulation: 2, data: { animation: [
                trigger('fadeOut', [
                    transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
                ]),
                trigger('fadeIn', [
                    transition(':enter', [
                        style({ opacity: 0 }),
                        animate('300ms ease-out', style({ opacity: 1 })),
                    ]),
                ]),
            ] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryListComponent, [{
        type: Component,
        args: [{ selector: 'history-list', imports: [CommonModule, ApUiFramePageComponent, ApHistoryListComponent, ApLoadingOverlayComponent, ApHistoryPopupShareComponent, ApTabMenuComponent, HistoryDetailComponent, AppI18nPipe, HistoryReplayViewerComponent], animations: [
                    trigger('fadeOut', [
                        transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
                    ]),
                    trigger('fadeIn', [
                        transition(':enter', [
                            style({ opacity: 0 }),
                            animate('300ms ease-out', style({ opacity: 1 })),
                        ]),
                    ]),
                ], template: "<ap-ui-frame-page\n  *ngIf=\"!isSpin()\"\n  [header]=\"'history_history' | appI18n:'HISTORY'\"\n  @fadeOut\n  (close)=\"close.emit()\"\n  [enableBack]=\"isDetail()\"\n  (back)=\"isDetail.set(false)\"\n>\n  <div\n    *ngIf=\"!isDetail()\"\n    class=\"relative z-sticky\"\n    style=\"pointer-events: auto\"\n  >\n    <ap-tab-menu\n      [tabs]=\"walletTabs()\"\n      [selectedTab]=\"wallet()\"\n      [accentColor]=\"'yellow'\"\n      [color]=\"'zinc'\"\n      (tabChange)=\"onWalletTabChange($event)\"\n    />\n  </div>\n\n  <div class=\"relative flex flex-col h-full\">\n    <!-- List -->\n    @if (!isDetail()) {\n      <div class=\"h-[calc(100%-4.5rem)] mt-18 overflow-visible flex flex-col\">\n        <div\n          *ngIf=\"!isLoading()\"\n          class=\"flex-1 bg-zinc-900 md:px-20\"\n        >\n          <ap-history-list\n            *ngIf=\"wallet() === 'cash'\"\n            [list]=\"cashList()\"\n            [isLoadingMore]=\"isLoadingMore()\"\n            [dateLabel]=\"'history_date' | appI18n:'DATE'\"\n            [betLabel]=\"'history_bet' | appI18n:'BET'\"\n            [winLoseLabel]=\"winLabel()\"\n            [typeLabel]=\"'history_type' | appI18n:'TYPE'\"\n            [otherLabel]=\"'history_others' | appI18n:'OTHERS'\"\n            [allLabel]=\"'history_all' | appI18n:'ALL'\"\n            [todayLabel]=\"'history_today' | appI18n:'TODAY'\"\n            [dayLabel]=\"'history_last_seven_days' | appI18n:'Last 7 days'\"\n            [customLabel]=\"'history_custom' | appI18n:'CUSTOM'\"\n            [getConfirmButtonText]=\"'Confirm_Btn' | appI18n:'Confirm'\"\n            [emptyStateLabel]=\"'history_no_records_text' | appI18n:'No records available.'\"\n            [forcedReplayButton]=\"historyCtrl.forceReplayDisplayed()\"\n            [forcedShareButton]=\"historyCtrl.forceShareDisplayed()\"\n            [serverReplayEnabled]=\"serverReplayEnabled() && !isOldGame()\"\n            (dateRangeChange)=\"onDateRangeChange($event)\"\n            (share)=\"showShare($event)\"\n            (replay)=\"showReplay($event)\"\n            (detail)=\"showDetail($event)\"\n            (winLoseLabelClick)=\"onWinLabelClick()\"\n            (scrollNearEnd)=\"onScrollNearEnd()\"\n            \n          />\n          <ap-history-list\n            *ngIf=\"wallet() === 'bonus'\"\n            [list]=\"bonusList()\"\n            [isLoadingMore]=\"isLoadingMore()\"\n            [dateLabel]=\"'history_date' | appI18n:'DATE'\"\n            [betLabel]=\"'history_bet' | appI18n:'BET'\"\n            [winLoseLabel]=\"winLabel()\"\n            [typeLabel]=\"'history_type' | appI18n:'TYPE'\"\n            [otherLabel]=\"'history_others' | appI18n:'OTHERS'\"\n            [allLabel]=\"'history_all' | appI18n:'ALL'\"\n            [todayLabel]=\"'history_last_seven_days' | appI18n:'Last 7 days'\"\n            [dayLabel]=\"'history_last_seven_days' | appI18n:'Last 7 days'\"\n            [customLabel]=\"'history_custom' | appI18n:'CUSTOM'\"\n            [getConfirmButtonText]=\"'Confirm_Btn' | appI18n:'Confirm'\"\n            [emptyStateLabel]=\"'history_no_records_text' | appI18n:'No records available.'\"\n            [forcedReplayButton]=\"historyCtrl.forceReplayDisplayed()\"\n            [forcedShareButton]=\"historyCtrl.forceShareDisplayed()\"\n            [serverReplayEnabled]=\"serverReplayEnabled() && !isOldGame()\"\n            (dateRangeChange)=\"onDateRangeChange($event)\"\n            (winLoseLabelClick)=\"onWinLabelClick()\"\n            (share)=\"showShare($event)\"\n            (replay)=\"showReplay($event)\"\n            (detail)=\"showDetail($event)\"\n            (scrollNearEnd)=\"onScrollNearEnd()\"\n          />\n        </div>\n\n        <!-- Bottom Info Table -->\n        <div\n          *ngIf=\"!isLoading()\"\n          class=\"shrink-0 bg-zinc-950 border-t border-zinc-700\"\n        >\n          <div\n            class=\"grid grid-cols-4 gap-2 px-2 md:px-20 py-3 text-sm text-zinc-400 uppercase\"\n          >\n            <div class=\"text-center\">\n              <div class=\"mb-1\">{{ 'history_transaction' | appI18n:'Number' }}</div>\n              <div class=\"font-medium text-white\">{{ historyNumber() }}</div>\n            </div>\n            <div class=\"text-center\">\n              <div class=\"mb-1\">{{ 'history_date' | appI18n:'Date' }}</div>\n              <div class=\"font-medium text-yellow-400\">{{ historyDateRange() }}</div>\n            </div>\n            <div class=\"text-center\">\n              <div class=\"mb-1\">{{ 'history_total_bet_amount' | appI18n:'history_total_bet_amount' }}</div>\n              <div class=\"font-medium text-white\">{{ historyTotalBet() }}</div>\n            </div>\n            <div class=\"text-center\">\n              <div class=\"mb-1\">{{ 'history_total_win_amount' | appI18n:'history_total_win_amount' }}</div>\n              <div class=\"font-medium text-white\">{{ historyBalance() }}</div>\n            </div>\n          </div>\n        </div>\n\n        <ap-loading-overlay\n          *ngIf=\"isLoading()\"\n          class=\"absolute inset-0 bg-black/50\"\n        />\n      </div>\n    }\n    @else { <!-- Detail -->\n      <history-detail\n        class=\"flex-1\"\n        [item]=\"detailItem()\"\n        (replay)=\"showReplay($event)\"\n        (share)=\"showShare($event)\"\n      />\n      @if (isLoading()) {\n        <ap-loading-overlay class=\"absolute inset-0 bg-black/50\"/>\n      }\n    }\n\n    <!-- Share Window -->\n    <div *ngIf=\"isShare()\">\n      <ap-history-popup-share\n        class=\"absolute inset-0 z-overlay\"\n        [header]=\"'share_title' | appI18n:'Share'\"\n        [linkLabel]=\"'history_link_game' | appI18n:'Copy Link'\"\n        (close)=\"isShare.set(false)\"\n        (copyLink)=\"onCopyLinkRequest($event)\"\n        [item]=\"this.sharedItem()\"/>\n    </div>\n  </div>\n</ap-ui-frame-page>\n\n<!-- Replay Viewer Component -->\n<history-replay-viewer\n  [showConfirmDialog]=\"showReplayConfirm()\"\n  [popupLabel]=\"replayPopupLabel()\"\n  [popupHintReplay]=\"replayPopupHint()\"\n  [cancelLabel]=\"replayCancelLabel()\"\n  [confirmLabel]=\"replayConfirmLabel()\"\n  [showWatchAgain]=\"true\"\n  [showCopyLink]=\"true\"\n  [isReplayPanel]=\"isReplayPanel()\"\n  [gameName]=\"replayGameName()\"\n  (confirmReplayRequest)=\"onReplayConfirmRequest()\"\n  (cancelReplay)=\"onReplayCancel()\"\n  (copyLinkRequest)=\"onCopyLinkRequest(replayItem())\"\n  (close)=\"onReplayClose()\"\n/>\n" }]
    }], null, { replayViewerComponent: [{
            type: ViewChild,
            args: [HistoryReplayViewerComponent]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HistoryListComponent, { className: "HistoryListComponent", filePath: "src/app/pages/history-list/history-list.component.ts", lineNumber: 42 }); })();
//# sourceMappingURL=history-list.component.js.map