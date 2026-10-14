import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, computed, inject, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LanguageType } from '../../services/player-wallet/language.type';
import { ApInputBox } from "../../../ap-components-lib/ap-input-box/ap-input-box";
import { ApSelectComponent } from "../../../ap-components-lib/ap-select/ap-select.component";
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { SiteUIMode } from '../../services/client-session/client-session.interface';
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';


/**
 * LayoutLoginComponent 用來處理網站頁面的登入功能,
 * 負責處理session, storage, queryParams的相關設定
 * 請注意只會在Dev模式才會啟用
 */
@Component({
  selector: 'layout-login',
  imports: [RouterModule, CommonModule, FormsModule, ApInputBox, ApSelectComponent, ApButtonComponent, ApToggleSwitchComponent],
  templateUrl: './layout-login.component.html',
  host: {
    class:
      'absolute inset-0 flex size-full items-start justify-center overflow-x-hidden overflow-y-auto bg-black p-4 sm:p-6',
  },
})
export class LayoutLoginComponent implements AfterViewInit, OnInit {
  protected session = inject(ClientSessionService);
  protected router = inject(Router);
  protected route = inject(ActivatedRoute);
  protected storage = inject(StorageCtrlService);
  protected history = inject(HistoryCtrlService);
  inputToken = signal<string>('');
  inputUrl = signal<string>('');
  inputAssetUrl = signal<string>('');
  inputGameId = signal<string>('10087');
  inputUIMode = signal<SiteUIMode>('html');
  inputLanguage = signal<LanguageType>('en');
  isCocosEditorHost = signal<boolean>(false);
  inputCocosEditorHost = signal<string | null>(null);
  isCloudHost = signal<boolean>(false);
  inputCloudHost = signal<string | null>(null);
  defaultCloudHost = computed<string>(() => { return `${this.inputAssetUrl()}/${this.inputGameId()}/`; });

  rememberMe = signal<boolean>(false);

  devDomain = 'https://dev.diresoft.net';
  qaDomain = 'https://qa.diresoft.net';
  /** inputToken inputUrl inputAssetUrl inputGameId, 都有數值得時候, 可以login*/
  accepted = computed<boolean>(() => {
    return !!this.inputToken() && !!this.inputUrl() && !!this.inputAssetUrl() && !!this.inputGameId();
  });
  tokenIsInvalid = computed<boolean>(() => {
    // 簡單驗證 token 格式, 這邊只是示範, 實際驗證方式可能會更複雜
    const token = this.inputToken();
    return token.length <= 0;
  });
  platformOptions = signal<ApSelectOption[]>([
    { label: 'Dev', value: 'wss://dev.diresoft.net/api/agent' },
    { label: 'QA', value: 'wss://qa.diresoft.net/api/agent' },
  ]);

  assetUrlOptions = signal<ApSelectOption[]>([
    { label: 'Localhost', value: window.location.origin + "/launch" },
    { label: 'Dev', value: 'https://dev.diresoft.net' },
    { label: 'QA', value: 'https://qa.diresoft.net' },
  ]);

  modeOptions = signal<ApSelectOption[]>([
    { label: 'In-Game', value: 'in-game' },
    { label: 'html', value: 'html' },
  ]);
  languageOptions = signal<ApSelectOption[]>([
    { label: 'English', value: 'en' },
    { label: 'Chinese', value: 'cn' },
    { label: 'Japanese', value: 'ja' },
  ]);

  commonStringDevUrl = computed<string>(() => {
    const lang = this.inputLanguage() || this.session.language || 'en';
    return `${this.devDomain}/system/game_word/CommonString/${lang}/game_common_word.json`;
  });

  commonStringQaUrl = computed<string>(() => {
    const lang = this.inputLanguage() || this.session.language || 'en';
    return `${this.qaDomain}/system/game_word/CommonString/${lang}/game_common_word.json`;
  });

  gameStringDevUrl = computed<string>(() => {
    const lang = this.inputLanguage() || this.session.language || 'en';
    return `${this.devDomain}/system/game_word/${this.inputGameId()}/${lang}/game_word.json`;
  });

  gameStringQaUrl = computed<string>(() => {
    const lang = this.inputLanguage() || this.session.language || 'en';
    return `${this.qaDomain}/system/game_word/${this.inputGameId()}/${lang}/game_word.json`;
  });

  constructor() { }

