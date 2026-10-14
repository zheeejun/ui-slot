import {
  HistoryReplayService,
  HistoryReplayViewerComponent
} from "./chunk-GORS6YCV.js";
import "./chunk-6H5XA62D.js";
import {
  NavigatorShareService
} from "./chunk-DODGKEVZ.js";
import "./chunk-XYMPOXOA.js";
import "./chunk-COCIR4RJ.js";
import "./chunk-JHJKX6RD.js";
import "./chunk-U7TK2FIU.js";
import "./chunk-FCZ4RVMP.js";
import "./chunk-MQEPEO5W.js";
import "./chunk-5GFZDTRR.js";
import {
  ActivatedRoute
} from "./chunk-YG42UXQC.js";
import "./chunk-OW6577YR.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  ApWebReplaySessionKey
} from "./chunk-MLWU5HFS.js";
import "./chunk-MKS37EB3.js";
import "./chunk-VX4L3GZI.js";
import "./chunk-XOFMPJ7U.js";
import "./chunk-TLQLKLDD.js";
import {
  LoggerService
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService,
  useInGameUIlist
} from "./chunk-54ITVL2G.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  ViewChild,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵviewQuery
} from "./chunk-QGU3BS3L.js";

// src/app/layouts/layout-replay/layout-replay.component.ts
function LayoutReplayComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-replay-viewer", 1);
    \u0275\u0275listener("copyLinkRequest", function LayoutReplayComponent_Conditional_0_Template_history_replay_viewer_copyLinkRequest_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCopyLinkRequest());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("showCloseButton", false)("showWatchAgain", true)("showReplayEndCloseButton", false)("isReplayPanel", ctx_r1.isReplayPanel());
  }
}
var LayoutReplayComponent = class _LayoutReplayComponent {
  session = inject(ClientSessionService);
  route = inject(ActivatedRoute);
  logger = inject(LoggerService);
  replay = inject(HistoryReplayService);
  i18n = inject(AppI18nService);
  nav = inject(NavigatorShareService);
  replayViewerComponent;
  // 根據 URL panelmode 參數決定是否顯示 replay panel (含 copy link)
  isReplayPanel = signal(false);
  showReplayViewer = computed(() => this.replay.showReplayViewer());
  constructor() {
    effect(() => {
      const gameId = this.session.gameId ?? "";
      const gameName = this.i18n.instant(gameId);
      if (gameName && gameName !== gameId) {
        document.title = gameName;
      }
    });
  }
  ngOnInit() {
    sessionStorage.removeItem(ApWebReplaySessionKey);
    const params = this.route.snapshot.queryParamMap;
    const panelMode = params.get("panelmode");
    if (panelMode === "replay") {
      this.isReplayPanel.set(true);
    } else {
      this.isReplayPanel.set(false);
    }
  }
  ngAfterViewInit() {
    const params = this.route.snapshot.queryParamMap;
    const gameId = params.get("gameId");
    if (!gameId) {
      this.logger.error("[LayoutReplay] Missing required query param: gameId");
      return;
    }
    const urlParams = new URLSearchParams();
    for (const key of params.keys) {
      if (key !== "gameId" && key !== "panelmode") {
        urlParams.set(key, params.get(key) ?? "");
      }
    }
    let replayUrl;
    if (this.session.remoteHost) {
      replayUrl = `${this.session.remoteHost}?${urlParams.toString()}`;
    } else {
      replayUrl = `${window.location.origin}/${gameId}/index.html?${urlParams.toString()}`;
    }
    const isOldGame = useInGameUIlist.includes(gameId || "");
    this.replay.openReplayViewer(replayUrl, isOldGame);
  }
  onCopyLinkRequest() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const copylink = url.searchParams.get("copylink");
    if (!copylink) {
      this.logger.error("copylink parameter not found in URL");
      return;
    }
    this.nav.copyToClipboard(copylink || "").then(() => {
      this.replayViewerComponent?.showCopyLinkToast();
    });
  }
  static \u0275fac = function LayoutReplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutReplayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutReplayComponent, selectors: [["layout-replay"]], viewQuery: function LayoutReplayComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(HistoryReplayViewerComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.replayViewerComponent = _t.first);
    }
  }, decls: 1, vars: 1, consts: [[1, "absolute", "inset-0", 3, "showCloseButton", "showWatchAgain", "showReplayEndCloseButton", "isReplayPanel"], [1, "absolute", "inset-0", 3, "copyLinkRequest", "showCloseButton", "showWatchAgain", "showReplayEndCloseButton", "isReplayPanel"]], template: function LayoutReplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, LayoutReplayComponent_Conditional_0_Template, 1, 4, "history-replay-viewer", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showReplayViewer() ? 0 : -1);
    }
  }, dependencies: [CommonModule, HistoryReplayViewerComponent], styles: ["\n\n/*# sourceMappingURL=layout-replay.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutReplayComponent, [{
    type: Component,
    args: [{ selector: "layout-replay", imports: [CommonModule, HistoryReplayViewerComponent], template: '@if (showReplayViewer()) {\n  <history-replay-viewer class="absolute inset-0"\n    [showCloseButton]="false"\n    [showWatchAgain]="true"\n    [showReplayEndCloseButton]="false"\n    [isReplayPanel]="isReplayPanel()"\n    (copyLinkRequest)="onCopyLinkRequest()"\n  />  \n}\n\n\n', styles: ["/* src/app/layouts/layout-replay/layout-replay.component.css */\n/*# sourceMappingURL=layout-replay.component.css.map */\n"] }]
  }], () => [], { replayViewerComponent: [{
    type: ViewChild,
    args: [HistoryReplayViewerComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutReplayComponent, { className: "LayoutReplayComponent", filePath: "src/app/layouts/layout-replay/layout-replay.component.ts", lineNumber: 33 });
})();
export {
  LayoutReplayComponent
};
//# sourceMappingURL=chunk-T6SHPP6S.js.map
