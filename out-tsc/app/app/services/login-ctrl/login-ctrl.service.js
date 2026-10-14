/**
 * 處理登入資料底層服務, 這些都是登入之後無法改變的資訊, 不會用到 signl/observable
 */
import { Injectable } from '@angular/core';
import { LANGUAGE_MAP } from '../user-profile/language.type';
import { useInGameUIlist } from './game-id-list';
import * as i0 from "@angular/core";
import * as i1 from "../query-params/query-params.service";
export class LoginCtrlService {
    query;
    _authToken = null;
    /** 取得登入用的 Token */
    get authToken() { return this._authToken; }
    _socketUrl = null;
    /** 取得 socket 連接的 URL */
    get socketUrl() { return this._socketUrl; }
    _gameId = null;
    /** 取得遊戲 ID */
    get gameId() { return this._gameId; }
    _language = 'en';
    /** 取得語言設定 */
    get language() { return this._language; }
    /** UI 模式對應表 */
    uiModeMap = {
        '0': 'in-game',
        '1': 'html'
    };
    _uimode = null;
    /** 取得 UI 模式 */
    get uimode() { return this._uimode; }
    _offline = false;
    /** 是否為離線模式 */
    get offline() { return this._offline; }
    _assetUrl = '';
    /** asset URL 的domain name*/
    get assetUrl() { return this._assetUrl; }
    constructor(query) {
        this.query = query;
        this._authToken = sessionStorage.getItem("auth") || null;
        this._socketUrl = sessionStorage.getItem("PROXY_URL") || null;
        // 預設是目前的domain name
        this._assetUrl = window.location.origin;
        this._gameId = query.gameId;
        this._language = LANGUAGE_MAP[query.lang?.toLowerCase() || 'en'];
        // 根據 query 參數決定 ui 模式, 預設為null
        this._uimode = query.uimode ? this.uiModeMap[query.uimode] : null;
    }
    /** 設定登入用的 Token */
    setAuthToken(token) {
        this._authToken = token;
        sessionStorage.setItem("auth", token);
    }
    /** 設定 socket 連接的 URL */
    setSocketUrl(url) {
        this._socketUrl = url;
        sessionStorage.setItem("PROXY_URL", url);
    }
    /** 設定 asset URL 的 domain name */
    setAssetUrl(url) {
        this._assetUrl = url;
    }
    /** 設定語言 */
    setLanguage(lang) {
        this._language = lang;
    }
    /** 設定遊戲 ID */
    setGameId(gameId) {
        this._gameId = gameId;
    }
    /** 設定 UI 模式 */
    setUIMode(mode) {
        this._uimode = mode;
    }
    /** 設定是否為離線模式 */
    setOffline(offline) {
        this._offline = offline;
    }
    /** 取得目前的登入設定 */
    get setting() {
        return {
            gameId: this._gameId || '',
            socketUrl: this._socketUrl || '',
            assetUrl: this._assetUrl || '',
            authToken: this._authToken || '',
            language: this._language,
            offline: this._offline
        };
    }
    deleteSession() {
        sessionStorage.removeItem("auth");
        sessionStorage.removeItem("PROXY_URL");
        this._authToken = null;
        this._socketUrl = null;
        this._assetUrl = '';
    }
    /** 目前的遊戲是不是使用舊的 in-game UI */
    isUseInGameUI() {
        return useInGameUIlist.includes(this._gameId || '');
    }
    isUseHtmlUI() {
        return !this.isUseInGameUI();
    }
    /** 需要轉向login頁面 */
    get needLogin() {
        if (this.offline)
            return false; // 離線模式不需要登入
        else
            return this._authToken === null || this._socketUrl === null || this._gameId === null; // 非離線模式需要這些資料
    }
    static ɵfac = function LoginCtrlService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginCtrlService)(i0.ɵɵinject(i1.QueryParamsService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoginCtrlService, factory: LoginCtrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginCtrlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.QueryParamsService }], null); })();
//# sourceMappingURL=login-ctrl.service.js.map