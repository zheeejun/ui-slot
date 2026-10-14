import {
  MoneyText
} from "./chunk-CFCPEQLG.js";
import {
  Component,
  Pipe,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QGU3BS3L.js";

// src/app/shared/pipe/money-text.pipe.ts
var MoneyTextPipe = class _MoneyTextPipe {
  transform(value, options) {
    if (value === null || value === void 0) {
      return "";
    }
    return MoneyText.format(value, options);
  }
  static \u0275fac = function MoneyTextPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoneyTextPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "moneyText", type: _MoneyTextPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoneyTextPipe, [{
    type: Pipe,
    args: [{
      name: "moneyText",
      standalone: true
    }]
  }], null, null);
})();

// src/ap-components-lib/ap-toast/ap-toast.component.ts
function ApToastComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.bubbleClasses);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.message());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.arrowClasses);
  }
}
var ApToastComponent = class _ApToastComponent {
  message = input("");
  accentColor = input("zinc");
  duration = input(1200);
  autoShow = input(false);
  autoDismiss = input(true);
  visible = signal(false);
  _timer = null;
  ngOnInit() {
    if (this.autoShow()) {
      this.show();
    }
  }
  show() {
    this.visible.set(true);
    this._clearTimer();
    if (this.autoDismiss() && this.duration() > 0) {
      this._timer = setTimeout(() => {
        this.visible.set(false);
      }, this.duration());
    }
  }
  hide() {
    this.visible.set(false);
    this._clearTimer();
  }
  get bubbleClasses() {
    const base = "inline-flex items-center border px-2 py-1 rounded-md font-medium text-white shadow-lg whitespace-nowrap";
    const variants = {
      zinc: "border-zinc-600 bg-zinc-700",
      green: "border-green-500 bg-green-600",
      red: "border-red-500 bg-red-600",
      orange: "border-orange-400 bg-orange-500",
      sky: "border-sky-500 bg-sky-600",
      slate: "border-slate-600 bg-slate-700"
    };
    return `${base} ${variants[this.accentColor()]}`;
  }
  get arrowClasses() {
    const base = "-mt-px w-0 h-0 border-solid border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent";
    const variants = {
      zinc: "border-t-zinc-700 drop-shadow-[0_1px_0_#52525B]",
      green: "border-t-green-600 drop-shadow-[0_1px_0_#05DF72]",
      red: "border-t-red-600 drop-shadow-[0_1px_0_#FF6467]",
      orange: "border-t-orange-500 drop-shadow-[0_1px_0_#FF8904]",
      sky: "border-t-sky-600 drop-shadow-[0_1px_0_#00A6F4]",
      slate: "border-t-slate-700 drop-shadow-[0_1px_0_#45556C]"
    };
    return `${base} ${variants[this.accentColor()]}`;
  }
  _clearTimer() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }
  ngOnDestroy() {
    this._clearTimer();
  }
  static \u0275fac = function ApToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApToastComponent, selectors: [["ap-toast"]], inputs: { message: [1, "message"], accentColor: [1, "accentColor"], duration: [1, "duration"], autoShow: [1, "autoShow"], autoDismiss: [1, "autoDismiss"] }, decls: 1, vars: 1, consts: [[1, "toast-wrapper"]], template: function ApToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApToastComponent_Conditional_0_Template, 5, 5, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible() ? 0 : -1);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.toast-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  animation: _ngcontent-%COMP%_toast-fade-in 0.15s ease-out;\n}\n@keyframes _ngcontent-%COMP%_toast-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=ap-toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApToastComponent, [{
    type: Component,
    args: [{ selector: "ap-toast", template: '@if (visible()) {\n  <div class="toast-wrapper">\n    <div [class]="bubbleClasses">\n      <h5>{{ message() }}</h5>\n    </div>\n    <div [class]="arrowClasses"></div>\n  </div>\n}\n', styles: ["/* src/ap-components-lib/ap-toast/ap-toast.component.css */\n:host {\n  display: inline-block;\n}\n.toast-wrapper {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  animation: toast-fade-in 0.15s ease-out;\n}\n@keyframes toast-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=ap-toast.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApToastComponent, { className: "ApToastComponent", filePath: "src/ap-components-lib/ap-toast/ap-toast.component.ts", lineNumber: 9 });
})();

export {
  MoneyTextPipe,
  ApToastComponent
};
//# sourceMappingURL=chunk-U7TK2FIU.js.map
