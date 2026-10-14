import { Component, inject, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ICON_MAP_TOKEN } from './ap-icon-map-token';
import * as i0 from "@angular/core";
export class ApIconComponent {
    set name(value) {
        this._name = value || '';
        this.svgHtml = this.getSvgHtml(this._name);
    }
    get name() {
        return this._name;
    }
    svgHtml = '';
    _name = '';
    sanitizer = inject(DomSanitizer);
    iconMap = inject(ICON_MAP_TOKEN, { optional: true }) ?? {};
    getSvgHtml(name) {
        if (!name)
            return '';
        const [iconName, style = 'default'] = name.split(' ');
        const iconSet = this.iconMap[iconName];
        const rawSvg = iconSet?.[style] || iconSet?.['default'] || '';
        const cleaned = this.removeSvgClass(rawSvg);
        return this.sanitizer.bypassSecurityTrustHtml(cleaned);
    }
    removeSvgClass(svg) {
        return svg.replace(/\s*class="[^"]*"/g, '');
    }
    static ɵfac = function ApIconComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApIconComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApIconComponent, selectors: [["ap-icon"]], inputs: { name: "name" }, decls: 1, vars: 1, consts: [[1, "inner-svg", 3, "innerHTML"]], template: function ApIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("innerHTML", ctx.svgHtml, i0.ɵɵsanitizeHtml);
        } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1; \n}\n\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApIconComponent, [{
        type: Component,
        args: [{ selector: 'ap-icon', imports: [], template: "\n<div class=\"inner-svg\" [innerHTML]=\"svgHtml\"></div>", styles: [":host {\n  display: inline-block;\n  aspect-ratio: 1; \n}\n\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}"] }]
    }], null, { name: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApIconComponent, { className: "ApIconComponent", filePath: "src/ap-components-lib/ap-icon/ap-icon.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-icon.component.js.map