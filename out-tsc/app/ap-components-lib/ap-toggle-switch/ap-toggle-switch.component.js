import { CommonModule } from "@angular/common";
import { Component, computed, effect, input, output, signal, } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => ({ "w-14 h-4.5": a0, "w-16 h-6": a1, "w-20 h-8": a2, "bg-orange-400": a3, "bg-yellow-400": a4, "bg-purple-400": a5, "bg-zinc-500": a6, "cursor-pointer": a7, "opacity-50 cursor-not-allowed": a8 });
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({ "w-4.5 h-3": a0, "w-6 h-4": a1, "w-8 h-6": a2, "border-orange-500": a3, "border-yellow-500 ": a4, "border-purple-500": a5, "translate-x-8": a6, "translate-x-9": a7, "translate-x-11": a8, "translate-x-1": a9, "bg-white": true });
const _c2 = (a0, a1, a2, a3, a4) => ({ "text-xs": a0, "text-sm": a1, "text-base": a2, "text-black": a3, "text-white": a4 });
const _c3 = (a0, a1) => ({ "opacity-100": a0, "opacity-0": a1 });
function ApToggleSwitchComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.label(), "\n");
} }
export class ApToggleSwitchComponent {
    /** 切換開關的標籤文字，預設為 null，不顯示標籤 */
    label = input(null);
    /** 切換開關的大小，預設為 medium */
    size = input("medium");
    /** 主色調，預設為橘色 */
    accentColor = input(undefined);
    /** 是否啟用切換開關，預設為 true，false還是會顯示，只是無法用點擊切換，可以用@input checked切換 */
    disabled = input(false);
    /** 切換是依照內容調整符合大小或是依照父容器調整大小 */
    fitMode = input("content");
    checked = input(true);
    checkedChange = output();
    isChecked = signal(this.checked());
    // ======= Host / Template 專用條件 =======
    hasLabel = computed(() => this.label() !== null);
    isContentMode = computed(() => this.fitMode() === 'content');
    isContainerMode = computed(() => this.fitMode() === 'container');
    labelNotContentMode = computed(() => this.hasLabel() && !this.isContentMode());
    constructor() {
        effect(() => {
            this.isChecked.set(this.checked());
        });
    }
    toggle() {
        this.isChecked.set(!this.isChecked());
        this.checkedChange.emit(this.isChecked());
    }
    static ɵfac = function ApToggleSwitchComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApToggleSwitchComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApToggleSwitchComponent, selectors: [["ap-toggle-switch"]], hostVars: 14, hostBindings: function ApToggleSwitchComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("flex", ctx.labelNotContentMode())("items-center", ctx.labelNotContentMode())("gap-2", ctx.hasLabel())("inline-flex", ctx.isContentMode())("justify-between", ctx.isContainerMode())("block", ctx.isContainerMode())("w-full", ctx.isContainerMode());
        } }, inputs: { label: [1, "label"], size: [1, "size"], accentColor: [1, "accentColor"], disabled: [1, "disabled"], fitMode: [1, "fitMode"], checked: [1, "checked"] }, outputs: { checkedChange: "checkedChange" }, decls: 8, vars: 40, consts: [[1, "relative", "inline-block", "text-zinc-700", "dark:text-zinc-300", "font-medium", "select-none"], [1, "relative", "rounded-full", "flex", "items-center", "transition-colors", "duration-300", "relative", "select-none", 3, "click", "ngClass", "disabled"], [1, "rounded-full", "transition-transform", "duration-300", "drop-shadow-md", 3, "ngClass"], [1, "absolute", "inset-0", "flex", "font-medium", "items-center", "justify-between", "px-2", "text-base", "tracking-wide", 3, "ngClass"], [3, "ngClass"]], template: function ApToggleSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApToggleSwitchComponent_Conditional_0_Template, 2, 1, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵlistener("click", function ApToggleSwitchComponent_Template_button_click_1_listener() { return ctx.toggle(); });
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5, "ON");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 4);
            i0.ɵɵtext(7, "OFF");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.label() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunctionV(7, _c0, [ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large", ctx.isChecked() && (!ctx.accentColor() || ctx.accentColor() === "orange"), ctx.isChecked() && ctx.accentColor() === "yellow", ctx.isChecked() && ctx.accentColor() === "purple", !ctx.isChecked(), !ctx.disabled(), ctx.disabled()]))("disabled", ctx.disabled());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunctionV(17, _c1, [ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large", ctx.isChecked() && (!ctx.accentColor() || ctx.accentColor() === "orange"), ctx.isChecked() && ctx.accentColor() === "yellow", ctx.isChecked() && ctx.accentColor() === "purple", ctx.isChecked() && ctx.size() === "small", ctx.isChecked() && ctx.size() === "medium", ctx.isChecked() && ctx.size() === "large", !ctx.isChecked()]));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(28, _c2, ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large", ctx.accentColor() === "yellow" || ctx.accentColor() === "purple", ctx.accentColor() === "orange"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(34, _c3, ctx.isChecked(), !ctx.isChecked()));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(37, _c3, !ctx.isChecked(), ctx.isChecked()));
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApToggleSwitchComponent, [{
        type: Component,
        args: [{ selector: "ap-toggle-switch", imports: [CommonModule], host: {
                    "[class.flex]": "labelNotContentMode()",
                    "[class.items-center]": "labelNotContentMode()",
                    "[class.gap-2]": "hasLabel()",
                    "[class.inline-flex]": "isContentMode()",
                    "[class.justify-between]": "isContainerMode()",
                    "[class.block]": "isContainerMode()",
                    "[class.w-full]": "isContainerMode()",
                }, template: "\n@if (label()) {\n<div\n  class=\"relative inline-block text-zinc-700 dark:text-zinc-300 font-medium select-none\"\n>\n  {{ label() }}\n</div>\n}\n\n<button\n  (click)=\"toggle()\"\n  class=\"relative rounded-full flex items-center transition-colors duration-300 relative select-none\"\n  [ngClass]=\"{\n    'w-14 h-4.5': size() === 'small',\n    'w-16 h-6': size() === 'medium',\n    'w-20 h-8': size() === 'large',\n    'bg-orange-400': isChecked() && (!accentColor() || accentColor() === 'orange'),\n    'bg-yellow-400': isChecked() && accentColor() === 'yellow',\n    'bg-purple-400': isChecked() && accentColor() === 'purple',\n    'bg-zinc-500': !isChecked(),\n    'cursor-pointer': !disabled(),\n    'opacity-50 cursor-not-allowed': disabled(),\n  }\"\n  [disabled]=\"disabled()\"\n>\n  <div\n    class=\"rounded-full transition-transform duration-300 drop-shadow-md\"\n    [ngClass]=\"{\n      'w-4.5 h-3': size() === 'small',\n      'w-6 h-4': size() === 'medium',\n      'w-8 h-6': size() === 'large',\n      'border-orange-500':\n        isChecked() && (!accentColor() || accentColor() === 'orange'),\n      'border-yellow-500 ': isChecked() && accentColor() === 'yellow',\n      'border-purple-500': isChecked() && accentColor() === 'purple',\n      'translate-x-8': isChecked() && size() === 'small',\n      'translate-x-9': isChecked() && size() === 'medium',\n      'translate-x-11': isChecked() && size() === 'large',\n      'translate-x-1': !isChecked(),\n      'bg-white': true\n    }\"\n  ></div>\n  <div\n    class=\"absolute inset-0 flex font-medium items-center justify-between px-2 text-base tracking-wide\"\n    [ngClass]=\"{\n      'text-xs': size() === 'small',\n      'text-sm': size() === 'medium',\n      'text-base': size() === 'large',\n      'text-black': accentColor() === 'yellow' || accentColor() === 'purple',\n      'text-white': accentColor() === 'orange'\n    }\"\n  >\n    <span [ngClass]=\"{ 'opacity-100': isChecked(), 'opacity-0': !isChecked() }\"\n      >ON</span\n    >\n    <span [ngClass]=\"{ 'opacity-100': !isChecked(), 'opacity-0': isChecked() }\"\n      >OFF</span\n    >\n  </div>\n</button>\n\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApToggleSwitchComponent, { className: "ApToggleSwitchComponent", filePath: "src/ap-components-lib/ap-toggle-switch/ap-toggle-switch.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=ap-toggle-switch.component.js.map