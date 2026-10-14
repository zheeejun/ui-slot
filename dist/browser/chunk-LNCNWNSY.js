import {
  EventCenterComponent,
  TrnAllComponent
} from "./chunk-SRCP76W3.js";
import {
  FaviconCtrlService
} from "./chunk-3QQPW4OC.js";
import "./chunk-QOKWLLEK.js";
import "./chunk-7RUHSQL3.js";
import {
  CampaignFacadeService,
  EventCenterCtrlService
} from "./chunk-7XXHR6BD.js";
import "./chunk-USS23RIW.js";
import {
  TrnCtrlService
} from "./chunk-KCYX4D7Q.js";
import "./chunk-47SOIXJB.js";
import "./chunk-CYEAZPJ5.js";
import {
  GACollectorService
} from "./chunk-JGNZAH3T.js";
import {
  ApUiGameNameComponent,
  ApUiLogoNameComponent
} from "./chunk-GORS6YCV.js";
import "./chunk-6H5XA62D.js";
import {
  GameIframeComponent
} from "./chunk-BTFWV2DH.js";
import {
  NavigatorShareService
} from "./chunk-DODGKEVZ.js";
import "./chunk-MMAYEOJZ.js";
import "./chunk-XYMPOXOA.js";
import {
  RouterCtrlService
} from "./chunk-57FVUZ33.js";
import "./chunk-3FMKOJKK.js";
import "./chunk-COCIR4RJ.js";
import "./chunk-7GQKM4M3.js";
import "./chunk-HUKCMLYY.js";
import "./chunk-JHJKX6RD.js";
import {
  BaseSymbolTextureService
} from "./chunk-AYE6H5VR.js";
import "./chunk-U7TK2FIU.js";
import "./chunk-FCZ4RVMP.js";
import "./chunk-MQEPEO5W.js";
import {
  PlayerWalletService
} from "./chunk-5GFZDTRR.js";
import "./chunk-YG42UXQC.js";
import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-OW6577YR.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import "./chunk-MLWU5HFS.js";
import "./chunk-MKS37EB3.js";
import {
  ApButtonComponent
} from "./chunk-VX4L3GZI.js";
import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  AppInterfaceService
} from "./chunk-TLQLKLDD.js";
import "./chunk-CFCPEQLG.js";
import {
  ClientSessionService,
  environment
} from "./chunk-54ITVL2G.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  __async,
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/app/components/ap-history-replay-top-bar/ap-history-replay-top-bar.component.ts
var ApHistoryReplayTopBarComponent = class _ApHistoryReplayTopBarComponent {
  /** 是否顯示畫面 */
  onClose = output();
  detailItem = input(null);
  share = output();
  replay = output();
  detail = output();
  nav = inject(NavigatorShareService);
  text = input("Quick Race Mode On: Bet x");
  multiplier = input(1.2);
  copyTransaction(item, event) {
    return __async(this, null, function* () {
      event?.stopPropagation();
      try {
        yield this.nav.copyToClipboard(item.transaction);
        alert(`${item.transaction} copied to clipboard!`);
      } catch (err) {
        alert("Failed to copy transaction to clipboard");
      }
    });
  }
  static \u0275fac = function ApHistoryReplayTopBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApHistoryReplayTopBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApHistoryReplayTopBarComponent, selectors: [["ap-history-replay-top-bar"]], inputs: { detailItem: [1, "detailItem"], text: [1, "text"], multiplier: [1, "multiplier"] }, outputs: { onClose: "onClose", share: "share", replay: "replay", detail: "detail" }, decls: 23, vars: 17, consts: [[1, "w-full", "py-2", "sm:px-8", "px-4", "grid", "grid-cols-[1fr_auto_1fr]", "items-center", "select-none", "bg-zinc-950/75", "transition-all", "border-bottom-zinc"], [1, "flex", "gap-2", "items-center", "cursor-pointer", "justify-self-start"], [3, "accentColor", "size", "icon", "variant"], [1, "text-white", "sm:block"], [1, "flex", "space-x-4"], [1, "flex", "items-center", "gap-1", "justify-self-center", "text-center"], ["name", "document-text", 1, "info-icon"], [1, "font-medium", "text-md", "text-left"], [1, "flex", "space-x-4", "justify-self-end"], [1, "flex", "gap-2", "items-center", "cursor-pointer"], [3, "icon", "variant", "size", "accentColor"], [1, "hidden", "sm:block"], [3, "click", "icon", "variant", "size", "accentColor"]], template: function ApHistoryReplayTopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "ap-button", 2);
      \u0275\u0275elementStart(3, "h4", 3);
      \u0275\u0275text(4, "Back to Game");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "ap-icon", 6);
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9);
      \u0275\u0275element(12, "ap-button", 10);
      \u0275\u0275elementStart(13, "h4", 11);
      \u0275\u0275text(14, "Replay");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275element(16, "ap-button", 10);
      \u0275\u0275elementStart(17, "h4", 11);
      \u0275\u0275text(18, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 9)(20, "ap-button", 12);
      \u0275\u0275listener("click", function ApHistoryReplayTopBarComponent_Template_ap_button_click_20_listener($event) {
        return ctx.detailItem() && ctx.copyTransaction(ctx.detailItem(), $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h4", 11);
      \u0275\u0275text(22, "Copy");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", "white")("size", "x-small")("icon", "chevron-left")("variant", "content-rounded");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx.detailItem()) == null ? null : tmp_4_0.transaction) || "Transactions", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("icon", "replay")("variant", "content-rounded")("size", "x-small")("accentColor", "zinc");
      \u0275\u0275advance(4);
      \u0275\u0275property("icon", "share")("variant", "content-rounded")("size", "x-small")("accentColor", "zinc");
      \u0275\u0275advance(4);
      \u0275\u0275property("icon", "copy")("variant", "content-rounded")("size", "x-small")("accentColor", "zinc");
    }
  }, dependencies: [CommonModule, ApButtonComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApHistoryReplayTopBarComponent, [{
    type: Component,
    args: [{ selector: "ap-history-replay-top-bar", imports: [CommonModule, ApButtonComponent, ApIconComponent], template: `<div
  class="w-full py-2 sm:px-8 px-4 grid grid-cols-[1fr_auto_1fr] items-center select-none bg-zinc-950/75 transition-all border-bottom-zinc"
>
  <!-- Back to Game -->
  <div class="flex gap-2 items-center cursor-pointer justify-self-start">
    <ap-button
      [accentColor]="'white'"
      [size]="'x-small'"
      [icon]="'chevron-left'"
      [variant]="'content-rounded'"
    />
    <h4 class="text-white sm:block">Back to Game</h4>
  </div>

  <!-- Transaction Details -->
  <div class="flex space-x-4">
    <div
      class="flex items-center gap-1 justify-self-center text-center"
    >
      <ap-icon name="document-text" class="info-icon" />
      <div class="font-medium text-md text-left">
        {{ detailItem()?.transaction || "Transactions" }}
      </div>
    </div>

    <!--  Action Buttons -->
    <div class="flex space-x-4 justify-self-end">
      <div class="flex gap-2 items-center cursor-pointer">
        <ap-button
          [icon]="'replay'"
          [variant]="'content-rounded'"
          [size]="'x-small'"
          [accentColor]="'zinc'"
        />
        <h4 class="hidden sm:block">Replay</h4>
      </div>
      <div class="flex gap-2 items-center cursor-pointer">
        <ap-button
          [icon]="'share'"
          [variant]="'content-rounded'"
          [size]="'x-small'"
          [accentColor]="'zinc'"
        />
        <h4 class="hidden sm:block">Share</h4>
      </div>
      <div class="flex gap-2 items-center cursor-pointer">
        <ap-button
          (click)="detailItem() && copyTransaction(detailItem()!, $event)"
          [icon]="'copy'"
          [variant]="'content-rounded'"
          [size]="'x-small'"
          [accentColor]="'zinc'"
        />
        <h4 class="hidden sm:block">Copy</h4>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApHistoryReplayTopBarComponent, { className: "ApHistoryReplayTopBarComponent", filePath: "src/app/components/ap-history-replay-top-bar/ap-history-replay-top-bar.component.ts", lineNumber: 13 });
})();

// src/app/layouts/layout-bridge/layout-bridge.component.ts
function LayoutBridgeComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-history-replay-top-bar", 4);
  }
}
function LayoutBridgeComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "trn-all", 0);
  }
}
function LayoutBridgeComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-logo-name", 5);
  }
}
function LayoutBridgeComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-game-name", 6);
  }
}
function LayoutBridgeComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-center", 7);
  }
}
function LayoutBridgeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, LayoutBridgeComponent_Conditional_2_Conditional_1_Template, 1, 0, "ap-history-replay-top-bar", 4);
    \u0275\u0275conditionalCreate(2, LayoutBridgeComponent_Conditional_2_Conditional_2_Template, 1, 0, "trn-all", 0);
    \u0275\u0275conditionalCreate(3, LayoutBridgeComponent_Conditional_2_Conditional_3_Template, 1, 0, "ap-ui-logo-name", 5);
    \u0275\u0275conditionalCreate(4, LayoutBridgeComponent_Conditional_2_Conditional_4_Template, 1, 0, "ap-ui-game-name", 6);
    \u0275\u0275conditionalCreate(5, LayoutBridgeComponent_Conditional_2_Conditional_5_Template, 1, 0, "event-center", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hidden", ctx_r0.hideAll());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showHistoryReplayTopBar() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showTournament() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showAPLogo() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showGameLogo() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showEventCenter() ? 5 : -1);
  }
}
var LayoutBridgeComponent = class _LayoutBridgeComponent {
  i18n = inject(AppI18nService);
  session = inject(ClientSessionService);
  favicon = inject(FaviconCtrlService);
  game = inject(GameIframeCtrlService);
  wallet = inject(PlayerWalletService);
  api = inject(AppInterfaceService);
  trn = inject(TrnCtrlService);
  campaign = inject(CampaignFacadeService);
  eventCenter = inject(EventCenterCtrlService);
  routerCtrl = inject(RouterCtrlService);
  navigator = inject(NavigatorShareService);
  gaCollector = inject(GACollectorService);
  symbolTexture = inject(BaseSymbolTextureService);
  /** 顯示所有介面, 給Loading Finished使用的 */
  showAll = signal(false);
  /** 隱藏所有遊戲iframe之外的物件, 是用hidden, 不是用@if */
  hideAll = signal(false);
  /** 顯示活動中心 */
  showEventCenter = computed(() => this.eventCenter.isVisible());
  /** 顯示Tournament浮動介面 */
  showTournament = computed(() => {
    return this.trn.enabled();
  });
  /** 顯示AP Logo */
  showAPLogo = signal(false);
  /** 顯示Game Logo */
  showGameLogo = signal(true);
  /** 顯示歷史回放頂部欄 */
  showHistoryReplayTopBar = signal(false);
  constructor() {
    effect(() => {
      const title = this.i18n.enGameName();
      untracked(() => {
        this.navigator.setPageTitle(title);
      });
    });
    effect(() => {
      const customGameKey = this.game.customGameKey();
      untracked(() => {
        if (customGameKey) {
          this.symbolTexture.assignCustomGameKey(customGameKey);
          this.i18n.assignCustomGameKey(customGameKey);
        }
      });
    });
    this.game.customSetting$.subscribe((message) => {
      this.favicon.setByCustomKey(message.customData?.customGamekey ?? null);
    });
    effect(() => {
      const data = this.wallet.betData();
      untracked(() => {
        this.game.send(createApWebMessage("UpdateBetData", data));
      });
    });
  }
  ngOnInit() {
    if (environment.production && !this.session.isUseInGameUI) {
      this.routerCtrl.navigateRelative("");
      return;
    }
    this.gaCollector.loadGtagScript();
    this.api.setup(this.session.setting);
    this.api.connect();
    this.game.buyFeature$.subscribe(this.onGameBuyFeature.bind(this));
    this.game.OpenPromo$.subscribe(this.onGameOpenPromo.bind(this));
    this.game.loadingFinished$.subscribe(this.onGameLoadingFinished.bind(this));
    this.game.GameMessageBox$.subscribe(this.onGameMessageBox.bind(this));
    this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
    this.game.betChanged$.subscribe(this.onChangeBet.bind(this));
  }
  ngAfterViewInit() {
  }
  /** 偵測遊戲讀取完成的時候 */
  onGameLoadingFinished() {
    this.showAll.set(true);
  }
  /** 遊戲點擊Open Promo */
  onGameOpenPromo() {
    this.eventCenter.open("campaign");
  }
  /** 遊戲點擊buy Feature */
  onGameBuyFeature() {
    this.eventCenter.open("buy-feature");
  }
  /** 遊戲顯示訊息框 */
  onGameMessageBox() {
    this.eventCenter.close();
  }
  /** 偵測遊戲準備好可以開始Spin的時候 */
  onReadyForSpin() {
    if (this.wallet.isBuyFeature()) {
      this.wallet.updateSpinMode(null);
    }
    this.wallet.updateGameDuration();
  }
  /** 遊戲更變下注 */
  onChangeBet(content) {
    this.wallet.updateBet(content.bet);
  }
  static \u0275fac = function LayoutBridgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutBridgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutBridgeComponent, selectors: [["layout-bridge"]], decls: 3, vars: 1, consts: [[1, "absolute"], ["uiMode", "ap-bridge", 1, "absolute", "inset-0"], [1, "contents", 3, "hidden"], [1, "contents"], [1, "absolute", "top-0", "left-0", "right-0", "z-50"], [1, "absolute", "top-1", "right-1"], [1, "absolute", "top-1", "left-1"], [1, "absolute", "inset-0", "animate-fade", "animate-duration-300"]], template: function LayoutBridgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ap-loading-overlay", 0)(1, "game-iframe", 1);
      \u0275\u0275conditionalCreate(2, LayoutBridgeComponent_Conditional_2_Template, 6, 7, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showAll() ? 2 : -1);
    }
  }, dependencies: [EventCenterComponent, TrnAllComponent, ApHistoryReplayTopBarComponent, GameIframeComponent, ApLoadingOverlayComponent, ApUiLogoNameComponent, ApUiGameNameComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=layout-bridge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutBridgeComponent, [{
    type: Component,
    args: [{ selector: "layout-bridge", imports: [EventCenterComponent, TrnAllComponent, ApHistoryReplayTopBarComponent, GameIframeComponent, ApLoadingOverlayComponent, ApUiLogoNameComponent, ApUiGameNameComponent], template: '\n<ap-loading-overlay class="absolute"/>\n<game-iframe class="absolute inset-0" uiMode="ap-bridge"/>\n@if (showAll()) {\n  <div class="contents" [class.hidden]="hideAll()">\n    <!-- Replay\u555F\u52D5\u63D0\u793A -->\n    @if (showHistoryReplayTopBar()) { <ap-history-replay-top-bar class="absolute top-0 left-0 right-0 z-50" /> }\n    <!-- Tournament \u76F8\u95DC-->\n    @if (showTournament()) { <trn-all class="absolute"  /> }\n    @if (showAPLogo()){<ap-ui-logo-name class="absolute top-1 right-1" />}\n    @if (showGameLogo()){<ap-ui-game-name class="absolute top-1 left-1" />}\n    <!-- Event Center -->\n    @if (showEventCenter()) {\n      <event-center class="absolute inset-0 animate-fade animate-duration-300"/>\n    }\n  </div>\n}\n', styles: ["/* src/app/layouts/layout-bridge/layout-bridge.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=layout-bridge.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutBridgeComponent, { className: "LayoutBridgeComponent", filePath: "src/app/layouts/layout-bridge/layout-bridge.component.ts", lineNumber: 36 });
})();
export {
  LayoutBridgeComponent
};
//# sourceMappingURL=chunk-LNCNWNSY.js.map
