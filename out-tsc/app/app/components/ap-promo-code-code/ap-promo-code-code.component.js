import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class ApPromoCodeQrCodeComponent {
    qrcodeUrl = input('assets/images/icons/img-qrcode-ad.png');
    qrcodeAlt = input('QR Code');
    url = input('https://t.me/advantplayofficial');
    size = input('24');
    borderColor = input('border-yellow-600');
    backgroundColor = input('bg-[radial-gradient(circle,_#FFF8DC_0%,_#F3D992_40%,_#BD9A4B_100%)]');
    openLink() {
        const linkUrl = this.url();
        if (linkUrl) {
            window.open(linkUrl, '_blank');
        }
    }
    static ɵfac = function ApPromoCodeQrCodeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApPromoCodeQrCodeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApPromoCodeQrCodeComponent, selectors: [["ap-promo-code-code"]], inputs: { qrcodeUrl: [1, "qrcodeUrl"], qrcodeAlt: [1, "qrcodeAlt"], url: [1, "url"], size: [1, "size"], borderColor: [1, "borderColor"], backgroundColor: [1, "backgroundColor"] }, decls: 5, vars: 6, consts: [[1, "relative", "inline-flex", "items-center", "justify-center", "hover:scale-[1.05]", "transition-transform", "duration-200", "active:scale-95", "cursor-pointer", 3, "click"], [1, "p-[0.25rem]", "rounded-full", "bg-gradient-to-b", "from-[#ECD8A3]", "via-[#ECD8A3]", "to-[#BD9A4B]"], [1, "bg-[radial-gradient(circle,_#FFF8DC_0%,_#F3D992_40%,_#BD9A4B_100%)"], [1, "w-full", "h-full", "rounded-sm", "relative", "overflow-hidden"], [3, "src", "alt"]], template: function ApPromoCodeQrCodeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function ApPromoCodeQrCodeComponent_Template_div_click_0_listener() { return ctx.openLink(); });
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "img", 4);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(ctx.backgroundColor() + " rounded-full p-3 w-" + ctx.size() + " h-" + ctx.size() + " flex items-center justify-center");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap("w-full h-full object-scale-down");
            i0.ɵɵproperty("src", ctx.qrcodeUrl(), i0.ɵɵsanitizeUrl)("alt", ctx.qrcodeAlt());
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApPromoCodeQrCodeComponent, [{
        type: Component,
        args: [{ selector: 'ap-promo-code-code', standalone: true, imports: [CommonModule], template: "<div\n  class=\"relative inline-flex items-center justify-center hover:scale-[1.05] transition-transform duration-200 active:scale-95 cursor-pointer\"\n  (click)=\"openLink()\"\n>\n  <div\n    class=\"p-[0.25rem] rounded-full bg-gradient-to-b from-[#ECD8A3] via-[#ECD8A3] to-[#BD9A4B]\"\n  >\n    <div class=\"bg-[radial-gradient(circle,_#FFF8DC_0%,_#F3D992_40%,_#BD9A4B_100%)\"\n      [class]=\"\n        backgroundColor() +\n        ' rounded-full p-3 w-' +\n        size() +\n        ' h-' +\n        size() +\n        ' flex items-center justify-center'\n      \"\n    >\n      <div class=\"w-full h-full rounded-sm relative overflow-hidden\">\n        <img\n          [src]=\"qrcodeUrl()\"\n          [alt]=\"qrcodeAlt()\"\n          [class]=\"'w-full h-full object-scale-down'\"\n        />\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApPromoCodeQrCodeComponent, { className: "ApPromoCodeQrCodeComponent", filePath: "src/app/components/ap-promo-code-code/ap-promo-code-code.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-promo-code-code.component.js.map