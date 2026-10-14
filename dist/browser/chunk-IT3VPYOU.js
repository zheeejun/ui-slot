import {
  FormsModule
} from "./chunk-7RUHSQL3.js";
import {
  TrnCtrlService
} from "./chunk-T55X5QHE.js";
import {
  ApIconBadgeComponent
} from "./chunk-QJZUQVJ4.js";
import {
  ApUiFramePopupComponent
} from "./chunk-N4LJSHXE.js";
import {
  PointerDownSoundDirective
} from "./chunk-JHJKX6RD.js";
import {
  BaseSymbolTextureService
} from "./chunk-4OJJGH2R.js";
import {
  MoneyTextPipe
} from "./chunk-6XO7DG7K.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import {
  ApButtonComponent
} from "./chunk-3HIHH7J6.js";
import {
  ApIconComponent
} from "./chunk-YL37OG34.js";
import {
  AppInterfaceService
} from "./chunk-Q3NF4QZ2.js";
import {
  dec
} from "./chunk-TIGXKRQH.js";
import {
  ClientSessionService,
  StorageCtrlService
} from "./chunk-B2M5HODU.js";
import {
  CommonModule,
  DomSanitizer,
  NgClass,
  NgIf,
  formatNumber
} from "./chunk-FH2ESRL7.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  Inject,
  Input,
  LOCALE_ID,
  Pipe,
  ViewChild,
  __async,
  computed,
  effect,
  firstValueFrom,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  timer,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵviewQuery
} from "./chunk-QGU3BS3L.js";

// src/app/components/ap-trn-float-button/ap-trn-float-button.component.ts
var _c0 = (a0, a1, a2, a3, a4, a5) => ({ "border-yellow-300 hover:border-yellow-200": a0, "border-purple-400 hover:border-purple-200": a1, "btn-quick-idle": a2, "btn-quick-playing": a3, "btn-event-idle": a4, "btn-event-playing": a5 });
function ApTrnFloatButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.spinnerColorClass());
  }
}
function ApTrnFloatButtonComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "ap-icon", 6);
    \u0275\u0275elementStart(2, "div", 7)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.rankLabel());
  }
}
var ApTrnFloatButtonComponent = class _ApTrnFloatButtonComponent {
  iconImage = input("");
  accentColor = input("yellow");
  isPlaying = input(false);
  rank = input(null);
  click = output();
  isYellow = computed(() => this.accentColor() === "yellow");
  iconName = computed(() => this.isYellow() ? "trophy" : "gift");
  iconColorClass = computed(() => this.isYellow() ? "text-yellow-300" : "text-purple-300");
  spinnerColorClass = computed(() => this.isYellow() ? "border-t-yellow-200 border-r-yellow-300" : "border-t-fuchsia-200 border-r-purple-300");
  rankLabel = computed(() => this.rank() ?? "?");
  static \u0275fac = function ApTrnFloatButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnFloatButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnFloatButtonComponent, selectors: [["ap-trn-float-button"]], inputs: { iconImage: [1, "iconImage"], accentColor: [1, "accentColor"], isPlaying: [1, "isPlaying"], rank: [1, "rank"] }, outputs: { click: "click" }, decls: 6, vars: 16, consts: [[1, "relative", "flex", "items-center", "justify-center", "cursor-pointer"], [1, "relative", "size-14", "rounded-full", "border-2", "flex", "items-center", "justify-center", 3, "ngClass"], [1, "absolute", "-inset-[2px]", "rounded-full", "border-2", "border-transparent", "animate-spin", "pointer-events-none", 2, "animation-duration", "1.6s", 3, "ngClass"], [1, "button-icon", 3, "name", "ngClass"], [1, "absolute", "-right-4", "top-2", "-translate-y-1/2", 3, "size", "icon", "variant", "accentColor"], [1, "absolute", "top-1/2", "-left-2", "translate-y-1/6", "block", "size-8"], ["name", "hexagon", 1, "w-full", "h-full", "text-yellow-400", "drop-shadow-md"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-yellow-200"]], template: function ApTrnFloatButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ApTrnFloatButtonComponent_Conditional_2_Template, 1, 1, "div", 2);
      \u0275\u0275element(3, "ap-icon", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "ap-button", 4);
      \u0275\u0275conditionalCreate(5, ApTrnFloatButtonComponent_Conditional_5_Template, 5, 1, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(9, _c0, ctx.isYellow(), !ctx.isYellow(), ctx.isYellow() && !ctx.isPlaying(), ctx.isYellow() && ctx.isPlaying(), !ctx.isYellow() && !ctx.isPlaying(), !ctx.isYellow() && ctx.isPlaying()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isPlaying() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.iconName())("ngClass", ctx.iconColorClass());
      \u0275\u0275advance();
      \u0275\u0275property("size", "small")("icon", "chevron-right")("variant", "content-rounded")("accentColor", ctx.accentColor());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isYellow() ? 5 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApButtonComponent, ApIconComponent], styles: ["\n\n.btn-quick-idle[_ngcontent-%COMP%] {\n  background-image:\n    radial-gradient(\n      ellipse 50% 50% at 50% 50%,\n      #71471E 0%,\n      #000002 100%);\n}\n.btn-quick-playing[_ngcontent-%COMP%] {\n  background-image:\n    radial-gradient(\n      ellipse 50% 50% at 50% 50%,\n      #FACC15 0%,\n      #713F12 65%,\n      #000002 100%);\n}\n.btn-event-idle[_ngcontent-%COMP%] {\n  background-image:\n    radial-gradient(\n      ellipse 50% 50% at 50% 50%,\n      #8A38F5 0%,\n      #000002 100%);\n}\n.btn-event-playing[_ngcontent-%COMP%] {\n  background-image:\n    radial-gradient(\n      ellipse 50% 50% at 50% 50%,\n      #C084FC 0%,\n      #3B0764 65%,\n      #000002 100%);\n}\n/*# sourceMappingURL=ap-trn-float-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnFloatButtonComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-float-button", imports: [CommonModule, ApButtonComponent, ApIconComponent], template: `<div class="relative flex items-center justify-center cursor-pointer">
  <div
    class="relative size-14 rounded-full border-2 flex items-center justify-center"
    [ngClass]="{
      'border-yellow-300 hover:border-yellow-200': isYellow(),
      'border-purple-400 hover:border-purple-200': !isYellow(),
      'btn-quick-idle':    isYellow() && !isPlaying(),
      'btn-quick-playing': isYellow() && isPlaying(),
      'btn-event-idle':    !isYellow() && !isPlaying(),
      'btn-event-playing': !isYellow() && isPlaying()
    }"
  >
    @if (isPlaying()) {
      <div
        class="absolute -inset-[2px] rounded-full border-2 border-transparent animate-spin pointer-events-none"
        [ngClass]="spinnerColorClass()"
        style="animation-duration: 1.6s;"
      ></div>
    }

    <ap-icon
      [name]="iconName()"
      class="button-icon"
      [ngClass]="iconColorClass()"
    />
  </div>

  <ap-button
    class="absolute -right-4 top-2 -translate-y-1/2"
    [size]="'small'"
    [icon]="'chevron-right'"
    [variant]="'content-rounded'"
    [accentColor]="accentColor()"
  />

  @if (isYellow()) {
    <div class="absolute top-1/2 -left-2 translate-y-1/6 block size-8">
      <!--Hexagon-->
      <ap-icon name="hexagon" class="w-full h-full text-yellow-400 drop-shadow-md" />
      <!--Rank Number-->
      <div class="absolute inset-0 flex items-center justify-center text-yellow-200">
        <h5>{{ rankLabel() }}</h5>
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/components/ap-trn-float-button/ap-trn-float-button.component.css */\n.btn-quick-idle {\n  background-image:\n    radial-gradient(\n      ellipse 50% 50% at 50% 50%,\n      #71471E 0%,\n      #000002 100%);\n}\n.btn-quick-playing {\n  background-image:\n    radial-gradient(\n      ellipse 50% 50% at 50% 50%,\n      #FACC15 0%,\n      #713F12 65%,\n      #000002 100%);\n}\n.btn-event-idle {\n  background-image:\n    radial-gradient(\n      ellipse 50% 50% at 50% 50%,\n      #8A38F5 0%,\n      #000002 100%);\n}\n.btn-event-playing {\n  background-image:\n    radial-gradient(\n      ellipse 50% 50% at 50% 50%,\n      #C084FC 0%,\n      #3B0764 65%,\n      #000002 100%);\n}\n/*# sourceMappingURL=ap-trn-float-button.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnFloatButtonComponent, { className: "ApTrnFloatButtonComponent", filePath: "src/app/components/ap-trn-float-button/ap-trn-float-button.component.ts", lineNumber: 14 });
})();

// src/app/components/ap-trn-status-bar/ap-trn-status-bar.component.ts
var _c02 = (a0, a1) => ({ "text-yellow-300 ": a0, "text-purple-300 ": a1 });
var ApTrnStatusBarComponent = class _ApTrnStatusBarComponent {
  iconQuick = signal("trophy default");
  iconEvent = signal("gift default");
  accentColor = input("yellow");
  text = input("Quick Race Mode On: Bet x");
  multiplier = input(1.2);
  getTextColor() {
    return this.accentColor() === "yellow" ? "text-yellow-300" : "text-purple-300";
  }
  getDisplayText() {
    const text = this.text();
    if (text) {
      if (text.includes("{0}")) {
        return text.replace("{0}", `${this.multiplier()}`);
      }
      return `${text}${this.multiplier()}`;
    }
    const mode = this.accentColor() === "yellow" ? "Quick Race" : "purple";
    return `${mode} Mode On(Bet x${this.multiplier()})`;
  }
  static \u0275fac = function ApTrnStatusBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnStatusBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnStatusBarComponent, selectors: [["ap-trn-status-bar"]], inputs: { accentColor: [1, "accentColor"], text: [1, "text"], multiplier: [1, "multiplier"] }, decls: 4, vars: 8, consts: [[1, "w-full", "py-0.5", "px-2", "flex", "items-center", "justify-center", "gap-1", "bg-linear-to-r", "from-zinc-900/30", "via-zinc-900/95", "to-zinc-900/30"], [1, "nav-icon", "shrink-0", 3, "name", "ngClass"]], template: function ApTrnStatusBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "ap-icon", 1);
      \u0275\u0275elementStart(2, "h6");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.accentColor() === "yellow" ? ctx.iconQuick() : ctx.iconEvent())("ngClass", \u0275\u0275pureFunction2(5, _c02, ctx.accentColor() === "yellow", ctx.accentColor() === "purple"));
      \u0275\u0275advance();
      \u0275\u0275classMap("font-bold tracking-wider  " + ctx.getTextColor());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getDisplayText(), " ");
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnStatusBarComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-status-bar", imports: [CommonModule, ApIconComponent], template: `<div
  class="w-full py-0.5 px-2 flex items-center justify-center gap-1 bg-linear-to-r from-zinc-900/30 via-zinc-900/95 to-zinc-900/30"
>
  <ap-icon
    [name]="accentColor() === 'yellow' ? iconQuick() : iconEvent()"
    class="nav-icon shrink-0"
    [ngClass]="{
      'text-yellow-300 ': accentColor() === 'yellow',
      'text-purple-300 ': accentColor() === 'purple',
    }"
  />
  <h6 [class]="'font-bold tracking-wider  ' + getTextColor()">
    {{ getDisplayText() }}
  </h6>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnStatusBarComponent, { className: "ApTrnStatusBarComponent", filePath: "src/app/components/ap-trn-status-bar/ap-trn-status-bar.component.ts", lineNumber: 10 });
})();

// src/app/components/ap-trn-card-title/ap-trn-card-title.component.ts
var _c03 = (a0, a1) => [a0, a1];
var _c1 = (a0, a1, a2) => [a0, a1, a2];
var ApTrnCardTitleComponent = class _ApTrnCardTitleComponent {
  accentColor = input("yellow");
  title = input("Event Race");
  size = input("medium");
  iconQuick = input("trophy");
  iconEvent = input("gift");
  getIconSize() {
    return this.size() === "small" ? "size-4" : "size-6";
  }
  getTextSize() {
    return this.size() === "small" ? "text-base" : "text-2xl";
  }
  getContainerLayout() {
    return this.size() === "small" ? "w-fit mx-auto justify-center" : "w-full";
  }
  getTextLayout() {
    return this.size() === "small" ? "text-left flex-none whitespace-nowrap" : "min-w-0 flex-1 text-left break-words whitespace-nowrap overflow-hidden text-ellipsis";
  }
  static \u0275fac = function ApTrnCardTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnCardTitleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnCardTitleComponent, selectors: [["ap-trn-card-title"]], inputs: { accentColor: [1, "accentColor"], title: [1, "title"], size: [1, "size"], iconQuick: [1, "iconQuick"], iconEvent: [1, "iconEvent"] }, decls: 4, vars: 12, consts: [[1, "relative", "flex", "items-center", "flex-nowrap", "gap-1", 3, "ngClass"], [1, "shrink-0", 3, "name", "ngClass"], [1, "font-anton", "tracking-wider", 3, "ngClass"]], template: function ApTrnCardTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "ap-icon", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getContainerLayout());
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.accentColor() === "yellow" ? ctx.iconQuick() : ctx.iconEvent())("ngClass", \u0275\u0275pureFunction2(5, _c03, ctx.getIconSize(), ctx.accentColor() === "yellow" ? "text-yellow-200" : "text-purple-200"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c1, ctx.getTextSize(), ctx.getTextLayout(), ctx.accentColor() === "yellow" ? "text-yellow-200" : "text-purple-200"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnCardTitleComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-card-title", imports: [CommonModule, NgClass, ApIconComponent], template: `<div
  class="relative flex items-center flex-nowrap gap-1"
  [ngClass]="getContainerLayout()"
>
  <ap-icon
    [name]="accentColor() === 'yellow' ? iconQuick() : iconEvent()"
    [ngClass]="[
      getIconSize(),
      accentColor() === 'yellow' ? 'text-yellow-200' : 'text-purple-200'
    ]"
    class="shrink-0"
  />
  <div
    class="font-anton tracking-wider"
    [ngClass]="[
      getTextSize(),
      getTextLayout(),
      accentColor() === 'yellow' ? 'text-yellow-200' : 'text-purple-200'
    ]"
  >
    {{ title() }}
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnCardTitleComponent, { className: "ApTrnCardTitleComponent", filePath: "src/app/components/ap-trn-card-title/ap-trn-card-title.component.ts", lineNumber: 10 });
})();

