/**
 * 處理登入前端資料的底層服務, 這些都是登入前端之後無法改變的資訊, 不會用到 signl/observable
 * 所有從 query string, session storage 讀取的值都會在這裡統一處理, 包括大小寫問題, 其他地方直接使用 getter 就好
 */

import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { LANGUAGE_MAP, LanguageType } from '../player-wallet/language.type';
import { LoginSetting, SiteUIMode, AppVersionInfo, SystemRemoteConfig, VersionType } from './client-session.interface';
import { useInGameUIlist } from './game-id-list';
import { environment } from '../../../environments/app-environment';
import { HttpClient } from '@angular/common/http';
import { StorageCtrlService } from '../storage-ctrl/storage-ctrl.service';


@Injectable({
  providedIn: 'root'
})
export class ClientSessionService {
  private http = inject(HttpClient);
  private storageCtrl = inject(StorageCtrlService);
  private _authToken: string | null = null;
  /** 取得登入用的 Token */
  public get authToken(): string | null { return this._authToken; }
  private _socketUrl: string | null = null;
  /** 取得 socket 連接的 URL */
  public get socketUrl(): string | null {  return this._socketUrl; }
  private _gameId: string | null = null;
  /** 取得原始遊戲 ID, (用來讀遊戲 asset 的 id, ex: 10XXX) */
  public get gameId(): string | null { return this._gameId; }
  private _gameNameId: string | null = null;
  /** 取得遊戲名稱 ID, (客製化遊戲會是18XXX開頭) */
  public get gameNameId(): string | null { return this._gameNameId; }
  private _language: LanguageType = 'en';
  /** 取得語言設定(前端使用的語系) ex: en, cn */
  public get language(): LanguageType { return this._language; }
  /** UI 模式對應表 */
  readonly uiModeMap: Record<string, 'in-game' | 'html'> = {
    '0': 'in-game',
    '1': 'html'
  };
  private _uimode: SiteUIMode = null;
  /** 取得 UI 模式 */
  public get uimode(): SiteUIMode { return this._uimode; }
  private _offline: boolean = false;
  /** 是否為離線模式 */
  public get offline(): boolean { return this._offline; }
  private _assetUrl = signal<string>('');
  /** asset URL 的domain name*/
  public get assetUrl(): string { return this._assetUrl(); }
  /** asset URL 的domain name signal */
  public get assetUrlSignal() { return this._assetUrl.asReadonly(); }
  private _locale: string = 'en-US';
  /** 取得語言環境(客戶使用的語系) ex: en-US, cn-ZH */
  public get locale(): string { return this._locale; }
  private _backUrl: string | null = null;
  /** 取得轉向的 URL */
  public get backurl(): string | null { return this._backUrl; }
  private _remoteHost: string | null = null;
  /** 是否使用遠端主機的遊戲（cocos edit host / cloud host）*/
  public get remoteHost(): string | null { return this._remoteHost; }
  private _appVersion = signal<string>('unknown');
  /** 版本號 */
  public readonly appVersion = this._appVersion.asReadonly();
  private _systemRemoteConfig = signal<SystemRemoteConfig | null>(null);
  /** System Remote Config */
  public readonly systemRemoteConfig = this._systemRemoteConfig.asReadonly();
  /** System Info Folder版本號 */
  public readonly systemVersion = computed(() => this._systemRemoteConfig()?.LazyGlobalAppVersion ?? 'unknown');
  /** 綜合版本資訊 */
  public readonly version = computed<VersionType>(() => ({
    app: this.appVersion(),
    sys: this.systemVersion()
  }));
  // 新舊交替的時候先保留舊版活動的判斷，方便後續切換
  private _isLatestCampaign: boolean = false;
  /** 是否為新版活動 */
  public get isLatestCampaign(): boolean { return this._isLatestCampaign; }
  private _isCloseInGameBuyFeature: boolean = false;
  /** 是否關閉遊戲內建的Buy Feature */
  public get isCloseInGameBuyFeature(): boolean { return this._isCloseInGameBuyFeature; }
  private _isCloseInGameOpenPromo: boolean = false;
  /** 是否關閉遊戲內建的Open Promo */
  public get isCloseInGameOpenPromo(): boolean { return this._isCloseInGameOpenPromo; }
  constructor(

  ) {
    this._authToken = sessionStorage.getItem("auth") || null;
    this._socketUrl = sessionStorage.getItem("PROXY_URL") || null ;
    const asset = sessionStorage.getItem("ASSET_URL") || null;
    // 預設是目前的domain name
    this._assetUrl.set(asset || window.location.origin);
    this._remoteHost = sessionStorage.getItem("REMOTE_HOST");
    // 直接從query string讀取lang (無視大小寫)
    this._locale = this.queryValue('lang') || 'en-US';
    this._gameNameId = this.queryValue('gameId');
    // 這是用來讀遊戲asset的id, 會有轉換
    this._gameId = this.handleGameId(this.queryValue('gameId'));
    this._language = LANGUAGE_MAP[this.queryValue('lang')?.toLowerCase() || 'en'] || 'en';
    // 根據 query 參數決定 ui 模式, 預設為null
    this._uimode = this.queryValue('uimode') ? this.uiModeMap[this.queryValue('uimode') || ''] : null;
    this._backUrl = this.queryValue('backurl');

    this._isLatestCampaign = this.storageCtrl?.campaignSetting?.mode === 'current';
    this._isCloseInGameBuyFeature = this.storageCtrl?.gameIframeSetting?.closeInGameBuyFeature ?? false;
    this._isCloseInGameOpenPromo = this.storageCtrl?.gameIframeSetting?.closeInGameOpenPromo ?? false;

    window.addEventListener('resize', this.updateOrientation);
    window.addEventListener('orientationchange', this.updateOrientation);

    this.fetchAppVersionInfo();

    // assetUrl 改變時（包含初始化）重新取得版本資訊，確保用的是最新的 assetUrl
    effect(() => {
      this.fetchSystemRemoteConfig();
    });

    if (!environment.production) {
      (window as any).session = this; // 只在開發環境暴露 clientSession 物件到全域，方便調試
    }
  }

