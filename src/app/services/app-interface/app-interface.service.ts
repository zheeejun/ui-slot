import { computed, inject, Injectable, signal } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { LoginRequest, LoginResult, ServerInfo, SpinRequest, SpinResult } from '../../shared/Protobuf/proto-ext';
import { map, Subject, timer, timeout } from 'rxjs';
import { serverProto } from '../../shared/Protobuf/new_proto';
import { calc, dec, MoneyText } from '../player-wallet/player-wallet.function';
import { protoDecode } from '../../shared/Protobuf/proto-base';
import {  PromoCodeInfoResultMsg } from "../campaign-ctrl/campaign-info-msg.interface";
import { InfoMsgKey, InfoCodeMap, InfoKeyMap } from './info.interface';
import { CashDropCodeMap, CashDropMsgKey, CashDropRequestMsgOf, CashDropResponseMsgType, CashDropResultMsgOf } from '../cash-drop/cash-drop-info-msg.interface';
import { isShortUrlMessage, isTicketMessage, offlinePackResponse } from './app-interface.function';
import { TrnResponseMsgType } from '../trn-ctrl/trn-info-msg.interface';
import { LoggerService } from '../logger/logger.service';
import { LoginSetting } from '../client-session/client-session.interface';
import { ILeaderBoardMessageResponse } from '../leader-board/leader-board.interface';
import { isLeaderBoardMessage } from '../leader-board/leader-board.function';
import { LoginResultNote } from './login-result-note.interface';
import { HistoryResponseType } from '../history-ctrl/history-server.interface';
import { HistoryReplayMessageResponse, ShortURLMessageResponse } from '../history-replay/history-replay.interface';
import { ChangeSeedResult } from './change-seed.interface';
import { CampaignActionResponseType } from '../campaign-ctrl/campaign-action.interface';


/**
 * 與Server相關API都會統一透過此Service進行,
 * 避免直接在Component中使用socket, http等功能,
 * 例如: AppInterface會有遊戲的Spin結果,
 */
@Injectable({
  providedIn: 'root'
})
export class AppInterfaceService {
  protected network = inject(NetworkService);
  protected logger = inject(LoggerService);
  private _isOffline = false;
  /** 是否為離線模式 */
  public get isOffline() { return this._isOffline;}

  /** Demo Spin結果 */
  protected demoSpinResult: serverProto.Ispin_result | null = null;
  // 以下都是給離線用的Socket訂閱
  private openSubject = new Subject<Event>();
  private messageSubject = new Subject<MessageEvent>();
  private closeSubject = new Subject<CloseEvent>();
  private errorSubject = new Subject<Event>();

  /** SocketOpen訂閱接口 @example: network.open$.subscribe((event) => { ... }); */
  public get socketOpen$() { return this.openSubject.asObservable() }
  /** SocketMessage訂閱接口 @example: network.message$.subscribe((event) => { ... }); */
  public get socketMessage$() { return this.messageSubject.asObservable() }
  /** SocketClose訂閱接口 @example: network.close$.subscribe((event) => { ... }); */
  public get socketClose$() { return this.closeSubject.asObservable() }
  /** SocketError訂閱接口 @example: network.error$.subscribe((event) => { ... }); */
  public get socketError$() { return this.errorSubject.asObservable() }

  //主動發送封包訂閱
  private spinRequestSubject = new Subject<SpinRequest>();
  private infoRequestSubject = new Subject<ServerInfo>();

  /** SpinRequest訂閱接口 @example: app.spinRequest$.subscribe((event) => { ... }); */
  public get spinRequest$() { return this.spinRequestSubject.asObservable(); }
  /** InfoRequest訂閱接口 @example: app.infoRequest$.subscribe((event) => { ... }); */
  public get infoRequest$() { return this.infoRequestSubject.asObservable(); }

  //依照服務類型的訂閱
  private loginResultSubject = new Subject<LoginResult>();
  private spinResultSubject = new Subject<SpinResult>();
  private infoResultSubject = new Subject<ServerInfo>();
  private updateBalanceSubject = new Subject<number>();
  private cashDropResultSubject = new Subject<CashDropResponseMsgType>();
  private promoCodeResultSubject = new Subject<PromoCodeInfoResultMsg>();
  private trnSubject = new Subject<TrnResponseMsgType>();
  private campaignSubject = new Subject<CampaignActionResponseType>();
  private leaderBoardSubject = new Subject<ILeaderBoardMessageResponse>();
  private historyReplaySubject = new Subject<HistoryReplayMessageResponse>();
  private historyResultSubject = new Subject<HistoryResponseType>();
  private changedSeedSubject = new Subject<ChangeSeedResult>();


