import { CommonModule } from '@angular/common';
import { Component, input, model, output } from '@angular/core';
import { FloorNumberPipe } from '../../library/pipe/floor-number.pipe';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import * as i0 from "@angular/core";
const BUY_CHANCE_CARD_IMG_DEFAULT = '/assets/images/icons/img-chance.png';
export class ApBfCardChanceComponent {
    image = input(BUY_CHANCE_CARD_IMG_DEFAULT);
    title = input();
    content = input('Buy the chance to activate Double Chance for this round.');
    currency = input('$');
    price = input(60);
    unitText = input('round');
    activatedText = input('ACTIVATED');
    deactivatedText = input('DEACTIVATED');
    activated = model(true);
    disabled = input(false);
    activate = output();
    deactivate = output();
    getDefaultTitle() {
        return this.title() ?? 'Double Chance';
    }
    getDefaultImage() {
        return this.image() ?? BUY_CHANCE_CARD_IMG_DEFAULT;
    }
    getButtonText() {
        return this.activated() ? this.activatedText() : this.deactivatedText();
    }
    onButtonClick() {
        if (this.disabled()) {
            return;
        }
        const newState = !this.activated();
        this.activated.set(newState);
        if (newState) {
            this.activate.emit();
            return;
        }
        this.deactivate.emit();
    }
    static ɵfac = function ApBfCardChanceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApBfCardChanceComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApBfCardChanceComponent, selectors: [["ap-bf-card-chance"]], inputs: { image: [1, "image"], title: [1, "title"], content: [1, "content"], currency: [1, "currency"], price: [1, "price"], unitText: [1, "unitText"], activatedText: [1, "activatedText"], deactivatedText: [1, "deactivatedText"], activated: [1, "activated"], disabled: [1, "disabled"] }, outputs: { activated: "activatedChange", activate: "activate", deactivate: "deactivate" }, decls: 20, vars: 27, consts: [[1, "p-4"], [1, "relative", "bg-white", "rounded-xl", "text-center", "w-[15rem]", "h-[18rem]", "flex", "flex-col", "select-none"], [1, "absolute", "-top-12", "left-1/2", "-translate-x-1/2"], [1, "size-26", 3, "name"], [1, "p-4", "pt-12", "flex-1"], [1, "mt-2", "font-bold", "text-xl", "text-zinc-800", "h-[3rem]", "overflow-y-auto"], [1, "text-zinc-800", "text-base", "font-normal", "mt-2", "h-20", "overflow-y-auto"], [1, "relative", "font-bold", "text-zinc-800", "text-xl", "h-[2rem]", "mt-2"], [1, "text-sm", "font-semibold", "text-zinc-500", "ml-1"], [1, "border-1", "border-t", "border-zinc-200", "-translate-y-1"], [1, "-translate-y-3.5", "flex", "items-center", "justify-between", "gap-1", "text-xl", "text-blue-500", "font-bold", "rounded-full", "transition-colors", "duration-200", "cursor-pointer", "uppercase", "m-4", 3, "click", "disabled"], [1, "flex-1", "text-center", "w-10"], [1, "relative", "h-7", "w-15", "rounded-full", "border", "transition-colors", "duration-200", "flex-shrink-0"], [1, "absolute", "left-1", "h-5.5", "w-5.5", "translate-y-0.5", "rounded-full", "border", "border-blue-500", "bg-white", "shadow", "transition-all", "duration-200"]], template: function ApBfCardChanceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "ap-icon", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 7);
            i0.ɵɵtext(10);
            i0.ɵɵpipe(11, "floorNumber");
            i0.ɵɵelementStart(12, "span", 8);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(14, "div", 9);
            i0.ɵɵelementStart(15, "button", 10);
            i0.ɵɵlistener("click", function ApBfCardChanceComponent_Template_button_click_15_listener() { return ctx.onButtonClick(); });
            i0.ɵɵelementStart(16, "span", 11);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span", 12);
            i0.ɵɵelement(19, "div", 13);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("name", "rocket");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.getDefaultTitle(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.content(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.currency(), " ", i0.ɵɵpipeBind2(11, 24, ctx.price(), "1.2-2"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("/", ctx.unitText());
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("cursor-not-allowed", ctx.disabled());
            i0.ɵɵproperty("disabled", ctx.disabled());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getButtonText());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("bg-blue-700", ctx.activated())("bg-zinc-500", !ctx.activated())("border-blue-800", ctx.activated())("border-zinc-600", !ctx.activated());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("translate-x-7", ctx.activated())("border-blue-500", ctx.activated())("border-zinc-300", !ctx.activated());
        } }, dependencies: [CommonModule, FloorNumberPipe, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApBfCardChanceComponent, [{
        type: Component,
        args: [{ selector: 'ap-bf-card-chance', imports: [CommonModule, FloorNumberPipe, ApIconComponent], template: "<div class=\"p-4\">\n  <div\n    class=\"relative bg-white rounded-xl text-center w-[15rem] h-[18rem] flex flex-col select-none\"\n  >\n    <div class=\"absolute -top-12 left-1/2 -translate-x-1/2\">\n      <ap-icon [name]=\"'rocket'\" class=\"size-26\"/>\n    </div>\n    <div class=\"p-4 pt-12 flex-1\">\n      <div\n        class=\"mt-2 font-bold text-xl text-zinc-800 h-[3rem] overflow-y-auto\"\n      >\n        {{ getDefaultTitle() }}\n      </div>\n\n      <div\n        class=\"text-zinc-800 text-base font-normal mt-2 h-20 overflow-y-auto\"\n      >\n        {{ content() }}\n      </div>\n\n      <div class=\"relative font-bold text-zinc-800 text-xl h-[2rem] mt-2\">\n        {{ currency() }} {{ price() | floorNumber: \"1.2-2\" }}\n        <span class=\"text-sm font-semibold text-zinc-500 ml-1\"\n          >/{{ unitText() }}</span\n        >\n      </div>\n    </div>\n\n    <div class=\"border-1 border-t border-zinc-200 -translate-y-1\"></div>\n    <button\n      (click)=\"onButtonClick()\"\n      [disabled]=\"disabled()\"\n      class=\"-translate-y-3.5 flex items-center justify-between gap-1 text-xl text-blue-500 font-bold rounded-full transition-colors duration-200 cursor-pointer uppercase m-4\"\n      [class.cursor-not-allowed]=\"disabled()\"\n    >\n      <span class=\"flex-1 text-center w-10\">{{ getButtonText() }}</span>\n      <span\n        class=\"relative h-7 w-15 rounded-full border transition-colors duration-200 flex-shrink-0\"\n        [class.bg-blue-700]=\"activated()\"\n        [class.bg-zinc-500]=\"!activated()\"\n        [class.border-blue-800]=\"activated()\"\n        [class.border-zinc-600]=\"!activated()\"\n      >\n        <div\n          class=\"absolute left-1 h-5.5 w-5.5 translate-y-0.5 rounded-full border border-blue-500 bg-white shadow transition-all duration-200\"\n          [class.translate-x-7]=\"activated()\"\n          [class.border-blue-500]=\"activated()\"\n          [class.border-zinc-300]=\"!activated()\"\n        ></div>\n      </span>\n    </button>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApBfCardChanceComponent, { className: "ApBfCardChanceComponent", filePath: "src/app/components/ap-bf-card-chance/ap-bf-card-chance.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=ap-bf-card-chance.component.js.map