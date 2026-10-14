import { computed, inject, Injectable, signal } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { LoginRequest, LoginResult, ServerInfo, SpinRequest, SpinResult } from '../../library/Protobuf/proto-ext';
import { catchError, firstValueFrom, of, Subject, timer } from 'rxjs';
import { serverProto } from '../../library/Protobuf/new_proto';
import { HttpClient } from '@angular/common/http';
import { calc } from '../user-profile/user-profile.function';
import { protoDecode } from '../../library/Protobuf/proto-base';
import { InfoCodeMap, InfoKeyMap } from './info.interface';
import { CashDropCodeMap } from '../cash-drop/cash-drop-info-msg.interface';
import { cashDropResponseMap } from '../cash-drop/cash-drop-msg.response';
import { offlinePackResponse } from './app-interface.function';
import { LoggerService } from '../logger/logger.service';
import { isLeaderBoardMessage } from '../leader-board/leader-board.function';
import * as i0 from "@angular/core";
/**
 * 與Server相關API都會統一透過此Service進行,
 * 避免直接在Component中使用socket, http等功能,
 * 例如: AppInterface會有遊戲的Spin結果,
 */
export class AppInterfaceService {
    network = inject(NetworkService);
    logger = inject(LoggerService);
    http = inject(HttpClient);
    _isOffline = false;
    /** 是否為離線模式 */
    get isOffline() { return this._isOffline; }
    /** symbol圖片對應關係 */
    symbolTextureList = null;
    /** Demo Spin結果 */
    demoSpinResult = null;
    // 以下都是給離線用的Socket訂閱
    openSubject = new Subject();
    messageSubject = new Subject();
    closeSubject = new Subject();
    errorSubject = new Subject();
    /** SocketOpen訂閱接口 @example: network.open$.subscribe((event) => { ... }); */
    get socketOpen$() { return this.openSubject.asObservable(); }
    /** SocketMessage訂閱接口 @example: network.message$.subscribe((event) => { ... }); */
    get socketMessage$() { return this.messageSubject.asObservable(); }
    /** SocketClose訂閱接口 @example: network.close$.subscribe((event) => { ... }); */
    get socketClose$() { return this.closeSubject.asObservable(); }
    /** SocketError訂閱接口 @example: network.error$.subscribe((event) => { ... }); */
    get socketError$() { return this.errorSubject.asObservable(); }
    //主動發送封包訂閱
    spinRequestSubject = new Subject();
    infoRequestSubject = new Subject();
    /** SpinRequest訂閱接口 @example: app.spinRequest$.subscribe((event) => { ... }); */
    get spinRequest$() { return this.spinRequestSubject.asObservable(); }
    /** InfoRequest訂閱接口 @example: app.infoRequest$.subscribe((event) => { ... }); */
    get infoRequest$() { return this.infoRequestSubject.asObservable(); }
    //依照服務類型的訂閱
    loginResultSubject = new Subject();
    spinResultSubject = new Subject();
    infoResultSubject = new Subject();
    updateBalanceSubject = new Subject();
    cashDropResultSubject = new Subject();
    promoCodeResultSubject = new Subject();
    trnSubject = new Subject();
    leaderBoardSubject = new Subject();
    historyResultSubject = new Subject();
    /** LoginResult訂閱接口 @example: app.loginResult$.subscribe((event) => { ... }); */
    get loginResult$() { return this.loginResultSubject.asObservable(); }
    /** SpinResult訂閱接口 @example: app.spinResult$.subscribe((event) => { ... }); */
    get spinResult$() { return this.spinResultSubject.asObservable(); }
    /** ServerInfo訂閱接口 @example: app.serverInfo$.subscribe((event) => { ... }); */
    get infoResult$() { return this.infoResultSubject.asObservable(); }
    /** CashDropResult訂閱接口 @example: app.cashDropResult$.subscribe((event) => { ... }); */
    get cashDropResult$() { return this.cashDropResultSubject.asObservable(); }
    /** PromoCodeResult訂閱接口 @example: app.promoCodeResult$.subscribe((event) => { ... }); */
    get promoCodeResult$() { return this.promoCodeResultSubject.asObservable(); }
    /** Trn訂閱接口 @example: app.trn$.subscribe((event) => { ... }); */
    get trn$() { return this.trnSubject.asObservable(); }
    /** LeaderBoard訂閱接口 @example: app.leaderBoard$.subscribe((event) => { ... }); */
    get leaderBoard$() { return this.leaderBoardSubject.asObservable(); }
    /** 更新餘額訂閱接口 @example: app.updateBalance$.subscribe((event) => { ... }); */
    get updateBalance$() { return this.updateBalanceSubject.asObservable(); }
    /** History訂閱接口 @example: app.historyResult$.subscribe((event) => { ... }); */
    get historyResult$() { return this.historyResultSubject.asObservable(); }
    /** 遊戲ID ex: 10001 */
    gameId = '10087';
    /** 使用的語言, api調閱資料很常需要語系, 直接綁在api裡面了 */
    language = 'en';
    /** 目前連線的url */
    url = '';
    /** 登入用的Token */
    token = '';
    /** 顯示Log */
    get showLog() { return this.logger.apiLogEnabled; }
    /** 登入結果 */
    _loginResult = signal(null);
    /** 登入結果 */
    get loginResult() { return this._loginResult.asReadonly(); }
    /** Login Result Note */
    loginResultNote = computed(() => this._loginResult()?.note || null);
    // 可以把常用的登入結果資料拆出來當成獨立的computed，避免每次使用都要寫loginResult()?.note?.xxx
    /** 貨幣符號 */
    currencySymbol = computed(() => this._loginResult()?.note?.currency_symbol);
    /** 在localhost執行的時候會改寫這個 */
    assetUrl = '';
    constructor() {
        // 訂閱NetworkService的事件
        this.network.socketSend$.subscribe(this.onSocketSend.bind(this));
        this.network.socketOpen$.subscribe((event) => { this.openSubject.next(event); });
        this.network.socketMessage$.subscribe((event) => { this.messageSubject.next(event); });
        this.network.socketClose$.subscribe((event) => { this.closeSubject.next(event); });
        this.network.socketError$.subscribe((event) => { this.errorSubject.next(event); });
        // 處理Socket訊息
        this.socketMessage$.subscribe((event) => { this.handleSocketMessage(event); });
        // 偵測登入結果
        this.loginResult$.subscribe((result) => { this.onLoginResult(result); });
    }
    /** 設定登入資訊, 用來給非Prod環境的登入 */
    setup(setting) {
        this.gameId = setting.gameId;
        this.url = setting.socketUrl || '';
        this.token = setting.authToken || '';
        this.language = setting.language;
        this._isOffline = setting.offline;
    }
    setAssetUrl(url) {
        this.assetUrl = url;
    }
    /** Socket連線 */
    async connect() {
        if (this.isOffline) {
            // 離線模式，回傳成功連線事件
            this.openSubject.next(new Event('open'));
            return;
        }
        // 首次連線時，會自動登入
        await this.network.connect(this.url);
    }
    /** 單純送出封包，不等待回覆，也不重試。 */
    sendPack(data) {
        if (this.isOffline) {
            // 離線模式的處理，根據封包內容回傳對應的假資料
            const response = offlinePackResponse(data);
            if (response)
                this.messageSubject.next(new MessageEvent('message', { data: response }));
            return;
        }
        this.network.sendPack(data);
    }
    /** 傳送登入資訊, 可以用await等待回覆 */
    async sendLogin() {
        const login = new LoginRequest();
        login.data.auth = this.token;
        login.data.gameId = this.gameId;
        this.sendPack(login.pack);
        // 等待登入結果
        return new Promise((resolve, reject) => {
            const subscription = this.loginResult$.subscribe((result) => {
                resolve(result);
                subscription.unsubscribe();
            });
        });
    }
    /** 傳送info msg到伺服器, 沒有等待回覆 */
    sendInfoMsg(key, msg) {
        const infoRequest = new ServerInfo();
        infoRequest.data.code = InfoCodeMap[key];
        infoRequest.data.msg = JSON.stringify(msg || {});
        this.sendPack(infoRequest.pack);
    }
    /** 傳送info msg到伺服器, 沒有等待回覆 , 不轉成JSON string*/
    sendInfoMsgNostringify(key, msg) {
        const infoRequest = new ServerInfo();
        infoRequest.data.code = InfoCodeMap[key];
        infoRequest.data.msg = msg || '';
        this.sendPack(infoRequest.pack);
    }
    /** 獲取兌換碼結果 */
    sendPromoCode(promoCode) {
        if (this.isOffline) {
            // 離線版測試錯誤碼，用錯誤碼輸入PromoCode，可以產生對應錯誤訊息
            /*const errorCode: string[] = ['0005000', '0006001', '0006002', '0006003', '0006004', '0006005'];
            if (errorCode.includes(promoCode))
              infoMsg = { error_code: promoCode, coupon_code: promoCode, campaignlist: [] };
            else
              infoMsg = JSON.parse(offlineFreeSpinsInfoResult.msg ?? '{}'); // 離線版資料*/
        }
        else {
            // 從server取得資料
            this.sendInfoMsg('PromoCode', { coupon_code: promoCode });
        }
    }
    /**
     * 獲取Cash Drop結果，會依照key的類型強制補齊cd_type
     * 可以支援連續cash drop的request發送，再依照cd_type來分辨回傳結果
     * 之後可以補上timeout的機制
     */
    async getCashDropResult(key, request) {
        if (this.isOffline) {
            await firstValueFrom(timer(100)); // 模擬延遲
            return cashDropResponseMap[key]; // 離線版直接回傳假資料
        }
        // 強制帶入類型
        request.cd_type = CashDropCodeMap[key];
        // 組合Request
        const infoRequest = new ServerInfo();
        infoRequest.data.code = InfoCodeMap['CashDrop'];
        infoRequest.data.msg = JSON.stringify(request || {});
        // 送出請求
        this.sendPack(infoRequest.pack);
        // 等待同樣cd_type的回覆
        return new Promise(async (resolve, reject) => {
            const subscription = this.cashDropResult$.subscribe((event) => {
                if (event.cd_type === CashDropCodeMap[key]) {
                    resolve(event);
                    subscription.unsubscribe();
                }
            });
        });
    }
    async getPlayDemoResult() {
        if (this.demoSpinResult)
            return this.demoSpinResult;
        const url = `${this.assetUrl}/History/${this.gameId}_0.json`;
        const data = await firstValueFrom(this.http.get(url).pipe(catchError(err => {
            this.logger.warn('Play Demo Load Failed:');
            return of({ HistoryDetailData: { result: null } });
        }) // 回傳空物件當作預設值
        ));
        // 存回暫存 之後不用再用http取得
        this.demoSpinResult = data.HistoryDetailData.result;
        return this.demoSpinResult;
    }
    /** 更新symbolTextureList */
    async waitSymbolTextureList(gameId) {
        // 如果已經有symbolTextureList，就不需要重新載入了
        if (this.symbolTextureList)
            return this.symbolTextureList;
        const url = `${this.assetUrl}/${gameId}/SlotSymbolsURI.json`;
        const res = await firstValueFrom(this.http.get(url).pipe(catchError(err => {
            this.logger.warn('Symbol image url mapping file Load Failed:');
            return of({});
        }) // 回傳空物件當作預設值
        ));
        this.symbolTextureList = {};
        for (const [key, value] of Object.entries(res)) {
            if (!key || !value)
                continue;
            this.symbolTextureList[key] = `/${gameId}/${value}`;
        }
        return this.symbolTextureList;
    }
    /** 獲取symbol圖片連結, 要記得先更新symbolTextureList
     * @function waitSymbolTextureList 更新symbolTextureList
     */
    getSymbolTexture(symbol) {
        if (!symbol)
            return null;
        if (!this.symbolTextureList || !this.symbolTextureList[symbol])
            return null;
        return this.symbolTextureList[symbol];
    }
    /** 處理登入完成 */
    async onLoginResult(result) {
        await Promise.all([
            this.waitSymbolTextureList(this.gameId)
        ]);
    }
    /** 依照類型處理收到的Socket訊息，對應到訂閱 */
    handleSocketMessage(event) {
        const msg = protoDecode(event.data).message;
        switch (msg) {
            case serverProto.eMessageEnum.eME_S2C_LOGIN_RESULT:
                // 只會登入一次, 所以把登入結果存起來
                const loginResult = new LoginResult(event.data);
                loginResult.note.disable_tournament = true;
                //應要改寫成下面才會設定成功.
                // 取得 note 對象並修改
                //const note = loginResult.note;
                //note.disable_tournament = true;
                //note.leader_board = 0;
                // 將修改後的 note 序列化回 data.note
                //loginResult.data.note = JSON.stringify(note);
                this._loginResult.set(loginResult);
                this.loginResultSubject.next(loginResult);
                this.logger.apiLog('Server⬇️: LoginResult Note', loginResult.note);
                break;
            case serverProto.eMessageEnum.eME_S2C_SPIN_RESULT:
                const spinResult = new SpinResult(event.data);
                this.spinResultSubject.next(spinResult);
                this.logger.apiLog('Server⬇️: SpinResult', spinResult.data);
                break;
            case serverProto.eMessageEnum.eME_S2C_INFO:
                const info = new ServerInfo(event.data);
                //全部的info訊息, 先暫時不log
                //const codeName = serverProto.info.eCodeEnum[info.data.code!];
                //this.logger.apiLog('Server⬇️:', code || info.data.code, info.data.msg);
                this.infoResultSubject.next(info);
                // 用Info的code來判斷是否為trn訊息
                if (info.data.code === InfoCodeMap['Tournament']) {
                    this.trnSubject.next(info.msg);
                    this.logger.apiLog('Server⬇️: Tournament Msg', info.msg);
                    break;
                }
                // 用coupon_code來判斷是否為Promo Code訊息
                else if (info.msg.coupon_code) {
                    this.promoCodeResultSubject.next(info.msg);
                    this.logger.apiLog('Server⬇️: PromoCode Msg', info.msg);
                    break;
                }
                // 用cd_type來判斷是否為Cash Drop訊息
                else if (info.msg.cd_type) {
                    this.cashDropResultSubject.next(info.msg);
                    this.logger.apiLog('Server⬇️: CashDrop Msg', info.msg);
                    break;
                }
                // 更新cashwallet訊息
                else if ((info.data.code === InfoCodeMap['UpdateBalance'])) {
                    this.updateBalanceSubject.next(calc.s2c(info.msg));
                    this.logger.apiLog('Server⬇️: UpdateBalance Msg', info.msg);
                    break;
                }
                else if ((info.data.code === InfoCodeMap['LeaderBoard']) || (info.data.code === InfoCodeMap['History'])) {
                    // history, leaderboard 共用 messageEnum.eME_S2C_INFO.
                    // 使用類型守衛檢查是否為 LeaderBoard 訊息
                    if (isLeaderBoardMessage(info.msg)) {
                        // 確認是 LeaderBoard 訊息
                        this.logger.apiLog('Server⬇️: LeaderBoard Msg', info.data.code, info.msg);
                        // 發送到 LeaderBoard 訂閱
                        this.leaderBoardSubject.next(info.msg);
                    }
                    else {
                        // 是 History 訊息
                        this.logger.apiLog('Server⬇️: History Msg', info.data.code, info.msg);
                        this.historyResultSubject.next(info.msg);
                    }
                    break;
                }
                // 其他Info訊息
                else {
                    this.logger.apiLog('Server⬇️: Info Msg', InfoKeyMap[info.data.code] || info.data.code, info.msg);
                    break;
                }
                break;
        }
    }
    onSocketSend(data) {
        const type = protoDecode(data).message;
        switch (type) {
            case serverProto.eMessageEnum.eME_C2S_SPIN_REQUEST:
                const spinRequest = new SpinRequest();
                spinRequest.pack = data;
                this.spinRequestSubject.next(spinRequest);
                this.logger.apiLog('⬆️Server: [SpinRequest]', spinRequest.data);
                break;
            case serverProto.eMessageEnum.eME_S2C_INFO:
                const info = new ServerInfo();
                info.pack = data;
                this.infoRequestSubject.next(info);
                // 心跳包不記錄log
                if (InfoKeyMap[info.data.code] === 'KeepAlive')
                    break;
                this.logger.apiLog('⬆️Server: [info]', InfoKeyMap[info.data.code] || info.data.code, info.msg);
                break;
        }
    }
    /** 關閉API */
    close(code, reason) {
        this.network.disconnect(code, reason);
    }
    static ɵfac = function AppInterfaceService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppInterfaceService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppInterfaceService, factory: AppInterfaceService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppInterfaceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=app-interface.service.js.map