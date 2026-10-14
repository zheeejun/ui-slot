import { Component, Input, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["containerRef"];
const _c1 = ["boxRef"];
const _c2 = ["*"];
export class ApDebounceContainerComponent {
    debounce = 0;
    containerRef;
    boxRef;
    resizeTimeout;
    ngAfterViewInit() {
        this.resizeToFit();
        window.addEventListener('resize', this.onResize);
    }
    ngOnDestroy() {
        window.removeEventListener('resize', this.onResize);
        clearTimeout(this.resizeTimeout);
    }
    onResize = () => {
        if (this.debounce > 0) {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => this.resizeToFit(), this.debounce * 1000);
        }
        else {
            this.resizeToFit();
        }
    };
    resizeToFit() {
        const container = this.containerRef.nativeElement;
        const target = this.boxRef.nativeElement;
        const { width, height } = container.getBoundingClientRect();
        Object.assign(target.style, {
            width: `${width}px`,
            height: `${height}px`,
        });
    }
    static ɵfac = function ApDebounceContainerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApDebounceContainerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApDebounceContainerComponent, selectors: [["ap-debounce-container"]], viewQuery: function ApDebounceContainerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.boxRef = _t.first);
        } }, inputs: { debounce: "debounce" }, ngContentSelectors: _c2, decls: 5, vars: 0, consts: [["containerRef", ""], ["boxRef", ""], [1, "debounce-container"], [1, "debounce-box"]], template: function ApDebounceContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 2, 0)(2, "div", 3, 1);
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd()();
        } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.debounce-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.debounce-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.3s;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApDebounceContainerComponent, [{
        type: Component,
        args: [{ selector: 'ap-debounce-container', standalone: true, template: "<div #containerRef class=\"debounce-container\">\n  <div #boxRef class=\"debounce-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [":host {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.debounce-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.debounce-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.3s;\n}\n"] }]
    }], null, { debounce: [{
            type: Input
        }], containerRef: [{
            type: ViewChild,
            args: ['containerRef', { static: true }]
        }], boxRef: [{
            type: ViewChild,
            args: ['boxRef', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApDebounceContainerComponent, { className: "ApDebounceContainerComponent", filePath: "src/ap-components-lib/ap-debounce-container/ap-debounce-container.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=ap-debounce-container.component.js.map