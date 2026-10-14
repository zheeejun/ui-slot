import { Component, signal, computed } from "@angular/core";
import { ApRadio } from "../ap-radio/ap-radio";
import { ApSelectComponent } from "../ap-select/ap-select.component";
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
const _forTrack2 = ($index, $item) => $item.value;
function ApRadioListComponent_For_9_For_6_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ap-radio", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const variant_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("name", variant_r2.groupName)("value", option_r1.value)("checked", option_r1.checked || false)("disabled", option_r1.disabled || false);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r1.label, " ");
} }
function ApRadioListComponent_For_9_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    i0.ɵɵrepeaterCreate(3, ApRadioListComponent_For_9_For_6_For_4_Template, 2, 5, "ap-radio", 13, _forTrack2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 14)(6, "p", 15);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "pre", 16)(9, "code");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(variant_r2.options);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", variant_r2.subtitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.getCodeSnippet(variant_r2));
} }
function ApRadioListComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 9);
    i0.ɵɵrepeaterCreate(5, ApRadioListComponent_For_9_For_6_Template, 11, 2, "div", 10, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(category_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(category_r4.variants);
} }
export class ApRadioListComponent {
    radioCategories = signal([
        {
            title: "States",
            variants: [
                {
                    subtitle: "None Selected",
                    groupName: "states-none",
                    options: [
                        { value: "option1", label: "selected", checked: true },
                        { value: "option2", label: "unselected", checked: false },
                        {
                            value: "option3",
                            label: "disabled",
                            checked: false,
                            disabled: true,
                        },
                    ],
                },
            ],
        },
    ]);
    selectedCategory = signal("all");
    categoryOptions = computed(() => this.radioCategories().map((c) => ({ value: c.title, label: c.title })));
    filteredCategories = computed(() => {
        const category = this.selectedCategory();
        return category === "all"
            ? this.radioCategories()
            : this.radioCategories().filter((c) => c.title === category);
    });
    onCategoryChange(value) {
        this.selectedCategory.set(value || "all");
    }
    getCodeSnippet(variant) {
        const snippets = variant.options.map((option) => {
            const attrs = [];
            attrs.push(`name="${variant.groupName}"`);
            attrs.push(`value="${option.value}"`);
            if (option.checked)
                attrs.push(`[checked]="true"`);
            if (option.disabled)
                attrs.push(`[disabled]="true"`);
            return `<ap-radio ${attrs.join(" ")}>${option.label}</ap-radio>`;
        });
        return snippets.join("\n");
    }
    static ɵfac = function ApRadioListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApRadioListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApRadioListComponent, selectors: [["ap-radio-list"]], decls: 10, vars: 1, consts: [[1, "border-b", "border-zinc-800", "px-8"], [1, "text-lg", "font-bold"], [1, "max-w-7xl", "mx-auto", "px-8", "py-6"], [1, "mb-10", "max-w-xs", "mx-auto"], ["for", "category-filter", 1, "block", "text-sm", "font-semibold", "text-zinc-300", "mb-3"], ["id", "category-filter", "placeholder", "All Categories", 1, "w-full", 3, "onSelect", "options"], [1, "bg-zinc-800", "p-4", "rounded-2xl", "mb-8"], [1, "border-b", "border-zinc-800/50", "mb-6"], [1, "text-xl", "font-bold", "text-zinc-100", "mb-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "bg-gradient-to-br", "from-zinc-800/80", "to-zinc-900/80", "border", "border-zinc-700/50", "rounded-2xl", "shadow-xl", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-1"], [1, "p-4", "bg-zinc-900/50", "min-h-[8rem]"], [1, "flex", "flex-col", "gap-3"], [3, "name", "value", "checked", "disabled"], [1, "p-5", "border-t", "border-zinc-700/50", "bg-zinc-900/60"], [1, "text-sm", "font-semibold", "text-zinc-200", "mb-3"], [1, "bg-zinc-950/60", "text-orange-300", "p-3", "rounded-lg", "text-xs", "overflow-x-auto", "border", "border-zinc-800/50", "font-mono", "leading-relaxed"]], template: function ApRadioListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Radio Button Component");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
            i0.ɵɵtext(6, " Filter by Category ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-select", 5);
            i0.ɵɵlistener("onSelect", function ApRadioListComponent_Template_ap_select_onSelect_7_listener($event) { return ctx.onCategoryChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(8, ApRadioListComponent_For_9_Template, 7, 1, "div", 6, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("options", ctx.categoryOptions());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filteredCategories());
        } }, dependencies: [ApRadio, ApSelectComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApRadioListComponent, [{
        type: Component,
        args: [{ selector: "ap-radio-list", imports: [ApRadio, ApSelectComponent], template: "<div class=\"border-b border-zinc-800 px-8\">\n  <h1 class=\"text-lg font-bold\">Radio Button Component</h1>\n</div>\n\n<div class=\"max-w-7xl mx-auto px-8 py-6\">\n  <div class=\"mb-10 max-w-xs mx-auto\">\n    <label\n      for=\"category-filter\"\n      class=\"block text-sm font-semibold text-zinc-300 mb-3\"\n    >\n      Filter by Category\n    </label>\n    <ap-select\n      id=\"category-filter\"\n      class=\"w-full\"\n      [options]=\"categoryOptions()\"\n      placeholder=\"All Categories\"\n      (onSelect)=\"onCategoryChange($event)\"\n    >\n    </ap-select>\n  </div>\n\n  @for (category of filteredCategories(); track category.title) {\n  <div class=\"bg-zinc-800 p-4 rounded-2xl mb-8\">\n    <div class=\"border-b border-zinc-800/50 mb-6\">\n      <h3 class=\"text-xl font-bold text-zinc-100 mb-2\">{{ category.title }}</h3>\n    </div>\n\n    <div\n      class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\"\n    >\n      @for (variant of category.variants; track variant.subtitle) {\n      <div\n        class=\"bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1\"\n      >\n        <div class=\"p-4 bg-zinc-900/50 min-h-[8rem]\">\n          <div class=\"flex flex-col gap-3\">\n            @for (option of variant.options; track option.value) {\n            <ap-radio\n              [name]=\"variant.groupName\"\n              [value]=\"option.value\"\n              [checked]=\"option.checked || false\"\n              [disabled]=\"option.disabled || false\"\n            >\n              {{ option.label }}\n            </ap-radio>\n            }\n          </div>\n        </div>\n\n        <div class=\"p-5 border-t border-zinc-700/50 bg-zinc-900/60\">\n          <p class=\"text-sm font-semibold text-zinc-200 mb-3\">\n            {{ variant.subtitle }}\n          </p>\n          <pre\n            class=\"bg-zinc-950/60 text-orange-300 p-3 rounded-lg text-xs overflow-x-auto border border-zinc-800/50 font-mono leading-relaxed\"\n          ><code>{{ getCodeSnippet(variant) }}</code></pre>\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n  }\n</div>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApRadioListComponent, { className: "ApRadioListComponent", filePath: "src/ap-components-lib/ap-radio-list/ap-radio-list.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-radio-list.component.js.map