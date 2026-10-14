import { Component, HostListener, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import * as i0 from "@angular/core";
export class ApBfPopupPlayDemoConfirmComponent {
    header = input('Message');
    description = input('To begin watching, please confirm if you would like to play');
    cancelText = input('Cancel');
    confirmText = input('Confirm');
    // Output events
    close = output();
    confirm = output();
    onConfirm() {
        this.confirm.emit();
    }
    onCancel() {
        this.close.emit();
    }
    onKey(e) {
        if (e.key === 'Escape')
            this.onCancel();
        if (e.key === 'Enter')
            this.onConfirm();
    }
    static ɵfac = function ApBfPopupPlayDemoConfirmComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApBfPopupPlayDemoConfirmComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApBfPopupPlayDemoConfirmComponent, selectors: [["ap-bf-popup-play-demo-confirm"]], hostBindings: function ApBfPopupPlayDemoConfirmComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function ApBfPopupPlayDemoConfirmComponent_keydown_HostBindingHandler($event) { return ctx.onKey($event); }, i0.ɵɵresolveDocument);
        } }, inputs: { header: [1, "header"], description: [1, "description"], cancelText: [1, "cancelText"], confirmText: [1, "confirmText"] }, outputs: { close: "close", confirm: "confirm" }, decls: 10, vars: 10, consts: [[1, "absolute", "inset-0", "grid", "place-items-center", "select-none"], [1, "absolute", "inset-0", "bg-black/60", "animate-fade", "animate-once", "animate-duration-200", 3, "click"], [1, "relative", "w-11/12", "md:w-3/4", "lg:w-1/2", "animate-fade", "animate-once", "animate-duration-300", 3, "close", "header", "size"], [1, "px-6", "pt-6", "pb-2", "text-center", "space-y-4"], [1, "text-yellow-400", "size-28", "mx-auto", 3, "name"], [1, "h-px", "divider-gradient-yellow", "opacity-80"], [1, "text-base", "sm:text-lg", "font-medium", "text-zinc-300", 3, "innerHTML"], [1, "px-6", "pb-6", "pt-4", "flex", "gap-6"], [1, "w-full", 3, "click", "size", "severity", "label"], [1, "w-full", 3, "click", "size", "accentColor", "label"]], template: function ApBfPopupPlayDemoConfirmComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function ApBfPopupPlayDemoConfirmComponent_Template_div_click_1_listener() { return ctx.onCancel(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
            i0.ɵɵlistener("close", function ApBfPopupPlayDemoConfirmComponent_Template_ap_ui_frame_popup_close_2_listener() { return ctx.close.emit(); });
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "ap-icon", 4)(5, "div", 5)(6, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 7)(8, "ap-button", 8);
            i0.ɵɵlistener("click", function ApBfPopupPlayDemoConfirmComponent_Template_ap_button_click_8_listener() { return ctx.onCancel(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "ap-button", 9);
            i0.ɵɵlistener("click", function ApBfPopupPlayDemoConfirmComponent_Template_ap_button_click_9_listener() { return ctx.onConfirm(); });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("header", ctx.header())("size", "mobile");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", "play-circle");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", ctx.description(), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("size", "large")("severity", "secondary")("label", ctx.cancelText());
            i0.ɵɵadvance();
            i0.ɵɵproperty("size", "large")("accentColor", "yellow")("label", ctx.confirmText());
        } }, dependencies: [CommonModule, ApUiFramePopupComponent, ApButtonComponent, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApBfPopupPlayDemoConfirmComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ap-bf-popup-play-demo-confirm', imports: [CommonModule, ApUiFramePopupComponent, ApButtonComponent, ApButtonComponent, ApIconComponent], template: "<div class=\"absolute inset-0 grid place-items-center select-none\">\n  <div\n    class=\"absolute inset-0 bg-black/60 animate-fade animate-once animate-duration-200\"\n    (click)=\"onCancel()\"\n  ></div>\n  <ap-ui-frame-popup\n    [header]=\"header()\"\n    [size]=\"'mobile'\"\n    class=\"relative w-11/12 md:w-3/4 lg:w-1/2 animate-fade animate-once animate-duration-300\"\n    (close)=\"close.emit()\"\n  >\n    <!-- Content -->\n    <div class=\"px-6 pt-6 pb-2 text-center space-y-4\">\n      <ap-icon\n        [name]=\"'play-circle'\"\n        class=\"text-yellow-400 size-28 mx-auto\"\n      />\n      <div class=\"h-px divider-gradient-yellow opacity-80\"></div>\n      <div\n        class=\"text-base sm:text-lg font-medium text-zinc-300\"\n        [innerHTML]=\"description()\"\n      ></div>\n    </div>\n\n    <div class=\"px-6 pb-6 pt-4 flex gap-6\">\n      <ap-button\n        class=\"w-full\"\n        [size]=\"'large'\"\n        [severity]=\"'secondary'\"\n        [label]=\"cancelText()\"\n        (click)=\"onCancel()\"\n      />\n      <ap-button\n        class=\"w-full\"\n        [size]=\"'large'\"\n        [accentColor]=\"'yellow'\"\n        [label]=\"confirmText()\"\n        (click)=\"onConfirm()\"\n      />\n    </div>\n  </ap-ui-frame-popup>\n</div>\n" }]
    }], null, { onKey: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApBfPopupPlayDemoConfirmComponent, { className: "ApBfPopupPlayDemoConfirmComponent", filePath: "src/app/components/ap-bf-popup-play-demo-confirm/ap-bf-popup-play-demo-confirm.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=ap-bf-popup-play-demo-confirm.component.js.map