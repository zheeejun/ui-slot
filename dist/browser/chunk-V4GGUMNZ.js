import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  CommonModule,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  ElementRef,
  HostListener,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵpureFunctionV,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-QGU3BS3L.js";

// src/ap-components-lib/ap-select/ap-select.component.ts
var _c0 = ["dropdownContainer"];
var _c1 = ["optionItem"];
var _c2 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => ({ "opacity-50 cursor-not-allowed pointer-events-none": a0, "text-zinc-800 dark:text-zinc-300 font-medium": a1, "text-zinc-400 dark:text-zinc-400": a2, "focus-within:ring-orange-400/40 focus-within:border-orange-400 dark:focus-within:ring-orange-400 dark:focus-within:border-orange-500": a3, "focus-within:ring-yellow-400/40 focus-within:border-yellow-400 dark:focus-within:ring-yellow-400 dark:focus-within:border-yellow-500": a4, "focus-within:ring-slate-400/40 focus-within:border-slate-400 dark:focus-within:ring-slate-400 dark:focus-within:border-slate-400 dark:hover:border-slate-400": a5, "h-[calc(1.5rem+2px)] px-2 py-1 text-xs rounded-md": a6, "h-[calc(2.5rem+2px)] px-3 py-2.5 text-sm rounded-lg": a7, "h-[calc(3rem+4px)] px-5 py-3 border-2 text-base rounded-lg": a8, "rounded-sm": a9, "rounded-md": a10, "rounded-lg": a11 });
var _c3 = (a0, a1, a2) => ({ " text-xs ": a0, " text-base ": a1, " text-lg": a2 });
var _c4 = (a0, a1, a2) => ({ "text-xs": a0, "text-sm": a1, "text-base": a2 });
var _c5 = (a0, a1, a2, a3, a4) => ({ "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 font-semibold": a0, "hover:bg-zinc-400 dark:hover:bg-zinc-700": a1, "px-2 py-1 text-xs": a2, "px-3 py-2.5 text-sm": a3, "px-5 py-3": a4 });
var _forTrack0 = ($index, $item) => $item.value;
function ApSelectComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c3, ctx_r0.size() === "small", ctx_r0.size() === "medium", ctx_r0.size() === "large"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label(), " ");
  }
}
function ApSelectComponent_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(content_r2);
  }
}
function ApSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ApSelectComponent_Conditional_3_For_4_Template, 2, 1, "span", 10, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c4, ctx_r0.size() === "small", ctx_r0.size() === "medium", ctx_r0.size() === "large"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.displayLabel());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.currentContent());
  }
}
function ApSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c4, ctx_r0.size() === "small", ctx_r0.size() === "medium", ctx_r0.size() === "large"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.displayLabel());
  }
}
function ApSelectComponent_Conditional_6_For_3_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(content_r5);
  }
}
function ApSelectComponent_Conditional_6_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275repeaterCreate(4, ApSelectComponent_Conditional_6_For_3_Conditional_2_For_5_Template, 2, 1, "label", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(option_r4.content);
  }
}
function ApSelectComponent_Conditional_6_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4.label);
  }
}
function ApSelectComponent_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 12, 1);
    \u0275\u0275listener("click", function ApSelectComponent_Conditional_6_For_3_Template_li_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectOption(option_r4));
    });
    \u0275\u0275conditionalCreate(2, ApSelectComponent_Conditional_6_For_3_Conditional_2_Template, 6, 1, "div", 13)(3, ApSelectComponent_Conditional_6_For_3_Conditional_3_Template, 2, 1, "label");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(2, _c5, ctx_r0.currentOption() === option_r4, ctx_r0.currentOption() !== option_r4, ctx_r0.size() === "small", ctx_r0.size() === "medium", ctx_r0.size() === "large"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(option_r4.content && option_r4.content.length > 0 ? 2 : 3);
  }
}
function ApSelectComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 8, 0);
    \u0275\u0275repeaterCreate(2, ApSelectComponent_Conditional_6_For_3_Template, 4, 8, "li", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.displayOptions());
  }
}
var ApSelectComponent = class _ApSelectComponent {
  /** 標籤文字 */
  label = input(null);
  /** 元件樣式變化 */
  variant = input("default");
  /** 預設選中的值 */
  selected = input(null);
  /** 下拉選單是否開啟 */
  isOpen = signal(false);
  /** 選中的選項 */
  currentOption = signal(null);
  /** 元件大小 */
  size = input("medium");
  /** 主色調 */
  accentColor = input("orange");
  /** 是否禁用元件 */
  disabled = input(false);
  /** 預設提示文字 */
  placeholder = input("Select an option");
  /** 是否在選項最前面加入「全部」選項 */
  showAllOption = input(false);
  /** 轉換後的選項陣列 */
  options = input([
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ]);
  /** 加上「全部」選項後，實際顯示在下拉選單的選項陣列 */
  displayOptions = computed(() => this.showAllOption() ? [{ value: "all", label: this.placeholder() }, ...this.options()] : this.options());
  /** 選項改變事件 */
  onSelect = output();
  /** 下拉選單容器的引用 */
  dropdownContainer = viewChild("dropdownContainer");
  /** 所有選項列表項的引用 */
  optionItems = viewChildren("optionItem");
  elementRef = inject(ElementRef);
  constructor() {
    effect(() => {
      const selectedKey = this.selected();
      const option = this.displayOptions().find((opt) => opt.value === selectedKey) || null;
      this.currentOption.set(option);
    });
  }
  /** 選擇選項 */
  selectOption(option) {
    if (this.disabled())
      return;
    this.onSelect.emit(option.value);
    this.isOpen.set(false);
    this.currentOption.set(option);
  }
  /** 切換下拉選單開關 */
  toggle() {
    if (this.disabled())
      return;
    this.isOpen.set(!this.isOpen());
    if (this.isOpen()) {
      setTimeout(() => this.scrollToCurrentOption());
    }
  }
  /** 顯示欄位 */
  displayLabel = computed(() => {
    if (this.currentOption()) {
      return this.currentOption().label;
    }
    return this.placeholder();
  });
  showContent = computed(() => {
    if (this.currentOption() && this.currentOption().content) {
      return true;
    }
    return false;
  });
  currentContent = computed(() => {
    if (this.currentOption() && this.currentOption().content) {
      return this.currentOption().content;
    }
    return [];
  });
  /** 點擊文件時關閉下拉選單 */
  onDocumentClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
  /** 滾動到當前選項 */
  scrollToCurrentOption() {
    if (!this.currentOption())
      return;
    const currentOptionIndex = this.displayOptions().indexOf(this.currentOption());
    if (currentOptionIndex === -1)
      return;
    const optionElements = this.optionItems();
    const targetElement = optionElements[currentOptionIndex]?.nativeElement;
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "auto",
        // 瞬間滾動
        block: "nearest",
        // 垂直方向：最近的邊緣
        inline: "nearest"
        // 水平方向：最近的邊緣
      });
    }
  }
  static \u0275fac = function ApSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApSelectComponent, selectors: [["ap-select"]], viewQuery: function ApSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.dropdownContainer, _c0, 5);
      \u0275\u0275viewQuerySignal(ctx.optionItems, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, hostBindings: function ApSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ApSelectComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { label: [1, "label"], variant: [1, "variant"], selected: [1, "selected"], size: [1, "size"], accentColor: [1, "accentColor"], disabled: [1, "disabled"], placeholder: [1, "placeholder"], showAllOption: [1, "showAllOption"], options: [1, "options"] }, outputs: { onSelect: "onSelect" }, decls: 7, vars: 21, consts: [["dropdownContainer", ""], ["optionItem", ""], [1, "block", "mb-1", "text-zinc-700", "dark:text-zinc-300", "select-none", 3, "ngClass"], [1, "relative", "w-full"], [1, "flex", "w-full", "box-border", "items-center", "bg-white", "dark:bg-zinc-900", "border", "border-zinc-300", "hover:border-zinc-400", "dark:border-zinc-500", "dark:hover:border-orange-400", "focus-within:outline-none", "focus:ring-2", "dark:focus-within:ring-1", "transition-colors", "cursor-pointer", "truncate", 3, "click", "ngClass"], [1, "flex", "min-w-0", "flex-1", "items-center", "justify-between", "gap-2", 3, "ngClass"], [1, "flex-1", "min-w-0", 3, "ngClass"], ["name", "chevron-down", 1, "shrink-0", "size-4", "transition-transform"], [1, "absolute", "mt-1", "w-full", "max-h-60", "rounded-lg", "bg-white", "border", "border-zinc-300", "dark:bg-zinc-900", "dark:border-zinc-400", "shadow-lg", "overflow-auto", "animate-fade", "animate-duration-200", "z-dropdown"], [1, "min-w-0", "truncate"], [1, "shrink-0"], [1, "cursor-pointer", "text-zinc-700", "dark:text-white", "transition-colors", "first:rounded-t-lg", "last:rounded-b-lg", 3, "ngClass"], [1, "cursor-pointer", "text-zinc-700", "dark:text-white", "transition-colors", "first:rounded-t-lg", "last:rounded-b-lg", 3, "click", "ngClass"], [1, "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "shrink-0", "items-center", "gap-1"]], template: function ApSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApSelectComponent_Conditional_0_Template, 2, 6, "div", 2);
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4);
      \u0275\u0275listener("click", function ApSelectComponent_Template_div_click_2_listener() {
        return ctx.toggle();
      });
      \u0275\u0275conditionalCreate(3, ApSelectComponent_Conditional_3_Template, 5, 6, "div", 5)(4, ApSelectComponent_Conditional_4_Template, 2, 6, "span", 6);
      \u0275\u0275element(5, "ap-icon", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ApSelectComponent_Conditional_6_Template, 4, 0, "ul", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.label() ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunctionV(8, _c2, [ctx.disabled(), ctx.currentOption(), !ctx.currentOption(), !ctx.disabled() && ctx.accentColor() === "orange", !ctx.disabled() && ctx.accentColor() === "yellow", !ctx.disabled() && ctx.accentColor() === "slate", ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large", ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large"]));
      \u0275\u0275attribute("tabindex", ctx.disabled() ? -1 : 0)("aria-disabled", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showContent() ? 3 : 4);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rotate-180", ctx.isOpen());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isOpen() ? 6 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent], styles: ["\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  border-style: solid;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n}\n/*# sourceMappingURL=ap-select.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApSelectComponent, [{
    type: Component,
    args: [{ selector: "ap-select", imports: [CommonModule, ApIconComponent], template: `@if (label()) {
  <div
    class="block mb-1 text-zinc-700 dark:text-zinc-300 select-none"
    [ngClass]="{
      ' text-xs ': size() === 'small',
      ' text-base ': size() === 'medium',
      ' text-lg': size() === 'large',
    }"
  >
    {{ label() }}
  </div>
}

<div class="relative w-full">
  <!-- \u9EDE\u64CA\u6309\u9215 -->
  <div
    [attr.tabindex]="disabled() ? -1 : 0"
    [attr.aria-disabled]="disabled()"
    class="flex w-full box-border items-center bg-white dark:bg-zinc-900 border border-zinc-300 hover:border-zinc-400 dark:border-zinc-500 dark:hover:border-orange-400 focus-within:outline-none focus:ring-2 dark:focus-within:ring-1 transition-colors cursor-pointer truncate"
    [ngClass]="{
      'opacity-50 cursor-not-allowed pointer-events-none': disabled(),
      'text-zinc-800 dark:text-zinc-300 font-medium': currentOption(),
      'text-zinc-400 dark:text-zinc-400': !currentOption(),
      'focus-within:ring-orange-400/40 focus-within:border-orange-400 dark:focus-within:ring-orange-400 dark:focus-within:border-orange-500':
        !disabled() && accentColor() === 'orange',
      'focus-within:ring-yellow-400/40 focus-within:border-yellow-400 dark:focus-within:ring-yellow-400 dark:focus-within:border-yellow-500':
        !disabled() && accentColor() === 'yellow',
      'focus-within:ring-slate-400/40 focus-within:border-slate-400 dark:focus-within:ring-slate-400 dark:focus-within:border-slate-400 dark:hover:border-slate-400':
        !disabled() && accentColor() === 'slate',
      'h-[calc(1.5rem+2px)] px-2 py-1 text-xs rounded-md': size() === 'small',
      'h-[calc(2.5rem+2px)] px-3 py-2.5 text-sm rounded-lg':
        size() === 'medium',
      'h-[calc(3rem+4px)] px-5 py-3 border-2 text-base rounded-lg':
        size() === 'large',
      'rounded-sm': size() === 'small',
      'rounded-md': size() === 'medium',
      'rounded-lg': size() === 'large',
    }"
    (click)="toggle()"
  >
    @if (showContent()) {
      <div
        class="flex min-w-0 flex-1 items-center justify-between gap-2"
        [ngClass]="{
          'text-xs': size() === 'small',
          'text-sm': size() === 'medium',
          'text-base': size() === 'large',
        }"
      >
        <span class="min-w-0 truncate">{{ displayLabel() }}</span>
        @for (content of currentContent(); track $index) {
          <span class="shrink-0">{{ content }}</span>
        }
      </div>
    } @else {
      <span
        class="flex-1 min-w-0"
        [ngClass]="{
          'text-xs': size() === 'small',
          'text-sm': size() === 'medium',
          'text-base': size() === 'large',
        }"
        >{{ displayLabel() }}</span
      >
    }
    <ap-icon
      class="shrink-0 size-4 transition-transform"
      name="chevron-down"
      [class.rotate-180]="isOpen()"
    />
  </div>

  <!-- \u4E0B\u62C9\u9078\u55AE -->
  @if (isOpen()) {
    <ul
      #dropdownContainer
      class="absolute mt-1 w-full max-h-60 rounded-lg bg-white border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-400 shadow-lg overflow-auto animate-fade animate-duration-200 z-dropdown"
    >
      @for (option of displayOptions(); track option.value) {
        <li
          #optionItem
          class="cursor-pointer text-zinc-700 dark:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
          [ngClass]="{
            'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 font-semibold':
              currentOption() === option,
            'hover:bg-zinc-400 dark:hover:bg-zinc-700':
              currentOption() !== option,
            'px-2 py-1 text-xs': size() === 'small',
            'px-3 py-2.5 text-sm': size() === 'medium',
            'px-5 py-3': size() === 'large',
          }"
          (click)="selectOption(option)"
        >
          @if (option.content && option.content.length > 0) {
            <div class="flex items-center justify-between gap-2">
              <label>{{ option.label }}</label>
              <div class="flex shrink-0 items-center gap-1">
                @for (content of option.content; track $index) {
                  <label>{{ content }}</label>
                }
              </div>
            </div>
          } @else {
            <label>{{ option.label }}</label>
          }
        </li>
      }
    </ul>
  }
</div>
`, styles: ["/* src/ap-components-lib/ap-select/ap-select.component.css */\n*,\n*::before,\n*::after {\n  border-style: solid;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n}\n/*# sourceMappingURL=ap-select.component.css.map */\n"] }]
  }], () => [], {
    /** 點擊文件時關閉下拉選單 */
    onDocumentClick: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApSelectComponent, { className: "ApSelectComponent", filePath: "src/ap-components-lib/ap-select/ap-select.component.ts", lineNumber: 12 });
})();

export {
  ApSelectComponent
};
//# sourceMappingURL=chunk-V4GGUMNZ.js.map
