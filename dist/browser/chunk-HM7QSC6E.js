import {
  Component,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵstyleProp
} from "./chunk-QGU3BS3L.js";

// src/ap-components-lib/ap-loading-overlay/ap-loading-overlay.component.ts
var ApLoadingOverlayComponent = class _ApLoadingOverlayComponent {
  size = input("48px");
  // 例如：'48px'
  border = input("5px");
  // 例如：'5px'
  spinnerColor = input("#d1d5db");
  // 預設：gray-300
  static \u0275fac = function ApLoadingOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApLoadingOverlayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApLoadingOverlayComponent, selectors: [["ap-loading-overlay"]], inputs: { size: [1, "size"], border: [1, "border"], spinnerColor: [1, "spinnerColor"] }, decls: 1, vars: 14, consts: [[1, "rounded-full", "border-solid", "animate-spin"]], template: function ApLoadingOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.size())("height", ctx.size())("border-width", ctx.border())("border-top-color", "transparent")("border-bottom-color", ctx.spinnerColor())("border-left-color", ctx.spinnerColor())("border-right-color", ctx.spinnerColor());
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-loading-overlay.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApLoadingOverlayComponent, [{
    type: Component,
    args: [{ selector: "ap-loading-overlay", imports: [], template: `<div
  class="rounded-full border-solid animate-spin"
  [style.width]="size()"
  [style.height]="size()"
  [style.borderWidth]="border()"
  [style.borderTopColor]="'transparent'"
  [style.borderBottomColor]="spinnerColor()"
  [style.borderLeftColor]="spinnerColor()"
  [style.borderRightColor]="spinnerColor()"
>
</div>`, styles: ["/* src/ap-components-lib/ap-loading-overlay/ap-loading-overlay.component.css */\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-loading-overlay.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApLoadingOverlayComponent, { className: "ApLoadingOverlayComponent", filePath: "src/ap-components-lib/ap-loading-overlay/ap-loading-overlay.component.ts", lineNumber: 9 });
})();

export {
  ApLoadingOverlayComponent
};
//# sourceMappingURL=chunk-HM7QSC6E.js.map
