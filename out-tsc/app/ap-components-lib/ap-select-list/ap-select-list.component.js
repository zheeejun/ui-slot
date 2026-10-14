import { Component, signal, computed } from '@angular/core';
import { ApSelectComponent } from '../ap-select/ap-select.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function ApSelectListComponent_For_9_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12);
    i0.ɵɵelement(2, "ap-select", 13);
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
    i0.ɵɵproperty("size", variant_r1.size || "medium")("variant", variant_r1.variant || "default")("accentColor", variant_r1.accentColor || "orange")("placeholder", variant_r1.placeholder || "Select an option")("selected", variant_r1.selected ?? null)("options", ctx_r1.sampleOptions);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(variant_r1.subtitle);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getCodeSnippet(variant_r1));
} }
function ApSelectListComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 9);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 10);
    i0.ɵɵrepeaterCreate(7, ApSelectListComponent_For_9_For_8_Template, 9, 8, "div", 11, _forTrack1);
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
export class ApSelectListComponent {
    sampleOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' }
    ];
    selectCategories = signal([
        {
            title: 'Default Size',
            description: 'Medium size select dropdowns with different states',
            variants: [
                { subtitle: 'Unselected', placeholder: 'Select an option', selected: null },
                { subtitle: 'Selected', placeholder: 'Select an option', selected: 'option2' }
            ]
        },
        {
            title: 'Small Size',
            description: 'Small size select dropdowns',
            variants: [
                { subtitle: 'Unselected', size: 'small', placeholder: 'Select an option', selected: null },
                { subtitle: 'Selected', size: 'small', placeholder: 'Select an option', selected: 'option2' }
            ]
        },
        {
            title: 'Large Size',
            description: 'Large size select dropdowns',
            variants: [
                { subtitle: 'Unselected', size: 'large', placeholder: 'Select an option', selected: null },
                { subtitle: 'Selected', size: 'large', placeholder: 'Select an option', selected: 'option2' }
            ]
        },
        {
            title: 'Default Variant',
            description: 'Select dropdowns with default variant style',
            variants: [
                { subtitle: 'Unselected', variant: 'default', placeholder: 'Select an option', selected: null },
                { subtitle: 'Selected', variant: 'default', placeholder: 'Select an option', selected: 'option2' }
            ]
        },
        {
            title: 'Game UI Variant',
            description: 'Select dropdowns with game-ui variant style',
            variants: [
                { subtitle: 'Unselected', variant: 'game-ui', placeholder: 'Select an option', selected: null },
                { subtitle: 'Selected', variant: 'game-ui', placeholder: 'Select an option', selected: 'option2' }
            ]
        },
        {
            title: 'Accent Colors',
            description: 'Select dropdowns with different accent colors',
            variants: [
                { subtitle: 'Orange', accentColor: 'orange', selected: 'option2' },
                { subtitle: 'Yellow', accentColor: 'yellow', selected: 'option2' }
            ]
        },
        {
            title: 'Combined',
            description: 'Select dropdowns with combined properties',
            variants: [
                { subtitle: 'Large + Game UI + Yellow', size: 'large', variant: 'game-ui', accentColor: 'yellow', selected: 'option3' },
                { subtitle: 'Small + Default + Orange', size: 'small', variant: 'default', accentColor: 'orange', selected: 'option1' }
            ]
        }
    ]);
    selectedCategory = signal('all');
    categoryOptions = computed(() => this.selectCategories().map(c => ({ value: c.title, label: c.title })));
    filteredCategories = computed(() => {
        const category = this.selectedCategory();
        return category === 'all'
            ? this.selectCategories()
            : this.selectCategories().filter(c => c.title === category);
    });
    onCategoryChange(value) {
        this.selectedCategory.set(value || 'all');
    }
    getCodeSnippet(variant) {
        const attrs = [];
        if (variant.size && variant.size !== 'medium')
            attrs.push(`[size]="'${variant.size}'"`);
        if (variant.variant && variant.variant !== 'default')
            attrs.push(`[variant]="'${variant.variant}'"`);
        if (variant.accentColor && variant.accentColor !== 'orange')
            attrs.push(`[accentColor]="'${variant.accentColor}'"`);
        if (variant.placeholder)
            attrs.push(`placeholder="${variant.placeholder}"`);
        if (variant.selected)
            attrs.push(`[selected]="'${variant.selected}'"`);
        attrs.push(`[options]="options"`);
        return `<ap-select ${attrs.join(' ')}></ap-select>`;
    }
    static ɵfac = function ApSelectListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApSelectListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApSelectListComponent, selectors: [["ap-select-list"]], decls: 10, vars: 1, consts: [[1, "border-b", "border-zinc-800", "px-8"], [1, "text-lg", "font-bold"], [1, "max-w-7xl", "mx-auto", "px-8", "py-6"], [1, "mb-10", "max-w-xs", "mx-auto"], ["for", "category-filter", 1, "block", "text-sm", "font-semibold", "text-zinc-300", "mb-3"], ["id", "category-filter", "placeholder", "All Categories", 1, "w-full", 3, "onSelect", "options"], [1, "bg-zinc-800", "p-4", "rounded-2xl", "mb-8"], [1, "border-b", "border-zinc-800/50", "mb-6"], [1, "text-xl", "font-bold", "text-zinc-100", "mb-2"], [1, "text-zinc-400"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "bg-gradient-to-br", "from-zinc-800/80", "to-zinc-900/80", "border", "border-zinc-700/50", "rounded-2xl", "shadow-xl", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-1"], [1, "p-4", "flex", "items-center", "justify-center", "bg-zinc-900/50", "min-h-[5rem]"], [1, "w-full", 3, "size", "variant", "accentColor", "placeholder", "selected", "options"], [1, "p-5", "border-t", "border-zinc-700/50", "bg-zinc-900/60"], [1, "text-sm", "font-semibold", "text-zinc-200", "mb-3"], [1, "bg-zinc-950/60", "text-orange-300", "p-3", "rounded-lg", "text-xs", "overflow-x-auto", "border", "border-zinc-800/50", "font-mono", "leading-relaxed"]], template: function ApSelectListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Select Component");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
            i0.ɵɵtext(6, " Filter by Category ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-select", 5);
            i0.ɵɵlistener("onSelect", function ApSelectListComponent_Template_ap_select_onSelect_7_listener($event) { return ctx.onCategoryChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(8, ApSelectListComponent_For_9_Template, 9, 2, "div", 6, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("options", ctx.categoryOptions());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filteredCategories());
        } }, dependencies: [ApSelectComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApSelectListComponent, [{
        type: Component,
        args: [{ selector: 'ap-select-list', imports: [ApSelectComponent], template: "<div class=\"border-b border-zinc-800 px-8\">\n  <h1 class=\"text-lg font-bold\">Select Component</h1>\n</div>\n\n<div class=\"max-w-7xl mx-auto px-8 py-6\">\n  <div class=\"mb-10 max-w-xs mx-auto\">\n    <label for=\"category-filter\" class=\"block text-sm font-semibold text-zinc-300 mb-3\">\n      Filter by Category\n    </label>\n    <ap-select\n      id=\"category-filter\"\n      class=\"w-full\"\n      [options]=\"categoryOptions()\"\n      placeholder=\"All Categories\"\n      (onSelect)=\"onCategoryChange($event)\">\n    </ap-select>\n  </div>\n\n  @for (category of filteredCategories(); track category.title) {\n  <div class=\"bg-zinc-800 p-4 rounded-2xl mb-8\">\n    <div class=\"border-b border-zinc-800/50 mb-6\">\n      <h3 class=\"text-xl font-bold text-zinc-100 mb-2\">{{ category.title }}</h3>\n      <p class=\"text-zinc-400\">{{ category.description }}</p>\n    </div>\n\n    <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\">\n      @for (variant of category.variants; track variant.subtitle) {\n      <div class=\"bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1\">\n        <div class=\"p-4 flex items-center justify-center bg-zinc-900/50 min-h-[5rem]\">\n          <ap-select\n            class=\"w-full\"\n            [size]=\"variant.size || 'medium'\"\n            [variant]=\"variant.variant || 'default'\"\n            [accentColor]=\"variant.accentColor || 'orange'\"\n            [placeholder]=\"variant.placeholder || 'Select an option'\"\n            [selected]=\"variant.selected ?? null\"\n            [options]=\"sampleOptions\">\n          </ap-select>\n        </div>\n\n        <div class=\"p-5 border-t border-zinc-700/50 bg-zinc-900/60\">\n          <p class=\"text-sm font-semibold text-zinc-200 mb-3\">{{ variant.subtitle }}</p>\n          <pre class=\"bg-zinc-950/60 text-orange-300 p-3 rounded-lg text-xs overflow-x-auto border border-zinc-800/50 font-mono leading-relaxed\"><code>{{ getCodeSnippet(variant) }}</code></pre>\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n  }\n</div>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApSelectListComponent, { className: "ApSelectListComponent", filePath: "src/ap-components-lib/ap-select-list/ap-select-list.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-select-list.component.js.map