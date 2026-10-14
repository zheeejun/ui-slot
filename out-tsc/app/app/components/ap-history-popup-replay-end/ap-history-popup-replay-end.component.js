import { Component, ViewChild, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApToastComponent } from '../../../ap-components-lib/ap-toast/ap-toast.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
const _c0 = ["copyLinkToast"];
function ApHistoryPopupReplayEndComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 6);
    i0.ɵɵlistener("click", function ApHistoryPopupReplayEndComponent_Conditional_1_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClose()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("icon", "x-mark")("size", "medium")("severity", "contrast")("accentColor", "zinc");
} }
function ApHistoryPopupReplayEndComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 7);
    i0.ɵɵlistener("click", function ApHistoryPopupReplayEndComponent_Conditional_3_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onWatchAgain()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("label", ctx_r1.appI18n.instant("replay_again", "WATCH AGAIN"))("icon", "play")("variant", "outlined")("accentColor", "zinc");
} }
function ApHistoryPopupReplayEndComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 8);
    i0.ɵɵelement(2, "ap-toast", 9, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ap-button", 7);
    i0.ɵɵlistener("click", function ApHistoryPopupReplayEndComponent_Conditional_4_Template_ap_button_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCopyLink()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("message", ctx_r1.appI18n.instant("replay_link_copied", "Link Copied"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", ctx_r1.appI18n.instant("replay_copy_link", "COPY LINK"))("icon", "link default")("variant", "outlined")("accentColor", "zinc");
} }
export class ApHistoryPopupReplayEndComponent {
    appI18n = inject(AppI18nService);
    showWatchAgain = input(true);
    showCopyLink = input(true);
    showCloseButton = input(true);
    watchAgain = output();
    copyLink = output();
    close = output();
    copyLinkToast;
    onWatchAgain() {
        this.watchAgain.emit();
    }
    onCopyLink() {
        this.copyLink.emit();
        this.copyLinkToast?.show();
    }
    onClose() {
        this.close.emit();
    }
    static ɵfac = function ApHistoryPopupReplayEndComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApHistoryPopupReplayEndComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApHistoryPopupReplayEndComponent, selectors: [["ap-history-popup-replay-end"]], viewQuery: function ApHistoryPopupReplayEndComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.copyLinkToast = _t.first);
        } }, inputs: { showWatchAgain: [1, "showWatchAgain"], showCopyLink: [1, "showCopyLink"], showCloseButton: [1, "showCloseButton"] }, outputs: { watchAgain: "watchAgain", copyLink: "copyLink", close: "close" }, decls: 5, vars: 3, consts: [["copyLinkToast", ""], [1, "fixed", "inset-0", "bg-black/60", "flex", "items-center", "justify-center", "z-overlay"], [1, "absolute", "top-4", "sm:right-1/4", "right-0", "flex", "items-center", "justify-end", "px-3", "py-2", 3, "icon", "size", "severity", "accentColor"], [1, "flex", "gap-6", "p-2"], [3, "label", "icon", "variant", "accentColor"], [1, "relative", "inline-flex", "justify-center"], [1, "absolute", "top-4", "sm:right-1/4", "right-0", "flex", "items-center", "justify-end", "px-3", "py-2", 3, "click", "icon", "size", "severity", "accentColor"], [3, "click", "label", "icon", "variant", "accentColor"], [1, "absolute", "bottom-full", "left-1/2", "-translate-x-1/2", "mb-2", "pointer-events-none"], ["variant", "default", 3, "message"]], template: function ApHistoryPopupReplayEndComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵconditionalCreate(1, ApHistoryPopupReplayEndComponent_Conditional_1_Template, 1, 4, "ap-button", 2);
            i0.ɵɵelementStart(2, "div", 3);
            i0.ɵɵconditionalCreate(3, ApHistoryPopupReplayEndComponent_Conditional_3_Template, 1, 4, "ap-button", 4);
            i0.ɵɵconditionalCreate(4, ApHistoryPopupReplayEndComponent_Conditional_4_Template, 5, 5, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showCloseButton() ? 1 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showWatchAgain() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showCopyLink() ? 4 : -1);
        } }, dependencies: [CommonModule, ApButtonComponent, ApToastComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApHistoryPopupReplayEndComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ap-history-popup-replay-end', imports: [CommonModule, ApButtonComponent, ApToastComponent], template: "<div\r\n  class=\"fixed inset-0 bg-black/60 flex items-center justify-center z-overlay\"\r\n>\r\n  @if (showCloseButton()) {\r\n    <ap-button\r\n      class=\"absolute top-4 sm:right-1/4 right-0 flex items-center justify-end px-3 py-2\"\r\n      [icon]=\"'x-mark'\"\r\n      [size]=\"'medium'\"\r\n      [severity]=\"'contrast'\"\r\n      [accentColor]=\"'zinc'\"\r\n      (click)=\"onClose()\"\r\n    />\r\n  }\r\n  <div class=\"flex gap-6 p-2\">\r\n    @if (showWatchAgain()) {\r\n      <ap-button\r\n        [label]=\"appI18n.instant('replay_again', 'WATCH AGAIN')\"\r\n        [icon]=\"'play'\"\r\n        [variant]=\"'outlined'\"  \r\n        [accentColor]=\"'zinc'\"\r\n        (click)=\"onWatchAgain()\"\r\n      />\r\n    }\r\n    @if (showCopyLink()) {\r\n      <div class=\"relative inline-flex justify-center\">\r\n        <div class=\"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none\">\r\n          <ap-toast #copyLinkToast [message]=\"appI18n.instant('replay_link_copied', 'Link Copied')\" variant=\"default\" />\r\n        </div>\r\n        <ap-button\r\n          [label]=\"appI18n.instant('replay_copy_link', 'COPY LINK')\"\r\n          [icon]=\"'link default'\"\r\n          [variant]=\"'outlined'\"\r\n          [accentColor]=\"'zinc'\"\r\n          (click)=\"onCopyLink()\"\r\n        />\r\n      </div>\r\n    }\r\n  </div>\r\n</div>\r\n" }]
    }], null, { copyLinkToast: [{
            type: ViewChild,
            args: ['copyLinkToast']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApHistoryPopupReplayEndComponent, { className: "ApHistoryPopupReplayEndComponent", filePath: "src/app/components/ap-history-popup-replay-end/ap-history-popup-replay-end.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=ap-history-popup-replay-end.component.js.map