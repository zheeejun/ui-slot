import {
  ApButtonComponent
} from "./chunk-VX4L3GZI.js";
import {
  CommonModule,
  NgIf
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
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

export {
  ApUiFramePopupComponent
};
//# sourceMappingURL=chunk-HUKCMLYY.js.map
