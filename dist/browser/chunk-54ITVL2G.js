import {
  HttpClient
} from "./chunk-FH2ESRL7.js";
import {
  Injectable,
  __spreadValues,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/environments/app-environment.ts
var environment = {
  production: false
};

// src/chiikawa/Common/UseInGameUIList.ts
var UseInGameUIIDArray = [
  "10022",
  "10027",
  "10028",
  "10029",
  "10030",
  "10031",
  "10032",
  "10033",
  "10034",
  "10035",
  "10036",
  "10037",
  "10038",
  "10039",
  "10040",
  "10041",
  "10042",
  "10043",
  "10044",
  "10045",
  "10046",
  "10047",
  "10048",
  "10049",
  "10050",
  "10051",
  "10052",
  "10053",
  "10054",
  "10055",
  "10056",
  "10057",
  "10058",
  "10059",
  "10060",
  "10061",
  "10062",
  "10063",
  "10064",
  "10065",
  "10066",
  "10067",
  "10069",
  "10071",
  "10072",
  "10080",
  "10088",
  "10091",
  "20001",
  "30001",
  "30002",
  "30003",
  "30004",
  "30005",
  "30006",
  "30007",
  "30008",
  "30009",
  "38003",
  "38005"
  //"10070","10073", "10074","10076", "10077","10081", "10082", "10083", "10084","10096"
  //68,75,79,90,98,87,93 finished
  //"10070","10073","10096"
];

// src/app/services/client-session/game-id-list.ts
var useInGameUIlist = UseInGameUIIDArray || [];

// src/app/services/storage-ctrl/storage-ctrl.service.ts
var StorageCtrlService = class _StorageCtrlService {
  KEYS = {
    LOGIN_SETTING: "ap_storage_login_setting",
    CAMPAIGN_GROUPS_CLICKED: "ap_storage_campaign_groups_clicked",
    CASHDROP_CLICKED: "ap_storage_cashdrop_clicked",
    TRN_GAME_CONFIRM_DONT_SHOW: "ap_storage_trn_game_confirm_dont_show",
    TRN_EVENT_RUNNING: "ap_storage_trn_event_running",
    LOGGER_SETTINGS: "ap_storage_logger_settings",
    CAMPAIGN_SETTING: "ap_storage_campaign_setting",
    CAMPAIGN_MESSAGE_SHOWN: "ap_storage_campaign_message_shown",
    GAME_IFRAME_SETTING: "ap_storage_game_iframe_setting"
  };
  // 用來給偵測用的signal, 實際的值還是存在localStorage裡面
  campaignGroupsClickedSignal = signal(this.getItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED));
  cashDropClickedSignal = signal(this.getItem(this.KEYS.CASHDROP_CLICKED));
  constructor() {
  }
  // --- 核心 helper 方法 (私有) ---
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("LocalStorage write error", e);
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
    } else {
      this.setItem(this.KEYS.TRN_GAME_CONFIRM_DONT_SHOW, value);
    }
  }
  get trnEventRunning() {
    return this.getItem(this.KEYS.TRN_EVENT_RUNNING);
  }
  set trnEventRunning(value) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.TRN_EVENT_RUNNING);
    } else {
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
    } else {
      this.setItem(this.KEYS.LOGIN_SETTING, value);
    }
  }
  get campaignGroupsClicked() {
    return this.getItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED);
  }
  set campaignGroupsClicked(value) {
    this.campaignGroupsClickedSignal.set(value);
    if (value === null) {
      localStorage.removeItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED);
    } else {
      this.setItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED, value);
    }
  }
  get cashDropClicked() {
    return this.getItem(this.KEYS.CASHDROP_CLICKED);
  }
  set cashDropClicked(value) {
    this.cashDropClickedSignal.set(value);
    if (value === null) {
      localStorage.removeItem(this.KEYS.CASHDROP_CLICKED);
    } else {
      this.setItem(this.KEYS.CASHDROP_CLICKED, value);
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
      this.loginSetting = __spreadValues(__spreadValues({}, current), partialValue);
    }
  }
  get loggerSettings() {
    return this.getItem(this.KEYS.LOGGER_SETTINGS);
  }
  set loggerSettings(value) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.LOGGER_SETTINGS);
    } else {
      this.setItem(this.KEYS.LOGGER_SETTINGS, value);
    }
  }
  get campaignSetting() {
    return this.getItem(this.KEYS.CAMPAIGN_SETTING);
  }
  set campaignSetting(value) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.CAMPAIGN_SETTING);
    } else {
      this.setItem(this.KEYS.CAMPAIGN_SETTING, value);
    }
  }
  get campaignMessageShown() {
    return this.getItem(this.KEYS.CAMPAIGN_MESSAGE_SHOWN);
  }
  set campaignMessageShown(value) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.CAMPAIGN_MESSAGE_SHOWN);
    } else {
      this.setItem(this.KEYS.CAMPAIGN_MESSAGE_SHOWN, value);
    }
  }
  /**
   * 檢查活動今天是否已經提示過
   * @param type 提示類型 (joined / claimed)
   * @param id 活動 id
   */
  isCampaignMessageShownToday(type, id) {
    const list = this.campaignMessageShown?.[type] ?? [];
    return list.some((item) => item.id === id && this.isToday(item.time));
  }
  /**
   * 記錄活動今天已經提示過, 同時清除非今天的紀錄
   * @param type 提示類型 (joined / claimed)
   * @param id 活動 id
   */
  markCampaignMessageShown(type, id) {
    const current = this.campaignMessageShown;
    const shown = {
      joined: (current?.joined ?? []).filter((item) => this.isToday(item.time)),
      claimed: (current?.claimed ?? []).filter((item) => this.isToday(item.time))
    };
    shown[type] = [...shown[type].filter((item) => item.id !== id), { id, time: Date.now() }];
    this.campaignMessageShown = shown;
  }
  /** 時間戳是否為今天 (以本地時區判斷) */
  isToday(time) {
    return new Date(time).toDateString() === (/* @__PURE__ */ new Date()).toDateString();
  }
  get gameIframeSetting() {
    return this.getItem(this.KEYS.GAME_IFRAME_SETTING);
  }
  set gameIframeSetting(value) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.GAME_IFRAME_SETTING);
    } else {
      this.setItem(this.KEYS.GAME_IFRAME_SETTING, value);
    }
  }
  /**
   * 部分更新 Game Iframe Setting
   * @param partialValue 部分 Game Iframe Setting 內容
   */
  patchGameIframeSetting(partialValue) {
    const current = this.gameIframeSetting;
    if (current) {
      this.gameIframeSetting = __spreadValues(__spreadValues({}, current), partialValue);
    }
  }
  /**
   * 清除所有 LocalStorage (請謹慎使用)
   */
  clearAll() {
    localStorage.clear();
  }
  static \u0275fac = function StorageCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageCtrlService, factory: _StorageCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/player-wallet/language.type.ts
