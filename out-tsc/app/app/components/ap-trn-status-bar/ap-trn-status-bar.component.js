import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "text-yellow-300 ": a0, "text-purple-300 ": a1 });
export class ApTrnStatusBarComponent {
    iconQuick = signal('trophy default');
    iconEvent = signal('gift default');
    variant = input('quick');
    text = input('Quick Race Mode On: Bet x');
    multiplier = input(1.2);
    getTextColor() {
        return this.variant() === 'quick' ? 'text-yellow-300' : 'text-purple-300';
    }
    getDisplayText() {
        const text = this.text();
        if (text) {
            if (text.includes('{0}')) {
                return text.replace('{0}', `${this.multiplier()}`);
            }
            return `${text}${this.multiplier()}`;
        }
        const mode = this.variant() === 'quick' ? 'Quick Race' : 'Event';
        return `${mode} Mode On(Bet x${this.multiplier()})`;
    }
    static ɵfac = function ApTrnStatusBarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnStatusBarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnStatusBarComponent, selectors: [["ap-trn-status-bar"]], inputs: { variant: [1, "variant"], text: [1, "text"], multiplier: [1, "multiplier"] }, decls: 4, vars: 8, consts: [[1, "w-full", "py-0.5", "px-2", "flex", "items-center", "justify-center", "gap-1", "select-none", "bg-linear-to-r", "from-zinc-900/30", "via-zinc-900/95", "to-zinc-900/30", "transition-all"], [1, "size-3", "object-scale-down", "shrink-0", 3, "name", "ngClass"]], template: function ApTrnStatusBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "ap-icon", 1);
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("name", ctx.variant() === "quick" ? ctx.iconQuick() : ctx.iconEvent())("ngClass", i0.ɵɵpureFunction2(5, _c0, ctx.variant() === "quick", ctx.variant() === "event"));
            i0.ɵɵadvance();
            i0.ɵɵclassMap("font-bold text-xs tracking-wider  " + ctx.getTextColor());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.getDisplayText(), " ");
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnStatusBarComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-status-bar', imports: [CommonModule, ApIconComponent], template: "<div\n  class=\"w-full py-0.5 px-2 flex items-center justify-center gap-1 select-none bg-linear-to-r from-zinc-900/30 via-zinc-900/95 to-zinc-900/30 transition-all\"\n>\n  <ap-icon\n    [name]=\"variant() === 'quick' ? iconQuick() : iconEvent()\"\n    class=\"size-3 object-scale-down shrink-0\"\n    [ngClass]=\"{\n      'text-yellow-300 ': variant() === 'quick',\n      'text-purple-300 ': variant() === 'event',\n    }\"\n  />\n  <div [class]=\"'font-bold text-xs tracking-wider  ' + getTextColor()\">\n    {{ getDisplayText() }}\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnStatusBarComponent, { className: "ApTrnStatusBarComponent", filePath: "src/app/components/ap-trn-status-bar/ap-trn-status-bar.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=ap-trn-status-bar.component.js.map