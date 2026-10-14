import {
  FormsModule
} from "./chunk-7RUHSQL3.js";
import {
  ApInputBox
} from "./chunk-H6P7MZH6.js";
import {
  HistoryCtrlService
} from "./chunk-5MA7HBPU.js";
import {
  ApSelectComponent
} from "./chunk-5KYQQMTR.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-YG42UXQC.js";
import "./chunk-TBKOLJZS.js";
import {
  ApToggleSwitchComponent
} from "./chunk-MKS37EB3.js";
import {
  ApButtonComponent
} from "./chunk-3HIHH7J6.js";
import "./chunk-YL37OG34.js";
import "./chunk-Q3NF4QZ2.js";
import "./chunk-TIGXKRQH.js";
import {
  ClientSessionService,
  StorageCtrlService
} from "./chunk-B2M5HODU.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-QGU3BS3L.js";

// src/app/layouts/layout-login/layout-login.component.ts
var LayoutLoginComponent = class _LayoutLoginComponent {
  session = inject(ClientSessionService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  storage = inject(StorageCtrlService);
  history = inject(HistoryCtrlService);
  inputToken = signal("");
  inputUrl = signal("");
  inputAssetUrl = signal("");
  inputGameId = signal("10087");
  inputUIMode = signal("html");
  inputLanguage = signal("en");
  isCocosEditorHost = signal(false);
  inputCocosEditorHost = signal(null);
  isCloudHost = signal(false);
  inputCloudHost = signal(null);
  defaultCloudHost = computed(() => {
    return `${this.inputAssetUrl()}/${this.inputGameId()}/`;
  });
  rememberMe = signal(false);
  devDomain = "https://dev.diresoft.net";
  qaDomain = "https://qa.diresoft.net";
  /** inputToken inputUrl inputAssetUrl inputGameId, 都有數值得時候, 可以login*/
  accepted = computed(() => {
    return !!this.inputToken() && !!this.inputUrl() && !!this.inputAssetUrl() && !!this.inputGameId();
  });
  tokenIsInvalid = computed(() => {
    const token = this.inputToken();
    return token.length <= 0;
  });
  platformOptions = signal([
    { label: "Dev", value: "wss://dev.diresoft.net/api/agent" },
    { label: "QA", value: "wss://qa.diresoft.net/api/agent" }
  ]);
  assetUrlOptions = signal([
    { label: "Localhost", value: window.location.origin + "/launch" },
    { label: "Dev", value: "https://dev.diresoft.net" },
    { label: "QA", value: "https://qa.diresoft.net" }
  ]);
  modeOptions = signal([
    { label: "In-Game", value: "in-game" },
    { label: "html", value: "html" }
  ]);
  languageOptions = signal([
    { label: "English", value: "en" },
    { label: "Chinese", value: "cn" },
    { label: "Japanese", value: "ja" }
  ]);
  commonStringDevUrl = computed(() => {
    const lang = this.inputLanguage() || this.session.language || "en";
    return `${this.devDomain}/system/game_word/CommonString/${lang}/game_common_word.json`;
  });
  commonStringQaUrl = computed(() => {
    const lang = this.inputLanguage() || this.session.language || "en";
    return `${this.qaDomain}/system/game_word/CommonString/${lang}/game_common_word.json`;
  });
  gameStringDevUrl = computed(() => {
    const lang = this.inputLanguage() || this.session.language || "en";
    return `${this.devDomain}/system/game_word/${this.inputGameId()}/${lang}/game_word.json`;
  });
  gameStringQaUrl = computed(() => {
    const lang = this.inputLanguage() || this.session.language || "en";
    return `${this.qaDomain}/system/game_word/${this.inputGameId()}/${lang}/game_word.json`;
  });
  constructor() {
  }
  ngOnInit() {
    const tokenFromQuery = this.route.snapshot.queryParamMap.get("logintoken");
    if (tokenFromQuery) {
      this.inputToken.set(tokenFromQuery);
      this.session.setAuthToken(tokenFromQuery);
    }
  }
  getQuery(param) {
    return this.route.snapshot.queryParamMap.get(param);
  }
  /** 無視大小寫讀取 query param（例如 gameid / gameId），空字串視為沒有值 */
  getQueryIgnoreCase(param) {
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
    if (this.storage.loginSetting)
      this.rememberMe.set(true);
    const token = this.getQuery("logintoken") ?? this.getQueryIgnoreCase("token") ?? this.storage.loginSetting?.token ?? this.session.authToken ?? "";
    const gameId = this.getQueryIgnoreCase("gameId") ?? this.storage.loginSetting?.gameId ?? this.session.gameId ?? "10087";
    const lang = this.getQuery("lang") ?? this.storage.loginSetting?.language ?? this.session.language ?? "en";
    const uiModeQuery = this.getQuery("uimode") === "1" ? "html" : this.getQuery("uimode") === "0" ? "in-game" : null;
    const uiMode = uiModeQuery ?? this.storage.loginSetting?.uiMode ?? this.session.uimode ?? "html";
    const url = this.storage.loginSetting?.url ?? this.session.socketUrl ?? "wss://dev.diresoft.net/api/agent";
    const assetUrl = this.storage.loginSetting?.assetUrl ?? "https://dev.diresoft.net";
    const cocosEditorHost = this.storage.loginSetting?.cocosEditorHost ?? null;
    this.onTokenChange(token);
    this.onUrlChange(url);
    this.onAssetUrlChange(assetUrl);
    this.onGameIdChange(gameId);
    this.onLangChange(lang);
    this.onUIModeChange(uiMode);
    this.onCocosEditorHostChange(cocosEditorHost);
    const cloudHostQuery = this.getQueryIgnoreCase("cloudhost");
    const cloudHost = cloudHostQuery ? cloudHostQuery.toLowerCase() === "true" || cloudHostQuery === "1" ? this.defaultCloudHost() : cloudHostQuery : this.storage.loginSetting?.cloudHost ?? null;
    this.onCloudHostChange(cloudHost);
    if (cocosEditorHost) {
      this.isCocosEditorHost.set(true);
      this.isCloudHost.set(false);
    }
    if (cloudHost) {
      this.isCloudHost.set(true);
      this.isCocosEditorHost.set(false);
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { gameId, lang, logintoken: token },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    this.saveLoginSettingToSession();
  }
  /** 頁面切換 UI 模式 */
  onUIModeChange(mode) {
    this.inputUIMode.set(mode);
    this.router.navigate([], { relativeTo: this.route, queryParamsHandling: "merge", replaceUrl: true });
  }
  /** 頁面切換語言 */
  onLangChange(lang) {
    this.inputLanguage.set(lang);
    this.router.navigate([], { relativeTo: this.route, queryParams: { lang }, queryParamsHandling: "merge", replaceUrl: true });
  }
  /** 頁面切換遊戲ID */
  onGameIdChange(id) {
    this.inputGameId.set(id);
    this.router.navigate([], { relativeTo: this.route, queryParams: { gameId: id }, queryParamsHandling: "merge", replaceUrl: true });
  }
  /** 頁面切換 Token */
  onTokenChange(token) {
    this.inputToken.set(token);
  }
  /** 頁面切換 Remember Me */
  onRememberMeChange(checked) {
    this.rememberMe.set(checked);
    if (!checked) {
      this.storage.loginSetting = null;
      this.session.deleteSession();
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
      cocosEditorHost: this.inputCocosEditorHost() ?? void 0,
      cloudHost: this.inputCloudHost() ?? void 0
    };
  }
  saveLoginSettingToSession() {
    this.session.setAuthToken(this.inputToken());
    this.session.setGameId(this.inputGameId());
    this.session.setSocketUrl(this.inputUrl());
    this.session.setAssetUrl(this.inputAssetUrl());
    this.session.setLanguage(this.inputLanguage());
    this.session.setUIMode(this.inputUIMode());
    if (this.isCloudHost()) {
      this.session.setRemoteHost(this.inputCloudHost());
    } else if (this.isCocosEditorHost()) {
      this.session.setRemoteHost(this.inputCocosEditorHost());
    } else {
      this.session.setRemoteHost(null);
    }
  }
  onToggleIsCocosEditorHost(checked) {
    this.isCocosEditorHost.set(checked);
    if (checked) {
      this.isCloudHost.set(false);
      this.onCocosEditorHostChange("http://localhost:7456");
    } else {
      this.onCocosEditorHostChange(null);
    }
  }
  onCocosEditorHostChange(value) {
    this.inputCocosEditorHost.set(value);
  }
  onToggleIsCloudHost(checked) {
    this.isCloudHost.set(checked);
    if (checked) {
      this.isCocosEditorHost.set(false);
      this.onCloudHostChange(this.inputCloudHost() ?? this.defaultCloudHost());
    } else {
      this.onCloudHostChange(null);
    }
  }
  onCloudHostChange(value) {
    this.inputCloudHost.set(value);
  }
  /** 頁面切換 url */
  onUrlChange(url) {
    this.inputUrl.set(url);
  }
  /** 頁面切換 assetUrl */
  onAssetUrlChange(url) {
    this.inputAssetUrl.set(url);
  }
  /** 按下登入按鈕 */
  onLoginClick() {
    this.saveLoginSettingToSession();
    if (this.rememberMe())
      this.saveLoginSettingToStorage();
    this.router.navigate(["/"], {
      queryParams: {
        gameId: this.inputGameId(),
        lang: this.inputLanguage()
      }
    });
  }
  /** 前往Lab頁面 */
  onLabClick() {
    this.history.forceReplayDisplayed.set(true);
    this.history.forceShareDisplayed.set(true);
    this.saveLoginSettingToSession();
    if (this.rememberMe())
      this.saveLoginSettingToStorage();
    const mode = this.inputUIMode() === "html" ? "/cover" : "/bridge";
    this.router.navigate([`/lab${mode}`], {
      queryParams: {
        gameId: this.inputGameId(),
        lang: this.inputLanguage()
      }
    });
  }
  onIframeClick() {
    window.location.href = `${window.location.origin}/iframe`;
  }
  /** 前往離線模式頁面 */
  onOfflineClick() {
    this.session.setOffline(true);
    this.router.navigate(["/lab"], {
      queryParams: {
        lang: this.inputLanguage()
      }
    });
  }
  /** 前往Demo頁面 */
  onDemoClick() {
    this.session.setOffline(true);
    this.router.navigate(["/lab/demo"], {
      queryParams: {
        lang: this.inputLanguage()
      }
    });
  }
  /** 前往Dev頁面 */
  onDevClick() {
    this.session.setOffline(true);
    this.router.navigate(["/dev"]);
  }
  static \u0275fac = function LayoutLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutLoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutLoginComponent, selectors: [["layout-login"]], hostAttrs: [1, "absolute", "inset-0", "flex", "size-full", "items-start", "justify-center", "overflow-x-hidden", "overflow-y-auto", "bg-black", "p-4", "sm:p-6"], decls: 36, vars: 31, consts: [[1, "relative", "flex", "w-full", "max-w-xl", "flex-col", "gap-4", "rounded-xl", "bg-zinc-800", "p-4", "text-zinc-300", "sm:p-6", "sm:my-auto"], [1, "grid", "min-w-0", "grid-cols-1", "gap-4", "sm:grid-cols-2"], ["label", "Platform", 1, "min-w-0", 3, "onSelect", "options", "selected"], ["label", "Game ID", 1, "min-w-0", 3, "onInput", "value"], ["label", "Asset URL", 1, "min-w-0", 3, "onSelect", "options", "selected"], ["label", "UI Mode", 1, "min-w-0", 3, "onSelect", "options", "selected"], ["label", "Language", 1, "min-w-0", 3, "onSelect", "options", "selected"], ["label", "Token", 1, "min-w-0", 3, "onInput", "error", "value"], [1, "flex", "min-w-0", "flex-col", "gap-2"], ["size", "small", "label", "Cocos Editor Host", "fitMode", "container", 3, "checkedChange", "checked"], [3, "onInput", "disabled", "value"], ["size", "small", "label", "Cloud Host", "fitMode", "container", 3, "checkedChange", "checked"], [1, "flex", "flex-col", "gap-4", "sm:gap-12", "sm:flex-row", "sm:justify-between"], [1, "flex", "flex-col", "sm:flex-row", "gap-2", "sm:gap-4", "w-full", "sm:w-auto"], ["size", "small", 1, "w-full", "sm:w-auto", "[&>button]:w-full", "sm:[&>button]:w-auto", 3, "clicked", "disabled", "label"], ["size", "small", "variant", "outlined", 1, "w-full", "sm:w-auto", "[&>button]:w-full", "sm:[&>button]:w-auto", 3, "clicked", "label", "disabled"], ["size", "small", "variant", "outlined", 1, "w-full", "sm:w-auto", "[&>button]:w-full", "sm:[&>button]:w-auto", 3, "clicked", "label"], [1, "flex", "flex-wrap", "gap-x-2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "bottom-4", "right-4", "text-sm", "text-blue-400", "hover:underline", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "bottom-4", "right-40", "text-sm", "text-blue-400", "hover:underline", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "bottom-4", "right-20", "text-sm", "text-blue-400", "hover:underline", 3, "href"], ["label", "Remember Me", 3, "checkedChange", "checked"]], template: function LayoutLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ap-select", 2);
      \u0275\u0275listener("onSelect", function LayoutLoginComponent_Template_ap_select_onSelect_2_listener($event) {
        return ctx.onUrlChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ap-input-box", 3);
      \u0275\u0275listener("onInput", function LayoutLoginComponent_Template_ap_input_box_onInput_3_listener($event) {
        return ctx.onGameIdChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ap-select", 4);
      \u0275\u0275listener("onSelect", function LayoutLoginComponent_Template_ap_select_onSelect_4_listener($event) {
        return ctx.onAssetUrlChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ap-select", 5);
      \u0275\u0275listener("onSelect", function LayoutLoginComponent_Template_ap_select_onSelect_5_listener($event) {
        return ctx.onUIModeChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ap-select", 6);
      \u0275\u0275listener("onSelect", function LayoutLoginComponent_Template_ap_select_onSelect_6_listener($event) {
        return ctx.onLangChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ap-input-box", 7);
      \u0275\u0275listener("onInput", function LayoutLoginComponent_Template_ap_input_box_onInput_7_listener($event) {
        return ctx.onTokenChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "ap-toggle-switch", 9);
      \u0275\u0275listener("checkedChange", function LayoutLoginComponent_Template_ap_toggle_switch_checkedChange_9_listener($event) {
        return ctx.onToggleIsCocosEditorHost($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ap-input-box", 10);
      \u0275\u0275listener("onInput", function LayoutLoginComponent_Template_ap_input_box_onInput_10_listener($event) {
        return ctx.onCocosEditorHostChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "ap-toggle-switch", 11);
      \u0275\u0275listener("checkedChange", function LayoutLoginComponent_Template_ap_toggle_switch_checkedChange_12_listener($event) {
        return ctx.onToggleIsCloudHost($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ap-input-box", 10);
      \u0275\u0275listener("onInput", function LayoutLoginComponent_Template_ap_input_box_onInput_13_listener($event) {
        return ctx.onCloudHostChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "ap-button", 14);
      \u0275\u0275listener("clicked", function LayoutLoginComponent_Template_ap_button_clicked_16_listener() {
        return ctx.onLoginClick();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ap-button", 15);
      \u0275\u0275listener("clicked", function LayoutLoginComponent_Template_ap_button_clicked_17_listener() {
        return ctx.onLabClick();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "ap-button", 15);
      \u0275\u0275listener("clicked", function LayoutLoginComponent_Template_ap_button_clicked_18_listener() {
        return ctx.onIframeClick();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 13)(20, "ap-button", 16);
      \u0275\u0275listener("clicked", function LayoutLoginComponent_Template_ap_button_clicked_20_listener() {
        return ctx.onOfflineClick();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "ap-button", 16);
      \u0275\u0275listener("clicked", function LayoutLoginComponent_Template_ap_button_clicked_21_listener() {
        return ctx.onDemoClick();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ap-button", 16);
      \u0275\u0275listener("clicked", function LayoutLoginComponent_Template_ap_button_clicked_22_listener() {
        return ctx.onDevClick();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "span", 17);
      \u0275\u0275text(24, " Open Dev ");
      \u0275\u0275elementStart(25, "a", 18);
      \u0275\u0275text(26, " CommonString ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "a", 18);
      \u0275\u0275text(28, " GameString ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "span", 17);
      \u0275\u0275text(30, " Open QA ");
      \u0275\u0275elementStart(31, "a", 19);
      \u0275\u0275text(32, " CommonString ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 20);
      \u0275\u0275text(34, " GameString ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "ap-toggle-switch", 21);
      \u0275\u0275listener("checkedChange", function LayoutLoginComponent_Template_ap_toggle_switch_checkedChange_35_listener($event) {
        return ctx.onRememberMeChange($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.platformOptions())("selected", ctx.inputUrl());
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.inputGameId());
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.assetUrlOptions())("selected", ctx.inputAssetUrl());
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.modeOptions())("selected", ctx.inputUIMode());
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.languageOptions())("selected", ctx.inputLanguage());
      \u0275\u0275advance();
      \u0275\u0275property("error", ctx.tokenIsInvalid())("value", ctx.inputToken());
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.isCocosEditorHost());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.isCocosEditorHost())("value", ctx.inputCocosEditorHost() ?? "http://localhost:7456");
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.isCloudHost());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.isCloudHost())("value", ctx.inputCloudHost() ?? ctx.defaultCloudHost());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.accepted() === false)("label", "Login");
      \u0275\u0275advance();
      \u0275\u0275property("label", "Lab")("disabled", ctx.accepted() === false);
      \u0275\u0275advance();
      \u0275\u0275property("label", "Iframe")("disabled", ctx.accepted() === false);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", "Offline");
      \u0275\u0275advance();
      \u0275\u0275property("label", "Demo");
      \u0275\u0275advance();
      \u0275\u0275property("label", "Dev");
      \u0275\u0275advance(3);
      \u0275\u0275property("href", ctx.commonStringDevUrl(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.gameStringDevUrl(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275property("href", ctx.commonStringQaUrl(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.gameStringQaUrl(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.rememberMe());
    }
  }, dependencies: [RouterModule, CommonModule, FormsModule, ApInputBox, ApSelectComponent, ApButtonComponent, ApToggleSwitchComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutLoginComponent, [{
    type: Component,
    args: [{ selector: "layout-login", imports: [RouterModule, CommonModule, FormsModule, ApInputBox, ApSelectComponent, ApButtonComponent, ApToggleSwitchComponent], host: {
      class: "absolute inset-0 flex size-full items-start justify-center overflow-x-hidden overflow-y-auto bg-black p-4 sm:p-6"
    }, template: `<div
  class="relative flex w-full max-w-xl flex-col gap-4 rounded-xl bg-zinc-800 p-4 text-zinc-300 sm:p-6 sm:my-auto"
>
  <div class="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
    <!-- Platform -->
    <ap-select
      class="min-w-0"
      label="Platform"
      [options]="platformOptions()"
      [selected]="inputUrl()"
      (onSelect)="onUrlChange($event)"
    />

    <!-- Game ID -->
    <ap-input-box
      class="min-w-0"
      label="Game ID"
      [value]="inputGameId()"
      (onInput)="onGameIdChange($event)"
    />

    <ap-select
      class="min-w-0"
      label="Asset URL"
      [options]="assetUrlOptions()"
      [selected]="inputAssetUrl()"
      (onSelect)="onAssetUrlChange($event)"
    />

    <!-- UI Mode -->
    <ap-select
      class="min-w-0"
      label="UI Mode"
      [options]="modeOptions()"
      [selected]="inputUIMode()"
      (onSelect)="onUIModeChange($event)"
    />

    <!-- Language -->
    <ap-select
      class="min-w-0"
      label="Language"
      [options]="languageOptions()"
      [selected]="inputLanguage()"
      (onSelect)="onLangChange($event)"
    />

    <!-- Token -->
    <ap-input-box
      class="min-w-0"
      label="Token"
      [error]="tokenIsInvalid()"
      [value]="inputToken()"
      (onInput)="onTokenChange($event)"
    />

    <!-- Use Cocos Editor Host -->
    <div class="flex min-w-0 flex-col gap-2">
      <ap-toggle-switch
        size="small"
        label="Cocos Editor Host"
        fitMode="container"
        [checked]="isCocosEditorHost()"
        (checkedChange)="onToggleIsCocosEditorHost($event)"
      />
      <!-- Cocos Editor Host -->
      <ap-input-box
        [disabled]="!isCocosEditorHost()"
        [value]="inputCocosEditorHost() ?? 'http://localhost:7456'"
        (onInput)="onCocosEditorHostChange($event)"
      />
    </div>

    <!-- Use Cloud Host -->
    <div class="flex min-w-0 flex-col gap-2">
      <ap-toggle-switch
        size="small"
        label="Cloud Host"
        fitMode="container"
        [checked]="isCloudHost()"
        (checkedChange)="onToggleIsCloudHost($event)"
      />
      <ap-input-box
        [disabled]="!isCloudHost()"
        [value]="inputCloudHost() ?? defaultCloudHost()"
        (onInput)="onCloudHostChange($event)"
      />
    </div>
  </div>

  <!-- Buttons -->
  <div class="flex flex-col gap-4 sm:gap-12 sm:flex-row sm:justify-between">
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
      <ap-button
        class="w-full sm:w-auto [&>button]:w-full sm:[&>button]:w-auto"
        size="small"
        [disabled]="accepted() === false"
        [label]="'Login'"
        (clicked)="onLoginClick()"
      />
      <ap-button
        class="w-full sm:w-auto [&>button]:w-full sm:[&>button]:w-auto"
        size="small"
        [label]="'Lab'"
        variant="outlined"
        [disabled]="accepted() === false"
        (clicked)="onLabClick()"
      />
      <ap-button
        class="w-full sm:w-auto [&>button]:w-full sm:[&>button]:w-auto"
        size="small"
        [label]="'Iframe'"
        variant="outlined"
        [disabled]="accepted() === false"
        (clicked)="onIframeClick()"
      />
    </div>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
      <ap-button
        class="w-full sm:w-auto [&>button]:w-full sm:[&>button]:w-auto"
        size="small"
        [label]="'Offline'"
        variant="outlined"
        (clicked)="onOfflineClick()"
      />
      <ap-button
        class="w-full sm:w-auto [&>button]:w-full sm:[&>button]:w-auto"
        size="small"
        [label]="'Demo'"
        variant="outlined"
        (clicked)="onDemoClick()"
      />
      <ap-button
        size="small"
        class="w-full sm:w-auto [&>button]:w-full sm:[&>button]:w-auto"
        [label]="'Dev'"
        variant="outlined"
        (clicked)="onDevClick()"
      />
    </div>
    <!-- \u53E6\u958B\u65B0\u8996\u7A97\u7D66 commonStringUrl-->
  </div>
  <span class="flex flex-wrap gap-x-2">
    Open Dev
    <a
      class="bottom-4 right-4 text-sm text-blue-400 hover:underline"
      [href]="commonStringDevUrl()"
      target="_blank"
      rel="noopener noreferrer"
    >
      CommonString
    </a>
    <a
      class="bottom-4 right-4 text-sm text-blue-400 hover:underline"
      [href]="gameStringDevUrl()"
      target="_blank"
      rel="noopener noreferrer"
    >
      GameString
    </a>
  </span>
  <span class="flex flex-wrap gap-x-2">
    Open QA
    <a
      class="bottom-4 right-40 text-sm text-blue-400 hover:underline"
      [href]="commonStringQaUrl()"
      target="_blank"
      rel="noopener noreferrer"
    >
      CommonString
    </a>
    <a
      class="bottom-4 right-20 text-sm text-blue-400 hover:underline"
      [href]="gameStringQaUrl()"
      target="_blank"
      rel="noopener noreferrer"
    >
      GameString
    </a>
  </span>
  <ap-toggle-switch
    label="Remember Me"
    [checked]="rememberMe()"
    (checkedChange)="onRememberMeChange($event)"
  />
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutLoginComponent, { className: "LayoutLoginComponent", filePath: "src/app/layouts/layout-login/layout-login.component.ts", lineNumber: 31 });
})();
export {
  LayoutLoginComponent
};
//# sourceMappingURL=chunk-BIR2KXE3.js.map
