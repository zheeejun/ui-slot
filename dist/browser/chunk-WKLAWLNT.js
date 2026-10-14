import {
  HistoryListOGComponent,
  InfoOgComponent,
  OgFairnessComponent,
  OgPanelComponent,
  OgWalletService
} from "./chunk-W557QOZY.js";
import "./chunk-BN2VWTMK.js";
import {
  ApMessageComponent
} from "./chunk-JSDRLKGF.js";
import "./chunk-74H6U7EF.js";
import {
  FaviconCtrlService
} from "./chunk-V3SIYJ3E.js";
import "./chunk-47SOIXJB.js";
import "./chunk-H6P7MZH6.js";
import {
  ApUiDeviceRotationComponent
} from "./chunk-ZQCCMO4X.js";
import "./chunk-TPJP2HS2.js";
import "./chunk-W2PA37WH.js";
import "./chunk-X6GBURL3.js";
import "./chunk-5MA7HBPU.js";
import "./chunk-5KYQQMTR.js";
import {
  ApUiVersionComponent
} from "./chunk-BMMGT6QH.js";
import {
  GameIframeComponent
} from "./chunk-WUFWPVNU.js";
import {
  NavigatorShareService
} from "./chunk-QV3OQAJE.js";
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
import {
  SoundService
} from "./chunk-FCZ4RVMP.js";
import "./chunk-YG42UXQC.js";
import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-NMZ7HZYU.js";
import "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import "./chunk-TBKOLJZS.js";
import {
  ApToggleSwitchComponent
} from "./chunk-MKS37EB3.js";
import "./chunk-3HIHH7J6.js";
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
  CommonModule,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DestroyRef,
  ElementRef,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/app/pages/og-header/og-header.component.ts
