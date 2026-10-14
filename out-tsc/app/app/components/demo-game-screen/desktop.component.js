import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class DesktopComponent {
    static ɵfac = function DesktopComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DesktopComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DesktopComponent, selectors: [["desktop"]], decls: 4, vars: 0, consts: [["src", "assets/images/10087/01_FG/fg-people.png", 1, "absolute", "object-contain", "top-0", "right-0", "h-full", "w-[44%]"], ["src", "assets/images/10087/01_FG/fg-top-banner.png", 1, "absolute", "object-contain", "-top-[3%]", "left-1/2", "-translate-x-1/2", "h-[13.5%]", "w-[80%]"], ["src", "assets/images/10087/01_FG/fg-wheel.png", 1, "absolute", "object-contain", "top-[10%]", "left-1/2", "-translate-x-1/2", "h-[80%]", "w-[80%]"], ["src", "assets/images/10087/01_FG/fg-spin-text.png", 1, "absolute", "object-contain", "-bottom-[2%]", "left-1/2", "-translate-x-1/2", "h-[12%]", "w-[30%]"]], template: function DesktopComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "img", 0)(1, "img", 1)(2, "img", 2)(3, "img", 3);
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DesktopComponent, [{
        type: Component,
        args: [{ selector: 'desktop', standalone: true, imports: [CommonModule], template: "\n<!-- Desktop -->\n<img\n  class=\"absolute object-contain top-0 right-0  h-full w-[44%]\"\n  src=\"assets/images/10087/01_FG/fg-people.png\"\n/>\n\n<img\n  class=\"absolute object-contain -top-[3%] left-1/2 -translate-x-1/2 h-[13.5%] w-[80%]\"\n  src=\"assets/images/10087/01_FG/fg-top-banner.png\"\n/>\n\n\n<!--Wheel + Banner: centered together-->\n<img\n  class=\"absolute object-contain top-[10%] left-1/2 -translate-x-1/2 h-[80%] w-[80%]\"\n  src=\"assets/images/10087/01_FG/fg-wheel.png\"\n/>\n\n<!--Free Spins - Fixed Above Buttons-->\n<img \n  class=\"absolute object-contain -bottom-[2%] left-1/2 -translate-x-1/2 h-[12%] w-[30%]\"\n  src=\"assets/images/10087/01_FG/fg-spin-text.png\"\n/>\n\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DesktopComponent, { className: "DesktopComponent", filePath: "src/app/components/demo-game-screen/desktop.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=desktop.component.js.map