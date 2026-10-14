import { computed, inject, Injectable, signal } from '@angular/core';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';
import { LoggerService } from '../logger/logger.service';
import { calc } from '../user-profile/user-profile.function';
import * as i0 from "@angular/core";
export class RsBetaCtrlService {
    game = inject(GameIframeCtrlService);
    logger = inject(LoggerService);
    rsIconName = signal('');
    rsIconPath = computed(() => this.rsIconName() ? this.toRSItemIconAssetDownloadUrl(this.rsIconName()) : '');
    rsSpinButtonMode = signal(null);
    rsTotalSpins = signal(0);
    rsCurrentSpins = signal(0);
    rsDisplayBet = signal(0);
    constructor() {
        this.game.RSEnterRSItemSpinMode$.subscribe(this.onRSEnterRSItemSpinMode.bind(this));
        this.game.RSLeaveRSItemSpinMode$.subscribe(this.onRSLeaveRSItemSpinMode.bind(this));
        this.game.RSUpdateUseItemCount$.subscribe(this.onRSUpdateUseItemCount.bind(this));
    }
    onRSEnterRSItemSpinMode(message) {
        console.log('Enter RS Item Spin Mode:', message);
        this.logger.rewardSystemLog('Enter RS Item Spin Mode:', message);
        //this.bottomPanel.showRsPanel();
        this.rsIconName.set(message.iconName);
        this.rsSpinButtonMode.set(message.BuyfeatureName ? 'free-game' : 'double-chance');
        // 初始化 RS spins 計數
        this.rsTotalSpins.set(message.UseAmout);
        this.rsCurrentSpins.set(message.UseAmout);
        // 設定 RS 的投注金額（使用 s2c 轉換）
        this.rsDisplayBet.set(calc.s2c(message.BetValue));
    }
    onRSLeaveRSItemSpinMode(shouldLeave) {
        this.logger.rewardSystemLog('Leave RS Item Spin Mode:', shouldLeave);
        //this.bottomPanel.hideRsPanel();
        this.rsIconName.set('');
        this.rsSpinButtonMode.set(null);
        this.rsTotalSpins.set(0);
        this.rsCurrentSpins.set(0);
        this.rsDisplayBet.set(0);
    }
    onRSUpdateUseItemCount(message) {
        this.logger.rewardSystemLog('RS Update Use Item Count:', message);
        if (message.total !== undefined) {
            this.rsTotalSpins.set(message.total);
        }
        if (message.remaining !== undefined) {
            this.rsCurrentSpins.set(message.remaining);
        }
    }
    toRSItemIconAssetDownloadUrl(imgname) {
        let ret = "";
        // ///usr/share/nginx/html/games/system/Info/RewardSystem/store/item_icon
        // ret = l_strURL + "/system/Info/RewardSystem/store/item_icon/" + imgname + ".png" + verstr;
        ret = this.toIMGDataAssetDownloadUrl("/system/Info/RewardSystem/store/item_icon/", imgname);
        return ret;
    }
    toIMGDataAssetDownloadUrl(relpath, imgname) {
        let ret = "";
        let l_strURL = location.origin;
        if (l_strURL.includes("192.168") || l_strURL.includes("localhost")) {
            l_strURL = "https://dev.diresoft.net/";
        }
        else {
            //do this?
            //let l_strURL = InfoMgr.CDN_URL;
            l_strURL = window.location.origin;
        }
        ///usr/share/nginx/html/games/system/Info/RewardSystem/common/openrs_icon
        ret = l_strURL + relpath + imgname + ".png";
        return ret;
    }
    static ɵfac = function RsBetaCtrlService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RsBetaCtrlService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RsBetaCtrlService, factory: RsBetaCtrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RsBetaCtrlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=rs-beta-ctrl.service.js.map