import {
  ApUiVersionComponent
} from "./chunk-6H5XA62D.js";
import {
  ApButtonAutoSpinTimesComponent,
  ApButtonFreeSpinsComponent,
  ApHistoryPopupReplayEndComponent,
  ApIconAutoplayCircleComponent,
  ApIconBadgeComponent,
  ApIconBuyFeatureCircleComponent,
  ApIconCampaignCircleComponent,
  ApIconDecreaseBoxComponent,
  ApIconHoldTurboSpinComponent,
  ApIconIncreaseBoxComponent,
  ApIconSpinComponent,
  ApIconTurboCircleComponent
} from "./chunk-XYMPOXOA.js";
import {
  PointerDownSoundDirective
} from "./chunk-JHJKX6RD.js";
import {
  MoneyTextPipe
} from "./chunk-U7TK2FIU.js";
import {
  SoundService
} from "./chunk-FCZ4RVMP.js";
import {
  BottomPanelService,
  RULE_GA_ES,
  isAutoSpinTimesButtonMode
} from "./chunk-MQEPEO5W.js";
import {
  ApIconMusicCircleComponent,
  ApUiReplayModeComponent,
  PlayerWalletService
} from "./chunk-5GFZDTRR.js";
import {
  ApWebBase,
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-OW6577YR.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  ApWebReplaySessionKey
} from "./chunk-MLWU5HFS.js";
import {
  ApToggleSwitchComponent
} from "./chunk-MKS37EB3.js";
import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  AppInterfaceService,
  isShortUrlMessage,
  isTicketMessage
} from "./chunk-TLQLKLDD.js";
import {
  LoggerService
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService
} from "./chunk-54ITVL2G.js";
import {
  CommonModule,
  DomSanitizer,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Injectable,
  Subject,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-QGU3BS3L.js";

// src/app/services/history-replay/history-replay.service.ts
var HistoryReplayService = class _HistoryReplayService {
  session = inject(ClientSessionService);
  sanitizer = inject(DomSanitizer);
  logger = inject(LoggerService);
  api = inject(AppInterfaceService);
  /** ShortURL Subject */
  shortUrlSubject = new Subject();
  /** ShortURL 訂閱接口 @example: shortUrl$.subscribe((response) => { ... }); */
  get shortUrl$() {
    return this.shortUrlSubject.asObservable();
  }
  /** Ticket Subject */
  ticketSubject = new Subject();
  /** Ticket 訂閱接口 @example: ticket$.subscribe((response) => { ... }); */
  get ticket$() {
    return this.ticketSubject.asObservable();
  }
  // 給replay viewer用的變數
  isOldGame = signal(false);
  showReplayViewer = signal(false);
  replayUrl = signal(null);
  gameId = signal(null);
  pendingPostSessionData = signal(null);
  setPendingPostSessionData(payload) {
    this.pendingPostSessionData.set(payload);
  }
  consumePendingPostSessionData() {
    const data = this.pendingPostSessionData();
    this.pendingPostSessionData.set(null);
    return data;
  }
  constructor() {
    this.api.historyReplay$.subscribe(this.onApiResponse.bind(this));
    this.removeReplayData();
  }
  /**
   * 處理 ShortLink 回應（從 Server 接收資料）
   * @param response - Server 回應的 ShortURL 資料
   */
  onApiResponse(response) {
    if (isShortUrlMessage(response)) {
      this.shortUrlSubject.next(response);
    } else if (isTicketMessage(response)) {
      this.storageReplayData(response);
      this.ticketSubject.next(response);
    }
  }
  storageReplayData(data) {
    try {
      this.gameId.set(data?.GameCode ?? null);
      const jsonData = JSON.stringify(data);
      sessionStorage.setItem(ApWebReplaySessionKey, jsonData);
    } catch (e) {
      this.logger.error("Failed to store replay data in sessionStorage:", e);
    }
  }
  removeReplayData() {
    this.gameId.set(null);
    sessionStorage.removeItem(ApWebReplaySessionKey);
  }
  getTicketDetail(ticketNo, type, gameCode = null, multiplier = null) {
    if (!ticketNo)
      return;
    let mulstring = multiplier !== null ? multiplier.toString() : "";
    let gameCodeString = gameCode !== null ? gameCode : "";
    this.api.sendInfoMsgNostringify("History", `${ticketNo},REPLAY,${type},${gameCodeString},${mulstring}`);
  }
  getShortUrl(ticketNo, type, gameCode = null, multiplier = null) {
    let mulstring = multiplier !== null ? multiplier.toString() : "";
    let gameCodeString = gameCode !== null ? gameCode : "";
    const request = {
      Messages: `${ticketNo},COPYLINK,${type},${gameCodeString},${mulstring}`
    };
    this.api.sendInfoMsgNostringify("History", request.Messages);
  }
  openReplayViewer(url, oldGame) {
    if (this.session.assetUrl.includes("launch")) {
      url = url.replace("/", "/launch/");
    }
    url += (url.includes("?") ? "&" : "?") + `lang=${this.session.language}`;
    if (this.session.remoteHost) {
      url = url + "&_ga_session=kvpvre3uwdp1an9n88u4";
    }
    this.isOldGame.set(oldGame);
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.replayUrl.set(safeUrl);
    this.showReplayViewer.set(true);
  }
  closeReplayViewer() {
    this.showReplayViewer.set(false);
    this.replayUrl.set(null);
    this.removeReplayData();
  }
  static \u0275fac = function HistoryReplayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryReplayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HistoryReplayService, factory: _HistoryReplayService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryReplayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/components/ap-ui-game-name/ap-ui-game-name.component.ts
function ApUiGameNameComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.gameTime());
  }
}
var ApUiGameNameComponent = class _ApUiGameNameComponent {
  session = inject(ClientSessionService);
  gameId = input(this.session.gameId);
  i18n = inject(AppI18nService);
  gameName = computed(() => {
    const id = this.gameId();
    if (!id)
      return "";
    return this.i18n.enGameName();
  });
  showTime = input(true);
  /** 遊戲計時器 */
  gameTime = signal("00:00:00");
  _gameTimerInterval = null;
  _gameTimeSeconds = 0;
  ngOnInit() {
    if (!this.showTime())
      return;
    if (this._gameTimerInterval)
      return;
    this._gameTimerInterval = setInterval(() => {
      this._gameTimeSeconds++;
      const h = Math.floor(this._gameTimeSeconds / 3600);
      const m = Math.floor(this._gameTimeSeconds % 3600 / 60);
      const s = this._gameTimeSeconds % 60;
      this.gameTime.set(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`);
    }, 1e3);
  }
  ngOnDestroy() {
    if (this._gameTimerInterval)
      clearInterval(this._gameTimerInterval);
  }
  static \u0275fac = function ApUiGameNameComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiGameNameComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiGameNameComponent, selectors: [["ap-ui-game-name"]], inputs: { gameId: [1, "gameId"], showTime: [1, "showTime"] }, decls: 4, vars: 2, consts: [[1, "flex", "w-full", "select-none", "uppercase", "gap-0.5", "text-[9px]", "text-stroke", "items-center"], [1, "text-[0.6rem]"]], template: function ApUiGameNameComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, ApUiGameNameComponent_Conditional_3_Template, 4, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.gameName());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showTime() ? 3 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.text-stroke[_ngcontent-%COMP%] {\n  color: #f4f4f5;\n  text-shadow:\n    1px 1px 1px oklch(21% 0.006 285.885),\n    -1px 1px 1px oklch(21% 0.006 285.885),\n    1px -1px 1px oklch(21% 0.006 285.885),\n    -1px -1px 1px oklch(21% 0.006 285.885);\n}\n/*# sourceMappingURL=ap-ui-game-name.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiGameNameComponent, [{
    type: Component,
    args: [{ selector: "ap-ui-game-name", imports: [CommonModule], template: '<div\n  class="flex w-full select-none uppercase gap-0.5 text-[9px] text-stroke items-center"\n>\n  <div>{{ gameName() }}</div>\n  @if (showTime()) {\n    <div class="text-[0.6rem]">|</div>\n    <div>{{ gameTime() }}</div>\n  }\n</div>\n', styles: ["/* src/app/components/ap-ui-game-name/ap-ui-game-name.component.css */\n.text-stroke {\n  color: #f4f4f5;\n  text-shadow:\n    1px 1px 1px oklch(21% 0.006 285.885),\n    -1px 1px 1px oklch(21% 0.006 285.885),\n    1px -1px 1px oklch(21% 0.006 285.885),\n    -1px -1px 1px oklch(21% 0.006 285.885);\n}\n/*# sourceMappingURL=ap-ui-game-name.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiGameNameComponent, { className: "ApUiGameNameComponent", filePath: "src/app/components/ap-ui-game-name/ap-ui-game-name.component.ts", lineNumber: 12 });
})();

// src/app/components/ap-ui-logo-name/ap-ui-logo-name.component.ts
var ApUiLogoNameComponent = class _ApUiLogoNameComponent {
  logoName = input("AdvantPlay");
  static \u0275fac = function ApUiLogoNameComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiLogoNameComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiLogoNameComponent, selectors: [["ap-ui-logo-name"]], inputs: { logoName: [1, "logoName"] }, decls: 4, vars: 1, consts: [[1, "w-full", "select-none", "uppercase", "text-stroke", "text-[9px]"]], template: function ApUiLogoNameComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "ap-ui-version");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.logoName());
    }
  }, dependencies: [CommonModule, ApUiVersionComponent], styles: ["\n\n.text-stroke[_ngcontent-%COMP%] {\n  color: #f4f4f5;\n  text-shadow:\n    1px 1px 1px oklch(21% 0.006 285.885),\n    -1px 1px 1px oklch(21% 0.006 285.885),\n    1px -1px 1px oklch(21% 0.006 285.885),\n    -1px -1px 1px oklch(21% 0.006 285.885);\n}\n/*# sourceMappingURL=ap-ui-logo-name.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiLogoNameComponent, [{
    type: Component,
    args: [{ selector: "ap-ui-logo-name", imports: [CommonModule, ApUiVersionComponent], template: '<div\n  class="w-full select-none uppercase text-stroke text-[9px]"\n>\n  <div>{{ logoName() }}</div>\n  <ap-ui-version />\n  <!--If use logo <ap-icon name="ap-2" class="size-7" />-->\n</div>\n', styles: ["/* src/app/components/ap-ui-logo-name/ap-ui-logo-name.component.css */\n.text-stroke {\n  color: #f4f4f5;\n  text-shadow:\n    1px 1px 1px oklch(21% 0.006 285.885),\n    -1px 1px 1px oklch(21% 0.006 285.885),\n    1px -1px 1px oklch(21% 0.006 285.885),\n    -1px -1px 1px oklch(21% 0.006 285.885);\n}\n/*# sourceMappingURL=ap-ui-logo-name.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiLogoNameComponent, { className: "ApUiLogoNameComponent", filePath: "src/app/components/ap-ui-logo-name/ap-ui-logo-name.component.ts", lineNumber: 18 });
})();

// src/app/pages/bottom-panel/bottom-panel-constants.ts
var TURBO_STATE_TRANSITIONS = {
  default: "pressed1",
  pressed1: "pressed2",
  pressed2: "default"
};
var SIZE_CONFIG = {
  landscape: {
    spinIcon: 4.85,
    buttonIcon: 2.85,
    controlIcon: 2,
    listBottomHeight: 1.4,
    centerGroupGap: 0.4,
    centerSpacerWidth: 4.7,
    menuOffset: 0.1,
    statusBarHeight: 1.5,
    statusBarWidth: 20,
    statusBarFontSize: 1,
    statusBarGap: -0.5,
    bottomBarFontSize: 0.7,
    bottomIconSize: 1,
    bottomMenuIconSize: 1.2,
    middleHintFontSize: 0.7,
    middleHintIconSize: 0.7,
    middleListBottomHeight: 1.4,
    buttonsAreaTranslateY: 0.5,
    topStatusBarFontSize: 1.2
  },
  portrait: {
    spinIcon: 5.6,
    buttonIcon: 3.2,
    controlIcon: 2.2,
    listBottomHeight: 2,
    centerGroupGap: 0.5,
    centerSpacerWidth: 6.5,
    menuOffset: 0,
    statusBarHeight: 1.25,
    statusBarWidth: 18,
    statusBarFontSize: 1,
    statusBarGap: 0,
    bottomBarFontSize: 0.7,
    bottomIconSize: 0.7,
    bottomMenuIconSize: 1.8,
    middleHintFontSize: 0.65,
    middleHintIconSize: 0.65,
    middleListBottomHeight: 1.6,
    buttonsAreaTranslateY: 0.8,
    topStatusBarFontSize: 0.9
  }
};
var SIZE_CONFIG_LEAN = __spreadProps(__spreadValues({}, SIZE_CONFIG), {
  portrait: __spreadProps(__spreadValues({}, SIZE_CONFIG.portrait), {
    bottomBarFontSize: 0.6
  })
});
var FREE_SPIN_BASE_SIZE_REM = 6;
var LAYOUT_CONFIG = {
  GAME_RATIO: 9 / 16,
  HOST_WIDTH_RATIO: 1.78,
  PANEL_LANDSCAPE_RATIO: 0.2,
  PANEL_PORTRAIT_RATIO: 0.25
};

// src/app/pages/bottom-panel/bottom-panel-base.ts
var BottomPanelBase = class _BottomPanelBase {
  appI18n = inject(AppI18nService);
  elRef = inject(ElementRef);
  session = inject(ClientSessionService);
  destroyRef = inject(DestroyRef);
  version = computed(() => this.session.version().app);
  /** 尺寸設定，子類別可覆寫（e.g. SIZE_CONFIG_LEAN for replay / demo） */
  sizeConfig = SIZE_CONFIG;
  // ── Layout signals ──────────────────────────────────────────
  scale = signal(1);
  hostWidth = signal(0);
  hostHeight = signal(0);
  hostBottom = signal(0);
  hostLeft = signal(0);
  viewportWidth = signal(window.innerWidth);
  /** 目前的佈局模式（portrait 或 landscape） */
  layoutMode = signal(this.session.isMobile() ? "portrait" : "landscape");
  turboState = signal("default");
  /** 目前裝置是行動裝置 */
  isMobile = computed(() => this.session.isMobile());
  resizeObserver = null;
  windowResizeHandler = null;
  /** 手機強制使用 portrait 佈局 */
  forcedPortrait = computed(() => this.session.isMobile());
  // ── @HostBinding ────────────────────────────────────────────
  get cssWidth() {
    return this.hostWidth();
  }
  get cssHeight() {
    return this.hostHeight();
  }
  get cssBottom() {
    return this.hostBottom();
  }
  get cssLeft() {
    return this.hostLeft();
  }
  // ── Computed helpers ─────────────────────────────────────────
  /** LayoutMode是Landscape */
  isLandscape = computed(() => this.layoutMode() === "landscape");
  /** LayoutMode是Portrait */
  isPortrait = computed(() => this.layoutMode() === "portrait");
  /** Cooldown動畫相關，讓 template 在兩個 keyframe class 間交替，確保連續自動旋轉時每次都能重新觸發動畫 */
  spinCooldownTick = signal(0);
  isTurboHidden = signal(false);
  isCampaignHidden = signal(false);
  autoSpinOptions = signal([10, 50, 100, 300, Infinity]);
  leftButtonsHidden = computed(() => [this.isCampaignHidden(), false]);
  rightButtonsHidden = computed(() => [false, this.isTurboHidden()]);
  buttonPositionClass(landscapeClass, portraitClass, hiddenStates, index) {
    return computed(() => {
      if (this.isLandscape())
        return landscapeClass;
      const isAlone = !hiddenStates()[index] && hiddenStates().filter((hidden) => !hidden).length === 1;
      return isAlone ? portraitClass.replace(/top-\d+\/\d+/, "top-1/2") : portraitClass;
    });
  }
  campaignButtonPositionClass = this.buttonPositionClass("top-1/2 left-1/10", "left-1/6 top-3/10", this.leftButtonsHidden, 0);
  featureButtonPositionClass = this.buttonPositionClass("top-1/2 left-1/4", "left-1/6 top-7/10", this.leftButtonsHidden, 1);
  autoplayButtonPositionClass = this.buttonPositionClass("top-1/2 right-1/4", "right-1/6 top-3/10", this.rightButtonsHidden, 0);
  turboButtonPositionClass = this.buttonPositionClass("top-1/2 right-1/10", "right-1/6 top-7/10", this.rightButtonsHidden, 1);
  config = computed(() => this.sizeConfig[this.layoutMode()]);
  // ── Sizing computeds (rem 字串) ──────────────────────────────
  spinIconSize = computed(() => `${this.config().spinIcon * this.scale()}rem`);
  buttonIconSize = computed(() => `${this.config().buttonIcon * this.scale()}rem`);
  controlIconSize = computed(() => `${this.config().controlIcon * this.scale()}rem`);
  listBottomHeight = computed(() => `${this.config().listBottomHeight * this.scale()}rem`);
  centerGroupGap = computed(() => `${this.config().centerGroupGap * this.scale()}rem`);
  centerSpacerWidth = computed(() => `${this.config().centerSpacerWidth * this.scale()}rem`);
  centerGroupWidth = computed(() => `${parseFloat(this.centerSpacerWidth()) * 2.25}rem`);
  menuOffset = computed(() => `${this.config().menuOffset * this.scale()}rem`);
  statusBarGap = computed(() => `${this.config().statusBarGap * this.scale()}rem`);
  statusBarHeight = computed(() => `${this.config().statusBarHeight * this.scale()}rem`);
  statusBarWidth = computed(() => `${this.config().statusBarWidth * this.scale()}rem`);
  statusBarFontSize = computed(() => `${this.config().statusBarFontSize * this.scale()}rem`);
  bottomBarFontSize = computed(() => `${this.config().bottomBarFontSize * this.scale()}rem`);
  middleHintFontSize = computed(() => `${this.config().middleHintFontSize * this.scale()}rem`);
  middleHintIconSize = computed(() => `${this.config().middleHintIconSize * this.scale()}rem`);
  middleListBottomHeight = computed(() => `${this.config().middleListBottomHeight * this.scale()}rem`);
  bottomIconSize = computed(() => `${this.config().bottomIconSize * this.scale()}rem`);
  bottomMenuIconSize = computed(() => `${this.config().bottomMenuIconSize * this.scale()}rem`);
  freeSpinScale = computed(() => this.config().spinIcon * this.scale() / FREE_SPIN_BASE_SIZE_REM);
  buttonsAreaTranslateY = computed(() => `translateY(${this.config().buttonsAreaTranslateY * this.scale()}rem)`);
  topStatusBarFontSize = computed(() => {
    if (this.layoutMode() === "landscape") {
      return `${this.config().topStatusBarFontSize}rem`;
    }
    return `${this.config().topStatusBarFontSize * this.scale()}rem`;
  });
  // 處理custom data相關
  customData = input(null);
  constructor() {
    effect(() => {
      const customRule = this.customData()?.customRule || null;
      untracked(() => {
        if (customRule === RULE_GA_ES) {
          this.autoSpinOptions.set([10, 25, 50, 75, 100]);
          this.isTurboHidden.set(true);
          this.isCampaignHidden.set(true);
        }
      });
    });
  }
  // ── Utilities ────────────────────────────────────────────────
  /** 更新 turboState 並回傳對應速度 0 / 1 / 2 */
  updateTurboState() {
    this.turboState.update((current) => TURBO_STATE_TRANSITIONS[current]);
    const s = this.turboState();
    return s === "default" ? 0 : s === "pressed1" ? 1 : 2;
  }
  // Labels
  /** feature mode提示訊息 */
  featureStartTipLabel = computed(() => this.appI18n.gameStr("game_state_0"));
  /** feature mode提示訊息是否啟用 */
  featureStartTipEnabled = computed(() => this.featureStartTipLabel() !== null);
  // ── Lifecycle ────────────────────────────────────────────────
  ngAfterViewInit() {
    this.initResizeObserver();
    this.destroyRef.onDestroy(() => this.cleanup());
    this.windowResizeHandler = () => this.viewportWidth.set(window.innerWidth);
    window.addEventListener("resize", this.windowResizeHandler);
  }
  initResizeObserver() {
    const parent = this.elRef.nativeElement.parentElement;
    if (!parent)
      return;
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.resizeByParent(entry.contentRect);
      }
    });
    this.resizeObserver.observe(parent);
  }
  resizeByParent(parent) {
    const ratio = parent.width / parent.height;
    if (ratio > LAYOUT_CONFIG.GAME_RATIO) {
      this.applyHorizontalLayout(parent, LAYOUT_CONFIG.PANEL_LANDSCAPE_RATIO);
    } else {
      this.applyVerticalLayout(parent, LAYOUT_CONFIG.PANEL_PORTRAIT_RATIO);
    }
  }
  applyHorizontalLayout(parent, heightRatio) {
    const gameHeight = parent.height;
    const gameWidth = gameHeight * LAYOUT_CONFIG.GAME_RATIO;
    const targetHostWidth = gameWidth * LAYOUT_CONFIG.HOST_WIDTH_RATIO;
    let hostWidth;
    if (this.forcedPortrait()) {
      this.hostWidth.set(parent.width);
      this.hostHeight.set(gameHeight * LAYOUT_CONFIG.PANEL_PORTRAIT_RATIO);
      this.layoutMode.set("portrait");
      this.hostLeft.set(0);
      this.hostBottom.set(0);
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      this.scale.set(this.hostHeight() / rootFontSize / 18 * 1.6);
      return;
    }
    if (targetHostWidth < parent.width) {
      hostWidth = targetHostWidth;
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      this.scale.set(hostWidth / rootFontSize / 59 * 1.4);
    } else {
      hostWidth = parent.width;
      this.applyViewportScale(hostWidth, targetHostWidth);
    }
    this.hostHeight.set(gameHeight * heightRatio);
    this.hostWidth.set(hostWidth);
    this.layoutMode.set("landscape");
    this.hostLeft.set((parent.width - hostWidth) / 2);
    this.hostBottom.set(0);
  }
  /**
   * 視窗寬度不足時的縮放計算（override point）。
   */
  applyViewportScale(hostWidth, targetWidth) {
    const ratio = hostWidth / targetWidth;
    this.scale.set(Math.max(1.34 * Math.pow(ratio, 0.85), 1));
  }
  applyVerticalLayout(parent, heightRatio) {
    const gameWidth = parent.width;
    const gameHeight = gameWidth / LAYOUT_CONFIG.GAME_RATIO;
    this.hostWidth.set(gameWidth);
    this.hostHeight.set(gameHeight * heightRatio);
    this.hostLeft.set(0);
    this.hostBottom.set((parent.height - gameHeight) / 2);
    this.layoutMode.set("portrait");
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    this.scale.set(this.hostHeight() / rootFontSize / 18 * 1.6);
  }
  cleanup() {
    this.resizeObserver?.disconnect();
    if (this.windowResizeHandler) {
      window.removeEventListener("resize", this.windowResizeHandler);
    }
  }
  static \u0275fac = function BottomPanelBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomPanelBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BottomPanelBase, hostVars: 8, hostBindings: function BottomPanelBase_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.cssWidth, "px")("height", ctx.cssHeight, "px")("bottom", ctx.cssBottom, "px")("left", ctx.cssLeft, "px");
    }
  }, inputs: { customData: [1, "customData"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomPanelBase, [{
    type: Directive
  }], () => [], { cssWidth: [{
    type: HostBinding,
    args: ["style.width.px"]
  }], cssHeight: [{
    type: HostBinding,
    args: ["style.height.px"]
  }], cssBottom: [{
    type: HostBinding,
    args: ["style.bottom.px"]
  }], cssLeft: [{
    type: HostBinding,
    args: ["style.left.px"]
  }] });
})();

// src/app/components/ap-spin-button/ap-spin-button.component.ts
function ApSpinButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-spin", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("icon-idle-spin", !ctx_r0.disabled());
    \u0275\u0275property("variant", ctx_r0.variant());
  }
}
function ApSpinButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-hold-turbo-spin", 3);
  }
}
function ApSpinButtonComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 5);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275listener("click", function ApSpinButtonComponent_Conditional_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("pointerdown", function ApSpinButtonComponent_Conditional_4_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
}
var TURBO_HOLD_THRESHOLD_MS = 500;
var IDLE_TOOLTIP_MS = 500;
var ApSpinButtonComponent = class _ApSpinButtonComponent {
  /* 5秒未觸動，播放暈光提示動態 */
  static PRESS_HINT_DELAY_MS = 5e3;
  pressHintTimeoutId = null;
  variant = input("default");
  pressHintEnabled = model(false);
  pressHintTimerEnabled = input(false);
  pressHintType = input("blur");
  disabled = input(false);
  fastSpinDisabled = input(false);
  enableLightingEffect = input(true);
  /** 遊戲是否正在旋轉/忙碌中；忙碌期間不累計閒置提示的倒數 */
  isSpinning = input(false);
  /** Hold for Turbo Spin（按住加速）功能開關，預設關閉；關閉時不觸發 Turbo 也不顯示提示 */
  holdTurboEnabled = input(false);
  /** 按住啟動 Turbo 的毫秒門檻，可由 Debug Panel 調整 */
  turboHoldThresholdMs = input(TURBO_HOLD_THRESHOLD_MS);
  /** 閒置提示顯示延遲毫秒數，可由 Debug Panel 調整 */
  idleTooltipMs = input(IDLE_TOOLTIP_MS);
  buttonClick = output();
  /** 當按住旋轉按鈕達 Turbo 門檻時觸發，參數表示是否正在持續按住 */
  turboHold = output();
  /**
   * 每次要觸發快速旋轉動畫時遞增此值。
   * 元件會在 a/b 兩個 keyframe class 間交替，確保每次都能重新觸發動畫。
   */
  spinCount = input(0);
  soundService = inject(SoundService);
  appI18n = inject(AppI18nService);
  destroyRef = inject(DestroyRef);
  elementRef = inject(ElementRef);
  /** Hold for Turbo Spin 的閒置提示文字 */
  idleTooltipLabel = this.appI18n.computed("spin_hold_turbo_tip", "Hold to speed up!");
  /** Turbo 加速進行中的提示文字 */
  turboActiveLabel = this.appI18n.computed("spin_turbo_active_tip", "Speeding up!");
  spinClass = signal(null);
  isHolding = signal(false);
  isTurboActive = signal(false);
  showIdleTooltip = signal(false);
  showIdleHalo = signal(false);
  keepHoldTurboIconWhileHolding = signal(false);
  /** Turbo 進行中持續顯示加速提示；否則依閒置倒數顯示長按提示 */
  showTooltip = computed(() => (this.isTurboActive() || this.showIdleTooltip()) && !this.disabled());
  showHoldTurboIcon = computed(() => !this.disabled() && this.holdTurboEnabled() && (this.isTurboActive() || this.enableLightingEffect() && (this.showIdleTooltip() || this.isHolding() && this.keepHoldTurboIconWhileHolding())));
  tooltipText = computed(() => this.isTurboActive() ? this.turboActiveLabel() : this.idleTooltipLabel());
  _toggle = false;
  _initialized = false;
  holdTimer = null;
  turboInterval = null;
  idleTooltipTimer = null;
  activeHoldPointerId = null;
  constructor() {
    effect(() => {
      const count = this.spinCount();
      if (!this._initialized) {
        this._initialized = true;
        return;
      }
      if (this.disabled() || this.isTurboActive() || this.showHoldTurboIcon() || this.fastSpinDisabled())
        return;
      if (count > 0) {
        this._toggle = !this._toggle;
        this.spinClass.set(this._toggle ? "fast-spin-a" : "fast-spin-b");
      }
    });
    effect(() => {
      if (this.disabled() || !this.holdTurboEnabled()) {
        this.activeHoldPointerId = null;
        this.stopHold();
        this.cancelIdleTooltip();
      } else if (this.isSpinning()) {
        this.cancelIdleTooltip();
      } else {
        this.scheduleIdleTooltip();
      }
    });
    effect(() => {
      if (this.disabled() || !this.pressHintTimerEnabled()) {
        this.clearPressHintTimer();
        this.showIdleHalo.set(false);
        return;
      }
      this.restartPressHintTimer();
    });
    this.destroyRef.onDestroy(() => {
      this.stopHold();
      this.cancelIdleTooltip();
      this.clearPressHintTimer();
    });
    effect(() => {
      this.turboHold.emit(this.isTurboActive());
    });
  }
  pointerDown(event) {
    if (this.disabled())
      return;
    const startedFromHoldTurboIcon = this.showHoldTurboIcon();
    this.pressHintEnabled.set(false);
    this.showIdleHalo.set(false);
    this.cancelIdleTooltip();
    this.buttonClick.emit();
    if (this.pressHintTimerEnabled()) {
      this.restartPressHintTimer();
    }
    if (this.holdTurboEnabled()) {
      this.capturePointer(event);
      this.activeHoldPointerId = event.pointerId;
      this.startHold(startedFromHoldTurboIcon);
    }
  }
  onPointerReleasedAnywhere(event) {
    if (this.activeHoldPointerId !== event.pointerId) {
      return;
    }
    this.activeHoldPointerId = null;
    this.stopHold();
    this.scheduleIdleTooltip();
  }
  /** 視窗失焦（切換分頁、彈出視窗）時中斷 Turbo，避免放開按鈕的事件遺失後持續加速 */
  onWindowBlur() {
    this.activeHoldPointerId = null;
    this.stopHold();
  }
  /**
   * 捕捉 pointer，確保在 iframe 上或按鈕範圍外放開時，pointerup 仍會送回本元件的 document。
   * 沒有 capture 時，在遊戲 iframe 上放開按鈕會收不到 pointerup，導致 Turbo 永遠不停止。
   */
  capturePointer(event) {
    try {
      event.currentTarget?.setPointerCapture(event.pointerId);
    } catch {
    }
  }
  /** 按鈕是否實際顯示在畫面上（祖先被 [hidden]/display:none 隱藏或已脫離 DOM 時為 false） */
  isHostVisible() {
    const el = this.elementRef.nativeElement;
    return el.isConnected && el.getClientRects().length > 0;
  }
  startHold(keepHoldTurboIconWhileHolding = false) {
    this.stopHold();
    this.isHolding.set(true);
    this.keepHoldTurboIconWhileHolding.set(keepHoldTurboIconWhileHolding);
    const holdThresholdMs = Math.max(0, this.turboHoldThresholdMs() || 0);
    this.holdTimer = setTimeout(() => this.activateTurbo(), holdThresholdMs);
  }
  activateTurbo() {
    if (!this.isHostVisible()) {
      this.stopHold();
      return;
    }
    this.isTurboActive.set(true);
    this.soundService.playClick();
  }
  stopHold() {
    if (this.holdTimer !== null) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }
    if (this.turboInterval !== null) {
      clearInterval(this.turboInterval);
      this.turboInterval = null;
    }
    this.isHolding.set(false);
    this.isTurboActive.set(false);
    this.keepHoldTurboIconWhileHolding.set(false);
  }
  scheduleIdleTooltip() {
    this.cancelIdleTooltip();
    if (!this.holdTurboEnabled() || this.disabled() || this.isSpinning() || this.isHolding())
      return;
    const idleTooltipMs = Math.max(0, this.idleTooltipMs() || 0);
    this.idleTooltipTimer = setTimeout(() => this.showIdleTooltip.set(true), idleTooltipMs);
  }
  cancelIdleTooltip() {
    if (this.idleTooltipTimer !== null) {
      clearTimeout(this.idleTooltipTimer);
      this.idleTooltipTimer = null;
    }
    this.showIdleTooltip.set(false);
  }
  restartPressHintTimer() {
    this.clearPressHintTimer();
    this.showIdleHalo.set(false);
    this.pressHintTimeoutId = setTimeout(() => {
      if (!this.disabled()) {
        this.showIdleHalo.set(true);
      }
    }, _ApSpinButtonComponent.PRESS_HINT_DELAY_MS);
  }
  clearPressHintTimer() {
    if (this.pressHintTimeoutId !== null) {
      clearTimeout(this.pressHintTimeoutId);
      this.pressHintTimeoutId = null;
    }
  }
  static \u0275fac = function ApSpinButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApSpinButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApSpinButtonComponent, selectors: [["ap-spin-button"]], hostBindings: function ApSpinButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("pointerup", function ApSpinButtonComponent_pointerup_HostBindingHandler($event) {
        return ctx.onPointerReleasedAnywhere($event);
      }, \u0275\u0275resolveDocument)("pointercancel", function ApSpinButtonComponent_pointercancel_HostBindingHandler($event) {
        return ctx.onPointerReleasedAnywhere($event);
      }, \u0275\u0275resolveDocument)("blur", function ApSpinButtonComponent_blur_HostBindingHandler() {
        return ctx.onWindowBlur();
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { variant: [1, "variant"], pressHintEnabled: [1, "pressHintEnabled"], pressHintTimerEnabled: [1, "pressHintTimerEnabled"], pressHintType: [1, "pressHintType"], disabled: [1, "disabled"], fastSpinDisabled: [1, "fastSpinDisabled"], enableLightingEffect: [1, "enableLightingEffect"], isSpinning: [1, "isSpinning"], holdTurboEnabled: [1, "holdTurboEnabled"], turboHoldThresholdMs: [1, "turboHoldThresholdMs"], idleTooltipMs: [1, "idleTooltipMs"], spinCount: [1, "spinCount"] }, outputs: { pressHintEnabled: "pressHintEnabledChange", buttonClick: "buttonClick", turboHold: "turboHold" }, decls: 5, vars: 13, consts: [[1, "relative", "size-full", 3, "pointerdown"], [1, "relative", "size-full"], [1, "icon-crossfade", "absolute", "inset-0", "size-full", "pointer-events-none", 3, "variant", "icon-idle-spin"], [1, "icon-crossfade", "absolute", "inset-0", "size-full", "scale-105", "pointer-events-none", "icon-turbo-rotate-in"], [1, "icon-crossfade", "absolute", "inset-0", "size-full", "pointer-events-none", 3, "variant"], [1, "disabled-cover", "absolute", "inset-0"], [1, "absolute", "inset-0", "z-sticky", 3, "click", "pointerdown"]], template: function ApSpinButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("pointerdown", function ApSpinButtonComponent_Template_div_pointerdown_0_listener($event) {
        return ctx.pointerDown($event);
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ApSpinButtonComponent_Conditional_2_Template, 1, 3, "ap-icon-spin", 2);
      \u0275\u0275conditionalCreate(3, ApSpinButtonComponent_Conditional_3_Template, 1, 0, "ap-icon-hold-turbo-spin", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, ApSpinButtonComponent_Conditional_4_Template, 2, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("cursor-not-allowed", ctx.disabled())("auto-spin-run-soft-halo", !ctx.disabled() && (ctx.pressHintEnabled() || ctx.showIdleHalo()) && ctx.pressHintType() === "blur");
      \u0275\u0275advance();
      \u0275\u0275classProp("fast-spin-a", ctx.spinClass() === "fast-spin-a")("fast-spin-b", ctx.spinClass() === "fast-spin-b")("spin-turbo", ctx.isTurboActive() && !ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.showHoldTurboIcon() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showHoldTurboIcon() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.disabled() ? 4 : -1);
    }
  }, dependencies: [ApIconSpinComponent, ApIconHoldTurboSpinComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1 / 1;\n  touch-action: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n}\n@keyframes _ngcontent-%COMP%_idle-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.icon-idle-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_idle-spin 2.5s linear infinite;\n}\n.icon-turbo-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_idle-spin 0.2s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_turbo-icon-rotate-in {\n  from {\n    transform: rotate(-14deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n.icon-turbo-rotate-in[_ngcontent-%COMP%] {\n  will-change: transform, opacity;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  animation: _ngcontent-%COMP%_turbo-icon-rotate-in 5.5s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n@keyframes _ngcontent-%COMP%_spin-a {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(1440deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin-b {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(1440deg);\n  }\n}\n.fast-spin-a[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin-a 2s ease-out forwards;\n}\n.fast-spin-b[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin-b 2s ease-out forwards;\n}\n.icon-crossfade[_ngcontent-%COMP%] {\n  transition: opacity 0.2s ease-in-out;\n}\n.icon-crossfade.opacity-0[_ngcontent-%COMP%] {\n  transition: opacity 0.3s linear;\n}\n.disabled-cover[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n@keyframes _ngcontent-%COMP%_turbo-pulse {\n  0%, 100% {\n    filter: drop-shadow(0 0 6px rgba(254, 240, 138, 0.8));\n  }\n  50% {\n    filter: drop-shadow(0 0 16px rgba(253, 224, 71, 0.85));\n  }\n}\n.spin-turbo[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_turbo-pulse 0.85s ease-in-out infinite;\n}\n.spin-turbo[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: 9999px;\n  border: 0.14rem solid rgba(253, 224, 71, 1);\n  opacity: 0;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_turbo-outline-pulse 0.85s ease-out infinite;\n}\n@keyframes _ngcontent-%COMP%_turbo-outline-pulse {\n  0% {\n    scale: 0.9;\n    opacity: 0.8;\n  }\n  70% {\n    scale: 1.25;\n    opacity: 0;\n  }\n  100% {\n    scale: 1.25;\n    opacity: 0;\n  }\n}\n.idle-tooltip[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.auto-spin-run-soft-halo[_ngcontent-%COMP%] {\n  isolation: isolate;\n  border-radius: 9999px;\n  will-change: scale, filter;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  filter: drop-shadow(0 0 0.3rem rgba(251, 191, 36, 0.4));\n  animation: _ngcontent-%COMP%_auto-spin-run-soft-halo-invite 1.4s ease-in-out infinite;\n}\n.auto-spin-run-soft-halo[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: 9999px;\n  border: 0.14rem solid rgba(253, 224, 71, 0.9);\n  opacity: 0;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_auto-spin-run-soft-halo-ring 1.4s ease-out infinite;\n}\n.auto-spin-run-soft-halo[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -0.25rem;\n  z-index: 0;\n  border-radius: 9999px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(254, 249, 195, 0.2) 0%,\n      rgba(253, 224, 71, 0.13) 32%,\n      rgba(250, 204, 21, 0.1) 52%,\n      rgba(251, 191, 36, 0.02) 70%,\n      rgba(251, 191, 36, 0) 100%);\n  filter: blur(0.3rem);\n  opacity: 0.9;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_auto-spin-run-soft-halo 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_auto-spin-run-soft-halo {\n  0%, 100% {\n    opacity: 0.5;\n    scale: 0.94;\n  }\n  50% {\n    opacity: 1;\n    scale: 1.04;\n  }\n}\n@keyframes _ngcontent-%COMP%_auto-spin-run-soft-halo-invite {\n  0%, 100% {\n    scale: 1;\n    filter: drop-shadow(0 0 0.2rem rgba(251, 191, 36, 0.4));\n  }\n  50% {\n    scale: 1;\n    filter: drop-shadow(0 0 0.4rem rgba(253, 224, 71, 0.85));\n  }\n}\n@keyframes _ngcontent-%COMP%_auto-spin-run-soft-halo-ring {\n  0%, 45% {\n    scale: 1;\n    opacity: 0;\n  }\n  50% {\n    scale: 1;\n    opacity: 0.85;\n  }\n  100% {\n    scale: 1.3;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=ap-spin-button.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApSpinButtonComponent, [{
    type: Component,
    args: [{ selector: "ap-spin-button", standalone: true, imports: [ApIconSpinComponent, ApIconHoldTurboSpinComponent], template: `<div
  class="relative size-full"
  [class.cursor-not-allowed]="disabled()"
  (pointerdown)="pointerDown($event)"
  [class.auto-spin-run-soft-halo]="
    !disabled() &&
    (pressHintEnabled() || showIdleHalo()) &&
    pressHintType() === 'blur'
  "
>
  <!-- Hold Turbo \u63D0\u793A\u5716\u793A\u8207\u65CB\u8F49\u5716\u793A\u4EE5\u900F\u660E\u5EA6\u4EA4\u53C9\u6DE1\u5165\u6DE1\u51FA\u5207\u63DB\uFF0C\u5169\u8005\u90FD\u6703\u96A8\u9019\u5C64\u65CB\u8F49 -->
  <div
    class="relative size-full"
    [class.fast-spin-a]="
      spinClass() === 'fast-spin-a' 
    "
    [class.fast-spin-b]="
      spinClass() === 'fast-spin-b'
    "
    [class.spin-turbo]="isTurboActive() && !disabled()"
  >
    @if (!showHoldTurboIcon()) {
      <ap-icon-spin
        [variant]="variant()"
        class="icon-crossfade absolute inset-0 size-full pointer-events-none"
        [class.icon-idle-spin]="!disabled()"
      />
    }
    @if (showHoldTurboIcon()) {
      <ap-icon-hold-turbo-spin
        class="icon-crossfade absolute inset-0 size-full scale-105 pointer-events-none icon-turbo-rotate-in"
      />
    }
  </div>
  @if (disabled()) {
    <div class="disabled-cover absolute inset-0"></div>
    <div
      class="absolute inset-0 z-sticky"
      (click)="$event.stopPropagation()"
      (pointerdown)="$event.stopPropagation()"
    ></div>
  }
</div>
`, styles: ['/* src/app/components/ap-spin-button/ap-spin-button.component.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1 / 1;\n  touch-action: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n}\n@keyframes idle-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.icon-idle-spin {\n  animation: idle-spin 2.5s linear infinite;\n}\n.icon-turbo-spin {\n  animation: idle-spin 0.2s linear infinite;\n}\n@keyframes turbo-icon-rotate-in {\n  from {\n    transform: rotate(-14deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n.icon-turbo-rotate-in {\n  will-change: transform, opacity;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  animation: turbo-icon-rotate-in 5.5s cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n@keyframes spin-a {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(1440deg);\n  }\n}\n@keyframes spin-b {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(1440deg);\n  }\n}\n.fast-spin-a {\n  animation: spin-a 2s ease-out forwards;\n}\n.fast-spin-b {\n  animation: spin-b 2s ease-out forwards;\n}\n.icon-crossfade {\n  transition: opacity 0.2s ease-in-out;\n}\n.icon-crossfade.opacity-0 {\n  transition: opacity 0.3s linear;\n}\n.disabled-cover {\n  border-radius: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n@keyframes turbo-pulse {\n  0%, 100% {\n    filter: drop-shadow(0 0 6px rgba(254, 240, 138, 0.8));\n  }\n  50% {\n    filter: drop-shadow(0 0 16px rgba(253, 224, 71, 0.85));\n  }\n}\n.spin-turbo {\n  animation: turbo-pulse 0.85s ease-in-out infinite;\n}\n.spin-turbo::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: 9999px;\n  border: 0.14rem solid rgba(253, 224, 71, 1);\n  opacity: 0;\n  pointer-events: none;\n  animation: turbo-outline-pulse 0.85s ease-out infinite;\n}\n@keyframes turbo-outline-pulse {\n  0% {\n    scale: 0.9;\n    opacity: 0.8;\n  }\n  70% {\n    scale: 1.25;\n    opacity: 0;\n  }\n  100% {\n    scale: 1.25;\n    opacity: 0;\n  }\n}\n.idle-tooltip::after {\n  display: none;\n}\n.auto-spin-run-soft-halo {\n  isolation: isolate;\n  border-radius: 9999px;\n  will-change: scale, filter;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  filter: drop-shadow(0 0 0.3rem rgba(251, 191, 36, 0.4));\n  animation: auto-spin-run-soft-halo-invite 1.4s ease-in-out infinite;\n}\n.auto-spin-run-soft-halo::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: 9999px;\n  border: 0.14rem solid rgba(253, 224, 71, 0.9);\n  opacity: 0;\n  pointer-events: none;\n  animation: auto-spin-run-soft-halo-ring 1.4s ease-out infinite;\n}\n.auto-spin-run-soft-halo::after {\n  content: "";\n  position: absolute;\n  inset: -0.25rem;\n  z-index: 0;\n  border-radius: 9999px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(254, 249, 195, 0.2) 0%,\n      rgba(253, 224, 71, 0.13) 32%,\n      rgba(250, 204, 21, 0.1) 52%,\n      rgba(251, 191, 36, 0.02) 70%,\n      rgba(251, 191, 36, 0) 100%);\n  filter: blur(0.3rem);\n  opacity: 0.9;\n  pointer-events: none;\n  animation: auto-spin-run-soft-halo 1.4s ease-in-out infinite;\n}\n@keyframes auto-spin-run-soft-halo {\n  0%, 100% {\n    opacity: 0.5;\n    scale: 0.94;\n  }\n  50% {\n    opacity: 1;\n    scale: 1.04;\n  }\n}\n@keyframes auto-spin-run-soft-halo-invite {\n  0%, 100% {\n    scale: 1;\n    filter: drop-shadow(0 0 0.2rem rgba(251, 191, 36, 0.4));\n  }\n  50% {\n    scale: 1;\n    filter: drop-shadow(0 0 0.4rem rgba(253, 224, 71, 0.85));\n  }\n}\n@keyframes auto-spin-run-soft-halo-ring {\n  0%, 45% {\n    scale: 1;\n    opacity: 0;\n  }\n  50% {\n    scale: 1;\n    opacity: 0.85;\n  }\n  100% {\n    scale: 1.3;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=ap-spin-button.component.css.map */\n'] }]
  }], () => [], { onPointerReleasedAnywhere: [{
    type: HostListener,
    args: ["document:pointerup", ["$event"]]
  }, {
    type: HostListener,
    args: ["document:pointercancel", ["$event"]]
  }], onWindowBlur: [{
    type: HostListener,
    args: ["window:blur"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApSpinButtonComponent, { className: "ApSpinButtonComponent", filePath: "src/app/components/ap-spin-button/ap-spin-button.component.ts", lineNumber: 21 });
})();

// src/app/pages/top-status-bar/top-status-bar.component.ts
function TopStatusBarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r0.fontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label(), " ");
  }
}
var TopStatusBarComponent = class _TopStatusBarComponent {
  panel = inject(BottomPanelService);
  wallet = inject(PlayerWalletService);
  i18n = inject(AppI18nService);
  fontSize = input("1.2rem");
  isVisible = computed(() => {
    return this.panel.isFreeSpinRound() || this.panel.isFreeBonusRound() || this.wallet.isDoubleChance();
  });
  label = computed(() => {
    if (this.panel.isFreeSpinRound()) {
      return this.i18n.instant("buyfeature_fs_mode", "Free Spin Mode");
    } else if (this.panel.isFreeBonusRound()) {
      return this.i18n.instant("buyfeature_fb_mode", "Free Bonus Mode");
    } else if (this.wallet.isDoubleChance()) {
      const defaultDCText = this.i18n.instant("buyfeature_dc_mode", "Double Chance Mode");
      return this.i18n.instantGame(`buyfeature_${this.wallet.spinMode()}_mode`, defaultDCText);
    } else {
      return "";
    }
  });
  static \u0275fac = function TopStatusBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopStatusBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopStatusBarComponent, selectors: [["top-status-bar"]], inputs: { fontSize: [1, "fontSize"] }, decls: 1, vars: 1, consts: [[1, "play-mode-gradient", "inline-flex", "items-center", "justify-center", "gap-4", "px-2", "py-1", "w-80", "fade-out"], [1, "flex", "items-center", "justify-center", "text-center", "font-bold", "leading-none", "text-stroke", "tracking-wide"]], template: function TopStatusBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TopStatusBarComponent_Conditional_0_Template, 3, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isVisible() ? 0 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.play-mode-gradient[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, #000 50%, rgba(0, 0, 0, 0) 100%);\n  background-image:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0) 0%,\n      #000 50%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.text-stroke[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow:\n    1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9);\n}\n/*# sourceMappingURL=top-status-bar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopStatusBarComponent, [{
    type: Component,
    args: [{ selector: "top-status-bar", imports: [CommonModule], template: '@if (isVisible()) {\n  <div\n    class="play-mode-gradient inline-flex items-center justify-center gap-4 px-2 py-1 w-80 fade-out"\n  >\n    <div\n      class="flex items-center justify-center text-center font-bold leading-none text-stroke tracking-wide"\n      [style.fontSize]="fontSize()"\n    >\n      {{ label() }}\n    </div>\n  </div>\n}\n\n', styles: ["/* src/app/pages/top-status-bar/top-status-bar.component.css */\n.play-mode-gradient {\n  background-color: transparent;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, #000 50%, rgba(0, 0, 0, 0) 100%);\n  background-image:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0) 0%,\n      #000 50%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.text-stroke {\n  color: #fff;\n  text-shadow:\n    1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9);\n}\n/*# sourceMappingURL=top-status-bar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopStatusBarComponent, { className: "TopStatusBarComponent", filePath: "src/app/pages/top-status-bar/top-status-bar.component.ts", lineNumber: 14 });
})();

// src/app/pages/bottom-panel-demo/bottom-panel-demo.component.ts
var _c0 = (a0, a1) => ({ "bottom-1/15": a0, "bottom-1/6": a1 });
var _c1 = (a0, a1) => [a0, a1];
var _c2 = (a0) => ({ "cursor-pointer hover:scale-105 transition-transform active:scale-95": a0 });
var _c3 = (a0) => [a0];
var _c4 = () => [];
var _c5 = () => ({ addSymbol: false });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function BottomPanelDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-icon-badge", 35);
    \u0275\u0275listener("click", function BottomPanelDemoComponent_Conditional_9_Template_ap_icon_badge_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMusicAtAutoButton());
    });
    \u0275\u0275element(1, "ap-icon-music-circle", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.buttonIconSize());
    \u0275\u0275property("hasBadge", false);
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.isMusicAtAutoButtonOn() ? "default" : "pressed");
  }
}
function BottomPanelDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 36)(1, "img", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", "blank");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.rsImgPath() + `?v=${ctx_r1.version()}`, \u0275\u0275sanitizeUrl);
  }
}
function BottomPanelDemoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-icon-badge", 38);
    \u0275\u0275listener("click", function BottomPanelDemoComponent_Conditional_11_Template_ap_icon_badge_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.clickAutoplay());
    });
    \u0275\u0275element(1, "ap-icon-autoplay-circle");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.isAutoPlayDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabled", ctx_r1.isAutoPlayDisabled());
    \u0275\u0275attribute("disabled", ctx_r1.isAutoPlayDisabled() ? "" : null);
  }
}
function BottomPanelDemoComponent_Conditional_12_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 43);
  }
}
function BottomPanelDemoComponent_Conditional_12_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const option_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", option_r6.value, " ");
  }
}
function BottomPanelDemoComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function BottomPanelDemoComponent_Conditional_12_For_3_Template_div_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clickAutoplayOption(option_r6.value));
    });
    \u0275\u0275conditionalCreate(1, BottomPanelDemoComponent_Conditional_12_For_3_Conditional_1_Template, 1, 0, "ap-icon", 43)(2, BottomPanelDemoComponent_Conditional_12_For_3_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const \u0275$index_39_r7 = ctx.$index;
    const \u0275$count_39_r8 = ctx.$count;
    \u0275\u0275styleProp("border-bottom", \u0275$index_39_r7 === \u0275$count_39_r8 - 1 ? "none" : "1px solid rgb(63 63 70)");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r6.isInfinity ? 1 : 2);
  }
}
function BottomPanelDemoComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("clickOutside", function BottomPanelDemoComponent_Conditional_12_Template_div_clickOutside_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAutoplayMenu());
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275repeaterCreate(2, BottomPanelDemoComponent_Conditional_12_For_3_Template, 3, 3, "div", 41, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.autoplayOptions);
  }
}
function BottomPanelDemoComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-turbo-circle", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("variant", "pressed2");
  }
}
function BottomPanelDemoComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-turbo-circle", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("variant", ctx_r1.turboState());
  }
}
function BottomPanelDemoComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 44);
    \u0275\u0275listener("buttonClick", function BottomPanelDemoComponent_Conditional_23_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickFeatureSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pressHintEnabled", ctx_r1.featureStartTipEnabled())("pressHintTimerEnabled", ctx_r1.featureStartTipEnabled())("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.featureTotal() || 0)("currentSpins", ctx_r1.featureRemaining() || 0)("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelDemoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 45);
    \u0275\u0275listener("buttonClick", function BottomPanelDemoComponent_Conditional_24_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickStopAutoSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.autoSpinTotal() || 0)("currentSpins", ctx_r1.autoSpinRemaining() || 0)("variant", ctx_r1.isAutoSpinInfinity() ? "infinity" : "default")("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelDemoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-spin-button", 46);
    \u0275\u0275listener("buttonClick", function BottomPanelDemoComponent_Conditional_25_Template_ap_spin_button_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickCampaignSpin());
    })("turboHold", function BottomPanelDemoComponent_Conditional_25_Template_ap_spin_button_turboHold_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHoldTurbo($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.spinIconSize());
    \u0275\u0275property("pressHintType", ctx_r1.pressHintType())("ngClass", \u0275\u0275pureFunction1(11, _c2, !ctx_r1.isSpinDisabled()))("spinCount", ctx_r1.spinCount())("disabled", ctx_r1.isSpinDisabled())("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled())("isSpinning", ctx_r1.isGameBusy())("holdTurboEnabled", ctx_r1.isHoldTurboEnabled())("turboHoldThresholdMs", ctx_r1.turboHoldThresholdMs())("idleTooltipMs", ctx_r1.idleTooltipMs());
  }
}
function BottomPanelDemoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-free-spins", 47);
    \u0275\u0275listener("buttonClick", function BottomPanelDemoComponent_Conditional_26_Template_ap_button_free_spins_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickCampaignSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.freeSpinTotal() || 0)("currentSpins", ctx_r1.freeSpinRemaining() || 0);
  }
}
function BottomPanelDemoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 48);
    \u0275\u0275listener("buttonClick", function BottomPanelDemoComponent_Conditional_27_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickStopAutoSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.autoSpinTotal() || 0)("currentSpins", ctx_r1.autoSpinRemaining() || 0)("variant", ctx_r1.isAutoSpinInfinity() ? "infinity" : "default")("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelDemoComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-spin-button", 49);
    \u0275\u0275listener("buttonClick", function BottomPanelDemoComponent_Conditional_28_Template_ap_spin_button_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSpin());
    })("turboHold", function BottomPanelDemoComponent_Conditional_28_Template_ap_spin_button_turboHold_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHoldTurbo($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.spinIconSize());
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c2, !ctx_r1.isSpinDisabled()))("spinCount", ctx_r1.spinCount())("disabled", ctx_r1.isSpinDisabled())("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled())("isSpinning", ctx_r1.isGameBusy())("holdTurboEnabled", ctx_r1.isHoldTurboEnabled())("turboHoldThresholdMs", ctx_r1.turboHoldThresholdMs())("idleTooltipMs", ctx_r1.idleTooltipMs());
  }
}
function BottomPanelDemoComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 50);
    \u0275\u0275listener("buttonClick", function BottomPanelDemoComponent_Conditional_29_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickStopAutoSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.autoSpinTotal() || 0)("currentSpins", ctx_r1.autoSpinRemaining() || 0)("variant", ctx_r1.isAutoSpinInfinity() ? "infinity" : "default")("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelDemoComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-spin-button", 51);
    \u0275\u0275listener("buttonClick", function BottomPanelDemoComponent_Conditional_30_Template_ap_spin_button_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSpin());
    })("turboHold", function BottomPanelDemoComponent_Conditional_30_Template_ap_spin_button_turboHold_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHoldTurbo($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.spinIconSize());
    \u0275\u0275property("pressHintEnabled", ctx_r1.isClickToSpinTipEnabled())("spinCount", ctx_r1.spinCount())("ngClass", \u0275\u0275pureFunction1(12, _c2, !ctx_r1.isSpinDisabled()))("disabled", ctx_r1.isSpinDisabled())("fastSpinDisabled", ctx_r1.isFastSpinDisabled())("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled())("isSpinning", ctx_r1.isGameBusy())("holdTurboEnabled", ctx_r1.isHoldTurboEnabled())("turboHoldThresholdMs", ctx_r1.turboHoldThresholdMs())("idleTooltipMs", ctx_r1.idleTooltipMs());
  }
}
function BottomPanelDemoComponent_Conditional_31_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "circle", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ga-spin-progress-ring--auto-spin-times", ctx_r1.isAutoSpinTimesButtonMode());
  }
}
function BottomPanelDemoComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BottomPanelDemoComponent_Conditional_31_For_1_Template, 2, 2, ":svg:svg", 52, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.spinCooldownTick() > 0 ? \u0275\u0275pureFunction1(0, _c3, ctx_r1.spinCooldownTick()) : \u0275\u0275pureFunction0(2, _c4));
  }
}
function BottomPanelDemoComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function BottomPanelDemoComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function BottomPanelDemoComponent_Conditional_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function BottomPanelDemoComponent_For_40_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-toggle-switch", 59);
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("accentColor", "yellow")("checked", ctx_r1.toggleMap()[item_r19.id]);
  }
}
function BottomPanelDemoComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function BottomPanelDemoComponent_For_40_Template_div_click_0_listener() {
      const item_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(item_r19.action());
    });
    \u0275\u0275element(1, "ap-icon", 57);
    \u0275\u0275elementStart(2, "h3", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BottomPanelDemoComponent_For_40_Conditional_4_Template, 1, 2, "ap-toggle-switch", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "panel-menu-" + item_r19.id);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.iconMap()[item_r19.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r19.hasToggle ? 4 : -1);
  }
}
function BottomPanelDemoComponent_Conditional_41_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelDemoComponent_Conditional_41_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBalance(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelDemoComponent_Conditional_41_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelDemoComponent_Conditional_41_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBet(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelDemoComponent_Conditional_41_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelDemoComponent_Conditional_41_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayWin(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelDemoComponent_Conditional_41_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275conditionalCreate(1, BottomPanelDemoComponent_Conditional_41_Conditional_19_Conditional_1_Template, 2, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.displayWin() !== null ? 1 : -1);
  }
}
function BottomPanelDemoComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 60)(2, "h6", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62);
    \u0275\u0275conditionalCreate(5, BottomPanelDemoComponent_Conditional_41_Conditional_5_Template, 1, 0)(6, BottomPanelDemoComponent_Conditional_41_Conditional_6_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 63)(8, "h6", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 64)(11, "div", 65);
    \u0275\u0275conditionalCreate(12, BottomPanelDemoComponent_Conditional_41_Conditional_12_Template, 1, 0)(13, BottomPanelDemoComponent_Conditional_41_Conditional_13_Template, 2, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 66)(15, "h6", 61);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 67);
    \u0275\u0275conditionalCreate(18, BottomPanelDemoComponent_Conditional_41_Conditional_18_Template, 1, 0)(19, BottomPanelDemoComponent_Conditional_41_Conditional_19_Template, 2, 1, "div", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getBalanceLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBalanceHided() ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getBetLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isBetHided() ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getWinLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWinHided() ? 18 : 19);
  }
}
function BottomPanelDemoComponent_Conditional_42_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelDemoComponent_Conditional_42_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBalance(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelDemoComponent_Conditional_42_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelDemoComponent_Conditional_42_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBet(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelDemoComponent_Conditional_42_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelDemoComponent_Conditional_42_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayWin(), \u0275\u0275pureFunction0(5, _c5)), " ");
  }
}
function BottomPanelDemoComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 69);
    \u0275\u0275element(2, "ap-icon", 70);
    \u0275\u0275elementStart(3, "div", 71);
    \u0275\u0275conditionalCreate(4, BottomPanelDemoComponent_Conditional_42_Conditional_4_Template, 1, 0)(5, BottomPanelDemoComponent_Conditional_42_Conditional_5_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 72)(7, "div", 73);
    \u0275\u0275element(8, "ap-icon", 74);
    \u0275\u0275elementStart(9, "div", 75);
    \u0275\u0275conditionalCreate(10, BottomPanelDemoComponent_Conditional_42_Conditional_10_Template, 1, 0)(11, BottomPanelDemoComponent_Conditional_42_Conditional_11_Template, 2, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 76)(13, "div", 73);
    \u0275\u0275element(14, "ap-icon", 77);
    \u0275\u0275elementStart(15, "div", 78);
    \u0275\u0275conditionalCreate(16, BottomPanelDemoComponent_Conditional_42_Conditional_16_Template, 1, 0)(17, BottomPanelDemoComponent_Conditional_42_Conditional_17_Template, 2, 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.bottomIconSize());
    \u0275\u0275property("name", ctx_r1.isBonusWalletUsed() ? "star" : "wallet");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBalanceHided() ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("height", ctx_r1.bottomIconSize());
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBetHided() ? 10 : 11);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("height", ctx_r1.bottomIconSize());
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWinHided() ? 16 : ctx_r1.displayWin() !== null ? 17 : -1);
  }
}
function BottomPanelDemoComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "div", 81);
    \u0275\u0275element(3, "ap-icon", 82);
    \u0275\u0275elementStart(4, "div", 83);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 83)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "moneyText");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("bottom", ctx_r1.isPortrait() ? "16.6667%" : ctx_r1.middleListBottomHeight())("font-size", ctx_r1.middleHintFontSize());
    \u0275\u0275classProp("left-0", ctx_r1.isLandscape())("right-0", ctx_r1.isLandscape())("bg-linear-to-r", ctx_r1.isLandscape());
    \u0275\u0275advance();
    \u0275\u0275classProp("flex-col", ctx_r1.isPortrait())("items-center", ctx_r1.isPortrait())("flex-row", ctx_r1.isLandscape())("justify-between", ctx_r1.isLandscape());
    \u0275\u0275advance();
    \u0275\u0275classProp("order-2", ctx_r1.isLandscape());
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.middleHintIconSize());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayEndTime(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("order-1", ctx_r1.isLandscape());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRemainingTurnoverLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 27, ctx_r1.displayRemainingTurnover()));
  }
}
var BottomPanelDemoComponent = class _BottomPanelDemoComponent extends BottomPanelBase {
  soundService = inject(SoundService);
  displayCurrency = input("DEMO");
  displayBet = input(0);
  displayWin = input(0);
  musicPressedChange = output();
  turboStateChange = output();
  spin = output();
  /* 觸發特效 */
  pressHintEnabled = model(true);
  pressHintType = input("blur");
  autoButtonMode = signal("music-toggle");
  isAutoSpinInfinity = signal(false);
  isFeatureCancelled = signal(false);
  rsImgPath = signal("");
  isCampaignDisabled = signal(true);
  isBonusWalletUsed = signal(false);
  isFeatureDisabled = signal(true);
  isDecreaseDisabled = signal(true);
  isIncreaseDisabled = signal(true);
  isMenuDisabled = signal(true);
  isMusicAtAutoButtonOn = signal(true);
  campaignHasBadge = signal(false);
  isMenuOpen = signal(false);
  isAutoplayMenuOpen = signal(false);
  isClickToSpinTipEnabled = signal(true);
  autoSpinLightingEffectEnabled = input(true);
  iconMap = signal({});
  toggleMap = signal({});
  menuItems = signal([]);
  autoplayOptions = [];
  displayBalance = signal(0);
  isGameBusy = input(false);
  /** Demo 模式不啟用 Hold for Turbo Spin */
  isHoldTurboEnabled = signal(false);
  /** Demo 模式固定使用預設長按門檻毫秒數 */
  turboHoldThresholdMs = signal(500);
  /** Demo 模式固定使用預設Turbo間隔毫秒數 */
  turboSkipIntervalMs = signal(500);
  /** Demo 模式固定使用預設閒置提示毫秒數 */
  /** 是否正在長按 Turbo 按鈕 */
  isHoldingTurbo = signal(false);
  idleTooltipMs = signal(500);
  isBalanceHided = signal(true);
  isBetHided = signal(false);
  isWinHided = signal(false);
  spinCount = signal(0);
  hasDismissedReplayStatusBar = signal(false);
  isStatusBarFadingOut = signal(false);
  // Campaign 額外欄位
  getRemainingTurnoverLabel = signal("Remaining turnover");
  displayRemainingTurnover = signal(0);
  displayEndTime = signal("2024/12/31 23:59:59");
  showRemainingTurnover = signal(false);
  /** 是否顯示Replay開始提示 */
  showReplayStart = signal(true);
  /** 是否顯示Feature開始提示 */
  showFeatureStart = signal(false);
  getBalanceLabel = this.appI18n.computed("spin_area_balance", "BALANCE");
  getBetLabel = this.appI18n.computed("spin_area_bet", "BET");
  getWinLabel = this.appI18n.computed("spin_area_win", "WIN");
  isSpinDisabled = signal(false);
  isFastSpinDisabled = signal(false);
  isAutoPlayDisabled = computed(() => true);
  isTurboDisabled = input(false);
  autoSpinTotal = signal(0);
  autoSpinRemaining = signal(0);
  featureTotal = input(0);
  featureRemaining = input(0);
  freeSpinRemaining = signal(0);
  freeSpinTotal = signal(0);
  spinButtonMode = input("default");
  /** 目前顯示的是否為 ap-button-auto-spin-times（外框比 ap-spin-button 小，繞圈特效需要放大） */
  isAutoSpinTimesButtonMode = computed(() => isAutoSpinTimesButtonMode(this.spinButtonMode()));
  /** Global Cooldown的時間 (秒) */
  globalCooldownTime = signal(0);
  musicIcon = computed(() => this.isMusicAtAutoButtonOn() ? "music" : "music pressed");
  turnOnFeatureStart() {
    this.showFeatureStart.set(true);
  }
  turnOffFeatureStart() {
    this.showFeatureStart.set(false);
  }
  resetReplayStart() {
    this.showReplayStart.set(true);
  }
  clickSpin() {
    if (!this.isGameBusy())
      this.soundService.playClick();
    this.showReplayStart.set(false);
    this.spin.emit();
  }
  clickFeatureSpin() {
    this.spin.emit();
  }
  clickTurbo() {
    const speed = this.updateTurboState();
    this.turboStateChange.emit(speed);
  }
  toggleMusicAtAutoButton() {
    this.musicPressedChange.emit(this.isMusicAtAutoButtonOn());
    this.isMusicAtAutoButtonOn.update((current) => !current);
    this.soundService.setMuted(!this.isMusicAtAutoButtonOn());
  }
  // 其他沒用到的方法
  toggleHoldTurbo(enable) {
  }
  clickCampaignSpin() {
  }
  clickStopAutoSpin() {
  }
  clickCampaign() {
  }
  clickFeature() {
  }
  clickDecreaseBet() {
  }
  clickIncreaseBet() {
  }
  clickAutoplay() {
  }
  closeAutoplayMenu() {
  }
  clickAutoplayOption(value) {
  }
  toggleMenu(event) {
  }
  closeMenu() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BottomPanelDemoComponent_BaseFactory;
    return function BottomPanelDemoComponent_Factory(__ngFactoryType__) {
      return (\u0275BottomPanelDemoComponent_BaseFactory || (\u0275BottomPanelDemoComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BottomPanelDemoComponent)))(__ngFactoryType__ || _BottomPanelDemoComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomPanelDemoComponent, selectors: [["bottom-panel-demo"]], inputs: { displayCurrency: [1, "displayCurrency"], displayBet: [1, "displayBet"], displayWin: [1, "displayWin"], pressHintEnabled: [1, "pressHintEnabled"], pressHintType: [1, "pressHintType"], autoSpinLightingEffectEnabled: [1, "autoSpinLightingEffectEnabled"], isGameBusy: [1, "isGameBusy"], isTurboDisabled: [1, "isTurboDisabled"], featureTotal: [1, "featureTotal"], featureRemaining: [1, "featureRemaining"], spinButtonMode: [1, "spinButtonMode"] }, outputs: { musicPressedChange: "musicPressedChange", turboStateChange: "turboStateChange", spin: "spin", pressHintEnabled: "pressHintEnabledChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 44, vars: 80, consts: [[1, "relative", "size-full", 2, "background", "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)"], [1, "absolute", "top-0", "left-1/2", "flex", "items-center", "justify-center", 2, "transform", "translateX(-50%)", 3, "fontSize"], [1, "absolute", "inset-0", 3, "ngClass"], [1, "absolute", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", 3, "click", "ngClass", "hasBadge", "disabled"], [1, "absolute", "-translate-x-1/2", "-translate-y-1/2", "cursor-pointer", "pointer-events-auto", 3, "click", "ngClass", "disabled"], [3, "variant"], [1, "absolute", "translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", 3, "ngClass"], [1, "relative", "shrink-0"], [1, "relative", "size-full", "cursor-pointer", "transition-transform", "hover:scale-105", "active:scale-95", 3, "height", "hasBadge"], ["data-testid", "panel-autoplay", 1, "relative", "size-full", 3, "ngClass", "disabled"], ["clickOutside", "", 1, "absolute", "left-1/2", "bottom-full", "mb-2", "z-sticky", 2, "-webkit-transform", "translateX(-50%)", "transform", "translateX(-50%)"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "absolute", "translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", "touch-none", 3, "touchstart", "pointerdown", "ngClass", "hasBadge", "disabled"], [1, "absolute", "flex", "items-center", "rounded-xl", "p-1", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", "touch-none", 2, "background-color", "rgba(24, 24, 27, 0.8)", 3, "touchstart"], ["data-testid", "panel-decrease", "appPointerDownSound", "", "data-no-click-sound", "", 3, "pointerdown", "ngClass", "disabledCoverVariant", "hasBadge", "disabled"], ["data-testid", "panel-increase", "appPointerDownSound", "", "data-no-click-sound", "", 3, "pointerdown", "ngClass", "disabledCoverVariant", "hasBadge", "disabled"], ["data-testid", "panel-spin", 1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", "touch-none", 3, "touchstart"], [3, "pressHintEnabled", "pressHintTimerEnabled", "scale", "totalSpins", "currentSpins", "enableLightingEffect"], ["mode", "free-bonus-auto-spin", 3, "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "bonus", "data-no-click-sound", "", 3, "pressHintType", "ngClass", "spinCount", "height", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [3, "scale", "totalSpins", "currentSpins"], ["mode", "double-chance-auto-spin", 3, "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "chance", "data-no-click-sound", "", 3, "ngClass", "spinCount", "height", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], ["mode", "auto-spin", 3, "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["data-no-click-sound", "", 3, "pressHintEnabled", "spinCount", "ngClass", "height", "disabled", "fastSpinDisabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [1, "absolute", "bottom-0", "left-0", "right-0", "flex", "items-center", "justify-between", "pr-4", "text-zinc-100", "font-semibold", 2, "border-top", "0.15rem solid rgba(161, 161, 170, 0.6)", "background-color", "rgba(0, 0, 0, 0.5)"], [1, "relative", "shrink-0", "flex", "justify-center", "items-center", "pointer-events-auto"], ["data-testid", "panel-menu", "name", "bar-3", "appPointerDownSound", "", "data-no-click-sound", "", 1, "relative", "size-full", "cursor-pointer", "hover:text-yellow-400", 3, "click"], ["data-testid", "panel-busy", 1, "absolute", "inset-0", "bg-black/50"], [1, "absolute", "inset-0"], ["clickOutside", "", 1, "absolute", "left-0", "bottom-full", "animate-fade-up", "animate-once", "animate-duration-200", "z-dropdown", 3, "clickOutside", "hidden"], [1, "min-w-56", "justify-center", "items-center", "rounded-t-md", "border", "border-zinc-400/50", "bg-zinc-900", "text-zinc-300", "p-2"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold"], [1, "grid", "flex-1", "grid-cols-3", "items-center"], [1, "grid", "flex-1", "grid-cols-3"], [1, "absolute", "mx-auto", "w-full", "px-2", "text-zinc-300", "from-black/50", "via-zinc-800/0", "to-black/50", "inline-flex", 3, "left-0", "right-0", "bg-linear-to-r", "bottom", "fontSize"], [1, "relative", "size-full", "cursor-pointer", "transition-transform", "hover:scale-105", "active:scale-95", 3, "click", "hasBadge"], [1, "absolute", "inset-0", "w-full", "h-full", "text-zinc-100", 3, "name"], ["alt", "RS", 1, "absolute", "left-1/2", "top-1/2", "z-10", "w-[90%]", "h-[90%]", "-translate-x-1/2", "-translate-y-1/2", "-rotate-6", "object-contain", "pointer-events-none", "drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]", 3, "src"], ["data-testid", "panel-autoplay", 1, "relative", "size-full", 3, "click", "ngClass", "disabled"], ["clickOutside", "", 1, "absolute", "left-1/2", "bottom-full", "mb-2", "z-sticky", 2, "-webkit-transform", "translateX(-50%)", "transform", "translateX(-50%)", 3, "clickOutside"], [1, "min-w-26", "rounded-2xl", "bg-zinc-800", "text-white", "cursor-pointer", "animate-fade-up", "animate-once", "animate-duration-200", 2, "border", "2px solid rgb(251 251 251)", "box-shadow", "0 0 0 3px rgb(24 24 27)"], [1, "flex", "items-center", "justify-center", "py-2", "text-xl", "font-bold", "text-white", "hover:text-yellow-300", 3, "border-bottom"], [1, "flex", "items-center", "justify-center", "py-2", "text-xl", "font-bold", "text-white", "hover:text-yellow-300", 3, "click"], ["name", "infinite default", 1, "size-6.5"], [3, "buttonClick", "pressHintEnabled", "pressHintTimerEnabled", "scale", "totalSpins", "currentSpins", "enableLightingEffect"], ["mode", "free-bonus-auto-spin", 3, "buttonClick", "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "bonus", "data-no-click-sound", "", 3, "buttonClick", "turboHold", "pressHintType", "ngClass", "spinCount", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [3, "buttonClick", "scale", "totalSpins", "currentSpins"], ["mode", "double-chance-auto-spin", 3, "buttonClick", "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "chance", "data-no-click-sound", "", 3, "buttonClick", "turboHold", "ngClass", "spinCount", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], ["mode", "auto-spin", 3, "buttonClick", "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["data-no-click-sound", "", 3, "buttonClick", "turboHold", "pressHintEnabled", "spinCount", "ngClass", "disabled", "fastSpinDisabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], ["viewBox", "0 0 100 100", "aria-hidden", "true", 1, "ga-spin-progress-ring", "absolute", "inset-0", 3, "ga-spin-progress-ring--auto-spin-times"], ["viewBox", "0 0 100 100", "aria-hidden", "true", 1, "ga-spin-progress-ring", "absolute", "inset-0"], ["cx", "50", "cy", "50", "r", "46", "pathLength", "100"], [1, "absolute", "inset-0", 3, "click"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold", 3, "click"], [1, "size-6", 3, "name"], [1, "flex-1", "uppercase"], ["variant", "quick", 3, "accentColor", "checked"], [1, "flex", "items-center", "justify-start", "space-x-2", "ml-2"], [1, "text-yellow-400"], ["data-testid", "panel-balance", 1, "space-x-1", "text-zinc-200", "whitespace-nowrap"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "inline-block", "min-w-[4ch]", "text-left", "tabular-nums", "text-zinc-200"], ["data-testid", "panel-bet", 1, "flex", "space-x-1"], [1, "flex", "items-center", "justify-start", "space-x-2", "ml-8", "sm:ml-10", "md:ml-12", "lg:ml-14"], [1, "inline-block", "min-w-[4ch]", "text-left", "text-zinc-200", "tabular-nums", "whitespace-nowrap"], ["data-testid", "panel-win", 1, "flex", "space-x-1"], [1, "flex", "justify-start", "items-center", "space-x-1", "ml-1"], [1, "text-yellow-400", 3, "name"], ["data-testid", "panel-balance", 1, "text-zinc-200", "whitespace-nowrap"], [1, "flex", "justify-center"], [1, "flex", "items-center", "space-x-1"], ["name", "prizes", 1, "text-yellow-400"], ["data-testid", "panel-bet", 1, "text-zinc-200"], [1, "flex", "justify-start", "ml-6"], ["name", "trophy", 1, "text-yellow-400"], ["data-testid", "panel-win", 1, "inline-block", "min-w-[4ch]", "text-left", "tabular-nums", "text-zinc-200"], [1, "absolute", "mx-auto", "w-full", "px-2", "text-zinc-300", "from-black/50", "via-zinc-800/0", "to-black/50", "inline-flex"], [1, "flex", "w-full"], [1, "flex", "items-center", "justify-center", "space-x-1"], ["name", "clock"], [1, "whitespace-nowrap", "leading-tight", "sm:py-0.5"]], template: function BottomPanelDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "top-status-bar", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "ap-icon-badge", 3);
      \u0275\u0275listener("click", function BottomPanelDemoComponent_Template_ap_icon_badge_click_3_listener() {
        return ctx.clickCampaign();
      });
      \u0275\u0275element(4, "ap-icon-campaign-circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ap-icon-badge", 4);
      \u0275\u0275listener("click", function BottomPanelDemoComponent_Template_ap_icon_badge_click_5_listener() {
        return ctx.clickFeature();
      });
      \u0275\u0275element(6, "ap-icon-buy-feature-circle", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
      \u0275\u0275conditionalCreate(9, BottomPanelDemoComponent_Conditional_9_Template, 2, 4, "ap-icon-badge", 8)(10, BottomPanelDemoComponent_Conditional_10_Template, 2, 2)(11, BottomPanelDemoComponent_Conditional_11_Template, 2, 3, "ap-icon-badge", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, BottomPanelDemoComponent_Conditional_12_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ap-icon-badge", 11);
      \u0275\u0275listener("touchstart", function BottomPanelDemoComponent_Template_ap_icon_badge_touchstart_13_listener($event) {
        return $event.preventDefault();
      })("pointerdown", function BottomPanelDemoComponent_Template_ap_icon_badge_pointerdown_13_listener() {
        return ctx.clickTurbo();
      });
      \u0275\u0275conditionalCreate(14, BottomPanelDemoComponent_Conditional_14_Template, 1, 1, "ap-icon-turbo-circle", 5)(15, BottomPanelDemoComponent_Conditional_15_Template, 1, 1, "ap-icon-turbo-circle", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275listener("touchstart", function BottomPanelDemoComponent_Template_div_touchstart_16_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275elementStart(17, "ap-icon-badge", 13);
      \u0275\u0275listener("pointerdown", function BottomPanelDemoComponent_Template_ap_icon_badge_pointerdown_17_listener() {
        return ctx.clickDecreaseBet();
      });
      \u0275\u0275element(18, "ap-icon-decrease-box");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "div");
      \u0275\u0275elementStart(20, "ap-icon-badge", 14);
      \u0275\u0275listener("pointerdown", function BottomPanelDemoComponent_Template_ap_icon_badge_pointerdown_20_listener() {
        return ctx.clickIncreaseBet();
      });
      \u0275\u0275element(21, "ap-icon-increase-box");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275listener("touchstart", function BottomPanelDemoComponent_Template_div_touchstart_22_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275conditionalCreate(23, BottomPanelDemoComponent_Conditional_23_Template, 1, 6, "ap-button-auto-spin-times", 16)(24, BottomPanelDemoComponent_Conditional_24_Template, 1, 5, "ap-button-auto-spin-times", 17)(25, BottomPanelDemoComponent_Conditional_25_Template, 1, 13, "ap-spin-button", 18)(26, BottomPanelDemoComponent_Conditional_26_Template, 1, 3, "ap-button-free-spins", 19)(27, BottomPanelDemoComponent_Conditional_27_Template, 1, 5, "ap-button-auto-spin-times", 20)(28, BottomPanelDemoComponent_Conditional_28_Template, 1, 12, "ap-spin-button", 21)(29, BottomPanelDemoComponent_Conditional_29_Template, 1, 5, "ap-button-auto-spin-times", 22)(30, BottomPanelDemoComponent_Conditional_30_Template, 1, 14, "ap-spin-button", 23);
      \u0275\u0275conditionalCreate(31, BottomPanelDemoComponent_Conditional_31_Template, 2, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 24)(33, "div", 25)(34, "ap-icon", 26);
      \u0275\u0275listener("click", function BottomPanelDemoComponent_Template_ap_icon_click_34_listener($event) {
        return ctx.toggleMenu($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, BottomPanelDemoComponent_Conditional_35_Template, 1, 0, "div", 27);
      \u0275\u0275conditionalCreate(36, BottomPanelDemoComponent_Conditional_36_Template, 1, 0, "div", 28);
      \u0275\u0275elementStart(37, "div", 29);
      \u0275\u0275listener("clickOutside", function BottomPanelDemoComponent_Template_div_clickOutside_37_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(38, "div", 30);
      \u0275\u0275repeaterCreate(39, BottomPanelDemoComponent_For_40_Template, 5, 4, "div", 31, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(41, BottomPanelDemoComponent_Conditional_41_Template, 20, 18, "div", 32)(42, BottomPanelDemoComponent_Conditional_42_Template, 18, 16, "div", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(43, BottomPanelDemoComponent_Conditional_43_Template, 12, 29, "div", 34);
    }
    if (rf & 2) {
      \u0275\u0275classProp("flex", ctx.isLandscape())("flex-col", ctx.isLandscape());
      \u0275\u0275advance();
      \u0275\u0275property("fontSize", ctx.topStatusBarFontSize());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(68, _c0, ctx.isLandscape(), ctx.isPortrait()));
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.buttonIconSize());
      \u0275\u0275classProp("invisible", ctx.isCampaignHidden());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(71, _c1, ctx.campaignButtonPositionClass(), !ctx.isCampaignDisabled() ? "cursor-pointer transition-transform hover:scale-105 active:scale-95" : ""))("hasBadge", ctx.campaignHasBadge())("disabled", ctx.isCampaignDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.buttonIconSize());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(74, _c1, ctx.featureButtonPositionClass(), !ctx.isFeatureDisabled() ? "transition-transform hover:scale-105 active:scale-95" : ""))("disabled", ctx.isFeatureDisabled());
      \u0275\u0275advance();
      \u0275\u0275property("variant", ctx.isFeatureCancelled() ? "cancel" : "default");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.autoplayButtonPositionClass());
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.buttonIconSize())("height", ctx.buttonIconSize());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.autoButtonMode() === "music-toggle" ? 9 : ctx.autoButtonMode() === "rs-free-game" ? 10 : 11);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isAutoplayMenuOpen() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.buttonIconSize());
      \u0275\u0275classProp("invisible", ctx.isTurboHidden());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(77, _c1, ctx.turboButtonPositionClass(), !ctx.isTurboDisabled() ? "cursor-pointer transition-transform hover:scale-105 active:scale-95" : ""))("hasBadge", false)("disabled", ctx.isTurboDisabled());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isHoldingTurbo() ? 14 : 15);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("gap", ctx.centerGroupGap());
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.controlIconSize());
      \u0275\u0275property("ngClass", ctx.isDecreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isDecreaseDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.centerSpacerWidth());
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.controlIconSize());
      \u0275\u0275property("ngClass", ctx.isIncreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isIncreaseDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("--ga-auto-spin-scale", ctx.freeSpinScale());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.spinButtonMode() === "feature-mode" ? 23 : ctx.spinButtonMode() === "free-bonus-auto-spin" ? 24 : ctx.spinButtonMode() === "free-bonus" ? 25 : ctx.spinButtonMode() === "free-spin" ? 26 : ctx.spinButtonMode() === "double-chance-auto-spin" ? 27 : ctx.spinButtonMode() === "double-chance" ? 28 : ctx.spinButtonMode() === "auto-spin" ? 29 : 30);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.isGameBusy() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize())("height", ctx.isLandscape() ? ctx.listBottomHeight() : null);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.bottomMenuIconSize())("width", ctx.bottomMenuIconSize());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMenuDisabled() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMenuOpen() ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("margin-bottom", ctx.menuOffset());
      \u0275\u0275property("hidden", !ctx.isMenuOpen());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.menuItems());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLandscape() ? 41 : 42);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showRemainingTurnover() ? 43 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    ApIconBadgeComponent,
    ApButtonFreeSpinsComponent,
    ApButtonAutoSpinTimesComponent,
    ApIconComponent,
    ApToggleSwitchComponent,
    PointerDownSoundDirective,
    ApSpinButtonComponent,
    MoneyTextPipe,
    ApIconCampaignCircleComponent,
    ApIconBuyFeatureCircleComponent,
    ApIconMusicCircleComponent,
    ApIconAutoplayCircleComponent,
    ApIconTurboCircleComponent,
    ApIconDecreaseBoxComponent,
    ApIconIncreaseBoxComponent,
    TopStatusBarComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n  pointer-events: none;\n}\n.ga-spin-progress-ring[_ngcontent-%COMP%] {\n  inset: -0.2rem;\n  width: calc(100% + 0.4rem);\n  height: calc(100% + 0.4rem);\n  z-index: 1;\n  overflow: visible;\n  color: rgba(255, 255, 255, 0.8);\n  pointer-events: none;\n  transform: translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring--auto-spin-times[_ngcontent-%COMP%] {\n  transform: scale(var(--ga-auto-spin-scale, 1)) translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 4;\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: _ngcontent-%COMP%_ga-spin-progress-fill 3s linear forwards;\n}\n@keyframes _ngcontent-%COMP%_ga-spin-progress-fill {\n  0% {\n    stroke-dashoffset: 100;\n    opacity: 1;\n  }\n  99% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=bottom-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomPanelDemoComponent, [{
    type: Component,
    args: [{ selector: "bottom-panel-demo", standalone: true, imports: [
      CommonModule,
      ApIconBadgeComponent,
      ApButtonFreeSpinsComponent,
      ApButtonAutoSpinTimesComponent,
      ApIconComponent,
      ApToggleSwitchComponent,
      PointerDownSoundDirective,
      ApSpinButtonComponent,
      MoneyTextPipe,
      ApIconCampaignCircleComponent,
      ApIconBuyFeatureCircleComponent,
      ApIconMusicCircleComponent,
      ApIconAutoplayCircleComponent,
      ApIconTurboCircleComponent,
      ApIconDecreaseBoxComponent,
      ApIconIncreaseBoxComponent,
      TopStatusBarComponent
    ], template: `<div
  class="relative size-full"
  style="background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)"
  [class.flex]="isLandscape()"
  [class.flex-col]="isLandscape()"
>
  <top-status-bar
    [fontSize]="topStatusBarFontSize()"
    class="absolute top-0 left-1/2 flex items-center justify-center"
    style="transform: translateX(-50%)"
  />

  <!-- Buttons Area -->
  <div
    class="absolute inset-0 "
    [ngClass]="{
      'bottom-1/15': isLandscape(),
      'bottom-1/6': isPortrait(),
    }"
  >
    <!-- \u5DE6\u908A\u7B2C\u4E00\u500B\u6309\u9215 -->
    <ap-icon-badge
      class="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      [ngClass]="[
        campaignButtonPositionClass(),
        !isCampaignDisabled() ? 'cursor-pointer transition-transform hover:scale-105 active:scale-95' : '',
      ]"
      [class.invisible]="isCampaignHidden()"
      [style.height]="buttonIconSize()"
      [hasBadge]="campaignHasBadge()"
      [disabled]="isCampaignDisabled()"
      (click)="clickCampaign()"
    >
      <ap-icon-campaign-circle />
    </ap-icon-badge>

    <!-- \u5DE6\u908A\u7B2C\u4E8C\u500B\u6309\u9215 -->
    <ap-icon-badge
      class="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto"
      [ngClass]="[
        featureButtonPositionClass(),
        !isFeatureDisabled() ? 'transition-transform hover:scale-105 active:scale-95' : '',
      ]"
      [style.height]="buttonIconSize()"
      [disabled]="isFeatureDisabled()"
      (click)="clickFeature()"
    >
      <ap-icon-buy-feature-circle
        [variant]="isFeatureCancelled() ? 'cancel' : 'default'"
      />
    </ap-icon-badge>

    <!-- \u53F3\u908A\u7B2C\u4E8C\u500B\u6309\u9215 -->
    <div
      class="absolute translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      [ngClass]="autoplayButtonPositionClass()"
    >
      <div
        class="relative shrink-0"
        [style.width]="buttonIconSize()"
        [style.height]="buttonIconSize()"
      >
        @if (autoButtonMode() === "music-toggle") {
          <ap-icon-badge
            class="relative size-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
            [style.height]="buttonIconSize()"
            [hasBadge]="false"
            (click)="toggleMusicAtAutoButton()"
          >
            <ap-icon-music-circle
              [variant]="isMusicAtAutoButtonOn() ? 'default' : 'pressed'"
            />
          </ap-icon-badge>
        } @else if (autoButtonMode() === "rs-free-game") {
          <ap-icon
            [name]="'blank'"
            class="absolute inset-0 w-full h-full text-zinc-100"
          />
          <img
            [src]="rsImgPath() + \`?v=\${version()}\`"
            alt="RS"
            class="absolute left-1/2 top-1/2 z-10 w-[90%] h-[90%] -translate-x-1/2 -translate-y-1/2 -rotate-6 object-contain pointer-events-none drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]"
          />
        } @else {
          <ap-icon-badge
            data-testid="panel-autoplay"
            class="relative size-full"
            [ngClass]="
              isAutoPlayDisabled()
                ? ''
                : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'
            "
            [disabled]="isAutoPlayDisabled()"
            [attr.disabled]="isAutoPlayDisabled() ? '' : null"
            (click)="$event.stopPropagation(); clickAutoplay()"
          >
            <ap-icon-autoplay-circle />
          </ap-icon-badge>
        }
      </div>

      <!-- AutoPlay\u7684\u9078\u55AE -->
      @if (isAutoplayMenuOpen()) {
        <div
          class="absolute left-1/2 bottom-full mb-2 z-sticky"
          style="
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          "
          clickOutside
          (clickOutside)="closeAutoplayMenu()"
        >
          <div
            class="min-w-26 rounded-2xl bg-zinc-800 text-white cursor-pointer animate-fade-up animate-once animate-duration-200"
            style="
              border: 2px solid rgb(251 251 251);
              box-shadow: 0 0 0 3px rgb(24 24 27);
            "
          >
            @for (
              option of autoplayOptions;
              track option.value;
              let isLast = $last
            ) {
              <div
                class="flex items-center justify-center py-2 text-xl font-bold text-white hover:text-yellow-300"
                [style.border-bottom]="
                  isLast ? 'none' : '1px solid rgb(63 63 70)'
                "
                (click)="clickAutoplayOption(option.value)"
              >
                @if (option.isInfinity) {
                  <ap-icon name="infinite default" class="size-6.5" />
                } @else {
                  {{ option.value }}
                }
              </div>
            }
          </div>
        </div>
      }
    </div>

    <!-- \u53F3\u908A\u7B2C\u4E00\u500B\u6309\u9215 -->
    <ap-icon-badge
      class="absolute translate-x-1/2 -translate-y-1/2 pointer-events-auto touch-none"
      (touchstart)="$event.preventDefault()"
      [class.invisible]="isTurboHidden()"
      [ngClass]="[
        turboButtonPositionClass(),
        !isTurboDisabled() ? 'cursor-pointer transition-transform hover:scale-105 active:scale-95' : '',
      ]"
      appPointerDownSound
      data-no-click-sound
      [style.height]="buttonIconSize()"
      [hasBadge]="false"
      [disabled]="isTurboDisabled()"
      (pointerdown)="clickTurbo()"
    >
      @if (isHoldingTurbo()) {
        <ap-icon-turbo-circle [variant]="'pressed2'" />
      } @else {
        <ap-icon-turbo-circle [variant]="turboState()" />
      }
    </ap-icon-badge>

    <!-- Center Group -->
    <div
      class="absolute flex items-center rounded-xl p-1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto touch-none"
      (touchstart)="$event.preventDefault()"
      style="background-color: rgba(24, 24, 27, 0.8)"
      [style.gap]="centerGroupGap()"
    >
      <ap-icon-badge
        data-testid="panel-decrease"
        appPointerDownSound
        data-no-click-sound
        [ngClass]="
          isDecreaseDisabled()
            ? ''
            : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'
        "
        [style.height]="controlIconSize()"
        [disabledCoverVariant]="'half'"
        [hasBadge]="false"
        [disabled]="isDecreaseDisabled()"
        (pointerdown)="clickDecreaseBet()"
      >
        <ap-icon-decrease-box />
      </ap-icon-badge>

      <div [style.width]="centerSpacerWidth()"></div>

      <ap-icon-badge
        data-testid="panel-increase"
        appPointerDownSound
        data-no-click-sound
        [ngClass]="
          isIncreaseDisabled()
            ? ''
            : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'
        "
        [style.height]="controlIconSize()"
        [disabledCoverVariant]="'half'"
        [hasBadge]="false"
        [disabled]="isIncreaseDisabled()"
        (pointerdown)="clickIncreaseBet()"
      >
        <ap-icon-increase-box />
      </ap-icon-badge>
    </div>

    <!-- Spin Button -->
    <!-- \u963B\u6B62 Safari \u5C07\u5FEB\u901F\u9023\u9EDE Spin \u6309\u9215\u5224\u5B9A\u70BA\u96D9\u64CA\u7E2E\u653E\u3002 -->
    <div
      data-testid="panel-spin"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto touch-none"
      (touchstart)="$event.preventDefault()"
      [style.--ga-auto-spin-scale]="freeSpinScale()"
    >
      @if (spinButtonMode() === "feature-mode") {
        <ap-button-auto-spin-times
          [pressHintEnabled]="featureStartTipEnabled()"
          [pressHintTimerEnabled]="featureStartTipEnabled()"
          [scale]="freeSpinScale()"
          [totalSpins]="featureTotal() || 0"
          [currentSpins]="featureRemaining() || 0"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickFeatureSpin()"
        />
      } @else if (spinButtonMode() === "free-bonus-auto-spin") {
        <ap-button-auto-spin-times
          mode="free-bonus-auto-spin"
          [scale]="freeSpinScale()"
          [totalSpins]="autoSpinTotal() || 0"
          [currentSpins]="autoSpinRemaining() || 0"
          [variant]="isAutoSpinInfinity() ? 'infinity' : 'default'"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickStopAutoSpin()"
        />
      } @else if (spinButtonMode() === "free-bonus") {
        <ap-spin-button
          variant="bonus"
          data-no-click-sound
          [pressHintType]="pressHintType()"
          [ngClass]="{
            'cursor-pointer hover:scale-105 transition-transform active:scale-95':
              !isSpinDisabled()
          }"
          [spinCount]="spinCount()"
          [style.height]="spinIconSize()"
          [disabled]="
            isSpinDisabled()
          "
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          [isSpinning]="isGameBusy()"
          [holdTurboEnabled]="isHoldTurboEnabled()"
          [turboHoldThresholdMs]="turboHoldThresholdMs()"
          [idleTooltipMs]="idleTooltipMs()"
          (buttonClick)="clickCampaignSpin()"
          (turboHold)="toggleHoldTurbo($event)"
        />
      } @else if (spinButtonMode() === "free-spin") {
        <ap-button-free-spins
          [scale]="freeSpinScale()"
          [totalSpins]="freeSpinTotal() || 0"
          [currentSpins]="freeSpinRemaining() || 0"
          (buttonClick)="clickCampaignSpin()"
        />
      } @else if (spinButtonMode() === "double-chance-auto-spin") {
        <ap-button-auto-spin-times
          mode="double-chance-auto-spin"
          [scale]="freeSpinScale()"
          [totalSpins]="autoSpinTotal() || 0"
          [currentSpins]="autoSpinRemaining() || 0"
          [variant]="isAutoSpinInfinity() ? 'infinity' : 'default'"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickStopAutoSpin()"
        />
      } @else if (spinButtonMode() === "double-chance") {
        <ap-spin-button
          variant="chance"
          data-no-click-sound
          [ngClass]="{
            'cursor-pointer hover:scale-105 transition-transform active:scale-95':
              !isSpinDisabled()
          }"
          [spinCount]="spinCount()"
          [style.height]="spinIconSize()"
          [disabled]="
            isSpinDisabled()
          "
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          [isSpinning]="isGameBusy()"
          [holdTurboEnabled]="isHoldTurboEnabled()"
          [turboHoldThresholdMs]="turboHoldThresholdMs()"
          [idleTooltipMs]="idleTooltipMs()"
          (buttonClick)="clickSpin()"
          (turboHold)="toggleHoldTurbo($event)"
        />
      } @else if (spinButtonMode() === "auto-spin") {
        <ap-button-auto-spin-times
          mode="auto-spin"
          [scale]="freeSpinScale()"
          [totalSpins]="autoSpinTotal() || 0"
          [currentSpins]="autoSpinRemaining() || 0"
          [variant]="isAutoSpinInfinity() ? 'infinity' : 'default'"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickStopAutoSpin()"
        />
      } @else {
        <ap-spin-button
          [pressHintEnabled]="isClickToSpinTipEnabled()"
          [spinCount]="spinCount()"
          data-no-click-sound
          [ngClass]="{
            'cursor-pointer hover:scale-105 transition-transform active:scale-95':
              !isSpinDisabled()
          }"
          [style.height]="spinIconSize()"
          [disabled]="
            isSpinDisabled()
          "
          [fastSpinDisabled]="isFastSpinDisabled()"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          [isSpinning]="isGameBusy()"
          [holdTurboEnabled]="isHoldTurboEnabled()"
          [turboHoldThresholdMs]="turboHoldThresholdMs()"
          [idleTooltipMs]="idleTooltipMs()"
          (buttonClick)="clickSpin()"
          (turboHold)="toggleHoldTurbo($event)"
        />
      }
      <!-- \u5728\u6309\u9215\u6700\u4E0A\u65B9\u986F\u793A 3 \u79D2\u7E5E\u5708\u51B7\u537B\u52D5\u756B\u3002
      \u7528 @for track spinCooldownTick() \u8B93\u6BCF\u6B21\u89F8\u767C\u90FD\u5F37\u5236\u92B7\u6BC0\u91CD\u5EFA svg \u7BC0\u9EDE\uFF0C\u78BA\u4FDD\u9023\u7E8C\u81EA\u52D5\u65CB\u8F49\u6BCF\u6B21\u90FD\u91CD\u65B0\u64AD\u653E\u7279\u6548\u3002 -->
      @if (isGameBusy()) {
        @for (tick of (spinCooldownTick() > 0 ? [spinCooldownTick()] : []); track tick) {
          <svg
            class="ga-spin-progress-ring absolute inset-0"
            [class.ga-spin-progress-ring--auto-spin-times]="isAutoSpinTimesButtonMode()"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="46" pathLength="100" />
          </svg>
        }
      }
    </div>
  </div>

  <!-- Bottom Bar -->
  <div
    class="absolute bottom-0 left-0 right-0 flex items-center justify-between pr-4 text-zinc-100 font-semibold"
    style="
      border-top: 0.15rem solid rgba(161, 161, 170, 0.6);
      background-color: rgba(0, 0, 0, 0.5);
    "
    [style.fontSize]="bottomBarFontSize()"
    [style.height]="isLandscape() ? listBottomHeight() : null"
  >
    <div class="relative shrink-0 flex justify-center items-center pointer-events-auto">
      <ap-icon
        data-testid="panel-menu"
        name="bar-3"
        appPointerDownSound
        data-no-click-sound
        class="relative size-full cursor-pointer hover:text-yellow-400"
        [style.height]="bottomMenuIconSize()"
        [style.width]="bottomMenuIconSize()"
        (click)="toggleMenu($event)"
      >
      </ap-icon>
      @if (isMenuDisabled()) {
        <div
          data-testid="panel-busy"
          class="absolute inset-0 bg-black/50"
        ></div>
      }
      @if (isMenuOpen()) {
        <div (click)="closeMenu()" class="absolute inset-0"></div>
      }
      <div
        class="absolute left-0 bottom-full animate-fade-up animate-once animate-duration-200 z-dropdown"
        [style.marginBottom]="menuOffset()"
        [hidden]="!isMenuOpen()"
        clickOutside
        (clickOutside)="closeMenu()"
      >
        <div
          class="min-w-56 justify-center items-center rounded-t-md border border-zinc-400/50 bg-zinc-900 text-zinc-300 p-2"
        >
          @for (item of menuItems(); track item.id) {
            <div
              [attr.data-testid]="'panel-menu-' + item.id"
              class="flex items-center justify-start relative gap-2 px-2 py-2 m-2 cursor-pointer hover:bg-zinc-800 hover:text-yellow-400 active:bg-zinc-700 hover:rounded-lg text-xl font-semibold"
              (click)="item.action()"
            >
              <ap-icon [name]="iconMap()[item.id]" class="size-6" />
              <h3 class="flex-1 uppercase">{{ item.label }}</h3>
              @if (item.hasToggle) {
                <ap-toggle-switch
                  variant="quick"
                  [accentColor]="'yellow'"
                  [checked]="toggleMap()[item.id]"
                />
              }
            </div>
          }
        </div>
      </div>
    </div>

    @if (isLandscape()) {
      <div class="grid flex-1 grid-cols-3 items-center">
        <div class="flex items-center justify-start space-x-2 ml-2">
          <h6 class="text-yellow-400" [style.fontSize]="bottomBarFontSize()">
            {{ getBalanceLabel() }}
          </h6>
          <div
            data-testid="panel-balance"
            class="space-x-1 text-zinc-200 whitespace-nowrap"
            [style.fontSize]="bottomBarFontSize()"
          >
            @if (isBalanceHided()) {
              ***
            } @else {
              {{ displayCurrency() }}
              {{ displayBalance() | moneyText: { addSymbol: false } }}
            }
          </div>
        </div>

        <div class="flex items-center justify-center gap-2">
          <h6 class="text-yellow-400" [style.fontSize]="bottomBarFontSize()">
            {{ getBetLabel() }}
          </h6>
          <div
            class="inline-block min-w-[4ch] text-left tabular-nums text-zinc-200"
            [style.fontSize]="bottomBarFontSize()"
          >
            <div data-testid="panel-bet" class="flex space-x-1">
              @if (isBetHided()) {
                ***
              } @else {
                {{ displayCurrency() }}
                {{ displayBet() | moneyText: { addSymbol: false } }}
              }
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-start space-x-2 ml-8 sm:ml-10 md:ml-12 lg:ml-14"
        >
          <h6 class="text-yellow-400" [style.fontSize]="bottomBarFontSize()">
            {{ getWinLabel() }}
          </h6>
          <div
            class="inline-block min-w-[4ch] text-left text-zinc-200 tabular-nums whitespace-nowrap"
            [style.fontSize]="bottomBarFontSize()"
          >
            @if (isWinHided()) {
              ***
            } @else {
              <div data-testid="panel-win" class="flex space-x-1">
                @if (displayWin() !== null) {
                  {{ displayCurrency() }}
                  {{ displayWin()! | moneyText: { addSymbol: false } }}
                }
              </div>
            }
          </div>
        </div>
      </div>
      <!-- Mobile -->
    } @else {
      <!-- Balance -->
      <div class="grid flex-1 grid-cols-3">
        <div class="flex justify-start items-center space-x-1 ml-1">
          <ap-icon
            class="text-yellow-400"
            [style.height]="bottomIconSize()"
            [name]="isBonusWalletUsed() ? 'star' : 'wallet'"
          />
          <div
            data-testid="panel-balance"
            class="text-zinc-200 whitespace-nowrap"
            [style.fontSize]="bottomBarFontSize()"
          >
            @if (isBalanceHided()) {
              ***
            } @else {
              {{ displayCurrency() }}
              {{ displayBalance() | moneyText: { addSymbol: false } }}
            }
          </div>
        </div>

        <!-- Bet -->
        <div class="flex justify-center">
          <div class="flex items-center space-x-1">
            <ap-icon
              name="prizes"
              class="text-yellow-400"
              [style.height]="bottomIconSize()"
            />
            <div
              data-testid="panel-bet"
              class="text-zinc-200"
              [style.fontSize]="bottomBarFontSize()"
            >
              @if (isBetHided()) {
                ***
              } @else {
                {{ displayCurrency() }}
                {{ displayBet() | moneyText: { addSymbol: false } }}
              }
            </div>
          </div>
        </div>

        <!-- Win -->
        <div class="flex justify-start ml-6">
          <div class="flex items-center space-x-1">
            <ap-icon
              name="trophy"
              class="text-yellow-400"
              [style.height]="bottomIconSize()"
            />
            <div
              data-testid="panel-win"
              class="inline-block min-w-[4ch] text-left tabular-nums text-zinc-200"
              [style.fontSize]="bottomBarFontSize()"
            >
              @if (isWinHided()) {
                ***
              } @else if (displayWin() !== null) {
                {{ displayCurrency() }}
                {{ displayWin()! | moneyText: { addSymbol: false } }}
              }
            </div>
          </div>
        </div>
      </div>
    }
  </div>
