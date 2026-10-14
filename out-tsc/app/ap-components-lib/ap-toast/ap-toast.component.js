import { Component, input, signal } from '@angular/core';
import * as i0 from "@angular/core";
function ApToastComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "div", 1);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.bubbleClasses);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.message());
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.arrowClasses);
} }
export class ApToastComponent {
    message = input('');
    variant = input('default');
    duration = input(3000);
    visible = signal(false);
    _timer = null;
    show() {
        this.visible.set(true);
        this._clearTimer();
        if (this.duration() > 0) {
            this._timer = setTimeout(() => {
                this.visible.set(false);
            }, this.duration());
        }
    }
    hide() {
        this.visible.set(false);
        this._clearTimer();
    }
    get bubbleClasses() {
        const base = 'inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white shadow-lg whitespace-nowrap';
        const variants = {
            default: 'bg-zinc-700',
            success: 'bg-green-600',
            error: 'bg-red-600',
            warning: 'bg-yellow-500',
            info: 'bg-blue-600',
        };
        return `${base} ${variants[this.variant()]}`;
    }
    get arrowClasses() {
        const base = 'w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent';
        const variants = {
            default: 'border-t-zinc-700',
            success: 'border-t-green-600',
            error: 'border-t-red-600',
            warning: 'border-t-yellow-500',
            info: 'border-t-blue-600',
        };
        return `${base} ${variants[this.variant()]}`;
    }
    _clearTimer() {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
    }
    ngOnDestroy() {
        this._clearTimer();
    }
    static ɵfac = function ApToastComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApToastComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApToastComponent, selectors: [["ap-toast"]], inputs: { message: [1, "message"], variant: [1, "variant"], duration: [1, "duration"] }, decls: 1, vars: 1, consts: [[1, "toast-wrapper"], [1, "text-xl"]], template: function ApToastComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApToastComponent_Conditional_0_Template, 5, 5, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.visible() ? 0 : -1);
        } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n.toast-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  animation: _ngcontent-%COMP%_toast-fade-in 0.15s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_toast-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApToastComponent, [{
        type: Component,
        args: [{ selector: 'ap-toast', imports: [], template: "@if (visible()) {\n  <div class=\"toast-wrapper\">\n    <div [class]=\"bubbleClasses\">\n      <div class=\"text-xl\">{{ message() }}</div>\n    </div>\n    <div [class]=\"arrowClasses\"></div>\n  </div>\n}\n", styles: [":host {\n  display: inline-block;\n}\n\n.toast-wrapper {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  animation: toast-fade-in 0.15s ease-out;\n}\n\n@keyframes toast-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApToastComponent, { className: "ApToastComponent", filePath: "src/ap-components-lib/ap-toast/ap-toast.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=ap-toast.component.js.map