import { Injectable, signal, computed, inject } from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../logger/logger.service';
import { LoginCtrlService } from '../login-ctrl/login-ctrl.service';
import * as i0 from "@angular/core";
/**
 * 多語言翻譯服務
 * 提供類似 NGX-Translate 的 API
 */
export class AppI18nService {
    http = inject(HttpClient);
    logger = inject(LoggerService);
    login = inject(LoginCtrlService);
    /** 遊戲多語系文字 */
    gameWordList = signal(null);
    /** 通用文字 */
    commonStringList = signal(null);
    /** 在localhost執行的時候會改寫這個 */
    assetUrl = '';
    constructor() {
        this.waitCommonStringList(this.login.language);
        this.waitGameWordList(this.login.gameId || '', this.login.language);
    }
    /** 下載遊戲用字串 */
    async waitGameWordList(gameId, language) {
        const cached = this.gameWordList();
        if (cached)
            return cached;
        const url = `${this.assetUrl}/system/game_word/${gameId}/${language}/game_word.json`;
        const data = await firstValueFrom(this.http.get(url).pipe(catchError(err => {
            this.logger.warn('Game word mapping file Load Failed:');
            return of({});
        }) // 回傳空物件當作預設值
        ));
        this.gameWordList.set(data);
        return data;
    }
    getGameWordList() {
        return this.gameWordList();
    }
    /** 獲取遊戲字串 */
    gameStr(value) {
        const list = this.gameWordList();
        if (!list) {
            this.logger.warn('Game word list not loaded yet, please call waitGameWordList() first');
            return null;
        }
        return list[value] ?? null;
    }
    /** 獲取遊戲翻譯文字（同步） */
    instantGame(key, defaultValue) {
        return this.gameStr(key) || defaultValue || key;
    }
    /** 獲取遊戲翻譯文字（與 NGX-Translate 相容） */
    getGame(key, defaultValue) {
        return this.instantGame(key, defaultValue);
    }
    /** 創建響應式遊戲翻譯 Computed */
    computedGame(key, defaultValue) {
        return computed(() => this.instantGame(key, defaultValue));
    }
    /** 下載共用字串 */
    async waitCommonStringList(language) {
        const cached = this.commonStringList();
        if (cached)
            return cached;
        const url = `${this.assetUrl}/system/game_word/CommonString/${language}/game_common_word.json`;
        this.logger.apiLog('Loading common string list from', url);
        const data = await firstValueFrom(this.http.get(url).pipe(catchError(err => {
            this.logger.warn('Common string mapping file Load Failed:');
            return of({});
        }) // 回傳空物件當作預設值
        ));
        this.commonStringList.set(data);
        return data;
    }
    /** 獲取通用字串 */
    commonStr(value) {
        // 讀取失敗回傳原始值
        const list = this.commonStringList();
        if (!list) {
            this.logger.warn('Common string list not loaded yet, please call waitCommonStringList() first');
            return null;
        }
        return list[value] ?? null;
    }
    /**
     * 獲取翻譯文字（同步）
     * @param key - 翻譯鍵值
     * @param defaultValue - 預設值（可選）
     * @returns 翻譯後的文字
     * @example
     * this.appI18n.instant('leaderBoard_title') // → '排行榜'
     * this.appI18n.instant('unknown_key', '預設文字') // → '預設文字'
     */
    instant(key, defaultValue) {
        return this.commonStr(key) || defaultValue || key;
    }
    /**
     * 獲取翻譯文字（返回 Observable，保持與 NGX-Translate 相容）
     * @param key - 翻譯鍵值
     * @param defaultValue - 預設值（可選）
     * @returns 翻譯後的文字（Observable）
     */
    get(key, defaultValue) {
        return this.instant(key, defaultValue);
    }
    /**
     * 創建響應式翻譯 Computed
     * @param key - 翻譯鍵值
     * @param defaultValue - 預設值（可選）
     * @returns Computed Signal
     * @example
     * readonly title = this.appI18n.computed('leaderBoard_title', '排行榜');
     * // 在模板中使用：{{ title() }}
     */
    computed(key, defaultValue) {
        return computed(() => this.instant(key, defaultValue));
    }
    /**
     * 批量獲取翻譯
     * @param keys - 翻譯鍵值陣列
     * @returns 翻譯結果物件
     * @example
     * const translations = this.appI18n.getMany(['key1', 'key2']);
     * // { key1: '翻譯1', key2: '翻譯2' }
     */
    getMany(keys) {
        const result = {};
        keys.forEach(key => {
            result[key] = this.instant(key);
        });
        return result;
    }
    static ɵfac = function AppI18nService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppI18nService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppI18nService, factory: AppI18nService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppI18nService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=app-i18n.service.js.map