</div>

@if (showRemainingTurnover()) {
  <div
    class="absolute mx-auto w-full px-2 text-zinc-300 from-black/50 via-zinc-800/0 to-black/50 inline-flex"
    [class.left-0]="isLandscape()"
    [class.right-0]="isLandscape()"
    [class.bg-linear-to-r]="isLandscape()"
    [style.bottom]="isPortrait() ? '16.6667%' : middleListBottomHeight()"
    [style.fontSize]="middleHintFontSize()"
  >
    <div
      class="flex w-full"
      [class.flex-col]="isPortrait()"
      [class.items-center]="isPortrait()"
      [class.flex-row]="isLandscape()"
      [class.justify-between]="isLandscape()"
    >
      <div
        class="flex items-center justify-center space-x-1"
        [class.order-2]="isLandscape()"
      >
        <ap-icon name="clock" [style.height]="middleHintIconSize()" />
        <div class="whitespace-nowrap leading-tight sm:py-0.5">
          {{ displayEndTime() }}
        </div>
      </div>
      <div
        class="whitespace-nowrap leading-tight sm:py-0.5"
        [class.order-1]="isLandscape()"
      >
        <span>{{ getRemainingTurnoverLabel() }}</span>
        <span> {{ displayRemainingTurnover()! | moneyText }}</span>
      </div>
    </div>
  </div>
}
`, styles: ["/* src/app/pages/bottom-panel/bottom-panel.component.css */\n:host {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n  pointer-events: none;\n}\n.ga-spin-progress-ring {\n  inset: -0.2rem;\n  width: calc(100% + 0.4rem);\n  height: calc(100% + 0.4rem);\n  z-index: 1;\n  overflow: visible;\n  color: rgba(255, 255, 255, 0.8);\n  pointer-events: none;\n  transform: translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring--auto-spin-times {\n  transform: scale(var(--ga-auto-spin-scale, 1)) translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring circle {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 4;\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: ga-spin-progress-fill 3s linear forwards;\n}\n@keyframes ga-spin-progress-fill {\n  0% {\n    stroke-dashoffset: 100;\n    opacity: 1;\n  }\n  99% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=bottom-panel.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomPanelDemoComponent, { className: "BottomPanelDemoComponent", filePath: "src/app/pages/bottom-panel-demo/bottom-panel-demo.component.ts", lineNumber: 54 });
})();

// src/app/pages/bottom-panel-replay/bottom-panel-replay.component.ts
var _c02 = (a0, a1) => ({ "bottom-1/15": a0, "bottom-1/6": a1 });
var _c12 = (a0, a1) => [a0, a1];
var _c22 = (a0) => ({ "cursor-pointer hover:scale-105 transition-transform active:scale-95": a0 });
var _c32 = (a0) => [a0];
var _c42 = () => [];
var _c52 = () => ({ addSymbol: false });
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.value;
function BottomPanelReplayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-icon-badge", 35);
    \u0275\u0275listener("click", function BottomPanelReplayComponent_Conditional_9_Template_ap_icon_badge_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMusicAtAutoButton());
    });
    \u0275\u0275element(1, "ap-icon-music-circle", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.buttonIconSize());
    \u0275\u0275property("hasBadge", false);
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.isMusicAtAutoButtonOn() ? "default" : "pressed");
  }
}
function BottomPanelReplayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 36)(1, "img", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", "blank");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.rsImgPath() + `?v=${ctx_r1.version()}`, \u0275\u0275sanitizeUrl);
  }
}
function BottomPanelReplayComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-icon-badge", 38);
    \u0275\u0275listener("click", function BottomPanelReplayComponent_Conditional_11_Template_ap_icon_badge_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.clickAutoplay());
    });
    \u0275\u0275element(1, "ap-icon-autoplay-circle");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.isAutoPlayDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabled", ctx_r1.isAutoPlayDisabled());
    \u0275\u0275attribute("disabled", ctx_r1.isAutoPlayDisabled() ? "" : null);
  }
}
function BottomPanelReplayComponent_Conditional_12_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 43);
  }
}
function BottomPanelReplayComponent_Conditional_12_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const option_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", option_r6.value, " ");
  }
}
function BottomPanelReplayComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function BottomPanelReplayComponent_Conditional_12_For_3_Template_div_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clickAutoplayOption(option_r6.value));
    });
    \u0275\u0275conditionalCreate(1, BottomPanelReplayComponent_Conditional_12_For_3_Conditional_1_Template, 1, 0, "ap-icon", 43)(2, BottomPanelReplayComponent_Conditional_12_For_3_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const \u0275$index_39_r7 = ctx.$index;
    const \u0275$count_39_r8 = ctx.$count;
    \u0275\u0275styleProp("border-bottom", \u0275$index_39_r7 === \u0275$count_39_r8 - 1 ? "none" : "1px solid rgb(63 63 70)");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r6.isInfinity ? 1 : 2);
  }
}
function BottomPanelReplayComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("clickOutside", function BottomPanelReplayComponent_Conditional_12_Template_div_clickOutside_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAutoplayMenu());
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275repeaterCreate(2, BottomPanelReplayComponent_Conditional_12_For_3_Template, 3, 3, "div", 41, _forTrack12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.autoplayOptions);
  }
}
function BottomPanelReplayComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-turbo-circle", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("variant", "pressed2");
  }
}
function BottomPanelReplayComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-turbo-circle", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("variant", ctx_r1.turboState());
  }
}
function BottomPanelReplayComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 44);
    \u0275\u0275listener("buttonClick", function BottomPanelReplayComponent_Conditional_23_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickFeatureSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pressHintEnabled", ctx_r1.featureStartTipEnabled())("pressHintTimerEnabled", ctx_r1.featureStartTipEnabled())("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.featureTotal() || 0)("currentSpins", ctx_r1.featureRemaining() || 0)("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelReplayComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 45);
    \u0275\u0275listener("buttonClick", function BottomPanelReplayComponent_Conditional_24_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickStopAutoSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.autoSpinTotal() || 0)("currentSpins", ctx_r1.autoSpinRemaining() || 0)("variant", ctx_r1.isAutoSpinInfinity() ? "infinity" : "default")("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelReplayComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-spin-button", 46);
    \u0275\u0275listener("buttonClick", function BottomPanelReplayComponent_Conditional_25_Template_ap_spin_button_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickCampaignSpin());
    })("turboHold", function BottomPanelReplayComponent_Conditional_25_Template_ap_spin_button_turboHold_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHoldTurbo($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.spinIconSize());
    \u0275\u0275property("pressHintType", ctx_r1.pressHintType())("ngClass", \u0275\u0275pureFunction1(11, _c22, !ctx_r1.isSpinDisabled()))("spinCount", ctx_r1.spinCount())("disabled", ctx_r1.isSpinDisabled())("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled())("isSpinning", ctx_r1.isGameBusy())("holdTurboEnabled", ctx_r1.isHoldTurboEnabled())("turboHoldThresholdMs", ctx_r1.turboHoldThresholdMs())("idleTooltipMs", ctx_r1.idleTooltipMs());
  }
}
function BottomPanelReplayComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-free-spins", 47);
    \u0275\u0275listener("buttonClick", function BottomPanelReplayComponent_Conditional_26_Template_ap_button_free_spins_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickCampaignSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.freeSpinTotal() || 0)("currentSpins", ctx_r1.freeSpinRemaining() || 0);
  }
}
function BottomPanelReplayComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 48);
    \u0275\u0275listener("buttonClick", function BottomPanelReplayComponent_Conditional_27_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickStopAutoSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.autoSpinTotal() || 0)("currentSpins", ctx_r1.autoSpinRemaining() || 0)("variant", ctx_r1.isAutoSpinInfinity() ? "infinity" : "default")("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelReplayComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-spin-button", 49);
    \u0275\u0275listener("buttonClick", function BottomPanelReplayComponent_Conditional_28_Template_ap_spin_button_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSpin());
    })("turboHold", function BottomPanelReplayComponent_Conditional_28_Template_ap_spin_button_turboHold_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHoldTurbo($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.spinIconSize());
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c22, !ctx_r1.isSpinDisabled()))("spinCount", ctx_r1.spinCount())("disabled", ctx_r1.isSpinDisabled())("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled())("isSpinning", ctx_r1.isGameBusy())("holdTurboEnabled", ctx_r1.isHoldTurboEnabled())("turboHoldThresholdMs", ctx_r1.turboHoldThresholdMs())("idleTooltipMs", ctx_r1.idleTooltipMs());
  }
}
function BottomPanelReplayComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-auto-spin-times", 50);
    \u0275\u0275listener("buttonClick", function BottomPanelReplayComponent_Conditional_29_Template_ap_button_auto_spin_times_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickStopAutoSpin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("scale", ctx_r1.freeSpinScale())("totalSpins", ctx_r1.autoSpinTotal() || 0)("currentSpins", ctx_r1.autoSpinRemaining() || 0)("variant", ctx_r1.isAutoSpinInfinity() ? "infinity" : "default")("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function BottomPanelReplayComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-spin-button", 51);
    \u0275\u0275listener("buttonClick", function BottomPanelReplayComponent_Conditional_30_Template_ap_spin_button_buttonClick_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSpin());
    })("turboHold", function BottomPanelReplayComponent_Conditional_30_Template_ap_spin_button_turboHold_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHoldTurbo($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.spinIconSize());
    \u0275\u0275property("pressHintEnabled", ctx_r1.isClickToSpinTipEnabled())("spinCount", ctx_r1.spinCount())("ngClass", \u0275\u0275pureFunction1(12, _c22, !ctx_r1.isSpinDisabled()))("disabled", ctx_r1.isSpinDisabled())("fastSpinDisabled", ctx_r1.isFastSpinDisabled())("enableLightingEffect", ctx_r1.autoSpinLightingEffectEnabled())("isSpinning", ctx_r1.isGameBusy())("holdTurboEnabled", ctx_r1.isHoldTurboEnabled())("turboHoldThresholdMs", ctx_r1.turboHoldThresholdMs())("idleTooltipMs", ctx_r1.idleTooltipMs());
  }
}
function BottomPanelReplayComponent_Conditional_31_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "circle", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ga-spin-progress-ring--auto-spin-times", ctx_r1.isAutoSpinTimesButtonMode());
  }
}
function BottomPanelReplayComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BottomPanelReplayComponent_Conditional_31_For_1_Template, 2, 2, ":svg:svg", 52, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.spinCooldownTick() > 0 ? \u0275\u0275pureFunction1(0, _c32, ctx_r1.spinCooldownTick()) : \u0275\u0275pureFunction0(2, _c42));
  }
}
function BottomPanelReplayComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function BottomPanelReplayComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function BottomPanelReplayComponent_Conditional_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function BottomPanelReplayComponent_For_40_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-toggle-switch", 59);
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("accentColor", "yellow")("checked", ctx_r1.toggleMap()[item_r19.id]);
  }
}
function BottomPanelReplayComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function BottomPanelReplayComponent_For_40_Template_div_click_0_listener() {
      const item_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(item_r19.action());
    });
    \u0275\u0275element(1, "ap-icon", 57);
    \u0275\u0275elementStart(2, "h3", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BottomPanelReplayComponent_For_40_Conditional_4_Template, 1, 2, "ap-toggle-switch", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "panel-menu-" + item_r19.id);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.iconMap()[item_r19.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r19.hasToggle ? 4 : -1);
  }
}
function BottomPanelReplayComponent_Conditional_41_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelReplayComponent_Conditional_41_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBalance(), \u0275\u0275pureFunction0(5, _c52)), " ");
  }
}
function BottomPanelReplayComponent_Conditional_41_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelReplayComponent_Conditional_41_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBet(), \u0275\u0275pureFunction0(5, _c52)), " ");
  }
}
function BottomPanelReplayComponent_Conditional_41_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelReplayComponent_Conditional_41_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayWin(), \u0275\u0275pureFunction0(5, _c52)), " ");
  }
}
function BottomPanelReplayComponent_Conditional_41_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275conditionalCreate(1, BottomPanelReplayComponent_Conditional_41_Conditional_19_Conditional_1_Template, 2, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.displayWin() !== null ? 1 : -1);
  }
}
function BottomPanelReplayComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 60)(2, "h6", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62);
    \u0275\u0275conditionalCreate(5, BottomPanelReplayComponent_Conditional_41_Conditional_5_Template, 1, 0)(6, BottomPanelReplayComponent_Conditional_41_Conditional_6_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 63)(8, "h6", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 64)(11, "div", 65);
    \u0275\u0275conditionalCreate(12, BottomPanelReplayComponent_Conditional_41_Conditional_12_Template, 1, 0)(13, BottomPanelReplayComponent_Conditional_41_Conditional_13_Template, 2, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 66)(15, "h6", 61);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 67);
    \u0275\u0275conditionalCreate(18, BottomPanelReplayComponent_Conditional_41_Conditional_18_Template, 1, 0)(19, BottomPanelReplayComponent_Conditional_41_Conditional_19_Template, 2, 1, "div", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getBalanceLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBalanceHided() ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getBetLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isBetHided() ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getWinLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWinHided() ? 18 : 19);
  }
}
function BottomPanelReplayComponent_Conditional_42_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelReplayComponent_Conditional_42_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBalance(), \u0275\u0275pureFunction0(5, _c52)), " ");
  }
}
function BottomPanelReplayComponent_Conditional_42_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelReplayComponent_Conditional_42_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayBet(), \u0275\u0275pureFunction0(5, _c52)), " ");
  }
}
function BottomPanelReplayComponent_Conditional_42_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *** ");
  }
}
function BottomPanelReplayComponent_Conditional_42_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.displayCurrency(), " ", \u0275\u0275pipeBind2(1, 2, ctx_r1.displayWin(), \u0275\u0275pureFunction0(5, _c52)), " ");
  }
}
function BottomPanelReplayComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 69);
    \u0275\u0275element(2, "ap-icon", 70);
    \u0275\u0275elementStart(3, "div", 71);
    \u0275\u0275conditionalCreate(4, BottomPanelReplayComponent_Conditional_42_Conditional_4_Template, 1, 0)(5, BottomPanelReplayComponent_Conditional_42_Conditional_5_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 72)(7, "div", 73);
    \u0275\u0275element(8, "ap-icon", 74);
    \u0275\u0275elementStart(9, "div", 75);
    \u0275\u0275conditionalCreate(10, BottomPanelReplayComponent_Conditional_42_Conditional_10_Template, 1, 0)(11, BottomPanelReplayComponent_Conditional_42_Conditional_11_Template, 2, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 76)(13, "div", 73);
    \u0275\u0275element(14, "ap-icon", 77);
    \u0275\u0275elementStart(15, "div", 78);
    \u0275\u0275conditionalCreate(16, BottomPanelReplayComponent_Conditional_42_Conditional_16_Template, 1, 0)(17, BottomPanelReplayComponent_Conditional_42_Conditional_17_Template, 2, 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.bottomIconSize());
    \u0275\u0275property("name", ctx_r1.isBonusWalletUsed() ? "star" : "wallet");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBalanceHided() ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("height", ctx_r1.bottomIconSize());
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBetHided() ? 10 : 11);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("height", ctx_r1.bottomIconSize());
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r1.bottomBarFontSize());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWinHided() ? 16 : ctx_r1.displayWin() !== null ? 17 : -1);
  }
}
function BottomPanelReplayComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "div", 81);
    \u0275\u0275element(3, "ap-icon", 82);
    \u0275\u0275elementStart(4, "div", 83);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 83)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "moneyText");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("bottom", ctx_r1.isPortrait() ? "16.6667%" : ctx_r1.middleListBottomHeight())("font-size", ctx_r1.middleHintFontSize());
    \u0275\u0275classProp("left-0", ctx_r1.isLandscape())("right-0", ctx_r1.isLandscape())("bg-linear-to-r", ctx_r1.isLandscape());
    \u0275\u0275advance();
    \u0275\u0275classProp("flex-col", ctx_r1.isPortrait())("items-center", ctx_r1.isPortrait())("flex-row", ctx_r1.isLandscape())("justify-between", ctx_r1.isLandscape());
    \u0275\u0275advance();
    \u0275\u0275classProp("order-2", ctx_r1.isLandscape());
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.middleHintIconSize());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayEndTime(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("order-1", ctx_r1.isLandscape());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRemainingTurnoverLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 27, ctx_r1.displayRemainingTurnover()));
  }
}
var BottomPanelReplayComponent = class _BottomPanelReplayComponent extends BottomPanelBase {
  soundService = inject(SoundService);
  displayCurrency = input("$");
  displayBet = input(0);
  displayWin = input(0);
  /* 觸發特效 */
  pressHintEnabled = model(true);
  pressHintType = input("blur");
  musicPressedChange = output();
  turboStateChange = output();
  spin = output();
  autoButtonMode = signal("music-toggle");
  isAutoSpinInfinity = signal(false);
  isFeatureCancelled = signal(false);
  rsImgPath = signal("");
  isCampaignDisabled = signal(true);
  isBonusWalletUsed = signal(false);
  isFeatureDisabled = signal(true);
  isDecreaseDisabled = signal(true);
  isIncreaseDisabled = signal(true);
  isMenuDisabled = signal(true);
  isMusicAtAutoButtonOn = signal(true);
  campaignHasBadge = signal(false);
  isMenuOpen = signal(false);
  isAutoplayMenuOpen = signal(false);
  isClickToSpinTipEnabled = signal(true);
  autoSpinLightingEffectEnabled = input(true);
  iconMap = signal({});
  toggleMap = signal({});
  menuItems = signal([]);
  autoplayOptions = [];
  spinCount = signal(0);
  displayBalance = signal(0);
  isGameBusy = input(false);
  /** Replay 模式不啟用 Hold for Turbo Spin */
  isHoldTurboEnabled = signal(false);
  /** Replay 模式固定使用預設長按門檻毫秒數 */
  turboHoldThresholdMs = signal(500);
  /** Replay 模式固定使用預設Turbo間隔毫秒數 */
  turboSkipIntervalMs = signal(500);
  /** Replay 模式固定使用預設閒置提示毫秒數 */
  idleTooltipMs = signal(500);
  /** 是否正在長按 Turbo 按鈕 */
  isHoldingTurbo = signal(false);
  isBalanceHided = signal(true);
  isBetHided = signal(false);
  isWinHided = signal(false);
  // Campaign 額外欄位
  getRemainingTurnoverLabel = signal("Remaining turnover");
  displayRemainingTurnover = signal(0);
  displayEndTime = signal("2024/12/31 23:59:59");
  showRemainingTurnover = signal(false);
  /** 是否顯示Replay開始提示 */
  showReplayStart = signal(true);
  /** 是否顯示Feature開始提示 */
  showFeatureStart = signal(false);
  getBalanceLabel = this.appI18n.computed("spin_area_balance", "BALANCE");
  getBetLabel = this.appI18n.computed("spin_area_bet", "BET");
  getWinLabel = this.appI18n.computed("spin_area_win", "WIN");
  isSpinDisabled = signal(false);
  isFastSpinDisabled = signal(false);
  isAutoPlayDisabled = computed(() => true);
  isTurboDisabled = input(false);
  autoSpinTotal = signal(0);
  autoSpinRemaining = signal(0);
  freeSpinRemaining = signal(0);
  freeSpinTotal = signal(0);
  featureTotal = input(0);
  featureRemaining = input(0);
  spinButtonMode = input("default");
  /** 目前顯示的是否為 ap-button-auto-spin-times（外框比 ap-spin-button 小，繞圈特效需要放大） */
  isAutoSpinTimesButtonMode = computed(() => isAutoSpinTimesButtonMode(this.spinButtonMode()));
  /** Global Cooldown的時間 (秒) */
  globalCooldownTime = signal(0);
  musicIcon = computed(() => this.isMusicAtAutoButtonOn() ? "music" : "music pressed");
  turnOnFeatureStart() {
    this.showFeatureStart.set(true);
  }
  turnOffFeatureStart() {
    this.showFeatureStart.set(false);
  }
  resetReplayStart() {
    this.showReplayStart.set(true);
  }
  clickSpin() {
    if (!this.isGameBusy())
      this.soundService.playClick();
    this.showReplayStart.set(false);
    this.spin.emit();
  }
  clickFeatureSpin() {
    this.spin.emit();
  }
  clickTurbo() {
    const speed = this.updateTurboState();
    this.turboStateChange.emit(speed);
  }
  toggleMusicAtAutoButton() {
    this.musicPressedChange.emit(this.isMusicAtAutoButtonOn());
    this.isMusicAtAutoButtonOn.update((current) => !current);
    this.soundService.setMuted(!this.isMusicAtAutoButtonOn());
  }
  // 其他沒用到的方法
  clickCampaignSpin() {
  }
  clickStopAutoSpin() {
  }
  clickCampaign() {
  }
  clickFeature() {
  }
  clickDecreaseBet() {
  }
  clickIncreaseBet() {
  }
  clickAutoplay() {
  }
  closeAutoplayMenu() {
  }
  clickAutoplayOption(value) {
  }
  toggleMenu(event) {
  }
  closeMenu() {
  }
  toggleHoldTurbo(enable) {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BottomPanelReplayComponent_BaseFactory;
    return function BottomPanelReplayComponent_Factory(__ngFactoryType__) {
      return (\u0275BottomPanelReplayComponent_BaseFactory || (\u0275BottomPanelReplayComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BottomPanelReplayComponent)))(__ngFactoryType__ || _BottomPanelReplayComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomPanelReplayComponent, selectors: [["bottom-panel-replay"]], inputs: { displayCurrency: [1, "displayCurrency"], displayBet: [1, "displayBet"], displayWin: [1, "displayWin"], pressHintEnabled: [1, "pressHintEnabled"], pressHintType: [1, "pressHintType"], autoSpinLightingEffectEnabled: [1, "autoSpinLightingEffectEnabled"], isGameBusy: [1, "isGameBusy"], isTurboDisabled: [1, "isTurboDisabled"], featureTotal: [1, "featureTotal"], featureRemaining: [1, "featureRemaining"], spinButtonMode: [1, "spinButtonMode"] }, outputs: { pressHintEnabled: "pressHintEnabledChange", musicPressedChange: "musicPressedChange", turboStateChange: "turboStateChange", spin: "spin" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 44, vars: 80, consts: [[1, "relative", "size-full", 2, "background", "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)"], [1, "absolute", "top-0", "left-1/2", "flex", "items-center", "justify-center", 2, "transform", "translateX(-50%)", 3, "fontSize"], [1, "absolute", "inset-0", 3, "ngClass"], [1, "absolute", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", 3, "click", "ngClass", "hasBadge", "disabled"], [1, "absolute", "-translate-x-1/2", "-translate-y-1/2", "cursor-pointer", "pointer-events-auto", 3, "click", "ngClass", "disabled"], [3, "variant"], [1, "absolute", "translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", 3, "ngClass"], [1, "relative", "shrink-0"], [1, "relative", "size-full", "cursor-pointer", "transition-transform", "hover:scale-105", "active:scale-95", 3, "height", "hasBadge"], ["data-testid", "panel-autoplay", 1, "relative", "size-full", 3, "ngClass", "disabled"], ["clickOutside", "", 1, "absolute", "left-1/2", "bottom-full", "mb-2", "z-sticky", 2, "-webkit-transform", "translateX(-50%)", "transform", "translateX(-50%)"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "absolute", "translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", "touch-none", 3, "touchstart", "pointerdown", "ngClass", "hasBadge", "disabled"], [1, "absolute", "flex", "items-center", "rounded-xl", "p-1", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", "touch-none", 2, "background-color", "rgba(24, 24, 27, 0.8)", 3, "touchstart"], ["data-testid", "panel-decrease", "appPointerDownSound", "", "data-no-click-sound", "", 3, "pointerdown", "ngClass", "disabledCoverVariant", "hasBadge", "disabled"], ["data-testid", "panel-increase", "appPointerDownSound", "", "data-no-click-sound", "", 3, "pointerdown", "ngClass", "disabledCoverVariant", "hasBadge", "disabled"], ["data-testid", "panel-spin", 1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "pointer-events-auto", "touch-none", 3, "touchstart"], [3, "pressHintEnabled", "pressHintTimerEnabled", "scale", "totalSpins", "currentSpins", "enableLightingEffect"], ["mode", "free-bonus-auto-spin", 3, "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "bonus", "data-no-click-sound", "", 3, "pressHintType", "ngClass", "spinCount", "height", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [3, "scale", "totalSpins", "currentSpins"], ["mode", "double-chance-auto-spin", 3, "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "chance", "data-no-click-sound", "", 3, "ngClass", "spinCount", "height", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], ["mode", "auto-spin", 3, "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["data-no-click-sound", "", 3, "pressHintEnabled", "spinCount", "ngClass", "height", "disabled", "fastSpinDisabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [1, "absolute", "bottom-0", "left-0", "right-0", "flex", "items-center", "justify-between", "pr-4", "text-zinc-100", "font-semibold", 2, "border-top", "0.15rem solid rgba(161, 161, 170, 0.6)", "background-color", "rgba(0, 0, 0, 0.5)"], [1, "relative", "shrink-0", "flex", "justify-center", "items-center", "pointer-events-auto"], ["data-testid", "panel-menu", "name", "bar-3", "appPointerDownSound", "", "data-no-click-sound", "", 1, "relative", "size-full", "cursor-pointer", "hover:text-yellow-400", 3, "click"], ["data-testid", "panel-busy", 1, "absolute", "inset-0", "bg-black/50"], [1, "absolute", "inset-0"], ["clickOutside", "", 1, "absolute", "left-0", "bottom-full", "animate-fade-up", "animate-once", "animate-duration-200", "z-dropdown", 3, "clickOutside", "hidden"], [1, "min-w-56", "justify-center", "items-center", "rounded-t-md", "border", "border-zinc-400/50", "bg-zinc-900", "text-zinc-300", "p-2"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold"], [1, "grid", "flex-1", "grid-cols-3", "items-center"], [1, "grid", "flex-1", "grid-cols-3"], [1, "absolute", "mx-auto", "w-full", "px-2", "text-zinc-300", "from-black/50", "via-zinc-800/0", "to-black/50", "inline-flex", 3, "left-0", "right-0", "bg-linear-to-r", "bottom", "fontSize"], [1, "relative", "size-full", "cursor-pointer", "transition-transform", "hover:scale-105", "active:scale-95", 3, "click", "hasBadge"], [1, "absolute", "inset-0", "w-full", "h-full", "text-zinc-100", 3, "name"], ["alt", "RS", 1, "absolute", "left-1/2", "top-1/2", "z-10", "w-[90%]", "h-[90%]", "-translate-x-1/2", "-translate-y-1/2", "-rotate-6", "object-contain", "pointer-events-none", "drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]", 3, "src"], ["data-testid", "panel-autoplay", 1, "relative", "size-full", 3, "click", "ngClass", "disabled"], ["clickOutside", "", 1, "absolute", "left-1/2", "bottom-full", "mb-2", "z-sticky", 2, "-webkit-transform", "translateX(-50%)", "transform", "translateX(-50%)", 3, "clickOutside"], [1, "min-w-26", "rounded-2xl", "bg-zinc-800", "text-white", "cursor-pointer", "animate-fade-up", "animate-once", "animate-duration-200", 2, "border", "2px solid rgb(251 251 251)", "box-shadow", "0 0 0 3px rgb(24 24 27)"], [1, "flex", "items-center", "justify-center", "py-2", "text-xl", "font-bold", "text-white", "hover:text-yellow-300", 3, "border-bottom"], [1, "flex", "items-center", "justify-center", "py-2", "text-xl", "font-bold", "text-white", "hover:text-yellow-300", 3, "click"], ["name", "infinite default", 1, "size-6.5"], [3, "buttonClick", "pressHintEnabled", "pressHintTimerEnabled", "scale", "totalSpins", "currentSpins", "enableLightingEffect"], ["mode", "free-bonus-auto-spin", 3, "buttonClick", "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "bonus", "data-no-click-sound", "", 3, "buttonClick", "turboHold", "pressHintType", "ngClass", "spinCount", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], [3, "buttonClick", "scale", "totalSpins", "currentSpins"], ["mode", "double-chance-auto-spin", 3, "buttonClick", "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["variant", "chance", "data-no-click-sound", "", 3, "buttonClick", "turboHold", "ngClass", "spinCount", "disabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], ["mode", "auto-spin", 3, "buttonClick", "scale", "totalSpins", "currentSpins", "variant", "enableLightingEffect"], ["data-no-click-sound", "", 3, "buttonClick", "turboHold", "pressHintEnabled", "spinCount", "ngClass", "disabled", "fastSpinDisabled", "enableLightingEffect", "isSpinning", "holdTurboEnabled", "turboHoldThresholdMs", "idleTooltipMs"], ["viewBox", "0 0 100 100", "aria-hidden", "true", 1, "ga-spin-progress-ring", "absolute", "inset-0", 3, "ga-spin-progress-ring--auto-spin-times"], ["viewBox", "0 0 100 100", "aria-hidden", "true", 1, "ga-spin-progress-ring", "absolute", "inset-0"], ["cx", "50", "cy", "50", "r", "46", "pathLength", "100"], [1, "absolute", "inset-0", 3, "click"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold", 3, "click"], [1, "size-6", 3, "name"], [1, "flex-1", "uppercase"], ["variant", "quick", 3, "accentColor", "checked"], [1, "flex", "items-center", "justify-start", "space-x-2", "ml-2"], [1, "text-yellow-400"], ["data-testid", "panel-balance", 1, "space-x-1", "text-zinc-200", "whitespace-nowrap"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "inline-block", "min-w-[4ch]", "text-left", "tabular-nums", "text-zinc-200"], ["data-testid", "panel-bet", 1, "flex", "space-x-1"], [1, "flex", "items-center", "justify-start", "space-x-2", "ml-8", "sm:ml-10", "md:ml-12", "lg:ml-14"], [1, "inline-block", "min-w-[4ch]", "text-left", "text-zinc-200", "tabular-nums", "whitespace-nowrap"], ["data-testid", "panel-win", 1, "flex", "space-x-1"], [1, "flex", "justify-start", "items-center", "space-x-1", "ml-1"], [1, "text-yellow-400", 3, "name"], ["data-testid", "panel-balance", 1, "text-zinc-200", "whitespace-nowrap"], [1, "flex", "justify-center"], [1, "flex", "items-center", "space-x-1"], ["name", "prizes", 1, "text-yellow-400"], ["data-testid", "panel-bet", 1, "text-zinc-200"], [1, "flex", "justify-start", "ml-6"], ["name", "trophy", 1, "text-yellow-400"], ["data-testid", "panel-win", 1, "inline-block", "min-w-[4ch]", "text-left", "tabular-nums", "text-zinc-200"], [1, "absolute", "mx-auto", "w-full", "px-2", "text-zinc-300", "from-black/50", "via-zinc-800/0", "to-black/50", "inline-flex"], [1, "flex", "w-full"], [1, "flex", "items-center", "justify-center", "space-x-1"], ["name", "clock"], [1, "whitespace-nowrap", "leading-tight", "sm:py-0.5"]], template: function BottomPanelReplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "top-status-bar", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "ap-icon-badge", 3);
      \u0275\u0275listener("click", function BottomPanelReplayComponent_Template_ap_icon_badge_click_3_listener() {
        return ctx.clickCampaign();
      });
      \u0275\u0275element(4, "ap-icon-campaign-circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ap-icon-badge", 4);
      \u0275\u0275listener("click", function BottomPanelReplayComponent_Template_ap_icon_badge_click_5_listener() {
        return ctx.clickFeature();
      });
      \u0275\u0275element(6, "ap-icon-buy-feature-circle", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
      \u0275\u0275conditionalCreate(9, BottomPanelReplayComponent_Conditional_9_Template, 2, 4, "ap-icon-badge", 8)(10, BottomPanelReplayComponent_Conditional_10_Template, 2, 2)(11, BottomPanelReplayComponent_Conditional_11_Template, 2, 3, "ap-icon-badge", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, BottomPanelReplayComponent_Conditional_12_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ap-icon-badge", 11);
      \u0275\u0275listener("touchstart", function BottomPanelReplayComponent_Template_ap_icon_badge_touchstart_13_listener($event) {
        return $event.preventDefault();
      })("pointerdown", function BottomPanelReplayComponent_Template_ap_icon_badge_pointerdown_13_listener() {
        return ctx.clickTurbo();
      });
      \u0275\u0275conditionalCreate(14, BottomPanelReplayComponent_Conditional_14_Template, 1, 1, "ap-icon-turbo-circle", 5)(15, BottomPanelReplayComponent_Conditional_15_Template, 1, 1, "ap-icon-turbo-circle", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275listener("touchstart", function BottomPanelReplayComponent_Template_div_touchstart_16_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275elementStart(17, "ap-icon-badge", 13);
      \u0275\u0275listener("pointerdown", function BottomPanelReplayComponent_Template_ap_icon_badge_pointerdown_17_listener() {
        return ctx.clickDecreaseBet();
      });
      \u0275\u0275element(18, "ap-icon-decrease-box");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "div");
      \u0275\u0275elementStart(20, "ap-icon-badge", 14);
      \u0275\u0275listener("pointerdown", function BottomPanelReplayComponent_Template_ap_icon_badge_pointerdown_20_listener() {
        return ctx.clickIncreaseBet();
      });
      \u0275\u0275element(21, "ap-icon-increase-box");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275listener("touchstart", function BottomPanelReplayComponent_Template_div_touchstart_22_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275conditionalCreate(23, BottomPanelReplayComponent_Conditional_23_Template, 1, 6, "ap-button-auto-spin-times", 16)(24, BottomPanelReplayComponent_Conditional_24_Template, 1, 5, "ap-button-auto-spin-times", 17)(25, BottomPanelReplayComponent_Conditional_25_Template, 1, 13, "ap-spin-button", 18)(26, BottomPanelReplayComponent_Conditional_26_Template, 1, 3, "ap-button-free-spins", 19)(27, BottomPanelReplayComponent_Conditional_27_Template, 1, 5, "ap-button-auto-spin-times", 20)(28, BottomPanelReplayComponent_Conditional_28_Template, 1, 12, "ap-spin-button", 21)(29, BottomPanelReplayComponent_Conditional_29_Template, 1, 5, "ap-button-auto-spin-times", 22)(30, BottomPanelReplayComponent_Conditional_30_Template, 1, 14, "ap-spin-button", 23);
      \u0275\u0275conditionalCreate(31, BottomPanelReplayComponent_Conditional_31_Template, 2, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 24)(33, "div", 25)(34, "ap-icon", 26);
      \u0275\u0275listener("click", function BottomPanelReplayComponent_Template_ap_icon_click_34_listener($event) {
        return ctx.toggleMenu($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, BottomPanelReplayComponent_Conditional_35_Template, 1, 0, "div", 27);
      \u0275\u0275conditionalCreate(36, BottomPanelReplayComponent_Conditional_36_Template, 1, 0, "div", 28);
      \u0275\u0275elementStart(37, "div", 29);
      \u0275\u0275listener("clickOutside", function BottomPanelReplayComponent_Template_div_clickOutside_37_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(38, "div", 30);
      \u0275\u0275repeaterCreate(39, BottomPanelReplayComponent_For_40_Template, 5, 4, "div", 31, _forTrack02);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(41, BottomPanelReplayComponent_Conditional_41_Template, 20, 18, "div", 32)(42, BottomPanelReplayComponent_Conditional_42_Template, 18, 16, "div", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(43, BottomPanelReplayComponent_Conditional_43_Template, 12, 29, "div", 34);
    }
    if (rf & 2) {
      \u0275\u0275classProp("flex", ctx.isLandscape())("flex-col", ctx.isLandscape());
      \u0275\u0275advance();
      \u0275\u0275property("fontSize", ctx.topStatusBarFontSize());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(68, _c02, ctx.isLandscape(), ctx.isPortrait()));
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.buttonIconSize());
      \u0275\u0275classProp("invisible", ctx.isCampaignHidden());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(71, _c12, ctx.campaignButtonPositionClass(), !ctx.isCampaignDisabled() ? "cursor-pointer transition-transform hover:scale-105 active:scale-95" : ""))("hasBadge", ctx.campaignHasBadge())("disabled", ctx.isCampaignDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.buttonIconSize());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(74, _c12, ctx.featureButtonPositionClass(), !ctx.isFeatureDisabled() ? "transition-transform hover:scale-105 active:scale-95" : ""))("disabled", ctx.isFeatureDisabled());
      \u0275\u0275advance();
      \u0275\u0275property("variant", ctx.isFeatureCancelled() ? "cancel" : "default");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.autoplayButtonPositionClass());
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.buttonIconSize())("height", ctx.buttonIconSize());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.autoButtonMode() === "music-toggle" ? 9 : ctx.autoButtonMode() === "rs-free-game" ? 10 : 11);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isAutoplayMenuOpen() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.buttonIconSize());
      \u0275\u0275classProp("invisible", ctx.isTurboHidden());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(77, _c12, ctx.turboButtonPositionClass(), !ctx.isTurboDisabled() ? "cursor-pointer transition-transform hover:scale-105 active:scale-95" : ""))("hasBadge", false)("disabled", ctx.isTurboDisabled());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isHoldingTurbo() ? 14 : 15);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("gap", ctx.centerGroupGap());
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.controlIconSize());
      \u0275\u0275property("ngClass", ctx.isDecreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isDecreaseDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.centerSpacerWidth());
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.controlIconSize());
      \u0275\u0275property("ngClass", ctx.isIncreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isIncreaseDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("--ga-auto-spin-scale", ctx.freeSpinScale());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.spinButtonMode() === "feature-mode" ? 23 : ctx.spinButtonMode() === "free-bonus-auto-spin" ? 24 : ctx.spinButtonMode() === "free-bonus" ? 25 : ctx.spinButtonMode() === "free-spin" ? 26 : ctx.spinButtonMode() === "double-chance-auto-spin" ? 27 : ctx.spinButtonMode() === "double-chance" ? 28 : ctx.spinButtonMode() === "auto-spin" ? 29 : 30);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.isGameBusy() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-size", ctx.bottomBarFontSize())("height", ctx.isLandscape() ? ctx.listBottomHeight() : null);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.bottomMenuIconSize())("width", ctx.bottomMenuIconSize());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMenuDisabled() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMenuOpen() ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("margin-bottom", ctx.menuOffset());
      \u0275\u0275property("hidden", !ctx.isMenuOpen());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.menuItems());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLandscape() ? 41 : 42);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showRemainingTurnover() ? 43 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    ApIconComponent,
    ApButtonFreeSpinsComponent,
    ApButtonAutoSpinTimesComponent,
    ApIconBadgeComponent,
    ApSpinButtonComponent,
    ApToggleSwitchComponent,
    MoneyTextPipe,
    ApIconCampaignCircleComponent,
    ApIconBuyFeatureCircleComponent,
    ApIconMusicCircleComponent,
    ApIconAutoplayCircleComponent,
    ApIconTurboCircleComponent,
    ApIconDecreaseBoxComponent,
    ApIconIncreaseBoxComponent,
    TopStatusBarComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n  pointer-events: none;\n}\n.ga-spin-progress-ring[_ngcontent-%COMP%] {\n  inset: -0.2rem;\n  width: calc(100% + 0.4rem);\n  height: calc(100% + 0.4rem);\n  z-index: 1;\n  overflow: visible;\n  color: rgba(255, 255, 255, 0.8);\n  pointer-events: none;\n  transform: translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring--auto-spin-times[_ngcontent-%COMP%] {\n  transform: scale(var(--ga-auto-spin-scale, 1)) translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 4;\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: _ngcontent-%COMP%_ga-spin-progress-fill 3s linear forwards;\n}\n@keyframes _ngcontent-%COMP%_ga-spin-progress-fill {\n  0% {\n    stroke-dashoffset: 100;\n    opacity: 1;\n  }\n  99% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=bottom-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomPanelReplayComponent, [{
    type: Component,
    args: [{ selector: "bottom-panel-replay", standalone: true, imports: [
      CommonModule,
      ApIconComponent,
      ApButtonFreeSpinsComponent,
      ApButtonAutoSpinTimesComponent,
      ApIconBadgeComponent,
      ApSpinButtonComponent,
      ApToggleSwitchComponent,
      MoneyTextPipe,
      ApIconCampaignCircleComponent,
      ApIconBuyFeatureCircleComponent,
      ApIconMusicCircleComponent,
      ApIconAutoplayCircleComponent,
      ApIconTurboCircleComponent,
      ApIconDecreaseBoxComponent,
      ApIconIncreaseBoxComponent,
      TopStatusBarComponent
    ], template: `<div
  class="relative size-full"
  style="background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)"
  [class.flex]="isLandscape()"
  [class.flex-col]="isLandscape()"
