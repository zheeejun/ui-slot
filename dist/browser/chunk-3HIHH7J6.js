import {
  ApIconComponent
} from "./chunk-YL37OG34.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QGU3BS3L.js";

// src/ap-components-lib/ap-button/ap-button.component.ts
var _c0 = ["*"];
function ApButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "ap-icon", 4);
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.iconSizeClass);
  }
}
function ApButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.iconSizeClass);
    \u0275\u0275property("name", ctx_r0.icon());
  }
}
function ApButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label());
  }
}
function ApButtonComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.iconSizeClass);
    \u0275\u0275property("name", ctx_r0.icon());
  }
}
var FILLED_COLOR_CLASSES = {
  orange: {
    base: ["bg-orange-500", "text-white", "border-orange-400"],
    interactive: ["hover:bg-orange-600", "active:bg-orange-700"],
    shadow: ["shadow-lg", "shadow-orange-500/30"]
  },
  yellow: {
    base: ["bg-yellow-400", "text-black", "border-yellow-300"],
    interactive: ["hover:bg-yellow-500", "active:bg-yellow-600"],
    shadow: ["shadow-lg", "shadow-yellow-600/30"]
  },
  purple: {
    base: ["bg-purple-400", "text-black", "border-purple-300"],
    interactive: ["hover:bg-purple-500", "active:bg-purple-600"],
    shadow: ["shadow-lg", "shadow-purple-500/30"]
  },
  "purple-dark": {
    base: ["bg-purple-900", "text-purple-200", "border-purple-700"],
    interactive: ["hover:bg-purple-950", "active:bg-purple-950"],
    shadow: ["shadow-lg", "shadow-purple-500/30"]
  },
  violet: {
    base: ["bg-violet-600", "text-white", "border-violet-500"],
    interactive: ["hover:bg-violet-700", "active:bg-violet-800"],
    shadow: ["shadow-lg", "shadow-violet-500/30"]
  },
  pink: {
    base: ["bg-pink-600", "text-white", "border-pink-500"],
    interactive: ["hover:bg-pink-700", "active:bg-pink-800"],
    shadow: ["shadow-lg", "shadow-pink-600/30"]
  },
  slate: {
    base: ["bg-slate-700", "text-white", "border-slate-600"],
    interactive: ["hover:bg-slate-600", "active:bg-slate-700"],
    shadow: ["shadow-lg", "shadow-slate-700/30"]
  },
  green: {
    base: ["bg-green-500", "text-black", "border-green-400"],
    interactive: ["hover:bg-green-600", "active:bg-green-700"],
    shadow: ["shadow-lg", "shadow-green-500/30"]
  },
  sky: {
    base: ["bg-sky-500", "text-black", "border-sky-400"],
    interactive: ["hover:bg-sky-600", "active:bg-sky-700"],
    shadow: ["shadow-lg", "shadow-sky-500/30"]
  },
  "orange-dark": {
    base: ["bg-orange-900", "text-white", "border-orange-800"],
    interactive: ["hover:bg-orange-800", "active:bg-orange-900"],
    shadow: ["shadow-lg", "shadow-orange-500/30"]
  },
  red: {
    base: ["bg-red-500", "text-white", "border-red-400"],
    interactive: ["hover:bg-red-600", "active:bg-red-700"],
    shadow: ["shadow-lg", "shadow-red-500/30"]
  },
  zinc: {
    base: ["bg-zinc-500", "text-black", "border-zinc-400"],
    interactive: ["hover:bg-zinc-600", "active:bg-zinc-700"],
    shadow: ["shadow-lg", "shadow-zinc-500/30"]
  },
  white: {
    base: ["bg-white", "text-black", "border-0"],
    interactive: ["hover:bg-zinc-100", "active:bg-zinc-200"],
    shadow: ["shadow-lg", "shadow-zinc-500/30"]
  }
};
var TEXT_COLOR_CLASSES = {
  orange: {
    base: ["text-orange-500"],
    interactive: ["hover:bg-orange-500/10"]
  },
  yellow: {
    base: ["text-yellow-500"],
    interactive: ["hover:bg-yellow-500/10"]
  },
  purple: {
    base: ["text-purple-400"],
    interactive: ["hover:bg-purple-400/10"]
  },
  "purple-dark": {
    base: ["text-purple-400"],
    interactive: ["hover:bg-purple-400/10"]
  },
  violet: {
    base: ["text-violet-600"],
    interactive: ["hover:bg-violet-600/10"]
  },
  pink: { base: ["text-pink-600"], interactive: ["hover:bg-pink-600/10"] },
  slate: { base: ["text-slate-500"], interactive: ["hover:bg-slate-500/10"] },
  green: { base: ["text-green-500"], interactive: ["hover:bg-green-500/10"] },
  sky: { base: ["text-sky-500"], interactive: ["hover:bg-sky-500/10"] },
  "orange-dark": {
    base: ["text-orange-800"],
    interactive: ["hover:bg-orange-800/10"]
  },
  red: { base: ["text-red-500"], interactive: ["hover:bg-red-500/10"] },
  zinc: { base: ["text-zinc-400"], interactive: ["hover:bg-zinc-400/10"] },
  white: { base: ["text-white"], interactive: ["hover:bg-white/10"] }
};
var OUTLINED_COLOR_CLASSES = {
  orange: {
    base: ["text-orange-500", "border-orange-500"],
    interactive: ["hover:bg-orange-500/10"]
  },
  yellow: {
    base: ["text-yellow-500", "border-yellow-500"],
    interactive: ["hover:bg-yellow-500/10"]
  },
  purple: {
    base: ["text-purple-400", "border-purple-400"],
    interactive: ["hover:bg-purple-400/10"]
  },
  "purple-dark": {
    base: ["text-purple-400", "border-purple-400"],
    interactive: ["hover:bg-purple-400/10"]
  },
  violet: {
    base: ["text-violet-500", "border-violet-500"],
    interactive: ["hover:bg-violet-500/10"]
  },
  pink: {
    base: ["text-pink-600", "border-pink-600"],
    interactive: ["hover:bg-pink-600/10"]
  },
  slate: {
    base: ["text-slate-500", "border-slate-500"],
    interactive: ["hover:bg-slate-500/10"]
  },
  green: {
    base: ["text-green-500", "border-green-500"],
    interactive: ["hover:bg-green-500/10"]
  },
  sky: {
    base: ["text-sky-500", "border-sky-500"],
    interactive: ["hover:bg-sky-500/10"]
  },
  "orange-dark": {
    base: ["text-orange-800", "border-orange-800"],
    interactive: ["hover:bg-orange-800/10"]
  },
  red: {
    base: ["text-red-500", "border-red-500"],
    interactive: ["hover:bg-red-500/10"]
  },
  zinc: {
    base: ["text-zinc-400", "bg-zinc-900", "border-zinc-400"],
    interactive: ["hover:bg-zinc-400/10"]
  },
  white: {
    base: ["text-white", "border-white"],
    interactive: ["hover:bg-white/10"]
  }
};
var ApButtonComponent = class _ApButtonComponent {
  showLabel = input(true);
  label = input("");
  icon = input("");
  /** 圖標位置 */
  iconPos = input("left");
  /** 按鈕類型 */
  type = input("button");
  size = input("medium");
  variant = input("content");
  accentColor = input("orange");
  disabled = input(false);
  loading = input(false);
  link = input(false);
  /**
   * @deprecated 請使用 clicked 事件，onClick 將會在未來版本移除
   */
  onClick = output();
  /** 受到Disable保護的Click */
  clicked = output();
  get buttonClasses() {
    const classes = [
      "inline-flex",
      "items-center",
      "justify-center",
      "font-sans",
      "font-semibold",
      "outline-none"
    ];
    if (this.size() === "x-small") {
      classes.push("gap-0.5", "p-1", "text-xs", "leading-4");
    } else if (this.size() === "small") {
      classes.push("gap-1", "p-1.5", "text-sm", "leading-5");
    } else if (this.size() === "large") {
      classes.push("gap-2", "p-2.5", "text-xl", "leading-7");
    } else {
      classes.push("gap-1.5", "p-2", "text-base", "leading-6");
    }
    const isRounded = this.variant() === "content-rounded" || this.variant() === "outlined-rounded";
    if (isRounded) {
      classes.push("rounded-full");
    } else {
      if (this.size() === "x-small") {
        classes.push("rounded");
      } else if (this.size() === "small") {
        classes.push("rounded-md");
      } else if (this.size() === "large") {
        classes.push("rounded-[10px]");
      } else {
        classes.push("rounded-lg");
      }
    }
    const isText = this.variant() === "text";
    const isOutlined = this.variant() === "outlined" || this.variant() === "outlined-rounded";
    const isRaised = this.variant() === "raised";
    if (isText) {
      this.applyTextClasses(classes);
    } else if (isOutlined) {
      this.applyOutlinedClasses(classes);
    } else {
      this.applyDefaultClasses(classes, isRaised);
    }
    if (this.disabled() || this.loading()) {
      classes.push("opacity-60", "cursor-not-allowed");
    } else {
      classes.push("cursor-pointer");
    }
    return classes.join(" ");
  }
  get iconSizeClass() {
    if (this.size() === "x-small")
      return "size-3";
    if (this.size() === "small")
      return "size-4";
    if (this.size() === "large")
      return "size-7";
    return "size-6";
  }
  applyDefaultClasses(classes, isRaised) {
    const colorClasses = FILLED_COLOR_CLASSES[this.accentColor()];
    classes.push("border", ...colorClasses.base);
    if (!this.disabled() && !this.loading()) {
      classes.push(...colorClasses.interactive);
    }
    if (isRaised && colorClasses.shadow) {
      classes.push(...colorClasses.shadow);
    }
  }
  applyTextClasses(classes) {
    const colorClasses = TEXT_COLOR_CLASSES[this.accentColor()];
    classes.push("bg-transparent", "border-0", ...colorClasses.base);
    if (!this.disabled() && !this.loading()) {
      classes.push(...colorClasses.interactive);
    }
  }
  applyOutlinedClasses(classes) {
    const colorClasses = OUTLINED_COLOR_CLASSES[this.accentColor()];
    classes.push("border", "bg-zinc-900", ...colorClasses.base);
    if (!this.disabled() && !this.loading()) {
      classes.push(...colorClasses.interactive);
    }
  }
  handleClick(event) {
    if (!this.disabled() && !this.loading()) {
      this.onClick.emit(event);
      this.clicked.emit(event);
    }
  }
  static \u0275fac = function ApButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApButtonComponent, selectors: [["ap-button"]], inputs: { showLabel: [1, "showLabel"], label: [1, "label"], icon: [1, "icon"], iconPos: [1, "iconPos"], type: [1, "type"], size: [1, "size"], variant: [1, "variant"], accentColor: [1, "accentColor"], disabled: [1, "disabled"], loading: [1, "loading"], link: [1, "link"] }, outputs: { onClick: "onClick", clicked: "clicked" }, ngContentSelectors: _c0, decls: 6, vars: 8, consts: [[3, "click", "type", "disabled"], ["role", "status", 1, "flex", "items-center", "justify-center", "gap-2"], [3, "name", "class"], [1, "ap-button-label"], ["name", "loading"], [1, "sr-only"], [3, "name"]], template: function ApButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ApButtonComponent_Template_button_click_0_listener($event) {
        return ctx.handleClick($event);
      });
      \u0275\u0275conditionalCreate(1, ApButtonComponent_Conditional_1_Template, 4, 2, "div", 1);
      \u0275\u0275conditionalCreate(2, ApButtonComponent_Conditional_2_Template, 1, 3, "ap-icon", 2);
      \u0275\u0275conditionalCreate(3, ApButtonComponent_Conditional_3_Template, 2, 1, "div", 3);
      \u0275\u0275conditionalCreate(4, ApButtonComponent_Conditional_4_Template, 1, 3, "ap-icon", 2);
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.buttonClasses);
      \u0275\u0275property("type", ctx.type())("disabled", ctx.disabled() || ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.icon() && ctx.iconPos() === "left" && !ctx.loading() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.label() && ctx.showLabel() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.icon() && ctx.iconPos() === "right" && !ctx.loading() ? 4 : -1);
    }
  }, dependencies: [CommonModule, ApIconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.hidden[_nghost-%COMP%] {\n  display: none;\n}\nbutton[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  appearance: none;\n}\n/*# sourceMappingURL=ap-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApButtonComponent, [{
    type: Component,
    args: [{ selector: "ap-button", imports: [CommonModule, ApIconComponent], template: `<button
  [type]="type()"
  [disabled]="disabled() || loading()"
  [class]="buttonClasses"
  (click)="handleClick($event)"
>
  @if (loading()) {
  <div
    role="status"
    class="flex items-center justify-center gap-2"
  >
    <ap-icon name="loading" [class]="iconSizeClass" />
    <span class="sr-only">Loading...</span>
  </div>
  } @if (icon() && iconPos() === 'left' && !loading()) {
  <ap-icon [name]="icon()" [class]="iconSizeClass" />
  } @if (label() && showLabel()) {
  <div class="ap-button-label">{{ label() }}</div>
  } @if (icon() && iconPos() === 'right' && !loading()) {
  <ap-icon [name]="icon()" [class]="iconSizeClass" />
  }

  <ng-content/>
</button>
`, styles: ["/* src/ap-components-lib/ap-button/ap-button.component.css */\n:host {\n  display: inline-block;\n}\n:host(.hidden) {\n  display: none;\n}\nbutton {\n  -webkit-appearance: none;\n  appearance: none;\n}\n/*# sourceMappingURL=ap-button.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApButtonComponent, { className: "ApButtonComponent", filePath: "src/ap-components-lib/ap-button/ap-button.component.ts", lineNumber: 175 });
})();

export {
  ApButtonComponent
};
//# sourceMappingURL=chunk-3HIHH7J6.js.map