  /** 取得 app 版本：優先讀取 build 後注入的 window.__APP_VERSION_INFO__ */
  fetchAppVersionInfo(): void {
    if (window.__APP_VERSION_INFO__) {
      this._appVersion.set(window.__APP_VERSION_INFO__);
      return;
    }
    else {
      this._appVersion.set('unknown');
    }
  }

  /** 從 System Info TimeStamp.json 取得包含 System 資料夾版本和其他遠端參數 */
  fetchSystemRemoteConfig(): void {
    const url = `${this.assetUrlSignal()}/system/Info/TimeStamp.json?v=${this.getCurrentMinutes()}`;
    this.http.get<SystemRemoteConfig>(url).subscribe({
      next: (data) => {
        this._systemRemoteConfig.set(data);
      },
      error: () => {
        this._systemRemoteConfig.set(null);
      },
    });
  }

  /** 
   * 取得目前的分鐘數，並以毫秒為單位回傳
   */
  private getCurrentMinutes(): string {
      const minutesInMs = 60 * 1000; // N minutes in milliseconds
      const now = Date.now();
      let value = Math.floor(now / minutesInMs)
      return (value * minutesInMs).toString();
  }

  handleGameId(id: string | null): string | null {
    // 如果是18XXX的遊戲，統一先轉成10XXX的遊戲，因為目前18XXX的遊戲都是客製化
    if (!id) {
      return null;
    }
    if (id.startsWith('18')) {
      return '10' + id.slice(2);
    }
    return id;
  }

  /** 設定登入用的 Token */
  setAuthToken(token: string) {
    this._authToken = token;
    sessionStorage.setItem("auth", token);
  }

  /** 設定 socket 連接的 URL */
  setSocketUrl(url: string) {
    this._socketUrl = url;
    sessionStorage.setItem("PROXY_URL", url);
  }

  /** 設定 asset URL 的 domain name
   * @param fetchVersionInfo 是否用新的 assetUrl 重新取得版本資訊，若該 domain 不是真正的 CDN asset host（例如 BO report API domain），應傳入 false
   */
  setAssetUrl(url: string) {
    this._assetUrl.set(url);
    sessionStorage.setItem("ASSET_URL", url);
  }

