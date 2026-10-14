import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ApLoadingOverlayComponent {
    size = input('48px'); // 例如：'48px'
    border = input('5px'); // 例如：'5px'
    spinnerColor = input('#d1d5db'); // 預設：gray-300
    static ɵfac = function ApLoadingOverlayComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApLoadingOverlayComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApLoadingOverlayComponent, selectors: [["ap-loading-overlay"]], inputs: { size: [1, "size"], border: [1, "border"], spinnerColor: [1, "spinnerColor"] }, decls: 1, vars: 14, consts: [[1, "rounded-full", "border-solid", "animate-spin"]], template: function ApLoadingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.size())("height", ctx.size())("border-width", ctx.border())("border-top-color", "transparent")("border-bottom-color", ctx.spinnerColor())("border-left-color", ctx.spinnerColor())("border-right-color", ctx.spinnerColor());
        } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApLoadingOverlayComponent, [{
        type: Component,
        args: [{ selector: 'ap-loading-overlay', imports: [], template: "<div\n  class=\"rounded-full border-solid animate-spin\"\n  [style.width]=\"size()\"\n  [style.height]=\"size()\"\n  [style.borderWidth]=\"border()\"\n  [style.borderTopColor]=\"'transparent'\"\n  [style.borderBottomColor]=\"spinnerColor()\"\n  [style.borderLeftColor]=\"spinnerColor()\"\n  [style.borderRightColor]=\"spinnerColor()\"\n>\n</div>", styles: [":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApLoadingOverlayComponent, { className: "ApLoadingOverlayComponent", filePath: "src/ap-components-lib/ap-loading-overlay/ap-loading-overlay.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=ap-loading-overlay.component.js.map