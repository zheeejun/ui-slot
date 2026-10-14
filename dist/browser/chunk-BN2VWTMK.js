import {
  ApIconChickenComponent
} from "./chunk-74H6U7EF.js";
import {
  ApUiTabGroupComponent
} from "./chunk-47SOIXJB.js";
import {
  ApInputBox
} from "./chunk-H6P7MZH6.js";
import {
  ApSelectComponent
} from "./chunk-5KYQQMTR.js";
import {
  AppI18nPipe
} from "./chunk-OW2FH27N.js";
import {
  BaseSymbolTextureService
} from "./chunk-4OJJGH2R.js";
import {
  ApToastComponent,
  MoneyTextPipe
} from "./chunk-6XO7DG7K.js";
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
  LoggerService,
  MoneyText,
  calc,
  dec,
  safeParse
} from "./chunk-TIGXKRQH.js";
import {
  CommonModule,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-QGU3BS3L.js";

// src/app/components/ap-og-input/ap-og-input.interface.ts
var INPUT_TYPE_CONFIG = {
  modeTab: {
    label: { key: "bottom_panel_mode", fallback: "Mode" },
    options: [
      { value: "manual", label: "Manual", labelKey: "og_bet_info_manualBet" },
      { value: "auto", label: "Auto", labelKey: "og_bet_info_autoBet" }
    ]
  },
  stopLoss: {
    label: { key: "og_autobet_stopLoss", fallback: "Stop on Loss" },
    placeholder: "0.1",
    min: 0,
    step: 0.1
  },
  stopProfit: {
    label: { key: "og_autobet_takeProfit", fallback: "Stop on Profit" },
    placeholder: "0.1",
    min: 0,
    step: 0.1
  },
  onWin: {
    label: { key: "og_autobet_youwin", fallback: "On Win" },
    placeholder: "0",
    min: -99,
    step: 1,
    max: 9999999999,
    tabItems: [
      { id: "reset", label: { key: "og_autobet_reset", fallback: "Reset" } },
      {
        id: "increase by",
        label: { key: "og_autobet_add", fallback: "Increase by:" }
      }
    ]
  },
  onLoss: {
    label: { key: "og_autobet_youlose", fallback: "On Loss" },
    placeholder: "0",
    min: -99,
    step: 1,
    max: 9999999999,
    tabItems: [
      { id: "reset", label: { key: "og_autobet_reset", fallback: "Reset" } },
      {
        id: "increase by",
        label: { key: "og_autobet_add", fallback: "Increase by:" }
      }
    ]
  },
  numberOfBets: {
    label: { key: "og_autobet_betCounts", fallback: "Number of Bets" },
    placeholder: "0",
    min: 0,
    max: 999999999,
    step: 1
  },
  difficulty: {
    label: { key: "bet_info_level", fallback: "Difficulty", source: "game" },
    options: [
      {
        value: "easy",
        label: "Easy",
        labelKey: "bet_info_level_01",
        labelSource: "game"
      },
      {
        value: "medium",
        label: "Medium",
        labelKey: "bet_info_level_02",
        labelSource: "game"
      },
      {
        value: "hard",
        label: "Hard",
        labelKey: "bet_info_level_03",
        labelSource: "game"
      },
      {
        value: "expert",
        label: "Expert",
        labelKey: "bet_info_level_04",
        labelSource: "game"
      }
    ]
  },
  totalProfit: {
    label: { key: "og_guide_6", fallback: "Total Profit" },
    min: 0
  },
  autoCashOut: {
    label: {
      key: "og_guide_8",
      fallback: "Auto Cash Out"
    },
    placeholder: "1",
    min: 1,
    step: 1
  },
  game: {
    label: { key: "og_fair_gameList", fallback: "Game" },
    placeholder: { key: "game_title", fallback: "Chicken" },
    disabled: true,
    currencyImage: false
  },
  serverSeed: {
    label: { key: "og_fair_serverSeed", fallback: "Server Seed" },
    placeholder: {
      key: "og_fair_serverSeed",
      fallback: "Server Seed"
    },
    disabled: true,
    currencyImage: false
  },
  nonce: {
    label: { key: "og_fair_nonce", fallback: "Nonce" },
    placeholder: "0",
    min: 0,
    step: 1,
    currencyImage: false
  }
};
var ORIGINAL_BOTTOM_PANEL_INPUT_TYPES = new Set(Object.keys(INPUT_TYPE_CONFIG));

// src/app/components/ap-og-input/ap-og-input.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ApOgInputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-ui-tab-group", 5);
    \u0275\u0275listener("tabChange", function ApOgInputComponent_Conditional_1_Template_ap_ui_tab_group_tabChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("tabs", ctx_r1.tabOptions())("selectedTab", ctx_r1.selectedTab())("disabled", ctx_r1.disabled());
  }
}
function ApOgInputComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.labelSecondary());
  }
}
function ApOgInputComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 6)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ApOgInputComponent_Conditional_2_Conditional_4_Template, 2, 1, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ap-input-box", 8);
    \u0275\u0275listener("onInput", function ApOgInputComponent_Conditional_2_Template_ap_input_box_onInput_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.valueChange.emit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.inputLabel());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.labelSecondary() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("accentColor", "slate")("disabled", true)("currencyImage", ctx_r1.currencyImage())("value", ctx_r1.value());
  }
}
function ApOgInputComponent_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 15);
    \u0275\u0275listener("clicked", function ApOgInputComponent_Conditional_3_For_6_Template_ap_button_clicked_0_listener() {
      const tab_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedTabChange.emit(tab_r6.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.selectedTab() === tab_r6.id ? "" : "[&>button]:text-zinc-400 [&>button:hover]:bg-zinc-700 [&>button:hover]:text-zinc-200");
    \u0275\u0275property("size", "small")("disabled", ctx_r1.disabled())("label", tab_r6.label)("variant", ctx_r1.selectedTab() === tab_r6.id ? "content" : "text");
  }
}
function ApOgInputComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 7)(4, "div", 11);
    \u0275\u0275repeaterCreate(5, ApOgInputComponent_Conditional_3_For_6_Template, 1, 6, "ap-button", 12, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13)(8, "ap-input-box", 14);
    \u0275\u0275listener("onInput", function ApOgInputComponent_Conditional_3_Template_ap_input_box_onInput_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.valueChange.emit($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.inputLabel(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.tabOptions());
    \u0275\u0275advance(3);
    \u0275\u0275property("allowNegative", true)("value", ctx_r1.value())("disabled", ctx_r1.isValueDisabled())("min", ctx_r1.inputMin())("max", ctx_r1.inputMax())("step", ctx_r1.selectedStep());
  }
}
function ApOgInputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-select", 16);
    \u0275\u0275listener("onSelect", function ApOgInputComponent_Conditional_4_Template_ap_select_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.valueChange.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", ctx_r1.inputLabel())("options", ctx_r1.autoCashOutOptions())("selected", ctx_r1.value())("disabled", ctx_r1.disabled());
  }
}
function ApOgInputComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-input-box", 17);
    \u0275\u0275listener("onInput", function ApOgInputComponent_Conditional_5_Template_ap_input_box_onInput_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.valueChange.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", ctx_r1.inputLabel())("infinity", ctx_r1.showInfinity())("value", ctx_r1.value())("placeholder", ctx_r1.rawInputPlaceholder())("min", ctx_r1.inputMin())("max", ctx_r1.inputMax())("step", ctx_r1.selectedStep())("disabled", ctx_r1.disabled());
  }
}
function ApOgInputComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-input-box", 18);
    \u0275\u0275listener("onInput", function ApOgInputComponent_Conditional_6_Template_ap_input_box_onInput_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.valueChange.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", ctx_r1.inputLabel())("value", ctx_r1.value())("placeholder", ctx_r1.rawInputPlaceholder())("min", ctx_r1.inputMin())("max", ctx_r1.inputMax())("maxLength", ctx_r1.maxLength())("step", ctx_r1.selectedStep())("disabled", ctx_r1.disabled());
  }
}
function ApOgInputComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-select", 16);
    \u0275\u0275listener("onSelect", function ApOgInputComponent_Conditional_7_Conditional_0_Template_ap_select_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.valueChange.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r1.inputLabel())("options", ctx)("selected", ctx_r1.value())("disabled", ctx_r1.disabled());
  }
}
function ApOgInputComponent_Conditional_7_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 22);
    \u0275\u0275listener("clicked", function ApOgInputComponent_Conditional_7_Conditional_1_Conditional_2_Template_ap_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPressed());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("icon", ctx_r1.actionIcon() ?? "")("label", ctx_r1.actionLabel() ?? "")("variant", ctx_r1.actionVariant())("disabled", ctx_r1.actionDisabled());
  }
}
function ApOgInputComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "ap-input-box", 20);
    \u0275\u0275listener("onInput", function ApOgInputComponent_Conditional_7_Conditional_1_Template_ap_input_box_onInput_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.valueChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, ApOgInputComponent_Conditional_7_Conditional_1_Conditional_2_Template, 1, 4, "ap-button", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r1.inputLabel())("currencyImage", ctx_r1.currencyImage())("type", ctx_r1.resolvedInputType())("value", ctx_r1.value())("placeholder", ctx_r1.rawInputPlaceholder())("min", ctx_r1.inputMin())("maxLength", ctx_r1.maxLength())("allowedCharacterPattern", ctx_r1.resolvedAllowedCharacterPattern())("step", ctx_r1.selectedStep())("suffix", ctx_r1.suffix())("disabled", ctx_r1.disabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasAction() ? 2 : -1);
  }
}
function ApOgInputComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApOgInputComponent_Conditional_7_Conditional_0_Template, 1, 4, "ap-select", 2)(1, ApOgInputComponent_Conditional_7_Conditional_1_Template, 3, 12, "div", 19);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.selectedOptions()) ? 0 : 1, tmp_1_0);
  }
}
var ALNUM_CHARACTER_PATTERN = /^[A-Za-z0-9]$/;
var ApOgInputComponent = class _ApOgInputComponent {
  appI18n = inject(AppI18nService);
  type = input(void 0);
  label = input(void 0);
  labelSecondary = input(null);
  inputType = input("number");
  /** 輸入框目前顯示的數值，隨使用者輸入透過 valueChange 雙向更新 */
  value = input("");
  placeholder = input(void 0);
  /** 輸入框限制只能輸入英文及數字 */
  allowedCharacterPattern = input(null);
  min = input(void 0);
  max = input(void 0);
  maxLength = input(null);
  step = input(void 0);
  options = input(void 0);
  suffix = input(null);
  infinity = input(null);
  disabled = input(false);
  valueDisabled = input(false);
  actionIcon = input(null);
  actionLabel = input(null);
  /** action 按鈕按下時要送出的固定值，與 value 無關，透過 pressed 輸出 */
  actionValue = input(null);
  /** 控制 action 按鈕本身是否可按，與輸入框的 disabled 分開 */
  actionDisabled = input(false);
  valueChange = output();
  pressed = output();
  selectedTab = input("");
  tabChange = output();
  selectedTabChange = output();
  tabItems = input([]);
  currencyImage = input(false);
  actionVariant = computed(() => "content");
  hasAction = computed(() => !!this.actionIcon() || !!this.actionLabel());
  /** 'alnum' 對原生 input 而言等同 'text'，實際限制由 resolvedAllowedCharacterPattern 處理 */
  resolvedInputType = computed(() => {
    const type = this.inputType();
    return type === "alnum" ? "text" : type;
  });
  resolvedAllowedCharacterPattern = computed(() => this.allowedCharacterPattern() ?? (this.inputType() === "alnum" ? ALNUM_CHARACTER_PATTERN : null));
  /* 字串串接 */
  translateText(text) {
    if (!text)
      return null;
    if (typeof text === "string")
      return text;
    if (text.source === "game") {
      return this.appI18n.gameStr(text.key) ?? text.fallback;
    }
    return this.appI18n.instant(text.key, text.fallback);
  }
  inputLabel = computed(() => {
    const type = this.type();
    return this.label() ?? this.translateText(type ? INPUT_TYPE_CONFIG[type].label : null) ?? "";
  });
  rawInputPlaceholder = computed(() => {
    const type = this.type();
    return this.placeholder() ?? this.translateText(type ? INPUT_TYPE_CONFIG[type].placeholder : null) ?? null;
  });
  isValueDisabled = computed(() => this.disabled() || this.valueDisabled());
  /** 投注次數的無限邏輯 */
  showInfinity = computed(() => {
    if (!this.infinity())
      return false;
    return Number(this.value()) === 0;
  });
  inputMin = computed(() => {
    const type = this.type();
    return this.min() ?? (type ? INPUT_TYPE_CONFIG[type].min : null) ?? null;
  });
  inputMax = computed(() => {
    const type = this.type();
    return this.max() ?? (type ? INPUT_TYPE_CONFIG[type].max : null) ?? null;
  });
  selectedStep = computed(() => {
    const type = this.type();
    return this.step() ?? (type ? INPUT_TYPE_CONFIG[type].step : null) ?? null;
  });
  onPressed() {
    this.pressed.emit(this.actionValue() ?? this.rawInputPlaceholder() ?? "");
  }
  autoCashOutOptions = computed(() => {
    const min = Number(this.inputMin() ?? 1);
    const max = Number(this.inputMax() ?? min);
    const options = [];
    for (let step = min; step <= max; step++) {
      options.push({ value: step.toString(), label: step.toString() });
    }
    return options;
  });
  selectedOptions = computed(() => {
    const override = this.options();
    if (override !== void 0)
      return override;
    const type = this.type();
    const options = (type ? INPUT_TYPE_CONFIG[type].options : null) ?? null;
    if (!options)
      return null;
    return options.map((option) => __spreadProps(__spreadValues({}, option), {
      label: option.labelKey ? option.labelSource === "game" ? this.appI18n.gameStr(option.labelKey) ?? option.label : this.appI18n.instant(option.labelKey, option.label) : option.label
    }));
  });
  tabOptions = computed(() => {
    if (this.tabItems().length > 0) {
      return this.tabItems();
    }
    const type = this.type();
    const configTabItems = type ? INPUT_TYPE_CONFIG[type].tabItems : null;
    if (configTabItems) {
      return configTabItems.map((item) => ({
        id: item.id,
        label: this.translateText(item.label) ?? "",
        disabled: item.disabled
      }));
    }
    return (this.selectedOptions() ?? []).map((option) => ({
      id: option.value,
      label: option.label
    }));
  });
  static \u0275fac = function ApOgInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApOgInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApOgInputComponent, selectors: [["ap-og-input"]], inputs: { type: [1, "type"], label: [1, "label"], labelSecondary: [1, "labelSecondary"], inputType: [1, "inputType"], value: [1, "value"], placeholder: [1, "placeholder"], allowedCharacterPattern: [1, "allowedCharacterPattern"], min: [1, "min"], max: [1, "max"], maxLength: [1, "maxLength"], step: [1, "step"], options: [1, "options"], suffix: [1, "suffix"], infinity: [1, "infinity"], disabled: [1, "disabled"], valueDisabled: [1, "valueDisabled"], actionIcon: [1, "actionIcon"], actionLabel: [1, "actionLabel"], actionValue: [1, "actionValue"], actionDisabled: [1, "actionDisabled"], selectedTab: [1, "selectedTab"], tabItems: [1, "tabItems"], currencyImage: [1, "currencyImage"] }, outputs: { valueChange: "valueChange", pressed: "pressed", tabChange: "tabChange", selectedTabChange: "selectedTabChange" }, decls: 8, vars: 1, consts: [[1, "flex", "flex-col", "gap-1"], ["accentColor", "slate", 1, "w-full", "block", "[&>div]:max-w-none", "[&>div]:mx-0", 3, "tabs", "selectedTab", "disabled"], ["accentColor", "slate", 3, "label", "options", "selected", "disabled"], ["type", "number", "accentColor", "slate", 3, "label", "infinity", "value", "placeholder", "min", "max", "step", "disabled"], ["type", "number", "accentColor", "slate", 3, "label", "value", "placeholder", "min", "max", "maxLength", "step", "disabled"], ["accentColor", "slate", 1, "w-full", "block", "[&>div]:max-w-none", "[&>div]:mx-0", 3, "tabChange", "tabs", "selectedTab", "disabled"], [1, "flex", "items-center", "justify-start", "gap-1", "text-zinc-700", "dark:text-zinc-300"], [1, "shrink-0"], ["type", "number", 3, "onInput", "accentColor", "disabled", "currencyImage", "value"], [1, "block", "select-none", "text-zinc-700", "dark:text-zinc-300"], [1, "flex", "items-stretch", "space-x-2"], [1, "inline-flex", "h-full", "max-w-full", "rounded-lg", "bg-zinc-800"], ["accentColor", "slate", 1, "shrink-0", "[&>button]:h-full", "[&>button]:rounded-md", 3, "size", "disabled", "class", "label", "variant"], [1, "min-w-0", "flex-1", "[&>ap-input-box]:block", "[&>ap-input-box]:h-full"], ["type", "number", "suffix", "%", "accentColor", "slate", 3, "onInput", "allowNegative", "value", "disabled", "min", "max", "step"], ["accentColor", "slate", 1, "shrink-0", "[&>button]:h-full", "[&>button]:rounded-md", 3, "clicked", "size", "disabled", "label", "variant"], ["accentColor", "slate", 3, "onSelect", "label", "options", "selected", "disabled"], ["type", "number", "accentColor", "slate", 3, "onInput", "label", "infinity", "value", "placeholder", "min", "max", "step", "disabled"], ["type", "number", "accentColor", "slate", 3, "onInput", "label", "value", "placeholder", "min", "max", "maxLength", "step", "disabled"], [1, "flex", "gap-2", "items-end"], ["accentColor", "slate", 1, "min-w-0", "flex-1", 3, "onInput", "label", "currencyImage", "type", "value", "placeholder", "min", "maxLength", "allowedCharacterPattern", "step", "suffix", "disabled"], ["accentColor", "slate", 3, "icon", "label", "variant", "disabled"], ["accentColor", "slate", 3, "clicked", "icon", "label", "variant", "disabled"]], template: function ApOgInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ApOgInputComponent_Conditional_1_Template, 1, 3, "ap-ui-tab-group", 1)(2, ApOgInputComponent_Conditional_2_Template, 6, 6, "div", 0)(3, ApOgInputComponent_Conditional_3_Template, 9, 7)(4, ApOgInputComponent_Conditional_4_Template, 1, 4, "ap-select", 2)(5, ApOgInputComponent_Conditional_5_Template, 1, 8, "ap-input-box", 3)(6, ApOgInputComponent_Conditional_6_Template, 1, 8, "ap-input-box", 4)(7, ApOgInputComponent_Conditional_7_Template, 2, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.type() === "modeTab" ? 1 : ctx.type() === "totalProfit" ? 2 : ctx.type() === "onWin" || ctx.type() === "onLoss" ? 3 : ctx.type() === "autoCashOut" ? 4 : ctx.type() === "numberOfBets" ? 5 : ctx.type() === "nonce" ? 6 : 7);
    }
  }, dependencies: [ApInputBox, ApSelectComponent, ApUiTabGroupComponent, ApButtonComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=ap-og-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApOgInputComponent, [{
    type: Component,
    args: [{ selector: "ap-og-input", standalone: true, imports: [ApInputBox, ApSelectComponent, ApUiTabGroupComponent, ApButtonComponent], template: `<div class="flex flex-col gap-1">
  <!-- \u904A\u6232\u6A21\u5F0F\u5207\u63DB -->
  @if (type() === "modeTab") {
    <ap-ui-tab-group
      class="w-full block [&>div]:max-w-none [&>div]:mx-0"
      [tabs]="tabOptions()"
      [selectedTab]="selectedTab()"
      [disabled]="disabled()"
      accentColor="slate"
      (tabChange)="tabChange.emit($event)"
    />

    <!-- \u7E3D\u76C8\u5229 -->
  } @else if (type() === "totalProfit") {
    <div class="flex flex-col gap-1">
      <div
        class="flex items-center justify-start gap-1 text-zinc-700 dark:text-zinc-300"
      >
        <div>{{ inputLabel() }}</div>
        @if (labelSecondary()) {
          <div class="shrink-0">{{ labelSecondary() }}</div>
        }
      </div>
      <ap-input-box
        type="number"
        [accentColor]="'slate'"
        [disabled]="true"
        [currencyImage]="currencyImage()"
        [value]="value()"
        (onInput)="valueChange.emit($event)"
      />
    </div>
  }
  <!-- \u8D0F\u5206/\u8F38\u5206\u6642 -->
  @else if (type() === "onWin" || type() === "onLoss") {
    <div class="block select-none text-zinc-700 dark:text-zinc-300">
      {{ inputLabel() }}
    </div>
    <div class="flex items-stretch space-x-2">
      <div class="shrink-0">
        <div class="inline-flex h-full max-w-full rounded-lg bg-zinc-800">
          @for (tab of tabOptions(); track tab.id) {
            <ap-button
              class="shrink-0 [&>button]:h-full [&>button]:rounded-md"
              [size]="'small'"
              [disabled]="disabled()"
              [class]="
                selectedTab() === tab.id
                  ? ''
                  : '[&>button]:text-zinc-400 [&>button:hover]:bg-zinc-700 [&>button:hover]:text-zinc-200'
              "
              [label]="tab.label"
              [variant]="selectedTab() === tab.id ? 'content' : 'text'"
              accentColor="slate"
              (clicked)="selectedTabChange.emit(tab.id)"
            />
          }
        </div>
      </div>
      <div
        class="min-w-0 flex-1 [&>ap-input-box]:block [&>ap-input-box]:h-full"
      >
        <ap-input-box
          type="number"
          suffix="%"
          [allowNegative]="true"
          [value]="value()"
          [disabled]="isValueDisabled()"
          accentColor="slate"
          [min]="inputMin()"
          [max]="inputMax()"
          [step]="selectedStep()"
          (onInput)="valueChange.emit($event)"
        />
      </div>
    </div>
  }
  <!-- \u81EA\u52D5\u63D0\u73FE\u6B65\u6578 -->
  @else if (type() === "autoCashOut") {
    <ap-select
      [label]="inputLabel()"
      [options]="autoCashOutOptions()"
      [selected]="value()"
      accentColor="slate"
      [disabled]="disabled()"
      (onSelect)="valueChange.emit($event)"
    />
  }
  <!-- \u6295\u6CE8\u6B21\u6578 -->
  @else if (type() === "numberOfBets") {
    <ap-input-box
      [label]="inputLabel()"
      type="number"
      [infinity]="showInfinity()"
      [value]="value()"
      [placeholder]="rawInputPlaceholder()"
      accentColor="slate"
      [min]="inputMin()"
      [max]="inputMax()"
      [step]="selectedStep()"
      [disabled]="disabled()"
      (onInput)="valueChange.emit($event)"
    />
  } @else if (type() === "nonce") {
    <ap-input-box
      [label]="inputLabel()"
      type="number"
      [value]="value()"
      [placeholder]="rawInputPlaceholder()"
      accentColor="slate"
      [min]="inputMin()"
      [max]="inputMax()"
      [maxLength]="maxLength()"
      [step]="selectedStep()"
      [disabled]="disabled()"
      (onInput)="valueChange.emit($event)"
    />
  } @else {
    @if (selectedOptions(); as options) {
      <ap-select
        [label]="inputLabel()"
        [options]="options"
        [selected]="value()"
        accentColor="slate"
        [disabled]="disabled()"
        (onSelect)="valueChange.emit($event)"
      />
    } @else {
      <div class="flex gap-2 items-end">
        <ap-input-box
          class="min-w-0 flex-1"
          [label]="inputLabel()"
          [currencyImage]="currencyImage()"
          [type]="resolvedInputType()"
          [value]="value()"
          [placeholder]="rawInputPlaceholder()"
          accentColor="slate"
          [min]="inputMin()"
          [maxLength]="maxLength()"
          [allowedCharacterPattern]="resolvedAllowedCharacterPattern()"
          [step]="selectedStep()"
          [suffix]="suffix()"
          [disabled]="disabled()"
          (onInput)="valueChange.emit($event)"
        />

        @if (hasAction()) {
          <ap-button
            [icon]="actionIcon() ?? ''"
            [label]="actionLabel() ?? ''"
            [variant]="actionVariant()"
            [disabled]="actionDisabled()"
            accentColor="slate"
            (clicked)="onPressed()"
          />
        }
      </div>
    }
  }
</div>
`, styles: ["/* src/app/components/ap-og-input/ap-og-input.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=ap-og-input.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApOgInputComponent, { className: "ApOgInputComponent", filePath: "src/app/components/ap-og-input/ap-og-input.component.ts", lineNumber: 26 });
})();

// src/app/pages/og-panel/og-panel.interface.ts
var OgChickenDifficultyEnum;
(function(OgChickenDifficultyEnum2) {
  OgChickenDifficultyEnum2[OgChickenDifficultyEnum2["easy"] = 0] = "easy";
  OgChickenDifficultyEnum2[OgChickenDifficultyEnum2["medium"] = 1] = "medium";
  OgChickenDifficultyEnum2[OgChickenDifficultyEnum2["hard"] = 2] = "hard";
  OgChickenDifficultyEnum2[OgChickenDifficultyEnum2["expert"] = 3] = "expert";
})(OgChickenDifficultyEnum || (OgChickenDifficultyEnum = {}));
var OgChickenGameStage;
(function(OgChickenGameStage2) {
  OgChickenGameStage2["firstGo"] = "0";
  OgChickenGameStage2["afterFirstGo"] = "1";
})(OgChickenGameStage || (OgChickenGameStage = {}));

// src/app/components/ap-og-history-detail-chicken/ap-og-history-detail-chicken.component.ts
var _c0 = ["serverSeedToast"];
var _c1 = ["serverSeedHashToast"];
var _c2 = ["clientSeedToast"];
var _c3 = ["nonceToast"];
function ApOgHistoryDetailChickenComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 16);
    \u0275\u0275element(2, "ap-toast", 17, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ap-button", 18);
    \u0275\u0275listener("clicked", function ApOgHistoryDetailChickenComponent_Conditional_25_Template_ap_button_clicked_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickServerSeedCopy($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("message", ctx_r2.copyToastMessage());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", "copy");
  }
}
function ApOgHistoryDetailChickenComponent_Conditional_50_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ApOgHistoryDetailChickenComponent_Conditional_50_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clickVerify());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "og_fair_verifyBet", "Verify Bet"), " ");
  }
}
function ApOgHistoryDetailChickenComponent_Conditional_50_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ApOgHistoryDetailChickenComponent_Conditional_50_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clickSeed());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "og_fair_rotateInfo", "Change your seed pairings to verify this bet. "), " ");
  }
}
function ApOgHistoryDetailChickenComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275conditionalCreate(1, ApOgHistoryDetailChickenComponent_Conditional_50_Conditional_1_Template, 3, 4, "button", 21)(2, ApOgHistoryDetailChickenComponent_Conditional_50_Conditional_2_Template, 3, 4, "button", 21);
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275listener("click", function ApOgHistoryDetailChickenComponent_Conditional_50_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickProvable());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "appI18n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.validServerSeed() ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 2, "og_fair_viewInfo", "What is Provable Fairness?"), " ");
  }
}
var ApOgHistoryDetailChickenComponent = class _ApOgHistoryDetailChickenComponent {
  symbol = inject(BaseSymbolTextureService);
  appI18n = inject(AppI18nService);
  logger = inject(LoggerService);
  isDetailThemeDark = input(false);
  /** 這一把是否為贏 */
  isWin = input(true);
  /** 每一把的遊戲結果event, 每個遊戲格式不同, 統一用字串傳入 */
  eventString = input("{}");
  /** 每一把的遊戲結果seed */
  seed = input({
    server_seed: "",
    server_seed_hash: "",
    client_seed: ""
  });
  /** 是否啟用 Provable Link 按鈕，預設 true */
  enableProvableLink = input(true);
  /** 每一把的遊戲結果event, 解析成物件 */
  eventObj = computed(() => {
    const obj = safeParse(this.eventString(), {});
    this.logger.ogLog("event:", obj);
    return obj;
  });
  /** 獲取歷史紀錄結果圖片連結，會先嘗試從遊戲字串表取得對應圖片名稱，沒有的話回傳 null */
  historyDetailImage = computed(() => {
    const gameImageName = this.appI18n.gameStr(this.isWin() ? "history_result_0" : "history_result_1");
    return this.symbol.getHistoryTextureUrl(gameImageName);
  });
  copyClicked = output();
  // 公平性驗證讀取歷史紀錄與驗證資料
  seedClicked = output();
  verifyClicked = output();
  provableClicked = output();
  getGameTitle = computed(() => this.appI18n.gameStr("game_title") ?? "Chicken");
  copyToastMessage = this.appI18n.computed("og_fair_copy", "Copied");
  serverSeedToast = viewChild("serverSeedToast");
  serverSeedHashToast = viewChild("serverSeedHashToast");
  clientSeedToast = viewChild("clientSeedToast");
  nonceToast = viewChild("nonceToast");
  difficultyOptionLabel = computed(() => {
    const risk = this.eventObj()?.risk;
    if (risk === void 0)
      return "--";
    return this.appI18n.gameStr(`bet_info_level_0${risk + 1}`) ?? OgChickenDifficultyEnum[risk];
  });
  /** eventObj 裡面的 risk 對應到 Game30011Difficulty 的字串值，供 verify 計算使用 */
  verifyDifficulty = computed(() => {
    const risk = this.eventObj()?.risk;
    return risk !== void 0 ? OgChickenDifficultyEnum[risk] : "easy";
  });
  stepNumber = computed(() => {
    const eventObj = this.eventObj();
    if (eventObj.cashout !== void 0) {
      return eventObj.cashout;
    } else if (eventObj.dead !== void 0) {
      return eventObj.dead;
    } else {
      return eventObj.steps?.length ?? 0;
    }
  });
  stepNumberText = computed(() => {
    const stepNumber = this.stepNumber();
    return stepNumber > 0 ? stepNumber.toString() : "--";
  });
  winMultiplierText = computed(() => {
    const steps = this.eventObj()?.steps;
    if (steps && steps.length > 0) {
      const lastStep = steps[steps.length - 1];
      const stepRate = Number(lastStep.step_rate.split("_")[0]);
      return stepRate > 0 ? stepRate.toString() + "x" : "--";
    }
    return "--";
  });
  bonusWheelPairs = computed(() => {
    const steps = this.eventObj()?.steps;
    const ret = [];
    if (steps && steps.length > 0) {
      for (const step of steps) {
        if (step.wheels) {
          for (const wheel of step.wheels) {
            const [multiplier, score, position] = wheel.split("_");
            ret.push({ rate: multiplier, score: calc.s2c(Number(score)), position: Number(position) });
          }
        }
      }
    }
    return ret;
  });
  /** bonusWheel的rate列表 ex, 1, 2, 4 */
  bonusRateText = computed(() => {
    const bonusWheelPairs = this.bonusWheelPairs();
    if (bonusWheelPairs.length > 0) {
      const rates = bonusWheelPairs.map((pair) => pair.rate);
      return rates.join("x, ") + "x";
    }
    return "--";
  });
  /** bonusWheel的score列表 ex, 100, 200, 400 */
  bonusScoreText = computed(() => {
    const bonusWheelPairs = this.bonusWheelPairs();
    if (bonusWheelPairs.length > 0) {
      const scores = bonusWheelPairs.map((pair) => pair.score);
      return scores.join(", ");
    }
    return "--";
  });
  bonusWheelPositionText = computed(() => {
    const bonusWheelPairs = this.bonusWheelPairs();
    if (bonusWheelPairs.length > 0) {
      const positions = bonusWheelPairs.map((pair) => pair.position);
      return positions.join(", ");
    }
    return "--";
  });
  /** 死掉的格數 */
  deathPoint = computed(() => {
    const eventObj = this.eventObj();
    if (eventObj.dead !== void 0) {
      return eventObj.dead;
    } else {
      return null;
    }
  });
  /** 死掉的格數 */
  deathPointText = computed(() => {
    const deathPoint = this.deathPoint();
    return deathPoint !== null ? deathPoint.toString() : "--";
  });
  /** 本局能獲得的最大倍率, 通常是死亡前一格的倍率 */
  maxMultiplierText = computed(() => {
    const eventObj = this.eventObj();
    if (eventObj.max !== void 0) {
      return eventObj.max + "x";
    }
    return "--";
  });
  gameServerSeedText = computed(() => this.seed()?.server_seed || "");
  validServerSeed = computed(() => this.seed()?.server_seed.length > 0);
  gameServerSeedHashedText = computed(() => this.seed()?.server_seed_hash || "");
  gameClientSeedText = computed(() => this.seed()?.client_seed || "");
  gameNonceText = computed(() => {
    const eventObj = this.eventObj();
    return eventObj?.nonce !== void 0 ? eventObj.nonce.toString() : "";
  });
  clickServerSeedCopy(event) {
    return __async(this, null, function* () {
      this.copyClicked.emit(this.seed()?.server_seed || "");
      event?.stopPropagation();
      try {
        yield navigator.clipboard.writeText(this.seed()?.server_seed || "");
      } catch {
      }
      this.serverSeedToast()?.show();
    });
  }
  clickServerSeedHashCopy(event) {
    return __async(this, null, function* () {
      this.copyClicked.emit(this.seed()?.server_seed_hash || "");
      event?.stopPropagation();
      try {
        yield navigator.clipboard.writeText(this.seed()?.server_seed_hash || "");
      } catch {
      }
      this.serverSeedHashToast()?.show();
    });
  }
  clickClientSeedCopy(event) {
    return __async(this, null, function* () {
      this.copyClicked.emit(this.seed()?.client_seed || "");
      event?.stopPropagation();
      try {
        yield navigator.clipboard.writeText(this.seed()?.client_seed || "");
      } catch {
      }
      this.clientSeedToast()?.show();
    });
  }
  clickNonceCopy(event) {
    return __async(this, null, function* () {
      const eventObj = this.eventObj();
      this.copyClicked.emit(eventObj?.nonce !== void 0 ? eventObj.nonce.toString() : "");
      event?.stopPropagation();
      try {
        yield navigator.clipboard.writeText(eventObj?.nonce !== void 0 ? eventObj.nonce.toString() : "");
      } catch {
      }
      this.nonceToast()?.show();
    });
  }
  clickSeed() {
    this.seedClicked.emit();
  }
  clickVerify() {
    this.verifyClicked.emit({
      serverSeed: this.gameServerSeedText(),
      serverSeedHashed: this.gameServerSeedHashedText(),
      clientSeed: this.gameClientSeedText(),
      nonce: this.gameNonceText(),
      difficulty: this.verifyDifficulty(),
      rtp: this.eventObj()?.rtp?.toString() ?? "0"
    });
  }
  clickProvable() {
    this.provableClicked.emit();
  }
  static \u0275fac = function ApOgHistoryDetailChickenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApOgHistoryDetailChickenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApOgHistoryDetailChickenComponent, selectors: [["ap-og-history-detail-chicken"]], viewQuery: function ApOgHistoryDetailChickenComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.serverSeedToast, _c0, 5);
      \u0275\u0275viewQuerySignal(ctx.serverSeedHashToast, _c1, 5);
      \u0275\u0275viewQuerySignal(ctx.clientSeedToast, _c2, 5);
      \u0275\u0275viewQuerySignal(ctx.nonceToast, _c3, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(4);
    }
  }, inputs: { isDetailThemeDark: [1, "isDetailThemeDark"], isWin: [1, "isWin"], eventString: [1, "eventString"], seed: [1, "seed"], enableProvableLink: [1, "enableProvableLink"] }, outputs: { copyClicked: "copyClicked", seedClicked: "seedClicked", verifyClicked: "verifyClicked", provableClicked: "provableClicked" }, decls: 51, vars: 77, consts: [["serverSeedHashToast", ""], ["clientSeedToast", ""], ["nonceToast", ""], ["serverSeedToast", ""], [1, "shrink-0", "mx-auto", "sm:size-28", "size-24", "object-cover", "mb-4", 3, "src"], [1, "flex", "w-full", "flex-col", "gap-4", "lg:flex-row", "overflow-y-auto"], [2, "border", "1px solid #3f3f46"], [1, "flex", "space-x-2", "items-center", "text-slate-300"], [1, "info-icon"], ["type", "game", 1, "pointer-events-none", 3, "label", "currencyImage", "value", "disabled"], ["type", "serverSeed", 3, "currencyImage", "label", "value", "disabled"], ["name", "scale", 1, "info-icon"], [1, "flex", "gap-2", "items-end"], [1, "min-w-0", "flex-1", 3, "disabled", "label", "placeholder", "value"], [1, "relative", "inline-flex"], [1, "min-w-0", "flex-1", 3, "disabled", "label", "value"], [1, "absolute", "bottom-full", "left-1/2", "-translate-x-1/2", "mb-2", "pointer-events-none"], ["accentColor", "slate", 3, "message"], ["accentColor", "slate", 3, "clicked", "icon"], ["variant", "origin", 3, "message"], [1, "flex-col", "flex", "space-y-2", "pt-4"], [1, "mx-auto", "cursor-pointer", "text-zinc-400", "underline"], [1, "mx-auto", "cursor-pointer", "text-zinc-400", "underline", 3, "click"]], template: function ApOgHistoryDetailChickenComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "img", 4);
      \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "div", 7);
      \u0275\u0275element(4, "ap-icon-chicken", 8);
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "ap-og-input", 9);
      \u0275\u0275pipe(8, "appI18n");
      \u0275\u0275element(9, "ap-og-input", 10)(10, "ap-og-input", 10)(11, "ap-og-input", 10)(12, "ap-og-input", 10)(13, "ap-og-input", 10)(14, "ap-og-input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6)(16, "div", 7);
      \u0275\u0275element(17, "ap-icon", 11);
      \u0275\u0275elementStart(18, "h3");
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "appI18n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 12);
      \u0275\u0275element(22, "ap-input-box", 13);
      \u0275\u0275pipe(23, "appI18n");
      \u0275\u0275pipe(24, "appI18n");
      \u0275\u0275conditionalCreate(25, ApOgHistoryDetailChickenComponent_Conditional_25_Template, 5, 2, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 12);
      \u0275\u0275element(27, "ap-input-box", 15);
      \u0275\u0275pipe(28, "appI18n");
      \u0275\u0275elementStart(29, "div", 14)(30, "div", 16);
      \u0275\u0275element(31, "ap-toast", 17, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "ap-button", 18);
      \u0275\u0275listener("clicked", function ApOgHistoryDetailChickenComponent_Template_ap_button_clicked_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clickServerSeedHashCopy($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 12);
      \u0275\u0275element(35, "ap-input-box", 15);
      \u0275\u0275pipe(36, "appI18n");
      \u0275\u0275elementStart(37, "div", 14)(38, "div", 16);
      \u0275\u0275element(39, "ap-toast", 17, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "ap-button", 18);
      \u0275\u0275listener("clicked", function ApOgHistoryDetailChickenComponent_Template_ap_button_clicked_41_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clickClientSeedCopy($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 12);
      \u0275\u0275element(43, "ap-input-box", 15);
      \u0275\u0275pipe(44, "appI18n");
      \u0275\u0275elementStart(45, "div", 14)(46, "div", 16);
      \u0275\u0275element(47, "ap-toast", 19, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "ap-button", 18);
      \u0275\u0275listener("clicked", function ApOgHistoryDetailChickenComponent_Template_ap_button_clicked_49_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clickNonceCopy($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(50, ApOgHistoryDetailChickenComponent_Conditional_50_Template, 6, 5, "div", 20);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("src", ctx.historyDetailImage(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275classMap("w-full flex-1 space-y-4 rounded-xl p-4 " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.getGameTitle());
      \u0275\u0275advance();
      \u0275\u0275property("label", \u0275\u0275pipeBind2(8, 56, "og_guide_4", "Difficulty"))("currencyImage", false)("value", ctx.difficultyOptionLabel())("disabled", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("currencyImage", false)("label", ctx.appI18n.gameStr("history_event_0") ?? ctx.appI18n.instant("history_event_0", "Step Number"))("value", ctx.stepNumberText())("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275property("currencyImage", false)("label", ctx.appI18n.gameStr("history_event_1") ?? ctx.appI18n.instant("history_event_1", "Win Multiplier"))("value", ctx.winMultiplierText())("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275property("currencyImage", false)("label", ctx.appI18n.gameStr("history_event_2") ?? ctx.appI18n.instant("history_event_2", "Bonus Point"))("value", ctx.bonusWheelPositionText())("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275property("currencyImage", false)("label", ctx.appI18n.gameStr("history_event_3") ?? ctx.appI18n.instant("history_event_3", "Bonus Multiplier"))("value", ctx.bonusRateText())("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275property("currencyImage", false)("label", ctx.appI18n.gameStr("history_event_4") ?? ctx.appI18n.instant("history_event_4", "Death Point"))("value", ctx.deathPointText())("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275property("currencyImage", false)("label", ctx.appI18n.gameStr("history_event_5") ?? ctx.appI18n.instant("history_event_5", "Max Multiplier"))("value", ctx.maxMultiplierText())("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275classMap("w-full flex-1 space-y-4 rounded-xl p-4 " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 59, "og_fair_hisTitle", "Provable Fairness"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", true)("label", \u0275\u0275pipeBind2(23, 62, "og_fair_serverSeed", "Server Seed"))("placeholder", \u0275\u0275pipeBind2(24, 65, "og_fair_changeSeedInfo", "Seed hasn\u2019t been changed yet."))("value", ctx.gameServerSeedText());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.validServerSeed() ? 25 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", true)("label", \u0275\u0275pipeBind2(28, 68, "og_fair_his_serverSeedHashed", "Server Seed(Hashed)"))("value", ctx.gameServerSeedHashedText());
      \u0275\u0275advance(4);
      \u0275\u0275property("message", ctx.copyToastMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", "copy");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", true)("label", \u0275\u0275pipeBind2(36, 71, "og_fair_clientSeed", "Client Seed"))("value", ctx.gameClientSeedText());
      \u0275\u0275advance(4);
      \u0275\u0275property("message", ctx.copyToastMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", "copy");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", true)("label", \u0275\u0275pipeBind2(44, 74, "og_fair_nonce", "Nonce"))("value", ctx.gameNonceText());
      \u0275\u0275advance(4);
      \u0275\u0275property("message", ctx.copyToastMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", "copy");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.enableProvableLink() ? 50 : -1);
    }
  }, dependencies: [CommonModule, ApIconComponent, ApButtonComponent, ApInputBox, ApToastComponent, AppI18nPipe, ApOgInputComponent, ApIconChickenComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApOgHistoryDetailChickenComponent, [{
    type: Component,
    args: [{ selector: "ap-og-history-detail-chicken", imports: [CommonModule, ApIconComponent, ApButtonComponent, ApInputBox, ApToastComponent, AppI18nPipe, ApOgInputComponent, ApIconChickenComponent], template: `<img
  [src]="historyDetailImage()"
  class="shrink-0 mx-auto sm:size-28 size-24 object-cover mb-4"
/>
<div class="flex w-full flex-col gap-4 lg:flex-row overflow-y-auto">
  <!-- Game History -->
  <div
    [class]="
      'w-full flex-1 space-y-4 rounded-xl p-4 ' +
      (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
    " style="border: 1px solid #3f3f46;"
  >
    <div class="flex space-x-2 items-center text-slate-300">
      <ap-icon-chicken class="info-icon" />
      <h3>{{ getGameTitle() }}</h3>
    </div>
    <ap-og-input
      [label]="'og_guide_4' | appI18n: 'Difficulty'"
      [currencyImage]="false"
      class="pointer-events-none"
      type="game"
      [value]="difficultyOptionLabel()"
      [disabled]="true"
    />
    <ap-og-input
      type="serverSeed"
      [currencyImage]="false"
      [label]="
        appI18n.gameStr('history_event_0') ??
        appI18n.instant('history_event_0', 'Step Number')
      "
      [value]="stepNumberText()"
      [disabled]="true"
    />
    <ap-og-input
      type="serverSeed"
      [currencyImage]="false"
      [label]="
        appI18n.gameStr('history_event_1') ??
        appI18n.instant('history_event_1', 'Win Multiplier')
      "
      [value]="winMultiplierText()"
      [disabled]="true"
    />
    <ap-og-input
      type="serverSeed"
      [currencyImage]="false"
      [label]="
        appI18n.gameStr('history_event_2') ??
        appI18n.instant('history_event_2', 'Bonus Point')
      "
      [value]="bonusWheelPositionText()"
      [disabled]="true"
    />
    <ap-og-input
      type="serverSeed"
      [currencyImage]="false"
      [label]="
        appI18n.gameStr('history_event_3') ??
        appI18n.instant('history_event_3', 'Bonus Multiplier')
      "
      [value]="bonusRateText()"
      [disabled]="true"
    />
    <ap-og-input
      type="serverSeed"
      [currencyImage]="false"
      [label]="
        appI18n.gameStr('history_event_4') ??
        appI18n.instant('history_event_4', 'Death Point')
      "
      [value]="deathPointText()"
      [disabled]="true"
    />
    <ap-og-input
      type="serverSeed"
      [currencyImage]="false"
      [label]="
        appI18n.gameStr('history_event_5') ??
        appI18n.instant('history_event_5', 'Max Multiplier')
      "
      [value]="maxMultiplierText()"
      [disabled]="true"
    />
  </div>
  <!-- \u516C\u5E73\u6027\u9A57\u8B49 -->
  <div
    [class]="
      'w-full flex-1 space-y-4 rounded-xl p-4 ' +
      (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
    "  style="border: 1px solid #3f3f46;"
  >
    <div class="flex space-x-2 items-center text-slate-300">
      <ap-icon name="scale" class="info-icon" />
      <h3>{{ "og_fair_hisTitle" | appI18n: "Provable Fairness" }}</h3>
    </div>

    <div class="flex gap-2 items-end">
      <ap-input-box
        class="min-w-0 flex-1"
        [disabled]="true"
        [label]="'og_fair_serverSeed' | appI18n: 'Server Seed'"
        [placeholder]="'og_fair_changeSeedInfo' | appI18n: 'Seed hasn\u2019t been changed yet.'"
        [value]="gameServerSeedText()"
      />
      @if (validServerSeed()) {
        <div class="relative inline-flex">
          <div
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none"
          >
            <ap-toast
              #serverSeedToast
              [message]="copyToastMessage()"
              accentColor="slate"
            />
          </div>
          <ap-button
            [icon]="'copy'"
            accentColor="slate"
            (clicked)="clickServerSeedCopy($event)"
          />
        </div>
      }
    </div>

    <div class="flex gap-2 items-end">
      <ap-input-box
        class="min-w-0 flex-1"
        [disabled]="true"
        [label]="
          'og_fair_his_serverSeedHashed' | appI18n: 'Server Seed(Hashed)'
        "
        [value]="gameServerSeedHashedText()"
      />
      <div class="relative inline-flex">
        <div
          class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none"
        >
          <ap-toast
            #serverSeedHashToast
            [message]="copyToastMessage()"
            accentColor="slate"
          />
        </div>
        <ap-button
          [icon]="'copy'"
          accentColor="slate"
          (clicked)="clickServerSeedHashCopy($event)"
        />
      </div>
    </div>
    <div class="flex gap-2 items-end">
      <ap-input-box
        class="min-w-0 flex-1"
        [disabled]="true"
        [label]="'og_fair_clientSeed' | appI18n: 'Client Seed'"
        [value]="gameClientSeedText()"
      />
      <div class="relative inline-flex">
        <div
          class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none"
        >
          <ap-toast
            #clientSeedToast
            [message]="copyToastMessage()"
            accentColor="slate"
          />
        </div>
        <ap-button
          [icon]="'copy'"
          accentColor="slate"
          (clicked)="clickClientSeedCopy($event)"
        />
      </div>
    </div>
    <div class="flex gap-2 items-end">
      <ap-input-box
        class="min-w-0 flex-1"
        [disabled]="true"
        [label]="'og_fair_nonce' | appI18n: 'Nonce'"
        [value]="gameNonceText()"
      />
      <div class="relative inline-flex">
        <div
          class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none"
        >
          <ap-toast
            #nonceToast
            [message]="copyToastMessage()"
            variant="origin"
          />
        </div>
        <ap-button
          [icon]="'copy'"
          accentColor="slate"
          (clicked)="clickNonceCopy($event)"
        />
      </div>
    </div>
    @if (enableProvableLink()) {
      <div class="flex-col flex space-y-2 pt-4">
        @if (validServerSeed()) {
          <button
            class="mx-auto cursor-pointer text-zinc-400 underline"
            (click)="clickVerify()"
          >
            {{
              "og_fair_verifyBet"
                | appI18n: "Verify Bet"
            }}
          </button>        
        }
        @else {
          <button
            class="mx-auto cursor-pointer text-zinc-400 underline"
            (click)="clickSeed()"
          >
            {{
              "og_fair_rotateInfo"
                | appI18n: "Change your seed pairings to verify this bet. "
            }}
          </button>
        }

        <button
          class="mx-auto cursor-pointer text-zinc-400 underline"
          (click)="clickProvable()"
        >
          {{ "og_fair_viewInfo" | appI18n: "What is Provable Fairness?" }}
        </button>
      </div>
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApOgHistoryDetailChickenComponent, { className: "ApOgHistoryDetailChickenComponent", filePath: "src/app/components/ap-og-history-detail-chicken/ap-og-history-detail-chicken.component.ts", lineNumber: 27 });
})();

// src/app/components/ap-og-history-detail-top/ap-og-history-detail-top.component.ts
var _c02 = (a0, a1) => ({ hidden: a0, "whitespace-nowrap": a1 });
function ApOgHistoryDetailTopComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-select", 25);
    \u0275\u0275listener("onSelect", function ApOgHistoryDetailTopComponent_Conditional_15_Template_ap_select_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectRound($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("accentColor", "yellow")("disabled", ctx_r1.roundSelectorDisabled())("options", ctx_r1.roundOptions())("selected", ctx_r1.currentRound().toString());
  }
}
var ApOgHistoryDetailTopComponent = class _ApOgHistoryDetailTopComponent {
  i18n = inject(AppI18nService);
  isDetailThemeDark = input(false);
  /** Header: 遊戲名稱 + round 資訊 */
  displayName = this.i18n.computed("history_normal_game", "Normal Spin");
  roundNumberText = input("");
  ticket = input("");
  showRoundSelector = input(false);
  roundSelectorDisabled = input(false);
  roundOptions = input([]);
  currentRound = input(0);
  /** Top bar: Bet column */
  betSummaryTitle = this.i18n.computed("history_bet", "Bet");
  bet = input(0);
  lineBet = input(null);
  winTitle = this.i18n.computed("history_win", "Win");
  loseTitle = this.i18n.computed("history_lose", "Lose");
  /** Top bar: Win/Lose column */
  isWin = input(false);
  winSummaryTitle = computed(() => {
    return this.isWin() ? this.winTitle() : this.loseTitle();
  });
  /* Win column */
  win = input(0);
  /** Win column 顯示的文字 */
  winText = computed(() => {
    const win = this.win();
    if (win === 0)
      return "--";
    return MoneyText.format(win);
  });
  /** Top bar: Balance column */
  balanceTitle = this.i18n.computed("history_balance", "Balance");
  balanceNew = input(null);
  balanceNewIsHidden = computed(() => this.balanceNew() === null);
  balanceNewText = computed(() => {
    const balance = this.balanceNew();
    if (balance === null)
      return "--";
    return MoneyText.format(balance);
  });
  balanceOld = input(null);
  balanceOldIsHidden = computed(() => this.balanceOld() === null);
  balanceOldText = computed(() => {
    const balance = this.balanceOld();
    if (balance === null)
      return "--";
    return MoneyText.format(balance);
  });
  /** 判斷數字是否超過9位數，若超過則顯示為長數字格式 */
  isLongAmount(value) {
    if (value === null)
      return false;
    return dec.comma(value).replace(/\D/g, "").length > 9;
  }
  balanceOldIsLong = computed(() => this.isLongAmount(this.balanceOld()));
  balanceNewIsLong = computed(() => this.isLongAmount(this.balanceNew()));
  ticketCopyClicked = output();
  roundSelected = output();
  clickCopyTicket(event) {
    this.ticketCopyClicked.emit(event);
  }
  selectRound(value) {
    this.roundSelected.emit(value);
  }
  static \u0275fac = function ApOgHistoryDetailTopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApOgHistoryDetailTopComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApOgHistoryDetailTopComponent, selectors: [["ap-og-history-detail-top"]], inputs: { isDetailThemeDark: [1, "isDetailThemeDark"], roundNumberText: [1, "roundNumberText"], ticket: [1, "ticket"], showRoundSelector: [1, "showRoundSelector"], roundSelectorDisabled: [1, "roundSelectorDisabled"], roundOptions: [1, "roundOptions"], currentRound: [1, "currentRound"], bet: [1, "bet"], lineBet: [1, "lineBet"], isWin: [1, "isWin"], win: [1, "win"], balanceNew: [1, "balanceNew"], balanceOld: [1, "balanceOld"] }, outputs: { ticketCopyClicked: "ticketCopyClicked", roundSelected: "roundSelected" }, decls: 44, vars: 34, consts: [[2, "border", "1px solid #3f3f46"], [1, "px-2", "py-2", "sm:px-4", "sm:py-2", "justify-center"], [1, "grid", "gap-2", "sm:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)]", "sm:items-center", "sm:gap-6"], [1, "min-w-0", "text-center", "sm:text-left"], [1, "mt-1", "truncate", "font-medium", "text-zinc-100"], [1, "min-w-0", "text-center", "sm:justify-self-center"], [1, "space-y-1"], [1, "inline-flex", "max-w-full", "items-center", "gap-3", "px-3", "py-1", "text-zinc-400"], [1, "flex", "shrink-0", "cursor-pointer", "items-center", "justify-center", "space-x-1", "transition-colors", "border-bottom-zinc", 3, "click"], ["name", "copy", 1, "size-4", "shrink-0"], [1, "truncate"], [1, "min-w-0", "text-center"], [1, "history-detail-header-actions", "mt-1.5", "flex", "flex-wrap", "items-center", "sm:justify-end", "justify-center", "gap-3"], [1, "history-detail-round-select", "w-full", "max-w-[16rem]", "sm:w-44", "md:w-52", 3, "accentColor", "disabled", "options", "selected"], [1, "history-ticket-divider"], [1, "top-bar-summary", "grid", "grid-cols-2", "sm:grid-cols-3"], [1, "font-semibold", "uppercase", "tracking-wider", "text-zinc-500"], [1, "relative", "mt-2", "flex", "min-w-0", "flex-row", "items-center", "justify-start", "gap-2.5", "sm:flex-col", "sm:gap-1"], [1, "font-semibold", "text-white"], [1, "text-zinc-400"], [1, "relative", "mt-2", "flex", "min-w-0", "flex-row", "items-center", "justify-center", "gap-2.5", "sm:flex-col", "sm:gap-1"], [1, "font-semibold", "w-full", "text-center", 3, "ngClass"], [1, "invisible", "absolute", "opacity-0", "pointer-events-none", "sm:static", "sm:opacity-100"], [1, "font-semibold", "text-white", 3, "ngClass"], [1, "text-zinc-400", 3, "ngClass"], [1, "history-detail-round-select", "w-full", "max-w-[16rem]", "sm:w-44", "md:w-52", 3, "onSelect", "accentColor", "disabled", "options", "selected"]], template: function ApOgHistoryDetailTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "button", 8);
      \u0275\u0275listener("click", function ApOgHistoryDetailTopComponent_Template_button_click_9_listener($event) {
        return ctx.clickCopyTicket($event);
      });
      \u0275\u0275element(10, "ap-icon", 9);
      \u0275\u0275elementStart(11, "p", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
      \u0275\u0275conditionalCreate(15, ApOgHistoryDetailTopComponent_Conditional_15_Template, 1, 4, "ap-select", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(16, "div", 14);
      \u0275\u0275elementStart(17, "div", 15)(18, "div")(19, "h6", 16);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 17)(22, "h4", 18);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "moneyText");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h5", 19);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "moneyText");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div")(29, "h6", 16);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 20)(32, "h4", 21);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h4", 22);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div")(37, "h6", 16);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 20)(40, "h4", 23);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h5", 24);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classMap("history-ticket-card relative rounded-xl " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.displayName(), "", ctx.roundNumberText(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.ticket());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showRoundSelector() ? 15 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.betSummaryTitle(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 24, ctx.bet()), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 26, ctx.lineBet()), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 sm:border-r " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.winSummaryTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.isWin() ? "text-emerald-400" : "text-white");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.winText(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.winText(), " ");
      \u0275\u0275advance();
      \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 col-span-2 border-t sm:col-span-1 sm:border-l sm:border-t-0 sm:border-r-0 sm:border-l-0 rounded-br-2xl rounded-bl-2xl sm:rounded-br-2xl sm:rounded-bl-none " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.balanceTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c02, ctx.balanceNewIsHidden(), ctx.balanceNewIsLong()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.balanceNewText(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c02, ctx.balanceOldIsHidden(), ctx.balanceOldIsLong()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.balanceOldText(), " ");
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent, ApSelectComponent, MoneyTextPipe], styles: ["\n\n.history-ticket-card[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 0 #ffffff08;\n}\n.history-ticket-divider[_ngcontent-%COMP%] {\n  position: relative;\n  border-top: 1px dashed #3f3f46;\n}\n@media (min-width: 640px) {\n  .history-detail-header-actions[_ngcontent-%COMP%] {\n    border-top: none;\n    padding-top: 0;\n  }\n  .history-detail-round-select[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\n.top-bar-summary[_ngcontent-%COMP%] {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.top-bar-summary-cell[_ngcontent-%COMP%] {\n  border-color: #3f3f46;\n}\n/*# sourceMappingURL=ap-og-history-detail-top.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApOgHistoryDetailTopComponent, [{
    type: Component,
    args: [{ selector: "ap-og-history-detail-top", imports: [CommonModule, ApIconComponent, ApSelectComponent, MoneyTextPipe], template: `<div
  [class]="
    'history-ticket-card relative rounded-xl ' +
    (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
  " style="border: 1px solid #3f3f46;"
>
  <!-- Header: Game Info, Date, Actions -->
  <div class="px-2 py-2 sm:px-4 sm:py-2 justify-center">
    <div
      class="grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)] sm:items-center sm:gap-6"
    >
      <div class="min-w-0 text-center sm:text-left">
        <h5 class="mt-1 truncate font-medium text-zinc-100">
          {{ displayName() }}{{ roundNumberText() }}
        </h5>
      </div>
      <!-- Mobile -->
      <div class="min-w-0 text-center sm:justify-self-center">
        <div class="space-y-1">
          <div
            class="inline-flex max-w-full items-center gap-3 px-3 py-1 text-zinc-400"
          >
            <button
              class="flex shrink-0 cursor-pointer items-center justify-center space-x-1 transition-colors border-bottom-zinc"
              (click)="clickCopyTicket($event)"
            >
              <ap-icon name="copy" class="size-4 shrink-0" />
              <p class="truncate">{{ ticket() }}</p>
            </button>
          </div>
        </div>
      </div>
      <!-- Desktop -->
      <div class="min-w-0 text-center">
        <div
          class="history-detail-header-actions mt-1.5 flex flex-wrap items-center sm:justify-end justify-center gap-3"
        >
          @if (showRoundSelector()) {
            <ap-select
              class="history-detail-round-select w-full max-w-[16rem] sm:w-44 md:w-52"
              [accentColor]="'yellow'"
              [disabled]="roundSelectorDisabled()"
              [options]="roundOptions()"
              [selected]="currentRound().toString()"
              (onSelect)="selectRound($event)"
            />
          }
        </div>
      </div>
    </div>
  </div>

  <!-- Top Bar: Bet, Balance, Win -->
  <div class="history-ticket-divider"></div>
  <div class="top-bar-summary grid grid-cols-2 sm:grid-cols-3">
    <!-- Bet column -->
    <div
      [class]="
        'top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl ' +
        (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
      "
    >
      <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
        {{ betSummaryTitle() }}
      </h6>
      <div
        class="relative mt-2 flex min-w-0 flex-row items-center justify-start gap-2.5 sm:flex-col sm:gap-1"
      >
        <h4 class="font-semibold text-white">
          {{ bet() | moneyText }}
        </h4>
        <h5 class="text-zinc-400">
          {{ lineBet()! | moneyText }}
        </h5>
      </div>
    </div>

    <!-- Win/Lose column -->
    <div
      [class]="
        'top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 sm:border-r ' +
        (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
      "
    >
      <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
        {{ winSummaryTitle() }}
      </h6>
      <div
        class="relative mt-2 flex min-w-0 flex-row items-center justify-center gap-2.5 sm:flex-col sm:gap-1"
      >
        <h4
          class="font-semibold w-full text-center"
          [ngClass]="isWin() ? 'text-emerald-400' : 'text-white'"
        >
          {{ winText() }}
        </h4>
        <h4
          class="invisible absolute opacity-0 pointer-events-none sm:static sm:opacity-100"
        >
          {{ winText() }}
        </h4>
      </div>
    </div>

    <!-- Balance column -->
    <div
      [class]="
        'top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 col-span-2 border-t sm:col-span-1 sm:border-l sm:border-t-0 sm:border-r-0 sm:border-l-0 rounded-br-2xl rounded-bl-2xl sm:rounded-br-2xl sm:rounded-bl-none ' +
        (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
      "
    >
      <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
        {{ balanceTitle() }}
      </h6>
      <div
        class="relative mt-2 flex min-w-0 flex-row items-center justify-center gap-2.5 sm:flex-col sm:gap-1"
      >
        <h4
          class="font-semibold text-white"
          [ngClass]="{
            hidden: balanceNewIsHidden(),
            'whitespace-nowrap': balanceNewIsLong(),
          }"
        >
          {{ balanceNewText() }}
        </h4>
        <h5
          class="text-zinc-400"
          [ngClass]="{
            hidden: balanceOldIsHidden(),
            'whitespace-nowrap': balanceOldIsLong(),
          }"
        >
          {{ balanceOldText() }}
        </h5>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/components/ap-og-history-detail-top/ap-og-history-detail-top.component.css */\n.history-ticket-card {\n  box-shadow: inset 0 1px 0 #ffffff08;\n}\n.history-ticket-divider {\n  position: relative;\n  border-top: 1px dashed #3f3f46;\n}\n@media (min-width: 640px) {\n  .history-detail-header-actions {\n    border-top: none;\n    padding-top: 0;\n  }\n  .history-detail-round-select {\n    padding-top: 0;\n  }\n}\n.top-bar-summary {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.top-bar-summary-cell {\n  border-color: #3f3f46;\n}\n/*# sourceMappingURL=ap-og-history-detail-top.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApOgHistoryDetailTopComponent, { className: "ApOgHistoryDetailTopComponent", filePath: "src/app/components/ap-og-history-detail-top/ap-og-history-detail-top.component.ts", lineNumber: 16 });
})();

export {
  INPUT_TYPE_CONFIG,
  ORIGINAL_BOTTOM_PANEL_INPUT_TYPES,
  ApOgInputComponent,
  OgChickenDifficultyEnum,
  OgChickenGameStage,
  ApOgHistoryDetailChickenComponent,
  ApOgHistoryDetailTopComponent
};
//# sourceMappingURL=chunk-BN2VWTMK.js.map