// src/app/pages/trn-game-confirm/trn-game-confirm.component.ts
var _c04 = (a0, a1) => ({ "border-yellow-300": a0, "border-purple-300": a1 });
var TrnGameConfirmComponent = class _TrnGameConfirmComponent {
  dontShowStorageKey = "ap_storage_trn_game_confirm_dont_show";
  appI18n = inject(AppI18nService);
  getQuickTitle = this.appI18n.computed("QuickRace_Tab", "QUICK");
  getEventTitle = this.appI18n.computed("EventRace_Tab", "EVENT");
  checkboxText = this.appI18n.computed("DontShow_CheckBox", "Do not show again in this week.");
  getStartButton = this.appI18n.computed("Start_Btn", "Start");
  storage = inject(StorageCtrlService);
  trn = inject(TrnCtrlService);
  /** 目前選擇的長期競賽 */
  selectedEvent = input(null);
  accentColor = input("purple");
  header = input("Message");
  bannerImage = input("assets/images/tournament/quick-race/banner_default.png");
  iconImage = input("assets/images/tournament/icon-event.png");
  title = computed(() => {
    return this.accentColor() === "purple" ? "Event Race" : "Quick Race";
  });
  subTitle = input("Tournament Confirmation Title");
  description = input("Win bets earn points, higher rank wins bigger prizes");
  // Internal signals for displaying data
  displayVariant = computed(() => {
    return this.accentColor();
  });
  displayBanner = computed(() => {
    return this.bannerImage();
  });
  displayTitle = computed(() => {
    return this.title();
  });
  displaySubTitle = computed(() => {
    return this.selectedEvent()?.name || this.subTitle();
  });
  displayDescription = computed(() => {
    return this.selectedEvent()?.description || this.description();
  });
  // Checkbox state
  dontShowAgain = signal(false);
  // Output events
  close = output();
  constructor() {
  }
  ngOnInit() {
  }
  onCancel() {
    this.close.emit();
  }
  /* 這週不再顯示 */
  onCheckboxChange(event) {
    const target = event.target;
    this.dontShowAgain.set(target.checked);
  }
  getBannerImage() {
    const banner = this.displayBanner();
    const variant = this.displayVariant();
    const defaultBanner = variant === "yellow" ? "assets/images/tournament/quick-race/banner_default.png" : "assets/images/tournament/event-race/banner_default.png";
    return banner || defaultBanner;
  }
  /** 長期競賽 */
  onJoinEvent() {
    const selectedEvent = this.selectedEvent();
    if (!selectedEvent) {
      return;
    }
    if (this.dontShowAgain()) {
      this.setDontShowAgainByEvent(selectedEvent.id, (/* @__PURE__ */ new Date()).getTime());
    }
    this.close.emit();
    this.trn.openEventRace(selectedEvent.id);
  }
  onJoinQuick() {
    const selectedQuick = this.selectedEvent();
    if (!selectedQuick) {
      return;
    }
    if (this.dontShowAgain()) {
      this.setDontShowAgainByEvent(selectedQuick.id, (/* @__PURE__ */ new Date()).getTime());
    }
    this.close.emit();
    this.trn.sendJoinQuick();
  }
  setDontShowAgainByEvent(eventId, timestamp) {
    const raw = localStorage.getItem(this.dontShowStorageKey);
    const parsed = raw ? JSON.parse(raw) : null;
    const data = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    data[eventId] = timestamp;
    localStorage.setItem(this.dontShowStorageKey, JSON.stringify(data));
  }
  static \u0275fac = function TrnGameConfirmComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnGameConfirmComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrnGameConfirmComponent, selectors: [["trn-game-confirm"]], inputs: { selectedEvent: [1, "selectedEvent"], accentColor: [1, "accentColor"], header: [1, "header"], bannerImage: [1, "bannerImage"], iconImage: [1, "iconImage"], subTitle: [1, "subTitle"], description: [1, "description"] }, outputs: { close: "close" }, decls: 17, vars: 25, consts: [[1, "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "accentColor", "header", "size"], [1, "relative", "px-4", "py-4", "text-center", "mx-8", "text-zinc-300", "flex", "flex-col", "justify-center", "items-center", "gap-4"], [3, "accentColor", "title"], [1, "relative", "rounded-lg", "border-2", "object-contain-scale", "mx-auto", "w-72", "md:w-80", 3, "ngClass", "src"], [1, "relative", "text-xl", "font-bold", "tracking-wide"], [1, "list-disc", "list-inside", "text-left", "text-md", "md:text-sm", "space-y-2", "w-72", "md:w-80"], [1, "h-[0.15rem]", "mx-2", "my-2", "w-80", "bg-linear-to-r", "from-transparent", "to-transparent"], [1, "flex", "items-center", "justify-center", "gap-2", "mb-6"], ["type", "checkbox", "id", "dontShowAgain", 1, "w-5", "h-5", "cursor-pointer", 3, "change", "checked"], ["for", "dontShowAgain", 1, "text-left", "cursor-pointer"], [1, "pb-8", "flex", "justify-center"], [1, "w-48", 3, "clicked", "label", "accentColor", "size"]], template: function TrnGameConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
      \u0275\u0275listener("close", function TrnGameConfirmComponent_Template_ap_ui_frame_popup_close_2_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "ap-trn-card-title", 4)(5, "img", 5);
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ul", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "div", 8);
      \u0275\u0275elementStart(11, "div", 9)(12, "input", 10);
      \u0275\u0275listener("change", function TrnGameConfirmComponent_Template_input_change_12_listener($event) {
        return ctx.onCheckboxChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "label", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 12)(16, "ap-button", 13);
      \u0275\u0275listener("clicked", function TrnGameConfirmComponent_Template_ap_button_clicked_16_listener() {
        return ctx.displayVariant() === "yellow" ? ctx.onJoinQuick() : ctx.onJoinEvent();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", ctx.displayVariant() === "yellow" ? "purple" : "yellow")("header", ctx.header())("size", "mobile");
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", ctx.displayVariant() === "purple" ? "purple" : "yellow")("title", ctx.displayVariant() === "purple" ? ctx.getEventTitle() : ctx.getQuickTitle());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c04, ctx.displayVariant() === "yellow", ctx.displayVariant() === "purple"))("src", ctx.getBannerImage(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.displaySubTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", `All bets boosted x${(tmp_8_0 = ctx.selectedEvent()) == null ? null : tmp_8_0.betMultiplier}, extra added to prize pool. Win bets earn points, higher rank wins bigger prizes.`, " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("via-yellow-300", ctx.displayVariant() === "yellow")("via-purple-300", ctx.displayVariant() === "purple");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("accent-yellow-400", ctx.displayVariant() === "yellow")("accent-purple-400", ctx.displayVariant() === "purple");
      \u0275\u0275property("checked", ctx.dontShowAgain());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.checkboxText(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("label", ctx.getStartButton())("accentColor", ctx.displayVariant() === "yellow" || ctx.displayVariant() === "yellow" ? "yellow" : "purple")("size", "large");
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnGameConfirmComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "trn-game-confirm", imports: [CommonModule, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent], template: `<div class="relative size-full grid place-items-center">
  <div class="absolute inset-0 popup-overlay"></div>
  <ap-ui-frame-popup
    [accentColor]="displayVariant() === 'yellow' ? 'purple' : 'yellow'"
    [header]="header()"
    [size]="'mobile'"
    class="w-11/12 md:w-3/4 lg:w-1/2"
    (close)="onCancel()"
  >
    <!-- Content -->
    <div
      class="relative px-4 py-4 text-center mx-8 text-zinc-300 flex flex-col justify-center items-center gap-4"
    >
      <!-- Tournament Title -->
      <ap-trn-card-title
        [accentColor]="displayVariant() === 'purple' ? 'purple' : 'yellow'"
        [title]="displayVariant() === 'purple' ? getEventTitle() : getQuickTitle()"
      />

      <!-- Tournament Banner -->
      <img
        class="relative rounded-lg border-2 object-contain-scale mx-auto w-72 md:w-80"
        [ngClass]="{
          'border-yellow-300': displayVariant() === 'yellow' ,
          'border-purple-300': displayVariant() === 'purple' 
        }"
        [src]="getBannerImage()"
      />

      <!-- Match Details -->
      <div class="relative text-xl font-bold tracking-wide">
        {{ displaySubTitle() }}
      </div>

      <!-- Bullet Points -->
      <ul
        class="list-disc list-inside text-left text-md md:text-sm space-y-2 w-72 md:w-80"
      >
        {{\`All bets boosted x\${selectedEvent()?.betMultiplier}, extra added to prize pool.
        Win bets earn points, higher rank wins bigger prizes.\`}}
        
      </ul>

      <!-- Separator -->
      <div 
        class="h-[0.15rem] mx-2 my-2 w-80 bg-linear-to-r from-transparent to-transparent"
        [class.via-yellow-300]="displayVariant() === 'yellow'"
        [class.via-purple-300]="displayVariant() === 'purple'"
      ></div>

      <!-- checkbox -->
      <div class="flex items-center justify-center gap-2 mb-6">
        <input
          type="checkbox"
          id="dontShowAgain"
          [checked]="dontShowAgain()"
          (change)="onCheckboxChange($event)"
          class="w-5 h-5 cursor-pointer"
          [class.accent-yellow-400]="displayVariant() === 'yellow'"
          [class.accent-purple-400]="displayVariant() === 'purple'"
        />

        <label for="dontShowAgain" class="text-left cursor-pointer">
          {{ checkboxText() }}
        </label>
      </div>
    </div>

    <!-- Footer -->
    <div class="pb-8 flex justify-center">
      <ap-button
        class="w-48"
        [label]="getStartButton()"
        (clicked)="displayVariant() === 'yellow' ? onJoinQuick() : onJoinEvent()"
        [accentColor]="(displayVariant() === 'yellow' || displayVariant() === 'yellow') ? 'yellow' : 'purple'"
        [size]="'large'"
      />
    </div>
  </ap-ui-frame-popup>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrnGameConfirmComponent, { className: "TrnGameConfirmComponent", filePath: "src/app/pages/trn-game-confirm/trn-game-confirm.component.ts", lineNumber: 20 });
})();

// src/app/pages/trn-game-event-leave-confirm/trn-game-event-leave-confirm.component.ts
var _c05 = (a0, a1) => ({ "text-yellow-300": a0, "text-purple-300": a1 });
var TrnGameEventLeaveConfirmComponent = class _TrnGameEventLeaveConfirmComponent {
  appI18n = inject(AppI18nService);
  header = this.appI18n.computed("message", "Message");
  getQuickTitle = this.appI18n.computed("QuickRace_Tab", "QUICK");
  getEventTitle = this.appI18n.computed("EventRace_Tab", "EVENT");
  getLeaveButton = this.appI18n.computed("Exit_Btn", "Confirm");
  subTitle = this.appI18n.computed("EventLeave_Info_Title", "Confirm to leave the Event Race?");
  displayContent = this.appI18n.computed("EventLeave_Info_Content", "\u2027 After Leave long-term match, you can rejoin Quick Match.\u2027 Leaving keeps your score (Ranking keeps updating) \u2027 You can rejoin long-term via original entry.");
  storage = inject(StorageCtrlService);
  trn = inject(TrnCtrlService);
  /** 目前選擇的長期競賽 */
  selectedEvent = input(null);
  accentColor = input("purple");
  getEventIcon = input("gift");
  getQuickIcon = input("trophy");
  title = computed(() => {
    return this.accentColor() === "yellow" ? "Event Race" : "Quick Race";
  });
  description = input("Win bets earn points, higher rank wins bigger prizes");
  // Internal signals for displaying data
  displayVariant = computed(() => {
    return this.accentColor();
  });
  displayTitle = computed(() => {
    return this.title();
  });
  displaySubTitle = computed(() => {
    return this.selectedEvent()?.name || this.subTitle();
  });
  // Output events
  close = output();
  constructor() {
  }
  ngOnInit() {
  }
  onCancel() {
    this.close.emit();
  }
  /** 長期競賽 */
  onLeaveEvent() {
    this.close.emit();
    this.trn.closeEventRace();
    this.storage.trnEventRunning = null;
  }
  static \u0275fac = function TrnGameEventLeaveConfirmComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnGameEventLeaveConfirmComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrnGameEventLeaveConfirmComponent, selectors: [["trn-game-event-leave-confirm"]], inputs: { selectedEvent: [1, "selectedEvent"], accentColor: [1, "accentColor"], getEventIcon: [1, "getEventIcon"], getQuickIcon: [1, "getQuickIcon"], description: [1, "description"] }, outputs: { close: "close" }, decls: 13, vars: 19, consts: [[1, "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "accentColor", "header", "size"], [1, "relative", "px-4", "py-4", "text-center", "mx-8", "text-zinc-300", "select-none", "flex", "flex-col", "justify-center", "items-center", "gap-4"], [3, "accentColor", "title"], [1, "size-20", 3, "ngClass", "name"], [1, "relative", "text-2xl", "font-bold", "w-72", "md:w-80", "tracking-wide"], [1, "text-left", "text-md", "md:text-sm", "space-y-2", "w-72", "md:w-80"], [1, "h-[0.15rem]", "mx-2", "my-2", "w-80", "bg-linear-to-r", "from-transparent", "to-transparent"], [1, "pb-8", "flex", "justify-center"], [1, "w-48", 3, "clicked", "label", "accentColor", "size"]], template: function TrnGameEventLeaveConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
      \u0275\u0275listener("close", function TrnGameEventLeaveConfirmComponent_Template_ap_ui_frame_popup_close_2_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "ap-trn-card-title", 4)(5, "ap-icon", 5);
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "ap-button", 10);
      \u0275\u0275listener("clicked", function TrnGameEventLeaveConfirmComponent_Template_ap_button_clicked_12_listener() {
        return ctx.onLeaveEvent();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", ctx.displayVariant() === "yellow" ? "purple" : "yellow")("header", ctx.header())("size", "mobile");
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", ctx.displayVariant() === "purple" ? "purple" : "yellow")("title", ctx.displayVariant() === "purple" ? ctx.getEventTitle() : ctx.getQuickTitle());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c05, ctx.displayVariant() === "yellow", ctx.displayVariant() === "purple"))("name", ctx.displayVariant() === "purple" ? ctx.getEventIcon() : ctx.getQuickIcon());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.displaySubTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.displayContent(), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("via-yellow-300", ctx.displayVariant() === "yellow")("via-purple-300", ctx.displayVariant() === "purple");
      \u0275\u0275advance(2);
      \u0275\u0275property("label", ctx.getLeaveButton())("accentColor", ctx.displayVariant() === "yellow" || ctx.displayVariant() === "yellow" ? "yellow" : "purple")("size", "large");
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnGameEventLeaveConfirmComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "trn-game-event-leave-confirm", imports: [CommonModule, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent, ApIconComponent], template: `<div class="relative size-full grid place-items-center">
  <div class="absolute inset-0 popup-overlay"></div>
  <ap-ui-frame-popup
    [accentColor]="displayVariant() === 'yellow' ? 'purple' : 'yellow'"
    [header]="header()"
    [size]="'mobile'"
    class="w-11/12 md:w-3/4 lg:w-1/2"
    (close)="onCancel()"
  >
    <!-- Content -->
    <div
      class="relative px-4 py-4 text-center mx-8 text-zinc-300 select-none flex flex-col justify-center items-center gap-4"
    >
      <!-- Tournament Title -->
      <ap-trn-card-title
        [accentColor]="displayVariant() === 'purple' ? 'purple' : 'yellow'"
        [title]="
          displayVariant() === 'purple' ? getEventTitle() : getQuickTitle()
        "
      />

      <!-- Tournament Icon -->
      <ap-icon
        class="size-20"
        [ngClass]="{
          'text-yellow-300': displayVariant() === 'yellow',
          'text-purple-300': displayVariant() === 'purple',
        }"
        [name]="displayVariant() === 'purple' ? getEventIcon() : getQuickIcon()"
      />

      <!-- Match Details -->
      <div class="relative text-2xl font-bold w-72 md:w-80 tracking-wide">
        {{ displaySubTitle() }}
      </div>

      <!-- Content -->
      <div class="text-left text-md md:text-sm space-y-2 w-72 md:w-80">
        {{ displayContent() }}
      </div>

      <!-- Separator -->
      <div
        class="h-[0.15rem] mx-2 my-2 w-80 bg-linear-to-r from-transparent to-transparent"
        [class.via-yellow-300]="displayVariant() === 'yellow'"
        [class.via-purple-300]="displayVariant() === 'purple'"
      ></div>
    </div>

    <!-- Footer -->
    <div class="pb-8 flex justify-center">
      <ap-button
        class="w-48"
        [label]="getLeaveButton()"
        (clicked)="onLeaveEvent()"
        [accentColor]="
          displayVariant() === 'yellow' || displayVariant() === 'yellow'
            ? 'yellow'
            : 'purple'
        "
        [size]="'large'"
      />
    </div>
  </ap-ui-frame-popup>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrnGameEventLeaveConfirmComponent, { className: "TrnGameEventLeaveConfirmComponent", filePath: "src/app/pages/trn-game-event-leave-confirm/trn-game-event-leave-confirm.component.ts", lineNumber: 21 });
})();

// src/app/components/ap-trn-game-match-finished/ap-trn-game-match-finished.component.ts
var _c06 = (a0, a1) => ({ "text-yellow-400": a0, "text-purple-300": a1 });
var ApTrnGameMatchFinished = class _ApTrnGameMatchFinished {
  accentColor = input("yellow");
  header = input("Match Finished");
  getQuickTitle = input("QUICK");
  getEventTitle = input("EVENT");
  getEventIcon = input("gift");
  getQuickIcon = input("trophy");
  getConfirmButtonText = input("Confirm");
  getList01 = input("Tallying results...(5~10mins)");
  getList02 = input("Prizes will be credited after tallying.");
  onClose = output();
  onConfirm = output();
  oppositeColor = computed(() => this.accentColor() === "yellow" ? "purple" : "yellow");
  displayTitle = computed(() => this.accentColor() === "yellow" ? this.getEventTitle() : this.getQuickTitle());
  displayIcon = computed(() => this.accentColor() === "yellow" ? this.getEventIcon() : this.getQuickIcon());
  clickConfirm() {
    this.onConfirm.emit();
  }
  clickCancel() {
    this.onClose.emit();
  }
  onKey(e) {
    if (e.key === "Enter")
      this.clickConfirm();
  }
  static \u0275fac = function ApTrnGameMatchFinished_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnGameMatchFinished)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnGameMatchFinished, selectors: [["ap-trn-game-match-finished"]], hostBindings: function ApTrnGameMatchFinished_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function ApTrnGameMatchFinished_keydown_HostBindingHandler($event) {
        return ctx.onKey($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { accentColor: [1, "accentColor"], header: [1, "header"], getQuickTitle: [1, "getQuickTitle"], getEventTitle: [1, "getEventTitle"], getEventIcon: [1, "getEventIcon"], getQuickIcon: [1, "getQuickIcon"], getConfirmButtonText: [1, "getConfirmButtonText"], getList01: [1, "getList01"], getList02: [1, "getList02"] }, outputs: { onClose: "onClose", onConfirm: "onConfirm" }, decls: 17, vars: 23, consts: [[1, "relative", "size-full", "flex", "items-center", "justify-center"], [1, "inset-0", "popup-overlay", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", "relative", 3, "close", "accentColor", "header", "size"], [1, "bg-zinc-800", "px-4", "py-4", "text-center", "mx-8", "flex", "flex-col", "justify-center", "items-center", "gap-4"], [3, "accentColor", "title"], [1, "flex", "translate-x-4"], [1, "popup-icon", 3, "name", "ngClass"], ["name", "clock", 1, "info-icon", "translate-y-18", "-translate-x-3", 3, "ngClass"], [1, "h-[0.15rem]", "mx-2", "my-2", "w-80", "bg-linear-to-r", "from-transparent", "to-transparent"], [1, "list-disc", "list-inside", "text-left", "md:text-sm", "space-y-2", "w-72", "md:w-80", "font-medium", "text-zinc-300"], [1, "pb-8", "mt-6", "flex", "justify-center"], [1, "w-48", 3, "click", "label", "size", "accentColor"]], template: function ApTrnGameMatchFinished_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ApTrnGameMatchFinished_Template_div_click_1_listener() {
        return ctx.clickCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
      \u0275\u0275listener("close", function ApTrnGameMatchFinished_Template_ap_ui_frame_popup_close_2_listener() {
        return ctx.clickCancel();
      });
      \u0275\u0275elementStart(3, "div", 3)(4, "div");
      \u0275\u0275element(5, "ap-trn-card-title", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275element(7, "ap-icon", 6)(8, "ap-icon", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "div", 8);
      \u0275\u0275elementStart(10, "ul", 9)(11, "li");
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "li");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "ap-button", 11);
      \u0275\u0275listener("click", function ApTrnGameMatchFinished_Template_ap_button_click_16_listener() {
        return ctx.clickConfirm();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", ctx.oppositeColor())("header", ctx.header())("size", "mobile");
      \u0275\u0275advance(3);
      \u0275\u0275property("accentColor", ctx.oppositeColor())("title", ctx.displayTitle());
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.displayIcon())("ngClass", \u0275\u0275pureFunction2(17, _c06, ctx.accentColor() === "yellow", ctx.accentColor() === "purple"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(20, _c06, ctx.accentColor() === "yellow", ctx.accentColor() === "purple"));
      \u0275\u0275advance();
      \u0275\u0275classProp("via-yellow-300", ctx.accentColor() === "yellow")("via-purple-300", ctx.accentColor() === "purple");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getList01());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getList02());
      \u0275\u0275advance(2);
      \u0275\u0275property("label", ctx.getConfirmButtonText())("size", "large")("accentColor", ctx.accentColor());
    }
  }, dependencies: [CommonModule, NgClass, ApButtonComponent, ApTrnCardTitleComponent, ApUiFramePopupComponent, ApIconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=ap-trn-game-match-finished.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnGameMatchFinished, [{
    type: Component,
    args: [{ standalone: true, selector: "ap-trn-game-match-finished", imports: [CommonModule, ApButtonComponent, ApTrnCardTitleComponent, ApUiFramePopupComponent, ApIconComponent], template: `<div class="relative size-full flex items-center justify-center">
  <div class="inset-0 popup-overlay" (click)="clickCancel()"></div>
  <ap-ui-frame-popup
    [accentColor]="oppositeColor()"
    [header]="header()"
    [size]="'mobile'"
    class="w-11/12 md:w-3/4 lg:w-1/2 relative"
    (close)="clickCancel()"
  >
    <!-- Content -->
    <div
      class="bg-zinc-800 px-4 py-4 text-center mx-8 flex flex-col justify-center items-center gap-4"
    >
      <!-- Tournament Title -->
      <div>
        <ap-trn-card-title
          [accentColor]="oppositeColor()"
          [title]="displayTitle()"
        />
      </div>
      <!-- Icon -->
      <div class="flex translate-x-4">
        <ap-icon
          class="popup-icon"
          [name]="displayIcon()"
          [ngClass]="{
            'text-yellow-400': accentColor() === 'yellow',
            'text-purple-300': accentColor() === 'purple',
          }"
        />
        <ap-icon
          name="clock"
          class="info-icon translate-y-18 -translate-x-3"
          [ngClass]="{
            'text-yellow-400': accentColor() === 'yellow',
            'text-purple-300': accentColor() === 'purple',
          }"
        />
      </div>

      <!-- Separator -->
      <div
        class="h-[0.15rem] mx-2 my-2 w-80 bg-linear-to-r from-transparent to-transparent"
        [class.via-yellow-300]="accentColor() === 'yellow'"
        [class.via-purple-300]="accentColor() === 'purple'"
      ></div>
      <!-- Bullet Points -->
      <ul
        class="list-disc list-inside text-left md:text-sm space-y-2 w-72 md:w-80 font-medium text-zinc-300"
      >
        <li>{{ getList01() }}</li>
        <li>{{ getList02() }}</li>
      </ul>
    </div>

    <!-- Footer -->
    <div class="pb-8 mt-6 flex justify-center">
      <ap-button
        class="w-48"
        [label]="getConfirmButtonText()"
        [size]="'large'"
        (click)="clickConfirm()"
        [accentColor]="accentColor()"
      />
    </div>
  </ap-ui-frame-popup>
</div>
`, styles: ["/* src/app/components/ap-trn-game-match-finished/ap-trn-game-match-finished.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=ap-trn-game-match-finished.component.css.map */\n"] }]
  }], null, { onKey: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnGameMatchFinished, { className: "ApTrnGameMatchFinished", filePath: "src/app/components/ap-trn-game-match-finished/ap-trn-game-match-finished.component.ts", lineNumber: 15 });
})();

// src/app/pages/trn-created-notification/trn-created-notification.component.ts
var _c07 = (a0, a1) => ({ "progress-bar-yellow": a0, "progress-bar-purple": a1 });
function TrnCreatedNotificationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "ap-trn-card-title", 3);
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275element(8, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
    \u0275\u0275element(11, "ap-icon", 10);
    \u0275\u0275elementStart(12, "div", 11)(13, "h2", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h5", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "ap-button", 14);
    \u0275\u0275listener("clicked", function TrnCreatedNotificationComponent_Conditional_0_Template_ap_button_clicked_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickJoin());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ap-icon", 15);
    \u0275\u0275listener("click", function TrnCreatedNotificationComponent_Conditional_0_Template_ap_icon_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickClose());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("size", "small")("title", ctx_r1.getQuickTitle());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.countdownTime());
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("animation-duration", "10s");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c07, ctx_r1.accentColor() === "yellow", ctx_r1.accentColor() === "purple"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentCount(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" /", ctx_r1.totalCount(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r1.buttonJoinLabel())("accentColor", "yellow")("size", "medium");
  }
}
var TrnCreatedNotificationComponent = class _TrnCreatedNotificationComponent {
  trn;
  api;
  appI18n = inject(AppI18nService);
  accentColor = input("yellow");
  autoHide = input(true);
  buttonJoinLabel = this.appI18n.computed("JoinNow_Btn", "JOIN NOW");
  getQuickTitle = this.appI18n.computed("InitiativeMatch_Title", "RACE READY TO GO");
  title = input("RACE READY TO GO");
  currentCount = signal(1);
  totalCount = signal(30);
  countdownTime = computed(() => {
    const seconds = this.progressCurrent();
    return `00:${seconds.toString().padStart(2, "0")}`;
  });
  personImage = input("");
  progressCurrent = signal(10);
  isVisible = signal(false);
  countDownSub = null;
  closeSub = null;
  /** 目前提示對應的tier id */
  tierId = signal(null);
  /** 目前提示的玩家人數 */
  openWindow = output();
  constructor(trn, api) {
    this.trn = trn;
    this.api = api;
    effect(() => {
      if (this.trn.status() !== "idle")
        this.isVisible.set(false);
    });
  }
  ngOnInit() {
    this.trn.debugSignal$.subscribe(this.onDebugSignal.bind(this));
    this.trn.notifyQueueCreated$.subscribe(this.onCreated.bind(this));
    this.trn.notifyQueueUpdated$.subscribe(this.onUpdated.bind(this));
  }
  playNotification() {
    this.endNotification();
    this.isVisible.set(true);
    this.countDownSub = timer(0, 1e3).subscribe((sec) => {
      const remaining = Math.max(0, 10 - sec);
      this.progressCurrent.set(remaining);
      if (remaining <= 0) {
        this.countDownSub?.unsubscribe();
      }
    });
    if (this.autoHide()) {
      this.closeSub = timer(1e4).subscribe(() => {
        this.endNotification();
      });
    }
  }
  endNotification() {
    this.tierId.set(null);
    this.currentCount.set(1);
    this.isVisible.set(false);
    this.countDownSub?.unsubscribe();
    this.closeSub?.unsubscribe();
  }
  ngOnDestroy() {
    this.countDownSub?.unsubscribe();
    this.closeSub?.unsubscribe();
  }
  clickJoin() {
    this.endNotification();
    this.trn.sendJoinQuick();
    this.openWindow.emit();
  }
  clickClose() {
    this.endNotification();
  }
  onCreated(data) {
    if (this.trn.currentTier()?.id !== data.tierId)
      return;
    this.playNotification();
    this.tierId.set(data.tierId);
    this.currentCount.set(data.currentPlayers);
    this.totalCount.set(data.maxPlayers || 30);
    this.currentCount.set(1);
  }
  onUpdated(data) {
    if (this.tierId() === data.tierId) {
      this.currentCount.set(data.currentPlayers);
    }
  }
  onDebugSignal(key) {
    if (key === "created-notification") {
      this.isVisible.set(!this.isVisible());
      if (this.isVisible()) {
        this.playNotification();
      } else {
        this.endNotification();
      }
    }
  }
  static \u0275fac = function TrnCreatedNotificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnCreatedNotificationComponent)(\u0275\u0275directiveInject(TrnCtrlService), \u0275\u0275directiveInject(AppInterfaceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrnCreatedNotificationComponent, selectors: [["trn-created-notification"]], inputs: { accentColor: [1, "accentColor"], autoHide: [1, "autoHide"], title: [1, "title"], personImage: [1, "personImage"] }, outputs: { openWindow: "openWindow" }, decls: 1, vars: 1, consts: [[1, "relative", "w-auto", "bg-zinc-900", "rounded-xl", "border-2", "animate-fade-right", "animate-duration-500", "border-yellow-300"], [1, "relative", "p-2", "flex", "flex-col", "gap-1"], [1, "flex", "items-center", "gap-2"], [3, "size", "title"], [1, "w-10", "text-sm", "font-bold", "text-zinc-100"], [1, "w-8"], [1, "relative", "mt-1", "h-3", "rounded-full", "bg-zinc-800", "outline-1", "outline-offset-2", "outline-zinc-600", "overflow-hidden"], [1, "absolute", "left-0", "top-0", "h-full", "rounded-full", "animate-countdown", 3, "ngClass"], [1, "relative", "flex", "gap-2", "items-center", "justify-between", "mt-1"], [1, "rounded-xl", "w-auto", "flex", "items-center", "gap-1"], ["name", "user default", 1, "size-6", "text-white"], [1, "flex", "items-center", "relative", "mt-4"], [1, "text-white", "text-2xl", "font-semibold", "-translate-y-1/6", "tracking-wider"], [1, "text-zinc-400", "font-semibold", "tracking-wide"], [1, "shrink-0", 3, "clicked", "label", "accentColor", "size"], ["name", "x-mark", 1, "absolute", "top-1", "right-1", "size-8", "text-zinc-300", "hover:text-zinc-100", "cursor-pointer", "active:scale-95", 3, "click"]], template: function TrnCreatedNotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TrnCreatedNotificationComponent_Conditional_0_Template, 19, 14, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isVisible() ? 0 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent], styles: ["\n\n.animate-countdown[_ngcontent-%COMP%] {\n  width: 100%;\n  animation: _ngcontent-%COMP%_countdown linear forwards;\n}\n@keyframes _ngcontent-%COMP%_countdown {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n/*# sourceMappingURL=trn-created-notification.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnCreatedNotificationComponent, [{
    type: Component,
    args: [{ selector: "trn-created-notification", standalone: true, imports: [CommonModule, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent], template: `@if (isVisible()) {
  <div
    class="relative w-auto bg-zinc-900 rounded-xl border-2 animate-fade-right animate-duration-500 border-yellow-300">
    <div class="relative p-2 flex flex-col gap-1">
      <!-- Title Card -->
      <div class="flex items-center gap-2">
        <ap-trn-card-title [size]="'small'" [title]="getQuickTitle()" />
        <span class="w-10 text-sm font-bold text-zinc-100">{{
          countdownTime()
        }}</span>
        <div class="w-8"></div>
      </div>

      <!-- Progress bar with countdown inside -->
      <div
        class="relative mt-1 h-3 rounded-full bg-zinc-800 outline-1 outline-offset-2 outline-zinc-600 overflow-hidden"
      >
        <!-- Progress fill -->
        <div
          class="absolute left-0 top-0 h-full rounded-full animate-countdown"
          [ngClass]="{
            'progress-bar-yellow': accentColor() === 'yellow',
            'progress-bar-purple': accentColor() === 'purple',
          }"
          [style.animation-duration]="'10s'"
        ></div>
      </div>

      <!-- Progress Bar using ap-trn-card-match -->
      <div class="relative flex gap-2 items-center justify-between mt-1">
        <div class="rounded-xl w-auto flex items-center gap-1">
          <ap-icon name="user default" class="size-6 text-white" />
          <!-- Count Display -->
          <div class="flex items-center relative mt-4">
            <h2
              class="text-white text-2xl font-semibold -translate-y-1/6 tracking-wider"
            >
              {{ currentCount() }}
          </h2>
            <h5 class="text-zinc-400 font-semibold tracking-wide">
              /{{ totalCount() }}
            </h5>
          </div>
        </div>

        <!-- Join Button -->
        <ap-button
          class="shrink-0"
          [label]="buttonJoinLabel()"
          [accentColor]="'yellow'"
          [size]="'medium'"
          (clicked)="clickJoin()"
        />
      </div>
    </div>
    <ap-icon
      name="x-mark"
      class="absolute top-1 right-1 size-8 text-zinc-300 hover:text-zinc-100 cursor-pointer active:scale-95"
      (click)="clickClose()"
    />
  </div>
}
`, styles: ["/* src/app/pages/trn-created-notification/trn-created-notification.component.css */\n.animate-countdown {\n  width: 100%;\n  animation: countdown linear forwards;\n}\n@keyframes countdown {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n/*# sourceMappingURL=trn-created-notification.component.css.map */\n"] }]
  }], () => [{ type: TrnCtrlService }, { type: AppInterfaceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrnCreatedNotificationComponent, { className: "TrnCreatedNotificationComponent", filePath: "src/app/pages/trn-created-notification/trn-created-notification.component.ts", lineNumber: 18 });
})();

// src/app/components/ap-trn-list-row/ap-trn-list-row.interface.ts
var defaultPlayersList = [
  {
    "id": "a7k9m3n5p2q8",
    "name": "\xA0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  },
  {
    "id": "b8l0n4o6q3r9",
    "name": "\xA0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  },
  {
    "id": "c9m1o5p7r4s0",
    "name": "\xA0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  },
  {
    "id": "d0n2p6q8s5t1",
    "name": "\xA0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  },
  {
    "id": "e1o3q7r9t6u2",
    "name": "\xA0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  }
];

// src/app/shared/pipe/compact-number.pipe.ts
var CompactNumberPipe = class _CompactNumberPipe {
  locale;
  constructor(locale) {
    this.locale = locale;
  }
  transform(value, digitsInfo) {
    if (value === null || value === void 0)
      return "";
    const num = Number(value);
    if (isNaN(num))
      return value.toString();
    const absValue = Math.abs(num);
    if (absValue >= 1e9) {
      return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (absValue >= 1e6) {
      return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (absValue >= 1e5) {
      return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    }
    if (digitsInfo) {
      return formatNumber(num, this.locale, digitsInfo);
    }
    return num.toLocaleString(this.locale);
  }
  static \u0275fac = function CompactNumberPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompactNumberPipe)(\u0275\u0275directiveInject(LOCALE_ID, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "compactNumber", type: _CompactNumberPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompactNumberPipe, [{
    type: Pipe,
    args: [{
      name: "compactNumber",
      standalone: true
    }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [LOCALE_ID]
  }] }], null);
})();

// src/app/components/ap-trn-list-row/ap-trn-list-row.component.ts
var _c08 = (a0, a1, a2, a3, a4, a5) => ({ "bg-zinc-900/80 border-t border-zinc-800": a0, "bg-zinc-700/80 border-t-2 border-b-2": a1, "border-yellow-300": a2, "border-purple-300": a3, "rank-up": a4, "rank-down": a5 });
var _c12 = (a0, a1) => ({ "text-xs": a0, "text-[10px] tracking-tight": a1 });
var _c2 = (a0, a1) => ({ "text-yellow-300": a0, "text-purple-300": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function ApTrnListRowComponent_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c12, (item_r1.score || 0) < 1e6, (item_r1.score || 0) >= 1e6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.score);
  }
}
function ApTrnListRowComponent_For_4_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ApTrnListRowComponent_For_4_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "compactNumber");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c2, ctx_r1.accentColor() === "yellow", ctx_r1.accentColor() === "purple"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.currency(), "", \u0275\u0275pipeBind2(2, 3, item_r1.win, "1.0-1"), " ");
  }
}
function ApTrnListRowComponent_For_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApTrnListRowComponent_For_4_Conditional_10_Conditional_0_Template, 2, 0, "div", 9)(1, ApTrnListRowComponent_For_4_Conditional_10_Conditional_1_Template, 3, 9, "div", 10);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r1.win === 0 ? 0 : 1);
  }
}
function ApTrnListRowComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 2)(1, "td", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 5)(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 7);
    \u0275\u0275conditionalCreate(8, ApTrnListRowComponent_For_4_Conditional_8_Template, 2, 5, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 7);
    \u0275\u0275conditionalCreate(10, ApTrnListRowComponent_For_4_Conditional_10_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(6, _c08, !item_r1.highlighted, item_r1.highlighted, item_r1.highlighted && ctx_r1.accentColor() === "yellow", item_r1.highlighted && ctx_r1.accentColor() === "purple", ctx_r1.getRankChange(item_r1.id) === "up", ctx_r1.getRankChange(item_r1.id) === "down"));
    \u0275\u0275attribute("data-id", item_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.rank !== null ? item_r1.rank : "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r1.score !== void 0 ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r1.win !== void 0 ? 10 : -1);
  }
}
var ApTrnListRowComponent = class _ApTrnListRowComponent {
  items = input(defaultPlayersList.slice(0, 5));
  showDividers = input(true);
  clickable = input(true);
  borderColor = input("border-zinc-500");
  selectable = input(false);
  selectedIds = input([]);
  accentColor = input("yellow");
  currency = input("$");
  // 追蹤每個項目的排名變化
  rankChanges = /* @__PURE__ */ new Map();
  previousRanks = /* @__PURE__ */ new Map();
  constructor() {
    effect(() => {
      const currentItems = this.items();
      const newRankChanges = /* @__PURE__ */ new Map();
      currentItems.forEach((item) => {
        const previousRank = this.previousRanks.get(item.id);
        if (previousRank !== void 0 && previousRank !== null && previousRank !== item.rank && item.rank !== null) {
          if (item.rank < previousRank) {
            newRankChanges.set(item.id, "up");
          } else if (item.rank > previousRank) {
            newRankChanges.set(item.id, "down");
          }
        } else {
          newRankChanges.set(item.id, "none");
        }
        this.previousRanks.set(item.id, item.rank);
      });
      this.rankChanges = newRankChanges;
      setTimeout(() => {
        this.rankChanges = new Map(Array.from(this.rankChanges.entries()).map(([id]) => [id, "none"]));
      }, 1e3);
    });
  }
  getRankChange(id) {
    return this.rankChanges.get(id) || "none";
  }
  static \u0275fac = function ApTrnListRowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnListRowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnListRowComponent, selectors: [["ap-trn-list-row"]], inputs: { items: [1, "items"], showDividers: [1, "showDividers"], clickable: [1, "clickable"], borderColor: [1, "borderColor"], selectable: [1, "selectable"], selectedIds: [1, "selectedIds"], accentColor: [1, "accentColor"], currency: [1, "currency"] }, decls: 5, vars: 0, consts: [["list", ""], [1, "relative", "w-full"], [1, "relative", "text-sm", "text-white", 3, "ngClass"], [1, "p-0.5", "align-middle", "w-6"], [1, "w-4", "text-xs", "text-left"], [1, "py-0.5", "align-middle", "w-8"], [1, "w-6", "opacity-90", "truncate", "text-xs", "text-white"], [1, "p-0.5", "align-middle", "text-right"], [1, "font-semibold", "text-white", 3, "ngClass"], [1, "inline-block", "text-right", "font-semibold", "text-xs", "pr-1.5"], [1, "inline-block", "text-right", "font-semibold", "text-xs", 3, "ngClass"]], template: function ApTrnListRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "table", 1, 0)(2, "tbody");
      \u0275\u0275repeaterCreate(3, ApTrnListRowComponent_For_4_Template, 11, 13, "tr", 2, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.items());
    }
  }, dependencies: [CommonModule, NgClass, CompactNumberPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n@keyframes _ngcontent-%COMP%_rankUp {\n  0% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_rankDown {\n  0% {\n    transform: translateY(-10px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.rank-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rankUp 0.25s ease-out;\n}\n.rank-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rankDown 0.25s ease-out;\n}\n/*# sourceMappingURL=ap-trn-list-row.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnListRowComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-list-row", standalone: true, imports: [CommonModule, CompactNumberPipe], template: `<table #list class="relative w-full">
  <tbody>
    @for (item of items(); track item.id; let i = $index) {
    <tr class="relative text-sm text-white"
      [ngClass]="{ 
        'bg-zinc-900/80 border-t border-zinc-800': !item.highlighted,
        'bg-zinc-700/80 border-t-2 border-b-2': item.highlighted,
        'border-yellow-300': item.highlighted && accentColor() === 'yellow',
        'border-purple-300': item.highlighted && accentColor() === 'purple',
        'rank-up': getRankChange(item.id) === 'up',
        'rank-down': getRankChange(item.id) === 'down'
      }"
      [attr.data-id]="item.id"
    >
      <!-- Left section with ranking -->
      <td class="p-0.5 align-middle w-6">
        <div class="w-4 text-xs text-left">{{ (item.rank !== null) ? item.rank : '-' }}</div>
      </td>
      <td class="py-0.5 align-middle w-8">
        <div class="w-6 opacity-90 truncate text-xs text-white">{{item.name}}</div>
      </td>

      <!-- Right section with score and bonus -->
      <td class="p-0.5 align-middle text-right ">
        @if (item.score !== undefined) {
          <span class="font-semibold text-white" [ngClass]="{
            'text-xs': (item.score || 0) < 1000000,
            'text-[10px] tracking-tight': (item.score || 0) >= 1000000
          }">{{ item.score }}</span>
        }
      </td>
      <td class="p-0.5 align-middle text-right ">
        @if (item.win !== undefined) {
          @if (item.win === 0) {
            <div class="inline-block text-right font-semibold text-xs pr-1.5">-</div>
          } @else {
            <div class="inline-block text-right font-semibold text-xs" [ngClass]="{
                'text-yellow-300': accentColor() === 'yellow',
                'text-purple-300': accentColor() === 'purple'
              }">{{ currency() }}{{ item.win | compactNumber:'1.0-1' }}
            </div>
          }
        }
      </td>
    </tr>
  }
  </tbody>
</table>
`, styles: ["/* src/app/components/ap-trn-list-row/ap-trn-list-row.component.css */\n:host {\n  display: block;\n  width: 100%;\n}\n@keyframes rankUp {\n  0% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes rankDown {\n  0% {\n    transform: translateY(-10px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.rank-up {\n  animation: rankUp 0.25s ease-out;\n}\n.rank-down {\n  animation: rankDown 0.25s ease-out;\n}\n/*# sourceMappingURL=ap-trn-list-row.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnListRowComponent, { className: "ApTrnListRowComponent", filePath: "src/app/components/ap-trn-list-row/ap-trn-list-row.component.ts", lineNumber: 13 });
})();

// src/app/components/ap-trn-game-result/ap-trn-game-result.component.ts
var _c09 = (a0, a1) => ({ "text-yellow-gradient": a0, "text-purple-gradient": a1 });
var _c13 = (a0, a1) => ({ "text-yellow-200": a0, "text-purple-300": a1 });
function ApTrnGameResultComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div");
    \u0275\u0275text(2, "Campaign ID : ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getCampaignID());
  }
}
var ApTrnGameResultComponent = class _ApTrnGameResultComponent {
  getEventDetailsButtonText = input("Event Details");
  getPrizeLabel = input("Prize");
  getButtonLabel = input("Confirm");
  getQuickTitle = input("QUICK");
  getEventTitle = input("EVENT");
  getRoomID = input("123456abcdefg");
  getCampaignID = input("abcdefg123456");
  data = input(null);
  playList = input(defaultPlayersList.slice(0, 5));
  currency = input("$");
  rank = input(1);
  prize = input(0);
  // Customizable inputs (can be overridden)
  accentColor = input("yellow");
  EventIcon = input("assets/images/tournament/icon-event.png");
  EventTitle = input("Event Title");
  header = input("Game Result");
  displayAccentColor = computed(() => {
    const variant = this.data()?.variant ?? this.accentColor();
    return variant === "quick" || variant === "yellow" ? "yellow" : "purple";
  });
  displayEventIcon = computed(() => this.data()?.banner ?? this.EventIcon());
  displayEventTitle = computed(() => this.data()?.title ?? this.EventTitle());
  clickClose = output();
  clickConfirm = output();
  raceDetails = output();
  onRaceDetails() {
    this.raceDetails.emit();
  }
  /*
  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Enter') this.clickConfirm();
  }*/
  getButtonAccentColor() {
    return this.displayAccentColor();
  }
  static \u0275fac = function ApTrnGameResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnGameResultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnGameResultComponent, selectors: [["ap-trn-game-result"]], inputs: { getEventDetailsButtonText: [1, "getEventDetailsButtonText"], getPrizeLabel: [1, "getPrizeLabel"], getButtonLabel: [1, "getButtonLabel"], getQuickTitle: [1, "getQuickTitle"], getEventTitle: [1, "getEventTitle"], getRoomID: [1, "getRoomID"], getCampaignID: [1, "getCampaignID"], data: [1, "data"], playList: [1, "playList"], currency: [1, "currency"], rank: [1, "rank"], prize: [1, "prize"], accentColor: [1, "accentColor"], EventIcon: [1, "EventIcon"], EventTitle: [1, "EventTitle"], header: [1, "header"] }, outputs: { clickClose: "clickClose", clickConfirm: "clickConfirm", raceDetails: "raceDetails" }, decls: 36, vars: 28, consts: [[1, "relative", "size-full", "flex", "items-center", "justify-center"], [1, "absolute", "inset-0", "bg-black/60", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", "relative", 3, "click", "accentColor", "header", "size"], [1, "bg-zinc-800", "px-4", "py-4", "text-center", "mx-8", "select-none", "flex", "flex-col", "justify-center", "items-center"], [1, "mb-2"], [3, "accentColor", "title"], [1, "relative", "w-24", "h-24", "mx-auto", "flex", "items-center", "justify-center"], ["viewBox", "0 0 110 100", 1, "w-full", "h-full"], ["points", "55,5 95,30 95,70 55,95 15,70 15,30", "stroke-width", "4", "fill", "bg-black"], [1, "absolute", "font-anton", "inset-0", "flex", "items-center", "justify-center", "text-[2.5rem]", 3, "ngClass"], [1, "w-auto", "h-10", "px-4", "bg-zinc-900", "text-yellow-200", "rounded-full", "mt-4", 3, "ngClass"], [1, "text-xs", "text-left", "-translate-y-2", "font-medium"], [1, "flex", "-translate-y-2", "justify-center", "items-center", "space-x-1"], [1, "text-md"], [1, "text-2xl", "text-center", "font-bold"], [1, "flex", "flex-col", "w-[85%]", "mt-2"], [1, "mt-4", 3, "currency", "items", "showDividers", "accentColor"], ["type", "button", 1, "flex", "items-center", "justify-center", "text-zinc-300", "font-normal", "tracking-wide", "select-none", "mt-2", "cursor-pointer", 3, "click"], [1, "border-b", "border-zinc-300", "flex", "items-center", "gap-1"], ["name", "exclamation-circle default", 1, "size-4"], [1, "inline-flex", "gap-3", "absolute", "bottom-1", "right-2.5", "text-zinc-500", "text-xs"], [1, "inline-flex", "gap-0.5", "items-start", "flex-col", "min-[365px]:flex-row"], [1, "pb-12", "min-[365px]:pb-8", "mt-6", "flex", "justify-center"], [1, "w-48", 3, "clicked", "label", "accentColor", "size"]], template: function ApTrnGameResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ApTrnGameResultComponent_Template_div_click_1_listener() {
        return ctx.clickClose.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
      \u0275\u0275listener("click", function ApTrnGameResultComponent_Template_ap_ui_frame_popup_click_2_listener() {
        return ctx.clickClose.emit();
      });
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "ap-trn-card-title", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 7);
      \u0275\u0275element(8, "polygon", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 9)(10, "span");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 15);
      \u0275\u0275element(21, "ap-trn-list-row", 16);
      \u0275\u0275elementStart(22, "button", 17);
      \u0275\u0275listener("click", function ApTrnGameResultComponent_Template_button_click_22_listener($event) {
        ctx.onRaceDetails();
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(23, "div", 18);
      \u0275\u0275element(24, "ap-icon", 19);
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 20)(28, "div", 21)(29, "div");
      \u0275\u0275text(30, "Room ID : ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div");
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(33, ApTrnGameResultComponent_Conditional_33_Template, 5, 1, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 22)(35, "ap-button", 23);
      \u0275\u0275listener("clicked", function ApTrnGameResultComponent_Template_ap_button_clicked_35_listener() {
        return ctx.clickConfirm.emit();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", ctx.displayAccentColor() === "yellow" ? "purple" : "yellow")("header", ctx.header())("size", "mobile");
      \u0275\u0275advance(3);
      \u0275\u0275property("accentColor", ctx.displayAccentColor() === "purple" ? "purple" : "yellow")("title", ctx.displayAccentColor() === "yellow" ? ctx.getEventTitle() : ctx.getQuickTitle());
      \u0275\u0275advance(3);
      \u0275\u0275attribute("stroke", ctx.displayAccentColor() === "yellow" ? "#FFD700" : "#E9D4FF");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c09, ctx.displayAccentColor() === "yellow", ctx.displayAccentColor() === "purple"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.rank());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c13, ctx.displayAccentColor() === "yellow", ctx.displayAccentColor() === "purple"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.getPrizeLabel(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currency());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.prize(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("currency", ctx.currency())("items", ctx.playList())("showDividers", false)("accentColor", ctx.displayAccentColor() === "yellow" ? "yellow" : "purple");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getEventDetailsButtonText());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.getRoomID());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.displayAccentColor() === "yellow" ? 33 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", ctx.getButtonLabel())("accentColor", ctx.getButtonAccentColor())("size", "large");
    }
  }, dependencies: [CommonModule, NgClass, ApTrnCardTitleComponent, ApUiFramePopupComponent, ApIconComponent, ApTrnListRowComponent, ApButtonComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=ap-trn-game-result.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnGameResultComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "ap-trn-game-result", imports: [
      CommonModule,
      ApTrnCardTitleComponent,
      ApUiFramePopupComponent,
      ApIconComponent,
      ApTrnListRowComponent,
      ApButtonComponent
    ], template: `<div class="relative size-full flex items-center justify-center">
  <div class="absolute inset-0 bg-black/60" (click)="clickClose.emit()"></div>
  <ap-ui-frame-popup
    [accentColor]="displayAccentColor() === 'yellow' ? 'purple' : 'yellow'"
    [header]="header()"
    [size]="'mobile'"
    class="w-11/12 md:w-3/4 lg:w-1/2 relative"
    (click)="clickClose.emit()"
  >
    <!-- Content -->
    <div
      class="bg-zinc-800 px-4 py-4 text-center mx-8 select-none flex flex-col justify-center items-center"
    >
      <!-- Tournament Title -->
      <div class="mb-2">
        <ap-trn-card-title
          [accentColor]="displayAccentColor() === 'purple' ? 'purple' : 'yellow'"
          [title]="
            displayAccentColor() === 'yellow' ? getEventTitle() : getQuickTitle()
          "
        />
      </div>
      <!-- Hexagon with Rank Number -->
      <div class="relative w-24 h-24 mx-auto flex items-center justify-center">
        <svg viewBox="0 0 110 100" class="w-full h-full">
          <polygon
            points="55,5 95,30 95,70 55,95 15,70 15,30"
            [attr.stroke]="displayAccentColor() === 'yellow' ? '#FFD700' : '#E9D4FF'"
            stroke-width="4"
            fill="bg-black"
          />
        </svg>
        <!--Rank Number-->
        <div
          class="absolute font-anton inset-0 flex items-center justify-center text-[2.5rem]"
          [ngClass]="{
            'text-yellow-gradient': displayAccentColor() === 'yellow',
            'text-purple-gradient': displayAccentColor() === 'purple',
          }"
        >
          <span>{{ rank() }}</span>
        </div>
      </div>
      <!-- Prize -->
      <div
        class="w-auto h-10 px-4 bg-zinc-900 text-yellow-200 rounded-full mt-4"
        [ngClass]="{
          'text-yellow-200': displayAccentColor() === 'yellow',
          'text-purple-300': displayAccentColor() === 'purple',
        }"
      >
        <div class="text-xs text-left -translate-y-2 font-medium">
          {{ getPrizeLabel() }}
        </div>
        <div class="flex -translate-y-2 justify-center items-center space-x-1">
          <div class="text-md">{{ currency() }}</div>
          <div class="text-2xl text-center font-bold">
            {{ prize() }}
          </div>
        </div>
      </div>

      <!-- List -->
      <div class="flex flex-col w-[85%] mt-2">
        <ap-trn-list-row
          [currency]="currency()"
          class="mt-4"
          [items]="playList()"
          [showDividers]="false"
          [accentColor]="displayAccentColor() === 'yellow' ? 'yellow' : 'purple'"
        />
        <button
          type="button"
          class="flex items-center justify-center text-zinc-300 font-normal tracking-wide select-none mt-2 cursor-pointer"
          (click)="onRaceDetails(); $event.stopPropagation()"
        >
          <div class="border-b border-zinc-300 flex items-center gap-1">
            <ap-icon name="exclamation-circle default" class="size-4" />
            <span> {{ getEventDetailsButtonText() }}</span>
          </div>
        </button>
      </div>
      
      <!-- room ID -->
      <div class="inline-flex gap-3 absolute bottom-1 right-2.5 text-zinc-500 text-xs">
        <div class="inline-flex gap-0.5 items-start flex-col min-[365px]:flex-row">
          <div>Room ID : </div>
          <div>{{ getRoomID() }}</div>
        </div>
        @if (displayAccentColor() === 'yellow') {
          <div class="inline-flex gap-0.5 items-start flex-col min-[365px]:flex-row">
            <div>Campaign ID : </div>
            <div>{{ getCampaignID() }}</div>
          </div>
        }
        
      </div>
    </div>

    <!-- Footer -->
    <div class="pb-12 min-[365px]:pb-8 mt-6 flex justify-center">
      <ap-button
        class="w-48"
        [label]="getButtonLabel()"
        (clicked)="clickConfirm.emit()"
        [accentColor]="getButtonAccentColor()"
        [size]="'large'"
      />
    </div>
  </ap-ui-frame-popup>
</div>
`, styles: ["/* src/app/components/ap-trn-game-result/ap-trn-game-result.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=ap-trn-game-result.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnGameResultComponent, { className: "ApTrnGameResultComponent", filePath: "src/app/components/ap-trn-game-result/ap-trn-game-result.component.ts", lineNumber: 21 });
})();

// src/ap-components-lib/ap-tab-menu-icon/ap-tab-menu-icon.component.ts
var _c010 = ["tabContainer"];
var _forTrack02 = ($index, $item) => $item.id;
function ApTabMenuIconComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 8);
    \u0275\u0275listener("clicked", function ApTabMenuIconComponent_Conditional_0_Template_ap_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollTabs("left"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("showLabel", false);
  }
}
function ApTabMenuIconComponent_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-icon-badge", 11);
    \u0275\u0275element(1, "ap-icon", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("badgeTop", "top-2")("hasBadge", tab_r5.hasBadge ?? false);
    \u0275\u0275advance();
    \u0275\u0275property("name", tab_r5.icon);
  }
}
function ApTabMenuIconComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9, 1);
    \u0275\u0275listener("click", function ApTabMenuIconComponent_For_6_Template_div_click_0_listener() {
      const tab_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const tabItem_r6 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!tab_r5.disabled && ctx_r2.onTabClick(tab_r5.id, tabItem_r6));
    });
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275conditionalCreate(3, ApTabMenuIconComponent_For_6_Conditional_3_Template, 2, 3, "ap-icon-badge", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", tab_r5.disabled);
    \u0275\u0275property("ngClass", ctx_r2.isSelected(tab_r5.id) ? ctx_r2.getActiveClasses() : ctx_r2.getInactiveClasses());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(tab_r5.icon ? 3 : -1);
  }
}
function ApTabMenuIconComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 13);
    \u0275\u0275listener("clicked", function ApTabMenuIconComponent_Conditional_7_Template_ap_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollTabs("right"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("showLabel", false);
  }
}
var activeClassMap = {
  yellow: "text-yellow-400 border-yellow-400",
  orange: "text-orange-400 border-orange-400",
  slate: "text-slate-400 border-slate-400"
};
var inactiveClassMap = {
  yellow: "text-zinc-500 border-zinc-500 dark:hover:text-yellow-200 dark:hover:border-yellow-200 hover:text-yellow-300 hover:border-yellow-300",
  orange: "text-zinc-500 border-zinc-500 dark:hover:text-orange-200 dark:hover:border-orange-200 hover:text-orange-300 hover:border-orange-300",
  slate: "text-zinc-500 border-zinc-500 dark:hover:text-slate-300 dark:hover:border-slate-200 hover:text-slate-300 hover:border-slate-300"
};
var ApTabMenuIconComponent = class _ApTabMenuIconComponent {
  /** 可水平捲動的頁籤容器。 */
  tabContainer;
  /** 要顯示的頁籤項目。 */
  tabs = input([
    { id: "tab1", label: "Tab 1", icon: "star" },
    { id: "tab2", label: "Tab 2", icon: "trophy" },
    { id: "tab3", label: "Tab 3", icon: "sparkles" }
  ]);
  /** 目前選取的頁籤 ID。 */
  selectedTab = input("tab1");
  /** 選取及 hover 狀態使用的強調色。 */
  accentColor = input("yellow");
  /** 頁籤排列方式。 */
  justify = input("center");
  /** 使用者選取頁籤時發出的頁籤 ID。 */
  tabChange = output();
  /** 螢幕是否符合手機版寬度。 */
  isMobile = signal(false);
  /** 容器是否仍可向左捲動。 */
  canScrollLeft = signal(false);
  /** 容器是否仍可向右捲動。 */
  canScrollRight = signal(true);
  /** 頁籤數量較多時顯示溢位提示。 */
  showOverflowHint = computed(() => this.tabs().length > (this.isMobile() ? 10 : 14));
  /** 監聽容器捲動與螢幕寬度變化所需的資源。 */
  destroyRef = inject(DestroyRef);
  mediaQueryList;
  mediaQueryHandler;
  /** 拖曳捲動時使用的起點、捲動位置及狀態。 */
  isDragging = false;
  startX = 0;
  scrollLeft = 0;
  hasDragged = false;
  /** 更新左右捲動提示，並在元件銷毀時移除監聽器。 */
  scrollHandler = () => {
    if (!this.tabContainer?.nativeElement)
      return;
    const el = this.tabContainer.nativeElement;
    this.canScrollLeft.set(el.scrollLeft > 1);
    this.canScrollRight.set(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };
  constructor() {
    this.setupMediaQuery();
  }
  ngAfterViewInit() {
    const el = this.tabContainer?.nativeElement;
    if (!el)
      return;
    el.addEventListener("scroll", this.scrollHandler, { passive: true });
    this.destroyRef.onDestroy(() => {
      el.removeEventListener("scroll", this.scrollHandler);
    });
  }
  onTabClick(tabId, tabEl) {
    if (!this.hasDragged) {
      this.tabChange.emit(tabId);
      if (tabEl && this.tabContainer?.nativeElement) {
        this.scrollTabIntoCenter(tabEl);
      }
    }
  }
  isSelected(tabId) {
    return this.selectedTab() === tabId;
  }
  /** 依方向捲動頁籤列，讓使用者可透過按鈕瀏覽隱藏的頁籤。 */
  scrollTabs(direction) {
    const container = this.tabContainer?.nativeElement;
    if (!container)
      return;
    container.scrollBy({
      left: direction === "left" ? -container.clientWidth * 0.75 : container.clientWidth * 0.75,
      behavior: "smooth"
    });
  }
  getSelectedLabel() {
    const selected = this.selectedTab();
    const tab = this.tabs().find((item) => item.id === selected);
    return tab?.label ?? "";
  }
  getActiveClasses() {
    return activeClassMap[this.accentColor()];
  }
  getInactiveClasses() {
    return inactiveClassMap[this.accentColor()];
  }
  onMouseDown(event) {
    this.isDragging = true;
    this.hasDragged = false;
    this.startX = event.pageX - this.tabContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.tabContainer.nativeElement.scrollLeft;
    this.tabContainer.nativeElement.style.cursor = "grabbing";
    event.preventDefault();
  }
  onMouseMove(event) {
    if (!this.isDragging)
      return;
    event.preventDefault();
    const x = event.pageX - this.tabContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.tabContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
    if (Math.abs(walk) > 5) {
      this.hasDragged = true;
    }
  }
  onMouseUp(event) {
    this.isDragging = false;
    this.tabContainer.nativeElement.style.cursor = "grab";
    setTimeout(() => {
      this.hasDragged = false;
    }, 100);
  }
  onTouchStart(event) {
    this.isDragging = true;
    this.hasDragged = false;
    this.startX = event.touches[0].pageX - this.tabContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.tabContainer.nativeElement.scrollLeft;
  }
  onTouchMove(event) {
    if (!this.isDragging)
      return;
    const x = event.touches[0].pageX - this.tabContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.tabContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
    if (Math.abs(walk) > 5) {
      this.hasDragged = true;
    }
  }
  onTouchEnd(event) {
    this.isDragging = false;
    setTimeout(() => {
      this.hasDragged = false;
    }, 100);
  }
  scrollTabIntoCenter(tabEl) {
    const container = this.tabContainer.nativeElement;
    const targetLeft = tabEl.offsetLeft - (container.clientWidth - tabEl.clientWidth) / 2;
    container.scrollTo({
      left: targetLeft,
      behavior: "smooth"
    });
  }
  setupMediaQuery() {
    if (typeof window === "undefined" || !window.matchMedia) {
      this.isMobile.set(false);
      return;
    }
    this.mediaQueryList = window.matchMedia("(max-width: 639px)");
    this.isMobile.set(this.mediaQueryList.matches);
    this.mediaQueryHandler = (event) => {
      this.isMobile.set(event.matches);
    };
    this.mediaQueryList.addEventListener("change", this.mediaQueryHandler);
    this.destroyRef.onDestroy(() => {
      if (this.mediaQueryList && this.mediaQueryHandler) {
        this.mediaQueryList.removeEventListener("change", this.mediaQueryHandler);
      }
    });
  }
  static \u0275fac = function ApTabMenuIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTabMenuIconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTabMenuIconComponent, selectors: [["ap-tab-menu-icon"]], viewQuery: function ApTabMenuIconComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c010, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabContainer = _t.first);
    }
  }, inputs: { tabs: [1, "tabs"], selectedTab: [1, "selectedTab"], accentColor: [1, "accentColor"], justify: [1, "justify"] }, outputs: { tabChange: "tabChange" }, decls: 8, vars: 3, consts: [["tabContainer", ""], ["tabItem", ""], ["icon", "chevron-left", "size", "small", "variant", "outlined", "accentColor", "zinc", 1, "absolute", "sm:left-40", "left-4", "top-6", "flex", "h-8", "w-8", "items-center", "justify-center", "animate-fade", "animate-infinite", "animate-duration-[2000ms]", "animate-delay-[30ms]", "animate-ease-in-out", 3, "showLabel"], [1, "relative", "w-full", "overflow-hidden", "sm:h-18", "h-14", "justify-center"], [1, "absolute", "bottom-0", "w-full", "overflow-x-hidden", "overflow-y-visible"], [1, "relative", "flex", "overflow-x-auto", "scrollbar-hide", "touch-pan-x", "select-none", "tab-container", "max-w-[24rem]", "sm:max-w-[45rem]", "mx-auto", 2, "scroll-behavior", "smooth", "cursor", "grab", 3, "mousedown", "mousemove", "mouseup", "mouseleave", "touchstart", "touchmove", "touchend", "ngClass"], [1, "group", "relative", "flex", "flex-col", "justify-center", "items-center", "p-1", "gap-2", "cursor-pointer", "whitespace-nowrap", "shrink-0", "transition-colors", "duration-200", 2, "border-bottom", "2px solid", 3, "disabled", "ngClass"], ["icon", "chevron-right", "size", "small", "variant", "outlined", "accentColor", "zinc", 1, "absolute", "sm:right-40", "top-6", "right-4", "flex", "h-8", "w-8", "items-center", "justify-center", "justify-center", "animate-fade", "animate-infinite", "animate-duration-[2000ms]", "animate-delay-[30ms]", "animate-ease-in-out", 3, "showLabel"], ["icon", "chevron-left", "size", "small", "variant", "outlined", "accentColor", "zinc", 1, "absolute", "sm:left-40", "left-4", "top-6", "flex", "h-8", "w-8", "items-center", "justify-center", "animate-fade", "animate-infinite", "animate-duration-[2000ms]", "animate-delay-[30ms]", "animate-ease-in-out", 3, "clicked", "showLabel"], [1, "group", "relative", "flex", "flex-col", "justify-center", "items-center", "p-1", "gap-2", "cursor-pointer", "whitespace-nowrap", "shrink-0", "transition-colors", "duration-200", 2, "border-bottom", "2px solid", 3, "click", "ngClass"], [1, "flex", "justify-center", "items-center", "border-current"], [1, "sm:size-11", "size-9", 3, "badgeTop", "hasBadge"], [1, "size-full", 3, "name"], ["icon", "chevron-right", "size", "small", "variant", "outlined", "accentColor", "zinc", 1, "absolute", "sm:right-40", "top-6", "right-4", "flex", "h-8", "w-8", "items-center", "justify-center", "justify-center", "animate-fade", "animate-infinite", "animate-duration-[2000ms]", "animate-delay-[30ms]", "animate-ease-in-out", 3, "clicked", "showLabel"]], template: function ApTabMenuIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275conditionalCreate(0, ApTabMenuIconComponent_Conditional_0_Template, 1, 1, "ap-button", 2);
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5, 0);
      \u0275\u0275listener("mousedown", function ApTabMenuIconComponent_Template_div_mousedown_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseDown($event));
      })("mousemove", function ApTabMenuIconComponent_Template_div_mousemove_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseMove($event));
      })("mouseup", function ApTabMenuIconComponent_Template_div_mouseup_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseUp($event));
      })("mouseleave", function ApTabMenuIconComponent_Template_div_mouseleave_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseUp($event));
      })("touchstart", function ApTabMenuIconComponent_Template_div_touchstart_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTouchStart($event));
      })("touchmove", function ApTabMenuIconComponent_Template_div_touchmove_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTouchMove($event));
      })("touchend", function ApTabMenuIconComponent_Template_div_touchend_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTouchEnd($event));
      });
      \u0275\u0275repeaterCreate(5, ApTabMenuIconComponent_For_6_Template, 4, 4, "div", 6, _forTrack02);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(7, ApTabMenuIconComponent_Conditional_7_Template, 1, 1, "ap-button", 7);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showOverflowHint() && ctx.canScrollLeft() ? 0 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.justify() === "center" && !ctx.showOverflowHint() ? "justify-center" : "justify-start");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showOverflowHint() && ctx.canScrollRight() ? 7 : -1);
    }
  }, dependencies: [NgClass, ApButtonComponent, ApIconComponent, ApIconBadgeComponent], styles: ["\n\n.scrollbar-hide[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.scrollbar-hide[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n/*# sourceMappingURL=ap-tab-menu-icon.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTabMenuIconComponent, [{
    type: Component,
    args: [{ selector: "ap-tab-menu-icon", imports: [NgClass, ApButtonComponent, ApIconComponent, ApIconBadgeComponent], template: `@if (showOverflowHint() && canScrollLeft()) {
  <ap-button
    class="absolute sm:left-40 left-4 top-6 flex h-8 w-8 items-center justify-center animate-fade animate-infinite animate-duration-[2000ms] animate-delay-[30ms] animate-ease-in-out"
    [showLabel]="false"
    icon="chevron-left"
    size="small"
    variant="outlined"
    accentColor="zinc"
    (clicked)="scrollTabs('left')"
  >
  </ap-button>
}
<div
  class="relative w-full overflow-hidden sm:h-18 h-14 justify-center"
>
  <div class="absolute bottom-0 w-full overflow-x-hidden overflow-y-visible">
    <div
      class="relative flex overflow-x-auto scrollbar-hide touch-pan-x select-none tab-container max-w-[24rem] sm:max-w-[45rem] mx-auto"
      [ngClass]="
        justify() === 'center' && !showOverflowHint()
          ? 'justify-center'
          : 'justify-start'
      "
      #tabContainer
      (mousedown)="onMouseDown($event)"
      (mousemove)="onMouseMove($event)"
      (mouseup)="onMouseUp($event)"
      (mouseleave)="onMouseUp($event)"
      (touchstart)="onTouchStart($event)"
      (touchmove)="onTouchMove($event)"
      (touchend)="onTouchEnd($event)"
      style="scroll-behavior: smooth; cursor: grab"
    >
      @for (tab of tabs(); track tab.id) {
        <div
          #tabItem
          class="group relative flex flex-col justify-center items-center p-1 gap-2 cursor-pointer whitespace-nowrap shrink-0 transition-colors duration-200"
          style="border-bottom: 2px solid"
          [class.disabled]="tab.disabled"
          (click)="!tab.disabled && onTabClick(tab.id, tabItem)"
          [ngClass]="
            isSelected(tab.id) ? getActiveClasses() : getInactiveClasses()
          "
        >
          <div class="flex justify-center items-center border-current">
            @if (tab.icon) {
              <ap-icon-badge
                [badgeTop]="'top-2'"
                [hasBadge]="tab.hasBadge ?? false"
                class="sm:size-11 size-9"
              >
                <ap-icon class="size-full" [name]="tab.icon" />
              </ap-icon-badge>
            }
          </div>
        </div>
      }
    </div>
  </div>
</div>
@if (showOverflowHint() && canScrollRight()) {
  <ap-button
    class="absolute sm:right-40 top-6 right-4 flex h-8 w-8 items-center justify-center justify-center animate-fade animate-infinite animate-duration-[2000ms] animate-delay-[30ms] animate-ease-in-out"
    [showLabel]="false"
    icon="chevron-right"
    size="small"
    variant="outlined"
    accentColor="zinc"
    (clicked)="scrollTabs('right')"
  >
  </ap-button>
}
`, styles: ["/* src/ap-components-lib/ap-tab-menu-icon/ap-tab-menu-icon.component.css */\n.scrollbar-hide::-webkit-scrollbar {\n  display: none;\n}\n.scrollbar-hide {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n/*# sourceMappingURL=ap-tab-menu-icon.component.css.map */\n"] }]
  }], () => [], { tabContainer: [{
    type: ViewChild,
    args: ["tabContainer", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTabMenuIconComponent, { className: "ApTabMenuIconComponent", filePath: "src/ap-components-lib/ap-tab-menu-icon/ap-tab-menu-icon.component.ts", lineNumber: 43 });
})();

// src/app/icons/ap-icon-badge-first/ap-icon-badge-first.component.ts
var ApIconBadgeFirstComponent = class _ApIconBadgeFirstComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8778_38894)">
<g filter="url(#filter0_d_8778_38894)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7477 14.0014C26.3241 14.0014 31.4786 19.456 31.4786 26.0016C31.4786 32.729 26.1464 38.0018 19.7477 38.0018C13.1713 38.0018 8.0168 32.5471 8.0168 26.0016C7.66131 19.456 12.9935 14.0014 19.7477 14.0014Z" fill="url(#paint0_linear_8778_38894)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7477 14.0014C26.3241 14.0014 31.4786 19.456 31.4786 26.0016C31.4786 32.729 26.1464 38.0018 19.7477 38.0018C13.1713 38.0018 8.0168 32.5471 8.0168 26.0016C7.66131 19.456 12.9935 14.0014 19.7477 14.0014Z" stroke="#FEF9C2"/>
</g>
<path d="M22 19V32H19.4176V21.2915H19.3341L16 23.2339V21.0757L19.5429 19H22Z" fill="#09090B"/>
<g filter="url(#filter1_d_8778_38894)">
<path d="M19.779 2.27761C20.1494 2.2743 20.4626 2.58075 20.4537 2.95442C20.4612 3.18984 20.345 3.39659 20.1671 3.51791L23.8836 8.73704L29.8992 5.84185C29.8602 5.75696 29.8372 5.66333 29.8357 5.5658C29.8235 5.18501 30.1317 4.87795 30.5091 4.88866C30.8936 4.8786 31.2055 5.18452 31.1967 5.55797C31.209 5.93874 30.9016 6.24568 30.5243 6.23514C30.4381 6.23742 30.3562 6.22215 30.2811 6.19501L27.6382 14.1515C25.4706 13.0937 23.0417 12.4728 20.4656 12.4106C17.4333 12.3375 14.5652 13.0467 12.0581 14.3507L9.27434 6.24237C9.20441 6.26759 9.13025 6.2851 9.05248 6.2858C8.66074 6.28179 8.36981 5.98256 8.35743 5.60166C8.35235 5.23502 8.66083 4.92849 9.03825 4.93935C9.42279 4.9293 9.7347 5.23517 9.72585 5.60866C9.72708 5.69646 9.70882 5.78092 9.6776 5.85854L15.686 8.72465L19.3722 3.50341C19.204 3.38021 19.0951 3.18133 19.0917 2.96223C19.0794 2.58143 19.3944 2.28808 19.779 2.27761Z" fill="url(#paint1_linear_8778_38894)"/>
<path d="M19.779 2.27761L19.7769 2.02758L19.7723 2.02771L19.779 2.27761ZM20.4537 2.95442L20.2034 2.94857L20.2038 2.9625L20.4537 2.95442ZM20.1671 3.51791L20.0263 3.31139L19.8154 3.45519L19.9634 3.663L20.1671 3.51791ZM23.8836 8.73704L23.6799 8.88213L23.8021 9.05366L23.9919 8.96229L23.8836 8.73704ZM29.8992 5.84185L30.0075 6.0671L30.2287 5.96062L30.1264 5.73754L29.8992 5.84185ZM29.8357 5.5658L30.0857 5.56197L30.0856 5.55763L29.8357 5.5658ZM30.5091 4.88866L30.5018 5.13893L30.5155 5.13857L30.5091 4.88866ZM31.1967 5.55797L30.9464 5.55223L30.9468 5.56621L31.1967 5.55797ZM30.5243 6.23514L30.5314 5.98487L30.5178 5.98523L30.5243 6.23514ZM30.2811 6.19501L30.3661 5.95988L30.1248 5.8727L30.0438 6.11633L30.2811 6.19501ZM27.6382 14.1515L27.5285 14.3762L27.7854 14.5015L27.8755 14.2302L27.6382 14.1515ZM20.4656 12.4106L20.4718 12.1607L20.4718 12.1607L20.4656 12.4106ZM12.0581 14.3507L11.8216 14.432L11.9158 14.7065L12.1734 14.5725L12.0581 14.3507ZM9.27434 6.24237L9.5108 6.16107L9.42841 5.9211L9.18965 6.00721L9.27434 6.24237ZM9.05248 6.2858L9.04977 6.53583L9.05459 6.53579L9.05248 6.2858ZM8.35743 5.60166L8.10741 5.60527L8.10756 5.60992L8.35743 5.60166ZM9.03825 4.93935L9.03089 5.18962L9.04463 5.18926L9.03825 4.93935ZM9.72585 5.60866L9.47574 5.60288L9.47587 5.61232L9.72585 5.60866ZM9.6776 5.85854L9.44567 5.76537L9.35806 5.98316L9.56986 6.08419L9.6776 5.85854ZM15.686 8.72465L15.5783 8.9503L15.7686 9.04107L15.8902 8.86875L15.686 8.72465ZM19.3722 3.50341L19.5765 3.64751L19.7182 3.44677L19.52 3.30168L19.3722 3.50341ZM19.0917 2.96223L19.3417 2.95821L19.3416 2.95399L19.0917 2.96223ZM19.779 2.27761L19.781 2.5276C20.015 2.52551 20.2092 2.72081 20.2037 2.94857L20.4537 2.95442L20.7036 2.96027C20.7161 2.44069 20.2838 2.0231 19.7769 2.02762L19.779 2.27761ZM20.4537 2.95442L20.2038 2.9625C20.2084 3.10814 20.1372 3.23577 20.0263 3.31139L20.1671 3.51791L20.3078 3.72443C20.5528 3.5574 20.7139 3.27153 20.7035 2.94634L20.4537 2.95442ZM20.1671 3.51791L19.9634 3.663L23.6799 8.88213L23.8836 8.73704L24.0873 8.59195L20.3707 3.37282L20.1671 3.51791ZM23.8836 8.73704L23.9919 8.96229L30.0075 6.0671L29.8992 5.84185L29.7909 5.61659L23.7753 8.51179L23.8836 8.73704ZM29.8992 5.84185L30.1264 5.73754C30.1009 5.68181 30.0866 5.62226 30.0857 5.56197L29.8357 5.5658L29.5857 5.56964C29.5877 5.70441 29.6196 5.83211 29.6719 5.94616L29.8992 5.84185ZM29.8357 5.5658L30.0856 5.55763C30.078 5.32109 30.2683 5.13192 30.5019 5.13856L30.5091 4.88866L30.5163 4.63877C29.9952 4.62397 29.569 5.04894 29.5859 5.57397L29.8357 5.5658ZM30.5091 4.88866L30.5155 5.13857C30.7625 5.13211 30.9521 5.32689 30.9468 5.55224L31.1967 5.55797L31.4466 5.5637C31.4589 5.04215 31.0248 4.62508 30.5027 4.63875L30.5091 4.88866ZM31.1967 5.55797L30.9468 5.56621C30.9545 5.80299 30.7647 5.99176 30.5314 5.98524L30.5243 6.23514L30.5172 6.48503C31.0384 6.4996 31.4636 6.0745 31.4466 5.54973L31.1967 5.55797ZM30.5243 6.23514L30.5178 5.98523C30.4657 5.98661 30.4148 5.97745 30.3661 5.95988L30.2811 6.19501L30.196 6.43015C30.2976 6.46684 30.4106 6.48824 30.5308 6.48504L30.5243 6.23514ZM30.2811 6.19501L30.0438 6.11633L27.401 14.0728L27.6382 14.1515L27.8755 14.2302L30.5183 6.27369L30.2811 6.19501ZM27.6382 14.1515L27.748 13.9268C25.5487 12.8536 23.0845 12.2237 20.4718 12.1607L20.4656 12.4106L20.4594 12.6606C22.9988 12.7218 25.3925 13.3338 27.5285 14.3762L27.6382 14.1515ZM20.4656 12.4106L20.4718 12.1607C17.3963 12.0865 14.4864 12.8059 11.9428 14.129L12.0581 14.3507L12.1734 14.5725C14.6439 13.2875 17.4704 12.5885 20.4594 12.6606L20.4656 12.4106ZM12.0581 14.3507L12.2946 14.2694L9.5108 6.16107L9.27434 6.24237L9.03788 6.32367L11.8216 14.432L12.0581 14.3507ZM9.27434 6.24237L9.18965 6.00721C9.13751 6.02601 9.09201 6.03544 9.05037 6.03582L9.05248 6.2858L9.05459 6.53579C9.16849 6.53476 9.27131 6.50917 9.35903 6.47754L9.27434 6.24237ZM9.05248 6.2858L9.05519 6.03582C8.80181 6.03322 8.61548 5.84505 8.60731 5.5934L8.35743 5.60166L8.10756 5.60992C8.12414 6.12006 8.51968 6.53035 9.04977 6.53579L9.05248 6.2858ZM8.35743 5.60166L8.60741 5.59805C8.60432 5.37514 8.79431 5.18243 9.03091 5.18925L9.03825 4.93935L9.04559 4.68946C8.52735 4.67454 8.10038 5.09491 8.10745 5.60527L8.35743 5.60166ZM9.03825 4.93935L9.04463 5.18926C9.2917 5.18281 9.48125 5.37758 9.47592 5.60289L9.72585 5.60866L9.97578 5.61444C9.98814 5.09276 9.55388 4.6758 9.03186 4.68944L9.03825 4.93935ZM9.72585 5.60866L9.47587 5.61232C9.47658 5.66296 9.4661 5.71456 9.44567 5.76537L9.6776 5.85854L9.90954 5.95171C9.95154 5.84728 9.97759 5.72997 9.97583 5.605L9.72585 5.60866ZM9.6776 5.85854L9.56986 6.08419L15.5783 8.9503L15.686 8.72465L15.7938 8.499L9.78535 5.63289L9.6776 5.85854ZM15.686 8.72465L15.8902 8.86875L19.5765 3.64751L19.3722 3.50341L19.168 3.35931L15.4818 8.58054L15.686 8.72465ZM19.3722 3.50341L19.52 3.30168C19.4127 3.22311 19.3438 3.09633 19.3417 2.95821L19.0917 2.96223L18.8418 2.96625C18.8464 3.26633 18.9953 3.53731 19.2245 3.70514L19.3722 3.50341ZM19.0917 2.96223L19.3416 2.95399C19.3344 2.73119 19.5194 2.53476 19.7856 2.52751L19.779 2.27761L19.7723 2.02771C19.2695 2.04139 18.8244 2.43167 18.8419 2.97047L19.0917 2.96223Z" fill="#FEF9C2"/>
</g>
</g>
<defs>
<filter id="filter0_d_8778_38894" x="5.49994" y="12.5014" width="28.4787" height="29.0004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8778_38894"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8778_38894" result="shape"/>
</filter>
<filter id="filter1_d_8778_38894" x="6.10736" y="1.02759" width="27.3397" height="16.6789" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8778_38894"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8778_38894" result="shape"/>
</filter>
<linearGradient id="paint0_linear_8778_38894" x1="19.7393" y1="14.0014" x2="19.7393" y2="38.0018" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBEA"/>
<stop offset="0.628619" stop-color="#FED153"/>
<stop offset="1" stop-color="#F4B000"/>
</linearGradient>
<linearGradient id="paint1_linear_8778_38894" x1="19.8598" y1="2.27861" x2="19.5609" y2="14.5331" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBEA"/>
<stop offset="0.628619" stop-color="#FED153"/>
<stop offset="1" stop-color="#F4B000"/>
</linearGradient>
<clipPath id="clip0_8778_38894">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconBadgeFirstComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconBadgeFirstComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconBadgeFirstComponent, selectors: [["ap-icon-badge-first"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconBadgeFirstComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconBadgeFirstComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-badge-first", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconBadgeFirstComponent, { className: "ApIconBadgeFirstComponent", filePath: "src/app/icons/ap-icon-badge-first/ap-icon-badge-first.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-badge-second/ap-icon-badge-second.component.ts
var ApIconBadgeSecondComponent = class _ApIconBadgeSecondComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8588_53982)">
<g filter="url(#filter0_d_8588_53982)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5084 14.0013C27.0848 14.0013 32.2394 19.456 32.2394 26.0016C32.2394 32.729 26.9071 38.0018 20.5084 38.0018C13.9319 38.0018 8.77742 32.5472 8.77742 26.0016C8.42193 19.456 13.7542 14.0013 20.5084 14.0013Z" fill="url(#paint0_linear_8588_53982)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5084 14.0013C27.0848 14.0013 32.2394 19.456 32.2394 26.0016C32.2394 32.729 26.9071 38.0018 20.5084 38.0018C13.9319 38.0018 8.77742 32.5472 8.77742 26.0016C8.42193 19.456 13.7542 14.0013 20.5084 14.0013Z" stroke="#F5F5F5" stroke-width="0.5"/>
</g>
<path d="M15.6702 32.2618V30.3014L20.2962 26.0603C20.6896 25.6833 21.0196 25.3441 21.2861 25.0425C21.5569 24.7409 21.762 24.4456 21.9016 24.1565C22.0412 23.8633 22.111 23.5471 22.111 23.2078C22.111 22.8308 22.0243 22.5062 21.8509 22.2339C21.6774 21.9575 21.4405 21.7459 21.1402 21.5993C20.8398 21.4485 20.4993 21.3731 20.1185 21.3731C19.7209 21.3731 19.374 21.4527 19.0778 21.6119C18.7817 21.7711 18.5533 21.9993 18.3925 22.2967C18.2318 22.5941 18.1514 22.9481 18.1514 23.3586H15.5433C15.5433 22.5167 15.7358 21.7857 16.1208 21.1658C16.5058 20.5458 17.0451 20.0662 17.7389 19.7269C18.4327 19.3877 19.2322 19.218 20.1376 19.218C21.0682 19.218 21.8784 19.3814 22.5679 19.7081C23.2617 20.0306 23.8011 20.4788 24.1861 21.0527C24.571 21.6265 24.7635 22.2842 24.7635 23.0256C24.7635 23.5115 24.6662 23.9911 24.4716 24.4644C24.2812 24.9377 23.9407 25.4634 23.45 26.0415C22.9592 26.6153 22.2676 27.3044 21.3749 28.1086L19.4776 29.9496V30.0375H24.9348V32.2618H15.6702Z" fill="#09090B"/>
<g filter="url(#filter1_d_8588_53982)">
<path d="M20.54 2.27727C20.9101 2.27423 21.2225 2.58074 21.2138 2.95405C21.2214 3.18928 21.1057 3.39609 20.9281 3.51757L24.6437 8.73765L30.6592 5.84343C30.6201 5.75836 30.5973 5.66423 30.5958 5.56641C30.5835 5.18552 30.8927 4.87843 31.2701 4.8893C31.6546 4.87951 31.9657 5.18611 31.9567 5.55956C31.9686 5.94001 31.6615 6.24638 31.2844 6.23575C31.1982 6.23804 31.1163 6.22279 31.0412 6.19562L28.3983 14.1521C26.2306 13.0943 23.8017 12.4734 21.2257 12.4113C18.1933 12.3381 15.3253 13.0473 12.8182 14.3514L10.0344 6.24298C9.96448 6.2682 9.89032 6.28572 9.81255 6.28641C9.42084 6.28239 9.1299 5.98314 9.11751 5.60227C9.11231 5.23555 9.42086 4.92812 9.79834 4.93899C10.183 4.92892 10.4949 5.23569 10.4859 5.60927C10.4871 5.69694 10.4688 5.78066 10.4377 5.85817L16.4461 8.72526L20.1333 3.50404C19.9647 3.38091 19.8552 3.18216 19.8518 2.96284C19.8395 2.5819 20.1553 2.28753 20.54 2.27727Z" fill="url(#paint1_linear_8588_53982)"/>
<path d="M20.54 2.27727L20.5381 2.02724L20.5335 2.02736L20.54 2.27727ZM21.2138 2.95405L20.9634 2.94836L20.9639 2.96229L21.2138 2.95405ZM20.9281 3.51757L20.787 3.31126L20.5767 3.45514L20.7244 3.66261L20.9281 3.51757ZM24.6437 8.73765L24.44 8.88269L24.5621 9.05427L24.7519 8.96291L24.6437 8.73765ZM30.6592 5.84343L30.7675 6.0687L30.9891 5.96208L30.8863 5.73879L30.6592 5.84343ZM30.5958 5.56641L30.8458 5.56251L30.8457 5.55823L30.5958 5.56641ZM31.2701 4.8893L31.2628 5.13956L31.2764 5.13921L31.2701 4.8893ZM31.9567 5.55956L31.7064 5.55368L31.7069 5.5675L31.9567 5.55956ZM31.2844 6.23575L31.2916 5.98547L31.2779 5.98584L31.2844 6.23575ZM31.0412 6.19562L31.1263 5.9605L30.8849 5.87326L30.8039 6.11695L31.0412 6.19562ZM28.3983 14.1521L28.2886 14.3768L28.5454 14.5021L28.6356 14.2308L28.3983 14.1521ZM21.2257 12.4113L21.2318 12.1613V12.1613L21.2257 12.4113ZM12.8182 14.3514L12.5817 14.4327L12.6759 14.7071L12.9334 14.5731L12.8182 14.3514ZM10.0344 6.24298L10.2709 6.16168L10.1885 5.92172L9.94973 6.00781L10.0344 6.24298ZM9.81255 6.28641L9.80984 6.53644L9.81464 6.5364L9.81255 6.28641ZM9.11751 5.60227L8.86748 5.60596L8.86763 5.61055L9.11751 5.60227ZM9.79834 4.93899L9.79099 5.18926L9.80473 5.1889L9.79834 4.93899ZM10.4859 5.60927L10.2358 5.60342L10.2359 5.61292L10.4859 5.60927ZM10.4377 5.85817L10.2057 5.76511L10.1183 5.98281L10.3299 6.08381L10.4377 5.85817ZM16.4461 8.72526L16.3383 8.95089L16.5286 9.04169L16.6503 8.86939L16.4461 8.72526ZM20.1333 3.50404L20.3375 3.64817L20.4794 3.44718L20.2808 3.30213L20.1333 3.50404ZM19.8518 2.96284L20.1018 2.95877L20.1017 2.9546L19.8518 2.96284ZM20.54 2.27727L20.5419 2.52726C20.7753 2.52534 20.9691 2.72039 20.9638 2.94837L21.2138 2.95405L21.4637 2.95974C21.4758 2.44109 21.045 2.02312 20.5381 2.02728L20.54 2.27727ZM21.2138 2.95405L20.9639 2.96229C20.9686 3.108 20.8976 3.23565 20.787 3.31126L20.9281 3.51757L21.0692 3.72387C21.3138 3.55654 21.4742 3.27057 21.4636 2.94582L21.2138 2.95405ZM20.9281 3.51757L20.7244 3.66261L24.44 8.88269L24.6437 8.73765L24.8474 8.5926L21.1318 3.37252L20.9281 3.51757ZM24.6437 8.73765L24.7519 8.96291L30.7675 6.0687L30.6592 5.84343L30.5509 5.61817L24.5354 8.51238L24.6437 8.73765ZM30.6592 5.84343L30.8863 5.73879C30.861 5.68377 30.8467 5.62383 30.8458 5.56251L30.5958 5.56641L30.3458 5.57032C30.3478 5.70463 30.3791 5.83296 30.4321 5.94807L30.6592 5.84343ZM30.5958 5.56641L30.8457 5.55823C30.8381 5.322 31.0287 5.13245 31.2628 5.13919L31.2701 4.8893L31.2775 4.6394C30.7566 4.62441 30.329 5.04904 30.3459 5.57459L30.5958 5.56641ZM31.2701 4.8893L31.2764 5.13921C31.5227 5.13294 31.7123 5.32782 31.7068 5.55369L31.9567 5.55956L32.2067 5.56543C32.2192 5.04439 31.7864 4.62608 31.2639 4.63938L31.2701 4.8893ZM31.9567 5.55956L31.7069 5.5675C31.7142 5.8041 31.5247 5.99242 31.2916 5.98585L31.2844 6.23575L31.2772 6.48564C31.7982 6.50034 32.223 6.07592 32.2066 5.55162L31.9567 5.55956ZM31.2844 6.23575L31.2779 5.98584C31.2257 5.98722 31.1749 5.97808 31.1263 5.9605L31.0412 6.19562L30.9561 6.43074C31.0577 6.46749 31.1706 6.48885 31.2909 6.48565L31.2844 6.23575ZM31.0412 6.19562L30.8039 6.11695L28.1611 14.0734L28.3983 14.1521L28.6356 14.2308L31.2784 6.2743L31.0412 6.19562ZM28.3983 14.1521L28.5081 13.9274C26.3088 12.8542 23.8446 12.2243 21.2318 12.1613L21.2257 12.4113L21.2195 12.6612C23.7589 12.7224 26.1525 13.3345 28.2886 14.3768L28.3983 14.1521ZM21.2257 12.4113L21.2318 12.1613C18.1563 12.0872 15.2466 12.8065 12.7029 14.1296L12.8182 14.3514L12.9334 14.5731C15.404 13.288 18.2304 12.5891 21.2195 12.6612L21.2257 12.4113ZM12.8182 14.3514L13.0546 14.2701L10.2709 6.16168L10.0344 6.24298L9.79795 6.32428L12.5817 14.4327L12.8182 14.3514ZM10.0344 6.24298L9.94973 6.00781C9.89756 6.02663 9.85207 6.03606 9.81046 6.03643L9.81255 6.28641L9.81464 6.5364C9.92857 6.53538 10.0314 6.50977 10.1191 6.47815L10.0344 6.24298ZM9.81255 6.28641L9.81527 6.03643C9.56191 6.03383 9.37557 5.84564 9.36738 5.59399L9.11751 5.60227L8.86763 5.61055C8.88423 6.12064 9.27977 6.53095 9.80984 6.5364L9.81255 6.28641ZM9.11751 5.60227L9.36748 5.59859C9.36432 5.37525 9.55473 5.18208 9.791 5.18888L9.79834 4.93899L9.80568 4.68909C9.28698 4.67416 8.86031 5.09585 8.86753 5.60596L9.11751 5.60227ZM9.79834 4.93899L9.80473 5.1889C10.0514 5.18244 10.2414 5.37766 10.236 5.60342L10.4859 5.60927L10.7359 5.61512C10.7484 5.09371 10.3145 4.67541 9.79195 4.68908L9.79834 4.93899ZM10.4859 5.60927L10.2359 5.61292C10.2366 5.66306 10.2263 5.71395 10.2057 5.76511L10.4377 5.85817L10.6697 5.95123C10.7114 5.84737 10.7377 5.73081 10.7359 5.60563L10.4859 5.60927ZM10.4377 5.85817L10.3299 6.08381L16.3383 8.95089L16.4461 8.72526L16.5539 8.49962L10.5455 5.63253L10.4377 5.85817ZM16.4461 8.72526L16.6503 8.86939L20.3375 3.64817L20.1333 3.50404L19.9291 3.35991L16.2419 8.58113L16.4461 8.72526ZM20.1333 3.50404L20.2808 3.30213C20.173 3.22338 20.1039 3.09665 20.1018 2.95877L19.8518 2.96284L19.6018 2.96691C19.6065 3.26768 19.7564 3.53844 19.9858 3.70595L20.1333 3.50404ZM19.8518 2.96284L20.1017 2.9546C20.0944 2.73155 20.2804 2.53428 20.5465 2.52718L20.54 2.27727L20.5335 2.02736C20.0302 2.04078 19.5845 2.43225 19.6019 2.97108L19.8518 2.96284Z" fill="#F5F5F5"/>
</g>
</g>
<defs>
<filter id="filter0_d_8588_53982" x="6.51062" y="12.7513" width="27.9788" height="28.5005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8588_53982"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8588_53982" result="shape"/>
</filter>
<filter id="filter1_d_8588_53982" x="6.86743" y="1.02722" width="27.3397" height="16.6799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8588_53982"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8588_53982" result="shape"/>
</filter>
<linearGradient id="paint0_linear_8588_53982" x1="20.5" y1="14.0013" x2="20.5" y2="38.0018" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F5"/>
<stop offset="0.628619" stop-color="#D4D4D4"/>
<stop offset="1" stop-color="#A3A3A3"/>
</linearGradient>
<linearGradient id="paint1_linear_8588_53982" x1="20.6204" y1="2.27923" x2="20.3215" y2="14.5337" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F5"/>
<stop offset="0.628619" stop-color="#D4D4D4"/>
<stop offset="1" stop-color="#A3A3A3"/>
</linearGradient>
<clipPath id="clip0_8588_53982">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconBadgeSecondComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconBadgeSecondComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconBadgeSecondComponent, selectors: [["ap-icon-badge-second"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconBadgeSecondComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconBadgeSecondComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-badge-second", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconBadgeSecondComponent, { className: "ApIconBadgeSecondComponent", filePath: "src/app/icons/ap-icon-badge-second/ap-icon-badge-second.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-badge-third/ap-icon-badge-third.component.ts
var ApIconBadgeThirdComponent = class _ApIconBadgeThirdComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8588_54039)">
<g filter="url(#filter0_d_8588_54039)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7477 14.0014C26.3241 14.0014 31.4786 19.456 31.4786 26.0016C31.4786 32.729 26.1464 38.0018 19.7477 38.0018C13.1713 38.0018 8.0168 32.5471 8.0168 26.0016C7.66131 19.456 12.9935 14.0014 19.7477 14.0014Z" fill="url(#paint0_linear_8588_54039)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7477 14.0014C26.3241 14.0014 31.4786 19.456 31.4786 26.0016C31.4786 32.729 26.1464 38.0018 19.7477 38.0018C13.1713 38.0018 8.0168 32.5471 8.0168 26.0016C7.66131 19.456 12.9935 14.0014 19.7477 14.0014Z" stroke="#FAA365" stroke-width="0.5"/>
</g>
<g filter="url(#filter1_d_8588_54039)">
<path d="M19.7795 2.27702C20.1498 2.27373 20.462 2.58024 20.4532 2.95381C20.4608 3.1894 20.3456 3.3969 20.1675 3.5183L23.8841 8.73743L29.8987 5.84221C29.8597 5.75723 29.8376 5.66288 29.8362 5.56522C29.8242 5.18466 30.1315 4.87844 30.5086 4.88903C30.8933 4.87881 31.205 5.18477 31.1962 5.55834C31.2084 5.93907 30.9011 6.2462 30.5238 6.2355C30.4378 6.23776 30.3566 6.22152 30.2816 6.19443L27.6387 14.1519C25.4709 13.0939 23.0414 12.4731 20.4651 12.411C17.4332 12.338 14.5654 13.0464 12.0586 14.3502L9.27385 6.24274C9.20397 6.26792 9.1297 6.28548 9.05199 6.28617C8.66049 6.28194 8.37031 5.98278 8.35792 5.60205C8.35264 5.23537 8.6604 4.92808 9.03778 4.93874C9.42246 4.92863 9.73534 5.23541 9.72634 5.60905C9.72755 5.69678 9.70833 5.78037 9.67714 5.85793L15.6865 8.72406L19.3728 3.50282C19.2044 3.37958 19.0956 3.18086 19.0922 2.96164C19.0801 2.58084 19.3948 2.28725 19.7795 2.27702Z" fill="url(#paint1_linear_8588_54039)"/>
<path d="M19.7795 2.27702L19.7774 2.027L19.773 2.02712L19.7795 2.27702ZM20.4532 2.95381L20.2029 2.94803L20.2033 2.96205L20.4532 2.95381ZM20.1675 3.5183L20.0268 3.31178L19.8159 3.45558L19.9639 3.66339L20.1675 3.5183ZM23.8841 8.73743L23.6804 8.88252L23.8026 9.05406L23.9924 8.96267L23.8841 8.73743ZM29.8987 5.84221L30.007 6.06746L30.2283 5.96095L30.1259 5.73786L29.8987 5.84221ZM29.8362 5.56522L30.0863 5.56147L30.0861 5.55717L29.8362 5.56522ZM30.5086 4.88903L30.5014 5.1393L30.5151 5.13894L30.5086 4.88903ZM31.1962 5.55834L30.9459 5.55257L30.9463 5.56647L31.1962 5.55834ZM30.5238 6.2355L30.5311 5.98523L30.5174 5.98559L30.5238 6.2355ZM30.2816 6.19443L30.3666 5.95928L30.1253 5.87214L30.0443 6.11576L30.2816 6.19443ZM27.6387 14.1519L27.529 14.3766L27.7859 14.5019L27.876 14.2306L27.6387 14.1519ZM20.4651 12.411L20.4713 12.1611L20.4713 12.1611L20.4651 12.411ZM12.0586 14.3502L11.8222 14.4315L11.9164 14.7058L12.1739 14.5719L12.0586 14.3502ZM9.27385 6.24274L9.5103 6.1614L9.42791 5.92154L9.18921 6.00755L9.27385 6.24274ZM9.05199 6.28617L9.04914 6.5362L9.05408 6.53616L9.05199 6.28617ZM8.35792 5.60205L8.1079 5.6058L8.10805 5.61033L8.35792 5.60205ZM9.03778 4.93874L9.03056 5.18901L9.0442 5.18865L9.03778 4.93874ZM9.72634 5.60905L9.47623 5.60318L9.47636 5.61266L9.72634 5.60905ZM9.67714 5.85793L9.44519 5.76478L9.35762 5.98257L9.56941 6.08358L9.67714 5.85793ZM15.6865 8.72406L15.5788 8.94972L15.7691 9.04047L15.8908 8.86816L15.6865 8.72406ZM19.3728 3.50282L19.577 3.64693L19.7187 3.44617L19.5205 3.30108L19.3728 3.50282ZM19.0922 2.96164L19.3422 2.95771L19.3421 2.95353L19.0922 2.96164ZM19.7795 2.27702L19.7815 2.52701C20.0149 2.52494 20.2087 2.71979 20.2033 2.94804L20.4532 2.95381L20.7031 2.95958C20.7154 2.4407 20.2848 2.02253 19.7774 2.02704L19.7795 2.27702ZM20.4532 2.95381L20.2033 2.96205C20.2081 3.10875 20.1369 3.23667 20.0268 3.31178L20.1675 3.5183L20.3083 3.72482C20.5542 3.55714 20.7136 3.27005 20.7031 2.94557L20.4532 2.95381ZM20.1675 3.5183L19.9639 3.66339L23.6804 8.88252L23.8841 8.73743L24.0878 8.59234L20.3712 3.37321L20.1675 3.5183ZM23.8841 8.73743L23.9924 8.96267L30.007 6.06746L29.8987 5.84221L29.7903 5.61697L23.7758 8.51218L23.8841 8.73743ZM29.8987 5.84221L30.1259 5.73786C30.1012 5.68401 30.0871 5.62388 30.0862 5.56147L29.8362 5.56522L29.5863 5.56896C29.5882 5.70187 29.6182 5.83045 29.6714 5.94656L29.8987 5.84221ZM29.8362 5.56522L30.0861 5.55717C30.0786 5.3207 30.2681 5.13238 30.5014 5.13893L30.5086 4.88903L30.5158 4.63913C29.9949 4.62451 29.5698 5.04863 29.5864 5.57326L29.8362 5.56522ZM30.5086 4.88903L30.5151 5.13894C30.7621 5.13238 30.9516 5.32707 30.9463 5.55258L31.1962 5.55834L31.4461 5.5641C31.4585 5.04248 31.0245 4.62525 30.5021 4.63912L30.5086 4.88903ZM31.1962 5.55834L30.9463 5.56647C30.9539 5.80351 30.7641 5.99221 30.531 5.98561L30.5238 6.2355L30.5166 6.4854C31.0382 6.50019 31.4628 6.07463 31.4461 5.5502L31.1962 5.55834ZM30.5238 6.2355L30.5174 5.98559C30.4675 5.9869 30.4175 5.97764 30.3666 5.95928L30.2816 6.19443L30.1966 6.42957C30.2958 6.4654 30.408 6.48862 30.5302 6.48541L30.5238 6.2355ZM30.2816 6.19443L30.0443 6.11576L27.4015 14.0732L27.6387 14.1519L27.876 14.2306L30.5189 6.2731L30.2816 6.19443ZM27.6387 14.1519L27.7485 13.9272C25.549 12.8538 23.0843 12.2241 20.4713 12.1611L20.4651 12.411L20.4589 12.6609C22.9986 12.7222 25.3928 13.3341 27.529 14.3766L27.6387 14.1519ZM20.4651 12.411L20.4713 12.1611C17.3962 12.087 14.4867 12.8056 11.9434 14.1284L12.0586 14.3502L12.1739 14.5719C14.6441 13.2872 17.4702 12.5889 20.4589 12.6609L20.4651 12.411ZM12.0586 14.3502L12.2951 14.2688L9.5103 6.1614L9.27385 6.24274L9.0374 6.32407L11.8222 14.4315L12.0586 14.3502ZM9.27385 6.24274L9.18921 6.00755C9.13703 6.02636 9.09143 6.03581 9.04991 6.03618L9.05199 6.28617L9.05408 6.53616C9.16797 6.53514 9.2709 6.50949 9.35849 6.47792L9.27385 6.24274ZM9.05199 6.28617L9.05484 6.03619C8.80189 6.03345 8.61599 5.84559 8.60779 5.59377L8.35792 5.60205L8.10805 5.61033C8.12463 6.11998 8.51909 6.53042 9.04914 6.53615L9.05199 6.28617ZM8.35792 5.60205L8.6079 5.5983C8.60468 5.37477 8.7946 5.18197 9.03057 5.18864L9.03778 4.93874L9.04499 4.68885C8.52621 4.67418 8.1006 5.09598 8.10794 5.6058L8.35792 5.60205ZM9.03778 4.93874L9.0442 5.18865C9.29141 5.18216 9.48183 5.37783 9.47641 5.60318L9.72634 5.60905L9.97627 5.61492C9.98884 5.093 9.55352 4.67511 9.03136 4.68883L9.03778 4.93874ZM9.72634 5.60905L9.47636 5.61266C9.47703 5.6612 9.4665 5.71178 9.44519 5.76478L9.67714 5.85793L9.90909 5.95107C9.95015 5.84896 9.97807 5.73237 9.97632 5.60545L9.72634 5.60905ZM9.67714 5.85793L9.56941 6.08358L15.5788 8.94972L15.6865 8.72406L15.7943 8.4984L9.78487 5.63227L9.67714 5.85793ZM15.6865 8.72406L15.8908 8.86816L19.577 3.64693L19.3728 3.50282L19.1685 3.35872L15.4823 8.57996L15.6865 8.72406ZM19.3728 3.50282L19.5205 3.30108C19.4131 3.22244 19.3443 3.09583 19.3422 2.95771L19.0922 2.96164L18.8423 2.96557C18.8468 3.26589 18.9957 3.53673 19.225 3.70457L19.3728 3.50282ZM19.0922 2.96164L19.3421 2.95353C19.335 2.73037 19.52 2.534 19.786 2.52693L19.7795 2.27702L19.773 2.02712C19.2696 2.04049 18.8252 2.43132 18.8424 2.96976L19.0922 2.96164Z" fill="#FAA365"/>
</g>
<path d="M19.7509 32.001C18.8922 32.001 18.1273 31.8424 17.4564 31.5252C16.7893 31.2039 16.2621 30.7632 15.8749 30.203C15.4915 29.6387 15.2941 28.9878 15.2826 28.2505H17.7899C17.8053 28.5594 17.8992 28.8313 18.0717 29.0661C18.2481 29.2968 18.4819 29.4759 18.7733 29.6036C19.0647 29.7313 19.3925 29.7952 19.7567 29.7952C20.1362 29.7952 20.4717 29.7231 20.7631 29.5789C21.0544 29.4348 21.2826 29.235 21.4474 28.9796C21.6123 28.7242 21.6947 28.4297 21.6947 28.096C21.6947 27.7583 21.6065 27.4596 21.4302 27.2001C21.2576 26.9365 21.0084 26.7305 20.6826 26.5823C20.3605 26.434 19.9771 26.3598 19.5324 26.3598H18.434V24.395H19.5324C19.9081 24.395 20.2398 24.325 20.5273 24.1849C20.8187 24.0449 21.0449 23.8513 21.2059 23.6041C21.3669 23.3528 21.4474 23.0604 21.4474 22.7267C21.4474 22.4096 21.3765 22.1315 21.2346 21.8926C21.0966 21.6496 20.9011 21.4601 20.6481 21.3242C20.3989 21.1882 20.1075 21.1203 19.7739 21.1203C19.4366 21.1203 19.1279 21.1862 18.8481 21.318C18.5682 21.4457 18.3439 21.629 18.1752 21.8679C18.0065 22.1068 17.9164 22.3869 17.9049 22.7082H15.5184C15.5299 21.9791 15.7235 21.3365 16.0992 20.7804C16.4749 20.2244 16.981 19.7898 17.6174 19.4767C18.2577 19.1596 18.9803 19.001 19.7854 19.001C20.5982 19.001 21.3094 19.1596 21.919 19.4767C22.5286 19.7939 23.002 20.2223 23.3394 20.7619C23.6806 21.2974 23.8493 21.8988 23.8455 22.5661C23.8493 23.2746 23.6442 23.8657 23.2301 24.3394C22.8199 24.8131 22.2851 25.1138 21.6257 25.2415V25.3403C22.4921 25.4598 23.1516 25.7831 23.6039 26.3104C24.0602 26.8335 24.2864 27.4885 24.2825 28.2752C24.2864 28.9961 24.0928 29.6366 23.7017 30.1968C23.3145 30.757 22.7797 31.1977 22.0972 31.519C21.4148 31.8403 20.6327 32.001 19.7509 32.001Z" fill="#09090B"/>
</g>
<defs>
<filter id="filter0_d_8588_54039" x="5.75" y="12.7514" width="27.9786" height="28.5004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8588_54039"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8588_54039" result="shape"/>
</filter>
<filter id="filter1_d_8588_54039" x="6.10785" y="1.02698" width="27.3387" height="16.6789" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8588_54039"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8588_54039" result="shape"/>
</filter>
<linearGradient id="paint0_linear_8588_54039" x1="19.7393" y1="14.0014" x2="19.7393" y2="38.0018" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9AA71"/>
<stop offset="0.514424" stop-color="#CD7739"/>
<stop offset="0.8" stop-color="#924E1C"/>
<stop offset="1" stop-color="#7C4217"/>
</linearGradient>
<linearGradient id="paint1_linear_8588_54039" x1="19.8598" y1="2.27898" x2="19.5609" y2="14.5335" gradientUnits="userSpaceOnUse">
<stop stop-color="#BF8A64"/>
<stop offset="0.4" stop-color="#AC6532"/>
<stop offset="0.8" stop-color="#924E1C"/>
<stop offset="1" stop-color="#7C4217"/>
</linearGradient>
<clipPath id="clip0_8588_54039">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconBadgeThirdComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconBadgeThirdComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconBadgeThirdComponent, selectors: [["ap-icon-badge-third"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconBadgeThirdComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconBadgeThirdComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-badge-third", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconBadgeThirdComponent, { className: "ApIconBadgeThirdComponent", filePath: "src/app/icons/ap-icon-badge-third/ap-icon-badge-third.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-gift-coupon/ap-icon-gift-coupon.component.ts
var ApIconGiftCouponComponent = class _ApIconGiftCouponComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.765 28.4L20.5 24.375L14.235 28.4L16.125 21.19L10.3675 16.5L17.805 16.045L20.5 9.15L23.195 16.045L30.6325 16.5L24.875 21.19M34.5 20C34.5 19.0717 34.8687 18.1815 35.5251 17.5251C36.1815 16.8687 37.0717 16.5 38 16.5V9.5C38 8.57174 37.6313 7.6815 36.9749 7.02513C36.3185 6.36875 35.4283 6 34.5 6L6.5 6C5.57174 6 4.6815 6.36875 4.02513 7.02513C3.36875 7.6815 3 8.57174 3 9.5L3 16.5C3.92826 16.5 4.8185 16.8687 5.47487 17.5251C6.13125 18.1815 6.5 19.0717 6.5 20C6.5 20.9283 6.13125 21.8185 5.47487 22.4749C4.8185 23.1313 3.92826 23.5 3 23.5L3 30.5C3 31.4283 3.36875 32.3185 4.02513 32.9749C4.6815 33.6313 5.57174 34 6.5 34H34.5C35.4283 34 36.3185 33.6313 36.9749 32.9749C37.6313 32.3185 38 31.4283 38 30.5V23.5C37.0717 23.5 36.1815 23.1313 35.5251 22.4749C34.8687 21.8185 34.5 20.9283 34.5 20Z" fill="url(#paint0_linear_10141_27486)"/>
<defs>
<linearGradient id="paint0_linear_10141_27486" x1="20.5" y1="9.5" x2="20.5" y2="29.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDE68A"/>
<stop offset="0.663464" stop-color="#FBBF24"/>
<stop offset="0.956737" stop-color="#D09600"/>
</linearGradient>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconGiftCouponComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconGiftCouponComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconGiftCouponComponent, selectors: [["ap-icon-gift-coupon"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconGiftCouponComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconGiftCouponComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-gift-coupon", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconGiftCouponComponent, { className: "ApIconGiftCouponComponent", filePath: "src/app/icons/ap-icon-gift-coupon/ap-icon-gift-coupon.component.ts", lineNumber: 10 });
})();

// src/app/components/ap-trn-card-match/ap-trn-card-match.component.ts
var _c011 = (a0, a1) => ({ "bg-gradient-yellow": a0, "bg-gradient-purple": a1 });
var ApTrnCardMatchComponent = class _ApTrnCardMatchComponent {
  accentColor = input("yellow");
  currentCount = input(0);
  totalCount = input(0);
  static \u0275fac = function ApTrnCardMatchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnCardMatchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnCardMatchComponent, selectors: [["ap-trn-card-match"]], inputs: { accentColor: [1, "accentColor"], currentCount: [1, "currentCount"], totalCount: [1, "totalCount"] }, decls: 10, vars: 6, consts: [[1, "relative", "inline-block", "align-bottom"], [1, "relative", "rounded-2xl", "p-[0.3rem]", 3, "ngClass"], [1, "flex", "h-18", "w-32", "items-center", "justify-center", "gap-1", "rounded-xl", "bg-zinc-900", "px-2", "py-3", "ring-1", "ring-zinc-600"], [1, "flex", "items-center", "justify-center"], ["name", "user", 1, "info-icon"], [1, "relative", "mt-4", "flex", "items-center"], [1, "-translate-y-1/4", "text-4xl", "font-semibold", "tracking-wide", "text-white"], [1, "tracking-wide", "text-zinc-400"]], template: function ApTrnCardMatchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "ap-icon", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h4", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c011, ctx.accentColor() === "yellow", ctx.accentColor() === "purple"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.currentCount(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("/", ctx.totalCount());
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnCardMatchComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-card-match", standalone: true, imports: [CommonModule, ApIconComponent], template: `<div class="relative inline-block align-bottom">
  <div
    class="relative rounded-2xl p-[0.3rem]"
    [ngClass]="{
      'bg-gradient-yellow': accentColor() === 'yellow',
      'bg-gradient-purple': accentColor() === 'purple',
    }"
  >
    <div
      class="flex h-18 w-32 items-center justify-center gap-1 rounded-xl bg-zinc-900 px-2 py-3 ring-1 ring-zinc-600"
    >
      <div class="flex items-center justify-center">
        <ap-icon name="user" class="info-icon" />
      </div>
      <div class="relative mt-4 flex items-center">
        <div
          class="-translate-y-1/4 text-4xl font-semibold tracking-wide text-white"
        >
          {{ currentCount() }}
        </div>
        <h4 class="tracking-wide text-zinc-400">/{{ totalCount() }}</h4>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnCardMatchComponent, { className: "ApTrnCardMatchComponent", filePath: "src/app/components/ap-trn-card-match/ap-trn-card-match.component.ts", lineNumber: 11 });
})();

// src/app/components/ap-trn-card-bonus/ap-trn-card-bonus.component.ts
var _c012 = (a0, a1) => ({ "bg-gradient-yellow": a0, "bg-gradient-purple": a1 });
var _c14 = (a0, a1) => ({ "text-yellow-gradient": a0, "text-purple-gradient": a1 });
function ApTrnCardBonusComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 7);
  }
}
var ApTrnCardBonusComponent = class _ApTrnCardBonusComponent {
  _displayValue = signal(0);
  _initialized = false;
  _animationFrameId = null;
  accentColor = input("yellow");
  multiplierTitle = input("BET");
  isLoading = input(false);
  currency = input("$");
  amount = input(null);
  isAnimated = input(false);
  multiplier = input(null);
  coinImage = input("");
  betImage = input("");
  displayAmount = computed(() => {
    if (!this.amount()) {
      return "----";
    }
    return this.formatNumber(Math.floor(this._displayValue()));
  });
  multiplierString = computed(() => {
    const mult = this.multiplier();
    return mult !== null && mult !== void 0 ? `x${mult}` : "----";
  });
  multiplierDisplay = computed(() => {
    const text = this.multiplierTitle();
    if (text) {
      if (text.includes("{0}")) {
        const mult = this.multiplier();
        return text.replace("{0}", `${mult !== null && mult !== void 0 ? mult : "----"}`);
      }
      return `${text} ${this.multiplierString()}`;
    }
    return this.multiplierString();
  });
  constructor() {
    effect(() => this.handleAmountChange());
  }
  ngOnDestroy() {
    this.cancelAnimation();
  }
  handleAmountChange() {
    if (!this.isAnimated()) {
      this.cancelAnimation();
      this._displayValue.set(this.amount() || 0);
      return;
    }
    const target = this.amount();
    untracked(() => {
      if (target === null || target === void 0) {
        this.cancelAnimation();
        this._displayValue.set(0);
        return;
      }
      if (!this._initialized) {
        this._displayValue.set(target);
        this._initialized = true;
        return;
      }
      const current = this._displayValue();
      if (target > current) {
        this.animateValue(current, target);
      } else {
        this.cancelAnimation();
        this._displayValue.set(target);
      }
    });
  }
  animateValue(start, end) {
    this.cancelAnimation();
    const duration = 1e3;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const nextVal = start + (end - start) * ease;
      this._displayValue.set(nextVal);
      if (progress < 1) {
        this._animationFrameId = requestAnimationFrame(animate);
      } else {
        this._displayValue.set(end);
        this._animationFrameId = null;
      }
    };
    this._animationFrameId = requestAnimationFrame(animate);
  }
  cancelAnimation() {
    if (this._animationFrameId !== null) {
      cancelAnimationFrame(this._animationFrameId);
      this._animationFrameId = null;
    }
  }
  formatNumber(value) {
    if (value === void 0) {
      return "";
    }
    const num = value;
    if (isNaN(num)) {
      return value.toString();
    }
    if (num >= 1e9) {
      return `${(num / 1e9).toFixed(1).replace(/\.0$/, "")}B`;
    }
    if (num >= 1e6) {
      return `${(num / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
    }
    if (num >= 1e5) {
      return `${(num / 1e3).toFixed(1).replace(/\.0$/, "")}K`;
    }
    return num.toLocaleString();
  }
  static \u0275fac = function ApTrnCardBonusComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnCardBonusComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnCardBonusComponent, selectors: [["ap-trn-card-bonus"]], inputs: { accentColor: [1, "accentColor"], multiplierTitle: [1, "multiplierTitle"], isLoading: [1, "isLoading"], currency: [1, "currency"], amount: [1, "amount"], isAnimated: [1, "isAnimated"], multiplier: [1, "multiplier"], coinImage: [1, "coinImage"], betImage: [1, "betImage"] }, decls: 10, vars: 12, consts: [[1, "relative", "inline-block", "align-bottom"], [1, "relative", "rounded-2xl", "p-[0.3rem]", 3, "ngClass"], [1, "h-18", "w-32", "overflow-hidden", "rounded-xl", "bg-zinc-900", "ring-1", "ring-zinc-600"], [1, "relative", "flex", "h-12", "items-center", "justify-center", "bg-zinc-950"], [1, "font-anton", "text-3xl", "font-semibold", 3, "ngClass"], [1, "flex", "h-6", "items-center", "justify-center", "bg-zinc-800"], [1, "ml-1", "font-bold", "text-zinc-300"], [1, "absolute", "inset-0", "popup-overlay"]], template: function ApTrnCardBonusComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "h5", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(9, ApTrnCardBonusComponent_Conditional_9_Template, 1, 0, "ap-loading-overlay", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c012, ctx.accentColor() === "yellow", ctx.accentColor() === "purple"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c14, ctx.accentColor() === "yellow", ctx.accentColor() === "purple"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2(" ", ctx.currency(), "", ctx.displayAmount(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.multiplierDisplay());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 9 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApLoadingOverlayComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnCardBonusComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-card-bonus", standalone: true, imports: [CommonModule, ApLoadingOverlayComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="relative inline-block align-bottom">
  <div
    class="relative rounded-2xl p-[0.3rem]"
    [ngClass]="{
      'bg-gradient-yellow': accentColor() === 'yellow',
      'bg-gradient-purple': accentColor() === 'purple',
    }"
  >
    <div
      class="h-18 w-32 overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-zinc-600"
    >
      <div class="relative flex h-12 items-center justify-center bg-zinc-950">
        <div
          class="font-anton text-3xl font-semibold"
          [ngClass]="{
            'text-yellow-gradient': accentColor() === 'yellow',
            'text-purple-gradient': accentColor() === 'purple',
          }"
        >
          {{ currency() }}{{ displayAmount() }}
        </div>
      </div>

      <div class="flex h-6 items-center justify-center bg-zinc-800">
        <h5 class="ml-1 font-bold text-zinc-300">{{ multiplierDisplay() }}</h5>
      </div>
    </div>
  </div>
  @if (isLoading()) {
    <ap-loading-overlay class="absolute inset-0 popup-overlay" />
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnCardBonusComponent, { className: "ApTrnCardBonusComponent", filePath: "src/app/components/ap-trn-card-bonus/ap-trn-card-bonus.component.ts", lineNumber: 12 });
})();

// src/app/components/ap-trn-float-countdown/ap-trn-float-countdown.component.ts
var _c013 = (a0, a1) => ({ "text-yellow-200": a0, "text-purple-200": a1 });
function ApTrnFloatCountdownComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 5);
    \u0275\u0275text(4, "DD");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c013, ctx_r0.accentColor() === "yellow", ctx_r0.accentColor() === "purple"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.timeRemaining().days), " ");
  }
}
function ApTrnFloatCountdownComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 5);
    \u0275\u0275text(4, "HH");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c013, ctx_r0.accentColor() === "yellow", ctx_r0.accentColor() === "purple"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.timeRemaining().hours), " ");
  }
}
function ApTrnFloatCountdownComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 5);
    \u0275\u0275text(4, "MM");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c013, ctx_r0.accentColor() === "yellow", ctx_r0.accentColor() === "purple"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.timeRemaining().minutes), " ");
  }
}
function ApTrnFloatCountdownComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 5);
    \u0275\u0275text(4, "SS");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c013, ctx_r0.accentColor() === "yellow", ctx_r0.accentColor() === "purple"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.timeRemaining().seconds), " ");
  }
}
function ApTrnFloatCountdownComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApTrnFloatCountdownComponent_Conditional_1_Conditional_0_Template, 5, 5, "div", 2);
    \u0275\u0275conditionalCreate(1, ApTrnFloatCountdownComponent_Conditional_1_Conditional_1_Template, 5, 5, "div", 2);
    \u0275\u0275conditionalCreate(2, ApTrnFloatCountdownComponent_Conditional_1_Conditional_2_Template, 5, 5, "div", 2);
    \u0275\u0275conditionalCreate(3, ApTrnFloatCountdownComponent_Conditional_1_Conditional_3_Template, 5, 5, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isShowDaysHours() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isShowDaysHours() || ctx_r0.isShowHoursMinutes() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isShowHoursMinutes() || ctx_r0.isShowMinutesSeconds() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isShowMinutesSeconds() ? 3 : -1);
  }
}
function ApTrnFloatCountdownComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 1);
    \u0275\u0275text(1, "EXPIRED");
    \u0275\u0275elementEnd();
  }
}
var ApTrnFloatCountdownComponent = class _ApTrnFloatCountdownComponent {
  /** 結束的時間 (Unix timestamp 毫秒) */
  targetTime = input(Date.now() + 3 * 60 * 1e3);
  // Default: 3 minutes from now
  accentColor = input("yellow");
  onComplete = output();
  onUpdate = output();
  // Emits remaining seconds
  /** 預設是5分鐘後 */
  target = computed(() => {
    return this.targetTime() ?? (/* @__PURE__ */ new Date()).getTime() + 5 * 60 * 1e3;
  });
  timeRemaining = signal({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  isExpired = signal(false);
  /** 是否顯示天數與小時 */
  isShowDaysHours = computed(() => {
    return this.timeRemaining().days > 0;
  });
  /** 是否顯示小時與分鐘 */
  isShowHoursMinutes = computed(() => {
    return this.timeRemaining().days <= 0 && this.timeRemaining().hours > 0;
  });
  /** 是否顯示分鐘與秒數 */
  isShowMinutesSeconds = computed(() => {
    return this.timeRemaining().days <= 0 && this.timeRemaining().hours <= 0 && (this.timeRemaining().minutes > 0 || this.timeRemaining().seconds >= 0);
  });
  intervalId;
  ngOnInit() {
    this.startCountdown();
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  startCountdown() {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1e3);
  }
  updateCountdown() {
    const difference = this.target() - Date.now();
    if (difference <= 0) {
      this.timeRemaining.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      this.isExpired.set(true);
      this.onComplete.emit();
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      return;
    }
    const days = Math.floor(difference / (1e3 * 60 * 60 * 24));
    const hours = Math.floor(difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
    const minutes = Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60));
    const seconds = Math.floor(difference % (1e3 * 60) / 1e3);
    this.timeRemaining.set({ days, hours, minutes, seconds });
    this.isExpired.set(false);
    const totalSeconds = Math.floor(difference / 1e3);
    this.onUpdate.emit(totalSeconds);
  }
  formatNumber(num) {
    return num.toString().padStart(2, "0");
  }
  static \u0275fac = function ApTrnFloatCountdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnFloatCountdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnFloatCountdownComponent, selectors: [["ap-trn-float-countdown"]], inputs: { targetTime: [1, "targetTime"], accentColor: [1, "accentColor"] }, outputs: { onComplete: "onComplete", onUpdate: "onUpdate" }, decls: 3, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "gap-2", "w-full"], [1, "text-red-400"], [1, "flex", "relative", "items-center", "gap-1"], [1, "flex", "relative", "items-center"], [1, "font-anton", "text-3xl", "tracking-[.05em]", 3, "ngClass"], [1, "font-anton", "text-zinc-400", "tracking-wide", "ml-1"], [1, "font-anton", "text-3xl", "tracking-[.05em]", "drop-shadow-md", 3, "ngClass"]], template: function ApTrnFloatCountdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ApTrnFloatCountdownComponent_Conditional_1_Template, 4, 4)(2, ApTrnFloatCountdownComponent_Conditional_2_Template, 2, 0, "h2", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isExpired() ? 1 : 2);
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnFloatCountdownComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-float-countdown", standalone: true, imports: [CommonModule], template: `<div class="flex items-center justify-center gap-2 w-full">
  @if (!isExpired()) {
    <!-- Days -->
    @if (isShowDaysHours()) {
      <div class="flex relative items-center gap-1">
        <div
          class="font-anton text-3xl tracking-[.05em]"
          [ngClass]="{
            'text-yellow-200': accentColor() === 'yellow',
            'text-purple-200': accentColor() === 'purple',
          }"
        >
          {{ formatNumber(timeRemaining().days) }}
        </div>
        <h4 class="font-anton text-zinc-400 tracking-wide ml-1">DD</h4>
      </div>
    }

    <!-- Hours -->
    @if (isShowDaysHours() || isShowHoursMinutes()) {
      <div class="flex relative items-center gap-1">
        <div
          class="font-anton text-3xl tracking-[.05em] drop-shadow-md"
          [ngClass]="{
            'text-yellow-200': accentColor() === 'yellow',
            'text-purple-200': accentColor() === 'purple',
          }"
        >
          {{ formatNumber(timeRemaining().hours) }}
        </div>
        <h4 class="font-anton text-zinc-400 tracking-wide ml-1">HH</h4>
      </div>
    }

    <!-- Minutes -->
    @if (isShowHoursMinutes() || isShowMinutesSeconds()) {
      <div class="flex relative items-center gap-1">
        <div
          class="font-anton text-3xl tracking-[.05em]"
          [ngClass]="{
            'text-yellow-200': accentColor() === 'yellow',
            'text-purple-200': accentColor() === 'purple',
          }"
        >
          {{ formatNumber(timeRemaining().minutes) }}
        </div>
        <h4 class="font-anton text-zinc-400 tracking-wide ml-1">MM</h4>
      </div>
    }

    <!-- Seconds -->
    @if (isShowMinutesSeconds()) {
      <div class="flex relative items-center">
        <div
          class="font-anton text-3xl tracking-[.05em]"
          [ngClass]="{
            'text-yellow-200': accentColor() === 'yellow',
            'text-purple-200': accentColor() === 'purple',
          }"
        >
          {{ formatNumber(timeRemaining().seconds) }}
        </div>
        <h4 class="font-anton text-zinc-400 tracking-wide ml-1">SS</h4>
      </div>
    }
  } @else {
    <!-- Expired Message -->
    <h2 class="text-red-400">EXPIRED</h2>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnFloatCountdownComponent, { className: "ApTrnFloatCountdownComponent", filePath: "src/app/components/ap-trn-float-countdown/ap-trn-float-countdown.component.ts", lineNumber: 17 });
})();

