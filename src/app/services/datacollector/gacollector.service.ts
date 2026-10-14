import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LoggerService } from '../logger/logger.service';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';
import { PlayerWalletService } from '../player-wallet/player-wallet.service';
import { ClientSessionService } from '../client-session/client-session.service';
import { environment } from '../../../environments/app-environment';
import {
  GAButtonClickEvent,
  GACustomEvent,
  GAEventParams,
  GAPlatformInfo,
  GASessionData,
  GASpinResultEvent,
  TO_GA_ID,
} from './gacollector.interface';

/**
 * 擴充 Window 介面，加入 gtag 與 dataLayer
 * 避免使用 declare const，改用型別安全的方式存取
 */
interface GAWindow extends Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

/**
 * Google Analytics 4 資料收集服務
 *
 * 負責統一管理 GA4 事件追蹤，包含：
 * - 動態載入 gtag.js 腳本 (不需要在 index.html 中寫死)
 * - 按鈕點擊事件追蹤與計數
 * - Spin 結果事件追蹤
 * - 自訂事件追蹤
 * - 平台資訊自動附加
 */
@Injectable({
  providedIn: 'root',
})
export class GACollectorService {
  private logger = inject(LoggerService);
  private document = inject(DOCUMENT);
  private appInterface = inject(AppInterfaceService);
  private gameIframeCtrl = inject(GameIframeCtrlService);

  private wallet = inject(PlayerWalletService);
  private session = inject(ClientSessionService);

  /** 用於略過 effect 初始值 (不追蹤啟動時的預設值) */
  private _isFirstMusicChange = true;
  private _isFirstSoundChange = true;

  // ─── Spin 結果追蹤狀態 (對應 Cocos cGADataComponent) ────
  private _spinRound = 0;
  private _spinBetIndex = 0;
  private _spinBetValue = 0;
  private _spinBetType: 'Cash' | 'BuyFeature' | 'DoubleChance' | 'Promo' = 'Cash';
  private _spinOldBalance = 0;
  private _playerStartMoney = -1;

  /** 登入後不變的 Session 資料 (gameId, currency, currencySymbol, userId) */
  private _sessionData = signal<GASessionData | null>(null);
  /** Session 資料 (唯讀) */
  public readonly sessionData = this._sessionData.asReadonly();

  /** gtag.js 是否已載入完成 */
  private _isScriptLoaded = signal<boolean>(false);
  /** gtag.js 是否已載入完成 */
  public readonly isScriptLoaded = this._isScriptLoaded.asReadonly();

  /** 目前使用的 GA4 Measurement ID */
  private _measurementId = signal<string>('');
  /** 目前使用的 GA4 Measurement ID */
  public readonly measurementId = this._measurementId.asReadonly();

  /** 是否啟用資料收集 */
  private _isEnabled = signal<boolean>(false);
  /** 是否啟用資料收集 */
  public readonly isEnabled = this._isEnabled.asReadonly();

  /** 平台資訊 (pid, brand, site) */
  private _platformInfo = signal<GAPlatformInfo | null>(null);
  /** 平台資訊 */
  public readonly platformInfo = this._platformInfo.asReadonly();

  /** GA 是否可用 (腳本已載入且 gtag 函式存在) */
  public readonly isGtagAvailable = computed(() => {
    const win = this.getWindow();
    return this._isScriptLoaded() && !!win && typeof win.gtag === 'function';
  });

