import {
  ApUiFramePopupComponent
} from "./chunk-HUKCMLYY.js";
import {
  PointerDownSoundDirective
} from "./chunk-JHJKX6RD.js";
import {
  BaseSymbolTextureService
} from "./chunk-AYE6H5VR.js";
import {
  MoneyTextPipe
} from "./chunk-U7TK2FIU.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  ApButtonComponent
} from "./chunk-VX4L3GZI.js";
import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  CommonModule,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  HostListener,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
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
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/app/components/ap-history-popup-replay/ap-history-popup-replay.component.ts
var ApHistoryPopupReplayComponent = class _ApHistoryPopupReplayComponent {
  appI18n = inject(AppI18nService);
  header = this.appI18n.computed("replay_message_title", "replay_message_title");
  description = this.appI18n.computed("replay_history_ticket_info", "Spin History Replay. For display purposes only. This will not impact your balance or gameplay.");
  confirmText = this.appI18n.computed("replay_confirm", "Confirm");
  cancelText = this.appI18n.computed("replay_cancel", "Cancel");
  close = output();
  confirm = output();
  ngOnInit() {
  }
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
  static \u0275fac = function ApHistoryPopupReplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApHistoryPopupReplayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApHistoryPopupReplayComponent, selectors: [["ap-history-popup-replay"]], hostBindings: function ApHistoryPopupReplayComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function ApHistoryPopupReplayComponent_keydown_HostBindingHandler($event) {
        return ctx.onKey($event);
      }, \u0275\u0275resolveDocument);
    }
  }, outputs: { close: "close", confirm: "confirm" }, decls: 10, vars: 8, consts: [[1, "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", "fade-out", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "header", "size"], [1, "p-4", "text-center", "space-y-4"], [1, "text-yellow-400", "popup-icon", "mx-auto", 3, "name"], [1, "h-px", "divider-gradient-yellow", "opacity-80"], [1, "text-zinc-300", 3, "innerHTML"], [1, "flex", "justify-center", "gap-6", "p-6"], [1, "w-full", "[&>button]:w-full", 3, "click", "accentColor", "label"]], template: function ApHistoryPopupReplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ApHistoryPopupReplayComponent_Template_div_click_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
      \u0275\u0275listener("close", function ApHistoryPopupReplayComponent_Template_ap_ui_frame_popup_close_2_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "ap-icon", 4)(5, "div", 5)(6, "h4", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "ap-button", 8);
      \u0275\u0275listener("click", function ApHistoryPopupReplayComponent_Template_ap_button_click_8_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ap-button", 8);
      \u0275\u0275listener("click", function ApHistoryPopupReplayComponent_Template_ap_button_click_9_listener() {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApHistoryPopupReplayComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "ap-history-popup-replay", imports: [CommonModule, ApUiFramePopupComponent, ApButtonComponent, ApButtonComponent, ApIconComponent], template: `<div class="relative size-full grid place-items-center">
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
    <!-- Content -->
    <div class="p-4 text-center space-y-4">
      <ap-icon
        [name]="'play-circle'"
        class="text-yellow-400 popup-icon mx-auto"
      />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApHistoryPopupReplayComponent, { className: "ApHistoryPopupReplayComponent", filePath: "src/app/components/ap-history-popup-replay/ap-history-popup-replay.component.ts", lineNumber: 15 });
})();

// src/app/components/ap-bf-card-feature/ap-bf-card-feature.component.ts
var _c0 = (a0, a1, a2, a3, a4) => ({ "font-bold": a0, "text-lg": a1, "text-xl": a2, "sm:text-xl": a3, "sm:text-2xl": a4 });
function ApBfCardFeatureComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.image(), \u0275\u0275sanitizeUrl);
  }
}
function ApBfCardFeatureComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 2);
  }
}
function ApBfCardFeatureComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ApBfCardFeatureComponent_Conditional_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "h6", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.content(), " ");
  }
}
function ApBfCardFeatureComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ApBfCardFeatureComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.playDemo.emit(0));
    });
    \u0275\u0275element(1, "ap-icon", 19);
    \u0275\u0275elementStart(2, "h3", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.playDemoLabel(), " ");
  }
}
var ApBfCardFeatureComponent = class _ApBfCardFeatureComponent {
  i18n = inject(AppI18nService);
  symbol = inject(BaseSymbolTextureService);
  /** ex: dev.diresoft.net/system/game_word/10093/en/ */
  card = input(null);
  mode = computed(() => this.card()?.mode ?? "bf");
  imageSource = computed(() => this.symbol.getBuyFeatureTextureUrl(this.mode()));
  image = signal(null);
  title = computed(() => this.i18n.instantGame(`buyfeature_${this.mode()}_title`, this.i18n.instant("bf_title", "FREE GAME")));
  content = computed(() => this.i18n.instantGame(`buyfeature_${this.mode()}_content`, this.i18n.instant("buy_feature_buy_feature", "Trigger the FREE GAME, win big rewards!")));
  playDemoLabel = computed(() => this.i18n.instant("buy_feature_demo_link", "Feel the win!"));
  currency = computed(() => this.card()?.currency ?? "$");
  price = input(0);
  buttonText = computed(() => this.i18n.instant("buy_feature_buy", "Buy"));
  disabled = input(false);
  showPlayDemo = computed(() => this.card()?.isDemoAvailable ?? false);
  buttonClick = output();
  playDemo = output();
  showInfoModal = signal(false);
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
    return this.priceDisplayLength(price) > 12;
  }
  onButtonClick() {
    if (this.disabled())
      return;
    this.buttonClick.emit();
  }
  /* 數字長度縮小字型大小 */
  priceDisplayLength(price) {
    if (price === null || price === void 0 || isNaN(price))
      return 0;
    const intStr = Math.abs(Math.floor(price)).toString();
    const commaCount = Math.floor((intStr.length - 1) / 3);
    return this.currency().length + 1 + intStr.length + commaCount;
  }
  static \u0275fac = function ApBfCardFeatureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApBfCardFeatureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApBfCardFeatureComponent, selectors: [["ap-bf-card-feature"]], inputs: { card: [1, "card"], price: [1, "price"], disabled: [1, "disabled"] }, outputs: { buttonClick: "buttonClick", playDemo: "playDemo" }, decls: 19, vars: 27, consts: [[1, "relative", "flex", "w-60", "h-72", "flex-col", "rounded-xl", "bg-white", 3, "click"], [1, "relative", "mx-auto", "h-28", "w-28", "overflow-hidden", 2, "transform", "translateY(-50%)"], [1, "absolute", 2, "transform", "translateY(-50%)"], [1, "absolute", "top-1", "right-1", "z-popover"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "size-6", "text-zinc-400", "hover:text-zinc-500", "cursor-pointer", "color-transition", 3, "click", "name"], [1, "absolute", "right-1", "top-full", "w-40", "rounded-lg", "border-info", "bg-white", "p-2", "shadow-md", "z-popover", "fade-out"], [1, "absolute", "inset-x-0", "top-[4.5rem]", "flex", "flex-1", "flex-col", "px-4", "text-center"], [1, "flex", "flex-1", "flex-col"], [1, "flex", "min-h-12", "items-center", "justify-center", "text-zinc-900"], [1, "line-clamp-2", "leading-tight"], [1, "mt-2", "min-h-8", "font-semibold", "text-zinc-800", "overflow-hidden", 3, "ngClass"], [1, "absolute", "inset-x-0", "bottom-0", "flex", "flex-col"], [1, "mx-auto", "mb-6", "mt-2", "flex", "items-center", "justify-center", "gap-1", "whitespace-nowrap", "border-underline-pink", "cursor-pointer", "text-pink-500"], [1, "w-full", "py-2", "rounded-b-xl", "transition-colors", "cursor-pointer", 3, "click", "disabled"], [1, "text-white", "uppercase"], [1, "absolute", "inset-0", "size-full", "object-contain", 3, "src"], [1, "absolute", "right-1", "top-full", "w-40", "rounded-lg", "border-info", "bg-white", "p-2", "shadow-md", "z-popover", "fade-out", 3, "click"], [1, "text-left", "text-zinc-600"], [1, "mx-auto", "mb-6", "mt-2", "flex", "items-center", "justify-center", "gap-1", "whitespace-nowrap", "border-underline-pink", "cursor-pointer", "text-pink-500", 3, "click"], ["name", "play-circle", 1, "size-6"], [1, "italic"]], template: function ApBfCardFeatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ApBfCardFeatureComponent_Template_div_click_0_listener() {
        return ctx.closeInfoModal();
      });
      \u0275\u0275conditionalCreate(1, ApBfCardFeatureComponent_Conditional_1_Template, 2, 1, "div", 1)(2, ApBfCardFeatureComponent_Conditional_2_Template, 1, 0, "ap-loading-overlay", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "ap-icon", 4);
      \u0275\u0275listener("click", function ApBfCardFeatureComponent_Template_ap_icon_click_4_listener($event) {
        return ctx.openInfoModal($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, ApBfCardFeatureComponent_Conditional_5_Template, 3, 1, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "moneyText");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275conditionalCreate(15, ApBfCardFeatureComponent_Conditional_15_Template, 4, 1, "button", 12);
      \u0275\u0275elementStart(16, "button", 13);
      \u0275\u0275listener("click", function ApBfCardFeatureComponent_Template_button_click_16_listener() {
        return ctx.onButtonClick();
      });
      \u0275\u0275elementStart(17, "h2", 14);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.image() ? 1 : 2);
      \u0275\u0275advance(3);
      \u0275\u0275property("name", "exclamation-circle");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showInfoModal() ? 5 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(21, _c0, ctx.showPlayDemo(), ctx.isPriceLongMobile(ctx.price()), !ctx.isPriceLongMobile(ctx.price()), ctx.isPriceLongDesktop(ctx.price()), !ctx.isPriceLongDesktop(ctx.price())));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 19, ctx.price()), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showPlayDemo() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-pink-600", !ctx.disabled())("hover:bg-pink-500", !ctx.disabled())("bg-zinc-400", ctx.disabled())("text-zinc-200", ctx.disabled())("cursor-not-allowed", ctx.disabled());
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.buttonText());
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent, MoneyTextPipe, ApLoadingOverlayComponent, PointerDownSoundDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApBfCardFeatureComponent, [{
    type: Component,
    args: [{ selector: "ap-bf-card-feature", imports: [CommonModule, ApIconComponent, MoneyTextPipe, ApLoadingOverlayComponent, PointerDownSoundDirective], template: `<div
  class="relative flex w-60 h-72 flex-col rounded-xl bg-white"
  (click)="closeInfoModal()"
>
  @if (image()) {
    <div
      class="relative mx-auto h-28 w-28 overflow-hidden"
      style="transform: translateY(-50%)"
    >
      <img
        [src]="image()"
        class="absolute inset-0 size-full object-contain"
      />
    </div>
  } @else {
    <ap-loading-overlay class="absolute" style="transform: translateY(-50%)" />
  }
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
        class="absolute right-1 top-full w-40 rounded-lg border-info bg-white p-2 shadow-md z-popover fade-out"
        (click)="$event.stopPropagation()"
      >
        <h6 class="text-left text-zinc-600">
          {{ content() }}
        </h6>
      </div>
    }
  </div>

  <!-- Content area -->

  <div
    class="absolute inset-x-0 top-[4.5rem] flex flex-1 flex-col px-4 text-center"
  >
    <div class="flex flex-1 flex-col">
      <div class="flex min-h-12 items-center justify-center text-zinc-900">
        <h2 class="line-clamp-2 leading-tight">{{ title() }}</h2>
      </div>

      <div
        class="mt-2 min-h-8 font-semibold text-zinc-800 overflow-hidden"
        [ngClass]="{
          'font-bold': showPlayDemo(),
          'text-lg': isPriceLongMobile(price()),
          'text-xl': !isPriceLongMobile(price()),
          'sm:text-xl': isPriceLongDesktop(price()),
          'sm:text-2xl': !isPriceLongDesktop(price()),
        }"
      >
        {{ price() | moneyText }}
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 bottom-0 flex flex-col">
    @if (showPlayDemo()) {
      <button
        class="mx-auto mb-6 mt-2 flex items-center justify-center gap-1 whitespace-nowrap border-underline-pink cursor-pointer text-pink-500"
        (click)="playDemo.emit(0)"
      >
        <ap-icon name="play-circle" class="size-6" />
        <h3 class="italic">
          {{ playDemoLabel() }}
        </h3>
      </button>
    }

    <button
      (click)="onButtonClick()"
      [disabled]="disabled()"
      class="w-full py-2 rounded-b-xl transition-colors cursor-pointer"
      [class.bg-pink-600]="!disabled()"
      [class.hover:bg-pink-500]="!disabled()"
      [class.bg-zinc-400]="disabled()"
      [class.text-zinc-200]="disabled()"
      [class.cursor-not-allowed]="disabled()"
    >
      <h2 class="text-white uppercase">{{ buttonText() }}</h2>
    </button>
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApBfCardFeatureComponent, { className: "ApBfCardFeatureComponent", filePath: "src/app/components/ap-bf-card-feature/ap-bf-card-feature.component.ts", lineNumber: 17 });
})();

export {
  ApBfCardFeatureComponent,
  ApHistoryPopupReplayComponent
};
//# sourceMappingURL=chunk-MMAYEOJZ.js.map
