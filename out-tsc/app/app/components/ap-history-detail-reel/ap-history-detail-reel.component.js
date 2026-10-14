import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ApHistoryImgComponent } from '../ap-history-img/ap-history-img.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/app-interface/app-interface.service";
import * as i2 from "@angular/common";
function ApHistoryDetailReelComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "ap-history-img", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const symbol_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.api.getSymbolTexture(symbol_r1) || "assets/images/info/default.png");
} }
function ApHistoryDetailReelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ApHistoryDetailReelComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const reel_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", reel_r3.symbol);
} }
export class ApHistoryDetailReelComponent {
    api;
    reels = input([
        { symbol: ['H1', 'M1', 'L1', 'L2', 'L3'] },
        { symbol: ['H2', 'M2', 'L1', 'L2', 'L3'] },
        { symbol: ['M1', 'H1', 'M2', 'L1', 'L2'] },
        { symbol: ['L3', 'M1', 'H1', 'M2', 'L1'] },
        { symbol: ['L2', 'L3', 'M1', 'H2', 'M2'] },
    ]);
    constructor(api // Assuming ApiService is available for symbol textures
    ) {
        this.api = api;
    }
    static ɵfac = function ApHistoryDetailReelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApHistoryDetailReelComponent)(i0.ɵɵdirectiveInject(i1.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApHistoryDetailReelComponent, selectors: [["ap-history-detail-reel"]], inputs: { reels: [1, "reels"] }, decls: 2, vars: 1, consts: [[1, "w-full", "grid", "grid-rows-5", "grid-flow-col", "gap-2"], [4, "ngFor", "ngForOf"], [1, "size-full", 3, "src"]], template: function ApHistoryDetailReelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, ApHistoryDetailReelComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.reels());
        } }, dependencies: [CommonModule, i2.NgForOf, ApHistoryImgComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"], data: { animation: [
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApHistoryDetailReelComponent, [{
        type: Component,
        args: [{ selector: 'ap-history-detail-reel', imports: [CommonModule, ApHistoryImgComponent], animations: [
                    trigger('fadeOut', [
                        transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
                    ]),
                    trigger('fadeIn', [
                        transition(':enter', [
                            style({ opacity: 0 }),
                            animate('300ms ease-out', style({ opacity: 1 })),
                        ]),
                    ]),
                ], template: "<div class=\"w-full grid grid-rows-5 grid-flow-col gap-2\">\n  <ng-container *ngFor=\"let reel of reels()\">\n    <ng-container *ngFor=\"let symbol of reel.symbol\">\n      <ap-history-img\n        class=\"size-full\"\n        [src]=\"api.getSymbolTexture(symbol) || 'assets/images/info/default.png'\" />\n    </ng-container>\n  </ng-container>\n</div>\n", styles: [":host {\n  display: block;\n}"] }]
    }], () => [{ type: i1.AppInterfaceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApHistoryDetailReelComponent, { className: "ApHistoryDetailReelComponent", filePath: "src/app/components/ap-history-detail-reel/ap-history-detail-reel.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=ap-history-detail-reel.component.js.map