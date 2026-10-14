import {
  ApBfCardFeatureComponent,
  ApIconIncDecComponent
} from "./chunk-7JE6XNVC.js";
import {
  ApIconAutoplayCircleComponent,
  ApIconHoldTurboSpinComponent,
  ApIconSpinComponent,
  ApIconTurboCircleComponent
} from "./chunk-QJZUQVJ4.js";
import {
  ApUiFramePageComponent,
  InfoCtrlService,
  InfoTabGAMap,
  TO_GA_ID
} from "./chunk-N3TTLE6J.js";
import {
  ApTabMenuTextComponent
} from "./chunk-N4LJSHXE.js";
import {
  BaseSymbolTextureService
} from "./chunk-4OJJGH2R.js";
import {
  PlayerWalletService
} from "./chunk-HNY47POZ.js";
import {
  GameIframeCtrlService
} from "./chunk-NMZ7HZYU.js";
import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import {
  ApIconComponent
} from "./chunk-YL37OG34.js";
import {
  AppInterfaceService,
  isLeaderboardPersonalResponse
} from "./chunk-Q3NF4QZ2.js";
import {
  LoggerService,
  calc,
  decimal_default
} from "./chunk-TIGXKRQH.js";
import {
  ClientSessionService,
  environment
} from "./chunk-B2M5HODU.js";
import {
  CommonModule,
  HttpClient,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DOCUMENT,
  Injectable,
  ViewChild,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
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

// src/app/pages/info-feature/info-feature.component.ts
function InfoFeatureComponent_For_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoFeatureComponent_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoFeatureComponent_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275element(1, "img", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.info.getImageUrl(entry_r1.content) + `?v=${ctx_r1.version()}`, \u0275\u0275sanitizeUrl)("alt", entry_r1.content);
  }
}
function InfoFeatureComponent_For_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "ul", 6)(2, "li");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoFeatureComponent_For_3_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-bf-card-feature", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("card", ctx_r1.buyFeatureCard())("price", ctx_r1.wallet.multiplyUserBet(ctx_r1.buyFeatureCard().rate));
  }
}
function InfoFeatureComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InfoFeatureComponent_For_3_Case_0_Template, 3, 2, "section", 2)(1, InfoFeatureComponent_For_3_Case_1_Template, 3, 2, "section", 2)(2, InfoFeatureComponent_For_3_Case_2_Template, 2, 3, "section", 2)(3, InfoFeatureComponent_For_3_Case_3_Template, 4, 2, "section", 2)(4, InfoFeatureComponent_For_3_Case_4_Template, 1, 2, "ap-bf-card-feature", 3);
  }
  if (rf & 2) {
    let tmp_10_0;
    const entry_r1 = ctx.$implicit;
    \u0275\u0275conditional((tmp_10_0 = entry_r1.category) === "title" ? 0 : tmp_10_0 === "subtitle" ? 1 : tmp_10_0 === "image" ? 2 : tmp_10_0 === "content" ? 3 : tmp_10_0 === "buyFeature" ? 4 : -1);
  }
}
var InfoFeatureComponent = class _InfoFeatureComponent {
  info = inject(InfoCtrlService);
  wallet = inject(PlayerWalletService);
  symbol = inject(BaseSymbolTextureService);
  session = inject(ClientSessionService);
  /** info feature的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);
  positionClass(position) {
    switch (position) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "left":
      default:
        return "text-left";
    }
  }
  buyFeatureCard = computed(() => {
    return this.wallet.buyFeatureCards()[0];
  });
  static \u0275fac = function InfoFeatureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoFeatureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoFeatureComponent, selectors: [["info-feature"]], decls: 4, vars: 0, consts: [[1, "page-container"], [1, "page-content"], [3, "ngClass"], [1, "flex", "mx-auto", "pointer-events-none", "scale-80", "mt-6", 3, "card", "price"], [1, "text-yellow-200"], [1, "mx-auto", 3, "src", "alt"], [1, "list-space"]], template: function InfoFeatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, InfoFeatureComponent_For_3_Template, 5, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.info.featureEntries());
    }
  }, dependencies: [CommonModule, NgClass, ApBfCardFeatureComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoFeatureComponent, [{
    type: Component,
    args: [{ selector: "info-feature", imports: [CommonModule, ApBfCardFeatureComponent], template: '<div class="page-container">\n  <div class="page-content">\n    @for (entry of info.featureEntries(); track $index) {\n      @switch (entry.category) {\n        @case ("title") {\n          <section [ngClass]="positionClass(entry.position)">\n            <h3 class="text-yellow-200">{{ entry.content }}</h3>\n          </section>\n        }\n        @case ("subtitle") {\n          <section [ngClass]="positionClass(entry.position)">\n            <h4>{{ entry.content }}</h4>\n          </section>\n        }\n        @case ("image") {\n          <section [ngClass]="positionClass(entry.position)">\n            <img\n              [src]="info.getImageUrl(entry.content) + `?v=${version()}`"\n              [alt]="entry.content"\n              class="mx-auto"\n            />\n          </section>\n        }\n        @case ("content") {\n          <section [ngClass]="positionClass(entry.position)">\n            <ul class="list-space">\n              <li>{{ entry.content }}</li>\n            </ul>\n          </section>\n        }\n        @case ("buyFeature") {\n          <ap-bf-card-feature\n            class="flex mx-auto pointer-events-none scale-80 mt-6"\n            [card]="buyFeatureCard()"\n            [price]="wallet.multiplyUserBet(buyFeatureCard().rate)"\n          />\n        }\n      }\n    }\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoFeatureComponent, { className: "InfoFeatureComponent", filePath: "src/app/pages/info-feature/info-feature.component.ts", lineNumber: 15 });
})();

// src/app/components/ap-info-guide/ap-info-guide.component.ts
var _c0 = ["*", "*"];
function ApInfoGuideComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", ctx_r0.icon());
  }
}
function ApInfoGuideComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function ApInfoGuideComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, ApInfoGuideComponent_Conditional_0_Conditional_2_Template, 1, 1, "ap-icon", 3)(3, ApInfoGuideComponent_Conditional_0_Conditional_3_Template, 2, 0, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 5)(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.icon() ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getItem1());
  }
}
function ApInfoGuideComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", ctx_r0.icon());
  }
}
function ApInfoGuideComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function ApInfoGuideComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getItem2());
  }
}
function ApInfoGuideComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, ApInfoGuideComponent_Conditional_1_Conditional_2_Template, 1, 1, "ap-icon", 6)(3, ApInfoGuideComponent_Conditional_1_Conditional_3_Template, 2, 0, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "h4", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 9)(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ApInfoGuideComponent_Conditional_1_Conditional_10_Template, 2, 1, "li");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.icon() ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getItem1());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getItem2() ? 10 : -1);
  }
}
var ApInfoGuideComponent = class _ApInfoGuideComponent {
  icon = input(null);
  title = input("Title");
  getItem1 = input("Item 1");
  getItem2 = input("Item 2");
  variant = input("default");
  static \u0275fac = function ApInfoGuideComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApInfoGuideComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApInfoGuideComponent, selectors: [["ap-info-guide"]], inputs: { icon: [1, "icon"], title: [1, "title"], getItem1: [1, "getItem1"], getItem2: [1, "getItem2"], variant: [1, "variant"] }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "flex", "items-center", "gap-2", "p-2"], [1, "flex", "items-start", "gap-4", "p-4"], [1, "flex-shrink-0"], [1, "sm:size-10", "size-8", 3, "name"], [1, "sm:size-16", "size-14"], [1, "list-inside", "list-none"], [1, "sm:size-16", "size-14", 3, "name"], [1, "flex-1"], [1, "text-yellow-200", "mb-2", "uppercase"], [1, "list-inside", "space-y-2", "list-none"]], template: function ApInfoGuideComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275conditionalCreate(0, ApInfoGuideComponent_Conditional_0_Template, 7, 2, "div", 0)(1, ApInfoGuideComponent_Conditional_1_Template, 11, 4, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.variant() === "description" ? 0 : 1);
    }
  }, dependencies: [CommonModule, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApInfoGuideComponent, [{
    type: Component,
    args: [{ selector: "ap-info-guide", imports: [CommonModule, ApIconComponent], template: '@if (variant() === "description") {\n  <div class="flex items-center gap-2 p-2">\n    <!-- Left: Icon -->\n    <div class="flex-shrink-0">\n      @if (icon()) {<ap-icon [name]="icon()!" class="sm:size-10 size-8" />}\n      @else {<div class="sm:size-16 size-14"><ng-content></ng-content></div>}\n    </div>\n    <!-- Right: single item -->\n    <ul class="list-inside list-none">\n      <li>{{ getItem1() }}</li>\n    </ul>\n  </div>\n} @else {\n  <div class="flex items-start gap-4 p-4">\n    <!-- Left: Icon -->\n    <div class="flex-shrink-0">\n      @if (icon()) { <ap-icon [name]="icon()!" class="sm:size-16 size-14" />}\n      @else {<div class="sm:size-16 size-14"><ng-content></ng-content></div>}\n    </div>\n\n    <!-- Right: Title and List -->\n    <div class="flex-1">\n      <h4 class="text-yellow-200 mb-2 uppercase">\n        {{ title() }}\n      </h4>\n      <ul class="list-inside space-y-2 list-none">\n        <li>{{ getItem1() }}</li>\n        @if (getItem2()) {\n          <li>{{ getItem2() }}</li>\n        }\n      </ul>\n    </div>\n  </div>\n}\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApInfoGuideComponent, { className: "ApInfoGuideComponent", filePath: "src/app/components/ap-info-guide/ap-info-guide.component.ts", lineNumber: 12 });
})();

// src/app/pages/info-guide/info-guide.component.ts
var _c02 = ["contentScroller"];
function InfoGuideComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-spin", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getSpinTitle())("getItem1", ctx_r0.getSpinItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-spin");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getSpinTitle())("getItem1", ctx_r0.getSpinItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-hold-turbo-spin");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getHoldTurboTitleDefault())("getItem1", ctx_r0.getHoldTurboDefaultItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-autoplay-circle");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getAutoSpinTitle())("getItem1", ctx_r0.getAutoSpinItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-turbo-circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ap-info-guide", 2);
    \u0275\u0275element(3, "ap-icon-turbo-circle", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getTurboTitleDefault())("getItem1", ctx_r0.getTurboDefaultItem1())("getItem2", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.getTurboTitleFast())("getItem1", ctx_r0.getTurboFastItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getNoteItem2());
  }
}
function InfoGuideComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "time", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.gameVersion(), " ");
  }
}
var InfoGuideComponent = class _InfoGuideComponent {
  contentScroller;
  session = inject(ClientSessionService);
  appI18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  hideTurbo = input(false);
  hideHoldTurbo = input(true);
  hideAutoplay = input(false);
  hideNoteItem2 = input(false);
  isDragging = signal(false);
  isGhana = computed(() => this.session.isGhanaUI);
  dragStartY = 0;
  dragStartScrollTop = 0;
  /* Info Guide 文字說明，從API取得 */
  /* Spin */
  getSpinTitle = this.appI18n.computedGame(
    "Spin_title",
    //先試讀取game的語系檔
    this.appI18n.instant("Spin_title")
    //如果game的語系檔沒有，再讀取common的語系檔
  );
  getSpinItem1 = this.appI18n.computedGame("Spin_content_01", this.appI18n.instant("Spin_content_01"));
  /* Hold Spin */
  getHoldTurboTitleDefault = this.appI18n.computedGame("Auto_title", this.appI18n.instant("Auto_title"));
  getHoldTurboDefaultItem1 = this.appI18n.computedGame("Auto_content_01", this.appI18n.instant("Auto_content_01"));
  /* Auto Spin */
  getAutoSpinTitle = this.appI18n.computedGame("Auto_title", this.appI18n.instant("Auto_title"));
  getAutoSpinItem1 = this.appI18n.computedGame("Auto_content_01", this.appI18n.instant("Auto_content_01"));
  getAutoSpinItem2 = this.appI18n.computedGame("Auto_content_02", this.appI18n.instant("Auto_content_02"));
  /* Turbo */
  getTurboTitleDefault = this.appI18n.computedGame("Turbo_title", this.appI18n.instant("Turbo_title"));
  getTurboDefaultItem1 = this.appI18n.computedGame("Turbo_content", this.appI18n.instant("Turbo_content"));
  getTurboTitleFast = this.appI18n.computedGame("Turbo_title_01", this.appI18n.instant("Turbo_title_01"));
  getTurboFastItem1 = this.appI18n.computedGame("Turbo_content_01", this.appI18n.instant("Turbo_content_01"));
  /* Add Bet */
  addBetTitleKey = this.isGhana() ? "og_bet_info_stake" : "Bet_title";
  getAddBetTitle = this.appI18n.computedGame(this.addBetTitleKey, this.appI18n.instant(this.addBetTitleKey));
  getAddBetItem1 = this.appI18n.computedGame("Bet_content", this.appI18n.instant("Bet_content"));
  /* Demo Play */
  getDemoPlayTitle = this.appI18n.computedGame("Replay_title", this.appI18n.instant("Replay_title"));
  getDemoPlayItem1 = this.appI18n.computedGame("Replay_content", this.appI18n.instant("Replay_content"));
  /* Menu */
  getMenuTitle = this.appI18n.computedGame("Option_title", this.appI18n.instant("Option_title"));
  getMenuItem1 = this.appI18n.computedGame("Option_content", this.appI18n.instant("Option_content"));
  /* Info */
  getInfoTitle = this.appI18n.computedGame("info", this.appI18n.instant("info"));
  getInfoItem1 = this.appI18n.computedGame("Option_Info_content", this.appI18n.instant("Option_Info_content"));
  /* History */
  getHistoryTitle = this.appI18n.computedGame("history", this.appI18n.instant("history"));
  getHistoryItem1 = this.appI18n.computedGame("Option_History_content", this.appI18n.instant("Option_History_content"));
  /* Sound ON */
  getSoundOnTitle = this.appI18n.computedGame("sound", this.appI18n.instant("sound"));
  getSoundOnItem1 = this.appI18n.computedGame("Option_Sound_content", this.appI18n.instant("Option_Sound_content"));
  /* Music ON */
  getMusicOnTitle = this.appI18n.computedGame("music", this.appI18n.instant("music"));
  getMusicOnItem1 = this.appI18n.computedGame("Option_Music_content", this.appI18n.instant("Option_Music_content"));
  /* Note */
  getNoteTitle = this.appI18n.computedGame("Note_title", this.appI18n.instant("Note_title"));
  getNoteItem1 = this.appI18n.computedGame("Note_content_01", this.appI18n.instant("Note_content_01"));
  getNoteItem2 = this.appI18n.computedGame("Note_content_02", this.appI18n.instant("Note_content_02"));
  gameIframeCtrl = inject(GameIframeCtrlService);
  gameVersion = computed(() => {
    return this.gameIframeCtrl.gameVersion() ?? "";
  });
  ngOnInit() {
  }
  onCellClick(cell) {
  }
  onDragStart(event) {
    const scroller = this.contentScroller?.nativeElement;
    if (!scroller)
      return;
    this.isDragging.set(true);
    this.dragStartY = event.clientY;
    this.dragStartScrollTop = scroller.scrollTop;
  }
  onDragMove(event) {
    const scroller = this.contentScroller?.nativeElement;
    if (!scroller || !this.isDragging())
      return;
    const deltaY = event.clientY - this.dragStartY;
    scroller.scrollTop = this.dragStartScrollTop - deltaY;
  }
  onDragEnd() {
    this.isDragging.set(false);
  }
  static \u0275fac = function InfoGuideComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoGuideComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoGuideComponent, selectors: [["info-guide"]], viewQuery: function InfoGuideComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentScroller = _t.first);
    }
  }, inputs: { hideTurbo: [1, "hideTurbo"], hideHoldTurbo: [1, "hideHoldTurbo"], hideAutoplay: [1, "hideAutoplay"], hideNoteItem2: [1, "hideNoteItem2"] }, decls: 23, vars: 36, consts: [[1, "page-container"], [1, "page-content"], [3, "title", "getItem1", "getItem2"], [3, "icon", "title", "getItem1", "getItem2", "hidden"], [3, "icon", "title", "getItem1", "getItem2"], [1, "flex-1", "mt-8"], [1, "text-yellow-200"], [1, "list-disc", "list-none"], [1, "mt-4", "block", "text-center", "text-zinc-400"], ["variant", "red"], ["variant", "black"]], template: function InfoGuideComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, InfoGuideComponent_Conditional_2_Template, 2, 3, "ap-info-guide", 2)(3, InfoGuideComponent_Conditional_3_Template, 2, 3, "ap-info-guide", 2);
      \u0275\u0275conditionalCreate(4, InfoGuideComponent_Conditional_4_Template, 2, 3, "ap-info-guide", 2);
      \u0275\u0275conditionalCreate(5, InfoGuideComponent_Conditional_5_Template, 2, 3, "ap-info-guide", 2);
      \u0275\u0275conditionalCreate(6, InfoGuideComponent_Conditional_6_Template, 4, 6);
      \u0275\u0275elementStart(7, "ap-info-guide", 2);
      \u0275\u0275element(8, "ap-icon-inc-dec");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "ap-info-guide", 3)(10, "ap-info-guide", 4)(11, "ap-info-guide", 4)(12, "ap-info-guide", 4)(13, "ap-info-guide", 4)(14, "ap-info-guide", 4);
      \u0275\u0275elementStart(15, "div", 5)(16, "h5", 6);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ul", 7)(19, "li");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, InfoGuideComponent_Conditional_21_Template, 2, 1, "li");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, InfoGuideComponent_Conditional_22_Template, 2, 1, "time", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isGhana() ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.hideHoldTurbo() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hideAutoplay() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hideTurbo() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.getAddBetTitle())("getItem1", ctx.getAddBetItem1())("getItem2", "");
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", "play-circle")("title", ctx.getDemoPlayTitle())("getItem1", ctx.getDemoPlayItem1())("getItem2", "")("hidden", ctx.isGhana());
      \u0275\u0275advance();
      \u0275\u0275property("icon", "bar-3")("title", ctx.getMenuTitle())("getItem1", ctx.getMenuItem1())("getItem2", "");
      \u0275\u0275advance();
      \u0275\u0275property("icon", "exclamation-circle default")("title", ctx.getInfoTitle())("getItem1", ctx.getInfoItem1())("getItem2", "");
      \u0275\u0275advance();
      \u0275\u0275property("icon", "document-text default")("title", ctx.getHistoryTitle())("getItem1", ctx.getHistoryItem1())("getItem2", "");
      \u0275\u0275advance();
      \u0275\u0275property("icon", "speaker-wave default")("title", ctx.getSoundOnTitle())("getItem1", ctx.getSoundOnItem1())("getItem2", "");
      \u0275\u0275advance();
      \u0275\u0275property("icon", "musical-note default")("title", ctx.getMusicOnTitle())("getItem1", ctx.getMusicOnItem1())("getItem2", "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getNoteTitle());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getNoteItem1());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hideNoteItem2() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.gameVersion() ? 22 : -1);
    }
  }, dependencies: [
    CommonModule,
    ApInfoGuideComponent,
    ApIconSpinComponent,
    ApIconAutoplayCircleComponent,
    ApIconTurboCircleComponent,
    ApIconIncDecComponent,
    ApIconHoldTurboSpinComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoGuideComponent, [{
    type: Component,
    args: [{ selector: "info-guide", imports: [
      CommonModule,
      ApInfoGuideComponent,
      ApIconSpinComponent,
      ApIconAutoplayCircleComponent,
      ApIconTurboCircleComponent,
      ApIconIncDecComponent,
      ApIconHoldTurboSpinComponent
    ], template: `<div class="page-container">
  <div class="page-content">
    <!-- Spin -->
    @if (isGhana()) {
      <ap-info-guide
        [title]="getSpinTitle()"
        [getItem1]="getSpinItem1()"
        [getItem2]="''"
      >
        <ap-icon-spin variant="red"/>
      </ap-info-guide>
    } @else {
      <ap-info-guide
        [title]="getSpinTitle()"
        [getItem1]="getSpinItem1()"
        [getItem2]="''"
      >
        <ap-icon-spin />
      </ap-info-guide>
    }
    <!-- Hold Turbo Spin -->
      @if (!hideHoldTurbo()) {
     <ap-info-guide
        [title]="getHoldTurboTitleDefault()"
        [getItem1]="getHoldTurboDefaultItem1()"
        [getItem2]="''"
      >
        <ap-icon-hold-turbo-spin />
      </ap-info-guide>}
    <!-- Auto Spin -->
    @if (!hideAutoplay()) {
      <ap-info-guide
        [title]="getAutoSpinTitle()"
        [getItem1]="getAutoSpinItem1()"
        [getItem2]="''"
      >
        <ap-icon-autoplay-circle />
      </ap-info-guide>
    }
    <!-- Turbo Spin -->
    @if (!hideTurbo()) {
      <ap-info-guide
        [title]="getTurboTitleDefault()"
        [getItem1]="getTurboDefaultItem1()"
        [getItem2]="''"
      >
        <ap-icon-turbo-circle />
      </ap-info-guide>
      <ap-info-guide
        [title]="getTurboTitleFast()"
        [getItem1]="getTurboFastItem1()"
        [getItem2]="''"
      >
        <ap-icon-turbo-circle variant="black" />
    </ap-info-guide>
    }
    <!-- Add Bet -->
    <ap-info-guide
      [title]="getAddBetTitle()"
      [getItem1]="getAddBetItem1()"
      [getItem2]="''"
    >
      <ap-icon-inc-dec />
    </ap-info-guide>

    <!-- Demo Play -->
    <ap-info-guide
      [icon]="'play-circle'"
      [title]="getDemoPlayTitle()"
      [getItem1]="getDemoPlayItem1()"
      [getItem2]="''"
      [hidden]="isGhana()"
    />

    <!-- Menu -->
    <ap-info-guide
      [icon]="'bar-3'"
      [title]="getMenuTitle()"
      [getItem1]="getMenuItem1()"
      [getItem2]="''"
    />
    <!-- Info -->
    <ap-info-guide
      [icon]="'exclamation-circle default'"
      [title]="getInfoTitle()"
      [getItem1]="getInfoItem1()"
      [getItem2]="''"
    />
    <!-- History -->
    <ap-info-guide
      [icon]="'document-text default'"
      [title]="getHistoryTitle()"
      [getItem1]="getHistoryItem1()"
      [getItem2]="''"
    />
    <!-- Sound ON -->
    <ap-info-guide
      [icon]="'speaker-wave default'"
      [title]="getSoundOnTitle()"
      [getItem1]="getSoundOnItem1()"
      [getItem2]="''"
    />
    <!-- Music ON -->
    <ap-info-guide
      [icon]="'musical-note default'"
      [title]="getMusicOnTitle()"
      [getItem1]="getMusicOnItem1()"
      [getItem2]="''"
    />

    <div class="flex-1 mt-8">
      <h5 class="text-yellow-200">{{ getNoteTitle() }}</h5>
    </div>
    <ul class="list-disc list-none">
      <li>{{ getNoteItem1() }}</li>
      @if (!hideNoteItem2()) {
        <li>{{ getNoteItem2() }}</li>
      }
    </ul>
    @if (gameVersion()) {
      <time class="mt-4 block text-center text-zinc-400">
        {{ gameVersion() }}
      </time>
    }
  </div>
</div>
` }]
  }], null, { contentScroller: [{
    type: ViewChild,
    args: ["contentScroller"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoGuideComponent, { className: "InfoGuideComponent", filePath: "src/app/pages/info-guide/info-guide.component.ts", lineNumber: 22 });
})();

// src/app/pages/info-pay-table-default/info-pay-table-default.component.ts
function InfoPayTableDefaultComponent_For_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position, true));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoPayTableDefaultComponent_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoPayTableDefaultComponent_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.info.getImageUrl(entry_r1.content) + `?v=${ctx_r1.version()}`, \u0275\u0275sanitizeUrl)("alt", entry_r1.content);
  }
}
function InfoPayTableDefaultComponent_For_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "ul", 5)(2, "li");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoPayTableDefaultComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InfoPayTableDefaultComponent_For_3_Case_0_Template, 3, 2, "section", 2)(1, InfoPayTableDefaultComponent_For_3_Case_1_Template, 3, 2, "section", 2)(2, InfoPayTableDefaultComponent_For_3_Case_2_Template, 2, 3, "section", 2)(3, InfoPayTableDefaultComponent_For_3_Case_3_Template, 4, 2, "section", 2);
  }
  if (rf & 2) {
    let tmp_10_0;
    const entry_r1 = ctx.$implicit;
    \u0275\u0275conditional((tmp_10_0 = entry_r1.category) === "title" ? 0 : tmp_10_0 === "subtitle" ? 1 : tmp_10_0 === "image" ? 2 : tmp_10_0 === "content" ? 3 : -1);
  }
}
var InfoPayTableDefaultComponent = class _InfoPayTableDefaultComponent {
  info = inject(InfoCtrlService);
  session = inject(ClientSessionService);
  /** info的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);
  positionClass(position, useFlex = false) {
    switch (position) {
      case "center":
        return useFlex ? "justify-center text-center" : "text-center";
      case "right":
        return useFlex ? "justify-end text-right" : "text-right";
      case "left":
      default:
        return useFlex ? "justify-start text-left" : "text-left";
    }
  }
  static \u0275fac = function InfoPayTableDefaultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoPayTableDefaultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoPayTableDefaultComponent, selectors: [["info-pay-table-default"]], decls: 4, vars: 0, consts: [[1, "page-container"], ["id", "symbols-section", 1, "page-content"], [3, "ngClass"], [1, "text-yellow-200"], [1, "mx-auto", 3, "src", "alt"], [1, "list-space"]], template: function InfoPayTableDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, InfoPayTableDefaultComponent_For_3_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.info.paytableEntries());
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoPayTableDefaultComponent, [{
    type: Component,
    args: [{ selector: "info-pay-table-default", imports: [CommonModule], template: '<div class="page-container">\n  <div id="symbols-section" class="page-content">\n    @for (entry of info.paytableEntries(); track $index) {\n      @switch (entry.category) {\n        @case ("title") {\n          <section [ngClass]="positionClass(entry.position, true)">\n            <h3 class="text-yellow-200">{{ entry.content }}</h3>\n          </section>\n        }\n        @case ("subtitle") {\n          <section [ngClass]="positionClass(entry.position)">\n            <h4>{{ entry.content }}</h4>\n          </section>\n        }\n        @case ("image") {\n          <section [ngClass]="positionClass(entry.position)">\n            <img\n              [src]="info.getImageUrl(entry.content) + `?v=${version()}`"\n              [alt]="entry.content"\n              class="mx-auto"\n            />\n          </section>\n        }\n        @case ("content") {\n          <section [ngClass]="positionClass(entry.position)">\n            <ul class="list-space">\n              <li>{{ entry.content }}</li>\n            </ul>\n          </section>\n        }\n      }\n    }\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoPayTableDefaultComponent, { className: "InfoPayTableDefaultComponent", filePath: "src/app/pages/info-pay-table-default/info-pay-table-default.component.ts", lineNumber: 11 });
})();

// src/app/pages/info/info.component.ts
function InfoComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "info-pay-table-default");
  }
}
function InfoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InfoComponent_Conditional_4_Conditional_0_Template, 1, 0, "info-pay-table-default");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.hidePayTable() ? 0 : -1);
  }
}
function InfoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "info-feature");
  }
}
function InfoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "info-guide", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("hideTurbo", ctx_r0.hideTurboGuide())("hideAutoplay", ctx_r0.hideAutoplay())("hideNoteItem2", ctx_r0.hideNoteItem2());
  }
}
var EntryEnum;
(function(EntryEnum2) {
  EntryEnum2[EntryEnum2["title_left"] = 0] = "title_left";
  EntryEnum2[EntryEnum2["title_center"] = 1] = "title_center";
  EntryEnum2[EntryEnum2["title_right"] = 2] = "title_right";
  EntryEnum2[EntryEnum2["subtitle_left"] = 3] = "subtitle_left";
  EntryEnum2[EntryEnum2["subtitle_center"] = 4] = "subtitle_center";
  EntryEnum2[EntryEnum2["subtitle_right"] = 5] = "subtitle_right";
  EntryEnum2[EntryEnum2["image_left"] = 6] = "image_left";
  EntryEnum2[EntryEnum2["image_center"] = 7] = "image_center";
  EntryEnum2[EntryEnum2["image_right"] = 8] = "image_right";
  EntryEnum2[EntryEnum2["content_left"] = 9] = "content_left";
  EntryEnum2[EntryEnum2["content_center"] = 10] = "content_center";
  EntryEnum2[EntryEnum2["content_right"] = 11] = "content_right";
})(EntryEnum || (EntryEnum = {}));
var InfoEntry = class {
  category = "content";
  position = "center";
  content = "Invalid entry.";
  activedTab = signal("Pay Table");
  constructor(str) {
    const match = str.split("@");
    if (match) {
      const prefix = EntryEnum[Number(match[0])];
      const subfix = match[1];
      this.category = prefix.split("_")[0];
      this.position = prefix.split("_")[1];
      this.content = subfix;
    }
  }
};
var InfoComponent = class _InfoComponent {
  http;
  profile;
  login;
  api;
  appI18n = inject(AppI18nService);
  gaCollector = inject(GACollectorService);
  header = computed(() => this.appI18n.instant("info") ?? "Info");
  hidePayTable = input(false);
  tabs = computed(() => {
    const tabs = [];
    if (!this.hidePayTable()) {
      tabs.push({
        id: "Pay Table",
        label: this.appI18n.instant("paytable") ?? "Pay Table",
        icon: "document-text"
      });
    }
    tabs.push({
      id: "Feature",
      label: this.appI18n.instant("feature") ?? "Feature",
      icon: "sparkles"
    }, {
      id: "Guide",
      label: this.appI18n.instant("guide") ?? "Guide",
      icon: "book-open"
    });
    return tabs;
  });
  activedTab = signal("Pay Table");
  isBack = signal(false);
  // Breadcrumbs
  breadcrumbs = computed(() => {
    const tab = this.tabs().find((t) => t.id === this.activedTab());
    return [
      { label: this.header(), url: "/info" },
      { label: tab?.label ?? this.activedTab(), url: `/info/${this.activedTab()}` }
    ];
  });
  hideTurboGuide = input(false);
  hideAutoplay = input(false);
  hideNoteItem2 = input(false);
  close = output();
  isLoadingFinished = false;
  featureEntries = [];
  paytableEntries = [];
  gameId = "10087";
  constructor(http, profile, login, api) {
    this.http = http;
    this.profile = profile;
    this.login = login;
    this.api = api;
    effect(() => {
      const visibleTabs = this.tabs();
      const currentTab = this.activedTab();
      const hasCurrentTab = visibleTabs.some((tab) => tab.id === currentTab);
      if (!hasCurrentTab && visibleTabs.length > 0) {
        this.activedTab.set(visibleTabs[0].id);
      }
    });
  }
  ngOnInit() {
  }
  // State
  selectedTab = signal("Pay Table");
  selectTab(buttonType) {
    this.selectedTab.set(buttonType);
  }
  changeTab(tabId) {
    this.activedTab.set(tabId);
    const gaName = InfoTabGAMap[tabId] ?? `info_tab_${tabId}`;
    this.gaCollector.trackButtonClick({ buttonName: gaName });
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      const data = yield this.getInfoData();
      this.featureEntries = data.feature;
      const _loginResult = this.api.loginResult();
      if (_loginResult && _loginResult["rtp"]) {
        this.featureEntries.push(new InfoEntry("9@\u25CF RTP: " + _loginResult["rtp"]));
      }
      this.paytableEntries = data.paytable;
      this.isLoadingFinished = true;
    });
  }
  getInfoData() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const path = `../system/game_word/${this.gameId}/${this.login.language}/game_word.json`;
        this.http.get(path).subscribe({
          next: (data) => {
            const feature = Object.entries(data).filter(([key]) => key.startsWith("info_feature_")).map(([, value]) => value);
            const paytable = Object.entries(data).filter(([key]) => key.startsWith("info_paytable_")).map(([, value]) => value);
            resolve({
              feature: feature.map((value) => new InfoEntry(value)),
              paytable: paytable.map((value) => new InfoEntry(value))
            });
          },
          error: (err) => {
            reject(err);
          }
        });
      });
    });
  }
  static \u0275fac = function InfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(PlayerWalletService), \u0275\u0275directiveInject(ClientSessionService), \u0275\u0275directiveInject(AppInterfaceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoComponent, selectors: [["page-info"]], inputs: { hidePayTable: [1, "hidePayTable"], hideTurboGuide: [1, "hideTurboGuide"], hideAutoplay: [1, "hideAutoplay"], hideNoteItem2: [1, "hideNoteItem2"] }, outputs: { close: "close" }, decls: 7, vars: 6, consts: [[3, "close", "header", "enableBack"], [1, "relative", "z-sticky", "flex", "h-full", "flex-col"], [3, "tabChange", "tabs", "selectedTab", "accentColor"], [1, "min-h-0", "flex-1", "overflow-hidden", "pt-12"], [3, "hideTurbo", "hideAutoplay", "hideNoteItem2"]], template: function InfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ap-ui-frame-page", 0);
      \u0275\u0275listener("close", function InfoComponent_Template_ap_ui_frame_page_close_0_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "ap-tab-menu-text", 2);
      \u0275\u0275listener("tabChange", function InfoComponent_Template_ap_tab_menu_text_tabChange_2_listener($event) {
        return ctx.changeTab($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275conditionalCreate(4, InfoComponent_Conditional_4_Template, 1, 1)(5, InfoComponent_Conditional_5_Template, 1, 0, "info-feature")(6, InfoComponent_Conditional_6_Template, 1, 3, "info-guide", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("header", ctx.header())("enableBack", ctx.isBack());
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.tabs())("selectedTab", ctx.activedTab())("accentColor", "yellow");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activedTab() === "Pay Table" ? 4 : ctx.activedTab() === "Feature" ? 5 : ctx.activedTab() === "Guide" ? 6 : -1);
    }
  }, dependencies: [CommonModule, ApUiFramePageComponent, InfoFeatureComponent, InfoGuideComponent, InfoPayTableDefaultComponent, ApTabMenuTextComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoComponent, [{
    type: Component,
    args: [{ selector: "page-info", imports: [CommonModule, ApUiFramePageComponent, InfoFeatureComponent, InfoGuideComponent, InfoPayTableDefaultComponent, ApTabMenuTextComponent], template: `<ap-ui-frame-page
  [header]="header()"
  [enableBack]="isBack()"
  (close)="close.emit()"
>
  <div class="relative z-sticky flex h-full flex-col">
    <ap-tab-menu-text
      [tabs]="tabs()"
      [selectedTab]="activedTab()"
      [accentColor]="'yellow'"
      (tabChange)="changeTab($event)"
    />
    <div class="min-h-0 flex-1 overflow-hidden pt-12">
      @if (activedTab() === "Pay Table") {
        @if (!hidePayTable()) {
          <info-pay-table-default />
        }
      } @else if (activedTab() === "Feature") {
        <info-feature />
      } @else if (activedTab() === "Guide") {
        <info-guide
          [hideTurbo]="hideTurboGuide()"
          [hideAutoplay]="hideAutoplay()"
          [hideNoteItem2]="hideNoteItem2()"
        />
      }
    </div>
  </div>
</ap-ui-frame-page>
` }]
  }], () => [{ type: HttpClient }, { type: PlayerWalletService }, { type: ClientSessionService }, { type: AppInterfaceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoComponent, { className: "InfoComponent", filePath: "src/app/pages/info/info.component.ts", lineNumber: 61 });
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
  LeaderBoardService,
  InfoComponent
};
//# sourceMappingURL=chunk-2ESHPC34.js.map
