import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApCashdropCardComponentCountdown } from '../ap-cashdrop-card-component-countdown/ap-cashdrop-card-component-countdown.component';
import * as i0 from "@angular/core";
export class ApCashdropCardCountdownComponent {
    daysLabel = input('DAYS');
    hoursLabel = input('HRS');
    minutesLabel = input('MINS');
    secondsLabel = input('SECS');
    title = input('Daily Reward Demo');
    remainingLabel = input('Event Remaining');
    endTime = input(new Date(Date.now() + 24 * 60 * 60 * 1000));
    static ɵfac = function ApCashdropCardCountdownComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApCashdropCardCountdownComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApCashdropCardCountdownComponent, selectors: [["ap-cashdrop-card-countdown"]], inputs: { daysLabel: [1, "daysLabel"], hoursLabel: [1, "hoursLabel"], minutesLabel: [1, "minutesLabel"], secondsLabel: [1, "secondsLabel"], title: [1, "title"], remainingLabel: [1, "remainingLabel"], endTime: [1, "endTime"] }, decls: 12, vars: 7, consts: [[1, "inline-block"], [1, "relative", "rounded-2xl", "p-[0.15rem]", "bg-gradient-gold"], [1, "rounded-xl", "bg-gradient-to-b", "from-zinc-800", "to-zinc-900", "w-[18rem]", "h-[7.5rem]", "grid", "grid-cols-[4rem_1fr]", "py-2", "p-2"], [1, "flex", "items-center", "justify-center"], [1, "coin-wrapper"], ["src", "assets/images/eventcenter/coin.png", "alt", "AP Coin", 1, "w-12", "h-12", "object-contain", "coin-image"], [1, "grid", "grid-rows-[auto,1fr,auto]"], [1, "text-left", "text-xl", "font-bold", "text-gradient-gold"], [3, "daysLabel", "hrsLabel", "secsLabel", "minsLabel", "variant"], [1, "text-left", "text-zinc-400", "text-xs", "italic"]], template: function ApCashdropCardCountdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵelement(5, "img", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 6)(7, "span", 7);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "ap-cashdrop-card-component-countdown", 8);
            i0.ɵɵelementStart(10, "div", 9);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", ctx.title() || "Daily Reward Demo", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("daysLabel", ctx.daysLabel())("hrsLabel", ctx.hoursLabel())("secsLabel", ctx.secondsLabel())("minsLabel", ctx.minutesLabel())("variant", "default");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.remainingLabel(), " ");
        } }, dependencies: [CommonModule, ApCashdropCardComponentCountdown], styles: [".coin-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  animation: _ngcontent-%COMP%_coinFloat 3s ease-in-out infinite;\n}\n\n.coin-image[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.4));\n  animation: _ngcontent-%COMP%_coinRotate 4s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_coinFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_coinRotate {\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApCashdropCardCountdownComponent, [{
        type: Component,
        args: [{ selector: 'ap-cashdrop-card-countdown', standalone: true, imports: [CommonModule, ApCashdropCardComponentCountdown], template: "<div class=\"inline-block\">\n  <div class=\"relative rounded-2xl p-[0.15rem] bg-gradient-gold\">\n    <!-- Card: 2 columns -->\n    <div\n      class=\"rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-900 w-[18rem] h-[7.5rem] grid grid-cols-[4rem_1fr] py-2 p-2\"\n    >\n      <!-- Left column: coin, vertically centered -->\n      <div class=\"flex items-center justify-center\">\n        <div class=\"coin-wrapper\">\n          <img\n            src=\"assets/images/eventcenter/coin.png\"\n            alt=\"AP Coin\"\n            class=\"w-12 h-12 object-contain coin-image\"\n          />\n        </div>\n      </div>\n\n      <!-- Right column: 3 rows (title / countdown / caption) -->\n      <div class=\"grid grid-rows-[auto,1fr,auto]\">\n        <!-- Row 1: title -->\n        <span class=\"text-left text-xl font-bold text-gradient-gold\">\n          {{ title() || \"Daily Reward Demo\" }}\n        </span>\n\n        <!-- Row 2: countdown (fully wrapped by a border box) -->\n        <ap-cashdrop-card-component-countdown\n          [daysLabel]=\"daysLabel()\"\n          [hrsLabel]=\"hoursLabel()\"\n          [secsLabel]=\"secondsLabel()\"\n          [minsLabel]=\"minutesLabel()\"\n          [variant]=\"'default'\"\n        />\n\n        <!-- Row 3: caption -->\n        <div class=\"text-left text-zinc-400 text-xs italic\">\n          {{ remainingLabel() }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".coin-wrapper {\n  position: relative;\n  animation: coinFloat 3s ease-in-out infinite;\n}\n\n.coin-image {\n  filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.4));\n  animation: coinRotate 4s linear infinite;\n}\n\n@keyframes coinFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n\n@keyframes coinRotate {\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApCashdropCardCountdownComponent, { className: "ApCashdropCardCountdownComponent", filePath: "src/app/components/ap-cashdrop-card-countdown/ap-cashdrop-card-countdown.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-cashdrop-card-countdown.component.js.map