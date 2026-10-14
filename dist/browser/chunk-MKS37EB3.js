import {
  CommonModule,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  computed,
  input,
  linkedSignal,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵpureFunctionV,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/ap-components-lib/ap-toggle-switch/ap-toggle-switch.component.ts
var _c0 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({ "w-14 h-4.5": a0, "w-16 h-6": a1, "w-20 h-8": a2, "bg-orange-400": a3, "bg-yellow-400": a4, "bg-purple-400": a5, "bg-slate-500": a6, "bg-zinc-500": a7, "cursor-pointer": a8, "opacity-50 cursor-not-allowed": a9 });
var _c1 = (a0, a1, a2) => ({ "w-4.5 h-3": a0, "w-6 h-4": a1, "w-8 h-6": a2 });
var _c2 = (a0, a1, a2) => ({ "text-xs": a0, "text-sm": a1, "text-base": a2 });
function ApToggleSwitchComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label(), " ");
  }
}
var ApToggleSwitchComponent = class _ApToggleSwitchComponent {
  /** 切換開關的標籤文字，預設為 null，不顯示標籤 */
  label = input(null);
  /** 切換開關的大小，預設為 medium */
  size = input("medium");
  /** 主色調，預設為橘色 */
  accentColor = input(void 0);
  /** 是否停用切換開關，預設為 false，true 時仍會顯示，只是無法用點擊切換，可以用 input checked 切換 */
  disabled = input(false);
  /** 切換是依照內容調整符合大小或是依照父容器調整大小 */
  fitMode = input("content");
  checked = input(true);
  checkedChange = output();
  /** 內部狀態：checked input 變動時會重設，點擊時可本地切換 */
  isChecked = linkedSignal(() => this.checked());
  // ======= Host / Template 專用條件 =======
  hasLabel = computed(() => this.label() !== null);
  isContentMode = computed(() => this.fitMode() === "content");
  isContainerMode = computed(() => this.fitMode() === "container");
  labelNotContentMode = computed(() => this.hasLabel() && !this.isContentMode());
  thumbTranslateX = computed(() => {
    if (!this.isChecked()) {
      return "0.25rem";
    }
    switch (this.size()) {
      case "small":
        return "2rem";
      case "large":
        return "2.75rem";
      default:
        return "2.25rem";
    }
  });
  toggle() {
    this.isChecked.update((checked) => !checked);
    this.checkedChange.emit(this.isChecked());
  }
  static \u0275fac = function ApToggleSwitchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApToggleSwitchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApToggleSwitchComponent, selectors: [["ap-toggle-switch"]], hostVars: 14, hostBindings: function ApToggleSwitchComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("flex", ctx.labelNotContentMode())("items-center", ctx.labelNotContentMode())("gap-2", ctx.hasLabel())("inline-flex", ctx.isContentMode())("justify-between", ctx.isContainerMode())("block", ctx.isContainerMode())("w-full", ctx.isContainerMode());
    }
  }, inputs: { label: [1, "label"], size: [1, "size"], accentColor: [1, "accentColor"], disabled: [1, "disabled"], fitMode: [1, "fitMode"], checked: [1, "checked"] }, outputs: { checkedChange: "checkedChange" }, decls: 8, vars: 28, consts: [[1, "text-zinc-700", "dark:text-zinc-300", "font-medium", "select-none"], [1, "relative", "rounded-full", "flex", "items-center", "transition-colors", "duration-300", "select-none", 3, "click", "ngClass", "disabled"], [1, "bg-white", "rounded-full", "transition-transform", "duration-300", "drop-shadow-md", 3, "ngClass"], [1, "absolute", "inset-0", "flex", "font-medium", "items-center", "justify-between", "px-2", "tracking-wide", 3, "ngClass"], [1, "text-zinc-900", 3, "ngClass"], [1, "text-white", 3, "ngClass"]], template: function ApToggleSwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApToggleSwitchComponent_Conditional_0_Template, 2, 1, "div", 0);
      \u0275\u0275elementStart(1, "button", 1);
      \u0275\u0275listener("click", function ApToggleSwitchComponent_Template_button_click_1_listener() {
        return ctx.toggle();
      });
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "ON");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7, "OFF");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.label() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunctionV(9, _c0, [ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large", ctx.isChecked() && (!ctx.accentColor() || ctx.accentColor() === "orange"), ctx.isChecked() && ctx.accentColor() === "yellow", ctx.isChecked() && ctx.accentColor() === "purple", ctx.isChecked() && ctx.accentColor() === "slate", !ctx.isChecked(), !ctx.disabled(), ctx.disabled()]))("disabled", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275styleProp("transform", "translateX(" + ctx.thumbTranslateX() + ")");
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(20, _c1, ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(24, _c2, ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isChecked() ? "opacity-100" : "opacity-0");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.isChecked() ? "opacity-0" : "opacity-100");
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApToggleSwitchComponent, [{
    type: Component,
    args: [{ selector: "ap-toggle-switch", imports: [CommonModule], host: {
      "[class.flex]": "labelNotContentMode()",
      "[class.items-center]": "labelNotContentMode()",
      "[class.gap-2]": "hasLabel()",
      "[class.inline-flex]": "isContentMode()",
      "[class.justify-between]": "isContainerMode()",
      "[class.block]": "isContainerMode()",
      "[class.w-full]": "isContainerMode()"
    }, template: `@if (label()) {
  <div class="text-zinc-700 dark:text-zinc-300 font-medium select-none">
    {{ label() }}
  </div>
}

<button
  (click)="toggle()"
  class="relative rounded-full flex items-center transition-colors duration-300 select-none"
  [ngClass]="{
    'w-14 h-4.5': size() === 'small',
    'w-16 h-6': size() === 'medium',
    'w-20 h-8': size() === 'large',
    'bg-orange-400':
      isChecked() && (!accentColor() || accentColor() === 'orange'),
    'bg-yellow-400': isChecked() && accentColor() === 'yellow',
    'bg-purple-400': isChecked() && accentColor() === 'purple',
    'bg-slate-500': isChecked() && accentColor() === 'slate',
    'bg-zinc-500': !isChecked(),
    'cursor-pointer': !disabled(),
    'opacity-50 cursor-not-allowed': disabled(),
  }"
  [disabled]="disabled()"
>
  <div
    class="bg-white rounded-full transition-transform duration-300 drop-shadow-md"
    [ngClass]="{
      'w-4.5 h-3': size() === 'small',
      'w-6 h-4': size() === 'medium',
      'w-8 h-6': size() === 'large',
    }"
    [style.transform]="'translateX(' + thumbTranslateX() + ')'"
  ></div>
  <div
    class="absolute inset-0 flex font-medium items-center justify-between px-2 tracking-wide "
    [ngClass]="{
      'text-xs': size() === 'small',
      'text-sm': size() === 'medium',
      'text-base': size() === 'large',
    }"
  >
    <div class="text-zinc-900" [ngClass]="isChecked() ? 'opacity-100' : 'opacity-0'">ON</div>
    <div class="text-white" [ngClass]="isChecked() ? 'opacity-0' : 'opacity-100'">OFF</div>
  </div>
</button>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApToggleSwitchComponent, { className: "ApToggleSwitchComponent", filePath: "src/ap-components-lib/ap-toggle-switch/ap-toggle-switch.component.ts", lineNumber: 19 });
})();

export {
  ApToggleSwitchComponent
};
//# sourceMappingURL=chunk-MKS37EB3.js.map
