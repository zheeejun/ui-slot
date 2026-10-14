import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "mt-0": a0 });
const _c1 = a0 => ({ "ml-0": a0 });
export class DemoOverlayBannerComponent {
    isOverlay = signal(false);
    isSidebar = signal(false);
    onOverlayClick() {
        this.isOverlay.set(!this.isOverlay());
    }
    setSidebar(value) {
        this.isSidebar.set(value);
    }
    static ɵfac = function DemoOverlayBannerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DemoOverlayBannerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DemoOverlayBannerComponent, selectors: [["demo-overlay-banner"]], decls: 23, vars: 6, consts: [[1, "absolute", "top-0", "flex", "items-center", "justify-center", "w-full", "h-16", "bg-black", "opacity-75", "duration-300", "-mt-16", 3, "ngClass"], [1, "overflow-hidden", "whitespace-nowrap"], [1, "inline-block", "animate-marquee"], [1, "mx-4", "text-xl", "font-bold", "text-white"], [1, "absolute", "left-0", "top-0", "h-full", "w-70", "-ml-70", "duration-300", "overflow-auto", 3, "ngClass"], [1, "relative", "flex", "flex-col", "w-full", "h-full", "p-4", "gap-4", "bg-linear-to-r", "from-black/75", "to-black/0"], [1, "w-10", "h-10", "ml-auto", "flex", "items-center", "justify-center", "bg-gray-800", "hover:bg-gray-700", "rounded", "text-white", "active:scale-90", "transition", "duration-100", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18 18 6M6 6l12 12"], ["src", "assets/images/csgo_block.png"], ["src", "assets/images/bestgame_block.png"], [1, "absolute", "top-16", "left-56", "flex", "items-center", "justify-center", "gap-2"], [1, "w-12", "h-12", "p-3", "rounded-full", "bg-gray-300", "opacity-25", "hover:bg-gray-200", "hover:opacity-75", "active:bg-gray-100", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"], [1, "w-12", "h-12", "rounded-full", "p-3", "bg-gray-300", "opacity-25", "hover:bg-gray-200", "hover:opacity-75", "active:bg-gray-100", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"]], template: function DemoOverlayBannerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "\uD83D\uDD25 \u9650\u6642\u6D3B\u52D5\u958B\u8DD1\u4E2D\uFF01\u5FEB\u4F86\u53C3\u52A0\uFF01\uD83D\uDD25");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 3);
            i0.ɵɵtext(6, "\uD83D\uDD25 \u9650\u6642\u6D3B\u52D5\u958B\u8DD1\u4E2D\uFF01\u5FEB\u4F86\u53C3\u52A0\uFF01\uD83D\uDD25");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span", 3);
            i0.ɵɵtext(8, "\uD83D\uDD25 \u9650\u6642\u6D3B\u52D5\u958B\u8DD1\u4E2D\uFF01\u5FEB\u4F86\u53C3\u52A0\uFF01\uD83D\uDD25");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(9, "div", 4)(10, "div", 5)(11, "button", 6);
            i0.ɵɵlistener("click", function DemoOverlayBannerComponent_Template_button_click_11_listener() { return ctx.setSidebar(false); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(12, "svg", 7);
            i0.ɵɵelement(13, "path", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(14, "img", 9)(15, "img", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 11)(17, "button", 12);
            i0.ɵɵlistener("click", function DemoOverlayBannerComponent_Template_button_click_17_listener() { return ctx.setSidebar(true); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(18, "svg", 7);
            i0.ɵɵelement(19, "path", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(20, "button", 14);
            i0.ɵɵlistener("click", function DemoOverlayBannerComponent_Template_button_click_20_listener() { return ctx.onOverlayClick(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(21, "svg", 15);
            i0.ɵɵelement(22, "path", 16);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx.isOverlay()));
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx.isSidebar()));
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["[_nghost-%COMP%] {\n  display: contents;\n}\n\n\n@keyframes _ngcontent-%COMP%_marquee {\n  0% { transform: translateX(100%); }\n  100% { transform: translateX(-100%); }\n}\n\n.animate-marquee[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_marquee 10s linear infinite;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DemoOverlayBannerComponent, [{
        type: Component,
        args: [{ selector: 'demo-overlay-banner', imports: [CommonModule], template: "\n<div class=\"absolute top-0 flex items-center justify-center w-full h-16 bg-black opacity-75 duration-300 -mt-16\" [ngClass]=\"{'mt-0': isOverlay()}\">\n  <div class=\"overflow-hidden whitespace-nowrap\">\n    <div class=\"inline-block animate-marquee\">\n      <span class=\"mx-4 text-xl font-bold text-white\">\uD83D\uDD25 \u9650\u6642\u6D3B\u52D5\u958B\u8DD1\u4E2D\uFF01\u5FEB\u4F86\u53C3\u52A0\uFF01\uD83D\uDD25</span>\n      <span class=\"mx-4 text-xl font-bold text-white\">\uD83D\uDD25 \u9650\u6642\u6D3B\u52D5\u958B\u8DD1\u4E2D\uFF01\u5FEB\u4F86\u53C3\u52A0\uFF01\uD83D\uDD25</span>\n      <span class=\"mx-4 text-xl font-bold text-white\">\uD83D\uDD25 \u9650\u6642\u6D3B\u52D5\u958B\u8DD1\u4E2D\uFF01\u5FEB\u4F86\u53C3\u52A0\uFF01\uD83D\uDD25</span>\n    </div>\n  </div>    \n</div>\n\n<div class=\"absolute left-0 top-0 h-full w-70 -ml-70 duration-300 overflow-auto\" [ngClass]=\"{'ml-0': isSidebar()}\">\n  <div class=\"relative flex flex-col w-full h-full p-4 gap-4 bg-linear-to-r from-black/75 to-black/0 \">\n    <button (click)=\"setSidebar(false)\" class=\"w-10 h-10 ml-auto flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded text-white active:scale-90 transition duration-100\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18 18 6M6 6l12 12\" />\n      </svg>\n    </button>\n    <img src=\"assets/images/csgo_block.png\">\n    <img src=\"assets/images/bestgame_block.png\">\n  </div>\n</div>\n\n<div class=\"absolute top-16 left-56 flex items-center justify-center gap-2\">\n  <button (click)=\"setSidebar(true)\" class=\"w-12 h-12 p-3 rounded-full bg-gray-300 opacity-25 hover:bg-gray-200 hover:opacity-75 active:bg-gray-100\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5\" />\n    </svg>            \n  </button>\n  <button (click)=\"onOverlayClick()\" class=\" w-12 h-12 rounded-full p-3 bg-gray-300 opacity-25 hover:bg-gray-200 hover:opacity-75 active:bg-gray-100\">\n    <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19 9l-7 7-7-7\" />\n    </svg>\n  </button>\n</div>\n\n\n", styles: [":host {\n  display: contents;\n}\n\n\n@keyframes marquee {\n  0% { transform: translateX(100%); }\n  100% { transform: translateX(-100%); }\n}\n\n.animate-marquee {\n  animation: marquee 10s linear infinite;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DemoOverlayBannerComponent, { className: "DemoOverlayBannerComponent", filePath: "src/app/components/demo-overlay-banner/demo-overlay-banner.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=demo-overlay-banner.component.js.map