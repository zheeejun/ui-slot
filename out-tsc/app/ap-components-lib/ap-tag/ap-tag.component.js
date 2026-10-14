import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function ApTagComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.iconClasses);
    i0.ɵɵproperty("name", ctx_r0.icon);
} }
export class ApTagComponent {
    label = '';
    severity = 'primary';
    variant = 'default';
    icon;
    rounded = false;
    get tagClasses() {
        const classes = [
            'inline-flex',
            'items-center',
            'gap-1.5',
            'px-2',
            'py-1',
            'text-xs',
            'font-bold',
            'transition-all',
            'duration-200',
        ];
        // Rounded variant
        if (this.variant === 'pill' || this.rounded) {
            classes.push('rounded-full');
        }
        else {
            classes.push('rounded-md');
        }
        // Severity colors
        switch (this.severity) {
            case 'primary':
                classes.push('bg-orange-100', 'text-orange-700', 'dark:bg-orange-500/20', 'dark:text-orange-300');
                break;
            case 'success':
                classes.push('bg-green-100', 'text-green-700', 'dark:bg-green-500/20', 'dark:text-green-300');
                break;
            case 'info':
                classes.push('bg-blue-100', 'text-blue-700', 'dark:bg-blue-500/20', 'dark:text-blue-300');
                break;
            case 'warning':
                classes.push('bg-amber-100', 'text-amber-600', 'dark:bg-amber-500/20', 'dark:text-amber-300');
                break;
            case 'danger':
                classes.push('bg-red-400', 'text-red-700', 'dark:bg-red-500', 'dark:text-white', 'border-1', 'border-red-200');
                break;
            case 'disabled':
                classes.push('bg-zinc-200', 'text-zinc-600', 'dark:bg-zinc-400/20', 'dark:text-zinc-200');
                break;
        }
        return classes.join(' ');
    }
    get iconClasses() {
        return 'w-4 h-4';
    }
    static ɵfac = function ApTagComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTagComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTagComponent, selectors: [["ap-tag"]], inputs: { label: "label", severity: "severity", variant: "variant", icon: "icon", rounded: "rounded" }, ngContentSelectors: _c0, decls: 5, vars: 4, consts: [[3, "name", "class"], [1, "uppercase"], [3, "name"]], template: function ApTagComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵconditionalCreate(1, ApTagComponent_Conditional_1_Template, 1, 3, "ap-icon", 0);
            i0.ɵɵelementStart(2, "span", 1);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.tagClasses);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.icon ? 1 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
        } }, dependencies: [CommonModule, ApIconComponent], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTagComponent, [{
        type: Component,
        args: [{ selector: 'ap-tag', imports: [CommonModule, ApIconComponent], template: "<span [class]=\"tagClasses\">\n  @if (icon) {\n  <ap-icon [name]=\"icon\" [class]=\"iconClasses\"></ap-icon>\n  }\n  <span class=\"uppercase\">{{ label }}</span>\n  <ng-content></ng-content>\n</span>\n", styles: [":host {\n  display: inline-block;\n}\n"] }]
    }], null, { label: [{
            type: Input
        }], severity: [{
            type: Input
        }], variant: [{
            type: Input
        }], icon: [{
            type: Input
        }], rounded: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTagComponent, { className: "ApTagComponent", filePath: "src/ap-components-lib/ap-tag/ap-tag.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=ap-tag.component.js.map