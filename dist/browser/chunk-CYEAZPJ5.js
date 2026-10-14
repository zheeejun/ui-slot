import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  CommonModule,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  computed,
  input,
  model,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction8,
  ɵɵpureFunctionV,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/ap-components-lib/ap-input-box/ap-input-box.ts
var _c0 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => ({ "h-[calc(1.5rem+2px)] px-2 py-1 text-xs rounded-md": a0, "h-[calc(2.5rem+2px)] px-3 py-2.5 text-sm rounded-lg": a1, "h-[calc(3rem+4px)] px-5 py-3 text-base ap-input-border-lg rounded-lg": a2, "rounded-sm": a3, "rounded-md": a4, "rounded-lg": a5, "opacity-50 cursor-not-allowed pointer-events-none": a6, "ap-input-accent-orange ap-input-ring-orange": a7, "ap-input-accent-yellow ap-input-ring-yellow": a8, "ap-input-accent-slate ap-input-ring-slate": a9, "ap-input-accent-slate-static": a10, "ap-input-border-error ap-input-ring-error": a11, "ap-input-border-success ap-input-ring-success": a12 });
var _c1 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "pr-8": a0, "pr-14": a1, "pr-10": a2, "cursor-not-allowed": a3, "appearance-none": a4, "text-xs": a5, "text-sm": a6, "text-base": a7 });
var _c2 = (a0, a1, a2) => ({ " text-xs ": a0, " text-base ": a1, " text-lg": a2 });
var _c3 = (a0, a1) => ({ "right-10": a0, "right-4": a1 });
var _c4 = (a0, a1, a2) => ({ "hover:text-orange-400": a0, "hover:text-yellow-400": a1, "hover:text-slate-200": a2 });
var _c5 = () => ({ "right-3": true });
function ApInputBox_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c2, ctx_r0.size() === "small", ctx_r0.size() === "medium", ctx_r0.size() === "large"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label(), " ");
  }
}
function ApInputBox_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275element(1, "ap-icon", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r0.icon());
  }
}
function ApInputBox_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.prefix(), " ");
  }
}
function ApInputBox_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 10);
    \u0275\u0275listener("click", function ApInputBox_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.increment());
    });
    \u0275\u0275element(2, "ap-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function ApInputBox_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.decrement());
    });
    \u0275\u0275element(4, "ap-icon", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c3, !!ctx_r0.currentCurrencyImage() || !!ctx_r0.suffix() || !!ctx_r0.infinity(), !ctx_r0.currentCurrencyImage() && !ctx_r0.suffix() && !ctx_r0.infinity()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c4, ctx_r0.accentColor() === "orange", ctx_r0.accentColor() === "yellow", ctx_r0.accentColor() === "slate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(10, _c4, ctx_r0.accentColor() === "orange", ctx_r0.accentColor() === "yellow", ctx_r0.accentColor() === "slate"));
  }
}
function ApInputBox_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.currentCurrencyImage(), \u0275\u0275sanitizeUrl)("ngClass", \u0275\u0275pureFunction0(2, _c5));
  }
}
function ApInputBox_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("name", "infinite")("ngClass", \u0275\u0275pureFunction0(2, _c5));
  }
}
function ApInputBox_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(2, _c5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.suffix(), " ");
  }
}
var ApInputBox = class _ApInputBox {
  static DEFAULT_CURRENCY_IMAGE = "assets/images/currency/img_coin_DEMO.svg";
  label = input(null);
  type = input("text");
  size = input("medium");
  accentColor = input("orange");
  icon = input(null);
  placeholder = input(null);
  value = model("");
  error = input(false);
  success = input(false);
  disabled = input(false);
  required = input(true);
  max = input(null);
  maxLength = input(null);
  /** 輸入框限制只能輸入英文及數字 */
  allowedCharacterPattern = input(null);
  min = input(null);
  prefix = input(null);
  suffix = input(null);
  currencyImage = input(null);
  infinity = input(null);
  step = input(null);
  allowNegative = input(false);
  blur = output();
  focus = output();
  onInput = output();
  increase = output();
  decrease = output();
  nativeType = computed(() => this.type() === "number" ? "text" : this.type());
  nativeInputMode = computed(() => {
    if (this.type() !== "number")
      return null;
    if (this.isWholeNumberInput())
      return "numeric";
    return this.allowNegative() ? "text" : "decimal";
  });
  currentCurrencyImage = computed(() => {
    const currencyImage = this.currencyImage();
    if (currencyImage === true)
      return _ApInputBox.DEFAULT_CURRENCY_IMAGE;
    if (!currencyImage)
      return null;
    return currencyImage;
  });
  effectiveStep = computed(() => this.getEffectiveStep());
  ngOnInit() {
  }
  getDecimalPlacesFromText(value) {
    if (!value || !value.includes(".")) {
      return null;
    }
    return value.split(".")[1]?.length ?? 0;
  }
  getDecimalPlaces() {
    const stepDecimalPlaces = this.getDecimalPlacesFromText(this.step()?.toString() ?? null);
    if (stepDecimalPlaces !== null) {
      return stepDecimalPlaces;
    }
    const valueDecimalPlaces = this.getDecimalPlacesFromText(this.value());
    if (valueDecimalPlaces !== null) {
      return valueDecimalPlaces;
    }
    const placeholderDecimalPlaces = this.getDecimalPlacesFromText(this.placeholder());
    if (placeholderDecimalPlaces !== null) {
      return placeholderDecimalPlaces;
    }
    return 0;
  }
  getEffectiveStep() {
    if (this.step()) {
      return this.step()?.toString() ?? "1";
    }
    const decimalPlaces = this.getDecimalPlaces();
    if (decimalPlaces > 0) {
      return (1 / 10 ** decimalPlaces).toFixed(decimalPlaces);
    }
    return "1";
  }
  formatNumericValue(value) {
    return value.toFixed(this.getDecimalPlaces());
  }
  isWholeNumberInput() {
    return this.type() === "number" && this.getDecimalPlaces() === 0;
  }
  /* 輸入負值 */
  sanitizeNumericInput(value) {
    if (this.type() !== "number")
      return value;
    let sanitized = value.replace(this.isWholeNumberInput() ? this.allowNegative() ? /[^0-9\-]/g : /[^0-9]/g : this.allowNegative() ? /[^0-9.\-]/g : /[^0-9.]/g, "");
    const isNegative = sanitized.startsWith("-");
    sanitized = sanitized.replace(/-/g, "");
    if (isNegative)
      sanitized = "-" + sanitized;
    const dotIndex = sanitized.indexOf(".");
    if (dotIndex !== -1) {
      const decimalPlaces = this.getDecimalPlaces();
      sanitized = sanitized.slice(0, dotIndex + 1) + sanitized.slice(dotIndex + 1).replace(/\./g, "").slice(0, decimalPlaces);
    }
    return sanitized;
  }
  /* 是否僅可輸入數字與英文  */
  sanitizeAllowedCharacters(value) {
    const pattern = this.allowedCharacterPattern();
    if (!pattern)
      return value;
    return Array.from(value).filter((character) => {
      pattern.lastIndex = 0;
      return pattern.test(character);
    }).join("");
  }
  clampToRange(value) {
    if (this.type() !== "number")
      return value;
    const parsed = parseFloat(value);
    if (Number.isNaN(parsed))
      return value;
    const max = this.max() !== null ? parseFloat(this.max().toString()) : Infinity;
    const min = this.min() !== null ? parseFloat(this.min().toString()) : -Infinity;
    if (parsed > max)
      return this.formatNumericValue(max);
    if (parsed < min)
      return this.formatNumericValue(min);
    return value;
  }
  onInputChange(event) {
    if (event.isComposing)
      return;
    const target = event.target;
    const sanitizedValue = this.sanitizeAllowedCharacters(this.sanitizeNumericInput(target.value));
    const clampedValue = this.clampToRange(sanitizedValue);
    if (clampedValue !== target.value) {
      target.value = clampedValue;
    }
    this.value.set(clampedValue);
    this.onInput.emit(clampedValue);
  }
  onEnterKey(event) {
    if (this.type() !== "number")
      return;
    const target = event.target;
    const parsed = parseFloat(this.value());
    if (Number.isNaN(parsed))
      return;
    const formattedValue = this.clampToRange(this.formatNumericValue(parsed));
    target.value = formattedValue;
    this.value.set(formattedValue);
    this.onInput.emit(formattedValue);
  }
  increment() {
    if (this.type() !== "number")
      return;
    const currentValue = parseFloat(this.value()) || 0;
    const step = parseFloat(this.effectiveStep());
    const max = this.max() !== null ? parseFloat(this.max().toString()) : Infinity;
    const newValue = Math.min(currentValue + step, max);
    const formattedValue = this.formatNumericValue(newValue);
    this.value.set(formattedValue);
    this.increase.emit(formattedValue);
    this.onInput.emit(formattedValue);
  }
  decrement() {
    if (this.type() !== "number")
      return;
    const currentValue = parseFloat(this.value()) || 0;
    const step = parseFloat(this.effectiveStep());
    const min = this.min() !== null ? parseFloat(this.min().toString()) : -Infinity;
    const newValue = Math.max(currentValue - step, min);
    const formattedValue = this.formatNumericValue(newValue);
    this.value.set(formattedValue);
    this.decrease.emit(formattedValue);
    this.onInput.emit(formattedValue);
  }
  static \u0275fac = function ApInputBox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApInputBox)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApInputBox, selectors: [["ap-input-box"]], inputs: { label: [1, "label"], type: [1, "type"], size: [1, "size"], accentColor: [1, "accentColor"], icon: [1, "icon"], placeholder: [1, "placeholder"], value: [1, "value"], error: [1, "error"], success: [1, "success"], disabled: [1, "disabled"], required: [1, "required"], max: [1, "max"], maxLength: [1, "maxLength"], allowedCharacterPattern: [1, "allowedCharacterPattern"], min: [1, "min"], prefix: [1, "prefix"], suffix: [1, "suffix"], currencyImage: [1, "currencyImage"], infinity: [1, "infinity"], step: [1, "step"], allowNegative: [1, "allowNegative"] }, outputs: { value: "valueChange", blur: "blur", focus: "focus", onInput: "onInput", increase: "increase", decrease: "decrease" }, decls: 9, vars: 42, consts: [[1, "block", "mb-1", "text-zinc-700", "dark:text-zinc-300", "select-none", "text-left", 3, "ngClass"], [1, "ap-input-border", "ap-input-ring-base", "relative", "flex", "w-full", "box-border", "items-center", "gap-2", "bg-white", "dark:bg-zinc-900", "focus-within:outline-none", "transition-colors", "truncate", 3, "focusout", "ngClass"], [1, "flex", "shrink-0", "text-zinc-400"], [1, "shrink-0", "text-zinc-400", "font-medium"], [1, "min-w-0", "w-full", "flex-1", "border-0", "bg-transparent", "p-0", "focus:outline-none", "placeholder:text-zinc-400", "dark:placeholder:text-zinc-300", "dark:text-zinc-300", 3, "blur", "focus", "compositionend", "input", "keydown.enter", "type", "placeholder", "disabled", "required", "value", "min", "max", "step", "ngClass"], [1, "absolute", "flex", "flex-col", "gap-0", 3, "ngClass"], [1, "absolute", "shrink-0", "size-5", "object-contain", 3, "src", "ngClass"], [1, "absolute", "shrink-0", "text-zinc-400", "size-4", 3, "name", "ngClass"], [1, "absolute", "shrink-0", "text-zinc-400", "select-none", "font-medium", 3, "ngClass"], [1, "size-4", 3, "name"], ["type", "button", 3, "click"], ["name", "chevron-up default", 1, "size-3", "text-zinc-500", "dark:text-zinc-400", "transition-colors", "cursor-pointer", 3, "ngClass"], ["name", "chevron-down default", 1, "size-3", "text-zinc-500", "dark:text-zinc-400", "transition-colors", "cursor-pointer", 3, "ngClass"]], template: function ApInputBox_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApInputBox_Conditional_0_Template, 2, 6, "div", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("focusout", function ApInputBox_Template_div_focusout_1_listener() {
        return ctx.blur.emit(ctx.value());
      });
      \u0275\u0275conditionalCreate(2, ApInputBox_Conditional_2_Template, 2, 1, "span", 2);
      \u0275\u0275conditionalCreate(3, ApInputBox_Conditional_3_Template, 2, 1, "span", 3);
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275listener("blur", function ApInputBox_Template_input_blur_4_listener() {
        return ctx.blur.emit(ctx.value());
      })("focus", function ApInputBox_Template_input_focus_4_listener() {
        return ctx.focus.emit();
      })("compositionend", function ApInputBox_Template_input_compositionend_4_listener($event) {
        return ctx.onInputChange($event);
      })("input", function ApInputBox_Template_input_input_4_listener($event) {
        return ctx.onInputChange($event);
      })("keydown.enter", function ApInputBox_Template_input_keydown_enter_4_listener($event) {
        return ctx.onEnterKey($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, ApInputBox_Conditional_5_Template, 5, 14, "div", 5);
      \u0275\u0275conditionalCreate(6, ApInputBox_Conditional_6_Template, 1, 3, "img", 6);
      \u0275\u0275conditionalCreate(7, ApInputBox_Conditional_7_Template, 1, 3, "ap-icon", 7);
      \u0275\u0275conditionalCreate(8, ApInputBox_Conditional_8_Template, 2, 3, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.label() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunctionV(19, _c0, [ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large", ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large", ctx.disabled(), !ctx.disabled() && ctx.accentColor() === "orange" && !ctx.error(), !ctx.disabled() && ctx.accentColor() === "yellow" && !ctx.error(), !ctx.disabled() && ctx.accentColor() === "slate" && !ctx.error(), ctx.disabled() && ctx.accentColor() === "slate" && !ctx.error(), ctx.error(), ctx.success() && !ctx.error()]));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.icon() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.prefix() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.nativeType())("placeholder", ctx.placeholder() || "")("disabled", ctx.disabled())("required", ctx.required())("value", ctx.value())("min", ctx.min())("max", ctx.max())("step", ctx.step())("ngClass", \u0275\u0275pureFunction8(33, _c1, ctx.type() === "number" && !ctx.disabled() && !ctx.currentCurrencyImage() && !ctx.suffix(), ctx.type() === "number" && !ctx.disabled() && (!!ctx.currentCurrencyImage() || !!ctx.suffix()), (ctx.type() !== "number" || ctx.disabled()) && (!!ctx.currentCurrencyImage() || !!ctx.suffix()), ctx.disabled(), ctx.type() === "number", ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large"));
      \u0275\u0275attribute("inputmode", ctx.nativeInputMode())("maxlength", ctx.maxLength());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.type() === "number" && !ctx.disabled() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.currencyImage() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.infinity() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.suffix() ? 8 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent], styles: ["\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, \ninput[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.ap-input-border[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d4d4d8;\n}\n.ap-input-border[_ngcontent-%COMP%]:hover {\n  border-color: #9f9fa9;\n}\n.dark[_nghost-%COMP%]   .ap-input-border[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ap-input-border[_ngcontent-%COMP%] {\n  border-color: #71717b;\n}\n.ap-input-border-lg[_ngcontent-%COMP%] {\n  border-width: 2px;\n}\n.ap-input-accent-orange[_ngcontent-%COMP%]:focus-within {\n  border-color: #ff8904;\n}\n.dark[_nghost-%COMP%]   .ap-input-accent-orange[_ngcontent-%COMP%]:focus-within, .dark   [_nghost-%COMP%]   .ap-input-accent-orange[_ngcontent-%COMP%]:focus-within {\n  border-color: #ff6900;\n}\n.dark[_nghost-%COMP%]   .ap-input-accent-orange[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .ap-input-accent-orange[_ngcontent-%COMP%]:hover {\n  border-color: #ff8904;\n}\n.ap-input-accent-yellow[_ngcontent-%COMP%]:focus-within {\n  border-color: #fdc700;\n}\n.dark[_nghost-%COMP%]   .ap-input-accent-yellow[_ngcontent-%COMP%]:focus-within, .dark   [_nghost-%COMP%]   .ap-input-accent-yellow[_ngcontent-%COMP%]:focus-within {\n  border-color: #f0b100;\n}\n.dark[_nghost-%COMP%]   .ap-input-accent-yellow[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .ap-input-accent-yellow[_ngcontent-%COMP%]:hover {\n  border-color: #fdc700;\n}\n.dark[_nghost-%COMP%]   .ap-input-accent-slate[_ngcontent-%COMP%]:focus-within, .dark   [_nghost-%COMP%]   .ap-input-accent-slate[_ngcontent-%COMP%]:focus-within {\n  border-color: #90a1b9;\n}\n.dark[_nghost-%COMP%]   .ap-input-accent-slate[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .ap-input-accent-slate[_ngcontent-%COMP%]:hover {\n  border-color: #90a1b9;\n}\n.ap-input-accent-slate-static[_ngcontent-%COMP%] {\n  border-color: #90a1b9;\n}\n.ap-input-border-error[_ngcontent-%COMP%] {\n  border-color: #e7000b;\n}\n.ap-input-border-error[_ngcontent-%COMP%]:hover {\n  border-color: #ff6467;\n}\n.dark[_nghost-%COMP%]   .ap-input-border-error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ap-input-border-error[_ngcontent-%COMP%] {\n  border-color: #fb2c36;\n}\n.dark[_nghost-%COMP%]   .ap-input-border-error[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .ap-input-border-error[_ngcontent-%COMP%]:hover {\n  border-color: #ff6467;\n}\n.ap-input-border-success[_ngcontent-%COMP%] {\n  border-color: #00a63e;\n}\n.ap-input-border-success[_ngcontent-%COMP%]:hover {\n  border-color: #05df72;\n}\n.dark[_nghost-%COMP%]   .ap-input-border-success[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ap-input-border-success[_ngcontent-%COMP%] {\n  border-color: #00c950;\n}\n.ap-input-ring-orange[_ngcontent-%COMP%]:focus-within {\n  --ap-ring: 0 0 0 1px rgba(255, 137, 4, 0.4);\n}\n.dark[_nghost-%COMP%]   .ap-input-ring-orange[_ngcontent-%COMP%]:focus-within, .dark   [_nghost-%COMP%]   .ap-input-ring-orange[_ngcontent-%COMP%]:focus-within {\n  --ap-ring: 0 0 0 1px #ff8904;\n}\n.ap-input-ring-yellow[_ngcontent-%COMP%]:focus-within {\n  --ap-ring: 0 0 0 1px rgba(253, 199, 0, 0.4);\n}\n.dark[_nghost-%COMP%]   .ap-input-ring-yellow[_ngcontent-%COMP%]:focus-within, .dark   [_nghost-%COMP%]   .ap-input-ring-yellow[_ngcontent-%COMP%]:focus-within {\n  --ap-ring: 0 0 0 1px #fdc700;\n}\n.ap-input-ring-slate[_ngcontent-%COMP%]:focus-within {\n  --ap-ring: 0 0 0 1px rgba(144, 161, 185, 0.4);\n}\n.dark[_nghost-%COMP%]   .ap-input-ring-slate[_ngcontent-%COMP%]:focus-within, .dark   [_nghost-%COMP%]   .ap-input-ring-slate[_ngcontent-%COMP%]:focus-within {\n  --ap-ring: 0 0 0 1px #90a1b9;\n}\n.ap-input-ring-error[_ngcontent-%COMP%]:focus-within {\n  --ap-ring: 0 0 0 1px #fb2c36;\n}\n.ap-input-ring-success[_ngcontent-%COMP%]:focus-within {\n  --ap-ring: 0 0 0 1px #00c950;\n}\n/*# sourceMappingURL=ap-input-box.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApInputBox, [{
    type: Component,
    args: [{ selector: "ap-input-box", imports: [CommonModule, ApIconComponent], template: `@if (label()) {
  <div
    class="block mb-1 text-zinc-700 dark:text-zinc-300 select-none text-left"
    [ngClass]="{
      ' text-xs ': size() === 'small',
      ' text-base ': size() === 'medium',
      ' text-lg': size() === 'large',
    }"
  >
    {{ label() }}
  </div>
}

<div
  class="ap-input-border ap-input-ring-base relative flex w-full box-border items-center gap-2 bg-white dark:bg-zinc-900 focus-within:outline-none transition-colors truncate"
  [ngClass]="{
    'h-[calc(1.5rem+2px)] px-2 py-1 text-xs rounded-md': size() === 'small',
    'h-[calc(2.5rem+2px)] px-3 py-2.5 text-sm rounded-lg': size() === 'medium',
    'h-[calc(3rem+4px)] px-5 py-3 text-base ap-input-border-lg rounded-lg': size() === 'large',
    'rounded-sm': size() === 'small',
    'rounded-md': size() === 'medium',
    'rounded-lg': size() === 'large',
    'opacity-50 cursor-not-allowed pointer-events-none': disabled(),
    'ap-input-accent-orange ap-input-ring-orange':
      !disabled() && accentColor() === 'orange' && !error(),
    'ap-input-accent-yellow ap-input-ring-yellow':
      !disabled() && accentColor() === 'yellow' && !error(),
    'ap-input-accent-slate ap-input-ring-slate':
      !disabled() && accentColor() === 'slate' && !error(),
    'ap-input-accent-slate-static': disabled() && accentColor() === 'slate' && !error(),
    'ap-input-border-error ap-input-ring-error': error(),
    'ap-input-border-success ap-input-ring-success': success() && !error(),
  }"
  (focusout)="blur.emit(value())"
>
  <!-- Search Icon -->
  @if (icon()) {
    <span class="flex shrink-0 text-zinc-400">
      <ap-icon [name]="icon()!" class="size-4" />
    </span>
  }

  <!-- Prefix -->
  @if (prefix()) {
    <span class="shrink-0 text-zinc-400 font-medium"> {{ prefix() }} </span>
  }

  <!-- Input Field\uFF1AIME \u7D44\u5B57\u7D50\u675F\u6642\u518D\u6B21\u9A57\u8B49\uFF0C\u78BA\u4FDD\u6700\u7D42\u503C\u7B26\u5408\u5B57\u5143\u9650\u5236\u3002 -->
  <input
    [type]="nativeType()"
    [attr.inputmode]="nativeInputMode()"
    [placeholder]="placeholder() || ''"
    [disabled]="disabled()"
    [required]="required()"
    [value]="value()"
    (blur)="blur.emit(value())"
    (focus)="focus.emit()"
    (compositionend)="onInputChange($event)"
    (input)="onInputChange($event)"
    (keydown.enter)="onEnterKey($event)"
    [min]="min()"
    [max]="max()"
    [attr.maxlength]="maxLength()"
    [step]="step()"
    class="min-w-0 w-full flex-1 border-0 bg-transparent p-0 focus:outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-300 dark:text-zinc-300"
    [ngClass]="{
      'pr-8': type() === 'number' && !disabled() && !currentCurrencyImage() && !suffix(),
      'pr-14': type() === 'number' && !disabled() && (!!currentCurrencyImage() || !!suffix()),
      'pr-10': (type() !== 'number' || disabled()) && (!!currentCurrencyImage() || !!suffix()),
      'cursor-not-allowed': disabled(),
      'appearance-none': type() === 'number',
      'text-xs': size() === 'small',
      'text-sm': size() === 'medium',
      'text-base': size() === 'large',
    }"
  />

  <!-- Custom Number Spinner Buttons -->
  @if (type() === 'number' && !disabled()) {
    <div
      class="absolute flex flex-col gap-0"
      [ngClass]="{
        'right-10': !!currentCurrencyImage() || !!suffix() || !!infinity(),
        'right-4': !currentCurrencyImage() && !suffix() && !infinity(),
      }"
    >
      <button type="button" (click)="increment()">
        <ap-icon
          name="chevron-up default"
          class="size-3 text-zinc-500 dark:text-zinc-400 transition-colors cursor-pointer"
          [ngClass]="{
            'hover:text-orange-400': accentColor() === 'orange',
            'hover:text-yellow-400': accentColor() === 'yellow',
            'hover:text-slate-200': accentColor() === 'slate',
          }"
        />
      </button>
      <button type="button" (click)="decrement()">
        <ap-icon
          name="chevron-down default"
          class="size-3 text-zinc-500 dark:text-zinc-400 transition-colors cursor-pointer"
          [ngClass]="{
            'hover:text-orange-400': accentColor() === 'orange',
            'hover:text-yellow-400': accentColor() === 'yellow',
            'hover:text-slate-200': accentColor() === 'slate',
          }"
        />
      </button>
    </div>
  }

  <!-- Currency Image -->
  @if (currencyImage()) {
    <img
      [src]="currentCurrencyImage()!"
      class="absolute shrink-0 size-5 object-contain"
      [ngClass]="{
        'right-3': true,
      }"
    />
  }

  <!-- Infinity -->
  @if (infinity()) {
    <ap-icon
      [name]="'infinite'"
      class="absolute shrink-0 text-zinc-400 size-4"
      [ngClass]="{
        'right-3': true,
      }"
    />
  }

  <!-- Suffix -->
  @if (suffix()) {
    <div
      class="absolute shrink-0 text-zinc-400 select-none font-medium"
      [ngClass]="{
        'right-3': true,
      }"
    >
      {{ suffix() }}
    </div>
  }
</div>
`, styles: ["/* src/ap-components-lib/ap-input-box/ap-input-box.css */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.ap-input-border {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d4d4d8;\n}\n.ap-input-border:hover {\n  border-color: #9f9fa9;\n}\n:host-context(.dark) .ap-input-border {\n  border-color: #71717b;\n}\n.ap-input-border-lg {\n  border-width: 2px;\n}\n.ap-input-accent-orange:focus-within {\n  border-color: #ff8904;\n}\n:host-context(.dark) .ap-input-accent-orange:focus-within {\n  border-color: #ff6900;\n}\n:host-context(.dark) .ap-input-accent-orange:hover {\n  border-color: #ff8904;\n}\n.ap-input-accent-yellow:focus-within {\n  border-color: #fdc700;\n}\n:host-context(.dark) .ap-input-accent-yellow:focus-within {\n  border-color: #f0b100;\n}\n:host-context(.dark) .ap-input-accent-yellow:hover {\n  border-color: #fdc700;\n}\n:host-context(.dark) .ap-input-accent-slate:focus-within {\n  border-color: #90a1b9;\n}\n:host-context(.dark) .ap-input-accent-slate:hover {\n  border-color: #90a1b9;\n}\n.ap-input-accent-slate-static {\n  border-color: #90a1b9;\n}\n.ap-input-border-error {\n  border-color: #e7000b;\n}\n.ap-input-border-error:hover {\n  border-color: #ff6467;\n}\n:host-context(.dark) .ap-input-border-error {\n  border-color: #fb2c36;\n}\n:host-context(.dark) .ap-input-border-error:hover {\n  border-color: #ff6467;\n}\n.ap-input-border-success {\n  border-color: #00a63e;\n}\n.ap-input-border-success:hover {\n  border-color: #05df72;\n}\n:host-context(.dark) .ap-input-border-success {\n  border-color: #00c950;\n}\n.ap-input-ring-orange:focus-within {\n  --ap-ring: 0 0 0 1px rgba(255, 137, 4, 0.4);\n}\n:host-context(.dark) .ap-input-ring-orange:focus-within {\n  --ap-ring: 0 0 0 1px #ff8904;\n}\n.ap-input-ring-yellow:focus-within {\n  --ap-ring: 0 0 0 1px rgba(253, 199, 0, 0.4);\n}\n:host-context(.dark) .ap-input-ring-yellow:focus-within {\n  --ap-ring: 0 0 0 1px #fdc700;\n}\n.ap-input-ring-slate:focus-within {\n  --ap-ring: 0 0 0 1px rgba(144, 161, 185, 0.4);\n}\n:host-context(.dark) .ap-input-ring-slate:focus-within {\n  --ap-ring: 0 0 0 1px #90a1b9;\n}\n.ap-input-ring-error:focus-within {\n  --ap-ring: 0 0 0 1px #fb2c36;\n}\n.ap-input-ring-success:focus-within {\n  --ap-ring: 0 0 0 1px #00c950;\n}\n/*# sourceMappingURL=ap-input-box.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApInputBox, { className: "ApInputBox", filePath: "src/ap-components-lib/ap-input-box/ap-input-box.ts", lineNumber: 11 });
})();

export {
  ApInputBox
};
//# sourceMappingURL=chunk-CYEAZPJ5.js.map
