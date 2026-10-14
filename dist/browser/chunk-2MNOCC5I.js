import {
  HistoryListOGComponent,
  InfoOgComponent,
  OgPanelComponent
} from "./chunk-W557QOZY.js";
import "./chunk-BN2VWTMK.js";
import {
  ApMessageComponent
} from "./chunk-JSDRLKGF.js";
import "./chunk-74H6U7EF.js";
import "./chunk-47SOIXJB.js";
import "./chunk-H6P7MZH6.js";
import {
  ClickOutsideDirective
} from "./chunk-TPJP2HS2.js";
import "./chunk-W2PA37WH.js";
import "./chunk-X6GBURL3.js";
import "./chunk-5MA7HBPU.js";
import "./chunk-5KYQQMTR.js";
import "./chunk-N3TTLE6J.js";
import "./chunk-COCIR4RJ.js";
import "./chunk-OW2FH27N.js";
import "./chunk-N4LJSHXE.js";
import "./chunk-JHJKX6RD.js";
import "./chunk-4OJJGH2R.js";
import {
  MoneyTextPipe
} from "./chunk-6XO7DG7K.js";
import {
  SoundService
} from "./chunk-FCZ4RVMP.js";
import "./chunk-NMZ7HZYU.js";
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
  ClientSessionService
} from "./chunk-B2M5HODU.js";
import {
  CommonModule,
  NgTemplateOutlet
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DOCUMENT,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/app/layouts/layout-demo/layout-demo.config.ts
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
function createDemoGameSetup(language) {
  return {
    authToken: null,
    gameId: "10087",
    socketUrl: null,
    assetUrl: "https://dev.diresoft.net",
    language,
    offline: true
  };
}

// src/app/layouts/layout-demo/layout-demo.component.ts
var _c0 = () => ({ addSymbol: false });
var _forTrack0 = ($index, $item) => $item.id;
function LayoutDemoComponent_ng_template_0_Conditional_11_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "ap-icon", 18);
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ap-toggle-switch", 20);
    \u0275\u0275listener("checkedChange", function LayoutDemoComponent_ng_template_0_Conditional_11_For_3_Conditional_0_Template_ap_toggle_switch_checkedChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMenuSoundChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.iconMap()[item_r5.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.labelFallback, " ");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isSoundOn());
  }
}
function LayoutDemoComponent_ng_template_0_Conditional_11_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function LayoutDemoComponent_ng_template_0_Conditional_11_For_3_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(item_r5.action());
    });
    \u0275\u0275element(1, "ap-icon", 18);
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.iconMap()[item_r5.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.labelFallback, " ");
  }
}
function LayoutDemoComponent_ng_template_0_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LayoutDemoComponent_ng_template_0_Conditional_11_For_3_Conditional_0_Template, 5, 3, "div", 16)(1, LayoutDemoComponent_ng_template_0_Conditional_11_For_3_Conditional_1_Template, 4, 2, "button", 17);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275conditional(item_r5.id === "sound" ? 0 : 1);
  }
}
function LayoutDemoComponent_ng_template_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("clickOutside", function LayoutDemoComponent_ng_template_0_Conditional_11_Template_div_clickOutside_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275repeaterCreate(2, LayoutDemoComponent_ng_template_0_Conditional_11_For_3_Template, 2, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.menuItems());
  }
}
function LayoutDemoComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275element(2, "ap-icon", 6);
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "moneyText");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "img", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "button", 11);
    \u0275\u0275listener("click", function LayoutDemoComponent_ng_template_0_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMenu($event));
    });
    \u0275\u0275element(10, "ap-icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, LayoutDemoComponent_ng_template_0_Conditional_11_Template, 4, 0, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 3, ctx_r1.displayBalance(), \u0275\u0275pureFunction0(6, _c0)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.currencyImage(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.showMenu() && !ctx_r1.showInfo() && !ctx_r1.showHistory() && !ctx_r1.showFairness() ? 11 : -1);
  }
}
function LayoutDemoComponent_Conditional_2_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-message", 33);
    \u0275\u0275listener("closed", function LayoutDemoComponent_Conditional_2_Conditional_2_For_2_Template_ap_message_closed_0_listener() {
      const message_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dismissAutoMessage(message_r9.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r9 = ctx.$implicit;
    \u0275\u0275property("message", message_r9.text);
  }
}
function LayoutDemoComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, LayoutDemoComponent_Conditional_2_Conditional_2_For_2_Template, 1, 1, "ap-message", 32, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.autoMessages());
  }
}
function LayoutDemoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 22);
    \u0275\u0275conditionalCreate(2, LayoutDemoComponent_Conditional_2_Conditional_2_Template, 3, 0, "div", 23);
    \u0275\u0275elementStart(3, "div", 24)(4, "section", 25)(5, "header", 26);
    \u0275\u0275elementContainer(6, 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 28)(8, "og-panel", 29);
    \u0275\u0275listener("autoRunningChange", function LayoutDemoComponent_Conditional_2_Template_og_panel_autoRunningChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAutoRunningChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "section", 30);
    \u0275\u0275element(10, "img", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const headerTpl_r10 = \u0275\u0275reference(1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.autoMessages().length ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", headerTpl_r10);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.gameImage(), \u0275\u0275sanitizeUrl);
  }
}
function LayoutDemoComponent_Conditional_3_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-message", 42);
    \u0275\u0275listener("closed", function LayoutDemoComponent_Conditional_3_Conditional_2_For_2_Template_ap_message_closed_0_listener() {
      const message_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dismissAutoMessage(message_r13.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r13 = ctx.$implicit;
    \u0275\u0275property("message", message_r13.text);
  }
}
function LayoutDemoComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275repeaterCreate(1, LayoutDemoComponent_Conditional_3_Conditional_2_For_2_Template, 1, 1, "ap-message", 41, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.autoMessages());
  }
}
function LayoutDemoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 34);
    \u0275\u0275conditionalCreate(2, LayoutDemoComponent_Conditional_3_Conditional_2_Template, 3, 0, "div", 35);
    \u0275\u0275elementStart(3, "header", 36);
    \u0275\u0275elementContainer(4, 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "section", 37);
    \u0275\u0275element(6, "img", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39)(8, "og-panel", 40);
    \u0275\u0275listener("autoRunningChange", function LayoutDemoComponent_Conditional_3_Template_og_panel_autoRunningChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAutoRunningChange($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const headerTpl_r10 = \u0275\u0275reference(1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.autoMessages().length ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", headerTpl_r10);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.gameImage(), \u0275\u0275sanitizeUrl);
  }
}
function LayoutDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-list-og", 43);
    \u0275\u0275listener("close", function LayoutDemoComponent_Conditional_4_Template_history_list_og_close_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeHistory());
    });
    \u0275\u0275elementEnd();
  }
}
function LayoutDemoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "info-og", 43);
    \u0275\u0275listener("close", function LayoutDemoComponent_Conditional_5_Template_info_og_close_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInfo());
    });
    \u0275\u0275elementEnd();
  }
}
var LayoutDemoComponent = class _LayoutDemoComponent {
  nextMessageId = 0;
  document = inject(DOCUMENT);
  appI18n = inject(AppI18nService);
  soundService = inject(SoundService);
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  displayCurrency = signal("DEMO");
  displayBalance = signal(0);
  isSoundOn = signal(true);
  showFairness = signal(false);
  showHistory = signal(false);
  showInfo = signal(false);
  showMenu = signal(false);
  autoMessages = signal([]);
  iconMap = computed(() => __spreadProps(__spreadValues({}, DEMO_MENU_ICON_MAP), {
    sound: this.isSoundOn() ? "speaker-wave" : "speaker-wave pressed"
  }));
  currencyImage = input("assets/images/currency/img_coin_DEMO.svg");
  gameImage = input("assets/images/img_30011.jpg");
  menuItems = computed(() => createDemoMenuItems({
    onInfo: () => this.onMenuInfo(),
    onHistory: () => this.onMenuHistory(),
    onSound: () => this.onMenuSound(),
    onFairness: () => this.onMenuFairness()
  }).map((item) => __spreadProps(__spreadValues({}, item), {
    labelFallback: this.appI18n.instant(item.labelKey, item.labelFallback)
  })));
  narrowMQ = this.document.defaultView.matchMedia("(max-aspect-ratio: 4/3)");
  isNarrowViewport = signal(this.narrowMQ.matches);
  onNarrowChange = (e) => this.isNarrowViewport.set(e.matches);
  showMobileLayout = computed(() => this.session.isMobile() || this.isNarrowViewport());
  constructor() {
  }
  dismissShowFairness() {
    this.showFairness.set(false);
  }
  toggleMenu(event) {
    event.stopPropagation();
    this.showMenu.update((v) => !v);
  }
  closeMenu() {
    this.showMenu.set(false);
  }
  onMenuInfo() {
    this.showMenu.set(false);
    this.showInfo.set(true);
  }
  onMenuHistory() {
    this.showMenu.set(false);
    this.showHistory.set(true);
  }
  onMenuSound() {
    this.onMenuSoundChange(!this.isSoundOn());
  }
  onMenuSoundChange(value) {
    this.isSoundOn.set(value);
    this.soundService.setMuted(!value);
  }
  onMenuFairness() {
    this.closeMenu();
    this.showFairness.set(true);
  }
  closeHistory() {
    this.showHistory.set(false);
  }
  closeInfo() {
    this.showInfo.set(false);
  }
  onAutoRunningChange(value) {
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
  ngOnInit() {
    this.document.body.classList.add("layout-demo-active");
    this.api.setup(createDemoGameSetup(this.session.language));
    this.narrowMQ.addEventListener("change", this.onNarrowChange);
  }
  ngOnDestroy() {
    this.document.body.classList.remove("layout-demo-active");
    this.narrowMQ.removeEventListener("change", this.onNarrowChange);
  }
  static \u0275fac = function LayoutDemoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutDemoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutDemoComponent, selectors: [["layout-demo"]], inputs: { currencyImage: [1, "currencyImage"], gameImage: [1, "gameImage"] }, decls: 6, vars: 3, consts: [["headerTpl", ""], [1, "w-full", "h-dvh", "bg-black", "flex", "items-center", "justify-center"], [1, "w-full", "h-dvh", "bg-black", "flex", "flex-col", "items-center", "justify-center"], [1, "absolute", "inset-0", "z-overlay"], [1, "flex", "w-full", "items-stretch", "gap-2"], [1, "flex", "flex-1", "items-center", "rounded-md", "bg-zinc-900", "px-4"], ["name", "wallet", 1, "info-icon", "text-slate-300", "pointer-events-none"], [1, "ml-auto", "flex", "space-x-4"], [1, "text-lg", "og-title", "text-white"], ["alt", "", 1, "shrink-0", "size-6", "object-contain", 3, "src"], [1, "relative"], [1, "flex", "min-h-10", "items-center", "justify-center", "rounded-md", "bg-zinc-900", "px-1", "py-1", "border-2", "border-slate-700", 3, "click"], ["name", "bar-3", 1, "button-icon"], ["clickOutside", "", 1, "absolute", "right-0", "top-full", "mt-1", "fade-out"], ["clickOutside", "", 1, "absolute", "right-0", "top-full", "mt-1", "fade-out", 3, "clickOutside"], [1, "min-w-4", "rounded-md", "border-2", "border-slate-700", "bg-zinc-900", "p-2", "text-zinc-300", "shadow-xl"], [1, "flex", "w-full", "items-center", "gap-2", "rounded-md", "px-2", "py-2"], [1, "flex", "w-full", "items-center", "gap-2", "rounded-md", "px-2", "py-2", "hover:bg-zinc-800", "hover:text-slate-400", "active:bg-zinc-700", "cursor-pointer"], [1, "info-icon", "shrink-0", 3, "name"], [1, "flex-1", "text-left", "text-lg"], ["accentColor", "slate", 3, "checkedChange", "checked"], [1, "flex", "w-full", "items-center", "gap-2", "rounded-md", "px-2", "py-2", "hover:bg-zinc-800", "hover:text-slate-400", "active:bg-zinc-700", "cursor-pointer", 3, "click"], [1, "desktop-inner", "h-full", "overflow-hidden"], [1, "pointer-events-none", "absolute", "right-4", "top-4", "z-overlay", "flex", "w-80", "max-w-[calc(100vw-2rem)]", "flex-col", "gap-4"], [1, "grid", "h-full", "[grid-template-columns:calc(100dvh*4/9)_minmax(0,1fr)]", "grid-rows-[minmax(0,1fr)]", "bg-zinc-900"], [1, "grid", "min-w-0", "[grid-template-rows:auto_1fr]"], [1, "sticky", "top-0", "z-sticky", "flex", "items-center", "justify-center", "bg-zinc-800", "p-2", "shadow-lg"], [3, "ngTemplateOutlet"], [1, "relative", "min-w-0", "min-h-0", "overflow-hidden", "border-t", "border-zinc-600", "bg-zinc-800", "[&>original-bottom-panel]:block", "[&>original-bottom-panel]:h-full"], ["variant", "desktop", 3, "autoRunningChange"], [1, "desktop-game-section", "relative", "min-h-0", "min-w-0", "overflow-hidden", "bg-black"], ["alt", "", 3, "src"], ["variant", "origin", 1, "pointer-events-auto", 3, "message"], ["variant", "origin", 1, "pointer-events-auto", 3, "closed", "message"], [1, "mobile-inner", "w-full", "flex", "flex-col", "overflow-hidden", "bg-zinc-900"], [1, "pointer-events-none", "absolute", "right-4", "top-4", "z-overlay", "flex", "w-72", "max-w-[calc(100vw-2rem)]", "flex-col", "gap-4"], [1, "shrink-0", "z-sticky", "flex", "items-center", "justify-center", "bg-zinc-800", "p-2", "shadow-lg"], [1, "w-full", "aspect-square", "shrink-0", "overflow-hidden"], ["alt", "", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "flex-1", "min-h-0", "min-w-0", "overflow-hidden", "border-t", "border-zinc-600", "bg-zinc-800", "[&>original-bottom-panel]:block", "[&>original-bottom-panel]:h-full", "[&>original-bottom-panel]:min-h-0"], ["variant", "mobile", 3, "autoRunningChange"], ["variant", "origin", 1, "fade-down", "pointer-events-auto", 3, "message"], ["variant", "origin", 1, "fade-down", "pointer-events-auto", 3, "closed", "message"], [1, "absolute", "inset-0", "z-overlay", 3, "close"]], template: function LayoutDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LayoutDemoComponent_ng_template_0_Template, 12, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(2, LayoutDemoComponent_Conditional_2_Template, 11, 3, "div", 1)(3, LayoutDemoComponent_Conditional_3_Template, 9, 3, "div", 2);
      \u0275\u0275conditionalCreate(4, LayoutDemoComponent_Conditional_4_Template, 1, 0, "history-list-og", 3);
      \u0275\u0275conditionalCreate(5, LayoutDemoComponent_Conditional_5_Template, 1, 0, "info-og", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.showMobileLayout() ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showHistory() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showInfo() ? 5 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgTemplateOutlet,
    ApIconComponent,
    MoneyTextPipe,
    ClickOutsideDirective,
    InfoOgComponent,
    HistoryListOGComponent,
    ApMessageComponent,
    ApToggleSwitchComponent,
    OgPanelComponent
  ], styles: ["/* src/app/layouts/layout-demo/layout-demo.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n  min-height: 100dvh;\n}\n.desktop-inner {\n  width: 100%;\n  height: 100%;\n}\nbody.layout-demo-active layout-lab > ap-icon[name=bar-3] {\n  display: none;\n}\n.desktop-game-section img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (aspect-ratio > 16/9) {\n  .desktop-game-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .desktop-game-section img {\n    width: auto;\n    height: 100%;\n    object-fit: unset;\n  }\n}\n@media (max-aspect-ratio: 9/16) {\n  .mobile-inner {\n    flex: none;\n    height: auto;\n    aspect-ratio: 9 / 16;\n  }\n}\n@media (min-aspect-ratio: 9/16) {\n  .mobile-inner {\n    flex: none;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=layout-demo.component.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutDemoComponent, [{
    type: Component,
    args: [{ selector: "layout-demo", imports: [
      CommonModule,
      ApIconComponent,
      MoneyTextPipe,
      ClickOutsideDirective,
      InfoOgComponent,
      HistoryListOGComponent,
      ApMessageComponent,
      ApToggleSwitchComponent,
      OgPanelComponent
    ], encapsulation: ViewEncapsulation.None, template: '<ng-template #headerTpl>\n  <div class="flex w-full items-stretch gap-2">\n    <div class="flex flex-1 items-center rounded-md bg-zinc-900 px-4">\n      <ap-icon\n        name="wallet"\n        class="info-icon text-slate-300 pointer-events-none"\n      />\n      <div class="ml-auto flex space-x-4">\n        <div class="text-lg og-title text-white">\n          {{ displayBalance() | moneyText: { addSymbol: false } }}\n        </div>\n        <img\n          [src]="currencyImage()!"\n          alt=""\n          class="shrink-0 size-6 object-contain"\n        />\n      </div>\n    </div>\n    <div class="relative">\n      <button\n        class="flex min-h-10 items-center justify-center rounded-md bg-zinc-900 px-1 py-1 border-2 border-slate-700"\n        (click)="toggleMenu($event)"\n      >\n        <ap-icon name="bar-3" class="button-icon" />\n      </button>\n      @if (showMenu() && !showInfo() && !showHistory() && !showFairness()) {\n        <div\n          class="absolute right-0 top-full mt-1 fade-out"\n          clickOutside\n          (clickOutside)="closeMenu()"\n        >\n          <div\n            class="min-w-4 rounded-md border-2 border-slate-700 bg-zinc-900 p-2 text-zinc-300 shadow-xl"\n          >\n            @for (item of menuItems(); track item.id) {\n              @if (item.id === "sound") {\n                <div\n                  class="flex w-full items-center gap-2 rounded-md px-2 py-2"\n                >\n                  <ap-icon\n                    [name]="iconMap()[item.id]"\n                    class="info-icon shrink-0"\n                  />\n                  <div class="flex-1 text-left text-lg">\n                    {{ item.labelFallback }}\n                  </div>\n                  <ap-toggle-switch\n                    accentColor="slate"\n                    [checked]="isSoundOn()"\n                    (checkedChange)="onMenuSoundChange($event)"\n                  />\n                </div>\n              } @else {\n                <button\n                  class="flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-zinc-800 hover:text-slate-400 active:bg-zinc-700 cursor-pointer"\n                  (click)="item.action()"\n                >\n                  <ap-icon\n                    [name]="iconMap()[item.id]"\n                    class="info-icon shrink-0"\n                  />\n                  <div class="flex-1 text-left text-lg">\n                    {{ item.labelFallback }}\n                  </div>\n                </button>\n              }\n            }\n          </div>\n        </div>\n      }\n    </div>\n  </div>\n</ng-template>\n\n<!-- Desktop -->\n@if (!showMobileLayout()) {\n  <div class="w-full h-dvh bg-black flex items-center justify-center">\n    <div class="desktop-inner h-full overflow-hidden">\n      @if (autoMessages().length) {\n        <div\n          class="pointer-events-none absolute right-4 top-4 z-overlay flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-4"\n        >\n          @for (message of autoMessages(); track message.id) {\n            <ap-message\n              class="pointer-events-auto"\n              [message]="message.text"\n              variant="origin"\n              (closed)="dismissAutoMessage(message.id)"\n            />\n          }\n        </div>\n      }\n      <div\n        class="grid h-full [grid-template-columns:calc(100dvh*4/9)_minmax(0,1fr)] grid-rows-[minmax(0,1fr)] bg-zinc-900"\n      >\n        <section class="grid min-w-0 [grid-template-rows:auto_1fr]">\n          <header\n            class="sticky top-0 z-sticky flex items-center justify-center bg-zinc-800 p-2 shadow-lg"\n          >\n            <ng-container [ngTemplateOutlet]="headerTpl" />\n          </header>\n          <div\n            class="relative min-w-0 min-h-0 overflow-hidden border-t border-zinc-600 bg-zinc-800 [&>original-bottom-panel]:block [&>original-bottom-panel]:h-full"\n          >\n            <og-panel\n              variant="desktop"\n              (autoRunningChange)="onAutoRunningChange($event)"\n            />\n          </div>\n        </section>\n        <section\n          class="desktop-game-section relative min-h-0 min-w-0 overflow-hidden bg-black"\n        >\n          <img [src]="gameImage()!" alt="" />\n        </section>\n      </div>\n    </div>\n  </div>\n}\n\n<!-- Mobile / narrow desktop -->\n@else {\n  <div class="w-full h-dvh bg-black flex flex-col items-center justify-center">\n    <div class="mobile-inner w-full flex flex-col overflow-hidden bg-zinc-900">\n      @if (autoMessages().length) {\n        <div\n          class="pointer-events-none absolute right-4 top-4 z-overlay flex w-72 max-w-[calc(100vw-2rem)] flex-col gap-4"\n        >\n          @for (message of autoMessages(); track message.id) {\n            <ap-message\n              class="fade-down pointer-events-auto"\n              [message]="message.text"\n              variant="origin"\n              (closed)="dismissAutoMessage(message.id)"\n            />\n          }\n        </div>\n      }\n      <header\n        class="shrink-0 z-sticky flex items-center justify-center bg-zinc-800 p-2 shadow-lg"\n      >\n        <ng-container [ngTemplateOutlet]="headerTpl" />\n      </header>\n      <section class="w-full aspect-square shrink-0 overflow-hidden">\n        <img [src]="gameImage()!" alt="" class="w-full h-full object-cover" />\n      </section>\n      <div\n        class="flex-1 min-h-0 min-w-0 overflow-hidden border-t border-zinc-600 bg-zinc-800 [&>original-bottom-panel]:block [&>original-bottom-panel]:h-full [&>original-bottom-panel]:min-h-0"\n      >\n        <og-panel\n          variant="mobile"\n          (autoRunningChange)="onAutoRunningChange($event)"\n        />\n      </div>\n    </div>\n  </div>\n}\n\n@if (showHistory()) {\n  <history-list-og\n    class="absolute inset-0 z-overlay"\n    (close)="closeHistory()"\n  />\n}\n@if (showInfo()) {\n  <info-og class="absolute inset-0 z-overlay" (close)="closeInfo()" />\n}\n\n\n', styles: ["/* src/app/layouts/layout-demo/layout-demo.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n  min-height: 100dvh;\n}\n.desktop-inner {\n  width: 100%;\n  height: 100%;\n}\nbody.layout-demo-active layout-lab > ap-icon[name=bar-3] {\n  display: none;\n}\n.desktop-game-section img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (aspect-ratio > 16/9) {\n  .desktop-game-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .desktop-game-section img {\n    width: auto;\n    height: 100%;\n    object-fit: unset;\n  }\n}\n@media (max-aspect-ratio: 9/16) {\n  .mobile-inner {\n    flex: none;\n    height: auto;\n    aspect-ratio: 9 / 16;\n  }\n}\n@media (min-aspect-ratio: 9/16) {\n  .mobile-inner {\n    flex: none;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=layout-demo.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutDemoComponent, { className: "LayoutDemoComponent", filePath: "src/app/layouts/layout-demo/layout-demo.component.ts", lineNumber: 37 });
})();
export {
  LayoutDemoComponent
};
//# sourceMappingURL=chunk-2MNOCC5I.js.map
