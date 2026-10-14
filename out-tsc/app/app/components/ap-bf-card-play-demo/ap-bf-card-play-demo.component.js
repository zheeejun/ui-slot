import { Component, input, output } from '@angular/core';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import * as i0 from "@angular/core";
export class ApBfCardPlayDemoComponent {
    fallbackImage = '/icon/icon_10076_112x112_bkg_en.jpg';
    title = input('Slot Game');
    image = input(this.fallbackImage);
    buttonText = input('Play Demo');
    disabled = input(true);
    playDemo = output();
    onImageError(event) {
        const img = event.target;
        if (!img || img.src.endsWith(this.fallbackImage))
            return;
        img.src = this.fallbackImage;
    }
    ngAfterViewInit() { }
    static ɵfac = function ApBfCardPlayDemoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApBfCardPlayDemoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApBfCardPlayDemoComponent, selectors: [["ap-bf-card-play-demo"]], inputs: { title: [1, "title"], image: [1, "image"], buttonText: [1, "buttonText"], disabled: [1, "disabled"] }, outputs: { playDemo: "playDemo" }, decls: 13, vars: 18, consts: [[1, "flex", "items-center", "gap-3", "p-3", "rounded-2xl", "border-[0.2rem]", "border-transparent", "[background:linear-gradient(180deg,#434343,#2c2c2c,#1e1e1e,#101010)_padding-box,linear-gradient(180deg,#ecd8a3,#fbf5d1,#eac885,#94641e)_border-box]", "select-none"], [1, "inline-block", "size-20", "aspect-square", "rounded-lg", "p-[0.15rem]", "bg-gradient-to-b", "from-[#E6D2A5]", "to-[#8B6E2C]"], [1, "block", "size-full", "rounded-md", "object-cover", 3, "src"], [1, "w-40", "text-2xl", "font-semibold", "text-yellow-200", "text-left"], [1, "flex-col"], [1, "flex", "w-full", "mt-1.5", "space-x-2"], [3, "click", "label", "icon", "accentColor", "disabled"]], template: function ApBfCardPlayDemoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div")(4, "div", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4)(7, "div", 5)(8, "ap-button", 6);
            i0.ɵɵlistener("click", function ApBfCardPlayDemoComponent_Template_ap_button_click_8_listener() { return ctx.playDemo.emit(0); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "ap-button", 6);
            i0.ɵɵlistener("click", function ApBfCardPlayDemoComponent_Template_ap_button_click_9_listener() { return ctx.playDemo.emit(1); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 5)(11, "ap-button", 6);
            i0.ɵɵlistener("click", function ApBfCardPlayDemoComponent_Template_ap_button_click_11_listener() { return ctx.playDemo.emit(2); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "ap-button", 6);
            i0.ɵɵlistener("click", function ApBfCardPlayDemoComponent_Template_ap_button_click_12_listener() { return ctx.playDemo.emit(3); });
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.image(), i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.title(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("label", ctx.buttonText())("icon", "play")("accentColor", "yellow")("disabled", ctx.disabled());
            i0.ɵɵadvance();
            i0.ɵɵproperty("label", ctx.buttonText())("icon", "play")("accentColor", "yellow")("disabled", ctx.disabled());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("label", ctx.buttonText())("icon", "play")("accentColor", "yellow")("disabled", ctx.disabled());
            i0.ɵɵadvance();
            i0.ɵɵproperty("label", ctx.buttonText())("icon", "play")("accentColor", "yellow")("disabled", ctx.disabled());
        } }, dependencies: [ApButtonComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApBfCardPlayDemoComponent, [{
        type: Component,
        args: [{ selector: 'ap-bf-card-play-demo', imports: [ApButtonComponent], template: "<div\n  class=\"flex items-center gap-3 p-3 rounded-2xl border-[0.2rem] border-transparent [background:linear-gradient(180deg,#434343,#2c2c2c,#1e1e1e,#101010)_padding-box,linear-gradient(180deg,#ecd8a3,#fbf5d1,#eac885,#94641e)_border-box] select-none\"\n>\n  <!-- Game img -->\n  <div\n    class=\"inline-block size-20 aspect-square rounded-lg p-[0.15rem] bg-gradient-to-b from-[#E6D2A5] to-[#8B6E2C]\"\n  >\n    <img [src]=\"image()\" class=\"block size-full rounded-md object-cover\" />\n  </div>\n  <!-- Game title + Button -->\n  <div>\n    <div class=\"w-40 text-2xl font-semibold text-yellow-200 text-left\">\n      {{ title() }}\n    </div>\n    <!-- \u6700\u591A\u56DB\u500B\u64AD\u653E\u6309\u9215 -->\n    <div class=\"flex-col\">\n      <div class=\"flex w-full mt-1.5 space-x-2\">\n        <ap-button\n          [label]=\"buttonText()\"\n          [icon]=\"'play'\"\n          [accentColor]=\"'yellow'\"\n          (click)=\"playDemo.emit(0)\"\n          [disabled]=\"disabled()\"\n        /><ap-button\n          [label]=\"buttonText()\"\n          [icon]=\"'play'\"\n          [accentColor]=\"'yellow'\"\n          (click)=\"playDemo.emit(1)\"\n          [disabled]=\"disabled()\"\n        />\n      </div>\n      <div class=\"flex w-full mt-1.5 space-x-2\">\n        <ap-button\n          [label]=\"buttonText()\"\n          [icon]=\"'play'\"\n          [accentColor]=\"'yellow'\"\n          (click)=\"playDemo.emit(2)\"\n          [disabled]=\"disabled()\"\n        /><ap-button\n          [label]=\"buttonText()\"\n          [icon]=\"'play'\"\n          [accentColor]=\"'yellow'\"\n          (click)=\"playDemo.emit(3)\"\n          [disabled]=\"disabled()\"\n        />\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApBfCardPlayDemoComponent, { className: "ApBfCardPlayDemoComponent", filePath: "src/app/components/ap-bf-card-play-demo/ap-bf-card-play-demo.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=ap-bf-card-play-demo.component.js.map