  /** LoginResult訂閱接口 @example: app.loginResult$.subscribe((event) => { ... }); */
  public get loginResult$() { return this.loginResultSubject.asObservable(); }
  /** SpinResult訂閱接口 @example: app.spinResult$.subscribe((event) => { ... }); */
  public get spinResult$() { return this.spinResultSubject.asObservable(); }
  /** ServerInfo訂閱接口 @example: app.serverInfo$.subscribe((event) => { ... }); */
  public get infoResult$() { return this.infoResultSubject.asObservable(); }
  /** CashDropResult訂閱接口 @example: app.cashDropResult$.subscribe((event) => { ... }); */
  public get cashDropResult$() { return this.cashDropResultSubject.asObservable(); }
  /** PromoCodeResult訂閱接口 @example: app.promoCodeResult$.subscribe((event) => { ... }); */
  public get promoCodeResult$() { return this.promoCodeResultSubject.asObservable(); }
  /** Trn訂閱接口 @example: app.trn$.subscribe((event) => { ... }); */
  public get trn$() { return this.trnSubject.asObservable(); }
  /** Campaign訂閱接口 @example: app.campaign$.subscribe((event) => { ... }); */
  public get campaign$() { return this.campaignSubject.asObservable(); }
  /** LeaderBoard訂閱接口 @example: app.leaderBoard$.subscribe((event) => { ... }); */
  public get leaderBoard$() { return this.leaderBoardSubject.asObservable(); }
  /** LeaderBoard ShortLink訂閱接口 @example: app.getShortLink$.subscribe((event) => { ... }); */
  public get historyReplay$() { return this.historyReplaySubject.asObservable(); }
  /** 更新餘額訂閱接口 @example: app.updateBalance$.subscribe((event) => { ... }); */
  public get updateBalance$() { return this.updateBalanceSubject.asObservable(); }
  /** History訂閱接口 @example: app.historyResult$.subscribe((event) => { ... }); */
  public get historyResult$() { return this.historyResultSubject.asObservable(); }
  /** ChangeSeed訂閱接口 @example: app.changedSeed$.subscribe((event) => { ... }); */
  public get changedSeed$() { return this.changedSeedSubject.asObservable(); }

  /** 遊戲ID ex: 10001 */
  protected gameId: string = '10087';
  /** 使用的語言, api調閱資料很常需要語系, 直接綁在api裡面了 */
  protected language: string = 'en';
  /** 目前連線的url */
  protected url: string = '';
  /** 登入用的Token */
  protected token: string = '';
  /** 顯示Log */
  public get showLog() { return this.logger.apiLogEnabled; }

  /** 登入結果 */
  protected _loginResult = signal<LoginResult | null>(null);
  /** 登入結果 */
  public get loginResult() { return this._loginResult.asReadonly(); }
  /** Login Result Note */
  public loginResultNote = computed<LoginResultNote | null>(() => this._loginResult()?.note || null);
  /** 使用者ID */
  public readonly userId = computed(() => this.loginResultNote()?.nickname ?? '');

  // 可以把常用的登入結果資料拆出來當成獨立的computed，避免每次使用都要寫loginResult()?.note?.xxx
  /** 貨幣符號 */
  public currencySymbol = computed(() => this._loginResult()?.note?.currency_symbol);
  /** 貨幣符號代碼 */
  public currencyCode = computed(() => this._loginResult()?.note?.currency);

  constructor(

  ) {
    // 訂閱NetworkService的事件
    this.network.socketSend$.subscribe(this.onSocketSend.bind(this));
    this.network.socketOpen$.subscribe((event) => { this.openSubject.next(event); });
    this.network.socketMessage$.subscribe((event) => { this.messageSubject.next(event); });
    this.network.socketClose$.subscribe((event) => { this.closeSubject.next(event); });
    this.network.socketError$.subscribe((event) => { this.errorSubject.next(event); });

    // 處理Socket訊息
    this.socketMessage$.subscribe((event) => { this.handleSocketMessage(event);});
  }

