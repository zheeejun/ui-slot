import { Component, input, output, computed } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class ApRadio {
    name = input(null);
    value = input(null);
    checked = input(false);
    disabled = input(false);
    onSelect = output();
    radioId = computed(() => `radio-${this.name()}-${this.value()}`);
    onChange() {
        if (this.disabled())
            return;
        this.onSelect.emit(this.value());
    }
    static ɵfac = function ApRadio_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApRadio)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApRadio, selectors: [["ap-radio"]], inputs: { name: [1, "name"], value: [1, "value"], checked: [1, "checked"], disabled: [1, "disabled"] }, outputs: { onSelect: "onSelect" }, ngContentSelectors: _c0, decls: 4, vars: 14, consts: [[1, "flex", "items-center", "gap-2"], ["type", "radio", 1, "w-4", "h-4", "text-orange-600", "focus:ring-orange-500", 3, "change", "id", "name", "value", "checked", "disabled"], [1, "text-sm", "text-zinc-700", "dark:text-white", 3, "for"]], template: function ApRadio_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1);
            i0.ɵɵlistener("change", function ApRadio_Template_input_change_1_listener() { return ctx.onChange(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "label", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("cursor-pointer", !ctx.disabled())("cursor-not-allowed", ctx.disabled());
            i0.ɵɵproperty("id", ctx.radioId())("name", ctx.name())("value", ctx.value())("checked", ctx.checked())("disabled", ctx.disabled());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("cursor-pointer", !ctx.disabled())("cursor-not-allowed", ctx.disabled());
            i0.ɵɵproperty("for", ctx.radioId());
        } }, styles: ["input[type=\"radio\"][_ngcontent-%COMP%] {\n  accent-color:oklch(64.6% 0.222 41.116);}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApRadio, [{
        type: Component,
        args: [{ selector: 'ap-radio', imports: [], template: "<div class=\"flex items-center gap-2\">\n  <input\n    type=\"radio\"\n    [id]=\"radioId()\"\n    [name]=\"name()\"\n    [value]=\"value()\"\n    [checked]=\"checked()\"\n    [disabled]=\"disabled()\"\n    (change)=\"onChange()\"\n    class=\"w-4 h-4 text-orange-600 focus:ring-orange-500\"\n    [class.cursor-pointer]=\"!disabled()\"\n    [class.cursor-not-allowed]=\"disabled()\"\n  />\n  <label\n    [for]=\"radioId()\"\n    class=\"text-sm text-zinc-700 dark:text-white\"\n    [class.cursor-pointer]=\"!disabled()\"\n    [class.cursor-not-allowed]=\"disabled()\"\n  >\n    <ng-content></ng-content>\n  </label>\n</div>\n", styles: ["input[type=\"radio\"] {\n  accent-color:oklch(64.6% 0.222 41.116);}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApRadio, { className: "ApRadio", filePath: "src/ap-components-lib/ap-radio/ap-radio.ts", lineNumber: 10 }); })();
//# sourceMappingURL=ap-radio.js.map