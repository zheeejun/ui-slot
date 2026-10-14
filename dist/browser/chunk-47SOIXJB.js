import {
  CommonModule,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  computed,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QGU3BS3L.js";

// src/app/components/ap-ui-tab-group/ap-ui-tab-group.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ApUiTabGroupComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function ApUiTabGroupComponent_For_2_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClick(tab_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cursor-not-allowed", ctx_r2.disabled())("cursor-pointer", !ctx_r2.disabled());
    \u0275\u0275property("disabled", ctx_r2.disabled())("ngClass", ctx_r2.getTabClasses(tab_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.labelClasses());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r2.label);
  }
}
var ApUiTabGroupComponent = class _ApUiTabGroupComponent {
  tabs = input([
    { id: "tab1", label: "Tab 1" },
    { id: "tab2", label: "Tab 2" },
    { id: "tab3", label: "Tab 3" }
  ]);
  size = input("default");
  accentColor = input("yellow");
  selectedTab = input("tab1");
  disabled = input(false);
  current = signal("tab1");
  tabChange = output();
  containerClasses = computed(() => this.size() === "small" ? "rounded-md p-0.5" : "rounded-lg p-1");
  tabClasses = computed(() => this.size() === "small" ? "py-2.5 px-2 rounded-sm text-sm" : "py-2 px-2 rounded-md");
  labelClasses = computed(() => this.size() === "small" ? "font-medium leading-5" : "font-semibold");
  activeTabClasses = computed(() => this.accentColor() === "orange" ? "bg-orange-500 text-white" : this.accentColor() === "slate" ? "bg-slate-700 text-white" : "bg-yellow-400 text-zinc-900");
  getTabClasses(tabId) {
    return `${this.tabClasses()} ${this.current() === tabId ? this.activeTabClasses() : this.disabled() ? "text-zinc-500" : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700"}`;
  }
  ngOnInit() {
    this.current.set(this.selectedTab());
  }
  onClick(value) {
    if (this.disabled()) {
      return;
    }
    this.current.set(value);
    this.tabChange.emit(value);
  }
  static \u0275fac = function ApUiTabGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiTabGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiTabGroupComponent, selectors: [["ap-ui-tab-group"]], inputs: { tabs: [1, "tabs"], size: [1, "size"], accentColor: [1, "accentColor"], selectedTab: [1, "selectedTab"], disabled: [1, "disabled"] }, outputs: { tabChange: "tabChange" }, decls: 3, vars: 1, consts: [[1, "flex", "max-w-md", "mx-auto", "bg-zinc-800", 3, "ngClass"], [1, "flex-1", "color-transition", "text-center", 3, "disabled", "cursor-not-allowed", "cursor-pointer", "ngClass"], [1, "flex-1", "color-transition", "text-center", 3, "click", "disabled", "ngClass"], [3, "ngClass"]], template: function ApUiTabGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ApUiTabGroupComponent_For_2_Template, 3, 8, "button", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClasses());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.tabs());
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiTabGroupComponent, [{
    type: Component,
    args: [{ selector: "ap-ui-tab-group", standalone: true, imports: [CommonModule], template: '<div\n  class="flex max-w-md mx-auto bg-zinc-800"\n  [ngClass]="containerClasses()"\n>\n  @for (tab of tabs(); track tab.id) {\n    <button\n      class="flex-1 color-transition text-center"\n      [disabled]="disabled()"\n      [class.cursor-not-allowed]="disabled()"\n      [class.cursor-pointer]="!disabled()"\n      [ngClass]="getTabClasses(tab.id)"\n      (click)="onClick(tab.id)"\n    >\n      <div [ngClass]="labelClasses()">{{ tab.label }}</div>\n    </button>\n  }\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiTabGroupComponent, { className: "ApUiTabGroupComponent", filePath: "src/app/components/ap-ui-tab-group/ap-ui-tab-group.component.ts", lineNumber: 19 });
})();

export {
  ApUiTabGroupComponent
};
//# sourceMappingURL=chunk-47SOIXJB.js.map
