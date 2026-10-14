import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  CommonModule,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DestroyRef,
  HostBinding,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpureFunction7,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QGU3BS3L.js";

// src/ap-components-lib/ap-message/ap-message.component.ts
var _c0 = (a0, a1, a2, a3, a4, a5, a6) => ({ "message-border-success": a0, "message-border-info": a1, "message-border-warn": a2, "message-border-error": a3, "message-border-secondary": a4, "message-border-contrast": a5, "message-border-origin": a6 });
var _c1 = (a0, a1, a2, a3, a4, a5, a6) => ({ "bg-green-500": a0, "bg-blue-500": a1, "bg-amber-400": a2, "bg-red-500": a3, "bg-zinc-100": a4, "bg-zinc-950": a5, "bg-slate-600": a6 });
function ApMessageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275element(4, "ap-icon", 5);
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", function ApMessageComponent_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275element(8, "ap-icon", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("message-container-closing", ctx_r1.isClosing());
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction7(7, _c0, ctx_r1.variant() === "success", ctx_r1.variant() === "info", ctx_r1.variant() === "warn", ctx_r1.variant() === "error", ctx_r1.variant() === "secondary", ctx_r1.variant() === "contrast", ctx_r1.variant() === "origin"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.containerClasses);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.message());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction7(15, _c1, ctx_r1.variant() === "success", ctx_r1.variant() === "info", ctx_r1.variant() === "warn", ctx_r1.variant() === "error", ctx_r1.variant() === "secondary", ctx_r1.variant() === "contrast", ctx_r1.variant() === "origin"));
  }
}
var ApMessageComponent = class _ApMessageComponent {
  static COUNTDOWN_MS = 3e3;
  static EXIT_MS = 250;
  destroyRef = inject(DestroyRef);
  countdownTimeoutId = null;
  exitTimeoutId = null;
  message = input("");
  variant = input("secondary");
  autoDismiss = input(true);
  closed = output();
  isRendered = signal(true);
  isClosing = signal(false);
  get hostClasses() {
    return "block w-full";
  }
  constructor() {
    effect(() => {
      this.message();
      this.restartTimer();
    });
    this.destroyRef.onDestroy(() => {
      this.clearTimers();
    });
  }
  get containerClasses() {
    const base = "w-full px-4 py-3 font-medium leading-6";
    const variants = {
      success: "bg-green-950/80 text-green-500",
      info: "bg-blue-950/80 text-blue-500",
      warn: " bg-yellow-950/40 text-amber-400",
      error: " bg-red-950/50 text-red-500",
      secondary: " bg-zinc-800 text-zinc-100",
      contrast: " bg-zinc-50 text-zinc-950",
      origin: " bg-slate-950/50 text-slate-300"
    };
    return `${base} ${variants[this.variant()]}`;
  }
  dismiss() {
    if (this.isClosing() || !this.isRendered()) {
      return;
    }
    this.clearTimers();
    this.isClosing.set(true);
    this.exitTimeoutId = setTimeout(() => {
      this.isRendered.set(false);
      this.closed.emit();
    }, _ApMessageComponent.EXIT_MS);
  }
  restartTimer() {
    this.clearTimers();
    this.isRendered.set(true);
    this.isClosing.set(false);
    if (!this.autoDismiss()) {
      return;
    }
    this.countdownTimeoutId = setTimeout(() => {
      this.dismiss();
    }, _ApMessageComponent.COUNTDOWN_MS);
  }
  clearTimers() {
    if (this.countdownTimeoutId !== null) {
      clearTimeout(this.countdownTimeoutId);
      this.countdownTimeoutId = null;
    }
    if (this.exitTimeoutId !== null) {
      clearTimeout(this.exitTimeoutId);
      this.exitTimeoutId = null;
    }
  }
  static \u0275fac = function ApMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApMessageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApMessageComponent, selectors: [["ap-message"]], hostVars: 2, hostBindings: function ApMessageComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.hostClasses);
    }
  }, inputs: { message: [1, "message"], variant: [1, "variant"], autoDismiss: [1, "autoDismiss"] }, outputs: { closed: "closed" }, decls: 1, vars: 1, consts: [[1, "message-container", "message-border", "flex", "flex-col", "rounded", "shadow-lg", "bg-zinc-900", 3, "message-container-closing", "ngClass"], [1, "message-container", "message-border", "flex", "flex-col", "rounded", "shadow-lg", "bg-zinc-900", 3, "ngClass"], [1, "flex"], [1, "flex", "w-full", "items-center", "justify-between", "gap-4"], [1, "flex", "min-w-0", "items-center", "gap-4"], ["name", "replay", 1, "info-icon", "shrink-0"], [1, "min-w-0", "flex-1", "text-left"], ["type", "button", 1, "cursor-pointer", "shrink-0", 3, "click"], ["name", "x-mark", 1, "info-icon"], [1, "message-timer-bar", "h-1", "origin-left", 3, "ngClass"]], template: function ApMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApMessageComponent_Conditional_0_Template, 10, 23, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isRendered() ? 0 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.message-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_message-enter 250ms ease-out;\n}\n.message-border[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-style: solid;\n}\n.message-border-success[_ngcontent-%COMP%] {\n  border-color: #0d542b;\n}\n.message-border-info[_ngcontent-%COMP%] {\n  border-color: #1c398e;\n}\n.message-border-warn[_ngcontent-%COMP%] {\n  border-color: #733e0a;\n}\n.message-border-error[_ngcontent-%COMP%] {\n  border-color: #82181a;\n}\n.message-border-secondary[_ngcontent-%COMP%] {\n  border-color: #3f3f46;\n}\n.message-border-contrast[_ngcontent-%COMP%] {\n  border-color: #09090b;\n}\n.message-border-origin[_ngcontent-%COMP%] {\n  border-color: #1d293d;\n}\n.message-container-closing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_message-exit 250ms ease-in forwards;\n}\n.message-timer-bar[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_message-timer-countdown 3s linear forwards;\n}\n@keyframes _ngcontent-%COMP%_message-enter {\n  from {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_message-exit {\n  from {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_message-timer-countdown {\n  from {\n    transform: scaleX(1);\n  }\n  to {\n    transform: scaleX(0);\n  }\n}\n/*# sourceMappingURL=ap-message.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApMessageComponent, [{
    type: Component,
    args: [{ selector: "ap-message", imports: [CommonModule, ApIconComponent], template: `@if (isRendered()) {
  <div
    class="message-container message-border flex flex-col rounded shadow-lg bg-zinc-900"
    [class.message-container-closing]="isClosing()"
    [ngClass]="{
      'message-border-success': variant() === 'success',
      'message-border-info': variant() === 'info',
      'message-border-warn': variant() === 'warn',
      'message-border-error': variant() === 'error',
      'message-border-secondary': variant() === 'secondary',
      'message-border-contrast': variant() === 'contrast',
      'message-border-origin': variant() === 'origin',
    }"
  >
    <div class="flex">
      <div
        [class]="containerClasses"
        class="flex w-full items-center justify-between gap-4"
      >
        <div class="flex min-w-0 items-center gap-4">
          <ap-icon class="info-icon shrink-0" name="replay" />
          <div class="min-w-0 flex-1 text-left">{{ message() }}</div>
        </div>
        <button class="cursor-pointer shrink-0" type="button" (click)="dismiss()">
          <ap-icon class="info-icon" name="x-mark" />
        </button>
      </div>
    </div>
    <div
      class="message-timer-bar h-1 origin-left"
      [ngClass]="{
        'bg-green-500': variant() === 'success',
        'bg-blue-500': variant() === 'info',
        'bg-amber-400': variant() === 'warn',
        'bg-red-500': variant() === 'error',
        'bg-zinc-100': variant() === 'secondary',
        'bg-zinc-950': variant() === 'contrast',
        'bg-slate-600': variant() === 'origin',
      }"
    ></div>
  </div>
}
`, styles: ["/* src/ap-components-lib/ap-message/ap-message.component.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.message-container {\n  animation: message-enter 250ms ease-out;\n}\n.message-border {\n  border-width: 2px;\n  border-style: solid;\n}\n.message-border-success {\n  border-color: #0d542b;\n}\n.message-border-info {\n  border-color: #1c398e;\n}\n.message-border-warn {\n  border-color: #733e0a;\n}\n.message-border-error {\n  border-color: #82181a;\n}\n.message-border-secondary {\n  border-color: #3f3f46;\n}\n.message-border-contrast {\n  border-color: #09090b;\n}\n.message-border-origin {\n  border-color: #1d293d;\n}\n.message-container-closing {\n  animation: message-exit 250ms ease-in forwards;\n}\n.message-timer-bar {\n  animation: message-timer-countdown 3s linear forwards;\n}\n@keyframes message-enter {\n  from {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes message-exit {\n  from {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n@keyframes message-timer-countdown {\n  from {\n    transform: scaleX(1);\n  }\n  to {\n    transform: scaleX(0);\n  }\n}\n/*# sourceMappingURL=ap-message.component.css.map */\n"] }]
  }], () => [], { hostClasses: [{
    type: HostBinding,
    args: ["class"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApMessageComponent, { className: "ApMessageComponent", filePath: "src/ap-components-lib/ap-message/ap-message.component.ts", lineNumber: 12 });
})();

export {
  ApMessageComponent
};
//# sourceMappingURL=chunk-JXCUC5GW.js.map