var _c0 = () => ({ addSymbol: false });
var _forTrack0 = ($index, $item) => $item.id;
function OgHeaderComponent_Conditional_11_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-toggle-switch", 18);
    \u0275\u0275listener("checkedChange", function OgHeaderComponent_Conditional_11_For_4_Conditional_4_Template_ap_toggle_switch_checkedChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMenuSoundChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("checked", ctx_r1.isSoundOn());
  }
}
function OgHeaderComponent_Conditional_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function OgHeaderComponent_Conditional_11_For_4_Template_button_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(item_r4.action());
    });
    \u0275\u0275element(1, "ap-icon", 15);
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, OgHeaderComponent_Conditional_11_For_4_Conditional_4_Template, 1, 1, "ap-toggle-switch", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.disabledMap()[item_r4.id]);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.iconMap()[item_r4.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.labelFallback, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.id === "sound" ? 4 : -1);
  }
}
function OgHeaderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function OgHeaderComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClickMenuOutside());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12);
    \u0275\u0275repeaterCreate(3, OgHeaderComponent_Conditional_11_For_4_Template, 5, 4, "button", 13, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.menuItems());
  }
}
function OgHeaderComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-list-og", 19);
    \u0275\u0275listener("close", function OgHeaderComponent_Conditional_12_Template_history_list_og_close_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeHistory());
    });
    \u0275\u0275elementEnd();
  }
}
function OgHeaderComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "info-og", 19);
    \u0275\u0275listener("close", function OgHeaderComponent_Conditional_13_Template_info_og_close_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInfo());
    });
    \u0275\u0275elementEnd();
  }
}
function OgHeaderComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "og-fairness", 19);
    \u0275\u0275listener("close", function OgHeaderComponent_Conditional_14_Template_og_fairness_close_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFairness());
    });
    \u0275\u0275elementEnd();
  }
}
var DEMO_MENU_ICON_MAP = {
  info: "exclamation-circle",
  history: "document-text",
  sound: "speaker-wave",
  fairness: "scale"
};
function createDemoMenuItems(actions) {
  return [
    {
      id: "info",
      labelKey: "og_topList_info",
      labelFallback: "Info",
      action: actions.onInfo
    },
    {
      id: "history",
      labelKey: "og_topList_history",
      labelFallback: "History",
      action: actions.onHistory
    },
    {
      id: "sound",
      labelKey: "og_topList_sound",
      labelFallback: "Sound",
      action: actions.onSound
    },
    {
      id: "fairness",
      labelKey: "og_topList_fairness",
      labelFallback: "Fairness",
      action: actions.onFairness
    }
  ];
}
var OgHeaderComponent = class _OgHeaderComponent {
  appI18n = inject(AppI18nService);
  // private readonly destroyRef = inject(DestroyRef);
  soundService = inject(SoundService);
  wallet = inject(OgWalletService);
  game = inject(GameIframeCtrlService);
  isFairnessDisabled = input(false);
  isHistoryDisabled = input(false);
  currencyImage = computed(() => this.wallet.currencyIconUrl() ?? "assets/images/currency/img_coin_DEMO.svg");
  displayBalance = computed(() => this.wallet.displayBalance());
  isSoundOn = signal(true);
  showMenu = signal(false);
  showHistory = signal(false);
  showInfo = signal(false);
  showFairness = signal(false);
  clickInfo = output();
  clickHistory = output();
  clickFairness = output();
  checkedChange = output();
  iconMap = computed(() => __spreadProps(__spreadValues({}, DEMO_MENU_ICON_MAP), {
    sound: this.isSoundOn() ? "speaker-wave" : "speaker-wave pressed"
  }));
  // 遊戲若啟用，停用公平性驗證按鈕，避免玩家在遊戲中途切換公平性驗證
  disabledMap = computed(() => ({
    info: false,
    history: this.isHistoryDisabled(),
    sound: false,
    fairness: this.isFairnessDisabled()
  }));
  menuItems = computed(() => createDemoMenuItems({
    onInfo: () => this.onClickInfo(),
    onHistory: () => this.onClickHistory(),
    onSound: () => this.onClickSound(),
    onFairness: () => this.onClickFairness()
  }).map((item) => __spreadProps(__spreadValues({}, item), {
    labelFallback: this.appI18n.instant(item.labelKey, item.labelFallback)
  })));
  onClickMenu(event) {
    event.stopPropagation();
    this.showMenu.set(true);
  }
  onClickInfo() {
    this.showMenu.set(false);
    this.showInfo.set(true);
    this.clickInfo.emit();
  }
  onClickHistory() {
    if (this.isHistoryDisabled()) {
      return;
    }
    this.showMenu.set(false);
    this.showHistory.set(true);
    this.clickHistory.emit();
  }
  // 當遊戲狀態改變時, 會觸發此事件, 讓選公平性驗證按鈕可以隨著遊戲狀態改變而啟用或停用
  onClickFairness() {
    if (this.isFairnessDisabled()) {
      return;
    }
    this.showMenu.set(false);
    this.showFairness.set(true);
    this.clickFairness.emit();
  }
  onClickSound() {
    this.onMenuSoundChange(!this.isSoundOn());
  }
  onMenuSoundChange(value) {
    this.game.send(createApWebMessage("SetMusic", { enabled: value }));
    this.game.send(createApWebMessage("SetSound", { enabled: value }));
    this.isSoundOn.set(value);
    this.soundService.setMuted(!value);
  }
  onClickMenuOutside() {
    this.showMenu.set(false);
  }
  closeHistory() {
    this.showHistory.set(false);
  }
  closeInfo() {
    this.showInfo.set(false);
  }
  closeFairness() {
    this.showFairness.set(false);
  }
  static \u0275fac = function OgHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OgHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OgHeaderComponent, selectors: [["og-header"]], inputs: { isFairnessDisabled: [1, "isFairnessDisabled"], isHistoryDisabled: [1, "isHistoryDisabled"] }, outputs: { clickInfo: "clickInfo", clickHistory: "clickHistory", clickFairness: "clickFairness", checkedChange: "checkedChange" }, decls: 15, vars: 10, consts: [[1, "flex", "w-full", "items-stretch", "gap-2", "p-2", "bg-zinc-800"], [1, "flex", "flex-1", "items-center", "rounded-md", "bg-zinc-900", "px-4"], ["name", "wallet", 1, "info-icon", "text-slate-300", "pointer-events-none"], [1, "ml-auto", "flex", "space-x-4"], [1, "text-lg", "font-medium", "text-white"], ["alt", "", 1, "shrink-0", "size-6", "object-contain", 3, "src"], [1, "relative"], [1, "flex", "min-h-10", "items-center", "justify-center", "rounded-md", "bg-zinc-900", "px-1", "py-1", 2, "border", "2px solid #314158", 3, "click"], ["name", "bar-3", 1, "button-icon"], [1, "fixed", "inset-0", "z-overlay"], ["type", "button", 1, "fixed", "inset-0", "cursor-default", "border-0", "bg-transparent", "p-0", 3, "click"], [1, "absolute", "right-0", "top-full", "z-dropdown", "mt-1", "fade-out"], [1, "min-w-4", "rounded-md", "bg-zinc-900", "p-2", "text-zinc-300", "shadow-xl", 2, "border", "2px solid #314158"], [1, "flex", "w-full", "items-center", "gap-2", "rounded-md", "px-2", "py-2", "hover:bg-zinc-800", "hover:text-slate-400", "active:bg-zinc-700", "cursor-pointer", "disabled:cursor-not-allowed", "disabled:text-zinc-600", "disabled:hover:bg-transparent", "disabled:hover:text-zinc-600", 3, "disabled"], [1, "flex", "w-full", "items-center", "gap-2", "rounded-md", "px-2", "py-2", "hover:bg-zinc-800", "hover:text-slate-400", "active:bg-zinc-700", "cursor-pointer", "disabled:cursor-not-allowed", "disabled:text-zinc-600", "disabled:hover:bg-transparent", "disabled:hover:text-zinc-600", 3, "click", "disabled"], [1, "info-icon", "shrink-0", 3, "name"], [1, "flex-1", "text-left", "text-lg", "break-keep"], ["accentColor", "slate", 1, "pointer-events-none", 3, "checked"], ["accentColor", "slate", 1, "pointer-events-none", 3, "checkedChange", "checked"], [1, "fixed", "inset-0", "z-overlay", 3, "close"]], template: function OgHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "ap-icon", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "moneyText");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function OgHeaderComponent_Template_button_click_9_listener($event) {
        return ctx.onClickMenu($event);
      });
      \u0275\u0275element(10, "ap-icon", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, OgHeaderComponent_Conditional_11_Template, 5, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, OgHeaderComponent_Conditional_12_Template, 1, 0, "history-list-og", 9);
      \u0275\u0275conditionalCreate(13, OgHeaderComponent_Conditional_13_Template, 1, 0, "info-og", 9);
      \u0275\u0275conditionalCreate(14, OgHeaderComponent_Conditional_14_Template, 1, 0, "og-fairness", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, ctx.displayBalance(), \u0275\u0275pureFunction0(9, _c0)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.currencyImage(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.showMenu() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showHistory() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showInfo() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showFairness() ? 14 : -1);
    }
  }, dependencies: [ApIconComponent, MoneyTextPipe, ApToggleSwitchComponent, HistoryListOGComponent, InfoOgComponent, OgFairnessComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OgHeaderComponent, [{
    type: Component,
    args: [{ selector: "og-header", imports: [ApIconComponent, MoneyTextPipe, ApToggleSwitchComponent, HistoryListOGComponent, InfoOgComponent, OgFairnessComponent], template: '<div class="flex w-full items-stretch gap-2 p-2 bg-zinc-800">\n  <div class="flex flex-1 items-center rounded-md bg-zinc-900 px-4">\n    <ap-icon\n      name="wallet"\n      class="info-icon text-slate-300 pointer-events-none"\n    />\n    <div class="ml-auto flex space-x-4">\n      <div class="text-lg font-medium text-white">\n        {{ displayBalance() | moneyText: { addSymbol: false } }}\n      </div>\n      <img\n        [src]="currencyImage()!"\n        alt=""\n        class="shrink-0 size-6 object-contain"\n      />\n    </div>\n  </div>\n  <div class="relative">\n    <button\n      class="flex min-h-10 items-center justify-center rounded-md bg-zinc-900 px-1 py-1"\n      style="border: 2px solid #314158"\n      (click)="onClickMenu($event)"\n    >\n      <ap-icon name="bar-3" class="button-icon" />\n    </button>\n    @if (showMenu()) {\n      <button\n        type="button"\n        class="fixed inset-0 cursor-default border-0 bg-transparent p-0"\n        (click)="onClickMenuOutside()"\n      ></button>\n      <div\n        class="absolute right-0 top-full z-dropdown mt-1 fade-out"\n      >\n        <div\n          class="min-w-4 rounded-md bg-zinc-900 p-2 text-zinc-300 shadow-xl"\n          style="border: 2px solid #314158"\n        >\n          @for (item of menuItems(); track item.id) {\n            <button\n              class="flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-zinc-800 hover:text-slate-400 active:bg-zinc-700 cursor-pointer disabled:cursor-not-allowed disabled:text-zinc-600 disabled:hover:bg-transparent disabled:hover:text-zinc-600"\n              [disabled]="disabledMap()[item.id]"\n              (click)="item.action()"\n            >\n              <ap-icon [name]="iconMap()[item.id]" class="info-icon shrink-0" />\n              <div class="flex-1 text-left text-lg break-keep">\n                {{ item.labelFallback }}\n              </div>\n              @if (item.id === "sound") {\n                <ap-toggle-switch\n                  class="pointer-events-none"\n                  accentColor="slate"\n                  [checked]="isSoundOn()"\n                  (checkedChange)="onMenuSoundChange($event)"\n                />\n              }\n            </button>\n          }\n        </div>\n      </div>\n    }\n  </div>\n</div>\n\n@if (showHistory()) {\n  <history-list-og class="fixed inset-0 z-overlay" (close)="closeHistory()" />\n}\n\n@if (showInfo()) {\n  <info-og class="fixed inset-0 z-overlay" (close)="closeInfo()" />\n}\n\n@if (showFairness()) {\n  <og-fairness\n    class="fixed inset-0 z-overlay"\n    (close)="closeFairness()"\n  />\n}\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OgHeaderComponent, { className: "OgHeaderComponent", filePath: "src/app/pages/og-header/og-header.component.ts", lineNumber: 74 });
})();

// src/app/components/ap-ui-toast-queue/ap-ui-toast-queue.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ApUiToastQueueComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-message", 2);
    \u0275\u0275listener("closed", function ApUiToastQueueComponent_Conditional_0_For_2_Template_ap_message_closed_0_listener() {
      const message_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dismissed.emit(message_r2.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    \u0275\u0275property("message", message_r2.text);
  }
}
function ApUiToastQueueComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, ApUiToastQueueComponent_Conditional_0_For_2_Template, 1, 1, "ap-message", 1, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.messages());
  }
}
var ApUiToastQueueComponent = class _ApUiToastQueueComponent {
  messages = input([]);
  dismissed = output();
  static \u0275fac = function ApUiToastQueueComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiToastQueueComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiToastQueueComponent, selectors: [["ap-ui-toast-queue"]], inputs: { messages: [1, "messages"] }, outputs: { dismissed: "dismissed" }, decls: 1, vars: 1, consts: [[1, "relative", "pointer-events-none", "flex", "w-72", "max-w-[calc(100vw-2rem)]", "flex-col", "gap-4"], ["variant", "origin", 1, "fade-down", "pointer-events-auto", 3, "message"], ["variant", "origin", 1, "fade-down", "pointer-events-auto", 3, "closed", "message"]], template: function ApUiToastQueueComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApUiToastQueueComponent_Conditional_0_Template, 3, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.messages().length ? 0 : -1);
    }
  }, dependencies: [CommonModule, ApMessageComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiToastQueueComponent, [{
    type: Component,
    args: [{ selector: "ap-ui-toast-queue", imports: [CommonModule, ApMessageComponent], template: '@if (messages().length) {\n  <div\n    class="relative pointer-events-none flex w-72 max-w-[calc(100vw-2rem)] flex-col gap-4"\n  >\n    @for (message of messages(); track message.id) {\n      <ap-message\n        class="fade-down pointer-events-auto"\n        [message]="message.text"\n        variant="origin"\n        (closed)="dismissed.emit(message.id)"\n      />\n    }\n  </div>\n}\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiToastQueueComponent, { className: "ApUiToastQueueComponent", filePath: "src/app/components/ap-ui-toast-queue/ap-ui-toast-queue.component.ts", lineNumber: 11 });
})();

// src/app/layouts/layout-og/layout-og.component.ts
var _c02 = (a0, a1, a2) => ({ "right-4 top-12": a0, "right-8 top-20": a1, "top-22 left-1/2 -translate-x-1/2": a2 });
var _c1 = (a0, a1, a2, a3, a4, a5) => ({ "top-15": a0, "h-[calc(100%-3.75rem-22rem)]": a1, "h-full": a2, "w-[calc(100%-25rem)]": a3, "w-full": a4, "aspect-square": a5 });
var _c2 = (a0, a1) => ({ fixed: a0, absolute: a1 });
var _c3 = (a0, a1, a2, a3) => ({ "w-100 h-[calc(100%-3.75rem)]": a0, "w-full": a1, "h-88": a2, "top-[calc(3.75rem+100vw)]": a3 });
var _c4 = (a0, a1) => ({ "w-100": a0, "w-full": a1 });
function LayoutOgComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "og-panel", 6);
    \u0275\u0275listener("autoRunningChange", function LayoutOgComponent_Conditional_4_Template_og_panel_autoRunningChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAutoRunningChange($event));
    })("gameStateChange", function LayoutOgComponent_Conditional_4_Template_og_panel_gameStateChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGameStateChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275element(3, "og-header", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c3, ctx_r1.layoutType() === "landscape", ctx_r1.layoutType() !== "landscape", ctx_r1.layoutType() === "square", ctx_r1.layoutType() === "portrait"));
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.panelVariant());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c4, ctx_r1.layoutType() === "landscape", ctx_r1.layoutType() !== "landscape"));
    \u0275\u0275advance();
    \u0275\u0275property("isFairnessDisabled", ctx_r1.isFairnessDisabled())("isHistoryDisabled", ctx_r1.isHistoryDisabled());
  }
}
function LayoutOgComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-ui-device-rotation", 4);
  }
}
var LANDSCAPE_RATIO = 4 / 3;
var PORTRAIT_RATIO = 9 / 16;
var LayoutOgComponent = class _LayoutOgComponent {
  /** OG Layout 需要的service列表 */
  favicon = inject(FaviconCtrlService);
  wallet = inject(OgWalletService);
  i18n = inject(AppI18nService);
  destroyRef = inject(DestroyRef);
  session = inject(ClientSessionService);
  routerCtrl = inject(RouterCtrlService);
  navigator = inject(NavigatorShareService);
  api = inject(AppInterfaceService);
  appI18n = inject(AppI18nService);
  game = inject(GameIframeCtrlService);
  symbolTexture = inject(BaseSymbolTextureService);
  elementRef = inject(ElementRef);
  /** 顯示旋轉提示: 轉成直向模式 */
  showRotateTips = computed(() => this.session.isMobile() && this.session.isLandscape());
  nextMessageId = 0;
  isLoading = signal(true);
  layoutType = signal(this.resolveLayoutType());
  isShowPanel = computed(() => {
    return !this.isLoading() && !this.game.popupMessageBox();
  });
  autoMessages = signal([]);
  gameState = signal("ready");
  isAutoRunning = signal(false);
  /** auto 模式下，即使 gameState 回到 ready，回合間仍視為進行中，公平性驗證與歷史紀錄需維持停用 */
  isFairnessDisabled = computed(() => this.gameState() === "playing" || this.isAutoRunning());
  isHistoryDisabled = computed(() => this.gameState() === "playing" || this.isAutoRunning());
  /** 下注階層 */
  betLevel = computed(() => this.wallet.betLevel());
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
    const updateLayoutType = () => this.layoutType.set(this.resolveLayoutType());
    window.addEventListener("resize", updateLayoutType);
    this.destroyRef.onDestroy(() => window.removeEventListener("resize", updateLayoutType));
  }
  ngOnInit() {
    this.navigator.preventPinchZoom(this.elementRef.nativeElement, this.destroyRef);
    if (environment.production && !this.session.isOgUI) {
      this.routerCtrl.navigateRelative("");
      return;
    }
    this.game.loadingFinished$.subscribe(() => this.onLoadingComplete());
    this.api.setup(this.session.setting);
    this.api.connect();
  }
  // 當遊戲狀態改變時, 會觸發此事件, 讓選公平性驗證按鈕可以隨著遊戲狀態改變而啟用或停用
  onGameStateChange(value) {
    this.gameState.set(value);
  }
  onAutoRunningChange(value) {
    this.isAutoRunning.set(value);
    const text = value ? this.appI18n.instant("og_autobet_autoStartTip") ?? "Autobet started" : this.appI18n.instant("og_autobet_autoEndTip") ?? "Autobet finished";
    const message = {
      id: this.nextMessageId++,
      text
    };
    this.autoMessages.update((messages) => [message, ...messages]);
  }
  dismissAutoMessage(id) {
    this.autoMessages.update((messages) => messages.filter((message) => message.id !== id));
  }
  resolveLayoutType() {
    const ratio = window.innerWidth / window.innerHeight;
    if (ratio > LANDSCAPE_RATIO) {
      return "landscape";
    }
    if (ratio < PORTRAIT_RATIO) {
      return "portrait";
    }
    return "square";
  }
  onLoadingComplete() {
    this.isLoading.set(false);
  }
  panelVariant = computed(() => {
    if (this.layoutType() === "portrait" || this.layoutType() === "square") {
      return "mobile";
    }
    return "desktop";
  });
  static \u0275fac = function LayoutOgComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutOgComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutOgComponent, selectors: [["layout-og"]], hostBindings: function LayoutOgComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("contextmenu", function LayoutOgComponent_contextmenu_HostBindingHandler($event) {
        return $event.preventDefault();
      });
    }
  }, decls: 6, vars: 20, consts: [[1, "fixed", "z-overlay", 3, "dismissed", "messages", "ngClass"], ["id", "content", 1, "absolute", "right-0", 3, "ngClass"], ["uiMode", "ap-cover", 1, "inset-0", 3, "ngClass"], [1, "absolute", "top-0", "left-0"], [1, "absolute", "z-error", "inset-0"], ["id", "panel", 1, "absolute", "flex", "justify-center", "bottom-0", "left-0", "bg-zinc-900", 3, "ngClass"], [1, "max-w-3xl", 3, "autoRunningChange", "gameStateChange", "variant"], ["id", "header", 1, "absolute", "left-0", "top-0", 3, "ngClass"], [3, "isFairnessDisabled", "isHistoryDisabled"]], template: function LayoutOgComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ap-ui-toast-queue", 0);
      \u0275\u0275listener("dismissed", function LayoutOgComponent_Template_ap_ui_toast_queue_dismissed_0_listener($event) {
        return ctx.dismissAutoMessage($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "game-iframe", 2)(3, "ap-ui-version", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, LayoutOgComponent_Conditional_4_Template, 4, 13);
      \u0275\u0275conditionalCreate(5, LayoutOgComponent_Conditional_5_Template, 1, 0, "ap-ui-device-rotation", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("messages", ctx.autoMessages())("ngClass", \u0275\u0275pureFunction3(6, _c02, ctx.layoutType() === "landscape", ctx.layoutType() === "square", ctx.layoutType() === "portrait"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(10, _c1, ctx.layoutType() !== "landscape", ctx.layoutType() === "square", ctx.layoutType() === "landscape", ctx.layoutType() === "landscape", ctx.layoutType() !== "landscape", ctx.layoutType() === "portrait"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c2, !ctx.isShowPanel(), ctx.isShowPanel()));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isShowPanel() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showRotateTips() ? 5 : -1);
    }
  }, dependencies: [CommonModule, NgClass, OgHeaderComponent, ApUiToastQueueComponent, OgPanelComponent, GameIframeComponent, ApUiDeviceRotationComponent, ApUiVersionComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=layout-og.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutOgComponent, [{
    type: Component,
    args: [{ selector: "layout-og", imports: [CommonModule, OgHeaderComponent, ApUiToastQueueComponent, OgPanelComponent, GameIframeComponent, ApUiDeviceRotationComponent, ApUiVersionComponent], host: {
      "(contextmenu)": "$event.preventDefault()"
      // 禁止右鍵選單
    }, template: `<ap-ui-toast-queue
  class="fixed z-overlay"
  [messages]="autoMessages()"
  (dismissed)="dismissAutoMessage($event)"
  [ngClass]="{
    'right-4 top-12': layoutType() === 'landscape' ,
    'right-8 top-20': layoutType() === 'square',
    'top-22 left-1/2 -translate-x-1/2': layoutType() === 'portrait',
  }"
/>

<div
  id="content"
  class="absolute right-0"
  [ngClass]="{
    'top-15': layoutType() !== 'landscape',
    'h-[calc(100%-3.75rem-22rem)]': layoutType() === 'square',
    'h-full': layoutType() === 'landscape',
    'w-[calc(100%-25rem)]': layoutType() === 'landscape',
    'w-full': layoutType() !== 'landscape',
    'aspect-square': layoutType() === 'portrait',
  }"
>
  <game-iframe
    class="inset-0"
    uiMode="ap-cover"
    [ngClass]="{
      fixed: !isShowPanel(),
      absolute: isShowPanel(),
    }"
  />
  <ap-ui-version class="absolute top-0 left-0" />
</div>

@if (isShowPanel()) {
  <div
    id="panel"
    class="absolute flex justify-center bottom-0 left-0 bg-zinc-900"
    [ngClass]="{
      'w-100 h-[calc(100%-3.75rem)]': layoutType() === 'landscape',
      'w-full': layoutType() !== 'landscape',
      'h-88': layoutType() === 'square',
      'top-[calc(3.75rem+100vw)]': layoutType() === 'portrait',
    }"
  >
    <og-panel
      class="max-w-3xl"
      [variant]="panelVariant()"
      (autoRunningChange)="onAutoRunningChange($event)"
      (gameStateChange)="onGameStateChange($event)"
    >
    </og-panel>
  </div>

  <div
    id="header"
    class="absolute left-0 top-0"
    [ngClass]="{
      'w-100': layoutType() === 'landscape',
      'w-full': layoutType() !== 'landscape',
    }"
  >
    <og-header
      [isFairnessDisabled]="isFairnessDisabled()"
      [isHistoryDisabled]="isHistoryDisabled()"
    />
  </div>
}

@if (showRotateTips()) {  
  <ap-ui-device-rotation class="absolute z-error inset-0" />
}
`, styles: ["/* src/app/layouts/layout-og/layout-og.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=layout-og.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutOgComponent, { className: "LayoutOgComponent", filePath: "src/app/layouts/layout-og/layout-og.component.ts", lineNumber: 37 });
})();
export {
  LayoutOgComponent
};
//# sourceMappingURL=chunk-WKLAWLNT.js.map
