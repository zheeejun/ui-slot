import { Component, HostListener, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApTrnCardTitleComponent } from '../ap-trn-card-title/ap-trn-card-title.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "text-yellow-400": a0, "text-purple-300": a1 });
export class ApTrnGameMatchFinished {
    variant = input('quick');
    iconImage = input('');
    eventTitle = input('');
    header = input('Match Finished');
    getQuickTitle = input('QUICK');
    getEventTitle = input('EVENT');
    getEventIcon = input('gift');
    getQuickIcon = input('trophy');
    getConfirmButtonText = input('Confirm');
    getList01 = input('Tallying results...(5~10mins)');
    getList02 = input('Prizes will be credited after tallying.');
    // Output events
    onClose = output();
    onConfirm = output();
    displayVariant = computed(() => {
        return this.variant();
    });
    clickConfirm() {
        this.onConfirm.emit();
    }
    clickCancel() {
        this.onClose.emit();
    }
    onKey(e) {
        if (e.key === 'Enter')
            this.clickConfirm();
    }
    static ɵfac = function ApTrnGameMatchFinished_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnGameMatchFinished)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnGameMatchFinished, selectors: [["ap-trn-game-match-finished"]], hostBindings: function ApTrnGameMatchFinished_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function ApTrnGameMatchFinished_keydown_HostBindingHandler($event) { return ctx.onKey($event); }, i0.ɵɵresolveDocument);
        } }, inputs: { variant: [1, "variant"], iconImage: [1, "iconImage"], eventTitle: [1, "eventTitle"], header: [1, "header"], getQuickTitle: [1, "getQuickTitle"], getEventTitle: [1, "getEventTitle"], getEventIcon: [1, "getEventIcon"], getQuickIcon: [1, "getQuickIcon"], getConfirmButtonText: [1, "getConfirmButtonText"], getList01: [1, "getList01"], getList02: [1, "getList02"] }, outputs: { onClose: "onClose", onConfirm: "onConfirm" }, decls: 17, vars: 23, consts: [[1, "relative", "size-full", "flex", "items-center", "justify-center"], [1, "inset-0", "bg-black/60", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", "relative", 3, "close", "variant", "header", "size"], [1, "bg-zinc-800", "px-4", "py-4", "text-center", "mx-8", "select-none", "flex", "flex-col", "justify-center", "items-center", "gap-4"], [3, "variant", "title"], [1, "flex", "translate-x-4"], [1, "size-20", 3, "name", "ngClass"], ["name", "clock", 1, "size-6", "translate-y-18", "-translate-x-3", 3, "ngClass"], [1, "h-[0.15rem]", "mx-2", "my-2", "w-80", "bg-linear-to-r", "from-transparent", "to-transparent"], [1, "list-disc", "list-inside", "text-left", "text-md", "md:text-sm", "space-y-2", "w-72", "md:w-80", "font-medium", "text-zinc-300"], [1, "pb-8", "mt-6", "flex", "justify-center"], [1, "w-48", 3, "click", "label", "size", "accentColor"]], template: function ApTrnGameMatchFinished_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function ApTrnGameMatchFinished_Template_div_click_1_listener() { return ctx.clickCancel(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
            i0.ɵɵlistener("close", function ApTrnGameMatchFinished_Template_ap_ui_frame_popup_close_2_listener() { return ctx.clickCancel(); });
            i0.ɵɵelementStart(3, "div", 3)(4, "div");
            i0.ɵɵelement(5, "ap-trn-card-title", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵelement(7, "ap-icon", 6)(8, "ap-icon", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "div", 8);
            i0.ɵɵelementStart(10, "ul", 9)(11, "li");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "li");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "div", 10)(16, "ap-button", 11);
            i0.ɵɵlistener("click", function ApTrnGameMatchFinished_Template_ap_button_click_16_listener() { return ctx.clickConfirm(); });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("variant", ctx.displayVariant() === "event" ? "event" : "quick")("header", ctx.header())("size", "mobile");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("variant", ctx.displayVariant() === "event" ? "event" : "quick")("title", ctx.displayVariant() === "event" ? ctx.getEventTitle() : ctx.getQuickTitle());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", ctx.displayVariant() === "event" ? ctx.getEventIcon() : ctx.getQuickIcon())("ngClass", i0.ɵɵpureFunction2(17, _c0, ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow", ctx.displayVariant() === "event" || ctx.displayVariant() === "purple"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(20, _c0, ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow", ctx.displayVariant() === "event" || ctx.displayVariant() === "purple"));
            i0.ɵɵadvance();
            i0.ɵɵclassProp("via-yellow-300", ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow")("via-purple-300", ctx.displayVariant() === "event" || ctx.displayVariant() === "purple");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.getList01());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getList02());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("label", ctx.getConfirmButtonText())("size", "large")("accentColor", ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow" ? "yellow" : "purple");
        } }, dependencies: [CommonModule, i1.NgClass, ApButtonComponent, ApTrnCardTitleComponent, ApUiFramePopupComponent, ApIconComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnGameMatchFinished, [{
        type: Component,
        args: [{ standalone: true, selector: 'ap-trn-game-match-finished', imports: [CommonModule, ApButtonComponent, ApTrnCardTitleComponent, ApUiFramePopupComponent, ApIconComponent,], template: "<div class=\"relative size-full flex items-center justify-center\">\n  <div class=\"inset-0 bg-black/60\" (click)=\"clickCancel()\"></div>\n  <ap-ui-frame-popup\n    [variant]=\"displayVariant() === 'event' ? 'event' : 'quick'\"\n    [header]=\"header()\"\n    [size]=\"'mobile'\"\n    class=\"w-11/12 md:w-3/4 lg:w-1/2 relative\"\n    (close)=\"clickCancel()\"\n  >\n    <!-- Content -->\n    <div\n      class=\"bg-zinc-800 px-4 py-4 text-center mx-8 select-none flex flex-col justify-center items-center gap-4\"\n    >\n      <!-- Tournament Title -->\n      <div>\n        <ap-trn-card-title\n          [variant]=\"displayVariant() === 'event' ? 'event' : 'quick'\"\n          [title]=\"\n            displayVariant() === 'event' ? getEventTitle() : getQuickTitle()\n          \"\n        />\n      </div>\n      <!-- Icon -->\n      <div class=\"flex translate-x-4\">\n        <ap-icon\n          class=\"size-20\"\n          [name]=\"\n            displayVariant() === 'event' ? getEventIcon() : getQuickIcon()\n          \"\n          [ngClass]=\"{\n            'text-yellow-400':\n              displayVariant() === 'quick' || displayVariant() === 'yellow',\n            'text-purple-300':\n              displayVariant() === 'event' || displayVariant() === 'purple',\n          }\"\n        />\n        <ap-icon\n          name=\"clock\"\n          class=\"size-6 translate-y-18 -translate-x-3\"\n          [ngClass]=\"{\n            'text-yellow-400':\n              displayVariant() === 'quick' || displayVariant() === 'yellow',\n            'text-purple-300':\n              displayVariant() === 'event' || displayVariant() === 'purple',\n          }\"\n        />\n      </div>\n\n      <!-- Separator -->\n      <div\n        class=\"h-[0.15rem] mx-2 my-2 w-80 bg-linear-to-r from-transparent to-transparent\"\n        [class.via-yellow-300]=\"\n          displayVariant() === 'quick' || displayVariant() === 'yellow'\n        \"\n        [class.via-purple-300]=\"\n          displayVariant() === 'event' || displayVariant() === 'purple'\n        \"\n      ></div>\n      <!-- Bullet Points -->\n      <ul\n        class=\"list-disc list-inside text-left text-md md:text-sm space-y-2 w-72 md:w-80 font-medium text-zinc-300\"\n      >\n        <li>{{ getList01() }}</li>\n        <li>{{ getList02() }}</li>\n      </ul>\n    </div>\n\n    <!-- Footer -->\n    <div class=\"pb-8 mt-6 flex justify-center\">\n      <ap-button\n        class=\"w-48\"\n        [label]=\"getConfirmButtonText()\"\n        [size]=\"'large'\"\n        (click)=\"clickConfirm()\"\n        [accentColor]=\"\n          displayVariant() === 'quick' || displayVariant() === 'yellow'\n            ? 'yellow'\n            : 'purple'\n        \"\n      />\n    </div>\n  </ap-ui-frame-popup>\n</div>\n", styles: [":host {\n  display: block;\n}"] }]
    }], null, { onKey: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnGameMatchFinished, { className: "ApTrnGameMatchFinished", filePath: "src/app/components/ap-trn-game-match-finished/ap-trn-game-match-finished.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=ap-trn-game-match-finished.component.js.map