import { Component, input, output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApCashdropCardComponentCountdown } from '../ap-cashdrop-card-component-countdown/ap-cashdrop-card-component-countdown.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function ApPopupComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "img", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.image(), i0.ɵɵsanitizeUrl);
} }
function ApPopupComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} }
function ApPopupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title(), " ");
} }
function ApPopupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.description(), " ");
} }
function ApPopupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "ap-icon", 19)(2, "ap-icon", 20)(3, "ap-icon", 19);
    i0.ɵɵelementEnd();
} }
function ApPopupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "ap-cashdrop-card-component-countdown", 22);
    i0.ɵɵelementStart(2, "div", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("daysLabel", ctx_r0.daysLabel())("hrsLabel", ctx_r0.hrsLabel())("minsLabel", ctx_r0.minsLabel())("secsLabel", ctx_r0.secsLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.remainingLabel(), " ");
} }
function ApPopupComponent_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2);
} }
function ApPopupComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 24);
    i0.ɵɵtemplate(1, ApPopupComponent_ul_10_li_1_Template, 3, 1, "li", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.listItems());
} }
export class ApPopupComponent {
    header = input('Message');
    image = input('assets/images/eventcenter/img_insufficient.png');
    title = input('congratulation');
    text = input('dfdfsfev');
    description = input('dfdfsfev');
    button = input('Confirm');
    enableClose = input(true);
    size = input('default');
    variant = input('default');
    showTitle = input(false);
    showDescription = input(false);
    showDivider = input(false);
    showCountdown = input(false);
    endTime = input(new Date(Date.now() + 24 * 60 * 60 * 1000));
    daysLabel = input('DAYS');
    hrsLabel = input('HRS');
    minsLabel = input('MINS');
    secsLabel = input('SECS');
    remainingLabel = input('Event Remaining');
    showStars = input(false);
    starCount = input(5);
    showLists = input(false);
    listItems = input([]);
    close = output();
    confirm = output();
    onCancel() {
        this.close.emit();
    }
    onConfirm() {
        this.confirm.emit();
    }
    onKey(e) {
        if (e.key === 'Escape')
            this.onCancel();
        if (e.key === 'Enter')
            this.onConfirm();
    }
    static ɵfac = function ApPopupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApPopupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApPopupComponent, selectors: [["ap-popup"]], hostBindings: function ApPopupComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function ApPopupComponent_keydown_HostBindingHandler($event) { return ctx.onKey($event); }, i0.ɵɵresolveDocument);
        } }, inputs: { header: [1, "header"], image: [1, "image"], title: [1, "title"], text: [1, "text"], description: [1, "description"], button: [1, "button"], enableClose: [1, "enableClose"], size: [1, "size"], variant: [1, "variant"], showTitle: [1, "showTitle"], showDescription: [1, "showDescription"], showDivider: [1, "showDivider"], showCountdown: [1, "showCountdown"], endTime: [1, "endTime"], daysLabel: [1, "daysLabel"], hrsLabel: [1, "hrsLabel"], minsLabel: [1, "minsLabel"], secsLabel: [1, "secsLabel"], remainingLabel: [1, "remainingLabel"], showStars: [1, "showStars"], starCount: [1, "starCount"], showLists: [1, "showLists"], listItems: [1, "listItems"] }, outputs: { close: "close", confirm: "confirm" }, ngContentSelectors: _c0, decls: 14, vars: 13, consts: [[1, "absolute", "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "bg-black/60", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "header", "size"], [1, "bg-zinc-800", "px-4", "py-4", "text-center", "mx-8", "select-none", "flex", "flex-col", "justify-center", "items-center", "gap-2"], ["class", "flex justify-center mb-4", 4, "ngIf"], ["class", "h-[0.08rem] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent", 4, "ngIf"], ["class", "font-bold text-gradient-gold text-2xl mt-2", 4, "ngIf"], ["class", "mt-4 text-xl text-yellow-200 font-medium", 4, "ngIf"], ["class", "flex justify-center items-center space-x-1 mt-2", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "list-none  text-left text-md md:text-sm space-y-2 w-64 font-normal text-yellow-200 mt-2 space-y-2", 4, "ngIf"], [1, "flex", "justify-center", "mt-6", "mb-4"], [3, "click", "label", "size", "severity", "accentColor"], [1, "flex", "justify-center", "mb-4"], ["alt", "image", 1, "size-24", 3, "src"], [1, "h-[0.08rem]", "w-full", "bg-gradient-to-r", "from-transparent", "via-yellow-300", "to-transparent"], [1, "font-bold", "text-gradient-gold", "text-2xl", "mt-2"], [1, "mt-4", "text-xl", "text-yellow-200", "font-medium"], [1, "flex", "justify-center", "items-center", "space-x-1", "mt-2"], ["name", "star", 1, "size-3", "text-yellow-200"], ["name", "star", 1, "size-4", "text-yellow-200"], [1, "mt-4"], [3, "daysLabel", "hrsLabel", "minsLabel", "secsLabel"], [1, "text-yellow-200", "text-xs", "font-normal", "mt-1", "italic"], [1, "list-none", "text-left", "text-md", "md:text-sm", "space-y-2", "w-64", "font-normal", "text-yellow-200", "mt-2", "space-y-2"], [4, "ngFor", "ngForOf"]], template: function ApPopupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function ApPopupComponent_Template_div_click_1_listener() { return ctx.onCancel(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
            i0.ɵɵlistener("close", function ApPopupComponent_Template_ap_ui_frame_popup_close_2_listener() { return ctx.close.emit(); });
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, ApPopupComponent_div_4_Template, 2, 1, "div", 4)(5, ApPopupComponent_div_5_Template, 1, 0, "div", 5)(6, ApPopupComponent_div_6_Template, 2, 1, "div", 6)(7, ApPopupComponent_div_7_Template, 2, 1, "div", 7)(8, ApPopupComponent_div_8_Template, 4, 0, "div", 8)(9, ApPopupComponent_div_9_Template, 4, 5, "div", 9)(10, ApPopupComponent_ul_10_Template, 2, 1, "ul", 10);
            i0.ɵɵprojection(11);
            i0.ɵɵelementStart(12, "div", 11)(13, "ap-button", 12);
            i0.ɵɵlistener("click", function ApPopupComponent_Template_ap_button_click_13_listener() { return ctx.onConfirm(); });
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("header", ctx.header())("size", "mobile");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.image());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showDivider());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showTitle());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showDescription());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showStars());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showCountdown());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showLists() && ctx.listItems().length > 0);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("label", ctx.button())("size", "large")("severity", "primary")("accentColor", "yellow");
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, ApButtonComponent,
            ApCashdropCardComponentCountdown,
            ApIconComponent,
            ApUiFramePopupComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApPopupComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ap-popup', imports: [
                    CommonModule,
                    ApButtonComponent,
                    ApCashdropCardComponentCountdown,
                    ApIconComponent,
                    ApUiFramePopupComponent,
                ], template: "<div class=\"absolute relative size-full grid place-items-center\">\n  <div class=\"absolute inset-0 bg-black/60\" (click)=\"onCancel()\"></div>\n  <ap-ui-frame-popup\n    [header]=\"header()\"\n    [size]=\"'mobile'\"\n    class=\"w-11/12 md:w-3/4 lg:w-1/2\"\n    (close)=\"close.emit()\"\n  >\n    <div\n      class=\"bg-zinc-800 px-4 py-4 text-center mx-8 select-none flex flex-col justify-center items-center gap-2\"\n    >\n      <!-- Image -->\n      <div *ngIf=\"image()\" class=\"flex justify-center mb-4\">\n        <img [src]=\"image()\" alt=\"image\" class=\"size-24\" />\n      </div>\n\n      <!-- Separator -->\n      <div\n        *ngIf=\"showDivider()\"\n        class=\"h-[0.08rem] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent\"\n      ></div>\n\n      <!-- Title -->\n      <div\n        *ngIf=\"showTitle()\"\n        class=\"font-bold text-gradient-gold text-2xl mt-2\"\n      >\n        {{ title() }}\n      </div>\n\n      <!-- Description -->\n      <div\n        *ngIf=\"showDescription()\"\n        class=\"mt-4 text-xl text-yellow-200 font-medium\"\n      >\n        {{ description() }}\n      </div>\n\n      <!-- Stars -->\n      <div\n        *ngIf=\"showStars()\"\n        class=\"flex justify-center items-center space-x-1 mt-2\"\n      >\n        <ap-icon name=\"star\" class=\"size-3 text-yellow-200\"></ap-icon>\n        <ap-icon name=\"star\" class=\"size-4 text-yellow-200\"></ap-icon>\n        <ap-icon name=\"star\" class=\"size-3 text-yellow-200\"></ap-icon>\n      </div>\n\n      <!-- Countdown -->\n      <div *ngIf=\"showCountdown()\" class=\"mt-4\">\n        <ap-cashdrop-card-component-countdown \n        [daysLabel]=\"daysLabel()\" \n        [hrsLabel]=\"hrsLabel()\"[minsLabel]=\"minsLabel()\" [secsLabel]=\"secsLabel()\"></ap-cashdrop-card-component-countdown>\n        <div class=\"text-yellow-200 text-xs font-normal mt-1 italic\">{{remainingLabel()}}\n        </div>\n      </div>\n\n      <!-- Lists -->\n      <ul\n        *ngIf=\"showLists() && listItems().length > 0\"\n        class=\"list-none  text-left text-md md:text-sm space-y-2 w-64 font-normal text-yellow-200 mt-2 space-y-2\"\n      >\n        <li *ngFor=\"let item of listItems()\">\n          <span>{{ item }}</span>\n        </li>\n      </ul>\n\n      <!-- Custom content via ng-content -->\n      <ng-content></ng-content>\n\n      <!-- Button -->\n      <div class=\"flex justify-center mt-6 mb-4\">\n        <ap-button\n          [label]=\"button()\"\n          [size]=\"'large'\"\n          [severity]=\"'primary'\"\n          [accentColor]=\"'yellow'\"\n          (click)=\"onConfirm()\"\n        ></ap-button>\n      </div>\n    </div>\n  </ap-ui-frame-popup>\n</div>\n" }]
    }], null, { onKey: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApPopupComponent, { className: "ApPopupComponent", filePath: "src/app/components/ap-popup/ap-popup.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=ap-popup.component.js.map