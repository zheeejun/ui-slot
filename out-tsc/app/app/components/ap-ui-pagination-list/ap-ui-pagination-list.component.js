import { Component, signal, computed } from '@angular/core';
import { ApUiPaginationComponent } from '../ap-ui-pagination/ap-pagination.component';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import * as i0 from "@angular/core";
const _c0 = (a0, a1, a2) => ({ currentPage: a0, totalPages: a1, showPages: a2 });
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function ApUiPaginationListComponent_For_9_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "ap-ui-pagination", 13);
    i0.ɵɵlistener("pageChanged", function ApUiPaginationListComponent_For_9_For_8_Template_ap_ui_pagination_pageChanged_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onPageChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 14)(4, "p", 15);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "pre", 16)(7, "code");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const variant_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("variant", variant_r3.variant || "quick")("config", i0.ɵɵpureFunction3(4, _c0, variant_r3.currentPage, variant_r3.totalPages, variant_r3.showPages));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(variant_r3.subtitle);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getCodeSnippet(variant_r3));
} }
function ApUiPaginationListComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 9);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 10);
    i0.ɵɵrepeaterCreate(7, ApUiPaginationListComponent_For_9_For_8_Template, 9, 8, "div", 11, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(category_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r4.description);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(category_r4.variants);
} }
export class ApUiPaginationListComponent {
    paginationCategories = signal([
        {
            title: 'Variants',
            description: 'Different visual styles for pagination',
            variants: [
                { subtitle: 'Quick', variant: 'quick', currentPage: 1, totalPages: 10 },
                { subtitle: 'Event', variant: 'event', currentPage: 1, totalPages: 10 },
            ],
        },
        {
            title: 'Page States',
            description: 'Different current page positions',
            variants: [
                {
                    subtitle: 'First Page',
                    variant: 'quick',
                    currentPage: 1,
                    totalPages: 10,
                },
                {
                    subtitle: 'Middle Page',
                    variant: 'quick',
                    currentPage: 5,
                    totalPages: 10,
                },
                {
                    subtitle: 'Last Page',
                    variant: 'quick',
                    currentPage: 10,
                    totalPages: 10,
                },
            ],
        },
        {
            title: 'Total Pages',
            description: 'Different total page counts',
            variants: [
                {
                    subtitle: 'Few Pages (5)',
                    variant: 'quick',
                    currentPage: 3,
                    totalPages: 5,
                },
                {
                    subtitle: 'Medium Pages (10)',
                    variant: 'quick',
                    currentPage: 5,
                    totalPages: 10,
                },
                {
                    subtitle: 'Many Pages (50)',
                    variant: 'quick',
                    currentPage: 25,
                    totalPages: 50,
                },
                {
                    subtitle: 'Very Many Pages (100)',
                    variant: 'quick',
                    currentPage: 50,
                    totalPages: 100,
                },
            ],
        },
        {
            title: 'Show Pages',
            description: 'Different showPages configurations',
            variants: [
                {
                    subtitle: 'Show 1 Page Around',
                    variant: 'quick',
                    currentPage: 10,
                    totalPages: 20,
                    showPages: 1,
                },
                {
                    subtitle: 'Show 2 Pages Around',
                    variant: 'quick',
                    currentPage: 10,
                    totalPages: 20,
                    showPages: 2,
                },
                {
                    subtitle: 'Show 3 Pages Around',
                    variant: 'quick',
                    currentPage: 10,
                    totalPages: 20,
                    showPages: 3,
                },
            ],
        },
        {
            title: 'Edge Cases',
            description: 'Edge cases and special scenarios',
            variants: [
                {
                    subtitle: 'Single Page',
                    variant: 'quick',
                    currentPage: 1,
                    totalPages: 1,
                },
                {
                    subtitle: 'Two Pages',
                    variant: 'quick',
                    currentPage: 1,
                    totalPages: 2,
                },
                {
                    subtitle: 'Exactly 7 Pages',
                    variant: 'quick',
                    currentPage: 4,
                    totalPages: 7,
                },
            ],
        },
        {
            title: 'Combined',
            description: 'Various combinations',
            variants: [
                {
                    subtitle: 'Event + Many Pages',
                    variant: 'event',
                    currentPage: 15,
                    totalPages: 30,
                    showPages: 2,
                },
                {
                    subtitle: 'Quick + Edge Position',
                    variant: 'quick',
                    currentPage: 2,
                    totalPages: 20,
                    showPages: 1,
                },
                {
                    subtitle: 'Event + Near End',
                    variant: 'event',
                    currentPage: 48,
                    totalPages: 50,
                    showPages: 2,
                },
            ],
        },
    ]);
    selectedCategory = signal('all');
    categoryOptions = computed(() => this.paginationCategories().map((c) => ({ value: c.title, label: c.title })));
    filteredCategories = computed(() => {
        const category = this.selectedCategory();
        return category === 'all'
            ? this.paginationCategories()
            : this.paginationCategories().filter((c) => c.title === category);
    });
    onCategoryChange(value) {
        this.selectedCategory.set(value || 'all');
    }
    getCodeSnippet(variant) {
        const attrs = [];
        if (variant.variant && variant.variant !== 'quick')
            attrs.push(`variant="${variant.variant}"`);
        const config = `{ currentPage: ${variant.currentPage}, totalPages: ${variant.totalPages}${variant.showPages ? `, showPages: ${variant.showPages}` : ''} }`;
        attrs.push(`[config]="${config}"`);
        attrs.push(`(pageChanged)="onPageChange($event)"`);
        return `<ap-pagination ${attrs.join(' ')}></ap-pagination>`;
    }
    onPageChange(page) {
    }
    static ɵfac = function ApUiPaginationListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiPaginationListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiPaginationListComponent, selectors: [["ap-pagination-list"]], decls: 10, vars: 1, consts: [[1, "border-b", "border-zinc-800", "px-8"], [1, "text-lg", "font-bold"], [1, "max-w-7xl", "mx-auto", "px-8", "py-6"], [1, "mb-10", "max-w-xs", "mx-auto"], ["for", "category-filter", 1, "block", "text-sm", "font-semibold", "text-zinc-300", "mb-3"], ["id", "category-filter", "placeholder", "All Categories", 1, "w-full", 3, "onSelect", "options"], [1, "bg-zinc-800", "p-4", "rounded-2xl", "mb-8"], [1, "border-b", "border-zinc-800/50", "mb-6"], [1, "text-xl", "font-bold", "text-zinc-100", "mb-2"], [1, "text-zinc-400"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-2", "xl:grid-cols-3", "gap-6"], [1, "bg-gradient-to-br", "from-zinc-800/80", "to-zinc-900/80", "border", "border-zinc-700/50", "rounded-2xl", "shadow-xl", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-1"], [1, "p-4", "flex", "items-center", "justify-center", "bg-zinc-900/50", "min-h-[5rem]"], [3, "pageChanged", "variant", "config"], [1, "p-5", "border-t", "border-zinc-700/50", "bg-zinc-900/60"], [1, "text-sm", "font-semibold", "text-zinc-200", "mb-3"], [1, "bg-zinc-950/60", "text-orange-300", "p-3", "rounded-lg", "text-xs", "overflow-x-auto", "border", "border-zinc-800/50", "font-mono", "leading-relaxed"]], template: function ApUiPaginationListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Pagination Component");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
            i0.ɵɵtext(6, " Filter by Category ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-select", 5);
            i0.ɵɵlistener("onSelect", function ApUiPaginationListComponent_Template_ap_select_onSelect_7_listener($event) { return ctx.onCategoryChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(8, ApUiPaginationListComponent_For_9_Template, 9, 2, "div", 6, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("options", ctx.categoryOptions());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filteredCategories());
        } }, dependencies: [ApUiPaginationComponent, ApSelectComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiPaginationListComponent, [{
        type: Component,
        args: [{ selector: 'ap-pagination-list', imports: [ApUiPaginationComponent, ApSelectComponent], template: "<div class=\"border-b border-zinc-800 px-8\">\n  <h1 class=\"text-lg font-bold\">Pagination Component</h1>\n</div>\n\n<div class=\"max-w-7xl mx-auto px-8 py-6\">\n  <div class=\"mb-10 max-w-xs mx-auto\">\n    <label for=\"category-filter\" class=\"block text-sm font-semibold text-zinc-300 mb-3\">\n      Filter by Category\n    </label>\n    <ap-select\n      id=\"category-filter\"\n      class=\"w-full\"\n      [options]=\"categoryOptions()\"\n      placeholder=\"All Categories\"\n      (onSelect)=\"onCategoryChange($event)\">\n    </ap-select>\n  </div>\n\n  @for (category of filteredCategories(); track category.title) {\n  <div class=\"bg-zinc-800 p-4 rounded-2xl mb-8\">\n    <div class=\"border-b border-zinc-800/50 mb-6\">\n      <h3 class=\"text-xl font-bold text-zinc-100 mb-2\">{{ category.title }}</h3>\n      <p class=\"text-zinc-400\">{{ category.description }}</p>\n    </div>\n\n    <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6\">\n      @for (variant of category.variants; track variant.subtitle) {\n      <div class=\"bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1\">\n        <div class=\"p-4 flex items-center justify-center bg-zinc-900/50 min-h-[5rem]\">\n          <ap-ui-pagination\n            [variant]=\"variant.variant || 'quick'\"\n            [config]=\"{\n              currentPage: variant.currentPage,\n              totalPages: variant.totalPages,\n              showPages: variant.showPages\n            }\"\n            (pageChanged)=\"onPageChange($event)\">\n          </ap-ui-pagination>\n        </div>\n\n        <div class=\"p-5 border-t border-zinc-700/50 bg-zinc-900/60\">\n          <p class=\"text-sm font-semibold text-zinc-200 mb-3\">{{ variant.subtitle }}</p>\n          <pre class=\"bg-zinc-950/60 text-orange-300 p-3 rounded-lg text-xs overflow-x-auto border border-zinc-800/50 font-mono leading-relaxed\"><code>{{ getCodeSnippet(variant) }}</code></pre>\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n  }\n</div>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiPaginationListComponent, { className: "ApUiPaginationListComponent", filePath: "src/app/components/ap-ui-pagination-list/ap-ui-pagination-list.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=ap-ui-pagination-list.component.js.map