  constructor() {
    // 監聽 loginResult，自動儲存不會變動的 Session 資料與平台資訊
    effect(() => {
      const note = this.appInterface.loginResultNote();
      if (!note) return;

      untracked(() => {
        // 儲存 Session 資料 (登入後固定不變)
        this._sessionData.set({
          gameId: this.session.gameId ?? '',
          currency: note.currency ?? '',
          currencySymbol: note.currency_symbol ?? '',
          userId: note.uid ?? '',
        });

        // 自動設定平台資訊
        if (note.pid && note.brand && note.site) {
          this._platformInfo.set({
            pid: note.pid,
            brand: note.brand,
            site: note.site,
          });
        }

        this.logger.log('[GA] Session 資料已從 loginResult 自動設定', this._sessionData());
      });
    });

    // 監聽音樂開關變化，發送 MusicSwitch 事件
    effect(() => {
      const volume = this.gameIframeCtrl.musicVolume();
      if (this._isFirstMusicChange) {
        this._isFirstMusicChange = false;
        return;
      }
      untracked(() => this.trackButtonClick({ buttonName: TO_GA_ID.MusicSwitch }));
    });

    // 監聽音效開關變化，發送 SoundSwitch 事件
    effect(() => {
      const volume = this.gameIframeCtrl.soundVolume();
      if (this._isFirstSoundChange) {
        this._isFirstSoundChange = false;
        return;
      }
      untracked(() => this.trackButtonClick({ buttonName: TO_GA_ID.SoundSwitch }));
    });

    // 登入時記錄初始金額
    effect(() => {
      const note = this.appInterface.loginResultNote();
      if (!note) return;
      untracked(() => {
        this._playerStartMoney = this.wallet.balance();
      });
    });

    // 監聽 Spin 按鈕點擊 (對應 Cocos SpinButtonClickedEvent)
    this.gameIframeCtrl.startSpinning$.subscribe(() => {
      if (this.session.isUseInGameUI) return;
      this._spinBetIndex = this.wallet.betIndex() ?? 0;
      this._spinBetValue = this.wallet.bet();
      this._spinOldBalance = this.wallet.balance();
      this._spinRound++;

      // 判斷下注類型
      if (this.wallet.isBuyFeature()) {
        this._spinBetType = 'BuyFeature';
      } else if (this.wallet.isDoubleChance()) {
        this._spinBetType = 'DoubleChance';
      } else if (this.wallet.campaignSetting()) {
        this._spinBetType = 'Promo';
      } else {
        this._spinBetType = 'Cash';
      }
    });

    // 監聽 SpinResult (對應 Cocos SetSpinResultAndSendToServer)
    this.appInterface.spinResult$.subscribe((result) => {
      if (this.session.isUseInGameUI) return;
      if (result.data.errorCode) return;

      const newBalance = this.wallet.balance();
      const diff = newBalance - this._spinOldBalance;

      // 計算 WinRatio (與 Cocos 邏輯一致)
      let winRatio = 0;
      if (diff > 0 && this._spinBetValue > 0) {
        winRatio = diff / this._spinBetValue;
        winRatio = winRatio > 50
          ? Math.floor(winRatio / 50) * 50
          : Math.floor(winRatio / 5) * 5;
      }

      // 計算 NetMoneyChange (非 Promo 且有初始金額時)
      let netMoneyChange = 0;
      if (this._spinBetType !== 'Promo' && this._playerStartMoney !== -1) {
        netMoneyChange = newBalance - this._playerStartMoney;
        winRatio = 0;
      }

      this.trackSpinResult({
        round: this._spinRound,
        betIndex: this._spinBetIndex,
        winRatio,
        type: this._spinBetType,
        spinSpeed: 0,
        netMoneyChange,
      });
    });
  }

  // ─── Window 存取 ──────────────────────────────────────────

  /** 取得型別安全的 Window 物件 */
  private getWindow(): GAWindow | null {
    return this.document.defaultView as GAWindow | null;
  }

  /** 呼叫 gtag 函式 */
  private callGtag(...args: any[]): void {
    const win = this.getWindow();
    if (win && typeof win.gtag === 'function') {
      win.gtag(...args);
    }
  }

  // ─── 動態載入 gtag.js ─────────────────────────────────────

