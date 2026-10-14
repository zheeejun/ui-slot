import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApHistoryImgComponent } from '../ap-history-img/ap-history-img.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/app-interface/app-interface.service";
import * as i2 from "@angular/common";
function ApHistoryDetailWinComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 2)(1, "td", 3);
    i0.ɵɵelement(2, "ap-history-img", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 5)(4, "div", 6);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "span", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td", 5)(10, "div", 6);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const win_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r1.api.getSymbolTexture(win_r1.symbol) || "assets/images/info/default.png")("alt", win_r1.symbol || "symbol");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", win_r1.line, " ", ctx_r1.wayLabel());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", win_r1.qty, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.kindLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.winLabel());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.currencyLabel(), " ", win_r1.win_score, " ");
} }
export class ApHistoryDetailWinComponent {
    api;
    wayLabel = input('WAY');
    kindLabel = input('OF A KIND');
    winLabel = input('WIN');
    currencyLabel = input('$');
    winDatas = input([
        {
            symbol: 'H1',
            line: 243,
            qty: 5,
            win_score: 150.50,
        },
        {
            symbol: 'H2',
            line: 243,
            qty: 4,
            win_score: 75.25,
        },
        {
            symbol: 'M1',
            line: 243,
            qty: 3,
            win_score: 25.00,
        },
    ]);
    constructor(api) {
        this.api = api;
    }
    static ɵfac = function ApHistoryDetailWinComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApHistoryDetailWinComponent)(i0.ɵɵdirectiveInject(i1.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApHistoryDetailWinComponent, selectors: [["ap-history-detail-win"]], inputs: { wayLabel: [1, "wayLabel"], kindLabel: [1, "kindLabel"], winLabel: [1, "winLabel"], currencyLabel: [1, "currencyLabel"], winDatas: [1, "winDatas"] }, decls: 3, vars: 1, consts: [[1, "w-full", "text-white", "text-md"], ["class", "border-y border-white/0", 4, "ngFor", "ngForOf"], [1, "border-y", "border-white/0"], [1, "flex", "justify-center"], [1, "size-18", 3, "src", "alt"], [1, "font-medium", "whitespace-nowrap"], [1, "text-sm", "text-zinc-400"], [1, "font-md"]], template: function ApHistoryDetailWinComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0)(1, "tbody");
            i0.ɵɵtemplate(2, ApHistoryDetailWinComponent_tr_2_Template, 13, 9, "tr", 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.winDatas());
        } }, dependencies: [CommonModule, i2.NgForOf, ApHistoryImgComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApHistoryDetailWinComponent, [{
        type: Component,
        args: [{ selector: 'ap-history-detail-win', imports: [CommonModule, ApHistoryImgComponent], template: "<table class=\"w-full text-white text-md\">\n  <tbody>\n    <tr *ngFor=\"let win of winDatas()\" class=\"border-y border-white/0\">\n      <td class=\"flex justify-center\">\n        <ap-history-img\n          class=\"size-18\"\n          [src]=\"\n            api.getSymbolTexture(win.symbol) || 'assets/images/info/default.png'\n          \"\n          [alt]=\"win.symbol || 'symbol'\"\n        />\n      </td>\n      <td class=\"font-medium whitespace-nowrap\">\n        <div class=\"text-sm text-zinc-400\">{{ win.line }} {{ wayLabel() }}</div>\n        {{ win.qty }} <span class=\"font-md\">{{ kindLabel() }}</span>\n      </td>\n      <td class=\"font-medium whitespace-nowrap\">\n        <div class=\"text-sm text-zinc-400\">{{ winLabel() }}</div>\n        {{currencyLabel()}} {{ win.win_score }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n" }]
    }], () => [{ type: i1.AppInterfaceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApHistoryDetailWinComponent, { className: "ApHistoryDetailWinComponent", filePath: "src/app/components/ap-history-detail-win/ap-history-detail-win.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=ap-history-detail-win.component.js.map