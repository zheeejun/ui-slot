import { Component, signal, computed } from "@angular/core";
import { ApButtonComponent } from "../ap-button/ap-button.component";
import { ApSelectComponent } from "../ap-select/ap-select.component";
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function ApButtonListComponent_For_9_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11);
    i0.ɵɵelement(2, "ap-button", 12);
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
    i0.ɵɵproperty("label", variant_r1.label)("severity", variant_r1.severity || "primary")("variant", variant_r1.variant || "default")("accentColor", variant_r1.accentColor)("icon", variant_r1.icon || "")("iconPos", variant_r1.iconPos || "left")("size", variant_r1.size || "medium")("disabled", variant_r1.disabled || false)("loading", variant_r1.loading || false)("rounded", variant_r1.rounded || false)("raised", variant_r1.raised || false)("text", variant_r1.text || false)("outlined", variant_r1.outlined || false);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", variant_r1.subtitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getCodeSnippet(variant_r1));
} }
function ApButtonListComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 9);
    i0.ɵɵrepeaterCreate(5, ApButtonListComponent_For_9_For_6_Template, 9, 15, "div", 10, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(category_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(category_r3.variants);
} }
export class ApButtonListComponent {
    buttonCategories = signal([
        {
            title: "Sizes",
            variants: [
                { subtitle: "Small", label: "Small Button", size: "small" },
                { subtitle: "Medium", label: "Medium Button", size: "medium" },
                { subtitle: "Large", label: "Large Button", size: "large" },
            ],
        },
        {
            title: "Severities",
            variants: [
                { subtitle: "Primary", label: "Primary", severity: "primary" },
                { subtitle: "Secondary", label: "Secondary", severity: "secondary" },
                { subtitle: "Success", label: "Success", severity: "success" },
                { subtitle: "Info", label: "Info", severity: "info" },
                { subtitle: "Warn", label: "Warning", severity: "warn" },
                { subtitle: "Help", label: "Help", severity: "help" },
                { subtitle: "Danger", label: "Danger", severity: "danger" },
                { subtitle: "Contrast", label: "Contrast", severity: "contrast" },
            ],
        },
        {
            title: "Variants",
            variants: [
                { subtitle: "Default", label: "Default", variant: "default" },
                { subtitle: "Raised", label: "Raised", variant: "raised" },
                { subtitle: "Text", label: "Text", variant: "text" },
                { subtitle: "Outlined", label: "Outlined", variant: "outlined" },
                { subtitle: "Rounded", label: "Rounded", variant: "rounded" },
                {
                    subtitle: "Rounded Text",
                    label: "Rounded Text",
                    variant: "rounded-text",
                },
                {
                    subtitle: "Rounded Outlined",
                    label: "Rounded Outlined",
                    variant: "rounded-outlined",
                },
            ],
        },
        {
            title: "With Icons",
            variants: [
                {
                    subtitle: "Icon Left",
                    label: "Search",
                    icon: "search",
                    iconPos: "left",
                },
                {
                    subtitle: "Icon Right",
                    label: "Next",
                    icon: "chevron-right",
                    iconPos: "right",
                },
                {
                    subtitle: "Icon Only",
                    label: "",
                    icon: "star",
                    variant: "rounded-icon",
                },
            ],
        },
        {
            title: "States",
            variants: [
                { subtitle: "Normal", label: "Normal" },
                { subtitle: "Disabled", label: "Disabled", disabled: true },
                { subtitle: "Loading", label: "Loading", loading: true },
            ],
        },
        {
            title: "Accent Colors",
            variants: [
                {
                    subtitle: "Yellow Default",
                    label: "Yellow",
                    severity: "primary",
                    accentColor: "yellow",
                },
                {
                    subtitle: "Purple Default",
                    label: "Purple",
                    severity: "primary",
                    accentColor: "purple",
                },
                {
                    subtitle: "Yellow Outlined",
                    label: "Yellow",
                    severity: "primary",
                    accentColor: "yellow",
                    variant: "outlined",
                },
                {
                    subtitle: "Purple Outlined",
                    label: "Purple",
                    severity: "primary",
                    accentColor: "purple",
                    variant: "outlined",
                },
                {
                    subtitle: "Yellow Text",
                    label: "Yellow",
                    severity: "primary",
                    accentColor: "yellow",
                    variant: "text",
                },
                {
                    subtitle: "Purple Text",
                    label: "Purple",
                    severity: "primary",
                    accentColor: "purple",
                    variant: "text",
                },
                {
                    subtitle: "Yellow Icon",
                    size: "small",
                    label: "",
                    severity: "contrast",
                    accentColor: "yellow",
                    icon: "x-mark",
                },
                {
                    subtitle: "Purple Icon",
                    size: "medium",
                    label: "",
                    severity: "contrast",
                    accentColor: "purple",
                    icon: "x-mark",
                },
                {
                    subtitle: "Zinc Icon",
                    size: "large",
                    label: "",
                    severity: "contrast",
                    accentColor: "zinc",
                    icon: "x-mark",
                },
                {
                    subtitle: "Neutral Icon",
                    size: "medium",
                    label: "",
                    accentColor: "neutral",
                    icon: "x-mark",
                },
            ],
        },
    ]);
    selectedCategory = signal("all");
    categoryOptions = computed(() => this.buttonCategories().map((c) => ({
        value: c.title,
        label: c.title,
    })));
    filteredCategories = computed(() => {
        const category = this.selectedCategory();
        return category === "all"
            ? this.buttonCategories()
            : this.buttonCategories().filter((c) => c.title === category);
    });
    onCategoryChange(value) {
        this.selectedCategory.set(value || "all");
    }
    getCodeSnippet(variant) {
        const attrs = [];
        if (variant.label)
            attrs.push(`[label]="'${variant.label}'"`);
        if (variant.severity && variant.severity !== "primary")
            attrs.push(`[severity]="'${variant.severity}'"`);
        if (variant.variant && variant.variant !== "default")
            attrs.push(`[variant]="'${variant.variant}'"`);
        if (variant.accentColor)
            attrs.push(`[accentColor]="'${variant.accentColor}'"`);
        if (variant.icon)
            attrs.push(`[icon]="'${variant.icon}'"`);
        if (variant.iconPos && variant.iconPos !== "left")
            attrs.push(`[iconPos]="'${variant.iconPos}'"`);
        if (variant.size && variant.size !== "medium")
            attrs.push(`[size]="'${variant.size}'"`);
        if (variant.disabled)
            attrs.push(`[disabled]="true"`);
        if (variant.loading)
            attrs.push(`[loading]="true"`);
        if (variant.rounded)
            attrs.push(`[rounded]="true"`);
        if (variant.raised)
            attrs.push(`[raised]="true"`);
        if (variant.text)
            attrs.push(`[text]="true"`);
        if (variant.outlined)
            attrs.push(`[outlined]="true"`);
        return `<ap-button ${attrs.join(" ")}></ap-button>`;
    }
    static ɵfac = function ApButtonListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApButtonListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApButtonListComponent, selectors: [["ap-button-list"]], decls: 10, vars: 1, consts: [[1, "border-b", "border-zinc-800", "px-8"], [1, "text-lg", "font-bold"], [1, "max-w-7xl", "mx-auto", "px-8", "py-6"], [1, "mb-10", "max-w-xs", "mx-auto"], ["for", "category-filter", 1, "block", "text-sm", "font-semibold", "text-zinc-300", "mb-3"], ["id", "category-filter", "placeholder", "All Categories", 1, "w-full", 3, "onSelect", "options"], [1, "bg-zinc-800", "p-4", "rounded-2xl", "mb-8"], [1, "border-b", "border-zinc-800/50", "mb-6"], [1, "text-xl", "font-bold", "text-zinc-100", "mb-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "bg-gradient-to-br", "from-zinc-800/80", "to-zinc-900/80", "border", "border-zinc-700/50", "rounded-2xl", "shadow-xl", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-1"], [1, "p-4", "flex", "items-center", "justify-center", "bg-zinc-900/50", "min-h-[5rem]"], [3, "label", "severity", "variant", "accentColor", "icon", "iconPos", "size", "disabled", "loading", "rounded", "raised", "text", "outlined"], [1, "p-5", "border-t", "border-zinc-700/50", "bg-zinc-900/60"], [1, "text-sm", "font-semibold", "text-zinc-200", "mb-3"], [1, "bg-zinc-950/60", "text-orange-300", "p-3", "rounded-lg", "text-xs", "overflow-x-auto", "border", "border-zinc-800/50", "font-mono", "leading-relaxed"]], template: function ApButtonListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Button Component");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
            i0.ɵɵtext(6, " Filter by Category ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-select", 5);
            i0.ɵɵlistener("onSelect", function ApButtonListComponent_Template_ap_select_onSelect_7_listener($event) { return ctx.onCategoryChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(8, ApButtonListComponent_For_9_Template, 7, 1, "div", 6, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("options", ctx.categoryOptions());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filteredCategories());
        } }, dependencies: [ApButtonComponent, ApSelectComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApButtonListComponent, [{
        type: Component,
        args: [{ selector: "ap-button-list", imports: [ApButtonComponent, ApSelectComponent], template: "<div class=\"border-b border-zinc-800 px-8\">\n  <h1 class=\"text-lg font-bold\">Button Component</h1>\n</div>\n\n<div class=\"max-w-7xl mx-auto px-8 py-6\">\n  <div class=\"mb-10 max-w-xs mx-auto\">\n    <label\n      for=\"category-filter\"\n      class=\"block text-sm font-semibold text-zinc-300 mb-3\"\n    >\n      Filter by Category\n    </label>\n    <ap-select\n      id=\"category-filter\"\n      class=\"w-full\"\n      [options]=\"categoryOptions()\"\n      placeholder=\"All Categories\"\n      (onSelect)=\"onCategoryChange($event)\"\n    >\n    </ap-select>\n  </div>\n\n  @for (category of filteredCategories(); track category.title) {\n  <div class=\"bg-zinc-800 p-4 rounded-2xl mb-8\">\n    <div class=\"border-b border-zinc-800/50 mb-6\">\n      <h3 class=\"text-xl font-bold text-zinc-100 mb-2\">{{ category.title }}</h3>\n    </div>\n\n    <div\n      class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\"\n    >\n      @for (variant of category.variants; track variant.subtitle) {\n      <div\n        class=\"bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1\"\n      >\n        <div\n          class=\"p-4 flex items-center justify-center bg-zinc-900/50 min-h-[5rem]\"\n        >\n          <ap-button\n            [label]=\"variant.label\"\n            [severity]=\"variant.severity || 'primary'\"\n            [variant]=\"variant.variant || 'default'\"\n            [accentColor]=\"variant.accentColor\"\n            [icon]=\"variant.icon || ''\"\n            [iconPos]=\"variant.iconPos || 'left'\"\n            [size]=\"variant.size || 'medium'\"\n            [disabled]=\"variant.disabled || false\"\n            [loading]=\"variant.loading || false\"\n            [rounded]=\"variant.rounded || false\"\n            [raised]=\"variant.raised || false\"\n            [text]=\"variant.text || false\"\n            [outlined]=\"variant.outlined || false\"\n          >\n          </ap-button>\n        </div>\n\n        <div class=\"p-5 border-t border-zinc-700/50 bg-zinc-900/60\">\n          <p class=\"text-sm font-semibold text-zinc-200 mb-3\">\n            {{ variant.subtitle }}\n          </p>\n          <pre\n            class=\"bg-zinc-950/60 text-orange-300 p-3 rounded-lg text-xs overflow-x-auto border border-zinc-800/50 font-mono leading-relaxed\"\n          ><code>{{ getCodeSnippet(variant) }}</code></pre>\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n  }\n</div>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApButtonListComponent, { className: "ApButtonListComponent", filePath: "src/ap-components-lib/ap-button-list/ap-button-list.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-button-list.component.js.map