// src/app/components/ap-trn-game-hint/ap-trn-game-hint.component.ts
var _c014 = (a0) => ({ "opacity-0 duration-300": a0 });
var _c15 = (a0) => ({ "animate-fade animate-once animate-duration-300": a0 });
var ApTrnGameHintComponent = class _ApTrnGameHintComponent {
  title = input("Bet x");
  multiplier = input(1);
  accentColor = input("yellow");
  duration = input(3);
  animation = signal("in");
  /* Hint Title */
  displayTitle = computed(() => {
    const text = this.title();
    if (text) {
      if (text.includes("{0}")) {
        return text.replace("{0}", `${this.multiplier()}`);
      }
      return `${text} ${this.multiplier()}`;
    }
    return `Bet x${this.multiplier()}`;
  });
  /* Hint Description */
  message = input("");
  displayMessage = computed(() => {
    const text = this.message();
    if (text) {
      if (text.includes("{0}")) {
        return text.replace("{0}", `${this.multiplier()}`);
      }
      return text;
    }
    return this.multiplier() > 1 ? "Points are earned for betting during the activation period." : "No points are earned for betting during the activation period.";
  });
  close = output();
  constructor() {
    effect(() => __async(this, null, function* () {
      if (this.duration() > 0) {
        this.animation.set("in");
        yield firstValueFrom(timer(300 + this.duration() * 1e3));
        this.animation.set("out");
        yield firstValueFrom(timer(300));
        this.close.emit();
      }
    }));
  }
  getBorderColor() {
    return this.accentColor() === "yellow" ? "border-yellow-300/70" : "border-purple-300/70";
  }
  getIconColor() {
    return this.accentColor() === "yellow" ? "text-yellow-400" : "text-purple-400";
  }
  static \u0275fac = function ApTrnGameHintComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnGameHintComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnGameHintComponent, selectors: [["ap-trn-game-hint"]], inputs: { title: [1, "title"], multiplier: [1, "multiplier"], accentColor: [1, "accentColor"], duration: [1, "duration"], message: [1, "message"] }, outputs: { close: "close" }, decls: 8, vars: 14, consts: [[1, "relative", "w-56", "md:w-md", "duration-100", "items-center", "ml-4", 3, "ngClass"], [1, "relative", "rounded-lg", "border-2", "bg-zinc-950/85", "shadow-2xl", "px-2", "py-2", "flex", "flex-row", "items-center", "gap-2", 3, "ngClass"], ["name", "prizes"], [1, "flex-1", "text-zinc-300"], [1, "mt-1"]], template: function ApTrnGameHintComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "ap-icon", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h5");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h5", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c014, ctx.animation() === "out"));
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.getBorderColor());
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c15, ctx.animation() === "in"));
      \u0275\u0275advance();
      \u0275\u0275classMap("info-icon shrink-0 " + ctx.getIconColor());
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.getIconColor());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.displayTitle());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.displayMessage());
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnGameHintComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-game-hint", standalone: true, imports: [CommonModule, ApIconComponent], template: `<div
  class="relative w-56 md:w-md duration-100 items-center ml-4"
  [ngClass]="{ 'opacity-0 duration-300': animation() === 'out' }"