>
  <top-status-bar
    [fontSize]="topStatusBarFontSize()"
    class="absolute top-0 left-1/2 flex items-center justify-center"
    style="transform: translateX(-50%)"
  />

  <!-- Buttons Area -->
  <div
    class="absolute inset-0 "
    [ngClass]="{
      'bottom-1/15': isLandscape(),
      'bottom-1/6': isPortrait(),
    }"
  >
    <!-- \u5DE6\u908A\u7B2C\u4E00\u500B\u6309\u9215 -->
    <ap-icon-badge
      class="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      [ngClass]="[
        campaignButtonPositionClass(),
        !isCampaignDisabled() ? 'cursor-pointer transition-transform hover:scale-105 active:scale-95' : '',
      ]"
      [class.invisible]="isCampaignHidden()"
      [style.height]="buttonIconSize()"
      [hasBadge]="campaignHasBadge()"
      [disabled]="isCampaignDisabled()"
      (click)="clickCampaign()"
    >
      <ap-icon-campaign-circle />
    </ap-icon-badge>

    <!-- \u5DE6\u908A\u7B2C\u4E8C\u500B\u6309\u9215 -->
    <ap-icon-badge
      class="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto"
      [ngClass]="[
        featureButtonPositionClass(),
        !isFeatureDisabled() ? 'transition-transform hover:scale-105 active:scale-95' : '',
      ]"
      [style.height]="buttonIconSize()"
      [disabled]="isFeatureDisabled()"
      (click)="clickFeature()"
    >
      <ap-icon-buy-feature-circle
        [variant]="isFeatureCancelled() ? 'cancel' : 'default'"
      />
    </ap-icon-badge>

    <!-- \u53F3\u908A\u7B2C\u4E8C\u500B\u6309\u9215 -->
    <div
      class="absolute translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      [ngClass]="autoplayButtonPositionClass()"
    >
      <div
        class="relative shrink-0"
        [style.width]="buttonIconSize()"
        [style.height]="buttonIconSize()"
      >
        @if (autoButtonMode() === "music-toggle") {
          <ap-icon-badge
            class="relative size-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
            [style.height]="buttonIconSize()"
            [hasBadge]="false"
            (click)="toggleMusicAtAutoButton()"
          >
            <ap-icon-music-circle
              [variant]="isMusicAtAutoButtonOn() ? 'default' : 'pressed'"
            />
          </ap-icon-badge>
        } @else if (autoButtonMode() === "rs-free-game") {
          <ap-icon
            [name]="'blank'"
            class="absolute inset-0 w-full h-full text-zinc-100"
          />
          <img
            [src]="rsImgPath() + \`?v=\${version()}\`"
            alt="RS"
            class="absolute left-1/2 top-1/2 z-10 w-[90%] h-[90%] -translate-x-1/2 -translate-y-1/2 -rotate-6 object-contain pointer-events-none drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]"
          />
        } @else {
          <ap-icon-badge
            data-testid="panel-autoplay"
            class="relative size-full"
            [ngClass]="
              isAutoPlayDisabled()
                ? ''
                : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'
            "
            [disabled]="isAutoPlayDisabled()"
            [attr.disabled]="isAutoPlayDisabled() ? '' : null"
            (click)="$event.stopPropagation(); clickAutoplay()"
          >
            <ap-icon-autoplay-circle />
          </ap-icon-badge>
        }
      </div>

      <!-- AutoPlay\u7684\u9078\u55AE -->
      @if (isAutoplayMenuOpen()) {
        <div
          class="absolute left-1/2 bottom-full mb-2 z-sticky"
          style="
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          "
          clickOutside
          (clickOutside)="closeAutoplayMenu()"
        >
          <div
            class="min-w-26 rounded-2xl bg-zinc-800 text-white cursor-pointer animate-fade-up animate-once animate-duration-200"
            style="
              border: 2px solid rgb(251 251 251);
              box-shadow: 0 0 0 3px rgb(24 24 27);
            "
          >
            @for (
              option of autoplayOptions;
              track option.value;
              let isLast = $last
            ) {
              <div
                class="flex items-center justify-center py-2 text-xl font-bold text-white hover:text-yellow-300"
                [style.border-bottom]="
                  isLast ? 'none' : '1px solid rgb(63 63 70)'
                "
                (click)="clickAutoplayOption(option.value)"
              >
                @if (option.isInfinity) {
                  <ap-icon name="infinite default" class="size-6.5" />
                } @else {
                  {{ option.value }}
                }
              </div>
            }
          </div>
        </div>
      }
    </div>

    <!-- \u53F3\u908A\u7B2C\u4E00\u500B\u6309\u9215 -->
    <ap-icon-badge
      class="absolute translate-x-1/2 -translate-y-1/2 pointer-events-auto touch-none"
      (touchstart)="$event.preventDefault()"
      [class.invisible]="isTurboHidden()"
      [ngClass]="[
        turboButtonPositionClass(),
        !isTurboDisabled() ? 'cursor-pointer transition-transform hover:scale-105 active:scale-95' : '',
      ]"
      appPointerDownSound
      data-no-click-sound
      [style.height]="buttonIconSize()"
      [hasBadge]="false"
      [disabled]="isTurboDisabled()"
      (pointerdown)="clickTurbo()"
    >
      @if (isHoldingTurbo()) {
        <ap-icon-turbo-circle [variant]="'pressed2'" />
      } @else {
        <ap-icon-turbo-circle [variant]="turboState()" />
      }
    </ap-icon-badge>

    <!-- Center Group -->
    <div
      class="absolute flex items-center rounded-xl p-1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto touch-none"
      (touchstart)="$event.preventDefault()"
      style="background-color: rgba(24, 24, 27, 0.8)"
      [style.gap]="centerGroupGap()"
    >
      <ap-icon-badge
        data-testid="panel-decrease"
        appPointerDownSound
        data-no-click-sound
        [ngClass]="
          isDecreaseDisabled()
            ? ''
            : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'
        "
        [style.height]="controlIconSize()"
        [disabledCoverVariant]="'half'"
        [hasBadge]="false"
        [disabled]="isDecreaseDisabled()"
        (pointerdown)="clickDecreaseBet()"
      >
        <ap-icon-decrease-box />
      </ap-icon-badge>

      <div [style.width]="centerSpacerWidth()"></div>

      <ap-icon-badge
        data-testid="panel-increase"
        appPointerDownSound
        data-no-click-sound
        [ngClass]="
          isIncreaseDisabled()
            ? ''
            : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'
        "
        [style.height]="controlIconSize()"
        [disabledCoverVariant]="'half'"
        [hasBadge]="false"
        [disabled]="isIncreaseDisabled()"
        (pointerdown)="clickIncreaseBet()"
      >
        <ap-icon-increase-box />
      </ap-icon-badge>
    </div>

    <!-- Spin Button -->
    <!-- \u963B\u6B62 Safari \u5C07\u5FEB\u901F\u9023\u9EDE Spin \u6309\u9215\u5224\u5B9A\u70BA\u96D9\u64CA\u7E2E\u653E\u3002 -->
    <div
      data-testid="panel-spin"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto touch-none"
      (touchstart)="$event.preventDefault()"
      [style.--ga-auto-spin-scale]="freeSpinScale()"
    >
      @if (spinButtonMode() === "feature-mode") {
        <ap-button-auto-spin-times
          [pressHintEnabled]="featureStartTipEnabled()"
          [pressHintTimerEnabled]="featureStartTipEnabled()"
          [scale]="freeSpinScale()"
          [totalSpins]="featureTotal() || 0"
          [currentSpins]="featureRemaining() || 0"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickFeatureSpin()"
        />
      } @else if (spinButtonMode() === "free-bonus-auto-spin") {
        <ap-button-auto-spin-times
          mode="free-bonus-auto-spin"
          [scale]="freeSpinScale()"
          [totalSpins]="autoSpinTotal() || 0"
          [currentSpins]="autoSpinRemaining() || 0"
          [variant]="isAutoSpinInfinity() ? 'infinity' : 'default'"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickStopAutoSpin()"
        />
      } @else if (spinButtonMode() === "free-bonus") {
        <ap-spin-button
          variant="bonus"
          data-no-click-sound
          [pressHintType]="pressHintType()"
          [ngClass]="{
            'cursor-pointer hover:scale-105 transition-transform active:scale-95':
              !isSpinDisabled()
          }"
          [spinCount]="spinCount()"
          [style.height]="spinIconSize()"
          [disabled]="
            isSpinDisabled()
          "
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          [isSpinning]="isGameBusy()"
          [holdTurboEnabled]="isHoldTurboEnabled()"
          [turboHoldThresholdMs]="turboHoldThresholdMs()"
          [idleTooltipMs]="idleTooltipMs()"
          (buttonClick)="clickCampaignSpin()"
          (turboHold)="toggleHoldTurbo($event)"
        />
      } @else if (spinButtonMode() === "free-spin") {
        <ap-button-free-spins
          [scale]="freeSpinScale()"
          [totalSpins]="freeSpinTotal() || 0"
          [currentSpins]="freeSpinRemaining() || 0"
          (buttonClick)="clickCampaignSpin()"
        />
      } @else if (spinButtonMode() === "double-chance-auto-spin") {
        <ap-button-auto-spin-times
          mode="double-chance-auto-spin"
          [scale]="freeSpinScale()"
          [totalSpins]="autoSpinTotal() || 0"
          [currentSpins]="autoSpinRemaining() || 0"
          [variant]="isAutoSpinInfinity() ? 'infinity' : 'default'"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickStopAutoSpin()"
        />
      } @else if (spinButtonMode() === "double-chance") {
        <ap-spin-button
          variant="chance"
          data-no-click-sound
          [ngClass]="{
            'cursor-pointer hover:scale-105 transition-transform active:scale-95':
              !isSpinDisabled()
          }"
          [spinCount]="spinCount()"
          [style.height]="spinIconSize()"
          [disabled]="
            isSpinDisabled()
          "
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          [isSpinning]="isGameBusy()"
          [holdTurboEnabled]="isHoldTurboEnabled()"
          [turboHoldThresholdMs]="turboHoldThresholdMs()"
          [idleTooltipMs]="idleTooltipMs()"
          (buttonClick)="clickSpin()"
          (turboHold)="toggleHoldTurbo($event)"
        />
      } @else if (spinButtonMode() === "auto-spin") {
        <ap-button-auto-spin-times
          mode="auto-spin"
          [scale]="freeSpinScale()"
          [totalSpins]="autoSpinTotal() || 0"
          [currentSpins]="autoSpinRemaining() || 0"
          [variant]="isAutoSpinInfinity() ? 'infinity' : 'default'"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          (buttonClick)="clickStopAutoSpin()"
        />
      } @else {
        <ap-spin-button
          [pressHintEnabled]="isClickToSpinTipEnabled()"
          [spinCount]="spinCount()"
          data-no-click-sound
          [ngClass]="{
            'cursor-pointer hover:scale-105 transition-transform active:scale-95':
              !isSpinDisabled()
          }"
          [style.height]="spinIconSize()"
          [disabled]="
            isSpinDisabled()
          "
          [fastSpinDisabled]="isFastSpinDisabled()"
          [enableLightingEffect]="autoSpinLightingEffectEnabled()"
          [isSpinning]="isGameBusy()"
          [holdTurboEnabled]="isHoldTurboEnabled()"
          [turboHoldThresholdMs]="turboHoldThresholdMs()"
          [idleTooltipMs]="idleTooltipMs()"
          (buttonClick)="clickSpin()"
          (turboHold)="toggleHoldTurbo($event)"
        />
      }
      <!-- \u5728\u6309\u9215\u6700\u4E0A\u65B9\u986F\u793A 3 \u79D2\u7E5E\u5708\u51B7\u537B\u52D5\u756B\u3002
      \u7528 @for track spinCooldownTick() \u8B93\u6BCF\u6B21\u89F8\u767C\u90FD\u5F37\u5236\u92B7\u6BC0\u91CD\u5EFA svg \u7BC0\u9EDE\uFF0C\u78BA\u4FDD\u9023\u7E8C\u81EA\u52D5\u65CB\u8F49\u6BCF\u6B21\u90FD\u91CD\u65B0\u64AD\u653E\u7279\u6548\u3002 -->
      @if (isGameBusy()) {
        @for (tick of (spinCooldownTick() > 0 ? [spinCooldownTick()] : []); track tick) {
          <svg
            class="ga-spin-progress-ring absolute inset-0"
            [class.ga-spin-progress-ring--auto-spin-times]="isAutoSpinTimesButtonMode()"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="46" pathLength="100" />
          </svg>
        }
      }
    </div>
  </div>

  <!-- Bottom Bar -->
  <div
    class="absolute bottom-0 left-0 right-0 flex items-center justify-between pr-4 text-zinc-100 font-semibold"
    style="
      border-top: 0.15rem solid rgba(161, 161, 170, 0.6);
      background-color: rgba(0, 0, 0, 0.5);
    "
    [style.fontSize]="bottomBarFontSize()"
    [style.height]="isLandscape() ? listBottomHeight() : null"
  >
    <div class="relative shrink-0 flex justify-center items-center pointer-events-auto">
      <ap-icon
        data-testid="panel-menu"
        name="bar-3"
        appPointerDownSound
        data-no-click-sound
        class="relative size-full cursor-pointer hover:text-yellow-400"
        [style.height]="bottomMenuIconSize()"
        [style.width]="bottomMenuIconSize()"
        (click)="toggleMenu($event)"
      >
      </ap-icon>
      @if (isMenuDisabled()) {
        <div
          data-testid="panel-busy"
          class="absolute inset-0 bg-black/50"
        ></div>
      }
      @if (isMenuOpen()) {
        <div (click)="closeMenu()" class="absolute inset-0"></div>
      }
      <div
        class="absolute left-0 bottom-full animate-fade-up animate-once animate-duration-200 z-dropdown"
        [style.marginBottom]="menuOffset()"
        [hidden]="!isMenuOpen()"
        clickOutside
        (clickOutside)="closeMenu()"
      >
        <div
          class="min-w-56 justify-center items-center rounded-t-md border border-zinc-400/50 bg-zinc-900 text-zinc-300 p-2"
        >
          @for (item of menuItems(); track item.id) {
            <div
              [attr.data-testid]="'panel-menu-' + item.id"
              class="flex items-center justify-start relative gap-2 px-2 py-2 m-2 cursor-pointer hover:bg-zinc-800 hover:text-yellow-400 active:bg-zinc-700 hover:rounded-lg text-xl font-semibold"
              (click)="item.action()"
            >
              <ap-icon [name]="iconMap()[item.id]" class="size-6" />
              <h3 class="flex-1 uppercase">{{ item.label }}</h3>
              @if (item.hasToggle) {
                <ap-toggle-switch
                  variant="quick"
                  [accentColor]="'yellow'"
                  [checked]="toggleMap()[item.id]"
                />
              }
            </div>
          }
        </div>
      </div>
    </div>

    @if (isLandscape()) {
      <div class="grid flex-1 grid-cols-3 items-center">
        <div class="flex items-center justify-start space-x-2 ml-2">
          <h6 class="text-yellow-400" [style.fontSize]="bottomBarFontSize()">
            {{ getBalanceLabel() }}
          </h6>
          <div
            data-testid="panel-balance"
            class="space-x-1 text-zinc-200 whitespace-nowrap"
            [style.fontSize]="bottomBarFontSize()"
          >
            @if (isBalanceHided()) {
              ***
            } @else {
              {{ displayCurrency() }}
              {{ displayBalance() | moneyText: { addSymbol: false } }}
            }
          </div>
        </div>

        <div class="flex items-center justify-center gap-2">
          <h6 class="text-yellow-400" [style.fontSize]="bottomBarFontSize()">
            {{ getBetLabel() }}
          </h6>
          <div
            class="inline-block min-w-[4ch] text-left tabular-nums text-zinc-200"
            [style.fontSize]="bottomBarFontSize()"
          >
            <div data-testid="panel-bet" class="flex space-x-1">
              @if (isBetHided()) {
                ***
              } @else {
                {{ displayCurrency() }}
                {{ displayBet() | moneyText: { addSymbol: false } }}
              }
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-start space-x-2 ml-8 sm:ml-10 md:ml-12 lg:ml-14"
        >
          <h6 class="text-yellow-400" [style.fontSize]="bottomBarFontSize()">
            {{ getWinLabel() }}
          </h6>
          <div
            class="inline-block min-w-[4ch] text-left text-zinc-200 tabular-nums whitespace-nowrap"
            [style.fontSize]="bottomBarFontSize()"
          >
            @if (isWinHided()) {
              ***
            } @else {
              <div data-testid="panel-win" class="flex space-x-1">
                @if (displayWin() !== null) {
                  {{ displayCurrency() }}
                  {{ displayWin()! | moneyText: { addSymbol: false } }}
                }
              </div>
            }
          </div>
        </div>
      </div>
      <!-- Mobile -->
    } @else {
      <!-- Balance -->
      <div class="grid flex-1 grid-cols-3">
        <div class="flex justify-start items-center space-x-1 ml-1">
          <ap-icon
            class="text-yellow-400"
            [style.height]="bottomIconSize()"
            [name]="isBonusWalletUsed() ? 'star' : 'wallet'"
          />
          <div
            data-testid="panel-balance"
            class="text-zinc-200 whitespace-nowrap"
            [style.fontSize]="bottomBarFontSize()"
          >
            @if (isBalanceHided()) {
              ***
            } @else {
              {{ displayCurrency() }}
              {{ displayBalance() | moneyText: { addSymbol: false } }}
            }
          </div>
        </div>

        <!-- Bet -->
        <div class="flex justify-center">
          <div class="flex items-center space-x-1">
            <ap-icon
              name="prizes"
              class="text-yellow-400"
              [style.height]="bottomIconSize()"
            />
            <div
              data-testid="panel-bet"
              class="text-zinc-200"
              [style.fontSize]="bottomBarFontSize()"
            >
              @if (isBetHided()) {
                ***
              } @else {
                {{ displayCurrency() }}
                {{ displayBet() | moneyText: { addSymbol: false } }}
              }
            </div>
          </div>
        </div>

        <!-- Win -->
        <div class="flex justify-start ml-6">
          <div class="flex items-center space-x-1">
            <ap-icon
              name="trophy"
              class="text-yellow-400"
              [style.height]="bottomIconSize()"
            />
            <div
              data-testid="panel-win"
              class="inline-block min-w-[4ch] text-left tabular-nums text-zinc-200"
              [style.fontSize]="bottomBarFontSize()"
            >
              @if (isWinHided()) {
                ***
              } @else if (displayWin() !== null) {
                {{ displayCurrency() }}
                {{ displayWin()! | moneyText: { addSymbol: false } }}
              }
            </div>
          </div>
        </div>
      </div>
    }
  </div>
