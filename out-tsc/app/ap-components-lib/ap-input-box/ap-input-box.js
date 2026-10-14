import { Component, input, model, output } from '@angular/core';
import { ApIconComponent } from '../ap-icon/ap-icon.component';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4) => ({ "opacity-50 cursor-not-allowed pointer-events-none": a0, "border-zinc-300 dark:border-zinc-500 hover:border-zinc-400  dark:hover:border-zinc-400": a1, "focus-within:ring-orange-400/40 focus-within:border-orange-400 dark:focus-within:ring-orange-400  dark:focus-within:border-orange-500 hover:focus-within:ring-orange-400/40 hover:focus-within:border-orange-400 dark:hover:focus-within:ring-orange-400 dark:hover:focus-within:border-orange-500": a2, "focus-within:ring-yellow-400/40 focus-within:border-yellow-400 dark:focus-within:ring-yellow-400  dark:focus-within:border-yellow-500 hover:focus-within:ring-yellow-400/40 hover:focus-within:border-yellow-400 dark:hover:focus-within:ring-yellow-400 dark:hover:focus-within:border-yellow-500": a3, "border-red-600 hover:border-red-400  focus-within:ring-red-500": a4 });
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "px-2 py-1 text-xs w-auto": a0, "px-4 py-2.5 text-sm": a1, "px-5 py-3 text-base w-auto": a2, "pl-1": a3, "pr-1": a4, "pr-8": a5, "cursor-not-allowed": a6, "appearance-none": a7 });
function ApInputBox_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.label(), " ");
} }
function ApInputBox_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵelement(1, "ap-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r0.icon());
} }
function ApInputBox_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.prefix(), " ");
} }
function ApInputBox_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.suffix(), " ");
} }
function ApInputBox_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "button", 8);
    i0.ɵɵlistener("click", function ApInputBox_Conditional_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.increment()); });
    i0.ɵɵelement(2, "ap-icon", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 8);
    i0.ɵɵlistener("click", function ApInputBox_Conditional_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.decrement()); });
    i0.ɵɵelement(4, "ap-icon", 10);
    i0.ɵɵelementEnd()();
} }
export class ApInputBox {
    label = input(null);
    type = input('text');
    size = input('medium');
    accentColor = input('orange');
    icon = input(null);
    placeholder = input(null);
    value = model('');
    error = input(false);
    disabled = input(false);
    required = input(true);
    max = input(null);
    min = input(null);
    prefix = input(null);
    suffix = input(null);
    step = input(null);
    blur = output();
    focus = output();
    onInput = output();
    ngOnInit() { }
    onInputChange(event) {
        const target = event.target;
        this.value.set(target.value);
        this.onInput.emit(target.value);
    }
    increment() {
        if (this.type() !== 'number')
            return;
        const currentValue = parseFloat(this.value()) || 0;
        const step = parseFloat(this.step()?.toString() || '1');
        const max = this.max() !== null ? parseFloat(this.max().toString()) : Infinity;
        const newValue = Math.min(currentValue + step, max);
        this.value.set(newValue.toString());
        this.onInput.emit(newValue.toString());
    }
    decrement() {
        if (this.type() !== 'number')
            return;
        const currentValue = parseFloat(this.value()) || 0;
        const step = parseFloat(this.step()?.toString() || '1');
        const min = this.min() !== null ? parseFloat(this.min().toString()) : -Infinity;
        const newValue = Math.max(currentValue - step, min);
        this.value.set(newValue.toString());
        this.onInput.emit(newValue.toString());
    }
    static ɵfac = function ApInputBox_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApInputBox)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApInputBox, selectors: [["ap-input-box"]], inputs: { label: [1, "label"], type: [1, "type"], size: [1, "size"], accentColor: [1, "accentColor"], icon: [1, "icon"], placeholder: [1, "placeholder"], value: [1, "value"], error: [1, "error"], disabled: [1, "disabled"], required: [1, "required"], max: [1, "max"], min: [1, "min"], prefix: [1, "prefix"], suffix: [1, "suffix"], step: [1, "step"] }, outputs: { value: "valueChange", blur: "blur", focus: "focus", onInput: "onInput" }, decls: 7, vars: 30, consts: [[1, "block", "mb-1", "font-medium"], [1, "relative", "w-full", "flex", "items-center", "border", "rounded-md", "transition", "sm:text-sm", "text-xs", "overflow-hidden", "text-ellipsis", "bg-white", "dark:bg-zinc-900", "focus-within:ring-2", "dark:focus-within:ring-1", 3, "ngClass"], [1, "pl-3", "text-zinc-400", "flex"], [1, "pl-3", "text-zinc-500", "select-none", "text-sm", "font-medium"], [1, "w-full", "flex-1", "focus:outline-none", "placeholder:text-zinc-400", "dark:placeholder:text-zinc-500", "dark:text-zinc-100", 3, "blur", "focus", "input", "type", "placeholder", "disabled", "required", "value", "min", "max", "step", "ngClass"], [1, "pr-10", "text-zinc-400", "select-none", "text-lg", "font-medium"], [1, "absolute", "right-4", "flex", "flex-col", "gap-0"], [1, "w-4", "h-4", 3, "name"], ["type", "button", 3, "click"], ["name", "chevron-up default", 1, "w-3", "h-3", "text-zinc-500", "dark:text-zinc-400", "hover:text-orange-400", "transition-colors", "cursor-pointer"], ["name", "chevron-down default", 1, "w-3", "h-3", "text-zinc-500", "dark:text-zinc-400", "hover:text-orange-400", "transition-colors", "cursor-pointer"]], template: function ApInputBox_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApInputBox_Conditional_0_Template, 2, 1, "label", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵconditionalCreate(2, ApInputBox_Conditional_2_Template, 2, 1, "span", 2);
            i0.ɵɵconditionalCreate(3, ApInputBox_Conditional_3_Template, 2, 1, "span", 3);
            i0.ɵɵelementStart(4, "input", 4);
            i0.ɵɵlistener("blur", function ApInputBox_Template_input_blur_4_listener() { return ctx.blur.emit(); })("focus", function ApInputBox_Template_input_focus_4_listener() { return ctx.focus.emit(); })("input", function ApInputBox_Template_input_input_4_listener($event) { return ctx.onInputChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, ApInputBox_Conditional_5_Template, 2, 1, "span", 5);
            i0.ɵɵconditionalCreate(6, ApInputBox_Conditional_6_Template, 5, 0, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.label() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(15, _c0, ctx.disabled(), !ctx.disabled() && !ctx.error(), !ctx.disabled() && ctx.accentColor() === "orange" && !ctx.error(), !ctx.disabled() && ctx.accentColor() === "yellow" && !ctx.error(), ctx.error()));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.icon() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.prefix() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("type", ctx.type())("placeholder", ctx.placeholder() || "")("disabled", ctx.disabled())("required", ctx.required())("value", ctx.value())("min", ctx.min() !== null ? ctx.min() : null)("max", ctx.max() !== null ? ctx.max() : null)("step", ctx.step() !== null ? ctx.step() : null)("ngClass", i0.ɵɵpureFunction8(21, _c1, ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large", ctx.prefix() || ctx.icon(), ctx.suffix(), ctx.type() === "number" && !ctx.disabled(), ctx.disabled(), ctx.type() === "number"));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.suffix() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.type() === "number" && !ctx.disabled() ? 6 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent], styles: ["\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, \ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n  appearance: textfield;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApInputBox, [{
        type: Component,
        args: [{ selector: 'ap-input-box', imports: [CommonModule, ApIconComponent], template: "@if (label()) {\n  <label class=\"block mb-1 font-medium\"> {{ label() }} </label>\n}\n\n<div\n  class=\"relative w-full flex items-center border rounded-md transition sm:text-sm text-xs overflow-hidden text-ellipsis bg-white dark:bg-zinc-900 focus-within:ring-2 dark:focus-within:ring-1\"\n  [ngClass]=\"{\n    'opacity-50 cursor-not-allowed pointer-events-none': disabled(),\n    'border-zinc-300 dark:border-zinc-500 hover:border-zinc-400  dark:hover:border-zinc-400': !disabled() && !error(),\n    'focus-within:ring-orange-400/40 focus-within:border-orange-400 dark:focus-within:ring-orange-400  dark:focus-within:border-orange-500 hover:focus-within:ring-orange-400/40 hover:focus-within:border-orange-400 dark:hover:focus-within:ring-orange-400 dark:hover:focus-within:border-orange-500':\n      !disabled() && accentColor() === 'orange' && !error(),\n    'focus-within:ring-yellow-400/40 focus-within:border-yellow-400 dark:focus-within:ring-yellow-400  dark:focus-within:border-yellow-500 hover:focus-within:ring-yellow-400/40 hover:focus-within:border-yellow-400 dark:hover:focus-within:ring-yellow-400 dark:hover:focus-within:border-yellow-500':\n      !disabled() && accentColor() === 'yellow' && !error(),\n    'border-red-600 hover:border-red-400  focus-within:ring-red-500': error(),\n  }\"\n>\n  <!-- Search Icon -->\n  @if (icon()) {\n    <span class=\"pl-3 text-zinc-400 flex\">\n      <ap-icon [name]=\"icon()!\" class=\"w-4 h-4\"></ap-icon>\n    </span>\n  }\n\n  <!-- Prefix -->\n  @if (prefix()) {\n    <span class=\"pl-3 text-zinc-500 select-none text-sm font-medium\">\n      {{ prefix() }}\n    </span>\n  }\n\n  <!-- Input Field -->\n  <input\n    [type]=\"type()\"\n    [placeholder]=\"placeholder() || ''\"\n    [disabled]=\"disabled()\"\n    [required]=\"required()\"\n    [value]=\"value()\"\n    (blur)=\"blur.emit()\"\n    (focus)=\"focus.emit()\"\n    (input)=\"onInputChange($event)\"\n    [min]=\"min() !== null ? min() : null\"\n    [max]=\"max() !== null ? max() : null\"\n    [step]=\"step() !== null ? step() : null\"\n    class=\"w-full flex-1 focus:outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 dark:text-zinc-100\"\n    [ngClass]=\"{\n      'px-2 py-1 text-xs w-auto': size() === 'small',\n      'px-4 py-2.5 text-sm': size() === 'medium',\n      'px-5 py-3 text-base w-auto': size() === 'large',\n      'pl-1': prefix() || icon(),\n      'pr-1': suffix(),\n      'pr-8': type() === 'number' && !disabled(),\n      'cursor-not-allowed': disabled(),\n      'appearance-none': type() === 'number',\n    }\"\n  />\n\n  <!-- Suffix -->\n  @if (suffix()) {\n    <span class=\"pr-10 text-zinc-400 select-none text-lg font-medium\">\n      {{ suffix() }}\n    </span>\n  }\n\n  <!-- Custom Number Spinner Buttons -->\n  @if (type() === 'number' && !disabled()) {\n    <div class=\"absolute right-4 flex flex-col gap-0\">\n      <button type=\"button\" (click)=\"increment()\">\n        <ap-icon\n          name=\"chevron-up default\"\n          class=\"w-3 h-3 text-zinc-500 dark:text-zinc-400 hover:text-orange-400 transition-colors cursor-pointer\"\n        />\n      </button>\n      <button type=\"button\" (click)=\"decrement()\">\n        <ap-icon\n          name=\"chevron-down default\"\n          class=\"w-3 h-3 text-zinc-500 dark:text-zinc-400 hover:text-orange-400 transition-colors cursor-pointer\"\n        />\n      </button>\n    </div>\n  }\n</div>\n", styles: ["/* Remove default number input spinners */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApInputBox, { className: "ApInputBox", filePath: "src/ap-components-lib/ap-input-box/ap-input-box.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-input-box.js.map