>
  <div
    class="relative rounded-lg border-2 bg-zinc-950/85 shadow-2xl px-2 py-2 flex flex-row items-center gap-2"
    [class]="getBorderColor()"
    [ngClass]="{
      'animate-fade animate-once animate-duration-300': animation() === 'in',
    }"
  >
    <!-- Icon -->
    <ap-icon name="prizes" [class]="'info-icon shrink-0 ' + getIconColor()" />

    <!-- Content -->
    <div class="flex-1 text-zinc-300">
      <h5 [class]="getIconColor()">{{ displayTitle() }}</h5>
      <h5 class="mt-1">{{ displayMessage() }}</h5>
    </div>
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnGameHintComponent, { className: "ApTrnGameHintComponent", filePath: "src/app/components/ap-trn-game-hint/ap-trn-game-hint.component.ts", lineNumber: 14 });
})();

// src/app/services/trn-ctrl/trn-ctrl.data.ts
var trnDefaultDataList = [];

// src/app/components/ap-trn-game-list/ap-trn-game-list.component.ts
function ApTrnGameListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275element(4, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275element(6, "ap-icon", 8);
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11);
    \u0275\u0275element(11, "ap-trn-card-title", 12);
    \u0275\u0275elementStart(12, "div", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover:border-yellow-400", !ctx_r0.isDisabled())("cursor-pointer", !ctx_r0.isDisabled());
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.quickBannerImage(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getQuickTimeLabel(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("accentColor", "yellow")("title", ((tmp_6_0 = ctx_r0.trnData()) == null ? null : tmp_6_0.name) ?? "Quick Race");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.description(), " ");
  }
}
function ApTrnGameListComponent_Conditional_1_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-button", 38);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r0.getFinishedButtonLabel())("accentColor", "purple")("disabled", true)("size", "small");
  }
}
function ApTrnGameListComponent_Conditional_1_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-button", 39);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r0.getRejoinButtonLabel())("accentColor", "purple-dark")("size", "small");
  }
}
function ApTrnGameListComponent_Conditional_1_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-button", 39);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r0.getJoinButtonLabel())("accentColor", "purple")("size", "small");
  }
}
function ApTrnGameListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 3)(2, "div", 15)(3, "div", 16);
    \u0275\u0275element(4, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275element(6, "ap-icon", 17);
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span", 19);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "span", 19);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 20)(21, "div", 21)(22, "div", 22);
    \u0275\u0275element(23, "ap-trn-card-title", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23)(25, "div", 24)(26, "div", 25)(27, "div", 26)(28, "div", 27);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 28)(31, "div", 29);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 30);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 31)(36, "div", 32);
    \u0275\u0275text(37);
    \u0275\u0275elementStart(38, "span", 33);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 27);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 34);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 35)(45, "div", 36)(46, "div", 37);
    \u0275\u0275text(47);
    \u0275\u0275elementStart(48, "span", 33);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 27);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(52, ApTrnGameListComponent_Conditional_1_Conditional_52_Template, 1, 4, "ap-button", 38)(53, ApTrnGameListComponent_Conditional_1_Conditional_53_Template, 1, 3, "ap-button", 39)(54, ApTrnGameListComponent_Conditional_1_Conditional_54_Template, 1, 3, "ap-button", 39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover:border-purple-400", !ctx_r0.isDisabled())("cursor-pointer", !ctx_r0.isDisabled());
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.eventBannerImage(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.getCountdownTitle(), " ", ctx_r0.formatTime(ctx_r0.days()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getDaysLabel());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.hours()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getHoursLabel());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.minutes()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getMinutesLabel());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.seconds()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getSecondsLabel());
    \u0275\u0275advance(4);
    \u0275\u0275property("accentColor", "purple")("title", ((tmp_13_0 = ctx_r0.trnData()) == null ? null : tmp_13_0.name) ?? "Event Game");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPrizePoolLabel(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currencySymbol(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.prizePool(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.playerScore()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("( ", ctx_r0.getPointLabel(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getScoreLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.description(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatNumber(ctx_r0.playerScore()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("( ", ctx_r0.getPointLabel(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getScoreLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isShowingDisabledButton() ? 52 : ctx_r0.isShowingRejoinButton() ? 53 : 54);
  }
}
var ApTrnGameListComponent = class _ApTrnGameListComponent {
  // Quick 賽事的字串
  getQuickTimeLabel = input("Regular Event");
  // Event 賽事的字串
  getDaysLabel = input("D");
  getHoursLabel = input("H");
  getMinutesLabel = input("M");
  getSecondsLabel = input("S");
  getCountdownStartTitle = input("Start in");
  getCountdownEndTitle = input("End in");
  getRejoinButtonLabel = input("Rejoin");
  getJoinButtonLabel = input("Join");
  getFinishedButtonLabel = input("Finished");
  currencySymbol = input("USD");
  getScoreLabel = input(" Your Score");
  getPrizePoolLabel = input(" Prize Pool");
  getPointLabel = input(" Pts");
  // 賽事資料
  trnData = input(trnDefaultDataList[0] ?? null);
  accentColor = computed(() => {
    return this.trnData()?.type === "quick" ? "yellow" : "purple";
  });
  isDisabled = signal(false);
  quickBannerImage = signal("assets/images/banners/img-trn-quick-banner-default-h.jpg");
  eventBannerImage = signal("assets/images/banners/img-trn-event-banner-default-2.jpg");
  description = computed(() => {
    return this.trnData()?.description || "Default description";
  });
  hasParticipated = input(false);
  highlightedPlayer = computed(() => this.trnData()?.raceData?.playersList.find((player) => player.highlighted) || null);
  getBonus = computed(() => {
    return this.highlightedPlayer()?.win || null;
  });
  playerScore = computed(() => {
    return this.highlightedPlayer()?.score || null;
  });
  prizePool = input("500,000");
  // 只有在活動賽事且處於公告或進行中狀態才顯示倒數計時
  isShowingCountdown() {
    return this.accentColor() === "purple" && (this.trnData()?.status === "announced" || this.trnData()?.status === "running");
  }
  // 只有在賽事結束、結算或即將結束的狀態才顯示禁用按鈕
  isShowingDisabledButton() {
    return this.trnData()?.status === "ending" || this.trnData()?.status === "ended" || this.trnData()?.status === "settled";
  }
  // 已參賽過但賽事已結束的情況下顯示重新參加按鈕
  isShowingRejoinButton() {
    return this.accentColor() === "purple" && this.hasParticipated();
  }
  // 只有在活動賽事且已參加的情況下才顯示獎金
  isShowingBonus() {
    return this.accentColor() === "purple" && this.hasParticipated() && this.getBonus() !== null;
  }
  // 根據賽事狀態決定顯示開始倒數還是結束倒數
  getCountdownTitle() {
    if (this.trnData()?.status === "announced") {
      return this.getCountdownStartTitle();
    }
    return this.getCountdownEndTitle();
  }
  // 根據賽事狀態決定倒數的目標時間
  getCountdownTime() {
    if (this.trnData()?.status === "announced") {
      return this.trnData()?.startTime || 0;
    }
    return this.trnData()?.endTime || 0;
  }
  now = signal(Date.now());
  intervalId = setInterval(() => this.now.set(Date.now()), 1e3);
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  timeRemaining = computed(() => {
    const target = this.getCountdownTime();
    return Math.max(0, target - this.now());
  });
  days = computed(() => Math.floor(this.timeRemaining() / (1e3 * 60 * 60 * 24)));
  hours = computed(() => Math.floor(this.timeRemaining() % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)));
  minutes = computed(() => Math.floor(this.timeRemaining() % (1e3 * 60 * 60) / (1e3 * 60)));
  seconds = computed(() => Math.floor(this.timeRemaining() % (1e3 * 60) / 1e3));
  formatTime(value) {
    return value.toString().padStart(2, "0");
  }
  formatNumber(value) {
    if (value === null || value === void 0) {
      return "--";
    }
    return new Intl.NumberFormat("en-US").format(value);
  }
  static \u0275fac = function ApTrnGameListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnGameListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnGameListComponent, selectors: [["ap-trn-game-list"]], inputs: { getQuickTimeLabel: [1, "getQuickTimeLabel"], getDaysLabel: [1, "getDaysLabel"], getHoursLabel: [1, "getHoursLabel"], getMinutesLabel: [1, "getMinutesLabel"], getSecondsLabel: [1, "getSecondsLabel"], getCountdownStartTitle: [1, "getCountdownStartTitle"], getCountdownEndTitle: [1, "getCountdownEndTitle"], getRejoinButtonLabel: [1, "getRejoinButtonLabel"], getJoinButtonLabel: [1, "getJoinButtonLabel"], getFinishedButtonLabel: [1, "getFinishedButtonLabel"], currencySymbol: [1, "currencySymbol"], getScoreLabel: [1, "getScoreLabel"], getPrizePoolLabel: [1, "getPrizePoolLabel"], getPointLabel: [1, "getPointLabel"], trnData: [1, "trnData"], hasParticipated: [1, "hasParticipated"], prizePool: [1, "prizePool"] }, decls: 2, vars: 2, consts: [[1, "relative", "flex", "flex-col", "overflow-hidden", "rounded-xl", "border-2", "border-yellow-300/30", "bg-yellow-950/10", "p-2", "gap-3", "select-none", "md:flex-row", 3, "hover:border-yellow-400", "cursor-pointer"], [1, "relative", "flex", "flex-col", "overflow-hidden", "rounded-xl", "border-2", "border-purple-300/20", "bg-purple-950/10", "p-2", "gap-3", "select-none", "md:flex-row", 3, "hover:border-purple-400", "cursor-pointer"], [1, "relative", "flex", "flex-col", "overflow-hidden", "rounded-xl", "border-2", "border-yellow-300/30", "bg-yellow-950/10", "p-2", "gap-3", "select-none", "md:flex-row"], [1, "flex", "shrink-0", "flex-col", "gap-1"], [1, "relative", "w-full", "overflow-hidden", "border-2", "rounded-lg", "border-yellow-400/20", "md:w-[11rem]"], [1, "relative", "md:h-[6rem]", "h-[12rem]", "w-full"], [1, "absolute", "inset-0", "h-full", "w-full", "object-contain-scale", 3, "src"], [1, "flex", "items-center", "gap-1", "text-zinc-400"], ["name", "calendar default", 1, "md:size-3", "size-4"], [1, "md:text-xs", "text-sm", "uppercase", "tracking-wide"], [1, "flex", "min-w-0", "flex-1", "flex-col", "justify-between"], [1, "min-w-0"], [3, "accentColor", "title"], [1, "min-w-0", "max-w-2xl", "md:text-sm", "text-md", "font-normal", "leading-tight", "text-zinc-400", "mt-1", "md:mt-0"], [1, "relative", "flex", "flex-col", "overflow-hidden", "rounded-xl", "border-2", "border-purple-300/20", "bg-purple-950/10", "p-2", "gap-3", "select-none", "md:flex-row"], [1, "relative", "w-full", "overflow-hidden", "border-2", "rounded-lg", "border-purple-400/20", "md:w-[11rem]"], [1, "relative", "md:h-[5.8rem]", "h-[12rem]", "w-full"], ["name", "clock default", 1, "md:size-3", "size-4"], [1, "flex", "flex-wrap", "md:text-xs", "text-sm", "uppercase", "tracking-wide", "space-x-1"], [1, "italic"], [1, "flex", "min-w-0", "flex-1", "flex-col", "text-left"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0", "flex-1"], [1, "grid", "grid-cols-1", "items-start", "gap-3", "md:grid-cols-[minmax(0,1fr)_11rem]", "md:gap-0", "mt-2", "md:mt-0"], [1, "min-w-0", "text-left"], [1, "flex", "items-start", "justify-between", "md:block"], [1, "inline-flex", "bg-gradient-to-r", "from-violet-500/20", "to-zinc-900/15", "flex-col", "pl-2"], [1, "md:text-[10px]", "text-xs", "italic", "text-zinc-400"], [1, "flex", "text-purple-300", "gap-1", "justify-start", "items-center"], [1, "md:text-sm", "text-md", "font-bold"], [1, "md:text-xl", "text-2xl", "font-bold"], [1, "shrink-0", "text-right", "md:hidden"], [1, "md:text-xl", "text-2xl", "font-bold", "text-zinc-200"], [1, "text-sm", "italic"], [1, "mt-1", "min-w-0", "text-left", "md:text-sm", "text-md", "font-normal", "leading-tight", "text-zinc-400"], [1, "flex", "flex-col", "md:w-[11rem]", "md:items-end"], [1, "hidden", "md:block", "shrink-0", "mb-2", "text-right"], [1, "text-xl", "font-bold", "text-zinc-200"], [1, "w-full", "whitespace-nowrap", "md:ml-auto", "md:w-[80%]", 3, "label", "accentColor", "disabled", "size"], [1, "w-full", "whitespace-nowrap", "md:ml-auto", "md:w-[80%]", 3, "label", "accentColor", "size"]], template: function ApTrnGameListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApTrnGameListComponent_Conditional_0_Template, 14, 9, "div", 0);
      \u0275\u0275conditionalCreate(1, ApTrnGameListComponent_Conditional_1_Template, 55, 27, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.accentColor() === "yellow" ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.accentColor() === "purple" ? 1 : -1);
    }
  }, dependencies: [CommonModule, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnGameListComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-game-list", standalone: true, imports: [CommonModule, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent], template: `@if (accentColor() === "yellow") {
  <div
    class="relative flex flex-col overflow-hidden rounded-xl border-2 border-yellow-300/30 bg-yellow-950/10 p-2 gap-3 select-none md:flex-row"
    [class.hover:border-yellow-400]="!isDisabled()"
    [class.cursor-pointer]="!isDisabled()"
  >
    <div class="flex shrink-0 flex-col gap-1">
      <div
        class="relative w-full overflow-hidden border-2 rounded-lg border-yellow-400/20 md:w-[11rem]"
      >
        <div class="relative md:h-[6rem] h-[12rem] w-full">
          <img
            [src]="quickBannerImage()"
            class="absolute inset-0 h-full w-full object-contain-scale"
          />
        </div>
      </div>
      <div class="flex items-center gap-1 text-zinc-400">
        <ap-icon name="calendar default" class="md:size-3 size-4" />
        <div class="md:text-xs text-sm uppercase tracking-wide">
          {{ getQuickTimeLabel() }}
        </div>
      </div>
    </div>

    <div class="flex min-w-0 flex-1 flex-col justify-between">
      <div class="min-w-0">
        <ap-trn-card-title
          [accentColor]="'yellow'"
          [title]="trnData()?.name ?? 'Quick Race'"
        />
        <div
          class="min-w-0 max-w-2xl md:text-sm text-md font-normal leading-tight text-zinc-400 mt-1 md:mt-0"
        >
          {{ description() }}
        </div>
      </div>
    </div>
  </div>
}
@if (accentColor() === "purple") {
  <div
    class="relative flex flex-col overflow-hidden rounded-xl border-2 border-purple-300/20 bg-purple-950/10 p-2 gap-3 select-none md:flex-row"
    [class.hover:border-purple-400]="!isDisabled()"
    [class.cursor-pointer]="!isDisabled()"
  >
    <div class="flex shrink-0 flex-col gap-1">
      <div
        class="relative w-full overflow-hidden border-2 rounded-lg border-purple-400/20 md:w-[11rem]"
      >
        <div class="relative md:h-[5.8rem] h-[12rem] w-full">
          <img
            [src]="eventBannerImage()"
            class="absolute inset-0 h-full w-full object-contain-scale"
          />
        </div>
      </div>
      <div class="flex items-center gap-1 text-zinc-400">
        <ap-icon name="clock default" class="md:size-3 size-4" />
        <div
          class="flex flex-wrap md:text-xs text-sm uppercase tracking-wide space-x-1"
        >
          {{ getCountdownTitle() }} {{ formatTime(days())
          }}<span class="italic">{{ getDaysLabel() }}</span>
          {{ formatTime(hours())
          }}<span class="italic">{{ getHoursLabel() }}</span>
          {{ formatTime(minutes())
          }}<span class="italic">{{ getMinutesLabel() }}</span>
          {{ formatTime(seconds())
          }}<span class="italic">{{ getSecondsLabel() }}</span>
        </div>
      </div>
    </div>

    <div class="flex min-w-0 flex-1 flex-col text-left">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0 flex-1">
          <ap-trn-card-title
            [accentColor]="'purple'"
            [title]="trnData()?.name ?? 'Event Game'"
          />
        </div>
      </div>

      <div
        class="grid grid-cols-1 items-start gap-3 md:grid-cols-[minmax(0,1fr)_11rem] md:gap-0 mt-2 md:mt-0"
      >
        <div class="min-w-0 text-left">
          <div class="flex items-start justify-between md:block">
            <div
              class="inline-flex bg-gradient-to-r from-violet-500/20 to-zinc-900/15 flex-col pl-2"
            >
              <div class="md:text-[10px] text-xs italic text-zinc-400">
                {{ getPrizePoolLabel() }}
              </div>
              <div
                class="flex text-purple-300 gap-1 justify-start items-center"
              >
                <div class="md:text-sm text-md font-bold">
                  {{ currencySymbol() }}
                </div>
                <div class="md:text-xl text-2xl font-bold">
                  {{ prizePool() }}
                </div>
              </div>
            </div>
            <div class="shrink-0 text-right md:hidden">
              <div class="md:text-xl text-2xl font-bold text-zinc-200">
                {{ formatNumber(playerScore()) }}
                <span class="text-sm italic">( {{ getPointLabel() }})</span>
              </div>
              <div class="md:text-[10px] text-xs italic text-zinc-400">
                {{ getScoreLabel() }}
              </div>
            </div>
          </div>
          <div
            class="mt-1 min-w-0 text-left md:text-sm text-md font-normal leading-tight text-zinc-400"
          >
            {{ description() }}
          </div>
        </div>
        <div class="flex flex-col md:w-[11rem] md:items-end">
          <div class="hidden md:block shrink-0 mb-2 text-right">
            <div class="text-xl font-bold text-zinc-200">
              {{ formatNumber(playerScore()) }}
              <span class="text-sm italic">( {{ getPointLabel() }})</span>
            </div>
            <div class="md:text-[10px] text-xs italic text-zinc-400">
              {{ getScoreLabel() }}
            </div>
          </div>
          @if (isShowingDisabledButton()) {
            <ap-button
              [label]="getFinishedButtonLabel()"
              [accentColor]="'purple'"
              [disabled]="true"
              [size]="'small'"
              class="w-full whitespace-nowrap md:ml-auto md:w-[80%]"
            />
          } @else if (isShowingRejoinButton()) {
            <ap-button
              [label]="getRejoinButtonLabel()"
              [accentColor]="'purple-dark'"
              [size]="'small'"
              class="w-full whitespace-nowrap md:ml-auto md:w-[80%]"
            />
          } @else {
            <ap-button
              [label]="getJoinButtonLabel()"
              [accentColor]="'purple'"
              [size]="'small'"
              class="w-full whitespace-nowrap md:ml-auto md:w-[80%]"
            />
          }
        </div>
      </div>
    </div>
  </div>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnGameListComponent, { className: "ApTrnGameListComponent", filePath: "src/app/components/ap-trn-game-list/ap-trn-game-list.component.ts", lineNumber: 25 });
})();

// src/app/components/ap-bf-card-bet-control/ap-bf-card-bet-control.component.ts
var _c015 = ["betValueContainer"];
var _c16 = ["betValueText"];
var ApBfCardBetControlComponent = class _ApBfCardBetControlComponent {
  betValueContainer;
  betValueText;
  bet = input(0);
  isMax = input(false);
  isMin = input(false);
  isCompactText = signal(false);
  increase = output();
  decrease = output();
  resizeObserver = null;
  constructor() {
  }
  ngAfterViewInit() {
    this.resizeObserver = new ResizeObserver(() => this.updateBetTextSize());
    if (this.betValueContainer?.nativeElement) {
      this.resizeObserver.observe(this.betValueContainer.nativeElement);
    }
    if (this.betValueText?.nativeElement) {
      this.resizeObserver.observe(this.betValueText.nativeElement);
    }
    queueMicrotask(() => this.updateBetTextSize());
  }
  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }
  inc() {
    this.increase.emit();
  }
  dec() {
    this.decrease.emit();
  }
  clickDecrease() {
    if (this.isMin())
      return;
    this.dec();
  }
  clickIncrease() {
    if (this.isMax())
      return;
    this.inc();
  }
  updateBetTextSize() {
    const container = this.betValueContainer?.nativeElement;
    const text = this.betValueText?.nativeElement;
    if (!container || !text)
      return;
    this.isCompactText.set(text.scrollWidth > container.clientWidth);
  }
  static \u0275fac = function ApBfCardBetControlComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApBfCardBetControlComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApBfCardBetControlComponent, selectors: [["ap-bf-card-bet-control"]], viewQuery: function ApBfCardBetControlComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c015, 5);
      \u0275\u0275viewQuery(_c16, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.betValueContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.betValueText = _t.first);
    }
  }, inputs: { bet: [1, "bet"], isMax: [1, "isMax"], isMin: [1, "isMin"] }, outputs: { increase: "increase", decrease: "decrease" }, decls: 12, vars: 8, consts: [["betValueContainer", ""], ["betValueText", ""], [1, "flex", "rounded-xl", "overflow-hidden", "w-fit", "border-bet-control-outer"], [1, "flex", "rounded-xl", "items-center", "bg-white", "overflow-hidden", "w-fit", "border-bet-control-inner"], [1, "size-14", "flex", "items-center", "justify-center", "bg-zinc-900", "hover:bg-zinc-800", "disabled:bg-zinc-800", "disabled:opacity-100", "disabled:cursor-not-allowed", "cursor-pointer", "color-transition", 3, "pointerdown", "disabled"], ["name", "minus default", 1, "size-10", "shrink-0", 3, "ngClass"], [1, "flex", "px-4", "py-2", "justify-center", "text-zinc-300", "w-auto", "overflow-hidden"], [1, "font-bold", "text-zinc-900", "text-center", "whitespace-nowrap", 3, "ngClass"], ["name", "plus default", 1, "size-10", "shrink-0", 3, "ngClass"]], template: function ApBfCardBetControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "button", 4);
      \u0275\u0275listener("pointerdown", function ApBfCardBetControlComponent_Template_button_pointerdown_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clickDecrease());
      });
      \u0275\u0275element(3, "ap-icon", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6, 0)(6, "div", 7, 1);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "moneyText");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 4);
      \u0275\u0275listener("pointerdown", function ApBfCardBetControlComponent_Template_button_pointerdown_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clickIncrease());
      });
      \u0275\u0275element(11, "ap-icon", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isMin());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isMin() ? "text-zinc-600" : "text-zinc-200");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.isCompactText() ? "text-xl" : "text-2xl");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, ctx.bet()), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isMax());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isMax() ? "text-zinc-600" : "text-zinc-200");
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent, MoneyTextPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApBfCardBetControlComponent, [{
    type: Component,
    args: [{ selector: "ap-bf-card-bet-control", standalone: true, imports: [CommonModule, ApIconComponent, MoneyTextPipe], template: `<div class="flex rounded-xl overflow-hidden w-fit border-bet-control-outer">
  <div
    class="flex rounded-xl items-center bg-white overflow-hidden w-fit border-bet-control-inner"
  >
    <!-- decrease -->
    <button
      (pointerdown)="clickDecrease()"
      [disabled]="isMin()"
      class="size-14 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-800 disabled:opacity-100 disabled:cursor-not-allowed cursor-pointer color-transition"
    >
      <ap-icon
        name="minus default"
        class="size-10 shrink-0"
        [ngClass]="isMin() ? 'text-zinc-600' : 'text-zinc-200'"
      />
    </button>

    <!-- Bet Value -->
    <div
      #betValueContainer
      class="flex px-4 py-2 justify-center text-zinc-300 w-auto overflow-hidden"
    >
      <div
        #betValueText
        class="font-bold text-zinc-900 text-center whitespace-nowrap"
        [ngClass]="isCompactText() ? 'text-xl' : 'text-2xl'"
      >
        {{ bet() | moneyText }}
      </div>
    </div>

    <!-- Plus -->
    <button
      (pointerdown)="clickIncrease()"
      [disabled]="isMax()"
      class="size-14 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-800 disabled:opacity-100 disabled:cursor-not-allowed cursor-pointer color-transition"
    >
      <ap-icon
        name="plus default"
        class="size-10 shrink-0"
        [ngClass]="isMax() ? 'text-zinc-600' : 'text-zinc-200'"
      />
    </button>
  </div>
</div>
` }]
  }], () => [], { betValueContainer: [{
    type: ViewChild,
    args: ["betValueContainer"]
  }], betValueText: [{
    type: ViewChild,
    args: ["betValueText"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApBfCardBetControlComponent, { className: "ApBfCardBetControlComponent", filePath: "src/app/components/ap-bf-card-bet-control/ap-bf-card-bet-control.component.ts", lineNumber: 13 });
})();

// src/app/icons/ap-icon-rocket/ap-icon-rocket.component.ts
var ApIconRocketComponent = class _ApIconRocketComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M84 46.5C84 52.299 79.299 57 73.5 57C67.701 57 63 52.299 63 46.5C63 40.701 67.701 36 73.5 36C79.299 36 84 40.701 84 46.5Z" fill="#18181B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48.4929 41.0743C60.8357 25.2129 80.1214 15 101.786 15C102.638 15 103.456 15.3386 104.059 15.9414C104.661 16.5442 105 17.3618 105 18.2143C105 39.8829 94.7871 59.1643 78.9257 71.5114C79.5854 75.6439 79.3406 79.8703 78.2083 83.8989C77.0759 87.9276 75.083 91.6627 72.3671 94.8464C69.6511 98.0301 66.2768 100.587 62.4768 102.34C58.6769 104.093 54.5419 105 50.3571 105C49.5047 105 48.6871 104.661 48.0843 104.059C47.4815 103.456 47.1429 102.638 47.1429 101.786V84.0814C42.9768 80.7916 39.2111 77.0244 35.9229 72.8571H18.2143C17.3618 72.8571 16.5442 72.5185 15.9414 71.9157C15.3386 71.3129 15 70.4953 15 69.6429C14.9997 65.4577 15.9074 61.3222 17.6607 57.5219C19.4139 53.7217 21.9709 50.3471 25.155 47.631C28.3392 44.915 32.0748 42.9222 36.104 41.7902C40.1332 40.6582 44.3601 40.414 48.4929 41.0743ZM72.8571 37.5C70.2997 37.5 67.847 38.5159 66.0386 40.3243C64.2302 42.1327 63.2143 44.5854 63.2143 47.1429C63.2143 49.7003 64.2302 52.153 66.0386 53.9614C67.847 55.7698 70.2997 56.7857 72.8571 56.7857C75.4146 56.7857 77.8673 55.7698 79.6757 53.9614C81.4841 52.153 82.5 49.7003 82.5 47.1429C82.5 44.5854 81.4841 42.1327 79.6757 40.3243C77.8673 38.5159 75.4146 37.5 72.8571 37.5Z" fill="#1D4ED8" stroke="white" stroke-width="4"/>
<path d="M29.6416 73.1592C30.3034 72.9914 30.9924 72.9561 31.668 73.0547C32.3435 73.1532 32.9929 73.3837 33.5791 73.7334C34.1654 74.0831 34.6771 74.5453 35.085 75.0928C35.4927 75.6401 35.7886 76.2622 35.9561 76.9238C36.1234 77.5855 36.1588 78.2738 36.0605 78.9492C35.9622 79.6247 35.732 80.2747 35.3828 80.8613C35.0337 81.4477 34.5723 81.9589 34.0254 82.3672C31.149 84.5155 29.1347 87.7343 28.5615 91.4268C29.9864 91.2041 31.3732 90.7619 32.6699 90.1104C34.6162 89.1323 36.3067 87.7116 37.6064 85.9619C38.007 85.4126 38.5119 84.947 39.0918 84.5918C39.6798 84.2317 40.3341 83.9925 41.0156 83.8877C41.6971 83.783 42.3925 83.8155 43.0615 83.9824C43.7306 84.1494 44.3597 84.4477 44.9121 84.8604C45.4646 85.273 45.9302 85.7917 46.2803 86.3857C46.6302 86.9797 46.8586 87.6374 46.9521 88.3203C47.0457 89.0035 47.0026 89.6989 46.8252 90.3652C46.6477 91.0315 46.339 91.6561 45.918 92.2021L45.917 92.2012C43.2708 95.7526 39.7079 98.516 35.6094 100.191C31.7566 101.766 27.5691 102.325 23.4473 101.819L22.624 101.704C21.5347 101.533 20.5281 101.02 19.75 100.238C18.9736 99.4586 18.4644 98.4524 18.2959 97.3652L18.1807 96.541C17.6756 92.4168 18.2324 88.2267 19.8047 84.3711C21.482 80.2583 24.2512 76.6819 27.8125 74.0303V74.0312C28.3592 73.6235 28.9805 73.3268 29.6416 73.1592Z" fill="#1D4ED8" stroke="white" stroke-width="4"/>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconRocketComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconRocketComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconRocketComponent, selectors: [["ap-icon-rocket"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconRocketComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconRocketComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-rocket", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconRocketComponent, { className: "ApIconRocketComponent", filePath: "src/app/icons/ap-icon-rocket/ap-icon-rocket.component.ts", lineNumber: 10 });
})();

// src/app/components/ap-bf-card-chance/ap-bf-card-chance.component.ts
var _c016 = (a0, a1, a2, a3) => ({ "text-lg": a0, "text-xl": a1, "sm:text-xl": a2, "sm:text-2xl": a3 });
function ApBfCardChanceComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ApBfCardChanceComponent_Conditional_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "h6", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.content());
  }
}
function ApBfCardChanceComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.image(), \u0275\u0275sanitizeUrl);
  }
}
function ApBfCardChanceComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-rocket", 7);
  }
}
function ApBfCardChanceComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.slogan());
  }
}
function ApBfCardChanceComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.slogan());
  }
}
var ApBfCardChanceComponent = class _ApBfCardChanceComponent {
  card = input(null);
  i18n = inject(AppI18nService);
  symbol = inject(BaseSymbolTextureService);
  order = input(0);
  mode = computed(() => this.card()?.mode ?? "dc");
  image = computed(() => this.symbol.getBuyChanceTextureUrl(this.mode()));
  title = computed(() => this.i18n.instantGame(`buyfeature_${this.mode()}_title`, this.i18n.instant("dc_title", "DOUBLE CHANCE")));
  content = computed(() => this.i18n.instantGame(`buyfeature_${this.mode()}_content`, this.i18n.instant("buy_feature_double_chance", "Pay to trigger Feature instantly.")));
  slogan = computed(() => this.i18n.instantGame(`buyfeature_${this.mode()}_slogan`, this.i18n.instant("buyfeature_dc_slogan", "Boost the odds!")));
  isSloganLong = computed(() => this.slogan().length > 8);
  currency = input("$");
  price = input(60);
  unitText = computed(() => this.i18n.instant("buy_feature_per_spin", "Spin"));
  activatedText = computed(() => this.i18n.instant("buy_feature_on", "ON"));
  deactivatedText = computed(() => this.i18n.instant("buy_feature_off", "OFF"));
  activated = model(true);
  disabled = input(false);
  activate = output();
  deactivate = output();
  buttonText = computed(() => this.activated() ? this.activatedText() : this.deactivatedText());
  showInfoModal = signal(false);
  openInfoModal(event) {
    event.preventDefault();
    event.stopPropagation();
    this.showInfoModal.set(!this.showInfoModal());
  }
  closeInfoModal() {
    this.showInfoModal.set(false);
  }
  isPriceLongMobile(price) {
    return this.priceDisplayLength(price) > 8;
  }
  isPriceLongDesktop(price) {
    return this.priceDisplayLength(price) > 10;
  }
  onButtonClick() {
    if (this.disabled())
      return;
    const newState = !this.activated();
    this.activated.set(newState);
    if (newState) {
      this.activate.emit();
      return;
    }
    this.deactivate.emit();
  }
  priceDisplayLength(price) {
    if (price === null || price === void 0 || isNaN(price))
      return 0;
    const intStr = Math.abs(Math.floor(price)).toString();
    const commaCount = Math.floor((intStr.length - 1) / 3);
    return this.currency().length + 1 + intStr.length + commaCount;
  }
  static \u0275fac = function ApBfCardChanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApBfCardChanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApBfCardChanceComponent, selectors: [["ap-bf-card-chance"]], inputs: { card: [1, "card"], order: [1, "order"], currency: [1, "currency"], price: [1, "price"], activated: [1, "activated"], disabled: [1, "disabled"] }, outputs: { activated: "activatedChange", activate: "activate", deactivate: "deactivate" }, decls: 24, vars: 37, consts: [[1, "relative", "flex", "h-72", "w-60", "flex-col", "rounded-xl", "bg-white", 3, "click"], [1, "absolute", "top-1", "right-1", "z-popover"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "size-6", "text-zinc-400", "hover:text-zinc-500", "cursor-pointer", "color-transition", 3, "click", "name"], [1, "absolute", "right-1", "top-full", "w-40", "border-info", "rounded-lg", "bg-white", "p-2", "shadow-md", "z-popover", "fade-out"], [1, "flex", "flex-1", "flex-col", "px-4", "text-center"], [1, "flex", "flex-1", "flex-col"], [1, "mx-auto", "size-28", 2, "transform", "translateY(-50%)", 3, "src"], [1, "mx-auto", "block", "size-28", 2, "transform", "translateY(-50%)"], [1, "-mt-10", "flex", "min-h-12", "items-center", "justify-center", "text-zinc-900"], [1, "line-clamp-2", "leading-tight"], [1, "mt-2", "min-h-8", "overflow-hidden", "font-semibold", "text-zinc-800", 3, "ngClass"], [1, "text-zinc-500"], [1, "mx-auto", "mb-6", "mt-2", "flex", "items-center", "justify-center"], [1, "italic", "text-zinc-500", "break-all", "line-clamp-2"], [1, "italic", "text-zinc-500", "break-keep", "line-clamp-2"], [1, "w-full", "flex", "items-center", "justify-center", "space-x-2", "px-4", "py-2", "rounded-b-xl", "transition-colors", "cursor-pointer", 3, "click", "disabled"], [1, "text-white", "uppercase"], [1, "chance-toggle-track", "relative", "h-7", "w-15", "rounded-full", "color-transition", "shrink-0"], [1, "chance-toggle-knob", "absolute", "left-1", "h-5.5", "w-5.5", "rounded-full", "bg-white", "shadow", "color-transition"], [1, "absolute", "right-1", "top-full", "w-40", "border-info", "rounded-lg", "bg-white", "p-2", "shadow-md", "z-popover", "fade-out", 3, "click"], [1, "text-left", "text-zinc-600"]], template: function ApBfCardChanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ApBfCardChanceComponent_Template_div_click_0_listener() {
        return ctx.closeInfoModal();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "ap-icon", 2);
      \u0275\u0275listener("click", function ApBfCardChanceComponent_Template_ap_icon_click_2_listener($event) {
        return ctx.openInfoModal($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, ApBfCardChanceComponent_Conditional_3_Template, 3, 1, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275conditionalCreate(6, ApBfCardChanceComponent_Conditional_6_Template, 1, 1, "img", 6)(7, ApBfCardChanceComponent_Conditional_7_Template, 1, 0, "ap-icon-rocket", 7);
      \u0275\u0275elementStart(8, "div", 8)(9, "h2", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "moneyText");
      \u0275\u0275elementStart(14, "time", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275conditionalCreate(17, ApBfCardChanceComponent_Conditional_17_Template, 2, 1, "h5", 13)(18, ApBfCardChanceComponent_Conditional_18_Template, 2, 1, "h3", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 15);
      \u0275\u0275listener("click", function ApBfCardChanceComponent_Template_button_click_19_listener() {
        return ctx.onButtonClick();
      });
      \u0275\u0275elementStart(20, "h2", 16);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 17);
      \u0275\u0275element(23, "div", 18);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("name", "exclamation-circle");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showInfoModal() ? 3 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.image() ? 6 : 7);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(32, _c016, ctx.isPriceLongMobile(ctx.price()), !ctx.isPriceLongMobile(ctx.price()), ctx.isPriceLongDesktop(ctx.price()), !ctx.isPriceLongDesktop(ctx.price())));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 30, ctx.price()), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("/", ctx.unitText());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isSloganLong() ? 17 : 18);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-blue-600", ctx.activated() && !ctx.disabled())("hover:bg-blue-500", ctx.activated() && !ctx.disabled())("bg-zinc-500", !ctx.activated() && !ctx.disabled())("hover:bg-zinc-400", !ctx.activated() && !ctx.disabled())("bg-zinc-400", ctx.disabled())("cursor-not-allowed", ctx.disabled());
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.buttonText());
      \u0275\u0275advance();
      \u0275\u0275classProp("chance-toggle-track-active", ctx.activated())("chance-toggle-track-inactive", !ctx.activated());
      \u0275\u0275advance();
      \u0275\u0275classProp("chance-toggle-knob-active", ctx.activated())("chance-toggle-knob-inactive", !ctx.activated());
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent, MoneyTextPipe, PointerDownSoundDirective, ApIconRocketComponent], styles: ["\n\n.chance-toggle-track[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.chance-toggle-track-active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.chance-toggle-track-inactive[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.chance-toggle-knob[_ngcontent-%COMP%] {\n  transform: translate(0, 0.125rem);\n}\n.chance-toggle-knob-active[_ngcontent-%COMP%] {\n  transform: translate(1.75rem, 0.125rem);\n}\n.chance-toggle-knob-inactive[_ngcontent-%COMP%] {\n  transform: translate(0, 0.125rem);\n}\n/*# sourceMappingURL=ap-bf-card-chance.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApBfCardChanceComponent, [{
    type: Component,
    args: [{ selector: "ap-bf-card-chance", imports: [CommonModule, ApIconComponent, MoneyTextPipe, PointerDownSoundDirective, ApIconRocketComponent], template: `<div
  class="relative flex h-72 w-60 flex-col rounded-xl bg-white"
  (click)="closeInfoModal()"
>
  <!-- Info icon + popup -->
  <div class="absolute top-1 right-1 z-popover">
    <ap-icon
      [name]="'exclamation-circle'"
      appPointerDownSound
      data-no-click-sound
      class="size-6 text-zinc-400 hover:text-zinc-500 cursor-pointer color-transition"
      (click)="openInfoModal($event)"
    />
    @if (showInfoModal()) {
      <div
        class="absolute right-1 top-full w-40 border-info rounded-lg bg-white p-2 shadow-md z-popover fade-out"
        (click)="$event.stopPropagation()"
      >
        <h6 class="text-left text-zinc-600">{{ content() }}</h6>
      </div>
    }
  </div>

  <!-- Content area -->
  <div class="flex flex-1 flex-col px-4 text-center">
    <div class="flex flex-1 flex-col">
      @if (image()) {
        <img
          [src]="image()"
          class="mx-auto size-28"
          style="transform: translateY(-50%)"
        />
      } @else {
        <ap-icon-rocket
          class="mx-auto block size-28"
          style="transform: translateY(-50%)"
        />
      }
      <div
        class="-mt-10 flex min-h-12 items-center justify-center text-zinc-900"
      >
        <h2 class="line-clamp-2 leading-tight">{{ title() }}</h2>
      </div>

      <div
        class="mt-2 min-h-8 overflow-hidden font-semibold text-zinc-800"
        [ngClass]="{
          'text-lg': isPriceLongMobile(price()),
          'text-xl': !isPriceLongMobile(price()),
          'sm:text-xl': isPriceLongDesktop(price()),
          'sm:text-2xl': !isPriceLongDesktop(price()),
        }"
      >
        {{ price() | moneyText }}
        <time class="text-zinc-500">/{{ unitText() }}</time>
      </div>
    </div>
    <div class="mx-auto mb-6 mt-2 flex items-center justify-center">
      @if (isSloganLong()) {
        <h5 class="italic text-zinc-500 break-all line-clamp-2">{{ slogan() }}</h5>
      } @else {
        <h3 class="italic text-zinc-500 break-keep line-clamp-2">{{ slogan() }}</h3>
      }
    </div>
  </div>

  <!-- Toggle button -->
  <button
    (click)="onButtonClick()"
    [disabled]="disabled()"
    class="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-b-xl transition-colors cursor-pointer"
    [class.bg-blue-600]="activated() && !disabled()"
    [class.hover:bg-blue-500]="activated() && !disabled()"
    [class.bg-zinc-500]="!activated() && !disabled()"
    [class.hover:bg-zinc-400]="!activated() && !disabled()"
    [class.bg-zinc-400]="disabled()"
    [class.cursor-not-allowed]="disabled()"
  >
    <h2 class="text-white uppercase">{{ buttonText() }}</h2>
    <span
      class="chance-toggle-track relative h-7 w-15 rounded-full color-transition shrink-0"
      [class.chance-toggle-track-active]="activated()"
      [class.chance-toggle-track-inactive]="!activated()"
    >
      <div
        class="chance-toggle-knob absolute left-1 h-5.5 w-5.5 rounded-full bg-white shadow color-transition"
        [class.chance-toggle-knob-active]="activated()"
        [class.chance-toggle-knob-inactive]="!activated()"
      ></div>
    </span>
  </button>
</div>
`, styles: ["/* src/app/components/ap-bf-card-chance/ap-bf-card-chance.component.css */\n.chance-toggle-track {\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.chance-toggle-track-active {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.chance-toggle-track-inactive {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.chance-toggle-knob {\n  transform: translate(0, 0.125rem);\n}\n.chance-toggle-knob-active {\n  transform: translate(1.75rem, 0.125rem);\n}\n.chance-toggle-knob-inactive {\n  transform: translate(0, 0.125rem);\n}\n/*# sourceMappingURL=ap-bf-card-chance.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApBfCardChanceComponent, { className: "ApBfCardChanceComponent", filePath: "src/app/components/ap-bf-card-chance/ap-bf-card-chance.component.ts", lineNumber: 17 });
})();

// src/app/components/ap-bf-popup-confirm-chance/ap-bf-popup-confirm-chance.component.ts
function ApBfPopupConfirmChanceComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.image(), \u0275\u0275sanitizeUrl);
  }
}
function ApBfPopupConfirmChanceComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "ap-icon-rocket");
    \u0275\u0275elementEnd();
  }
}
var ApBfPopupConfirmChanceComponent = class _ApBfPopupConfirmChanceComponent {
  card = input(null);
  symbol = inject(BaseSymbolTextureService);
  header = input("Message");
  currency = input("$");
  price = input(0);
  title = input("Buy Now?");
  image = computed(() => {
    const mode = this.card()?.mode ?? "dc";
    return this.symbol.getBuyChanceTextureUrl(mode);
  });
  description = input('Click "Confirm" to complete your purchase.');
  confirmText = input("CONFIRM");
  cancelText = input("CANCEL");
  close = output();
  confirm = output();
  clickConfirm() {
    this.confirm.emit();
  }
  clickCancel() {
    this.close.emit();
  }
  clickClose() {
    this.close.emit();
  }
  onKey(e) {
    if (e.key === "Escape")
      this.clickCancel();
    if (e.key === "Enter")
      this.clickConfirm();
  }
  static \u0275fac = function ApBfPopupConfirmChanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApBfPopupConfirmChanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApBfPopupConfirmChanceComponent, selectors: [["ap-bf-popup-confirm-chance"]], hostBindings: function ApBfPopupConfirmChanceComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function ApBfPopupConfirmChanceComponent_keydown_HostBindingHandler($event) {
        return ctx.onKey($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { card: [1, "card"], header: [1, "header"], currency: [1, "currency"], price: [1, "price"], title: [1, "title"], description: [1, "description"], confirmText: [1, "confirmText"], cancelText: [1, "cancelText"] }, outputs: { close: "close", confirm: "confirm" }, decls: 19, vars: 9, consts: [[1, "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "header", "size"], [1, "bg-white", "text-zinc-900", "p-4", "h-80", "overflow-auto", "space-y-4"], ["alt", "Chance", 1, "size-40", "mx-auto", "object-scale-down", "drop-shadow-lg", 3, "src"], [1, "flex", "justify-center", "object-scale-down"], [1, "flex-col", "space-y-2", "text-center"], ["id", "buy-confirm-title"], [1, "font-bold"], [1, "p-2", 3, "innerHTML"], [1, "flex"], ["type", "button", 1, "basis-1/2", "py-3", "rounded-bl-lg", "bg-zinc-600", "hover:bg-zinc-500", "cursor-pointer", 3, "click"], [1, "text-white", "uppercase"], ["type", "button", 1, "basis-1/2", "py-3", "rounded-br-lg", "bg-blue-600", "hover:bg-blue-500", "cursor-pointer", 3, "click"]], template: function ApBfPopupConfirmChanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ApBfPopupConfirmChanceComponent_Template_div_click_1_listener() {
        return ctx.clickCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
      \u0275\u0275listener("close", function ApBfPopupConfirmChanceComponent_Template_ap_ui_frame_popup_close_2_listener() {
        return ctx.clickClose();
      });
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275conditionalCreate(4, ApBfPopupConfirmChanceComponent_Conditional_4_Template, 1, 1, "img", 4)(5, ApBfPopupConfirmChanceComponent_Conditional_5_Template, 2, 0, "div", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h1", 8);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "moneyText");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(11, "h3", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
      \u0275\u0275listener("click", function ApBfPopupConfirmChanceComponent_Template_button_click_13_listener() {
        return ctx.clickCancel();
      });
      \u0275\u0275elementStart(14, "h1", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 13);
      \u0275\u0275listener("click", function ApBfPopupConfirmChanceComponent_Template_button_click_16_listener() {
        return ctx.clickConfirm();
      });
      \u0275\u0275elementStart(17, "h1", 12);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("header", ctx.header())("size", "mobile");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.image() ? 4 : 5);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, ctx.price()));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", ctx.description(), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.cancelText());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.confirmText());
    }
  }, dependencies: [ApUiFramePopupComponent, CommonModule, MoneyTextPipe, ApIconRocketComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApBfPopupConfirmChanceComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "ap-bf-popup-confirm-chance", imports: [ApUiFramePopupComponent, CommonModule, MoneyTextPipe, ApIconRocketComponent], template: `<div class="relative size-full grid place-items-center">
  <div class="absolute inset-0 popup-overlay" (click)="clickCancel()"></div>
  <ap-ui-frame-popup
    [header]="header()"
    [size]="'mobile'"
    class="w-11/12 md:w-3/4 lg:w-1/2"
    (close)="clickClose()"
  >
    <div class="bg-white text-zinc-900 p-4 h-80 overflow-auto space-y-4">
      @if (image()) {
        <img
          [src]="image()"
          alt="Chance"
          class="size-40 mx-auto object-scale-down drop-shadow-lg"
        />
      } @else {
        <div class="flex justify-center object-scale-down">
          <ap-icon-rocket />
        </div>
      }
      <div class="flex-col space-y-2 text-center">
        <div id="buy-confirm-title">
          <h1 class="font-bold">{{ price() | moneyText }}</h1>
        </div>
        <h3 class="p-2" [innerHTML]="description()"></h3>
      </div>
    </div>

    <div class="flex">
      <button
        type="button"
        class="basis-1/2 py-3 rounded-bl-lg bg-zinc-600 hover:bg-zinc-500 cursor-pointer"
        (click)="clickCancel()"
      >
        <h1 class="text-white uppercase">{{ cancelText() }}</h1>
      </button>
      <button
        type="button"
        class="basis-1/2 py-3 rounded-br-lg bg-blue-600 hover:bg-blue-500 cursor-pointer"
        (click)="clickConfirm()"
      >
        <h1 class="text-white uppercase">{{ confirmText() }}</h1>
      </button>
    </div>
  </ap-ui-frame-popup>
</div>
` }]
  }], null, { onKey: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApBfPopupConfirmChanceComponent, { className: "ApBfPopupConfirmChanceComponent", filePath: "src/app/components/ap-bf-popup-confirm-chance/ap-bf-popup-confirm-chance.component.ts", lineNumber: 16 });
})();

