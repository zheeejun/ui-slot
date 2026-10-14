import { Injectable, inject, signal } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import * as i0 from "@angular/core";
export class StorageCtrlService {
    KEYS = {
        LOGIN_SETTING: 'ap_storage_login_setting',
        CAMPAIGN_GROUPS_CLICKED: 'ap_storage_campaign_groups_clicked',
        TRN_GAME_CONFIRM_DONT_SHOW: 'ap_storage_trn_game_confirm_dont_show',
        TRN_EVENT_RUNNING: 'ap_storage_trn_event_running'
    };
    logger = inject(LoggerService);
    // 用來給偵測用的signal, 實際的值還是存在localStorage裡面
    campaignGroupsClickedSignal = signal(this.getItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED));
    constructor() { }
    // --- 核心 helper 方法 (私有) ---
    setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch (e) {
            this.logger.error('LocalStorage write error', e);
        }
    }
    getItem(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    // --- 使用 Getter / Setter 封裝區塊 ---
    get trnGameConfirmDontShow() {
        return this.getItem(this.KEYS.TRN_GAME_CONFIRM_DONT_SHOW);
    }
    set trnGameConfirmDontShow(value) {
        if (value === null) {
            localStorage.removeItem(this.KEYS.TRN_GAME_CONFIRM_DONT_SHOW);
        }
        else {
            this.setItem(this.KEYS.TRN_GAME_CONFIRM_DONT_SHOW, value);
        }
    }
    get trnEventRunning() {
        return this.getItem(this.KEYS.TRN_EVENT_RUNNING);
    }
    set trnEventRunning(value) {
        if (value === null) {
            localStorage.removeItem(this.KEYS.TRN_EVENT_RUNNING);
        }
        else {
            this.setItem(this.KEYS.TRN_EVENT_RUNNING, value);
        }
    }
    /**
     * Login Setting 存取器
     * 包含 token, url, gameId, uiMode, language 等資訊
     * 如果沒有設定，回傳 null
     * 如果設定為 null，則會從 localStorage 中移除該項目
     */
    get loginSetting() {
        return this.getItem(this.KEYS.LOGIN_SETTING);
    }
    set loginSetting(value) {
        if (value === null) {
            localStorage.removeItem(this.KEYS.LOGIN_SETTING);
        }
        else {
            this.setItem(this.KEYS.LOGIN_SETTING, value);
        }
    }
    get campaignGroupsClicked() {
        return this.getItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED);
    }
    set campaignGroupsClicked(value) {
        // 更新 signal 的值, 讓依賴它的 computed 可以重新計算
        this.campaignGroupsClickedSignal.set(value);
        if (value === null) {
            localStorage.removeItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED);
        }
        else {
            this.setItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED, value);
        }
    }
    // --- 其他工具方法 ---
    /**
     * 部分更新 Login Setting
     * @param partialValue 部分 Login Setting 內容
     */
    patchLoginSetting(partialValue) {
        const current = this.loginSetting;
        if (current) {
            this.loginSetting = { ...current, ...partialValue };
        }
    }
    /**
     * 清除所有 LocalStorage (請謹慎使用)
     */
    clearAll() {
        localStorage.clear();
    }
    static ɵfac = function StorageCtrlService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StorageCtrlService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorageCtrlService, factory: StorageCtrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorageCtrlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=storage-ctrl.service.js.map