import { Component, signal, computed } from '@angular/core';
import { ApInputBox } from '../ap-input-box/ap-input-box';
import { ApSelectComponent } from '../ap-select/ap-select.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function ApInputListComponent_For_9_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12);
    i0.ɵɵelement(2, "ap-input-box", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "p", 15);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "pre", 16)(7, "code");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const variant_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", variant_r1.type || "text")("size", variant_r1.size || "medium")("accentColor", variant_r1.accentColor || "orange")("icon", variant_r1.icon ?? null)("placeholder", variant_r1.placeholder ?? null)("value", variant_r1.value || "")("error", variant_r1.error || false)("disabled", variant_r1.disabled || false)("prefix", variant_r1.prefix ?? null)("suffix", variant_r1.suffix ?? null);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(variant_r1.subtitle);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getCodeSnippet(variant_r1));
} }
function ApInputListComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 9);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 10);
    i0.ɵɵrepeaterCreate(7, ApInputListComponent_For_9_For_8_Template, 9, 12, "div", 11, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(category_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r3.description);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(category_r3.variants);
} }
export class ApInputListComponent {
    inputCategories = signal([
        {
            title: 'Input Types',
            description: 'Different input field types',
            variants: [
                { subtitle: 'Text', type: 'text', placeholder: 'Enter text' },
                { subtitle: 'Number', type: 'number', placeholder: 'Enter number' },
                { subtitle: 'Email', type: 'email', placeholder: 'Enter email' },
                { subtitle: 'Password', type: 'password', placeholder: 'Enter password' },
                { subtitle: 'Tel', type: 'tel', placeholder: 'Enter phone' },
                { subtitle: 'URL', type: 'url', placeholder: 'Enter URL' },
                { subtitle: 'Date', type: 'date' },
                { subtitle: 'Time', type: 'time' }
            ]
        },
        {
            title: 'Sizes',
            description: 'Different input sizes',
            variants: [
                { subtitle: 'Small', size: 'small', placeholder: 'Small input' },
                { subtitle: 'Medium', size: 'medium', placeholder: 'Medium input' },
                { subtitle: 'Large', size: 'large', placeholder: 'Large input' }
            ]
        },
        {
            title: 'Accent Colors',
            description: 'Different accent colors',
            variants: [
                { subtitle: 'Orange', accentColor: 'orange', placeholder: 'Orange accent' },
                { subtitle: 'Yellow', accentColor: 'yellow', placeholder: 'Yellow accent' }
            ]
        },
        {
            title: 'States',
            description: 'Different input states',
            variants: [
                { subtitle: 'Normal', placeholder: 'Normal state' },
                { subtitle: 'With Value', placeholder: 'Placeholder text', value: 'Filled value' },
                { subtitle: 'Disabled', placeholder: 'Disabled input', disabled: true },
                { subtitle: 'Error', placeholder: 'Error state', error: true }
            ]
        },
        {
            title: 'With Icons',
            description: 'Inputs with icons',
            variants: [
                { subtitle: 'Search Icon', icon: 'search', placeholder: 'Search...' },
                { subtitle: 'Email Icon', icon: 'mail', placeholder: 'Email address', type: 'email' },
                { subtitle: 'Lock Icon', icon: 'lock', placeholder: 'Password', type: 'password' }
            ]
        },
        {
            title: 'Prefix & Suffix',
            description: 'Inputs with prefix and suffix',
            variants: [
                { subtitle: 'Dollar Prefix', prefix: '$', placeholder: '0.00', type: 'number' },
                { subtitle: 'Percent Suffix', suffix: '%', placeholder: '0', type: 'number' },
                { subtitle: 'URL Prefix', prefix: 'https://', placeholder: 'example.com' }
            ]
        },
        {
            title: 'Combined',
            description: 'Inputs with combined properties',
            variants: [
                { subtitle: 'Large + Icon + Orange', size: 'large', icon: 'search', accentColor: 'orange', placeholder: 'Search...' },
                { subtitle: 'Small + Prefix + Yellow', size: 'small', prefix: '$', accentColor: 'yellow', placeholder: '0.00', type: 'number' },
                { subtitle: 'Medium + Error + Icon', size: 'medium', icon: 'alert-circle', error: true, placeholder: 'Invalid input' }
            ]
        }
    ]);
    selectedCategory = signal('all');
    categoryOptions = computed(() => this.inputCategories().map(c => ({ value: c.title, label: c.title })));
    filteredCategories = computed(() => {
        const category = this.selectedCategory();
        return category === 'all'
            ? this.inputCategories()
            : this.inputCategories().filter(c => c.title === category);
    });
    onCategoryChange(value) {
        this.selectedCategory.set(value || 'all');
    }
    getCodeSnippet(variant) {
        const attrs = [];
        if (variant.type && variant.type !== 'text')
            attrs.push(`type="${variant.type}"`);
        if (variant.size && variant.size !== 'medium')
            attrs.push(`size="${variant.size}"`);
        if (variant.accentColor && variant.accentColor !== 'orange')
            attrs.push(`accentColor="${variant.accentColor}"`);
        if (variant.icon)
            attrs.push(`icon="${variant.icon}"`);
        if (variant.placeholder)
            attrs.push(`placeholder="${variant.placeholder}"`);
        if (variant.value)
            attrs.push(`value="${variant.value}"`);
        if (variant.error)
            attrs.push(`[error]="true"`);
        if (variant.disabled)
            attrs.push(`[disabled]="true"`);
        if (variant.prefix)
            attrs.push(`prefix="${variant.prefix}"`);
        if (variant.suffix)
            attrs.push(`suffix="${variant.suffix}"`);
        return `<ap-input-box ${attrs.join(' ')}></ap-input-box>`;
    }
    static ɵfac = function ApInputListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApInputListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApInputListComponent, selectors: [["ap-input-list"]], decls: 10, vars: 1, consts: [[1, "border-b", "border-zinc-800", "px-8"], [1, "text-lg", "font-bold"], [1, "max-w-7xl", "mx-auto", "px-8", "py-6"], [1, "mb-10", "max-w-xs", "mx-auto"], ["for", "category-filter", 1, "block", "text-sm", "font-semibold", "text-zinc-300", "mb-3"], ["id", "category-filter", "placeholder", "All Categories", 1, "w-full", 3, "onSelect", "options"], [1, "bg-zinc-800", "p-4", "rounded-2xl", "mb-8"], [1, "border-b", "border-zinc-800/50", "mb-6"], [1, "text-xl", "font-bold", "text-zinc-100", "mb-2"], [1, "text-zinc-400"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "bg-gradient-to-br", "from-zinc-800/80", "to-zinc-900/80", "border", "border-zinc-700/50", "rounded-2xl", "shadow-xl", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-1"], [1, "p-4", "flex", "items-center", "justify-center", "bg-zinc-900/50", "min-h-[5rem]"], [1, "w-full", 3, "type", "size", "accentColor", "icon", "placeholder", "value", "error", "disabled", "prefix", "suffix"], [1, "p-5", "border-t", "border-zinc-700/50", "bg-zinc-900/60"], [1, "text-sm", "font-semibold", "text-zinc-200", "mb-3"], [1, "bg-zinc-950/60", "text-orange-300", "p-3", "rounded-lg", "text-xs", "overflow-x-auto", "border", "border-zinc-800/50", "font-mono", "leading-relaxed"]], template: function ApInputListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Input Box Component");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
            i0.ɵɵtext(6, " Filter by Category ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-select", 5);
            i0.ɵɵlistener("onSelect", function ApInputListComponent_Template_ap_select_onSelect_7_listener($event) { return ctx.onCategoryChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(8, ApInputListComponent_For_9_Template, 9, 2, "div", 6, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("options", ctx.categoryOptions());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filteredCategories());
        } }, dependencies: [ApInputBox, ApSelectComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApInputListComponent, [{
        type: Component,
        args: [{ selector: 'ap-input-list', imports: [ApInputBox, ApSelectComponent], template: "<div class=\"border-b border-zinc-800 px-8\">\n  <h1 class=\"text-lg font-bold\">Input Box Component</h1>\n</div>\n\n<div class=\"max-w-7xl mx-auto px-8 py-6\">\n  <div class=\"mb-10 max-w-xs mx-auto\">\n    <label for=\"category-filter\" class=\"block text-sm font-semibold text-zinc-300 mb-3\">\n      Filter by Category\n    </label>\n    <ap-select\n      id=\"category-filter\"\n      class=\"w-full\"\n      [options]=\"categoryOptions()\"\n      placeholder=\"All Categories\"\n      (onSelect)=\"onCategoryChange($event)\">\n    </ap-select>\n  </div>\n\n  @for (category of filteredCategories(); track category.title) {\n  <div class=\"bg-zinc-800 p-4 rounded-2xl mb-8\">\n    <div class=\"border-b border-zinc-800/50 mb-6\">\n      <h3 class=\"text-xl font-bold text-zinc-100 mb-2\">{{ category.title }}</h3>\n      <p class=\"text-zinc-400\">{{ category.description }}</p>\n    </div>\n\n    <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\">\n      @for (variant of category.variants; track variant.subtitle) {\n      <div class=\"bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1\">\n        <div class=\"p-4 flex items-center justify-center bg-zinc-900/50 min-h-[5rem]\">\n          <ap-input-box\n            class=\"w-full\"\n            [type]=\"variant.type || 'text'\"\n            [size]=\"variant.size || 'medium'\"\n            [accentColor]=\"variant.accentColor || 'orange'\"\n            [icon]=\"variant.icon ?? null\"\n            [placeholder]=\"variant.placeholder ?? null\"\n            [value]=\"variant.value || ''\"\n            [error]=\"variant.error || false\"\n            [disabled]=\"variant.disabled || false\"\n            [prefix]=\"variant.prefix ?? null\"\n            [suffix]=\"variant.suffix ?? null\">\n          </ap-input-box>\n        </div>\n\n        <div class=\"p-5 border-t border-zinc-700/50 bg-zinc-900/60\">\n          <p class=\"text-sm font-semibold text-zinc-200 mb-3\">{{ variant.subtitle }}</p>\n          <pre class=\"bg-zinc-950/60 text-orange-300 p-3 rounded-lg text-xs overflow-x-auto border border-zinc-800/50 font-mono leading-relaxed\"><code>{{ getCodeSnippet(variant) }}</code></pre>\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n  }\n</div>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApInputListComponent, { className: "ApInputListComponent", filePath: "src/ap-components-lib/ap-input-list/ap-input-list.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-input-list.component.js.map