  /**
   * 動態載入 Google Analytics gtag.js 腳本並初始化
   * 可在任何時機呼叫 (例如從 config 或 server 取得 ID 後)
   *
   * @param measurementId GA4 測量 ID (例如: G-XXXXXXXXXX)
   * @returns Promise<boolean> 載入是否成功
   */
  //Egret slot G-FZWZC8DNVT
  //Cocos slot G-C5N0DGGJQS
  async loadGtagScript(measurementId: string = "G-FZWZC8DNVT"): Promise<boolean> {
    if (!measurementId) {
      this.logger.warn('[GA] 未提供 Measurement ID，無法載入 gtag.js');
      return false;
    }

    // 已經載入過相同 ID，直接回傳成功
    if (this._isScriptLoaded() && this._measurementId() === measurementId) {
      this.logger.log('[GA] gtag.js 已載入，略過重複載入');
      return true;
    }

    this._measurementId.set(measurementId);

    const win = this.getWindow();
    if (!win) {
      this.logger.error('[GA] 無法取得 Window 物件');
      return false;
    }

    try {
      // 1. 初始化 dataLayer 與 gtag 函式
      win.dataLayer = win.dataLayer || [];
      win.gtag = function (...args: any[]) {
        win.dataLayer.push(arguments);
      };
      win.gtag('js', new Date());
      win.gtag('config', measurementId);

      // 2. 動態插入 <script async src="gtag.js"> 到 <head>
      await this.injectScript(
        `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      );

      this._isScriptLoaded.set(true);
      this.logger.log('[GA] gtag.js 載入成功, ID:', measurementId);

      // 正式環境自動啟用資料收集
      if (environment.production) {
        this.setEnabled(true);
      }

      return true;
    } catch (error) {
      this.logger.error('[GA] gtag.js 載入失敗:', error);
      return false;
    }
  }

  /**
   * 動態插入 script 標籤至 document head
   * @param src 腳本 URL
   * @returns Promise<void>
   */
  private injectScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // 避免重複插入相同腳本
      const existing = this.document.querySelector(`script[src="${src}"]`);
      if (existing) {
        resolve();
        return;
      }

      const script = this.document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = (err) => reject(err);
      this.document.head.appendChild(script);
    });
  }

  // ─── 初始化 ───────────────────────────────────────────────

  /**
   * 啟用 GA 資料收集
   * @param enabled 是否啟用
   */
  setEnabled(enabled: boolean): void {
    this._isEnabled.set(enabled);
    this.logger.log('[GA] 資料收集已' + (enabled ? '啟用' : '停用'));
  }

  /**
   * 設定平台資訊，後續事件會自動附加這些資訊
   * @param info 平台資訊 (pid, brand, site)
   */
  setPlatformInfo(info: GAPlatformInfo): void {
    this._platformInfo.set(info);
    this.logger.log('[GA] 平台資訊已設定', info);
  }

  // ─── 按鈕點擊追蹤 ─────────────────────────────────────────

  /**
   * 追蹤按鈕點擊事件，並累計點擊次數
   * @param event 按鈕點擊事件資料
   */
  trackButtonClick(event: GAButtonClickEvent): void {
    const session = this._sessionData();

    // 組裝 GA 事件參數 (Session 資料自動填入)
    const params: GAEventParams = {
      button_name: event.buttonName,
      id: session?.gameId ?? '',
      Currency: session?.currency ?? '',
      CurrencySymbol: session?.currencySymbol ?? '',
      UTCTime: new Date().toISOString(),
      UserID: session?.userId ?? '',
    };

    this.sendDataToGA('button_click', params);
  }

  // ─── Spin 結果追蹤 ─────────────────────────────────────────

  /**
   * 追蹤 Spin 結果事件
   * @param event Spin 結果事件資料
   */
  trackSpinResult(event: GASpinResultEvent): void {
    const session = this._sessionData();

    const params: GAEventParams = {
      Round: event.round,
      BetIndex: event.betIndex,
      WinRatio: event.winRatio,
      Type: event.type,
      SpinSpeed: event.spinSpeed,
      NetMoneyChange: event.netMoneyChange,
      id: session?.gameId ?? '',
      Currency: session?.currency ?? '',
      CurrencySymbol: session?.currencySymbol ?? '',
      UTCTime: new Date().toISOString(),
      UserID: session?.userId ?? '',
    };

    this.sendDataToGA(TO_GA_ID.SpinResult, params);
  }

  // ─── 自訂事件追蹤 ──────────────────────────────────────────

  /**
   * 追蹤自訂事件
   * @param event 自訂事件資料
   */
  trackCustomEvent(event: GACustomEvent): void {
    this.sendDataToGA(event.eventName, event.params);
  }

  // ─── 核心發送方法 ──────────────────────────────────────────

  /**
   * 發送事件至 GA4
   * @param eventName 事件名稱
   * @param params 事件參數
   */
  private sendDataToGA(eventName: string, params: GAEventParams): void {
    if (!this._isEnabled()) {
      //this.logger.log('[GA] 資料收集未啟用，略過事件:', eventName);
      return;
    }

    if (!this.isGtagAvailable()) {
      //this.logger.warn('[GA] gtag 尚未載入，無法發送事件:', eventName);
      return;
    }

    // 附加平台資訊
    const platform = this._platformInfo();
    if (platform) {
      params = {
        ...params,
        pid: platform.pid,
        brand: platform.brand,
        site: platform.site,
      };
    }

    // 移除 undefined 值
    const cleanParams: Record<string, string | number | boolean> = {};
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        cleanParams[key] = value;
      }
    }

    this.logger.log('[GA] 發送事件:', eventName, cleanParams);
    this.callGtag('event', eventName, cleanParams);
  }
}
