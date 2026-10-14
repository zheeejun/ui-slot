import { Component, HostListener, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ApBfPopupConfirmChanceComponent {
    header = input('Message');
    image = input();
    currency = input('$');
    price = input(0);
    title = input('Buy Now?');
    description = input('Click "Confirm" to complete your purchase.');
    confirmText = input('CONFIRM');
    cancelText = input('CANCEL');
    close = output();
    confirm = output();
    clickConfirm() {
        this.confirm.emit();
    }
    clickCancel() {
        this.close.emit();
    }
    clickClose() {
        this.close.emit();
    }
    onKey(e) {
        if (e.key === 'Escape')
            this.clickCancel();
        if (e.key === 'Enter')
            this.clickConfirm();
    }
    static ɵfac = function ApBfPopupConfirmChanceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApBfPopupConfirmChanceComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApBfPopupConfirmChanceComponent, selectors: [["ap-bf-popup-confirm-chance"]], hostBindings: function ApBfPopupConfirmChanceComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function ApBfPopupConfirmChanceComponent_keydown_HostBindingHandler($event) { return ctx.onKey($event); }, i0.ɵɵresolveDocument);
        } }, inputs: { header: [1, "header"], image: [1, "image"], currency: [1, "currency"], price: [1, "price"], title: [1, "title"], description: [1, "description"], confirmText: [1, "confirmText"], cancelText: [1, "cancelText"] }, outputs: { close: "close", confirm: "confirm" }, decls: 15, vars: 11, consts: [[1, "absolute", "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "bg-black/60", "animate-fade", "animate-once", "animate-duration-200", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", "animate-fade", "animate-once", "animate-duration-300", 3, "close", "header", "size"], [1, "bg-white", "px-4", "py-4", "text-center", "select-none", "h-[20rem]"], [1, "x-auto", "object-scale-down", "drop-shadow-lg"], [1, "size-40", 3, "name"], ["id", "buy-confirm-title", 1, "mt-2", "font-bold", "text-3xl", "text-zinc-900"], [1, "mt-4", "text-zinc-800", "text-xl", "font-medium", "mx-8", 3, "innerHTML"], [1, "flex"], ["type", "button", 1, "basis-1/2", "py-3", "text-2xl", "font-semibold", "text-white", "rounded-bl-lg", "bg-zinc-600", "hover:bg-zinc-500", "cursor-pointer", "uppercase", 3, "click"], ["type", "button", 1, "basis-1/2", "py-3", "text-2xl", "font-semibold", "text-white", "rounded-br-lg", "bg-blue-600", "hover:bg-blue-500", "cursor-pointer", "uppercase", 3, "click"]], template: function ApBfPopupConfirmChanceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function ApBfPopupConfirmChanceComponent_Template_div_click_1_listener() { return ctx.clickCancel(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
            i0.ɵɵlistener("close", function ApBfPopupConfirmChanceComponent_Template_ap_ui_frame_popup_close_2_listener() { return ctx.clickClose(); });
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
            i0.ɵɵelement(5, "ap-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 8)(11, "button", 9);
            i0.ɵɵlistener("click", function ApBfPopupConfirmChanceComponent_Template_button_click_11_listener() { return ctx.clickCancel(); });
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 10);
            i0.ɵɵlistener("click", function ApBfPopupConfirmChanceComponent_Template_button_click_13_listener() { return ctx.clickConfirm(); });
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("header", ctx.header())("size", "mobile");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("name", "rocket");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.currency(), " ", i0.ɵɵpipeBind2(8, 8, ctx.price(), "1.2-2"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", ctx.description(), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.cancelText(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.confirmText(), " ");
        } }, dependencies: [ApUiFramePopupComponent, CommonModule, i1.DecimalPipe, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApBfPopupConfirmChanceComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ap-bf-popup-confirm-chance', imports: [ApUiFramePopupComponent, CommonModule, ApIconComponent], template: "<div class=\"absolute relative size-full grid place-items-center\">\n  <div class=\"absolute inset-0 bg-black/60  animate-fade animate-once animate-duration-200\" (click)=\"clickCancel()\"></div>\n  <ap-ui-frame-popup\n    [header]=\"header()\"\n    [size]=\"'mobile'\"\n    class=\"w-11/12 md:w-3/4 lg:w-1/2 animate-fade animate-once animate-duration-300\"\n    (close)=\"clickClose()\"\n  >\n    <div class=\"bg-white px-4 py-4 text-center select-none h-[20rem]\">\n      <div class=\"x-auto object-scale-down drop-shadow-lg\">\n        <ap-icon [name]=\"'rocket'\" class=\"size-40\" />\n      </div>\n      <div id=\"buy-confirm-title\" class=\"mt-2 font-bold text-3xl text-zinc-900\">\n        {{ currency() }} {{ price() | number: \"1.2-2\" }}\n      </div>\n      <div\n        class=\"mt-4 text-zinc-800 text-xl font-medium mx-8\"\n        [innerHTML]=\"description()\"\n      ></div>\n    </div>\n\n    <div class=\"flex\">\n      <button\n        type=\"button\"\n        class=\"basis-1/2 py-3 text-2xl font-semibold text-white rounded-bl-lg bg-zinc-600 hover:bg-zinc-500 cursor-pointer uppercase\"\n        (click)=\"clickCancel()\"\n      >\n        {{ cancelText() }}\n      </button>\n      <button\n        type=\"button\"\n        class=\"basis-1/2 py-3 text-2xl font-semibold text-white rounded-br-lg bg-blue-600 hover:bg-blue-500 cursor-pointer uppercase\"\n        (click)=\"clickConfirm()\"\n      >\n        {{ confirmText() }}\n      </button>\n    </div>\n  </ap-ui-frame-popup>\n</div>\n" }]
    }], null, { onKey: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApBfPopupConfirmChanceComponent, { className: "ApBfPopupConfirmChanceComponent", filePath: "src/app/components/ap-bf-popup-confirm-chance/ap-bf-popup-confirm-chance.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=ap-bf-popup-confirm-chance.component.js.map