import {
  CashDropService,
  EventCenterCtrlService
} from "./chunk-7XXHR6BD.js";
import {
  BottomPanelService
} from "./chunk-MQEPEO5W.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  ApButtonComponent
} from "./chunk-VX4L3GZI.js";
import {
  MoneyText
} from "./chunk-CFCPEQLG.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  timer,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/app/pages/event-cashdrop-toast/event-cashdrop-toast.component.ts
function EventCashdropToastComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.failMessage(), " ");
  }
}
function EventCashdropToastComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.passMessage(), " ");
  }
}
function EventCashdropToastComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275element(4, "img", 5);
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275conditionalCreate(6, EventCashdropToastComponent_Conditional_0_Conditional_6_Template, 2, 1, "h4", 7);
    \u0275\u0275conditionalCreate(7, EventCashdropToastComponent_Conditional_0_Conditional_7_Template, 2, 1, "h4", 7);
    \u0275\u0275elementStart(8, "label", 8);
    \u0275\u0275listener("click", function EventCashdropToastComponent_Conditional_0_Template_label_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickMoreDetail());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ap-button", 9);
    \u0275\u0275listener("click", function EventCashdropToastComponent_Conditional_0_Template_ap_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeToast());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275element(12, "div", 11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("animate-fade-right", !ctx_r1.isFadingOut())("animate-duration-500", !ctx_r1.isFadingOut())("animate-fade-out", ctx_r1.isFadingOut());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.variant() === "fail" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.variant() === "pass" ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.moreDetailLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("accentColor", "zinc")("icon", "x-mark")("size", "small")("variant", "content-rounded");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("animation-duration", "5s");
  }
}
var EventCashdropToastComponent = class _EventCashdropToastComponent {
  isVisible = signal(true);
  isFadingOut = signal(false);
  variant = input("fail");
  appI18n = inject(AppI18nService);
  cashDrop = inject(CashDropService);
  eventCenter = inject(EventCenterCtrlService);
  bottomPanel = inject(BottomPanelService);
  failLabel = this.appI18n.computed("cashdrop_difference_info", "Bet {0}+ to trigger Cash Drop!");
  failMessage = computed(() => {
    const minBet = this.cashDrop.focusCashDrop()?.minBet ?? 0;
    return this.failLabel().replace("{0}", MoneyText.format(minBet, { addSpace: false }));
  });
  passMessage = this.appI18n.computed("cashdrop_D1_5", "Stand a chance to win Daily Cash Drop!");
  moreDetailLabel = this.appI18n.computed("cashdrop_to_detail_btn", "Click for more details.");
  autoCloseSub = null;
  fadeOutSub = null;
  ngOnInit() {
    this.autoCloseSub = timer(5e3).subscribe(() => this.closeToast());
  }
  ngOnDestroy() {
    this.autoCloseSub?.unsubscribe();
    this.autoCloseSub = null;
    this.fadeOutSub?.unsubscribe();
    this.fadeOutSub = null;
  }
  closeToast() {
    this.autoCloseSub?.unsubscribe();
    this.autoCloseSub = null;
    this.isFadingOut.set(true);
    this.fadeOutSub = timer(500).subscribe(() => {
      this.isVisible.set(false);
      this.isFadingOut.set(false);
    });
  }
  clickMoreDetail() {
    if (this.bottomPanel.isBusy()) {
      return;
    }
    this.eventCenter.open("cash-drop");
    this.isVisible.set(false);
  }
  static \u0275fac = function EventCashdropToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventCashdropToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCashdropToastComponent, selectors: [["event-cashdrop-toast"]], inputs: { variant: [1, "variant"] }, decls: 1, vars: 1, consts: [[1, "relative", "select-none", 3, "animate-fade-right", "animate-duration-500", "animate-fade-out"], [1, "relative", "select-none"], [1, "relative", "flex", "p-4", "items-center", "w-full", "bg-zinc-900", "rounded-xl", "border-banner"], [1, "flex", "flex-col", "justify-center", "gap-2"], [1, "flex", "gap-4", "w-[24rem]"], ["src", "assets/images/icons/img-ap-coin.png", "alt", "AP Coin", 1, "coin-icon"], [1, "flex", "flex-col", "gap-1"], [1, "whitespace-pre-line"], [1, "text-zinc-500", "underline", "cursor-pointer", 3, "click"], [3, "click", "accentColor", "icon", "size", "variant"], [1, "relative", "mt-1.5", "h-1.5", "rounded-full", "bg-zinc-800", "outline-1", "outline-offset-1", "outline-zinc-600", "overflow-hidden"], [1, "absolute", "progress-bar", "left-0", "top-0", "h-full", "rounded-full", "animate-countdown"]], template: function EventCashdropToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, EventCashdropToastComponent_Conditional_0_Template, 13, 15, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isVisible() ? 0 : -1);
    }
  }, dependencies: [CommonModule, ApButtonComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.animate-fade-out[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeOut 0.5s ease-out forwards;\n}\n.animate-countdown[_ngcontent-%COMP%] {\n  width: 100%;\n  animation: _ngcontent-%COMP%_countdown linear forwards;\n}\n@keyframes _ngcontent-%COMP%_countdown {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n/*# sourceMappingURL=event-cashdrop-toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCashdropToastComponent, [{
    type: Component,
    args: [{ selector: "event-cashdrop-toast", standalone: true, imports: [CommonModule, ApButtonComponent], template: `@if (isVisible()) {
  <div
    class="relative select-none"
    [class.animate-fade-right]="!isFadingOut()"
    [class.animate-duration-500]="!isFadingOut()"
    [class.animate-fade-out]="isFadingOut()"
  >
    <div
      class="relative flex p-4 items-center w-full bg-zinc-900 rounded-xl border-banner"
    >
      <div class="flex flex-col justify-center gap-2">
        <div class="flex gap-4 w-[24rem]">
          <img
            src="assets/images/icons/img-ap-coin.png"
            alt="AP Coin"
            class="coin-icon"
          />
          <!-- Coin Text -->
          <div class="flex flex-col gap-1">
            @if (variant() === "fail") {
              <h4 class="whitespace-pre-line">
                {{ failMessage() }}
              </h4>
            }
            @if (variant() === "pass") {
              <h4 class="whitespace-pre-line">
                {{ passMessage() }}
              </h4>
            }
            <label
              class="text-zinc-500 underline cursor-pointer"
              (click)="clickMoreDetail()"
            >
              {{ moreDetailLabel() }}
            </label>
          </div>
          <ap-button
            [accentColor]="'zinc'"
            [icon]="'x-mark'"
            [size]="'small'"
            [variant]="'content-rounded'"
            (click)="closeToast()"
          />
        </div>
        <!-- Progress bar -->
        <div
          class="relative mt-1.5 h-1.5 rounded-full bg-zinc-800 outline-1 outline-offset-1 outline-zinc-600 overflow-hidden"
        >
          <!-- Progress fill -->
          <div
            class="absolute progress-bar left-0 top-0 h-full rounded-full animate-countdown"
            [style.animation-duration]="'5s'"
          ></div>
        </div>
      </div>
    </div>
  </div>
}
`, styles: ["/* src/app/pages/event-cashdrop-toast/event-cashdrop-toast.component.css */\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.animate-fade-out {\n  animation: fadeOut 0.5s ease-out forwards;\n}\n.animate-countdown {\n  width: 100%;\n  animation: countdown linear forwards;\n}\n@keyframes countdown {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n/*# sourceMappingURL=event-cashdrop-toast.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCashdropToastComponent, { className: "EventCashdropToastComponent", filePath: "src/app/pages/event-cashdrop-toast/event-cashdrop-toast.component.ts", lineNumber: 17 });
})();

export {
  EventCashdropToastComponent
};
//# sourceMappingURL=chunk-CFQ33M2E.js.map
