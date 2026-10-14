import { Component, signal, computed } from '@angular/core';
import { ApBadgeComponent } from '../ap-badge/ap-badge.component';
import { ApSelectComponent } from '../ap-select/ap-select.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function ApBadgeListComponent_For_9_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11);
    i0.ɵɵelement(2, "ap-badge", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13)(4, "p", 14);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "pre", 15)(7, "code");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const variant_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", variant_r1.value)("size", variant_r1.size || "md")("variant", variant_r1.variant || "primary");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", variant_r1.subtitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getCodeSnippet(variant_r1));
} }
function ApBadgeListComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 9);
    i0.ɵɵrepeaterCreate(5, ApBadgeListComponent_For_9_For_6_Template, 9, 5, "div", 10, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(category_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(category_r3.variants);
} }
export class ApBadgeListComponent {
    badgeCategories = signal([
        {
            title: 'Sizes',
            variants: [
                { subtitle: 'Small', value: '2', size: 'sm' },
                { subtitle: 'Medium', value: '8', size: 'md' },
                { subtitle: 'Large', value: '4', size: 'lg' },
            ],
        },
        {
            title: 'Variants',
            variants: [
                { subtitle: 'Primary', value: '2', variant: 'primary' },
                { subtitle: 'Success', value: '8', variant: 'success' },
                { subtitle: 'Info', value: '4', variant: 'info' },
                { subtitle: 'Warning', value: '12', variant: 'warning' },
                { subtitle: 'Danger', value: '3', variant: 'danger' },
                { subtitle: 'Rounded', value: '12', variant: 'rounded' },
            ],
        },
        {
            title: 'Values',
            variants: [
                { subtitle: 'Single Digit', value: '5', variant: 'primary' },
                { subtitle: 'Double Digits', value: '42', variant: 'success' },
                { subtitle: 'Triple Digits', value: '999', variant: 'info' },
                { subtitle: 'Text', value: 'NEW', variant: 'danger' },
            ],
        },
        {
            title: 'Combinations',
            variants: [
                { subtitle: 'Small Primary', value: '1', size: 'sm', variant: 'primary' },
                { subtitle: 'Medium Success', value: '5', size: 'md', variant: 'success' },
                { subtitle: 'Large Info', value: '10', size: 'lg', variant: 'info' },
            ],
        },
    ]);
    selectedCategory = signal('all');
    categoryOptions = computed(() => this.badgeCategories().map((c) => ({
        value: c.title,
        label: c.title,
    })));
    filteredCategories = computed(() => {
        const category = this.selectedCategory();
        return category === 'all'
            ? this.badgeCategories()
            : this.badgeCategories().filter((c) => c.title === category);
    });
    onCategoryChange(value) {
        this.selectedCategory.set(value || 'all');
    }
    getCodeSnippet(variant) {
        const attrs = [];
        if (variant.value) {
            const valueStr = typeof variant.value === 'string' ? `'${variant.value}'` : variant.value;
            attrs.push(`[value]="${valueStr}"`);
        }
        if (variant.size && variant.size !== 'md')
            attrs.push(`size="${variant.size}"`);
        if (variant.variant && variant.variant !== 'primary')
            attrs.push(`variant="${variant.variant}"`);
        return `<ap-badge ${attrs.join(' ')}></ap-badge>`;
    }
    static ɵfac = function ApBadgeListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApBadgeListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApBadgeListComponent, selectors: [["ap-badge-list"]], decls: 10, vars: 1, consts: [[1, "border-b", "border-zinc-800", "px-8"], [1, "text-lg", "font-bold"], [1, "max-w-7xl", "mx-auto", "px-8", "py-6"], [1, "mb-10", "max-w-xs", "mx-auto"], ["for", "category-filter", 1, "block", "text-sm", "font-semibold", "text-zinc-300", "mb-3"], ["id", "category-filter", "placeholder", "All Categories", 1, "w-full", 3, "onSelect", "options"], [1, "bg-zinc-800", "p-4", "rounded-2xl", "mb-8"], [1, "border-b", "border-zinc-800/50", "mb-6"], [1, "text-xl", "font-bold", "text-zinc-100", "mb-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "bg-gradient-to-br", "from-zinc-800/80", "to-zinc-900/80", "border", "border-zinc-700/50", "rounded-2xl", "shadow-xl", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-1"], [1, "p-4", "flex", "items-center", "justify-center", "bg-zinc-900/50", "min-h-[5rem]"], [3, "value", "size", "variant"], [1, "p-5", "border-t", "border-zinc-700/50", "bg-zinc-900/60"], [1, "text-sm", "font-semibold", "text-zinc-200", "mb-3"], [1, "bg-zinc-950/60", "text-orange-300", "p-3", "rounded-lg", "text-xs", "overflow-x-auto", "border", "border-zinc-800/50", "font-mono", "leading-relaxed"]], template: function ApBadgeListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Badge Component");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
            i0.ɵɵtext(6, " Filter by Category ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-select", 5);
            i0.ɵɵlistener("onSelect", function ApBadgeListComponent_Template_ap_select_onSelect_7_listener($event) { return ctx.onCategoryChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(8, ApBadgeListComponent_For_9_Template, 7, 1, "div", 6, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("options", ctx.categoryOptions());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filteredCategories());
        } }, dependencies: [ApBadgeComponent, ApSelectComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApBadgeListComponent, [{
        type: Component,
        args: [{ selector: 'ap-badge-list', imports: [ApBadgeComponent, ApSelectComponent], template: "<div class=\"border-b border-zinc-800 px-8\">\n  <h1 class=\"text-lg font-bold\">Badge Component</h1>\n</div>\n\n<div class=\"max-w-7xl mx-auto px-8 py-6\">\n  <div class=\"mb-10 max-w-xs mx-auto\">\n    <label\n      for=\"category-filter\"\n      class=\"block text-sm font-semibold text-zinc-300 mb-3\"\n    >\n      Filter by Category\n    </label>\n    <ap-select\n      id=\"category-filter\"\n      class=\"w-full\"\n      [options]=\"categoryOptions()\"\n      placeholder=\"All Categories\"\n      (onSelect)=\"onCategoryChange($event)\"\n    >\n    </ap-select>\n  </div>\n\n  @for (category of filteredCategories(); track category.title) {\n  <div class=\"bg-zinc-800 p-4 rounded-2xl mb-8\">\n    <div class=\"border-b border-zinc-800/50 mb-6\">\n      <h3 class=\"text-xl font-bold text-zinc-100 mb-2\">{{ category.title }}</h3>\n    </div>\n\n    <div\n      class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\"\n    >\n      @for (variant of category.variants; track variant.subtitle) {\n      <div\n        class=\"bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1\"\n      >\n        <div\n          class=\"p-4 flex items-center justify-center bg-zinc-900/50 min-h-[5rem]\"\n        >\n          <ap-badge\n            [value]=\"variant.value\"\n            [size]=\"variant.size || 'md'\"\n            [variant]=\"variant.variant || 'primary'\"\n          >\n          </ap-badge>\n        </div>\n\n        <div class=\"p-5 border-t border-zinc-700/50 bg-zinc-900/60\">\n          <p class=\"text-sm font-semibold text-zinc-200 mb-3\">\n            {{ variant.subtitle }}\n          </p>\n          <pre\n            class=\"bg-zinc-950/60 text-orange-300 p-3 rounded-lg text-xs overflow-x-auto border border-zinc-800/50 font-mono leading-relaxed\"\n          ><code>{{ getCodeSnippet(variant) }}</code></pre>\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n  }\n</div>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApBadgeListComponent, { className: "ApBadgeListComponent", filePath: "src/ap-components-lib/ap-badge-list/ap-badge-list.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-badge-list.component.js.map