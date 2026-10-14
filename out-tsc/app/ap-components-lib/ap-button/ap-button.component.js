import { Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApIconComponent } from "../ap-icon/ap-icon.component";
import * as i0 from "@angular/core";
const _c0 = ["*"];
function ApButtonComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "ap-icon", 5);
    i0.ɵɵelementStart(2, "span", 6);
    i0.ɵɵtext(3, "Loading...");
    i0.ɵɵelementEnd()();
} }
function ApButtonComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("name", ctx_r0.icon());
} }
function ApButtonComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.label());
} }
function ApButtonComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("name", ctx_r0.icon());
} }
export class ApButtonComponent {
    label = input("");
    icon = input("");
    iconPos = input("left");
    severity = input("primary");
    variant = input("default");
    accentColor = input(undefined);
    disabled = input(false);
    loading = input(false);
    link = input(false);
    type = input("button");
    size = input("medium");
    rounded = input(false);
    raised = input(false);
    text = input(false);
    outlined = input(false);
    /**
     * @deprecated 請使用 clicked 事件，onClick 將會在未來版本移除
    */
    onClick = output();
    /** 受到Disable保護的Click */
    clicked = output();
    get buttonClasses() {
        const classes = [
            "inline-flex",
            "items-center",
            "justify-center",
            "gap-2",
            "font-bold",
            "border",
            "outline-none",
            "uppercase",
        ];
        // Size classes
        if (this.size() === "small") {
            classes.push("px-3", "py-1.5", "text-sm");
        }
        else if (this.size() === "large") {
            classes.push("px-6", "py-2.5", "text-lg");
        }
        else {
            classes.push("px-5", "py-2", "text-md");
        }
        // Rounded/Icon-only variants
        const isRounded = this.rounded() || this.variant().includes("rounded");
        const isIconOnly = this.isIconOnly || this.variant() === "rounded-icon";
        if (isIconOnly) {
            classes.length = 0;
            classes.push("inline-flex", "items-center", "justify-center", "rounded-full", "border", "aspect-square");
            // Default size for icon-only buttons (can be overridden by external classes)
            if (this.size() === "small") {
                classes.push("w-8", "h-8");
            }
            else if (this.size() === "large") {
                classes.push("w-12", "h-12");
            }
            else {
                classes.push("w-10", "h-10");
            }
        }
        else if (isRounded) {
            classes.push("rounded-full");
        }
        else {
            classes.push("rounded-md");
        }
        // Variant and Severity styles
        const isText = this.text() ||
            this.variant() === "text" ||
            this.variant() === "rounded-text";
        const isOutlined = this.outlined() ||
            this.variant() === "outlined" ||
            this.variant() === "rounded-outlined";
        const isRaised = this.raised() || this.variant() === "raised";
        // Apply severity colors based on variant
        if (isText) {
            this.applyTextClasses(classes);
        }
        else if (isOutlined) {
            this.applyOutlinedClasses(classes);
        }
        else {
            this.applyDefaultClasses(classes, isRaised);
        }
        // Disabled/Loading state
        if (this.disabled() || this.loading()) {
            classes.push("opacity-60", "cursor-not-allowed");
        }
        else {
            classes.push("cursor-pointer");
        }
        return classes.join(" ");
    }
    applyDefaultClasses(classes, isRaised) {
        switch (this.severity()) {
            case "primary":
                if (this.accentColor() === "yellow") {
                    classes.push("bg-yellow-400", "text-black", "border-yellow-300");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-yellow-500", "active:bg-yellow-600");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-yellow-600/30");
                }
                else if (this.accentColor() === "purple") {
                    classes.push("bg-purple-400", "text-black", "border-purple-300");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-purple-500", "active:bg-purple-600");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-purple-500/30");
                }
                else if (this.accentColor() === "purple-dark") {
                    classes.push("bg-purple-900", "text-purple-200", "border-purple-400");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-purple-800", "active:bg-purple-950");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-purple-500/30");
                }
                else if (this.accentColor() === "zinc") {
                    classes.push("bg-zinc-500", "text-white", "border-zinc-400");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-zinc-600", "active:bg-zinc-700");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-zinc-500/30");
                }
                else if (this.accentColor() === "pink") {
                    classes.push("bg-pink-600", "text-white", "border-pink-400");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-pink-700", "active:bg-pink-800");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-pink-600/30");
                }
                else if (this.accentColor() === "neutral") {
                    classes.push("bg-neutral-300", "text-neutral-700", "border-neutral-200");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-neutral-500 hover:text-neutral-200", "active:bg-neutral-600");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-neutral-500/30");
                }
                else {
                    classes.push("bg-orange-500", "text-white", "border-orange-400");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-orange-600", "active:bg-orange-700");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-orange-500/30");
                }
                break;
            case "secondary":
                classes.push("bg-zinc-400", "text-black", "border-zinc-300");
                if (!this.disabled() && !this.loading()) {
                    classes.push("hover:bg-zinc-500", "active:bg-zinc-600");
                }
                if (isRaised)
                    classes.push("shadow-lg", "shadow-zinc-300/30");
                break;
            case "success":
                classes.push("bg-green-500", "text-white", "border-green-400");
                if (!this.disabled() && !this.loading()) {
                    classes.push("hover:bg-green-600", "active:bg-green-700");
                }
                if (isRaised)
                    classes.push("shadow-lg", "shadow-green-500/30");
                break;
            case "info":
                classes.push("bg-sky-500", "text-white", "border-sky-400");
                if (!this.disabled() && !this.loading()) {
                    classes.push("hover:bg-sky-600", "active:bg-sky-700");
                }
                if (isRaised)
                    classes.push("shadow-lg", "shadow-sky-500/30");
                break;
            case "warn":
                classes.push("bg-orange-900", "text-white", "border-yellow-600");
                if (!this.disabled() && !this.loading()) {
                    classes.push("hover:bg-orange-800", "active:bg-orange-900");
                }
                if (isRaised)
                    classes.push("shadow-lg", "shadow-orange-500/30");
                break;
            case "help":
                classes.push("bg-violet-600", "text-white", "border-violet-500");
                if (!this.disabled() && !this.loading()) {
                    classes.push("hover:bg-violet-700", "active:bg-violet-800");
                }
                if (isRaised)
                    classes.push("shadow-lg", "shadow-violet-500/30");
                break;
            case "danger":
                classes.push("bg-red-500", "text-white", "border-red-400");
                if (!this.disabled() && !this.loading()) {
                    classes.push("hover:bg-red-600", "active:bg-red-700");
                }
                if (isRaised)
                    classes.push("shadow-lg", "shadow-red-500/30");
                break;
            case "contrast":
                if (this.accentColor() === "yellow") {
                    classes.push("bg-zinc-900", "text-yellow-400", "border-yellow-400");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-zinc-800", "active:bg-zinc-950");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-yellow-500/30");
                }
                else if (this.accentColor() === "purple" || this.accentColor() === "purple-dark") {
                    classes.push("bg-zinc-900", "text-purple-400", "border-purple-400");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-zinc-800", "active:bg-zinc-950");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-purple-500/30");
                }
                else if (this.accentColor() === "zinc") {
                    classes.push("bg-zinc-900", "text-zinc-400", "border-zinc-400");
                    if (!this.disabled() && !this.loading()) {
                        classes.push("hover:bg-zinc-800", "active:bg-zinc-950");
                    }
                    if (isRaised)
                        classes.push("shadow-lg", "shadow-purple-500/30");
                    else {
                        classes.push("bg-zinc-900", "text-white", "border-zinc-500");
                        if (!this.disabled() && !this.loading()) {
                            classes.push("hover:bg-zinc-800", "active:bg-zinc-950");
                        }
                        if (isRaised)
                            classes.push("shadow-lg", "shadow-zinc-900/50");
                    }
                    break;
                }
        }
    }
    applyTextClasses(classes) {
        classes.push("bg-transparent", "border-transparent");
        switch (this.severity()) {
            case "primary":
                if (this.accentColor() === "yellow") {
                    classes.push("text-yellow-500", "hover:bg-yellow-500/10");
                }
                else if (this.accentColor() === "purple" || this.accentColor() === "purple-dark") {
                    classes.push("text-purple-500", "hover:bg-purple-500/10");
                }
                else if (this.accentColor() === "zinc") {
                    classes.push("text-zinc-500", "hover:bg-zinc-500/10");
                }
                else if (this.accentColor() === "neutral") {
                    classes.push("text-neutral-500", "hover:bg-neutral-500/10");
                }
                else {
                    classes.push("text-orange-500", "hover:bg-orange-500/10");
                }
                break;
            case "secondary":
                classes.push("text-zinc-600", "hover:bg-zinc-300/30");
                break;
            case "success":
                classes.push("text-green-500", "hover:bg-green-500/10");
                break;
            case "info":
                classes.push("text-sky-500", "hover:bg-sky-500/10");
                break;
            case "warn":
                classes.push("text-orange-600", "hover:bg-orange-600/10");
                break;
            case "help":
                classes.push("text-purple-500", "hover:bg-purple-500/10");
                break;
            case "danger":
                classes.push("text-red-500", "hover:bg-red-500/10");
                break;
            case "contrast":
                if (this.accentColor() === "yellow") {
                    classes.push("text-yellow-400", "hover:bg-yellow-400/10");
                }
                else if (this.accentColor() === "purple" || this.accentColor() === "purple-dark") {
                    classes.push("text-purple-400", "hover:bg-purple-400/10");
                }
                else if (this.accentColor() === "zinc") {
                    classes.push("text-zinc-400", "hover:bg-zinc-400/10");
                }
                else {
                    classes.push("text-zinc-900", "hover:bg-zinc-900/10");
                }
                break;
        }
    }
    applyOutlinedClasses(classes) {
        classes.push("bg-transparent", "dark:bg-zinc-900");
        switch (this.severity()) {
            case "primary":
                if (this.accentColor() === "yellow") {
                    classes.push("text-yellow-500", "border-yellow-500", "hover:bg-yellow-500/80", "dark:hover:bg-yellow-500/10");
                }
                else if (this.accentColor() === "purple" || this.accentColor() === "purple-dark") {
                    classes.push("text-purple-500", "border-purple-500", "hover:bg-purple-500/10", "dark:hover:bg-purple-500/10");
                }
                else if (this.accentColor() === "zinc") {
                    classes.push("text-zinc-300", "border-zinc-300", "hover:bg-zinc-500/80", "dark:hover:bg-zinc-500/10");
                }
                else if (this.accentColor() === "neutral") {
                    classes.push("text-neutral-500", "border-neutral-500", "hover:bg-neutral-500/10", "dark:hover:bg-neutral-500/10");
                }
                else {
                    classes.push("text-orange-500", "border-orange-500", "hover:bg-orange-500/10", "dark:hover:bg-orange-500/10");
                }
                break;
            case "secondary":
                classes.push("text-zinc-600", "border-zinc-300", "hover:bg-zinc-300/10");
                break;
            case "success":
                classes.push("text-green-500", "border-green-500", "hover:bg-green-500/10");
                break;
            case "info":
                classes.push("text-sky-500", "border-sky-500", "hover:bg-sky-500/10", "hover:bg-sky-500/10", "dark:hover:bg-sky-500/10");
                break;
            case "warn":
                classes.push("text-orange-600", "border-orange-600", "hover:bg-orange-600/10");
                break;
            case "help":
                classes.push("text-purple-500", "border-purple-500", "hover:bg-purple-500/10");
                break;
            case "danger":
                classes.push("text-red-500", "border-red-500", "hover:bg-red-500/10", "hover:bg-red-500/10", "dark:hover:bg-red-500/10");
                break;
            case "contrast":
                if (this.accentColor() === "yellow") {
                    classes.push("text-yellow-400", "border-yellow-400", "hover:bg-yellow-400/10", "dark:hover:bg-yellow-400/30");
                }
                else if (this.accentColor() === "purple" || this.accentColor() === "purple-dark") {
                    classes.push("text-purple-400", "border-purple-400", "hover:bg-purple-400/10", "dark:hover:bg-purple-400/30");
                }
                else {
                    classes.push("text-zinc-800", "border-zinc-500", "dark:text-zinc-100", "hover:bg-zinc-500/10", "dark:hover:bg-zinc-500/30");
                }
                break;
        }
    }
    get isIconOnly() {
        return !!this.icon() && !this.label();
    }
    handleClick(event) {
        if (!this.disabled() && !this.loading()) {
            this.onClick.emit(event);
            this.clicked.emit(event);
        }
    }
    static ɵfac = function ApButtonComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApButtonComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApButtonComponent, selectors: [["ap-button"]], inputs: { label: [1, "label"], icon: [1, "icon"], iconPos: [1, "iconPos"], severity: [1, "severity"], variant: [1, "variant"], accentColor: [1, "accentColor"], disabled: [1, "disabled"], loading: [1, "loading"], link: [1, "link"], type: [1, "type"], size: [1, "size"], rounded: [1, "rounded"], raised: [1, "raised"], text: [1, "text"], outlined: [1, "outlined"] }, outputs: { onClick: "onClick", clicked: "clicked" }, ngContentSelectors: _c0, decls: 6, vars: 8, consts: [[1, "w-full", 3, "click", "type", "disabled"], ["role", "status", 1, "flex", "items-center", "justify-center", "gap-2"], [1, "w-5", "h-5", 3, "name"], [1, "ap-button-label"], [1, "w-6", "h-6", 3, "name"], ["name", "loading", 1, "size-5"], [1, "sr-only"]], template: function ApButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ApButtonComponent_Template_button_click_0_listener($event) { return ctx.handleClick($event); });
            i0.ɵɵconditionalCreate(1, ApButtonComponent_Conditional_1_Template, 4, 0, "div", 1);
            i0.ɵɵconditionalCreate(2, ApButtonComponent_Conditional_2_Template, 1, 1, "ap-icon", 2);
            i0.ɵɵconditionalCreate(3, ApButtonComponent_Conditional_3_Template, 2, 1, "span", 3);
            i0.ɵɵconditionalCreate(4, ApButtonComponent_Conditional_4_Template, 1, 1, "ap-icon", 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.buttonClasses);
            i0.ɵɵproperty("type", ctx.type())("disabled", ctx.disabled() || ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.icon() && ctx.iconPos() === "left" && !ctx.loading() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.label() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.icon() && ctx.iconPos() === "right" && !ctx.loading() ? 4 : -1);
        } }, dependencies: [CommonModule, ApIconComponent], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n.hidden[_nghost-%COMP%] {\n  display: none;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApButtonComponent, [{
        type: Component,
        args: [{ selector: "ap-button", imports: [CommonModule, ApIconComponent], template: "<button\n  [type]=\"type()\"\n  [disabled]=\"disabled() || loading()\"\n  [class]=\"buttonClasses\"\n  (click)=\"handleClick($event)\"\n  class=\"w-full\"\n>\n  @if (loading()) {\n  <div\n    role=\"status\"\n    class=\"flex items-center justify-center gap-2\"\n  >\n    <ap-icon name=\"loading\" class=\"size-5\" />\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  } @if (icon() && iconPos() === 'left' && !loading()) {\n  <ap-icon [name]=\"icon()\" class=\"w-5 h-5\"/>\n  } @if (label()) {\n  <span class=\"ap-button-label\">{{ label() }}</span>\n  } @if (icon() && iconPos() === 'right' && !loading()) {\n  <ap-icon [name]=\"icon()\" class=\"w-6 h-6\"/>\n  }\n\n  <ng-content></ng-content>\n</button>\n", styles: [":host {\n  display: inline-block;\n}\n\n:host(.hidden) {\n  display: none;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApButtonComponent, { className: "ApButtonComponent", filePath: "src/ap-components-lib/ap-button/ap-button.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=ap-button.component.js.map