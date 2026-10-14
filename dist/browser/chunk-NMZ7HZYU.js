import {
  LoggerService
} from "./chunk-TIGXKRQH.js";
import {
  ClientSessionService,
  environment
} from "./chunk-B2M5HODU.js";
import {
  Injectable,
  Subject,
  __async,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/chiikawa/ApWeb/ApWebMessages.ts
function createApWebMessage(type, content) {
  return { type, content };
}

// src/chiikawa/ApWeb/ApWebBase.ts
var ApWebBase = class {
  _mode = "ap-none";
  // 模式
  _closeInGameBuyFeature = false;
  _closeInGameOpenPromo = false;
  _useInGameEventCenterButton = false;
  set closeInGameBuyFeature(value) {
    this._closeInGameBuyFeature = value;
  }
  set closeInGameOpenPromo(value) {
    this._closeInGameOpenPromo = value;
  }
  set useInGameEventCenterButton(value) {
    this._useInGameEventCenterButton = value;
  }
  setMode(mode) {
    this._mode = mode;
  }
  get mode() {
    return this._mode;
  }
  /** 是否使用ApWebSocket */
  get isUseApSocket() {
    return this.mode === "ap-bridge" || this.mode === "ap-cover";
  }
  /** 遊戲是否在離線模式下運行 */
  get isOfflineMode() {
    return this.mode === "ap-master";
  }
  /** 是否關閉左上角遊戲名稱 */
  get isCloseGameName() {
    return this.mode === "ap-cover" || this.mode === "ap-bridge" || this.mode === "ap-history" || this.mode === "ap-replay" || this.mode === "ap-replay-game-ui";
  }
  /** 是否在關閉遊戲內建的UI */
  get isCloseInGameUi() {
    return this.mode === "ap-cover" || this.mode === "ap-master" || this.mode === "ap-history" || this.mode === "ap-replay";
  }
  /** 是否使用ApWeb覆蓋遊戲UI */
  get isUseInGameUI() {
    return !this.isCloseInGameUi;
  }
  /** 遊戲是否需要Handler處理與父窗口的通訊 */
  get isNeedHandler() {
    return this.mode === "ap-cover" || this.mode === "ap-bridge" || this.mode === "ap-master" || this.mode === "ap-history" || this.mode === "ap-replay" || this.mode === "ap-replay-game-ui";
  }
  /** 是否回傳重播時候的Bet */
  get isReturnBetInReplay() {
    return this.mode === "ap-replay" || this.mode === "ap-replay-game-ui";
  }
  /** 將Buy Feature按鈕的功能由ApWeb處理 */
  get isBuyFeatureToApWeb() {
    return this.mode === "ap-cover" || this.mode === "ap-master" || this.mode === "ap-bridge" && this._closeInGameBuyFeature;
  }
  /** 將open promo按鈕的功能由ApWeb處理 */
  get isOpenPromoToApWeb() {
    return this.mode === "ap-cover" || this.mode === "ap-master" || this.mode === "ap-bridge" && this._closeInGameOpenPromo;
  }
  get isAddEventCenterButton() {
    return this.mode === "ap-bridge" && this._useInGameEventCenterButton;
  }
  /** 是否需要替換轉址由ApWeb處理 */
  get isReplaceRedirection() {
    return this.mode === "ap-bridge" || this.mode === "ap-cover" || this.mode === "ap-master";
  }
  /** 是否啟用橫向佈局 */
  get isEnableLandscape() {
    return this.mode === "ap-cover" || this.mode === "ap-replay";
  }
  /** 解析JSON */
  constructor(json) {
    try {
      if (json) {
        const obj = JSON.parse(json);
        for (const key in obj) {
          if (this.hasOwnProperty(key)) {
            this[key] = obj[key];
          }
        }
      }
    } catch (e) {
    }
  }
  toString() {
    return JSON.stringify(this);
  }
};

// src/app/services/game-iframe-ctrl/game-iframe-ctrl.service.ts
var GameIframeCtrlService = class _GameIframeCtrlService {
  iframeSrc = "";
  status = signal("Close");
  mode = "ap-none";
  logger = inject(LoggerService);
  session = inject(ClientSessionService);
  iframe = null;
  apWebBase = new ApWebBase();
  socketMessageType = [
    "SocketSend",
    "SocketClose",
    "SocketOnMessage",
    "SocketOnOpen",
    "SocketOnClose",
    "SocketOnError"
  ];
  constructor() {
    window.addEventListener("message", this.receiveMessage.bind(this), false);
    if (environment.production === false) {
      window.gameIframe = this;
    }
    this.apWebBase.closeInGameBuyFeature = this.session.isCloseInGameBuyFeature;
    this.apWebBase.closeInGameOpenPromo = this.session.isCloseInGameOpenPromo;
  }
  socketWakeUpSubject = new Subject();
  socketSendSubject = new Subject();
  socketCloseSubject = new Subject();
  gameOnloadSubject = new Subject();
  loadingFinishedSubject = new Subject();
  readyForSpinSubject = new Subject();
  buyFeatureSubject = new Subject();
  betChangedSubject = new Subject();
  betModeChangedSubject = new Subject();
  startSpinningSubject = new Subject();
  UrlRedirectionSubject = new Subject();
  OpenPromoSubject = new Subject();
  GameMessageBoxSubject = new Subject();
  RollingSetting = new Subject();
  DroppingSetting = new Subject();
  GameParameterSetting = new Subject();
  DemoTestCaseSetting = new Subject();
  balanceAddedSubject = new Subject();
  balanceUpdatedSubject = new Subject();
  FinalBalanceShownSubject = new Subject();
  WinMoneyUpdatedSubject = new Subject();
  SelectCampaignSubject = new Subject();
  RSEnterRSItemSpinModeSubject = new Subject();
  RSLeaveRSItemSpinModeSubject = new Subject();
  RSUpdateUseItemCountSubject = new Subject();
  ChangeRSServerStatusSubject = new Subject();
  InGamePopupOpenedSubject = new Subject();
  InGamePopupClosedSubject = new Subject();
  featureModeUpdatedSubject = new Subject();
  customSettingSubject = new Subject();
  isPressHoldingSubject = new Subject();
  openInfoSubject = new Subject();
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
  /** 當遊戲的Bet Mode改變時 @example: onBetModeChanged$.subscribe((message) => { ... }); */
  get betModeChanged$() {
    return this.betModeChangedSubject.asObservable();
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
    return this.balanceAddedSubject.asObservable();
  }
  /** 當遊戲的Balance更新時機點 @example: balanceUpdated$.subscribe((message) => { ... }); */
  get balanceUpdated$() {
    return this.balanceUpdatedSubject.asObservable();
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
  /** 當遊戲的Feature Mode狀態更新的時候 @example: featureModeUpdated$.subscribe((message) => { ... }); */
  get featureModeUpdated$() {
    return this.featureModeUpdatedSubject.asObservable();
  }
  /** 當遊戲的自訂設定更新的時候 @example: customSetting$.subscribe((message) => { ... }); */
  get customSetting$() {
    return this.customSettingSubject.asObservable();
  }
  /** 當遊戲偵測到長按事件的時候 @example: isPressHolding$.subscribe((message) => { ... }); */
  get isPressHolding$() {
    return this.isPressHoldingSubject.asObservable();
  }
  /** 當遊戲要求開啟Info的時候 @example: openInfo$.subscribe((message) => { ... }); */
  get openInfo$() {
    return this.openInfoSubject.asObservable();
  }
  /** 僅儲存初始化時DroppingSetting, 用來給Debug Panel初始化使用 */
  droppingSettings = [];
  /** 僅儲存初始化時RollingSetting, 用來給Debug Panel初始化使用 */
  rollingSettings = [];
  _gameVersion = signal(null);
  /** 目前遊戲的版本號, 由遊戲在ClickIntoMainGame的時候傳入 */
  gameVersion = this._gameVersion.asReadonly();
  _slotGameType = signal("Line");
  /** 目前遊戲的類型, 由遊戲在ClickIntoMainGame的時候傳入, 會影響歷史紀錄頁面顯示哪種玩法說明 */
  slotGameType = this._slotGameType.asReadonly();
  _lineRule = signal([]);
  /** 目前遊戲的LineRule, 只適用於LineGame, 由遊戲在ClickIntoMainGame的時候傳入 */
  lineRule = this._lineRule.asReadonly();
  _bottomPanelStyle = signal("default");
  /** 目前遊戲的底部面板樣式, 由遊戲在ClickIntoMainGame的時候傳入 */
  bottomPanelStyle = this._bottomPanelStyle.asReadonly();
  _musicVolume = signal(1);
  /** 目前遊戲的音樂音量 */
  musicVolume = this._musicVolume.asReadonly();
  _soundVolume = signal(1);
  /** 目前遊戲的音效音量 */
  soundVolume = this._soundVolume.asReadonly();
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
  _popupInGameSelection = signal(false);
  /** inGameSelection popup 開啟狀態 */
  popupInGameSelection = this._popupInGameSelection.asReadonly();
  _featureTransitionLightingEffectEnabled = signal(true);
  /** featureTransition popup 傳入的lighting-effect啟用狀態 */
  featureTransitionLightingEffectEnabled = this._featureTransitionLightingEffectEnabled.asReadonly();
  setInGamePopupOpen(category, value) {
    switch (category) {
      case "rewardSystemMain":
        this._popupRewardSystemMain.set(value);
        break;
      case "rewardSystemLevelUp":
        this._popupRewardSystemLevelUp.set(value);
        break;
      case "cashDropMain":
        this._popupCashDropMain.set(value);
        break;
      case "cashDropDialog":
        this._popupCashDropDialog.set(value);
        break;
      case "cashDropPickup":
        this._popupCashDropPickup.set(value);
        break;
      case "promo":
        this._popupPromo.set(value);
        break;
      case "messageBox":
        this._popupMessageBox.set(value);
        break;
      case "other":
        this._popupOther.set(value);
        break;
      case "featureTransition":
        this._popupFeatureTransition.set(value);
        break;
      case "bigWinTransition":
        this._popupBigWinTransition.set(value);
        break;
      case "inGameSelection":
        this._popupInGameSelection.set(value);
        break;
    }
  }
  /** 是否有任何遊戲內的彈出視窗開啟 */
  isInGamePopup = computed(() => {
    return this.popupRewardSystemMain() || this.popupRewardSystemLevelUp() || this.popupCashDropMain() || this.popupCashDropDialog() || this.popupCashDropPickup() || this.popupPromo() || this.popupMessageBox() || this.popupOther() || this.popupFeatureTransition() || this.popupBigWinTransition();
  });
  /** rs是否有紅點通知 */
  rsNotification = signal(false);
  _customData = signal(null);
  customData = this._customData.asReadonly();
  /** 自訂遊戲設定 */
  customGameKey = computed(() => this._customData()?.customGamekey ?? null);
  debugSetCustomData(customData) {
    this._customData.set(customData);
  }
  _isInteractionEnabled = signal(true);
  /** 是否允許互動 */
  isInteractionEnabled = this._isInteractionEnabled.asReadonly();
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
    const message = createApWebMessage("ClickSpin", void 0);
    this.send(message);
    this.status.set("Busy");
    return true;
  }
  immediatelyStop() {
    const message = createApWebMessage("ImmediatelyStop", void 0);
    this.send(message);
  }
  setSpinResult(spinResult) {
    if (!spinResult)
      return;
    const message = createApWebMessage("SpinResult", spinResult);
    this.send(message);
  }
  sendCommand(command, param = void 0) {
    const message = createApWebMessage("ClickCommand", { command, param });
    this.send(message);
  }
  setResultAndWait(spinResult) {
    return __async(this, null, function* () {
      if (!spinResult)
        return false;
      this.setSpinResult(spinResult);
      yield firstValueFrom(this.readyForSpin$);
      return true;
    });
  }
  /**
   * 開啟遊戲
   * @param gameId
   * @returns
   */
  launch(gameId) {
    this.apWebBase.setMode(this.mode);
    const queryString = window.location.search.slice(1);
    const postfix = "/index.html?" + queryString;
    if (this.session.remoteHost) {
      const remoteParams = [
        queryString,
        `token=${this.session.authToken ?? ""}`,
        `cdn=${this.session.assetUrl}/`,
        `proxy=${this.session.socketUrl ?? ""}`,
        `_ga_session=kvpvre3uwdp1an9n88u4`
        //這串是開啟game的dev模式
      ];
      this.iframeSrc = `${this.session.remoteHost}?${remoteParams.join("&")}`;
    } else {
      this.iframeSrc = `/${gameId}${postfix}`;
    }
    this.loadIframe();
  }
  /**
   * 網址有修改到, 或是DOM元素有更變都要load一次
   */
  loadIframe() {
    if (this.iframe) {
      if (this.iframe.contentWindow)
        this.iframe.contentWindow.name = this.apWebBase.toString();
      this.iframe.src = this.iframeSrc;
    }
  }
  /**
   * 對 iframe 傳送訊息
   * @example game.send(createApWebMessage('SocketOnOpen', undefined));
   */
  send(message) {
    this.iframe?.contentWindow?.postMessage(message, "*");
    if (this.socketMessageType.includes(message.type)) {
      this.logger.iframeSocketLog("\u27A1\uFE0Fiframe:", message);
    } else {
      this.logger.iframeLog("\u27A1\uFE0Fiframe:", message);
    }
  }
  isLocalOrigin() {
    const origin = window.location.origin;
    return origin.includes("localhost") || origin.includes("192.168");
  }
  /**
   * 接收來自 iframe 的訊息
   * @param event
   */
  receiveMessage(event) {
    if (!this.isLocalOrigin() && event.origin !== window.location.origin)
      return;
    if (event.source !== this.iframe?.contentWindow) {
      return;
    }
    const message = event.data;
    if (this.socketMessageType.includes(message.type)) {
      this.logger.iframeSocketLog("iframe\u27A1\uFE0F:", message);
    } else {
      this.logger.iframeLog("iframe\u27A1\uFE0F:", message);
    }
    switch (message.type) {
      case "ReadyForSpin": {
        this.status.set("Idle");
        this.readyForSpinSubject.next(message.content);
        break;
      }
      case "LoadingFinished": {
        this.status.set("Idle");
        this.loadingFinishedSubject.next(message.content);
        break;
      }
      case "GameOnLoad": {
        this.status.set("Loading");
        this.gameOnloadSubject.next(message.content);
        break;
      }
      case "StartSpinning": {
        this.status.set("Busy");
        this.startSpinningSubject.next(message.content);
        break;
      }
      case "SocketWakeUp": {
        this.socketWakeUpSubject.next(message.content);
        break;
      }
      case "SocketSend": {
        this.socketSendSubject.next(message.content);
        break;
      }
      case "SocketClose": {
        this.socketCloseSubject.next(message.content);
        break;
      }
      case "BuyFeature": {
        this.buyFeatureSubject.next(message.content);
        break;
      }
      case "BetChanged": {
        this.betChangedSubject.next(message.content);
        break;
      }
      case "BetModeChanged": {
        this.betModeChangedSubject.next(message.content);
        break;
      }
      case "UrlRedirection": {
        this.UrlRedirectionSubject.next(message.content);
        break;
      }
      case "OpenPromo": {
        this.OpenPromoSubject.next(message.content);
        break;
      }
      case "GameMessageBox": {
        this.GameMessageBoxSubject.next(message.content);
        break;
      }
      case "RollingSetting": {
        this.RollingSetting.next(message.content);
        this.rollingSettings.push(message.content);
        break;
      }
      case "DroppingSetting": {
        this.DroppingSetting.next(message.content);
        this.droppingSettings.push(message.content);
        break;
      }
      case "GameParameterSetting": {
        this.GameParameterSetting.next(message.content);
        break;
      }
      case "GameDemoTestCase": {
        this.DemoTestCaseSetting.next(message.content);
        break;
      }
      case "MusicChanged": {
        this._musicVolume.set(message.content.volume);
        break;
      }
      case "SoundChanged": {
        this._soundVolume.set(message.content.volume);
        break;
      }
      case "FeatureModeUpdated": {
        this.featureModeUpdatedSubject.next(message.content);
        if (message.content.remaining !== void 0) {
          this._featureModeRemaining.set(message.content.remaining);
        }
        if (message.content.total !== void 0) {
          this._featureModeTotal.set(message.content.total);
        }
        break;
      }
      case "FeatureModeEnabled": {
        this._isFeatureMode.set(message.content.enabled);
        break;
      }
      case "BalanceAdded": {
        this.balanceAddedSubject.next(message.content);
        break;
      }
      case "BalanceUpdated": {
        this.balanceUpdatedSubject.next(message.content);
        break;
      }
      case "FinalBalanceShown": {
        this.FinalBalanceShownSubject.next(message.content);
        break;
      }
      case "WinMoneyUpdated": {
        this.WinMoneyUpdatedSubject.next(message.content);
        break;
      }
      case "SelectCampaign": {
        this.SelectCampaignSubject.next(message.content);
        break;
      }
      case "ClickIntoMainGame": {
        this._gameVersion.set(message.content.gameVersion || null);
        this._slotGameType.set(message.content.slotGameType);
        this._lineRule.set(message.content.lineRule);
        this._bottomPanelStyle.set(message.content.bottomPanelStyle);
        break;
      }
      case "RSEnterRSItemSpinMode": {
        this.RSEnterRSItemSpinModeSubject.next(message.content);
        break;
      }
      case "RSLeaveRSItemSpinMode": {
        this.RSLeaveRSItemSpinModeSubject.next(message.content);
        break;
      }
      case "RSUpdateUseItemCount": {
        this.RSUpdateUseItemCountSubject.next(message.content);
        break;
      }
      case "ChangeRSServerStatus": {
        this.ChangeRSServerStatusSubject.next(message.content);
        break;
      }
      case "InGamePopupOpened": {
        this.InGamePopupOpenedSubject.next(message.content);
        this.setInGamePopupOpen(message.content.category, true);
        break;
      }
      case "InGamePopupClosed": {
        this.InGamePopupClosedSubject.next(message.content);
        this.setInGamePopupOpen(message.content.category, false);
        if (message.content.category === "featureTransition" && message.content.enableLightingEffect != void 0) {
          {
            this._featureTransitionLightingEffectEnabled.set(message.content.enableLightingEffect);
          }
        }
        break;
      }
      case "RSHasNewNotification": {
        this.rsNotification.set(message.content.notified);
        break;
      }
      case "SetWebInteraction": {
        this._isInteractionEnabled.set(message.content.enabled);
        break;
      }
      case "IsPressHolding": {
        this.isPressHoldingSubject.next(message.content);
        break;
      }
      case "OpenInfo": {
        this.openInfoSubject.next(message.content);
        break;
      }
      case "GameCustomSetting": {
        this._customData.set(message.content.customData);
        this.customSettingSubject.next(message.content);
        break;
      }
    }
  }
  static \u0275fac = function GameIframeCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GameIframeCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GameIframeCtrlService, factory: _GameIframeCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameIframeCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ApWebBase,
  createApWebMessage,
  GameIframeCtrlService
};
//# sourceMappingURL=chunk-NMZ7HZYU.js.map
