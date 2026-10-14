import {
  TO_GA_ID
} from "./chunk-3FMKOJKK.js";
import {
  PlayerWalletService
} from "./chunk-5GFZDTRR.js";
import {
  GameIframeCtrlService
} from "./chunk-OW6577YR.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  AppInterfaceService,
  isLeaderboardPersonalResponse
} from "./chunk-TLQLKLDD.js";
import {
  LoggerService,
  calc,
  decimal_default
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService,
  environment
} from "./chunk-54ITVL2G.js";
import {
  DOCUMENT,
  Injectable,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QGU3BS3L.js";

// src/app/services/datacollector/gacollector.service.ts
var GACollectorService = class _GACollectorService {
  logger = inject(LoggerService);
  document = inject(DOCUMENT);
  appInterface = inject(AppInterfaceService);
  gameIframeCtrl = inject(GameIframeCtrlService);
  wallet = inject(PlayerWalletService);
  session = inject(ClientSessionService);
  /** 用於略過 effect 初始值 (不追蹤啟動時的預設值) */
  _isFirstMusicChange = true;
  _isFirstSoundChange = true;
  // ─── Spin 結果追蹤狀態 (對應 Cocos cGADataComponent) ────
  _spinRound = 0;
  _spinBetIndex = 0;
  _spinBetValue = 0;
  _spinBetType = "Cash";
  _spinOldBalance = 0;
  _playerStartMoney = -1;
  /** 登入後不變的 Session 資料 (gameId, currency, currencySymbol, userId) */
  _sessionData = signal(null);
  /** Session 資料 (唯讀) */
  sessionData = this._sessionData.asReadonly();
  /** gtag.js 是否已載入完成 */
  _isScriptLoaded = signal(false);
  /** gtag.js 是否已載入完成 */
  isScriptLoaded = this._isScriptLoaded.asReadonly();
  /** 目前使用的 GA4 Measurement ID */
  _measurementId = signal("");
  /** 目前使用的 GA4 Measurement ID */
  measurementId = this._measurementId.asReadonly();
  /** 是否啟用資料收集 */
  _isEnabled = signal(false);
  /** 是否啟用資料收集 */
  isEnabled = this._isEnabled.asReadonly();
  /** 平台資訊 (pid, brand, site) */
  _platformInfo = signal(null);
  /** 平台資訊 */
  platformInfo = this._platformInfo.asReadonly();
  /** GA 是否可用 (腳本已載入且 gtag 函式存在) */
  isGtagAvailable = computed(() => {
    const win = this.getWindow();
    return this._isScriptLoaded() && !!win && typeof win.gtag === "function";
  });
  constructor() {
    effect(() => {
      const note = this.appInterface.loginResultNote();
      if (!note)
        return;
      untracked(() => {
        this._sessionData.set({
          gameId: this.session.gameId ?? "",
          currency: note.currency ?? "",
          currencySymbol: note.currency_symbol ?? "",
          userId: note.uid ?? ""
        });
        if (note.pid && note.brand && note.site) {
          this._platformInfo.set({
            pid: note.pid,
            brand: note.brand,
            site: note.site
          });
        }
        this.logger.log("[GA] Session \u8CC7\u6599\u5DF2\u5F9E loginResult \u81EA\u52D5\u8A2D\u5B9A", this._sessionData());
      });
    });
    effect(() => {
      const volume = this.gameIframeCtrl.musicVolume();
      if (this._isFirstMusicChange) {
        this._isFirstMusicChange = false;
        return;
      }
      untracked(() => this.trackButtonClick({ buttonName: TO_GA_ID.MusicSwitch }));
    });
    effect(() => {
      const volume = this.gameIframeCtrl.soundVolume();
      if (this._isFirstSoundChange) {
        this._isFirstSoundChange = false;
        return;
      }
      untracked(() => this.trackButtonClick({ buttonName: TO_GA_ID.SoundSwitch }));
    });
    effect(() => {
      const note = this.appInterface.loginResultNote();
      if (!note)
        return;
      untracked(() => {
        this._playerStartMoney = this.wallet.balance();
      });
    });
    this.gameIframeCtrl.startSpinning$.subscribe(() => {
      if (this.session.isUseInGameUI)
        return;
      this._spinBetIndex = this.wallet.betIndex() ?? 0;
      this._spinBetValue = this.wallet.bet();
      this._spinOldBalance = this.wallet.balance();
      this._spinRound++;
      if (this.wallet.isBuyFeature()) {
        this._spinBetType = "BuyFeature";
      } else if (this.wallet.isDoubleChance()) {
        this._spinBetType = "DoubleChance";
      } else if (this.wallet.campaignSetting()) {
        this._spinBetType = "Promo";
      } else {
        this._spinBetType = "Cash";
      }
    });
    this.appInterface.spinResult$.subscribe((result) => {
      if (this.session.isUseInGameUI)
        return;
      if (result.data.errorCode)
        return;
      const newBalance = this.wallet.balance();
      const diff = newBalance - this._spinOldBalance;
      let winRatio = 0;
      if (diff > 0 && this._spinBetValue > 0) {
        winRatio = diff / this._spinBetValue;
        winRatio = winRatio > 50 ? Math.floor(winRatio / 50) * 50 : Math.floor(winRatio / 5) * 5;
      }
      let netMoneyChange = 0;
      if (this._spinBetType !== "Promo" && this._playerStartMoney !== -1) {
        netMoneyChange = newBalance - this._playerStartMoney;
        winRatio = 0;
      }
      this.trackSpinResult({
        round: this._spinRound,
        betIndex: this._spinBetIndex,
        winRatio,
        type: this._spinBetType,
        spinSpeed: 0,
        netMoneyChange
      });
    });
  }
  // ─── Window 存取 ──────────────────────────────────────────
  /** 取得型別安全的 Window 物件 */
  getWindow() {
    return this.document.defaultView;
  }
  /** 呼叫 gtag 函式 */
  callGtag(...args) {
    const win = this.getWindow();
    if (win && typeof win.gtag === "function") {
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
  loadGtagScript(measurementId = "G-FZWZC8DNVT") {
    return __async(this, null, function* () {
      if (!measurementId) {
        this.logger.warn("[GA] \u672A\u63D0\u4F9B Measurement ID\uFF0C\u7121\u6CD5\u8F09\u5165 gtag.js");
        return false;
      }
      if (this._isScriptLoaded() && this._measurementId() === measurementId) {
        this.logger.log("[GA] gtag.js \u5DF2\u8F09\u5165\uFF0C\u7565\u904E\u91CD\u8907\u8F09\u5165");
        return true;
      }
      this._measurementId.set(measurementId);
      const win = this.getWindow();
      if (!win) {
        this.logger.error("[GA] \u7121\u6CD5\u53D6\u5F97 Window \u7269\u4EF6");
        return false;
      }
      try {
        win.dataLayer = win.dataLayer || [];
        win.gtag = function(...args) {
          win.dataLayer.push(arguments);
        };
        win.gtag("js", /* @__PURE__ */ new Date());
        win.gtag("config", measurementId);
        yield this.injectScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`);
        this._isScriptLoaded.set(true);
        this.logger.log("[GA] gtag.js \u8F09\u5165\u6210\u529F, ID:", measurementId);
        if (environment.production) {
          this.setEnabled(true);
        }
        return true;
      } catch (error) {
        this.logger.error("[GA] gtag.js \u8F09\u5165\u5931\u6557:", error);
        return false;
      }
    });
  }
  /**
   * 動態插入 script 標籤至 document head
   * @param src 腳本 URL
   * @returns Promise<void>
   */
  injectScript(src) {
    return new Promise((resolve, reject) => {
      const existing = this.document.querySelector(`script[src="${src}"]`);
      if (existing) {
        resolve();
        return;
      }
      const script = this.document.createElement("script");
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
  setEnabled(enabled) {
    this._isEnabled.set(enabled);
    this.logger.log("[GA] \u8CC7\u6599\u6536\u96C6\u5DF2" + (enabled ? "\u555F\u7528" : "\u505C\u7528"));
  }
  /**
   * 設定平台資訊，後續事件會自動附加這些資訊
   * @param info 平台資訊 (pid, brand, site)
   */
  setPlatformInfo(info) {
    this._platformInfo.set(info);
    this.logger.log("[GA] \u5E73\u53F0\u8CC7\u8A0A\u5DF2\u8A2D\u5B9A", info);
  }
  // ─── 按鈕點擊追蹤 ─────────────────────────────────────────
  /**
   * 追蹤按鈕點擊事件，並累計點擊次數
   * @param event 按鈕點擊事件資料
   */
  trackButtonClick(event) {
    const session = this._sessionData();
    const params = {
      button_name: event.buttonName,
      id: session?.gameId ?? "",
      Currency: session?.currency ?? "",
      CurrencySymbol: session?.currencySymbol ?? "",
      UTCTime: (/* @__PURE__ */ new Date()).toISOString(),
      UserID: session?.userId ?? ""
    };
    this.sendDataToGA("button_click", params);
  }
  // ─── Spin 結果追蹤 ─────────────────────────────────────────
  /**
   * 追蹤 Spin 結果事件
   * @param event Spin 結果事件資料
   */
  trackSpinResult(event) {
    const session = this._sessionData();
    const params = {
      Round: event.round,
      BetIndex: event.betIndex,
      WinRatio: event.winRatio,
      Type: event.type,
      SpinSpeed: event.spinSpeed,
      NetMoneyChange: event.netMoneyChange,
      id: session?.gameId ?? "",
      Currency: session?.currency ?? "",
      CurrencySymbol: session?.currencySymbol ?? "",
      UTCTime: (/* @__PURE__ */ new Date()).toISOString(),
      UserID: session?.userId ?? ""
    };
    this.sendDataToGA(TO_GA_ID.SpinResult, params);
  }
  // ─── 自訂事件追蹤 ──────────────────────────────────────────
  /**
   * 追蹤自訂事件
   * @param event 自訂事件資料
   */
  trackCustomEvent(event) {
    this.sendDataToGA(event.eventName, event.params);
  }
  // ─── 核心發送方法 ──────────────────────────────────────────
  /**
   * 發送事件至 GA4
   * @param eventName 事件名稱
   * @param params 事件參數
   */
  sendDataToGA(eventName, params) {
    if (!this._isEnabled()) {
      return;
    }
    if (!this.isGtagAvailable()) {
      return;
    }
    const platform = this._platformInfo();
    if (platform) {
      params = __spreadProps(__spreadValues({}, params), {
        pid: platform.pid,
        brand: platform.brand,
        site: platform.site
      });
    }
    const cleanParams = {};
    for (const [key, value] of Object.entries(params)) {
      if (value !== void 0) {
        cleanParams[key] = value;
      }
    }
    this.logger.log("[GA] \u767C\u9001\u4E8B\u4EF6:", eventName, cleanParams);
    this.callGtag("event", eventName, cleanParams);
  }
  static \u0275fac = function GACollectorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GACollectorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GACollectorService, factory: _GACollectorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GACollectorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/leader-board/leader-board.service.ts
var LeaderBoardService = class _LeaderBoardService {
  api;
  logger;
  userProfile;
  appI18n;
  // ===== 快取資料結構 =====
  /** 快取 Map */
  cache = /* @__PURE__ */ new Map();
  /** 快取有效期限（10 秒） */
  CACHE_DURATION = 10 * 1e3;
  // ===== Subject =====
  // ===== 公開的 Signal =====
  /** 當前顯示的排行榜項目 */
  currentItems = signal([]);
  /** 是否正在載入 */
  isLoading = signal(false);
  /** 最後更新時間 */
  lastUpdated = signal(null);
  /** 錯誤訊息 */
  error = signal(null);
  /** 預設幣別兌換率 */
  defaultCurrencyConversionRate = signal(1);
  /** 幣別資料 Map (currency_code -> ICurrencyDataResponse) */
  currencyMap = signal(/* @__PURE__ */ new Map());
  /** LeaderBoard ShortURL */
  shortUrl = signal(null);
  // ===== 私有狀態 =====
  /** 最後請求的 tag（用於防止快速切換時顯示舊資料） */
  lastRequestTag = "";
  session = inject(ClientSessionService);
  constructor(api, logger, userProfile, appI18n) {
    this.api = api;
    this.logger = logger;
    this.userProfile = userProfile;
    this.appI18n = appI18n;
    if (environment.production === false) {
      window.leaderBoard = this;
    }
    this.api.leaderBoard$.subscribe(this.onLeaderBoardResponse.bind(this));
  }
  // ===== 公開方法 =====
  /**
   * 發送排行榜請求
   * @param tag - 請求標籤（用於快取和識別）
   * @param userType - 使用者類型（個人或全部玩家）
   * @param gameCode - 遊戲代碼（空字串 = 全部遊戲）
   * @param language - 語系
   */
  sendLeaderBoardList(tag, userType, gameCode = "", language = "") {
    this.lastRequestTag = tag;
    const cacheKey = tag;
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() < cached.expiryTime) {
      this.logger.leaderboardLog(`\u{1F4E6} LeaderBoard: Using valid cache - ${cacheKey}`);
      this.currentItems.set(cached.items);
      this.lastUpdated.set(new Date(cached.timestamp));
      this.error.set(null);
      return;
    }
    this.logger.leaderboardLog(`\u{1F680} LeaderBoard: Requesting - ${cacheKey} (UserType: ${userType}, GameCode: ${gameCode}, Language: ${language})`);
    this.isLoading.set(true);
    this.error.set(null);
    const request = {
      Messages: `${tag},${userType},${gameCode},${language}`
    };
    this.api.sendInfoMsgNostringify("LeaderBoard", request.Messages);
  }
  /**
   * 清除所有快取
   */
  clearCache() {
    this.cache.clear();
    this.logger.leaderboardLog("\u{1F5D1}\uFE0F LeaderBoard: Cache cleared");
  }
  /**
   * 清除過期的快取項目
   */
  clearExpiredCache() {
    const now = Date.now();
    let clearedCount = 0;
    for (const [key, item] of this.cache.entries()) {
      if (now >= item.expiryTime) {
        this.cache.delete(key);
        clearedCount++;
      }
    }
    if (clearedCount > 0) {
      this.logger.leaderboardLog(`\u{1F5D1}\uFE0F LeaderBoard: Cleared ${clearedCount} expired cache items`);
    }
  }
  // ===== 私有方法 =====  
  /**
   * 處理 LeaderBoard 回應（從 Server 接收資料）
   * @param response - Server 回應的排行榜資料
   */
  onLeaderBoardResponse(response) {
    this.logger.leaderboardLog("\u{1F4E5} LeaderBoard: Response received", response);
    const isLatestRequest = response.tag === this.lastRequestTag;
    if (!isLatestRequest) {
      this.logger.warn(`\u26A0\uFE0F LeaderBoard: Ignoring outdated response (expected: ${this.lastRequestTag}, got: ${response.tag})`);
    }
    try {
      if (response.default_currency_conversion_rate) {
        this.defaultCurrencyConversionRate.set(response.default_currency_conversion_rate);
      }
      if (response.currency && response.currency.length > 0) {
        this.currencyMap.update((currentMap) => {
          const updatedMap = new Map(currentMap);
          response.currency.forEach((currency) => {
            currency.amount_ratio = new decimal_default(1).dividedBy(currency.amount_ratio).toNumber();
            updatedMap.set(currency.currency_code, currency);
          });
          this.logger.leaderboardLog(`\u{1F4B1} Currency Map updated: ${updatedMap.size} currencies`);
          return updatedMap;
        });
      }
      const items = this.formatResponseToItems(response);
      if (isLatestRequest) {
        this.currentItems.set(items);
        this.lastUpdated.set(/* @__PURE__ */ new Date());
        this.isLoading.set(false);
        this.error.set(null);
        this.logger.leaderboardLog(`\u2705 LeaderBoard: Updated current items (${items.length} items)`);
      }
      const now = Date.now();
      const cacheKey = response.tag;
      this.cache.set(cacheKey, {
        items,
        timestamp: now,
        expiryTime: now + this.CACHE_DURATION
      });
      this.logger.leaderboardLog(`\u{1F4BE} LeaderBoard: Cached - ${cacheKey} (${items.length} items, expires in ${this.CACHE_DURATION / 1e3}s)`);
    } catch (error) {
      this.logger.error("\u274C LeaderBoard: Error processing response", error);
      if (isLatestRequest) {
        this.error.set("Failed to process leaderboard data");
        this.isLoading.set(false);
      }
    }
  }
  /**
   * 轉換 Server 回應格式為前端格式
   * @param response - Server 回應
   * @returns 前端使用的排行榜項目陣列
   */
  formatResponseToItems(response) {
    const currencyMap = this.currencyMap();
    return response.data.map((item, index) => {
      const currency = currencyMap.get(item.currency_code);
      const symbol = currency?.symbol || "";
      const isPersonal = isLeaderboardPersonalResponse(response.tag);
      let currencySymbol = symbol;
      if (isPersonal) {
        currencySymbol = this.userProfile.currencySymbol() || symbol;
      }
      let retvale = {
        rank: String(index + 1),
        game: this.appI18n.instant(item.game_code, item.game_code),
        gameId: item.game_code,
        time: item.bet_time,
        multiplier: this.calcMultiplier(item.currency_code, item.multiplier, isPersonal),
        multiplierFromServer: item.multiplier,
        // 原始倍數，未經換算
        spin: item.bet_count,
        currencyCode: item.currency_code,
        currencySymbol,
        prize: this.ChangeValueFromServerToDisplay(item.win, item.currency_code, isPersonal),
        image: this.buildImageURLString(item.game_code, item.icon),
        prizeForSort: this.calcPrizeForSort(item.currency_code, item.win, isPersonal),
        ticketNo: item.ticket_no,
        platformCode: item.platform_code
      };
      return retvale;
    });
  }
  /**
   * 計算用於排序的獎金（統一換算成 MYR）
   * @param currencyCode - 幣別代碼
   * @param originalPrize - 原始獎金金額
   * @param isPersonal - 是否為個人排行榜
   * @returns 換算後的獎金（用於排序）
   */
  calcPrizeForSort(currencyCode, originalPrize, isPersonal = false) {
    const currencyData = isPersonal ? null : this.currencyMap().get(currencyCode);
    const conversionRate = isPersonal ? calc.numberBase : currencyData?.conversion_rate || this.defaultCurrencyConversionRate() || calc.numberBase;
    const amountRatio = isPersonal ? calc.amountRatio : currencyData?.amount_ratio || calc.amountRatio;
    const toMyrRatio = isPersonal ? 1 : currencyData?.to_myr_ratio || 1;
    if (!isPersonal && !currencyData) {
      this.logger.warn(`\u26A0\uFE0F calcPrizeForSort Currency not found: ${currencyCode}, using default values`);
    }
    return originalPrize / conversionRate / amountRatio * toMyrRatio;
  }
  /**
   * 計算倍數
   * @param currencyCode - 幣別代碼
   * @param original - 原始倍數
   * @param isPersonal - 是否為個人排行榜
   * @returns 計算後的倍數
   */
  calcMultiplier(currencyCode, original, isPersonal = false) {
    const conversionRate = isPersonal ? calc.numberBase : this.getCurrencyConversion(currencyCode);
    return Math.floor(original / conversionRate);
  }
  ChangeValueFromServerToDisplay(value, currencyCode, isPersonal = false) {
    const conversionRate = isPersonal ? calc.numberBase : this.getCurrencyConversion(currencyCode);
    const amountRatio = isPersonal ? calc.amountRatio : this.getCurrencyAmountRatio(currencyCode);
    return value / conversionRate / amountRatio;
  }
  /**
   * 格式化獎金字串（包含幣別符號和千分位符號）
   * @param prize - 獎金金額
   * @param currencyCode - 幣別代碼
   * @param customSymbol - 自訂幣別符號（選填，個人排行榜使用）
   * @returns 格式化後的獎金字串，例如: "$1,234.56"
   */
  formatPrizeString(prize, currencyCode, customSymbol) {
    let symbol;
    if (customSymbol) {
      symbol = customSymbol;
    } else {
      const currencyMap = this.currencyMap();
      const currencyData = currencyMap.get(currencyCode);
      symbol = currencyData?.symbol || "";
    }
    const formattedAmount = prize.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    let retstr = `${symbol}${formattedAmount}`;
    return retstr;
  }
  /**
   * 取得幣別兌換率（用於換算成 MYR）
   * @param currencyCode - 幣別代碼
   * @returns 兌換率（to_myr_ratio），若查不到則回傳預設兌換率
   */
  getCurrencyConversion(currencyCode) {
    const currencyMap = this.currencyMap();
    const currencyData = currencyMap.get(currencyCode);
    if (!currencyData || !currencyData.conversion_rate) {
      return this.defaultCurrencyConversionRate();
    }
    return currencyData.conversion_rate;
  }
  /**
   * 取得幣別金額比例
   * @param currencyCode - 幣別代碼
   * @returns 金額比例（amount_ratio），若查不到則回傳 1
   */
  getCurrencyAmountRatio(currencyCode) {
    const currencyMap = this.currencyMap();
    const currencyData = currencyMap.get(currencyCode);
    if (!currencyData || !currencyData.amount_ratio) {
      return calc.amountRatio;
    }
    return currencyData.amount_ratio;
  }
  /**
   * 建立遊戲圖片 URL
   * @param gameId - 遊戲 ID
   * @param iconStr - 圖示檔名
   * @returns 完整的圖片 URL
   */
  buildImageURLString(gameId, iconStr) {
    let l_strURL = location.origin;
    if (l_strURL.includes("192.168") || l_strURL.includes("localhost")) {
      l_strURL = this.session.assetUrl;
    }
    const imageURL = l_strURL + "/icon/" + gameId + "/" + iconStr;
    return imageURL;
  }
  static \u0275fac = function LeaderBoardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaderBoardService)(\u0275\u0275inject(AppInterfaceService), \u0275\u0275inject(LoggerService), \u0275\u0275inject(PlayerWalletService), \u0275\u0275inject(AppI18nService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LeaderBoardService, factory: _LeaderBoardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaderBoardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AppInterfaceService }, { type: LoggerService }, { type: PlayerWalletService }, { type: AppI18nService }], null);
})();

export {
  GACollectorService,
  LeaderBoardService
};
//# sourceMappingURL=chunk-JGNZAH3T.js.map
