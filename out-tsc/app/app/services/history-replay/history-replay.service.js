import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { CommonFunctionService } from '../common-function/common-function.service';
import { LoggerService } from '../logger/logger.service';
import * as i0 from "@angular/core";
/**
 * 歷史記錄 Replay 服務
 * 對應 HistoryFromHttpGet.ts 的功能
 * 處理歷史記錄和 Replay 相關的業務邏輯
 */
export class HistoryReplayService {
    commonFunc = inject(CommonFunctionService);
    logger = inject(LoggerService);
    http = inject(HttpClient);
    // 對應原始碼中的常數
    TICKET_NO_KEY = 'ticketno';
    ENCRYPTED_REPLAY_TICKET_KEY = 'replayticket';
    //  API share 後得到的網址, 傳給 game.
    REPLAY_URL_KEY = 'replayurl';
    // leaderboadr replay.傳給 cocos 純重播..
    ENCRYPTED_LEADERBOARD_REPLAY_TICKET_KEY = 'replayleader';
    // leaderboadr replay.傳給 cocos 呼叫 api 拿資料重播.
    LEADERBOARD_REPLAY_API_URL_KEY = 'leaderboarddataapiurl';
    //api 拿盤面資料的網址, 傳給 game 呼叫.
    LEADERBOARD_REPLAY_DATA_PATH = '/web/history/leader/replay-data';
    HISTORY_REPLAY_DATA_PATH = '/web/history/replay-data/';
    //告知 server 產生長效 Replay 資料的.
    LEADERBOARD_REPLAY_LINK_PATH = '/web/history/leader/replay-link';
    HISTORY_REPLAY_LINK_PATH = '/web/history/replay-link';
    BUY_FEATURE_DEMO_KEY = 'buyfeaturedemo';
    DEFAULT_ENCRYPTION_KEY = 'qoo';
    /**
     * 產生加密的 Replay 地址
     * 對應 GetEncryptedReplayAddress
     * @param ticket Ticket 編號
     * @param platformName 平台名稱
     * @param encryptionKey 加密金鑰 (預設 "qoo")
     * @returns 完整的 Replay URL
     */
    getEncryptedReplayAddress(gameId, ticket, platformName, encryptionKey = this.DEFAULT_ENCRYPTION_KEY) {
        try {
            // 建立資料物件
            const historyData = {
                platform: platformName,
                ticketNo: ticket,
                replay: 'true',
                encoderequired: '1',
                env: undefined
            };
            // show before decode result.
            // 加密並轉換為 Base64
            const encryptedParams = this.commonFunc.objectToBase64StringEncrypted(historyData, encryptionKey);
            if (!encryptedParams) {
                this.logger.error('Failed to encrypt replay parameters');
                return null;
            }
            //parm.
            //test and show decode result.
            // const decrypted = this.decryptReplayTicket(encryptedParams);
            // if (!decrypted) {
            //   this.logger.error('Failed to decrypt replay parameters');
            //   return null;
            // }
            // // show decode result.
            // this.logger.log('Decrypted:', decrypted);
            // 組成 URL
            // 1. 準備 URL 參數：將 gameId 設定為目標遊戲
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set('gameId', gameId);
            // 2. 建立基礎 URL：網域 + 遊戲路徑 + 查詢參數
            const origin = window.location.origin;
            const gamePath = `/${gameId}/index.html`;
            const queryString = urlParams.toString();
            const baseUrl = `${origin}${gamePath}?${queryString}`;
            // 3. 建立 Replay 參數
            const replayParam = `${this.ENCRYPTED_REPLAY_TICKET_KEY}=${encryptedParams}`;
            // 4. 組合完整的 Replay URL
            const finalUrl = `${baseUrl}&${replayParam}`;
            return finalUrl;
        }
        catch (e) {
            this.logger.error('Error generating encrypted replay address:', e);
            return null;
        }
    }
    /**
     * 產生加密的 Leaderboard Replay 地址
     * 對應 GetEncryptedLeaderboardReplayAddress
     * @param ticket Ticket 編號
     * @param platformName 平台名稱
     * @param encryptionKey 加密金鑰 (預設 "qoo")
     * @returns 完整的 Leaderboard Replay URL
     */
    getEncryptedLeaderboardReplayAddress(gameId, ticket, platformName, multiplier, replayType, accountID, encryptionKey = this.DEFAULT_ENCRYPTION_KEY) {
        try {
            // 建立資料物件
            const historyData = {
                PlatformCode: platformName,
                TicketNo: ticket,
                Multiplier: multiplier,
                GameCode: gameId,
                ReplayType: replayType,
                AccountID: accountID
            };
            this.logger.log('Original History Data:', historyData); // show before decode result.
            // show before decode result.
            // 加密並轉換為 Base64
            const encryptedParams = this.commonFunc.objectToBase64StringEncrypted(historyData, encryptionKey);
            if (!encryptedParams) {
                this.logger.error('Failed to encrypt replay parameters');
                return null;
            }
            //parm.
            // //test and show decode result.
            // const decrypted = this.decryptReplayTicket(encryptedParams);
            // if (!decrypted) {
            //   this.logger.error('Failed to decrypt replay parameters');
            //   return null;
            // }
            // // show decode result.
            // this.logger.log('Decrypted:', decrypted);
            // 組成 URL
            // 1. 準備 URL 參數：將 gameId 設定為目標遊戲
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set('gameId', gameId);
            // 2. 建立基礎 URL：網域 + 遊戲路徑 + 查詢參數
            const origin = window.location.origin;
            const gamePath = `/${gameId}/index.html`;
            const queryString = urlParams.toString();
            const baseUrl = `${origin}${gamePath}?${queryString}`;
            // 3. 建立 Leaderboard Replay 參數
            const replayTicketParam = `${this.ENCRYPTED_LEADERBOARD_REPLAY_TICKET_KEY}=${encryptedParams}`;
            // 4. 建立 API URL 參數
            const apiOriginUrl = this.getApiOrigin();
            const apiUrl = `${apiOriginUrl}${this.LEADERBOARD_REPLAY_DATA_PATH}`;
            const apiUrlParam = `${this.LEADERBOARD_REPLAY_API_URL_KEY}=${apiUrl}`;
            // 5. 組合完整的 Leaderboard Replay URL
            const finalUrl = `${baseUrl}&${replayTicketParam}&${apiUrlParam}`;
            return finalUrl;
        }
        catch (e) {
            this.logger.error('Error generating encrypted leaderboard replay address:', e);
            return null;
        }
    }
    /**
     * 產生 Buy Feature Demo 地址
     * 對應 GetBuyFeatureDemoAddress
     * @param buyFeatureIndex Buy Feature 索引
     * @param gameId 遊戲 ID
     * @param pid 平台 ID
     * @param brand 品牌
     * @param site 站點
     * @returns 完整的 Buy Feature Demo URL
     */
    GetBuyFeatureDemoAddress(buyFeatureIndex, gameId, pid, brand, site) {
        // 1. 準備 URL 參數：將 gameId 設定為目標遊戲
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('gameId', gameId);
        // 2. 添加 Buy Feature 相關參數
        urlParams.set('platform', pid);
        urlParams.set('brand', brand);
        urlParams.set('site', site);
        urlParams.set(this.BUY_FEATURE_DEMO_KEY, buyFeatureIndex.toString());
        // 3. 建立完整 URL：網域 + 遊戲路徑 + 查詢參數
        const origin = window.location.origin;
        const gamePath = `/${gameId}/index.html`;
        const queryString = urlParams.toString();
        const finalUrl = `${origin}${gamePath}?${queryString}`;
        return finalUrl;
    }
    /**
     * 解析加密的 Replay Ticket
     * @param encryptedTicket 加密的 Ticket 字串
     * @param encryptionKey 解密金鑰 (預設 "qoo")
     * @returns 解密後的資料物件
     */
    decryptReplayTicket(encryptedTicket, encryptionKey = this.DEFAULT_ENCRYPTION_KEY) {
        return this.commonFunc.base64StringToObjectDecrypted(encryptedTicket, encryptionKey);
    }
    /**
     * 從 URL 參數中取得 Replay 資訊
     * @returns Replay 資訊物件，如果不存在則返回 null
     */
    getReplayInfoFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const encryptedTicket = params.get(this.ENCRYPTED_REPLAY_TICKET_KEY);
        if (encryptedTicket) {
            return this.decryptReplayTicket(encryptedTicket);
        }
        return null;
    }
    /**
     * 取得 API Origin URL
     * 如果是在 localhost 環境則回傳開發環境的 URL
     * @returns Origin URL
     */
    getApiOrigin() {
        let origin = window.location.origin;
        if (origin.includes('localhost')) {
            origin = 'https://dev.diresoft.net';
        }
        return origin;
    }
    /**
     * 查詢 Ticket URL
     * @param platform 平台名稱
     * @param ticketNo 票號
     * @returns 回傳 URL 字串
     */
    async QueryHistoryTicketShareDataUrl(platform, ticketNo) {
        try {
            const origin = this.getApiOrigin();
            // 呼叫 API
            const apiUrl = origin + `${this.HISTORY_REPLAY_LINK_PATH}?platform=${platform}&ticketNo=${ticketNo}`;
            const response = await firstValueFrom(this.http.get(apiUrl));
            //https://dev.diresoft.net/replay/02b86054b74eeb581e98ca4b89e9cff71a7c210fb9df02df7c3ebd3ce1451293"
            let fixurl = origin + this.HISTORY_REPLAY_DATA_PATH + response.url;
            return fixurl;
        }
        catch (error) {
            this.logger.error('Error querying ticket URL:', error);
            return '';
        }
    }
    /**
     * 查詢 Leaderboard Ticket URL (使用 POST)
     * @param gameId 遊戲 ID
     * @param platform 平台名稱
     * @param ticketNo 票號
     * @param multiplier 倍數
     * @param replayType Replay 類型
     * @param accountID 帳號 ID
     * @returns 回傳 URL 字串
     */
    async QueryLeaderboardTicketShareDataUrl(gameId, platform, ticketNo, multiplier, replayType, accountID) {
        try {
            // 建立 POST 資料物件
            const leaderboardData = {
                PlatformCode: platform,
                TicketNo: ticketNo,
                Multiplier: multiplier,
                GameCode: gameId,
                ReplayType: replayType,
                AccountID: accountID
            };
            const origin = this.getApiOrigin();
            // 呼叫 API (使用 POST 方法)
            const apiUrl = origin + this.LEADERBOARD_REPLAY_LINK_PATH;
            const response = await firstValueFrom(this.http.post(apiUrl, leaderboardData));
            if (!response.url) {
                this.logger.error('API response does not contain URL');
                return '';
            }
            // 拼接 URL
            let fixurl = origin + this.HISTORY_REPLAY_DATA_PATH + response.url;
            return fixurl;
        }
        catch (error) {
            this.logger.error('Error querying leaderboard ticket URL:', error);
            return '';
        }
    }
    /**
     * 產生 History Replay 分享地址
     * @param gameId 遊戲 ID
     * @param platformName 平台名稱
     * @param ticket Ticket 編號
     * @returns 完整的分享 URL
     */
    async GetShareHistoryReplayAddress(gameId, platformName, ticket) {
        try {
            const dataUrl = await this.QueryHistoryTicketShareDataUrl(platformName, ticket);
            if (!dataUrl) {
                this.logger.error('Failed to get history replay data URL');
                return null;
            }
            // 組成 URL
            // 1. 準備 URL 參數：將 gameId 設定為目標遊戲
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set('gameId', gameId);
            urlParams.set('panelmode', 'replay'); // 額外設定 panelmode 參數為 replay，讓 ReplayLayout 顯示 replay panel
            // 2. 建立基礎 URL：網域 + 遊戲路徑 + 查詢參數
            const origin = window.location.origin;
            const gamePath = `/launch/replay`;
            const queryString = urlParams.toString();
            const baseUrl = `${origin}${gamePath}?${queryString}`;
            // 3. 拼接參數
            const finalURL = `${baseUrl}&${this.REPLAY_URL_KEY}=${dataUrl}`;
            return finalURL;
        }
        catch (error) {
            this.logger.error('Error generating history replay share address:', error);
            return null;
        }
    }
    async GetShareLeaderboardReplayAddress(gameId, platformName, ticket, multiplier, replayType, accountID) {
        const dataUrl = await this.QueryLeaderboardTicketShareDataUrl(gameId, platformName, ticket, multiplier, replayType, accountID);
        if (!dataUrl) {
            this.logger.error('Failed to get leaderboard replay data URL');
            return null;
        }
        // 組成 URL
        // 1. 準備 URL 參數：將 gameId 設定為目標遊戲
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('gameId', gameId);
        urlParams.set('panelmode', 'replay'); // 額外設定 panelmode 參數為 replay，讓 ReplayLayout 顯示 replay panel
        // 2. 建立基礎 URL：網域 + 遊戲路徑 + 查詢參數
        const origin = window.location.origin;
        const gamePath = `/launch/replay`;
        const queryString = urlParams.toString();
        const baseUrl = `${origin}${gamePath}?${queryString}`;
        // 3. 拼接參數
        let l_strFinalURL = baseUrl + "&" + this.REPLAY_URL_KEY + "=" + dataUrl;
        return l_strFinalURL;
    }
    async GetShareLeaderboardReplayAddress_Legacy(gameId, platformName, ticket, multiplier, replayType, accountID) {
        const dataUrl = await this.QueryLeaderboardTicketShareDataUrl(gameId, platformName, ticket, multiplier, replayType, accountID);
        if (!dataUrl) {
            this.logger.error('Failed to get leaderboard replay data URL');
            return null;
        }
        // 組成 URL
        // 1. 準備 URL 參數：將 gameId 設定為目標遊戲
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('gameId', gameId);
        // 2. 建立基礎 URL：網域 + 遊戲路徑 + 查詢參數
        const origin = window.location.origin;
        const gamePath = `/${gameId}/index.html`;
        const queryString = urlParams.toString();
        const baseUrl = `${origin}${gamePath}?${queryString}`;
        // 3. 拼接參數
        let l_strFinalURL = baseUrl + "&" + this.REPLAY_URL_KEY + "=" + dataUrl;
        return l_strFinalURL;
    }
    static ɵfac = function HistoryReplayService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistoryReplayService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HistoryReplayService, factory: HistoryReplayService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryReplayService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=history-replay.service.js.map