  ngOnInit(): void {
    // 如果query string有logintoken參數，則帶入token
    const tokenFromQuery = this.route.snapshot.queryParamMap.get('logintoken');
    if (tokenFromQuery) {
      this.inputToken.set(tokenFromQuery);
      this.session.setAuthToken(tokenFromQuery);
    }
  }

  getQuery(param: string): string | null {
    return this.route.snapshot.queryParamMap.get(param);
  }

  /** 無視大小寫讀取 query param（例如 gameid / gameId），空字串視為沒有值 */
  getQueryIgnoreCase(param: string): string | null {
    const map = this.route.snapshot.queryParamMap;
    for (const key of map.keys) {
      if (key.toLowerCase() === param.toLowerCase()) {
        const value = map.get(key);
        return value ? value : null;
      }
    }
    return null;
  }

  ngAfterViewInit() {
    // 如果之前有儲存登入設定，則載入這些設定
    if (this.storage.loginSetting)
      this.rememberMe.set(true);

    // 以query最優先, 然後storage，最後是session和預設值
    const token = this.getQuery('logintoken') ?? this.getQueryIgnoreCase('token') ?? this.storage.loginSetting?.token ?? this.session.authToken ?? '';
    const gameId = this.getQueryIgnoreCase('gameId') ?? this.storage.loginSetting?.gameId ?? this.session.gameId ?? '10087';
    const lang = this.getQuery('lang') ?? this.storage.loginSetting?.language ?? this.session.language ?? 'en';
    const uiModeQuery = this.getQuery('uimode') === '1' ? 'html' : this.getQuery('uimode') === '0' ? 'in-game' : null;
    const uiMode = uiModeQuery ?? this.storage.loginSetting?.uiMode ?? this.session.uimode ?? 'html';
    const url = this.storage.loginSetting?.url ?? this.session.socketUrl ?? 'wss://dev.diresoft.net/api/agent';
    const assetUrl = this.storage.loginSetting?.assetUrl ?? 'https://dev.diresoft.net';

    const cocosEditorHost = this.storage.loginSetting?.cocosEditorHost ?? null;

    // 最後的結果更新到template上
    this.onTokenChange(token);
    this.onUrlChange(url);
    this.onAssetUrlChange(assetUrl);
    this.onGameIdChange(gameId);
    this.onLangChange(lang);
    this.onUIModeChange(uiMode);
    this.onCocosEditorHostChange(cocosEditorHost);

    // cloudhost 以 query 最優先：cloudhost=true 使用預設 cloud host，其他非空值視為自訂 URL
    // （defaultCloudHost 依賴 assetUrl/gameId，所以要在上面的設定完成後才能解析）
    const cloudHostQuery = this.getQueryIgnoreCase('cloudhost');
    const cloudHost = cloudHostQuery
      ? (cloudHostQuery.toLowerCase() === 'true' || cloudHostQuery === '1' ? this.defaultCloudHost() : cloudHostQuery)
      : (this.storage.loginSetting?.cloudHost ?? null);
    this.onCloudHostChange(cloudHost);

    if (cocosEditorHost) {
      this.isCocosEditorHost.set(true);
      this.isCloudHost.set(false);
    }

    if (cloudHost) {
      this.isCloudHost.set(true);
      this.isCocosEditorHost.set(false);
    }

    // 一次性更新所有 URL params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { gameId, lang, logintoken: token },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });

    // 把storage裡的設定同步到session裡
    this.saveLoginSettingToSession();
  }

  /** 頁面切換 UI 模式 */
  onUIModeChange(mode: SiteUIMode) {
    this.inputUIMode.set(mode);
    this.router.navigate([], { relativeTo: this.route, queryParamsHandling: 'merge', replaceUrl: true });
  }

  /** 頁面切換語言 */
  onLangChange(lang: string) {
    this.inputLanguage.set(lang as LanguageType);
    this.router.navigate([], { relativeTo: this.route, queryParams: { lang }, queryParamsHandling: 'merge', replaceUrl: true });
  }

  /** 頁面切換遊戲ID */
  onGameIdChange(id: string) {
    this.inputGameId.set(id);
    this.router.navigate([], { relativeTo: this.route, queryParams: { gameId: id }, queryParamsHandling: 'merge', replaceUrl: true });
  }

  /** 頁面切換 Token */
  onTokenChange(token: string) {
    this.inputToken.set(token);
  }

