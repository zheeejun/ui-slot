import { Component, input, output } from '@angular/core';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import * as i0 from "@angular/core";
export class ApHistoryPopupShareComponent {
    header = input('SHARE');
    linkLabel = input('Copy Link');
    item = input(null);
    close = output();
    copyLink = output();
    shareUrl = window.location.href;
    shareToTelegram() {
        const url = `https://t.me/share/url?url=${encodeURIComponent(this.shareUrl)}`;
        window.open(url, '_blank');
    }
    shareToLine() {
        const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(this.shareUrl)}`;
        window.open(url, '_blank');
    }
    onCopyLink() {
        this.copyLink.emit(this.item());
    }
    onCancel() {
        this.close.emit();
    }
    static ɵfac = function ApHistoryPopupShareComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApHistoryPopupShareComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApHistoryPopupShareComponent, selectors: [["ap-history-popup-share"]], inputs: { header: [1, "header"], linkLabel: [1, "linkLabel"], item: [1, "item"] }, outputs: { close: "close", copyLink: "copyLink" }, decls: 16, vars: 7, consts: [[1, "absolute", "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "bg-black/60", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "header", "size"], [1, "relative", "flex", "justify-between", "sm:px-12", "px-4", "py-8", "text-center", "h-[20rem]", "mx-8", "select-none", "text-white"], [1, "flex", "flex-col", "items-center", "group", "cursor-pointer", 3, "click"], ["src", "assets/images/telegram_logo.svg", "alt", "Telegram", 1, "w-12", "h-12"], [1, "mt-2", "text-md", "sm:text-sm", "group-hover:underline"], ["src", "assets/images/line_logo.svg", "alt", "Line", 1, "w-11", "h-12"], [1, "flex", "flex-col", "items-center", "group", "cursor-pointer"], [3, "click", "size", "variant", "icon", "accentColor"]], template: function ApHistoryPopupShareComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function ApHistoryPopupShareComponent_Template_div_click_1_listener() { return ctx.onCancel(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
            i0.ɵɵlistener("close", function ApHistoryPopupShareComponent_Template_ap_ui_frame_popup_close_2_listener() { return ctx.close.emit(); });
            i0.ɵɵelementStart(3, "div", 3)(4, "button", 4);
            i0.ɵɵlistener("click", function ApHistoryPopupShareComponent_Template_button_click_4_listener() { return ctx.shareToTelegram(); });
            i0.ɵɵelement(5, "img", 5);
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtext(7, "Telegram");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function ApHistoryPopupShareComponent_Template_button_click_8_listener() { return ctx.shareToLine(); });
            i0.ɵɵelement(9, "img", 7);
            i0.ɵɵelementStart(10, "span", 6);
            i0.ɵɵtext(11, "Line");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "button", 8)(13, "ap-button", 9);
            i0.ɵɵlistener("click", function ApHistoryPopupShareComponent_Template_ap_button_click_13_listener() { return ctx.onCopyLink(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 6);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("header", ctx.header())("size", "mobile");
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("size", "large")("variant", "rounded-icon")("icon", "copy")("accentColor", "yellow");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.linkLabel());
        } }, dependencies: [ApUiFramePopupComponent, ApButtonComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApHistoryPopupShareComponent, [{
        type: Component,
        args: [{ selector: 'ap-history-popup-share', imports: [ApUiFramePopupComponent, ApButtonComponent], template: "<div class=\"absolute relative size-full grid place-items-center\">\n  <div class=\"absolute inset-0 bg-black/60\" (click)=\"onCancel()\"></div>\n  <ap-ui-frame-popup\n    [header]=\"header()\"\n    [size]=\"'mobile'\"\n    class=\"w-11/12 md:w-3/4 lg:w-1/2\"\n    (close)=\"close.emit()\"\n  >\n    <div\n      class=\"relative flex justify-between sm:px-12 px-4 py-8 text-center h-[20rem] mx-8 select-none text-white\"\n    >\n      <button\n        (click)=\"shareToTelegram()\"\n        class=\"flex flex-col items-center group cursor-pointer\"\n      >\n        <img\n          src=\"assets/images/telegram_logo.svg\"\n          alt=\"Telegram\"\n          class=\"w-12 h-12\"\n        />\n        <span class=\"mt-2 text-md sm:text-sm group-hover:underline\">Telegram</span>\n      </button>\n\n      <button\n        (click)=\"shareToLine()\"\n        class=\"flex flex-col items-center group cursor-pointer\"\n      >\n        <img src=\"assets/images/line_logo.svg\" alt=\"Line\" class=\"w-11 h-12\" />\n\n        <span class=\"mt-2 text-md sm:text-sm group-hover:underline\">Line</span>\n      </button>\n\n      <button class=\"flex flex-col items-center group cursor-pointer\">\n        <ap-button\n          [size]=\"'large'\"\n          [variant]=\"'rounded-icon'\"\n          [icon]=\"'copy'\"\n          [accentColor]=\"'yellow'\"\n          (click)=\"onCopyLink()\"\n        />\n        <span class=\"mt-2 text-md sm:text-sm group-hover:underline\"\n          >{{linkLabel()}}</span>\n      </button>\n    </div>\n  </ap-ui-frame-popup>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApHistoryPopupShareComponent, { className: "ApHistoryPopupShareComponent", filePath: "src/app/components/ap-history-popup-share/ap-history-popup-share.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-history-popup-share.component.js.map