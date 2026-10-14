import {
  CampaignPopupComponent,
  EventCenterComponent,
  TrnAllComponent
} from "./chunk-7BZ46X77.js";
import {
  FaviconCtrlService
} from "./chunk-V3SIYJ3E.js";
import "./chunk-IT3VPYOU.js";
import "./chunk-7RUHSQL3.js";
import {
  CampaignFacadeService,
  EventCenterCtrlService
} from "./chunk-OXRM73HY.js";
import "./chunk-USS23RIW.js";
import {
  TrnCtrlService
} from "./chunk-T55X5QHE.js";
import "./chunk-47SOIXJB.js";
import "./chunk-H6P7MZH6.js";
import {
  GACollectorService,
  InfoComponent
} from "./chunk-2ESHPC34.js";
import {
  ApUiGameNameComponent,
  ApUiLogoNameComponent
} from "./chunk-PVVJIEXS.js";
import "./chunk-BMMGT6QH.js";
import {
  GameIframeComponent
} from "./chunk-WUFWPVNU.js";
import {
  NavigatorShareService
} from "./chunk-QV3OQAJE.js";
import "./chunk-7JE6XNVC.js";
import "./chunk-QJZUQVJ4.js";
import {
  RouterCtrlService
} from "./chunk-57FVUZ33.js";
import "./chunk-N3TTLE6J.js";
import "./chunk-COCIR4RJ.js";
import "./chunk-OW2FH27N.js";
import "./chunk-N4LJSHXE.js";
import "./chunk-JHJKX6RD.js";
import {
  BaseSymbolTextureService
} from "./chunk-4OJJGH2R.js";
import {
  MoneyTextPipe
} from "./chunk-6XO7DG7K.js";
import "./chunk-FCZ4RVMP.js";
import "./chunk-NVHIFZTE.js";
import {
  PlayerWalletService
} from "./chunk-HNY47POZ.js";
import "./chunk-YG42UXQC.js";
import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-NMZ7HZYU.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import "./chunk-TBKOLJZS.js";
import "./chunk-MKS37EB3.js";
import {
  ApButtonComponent
} from "./chunk-3HIHH7J6.js";
import {
  ApIconComponent
} from "./chunk-YL37OG34.js";
import {
  AppInterfaceService
} from "./chunk-Q3NF4QZ2.js";
import "./chunk-TIGXKRQH.js";
import {
  ClientSessionService,
  environment
} from "./chunk-B2M5HODU.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  ElementRef,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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

