import { Component, HostBinding, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2) => [a0, a1, a2];
export class ApBadgeComponent {
    size = input('md');
    variant = input('primary');
    value = input('');
    get hostSizeClass() {
        const sizes = {
            xs: 'w-3 h-3',
            sm: 'w-4 h-4',
            md: 'w-6 h-6',
            lg: 'w-8 h-8',
        };
        return sizes[this.size()];
    }
    getSizeClasses() {
        const sizes = {
            xs: 'text-xs',
            sm: 'text-xs',
            md: 'text-md',
            lg: 'text-base',
        };
        return sizes[this.size()];
    }
    getVariantClasses() {
        const variants = {
            primary: 'bg-orange-500',
            success: 'bg-green-500',
            info: 'bg-blue-500',
            warning: 'bg-yellow-500',
            danger: 'bg-red-500 border-2 border-white outline-2 outline-black',
            rounded: 'bg-indigo-500',
            circle: 'bg-red-600',
        };
        return variants[this.variant()];
    }
    getShapeClass() {
        return this.variant() === 'rounded' ? 'rounded-2xl' : 'rounded-full';
    }
    static ɵfac = function ApBadgeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApBadgeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApBadgeComponent, selectors: [["ap-badge"]], hostVars: 2, hostBindings: function ApBadgeComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.hostSizeClass);
        } }, inputs: { size: [1, "size"], variant: [1, "variant"], value: [1, "value"] }, decls: 2, vars: 6, consts: [[1, "w-full", "h-full", "items-center", "justify-center", "font-bold", "text-white", 3, "ngClass"]], template: function ApBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c0, ctx.getSizeClasses(), ctx.getVariantClasses(), ctx.getShapeClass()));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.value(), "\n");
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApBadgeComponent, [{
        type: Component,
        args: [{ selector: 'ap-badge', imports: [CommonModule], template: "<div\n  class=\"w-full h-full items-center justify-center font-bold text-white\"\n  [ngClass]=\"[getSizeClasses(), getVariantClasses(), getShapeClass()]\"\n>\n  {{ value() }}\n</div>\n", styles: [":host {\n  display: inline-block;\n}\n"] }]
    }], null, { hostSizeClass: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApBadgeComponent, { className: "ApBadgeComponent", filePath: "src/ap-components-lib/ap-badge/ap-badge.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-badge.component.js.map