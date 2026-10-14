import { Component, input, output, signal, ViewChild, } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
const _c0 = ["inputElement"];
export class ApAlnumInputComponent {
    inputElement;
    // Input properties
    placeholder = input("Please input redeem code");
    type = input("text");
    value = input("");
    disabled = input(false);
    invalid = signal(false);
    maxLength = input(null);
    isSuccess = input(false);
    isError = input(false);
    // Output events
    valueChange = output();
    blur = output();
    focus = output();
    // Internal state
    internalValue = signal("");
    touched = signal(false);
    focused = signal(false);
    ngOnInit() {
        this.internalValue.set(this.value());
    }
    onInput(event) {
        const target = event.target;
        let newValue = target.value;
        // Additional filter to remove any non-alphanumeric characters that might have slipped through
        newValue = newValue.replace(/[^a-zA-Z0-9]/g, "");
        // Update the input field if characters were removed
        if (target.value !== newValue) {
            target.value = newValue;
        }
        this.internalValue.set(newValue);
        this.valueChange.emit(newValue);
    }
    onBlur() {
        this.touched.set(true);
        this.focused.set(false);
        this.blur.emit();
    }
    onFocus() {
        this.focused.set(true);
        this.focus.emit();
    }
    onPaste(event) {
        event.preventDefault();
        const pastedText = event.clipboardData?.getData("text") || "";
        // Filter to only allow alphanumeric characters
        const filteredText = pastedText.replace(/[^a-zA-Z0-9]/g, "");
        if (filteredText) {
            const target = event.target;
            const currentValue = target.value;
            const selectionStart = target.selectionStart || 0;
            const selectionEnd = target.selectionEnd || 0;
            // Insert filtered text at cursor position
            const newValue = currentValue.substring(0, selectionStart) +
                filteredText +
                currentValue.substring(selectionEnd);
            target.value = newValue;
            this.internalValue.set(newValue);
            this.valueChange.emit(newValue);
            // Set cursor position after pasted text
            setTimeout(() => {
                target.setSelectionRange(selectionStart + filteredText.length, selectionStart + filteredText.length);
            });
        }
    }
    static ɵfac = function ApAlnumInputComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApAlnumInputComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApAlnumInputComponent, selectors: [["ap-alnum-input"]], viewQuery: function ApAlnumInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, inputs: { placeholder: [1, "placeholder"], type: [1, "type"], value: [1, "value"], disabled: [1, "disabled"], maxLength: [1, "maxLength"], isSuccess: [1, "isSuccess"], isError: [1, "isError"] }, outputs: { valueChange: "valueChange", blur: "blur", focus: "focus" }, decls: 4, vars: 13, consts: [["inputElement", ""], [1, "w-full"], [1, "relative"], ["inputmode", "text", 1, "w-full", "px-3", "py-3", "bg-zinc-800", "border-2", "border-zinc-500", "rounded-lg", "text-white", "placeholder-zinc-400", "focus:border-yellow-300/60", "focus:outline-none", "errorHint:border-red-300/60", "success:border-green-400/60", "transition-colors", "duration-200", 3, "input", "blur", "focus", "type", "placeholder", "value", "disabled", "maxLength"]], template: function ApAlnumInputComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "input", 3, 0);
            i0.ɵɵlistener("input", function ApAlnumInputComponent_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onInput($event)); })("blur", function ApAlnumInputComponent_Template_input_blur_2_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onBlur()); })("focus", function ApAlnumInputComponent_Template_input_focus_2_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onFocus()); });
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("border-red-500", ctx.invalid() && ctx.touched() || ctx.isError())("border-yellow-300", ctx.focused())("border-green-400", ctx.isSuccess())("focus:border-red-400", ctx.invalid() && ctx.focused());
            i0.ɵɵproperty("type", ctx.type())("placeholder", ctx.placeholder())("value", ctx.value())("disabled", ctx.disabled())("maxLength", ctx.maxLength() || undefined);
        } }, dependencies: [CommonModule], styles: [".border-green-400[_ngcontent-%COMP%] {\n  border-color: oklch(79.2% 0.209 151.711) !important;\n}\n\n.border-red-500[_ngcontent-%COMP%] {\n  border-color: oklch(70.4% 0.191 22.216) !important;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApAlnumInputComponent, [{
        type: Component,
        args: [{ selector: "ap-alnum-input", standalone: true, imports: [CommonModule], template: "<div class=\"w-full\">\n  <div class=\"relative\">\n    <input\n      #inputElement\n      [type]=\"type()\"\n      [placeholder]=\"placeholder()\"\n      [value]=\"value()\"\n      [disabled]=\"disabled()\"\n      [maxLength]=\"maxLength() || undefined\"\n      inputmode=\"text\"\n      (input)=\"onInput($event)\"\n      (blur)=\"onBlur()\"\n      (focus)=\"onFocus()\"\n      class=\"w-full px-3 py-3 bg-zinc-800 border-2 border-zinc-500 rounded-lg text-white placeholder-zinc-400 focus:border-yellow-300/60 focus:outline-none errorHint:border-red-300/60 success:border-green-400/60 transition-colors duration-200\"\n      [class.border-red-500]=\"invalid() && touched() || isError()\"\n       [class.border-yellow-300]=\" focused()\"\n      [class.border-green-400]=\"isSuccess()\"\n      [class.focus:border-red-400]=\"invalid() && focused()\"\n    />\n  </div>\n\n  <!-- Validation Message \n  @if (hasError() && touched()) {\n  <div class=\"mt-1 text-sm text-red-400 flex items-center\">\n    <span class=\"text-red-500\"></span>\n    <span>{{ getErrorMessage() }}</span>\n  </div>\n  } @else if (isValid()) {\n  <div class=\"mt-1 text-sm text-green-400 flex items-center\">\n    <span class=\"text-green-400\"></span>\n    <span>{{ getVaildMessage() }}</span>\n  </div>\n  } @else {\n  \n  }-->\n</div>\n", styles: [".border-green-400 {\n  border-color: oklch(79.2% 0.209 151.711) !important;\n}\n\n.border-red-500 {\n  border-color: oklch(70.4% 0.191 22.216) !important;\n}\n"] }]
    }], null, { inputElement: [{
            type: ViewChild,
            args: ["inputElement"]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApAlnumInputComponent, { className: "ApAlnumInputComponent", filePath: "src/ap-components-lib/ap-alnum-input/ap-alnum-input.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=ap-alnum-input.component.js.map