// src/app/components/ap-bf-popup-confirm-feature/ap-bf-popup-confirm-feature.component.ts
function ApBfPopupConfirmFeatureComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.image(), \u0275\u0275sanitizeUrl);
  }
}
function ApBfPopupConfirmFeatureComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "ap-loading-overlay", 15);
    \u0275\u0275elementEnd();
  }
}
var ApBfPopupConfirmFeatureComponent = class _ApBfPopupConfirmFeatureComponent {
  symbol = inject(BaseSymbolTextureService);
  card = input(null);
  mode = computed(() => this.card()?.mode ?? "bf");
  imageSource = computed(() => this.symbol.getBuyFeatureTextureUrl(this.mode()));
  image = signal(null);
  header = input("Message");
  currency = input("$");
  price = input(0);
  title = input("Buy Now?");
  description = input('Click "Confirm" to complete your purchase.');
  confirmText = input("CONFIRM");
  cancelText = input("CANCEL");
  close = output();
  confirm = output();
  constructor() {
    effect((onCleanup) => {
      const source = this.imageSource();
      let canceled = false;
      onCleanup(() => {
        canceled = true;
      });
      this.image.set(source);
      if (!source)
        return;
      void this.symbol.cropImageBlank(source).then((croppedImage) => {
        if (!canceled)
          this.image.set(croppedImage);
      });
    });
  }
  clickConfirm() {
    this.confirm.emit();
  }
  clickCancel() {
    this.close.emit();
  }
  clickClose() {
    this.close.emit();
  }
  onKey(e) {
    if (e.key === "Escape")
      this.clickCancel();
    if (e.key === "Enter")
      this.clickConfirm();
  }
  static \u0275fac = function ApBfPopupConfirmFeatureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApBfPopupConfirmFeatureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApBfPopupConfirmFeatureComponent, selectors: [["ap-bf-popup-confirm-feature"]], hostBindings: function ApBfPopupConfirmFeatureComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function ApBfPopupConfirmFeatureComponent_keydown_HostBindingHandler($event) {
        return ctx.onKey($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { card: [1, "card"], header: [1, "header"], currency: [1, "currency"], price: [1, "price"], title: [1, "title"], description: [1, "description"], confirmText: [1, "confirmText"], cancelText: [1, "cancelText"] }, outputs: { close: "close", confirm: "confirm" }, decls: 19, vars: 9, consts: [[1, "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "header", "size"], [1, "bg-white", "text-zinc-900", "p-4", "h-80", "overflow-auto", "space-y-4"], [1, "relative", "mx-auto", "size-40", "overflow-hidden"], [1, "relative", "mx-auto", "size-40"], [1, "flex-col", "space-y-2", "text-center"], ["id", "buy-confirm-title"], [1, "font-bold"], [1, "p-2", 3, "innerHTML"], [1, "flex"], ["type", "button", 1, "basis-1/2", "py-3", "rounded-bl-lg", "bg-zinc-600", "hover:bg-zinc-500", "cursor-pointer", 3, "click"], [1, "text-white", "uppercase"], ["type", "button", 1, "basis-1/2", "py-3", "rounded-br-lg", "bg-pink-600", "hover:bg-pink-500", "cursor-pointer", 3, "click"], [1, "absolute", "inset-0", "size-full", "object-contain", 3, "src"], [1, "absolute", "inset-0"]], template: function ApBfPopupConfirmFeatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ApBfPopupConfirmFeatureComponent_Template_div_click_1_listener() {
        return ctx.clickCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
      \u0275\u0275listener("close", function ApBfPopupConfirmFeatureComponent_Template_ap_ui_frame_popup_close_2_listener() {
        return ctx.clickClose();
      });
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275conditionalCreate(4, ApBfPopupConfirmFeatureComponent_Conditional_4_Template, 2, 1, "div", 4)(5, ApBfPopupConfirmFeatureComponent_Conditional_5_Template, 2, 0, "div", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h1", 8);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "moneyText");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(11, "h3", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
      \u0275\u0275listener("click", function ApBfPopupConfirmFeatureComponent_Template_button_click_13_listener() {
        return ctx.clickCancel();
      });
      \u0275\u0275elementStart(14, "h1", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 13);
      \u0275\u0275listener("click", function ApBfPopupConfirmFeatureComponent_Template_button_click_16_listener() {
        return ctx.clickConfirm();
      });
      \u0275\u0275elementStart(17, "h1", 12);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("header", ctx.header())("size", "mobile");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.image() ? 4 : 5);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, ctx.price()));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", ctx.description(), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.cancelText());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.confirmText());
    }
  }, dependencies: [ApUiFramePopupComponent, CommonModule, MoneyTextPipe, ApLoadingOverlayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApBfPopupConfirmFeatureComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "ap-bf-popup-confirm-feature", imports: [ApUiFramePopupComponent, CommonModule, MoneyTextPipe, ApLoadingOverlayComponent], template: `<div class="relative size-full grid place-items-center">
  <div class="absolute inset-0 popup-overlay" (click)="clickCancel()"></div>
  <ap-ui-frame-popup
    [header]="header()"
    [size]="'mobile'"
    class="w-11/12 md:w-3/4 lg:w-1/2"
    (close)="clickClose()"
  >
    <div class="bg-white text-zinc-900 p-4 h-80 overflow-auto space-y-4">
      @if (image()) {
        <div class="relative mx-auto size-40 overflow-hidden">
          <img
            [src]="image()"
            class="absolute inset-0 size-full object-contain"
          />
        </div>
      } @else {
        <div class="relative mx-auto size-40">
          <ap-loading-overlay class="absolute inset-0" />
        </div>
      }
      <div class="flex-col space-y-2 text-center">
        <div id="buy-confirm-title">
          <h1 class="font-bold">{{ price() | moneyText }}</h1>
        </div>
        <h3 class="p-2" [innerHTML]="description()"></h3>
      </div>
    </div>

    <div class="flex">
      <button
        type="button"
        class="basis-1/2 py-3 rounded-bl-lg bg-zinc-600 hover:bg-zinc-500 cursor-pointer"
        (click)="clickCancel()"
      >
        <h1 class="text-white uppercase">{{ cancelText() }}</h1>
      </button>
      <button
        type="button"
        class="basis-1/2 py-3 rounded-br-lg bg-pink-600 hover:bg-pink-500 cursor-pointer"
        (click)="clickConfirm()"
      >
        <h1 class="text-white uppercase">{{ confirmText() }}</h1>
      </button>
    </div>
  </ap-ui-frame-popup>
</div>
` }]
  }], () => [], { onKey: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApBfPopupConfirmFeatureComponent, { className: "ApBfPopupConfirmFeatureComponent", filePath: "src/app/components/ap-bf-popup-confirm-feature/ap-bf-popup-confirm-feature.component.ts", lineNumber: 16 });
})();