  /** 設定登入資訊, 用來給非Prod環境的登入 */
  public setup(setting: LoginSetting) {
    this.gameId = setting.gameId;
    this.url = setting.socketUrl || '';
    this.token = setting.authToken || '';
    this.language = setting.language;
    this._isOffline = setting.offline;
  }

  /** Socket連線 */
  public async connect(): Promise<void> {
    if (this.isOffline) {
      // 離線模式，回傳成功連線事件
      this.openSubject.next(new Event('open'));
      return;
    }

    // 首次連線時，會自動登入
    await this.network.connect(this.url);
  }

  /** 單純送出封包，不等待回覆，也不重試。 */
  public sendPack(data: ArrayBufferLike){
    if (this.isOffline) {
      // 離線模式的處理，根據封包內容回傳對應的假資料
      const response = offlinePackResponse(data);
      if (response)
        this.messageSubject.next(new MessageEvent('message', { data:  response}));
      return;
    }
    this.network.sendPack(data);
  }

  /** 傳送登入資訊, 可以用await等待回覆 */
  public async sendLogin(): Promise<LoginResult> {
    const login = new LoginRequest();
    login.data.auth = this.token;

    //from url query string, 轉成小寫, 避免大小寫不一致
    const originalParams = new URLSearchParams(location.search);
    const params = new URLSearchParams();
    originalParams.forEach((value, key) => {
        params.append(key.toLowerCase(), value);
    });
    // 如果有gameid參數，使用它，否則使用預設的gameId
    if(params.has("gameid"))
    {
      login.data.gameId = params.get("gameid");
    }
    else
    {
      login.data.gameId = this.gameId;
    }

    this.sendPack(login.pack);

    // 等待登入結果
    return new Promise<LoginResult>((resolve, reject) => {
      const subscription = this.loginResult$.subscribe((result) => {
        resolve(result);
        subscription.unsubscribe();
      });
    });
  }

  /** 傳送info msg到伺服器, 沒有等待回覆 */
  public sendInfoMsg<K extends InfoMsgKey>(key: K, msg: any): void {
    const infoRequest = new ServerInfo();
    infoRequest.data.code = InfoCodeMap[key];
    infoRequest.data.msg = JSON.stringify(msg || {});
    this.sendPack(infoRequest.pack);
  }

  /** 傳送info msg到伺服器, 沒有等待回覆 , 不轉成JSON string*/
  public sendInfoMsgNostringify<K extends InfoMsgKey>(key: K, msg: any): void {
    const infoRequest = new ServerInfo();
    infoRequest.data.code = InfoCodeMap[key];
    infoRequest.data.msg = msg || '';
    this.sendPack(infoRequest.pack);
  }

