import {
  ClientSessionService
} from "./chunk-B2M5HODU.js";
import {
  HttpClient
} from "./chunk-FH2ESRL7.js";
import {
  Injectable,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/app/services/app-i18n/app-i18n.service.ts
var AppI18nService = class _AppI18nService {
  http = inject(HttpClient);
  session = inject(ClientSessionService);
  /** 遊戲多語系文字 */
  gameWordList = signal(null);
  /** 通用文字 */
  commonStringList = signal(null);
  /** 遊戲名稱多語系文字, key為gameId, value為各語系名稱 */
  gameNameList = signal(null);
  /** 在localhost執行的時候會改寫這個 */
  assetUrl = computed(() => this.session.assetUrlSignal());
  _replaceByKeyEnabled = signal(false);
  get replaceByKeyEnabled() {
    return this._replaceByKeyEnabled.asReadonly();
  }
  enGameName = computed(() => {
    const customKey = this.customGameKey();
    if (customKey) {
      const customName = this.gameNameList()?.[`${this.session.gameNameId ?? ""}_${customKey}`]?.["en"];
      if (customName)
        return customName;
    }
    return this.gameNameList()?.[this.session.gameNameId ?? ""]?.["en"] ?? "Advantplay";
  });
  /** 判斷是否已經下載完成共用字串、遊戲字串、遊戲名稱字串 */
  ready = computed(() => !!this.session.systemRemoteConfig() && !!this.gameWordList() && !!this.commonStringList() && !!this.gameNameList());
  customGameKey = signal(null);
  constructor() {
    effect(() => {
      if (this.session.systemRemoteConfig()) {
        this.fetchGameNameStringList();
        this.fetchCommonStringList(this.session.language);
        this.fetchGameWordList(this.session.gameId || "error", this.session.language);
      }
    });
  }
  /** 下載共用英文字串 */
  fetchGameNameStringList() {
    const url = `${this.assetUrl()}/game_name.json?v=${this.session.systemVersion()}`;
    this.http.get(url).subscribe((data) => {
      this.gameNameList.set(data);
    });
  }
  /** 下載遊戲用字串 */
  fetchGameWordList(gameId, language) {
    const url = `${this.assetUrl()}/system/game_word/${gameId}/${language}/game_word.json?v=${this.session.systemVersion()}`;
    this.http.get(url).subscribe((data) => {
      this.gameWordList.set(data);
    });
  }
  /** 設定自訂的遊戲 key */
  assignCustomGameKey(key) {
    this.customGameKey.set(key);
  }
  getGameWordList() {
    return this.gameWordList();
  }
  /** 獲取遊戲字串, 會回傳null的版本, 用來做邏輯的判斷  */
  gameStr(value) {
    const list = this.gameWordList();
    if (!list)
      return null;
    return list[value] ?? null;
  }
  /** 獲取遊戲翻譯文字（同步） */
  instantGame(key, defaultValue) {
    if (this._replaceByKeyEnabled() && this.gameStr(key))
      return `G:${key}`;
    return this.gameStr(key) || defaultValue || key;
  }
  /** 獲取遊戲翻譯文字（與 NGX-Translate 相容） */
  getGame(key, defaultValue) {
    return this.instantGame(key, defaultValue);
  }
  /** 創建響應式遊戲翻譯 Computed */
  computedGame(key, defaultValue) {
    return computed(() => this.instantGame(key, defaultValue));
  }
  /** 下載共用字串 */
  fetchCommonStringList(language) {
    const url = `${this.assetUrl()}/system/game_word/CommonString/${language}/game_common_word.json?v=${this.session.systemVersion()}`;
    this.http.get(url).subscribe((data) => {
      this.commonStringList.set(data);
    });
  }
  /** 獲取通用字串 */
  commonStr(value) {
    const list = this.commonStringList();
    if (!list)
      return null;
    return list[value] ?? null;
  }
  /**
   * 獲取翻譯文字（同步）
   * @param key - 翻譯鍵值
   * @param defaultValue - 預設值（可選）
   * @returns 翻譯後的文字
   * @example
   * this.appI18n.instant('leaderBoard_title') // → '排行榜'
   * this.appI18n.instant('unknown_key', '預設文字') // → '預設文字'
   */
  instant(key, defaultValue) {
    if (this._replaceByKeyEnabled() && this.commonStr(key))
      return `C:${key}`;
    return this.commonStr(key) || defaultValue || key;
  }
  /**
   * 獲取翻譯文字（返回 Observable，保持與 NGX-Translate 相容）
   * @param key - 翻譯鍵值
   * @param defaultValue - 預設值（可選）
   * @returns 翻譯後的文字（Observable）
   */
  get(key, defaultValue) {
    return this.instant(key, defaultValue);
  }
  /**
   * 創建響應式翻譯 Computed
   * @param key - 翻譯鍵值
   * @param defaultValue - 預設值（可選）
   * @returns Computed Signal
   * @example
   * readonly title = this.appI18n.computed('leaderBoard_title', '排行榜');
   * // 在模板中使用：{{ title() }}
   */
  computed(key, defaultValue) {
    return computed(() => this.instant(key, defaultValue));
  }
  /**
   * 批量獲取翻譯
   * @param keys - 翻譯鍵值陣列
   * @returns 翻譯結果物件
   * @example
   * const translations = this.appI18n.getMany(['key1', 'key2']);
   * // { key1: '翻譯1', key2: '翻譯2' }
   */
  getMany(keys) {
    const result = {};
    keys.forEach((key) => {
      result[key] = this.instant(key);
    });
    return result;
  }
  /**
   * 讓顯示的文字直接替換為翻譯鍵值（用於開發或測試環境）
   * @param enable
   */
  setReplaceByKeyEnabled(enable) {
    this._replaceByKeyEnabled.set(enable);
  }
  static \u0275fac = function AppI18nService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppI18nService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppI18nService, factory: _AppI18nService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppI18nService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  AppI18nService
};
//# sourceMappingURL=chunk-MTOHY3QQ.js.map
