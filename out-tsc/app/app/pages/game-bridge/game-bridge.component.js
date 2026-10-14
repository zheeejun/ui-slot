import { Component, computed, inject, signal } from '@angular/core';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { EventCenterComponent } from '../event-center/event-center.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { TrnAllComponent } from '../trn-all/trn-all.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { QueryParamsService } from '../../services/query-params/query-params.service';
import { ApHistoryReplayTopBarComponent } from '../../components/ap-history-replay-top-bar/ap-history-replay-top-bar.component';
import { GameIframeComponent } from "../game-iframe/game-iframe.component";
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { ApUiLogoNameComponent } from '../../components/ap-ui-logo-name/ap-ui-logo-name.component';
import { ApUiGameNameComponent } from '../../components/ap-ui-game-name/ap-ui-game-name.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { CampaignCtrlService } from '../../services/campaign-ctrl/campaign-ctrl.service';
import * as i0 from "@angular/core";
function GameBridgeComponent_Conditional_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-history-replay-top-bar", 4);
} }
function GameBridgeComponent_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "trn-all", 0);
} }
function GameBridgeComponent_Conditional_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-ui-logo-name", 8);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("top-5", ctx_r0.user.trnSetting());
} }
function GameBridgeComponent_Conditional_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-ui-game-name", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("top-5", ctx_r0.user.trnSetting());
    i0.ɵɵproperty("gameName", ctx_r0.getGameName());
} }
function GameBridgeComponent_Conditional_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-center", 7);
} }
function GameBridgeComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵconditionalCreate(1, GameBridgeComponent_Conditional_2_Conditional_1_Template, 1, 0, "ap-history-replay-top-bar", 4);
    i0.ɵɵconditionalCreate(2, GameBridgeComponent_Conditional_2_Conditional_2_Template, 1, 0, "trn-all", 0);
    i0.ɵɵconditionalCreate(3, GameBridgeComponent_Conditional_2_Conditional_3_Template, 1, 2, "ap-ui-logo-name", 5);
    i0.ɵɵconditionalCreate(4, GameBridgeComponent_Conditional_2_Conditional_4_Template, 1, 3, "ap-ui-game-name", 6);
    i0.ɵɵconditionalCreate(5, GameBridgeComponent_Conditional_2_Conditional_5_Template, 1, 0, "event-center", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("hidden", ctx_r0.hideAll());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showHistoryReplayTopBar() ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showTournament() ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showAPLogo() ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showGameLogo() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showEventCenter() ? 5 : -1);
} }
/**
 * 遊戲橋接模式(bridge)的組件，請注意跟覆蓋模式(cover)不同的行為要寫在這邊, 方便跟覆蓋模式方開維護
 * 如果兩者行為通用的話，可以寫在組件裡面。
 */
