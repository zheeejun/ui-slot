import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "pl-4 mt-0 my-1": a0, "my-2": a1 });
function ApUiTocDevComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 3)(1, "a", 4);
    i0.ɵɵlistener("click", function ApUiTocDevComponent_li_2_Template_a_click_1_listener() { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.scrollToId(item_r2.id)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, item_r2.level === 2, item_r2.level === 1));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r2.text, " ");
} }
/** * ap-dev-toc component generates a table of contents based on specified header elements within a target container.
 * It scans the target container for headers matching the specified selector and creates a list of clickable items*/
export class ApUiTocDevComponent {
    elRef;
    selector = 'h1, h2';
    target = '#content';
    tocItems = [];
    constructor(elRef) {
        this.elRef = elRef;
    }
    ngAfterViewInit() {
        this.generateToc();
    }
    generateToc() {
        const root = document.querySelector(this.target);
        if (!root)
            return;
        const headers = root.querySelectorAll(this.selector);
        const items = [];
        headers.forEach((el, index) => {
            const tag = el.tagName.toLowerCase();
            // Determine the level of the header based on its tag name.
            const level = tag === 'h1' ? 1 : tag === 'h2' ? 2 : 3;
            if (!el.id)
                el.id = `toc-${index}`;
            items.push({
                id: el.id,
                text: el.textContent?.trim() || '',
                level
            });
        });
        this.tocItems = items;
    }
    scrollToId(id) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    static ɵfac = function ApUiTocDevComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiTocDevComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiTocDevComponent, selectors: [["ap-ui-toc-dev"]], inputs: { selector: "selector", target: "target" }, decls: 3, vars: 1, consts: [[1, "w-64", "-mr-64", "lg:mr-0", "duration-100", "pt-10"], [1, "list-none", "pl-4", "border-l-2", "border-zinc-600", "leading-5"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["href", "javascript:void(0)", 1, "text-zinc-300", "hover:text-zinc-400", "hover:underline", 3, "click"]], template: function ApUiTocDevComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "ul", 1);
            i0.ɵɵtemplate(2, ApUiTocDevComponent_li_2_Template, 3, 5, "li", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.tocItems);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf], styles: ["[_nghost-%COMP%] {\n    position: fixed;\n    top: 0px;\n    right: 0px;\n  }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiTocDevComponent, [{
        type: Component,
        args: [{ selector: 'ap-ui-toc-dev', imports: [CommonModule], template: "<div class=\"w-64 -mr-64 lg:mr-0 duration-100 pt-10\">\n  <ul class=\"list-none pl-4 border-l-2 border-zinc-600 leading-5\">\n    <li\n      *ngFor=\"let item of tocItems\"\n      [ngClass]=\"{\n        'pl-4 mt-0 my-1': item.level === 2,\n        'my-2': item.level === 1\n      }\"\n    >\n      <a\n        href=\"javascript:void(0)\"\n        class=\"text-zinc-300 hover:text-zinc-400 hover:underline\"\n        (click)=\"scrollToId(item.id)\"\n      >\n        {{ item.text }}\n      </a>\n    </li>\n  </ul>\n</div>\n", styles: ["  :host {\n    position: fixed;\n    top: 0px;\n    right: 0px;\n  }"] }]
    }], () => [{ type: i0.ElementRef }], { selector: [{
            type: Input
        }], target: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiTocDevComponent, { className: "ApUiTocDevComponent", filePath: "src/app/components/ap-ui-toc-dev/ap-ui-toc-dev.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=ap-ui-toc-dev.component.js.map