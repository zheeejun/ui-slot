import { Component, signal, computed } from "@angular/core";
import { ApFormLabel } from "../ap-form-label/ap-form-label";
import { ApSelectComponent } from "../ap-select/ap-select.component";
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function ApFormLabelListComponent_For_9_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11);
    i0.ɵɵelement(2, "ap-form-label", 12);
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
    i0.ɵɵproperty("size", variant_r1.size || "medium")("label", variant_r1.label || "Label")("required", variant_r1.required || false)("hint", variant_r1.hint || null)("error", variant_r1.error || null)("layout", variant_r1.layout || "inside");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", variant_r1.subtitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getCodeSnippet(variant_r1));
} }
function ApFormLabelListComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 9);
    i0.ɵɵrepeaterCreate(5, ApFormLabelListComponent_For_9_For_6_Template, 9, 8, "div", 10, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(category_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(category_r3.variants);
} }
export class ApFormLabelListComponent {
    formLabelCategories = signal([
        {
            title: "Sizes",
            variants: [
                { subtitle: "Small", size: "small", label: "Small Label" },
                { subtitle: "Medium", size: "medium", label: "Medium Label" },
                { subtitle: "Large", size: "large", label: "Large Label" },
            ],
        },
        {
            title: "States",
            variants: [
                { subtitle: "Default", label: "Default Label" },
                { subtitle: "Required", label: "Required Field", required: true },
                { subtitle: "With Hint", label: "Label with Hint", hint: "This is a helpful hint" },
                { subtitle: "With Error", label: "Label with Error", error: "This field has an error" },
            ],
        },
        {
            title: "Layouts",
            variants: [
                { subtitle: "Inside Layout", label: "Inside Layout", layout: "inside", hint: "Content flows inside" },
                { subtitle: "Between Layout", label: "Between Layout", layout: "between", hint: "Content flows between" },
            ],
        },
        {
            title: "Combined States",
            variants: [
                { subtitle: "Required with Hint", label: "Required Field", required: true, hint: "Please fill this field" },
                { subtitle: "Required with Error", label: "Required Field", required: true, error: "This field is required" },
                { subtitle: "Large Required with Error", label: "Large Required", size: "large", required: true, error: "Validation failed" },
            ],
        },
    ]);
    selectedCategory = signal("all");
    categoryOptions = computed(() => this.formLabelCategories().map((c) => ({
        value: c.title,
        label: c.title,
    })));
    filteredCategories = computed(() => {
        const category = this.selectedCategory();
        return category === "all"
            ? this.formLabelCategories()
            : this.formLabelCategories().filter((c) => c.title === category);
    });
    onCategoryChange(value) {
        this.selectedCategory.set(value || "all");
    }
    getCodeSnippet(variant) {
        const attrs = [];
        if (variant.size && variant.size !== "medium")
            attrs.push(`[size]="'${variant.size}'"`);
        if (variant.label)
            attrs.push(`[label]="'${variant.label}'"`);
        if (variant.required)
            attrs.push(`[required]="true"`);
        if (variant.hint)
            attrs.push(`[hint]="'${variant.hint}'"`);
        if (variant.error)
            attrs.push(`[error]="'${variant.error}'"`);
        if (variant.layout && variant.layout !== "inside")
            attrs.push(`[layout]="'${variant.layout}'"`);
        return `<ap-form-label ${attrs.join(" ")}></ap-form-label>`;
    }
    static ɵfac = function ApFormLabelListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApFormLabelListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApFormLabelListComponent, selectors: [["ap-form-label-list"]], decls: 10, vars: 1, consts: [[1, "border-b", "border-zinc-800", "px-8"], [1, "text-lg", "font-bold"], [1, "max-w-7xl", "mx-auto", "px-8", "py-6"], [1, "mb-10", "max-w-xs", "mx-auto"], ["for", "category-filter", 1, "block", "text-sm", "font-semibold", "text-zinc-300", "mb-3"], ["id", "category-filter", "placeholder", "All Categories", 1, "w-full", 3, "onSelect", "options"], [1, "bg-zinc-800", "p-4", "rounded-2xl", "mb-8"], [1, "border-b", "border-zinc-800/50", "mb-6"], [1, "text-xl", "font-bold", "text-zinc-100", "mb-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "bg-gradient-to-br", "from-zinc-800/80", "to-zinc-900/80", "border", "border-zinc-700/50", "rounded-2xl", "shadow-xl", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-1"], [1, "p-4", "flex", "items-center", "justify-center", "bg-zinc-900/50", "min-h-[5rem]"], [3, "size", "label", "required", "hint", "error", "layout"], [1, "p-5", "border-t", "border-zinc-700/50", "bg-zinc-900/60"], [1, "text-sm", "font-semibold", "text-zinc-200", "mb-3"], [1, "bg-zinc-950/60", "text-orange-300", "p-3", "rounded-lg", "text-xs", "overflow-x-auto", "border", "border-zinc-800/50", "font-mono", "leading-relaxed"]], template: function ApFormLabelListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Form Label Component");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
            i0.ɵɵtext(6, " Filter by Category ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-select", 5);
            i0.ɵɵlistener("onSelect", function ApFormLabelListComponent_Template_ap_select_onSelect_7_listener($event) { return ctx.onCategoryChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(8, ApFormLabelListComponent_For_9_Template, 7, 1, "div", 6, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("options", ctx.categoryOptions());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filteredCategories());
        } }, dependencies: [ApFormLabel, ApSelectComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApFormLabelListComponent, [{
        type: Component,
        args: [{ selector: "ap-form-label-list", imports: [ApFormLabel, ApSelectComponent], template: "<div class=\"border-b border-zinc-800 px-8\">\n  <h1 class=\"text-lg font-bold\">Form Label Component</h1>\n</div>\n\n<div class=\"max-w-7xl mx-auto px-8 py-6\">\n  <div class=\"mb-10 max-w-xs mx-auto\">\n    <label\n      for=\"category-filter\"\n      class=\"block text-sm font-semibold text-zinc-300 mb-3\"\n    >\n      Filter by Category\n    </label>\n    <ap-select\n      id=\"category-filter\"\n      class=\"w-full\"\n      [options]=\"categoryOptions()\"\n      placeholder=\"All Categories\"\n      (onSelect)=\"onCategoryChange($event)\"\n    >\n    </ap-select>\n  </div>\n\n  @for (category of filteredCategories(); track category.title) {\n  <div class=\"bg-zinc-800 p-4 rounded-2xl mb-8\">\n    <div class=\"border-b border-zinc-800/50 mb-6\">\n      <h3 class=\"text-xl font-bold text-zinc-100 mb-2\">{{ category.title }}</h3>\n    </div>\n\n    <div\n      class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\"\n    >\n      @for (variant of category.variants; track variant.subtitle) {\n      <div\n        class=\"bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1\"\n      >\n        <div\n          class=\"p-4 flex items-center justify-center bg-zinc-900/50 min-h-[5rem]\"\n        >\n          <ap-form-label\n            [size]=\"variant.size || 'medium'\"\n            [label]=\"variant.label || 'Label'\"\n            [required]=\"variant.required || false\"\n            [hint]=\"variant.hint || null\"\n            [error]=\"variant.error || null\"\n            [layout]=\"variant.layout || 'inside'\"\n          >\n          </ap-form-label>\n        </div>\n\n        <div class=\"p-5 border-t border-zinc-700/50 bg-zinc-900/60\">\n          <p class=\"text-sm font-semibold text-zinc-200 mb-3\">\n            {{ variant.subtitle }}\n          </p>\n          <pre\n            class=\"bg-zinc-950/60 text-orange-300 p-3 rounded-lg text-xs overflow-x-auto border border-zinc-800/50 font-mono leading-relaxed\"\n          ><code>{{ getCodeSnippet(variant) }}</code></pre>\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n  }\n</div>\n", styles: ["/* Form Label List Component Styles */\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApFormLabelListComponent, { className: "ApFormLabelListComponent", filePath: "src/ap-components-lib/ap-form-label-list/ap-form-label-list.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=ap-form-label-list.component.js.map