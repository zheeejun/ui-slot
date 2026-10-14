import { Component, inject, ViewChild, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HistoryReplayViewerComponent } from '../../pages/history-replay-viewer/history-replay-viewer.component';
import { LoggerService } from '../../services/logger/logger.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { useInGameUIlist } from '../../services/login-ctrl/game-id-list';
import * as i0 from "@angular/core";
/**
 * ReplayLayoutComponent 獨立的 Replay 頁面入口
 * 讀取 URL query params 決定播放哪段 Replay，
 * 直接驅動 HistoryReplayViewerComponent，無需確認彈窗與關閉按鈕
 *
 * 支援的 query params (與 HistoryReplayService 產生的 URL 對應):
 *   gameId       - 遊戲 ID (必要)
 *   replayticket - 一般 history replay 加密票券
 *   replayleader - Leaderboard replay 加密票券
 *   platform     - 平台名稱
 *   leaderboarddataapiurl - Leaderboard replay 的 API URL
 *   panelmode            - 'replay' 顯示 bottom-panel-replay，'demo'(預設) 顯示 bottom-panel-demo
 *   (其餘 params 原樣帶入遊戲 iframe URL)
 */
export class ReplayLayoutComponent {
    route = inject(ActivatedRoute);
    logger = inject(LoggerService);
    appI18n = inject(AppI18nService);
    login = inject(LoginCtrlService);
    replayViewerComponent;
    // 根據 URL panelmode 參數決定是否顯示 replay panel (含 copy link)
    isReplayPanel = signal(false);
    ngOnInit() {
        // 在 OnInit 中讀取 panelmode 參數
        const params = this.route.snapshot.queryParamMap;
        const panelMode = params.get('panelmode');
        // panelMode === 'replay' 時設置為 true，會顯示 copy link UI
        if (panelMode === 'replay') {
            this.isReplayPanel.set(true);
        }
        else {
            this.isReplayPanel.set(false);
        }
    }
    ngAfterViewInit() {
        const params = this.route.snapshot.queryParamMap;
        const gameId = params.get('gameId');
        if (!gameId) {
            this.logger.error('[ReplayLayout] Missing required query param: gameId');
            return;
        }
        // 將 URL 的 query params，除 gameId 外，全部帶入遊戲 iframe URL
        const urlParams = new URLSearchParams();
        for (const key of params.keys) {
            if (key !== 'gameId' && key !== 'panelmode') {
                urlParams.set(key, params.get(key) ?? '');
            }
        }
        const origin = window.location.origin;
        const replayUrl = `${origin}/${gameId}/index.html?${urlParams.toString()}`;
        const isOldGame = useInGameUIlist.includes(gameId || '');
        this.replayViewerComponent?.loadReplayUrl(replayUrl, isOldGame);
    }
    onCopyLinkRequest() {
        // 直接copy當前頁面 URL，因為 URL 已經包含了 replay 的必要參數
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
            this.replayViewerComponent?.showCopyLinkToast();
        });
    }
    static ɵfac = function ReplayLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReplayLayoutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReplayLayoutComponent, selectors: [["replay-layout"]], viewQuery: function ReplayLayoutComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(HistoryReplayViewerComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.replayViewerComponent = _t.first);
        } }, decls: 1, vars: 6, consts: [[1, "absolute", "inset-0", 3, "copyLinkRequest", "showConfirmDialog", "showCloseButton", "showWatchAgain", "showReplayEndCloseButton", "isReplayPanel", "showGameLogo"]], template: function ReplayLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "history-replay-viewer", 0);
            i0.ɵɵlistener("copyLinkRequest", function ReplayLayoutComponent_Template_history_replay_viewer_copyLinkRequest_0_listener() { return ctx.onCopyLinkRequest(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("showConfirmDialog", false)("showCloseButton", false)("showWatchAgain", true)("showReplayEndCloseButton", false)("isReplayPanel", ctx.isReplayPanel())("showGameLogo", false);
        } }, dependencies: [CommonModule, HistoryReplayViewerComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReplayLayoutComponent, [{
        type: Component,
        args: [{ selector: 'replay-layout', imports: [CommonModule, HistoryReplayViewerComponent], template: "<history-replay-viewer class=\"absolute inset-0\"\n  [showConfirmDialog]=\"false\"\n  [showCloseButton]=\"false\"\n  [showWatchAgain]=\"true\"\n  [showReplayEndCloseButton]=\"false\"\n  [isReplayPanel]=\"isReplayPanel()\"\n  [showGameLogo]=false\n  (copyLinkRequest)=\"onCopyLinkRequest()\"\n/>\n\n", styles: ["/* ReplayLayoutComponent styles */\r\n"] }]
    }], null, { replayViewerComponent: [{
            type: ViewChild,
            args: [HistoryReplayViewerComponent]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReplayLayoutComponent, { className: "ReplayLayoutComponent", filePath: "src/app/layouts/replay-layout/replay-layout.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=replay-layout.component.js.map