  /** 設定是否使用遠端主機的遊戲（cocos edit host / cloud host） */
  setRemoteHost(host: string | null) {
    this._remoteHost = host;
    if (host) {
      sessionStorage.setItem("REMOTE_HOST", host);
    } else {
      sessionStorage.removeItem("REMOTE_HOST");
    }
  }

  /** 設定語言 */
  setLanguage(lang: LanguageType) {
    this._language = lang;
  }

  /** 設定遊戲 ID */
  setGameId(gameId: string) {
    this._gameId = gameId;
  }

  /** 設定 UI 模式 */
  setUIMode(mode: SiteUIMode) {
    this._uimode = mode;
  }

  /** 設定是否為離線模式 */
  setOffline(offline: boolean) {
    this._offline = offline;
  }

  /** 取得目前的登入設定 */
  public get setting(): LoginSetting {
    return {
      gameId: this._gameId || '',
      socketUrl: this._socketUrl || '',
      assetUrl: this._assetUrl() || '',
      authToken: this._authToken || '',
      language: this._language,
      offline: this._offline
    };
  }

  public deleteSession() {
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("PROXY_URL");
    this._authToken = null;
    this._socketUrl = null;
    this._assetUrl.set('');
  }

  /** 目前的遊戲是不是使用舊的 in-game UI */
  get isUseInGameUI(): boolean {
    return useInGameUIlist.includes(this._gameId || '');
  }

  get isUseHtmlUI(): boolean {
    return !this.isUseInGameUI;
  }

  get isGhanaUI(): boolean {
    return this._gameId === '28003';
  }

  get isOgUI(): boolean {
    return this._gameId === '38011';
  }

  /** 非3開頭, 非18開頭的遊戲, 目前包括 10XXX, 20XXX 等 */
  get isApGame(): boolean {
    return this._gameId !== null && !this._gameId.startsWith('3') && !this._gameId.startsWith('18');
  }

  /** 1開頭, 2開頭的遊戲 */
  get isSlotGame(): boolean {
    return this._gameId !== null && (this._gameId.startsWith('1') || this._gameId.startsWith('2'));
  }

  /** 僅開啟Socket通道, 無額外功能*/
  get isSocketOnly(): boolean {
    // gameId為3開頭的
    return this._gameId !== null && this._gameId.startsWith('3');
  }

  /** 需要轉向login頁面 */
  public get needLogin(): boolean {
    if (this.offline)
      return false; // 離線模式不需要登入
    else
      return this._authToken === null || this._socketUrl === null || this._gameId === null; // 非離線模式需要這些資料
  }

  /** 直接無視key的大小寫 讀取query string裡的值 */
  protected queryValue(key: string): string | null {
    const params = new URLSearchParams(window.location.search);
    for (const [k, v] of params.entries()) {
      if (k.toLowerCase() === key.toLowerCase()) {
        return v;
      }
    }
    return null;
  }

  /** 根據 user agent 判斷是否為移動設備 */
  readonly isMobile = signal<boolean>(this.getMobile());

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
  

  getMobile(): boolean {
    const ua = navigator.userAgent;
    if (/Android|iPhone|iPad|iPod|IEMobile|Opera Mini|Mobile|mobile/i.test(ua)) {
      return true;
    }
    return false;
  }

  readonly isLandscape = signal<boolean>(window.innerWidth > window.innerHeight);
  readonly isPortrait = computed(() => !this.isLandscape());
  readonly isNarrow = signal<boolean>(window.innerWidth < 640);

  /** 判斷瀏覽器是否開啟 devtools（依 dock 模式下的視窗尺寸差異推斷，無法偵測獨立視窗模式） */
  readonly isDevToolsOpen = signal<boolean>(this.getDevToolsOpen());

  private getDevToolsOpen(): boolean {
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    return widthDiff > threshold || heightDiff > threshold;
  }

  private updateOrientation = () => {
    this.isMobile.set(this.getMobile());
    this.isLandscape.set(window.innerWidth > window.innerHeight);
    this.isNarrow.set(window.innerWidth < 640);
    this.isDevToolsOpen.set(this.getDevToolsOpen());
  };

  isLocalSession(): boolean {
    const origin = window.location.origin;
    return origin.includes("localhost") || origin.includes("192.168");
  }
}
