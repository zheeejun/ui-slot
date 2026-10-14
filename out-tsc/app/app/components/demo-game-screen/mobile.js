import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class MobileComponent {
    static ɵfac = function MobileComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MobileComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MobileComponent, selectors: [["mobile"]], decls: 4, vars: 0, consts: [["src", "assets/images/10087/01_FG/fg-people.png", 1, "absolute", "object-contain", "top-0", "-translate-y-1/10", "right-1/3", "h-full", "w-[50%]"], ["src", "assets/images/10087/01_FG/fg-top-banner.png", 1, "absolute", "object-contain", "top-0", "left-1/2", "-translate-x-1/2", "h-[10%]", "w-[80%]"], ["src", "assets/images/10087/01_FG/fg-wheel.png", 1, "absolute", "object-contain", "top-[10%]", "left-1/2", "-translate-x-1/2", "h-[80%]", "w-[80%]"], ["src", "assets/images/10087/01_FG/fg-spin-text.png", 1, "absolute", "object-contain", "bottom-[8%]", "left-1/2", "-translate-x-1/2", "h-[30%]", "w-[35%]"]], template: function MobileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "img", 0)(1, "img", 1)(2, "img", 2)(3, "img", 3);
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MobileComponent, [{
        type: Component,
        args: [{ selector: 'mobile', standalone: true, imports: [CommonModule], template: "<!-- Mobile -->\n<img\n  class=\"absolute object-contain top-0 -translate-y-1/10 right-1/3 h-full w-[50%]\"\n  src=\"assets/images/10087/01_FG/fg-people.png\"\n/>\n\n<img\n  class=\"absolute object-contain top-0 left-1/2 -translate-x-1/2 h-[10%] w-[80%]\"\n  src=\"assets/images/10087/01_FG/fg-top-banner.png\"\n/>\n\n<!--Wheel + Banner: centered together-->\n<img\n  class=\"absolute object-contain top-[10%] left-1/2 -translate-x-1/2 h-[80%] w-[80%]\"\n  src=\"assets/images/10087/01_FG/fg-wheel.png\"\n/>\n\n<!--Free Spins - Fixed Above Buttons-->\n<img\n  class=\"absolute object-contain bottom-[8%] left-1/2 -translate-x-1/2 h-[30%] w-[35%]\"\n  src=\"assets/images/10087/01_FG/fg-spin-text.png\"\n/>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MobileComponent, { className: "MobileComponent", filePath: "src/app/components/demo-game-screen/mobile.ts", lineNumber: 10 }); })();
//# sourceMappingURL=mobile.js.map