// src/app/components/ap-bf-popup-play-demo-confirm/ap-bf-popup-play-demo-confirm.component.ts
var ApBfPopupPlayDemoConfirmComponent = class _ApBfPopupPlayDemoConfirmComponent {
  header = input("Message");
  description = input("To begin watching, please confirm if you would like to play");
  cancelText = input("Cancel");
  confirmText = input("Confirm");
  close = output();
  confirm = output();
  onConfirm() {
    this.confirm.emit();
  }
  onCancel() {
    this.close.emit();
  }
  onKey(e) {
    if (e.key === "Escape")
      this.onCancel();
    if (e.key === "Enter")
      this.onConfirm();
  }
  static \u0275fac = function ApBfPopupPlayDemoConfirmComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApBfPopupPlayDemoConfirmComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApBfPopupPlayDemoConfirmComponent, selectors: [["ap-bf-popup-play-demo-confirm"]], hostBindings: function ApBfPopupPlayDemoConfirmComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function ApBfPopupPlayDemoConfirmComponent_keydown_HostBindingHandler($event) {
        return ctx.onKey($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { header: [1, "header"], description: [1, "description"], cancelText: [1, "cancelText"], confirmText: [1, "confirmText"] }, outputs: { close: "close", confirm: "confirm" }, decls: 10, vars: 8, consts: [[1, "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", "fade-out", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "header", "size"], [1, "p-4", "text-center", "space-y-4"], [1, "text-yellow-400", "popup-icon", 3, "name"], [1, "h-px", "divider-gradient-yellow", "opacity-80"], [1, "text-zinc-300", 3, "innerHTML"], [1, "flex", "justify-center", "gap-6", "p-6"], [1, "w-full", "[&>button]:w-full", 3, "click", "accentColor", "label"]], template: function ApBfPopupPlayDemoConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ApBfPopupPlayDemoConfirmComponent_Template_div_click_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
      \u0275\u0275listener("close", function ApBfPopupPlayDemoConfirmComponent_Template_ap_ui_frame_popup_close_2_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "ap-icon", 4)(5, "div", 5)(6, "h4", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "ap-button", 8);
      \u0275\u0275listener("click", function ApBfPopupPlayDemoConfirmComponent_Template_ap_button_click_8_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ap-button", 8);
      \u0275\u0275listener("click", function ApBfPopupPlayDemoConfirmComponent_Template_ap_button_click_9_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("header", ctx.header())("size", "mobile");
      \u0275\u0275advance(2);
      \u0275\u0275property("name", "play-circle");
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", ctx.description(), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", "zinc")("label", ctx.cancelText());
      \u0275\u0275advance();
      \u0275\u0275property("accentColor", "yellow")("label", ctx.confirmText());
    }
  }, dependencies: [CommonModule, ApUiFramePopupComponent, ApButtonComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApBfPopupPlayDemoConfirmComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "ap-bf-popup-play-demo-confirm", imports: [CommonModule, ApUiFramePopupComponent, ApButtonComponent, ApIconComponent], template: `<div class="relative size-full grid place-items-center">
  <div
    class="absolute inset-0 popup-overlay fade-out"
    (click)="onCancel()"
  ></div>
  <ap-ui-frame-popup
    [header]="header()"
    [size]="'mobile'"
    class="w-11/12 md:w-3/4 lg:w-1/2"
    (close)="close.emit()"
  >
    <div class="p-4 text-center space-y-4">
      <ap-icon [name]="'play-circle'" class="text-yellow-400 popup-icon" />
      <div class="h-px divider-gradient-yellow opacity-80"></div>
      <h4 class="text-zinc-300" [innerHTML]="description()"></h4>
    </div>

    <div class="flex justify-center gap-6 p-6">
      <ap-button
        class="w-full [&>button]:w-full"
        [accentColor]="'zinc'"
        [label]="cancelText()"
        (click)="onCancel()"
      />
      <ap-button
        class="w-full [&>button]:w-full"
        [accentColor]="'yellow'"
        [label]="confirmText()"
        (click)="onConfirm()"
      />
    </div>
  </ap-ui-frame-popup>
</div>
` }]
  }], null, { onKey: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApBfPopupPlayDemoConfirmComponent, { className: "ApBfPopupPlayDemoConfirmComponent", filePath: "src/app/components/ap-bf-popup-play-demo-confirm/ap-bf-popup-play-demo-confirm.component.ts", lineNumber: 14 });
})();

