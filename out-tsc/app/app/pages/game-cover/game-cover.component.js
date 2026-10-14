import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { EventCenterComponent } from '../event-center/event-center.component';
import { HistoryListComponent } from '../history-list/history-list.component';
import { TrnAllComponent } from '../trn-all/trn-all.component';
import { QueryParamsService } from '../../services/query-params/query-params.service';
import { InfoComponent } from '../info/info.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { GameIframeComponent } from '../game-iframe/game-iframe.component';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { BottomPanelComponent } from '../bottom-panel/bottom-panel.component';
import { ApUiLogoNameComponent } from '../../components/ap-ui-logo-name/ap-ui-logo-name.component';
import { ApUiGameNameComponent } from '../../components/ap-ui-game-name/ap-ui-game-name.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { CampaignCtrlService } from '../../services/campaign-ctrl/campaign-ctrl.service';
import { CashDropService } from '../../services/cash-drop/cash-drop.service';
import { CampaignPopupComponent } from '../campaign-popup/campaign-popup.component';
import { BottomPanelPopupComponent } from '../bottom-panel-popup/bottom-panel-popup.component';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import * as i0 from "@angular/core";
function GameCoverComponent_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "trn-all", 4);
} }
function GameCoverComponent_Conditional_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "history-list", 8);
    i0.ɵɵlistener("close", function GameCoverComponent_Conditional_2_Conditional_3_Template_history_list_close_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showHistory.set(false)); });
    i0.ɵɵelementEnd();
} }
function GameCoverComponent_Conditional_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-center", 5);
} }
function GameCoverComponent_Conditional_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "page-info", 9);
    i0.ɵɵlistener("close", function GameCoverComponent_Conditional_2_Conditional_5_Template_page_info_close_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showInfo.set(false)); });
    i0.ɵɵelementEnd();
} }
function GameCoverComponent_Conditional_2_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-ui-logo-name", 10);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("top-5", ctx_r1.user.trnSetting());
} }
function GameCoverComponent_Conditional_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-ui-game-name", 11);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("top-5", ctx_r1.user.trnSetting());
    i0.ɵɵproperty("gameName", ctx_r1.getGameName());
} }
function GameCoverComponent_Conditional_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "campaign-popup", 4);
} }
function GameCoverComponent_Conditional_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bottom-panel-popup", 4);
} }
function GameCoverComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bottom-panel", 2);
    i0.ɵɵlistener("info", function GameCoverComponent_Conditional_2_Template_bottom_panel_info_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showInfo.set(true)); })("history", function GameCoverComponent_Conditional_2_Template_bottom_panel_history_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showHistory.set(true)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵconditionalCreate(2, GameCoverComponent_Conditional_2_Conditional_2_Template, 1, 0, "trn-all", 4);
    i0.ɵɵconditionalCreate(3, GameCoverComponent_Conditional_2_Conditional_3_Template, 1, 0, "history-list", 5);
    i0.ɵɵconditionalCreate(4, GameCoverComponent_Conditional_2_Conditional_4_Template, 1, 0, "event-center", 5);
    i0.ɵɵconditionalCreate(5, GameCoverComponent_Conditional_2_Conditional_5_Template, 1, 0, "page-info");
    i0.ɵɵconditionalCreate(6, GameCoverComponent_Conditional_2_Conditional_6_Template, 1, 2, "ap-ui-logo-name", 6);
    i0.ɵɵconditionalCreate(7, GameCoverComponent_Conditional_2_Conditional_7_Template, 1, 3, "ap-ui-game-name", 7);
    i0.ɵɵconditionalCreate(8, GameCoverComponent_Conditional_2_Conditional_8_Template, 1, 0, "campaign-popup", 4);
    i0.ɵɵconditionalCreate(9, GameCoverComponent_Conditional_2_Conditional_9_Template, 1, 0, "bottom-panel-popup", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.hideAll());
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.hideAll());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showTrn() ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showHistory() ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showEventCenter() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showInfo() ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showAPLogo() ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showGameLogo() ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showCampaignPopup() ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showBottomPanelPopup() ? 9 : -1);
} }
export class GameCoverComponent {
    appI18n = inject(AppI18nService);
    login = inject(LoginCtrlService);
    game = inject(GameIframeCtrlService);
    user = inject(UserProfileService);
    api = inject(AppInterfaceService);
    query = inject(QueryParamsService);
    trn = inject(TrnCtrlService);
    campaign = inject(CampaignCtrlService);
    cashDrop = inject(CashDropService);
    eventCenter = inject(EventCenterCtrlService);
    bottomPanel = inject(BottomPanelService);
    /** 讀取結束, 開啟整個UI介面 */
    showAll = signal(false);
    showBottomPanelPopup = signal(true);
    showEventCenter = computed(() => this.eventCenter.isVisible());
    showHistory = signal(false);
    showInfo = signal(false);
    showAPLogo = signal(true);
    showGameLogo = signal(true);
    getGameName = this.appI18n.computed(this.login.gameId ?? '', this.login.gameId ?? '');
    showTrn = computed(() => this.trn.enabled());
    showCampaignPopup = computed(() => this.campaign.popupEnabled());
    constructor() {
        this.bottomPanel.insufficientBalance$.subscribe(() => {
            this.showBottomPanelPopup.set(true);
        });
    }
    ngOnInit() {
        this.game.loadingFinished$.subscribe(this.onGameLoadingFinished.bind(this));
    }
    ngAfterViewInit() { }
    ngOnDestroy() { }
    onGameLoadingFinished() {
        this.showAll.set(true);
    }
    /** 偵測各種情況, 決定是否關閉目前UI */
    hideAll = computed(() => {
        // 以下幾種情況會關閉UI: "rewardSystemMain", "rewarSystemLevelUp", "cashDropMain", "cashDropDialog", "cashDropPickup"
        const inGamePopupOpen = this.game.popupRewardSystemMain() ||
            this.game.popupRewardSystemLevelUp() ||
            this.game.popupCashDropMain() ||
            this.game.popupCashDropDialog() ||
            this.game.popupCashDropPickup() ||
            this.game.popupFeatureTransition() ||
            this.game.popupBigWinTransition();
        return inGamePopupOpen;
    });
    static ɵfac = function GameCoverComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GameCoverComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GameCoverComponent, selectors: [["game-cover"]], decls: 3, vars: 1, consts: [[1, "absolute"], ["uiMode", "ap-cover", 1, "absolute", "inset-0"], [1, "animate-fade-up", "animate-duration-300", "animate-ease-in", "select-none", 3, "info", "history", "hidden"], [1, "contents", 3, "hidden"], [1, "absolute", "top-0", "left-0"], [1, "absolute", "inset-0"], [1, "absolute", "top-1", "right-1", 3, "top-5"], [1, "absolute", "top-1", "left-1", 3, "top-5", "gameName"], [1, "absolute", "inset-0", 3, "close"], [3, "close"], [1, "absolute", "top-1", "right-1"], [1, "absolute", "top-1", "left-1", 3, "gameName"]], template: function GameCoverComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "ap-loading-overlay", 0)(1, "game-iframe", 1);
            i0.ɵɵconditionalCreate(2, GameCoverComponent_Conditional_2_Template, 10, 10);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showAll() ? 2 : -1);
        } }, dependencies: [CommonModule,
            EventCenterComponent,
            HistoryListComponent,
            InfoComponent,
            GameIframeComponent,
            ApLoadingOverlayComponent,
            TrnAllComponent,
            BottomPanelComponent,
            ApUiLogoNameComponent,
            ApUiGameNameComponent,
            CampaignPopupComponent,
            BottomPanelPopupComponent], styles: ["[_nghost-%COMP%]{\n  display: block;\n  background-color: black;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GameCoverComponent, [{
        type: Component,
        args: [{ selector: 'game-cover', imports: [
                    CommonModule,
                    EventCenterComponent,
                    HistoryListComponent,
                    InfoComponent,
                    GameIframeComponent,
                    ApLoadingOverlayComponent,
                    TrnAllComponent,
                    BottomPanelComponent,
                    ApUiLogoNameComponent,
                    ApUiGameNameComponent,
                    CampaignPopupComponent,
                    BottomPanelPopupComponent,
                ], template: "<ap-loading-overlay class=\"absolute\"/>\n<game-iframe class=\"absolute inset-0\" uiMode=\"ap-cover\"/> \n\n@if (showAll()) {\n    <bottom-panel [hidden]=\"hideAll()\" class=\"animate-fade-up animate-duration-300 animate-ease-in select-none\"\n      (info)=\"showInfo.set(true)\"\n      (history)=\"showHistory.set(true)\"\n    />\n\n  <div class=\"contents\" [hidden]=\"hideAll()\">\n    @if (showTrn()) {<trn-all class=\"absolute top-0 left-0\" />}\n    @if (showHistory()) {<history-list class=\"absolute inset-0\" (close)=\"showHistory.set(false)\" />}\n    @if (showEventCenter()) {<event-center class=\"absolute inset-0\" />}\n    @if (showInfo()) {<page-info (close)=\"showInfo.set(false)\"/>}\n    @if (showAPLogo()){<ap-ui-logo-name class=\"absolute top-1 right-1\" [class.top-5]=\"user.trnSetting()\"/>}\n    @if (showGameLogo()){<ap-ui-game-name class=\"absolute top-1 left-1\" [class.top-5]=\"user.trnSetting()\" [gameName]=\"getGameName()\"/>}\n    @if (showCampaignPopup()) {<campaign-popup class=\"absolute top-0 left-0\"/>}\n    @if (showBottomPanelPopup()){<bottom-panel-popup class=\"absolute top-0 left-0\" />}\n  </div>\n}\n\n\n\n\n\n", styles: [":host{\n  display: block;\n  background-color: black;\n}"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GameCoverComponent, { className: "GameCoverComponent", filePath: "src/app/pages/game-cover/game-cover.component.ts", lineNumber: 47 }); })();
//# sourceMappingURL=game-cover.component.js.map