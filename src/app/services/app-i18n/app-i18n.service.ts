import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientSessionService } from '../client-session/client-session.service';

/**
 * 多語言翻譯服務
 * 提供類似 NGX-Translate 的 API
 */
@Injectable({
  providedIn: 'root'
})
export class AppI18nService {
  protected http = inject(HttpClient);
  protected session = inject(ClientSessionService); 
  /** 遊戲多語系文字 */
  protected gameWordList = signal<Record<string, string> | null>(null);
  /** 通用文字 */
  protected commonStringList = signal<Record<string, string> | null>(null);
  /** 遊戲名稱多語系文字, key為gameId, value為各語系名稱 */
  protected gameNameList = signal<Record<string, Record<string, string>> | null>(null);
  /** 在localhost執行的時候會改寫這個 */
  protected assetUrl = computed(() => this.session.assetUrlSignal());
  private _replaceByKeyEnabled = signal(false);
  public get replaceByKeyEnabled() { return this._replaceByKeyEnabled.asReadonly(); }
  public enGameName = computed(() => {
    // 如果有客製化的key，先去查詢gameNameId_key是否有對應的名稱
    const customKey = this.customGameKey();
    if (customKey) {
      const customName = this.gameNameList()?.[`${this.session.gameNameId ?? ''}_${customKey}`]?.['en'];
      if (customName) return customName;
    }
    // 默認回傳遊戲名稱ID對應的的英文名稱
    return this.gameNameList()?.[this.session.gameNameId ?? '']?.['en'] ?? 'Advantplay';
  });
  /** 判斷是否已經下載完成共用字串、遊戲字串、遊戲名稱字串 */
  public ready = computed(() => !!this.session.systemRemoteConfig() && !!this.gameWordList() && !!this.commonStringList() && !!this.gameNameList());
  private customGameKey = signal<string | null>(null);
  constructor() {
    effect(() => {
      // 只要 session 的 systemRemoteConfig 下載成功，就會去下載共用字串、遊戲字串、遊戲名稱字串
      if (this.session.systemRemoteConfig()) {
        this.fetchGameNameStringList();
        this.fetchCommonStringList(this.session.language);
        this.fetchGameWordList(this.session.gameId || 'error', this.session.language);
      }
    });
  }

  /** 下載共用英文字串 */
  protected fetchGameNameStringList() {
    const url = `${this.assetUrl()}/game_name.json?v=${this.session.systemVersion()}`;
    this.http.get<Record<string, Record<string, string>>>(url).subscribe(data => {
      this.gameNameList.set(data);
    });
  }

  /** 下載遊戲用字串 */
  protected fetchGameWordList(gameId: string, language: string) {
    const url = `${this.assetUrl()}/system/game_word/${gameId}/${language}/game_word.json?v=${this.session.systemVersion()}`;
    this.http.get<Record<string, string>>(url).subscribe(data => {
      this.gameWordList.set(data);
    });
  }

  /** 設定自訂的遊戲 key */
  assignCustomGameKey(key: string) {
    this.customGameKey.set(key);
  }

  public getGameWordList() {
    return this.gameWordList();
  }

  /** 獲取遊戲字串, 會回傳null的版本, 用來做邏輯的判斷  */
  public gameStr(value: string): string | null {
    const list = this.gameWordList();
    if (!list) return null;

    return list[value] ?? null;
  }

  /** 獲取遊戲翻譯文字（同步） */
  instantGame(key: string, defaultValue?: string): string {
    // 如果開啟了 replaceByKey 功能，直接回傳 key 讓畫面上顯示翻譯鍵值，方便開發或測試
    if (this._replaceByKeyEnabled() && this.gameStr(key)) return `G:${key}`;

    return this.gameStr(key) || defaultValue || key;
  }

  /** 獲取遊戲翻譯文字（與 NGX-Translate 相容） */
  getGame(key: string, defaultValue?: string): string {
    return this.instantGame(key, defaultValue);
  }

  /** 創建響應式遊戲翻譯 Computed */
  computedGame(key: string, defaultValue?: string) {
    return computed(() => this.instantGame(key, defaultValue));
  }

  /** 下載共用字串 */
  protected fetchCommonStringList(language: string)  {
    const url = `${this.assetUrl()}/system/game_word/CommonString/${language}/game_common_word.json?v=${this.session.systemVersion()}`;

      this.http.get<Record<string, string>>(url).subscribe(data => {
        this.commonStringList.set(data);
      });
  }
  
  /** 獲取通用字串 */
  public commonStr(value: string): string | null {
    // 讀取失敗回傳原始值
    const list = this.commonStringList();
    if (!list) return null;

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
  instant(key: string, defaultValue?: string): string {
    // 如果開啟了 replaceByKey 功能，直接回傳 key 讓畫面上顯示翻譯鍵值，方便開發或測試
    if (this._replaceByKeyEnabled() && this.commonStr(key)) return `C:${key}`;

    return this.commonStr(key) || defaultValue || key;
  }

  /**
   * 獲取翻譯文字（返回 Observable，保持與 NGX-Translate 相容）
   * @param key - 翻譯鍵值
   * @param defaultValue - 預設值（可選）
   * @returns 翻譯後的文字（Observable）
   */
  get(key: string, defaultValue?: string): string {
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
  computed(key: string, defaultValue?: string) {
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
  getMany(keys: string[]): Record<string, string> {
    const result: Record<string, string> = {};
    keys.forEach(key => {
      result[key] = this.instant(key);
    });
    return result;
  }

  /**
   * 讓顯示的文字直接替換為翻譯鍵值（用於開發或測試環境）
   * @param enable 
   */
  setReplaceByKeyEnabled(enable: boolean) {
    this._replaceByKeyEnabled.set(enable);
  }
}