</div>

@if (showRemainingTurnover()) {
  <div
    class="absolute mx-auto w-full px-2 text-zinc-300 from-black/50 via-zinc-800/0 to-black/50 inline-flex"
    [class.left-0]="isLandscape()"
    [class.right-0]="isLandscape()"
    [class.bg-linear-to-r]="isLandscape()"
    [style.bottom]="isPortrait() ? '16.6667%' : middleListBottomHeight()"
    [style.fontSize]="middleHintFontSize()"
  >
    <div
      class="flex w-full"
      [class.flex-col]="isPortrait()"
      [class.items-center]="isPortrait()"
      [class.flex-row]="isLandscape()"
      [class.justify-between]="isLandscape()"
    >
      <div
        class="flex items-center justify-center space-x-1"
        [class.order-2]="isLandscape()"
      >
        <ap-icon name="clock" [style.height]="middleHintIconSize()" />
        <div class="whitespace-nowrap leading-tight sm:py-0.5">
          {{ displayEndTime() }}
        </div>
      </div>
      <div
        class="whitespace-nowrap leading-tight sm:py-0.5"
        [class.order-1]="isLandscape()"
      >
        <span>{{ getRemainingTurnoverLabel() }}</span>
        <span> {{ displayRemainingTurnover()! | moneyText }}</span>
      </div>
    </div>
  </div>
}
`, styles: ["/* src/app/pages/bottom-panel/bottom-panel.component.css */\n:host {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n  pointer-events: none;\n}\n.ga-spin-progress-ring {\n  inset: -0.2rem;\n  width: calc(100% + 0.4rem);\n  height: calc(100% + 0.4rem);\n  z-index: 1;\n  overflow: visible;\n  color: rgba(255, 255, 255, 0.8);\n  pointer-events: none;\n  transform: translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring--auto-spin-times {\n  transform: scale(var(--ga-auto-spin-scale, 1)) translateY(-0.2rem) rotate(-90deg);\n}\n.ga-spin-progress-ring circle {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 4;\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: ga-spin-progress-fill 3s linear forwards;\n}\n@keyframes ga-spin-progress-fill {\n  0% {\n    stroke-dashoffset: 100;\n    opacity: 1;\n  }\n  99% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=bottom-panel.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomPanelReplayComponent, { className: "BottomPanelReplayComponent", filePath: "src/app/pages/bottom-panel-replay/bottom-panel-replay.component.ts", lineNumber: 50 });
})();

// src/app/pages/history-replay-viewer/history-replay-viewer.component.ts
var _c03 = ["replayIframe"];
function HistoryReplayViewerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-game-name", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("showTime", false)("gameId", ctx_r1.gameId());
  }
}
function HistoryReplayViewerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-logo-name", 4);
  }
}
function HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-ui-replay-mode", 6);
    \u0275\u0275listener("enableMusicSound", function HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_0_Template_ap_ui_replay_mode_enableMusicSound_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDemoMusicIconClicked());
    })("close", function HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_0_Template_ap_ui_replay_mode_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeReplayIframe());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("showIcon", true)("showCloseButton", ctx_r1.showCloseButton())("label", ctx_r1.getDemoModeLabel());
  }
}
function HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-ui-replay-mode", 7);
    \u0275\u0275listener("close", function HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_1_Template_ap_ui_replay_mode_close_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeReplayIframe());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "bottom-panel-demo", 8);
    \u0275\u0275listener("musicPressedChange", function HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_1_Template_bottom_panel_demo_musicPressedChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDemoMusicPressedChange($event));
    })("turboStateChange", function HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_1_Template_bottom_panel_demo_turboStateChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTurboStateChange($event));
    })("spin", function HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_1_Template_bottom_panel_demo_spin_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.spin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("showIcon", false)("showCloseButton", ctx_r1.showCloseButton())("label", ctx_r1.getDemoModeLabel());
    \u0275\u0275advance();
    \u0275\u0275property("hidden", !ctx_r1.isShowPanel())("displayBet", ctx_r1.replayBet() ?? 0)("displayWin", ctx_r1.replayWin() ?? 0)("isGameBusy", ctx_r1.isReplayRunning())("featureRemaining", ctx_r1.featureModeRemaining())("featureTotal", ctx_r1.featureModeTotal())("spinButtonMode", ctx_r1.spinButtnMode())("isTurboDisabled", ctx_r1.isTurboDisabled())("autoSpinLightingEffectEnabled", ctx_r1.autoSpinLightingEffectEnabled());
  }
}
function HistoryReplayViewerComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_0_Template, 1, 3, "ap-ui-replay-mode", 5)(1, HistoryReplayViewerComponent_Conditional_5_Conditional_0_Conditional_1_Template, 2, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.isOldGame() ? 0 : 1);
  }
}
function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-ui-replay-mode", 6);
    \u0275\u0275listener("enableMusicSound", function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_0_Template_ap_ui_replay_mode_enableMusicSound_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReplayMusicIconClicked());
    })("close", function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_0_Template_ap_ui_replay_mode_close_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeReplayIframe());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("showIcon", true)("showCloseButton", ctx_r1.showCloseButton())("label", ctx_r1.getReplayModeLabel());
  }
}
function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-ui-replay-mode", 7);
    \u0275\u0275listener("close", function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_1_Template_ap_ui_replay_mode_close_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeReplayIframe());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "bottom-panel-replay", 9);
    \u0275\u0275listener("copyLink", function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_1_Template_bottom_panel_replay_copyLink_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCopyLink());
    })("musicPressedChange", function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_1_Template_bottom_panel_replay_musicPressedChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReplayMusicPressedChange($event));
    })("turboStateChange", function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_1_Template_bottom_panel_replay_turboStateChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTurboStateChange($event));
    })("spin", function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_1_Template_bottom_panel_replay_spin_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.spin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("showIcon", false)("showCloseButton", ctx_r1.showCloseButton())("label", ctx_r1.getReplayModeLabel());
    \u0275\u0275advance();
    \u0275\u0275property("hidden", !ctx_r1.isShowPanel())("isGameBusy", ctx_r1.isReplayRunning())("displayCurrency", ctx_r1.replayCurrencySymbol())("displayBet", ctx_r1.replayBet() ?? 0)("displayWin", ctx_r1.replayWin() ?? 0)("featureRemaining", ctx_r1.featureModeRemaining())("featureTotal", ctx_r1.featureModeTotal())("spinButtonMode", ctx_r1.spinButtnMode())("isTurboDisabled", ctx_r1.isTurboDisabled())("autoSpinLightingEffectEnabled", ctx_r1.autoSpinLightingEffectEnabled())("customData", ctx_r1.customData());
  }
}
function HistoryReplayViewerComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_0_Template, 1, 3, "ap-ui-replay-mode", 5)(1, HistoryReplayViewerComponent_Conditional_5_Conditional_1_Conditional_1_Template, 2, 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.isOldGame() ? 0 : 1);
  }
}
function HistoryReplayViewerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HistoryReplayViewerComponent_Conditional_5_Conditional_0_Template, 2, 1)(1, HistoryReplayViewerComponent_Conditional_5_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.isReplayPanel() ? 0 : 1);
  }
}
function HistoryReplayViewerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 10);
    \u0275\u0275elementStart(1, "ap-history-popup-replay-end", 11);
    \u0275\u0275listener("watchAgain", function HistoryReplayViewerComponent_Conditional_6_Template_ap_history_popup_replay_end_watchAgain_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onWatchAgain());
    })("copyLink", function HistoryReplayViewerComponent_Conditional_6_Template_ap_history_popup_replay_end_copyLink_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCopyLink());
    })("close", function HistoryReplayViewerComponent_Conditional_6_Template_ap_history_popup_replay_end_close_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReplayIframe());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("showWatchAgain", ctx_r1.showWatchAgain())("showCopyLink", ctx_r1.isReplayPanel())("showCloseButton", ctx_r1.showReplayEndCloseButton());
  }
}
var HistoryReplayViewerComponent = class _HistoryReplayViewerComponent {
  logger = inject(LoggerService);
  gameIframeCtrl = inject(GameIframeCtrlService);
  bottomPanel = inject(BottomPanelService);
  appI18n = inject(AppI18nService);
  replay = inject(HistoryReplayService);
  session = inject(ClientSessionService);
  sanitizer = inject(DomSanitizer);
  // 儲存開始 Replay 前的音樂和音效音量
  savedMusicVolume = 0;
  savedSoundVolume = 0;
  // Inputs
  showWatchAgain = input(true);
  showCopyLink = input(true);
  showCloseButton = input(true);
  showReplayEndCloseButton = input(true);
  // Demo Mode 字串
  getDemoModeLabel = this.appI18n.computed("replay_demo_mode", "DEMO MODE");
  getReplayModeLabel = this.appI18n.computed("replay_replay_mode", "REPLAY MODE");
  // Game Logo
  showGameLogo = input(true);
  // AP Logo
  showAPLogo = input(false);
  // Outputs
  watchAgain = output();
  copyLinkRequest = output();
  close = output();
  // 判斷是否為舊遊戲（使用 in-game UI）- 在 replay 模式下由 loadReplayUrl 設置
  isOldGame = computed(() => this.replay.isOldGame());
  // State signals
  replayIframeUrl = signal(this.sanitizer.bypassSecurityTrustResourceUrl("about:blank"));
  isReplayEnd = signal(false);
  /** Replay正在跑遊戲畫面 */
  isReplayRunning = signal(false);
  isLoadingFinished = signal(false);
  /** 給轉場要把Panel關掉用的 */
  isShowPanel = signal(true);
  isReplayPanel = input(false);
  // false = bottom-panel-demo, true = bottom-panel-replay
  replayWin = signal(null);
  // 儲存 replay 的 win 值
  replayBet = signal(null);
  // 儲存 replay 的 bet 值
  replayCurrencySymbol = signal("");
  // 儲存 replay 的 currency symbol
  isDemoMusicPressed = signal(false);
  isReplayMusicPressed = signal(false);
  isTurboDisabled = computed(() => this.isFeatureMode());
  // 舊遊戲使用 in-game UI，無法控制遊戲速度，因此禁用 Turbo 功能
  isFeatureMode = signal(false);
  // 儲存 replay 的 feature mode 狀態
  featureModeRemaining = signal(0);
  // 儲存 replay 的 feature mode remaining
  featureModeTotal = signal(0);
  // 儲存 replay 的 feature mode total
  /** Auto Spin 按鈕的 lighting effect 是否啟用；由 replay 的 featureTransition popup 資料決定 */
  autoSpinLightingEffectEnabled = signal(true);
  spinButtnMode = computed(() => this.isFeatureMode() ? "feature-mode" : "default");
  customData = signal(null);
  gameId = computed(() => {
    if (this.isReplayPanel()) {
      return this.replay.gameId();
    }
    return this.session.gameId;
  });
  /**
   * 接收 bottom-panel-demo 的 isMusicPressed 事件
   */
  onDemoMusicPressedChange(isPressed) {
    this.setMusicAndSoundEnabledToReplayIFrame(!isPressed, !isPressed);
  }
  /**
   * 接收 bottom-panel-replay 的 isMusicPressed 事件
   */
  onReplayMusicPressedChange(isPressed) {
    this.setMusicAndSoundEnabledToReplayIFrame(!isPressed, !isPressed);
  }
  onDemoMusicIconClicked() {
    const nextPressed = !this.isDemoMusicPressed();
    this.isDemoMusicPressed.set(nextPressed);
    this.setMusicAndSoundEnabledToReplayIFrame(!nextPressed, !nextPressed);
  }
  onReplayMusicIconClicked() {
    const nextPressed = !this.isReplayMusicPressed();
    this.isReplayMusicPressed.set(nextPressed);
    this.setMusicAndSoundEnabledToReplayIFrame(!nextPressed, !nextPressed);
  }
  /**
   * 接收 bottom-panel-demo / bottom-panel-replay 的 turboStateChange 事件
   */
  onTurboStateChange(speed) {
    this.setGameSpeed(speed);
  }
  replayIframeElement = viewChild.required("replayIframe");
  replayEndComponent = viewChild(ApHistoryPopupReplayEndComponent);
  bottomPanelDemo = viewChild(BottomPanelDemoComponent);
  bottomPanelReplay = viewChild(BottomPanelReplayComponent);
  replayIframeRef = null;
  replayMessageListener = null;
  ngOnInit() {
    this.setupReplayMessageListener();
  }
  ngAfterViewInit() {
    this.loadReplayUrl();
  }
  ngOnDestroy() {
    this.removeReplayMessageListener();
  }
  /**
   * 載入 Replay URL - 由父組件呼叫
   * @param replayUrl 完整的 replay URL
   * @param isOldGame 是否為舊遊戲（使用 in-game UI）
   */
  loadReplayUrl() {
    this.savedMusicVolume = this.gameIframeCtrl.musicVolume();
    this.savedSoundVolume = this.gameIframeCtrl.soundVolume();
    this.bottomPanel.enableMusic(false);
    this.bottomPanel.enableSound(false);
    this.replayWin.set(null);
    this.replayCurrencySymbol.set("");
    this.isShowPanel.set(true);
    this.isReplayRunning.set(false);
    this.isDemoMusicPressed.set(false);
    this.isReplayMusicPressed.set(false);
    this.isFeatureMode.set(false);
    this.featureModeRemaining.set(0);
    this.featureModeTotal.set(0);
    this.autoSpinLightingEffectEnabled.set(false);
    const apWebBase = new ApWebBase();
    apWebBase.setMode(this.isOldGame() ? "ap-replay-game-ui" : "ap-replay");
    const iframeName = apWebBase.toString();
    this.replayIframeRef = this.replayIframeElement().nativeElement;
    if (this.replayIframeRef.contentWindow) {
      this.replayIframeRef.contentWindow.name = iframeName;
    }
    const url = this.replay.replayUrl();
    if (url)
      this.replayIframeUrl.set(url);
  }
  /**
   * Replay iframe 載入完成
   */
  onReplayIframeLoad() {
  }
  /**
   * 顯示 Replay 結束畫面
   */
  showReplayEnd() {
    this.isReplayEnd.set(true);
  }
  /**
   * 重新觀看
   */
  onWatchAgain() {
    this.isReplayEnd.set(false);
    this.bottomPanelDemo()?.resetReplayStart();
    this.bottomPanelReplay()?.resetReplayStart();
    this.watchAgain.emit();
  }
  /**
   * 複製連結 - 發出事件讓父組件處理
   */
  onCopyLink() {
    this.copyLinkRequest.emit();
  }
  /**
   * 顯示複製連結成功 Toast
   */
  showCopyLinkToast() {
    this.replayEndComponent()?.copyLinkToast()?.show();
  }
  /**
   * 關閉 Replay
   */
  closeReplayIframe() {
    this.isReplayEnd.set(false);
    this.isShowPanel.set(true);
    this.isReplayRunning.set(false);
    this.isLoadingFinished.set(false);
    this.replayWin.set(null);
    this.isDemoMusicPressed.set(false);
    this.isReplayMusicPressed.set(false);
    this.isFeatureMode.set(false);
    this.featureModeRemaining.set(0);
    this.featureModeTotal.set(0);
    this.autoSpinLightingEffectEnabled.set(false);
    const restoreMusicEnabled = this.savedMusicVolume > 0;
    const restoreSoundEnabled = this.savedSoundVolume > 0;
    this.bottomPanel.enableMusic(restoreMusicEnabled);
    this.bottomPanel.enableSound(restoreSoundEnabled);
    this.close.emit();
  }
  /**
   * 設置 message 監聽器
   */
  isLocalOrigin() {
    const origin = window.location.origin;
    return origin.includes("localhost") || origin.includes("192.168");
  }
  setupReplayMessageListener() {
    this.replayMessageListener = (event) => {
      if (!this.isLocalOrigin() && event.origin !== window.location.origin) {
        return;
      }
      this.logger.iframeReplayLog("iframe\u27A1\uFE0F:", event.data);
      const message = event.data;
      switch (message.type) {
        case "ReadyForSessionData": {
          if (this.session.remoteHost) {
            const payload = this.replay.consumePendingPostSessionData();
            if (payload && this.replayIframeRef?.contentWindow) {
              const sessionMessage = createApWebMessage("SessionData", payload);
              this.sendMessage(sessionMessage);
            }
          }
          break;
        }
        case "ReadyForSpin":
          this.showReplayEnd();
          this.isReplayRunning.set(false);
          break;
        case "LoadingFinished":
          this.isLoadingFinished.set(true);
          break;
        case "WinMoneyUpdated":
          const winValue = message.content.win ?? 0;
          this.replayWin.set(winValue);
          break;
        case "HistoryBetValueForShow":
          const betValue = message.content.bet ?? 0;
          const currencySymbol = message.content.currencySymbol ?? "";
          this.replayBet.set(betValue);
          this.replayCurrencySymbol.set(currencySymbol);
          break;
        case "FeatureModeUpdated":
          if (message.content.remaining !== void 0) {
            this.featureModeRemaining.set(message.content.remaining);
          }
          if (message.content.total !== void 0) {
            this.featureModeTotal.set(message.content.total);
          }
          this.bottomPanelDemo()?.turnOffFeatureStart();
          this.bottomPanelReplay()?.turnOffFeatureStart();
          break;
        case "FeatureModeEnabled":
          this.isFeatureMode.set(message.content.enabled);
          break;
        case "InGamePopupOpened":
          this.isShowPanel.set(false);
          break;
        case "InGamePopupClosed":
          this.isShowPanel.set(true);
          if (message.content.category === "featureTransition") {
            this.bottomPanelDemo()?.turnOnFeatureStart();
            this.bottomPanelReplay()?.turnOnFeatureStart();
            if (message.content.enableLightingEffect != void 0) {
              this.autoSpinLightingEffectEnabled.set(message.content.enableLightingEffect ?? false);
            }
          }
          break;
        case "GameCustomSetting":
          this.customData.set(message.content.customData ?? null);
          break;
      }
    };
    window.addEventListener("message", this.replayMessageListener, false);
  }
  /**
   * 移除監聽器
   */
  removeReplayMessageListener() {
    if (this.replayMessageListener) {
      window.removeEventListener("message", this.replayMessageListener);
      this.replayMessageListener = null;
    }
  }
  sendMessage(message) {
    if (this.replayIframeRef?.contentWindow) {
      this.logger.iframeReplayLog("\u27A1\uFE0Fiframe:", message);
      const targetOrigin = this.isLocalOrigin() ? "*" : window.location.origin;
      this.replayIframeRef.contentWindow.postMessage(message, targetOrigin);
    }
  }
  /**
   * 設置音樂和音效的啟用狀態
   */
  setMusicAndSoundEnabledToReplayIFrame(musicEnabled, soundEnabled) {
    const musicMessage = createApWebMessage("SetMusic", { enabled: musicEnabled });
    const soundMessage = createApWebMessage("SetSound", { enabled: soundEnabled });
    this.sendMessage(musicMessage);
    this.sendMessage(soundMessage);
  }
  /** 設定遊戲速度 0: 慢速, 1: 正常, 2: 快速 */
  setGameSpeed(speed) {
    const spintypemsg = createApWebMessage("SetSpinType", { speed });
    this.sendMessage(spintypemsg);
  }
  /** Spin 遊戲 */
  spin() {
    if (this.isReplayRunning()) {
      const message2 = createApWebMessage("ImmediatelyStop");
      this.sendMessage(message2);
      return;
    }
    const message = createApWebMessage("ClickSpin", { useInGameResult: true });
    this.sendMessage(message);
    this.isReplayRunning.set(true);
  }
  static \u0275fac = function HistoryReplayViewerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryReplayViewerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryReplayViewerComponent, selectors: [["history-replay-viewer"]], viewQuery: function HistoryReplayViewerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.replayIframeElement, _c03, 5);
      \u0275\u0275viewQuerySignal(ctx.replayEndComponent, ApHistoryPopupReplayEndComponent, 5);
      \u0275\u0275viewQuerySignal(ctx.bottomPanelDemo, BottomPanelDemoComponent, 5);
      \u0275\u0275viewQuerySignal(ctx.bottomPanelReplay, BottomPanelReplayComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(4);
    }
  }, inputs: { showWatchAgain: [1, "showWatchAgain"], showCopyLink: [1, "showCopyLink"], showCloseButton: [1, "showCloseButton"], showReplayEndCloseButton: [1, "showReplayEndCloseButton"], showGameLogo: [1, "showGameLogo"], showAPLogo: [1, "showAPLogo"], isReplayPanel: [1, "isReplayPanel"] }, outputs: { watchAgain: "watchAgain", copyLinkRequest: "copyLinkRequest", close: "close" }, decls: 7, vars: 5, consts: [["replayIframe", ""], [1, "fixed", "inset-0", "z-overlay", "bg-black"], ["allowfullscreen", "", "allow", "autoplay; fullscreen;clipboard-read; clipboard-write", 1, "w-full", "h-full", "border-0", 3, "load", "src"], [1, "absolute", "top-1", "left-1", 3, "showTime", "gameId"], [1, "absolute", "top-0.5", "right-1"], [1, "absolute", "top-4", "left-1/2", "z-[70]", 2, "transform", "translateX(-50%)", 3, "showIcon", "showCloseButton", "label"], [1, "absolute", "top-4", "left-1/2", "z-[70]", 2, "transform", "translateX(-50%)", 3, "enableMusicSound", "close", "showIcon", "showCloseButton", "label"], [1, "absolute", "top-4", "left-1/2", "z-[70]", 2, "transform", "translateX(-50%)", 3, "close", "showIcon", "showCloseButton", "label"], [3, "musicPressedChange", "turboStateChange", "spin", "hidden", "displayBet", "displayWin", "isGameBusy", "featureRemaining", "featureTotal", "spinButtonMode", "isTurboDisabled", "autoSpinLightingEffectEnabled"], [3, "copyLink", "musicPressedChange", "turboStateChange", "spin", "hidden", "isGameBusy", "displayCurrency", "displayBet", "displayWin", "featureRemaining", "featureTotal", "spinButtonMode", "isTurboDisabled", "autoSpinLightingEffectEnabled", "customData"], [1, "absolute", "inset-0", "z-40", "popup-overlay"], [1, "absolute", "inset-0", "z-50", 3, "watchAgain", "copyLink", "close", "showWatchAgain", "showCopyLink", "showCloseButton"]], template: function HistoryReplayViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "iframe", 2, 0);
      \u0275\u0275listener("load", function HistoryReplayViewerComponent_Template_iframe_load_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onReplayIframeLoad());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, HistoryReplayViewerComponent_Conditional_3_Template, 1, 2, "ap-ui-game-name", 3);
      \u0275\u0275conditionalCreate(4, HistoryReplayViewerComponent_Conditional_4_Template, 1, 0, "ap-ui-logo-name", 4);
      \u0275\u0275conditionalCreate(5, HistoryReplayViewerComponent_Conditional_5_Template, 2, 1);
      \u0275\u0275conditionalCreate(6, HistoryReplayViewerComponent_Conditional_6_Template, 2, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.replayIframeUrl(), \u0275\u0275sanitizeResourceUrl);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showGameLogo() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAPLogo() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingFinished() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isReplayEnd() ? 6 : -1);
    }
  }, dependencies: [CommonModule, ApHistoryPopupReplayEndComponent, BottomPanelDemoComponent, BottomPanelReplayComponent, ApUiReplayModeComponent, ApUiGameNameComponent, ApUiLogoNameComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryReplayViewerComponent, [{
    type: Component,
    args: [{ selector: "history-replay-viewer", imports: [CommonModule, ApHistoryPopupReplayEndComponent, BottomPanelDemoComponent, BottomPanelReplayComponent, ApUiReplayModeComponent, ApUiGameNameComponent, ApUiLogoNameComponent], template: '<!-- Replay iframe \u61BF\u8210\u5167 -->\n<div class="fixed inset-0 z-overlay bg-black">\n  <iframe\n    #replayIframe\n    class="w-full h-full border-0"\n    allowfullscreen\n    allow="autoplay; fullscreen;clipboard-read; clipboard-write"\n    (load)="onReplayIframeLoad()"\n    [src]="replayIframeUrl()"\n  ></iframe>\n  @if (showGameLogo()) { <ap-ui-game-name class="absolute top-1 left-1" [showTime]="false" [gameId]="gameId()"/> }\n  @if (showAPLogo()){<ap-ui-logo-name class="absolute top-0.5 right-1"/>}\n\n  <!-- Bottom Panel: demo -->\n  @if (isLoadingFinished()) {\n    @if (!isReplayPanel()) {\n      <!-- Demo -->\n      @if (isOldGame()) {\n        <!-- Old game: only show mode label -->\n        <ap-ui-replay-mode\n          [showIcon]="true"\n          [showCloseButton]="showCloseButton()"\n          [label]="getDemoModeLabel()"\n          (enableMusicSound)="onDemoMusicIconClicked()"\n          (close)="closeReplayIframe()"\n          class="absolute top-4 left-1/2 z-[70]"\n          style="transform: translateX(-50%);"\n        />\n      } @else {\n        <!-- Default: show mode label + bottom panel -->\n        <ap-ui-replay-mode\n          [showIcon]="false"\n          [showCloseButton]="showCloseButton()"\n          [label]="getDemoModeLabel()"\n          (close)="closeReplayIframe()"\n          class="absolute top-4 left-1/2 z-[70]"\n          style="transform: translateX(-50%);"\n        />\n        <bottom-panel-demo\n          [hidden]="!isShowPanel()"\n          [displayBet]="replayBet() ?? 0"\n          [displayWin]="replayWin() ?? 0"\n          [isGameBusy]="isReplayRunning()"\n          [featureRemaining]="featureModeRemaining()"\n          [featureTotal]="featureModeTotal()"\n          [spinButtonMode]="spinButtnMode()"\n          [isTurboDisabled]="isTurboDisabled()"\n          [autoSpinLightingEffectEnabled]="autoSpinLightingEffectEnabled()"\n          (musicPressedChange)="onDemoMusicPressedChange($event)"\n          (turboStateChange)="onTurboStateChange($event)"\n          (spin)="spin()"\n        />\n      }\n    } @else {\n      <!-- Replay ?\x80??-->\n      @if (isOldGame()) {\n        <ap-ui-replay-mode\n          [showIcon]="true"\n          [showCloseButton]="showCloseButton()"\n          [label]="getReplayModeLabel()"\n          (enableMusicSound)="onReplayMusicIconClicked()"\n          (close)="closeReplayIframe()"\n          class="absolute top-4 left-1/2 z-[70]"\n          style="transform: translateX(-50%);"\n        />\n      } @else {\n        <ap-ui-replay-mode\n          [showIcon]="false"\n          [showCloseButton]="showCloseButton()"\n          [label]="getReplayModeLabel()"\n          (close)="closeReplayIframe()"\n          class="absolute top-4 left-1/2 z-[70]"\n          style="transform: translateX(-50%);"\n        />\n        <!-- DisplayCurrency -->\n        <bottom-panel-replay\n          [hidden]="!isShowPanel()"\n          [isGameBusy]="isReplayRunning()"\n          [displayCurrency]="replayCurrencySymbol()"\n          [displayBet]="replayBet() ?? 0"\n          [displayWin]="replayWin() ?? 0 "\n          [featureRemaining]="featureModeRemaining()"\n          [featureTotal]="featureModeTotal()"\n          [spinButtonMode]="spinButtnMode()"\n          [isTurboDisabled]="isTurboDisabled()"\n          [autoSpinLightingEffectEnabled]="autoSpinLightingEffectEnabled()"\n          [customData]="customData()"\n          (copyLink)="onCopyLink()"\n          (musicPressedChange)="onReplayMusicPressedChange($event)"\n          (turboStateChange)="onTurboStateChange($event)"\n          (spin)="spin()"\n        />\n      }\n    }\n  }\n\n  <!-- Replay end popup must cover replay controls and bottom panel -->\n  @if (isReplayEnd()) {\n    <div class="absolute inset-0 z-40 popup-overlay"></div>\n    <ap-history-popup-replay-end\n      class="absolute inset-0 z-50"\n      [showWatchAgain]="showWatchAgain()"\n      [showCopyLink]="isReplayPanel()"\n      [showCloseButton]="showReplayEndCloseButton()"\n      (watchAgain)="onWatchAgain()"\n      (copyLink)="onCopyLink()"\n      (close)="closeReplayIframe()"\n    />\n  }\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryReplayViewerComponent, { className: "HistoryReplayViewerComponent", filePath: "src/app/pages/history-replay-viewer/history-replay-viewer.component.ts", lineNumber: 27 });
})();

export {
  HistoryReplayService,
  LAYOUT_CONFIG,
  BottomPanelBase,
  ApSpinButtonComponent,
  TopStatusBarComponent,
  ApUiGameNameComponent,
  ApUiLogoNameComponent,
  HistoryReplayViewerComponent
};
//# sourceMappingURL=chunk-GORS6YCV.js.map
