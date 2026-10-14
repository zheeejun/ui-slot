import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, effect, input, output, signal } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => [a0, a1];
export class ApHistoryImgComponent {
    load = output(); // 圖片載入狀態
    src = input(null);
    alt = input(null); // 圖片的替代文字
    class = input(''); // 附加的 CSS 類別
    fit = input('contain'); // 物件填充方式
    isLoading = signal(true); // 圖片是否正在載入
    defaultSrc = 'assets/images/info/default.png';
    currentSrc = signal(this.defaultSrc);
    constructor() {
        effect(() => {
            const provided = this.src();
            this.isLoading.set(true);
            this.currentSrc.set(provided || this.defaultSrc);
        });
    }
    setLoaded() {
        this.isLoading.set(false);
        this.load.emit(); // 發出載入完成事件
    }
    useFallback() {
        if (this.currentSrc() !== this.defaultSrc) {
            this.isLoading.set(true);
            this.currentSrc.set(this.defaultSrc);
        }
    }
    static ɵfac = function ApHistoryImgComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApHistoryImgComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApHistoryImgComponent, selectors: [["ap-history-img"]], inputs: { src: [1, "src"], alt: [1, "alt"], class: [1, "class"], fit: [1, "fit"] }, outputs: { load: "load" }, decls: 1, vars: 7, consts: [["loading", "lazy", 3, "load", "error", "src", "alt", "ngClass"]], template: function ApHistoryImgComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "img", 0);
            i0.ɵɵlistener("load", function ApHistoryImgComponent_Template_img_load_0_listener() { return ctx.setLoaded(); })("error", function ApHistoryImgComponent_Template_img_error_0_listener() { return ctx.useFallback(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("src", ctx.currentSrc(), i0.ɵɵsanitizeUrl)("alt", ctx.alt() || "history image")("ngClass", i0.ɵɵpureFunction2(4, _c0, ctx.class(), ctx.fit() === "cover" ? "object-cover" : ctx.fit() === "fill" ? "object-fill" : ctx.fit() === "none" ? "object-none" : "object-contain"))("@fadeIn", undefined);
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2, data: { animation: [
                trigger('fadeOut', [
                    transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
                ]),
                trigger('fadeIn', [
                    transition(':enter', [
                        style({ opacity: 0 }),
                        animate('300ms ease-out', style({ opacity: 1 })),
                    ]),
                ]),
            ] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApHistoryImgComponent, [{
        type: Component,
        args: [{ selector: 'ap-history-img', imports: [CommonModule], animations: [
                    trigger('fadeOut', [
                        transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
                    ]),
                    trigger('fadeIn', [
                        transition(':enter', [
                            style({ opacity: 0 }),
                            animate('300ms ease-out', style({ opacity: 1 })),
                        ]),
                    ]),
                ], template: "<!-- \u5716\u7247 -->\n<img\n  [src]=\"currentSrc()\"\n  [alt]=\"alt() || 'history image'\"\n  loading=\"lazy\"\n  (load)=\"setLoaded()\"\n  (error)=\"useFallback()\"\n  [ngClass]=\"[\n    class(),\n    fit() === 'cover'\n      ? 'object-cover'\n      : fit() === 'fill'\n      ? 'object-fill'\n      : fit() === 'none'\n      ? 'object-none'\n      : 'object-contain'\n  ]\"\n  @fadeIn\n/>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApHistoryImgComponent, { className: "ApHistoryImgComponent", filePath: "src/app/components/ap-history-img/ap-history-img.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=ap-history-img.component.js.map