// src/app/components/ap-remaining-turnover/ap-remaining-turnover.component.ts
var ApRemainingTurnoverComponent = class _ApRemainingTurnoverComponent {
  i18n = inject(AppI18nService);
  session = inject(ClientSessionService);
  iconSize = signal("3cqw");
  endTime = input(0);
  label = this.i18n.computed("promo_turnover_left", "Remaining turnover");
  turnover = input(0);
  endTimeString = computed(() => {
    const endTime = this.endTime();
    if (!endTime) {
      return "";
    }
    const date = new Date(endTime);
    return date.toLocaleString(this.session.locale);
  });
  static \u0275fac = function ApRemainingTurnoverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApRemainingTurnoverComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApRemainingTurnoverComponent, selectors: [["ap-remaining-turnover"]], inputs: { endTime: [1, "endTime"], turnover: [1, "turnover"] }, decls: 9, vars: 7, consts: [[1, "@container", "w-full"], [1, "flex", "w-full", "items-center", "justify-between", "gap-[2cqw]", "px-[2cqw]", "py-[0.3cqw]", "text-zinc-300", "bg-black/50", "text-[2.5cqw]"], [1, "whitespace-nowrap", "leading-tight"], [1, "flex", "items-center", "space-x-1"], ["name", "clock"]], template: function ApRemainingTurnoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "moneyText");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275element(6, "ap-icon", 4);
      \u0275\u0275elementStart(7, "div", 2);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" ", ctx.label(), " ", \u0275\u0275pipeBind1(4, 5, ctx.turnover()), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("height", ctx.iconSize());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.endTimeString());
    }
  }, dependencies: [ApIconComponent, MoneyTextPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApRemainingTurnoverComponent, [{
    type: Component,
    args: [{ selector: "ap-remaining-turnover", standalone: true, imports: [ApIconComponent, MoneyTextPipe], template: '<!-- @container\uFF1A\u6587\u5B57\u5927\u5C0F\u4EE5\u7236\u5C64\u5BEC\u5EA6(cqw)\u7B49\u6BD4\u7E2E\u653E-->\n<div class="@container w-full">\n  <div\n    class="flex w-full items-center justify-between gap-[2cqw] px-[2cqw] py-[0.3cqw] text-zinc-300 bg-black/50 text-[2.5cqw]"\n  >\n    <div class="whitespace-nowrap leading-tight">\n      {{ label() }} {{ turnover() | moneyText }}\n    </div>\n    <div class="flex items-center space-x-1">\n      <ap-icon name="clock" [style.height]="iconSize()" />\n      <div class="whitespace-nowrap leading-tight">{{ endTimeString() }}</div>\n    </div>\n  </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApRemainingTurnoverComponent, { className: "ApRemainingTurnoverComponent", filePath: "src/app/components/ap-remaining-turnover/ap-remaining-turnover.component.ts", lineNumber: 13 });
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
    \u0275\u0275element(0, "ap-remaining-turnover", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("bottom", ctx_r0.gameBottom(), "px")("width", ctx_r0.gameWidth(), "px");
    \u0275\u0275property("turnover", ctx_r0.remainingTurnover())("endTime", ctx_r0.remainingEndTime());
  }
}
function LayoutBridgeComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-center", 8);
  }
}
function LayoutBridgeComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "page-info", 12);
    \u0275\u0275listener("close", function LayoutBridgeComponent_Conditional_2_Conditional_7_Template_page_info_close_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showInfo.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("hideNoteItem2", true);
  }
}
function LayoutBridgeComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "campaign-popup", 10);
  }
}
function LayoutBridgeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, LayoutBridgeComponent_Conditional_2_Conditional_1_Template, 1, 0, "ap-history-replay-top-bar", 4);
    \u0275\u0275conditionalCreate(2, LayoutBridgeComponent_Conditional_2_Conditional_2_Template, 1, 0, "trn-all", 0);
    \u0275\u0275conditionalCreate(3, LayoutBridgeComponent_Conditional_2_Conditional_3_Template, 1, 0, "ap-ui-logo-name", 5);
    \u0275\u0275conditionalCreate(4, LayoutBridgeComponent_Conditional_2_Conditional_4_Template, 1, 0, "ap-ui-game-name", 6);
    \u0275\u0275conditionalCreate(5, LayoutBridgeComponent_Conditional_2_Conditional_5_Template, 1, 6, "ap-remaining-turnover", 7);
    \u0275\u0275conditionalCreate(6, LayoutBridgeComponent_Conditional_2_Conditional_6_Template, 1, 0, "event-center", 8);
    \u0275\u0275conditionalCreate(7, LayoutBridgeComponent_Conditional_2_Conditional_7_Template, 1, 1, "page-info", 9);
    \u0275\u0275conditionalCreate(8, LayoutBridgeComponent_Conditional_2_Conditional_8_Template, 1, 0, "campaign-popup", 10);
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
    \u0275\u0275conditional(ctx_r0.showRemainingTurnoverPanel() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showEventCenter() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showInfo() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showLatestCampaign() ? 8 : -1);
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
  /** 顯示Info頁面, 由遊戲傳送OpenInfo開啟 */
  showInfo = signal(false);
  /** 版面高度，透過 ResizeObserver 偵測 host 元素高度變化 */
  elRef = inject(ElementRef);
  layoutHeight = signal(0);
  layoutWidth = signal(0);
  resizeObserver = null;
  /** Remaining Turnover 寬度，依 9:16 遊戲比例換算，且不超過版面寬度（不超出遊戲範圍） */
  gameWidth = computed(() => Math.min(this.layoutWidth(), this.layoutHeight() * 9 / 16));
  /** 遊戲畫面（9:16 置中）下緣距離版面底部的距離，讓 Remaining Turnover 貼在遊戲最下方而非螢幕最下方 */
  gameBottom = computed(() => Math.max(0, (this.layoutHeight() - this.gameWidth() * 16 / 9) / 2));
  showLatestCampaign = computed(() => this.session.isLatestCampaign);
  /** 顯示showRemainingTurnoverPanel */
  showRemainingTurnoverPanel = computed(() => this.campaign.isFreeBonusRunning());
  remainingTurnover = computed(() => this.campaign.currentCampaign()?.progressRemaining || 0);
  remainingEndTime = computed(() => this.campaign.currentCampaign()?.endTime || 0);
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
    effect(() => {
      this.wallet.campaignId();
      untracked(() => {
        this.updateDisplayData();
      });
    });
    this.game.readyForSpin$.subscribe(() => {
      this.updateDisplayData();
    });
    this.game.selectCampaign$.subscribe(this.onGameSelectCampaign.bind(this));
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
    this.game.openInfo$.subscribe(this.onGameOpenInfo.bind(this));
    this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
    this.game.betChanged$.subscribe(this.onChangeBet.bind(this));
    this.game.betModeChanged$.subscribe(this.onBetModeChanged.bind(this));
  }
  ngAfterViewInit() {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.layoutHeight.set(entry.contentRect.height);
        this.layoutWidth.set(entry.contentRect.width);
      }
    });
    this.resizeObserver.observe(this.elRef.nativeElement);
  }
  ngOnDestroy() {
    this.resizeObserver?.disconnect();
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
  /** 遊戲點擊Open Info */
  onGameOpenInfo() {
    this.showInfo.set(true);
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
  /**
   * 更新遊戲顯示的資料，包括玩家餘額和免費旋轉次數
   */
  updateDisplayData() {
    const displayData = {
      balance: this.wallet.balance()
    };
    if (this.campaign.currentCampaign()?.type === "freeSpins") {
      displayData.freeSpinCount = {
        total: this.campaign.currentCampaign()?.progressTotal || 0,
        remain: this.campaign.currentCampaign()?.progressRemaining || 0
      };
    }
    this.game.send(createApWebMessage("UpdateDisplayData", { displayData }));
  }
  /** 遊戲端選擇活動 */
  onGameSelectCampaign(content) {
    this.campaign.setCurrentId(content.campaignId);
  }
  /** 偵測遊戲更變下注模式 */
  onBetModeChanged(content) {
    this.wallet.updateSpinMode(content.modeName);
  }
  static \u0275fac = function LayoutBridgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutBridgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutBridgeComponent, selectors: [["layout-bridge"]], decls: 3, vars: 1, consts: [[1, "absolute"], ["uiMode", "ap-bridge", 1, "absolute", "inset-0"], [1, "contents", 3, "hidden"], [1, "contents"], [1, "absolute", "top-0", "left-0", "right-0", "z-50"], [1, "absolute", "top-1", "right-1"], [1, "absolute", "top-1", "left-1"], [1, "absolute", "left-1/2", "-translate-x-1/2", 3, "bottom", "width", "turnover", "endTime"], [1, "absolute", "inset-0", "animate-fade", "animate-duration-300"], [1, "absolute", "inset-0", 3, "hideNoteItem2"], [1, "absolute", "top-0", "left-0"], [1, "absolute", "left-1/2", "-translate-x-1/2", 3, "turnover", "endTime"], [1, "absolute", "inset-0", 3, "close", "hideNoteItem2"]], template: function LayoutBridgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ap-loading-overlay", 0)(1, "game-iframe", 1);
      \u0275\u0275conditionalCreate(2, LayoutBridgeComponent_Conditional_2_Template, 9, 10, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showAll() ? 2 : -1);
    }
  }, dependencies: [EventCenterComponent, TrnAllComponent, ApHistoryReplayTopBarComponent, GameIframeComponent, ApLoadingOverlayComponent, ApUiLogoNameComponent, ApUiGameNameComponent, ApRemainingTurnoverComponent, CampaignPopupComponent, InfoComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=layout-bridge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutBridgeComponent, [{
    type: Component,
    args: [{ selector: "layout-bridge", imports: [EventCenterComponent, TrnAllComponent, ApHistoryReplayTopBarComponent, GameIframeComponent, ApLoadingOverlayComponent, ApUiLogoNameComponent, ApUiGameNameComponent, ApRemainingTurnoverComponent, CampaignPopupComponent, InfoComponent], template: '\n<ap-loading-overlay class="absolute"/>\n<game-iframe class="absolute inset-0" uiMode="ap-bridge"/>\n@if (showAll()) {\n  <div class="contents" [class.hidden]="hideAll()">\n    <!-- Replay\u555F\u52D5\u63D0\u793A -->\n    @if (showHistoryReplayTopBar()) { <ap-history-replay-top-bar class="absolute top-0 left-0 right-0 z-50" /> }\n    <!-- Tournament \u76F8\u95DC-->\n    @if (showTournament()) { <trn-all class="absolute"  /> }\n    @if (showAPLogo()){<ap-ui-logo-name class="absolute top-1 right-1" />}\n    @if (showGameLogo()){<ap-ui-game-name class="absolute top-1 left-1" />}\n    @if(showRemainingTurnoverPanel()) {\n      <ap-remaining-turnover class="absolute left-1/2 -translate-x-1/2" [style.bottom.px]="gameBottom()" [style.width.px]="gameWidth()"\n        [turnover]="remainingTurnover()"\n        [endTime]="remainingEndTime()"\n      />\n    }\n    <!-- Event Center -->\n    @if (showEventCenter()) {\n      <event-center class="absolute inset-0 animate-fade animate-duration-300"/>\n    }\n    @if (showInfo()) {\n      <page-info class="absolute inset-0" (close)="showInfo.set(false)" [hideNoteItem2]="true" />\n    }\n    @if (showLatestCampaign()) { <campaign-popup class="absolute top-0 left-0" /> }\n  </div>\n}\n', styles: ["/* src/app/layouts/layout-bridge/layout-bridge.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=layout-bridge.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutBridgeComponent, { className: "LayoutBridgeComponent", filePath: "src/app/layouts/layout-bridge/layout-bridge.component.ts", lineNumber: 40 });
})();
export {
  LayoutBridgeComponent
};
//# sourceMappingURL=chunk-XO7MKVIF.js.map
