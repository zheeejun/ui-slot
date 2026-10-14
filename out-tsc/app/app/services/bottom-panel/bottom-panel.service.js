import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/app-environment';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';
import { createApWebMessage } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebMessages';
import { UserProfileService } from '../user-profile/user-profile.service';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import * as i0 from "@angular/core";
export class BottomPanelService {
    game = inject(GameIframeCtrlService);
    api = inject(AppInterfaceService);
    user = inject(UserProfileService);
    /** Debug Panel用: 強制觸發Panel Status */
    debugPanelStatusSubject = new Subject();
    /** Debug Panel用: 強制觸發Panel Status */
    get debugPanelStatus$() { return this.debugPanelStatusSubject.asObservable(); }
    /** Debug Panel用: 強制觸發Spin Button Mode */
    debugSpinButtonModeSubject = new Subject();
    /** Debug Panel用: 強制觸發Spin Button Mode */
    get debugSpinButtonMode$() { return this.debugSpinButtonModeSubject.asObservable(); }
    /** 判斷遊戲是否忙碌中 */
    isBusy = computed(() => this.game.status() !== 'Idle');
    /** 目前的Bet*/
    bet = computed(() => this.user.displayBet());
    /** 目前顯示在畫面的餘額, 不能完全反映userProfile的餘額, 需要有不同時機點更新 */
    balance = signal(this.user.balance());
    /** 預設0, 之後補 */
    win = signal(null);
    /** auto spin總共要自動幾次 */
    autoSpinTotal = signal(null);
    /** auto spin剩下幾次 */
    autoSpinRemaining = signal(null);
    /** 是否正在auto spin */
    isAutoSpinning = computed(() => this.autoSpinRemaining() !== null && this.autoSpinTotal() !== null);
    /** 目前的Feature Mode總共幾次, 沒有就null */
    freeGameTotal = computed(() => { return this.game.featureModeTotal() || null; });
    /** 目前的Feature Mode還剩幾次, 沒有就null */
    freeGameRemaining = computed(() => { return this.game.featureModeRemaining() || null; });
    /** 目前是否在Feature Mode */
    isFreeGame = computed(() => this.game.isFeatureMode());
    /** auto spin事件 */
    autoSpinSubject = null;
    /** 餘額不足事件 */
    insufficientBalanceSubject = new Subject();
    /** 餘額不足事件 */
    get insufficientBalance$() { return this.insufficientBalanceSubject.asObservable(); }
    constructor() {
        if (!environment.production) {
            window.panel = this;
        }
        // 更新Balance顯示
        effect(() => {
            this.user.campaignId(); // 依賴campaignId的變化
            this.api.loginResult(); // 依賴loginResult的變化
            untracked(() => this.balance.set(this.user.balance())); // 更新餘額顯示
        });
        this.game.readyForSpin$.subscribe(() => { this.balance.set(this.user.balance()); });
        this.game.balanceAdded$.subscribe((message) => { this.balance.update(balance => balance + message.amount); });
        this.game.finalBalanceShown$.subscribe(() => { this.balance.set(this.user.balance()); });
        // 更新Win顯示
        this.game.winMoneyUpdated$.subscribe((message) => { if (message.win > 0)
            this.win.set(message.win); });
    }
    sendDebugSpinButtonMode(mode) {
        this.debugSpinButtonModeSubject.next(mode);
    }
    sendDebugPanelStatus(status) {
        this.debugPanelStatusSubject.next(status);
    }
    sendDebugIsPanelVisible(visible) {
        //this._isPanelVisible.set(visible);
    }
    sendDebugIsRsPanelVisible(visible) {
        //this._isRsPanelVisible.set(visible);
    }
    sendDebugInsufficientBalance() {
        this.insufficientBalanceSubject.next({ current: this.user.balance(), required: this.user.bet() });
    }
    immediatelyStop() {
        this.game.immediatelyStop();
    }
    /** 觸發spin流程  */
    spin() {
        // 當遊戲busy會下急停
        if (this.game.status() !== 'Idle') {
            this.game.immediatelyStop();
            return;
        }
        // 如果是Campaign的Free Spin, 流程不同
        if (this.user.campaignSetting()?.displayType === 'freeSpins') {
            // 轉畫面
            this.game.spin();
            // 傳給後端
            this.user.sendSpinRequest();
            // 更新UI相關數值
            this.win.set(null);
            return;
        }
        // 一般情況下的Spin
        // 如果餘額不足, 觸發餘額不足事件, 不進行spin
        if (this.user.balance() < this.user.realBet()) {
            this.insufficientBalanceSubject.next({ current: this.user.balance(), required: this.user.realBet() });
            return;
        }
        // 轉畫面
        this.game.spin();
        // 傳給後端
        this.user.sendSpinRequest();
        // 更新UI相關數值
        this.balance.update(balance => balance - this.user.realBet());
        this.win.set(null);
    }
    /** 開始auto spin, 傳入要自動幾次 */
    startAutoSpin(times) {
        // 如果已經在auto spin了, 無法生效
        if (this.autoSpinSubject)
            return;
        this.spin();
        this.autoSpinTotal.set(times);
        this.autoSpinRemaining.set(times - 1);
        this.autoSpinSubject = this.game.readyForSpin$.subscribe(() => {
            const remaining = this.autoSpinRemaining();
            if (remaining === null || remaining <= 0) {
                this.autoSpinSubject?.unsubscribe();
                this.autoSpinSubject = null;
            }
            else {
                this.spin();
                if (remaining !== null)
                    this.autoSpinRemaining.set(remaining - 1);
            }
        });
    }
    /** 停止auto spin */
    stopAutoSpin() {
        this.autoSpinTotal.set(null);
        this.autoSpinRemaining.set(null);
        this.autoSpinSubject?.unsubscribe();
        this.autoSpinSubject = null;
    }
    /** 音樂開關 */
    enableMusic(enabled) {
        this.game.send(createApWebMessage('SetMusic', { enabled: enabled }));
    }
    /** 音效開關 */
    enableSound(enabled) {
        this.game.send(createApWebMessage('SetSound', { enabled: enabled }));
    }
    /** 設定遊戲速度 0: 慢速, 1: 正常, 2: 快速 */
    setGameSpeed(speed) {
        this.game.send(createApWebMessage('SetSpinType', { speed: speed }));
    }
    /** 是否為 Double Chance 模式 */
    isDoubleChance = computed(() => this.user.isDoubleChance());
    /** 關閉 Double Chance 模式 */
    stopDoubleChance() {
        this.user.updateSpinMode(null);
    }
    /** 是否達到最大投注 */
    isBetMax = computed(() => this.user.isBetMax());
    /** 增加投注 */
    increaseBet() {
        if (this.isBetMax())
            return;
        this.user.increaseBet();
    }
    /** 是否達到最小投注 */
    isBetMin = computed(() => this.user.isBetMin());
    /** 減少投注 */
    decreaseBet() {
        if (this.isBetMin())
            return;
        this.user.decreaseBet();
    }
    static ɵfac = function BottomPanelService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BottomPanelService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BottomPanelService, factory: BottomPanelService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomPanelService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=bottom-panel.service.js.map