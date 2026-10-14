import { Component, signal, computed } from "@angular/core";
import { ApTagComponent } from "../ap-tag/ap-tag.component";
import { ApSelectComponent } from "../ap-select/ap-select.component";
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function ApTagListComponent_For_9_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11);
    i0.ɵɵelement(2, "ap-tag", 12);
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
    i0.ɵɵproperty("label", variant_r1.label)("severity", variant_r1.severity || "primary")("variant", variant_r1.variant || "default")("icon", variant_r1.icon)("rounded", variant_r1.rounded || false);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", variant_r1.subtitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getCodeSnippet(variant_r1));
} }
function ApTagListComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 9);
    i0.ɵɵrepeaterCreate(5, ApTagListComponent_For_9_For_6_Template, 9, 7, "div", 10, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(category_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(category_r3.variants);
} }
export class ApTagListComponent {
    tagCategories = signal([
        {
            title: "Severities",
            variants: [
                { subtitle: "Primary", label: "Primary", severity: "primary" },
                { subtitle: "Success", label: "Success", severity: "success" },
                { subtitle: "Info", label: "Info", severity: "info" },
                { subtitle: "Warning", label: "Warning", severity: "warning" },
                { subtitle: "Danger", label: "Danger", severity: "danger" },
                { subtitle: "Disabled", label: "Disabled", severity: "disabled" },
            ],
        },
        {
            title: "Variants",
            variants: [
                { subtitle: "Default", label: "Default", variant: "default" },
                { subtitle: "Pill", label: "Pill", variant: "pill" },
                { subtitle: "Rounded", label: "Rounded", rounded: true },
            ],
        },
        {
            title: "With Icons",
            variants: [
                { subtitle: "Primary with Icon", label: "Star", severity: "primary", icon: "user" },
                { subtitle: "Success with Icon", label: "Check", severity: "success", icon: "pencil" },
                { subtitle: "Info with Icon", label: "Info", severity: "info", icon: "exclamation-circle" },
                { subtitle: "Warning with Icon", label: "Alert", severity: "warning", icon: "exclamation-circle" },
                { subtitle: "Danger with Icon", label: "Error", severity: "danger", icon: "exclamation-circle" },
            ],
        },
    ]);
    selectedCategory = signal("all");
    categoryOptions = computed(() => this.tagCategories().map((c) => ({
        value: c.title,
        label: c.title,
    })));
    filteredCategories = computed(() => {
        const category = this.selectedCategory();
        return category === "all"
            ? this.tagCategories()
            : this.tagCategories().filter((c) => c.title === category);
    });
    onCategoryChange(value) {
        this.selectedCategory.set(value || "all");
    }
    getCodeSnippet(variant) {
        const attrs = [];
        attrs.push(`[label]="'${variant.label}'"`);
        if (variant.severity && variant.severity !== "primary")
            attrs.push(`[severity]="'${variant.severity}'"`);
        if (variant.variant && variant.variant !== "default")
            attrs.push(`[variant]="'${variant.variant}'"`);
        if (variant.icon)
            attrs.push(`[icon]="'${variant.icon}'"`);
        if (variant.rounded)
            attrs.push(`[rounded]="true"`);
        return `<ap-tag ${attrs.join(" ")}></ap-tag>`;
    }
    static ɵfac = function ApTagListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTagListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTagListComponent, selectors: [["ap-tag-list"]], decls: 10, vars: 1, consts: [[1, "border-b", "border-zinc-800", "px-8"], [1, "text-lg", "font-bold"], [1, "max-w-7xl", "mx-auto", "px-8", "py-6"], [1, "mb-10", "max-w-xs", "mx-auto"], ["for", "category-filter", 1, "block", "text-sm", "font-semibold", "text-zinc-300", "mb-3"], ["id", "category-filter", "placeholder", "All Categories", 1, "w-full", 3, "onSelect", "options"], [1, "bg-zinc-800", "p-4", "rounded-2xl", "mb-8"], [1, "border-b", "border-zinc-800/50", "mb-6"], [1, "text-xl", "font-bold", "text-zinc-100", "mb-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "bg-gradient-to-br", "from-zinc-800/80", "to-zinc-900/80", "border", "border-zinc-700/50", "rounded-2xl", "shadow-xl", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-1"], [1, "p-4", "flex", "items-center", "justify-center", "bg-zinc-900/50", "min-h-[5rem]"], [3, "label", "severity", "variant", "icon", "rounded"], [1, "p-5", "border-t", "border-zinc-700/50", "bg-zinc-900/60"], [1, "text-sm", "font-semibold", "text-zinc-200", "mb-3"], [1, "bg-zinc-950/60", "text-orange-300", "p-3", "rounded-lg", "text-xs", "overflow-x-auto", "border", "border-zinc-800/50", "font-mono", "leading-relaxed"]], template: function ApTagListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Tag Component");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
            i0.ɵɵtext(6, " Filter by Category ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-select", 5);
            i0.ɵɵlistener("onSelect", function ApTagListComponent_Template_ap_select_onSelect_7_listener($event) { return ctx.onCategoryChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(8, ApTagListComponent_For_9_Template, 7, 1, "div", 6, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("options", ctx.categoryOptions());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filteredCategories());
        } }, dependencies: [ApTagComponent, ApSelectComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTagListComponent, [{
        type: Component,
        args: [{ selector: "ap-tag-list", imports: [ApTagComponent, ApSelectComponent], template: "<div class=\"border-b border-zinc-800 px-8\">\n  <h1 class=\"text-lg font-bold\">Tag Component</h1>\n</div>\n\n<div class=\"max-w-7xl mx-auto px-8 py-6\">\n  <div class=\"mb-10 max-w-xs mx-auto\">\n    <label\n      for=\"category-filter\"\n      class=\"block text-sm font-semibold text-zinc-300 mb-3\"\n    >\n      Filter by Category\n    </label>\n    <ap-select\n      id=\"category-filter\"\n      class=\"w-full\"\n      [options]=\"categoryOptions()\"\n      placeholder=\"All Categories\"\n      (onSelect)=\"onCategoryChange($event)\"\n    >\n    </ap-select>\n  </div>\n\n  @for (category of filteredCategories(); track category.title) {\n  <div class=\"bg-zinc-800 p-4 rounded-2xl mb-8\">\n    <div class=\"border-b border-zinc-800/50 mb-6\">\n      <h3 class=\"text-xl font-bold text-zinc-100 mb-2\">{{ category.title }}</h3>\n    </div>\n\n    <div\n      class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\"\n    >\n      @for (variant of category.variants; track variant.subtitle) {\n      <div\n        class=\"bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1\"\n      >\n        <div\n          class=\"p-4 flex items-center justify-center bg-zinc-900/50 min-h-[5rem]\"\n        >\n          <ap-tag\n            [label]=\"variant.label\"\n            [severity]=\"variant.severity || 'primary'\"\n            [variant]=\"variant.variant || 'default'\"\n            [icon]=\"variant.icon\"\n            [rounded]=\"variant.rounded || false\"\n          >\n          </ap-tag>\n        </div>\n\n        <div class=\"p-5 border-t border-zinc-700/50 bg-zinc-900/60\">\n          <p class=\"text-sm font-semibold text-zinc-200 mb-3\">\n            {{ variant.subtitle }}\n          </p>\n          <pre\n            class=\"bg-zinc-950/60 text-orange-300 p-3 rounded-lg text-xs overflow-x-auto border border-zinc-800/50 font-mono leading-relaxed\"\n          ><code>{{ getCodeSnippet(variant) }}</code></pre>\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n  }\n</div>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTagListComponent, { className: "ApTagListComponent", filePath: "src/ap-components-lib/ap-tag-list/ap-tag-list.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=ap-tag-list.component.js.map