var LANGUAGE_MAP = {
  "en": "en",
  "en-us": "en",
  "cn": "cn",
  "zh-cn": "cn",
  "id": "id",
  "id-id": "id",
  "th": "th",
  "th-th": "th",
  "vi": "vi",
  "vi-vn": "vi",
  "kr": "ko",
  "ko": "ko",
  "ko-kr": "ko",
  "pt": "pt",
  "pt-pt": "pt",
  "my": "my",
  "my-mm": "my",
  "kh": "km",
  "km": "km",
  "km-kh": "km",
  "ja": "ja",
  "ja-jp": "ja",
  "hi": "hi",
  "hi-in": "hi",
  "ru": "ru",
  "ru-ru": "ru",
  "tr": "tr",
  "tr-tr": "tr",
  "bn": "bn",
  "bn-bd": "bn"
};

// src/app/services/client-session/client-session.service.ts
var ClientSessionService = class _ClientSessionService {
  http = inject(HttpClient);
  storageCtrl = inject(StorageCtrlService);
  _authToken = null;
  /** 取得登入用的 Token */
  get authToken() {
    return this._authToken;
  }
  _socketUrl = null;
  /** 取得 socket 連接的 URL */
  get socketUrl() {
    return this._socketUrl;
  }
  _gameId = null;
  /** 取得原始遊戲 ID, (用來讀遊戲 asset 的 id, ex: 10XXX) */
  get gameId() {
    return this._gameId;
  }
  _gameNameId = null;
  /** 取得遊戲名稱 ID, (客製化遊戲會是18XXX開頭) */
  get gameNameId() {
    return this._gameNameId;
  }
  _language = "en";
  /** 取得語言設定(前端使用的語系) ex: en, cn */
  get language() {
    return this._language;
  }
  /** UI 模式對應表 */
  uiModeMap = {
    "0": "in-game",
    "1": "html"
  };
  _uimode = null;
  /** 取得 UI 模式 */
  get uimode() {
    return this._uimode;
  }
  _offline = false;
  /** 是否為離線模式 */
  get offline() {
    return this._offline;
  }
  _assetUrl = signal("");
  /** asset URL 的domain name*/
  get assetUrl() {
    return this._assetUrl();
  }
  /** asset URL 的domain name signal */
  get assetUrlSignal() {
    return this._assetUrl.asReadonly();
  }
  _locale = "en-US";
  /** 取得語言環境(客戶使用的語系) ex: en-US, cn-ZH */
  get locale() {
    return this._locale;
  }
  _backUrl = null;
  /** 取得轉向的 URL */
  get backurl() {
    return this._backUrl;
  }
  _remoteHost = null;
  /** 是否使用遠端主機的遊戲（cocos edit host / cloud host）*/
  get remoteHost() {
    return this._remoteHost;
  }
  _appVersion = signal("unknown");
  /** 版本號 */
  appVersion = this._appVersion.asReadonly();
  _systemRemoteConfig = signal(null);
  /** System Remote Config */
  systemRemoteConfig = this._systemRemoteConfig.asReadonly();
  /** System Info Folder版本號 */
  systemVersion = computed(() => this._systemRemoteConfig()?.LazyGlobalAppVersion ?? "unknown");
  /** 綜合版本資訊 */
  version = computed(() => ({
    app: this.appVersion(),
    sys: this.systemVersion()
  }));
  // 新舊交替的時候先保留舊版活動的判斷，方便後續切換
  _isLatestCampaign = false;
  /** 是否為新版活動 */
  get isLatestCampaign() {
    return this._isLatestCampaign;
  }
  _isCloseInGameBuyFeature = false;
  /** 是否關閉遊戲內建的Buy Feature */
  get isCloseInGameBuyFeature() {
    return this._isCloseInGameBuyFeature;
  }
  _isCloseInGameOpenPromo = false;
  /** 是否關閉遊戲內建的Open Promo */
  get isCloseInGameOpenPromo() {
    return this._isCloseInGameOpenPromo;
  }
  _isUseInGameEventCenterButton = false;
  /** 是否使用遊戲內建的Event Center Button */
  get isUseInGameEventCenterButton() {
    return this._isUseInGameEventCenterButton;
  }
  constructor() {
    this._authToken = sessionStorage.getItem("auth") || null;
    this._socketUrl = sessionStorage.getItem("PROXY_URL") || null;
    const asset = sessionStorage.getItem("ASSET_URL") || null;
    this._assetUrl.set(asset || window.location.origin);
    this._remoteHost = sessionStorage.getItem("REMOTE_HOST");
    this._locale = this.queryValue("lang") || "en-US";
    this._gameNameId = this.queryValue("gameId");
    this._gameId = this.handleGameId(this.queryValue("gameId"));
    this._language = LANGUAGE_MAP[this.queryValue("lang")?.toLowerCase() || "en"] || "en";
    this._uimode = this.queryValue("uimode") ? this.uiModeMap[this.queryValue("uimode") || ""] : null;
    this._backUrl = this.queryValue("backurl");
    this._isLatestCampaign = this.storageCtrl?.campaignSetting?.mode === "current";
    this._isCloseInGameBuyFeature = this.storageCtrl?.gameIframeSetting?.closeInGameBuyFeature ?? false;
    this._isCloseInGameOpenPromo = this.storageCtrl?.gameIframeSetting?.closeInGameOpenPromo ?? false;
    this._isUseInGameEventCenterButton = this.storageCtrl?.gameIframeSetting?.useInGameEventCenterButton ?? false;
    window.addEventListener("resize", this.updateOrientation);
    window.addEventListener("orientationchange", this.updateOrientation);
    this.fetchAppVersionInfo();
    effect(() => {
      this.fetchSystemRemoteConfig();
    });
    if (!environment.production) {
      window.session = this;
    }
  }
  /** 取得 app 版本：優先讀取 build 後注入的 window.__APP_VERSION_INFO__ */
  fetchAppVersionInfo() {
    if (window.__APP_VERSION_INFO__) {
      this._appVersion.set(window.__APP_VERSION_INFO__);
      return;
    } else {
      this._appVersion.set("unknown");
    }
  }
  /** 從 System Info TimeStamp.json 取得包含 System 資料夾版本和其他遠端參數 */
  fetchSystemRemoteConfig() {
    const url = `${this.assetUrlSignal()}/system/Info/TimeStamp.json?v=${this.getCurrentMinutes()}`;
    this.http.get(url).subscribe({
      next: (data) => {
        this._systemRemoteConfig.set(data);
      },
      error: () => {
        this._systemRemoteConfig.set(null);
      }
    });
  }
  /**
   * 取得目前的分鐘數，並以毫秒為單位回傳
   */
  getCurrentMinutes() {
    const minutesInMs = 60 * 1e3;
    const now = Date.now();
    let value = Math.floor(now / minutesInMs);
    return (value * minutesInMs).toString();
  }
  handleGameId(id) {
    if (!id) {
      return null;
    }
    if (id.startsWith("18")) {
      return "10" + id.slice(2);
    }
    return id;
  }
  /** 設定登入用的 Token */
  setAuthToken(token) {
    this._authToken = token;
    sessionStorage.setItem("auth", token);
  }
  /** 設定 socket 連接的 URL */
  setSocketUrl(url) {
    this._socketUrl = url;
    sessionStorage.setItem("PROXY_URL", url);
  }
  /** 設定 asset URL 的 domain name
   * @param fetchVersionInfo 是否用新的 assetUrl 重新取得版本資訊，若該 domain 不是真正的 CDN asset host（例如 BO report API domain），應傳入 false
   */
  setAssetUrl(url) {
    this._assetUrl.set(url);
    sessionStorage.setItem("ASSET_URL", url);
  }
  /** 設定是否使用遠端主機的遊戲（cocos edit host / cloud host） */
  setRemoteHost(host) {
    this._remoteHost = host;
    if (host) {
      sessionStorage.setItem("REMOTE_HOST", host);
    } else {
      sessionStorage.removeItem("REMOTE_HOST");
    }
  }
  /** 設定語言 */
  setLanguage(lang) {
    this._language = lang;
  }
  /** 設定遊戲 ID */
  setGameId(gameId) {
    this._gameId = gameId;
  }
  /** 設定 UI 模式 */
  setUIMode(mode) {
    this._uimode = mode;
  }
  /** 設定是否為離線模式 */
  setOffline(offline) {
    this._offline = offline;
  }
  /** 取得目前的登入設定 */
  get setting() {
    return {
      gameId: this._gameId || "",
      socketUrl: this._socketUrl || "",
      assetUrl: this._assetUrl() || "",
      authToken: this._authToken || "",
      language: this._language,
      offline: this._offline
    };
  }
  deleteSession() {
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("PROXY_URL");
    this._authToken = null;
    this._socketUrl = null;
    this._assetUrl.set("");
  }
  /** 目前的遊戲是不是使用舊的 in-game UI */
  get isUseInGameUI() {
    return useInGameUIlist.includes(this._gameId || "");
  }
  get isUseHtmlUI() {
    return !this.isUseInGameUI;
  }
  get isGhanaUI() {
    return this._gameId === "28003";
  }
  get isOgUI() {
    return this._gameId === "38011";
  }
  /** 非3開頭, 非18開頭的遊戲, 目前包括 10XXX, 20XXX 等 */
  get isApGame() {
    return this._gameId !== null && !this._gameId.startsWith("3") && !this._gameId.startsWith("18");
  }
  /** 1開頭, 2開頭的遊戲 */
  get isSlotGame() {
    return this._gameId !== null && (this._gameId.startsWith("1") || this._gameId.startsWith("2"));
  }
  /** 僅開啟Socket通道, 無額外功能*/
  get isSocketOnly() {
    return this._gameId !== null && this._gameId.startsWith("3");
  }
  /** 需要轉向login頁面 */
  get needLogin() {
    if (this.offline)
      return false;
    else
      return this._authToken === null || this._socketUrl === null || this._gameId === null;
  }
  /** 直接無視key的大小寫 讀取query string裡的值 */
  queryValue(key) {
    const params = new URLSearchParams(window.location.search);
    for (const [k, v] of params.entries()) {
      if (k.toLowerCase() === key.toLowerCase()) {
        return v;
      }
    }
    return null;
  }
  /** 根據 user agent 判斷是否為移動設備 */
  isMobile = signal(this.getMobile());
  /**
   * 判斷是否為移動設備
   * 改為用 navigator.userAgent 比對 Android / iPhone / iPad / iPod / IEMobile / Opera Mini 等裝置字串
   * 不再依賴螢幕寬度。
   *
   * @returns boolean - true 表示移動設備，false 表示桌面設備
   *
   * @example
   * ```typescript
   * if (this.commonFunction.isMobile()) {
   *   // 移動設備邏輯
   * } else {
   *   // 桌面設備邏輯
   * }
   * ```
   */
  getMobile() {
    const ua = navigator.userAgent;
    if (/Android|iPhone|iPad|iPod|IEMobile|Opera Mini|Mobile|mobile/i.test(ua)) {
      return true;
    }
    return false;
  }
  isLandscape = signal(window.innerWidth > window.innerHeight);
  isPortrait = computed(() => !this.isLandscape());
  isNarrow = signal(window.innerWidth < 640);
  /** 判斷瀏覽器是否開啟 devtools（依 dock 模式下的視窗尺寸差異推斷，無法偵測獨立視窗模式） */
  isDevToolsOpen = signal(this.getDevToolsOpen());
  getDevToolsOpen() {
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    return widthDiff > threshold || heightDiff > threshold;
  }
  updateOrientation = () => {
    this.isMobile.set(this.getMobile());
    this.isLandscape.set(window.innerWidth > window.innerHeight);
    this.isNarrow.set(window.innerWidth < 640);
    this.isDevToolsOpen.set(this.getDevToolsOpen());
  };
  isLocalSession() {
    const origin = window.location.origin;
    return origin.includes("localhost") || origin.includes("192.168");
  }
  static \u0275fac = function ClientSessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientSessionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientSessionService, factory: _ClientSessionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientSessionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  environment,
  LANGUAGE_MAP,
  useInGameUIlist,
  StorageCtrlService,
  ClientSessionService
};
//# sourceMappingURL=chunk-54ITVL2G.js.map