// src/ap-components-lib/ap-tag/ap-tag.component.ts
var _c017 = ["*"];
function ApTagComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.iconClasses);
    \u0275\u0275property("name", ctx_r0.icon);
  }
}
var ApTagComponent = class _ApTagComponent {
  label = "";
  accentColor = "orange";
  variant = "default";
  icon;
  rounded = false;
  get tagClasses() {
    const classes = [
      "inline-flex",
      "items-center",
      "gap-1",
      "px-2",
      "py-1",
      "text-xs",
      "font-semibold"
    ];
    if (this.variant === "pill" || this.rounded) {
      classes.push("rounded-full");
    } else {
      classes.push("rounded-md");
    }
    switch (this.accentColor) {
      case "orange":
        classes.push("bg-orange-500/20", "text-orange-500", "dark:text-orange-300");
        break;
      case "green":
        classes.push("bg-green-500/20", "text-green-500", "dark:text-green-300");
        break;
      case "sky":
        classes.push("bg-sky-500/20", "text-sky-500", "dark:text-sky-300");
        break;
      case "yellow":
        classes.push("text-yellow-500", "bg-yellow-500/20", "dark:text-yellow-300");
        break;
      case "red":
        classes.push("bg-red-500", "text-red-500", "dark:text-red-100");
        break;
      case "zinc":
        classes.push("bg-zinc-500/20", "text-zinc-500", "dark:text-zinc-300");
        break;
    }
    return classes.join(" ");
  }
  get iconClasses() {
    return "w-3 h-3";
  }
  static \u0275fac = function ApTagComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTagComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTagComponent, selectors: [["ap-tag"]], hostAttrs: ["display", "inline-block"], inputs: { label: "label", accentColor: "accentColor", variant: "variant", icon: "icon", rounded: "rounded" }, ngContentSelectors: _c017, decls: 5, vars: 4, consts: [[3, "name", "class"], [1, "uppercase"], [3, "name"]], template: function ApTagComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275conditionalCreate(1, ApTagComponent_Conditional_1_Template, 1, 3, "ap-icon", 0);
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.tagClasses);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.icon ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label);
    }
  }, dependencies: [CommonModule, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTagComponent, [{
    type: Component,
    args: [{ selector: "ap-tag", imports: [CommonModule, ApIconComponent], host: { display: "inline-block" }, template: '<div [class]="tagClasses">\n  @if (icon) {\n  <ap-icon [name]="icon" [class]="iconClasses"/>\n  }\n  <div class="uppercase">{{ label }}</div>\n  <ng-content/>\n</div>\n' }]
  }], null, { label: [{
    type: Input
  }], accentColor: [{
    type: Input
  }], variant: [{
    type: Input
  }], icon: [{
    type: Input
  }], rounded: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTagComponent, { className: "ApTagComponent", filePath: "src/ap-components-lib/ap-tag/ap-tag.component.ts", lineNumber: 12 });
})();

// src/app/pages/event-campaign-cards/event-campaign-data.ts
var defaultCampaignGroups = [
  {
    visible: true,
    id: "1",
    title: "Free Bonus Demo 1",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    description: "Congratulations! You have successfully completed the campaign and achieved the rewards. Keep up the great work and continue to participate in our exciting campaigns for more chances to win amazing prizes!",
    endTime: 17530524e5,
    weight: 1,
    campaignIdList: []
  },
  {
    visible: true,
    id: "2",
    title: "Free Bonus Demo 2",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    description: "Congratulations! You have successfully completed the campaign and achieved the rewards.",
    endTime: 17526264e5,
    weight: 1,
    campaignIdList: []
  },
  {
    visible: true,
    id: "3",
    title: "Free Bonus Demo 3",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    description: "Join our exciting campaign now and unlock amazing rewards! Participate in thrilling challenges and enjoy exclusive bonuses tailored just for you.",
    endTime: 17534856e5,
    weight: 1,
    campaignIdList: []
  },
  {
    visible: true,
    id: "4",
    title: "Free Bonus Demo 4",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    description: "Join our exciting campaign now and unlock amazing rewards! Participate in thrilling challenges and enjoy exclusive bonuses tailored just for you.",
    endTime: 17534856e5,
    weight: 1,
    campaignIdList: []
  },
  {
    visible: true,
    id: "5",
    title: "Free Bonus Demo 5",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    description: "Join our exciting campaign now and unlock amazing rewards! Participate in thrilling challenges and enjoy exclusive bonuses tailored just for you.",
    endTime: 17534856e5,
    weight: 1,
    campaignIdList: []
  }
];

