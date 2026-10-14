import {
  ApButtonComponent
} from "./chunk-3HIHH7J6.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  ViewChild,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-QGU3BS3L.js";

// src/app/components/ap-ui-frame-popup/ap-ui-frame-popup.component.ts
var _c0 = ["*"];
function ApUiFramePopupComponent_ap_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 4);
    \u0275\u0275listener("click", function ApUiFramePopupComponent_ap_button_7_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", "x-mark")("size", "small")("variant", "outlined-rounded")("accentColor", ctx_r1.accentColor() === "default" ? "zinc" : ctx_r1.accentColor() === "yellow" ? "purple" : "yellow");
  }
}
function ApUiFramePopupComponent_ap_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 5);
    \u0275\u0275listener("click", function ApUiFramePopupComponent_ap_button_8_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("size", "small")("icon", "back-2-line")("variant", "outlined-rounded")("accentColor", ctx_r1.accentColor() === "default" ? "zinc" : ctx_r1.accentColor() === "yellow" ? "yellow" : "purple");
  }
}
var ApUiFramePopupComponent = class _ApUiFramePopupComponent {
  header = input("Message");
  enableBack = input(false);
  enableClose = input(true);
  size = input("default");
  accentColor = input("default");
  close = output();
  back = output();
  getTextSizeClass() {
    switch (this.size()) {
      case "mobile":
        return "text-4xl";
      case "list-content":
        return "text-lg";
      default:
        return "text-3xl";
    }
  }
  getPaddingClass() {
    return this.size() === "mobile" ? "py-4" : "py-4";
  }
  getBorderStyle() {
    switch (this.accentColor()) {
      case "yellow":
        return "2px solid rgb(216 180 254)";
      case "purple":
        return "2px solid rgb(253 224 71)";
      default:
        return "2px solid rgb(82 82 91)";
    }
  }
  static \u0275fac = function ApUiFramePopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiFramePopupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiFramePopupComponent, selectors: [["ap-ui-frame-popup"]], inputs: { header: [1, "header"], enableBack: [1, "enableBack"], enableClose: [1, "enableClose"], size: [1, "size"], accentColor: [1, "accentColor"] }, outputs: { close: "close", back: "back" }, ngContentSelectors: _c0, decls: 9, vars: 9, consts: [[1, "relative", "w-full"], [1, "relative", "w-full", "bg-zinc-800", "rounded-b-xl"], ["class", "absolute right-4 top-4", 3, "icon", "size", "variant", "accentColor", "click", 4, "ngIf"], ["class", "absolute right-4 top-4", 3, "size", "icon", "variant", "accentColor", "click", 4, "ngIf"], [1, "absolute", "right-4", "top-4", 3, "click", "icon", "size", "variant", "accentColor"], [1, "absolute", "right-4", "top-4", 3, "click", "size", "icon", "variant", "accentColor"]], template: function ApUiFramePopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div")(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 1);
      \u0275\u0275projection(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ApUiFramePopupComponent_ap_button_7_Template, 1, 4, "ap-button", 2)(8, ApUiFramePopupComponent_ap_button_8_Template, 1, 4, "ap-button", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap("relative bg-zinc-900 rounded-xl text-zinc-300 duration-300 select-none w-[95%] md:w-md max-w-md transition-all duration-300");
      \u0275\u0275styleProp("border", ctx.getBorderStyle());
      \u0275\u0275advance(2);
      \u0275\u0275classMap("relative w-full flex justify-center items-center text-center h-16 " + ctx.getTextSizeClass() + " " + ctx.getPaddingClass());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.header());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.enableClose());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.enableBack());
    }
  }, dependencies: [CommonModule, NgIf, ApButtonComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=ap-ui-frame-popup.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiFramePopupComponent, [{
    type: Component,
    args: [{ selector: "ap-ui-frame-popup", imports: [CommonModule, ApButtonComponent], template: `<div
  [class]="
    'relative bg-zinc-900 rounded-xl text-zinc-300 duration-300 select-none ' +
    'w-[95%] md:w-md max-w-md transition-all duration-300'
  "
  [style.border]="getBorderStyle()"
>
  <div class="relative w-full">
    <div
      [class]="
        'relative w-full flex justify-center items-center text-center h-16 ' +
        getTextSizeClass() +
        ' ' +
        getPaddingClass()
      "
    >
      <h1>{{ header() }}</h1>
    </div>
    <div class="relative w-full bg-zinc-800 rounded-b-xl">
      <ng-content></ng-content>
    </div>
  </div>
  <ap-button
    class="absolute right-4 top-4"
    [icon]="'x-mark'"
    [size]="'small'"
    [variant]="'outlined-rounded'"
    [accentColor]="
      accentColor() === 'default'
        ? 'zinc'
        : accentColor() === 'yellow'
          ? 'purple'
          : 'yellow'
    "
    *ngIf="enableClose()"
    (click)="close.emit()"
  />

  <ap-button
    class="absolute right-4 top-4"
    [size]="'small'"
    [icon]="'back-2-line'"
    [variant]="'outlined-rounded'"
    [accentColor]="
      accentColor() === 'default'
        ? 'zinc'
        : accentColor() === 'yellow'
          ? 'yellow'
          : 'purple'
    "
    *ngIf="enableBack()"
    (click)="back.emit()"
  />
</div>
`, styles: ["/* src/app/components/ap-ui-frame-popup/ap-ui-frame-popup.component.css */\n:host {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=ap-ui-frame-popup.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiFramePopupComponent, { className: "ApUiFramePopupComponent", filePath: "src/app/components/ap-ui-frame-popup/ap-ui-frame-popup.component.ts", lineNumber: 11 });
})();

// src/ap-components-lib/ap-tab-menu-text/ap-tab-menu-text.component.ts
var _c02 = ["tabContainer"];
var _forTrack0 = ($index, $item) => $item.id;
function ApTabMenuTextComponent_For_5_Conditional_1_Template(rf, ctx) {
}
function ApTabMenuTextComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("click", function ApTabMenuTextComponent_For_5_Template_div_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTabClick(tab_r3.id));
    });
    \u0275\u0275conditionalCreate(1, ApTabMenuTextComponent_For_5_Conditional_1_Template, 0, 0);
    \u0275\u0275elementStart(2, "h2", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.isSelected(tab_r3.id) ? ctx_r3.getActiveClasses() : ctx_r3.getInactiveClasses());
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r3.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r3.label);
  }
}
var activeClassMap = {
  yellow: "text-yellow-400 border-yellow-400",
  orange: "text-orange-400 border-orange-400",
  slate: "text-slate-500 border-slate-500 dark:text-slate-400 dark:border-slate-400"
};
var inactiveClassMap = {
  yellow: "text-zinc-400 border-zinc-400 dark:text-zinc-500 dark:border-zinc-500 hover:text-yellow-300 hover:border-yellow-300",
  orange: "text-zinc-400 border-zinc-400 dark:text-zinc-500 dark:border-zinc-500 hover:text-orange-300 hover:border-orange-300",
  slate: "text-zinc-400 border-zinc-400 dark:text-zinc-500 dark:border-zinc-500 dark:hover:text-slate-400 dark:hover:border-slate-400 hover:text-slate-300 hover:border-slate-300"
};
var ApTabMenuTextComponent = class _ApTabMenuTextComponent {
  tabContainer;
  tabs = input([
    { id: "tab1", label: "Tab 1", icon: "star" },
    { id: "tab2", label: "Tab 2", icon: "trophy" },
    { id: "tab3", label: "Tab 3", icon: "sparkles" }
  ]);
  selectedTab = input("tab1");
  accentColor = input("yellow");
  justify = input("center");
  tabChange = output();
  isDragging = false;
  startX = 0;
  scrollLeft = 0;
  hasDragged = false;
  onTabClick(tabId) {
    if (!this.hasDragged) {
      this.tabChange.emit(tabId);
    }
  }
  isSelected(tabId) {
    return this.selectedTab() === tabId;
  }
  getActiveClasses() {
    return activeClassMap[this.accentColor()];
  }
  getInactiveClasses() {
    return inactiveClassMap[this.accentColor()];
  }
  onMouseDown(event) {
    this.isDragging = true;
    this.hasDragged = false;
    this.startX = event.pageX - this.tabContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.tabContainer.nativeElement.scrollLeft;
    this.tabContainer.nativeElement.style.cursor = "grabbing";
    event.preventDefault();
  }
  onMouseMove(event) {
    if (!this.isDragging)
      return;
    event.preventDefault();
    const x = event.pageX - this.tabContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.tabContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
    if (Math.abs(walk) > 5) {
      this.hasDragged = true;
    }
  }
  onMouseUp(event) {
    this.isDragging = false;
    this.tabContainer.nativeElement.style.cursor = "grab";
    setTimeout(() => {
      this.hasDragged = false;
    }, 100);
  }
  onTouchStart(event) {
    this.isDragging = true;
    this.hasDragged = false;
    this.startX = event.touches[0].pageX - this.tabContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.tabContainer.nativeElement.scrollLeft;
  }
  onTouchMove(event) {
    if (!this.isDragging)
      return;
    const x = event.touches[0].pageX - this.tabContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.tabContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
    if (Math.abs(walk) > 5) {
      this.hasDragged = true;
    }
  }
  onTouchEnd(event) {
    this.isDragging = false;
    setTimeout(() => {
      this.hasDragged = false;
    }, 100);
  }
  static \u0275fac = function ApTabMenuTextComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTabMenuTextComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTabMenuTextComponent, selectors: [["ap-tab-menu-text"]], viewQuery: function ApTabMenuTextComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabContainer = _t.first);
    }
  }, inputs: { tabs: [1, "tabs"], selectedTab: [1, "selectedTab"], accentColor: [1, "accentColor"], justify: [1, "justify"] }, outputs: { tabChange: "tabChange" }, decls: 6, vars: 1, consts: [["tabContainer", ""], [1, "absolute", "w-full", "h-12", "justify-center"], [1, "absolute", "bottom-0", "w-full", "overflow-hidden"], [1, "flex", "overflow-x-auto", "scrollbar-hide", "touch-pan-x", "select-none", "tab-container", "px-4", 2, "scroll-behavior", "smooth", "cursor", "grab", 3, "mousedown", "mousemove", "mouseup", "mouseleave", "touchstart", "touchmove", "touchend", "ngClass"], [1, "flex", "items-center", "py-0.5", "px-1", "gap-1", "justify-center", "cursor-pointer", "whitespace-nowrap", "shrink-0", 2, "border-bottom", "1.5px solid", 3, "ngClass"], [1, "flex", "items-center", "py-0.5", "px-1", "gap-1", "justify-center", "cursor-pointer", "whitespace-nowrap", "shrink-0", 2, "border-bottom", "1.5px solid", 3, "click", "ngClass"], [1, "uppercase"]], template: function ApTabMenuTextComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3, 0);
      \u0275\u0275listener("mousedown", function ApTabMenuTextComponent_Template_div_mousedown_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseDown($event));
      })("mousemove", function ApTabMenuTextComponent_Template_div_mousemove_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseMove($event));
      })("mouseup", function ApTabMenuTextComponent_Template_div_mouseup_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseUp($event));
      })("mouseleave", function ApTabMenuTextComponent_Template_div_mouseleave_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseUp($event));
      })("touchstart", function ApTabMenuTextComponent_Template_div_touchstart_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTouchStart($event));
      })("touchmove", function ApTabMenuTextComponent_Template_div_touchmove_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTouchMove($event));
      })("touchend", function ApTabMenuTextComponent_Template_div_touchend_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTouchEnd($event));
      });
      \u0275\u0275repeaterCreate(4, ApTabMenuTextComponent_For_5_Template, 4, 3, "div", 4, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.justify() === "center" ? "justify-center" : "justify-start");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs());
    }
  }, dependencies: [CommonModule, NgClass], styles: ['\n\n[_nghost-%COMP%] {\n  display: "block";\n}\n/*# sourceMappingURL=ap-tab-menu-text.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTabMenuTextComponent, [{
    type: Component,
    args: [{ selector: "ap-tab-menu-text", imports: [CommonModule], template: `<div class="absolute w-full h-12 justify-center">
  <div class="absolute bottom-0 w-full overflow-hidden">
    <div
      class="flex overflow-x-auto scrollbar-hide touch-pan-x select-none tab-container px-4"
      [ngClass]="justify() === 'center' ? 'justify-center' : 'justify-start'"
      #tabContainer
      (mousedown)="onMouseDown($event)"
      (mousemove)="onMouseMove($event)"
      (mouseup)="onMouseUp($event)"
      (mouseleave)="onMouseUp($event)"
      (touchstart)="onTouchStart($event)"
      (touchmove)="onTouchMove($event)"
      (touchend)="onTouchEnd($event)"
      style="scroll-behavior: smooth; cursor: grab"
    >
      @for (tab of tabs(); track tab.id) {
        <div
          class="flex items-center py-0.5 px-1 gap-1 justify-center cursor-pointer whitespace-nowrap shrink-0"
          style="border-bottom: 1.5px solid"
          (click)="onTabClick(tab.id)"
          [ngClass]="
            isSelected(tab.id) ? getActiveClasses() : getInactiveClasses()
          "
        >
          @if (tab.icon) {
            <!--<ap-icon [name]="tab.icon" class="size-5" />-->
          }
          <h2 class="uppercase">{{ tab.label }}</h2>
        </div>
      }
    </div>
  </div>
</div>
`, styles: ['/* angular:styles/component:css;9aa7e13197e71134a0af6c31f5adfce1c8edb4dfda4de7f9fbeeb0c132491927;/Users/jessielin/ui-slot/src/ap-components-lib/ap-tab-menu-text/ap-tab-menu-text.component.ts */\n:host {\n  display: "block";\n}\n/*# sourceMappingURL=ap-tab-menu-text.component.css.map */\n'] }]
  }], null, { tabContainer: [{
    type: ViewChild,
    args: ["tabContainer", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTabMenuTextComponent, { className: "ApTabMenuTextComponent", filePath: "src/ap-components-lib/ap-tab-menu-text/ap-tab-menu-text.component.ts", lineNumber: 30 });
})();

export {
  ApUiFramePopupComponent,
  ApTabMenuTextComponent
};
//# sourceMappingURL=chunk-N4LJSHXE.js.map
