import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class LoggerService {
    logEnabled = signal(true);
    iframeLogEnabled = signal(false);
    iframeSocketLogEnabled = signal(false);
    iframeReplayLogEnabled = signal(false);
    iframeHistoryLogEnabled = signal(false);
    apiLogEnabled = signal(true);
    leaderboardLogEnabled = signal(false);
    rewardSystemLogEnabled = signal(false);
    campaignLogEnabled = signal(true);
    constructor() { }
    /** 用於記錄一般訊息 */
    log(...args) {
        if (!this.logEnabled())
            return;
        console.log("[LOG]", ...args);
    }
    /** 用於記錄來自 iframe 的訊息 */
    iframeLog(...args) {
        if (!this.iframeLogEnabled())
            return;
        console.log("[IFRAME]", ...args);
    }
    iframeSocketLog(...args) {
        if (!this.iframeSocketLogEnabled())
            return;
        console.log("[IFRAME-SOCKET]", ...args);
    }
    /** 用於記錄 replay iframe 的訊息 */
    iframeReplayLog(...args) {
        if (!this.iframeReplayLogEnabled())
            return;
        console.log("[IFRAME-REPLAY]", ...args);
    }
    /** 用於記錄 history iframe 的訊息 */
    iframeHistoryLog(...args) {
        if (!this.iframeHistoryLogEnabled())
            return;
        console.log("[IFRAME-HISTORY]", ...args);
    }
    /** 用於記錄 API 訊息 */
    apiLog(...args) {
        if (!this.apiLogEnabled())
            return;
        console.log("[API]", ...args);
    }
    /** 用於記錄排行榜訊息 */
    leaderboardLog(...args) {
        if (!this.leaderboardLogEnabled())
            return;
        console.log("[LEADERBOARD]", ...args);
    }
    /** 用於記錄獎勵系統訊息 */
    rewardSystemLog(...args) {
        if (!this.rewardSystemLogEnabled())
            return;
        console.log("[REWARD-SYSTEM]", ...args);
    }
    /** 用於記錄活動訊息 */
    campaignLog(...args) {
        if (!this.campaignLogEnabled())
            return;
        console.log("[CAMPAIGN]", ...args);
    }
    warn(...args) {
        // 警告通常不需要被關閉，或者有獨立開關
        console.warn(...args);
    }
    error(...args) {
        // 錯誤通常不需要被關閉，或者有獨立開關
        console.error(...args);
    }
    static ɵfac = function LoggerService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoggerService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=logger.service.js.map