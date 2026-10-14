import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FloorNumberPipe } from '../../library/pipe/floor-number.pipe';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
const BUY_FEATURE_CARD_IMG_DEFAULT = '/assets/images/icons/img-feature.png';
export class ApBfCardFeatureComponent {
    image = input(BUY_FEATURE_CARD_IMG_DEFAULT);
    title = input();
    content = input('Buy the chance to activate Double Chance for this round.');
    getPlayDemoLabel = input('Feel the win!');
    currency = input('$');
    price = input(60);
    buttonText = input('BUY');
    disabled = input(false);
    buttonClick = output();
    playDemo = output();
    getDefaultTitle() {
        return this.title() ?? 'Feature Spins';
    }
    getDefaultImage() {
        return this.image() ?? BUY_FEATURE_CARD_IMG_DEFAULT;
    }
    onButtonClick() {
        if (this.disabled()) {
            return;
        }
        this.buttonClick.emit();
    }
    static ɵfac = function ApBfCardFeatureComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApBfCardFeatureComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApBfCardFeatureComponent, selectors: [["ap-bf-card-feature"]], inputs: { image: [1, "image"], title: [1, "title"], content: [1, "content"], getPlayDemoLabel: [1, "getPlayDemoLabel"], currency: [1, "currency"], price: [1, "price"], buttonText: [1, "buttonText"], disabled: [1, "disabled"] }, outputs: { buttonClick: "buttonClick", playDemo: "playDemo" }, decls: 18, vars: 21, consts: [[1, "p-4"], [1, "fixed", "sm:bottom-17", "bottom-18", "left-1/2", "z-sticky", "-translate-x-1/2", "border-b-2", "border-pink-500"], [1, "flex", "items-center", "justify-center", "gap-1", "whitespace-nowrap", "cursor-pointer", 3, "click"], ["name", "play-circle", 1, "text-pink-500", "size-6"], [1, "text-pink-500", "text-xl", "font-bold", "overflow-y-auto", "italic"], [1, "relative", "bg-white", "rounded-xl", "text-center", "w-[15rem]", "h-[18rem]", "flex", "flex-col", "select-none"], [1, "absolute", "-top-12", "left-1/2", "-translate-x-1/2", "w-24", "h-24", "md:w-24", "md:h-24", "object-scale-down", 3, "src"], [1, "p-4", "pt-12", "flex-1"], [1, "mt-2", "font-bold", "text-xl", "text-zinc-800", "h-[3rem]", "overflow-y-auto"], [1, "text-zinc-800", "text-base", "font-normal", "mt-2", "h-14", "overflow-y-auto"], [1, "relative", "font-bold", "text-zinc-800", "text-xl", "h-[2rem]", "-mt-1"], [1, "w-full", "text-xl", "text-white", "font-bold", "py-1.5", "rounded-b-xl", "transition-colors", "duration-200", "cursor-pointer", "uppercase", 3, "click", "disabled"]], template: function ApBfCardFeatureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function ApBfCardFeatureComponent_Template_button_click_2_listener() { return ctx.playDemo.emit(0); });
            i0.ɵɵelement(3, "ap-icon", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵelement(7, "img", 6);
            i0.ɵɵelementStart(8, "div", 7)(9, "div", 8);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 9);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 10);
            i0.ɵɵtext(14);
            i0.ɵɵpipe(15, "floorNumber");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "button", 11);
            i0.ɵɵlistener("click", function ApBfCardFeatureComponent_Template_button_click_16_listener() { return ctx.onButtonClick(); });
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.getPlayDemoLabel(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.getDefaultImage(), i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.getDefaultTitle(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.content(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.currency(), " ", i0.ɵɵpipeBind2(15, 18, ctx.price(), "1.2-2"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("bg-pink-600", !ctx.disabled())("hover:bg-pink-500", !ctx.disabled())("bg-zinc-400", ctx.disabled())("text-zinc-200", ctx.disabled())("cursor-not-allowed", ctx.disabled());
            i0.ɵɵproperty("disabled", ctx.disabled());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.buttonText(), " ");
        } }, dependencies: [CommonModule, FloorNumberPipe, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApBfCardFeatureComponent, [{
        type: Component,
        args: [{ selector: 'ap-bf-card-feature', imports: [CommonModule, FloorNumberPipe, ApIconComponent], template: "<div class=\"p-4\">\n  <!-- \u6211\u89BA\u5F97\u4ED6\u53EF\u80FD\u6703\u6539\u56DE\u9019\u500B\u4E4B\u4E00\n  <div class=\"absolute top-1 right-1 z-sticky\">\n    <ap-button\n      [variant]=\"'rounded-icon'\"\n      [accentColor]=\"'pink'\"\n      [icon]=\"'play'\"\n      [size]=\"'large'\"\n      [iconPos]=\"'right'\"\n      (click)=\"playDemo.emit(0)\"\n    />\n  </div>-->\n\n  <div\n    class=\"fixed sm:bottom-17 bottom-18 left-1/2 z-sticky -translate-x-1/2 border-b-2 border-pink-500\"\n  >\n    <button\n      class=\"flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer\"\n      (click)=\"playDemo.emit(0)\"\n    >\n      <ap-icon name=\"play-circle\" class=\"text-pink-500 size-6\" />\n\n      <div class=\"text-pink-500 text-xl font-bold overflow-y-auto italic\">\n        {{ getPlayDemoLabel() }}\n      </div>\n    </button>\n  </div>\n  <!-- \u6211\u89BA\u5F97\u4ED6\u53EF\u80FD\u6703\u6539\u56DE\u9019\u500B\u4E4B\u4E8C<div class=\"absolute bottom-16 left-1/2 z-sticky -translate-x-1/2\">\n    <button\n      type=\"button\"\n      class=\"inline-flex min-w-[9rem] items-center justify-center gap-1 self-center rounded-full bg-pink-50 border-2 border-pink-400 px-2 py-1 text-base font-semibold leading-none text-pink-600 transition hover:bg-pink-100 active:scale-[0.98] cursor-pointer\"\n      (click)=\"playDemo.emit(0)\"\n    >\n      <ap-icon name=\"play-circle\" class=\"text-pink-600 size-5\" />\n      <span class=\"text-pink-600 italic\">Feel the win!</span>\n    </button>\n  </div>-->\n  <div\n    class=\"relative bg-white rounded-xl text-center w-[15rem] h-[18rem] flex flex-col select-none\"\n  >\n    <img\n      [src]=\"getDefaultImage()\"\n      class=\"absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 md:w-24 md:h-24 object-scale-down\"\n    />\n\n    <div class=\"p-4 pt-12 flex-1\">\n      <div\n        class=\"mt-2 font-bold text-xl text-zinc-800 h-[3rem] overflow-y-auto\"\n      >\n        {{ getDefaultTitle() }}\n      </div>\n\n      <div\n        class=\"text-zinc-800 text-base font-normal mt-2 h-14 overflow-y-auto\"\n      >\n        {{ content() }}\n      </div>\n\n      <div class=\"relative font-bold text-zinc-800 text-xl h-[2rem] -mt-1\">\n        {{ currency() }} {{ price() | floorNumber: \"1.2-2\" }}\n      </div>\n    </div>\n\n    <button\n      (click)=\"onButtonClick()\"\n      [disabled]=\"disabled()\"\n      class=\"w-full text-xl text-white font-bold py-1.5 rounded-b-xl transition-colors duration-200 cursor-pointer uppercase\"\n      [class.bg-pink-600]=\"!disabled()\"\n      [class.hover:bg-pink-500]=\"!disabled()\"\n      [class.bg-zinc-400]=\"disabled()\"\n      [class.text-zinc-200]=\"disabled()\"\n      [class.cursor-not-allowed]=\"disabled()\"\n    >\n      {{ buttonText() }}\n    </button>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApBfCardFeatureComponent, { className: "ApBfCardFeatureComponent", filePath: "src/app/components/ap-bf-card-feature/ap-bf-card-feature.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=ap-bf-card-feature.component.js.map