// src/app/components/ap-campaign-card/ap-campaign-card.component.ts
function ApCampaignCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-tag", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("label", "new")("accentColor", "red");
  }
}
var ApCampaignCardComponent = class _ApCampaignCardComponent {
  appI18n = inject(AppI18nService);
  locale = inject(ClientSessionService).locale;
  //* 用於判斷標題是否包含中文 */
  chineseCharPattern = new RegExp("\\p{Script=Han}", "u");
  campaignGroup = input(defaultCampaignGroups[0]);
  isDisabled = signal(false);
  isNew = input(false);
  imageAlt = signal("Campaign Banner");
  id = computed(() => this.campaignGroup().id);
  image = computed(() => this.campaignGroup().image);
  title = computed(() => this.campaignGroup().title);
  /** 是否為中文標題 */
  isChineseTitle = computed(() => this.chineseCharPattern.test(this.title()));
  description = computed(() => this.campaignGroup().description);
  endDateLabel = computed(() => {
    return this.appI18n.computed("EndsOn_Text", "Ends On:")().replace("{0}", "");
  });
  endDateTime = computed(() => {
    const endTime = this.campaignGroup().endTime;
    return new Date(endTime).toLocaleString(this.locale, { hour12: false });
  });
  static \u0275fac = function ApCampaignCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApCampaignCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApCampaignCardComponent, selectors: [["ap-campaign-card"]], inputs: { campaignGroup: [1, "campaignGroup"], isNew: [1, "isNew"] }, decls: 14, vars: 9, consts: [[1, "relative"], [1, "absolute", "-top-2", "-right-2", "z-sticky", 2, "transform", "translateY(-12.5%)", 3, "label", "accentColor"], [1, "campaign-card-frame", "rounded-xl", "cursor-pointer"], [1, "relative", "text-center", "w-60", "rounded-lg", "overflow-hidden"], [1, "relative", "w-full", "h-20"], [1, "w-full", "h-full", "object-cover", 2, "aspect-ratio", "670 / 223", 3, "src", "alt"], [1, "px-4", "pt-2", "text-center", "space-y-2"], [1, "text-yellow-gradient", "text-3xl", "font-medium", "tracking-wide", "line-clamp-1", "uppercase"], [1, "w-full", "divider-gradient-yellow", "opacity-80", "mx-auto"], [1, "text-zinc-300", "text-left", "line-clamp-2", "h-12"], [1, "text-zinc-400"]], template: function ApCampaignCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ApCampaignCardComponent_Conditional_1_Template, 1, 2, "ap-tag", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "div", 8);
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "time", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isNew() ? 1 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("src", ctx.image(), \u0275\u0275sanitizeUrl)("alt", ctx.imageAlt());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("font-anton", !ctx.isChineseTitle());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.description(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.endDateLabel(), " ", ctx.endDateTime(), " ");
    }
  }, dependencies: [CommonModule, ApTagComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApCampaignCardComponent, [{
    type: Component,
    args: [{ selector: "ap-campaign-card", standalone: true, imports: [CommonModule, ApTagComponent], template: `<div class="relative">
  @if (isNew()) {
    <ap-tag
      class="absolute -top-2 -right-2 z-sticky"
      style="transform: translateY(-12.5%);;"
      [label]="'new'"
      [accentColor]="'red'"
    />
  }
  <div class="campaign-card-frame rounded-xl cursor-pointer">
    <div
      class="relative text-center w-60 rounded-lg overflow-hidden"
    >
      <!-- Banner Image -->
      <div class="relative w-full h-20">
        <img
          [src]="image()"
          [alt]="imageAlt()"
          class="w-full h-full object-cover"
          style="aspect-ratio: 670 / 223"
        />
      </div>

      <!-- Content -->
      <div class="px-4 pt-2 text-center space-y-2">
        <!-- Title -->
        <div
          class="text-yellow-gradient text-3xl font-medium tracking-wide line-clamp-1 uppercase"
          [class.font-anton]="!isChineseTitle()"
        >
          {{ title() }}
        </div>

        <!-- Divider Line -->
        <div class="w-full divider-gradient-yellow opacity-80 mx-auto"></div>

        <!-- Description -->
        <p class="text-zinc-300 text-left line-clamp-2 h-12">
          {{ description() }}
        </p>

        <!-- End Date -->
        <time class="text-zinc-400">
          {{ endDateLabel() }} {{ endDateTime() }}
        </time>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApCampaignCardComponent, { className: "ApCampaignCardComponent", filePath: "src/app/components/ap-campaign-card/ap-campaign-card.component.ts", lineNumber: 17 });
})();

// src/app/components/ap-cashdrop-card-component-countdown/ap-cashdrop-card-component-countdown.component.ts
function ApCashdropCardComponentCountdown_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 3)(9, "h3", 4);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 5);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 3)(14, "h3", 4);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 5);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 3)(19, "h3", 4);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 5);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.days()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.daysLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.hours()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.hoursLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.minutes()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.minutesLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.seconds()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.secondsLabel());
  }
}
function ApCashdropCardComponentCountdown_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "h2", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "h2", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 8)(14, "h2", 9);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 10);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 8)(19, "h2", 9);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 10);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.days()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.daysLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.hours()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.hoursLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.minutes()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.minutesLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.seconds()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.secondsLabel());
  }
}
var ApCashdropCardComponentCountdown = class _ApCashdropCardComponentCountdown {
  i18n = inject(AppI18nService);
  daysLabel = this.i18n.computed("cashdrop_D4_4", "DAYS");
  hoursLabel = this.i18n.computed("cashdrop_D4_5", "HRS");
  minutesLabel = this.i18n.computed("cashdrop_D4_6", "MINS");
  secondsLabel = this.i18n.computed("cashdrop_D4_7", "SECS");
  /** 結束時間 (Unix timestamp 豪秒) */
  endTime = input(0);
  /** 開始時間 (Unix timestamp 豪秒) */
  beginTime = input(0);
  /** 如果還沒到開始時間，返回開始時間，否則返回結束時間 */
  countDownTime = computed(() => {
    const now = Date.now();
    if (now < this.beginTime()) {
      return this.beginTime();
    } else {
      return this.endTime();
    }
  });
  days = signal(0);
  hours = signal(23);
  minutes = signal(59);
  seconds = signal(2);
  variant = input("default");
  timer;
  ngOnInit() {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1e3);
  }
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  updateCountdown() {
    const countDownTime = this.countDownTime();
    if (countDownTime === 0) {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
      return;
    }
    const distance = countDownTime - Date.now();
    if (distance > 0) {
      const days = Math.floor(distance / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      const minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(distance % (1e3 * 60) / 1e3);
      this.days.set(days);
      this.hours.set(hours);
      this.minutes.set(minutes);
      this.seconds.set(seconds);
    } else {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
    }
  }
  formatTime(value) {
    return value.toString().padStart(2, "0");
  }
  static \u0275fac = function ApCashdropCardComponentCountdown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApCashdropCardComponentCountdown)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApCashdropCardComponentCountdown, selectors: [["ap-cashdrop-card-component-countdown"]], inputs: { endTime: [1, "endTime"], beginTime: [1, "beginTime"], variant: [1, "variant"] }, decls: 2, vars: 2, consts: [[1, "flex", "items-center", "justify-center"], [1, "w-full", "rounded-lg", "p-1", "border-banner", "bg-zinc-800"], [1, "grid", "grid-cols-4", "gap-2", "sm:divide-x-2", "sm:divide-zinc-700/50"], [1, "flex", "flex-col", "items-center", "min-w-[3rem]"], [1, "text-yellow-200", "leading-none"], [1, "text-yellow-200/90"], [1, "w-full", "max-w-[13.75rem]", "rounded-lg", "p-1", "bg-zinc-800", 2, "border", "1px solid rgb(233, 212, 255, 0.9)"], [1, "grid", "grid-cols-4", "gap-1", "sm:divide-x-2", "sm:divide-zinc-700/50"], [1, "flex", "flex-col", "items-center", "min-w-[1rem]"], [1, "text-purple-200", "leading-none"], [1, "text-purple-200/90", "tracking-wider", "mt-0.5"]], template: function ApCashdropCardComponentCountdown_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApCashdropCardComponentCountdown_Conditional_0_Template, 23, 8, "div", 0);
      \u0275\u0275conditionalCreate(1, ApCashdropCardComponentCountdown_Conditional_1_Template, 23, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.variant() === "default" ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.variant() === "event" ? 1 : -1);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApCashdropCardComponentCountdown, [{
    type: Component,
    args: [{ selector: "ap-cashdrop-card-component-countdown", standalone: true, imports: [CommonModule], template: '<!-- Quick Variant -->\n@if (variant() === "default") {\n  <div class="flex items-center justify-center">\n    <div class="w-full rounded-lg p-1 border-banner bg-zinc-800">\n      <div class="grid grid-cols-4 gap-2 sm:divide-x-2 sm:divide-zinc-700/50">\n        <!-- DAYS -->\n        <div class="flex flex-col items-center min-w-[3rem]">\n          <h3 class="text-yellow-200 leading-none">\n            {{ formatTime(days()) }}\n          </h3>\n          <span class="text-yellow-200/90">{{ daysLabel() }}</span>\n        </div>\n        <!-- HRS -->\n        <div class="flex flex-col items-center min-w-[3rem]">\n          <h3 class="text-yellow-200 leading-none">\n            {{ formatTime(hours()) }}\n          </h3>\n          <span class="text-yellow-200/90">{{ hoursLabel() }}</span>\n        </div>\n        <!-- MINS -->\n        <div class="flex flex-col items-center min-w-[3rem]">\n          <h3 class="text-yellow-200 leading-none">\n            {{ formatTime(minutes()) }}\n          </h3>\n          <span class="text-yellow-200/90">{{ minutesLabel() }}</span>\n        </div>\n        <!-- SECS -->\n        <div class="flex flex-col items-center min-w-[3rem]">\n          <h3 class="text-yellow-200 leading-none">\n            {{ formatTime(seconds()) }}\n          </h3>\n          <span class="text-yellow-200/90">{{ secondsLabel() }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n}\n\n<!-- Event Variant -->\n@if (variant() === "event") {\n  <div class="flex items-center justify-center">\n    <div\n      class="w-full max-w-[13.75rem] rounded-lg p-1 bg-zinc-800"\n      style="border: 1px solid rgb(233, 212, 255, 0.9)"\n    >\n      <div class="grid grid-cols-4 gap-1 sm:divide-x-2 sm:divide-zinc-700/50">\n        <!-- DAYS -->\n        <div class="flex flex-col items-center min-w-[1rem]">\n          <h2 class="text-purple-200 leading-none">\n            {{ formatTime(days()) }}\n          </h2>\n          <span class="text-purple-200/90 tracking-wider mt-0.5">{{\n            daysLabel()\n          }}</span>\n        </div>\n        <!-- HRS -->\n        <div class="flex flex-col items-center min-w-[1rem]">\n          <h2 class="text-purple-200 leading-none">\n            {{ formatTime(hours()) }}\n          </h2>\n          <span class="text-purple-200/90 tracking-wider mt-0.5">{{\n            hoursLabel()\n          }}</span>\n        </div>\n        <!-- MINS -->\n        <div class="flex flex-col items-center min-w-[1rem]">\n          <h2 class="text-purple-200 leading-none">\n            {{ formatTime(minutes()) }}\n          </h2>\n          <span class="text-purple-200/90 tracking-wider mt-0.5">{{\n            minutesLabel()\n          }}</span>\n        </div>\n        <!-- SECS -->\n        <div class="flex flex-col items-center min-w-[1rem]">\n          <h2 class="text-purple-200 leading-none">\n            {{ formatTime(seconds()) }}\n          </h2>\n          <span class="text-purple-200/90 tracking-wider mt-0.5">{{\n            secondsLabel()\n          }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n}\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApCashdropCardComponentCountdown, { className: "ApCashdropCardComponentCountdown", filePath: "src/app/components/ap-cashdrop-card-component-countdown/ap-cashdrop-card-component-countdown.component.ts", lineNumber: 12 });
})();

// src/app/components/ap-cashdrop-card-countdown/ap-cashdrop-card-countdown.component.ts
function ApCashdropCardCountdownComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.remainingLabel(), " ");
  }
}
function ApCashdropCardCountdownComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.startingInLabel(), " ");
  }
}
var ApCashdropCardCountdownComponent = class _ApCashdropCardCountdownComponent {
  i18n = inject(AppI18nService);
  title = input("");
  remainingLabel = this.i18n.computed("cashdrop_D1_2", "Event Remaining");
  startingInLabel = this.i18n.computed("cashdrop_D3", "Starting In");
  /** timestamp in milliseconds */
  endTime = input(0);
  /** timestamp in milliseconds */
  beginTime = input(0);
  showRemainingLabel = computed(() => {
    const now = Date.now();
    if (this.beginTime() > now) {
      return false;
    }
    return true;
  });
  selected = input(false);
  getFrameClass() {
    return this.selected() ? "cashdrop-card-gold-frame cashdrop-card-selected-shadow" : "cashdrop-card-gold-frame";
  }
  getCardClass() {
    return this.selected() ? "cashdrop-card-body cashdrop-card-body-selected" : "cashdrop-card-body cashdrop-card-body-default";
  }
  static \u0275fac = function ApCashdropCardCountdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApCashdropCardCountdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApCashdropCardCountdownComponent, selectors: [["ap-cashdrop-card-countdown"]], inputs: { title: [1, "title"], endTime: [1, "endTime"], beginTime: [1, "beginTime"], selected: [1, "selected"] }, decls: 13, vars: 9, consts: [[1, "inline-flex", "w-fit"], [1, "flex", "items-center", "justify-center"], [1, ""], ["src", "assets/images/icons/img-ap-coin.png", "alt", "AP Coin", 1, "coin-icon"], [1, "grid", "min-w-0", "grid-rows-[auto,1fr,auto]"], [1, "m-0", "text-left", "text-gradient-gold", "font-bold", "line-clamp-1"], [3, "endTime", "beginTime", "variant"], [1, "block", "text-left", "text-zinc-400"]], template: function ApCashdropCardCountdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div")(3, "div", 1)(4, "div", 2);
      \u0275\u0275element(5, "img", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "h2", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "ap-cashdrop-card-component-countdown", 6);
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, ApCashdropCardCountdownComponent_Conditional_11_Template, 1, 1)(12, ApCashdropCardCountdownComponent_Conditional_12_Template, 1, 1);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap("relative rounded-[1rem] w-fit " + ctx.getFrameClass());
      \u0275\u0275advance();
      \u0275\u0275classMap("rounded-[0.9rem] " + ctx.getCardClass());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.title() || "Daily Reward Demo", " ");
      \u0275\u0275advance();
      \u0275\u0275property("endTime", ctx.endTime())("beginTime", ctx.beginTime())("variant", "default");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showRemainingLabel() ? 11 : 12);
    }
  }, dependencies: [CommonModule, ApCashdropCardComponentCountdown], styles: ["\n\n.cashdrop-card-gold-frame[_ngcontent-%COMP%] {\n  padding: 0.14rem;\n  background:\n    linear-gradient(\n      180deg,\n      #ecd8a3 40%,\n      rgb(189, 154, 75) 100%);\n}\n.cashdrop-card-body[_ngcontent-%COMP%] {\n  width: 16.8rem;\n  height: 6.8rem;\n  display: grid;\n  grid-template-columns: 4rem 1fr;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n.cashdrop-card-body-default[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(39 39 42) 0%,\n      rgb(24 24 27) 100%);\n}\n.cashdrop-card-body-selected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(56, 56, 65) 0%,\n      rgb(39 39 42) 100%);\n}\n/*# sourceMappingURL=ap-cashdrop-card-countdown.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApCashdropCardCountdownComponent, [{
    type: Component,
    args: [{ selector: "ap-cashdrop-card-countdown", standalone: true, imports: [CommonModule, ApCashdropCardComponentCountdown], template: `<div class="inline-flex w-fit">
  <div [class]="'relative rounded-[1rem] w-fit ' + getFrameClass()">
    <!-- Card: 2 columns -->
    <div [class]="'rounded-[0.9rem] ' + getCardClass()">
      <!-- Left column: coin, vertically centered -->
      <div class="flex items-center justify-center">
        <div class="">
          <img
            src="assets/images/icons/img-ap-coin.png"
            alt="AP Coin"
            class="coin-icon"
          />
        </div>
      </div>

      <!-- Right column: 3 rows (title / countdown / caption) -->
      <div class="grid min-w-0 grid-rows-[auto,1fr,auto]">
        <!-- Row 1: title -->
        <h2 class="m-0 text-left text-gradient-gold font-bold line-clamp-1">
          {{ title() || "Daily Reward Demo" }}
        </h2>

        <!-- Row 2: countdown (fully wrapped by a border box) -->
        <ap-cashdrop-card-component-countdown
          [endTime]="endTime()"
          [beginTime]="beginTime()"
          [variant]="'default'"
        />

        <!-- Row 3: caption -->
        <div class="block text-left text-zinc-400">
          @if (showRemainingLabel()) {
            {{ remainingLabel() }}  
          }
          @else {
            {{ startingInLabel() }}
          }
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/components/ap-cashdrop-card-countdown/ap-cashdrop-card-countdown.component.css */\n.cashdrop-card-gold-frame {\n  padding: 0.14rem;\n  background:\n    linear-gradient(\n      180deg,\n      #ecd8a3 40%,\n      rgb(189, 154, 75) 100%);\n}\n.cashdrop-card-body {\n  width: 16.8rem;\n  height: 6.8rem;\n  display: grid;\n  grid-template-columns: 4rem 1fr;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n.cashdrop-card-body-default {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(39 39 42) 0%,\n      rgb(24 24 27) 100%);\n}\n.cashdrop-card-body-selected {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(56, 56, 65) 0%,\n      rgb(39 39 42) 100%);\n}\n/*# sourceMappingURL=ap-cashdrop-card-countdown.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApCashdropCardCountdownComponent, { className: "ApCashdropCardCountdownComponent", filePath: "src/app/components/ap-cashdrop-card-countdown/ap-cashdrop-card-countdown.component.ts", lineNumber: 13 });
})();

// src/app/components/ap-cashdrop-list/ap-cashdrop-list.component.ts
function ApCashDropListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5)(5, "h3", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.leftLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.rightLabel());
  }
}
function ApCashDropListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "p", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.bgShade() === "900" ? "bg-zinc-900 hover:bg-zinc-700" : "bg-zinc-800 hover:bg-zinc-700");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.leftValue());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.rightValue());
  }
}
var ApCashDropListComponent = class _ApCashDropListComponent {
  // Type
  variant = input("header");
  // Left
  leftLabel = input("Prize");
  leftValue = input("5,000,000");
  // Right
  rightLabel = input("Prize Left");
  rightValue = input("10");
  bgShade = input("900");
  static \u0275fac = function ApCashDropListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApCashDropListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApCashDropListComponent, selectors: [["ap-cashdrop-list"]], inputs: { variant: [1, "variant"], leftLabel: [1, "leftLabel"], leftValue: [1, "leftValue"], rightLabel: [1, "rightLabel"], rightValue: [1, "rightValue"], bgShade: [1, "bgShade"] }, decls: 2, vars: 2, consts: [["class", "grid grid-cols-2 bg-zinc-800 border-bottom-zinc", 4, "ngIf"], ["class", "grid grid-cols-2 text-center border-bottom-zinc", 3, "ngClass", 4, "ngIf"], [1, "grid", "grid-cols-2", "bg-zinc-800", "border-bottom-zinc"], [1, "px-2", "py-2", "flex", "items-center", "justify-center"], [1, "text-yellow-200", "text-center"], [1, "px-2", "py-2"], [1, "text-zinc-300", "text-center"], [1, "grid", "grid-cols-2", "text-center", "border-bottom-zinc", 3, "ngClass"], [1, "p-4"], [1, "text-yellow-200"], [1, "border-left-zinc", "p-4"], [1, "text-white"]], template: function ApCashDropListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ApCashDropListComponent_div_0_Template, 7, 2, "div", 0)(1, ApCashDropListComponent_div_1_Template, 7, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.variant() === "header");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.variant() === "list");
    }
  }, dependencies: [CommonModule, NgClass, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApCashDropListComponent, [{
    type: Component,
    args: [{ selector: "ap-cashdrop-list", imports: [CommonModule], template: `<div
  *ngIf="variant() === 'header'"
  class="grid grid-cols-2 bg-zinc-800 border-bottom-zinc"
>
  <!-- Left-->
  <div class="px-2 py-2 flex items-center justify-center">
    <h3 class="text-yellow-200 text-center">{{ leftLabel() }}</h3>
  </div>

  <!-- Right -->
  <div class="px-2 py-2">
    <h3 class="text-zinc-300 text-center">{{ rightLabel() }}</h3>
  </div>
</div>

<!-- Content -->
<!-- List -->
<div
  *ngIf="variant() === 'list'"
  class="grid grid-cols-2 text-center border-bottom-zinc"
  [ngClass]="
    bgShade() === '900'
      ? 'bg-zinc-900 hover:bg-zinc-700'
      : 'bg-zinc-800 hover:bg-zinc-700'
  "
>
  <!-- Left -->
  <div class="p-4">
    <p class="text-yellow-200">{{ leftValue() }}</p>
  </div>

  <!-- Right -->
  <div class="border-left-zinc p-4">
    <p class="text-white">{{ rightValue() }}</p>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApCashDropListComponent, { className: "ApCashDropListComponent", filePath: "src/app/components/ap-cashdrop-list/ap-cashdrop-list.component.ts", lineNumber: 10 });
})();

// src/app/components/ap-promo-code-code/ap-promo-code-code.component.ts
var ApPromoCodeQrCodeComponent = class _ApPromoCodeQrCodeComponent {
  qrcodeAlt = input("QR Code");
  url = signal("https://t.me/advantplayofficial");
  size = input("24");
  borderColor = input("border-yellow-600");
  backgroundColor = input("bg-[radial-gradient(circle,_#FFF8DC_0%,_#F3D992_40%,_#BD9A4B_100%)]");
  openLink() {
    const linkUrl = this.url();
    if (linkUrl) {
      window.open(linkUrl, "_blank");
    }
  }
  static \u0275fac = function ApPromoCodeQrCodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApPromoCodeQrCodeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApPromoCodeQrCodeComponent, selectors: [["ap-promo-code-code"]], inputs: { qrcodeAlt: [1, "qrcodeAlt"], size: [1, "size"], borderColor: [1, "borderColor"], backgroundColor: [1, "backgroundColor"] }, decls: 5, vars: 2, consts: [[1, "relative", "inline-flex", "items-center", "justify-center", "hover-scale", "cursor-pointer", 3, "click"], [1, "promo-code-ring", "rounded-full"], [1, "bg-[radial-gradient(circle,_#FFF8DC_0%,_#F3D992_40%,_#BD9A4B_100%)"], [1, "w-full", "h-full", "rounded-sm", "relative", "overflow-hidden"], ["src", "assets/images/img_qrcode_ad.png", "alt", "QR Code", 1, "w-full", "h-full", "object-scale-down"]], template: function ApPromoCodeQrCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ApPromoCodeQrCodeComponent_Template_div_click_0_listener() {
        return ctx.openLink();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.backgroundColor() + " rounded-full p-3 w-" + ctx.size() + " h-" + ctx.size() + " flex items-center justify-center");
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApPromoCodeQrCodeComponent, [{
    type: Component,
    args: [{ selector: "ap-promo-code-code", standalone: true, imports: [CommonModule], template: `<div
  class="relative inline-flex items-center justify-center hover-scale cursor-pointer"
  (click)="openLink()"
>
  <div class="promo-code-ring rounded-full">
    <div
      class="bg-[radial-gradient(circle,_#FFF8DC_0%,_#F3D992_40%,_#BD9A4B_100%)"
      [class]="
        backgroundColor() +
        ' rounded-full p-3 w-' +
        size() +
        ' h-' +
        size() +
        ' flex items-center justify-center'
      "
    >
      <div class="w-full h-full rounded-sm relative overflow-hidden">
        <img
          src="assets/images/img_qrcode_ad.png"
          alt="QR Code"
          class="w-full h-full object-scale-down"
        />
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApPromoCodeQrCodeComponent, { className: "ApPromoCodeQrCodeComponent", filePath: "src/app/components/ap-promo-code-code/ap-promo-code-code.component.ts", lineNumber: 11 });
})();

// src/app/pages/event-campaign-content/event-campaign-content.data.ts
var DefaultBaseCampaigns = [
  {
    baseType: "freeSpins",
    id: "demo-waiting-to-join",
    title: "Waiting To Join Campaign",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    imageAlt: "Campaign Banner",
    variant: "waitingToJoin",
    description: "Congratulations! You have successfully completed the campaign and achieved the rewards. Keep up the great work and continue to participate in our exciting campaigns for more chances to win amazing prizes!",
    items: [
      "Congratulations! You have successfully completed the campaign and achieved the rewards.",
      "Keep up the great work and continue to participate in our exciting campaigns for more chances to win amazing prizes!",
      "Your dedication and effort have paid off, and we look forward to seeing you in our future campaigns!"
    ],
    progressCurrent: 99999,
    progressTotal: 1e5,
    balance: 1e4,
    beginTime: 17530524e5,
    endTime: 17530524e5,
    lastBetTime: 17530524e5,
    turnoverRequirement: 5e4,
    remainingTurnover: 5e4,
    maxWithdraw: 5e4,
    minWithdraw: 5e4,
    isFullyClaimed: false,
    displayType: "freeBonus"
  },
  {
    baseType: "freeSpins",
    id: "demo-under-condition",
    title: "Under Condition Campaign",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    imageAlt: "Campaign Banner",
    items: [
      "Congratulations! You have successfully completed the campaign and achieved the rewards.",
      "Keep up the great work and continue to participate in our exciting campaigns for more chances to win amazing prizes!",
      "Your dedication and effort have paid off, and we look forward to seeing you in our future campaigns!"
    ],
    variant: "underCondition",
    condition: {
      betCount: {
        current: 3,
        target: 10,
        remaining: 7,
        progress: 30
      },
      turnover: {
        current: 12e3,
        target: 5e4,
        remaining: 38e3,
        progress: 24
      }
    },
    endTime: 17526264e5,
    progressCurrent: 6,
    progressTotal: 10,
    balance: 5e3,
    beginTime: 17526264e5,
    lastBetTime: 17526264e5,
    turnoverRequirement: 25e3,
    remainingTurnover: 25e3,
    maxWithdraw: 25e3,
    minWithdraw: 25e3,
    isFullyClaimed: false,
    displayType: "freeSpins"
  },
  {
    baseType: "freeSpins",
    id: "demo-in-progress",
    title: "In Progress Campaign",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    imageAlt: "Campaign Banner",
    description: "Join our exciting campaign now and unlock amazing rewards! Participate in thrilling challenges and enjoy exclusive bonuses tailored just for you.",
    items: [
      "Exclusive rewards for participants",
      "Tailored challenges to test your skills",
      "Limited-time bonuses and offers"
    ],
    variant: "inProgress",
    endTime: 17534856e5,
    progressCurrent: 60,
    progressTotal: 100,
    balance: 5e3,
    beginTime: 17534856e5,
    lastBetTime: 17534856e5,
    turnoverRequirement: 25e3,
    remainingTurnover: 25e3,
    maxWithdraw: 25e3,
    minWithdraw: 25e3,
    isFullyClaimed: false,
    displayType: "freeSpins"
  },
  {
    baseType: "freeSpins",
    id: "demo-ready-to-withdraw",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    imageAlt: "Campaign Banner",
    description: "Join our exciting campaign now and unlock amazing rewards! Participate in thrilling challenges and enjoy exclusive bonuses tailored just for you.",
    items: [
      "Exclusive rewards for participants",
      "Tailored challenges to test your skills",
      "Limited-time bonuses and offers"
    ],
    variant: "readyToWithdraw",
    title: "Ready To Withdraw Campaign",
    endTime: 17534856e5,
    progressCurrent: 20,
    progressTotal: 100,
    balance: 5e3,
    beginTime: 17534856e5,
    lastBetTime: 17534856e5,
    turnoverRequirement: 25e3,
    remainingTurnover: 25e3,
    maxWithdraw: 25e3,
    minWithdraw: 25e3,
    isFullyClaimed: false,
    displayType: "freeBonus"
  },
  {
    baseType: "freeSpins",
    id: "demo5",
    image: "assets/images/banners/img-campaign-banner-default.jpg",
    imageAlt: "Campaign Banner",
    description: "Join our exciting campaign now and unlock amazing rewards! Participate in thrilling challenges and enjoy exclusive bonuses tailored just for you.",
    items: [
      "Exclusive rewards for participants",
      "Tailored challenges to test your skills",
      "Limited-time bonuses and offers"
    ],
    variant: "inProgress",
    title: "Free Bonus Demo 5",
    endTime: 17534856e5,
    progressCurrent: 0,
    progressTotal: 100,
    balance: 0,
    beginTime: 17534856e5,
    lastBetTime: 17534856e5,
    turnoverRequirement: 25e3,
    remainingTurnover: 25e3,
    maxWithdraw: 25e3,
    minWithdraw: 25e3,
    isFullyClaimed: false,
    displayType: "freeSpins"
  }
];

// src/app/components/ap-campaign-list/ap-campaign-list.component.ts
var _c018 = (a0, a1) => ({ "campaign-list-frame-in-progress": a0, "campaign-list-frame-muted": a1 });
var _c17 = (a0, a1) => ({ "text-white": a0, "text-yellow-300": a1 });
var _c22 = (a0, a1) => ({ "text-yellow-300": a0, "text-white": a1 });
function ApCampaignListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 12);
    \u0275\u0275listener("click", function ApCampaignListComponent_Conditional_11_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickJoin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r1.joinLabel);
  }
}
function ApCampaignListComponent_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 12);
    \u0275\u0275listener("click", function ApCampaignListComponent_Conditional_12_Conditional_0_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clickPlay());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r1.playLabel);
  }
}
function ApCampaignListComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 12);
    \u0275\u0275listener("click", function ApCampaignListComponent_Conditional_12_Conditional_1_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clickClaim());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r1.claimLabel);
  }
}
function ApCampaignListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApCampaignListComponent_Conditional_12_Conditional_0_Template, 1, 2, "ap-button", 8)(1, ApCampaignListComponent_Conditional_12_Conditional_1_Template, 1, 2, "ap-button", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.progressStatus() === "granted" || ctx_r1.progressStatus() === "inPlay" ? 0 : 1);
  }
}
function ApCampaignListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fullyClaimedLabel());
  }
}
function ApCampaignListComponent_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h5", 15)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275element(7, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.betCountRequirementLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (tmp_3_0 = ctx_r1.conditionBetCount()) == null ? null : tmp_3_0.current, "/", (tmp_3_0 = ctx_r1.conditionBetCount()) == null ? null : tmp_3_0.target, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (tmp_4_0 = ctx_r1.conditionBetCount()) == null ? null : tmp_4_0.progress, "%");
  }
}
function ApCampaignListComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275element(7, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.turnoverRequirementLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", ctx_r1.currency(), "", (tmp_3_0 = ctx_r1.conditionTurnover()) == null ? null : tmp_3_0.current, "/", ctx_r1.currency(), "", (tmp_3_0 = ctx_r1.conditionTurnover()) == null ? null : tmp_3_0.target, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (tmp_4_0 = ctx_r1.conditionTurnover()) == null ? null : tmp_4_0.progress, "%");
  }
}
function ApCampaignListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApCampaignListComponent_Conditional_14_Conditional_0_Template, 8, 5, "div", 14);
    \u0275\u0275conditionalCreate(1, ApCampaignListComponent_Conditional_14_Conditional_1_Template, 8, 7, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.conditionBetCount() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.conditionTurnover() ? 1 : -1);
  }
}
function ApCampaignListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-icon", 22);
    \u0275\u0275listener("click", function ApCampaignListComponent_Conditional_15_Template_ap_icon_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClickDetailIcon());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("name", "exclamation-circle");
  }
}
function ApCampaignListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 23)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "moneyText");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 23)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "moneyText");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 23)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "moneyText");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23)(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "moneyText");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 23)(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tipExpiryDateLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.endDateTime());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tipTurnoverRequirementLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, ctx_r1.turnoverRequirement()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tipRemainingTurnoverLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, ctx_r1.remainingTurnover()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tipMaxWithdrawLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 16, ctx_r1.maxWithdraw()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tipMinWithdrawLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 18, ctx_r1.minWithdraw()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tipCampaignIdLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.campaignId());
  }
}
var ApCampaignListComponent = class _ApCampaignListComponent {
  appI18n = inject(AppI18nService);
  locale = inject(ClientSessionService).locale;
  campaignData = input(DefaultBaseCampaigns[0]);
  currency = input("");
  baseType = computed(() => this.campaignData().baseType);
  variant = computed(() => this.campaignData().variant);
  progressStatus = computed(() => this.campaignData().progressStatus);
  displayType = computed(() => this.campaignData().displayType);
  conditionBetCount = computed(() => this.campaignData().condition?.betCount || null);
  conditionTurnover = computed(() => this.campaignData().condition?.turnover || null);
  isFullyClaimed = computed(() => this.campaignData().isFullyClaimed);
  endDateTime = computed(() => new Date(this.campaignData().endTime).toLocaleString(this.locale, { hour12: false }));
  title = computed(() => this.campaignData().title);
  lastBetDateTime = computed(() => new Date(this.campaignData().lastBetTime).toLocaleString(this.locale, { hour12: false }));
  turnoverRequirement = computed(() => this.campaignData().turnoverRequirement);
  remainingTurnover = computed(() => this.campaignData().remainingTurnover);
  maxWithdraw = computed(() => this.campaignData().maxWithdraw);
  minWithdraw = computed(() => this.campaignData().minWithdraw);
  campaignId = computed(() => this.campaignData().id);
  freeBonusHiddenSubtitle = this.appI18n.computed("promo_free_bonus");
  freeBonusInProgessSubtitle = this.appI18n.computed("promo_free_bonus");
  freeSpinsHiddenSubtitle = this.appI18n.computed("promo_free_spins");
  freeSpinsSubtitle = this.appI18n.computed("promo_free_spins");
  freeSpinBonusSubtitle = this.appI18n.computed("promo_free_bonus");
  // EndsOn_Text 這字串用不到 {0}
  betCountRequirementLabel = this.appI18n.computed("promo_bet_counts_requirement", "Bet Counts Requirement:");
  turnoverRequirementLabel = this.appI18n.computed("promo_turnover_requirement", "Turnover Requirement:");
  endDateLabel = computed(() => {
    return this.appI18n.computed("EndsOn_Text", "Ends On:")().replace("{0}", "");
  });
  claimLabel = this.appI18n.computed("Claim_Btn", "Claim")();
  playLabel = this.appI18n.computed("campaign_play", "Play")();
  joinLabel = this.appI18n.computed("Join_Btn", "Join")();
  // Tooltip data inputs
  tipExpiryDateLabel = this.appI18n.computed("ExpiryDate_Text", "Expiry Date:");
  tipTurnoverRequirementLabel = this.appI18n.computed("TurnoverRequirement_Text", "Turnover Requirement:");
  tipRemainingTurnoverLabel = this.appI18n.computed("RemainingRequirement_Text", "Remaining Requirement:");
  tipMaxWithdrawLabel = this.appI18n.computed("MaxWithdraw_Text", "Max Withdraw:");
  tipMinWithdrawLabel = this.appI18n.computed("MinWithdraw_Text", "Min Withdraw:");
  tipCampaignIdLabel = this.appI18n.computed("CampaignID_Text", "Campaign ID:");
  fullyClaimedLabel = this.appI18n.computed("promo_complete", "Promo Complete");
  claim = output();
  play = output();
  join = output();
  titleClicked = output();
  showTooltip = signal(false);
  showDetailIcon = computed(() => this.campaignData().variant === "inProgress");
  subtitle = computed(() => {
    if (this.baseType() === "freeBonus") {
      return `${this.freeBonusInProgessSubtitle()} ${this.currency()}${dec.comma(this.campaignData().balance)}`;
    } else {
      if (this.variant() === "underCondition" || this.variant() === "waitingToJoin") {
        return `${this.freeSpinsSubtitle()} x${this.campaignData().progressTotal}`;
      } else {
        if (this.displayType() === "freeSpins") {
          const total = this.campaignData().progressTotal;
          const remaining = total - this.campaignData().progressCurrent;
          return `${this.freeSpinsSubtitle()} ${remaining}/${total}`;
        } else {
          return `${this.freeSpinBonusSubtitle()} ${this.currency()}${dec.comma(this.campaignData().balance)}`;
        }
      }
    }
  });
  clickClaim() {
    this.claim.emit(this.campaignId());
  }
  clickJoin() {
    this.join.emit(this.campaignId());
  }
  clickPlay() {
    this.play.emit(this.campaignId());
  }
  clickTitle() {
    this.titleClicked.emit(this.campaignId());
  }
  onClickDetailIcon() {
    this.showTooltip.set(!this.showTooltip());
  }
  static \u0275fac = function ApCampaignListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApCampaignListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApCampaignListComponent, selectors: [["ap-campaign-list"]], inputs: { campaignData: [1, "campaignData"], currency: [1, "currency"] }, outputs: { claim: "claim", play: "play", join: "join", titleClicked: "titleClicked" }, decls: 17, vars: 20, consts: [[1, "campaign-card-frame", "relative", "rounded-xl", "bg-zinc-800", "p-4", "mb-4", 3, "ngClass"], [1, "relative", "flex", "flex-col", "gap-2", "sm:grid", "sm:grid-cols-[minmax(0,1fr)_auto]", "sm:items-start", "sm:gap-x-4", "text-left"], [1, "min-w-0"], [1, "tracking-wide", "break-words", "pr-8", 3, "click", "ngClass"], [1, "italic", "mb-1", 3, "ngClass"], [1, "flex", "items-center", "justify-between"], [1, "text-zinc-400"], [1, "relative", "h-full", "flex", "items-end"], [1, "w-full", "[&>button]:w-full", 3, "accentColor", "label"], [1, "relative", "w-full", "sm:col-span-2", "mt-3"], [1, "absolute", "top-0", "right-0", "text-zinc-400", "hover:text-zinc-300", "cursor-pointer", "transition-colors", "info-icon", 3, "name"], [1, "mt-3", "pt-2", "text-zinc-300", "fade-out", "border-top-zinc"], [1, "w-full", "[&>button]:w-full", 3, "click", "accentColor", "label"], [1, "text-zinc-500"], [1, "m-1", "pt-2", "sm:col-span-2"], [1, "flex", "justify-between", "text-zinc-300", "italic", "mb-1", "leading-4"], [1, "text-yellow-400", "text-xs", "italic", "font-medium"], [1, "h-[0.8rem]", "rounded-full", "bg-zinc-900", "p-[0.1rem]", "outline-2", "outline-zinc-600", "w-full"], [1, "h-full", "rounded-full", "progress-bar"], [1, "flex", "justify-between", "mb-1", "leading-4"], [1, "text-zinc-300"], [1, "text-yellow-400", "italic"], [1, "absolute", "top-0", "right-0", "text-zinc-400", "hover:text-zinc-300", "cursor-pointer", "transition-colors", "info-icon", 3, "click", "name"], [1, "flex", "justify-between", "py-1"]], template: function ApCampaignListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275listener("click", function ApCampaignListComponent_Template_h2_click_3_listener() {
        return ctx.clickTitle();
      });
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h4", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "time", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, ApCampaignListComponent_Conditional_11_Template, 1, 2, "ap-button", 8)(12, ApCampaignListComponent_Conditional_12_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, ApCampaignListComponent_Conditional_13_Template, 3, 1, "div", 9)(14, ApCampaignListComponent_Conditional_14_Template, 2, 2);
      \u0275\u0275conditionalCreate(15, ApCampaignListComponent_Conditional_15_Template, 1, 1, "ap-icon", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, ApCampaignListComponent_Conditional_16_Template, 35, 20, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c018, ctx.variant() === "inProgress", ctx.variant() === "completed" || ctx.variant() === "underCondition"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c17, ctx.variant() === "inProgress" || ctx.variant() === "underCondition", ctx.variant() === "completed"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c22, ctx.variant() === "inProgress" || ctx.variant() === "underCondition" || ctx.variant() === "waitingToJoin", ctx.variant() === "completed"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.subtitle(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" ", ctx.endDateLabel(), " ", ctx.endDateTime(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.variant() === "waitingToJoin" ? 11 : ctx.variant() === "inProgress" ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isFullyClaimed() ? 13 : 14);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showDetailIcon() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showTooltip() ? 16 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent, ApButtonComponent, MoneyTextPipe], styles: ["\n\n.campaign-list-frame-in-progress[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(#27272a, #27272a),\n    linear-gradient(\n      180deg,\n      #fefe7b,\n      #3f3f46);\n}\n.campaign-list-frame-muted[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(#27272a, #27272a),\n    linear-gradient(\n      180deg,\n      #6a6a6a,\n      #3f3f46);\n}\n.progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.5s ease-in-out;\n}\n.shadow-glow-soft[_ngcontent-%COMP%] {\n  box-shadow:\n    0 0 5px rgba(244, 196, 75, 0.8),\n    0 0 10px rgba(244, 196, 75, 0.6),\n    inset 0 0 3px rgba(255, 255, 255, 0.3);\n  filter: brightness(1.3) saturate(1.2);\n}\n/*# sourceMappingURL=ap-campaign-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApCampaignListComponent, [{
    type: Component,
    args: [{ selector: "ap-campaign-list", standalone: true, imports: [CommonModule, ApIconComponent, ApButtonComponent, MoneyTextPipe], template: `<div
  class="campaign-card-frame relative rounded-xl bg-zinc-800 p-4 mb-4"
  [ngClass]="{
    'campaign-list-frame-in-progress': variant() === 'inProgress',
    'campaign-list-frame-muted':
      variant() === 'completed' || variant() === 'underCondition',
  }"
>
  <div
    class="relative flex flex-col gap-2 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-x-4 text-left"
  >


    <!-- Left Content -->
    <div class="min-w-0">
      <!-- Title -->
      <h2
        class="tracking-wide break-words pr-8"
        [ngClass]="{
          'text-white': variant() === 'inProgress' || variant() === 'underCondition',
          'text-yellow-300': variant() === 'completed',
        }"
        (click)="clickTitle()"
      >
        {{ title() }}
      </h2>

      <!-- Prize -->
      <h4
        class="italic mb-1"
        [ngClass]="{
          'text-yellow-300':
            variant() === 'inProgress' || variant() === 'underCondition' || variant() === 'waitingToJoin',
          'text-white': variant() === 'completed',
        }"
      >
        {{ subtitle() }}
      </h4>

      <!-- End Date -->
      <div class="flex items-center justify-between">
        <time class="text-zinc-400">
          {{ endDateLabel() }} {{ endDateTime() }}
        </time>
      </div>
    </div>

    <!-- Right / End: Button -->
    <div
      class="relative h-full flex items-end"
    >
      @if (variant() ==="waitingToJoin") {
        <!-- Join Button -->
        <ap-button
          class="w-full [&>button]:w-full"
          (click)="clickJoin()"
          [accentColor]="'yellow'"
          [label]="joinLabel"
        />
      }
      @else if (variant() === "inProgress") {
        @if (progressStatus() === 'granted' || progressStatus() === 'inPlay') {
          <!-- Play Button -->
          <ap-button
            class="w-full [&>button]:w-full"
            (click)="clickPlay()"
            [accentColor]="'yellow'"
            [label]="playLabel"
          />
        }
        @else {
          <!-- Claim Button -->
          <ap-button
            class="w-full [&>button]:w-full"
            (click)="clickClaim()"
            [accentColor]="'yellow'"
            [label]="claimLabel"
          />
        }
      }
    </div>

    @if (isFullyClaimed()) {
      <div class="relative w-full sm:col-span-2 mt-3">
        <span class="text-zinc-500">{{ fullyClaimedLabel() }}</span>
      </div>
    } @else {
      <!-- Progress Bar 'pending'  -->
      @if (conditionBetCount()) {
        <div class="m-1 pt-2 sm:col-span-2">
          <h5 class="flex justify-between text-zinc-300 italic mb-1 leading-4">
            <span>{{ betCountRequirementLabel() }}</span>
            <span class="text-yellow-400 text-xs italic font-medium">
              {{ conditionBetCount()?.current }}/{{
                conditionBetCount()?.target
              }}
            </span>
          </h5>
          <div
            class="h-[0.8rem] rounded-full bg-zinc-900 p-[0.1rem] outline-2 outline-zinc-600 w-full"
          >
            <div
              class="h-full rounded-full progress-bar"
              [style.width.%]="conditionBetCount()?.progress"
            ></div>
          </div>
        </div>
      }

      @if (conditionTurnover()) {
        <div class="m-1 pt-2 sm:col-span-2">
          <div class="flex justify-between mb-1 leading-4">
            <span class="text-zinc-300">{{ turnoverRequirementLabel() }}</span>
            <span class="text-yellow-400 italic">
              {{ currency() }}{{ conditionTurnover()?.current }}/{{ currency()
              }}{{ conditionTurnover()?.target }}
            </span>
          </div>
          <div
            class="h-[0.8rem] rounded-full bg-zinc-900 p-[0.1rem] outline-2 outline-zinc-600 w-full"
          >
            <div
              class="h-full rounded-full progress-bar"
              [style.width.%]="conditionTurnover()?.progress"
            ></div>
          </div>
        </div>
      }
    }
    @if (showDetailIcon()) {
      <!-- Details Icon -->
      <ap-icon
        [name]="'exclamation-circle'"
        class="absolute top-0 right-0 text-zinc-400 hover:text-zinc-300 cursor-pointer transition-colors info-icon"
        (click)="onClickDetailIcon()"
      />
    }
  </div>

  <!-- Details List -->
  @if (showTooltip()) {
    <div class="mt-3 pt-2 text-zinc-300 fade-out border-top-zinc">
      <div class="flex justify-between py-1">
        <span>{{ tipExpiryDateLabel() }}</span>
        <span>{{ endDateTime() }}</span>
      </div>
      <div class="flex justify-between py-1">
        <span>{{ tipTurnoverRequirementLabel() }}</span>
        <span>{{ turnoverRequirement() | moneyText }}</span>
      </div>
      <div class="flex justify-between py-1">
        <span>{{ tipRemainingTurnoverLabel() }}</span>
        <span>{{ remainingTurnover() | moneyText }}</span>
      </div>
      <div class="flex justify-between py-1">
        <span>{{ tipMaxWithdrawLabel() }}</span>
        <span>{{ maxWithdraw() | moneyText }}</span>
      </div>
      <div class="flex justify-between py-1">
        <span>{{ tipMinWithdrawLabel() }}</span>
        <span>{{ minWithdraw() | moneyText }}</span>
      </div>
      <div class="flex justify-between py-1">
        <span>{{ tipCampaignIdLabel() }}</span>
        <span>{{ campaignId() }}</span>
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/components/ap-campaign-list/ap-campaign-list.component.css */\n.campaign-list-frame-in-progress {\n  background-image:\n    linear-gradient(#27272a, #27272a),\n    linear-gradient(\n      180deg,\n      #fefe7b,\n      #3f3f46);\n}\n.campaign-list-frame-muted {\n  background-image:\n    linear-gradient(#27272a, #27272a),\n    linear-gradient(\n      180deg,\n      #6a6a6a,\n      #3f3f46);\n}\n.progress-bar {\n  transition: width 0.5s ease-in-out;\n}\n.shadow-glow-soft {\n  box-shadow:\n    0 0 5px rgba(244, 196, 75, 0.8),\n    0 0 10px rgba(244, 196, 75, 0.6),\n    inset 0 0 3px rgba(255, 255, 255, 0.3);\n  filter: brightness(1.3) saturate(1.2);\n}\n/*# sourceMappingURL=ap-campaign-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApCampaignListComponent, { className: "ApCampaignListComponent", filePath: "src/app/components/ap-campaign-list/ap-campaign-list.component.ts", lineNumber: 20 });
})();

export {
  ApIconBadgeFirstComponent,
  ApIconBadgeSecondComponent,
  ApIconBadgeThirdComponent,
  ApIconGiftCouponComponent,
  ApIconRocketComponent,
  ApTrnCardTitleComponent,
  ApTrnCardMatchComponent,
  ApTrnCardBonusComponent,
  ApTrnFloatButtonComponent,
  ApTrnFloatCountdownComponent,
  ApTrnStatusBarComponent,
  ApTrnGameHintComponent,
  trnDefaultDataList,
  ApTrnGameListComponent,
  TrnGameConfirmComponent,
  TrnGameEventLeaveConfirmComponent,
  ApTrnGameMatchFinished,
  TrnCreatedNotificationComponent,
  defaultPlayersList,
  ApTrnListRowComponent,
  ApTrnGameResultComponent,
  ApBfCardBetControlComponent,
  ApBfCardChanceComponent,
  ApCashdropCardComponentCountdown,
  ApBfPopupConfirmChanceComponent,
  ApBfPopupConfirmFeatureComponent,
  ApBfPopupPlayDemoConfirmComponent,
  ApTagComponent,
  ApCampaignCardComponent,
  DefaultBaseCampaigns,
  ApCampaignListComponent,
  ApCashdropCardCountdownComponent,
  ApCashDropListComponent,
  ApPromoCodeQrCodeComponent,
  ApTabMenuIconComponent
};
//# sourceMappingURL=chunk-IT3VPYOU.js.map
