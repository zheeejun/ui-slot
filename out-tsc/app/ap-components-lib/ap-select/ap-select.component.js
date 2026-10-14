import { CommonModule } from '@angular/common';
import { Component, computed, effect, HostListener, input, output, signal, ViewChild, ViewChildren } from '@angular/core';
import { ApIconComponent } from "../ap-icon/ap-icon.component";
import { take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["dropdownContainer"];
const _c1 = ["optionItem"];
const _c2 = (a0, a1, a2) => ({ "text-xs": a0, "text-sm": a1, "text-base": a2 });
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => ({ "opacity-50 cursor-not-allowed pointer-events-none": a0, "text-zinc-800 dark:text-white": a1, "text-zinc-400 dark:text-zinc-500": a2, "focus:ring-orange-400/40 focus:border-orange-400": a3, "dark:focus:ring-orange-400 dark:focus:border-orange-500": a4, "focus:ring-yellow-400/40 focus:border-yellow-400": a5, "dark:focus:ring-yellow-400 dark:focus:border-yellow-500": a6, "px-2 py-1": a7, "px-3 py-2.5": a8, "px-5 py-3": a9, "border-2": a10 });
const _c4 = (a0, a1, a2, a3, a4) => ({ "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-500 font-bold": a0, "hover:bg-zinc-100 dark:hover:bg-zinc-600": a1, "px-2 py-1": a2, "px-3 py-2.5": a3, "px-5 py-3": a4 });
const _forTrack0 = ($index, $item) => $item.value;
function ApSelectComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.label(), " ");
} }
function ApSelectComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 10);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.displayLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.displayPrize());
} }
function ApSelectComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.displayLabel());
} }
function ApSelectComponent_Conditional_6_For_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12, 1);
    i0.ɵɵlistener("click", function ApSelectComponent_Conditional_6_For_3_Template_li_click_0_listener() { const option_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectOption(option_r3)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(2, _c4, ctx_r0.currentOption() === option_r3, ctx_r0.currentOption() !== option_r3, ctx_r0.size() === "small", ctx_r0.size() === "medium", ctx_r0.size() === "large"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", option_r3.label, " ");
} }
function ApSelectComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 8, 0);
    i0.ɵɵrepeaterCreate(2, ApSelectComponent_Conditional_6_For_3_Template, 3, 8, "li", 11, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.options());
} }
export class ApSelectComponent {
    elementRef;
    /** 標籤文字 */
    label = input(null);
    /** 元件樣式變化 */
    variant = input('default');
    /** 預設選中的值 */
    selected = input(null);
    /** 下拉選單是否開啟 */
    isOpen = signal(false);
    /** 選中的選項 */
    currentOption = signal(null);
    /** 元件大小 */
    size = input('medium');
    /** 主色調 */
    accentColor = input('orange');
    /** 是否禁用元件 */
    disabled = input(false);
    /** 預設提示文字 */
    placeholder = input('Select an option');
    hasPrize = input(false);
    /** 轉換後的選項陣列 */
    options = input([
        { value: 'option1', label: 'Option 1', },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ]);
    /** 選項改變事件 */
    onSelect = output();
    /** 下拉選單容器的引用 */
    dropdownContainer;
    /** 所有選項列表項的引用 */
    optionItems;
    constructor(elementRef) {
        this.elementRef = elementRef;
        // 新增：監聽 selected 變動並執行新邏輯
        effect(() => {
            const selectedKey = this.selected();
            // 找到對應的選項
            const option = this.options().find(opt => opt.value === selectedKey) || null;
            this.currentOption.set(option);
        });
    }
    /** 內容初始化後的生命週期 */
    ngAfterViewInit() {
        if (this.selected() !== null) {
            this.currentOption.set(this.options().find(option => option.value === this.selected()) || null);
        }
    }
    /** 選擇選項 */
    selectOption(option) {
        if (this.disabled())
            return;
        this.onSelect.emit(option.value);
        this.isOpen.set(false);
        this.currentOption.set(option);
    }
    /** 切換下拉選單開關 */
    toggle() {
        if (this.disabled())
            return;
        this.isOpen.set(!this.isOpen());
        if (this.isOpen()) {
            // 延遲執行以確保選項已經渲染
            const subscription = this.optionItems.changes.pipe(take(1)).subscribe(() => {
                this.scrollToCurrentOption();
                subscription.unsubscribe();
            });
        }
    }
    /** 顯示欄位 */
    displayLabel = computed(() => {
        if (this.currentOption()) {
            return this.currentOption().label;
        }
        return this.placeholder();
    });
    /** 顯示欄位 */
    displayPrize = computed(() => {
        if (this.currentOption()) {
            return this.currentOption().prize || '';
        }
        return '';
    });
    /** 點擊文件時關閉下拉選單 */
    onDocumentClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isOpen.set(false);
        }
    }
    /** 滾動到當前選項 */
    scrollToCurrentOption() {
        // 如果沒有當前選項，則不執行任何操作
        if (!this.currentOption())
            return;
        // 找到當前選項對應的列表項目
        const currentOptionIndex = this.options().indexOf(this.currentOption());
        if (currentOptionIndex === -1)
            return;
        // 獲取對應的 DOM 元素
        const optionElements = this.optionItems.toArray();
        const targetElement = optionElements[currentOptionIndex]?.nativeElement;
        if (targetElement) {
            // 使用 scrollIntoView 滾動到可見區域
            targetElement.scrollIntoView({
                behavior: 'auto', // 瞬間滾動
                block: 'nearest', // 垂直方向：最近的邊緣
                inline: 'nearest' // 水平方向：最近的邊緣
            });
        }
    }
    static ɵfac = function ApSelectComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApSelectComponent, selectors: [["ap-select"]], viewQuery: function ApSelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionItems = _t);
        } }, hostBindings: function ApSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ApSelectComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, i0.ɵɵresolveDocument);
        } }, inputs: { label: [1, "label"], variant: [1, "variant"], selected: [1, "selected"], size: [1, "size"], accentColor: [1, "accentColor"], disabled: [1, "disabled"], placeholder: [1, "placeholder"], hasPrize: [1, "hasPrize"], options: [1, "options"] }, outputs: { onSelect: "onSelect" }, decls: 7, vars: 25, consts: [["dropdownContainer", ""], ["optionItem", ""], [1, "block", "mb-1", "text-zinc-700", "dark:text-zinc-300", "font-medium", "select-none"], [1, "relative", "w-full", 3, "ngClass"], [1, "flex", "w-full", "items-center", "rounded-lg", "bg-white", "dark:bg-zinc-900", "border", "border-zinc-300", "hover:border-zinc-400", "dark:border-zinc-500", "dark:hover:border-zinc-400", "focus:ring-2", "dark:focus:ring-1", "transition-colors", "cursor-pointer", "truncate", 3, "click", "ngClass"], [1, "flex", "min-w-0", "flex-1", "items-center", "justify-between", "gap-2"], [1, "flex-1", "min-w-0"], ["name", "chevron-down", 1, "shrink-0", "size-4", "transition-transform"], [1, "absolute", "mt-1", "w-full", "max-h-60", "rounded-lg", "bg-white", "border", "border-zinc-300", "dark:bg-zinc-900", "dark:border-zinc-400", "shadow-lg", "overflow-auto", "animate-fade", "animate-duration-200", "z-dropdown"], [1, "min-w-0", "truncate"], [1, "shrink-0"], [1, "cursor-pointer", "text-zinc-700", "dark:text-white", "transition-colors", "first:rounded-t-lg", "last:rounded-b-lg", 3, "ngClass"], [1, "cursor-pointer", "text-zinc-700", "dark:text-white", "transition-colors", "first:rounded-t-lg", "last:rounded-b-lg", 3, "click", "ngClass"]], template: function ApSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApSelectComponent_Conditional_0_Template, 2, 1, "label", 2);
            i0.ɵɵelementStart(1, "div", 3)(2, "div", 4);
            i0.ɵɵlistener("click", function ApSelectComponent_Template_div_click_2_listener() { return ctx.toggle(); });
            i0.ɵɵconditionalCreate(3, ApSelectComponent_Conditional_3_Template, 5, 2, "div", 5)(4, ApSelectComponent_Conditional_4_Template, 2, 1, "span", 6);
            i0.ɵɵelement(5, "ap-icon", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, ApSelectComponent_Conditional_6_Template, 4, 0, "ul", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.label() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(9, _c2, ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunctionV(13, _c3, [ctx.disabled(), ctx.currentOption(), !ctx.currentOption(), ctx.accentColor() === "orange", ctx.accentColor() === "orange", ctx.accentColor() === "yellow", ctx.accentColor() === "yellow", ctx.size() === "small", ctx.size() === "medium", ctx.size() === "large", ctx.size() === "large"]));
            i0.ɵɵattribute("tabindex", ctx.disabled() ? -1 : 0)("aria-disabled", ctx.disabled());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.hasPrize() ? 3 : 4);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("rotate-180", ctx.isOpen());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isOpen() ? 6 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApSelectComponent, [{
        type: Component,
        args: [{ selector: 'ap-select', imports: [CommonModule, ApIconComponent], template: "@if (label()) {\n  <label class=\"block mb-1 text-zinc-700 dark:text-zinc-300 font-medium select-none\">\n    {{ label() }}\n  </label>\n}\n\n<div class=\"relative w-full\"\n  [ngClass]=\"{\n    'text-xs': size() === 'small',\n    'text-sm': size() === 'medium',\n    'text-base': size() === 'large',\n  }\"\n>\n  <!-- \u9EDE\u64CA\u6309\u9215 -->\n  <div\n    [attr.tabindex]=\"disabled() ? -1 : 0\"\n    [attr.aria-disabled]=\"disabled()\"\n    class=\"\n      flex w-full items-center rounded-lg bg-white dark:bg-zinc-900 \n      border border-zinc-300 hover:border-zinc-400 dark:border-zinc-500 dark:hover:border-zinc-400 \n      focus:ring-2 dark:focus:ring-1 transition-colors cursor-pointer truncate\"\n    [ngClass]=\"{\n      'opacity-50 cursor-not-allowed pointer-events-none': disabled(),\n      'text-zinc-800 dark:text-white' : currentOption(),\n      'text-zinc-400 dark:text-zinc-500' : !currentOption(),\n      'focus:ring-orange-400/40 focus:border-orange-400': accentColor() === 'orange', \n      'dark:focus:ring-orange-400 dark:focus:border-orange-500': accentColor() === 'orange',\n      'focus:ring-yellow-400/40 focus:border-yellow-400': accentColor() === 'yellow',\n      'dark:focus:ring-yellow-400 dark:focus:border-yellow-500': accentColor() === 'yellow',\n      'px-2 py-1': size() === 'small',\n      'px-3 py-2.5': size() === 'medium',\n      'px-5 py-3': size() === 'large',\n      'border-2': size() === 'large'\n    }\"\n    (click)=\"toggle()\"\n  >\n    @if (hasPrize()) {\n      <div class=\"flex min-w-0 flex-1 items-center justify-between gap-2\">\n        <span class=\"min-w-0 truncate\">{{ displayLabel() }}</span>\n        <span class=\"shrink-0\">{{ displayPrize() }}</span>\n      </div>\n    } @else {\n      <span class=\"flex-1 min-w-0\">{{ displayLabel() }}</span>\n    }\n    \n    <ap-icon class=\"shrink-0 size-4 transition-transform\"  name=\"chevron-down\" [class.rotate-180]=\"isOpen()\" />\n  </div>\n\n  <!-- \u4E0B\u62C9\u9078\u55AE -->\n  @if (isOpen()) {\n    <ul \n      #dropdownContainer\n      class=\"\n        absolute mt-1 w-full max-h-60 rounded-lg bg-white border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-400\n        shadow-lg overflow-auto animate-fade animate-duration-200 z-dropdown\n      \">\n      @for (option of options(); track option.value) {\n        <li\n          #optionItem\n          class=\"cursor-pointer text-zinc-700 dark:text-white\n            transition-colors first:rounded-t-lg last:rounded-b-lg\"\n          [ngClass]=\"{\n            'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-500 font-bold'  :currentOption() === option,\n            'hover:bg-zinc-100 dark:hover:bg-zinc-600': currentOption() !== option,\n            'px-2 py-1': size() === 'small',\n            'px-3 py-2.5': size() === 'medium',\n            'px-5 py-3': size() === 'large',\n          }\"\n          (click)=\"selectOption(option)\"\n        >\n          {{ option.label }}\n        </li>\n      }\n    </ul>\n  }\n</div>\n" }]
    }], () => [{ type: i0.ElementRef }], { dropdownContainer: [{
            type: ViewChild,
            args: ['dropdownContainer', { static: false }]
        }], optionItems: [{
            type: ViewChildren,
            args: ['optionItem']
        }], 
    /** 點擊文件時關閉下拉選單 */
    onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApSelectComponent, { className: "ApSelectComponent", filePath: "src/ap-components-lib/ap-select/ap-select.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=ap-select.component.js.map