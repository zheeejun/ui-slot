import { computed, inject, Injectable, signal } from '@angular/core';
import { serverProto } from '../../shared/Protobuf/new_proto';
import { ApWebMessageMap, ApWebType, BottomPanelStyleString, GamePopupCategory, LineTypeString, WebCommandType } from '../../../chiikawa/ApWeb/ApWebInterface';
import { GameStatusType } from './game-iframe-ctrl.interface';
import { ApWebBase } from '../../../chiikawa/ApWeb/ApWebBase';
import { ApWebMessages, createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import { LoggerService } from '../logger/logger.service';
import { rollingPlannerSetting } from '../../../chiikawa/RollingReel/RollingPlannerStiingInterface';
import { droppingPlannerSetting } from '../../../chiikawa/DroppingBlock/DroppingPlannerSettingInterface';
import { environment } from '../../../environments/app-environment';
import { ClientSessionService } from '../client-session/client-session.service';
import { IGameCustomData } from '../../../chiikawa/Tool/util/IGameCustomData';




/**
 * GameIframeCtrlService 用來處理遊戲的iframe相關操作,
 * 包括載入遊戲、發送訊息、接收訊息等,
 */
@Injectable({
  providedIn: 'root'
})
export class GameIframeCtrlService {
  public iframeSrc: string = '';
  public status = signal<GameStatusType>('Close');
  public mode: ApWebType = 'ap-none';
  protected logger = inject(LoggerService);
  protected session = inject(ClientSessionService);
  protected iframe: HTMLIFrameElement | null = null;
  protected apWebBase: ApWebBase = new ApWebBase();
  readonly socketMessageType: Array<keyof ApWebMessageMap> = [
    'SocketSend', 'SocketClose', 'SocketOnMessage', 'SocketOnOpen', 'SocketOnClose', 'SocketOnError'];
  constructor() {
    window.addEventListener('message', this.receiveMessage.bind(this), false);
    if (environment.production === false) {
      (window as any).gameIframe = this;
    }

    this.apWebBase.closeInGameBuyFeature = this.session.isCloseInGameBuyFeature;
    this.apWebBase.closeInGameOpenPromo = this.session.isCloseInGameOpenPromo;
  }

  private socketWakeUpSubject = new Subject<ApWebMessageMap['SocketWakeUp']>();
  private socketSendSubject = new Subject<ApWebMessageMap['SocketSend']>();
  private socketCloseSubject = new Subject<ApWebMessageMap['SocketClose']>();
  private gameOnloadSubject = new Subject<ApWebMessageMap['GameOnLoad']>();
  private loadingFinishedSubject = new Subject<ApWebMessageMap['LoadingFinished']>();
  private readyForSpinSubject = new Subject<ApWebMessageMap['ReadyForSpin']>();
  private buyFeatureSubject = new Subject<ApWebMessageMap['BuyFeature']>();
  private betChangedSubject = new Subject<ApWebMessageMap['BetChanged']>();
  private betModeChangedSubject = new Subject<ApWebMessageMap['BetModeChanged']>();
  private startSpinningSubject = new Subject<ApWebMessageMap['StartSpinning']>();
  private UrlRedirectionSubject = new Subject<ApWebMessageMap['UrlRedirection']>();
  private OpenPromoSubject = new Subject<ApWebMessageMap['OpenPromo']>();
  private GameMessageBoxSubject = new Subject<ApWebMessageMap['GameMessageBox']>();
  private RollingSetting = new Subject<ApWebMessageMap['RollingSetting']>();
  private DroppingSetting = new Subject<ApWebMessageMap['DroppingSetting']>();
  private GameParameterSetting = new Subject<ApWebMessageMap['GameParameterSetting']>();
  private DemoTestCaseSetting = new Subject<ApWebMessageMap['GameDemoTestCase']>();
  private balanceAddedSubject = new Subject<ApWebMessageMap['BalanceAdded']>();
  private balanceUpdatedSubject = new Subject<ApWebMessageMap['BalanceUpdated']>();
  private FinalBalanceShownSubject = new Subject<ApWebMessageMap['FinalBalanceShown']>();
  private WinMoneyUpdatedSubject = new Subject<ApWebMessageMap['WinMoneyUpdated']>();
  private SelectCampaignSubject = new Subject<ApWebMessageMap['SelectCampaign']>();
  private RSEnterRSItemSpinModeSubject = new Subject<ApWebMessageMap['RSEnterRSItemSpinMode']>();
  private RSLeaveRSItemSpinModeSubject = new Subject<ApWebMessageMap['RSLeaveRSItemSpinMode']>();
  private RSUpdateUseItemCountSubject = new Subject<ApWebMessageMap['RSUpdateUseItemCount']>();
  private ChangeRSServerStatusSubject = new Subject<ApWebMessageMap['ChangeRSServerStatus']>();
  private InGamePopupOpenedSubject = new Subject<ApWebMessageMap['InGamePopupOpened']>();
  private InGamePopupClosedSubject = new Subject<ApWebMessageMap['InGamePopupClosed']>();
  private featureModeUpdatedSubject = new Subject<ApWebMessageMap['FeatureModeUpdated']>();
  private customSettingSubject = new Subject<ApWebMessageMap['GameCustomSetting']>();
  private isPressHoldingSubject = new Subject<ApWebMessageMap['IsPressHolding']>();
  private openInfoSubject = new Subject<ApWebMessageMap['OpenInfo']>();

  /** 外部訂閱接口 */
  /** 遊戲的SocketWakeUp事件 @example: onSocketWakeUp$.subscribe((message) => { ... }); */
  get socketWakeUp$(): Observable<ApWebMessageMap['SocketWakeUp']> {
    return this.socketWakeUpSubject.asObservable();
  }
  /** 遊戲的SocketSend事件 @example: onSocketSend$.subscribe((message) => { ... }); */
  get socketSend$(): Observable<ApWebMessageMap['SocketSend']> {
    return this.socketSendSubject.asObservable();
  }
  /** 遊戲的SocketClose事件 @example: onSocketClose$.subscribe((message) => { ... }); */
  get socketClose$(): Observable<ApWebMessageMap['SocketClose']> {
    return this.socketCloseSubject.asObservable();
  }
  /** 當遊戲開始讀取的時候 @example: onLoad$.subscribe((message) => { ... }); */
  get gameOnLoad$(): Observable<ApWebMessageMap['GameOnLoad']> {
    return this.gameOnloadSubject.asObservable();
  }
  /** 當遊戲讀取完成的時候 @example: onLoadingFinished$.subscribe((message) => { ... }); */
  get loadingFinished$(): Observable<ApWebMessageMap['LoadingFinished']> {
    return this.loadingFinishedSubject.asObservable();
  }
  /** 當遊戲準備好可以開始Spin的時候 @example: onReadyForSpin$.subscribe((message) => { ... }); */
  get readyForSpin$(): Observable<ApWebMessageMap['ReadyForSpin']> {
    return this.readyForSpinSubject.asObservable();
  }
  /** 當遊戲按下Buy Feature按鈕的時候 @example: onBuyFeature$.subscribe((message) => { ... }); */
  get buyFeature$(): Observable<ApWebMessageMap['BuyFeature']> {
    return this.buyFeatureSubject.asObservable();
  }
  /** 當遊戲按下Change Bet按鈕的時候 @example: onChangeBet$.subscribe((message) => { ... }); */
  get betChanged$(): Observable<ApWebMessageMap['BetChanged']> {
    return this.betChangedSubject.asObservable();
  }
  /** 當遊戲的Bet Mode改變時 @example: onBetModeChanged$.subscribe((message) => { ... }); */
  get betModeChanged$(): Observable<ApWebMessageMap['BetModeChanged']> {
    return this.betModeChangedSubject.asObservable();
  }
  /** 當遊戲按下Spin按鈕的時候 @example: onClickSpin$.subscribe((message) => { ... }); */
  get startSpinning$(): Observable<ApWebMessageMap['StartSpinning']> {
    return this.startSpinningSubject.asObservable();
  }

  /** 當遊戲發生網址重定向的時候 @example: onUrlRedirection$.subscribe((message) => { ... }); */
  get UrlRedirection$(): Observable<ApWebMessageMap['UrlRedirection']> {
    return this.UrlRedirectionSubject.asObservable();
  }

  /** 當遊戲要求開啟Promo的時候 @example: onOpenPromo$.subscribe((message) => { ... }); */
  get OpenPromo$(): Observable<ApWebMessageMap['OpenPromo']> {
    return this.OpenPromoSubject.asObservable();
  }

  /** 當遊戲顯示訊息框的時候 @example: onGameMessageBox$.subscribe((message) => { ... }); */
  get GameMessageBox$(): Observable<ApWebMessageMap['GameMessageBox']> {
    return this.GameMessageBoxSubject.asObservable();
  }

  /** 當遊戲旋轉滾輪init完成的時候 @example:  */
  get DroppingSetting$(): Observable<ApWebMessageMap['DroppingSetting']> {
    return this.DroppingSetting.asObservable();
  }

  /** 當遊戲掉落滾輪init完成的時候 @example:  */
  get RollingSetting$(): Observable<ApWebMessageMap['RollingSetting']> {
    return this.RollingSetting.asObservable();
  }

  /** 設定遊戲內參數 */
  get GameParameterSetting$(): Observable<ApWebMessageMap['GameParameterSetting']> {
    return this.GameParameterSetting.asObservable();
  }

  /** 當遊戲的Balance增加時機點 @example: onBalanceAdded$.subscribe((message) => { ... }); */
  get balanceAdded$(): Observable<ApWebMessageMap['BalanceAdded']> {
    return this.balanceAddedSubject.asObservable();
  }

  /** 當遊戲的Balance更新時機點 @example: balanceUpdated$.subscribe((message) => { ... }); */
  get balanceUpdated$(): Observable<ApWebMessageMap['BalanceUpdated']> {
    return this.balanceUpdatedSubject.asObservable();
  }

  /** 當遊戲的最終Balance顯示時機點 @example: onFinalBalanceShown$.subscribe((message) => { ... }); */
  get finalBalanceShown$(): Observable<ApWebMessageMap['FinalBalanceShown']> {
    return this.FinalBalanceShownSubject.asObservable();
  }

  /** 當遊戲的Win更新時機點 @example: onWinMoneyUpdated$.subscribe((message) => { ... }); */
  get winMoneyUpdated$(): Observable<ApWebMessageMap['WinMoneyUpdated']> {
    return this.WinMoneyUpdatedSubject.asObservable();
  }

  /** 當遊戲選擇Campaign的時候, campaignId為null表示使用現金 @example: selectCampaign$.subscribe((message) => { ... }); */
  get selectCampaign$(): Observable<ApWebMessageMap['SelectCampaign']> {
    return this.SelectCampaignSubject.asObservable();
  }

  /** 當遊戲進入RS Item Spin模式的時候 @example: RSEnterRSItemSpinMode$.subscribe((message) => { ... }); */
  get RSEnterRSItemSpinMode$(): Observable<ApWebMessageMap['RSEnterRSItemSpinMode']> {
    return this.RSEnterRSItemSpinModeSubject.asObservable();
  }

  /** 當遊戲離開RS Item Spin模式的時候 @example: RSLeaveRSItemSpinMode$.subscribe((message) => { ... }); */
  get RSLeaveRSItemSpinMode$(): Observable<ApWebMessageMap['RSLeaveRSItemSpinMode']> {
    return this.RSLeaveRSItemSpinModeSubject.asObservable();
  }

  /** 當遊戲更新使用Item計數的時候 @example: RSUpdateUseItemCount$.subscribe((message) => { ... }); */
  get RSUpdateUseItemCount$(): Observable<ApWebMessageMap['RSUpdateUseItemCount']> {
    return this.RSUpdateUseItemCountSubject.asObservable();
  }

  /** 當遊戲改變RS Server狀態的時候 @example: ChangeRSServerStatus$.subscribe((message) => { ... }); */
  get ChangeRSServerStatus$(): Observable<ApWebMessageMap['ChangeRSServerStatus']> {
    return this.ChangeRSServerStatusSubject.asObservable();
  }

  /** 當遊戲內彈出視窗開啟的時候 @example: InGamePopupOpened$.subscribe((message) => { ... }); */
  get InGamePopupOpened$(): Observable<ApWebMessageMap['InGamePopupOpened']> {
    return this.InGamePopupOpenedSubject.asObservable();
  }

  /** 當遊戲內彈出視窗關閉的時候 @example: InGamePopupClosed$.subscribe((message) => { ... }); */
  get InGamePopupClosed$(): Observable<ApWebMessageMap['InGamePopupClosed']> {
    return this.InGamePopupClosedSubject.asObservable();
  }

  /** 當遊戲的Feature Mode狀態更新的時候 @example: featureModeUpdated$.subscribe((message) => { ... }); */
  get featureModeUpdated$(): Observable<ApWebMessageMap['FeatureModeUpdated']> {
    return this.featureModeUpdatedSubject.asObservable();
  }

  /** 當遊戲的自訂設定更新的時候 @example: customSetting$.subscribe((message) => { ... }); */
  get customSetting$(): Observable<ApWebMessageMap['GameCustomSetting']> {
    return this.customSettingSubject.asObservable();
  }
    
  /** 當遊戲偵測到長按事件的時候 @example: isPressHolding$.subscribe((message) => { ... }); */
  get isPressHolding$(): Observable<ApWebMessageMap['IsPressHolding']> {
    return this.isPressHoldingSubject.asObservable();
  }

  /** 當遊戲要求開啟Info的時候 @example: openInfo$.subscribe((message) => { ... }); */
  get openInfo$(): Observable<ApWebMessageMap['OpenInfo']> {
    return this.openInfoSubject.asObservable();
  }

  /** 僅儲存初始化時DroppingSetting, 用來給Debug Panel初始化使用 */
  public readonly droppingSettings: droppingPlannerSetting[] = [];
  /** 僅儲存初始化時RollingSetting, 用來給Debug Panel初始化使用 */
  public readonly rollingSettings: rollingPlannerSetting[] = [];

  private _gameVersion = signal<string | null>(null);
  /** 目前遊戲的版本號, 由遊戲在ClickIntoMainGame的時候傳入 */
  public readonly gameVersion = this._gameVersion.asReadonly();
  
  private _slotGameType = signal<LineTypeString>('Line');
  /** 目前遊戲的類型, 由遊戲在ClickIntoMainGame的時候傳入, 會影響歷史紀錄頁面顯示哪種玩法說明 */
  public readonly slotGameType = this._slotGameType.asReadonly();

  private _lineRule = signal<number[][]>([]);
  /** 目前遊戲的LineRule, 只適用於LineGame, 由遊戲在ClickIntoMainGame的時候傳入 */
  public readonly lineRule = this._lineRule.asReadonly();

  private _bottomPanelStyle = signal<BottomPanelStyleString>('default');
  /** 目前遊戲的底部面板樣式, 由遊戲在ClickIntoMainGame的時候傳入 */
  public readonly bottomPanelStyle = this._bottomPanelStyle.asReadonly();

  private _musicVolume = signal(1);
  /** 目前遊戲的音樂音量 */
  public readonly musicVolume = this._musicVolume.asReadonly();
  private _soundVolume = signal(1);
  /** 目前遊戲的音效音量 */
  public readonly soundVolume = this._soundVolume.asReadonly();

  private _isFeatureMode = signal(false);
  /** 目前遊戲是否在Feature Mode */
  public readonly isFeatureMode = this._isFeatureMode.asReadonly();
  private _featureModeTotal = signal<number | null>(null);
  /** 目前遊戲的Feature Mode總次數, 沒有就null */
  public readonly featureModeTotal = this._featureModeTotal.asReadonly();
  private _featureModeRemaining = signal<number | null>(null);
  /** 目前遊戲的Feature Mode剩餘次數, 沒有就null */
  public readonly featureModeRemaining = this._featureModeRemaining.asReadonly();

  private _popupRewardSystemMain = signal(false);
  /** rewardSystemMain popup 開啟狀態 */
  public readonly popupRewardSystemMain = this._popupRewardSystemMain.asReadonly();

  private _popupRewardSystemLevelUp = signal(false);
  /** rewardSystemLevelUp popup 開啟狀態 */
  public readonly popupRewardSystemLevelUp = this._popupRewardSystemLevelUp.asReadonly();

  private _popupCashDropMain = signal(false);
  /** cashDropMain popup 開啟狀態 */
  public readonly popupCashDropMain = this._popupCashDropMain.asReadonly();

  private _popupCashDropDialog = signal(false);
  /** cashDropDialog popup 開啟狀態 */
  public readonly popupCashDropDialog = this._popupCashDropDialog.asReadonly();

  private _popupCashDropPickup = signal(false);
  /** cashDropPickup popup 開啟狀態 */
  public readonly popupCashDropPickup = this._popupCashDropPickup.asReadonly();

  private _popupPromo = signal(false);
  /** promo popup 開啟狀態 */
  public readonly popupPromo = this._popupPromo.asReadonly();

  private _popupMessageBox = signal(false);
  /** messageBox popup 開啟狀態 */
  public readonly popupMessageBox = this._popupMessageBox.asReadonly();

  private _popupOther = signal(false);
  /** other popup 開啟狀態 */
  public readonly popupOther = this._popupOther.asReadonly();

  private _popupFeatureTransition = signal(false);
  /** featureTransition popup 開啟狀態 */
  public readonly popupFeatureTransition = this._popupFeatureTransition.asReadonly();

  private _popupBigWinTransition = signal(false);
  /** bigWinTransition popup 開啟狀態 */
  public readonly popupBigWinTransition = this._popupBigWinTransition.asReadonly();

  private _popupInGameSelection = signal(false);
  /** inGameSelection popup 開啟狀態 */
  public readonly popupInGameSelection = this._popupInGameSelection.asReadonly();

  private _featureTransitionLightingEffectEnabled = signal(true);
  /** featureTransition popup 傳入的lighting-effect啟用狀態 */
  public readonly featureTransitionLightingEffectEnabled = this._featureTransitionLightingEffectEnabled.asReadonly();

  private setInGamePopupOpen(category: GamePopupCategory, value: boolean): void {
    switch (category) {
      case 'rewardSystemMain':   this._popupRewardSystemMain.set(value);  break;
      case 'rewardSystemLevelUp': this._popupRewardSystemLevelUp.set(value); break;
      case 'cashDropMain':       this._popupCashDropMain.set(value);      break;
      case 'cashDropDialog':     this._popupCashDropDialog.set(value);    break;
      case 'cashDropPickup':     this._popupCashDropPickup.set(value);    break;
      case 'promo':              this._popupPromo.set(value);             break;
      case 'messageBox':         this._popupMessageBox.set(value);        break;
      case 'other':              this._popupOther.set(value);             break;
      case 'featureTransition':  this._popupFeatureTransition.set(value); break;
      case 'bigWinTransition':   this._popupBigWinTransition.set(value);  break;
      case 'inGameSelection':    this._popupInGameSelection.set(value);   break;
    }
  }

  /** 是否有任何遊戲內的彈出視窗開啟 */
  isInGamePopup = computed(() => {
    return this.popupRewardSystemMain() ||
      this.popupRewardSystemLevelUp() ||
      this.popupCashDropMain() ||
      this.popupCashDropDialog() ||
      this.popupCashDropPickup() ||
      this.popupPromo() ||
      this.popupMessageBox() ||
      this.popupOther() ||
      this.popupFeatureTransition() ||
      this.popupBigWinTransition();
  });

  /** rs是否有紅點通知 */
  rsNotification = signal(false);

  private _customData = signal<IGameCustomData | null>(null);
  public readonly customData = this._customData.asReadonly();
  /** 自訂遊戲設定 */
  public readonly customGameKey = computed(() => this._customData()?.customGamekey ?? null);

  debugSetCustomData(customData: IGameCustomData | null) {
    this._customData.set(customData);
  }

  private _isInteractionEnabled = signal(true);
  /** 是否允許互動 */
  public readonly isInteractionEnabled = this._isInteractionEnabled.asReadonly();

  /**
   * 把iframe的DOM元素傳進來
   * @param iframe
   */
  setIframe(iframe: HTMLIFrameElement | null) {
    this.iframe = iframe;
    this.loadIframe();
  }

  /** 開始Spin, 目前僅在Cover模式下有效 */
  spin(): boolean {
    const message = createApWebMessage('ClickSpin', undefined);
    this.send(message);
    this.status.set('Busy');
    return true;
  }

  immediatelyStop() {
    const message = createApWebMessage('ImmediatelyStop', undefined);
    this.send(message);
  }

  setSpinResult(spinResult: serverProto.Ispin_result | null) {
    if (!spinResult)
      return;
    const message = createApWebMessage('SpinResult', spinResult);
    this.send(message);
  }

  sendCommand(command: WebCommandType, param: any = undefined) {
    const message = createApWebMessage('ClickCommand', { command, param });
    this.send(message);
  }

  async setResultAndWait(spinResult: serverProto.Ispin_result | null): Promise<boolean> {
    if (!spinResult) return false;

    this.setSpinResult(spinResult);

    await firstValueFrom(this.readyForSpin$);
    return true;
  }

  /**
   * 開啟遊戲
   * @param gameId
   * @returns
   */
  launch(gameId: string | null): void {
    this.apWebBase.setMode(this.mode);
    const queryString: string = window.location.search.slice(1);
    const postfix: string = '/index.html?' + queryString;
    if (this.session.remoteHost) {
      const remoteParams: Array<string> = [
        queryString,
        `token=${this.session.authToken ?? ''}`,
        `cdn=${this.session.assetUrl}/`,
        `proxy=${this.session.socketUrl ?? ''}`,
        `_ga_session=kvpvre3uwdp1an9n88u4` //這串是開啟game的dev模式
      ];
      this.iframeSrc = `${this.session.remoteHost}?${remoteParams.join('&')}`;
    }
    else {
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
      // 重新設定 iframe 的 src 屬性以載入遊戲
      this.iframe.src = this.iframeSrc;
    }
  }

  /**
   * 對 iframe 傳送訊息
   * @example game.send(createApWebMessage('SocketOnOpen', undefined));
   */
  send(message: ApWebMessages) {
    this.iframe?.contentWindow?.postMessage(message, '*');

    if (this.socketMessageType.includes(message.type)) {
      this.logger.iframeSocketLog('➡️iframe:', message);
    } else {
      this.logger.iframeLog('➡️iframe:', message);
    }
  }

  private isLocalOrigin(): boolean {
    const origin = window.location.origin;
    return origin.includes('localhost') || origin.includes('192.168');
  }

  /**
   * 接收來自 iframe 的訊息
   * @param event
   */
  receiveMessage(event: MessageEvent) {
    // 確保來自信任的來源；本地開發環境跳過 origin 比對
    if (!this.isLocalOrigin() && event.origin !== window.location.origin)
      return;

    // 確保來自指定的 iframe
    if (event.source !== this.iframe?.contentWindow) {
      return;
    }

    const message: ApWebMessages = event.data;

    if (this.socketMessageType.includes(message.type)) {
      this.logger.iframeSocketLog('iframe➡️:', message);
    } else {
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
      case 'BetModeChanged': {
        this.betModeChangedSubject.next(message.content);
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
        this.featureModeUpdatedSubject.next(message.content);

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
        this.balanceAddedSubject.next(message.content);
        break;
      }
      case 'BalanceUpdated': {
        this.balanceUpdatedSubject.next(message.content);
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
        this._gameVersion.set(message.content.gameVersion || null);
        this._slotGameType.set(message.content.slotGameType);
        this._lineRule.set(message.content.lineRule);
        this._bottomPanelStyle.set(message.content.bottomPanelStyle);
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
          if (message.content.category === 'featureTransition' && message.content.enableLightingEffect != undefined) {
          {
            this._featureTransitionLightingEffectEnabled.set(message.content.enableLightingEffect);
          }          
        }
        break;
      }
      case 'RSHasNewNotification': {
        this.rsNotification.set(message.content.notified);
        break;
      }
      case 'SetWebInteraction': {
        this._isInteractionEnabled.set(message.content.enabled);
        break;
      }
      case 'IsPressHolding': {
        this.isPressHoldingSubject.next(message.content);
        break;
      }
      case 'OpenInfo': {
        this.openInfoSubject.next(message.content);
        break;
      }
      case 'GameCustomSetting': {
        this._customData.set(message.content.customData);
        this.customSettingSubject.next(message.content);
        break;
      }
    }
  }
}
