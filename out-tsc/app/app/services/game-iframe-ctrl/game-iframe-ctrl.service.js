import { Injectable, signal } from '@angular/core';
import { ApWebBase } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebBase';
import { createApWebMessage } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebMessages';
import { firstValueFrom, Subject } from 'rxjs';
import { environment } from '../../../environments/app-environment';
import * as i0 from "@angular/core";
import * as i1 from "../logger/logger.service";
/**
 * GameIframeCtrlService 用來處理遊戲的iframe相關操作,
 * 包括載入遊戲、發送訊息、接收訊息等,
 */
export class GameIframeCtrlService {
    logger;
    iframeSrc = '';
    status = signal('Close');
    mode = 'ap-none';
    iframe = null;
    apWebBase = new ApWebBase();
    socketMessageType = [
        'SocketSend', 'SocketClose', 'SocketOnMessage', 'SocketOnOpen', 'SocketOnClose', 'SocketOnError'
    ];
    constructor(logger) {
        this.logger = logger;
        window.addEventListener('message', this.receiveMessage.bind(this), false);
        if (environment.production === false) {
            window.gameIframe = this;
        }
    }
    socketWakeUpSubject = new Subject();
    socketSendSubject = new Subject();
    socketCloseSubject = new Subject();
    gameOnloadSubject = new Subject();
    loadingFinishedSubject = new Subject();
    readyForSpinSubject = new Subject();
    buyFeatureSubject = new Subject();
    betChangedSubject = new Subject();
    startSpinningSubject = new Subject();
    UrlRedirectionSubject = new Subject();
    OpenPromoSubject = new Subject();
    GameMessageBoxSubject = new Subject();
    RollingSetting = new Subject();
    DroppingSetting = new Subject();
    GameParameterSetting = new Subject();
    DemoTestCaseSetting = new Subject();
    BalanceAddedSubject = new Subject();
    FinalBalanceShownSubject = new Subject();
    WinMoneyUpdatedSubject = new Subject();
    SelectCampaignSubject = new Subject();
    ClickIntoMainGameSubject = new Subject();
    RSEnterRSItemSpinModeSubject = new Subject();
    RSLeaveRSItemSpinModeSubject = new Subject();
    RSUpdateUseItemCountSubject = new Subject();
    ChangeRSServerStatusSubject = new Subject();
    InGamePopupOpenedSubject = new Subject();
    InGamePopupClosedSubject = new Subject();
    /** 外部訂閱接口 */
    /** 遊戲的SocketWakeUp事件 @example: onSocketWakeUp$.subscribe((message) => { ... }); */
    get socketWakeUp$() {
        return this.socketWakeUpSubject.asObservable();
    }
    /** 遊戲的SocketSend事件 @example: onSocketSend$.subscribe((message) => { ... }); */
    get socketSend$() {
        return this.socketSendSubject.asObservable();
    }
    /** 遊戲的SocketClose事件 @example: onSocketClose$.subscribe((message) => { ... }); */
    get socketClose$() {
        return this.socketCloseSubject.asObservable();
    }
    /** 當遊戲開始讀取的時候 @example: onLoad$.subscribe((message) => { ... }); */
    get gameOnLoad$() {
        return this.gameOnloadSubject.asObservable();
    }
    /** 當遊戲讀取完成的時候 @example: onLoadingFinished$.subscribe((message) => { ... }); */
    get loadingFinished$() {
        return this.loadingFinishedSubject.asObservable();
    }
    /** 當遊戲準備好可以開始Spin的時候 @example: onReadyForSpin$.subscribe((message) => { ... }); */
    get readyForSpin$() {
        return this.readyForSpinSubject.asObservable();
    }
    /** 當遊戲按下Buy Feature按鈕的時候 @example: onBuyFeature$.subscribe((message) => { ... }); */
    get buyFeature$() {
        return this.buyFeatureSubject.asObservable();
    }
    /** 當遊戲按下Change Bet按鈕的時候 @example: onChangeBet$.subscribe((message) => { ... }); */
    get betChanged$() {
        return this.betChangedSubject.asObservable();
    }
    /** 當遊戲按下Spin按鈕的時候 @example: onClickSpin$.subscribe((message) => { ... }); */
    get startSpinning$() {
        return this.startSpinningSubject.asObservable();
    }
    /** 當遊戲發生網址重定向的時候 @example: onUrlRedirection$.subscribe((message) => { ... }); */
    get UrlRedirection$() {
        return this.UrlRedirectionSubject.asObservable();
    }
    /** 當遊戲要求開啟Promo的時候 @example: onOpenPromo$.subscribe((message) => { ... }); */
    get OpenPromo$() {
        return this.OpenPromoSubject.asObservable();
    }
    /** 當遊戲顯示訊息框的時候 @example: onGameMessageBox$.subscribe((message) => { ... }); */
    get GameMessageBox$() {
        return this.GameMessageBoxSubject.asObservable();
    }
    /** 當遊戲旋轉滾輪init完成的時候 @example:  */
    get DroppingSetting$() {
        return this.DroppingSetting.asObservable();
    }
    /** 當遊戲掉落滾輪init完成的時候 @example:  */
    get RollingSetting$() {
        return this.RollingSetting.asObservable();
    }
    /** 設定遊戲內參數 */
    get GameParameterSetting$() {
        return this.GameParameterSetting.asObservable();
    }
    /** 當遊戲的Balance增加時機點 @example: onBalanceAdded$.subscribe((message) => { ... }); */
    get balanceAdded$() {
        return this.BalanceAddedSubject.asObservable();
    }
    /** 當遊戲的最終Balance顯示時機點 @example: onFinalBalanceShown$.subscribe((message) => { ... }); */
    get finalBalanceShown$() {
        return this.FinalBalanceShownSubject.asObservable();
    }
    /** 當遊戲的Win更新時機點 @example: onWinMoneyUpdated$.subscribe((message) => { ... }); */
    get winMoneyUpdated$() {
        return this.WinMoneyUpdatedSubject.asObservable();
    }
    /** 當遊戲選擇Campaign的時候, campaignId為null表示使用現金 @example: selectCampaign$.subscribe((message) => { ... }); */
    get selectCampaign$() {
        return this.SelectCampaignSubject.asObservable();
    }
    /** 當下載完畢擊進入主遊戲的時候(prefab還沒跑起來) @example: clickIntoMainGame$.subscribe((message) => { ... }); */
    get clickIntoMainGame$() {
        return this.ClickIntoMainGameSubject.asObservable();
    }
    /** 當遊戲進入RS Item Spin模式的時候 @example: RSEnterRSItemSpinMode$.subscribe((message) => { ... }); */
    get RSEnterRSItemSpinMode$() {
        return this.RSEnterRSItemSpinModeSubject.asObservable();
    }
    /** 當遊戲離開RS Item Spin模式的時候 @example: RSLeaveRSItemSpinMode$.subscribe((message) => { ... }); */
    get RSLeaveRSItemSpinMode$() {
        return this.RSLeaveRSItemSpinModeSubject.asObservable();
    }
    /** 當遊戲更新使用Item計數的時候 @example: RSUpdateUseItemCount$.subscribe((message) => { ... }); */
    get RSUpdateUseItemCount$() {
        return this.RSUpdateUseItemCountSubject.asObservable();
    }
    /** 當遊戲改變RS Server狀態的時候 @example: ChangeRSServerStatus$.subscribe((message) => { ... }); */
    get ChangeRSServerStatus$() {
        return this.ChangeRSServerStatusSubject.asObservable();
    }
    /** 當遊戲內彈出視窗開啟的時候 @example: InGamePopupOpened$.subscribe((message) => { ... }); */
    get InGamePopupOpened$() {
        return this.InGamePopupOpenedSubject.asObservable();
    }
    /** 當遊戲內彈出視窗關閉的時候 @example: InGamePopupClosed$.subscribe((message) => { ... }); */
    get InGamePopupClosed$() {
        return this.InGamePopupClosedSubject.asObservable();
    }
    /** 僅儲存初始化時DroppingSetting, 用來給Debug Panel初始化使用 */
    droppingSettings = [];
    /** 僅儲存初始化時RollingSetting, 用來給Debug Panel初始化使用 */
    rollingSettings = [];
    _musicVolume = signal(1);
    /** 目前遊戲的音樂音量 */
    musicVolume = this._musicVolume.asReadonly();
    _soundVolume = signal(1);
    /** 目前遊戲的音效音量 */
    soundVolume = this._soundVolume.asReadonly();
    _clickIntoMainGameData = signal(null);
    /** ClickIntoMainGame 資料 */
    clickIntoMainGameData = this._clickIntoMainGameData.asReadonly();
    _isFeatureMode = signal(false);
    /** 目前遊戲是否在Feature Mode */
    isFeatureMode = this._isFeatureMode.asReadonly();
    _featureModeTotal = signal(null);
    /** 目前遊戲的Feature Mode總次數, 沒有就null */
    featureModeTotal = this._featureModeTotal.asReadonly();
    _featureModeRemaining = signal(null);
    /** 目前遊戲的Feature Mode剩餘次數, 沒有就null */
    featureModeRemaining = this._featureModeRemaining.asReadonly();
    _popupRewardSystemMain = signal(false);
    /** rewardSystemMain popup 開啟狀態 */
    popupRewardSystemMain = this._popupRewardSystemMain.asReadonly();
    _popupRewardSystemLevelUp = signal(false);
    /** rewardSystemLevelUp popup 開啟狀態 */
    popupRewardSystemLevelUp = this._popupRewardSystemLevelUp.asReadonly();
    _popupCashDropMain = signal(false);
    /** cashDropMain popup 開啟狀態 */
    popupCashDropMain = this._popupCashDropMain.asReadonly();
    _popupCashDropDialog = signal(false);
    /** cashDropDialog popup 開啟狀態 */
    popupCashDropDialog = this._popupCashDropDialog.asReadonly();
    _popupCashDropPickup = signal(false);
    /** cashDropPickup popup 開啟狀態 */
    popupCashDropPickup = this._popupCashDropPickup.asReadonly();
    _popupPromo = signal(false);
    /** promo popup 開啟狀態 */
    popupPromo = this._popupPromo.asReadonly();
    _popupMessageBox = signal(false);
    /** messageBox popup 開啟狀態 */
    popupMessageBox = this._popupMessageBox.asReadonly();
    _popupOther = signal(false);
    /** other popup 開啟狀態 */
    popupOther = this._popupOther.asReadonly();
    _popupFeatureTransition = signal(false);
    /** featureTransition popup 開啟狀態 */
    popupFeatureTransition = this._popupFeatureTransition.asReadonly();
    _popupBigWinTransition = signal(false);
    /** bigWinTransition popup 開啟狀態 */
    popupBigWinTransition = this._popupBigWinTransition.asReadonly();
    setInGamePopupOpen(category, value) {
        switch (category) {
            case 'rewardSystemMain':
                this._popupRewardSystemMain.set(value);
                break;
            case 'rewardSystemLevelUp':
                this._popupRewardSystemLevelUp.set(value);
                break;
            case 'cashDropMain':
                this._popupCashDropMain.set(value);
                break;
            case 'cashDropDialog':
                this._popupCashDropDialog.set(value);
                break;
            case 'cashDropPickup':
                this._popupCashDropPickup.set(value);
                break;
            case 'promo':
                this._popupPromo.set(value);
                break;
            case 'messageBox':
                this._popupMessageBox.set(value);
                break;
            case 'other':
                this._popupOther.set(value);
                break;
            case 'featureTransition':
                this._popupFeatureTransition.set(value);
                break;
            case 'bigWinTransition':
                this._popupBigWinTransition.set(value);
                break;
        }
    }
    /**
     * 把iframe的DOM元素傳進來
     * @param iframe
     */
    setIframe(iframe) {
        this.iframe = iframe;
        this.loadIframe();
    }
    /** 開始Spin, 目前僅在Cover模式下有效 */
    spin() {
        const message = createApWebMessage('ClickSpin', undefined);
        this.send(message);
        this.status.set('Busy');
        return true;
    }
    immediatelyStop() {
        const message = createApWebMessage('ImmediatelyStop', undefined);
        this.send(message);
    }
    setSpinResult(spinResult) {
        if (!spinResult)
            return;
        const message = createApWebMessage('SpinResult', spinResult);
        this.send(message);
    }
    async setResultAndWait(spinResult) {
        if (!spinResult)
            return false;
        this.setSpinResult(spinResult);
        await firstValueFrom(this.readyForSpin$);
        return true;
    }
    /**
     * 開啟遊戲
     * @param gameId
     * @returns
     */
    launch(gameId) {
        this.apWebBase.setMode(this.mode);
        const queryString = window.location.search.slice(1);
        const postfix = '/index.html?' + queryString;
        this.iframeSrc = `/${gameId}${postfix}`;
        this.loadIframe();
    }
    /**
     * 網址有修改到, 或是DOM元素有更變都要load一次
     */
    loadIframe() {
        if (this.iframe) {
            // 重新設定 iframe 的 src 屬性以載入遊戲
            this.iframe.src = this.iframeSrc;
            if (this.iframe.contentWindow)
                this.iframe.contentWindow.name = this.apWebBase.toString();
        }
    }
    /**
     * 對 iframe 傳送訊息
     * @example game.send(createApWebMessage('SocketOnOpen', undefined));
     */
    send(message) {
        this.iframe?.contentWindow?.postMessage(message, window.location.origin);
        if (this.socketMessageType.includes(message.type)) {
            this.logger.iframeSocketLog('➡️iframe:', message);
        }
        else {
            this.logger.iframeLog('➡️iframe:', message);
        }
    }
    /**
     * 接收來自 iframe 的訊息
     * @param event
     */
    receiveMessage(event) {
        // 確保來自信任的來源
        if (event.origin !== window.location.origin)
            return;
        // 確保來自指定的 iframe
        if (event.source !== this.iframe?.contentWindow) {
            return;
        }
        const message = event.data;
        if (this.socketMessageType.includes(message.type)) {
            this.logger.iframeSocketLog('iframe➡️:', message);
        }
        else {
            this.logger.iframeLog('iframe➡️:', message);
        }
        // 遊戲模式
        switch (message.type) {
            case 'ReadyForSpin': {
                this.status.set('Idle');
                this.readyForSpinSubject.next(message.content);
                break;
            }
            case 'LoadingFinished': {
                this.status.set('Idle');
                this.loadingFinishedSubject.next(message.content);
                break;
            }
            case 'GameOnLoad': {
                this.status.set('Loading');
                this.gameOnloadSubject.next(message.content);
                break;
            }
            case 'StartSpinning': {
                this.status.set('Busy');
                this.startSpinningSubject.next(message.content);
                break;
            }
            case 'SocketWakeUp': {
                this.socketWakeUpSubject.next(message.content);
                break;
            }
            case 'SocketSend': {
                this.socketSendSubject.next(message.content);
                break;
            }
            case 'SocketClose': {
                this.socketCloseSubject.next(message.content);
                break;
            }
            case 'BuyFeature': {
                this.buyFeatureSubject.next(message.content);
                break;
            }
            case 'BetChanged': {
                this.betChangedSubject.next(message.content);
                break;
            }
            case 'UrlRedirection': {
                this.UrlRedirectionSubject.next(message.content);
                break;
            }
            case 'OpenPromo': {
                this.OpenPromoSubject.next(message.content);
                break;
            }
            case 'GameMessageBox': {
                this.GameMessageBoxSubject.next(message.content);
                break;
            }
            case 'RollingSetting': {
                this.RollingSetting.next(message.content);
                // 儲存初始化設定
                this.rollingSettings.push(message.content);
                break;
            }
            case 'DroppingSetting': {
                this.DroppingSetting.next(message.content);
                // 儲存初始化設定
                this.droppingSettings.push(message.content);
                break;
            }
            case 'GameParameterSetting': {
                this.GameParameterSetting.next(message.content);
                break;
            }
            case 'GameDemoTestCase': {
                this.DemoTestCaseSetting.next(message.content);
                break;
            }
            case 'MusicChanged': {
                this._musicVolume.set(message.content.volume);
                break;
            }
            case 'SoundChanged': {
                this._soundVolume.set(message.content.volume);
                break;
            }
            case 'FeatureModeUpdated': {
                if (message.content.remaining !== undefined) {
                    this._featureModeRemaining.set(message.content.remaining);
                }
                if (message.content.total !== undefined) {
                    this._featureModeTotal.set(message.content.total);
                }
                break;
            }
            case 'FeatureModeEnabled': {
                this._isFeatureMode.set(message.content.enabled);
                break;
            }
            case 'BalanceAdded': {
                this.BalanceAddedSubject.next(message.content);
                break;
            }
            case 'FinalBalanceShown': {
                this.FinalBalanceShownSubject.next(message.content);
                break;
            }
            case 'WinMoneyUpdated': {
                this.WinMoneyUpdatedSubject.next(message.content);
                break;
            }
            case 'SelectCampaign': {
                this.SelectCampaignSubject.next(message.content);
                break;
            }
            case 'ClickIntoMainGame': {
                this._clickIntoMainGameData.set(message.content);
                this.ClickIntoMainGameSubject.next(message.content);
                break;
            }
            case 'RSEnterRSItemSpinMode': {
                this.RSEnterRSItemSpinModeSubject.next(message.content);
                break;
            }
            case 'RSLeaveRSItemSpinMode': {
                this.RSLeaveRSItemSpinModeSubject.next(message.content);
                break;
            }
            case 'RSUpdateUseItemCount': {
                this.RSUpdateUseItemCountSubject.next(message.content);
                break;
            }
            case 'ChangeRSServerStatus': {
                this.ChangeRSServerStatusSubject.next(message.content);
                break;
            }
            case 'InGamePopupOpened': {
                this.InGamePopupOpenedSubject.next(message.content);
                this.setInGamePopupOpen(message.content.category, true);
                break;
            }
            case 'InGamePopupClosed': {
                this.InGamePopupClosedSubject.next(message.content);
                this.setInGamePopupOpen(message.content.category, false);
                break;
            }
        }
    }
    static ɵfac = function GameIframeCtrlService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GameIframeCtrlService)(i0.ɵɵinject(i1.LoggerService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GameIframeCtrlService, factory: GameIframeCtrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GameIframeCtrlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.LoggerService }], null); })();
//# sourceMappingURL=game-iframe-ctrl.service.js.map