import {
  takeUntilDestroyed
} from "./chunk-COCIR4RJ.js";
import {
  ClientSessionService
} from "./chunk-54ITVL2G.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DestroyRef,
  HostBinding,
  computed,
  inject,
  setClassMetadata,
  signal,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QGU3BS3L.js";

// src/app/components/ap-ui-version/ap-ui-version.component.ts
function ApUiVersionComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.version());
  }
}
function ApUiVersionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApUiVersionComponent_Conditional_0_Conditional_0_Template, 2, 1, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.version() ? 0 : -1);
  }
}
function ApUiVersionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function ApUiVersionComponent_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClick());
    });
    \u0275\u0275elementEnd();
  }
}
var ApUiVersionComponent = class _ApUiVersionComponent {
  destroyRef = inject(DestroyRef);
  session = inject(ClientSessionService);
  version = computed(() => this.session.version().app);
  showVersion = signal(false);
  get disablePointerEvents() {
    return this.showVersion();
  }
  clickCount = 0;
  clickTimer$ = null;
  onClick() {
    this.clickCount++;
    this.clickTimer$?.unsubscribe();
    if (this.clickCount >= 5) {
      this.clickCount = 0;
      this.showVersion.set(true);
      return;
    }
    this.clickTimer$ = timer(1500).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.clickCount = 0;
    });
  }
  static \u0275fac = function ApUiVersionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiVersionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiVersionComponent, selectors: [["ap-ui-version"]], hostVars: 2, hostBindings: function ApUiVersionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("pointer-events-none", ctx.disablePointerEvents);
    }
  }, decls: 2, vars: 1, consts: [[1, "size-6"], [1, "bg-black/50", "text-white", "p-1", "m-2", "rounded"], [1, "size-6", 3, "click"]], template: function ApUiVersionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApUiVersionComponent_Conditional_0_Template, 1, 1)(1, ApUiVersionComponent_Conditional_1_Template, 1, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showVersion() ? 0 : 1);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiVersionComponent, [{
    type: Component,
    args: [{ selector: "ap-ui-version", imports: [CommonModule], template: '@if (showVersion()) {\n  @if (version()) {\n    <div class="bg-black/50 text-white p-1 m-2 rounded">{{ version() }}</div>\n  }\n}\n@else {\n  <div class="size-6" (click)="onClick()"></div>\n}\n' }]
  }], null, { disablePointerEvents: [{
    type: HostBinding,
    args: ["class.pointer-events-none"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiVersionComponent, { className: "ApUiVersionComponent", filePath: "src/app/components/ap-ui-version/ap-ui-version.component.ts", lineNumber: 13 });
})();

export {
  ApUiVersionComponent
};
//# sourceMappingURL=chunk-6H5XA62D.js.map