export class GameBridgeComponent {
    appI18n = inject(AppI18nService);
    login = inject(LoginCtrlService);
    game = inject(GameIframeCtrlService);
    user = inject(UserProfileService);
    api = inject(AppInterfaceService);
    query = inject(QueryParamsService);
    trn = inject(TrnCtrlService);
    campaign = inject(CampaignCtrlService);
    eventCenter = inject(EventCenterCtrlService);
    /** 顯示所有介面, 給Loading Finished使用的 */
    showAll = signal(false);
    /** 隱藏所有遊戲iframe之外的物件, 是用hidden, 不是用@if */
    hideAll = signal(false);
    /** 顯示活動中心 */
    showEventCenter = computed(() => this.eventCenter.isVisible());
    /** 顯示Tournament浮動介面 */
    showTournament = computed(() => { return this.trn.enabled(); });
    /** 顯示AP Logo */
    showAPLogo = signal(true);
    /** 顯示Game Logo */
    showGameLogo = signal(true);
    getGameName = this.appI18n.computed(this.login.gameId ?? '', this.login.gameId ?? '');
    /** 顯示歷史回放頂部欄 */
    showHistoryReplayTopBar = signal(false);
    constructor() { }
    ngOnInit() {
        // 偵測遊戲iframe的操作
        this.game.buyFeature$.subscribe(this.onGameBuyFeature.bind(this));
        this.game.OpenPromo$.subscribe(this.onGameOpenPromo.bind(this));
        this.game.loadingFinished$.subscribe(this.onGameLoadingFinished.bind(this));
        this.game.GameMessageBox$.subscribe(this.onGameMessageBox.bind(this));
    }
    ngAfterViewInit() { }
    /** 偵測遊戲讀取完成的時候 */
    onGameLoadingFinished() {
        // 遊戲讀取完成進入遊戲後，顯示所有的UI元件
        this.showAll.set(true);
    }
    /** 遊戲點擊Open Promo */
    onGameOpenPromo() {
        this.eventCenter.open('campaign');
    }
    /** 遊戲點擊buy Feature */
    onGameBuyFeature() {
        this.eventCenter.open('buy-feature');
    }
    /** 遊戲顯示訊息框 */
    onGameMessageBox() {
        this.eventCenter.close();
    }
    static ɵfac = function GameBridgeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GameBridgeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GameBridgeComponent, selectors: [["game-bridge"]], decls: 3, vars: 1, consts: [[1, "absolute"], ["uiMode", "ap-bridge", 1, "absolute", "inset-0"], [1, "contents", 3, "hidden"], [1, "contents"], [1, "absolute", "top-0", "left-0", "right-0", "z-50"], [1, "absolute", "top-1", "right-1", 3, "top-5"], [1, "absolute", "top-1", "left-1", 3, "top-5", "gameName"], [1, "absolute", "inset-0", "animate-fade", "animate-duration-300"], [1, "absolute", "top-1", "right-1"], [1, "absolute", "top-1", "left-1", 3, "gameName"]], template: function GameBridgeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "ap-loading-overlay", 0)(1, "game-iframe", 1);
            i0.ɵɵconditionalCreate(2, GameBridgeComponent_Conditional_2_Template, 6, 7, "div", 2);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showAll() ? 2 : -1);
        } }, dependencies: [EventCenterComponent, TrnAllComponent, ApHistoryReplayTopBarComponent, GameIframeComponent, ApLoadingOverlayComponent, ApUiLogoNameComponent, ApUiGameNameComponent], styles: ["[_nghost-%COMP%]{\n  display: block;\n  background-color: black;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GameBridgeComponent, [{
        type: Component,
        args: [{ selector: 'game-bridge', imports: [EventCenterComponent, TrnAllComponent, ApHistoryReplayTopBarComponent, GameIframeComponent, ApLoadingOverlayComponent, ApUiLogoNameComponent, ApUiGameNameComponent], template: "\n<ap-loading-overlay class=\"absolute\"/>\n<game-iframe class=\"absolute inset-0\" uiMode=\"ap-bridge\"/>\n@if (showAll()) {\n  <div class=\"contents\" [class.hidden]=\"hideAll()\">\n    <!-- Replay\u555F\u52D5\u63D0\u793A -->\n    @if (showHistoryReplayTopBar()) { <ap-history-replay-top-bar class=\"absolute top-0 left-0 right-0 z-50\" /> }\n    <!-- Tournament \u76F8\u95DC-->\n    @if (showTournament()) { <trn-all class=\"absolute\"  /> }\n    @if (showAPLogo()){<ap-ui-logo-name class=\"absolute top-1 right-1\" [class.top-5]=\"user.trnSetting()\"/>}\n    @if (showGameLogo()){<ap-ui-game-name class=\"absolute top-1 left-1\" [class.top-5]=\"user.trnSetting()\" [gameName]=\"getGameName()\"/>}\n    <!-- Event Center -->\n    @if (showEventCenter()) {\n      <event-center class=\"absolute inset-0 animate-fade animate-duration-300\"/>\n    }\n  </div>\n}\n", styles: [":host{\n  display: block;\n  background-color: black;\n}"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GameBridgeComponent, { className: "GameBridgeComponent", filePath: "src/app/pages/game-bridge/game-bridge.component.ts", lineNumber: 36 }); })();
//# sourceMappingURL=game-bridge.component.js.map