  /** 獲取兌換碼結果 */
  sendPromoCode(promoCode: string): void {
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
  public getCashDropResult<K extends CashDropMsgKey>(
    key: K,
    request: CashDropRequestMsgOf<K>,
  ): void{
    if (this.isOffline) {

    }
    // 強制帶入類型
    request.cd_type = CashDropCodeMap[key];

    // 組合Request
    const infoRequest = new ServerInfo();
    infoRequest.data.code = InfoCodeMap['CashDrop'];
    infoRequest.data.msg = JSON.stringify(request || {});

    // 送出請求
    this.sendPack(infoRequest.pack);
  }

  processLoginResult(event: MessageEvent) {
    // 只會登入一次, 所以把登入結果存起來
    const loginResult = new LoginResult(event.data);
    const note = loginResult.note;

    // 常數優先處理
    calc.numberBase = note.conversion_rate;
    calc.amountRatio = note.amountratio ?? 1;
    Object.freeze(calc);

    dec.decimalPlaces = note.decimalplaces ?? 3;
    dec.disableComma = note.disable_comma ?? false;
    Object.freeze(dec);

    MoneyText.currencySymbol = note.currency_symbol ?? '';
    Object.freeze(MoneyText);

    // 強制把disable_tournament設為true
    loginResult.note.disable_tournament = true;

    // 常數處理完畢才開始讓其他服務處理登入結果
    this._loginResult.set(loginResult);
    this.loginResultSubject.next(loginResult);
    this.logger.apiLog('Server⬇️: LoginResult Note',  loginResult.note);
  }

  processSpinResult(event: MessageEvent) {
    const spinResult = new SpinResult(event.data);
    this.spinResultSubject.next(spinResult);
    this.logger.apiLog('Server⬇️: SpinResult', spinResult.data);
  }

  processInfo(event: MessageEvent) {
    const info = new ServerInfo(event.data);
    //全部的info訊息, 先暫時不log
    //const codeName = serverProto.info.eCodeEnum[info.data.code!];
    //this.logger.apiLog('Server⬇️:', code || info.data.code, info.data.msg);
    this.infoResultSubject.next(info);
    // 用Info的code來判斷是否為trn訊息
    if (info.data.code === InfoCodeMap['Tournament']) {
      this.trnSubject.next(info.msg as TrnResponseMsgType);
      this.logger.apiLog('Server⬇️: Tournament Msg', info.msg);
      return;
    }
    // 用code來判斷是否為Campaign訊息
    else if ((info.data.code === InfoCodeMap['Campaign'])) {
      this.campaignSubject.next(info.msg as CampaignActionResponseType);
      this.logger.apiLog('Server⬇️: Campaign Msg', info.msg);
      return;
    }
    // 用coupon_code來判斷是否為Promo Code訊息
    else if ((info.msg as PromoCodeInfoResultMsg).coupon_code) {
      this.promoCodeResultSubject.next(info.msg as PromoCodeInfoResultMsg);
      this.logger.apiLog('Server⬇️: PromoCode Msg', info.msg);
      return;
    }
    // 用cd_type來判斷是否為Cash Drop訊息
    else if ((info.msg as CashDropResponseMsgType).cd_type) {
      this.cashDropResultSubject.next(info.msg as CashDropResponseMsgType);
      this.logger.apiLog('Server⬇️: CashDrop Msg', info.msg);
      return;
    }
    // 更新cashwallet訊息
    else if ((info.data.code === InfoCodeMap['UpdateBalance'])) {
      this.updateBalanceSubject.next(calc.s2c(info.msg as number));
      this.logger.apiLog('Server⬇️: UpdateBalance Msg', info.msg);
      return;
    }
    // 更換種子(Change Seed)結果
    else if ((info.data.code === InfoCodeMap['ChangeSeed'])) {
      this.changedSeedSubject.next(info.msg as ChangeSeedResult);
      this.logger.apiLog('Server⬇️: ChangeSeed Msg', info.msg);
      return;
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
      else if (isShortUrlMessage(info.msg) || isTicketMessage(info.msg)) {
        // 確認是 ShortURL 訊息
        this.logger.apiLog('Server⬇️: Replay Msg', info.data.code, info.msg);
        // 發送到 LeaderBoard ShortLink 訂閱
        this.historyReplaySubject.next(info.msg);
      }
      else {
        // 是 History 訊息
        this.logger.apiLog('Server⬇️: History Msg', info.data.code, info.msg);
        this.historyResultSubject.next(info.msg);
      }

      return;
    }
    // 其他Info訊息
    else {
      this.logger.apiLog('Server⬇️: Info Msg', InfoKeyMap[info.data.code!] || info.data.code , info.msg);
      return;
    }
  }

  /** 依照類型處理收到的Socket訊息，對應到訂閱 */
  handleSocketMessage(event: MessageEvent) {
    const msg = protoDecode(event.data).message;
    switch (msg) {
      case serverProto.eMessageEnum.eME_S2C_LOGIN_RESULT:
        this.processLoginResult(event);
        break;
      case serverProto.eMessageEnum.eME_S2C_SPIN_RESULT:
        this.processSpinResult(event);
        break;
      case serverProto.eMessageEnum.eME_S2C_INFO:
        this.processInfo(event);
        break;
    }
  }

  protected onSocketSend(data: ArrayBufferLike) {
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
        if (InfoKeyMap[info.data.code!] === 'KeepAlive')
          break;
        this.logger.apiLog('⬆️Server: [info]', InfoKeyMap[info.data.code!] || info.data.code , info.msg);
        break;
    }
  }


  /** 關閉API */
  public close(code?: number, reason?: string): void {
    this.network.disconnect(code, reason);
  }
}