  /** 頁面切換 Remember Me */
  onRememberMeChange(checked: boolean) {
    this.rememberMe.set(checked);

    if (!checked) {
      this.storage.loginSetting = null; // 取消記住，清除儲存的設定
      this.session.deleteSession(); // 清除 sessionStorage 中的登入資訊
    }
  }

  /** 儲存登入設定到 storage */
  saveLoginSettingToStorage() {
    this.storage.loginSetting = {
      token: this.inputToken(),
      url: this.inputUrl(),
      assetUrl: this.inputAssetUrl(),
      gameId: this.inputGameId(),
      uiMode: this.inputUIMode(),
      language: this.inputLanguage(),
      cocosEditorHost: this.inputCocosEditorHost() ?? undefined,
      cloudHost: this.inputCloudHost() ?? undefined,
    };
  }

  saveLoginSettingToSession() {
    // 登入時在觸發一次 onXXXChange，確保 session 的設定是最新的
    this.session.setAuthToken(this.inputToken());
    this.session.setGameId(this.inputGameId());
    this.session.setSocketUrl(this.inputUrl());
    this.session.setAssetUrl(this.inputAssetUrl());
    this.session.setLanguage(this.inputLanguage());
    this.session.setUIMode(this.inputUIMode());

    if (this.isCloudHost()) {
      this.session.setRemoteHost(this.inputCloudHost());
    }
    else if (this.isCocosEditorHost()) {
      this.session.setRemoteHost(this.inputCocosEditorHost());
    }
    else {
      this.session.setRemoteHost(null);
    }
  }

  onToggleIsCocosEditorHost(checked: boolean) {
    this.isCocosEditorHost.set(checked);
    if (checked) {
      this.isCloudHost.set(false);
      this.onCocosEditorHostChange('http://localhost:7456');
    }
    else {
      this.onCocosEditorHostChange(null);
    }
  }

  onCocosEditorHostChange(value: string | null) {
    this.inputCocosEditorHost.set(value);
  }

  onToggleIsCloudHost(checked: boolean) {
    this.isCloudHost.set(checked);
    if (checked) {
      this.isCocosEditorHost.set(false);
      this.onCloudHostChange(this.inputCloudHost() ?? this.defaultCloudHost());
    } else {
      this.onCloudHostChange(null);
    }
  }

  onCloudHostChange(value: string | null) {
    this.inputCloudHost.set(value);
  }

  /** 頁面切換 url */
  onUrlChange(url: string) {
    this.inputUrl.set(url);
  }

  /** 頁面切換 assetUrl */
  onAssetUrlChange(url: string) {
    this.inputAssetUrl.set(url);
  }

  /** 按下登入按鈕 */
  onLoginClick() {
    this.saveLoginSettingToSession(); // 確保登入設定已經儲存到 session 中
    // 如果 Remember Me 打勾，儲存到 localStorage
    if (this.rememberMe())
      this.saveLoginSettingToStorage();

    this.router.navigate(["/"], {
      queryParams: {
        gameId: this.inputGameId(),
        lang: this.inputLanguage(),
      }
    });
  }

  /** 前往Lab頁面 */
  onLabClick() {
    this.history.forceReplayDisplayed.set(true); // 強制顯示 Replay 按鈕
    this.history.forceShareDisplayed.set(true); // 強制顯示 Share 按鈕

    this.saveLoginSettingToSession(); // 確保登入設定已經儲存到 session 中
    // 如果 Remember Me 打勾，儲存到 localStorage
    if (this.rememberMe())
      this.saveLoginSettingToStorage();

    const mode = this.inputUIMode() === 'html'?'/cover':'/bridge';
    this.router.navigate([`/lab${mode}`], {
      queryParams: {
        gameId: this.inputGameId(),
        lang: this.inputLanguage(),
      }
    });
  }

  onIframeClick() {
    // 直接前往 http://localhost:4200/iframe
    window.location.href = `${window.location.origin}/iframe`;
  }

  /** 前往離線模式頁面 */
  onOfflineClick() {
    this.session.setOffline(true);
    this.router.navigate(["/lab"], {
      queryParams: {
        lang: this.inputLanguage(),
      }
    });
  }

  /** 前往Demo頁面 */
  onDemoClick() {
    this.session.setOffline(true);
    this.router.navigate(["/lab/demo"], {
      queryParams: {
        lang: this.inputLanguage(),
      }
    });
  }

  /** 前往Dev頁面 */
  onDevClick() {
    this.session.setOffline(true);
    this.router.navigate(["/dev"]);
  }
}
