import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApBfCardBetControlComponent } from '../../components/ap-bf-card-bet-control/ap-bf-card-bet-control.component';
import { ApBfCardPlayDemoComponent } from '../../components/ap-bf-card-play-demo/ap-bf-card-play-demo.component';
import { ApBfPopupPlayDemoConfirmComponent } from '../../components/ap-bf-popup-play-demo-confirm/ap-bf-popup-play-demo-confirm.component';
import { ApBfPopupConfirmFeatureComponent } from '../../components/ap-bf-popup-confirm-feature/ap-bf-popup-confirm-feature.component';
import { ApBfPopupConfirmChanceComponent } from '../../components/ap-bf-popup-confirm-chance/ap-bf-popup-confirm-chance.component';
import { ApBfCardFeatureComponent } from '../../components/ap-bf-card-feature/ap-bf-card-feature.component';
import { ApBfCardChanceComponent } from '../../components/ap-bf-card-chance/ap-bf-card-chance.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.title;
function DevBuyFeatureComponent_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ap-ui-card-dev", 0);
    i0.ɵɵelementContainer(3, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngComponentOutlet", c_r1.component);
} }
export class DevBuyFeatureComponent {
    cards = [
        {
            title: 'ap-bf-card-play-demo',
            component: ApBfCardPlayDemoComponent,
        },
        {
            title: 'ap-bf-card-bet-control',
            component: ApBfCardBetControlComponent,
        },
        {
            title: 'ap-bf-card-feature',
            component: ApBfCardFeatureComponent,
        },
        {
            title: 'ap-bf-card-chance',
            component: ApBfCardChanceComponent,
        },
        {
            title: 'ap-bf-popup-play-demo-confirm',
            component: ApBfPopupPlayDemoConfirmComponent,
        },
        {
            title: 'ap-bf-popup-confirm-feature',
            component: ApBfPopupConfirmFeatureComponent,
        },
        {
            title: 'ap-bf-popup-confirm-chance',
            component: ApBfPopupConfirmChanceComponent,
        },
    ];
    static ɵfac = function DevBuyFeatureComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevBuyFeatureComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevBuyFeatureComponent, selectors: [["dev-buy-feature"]], decls: 5, vars: 0, consts: [["align", "center"], [3, "ngComponentOutlet"]], template: function DevBuyFeatureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Buy Feature \u958B\u767C\u6E2C\u8A66\u9801\u9762");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(2, DevBuyFeatureComponent_For_3_Template, 4, 2, null, null, _forTrack0);
            i0.ɵɵelement(4, "ap-ui-toc-dev");
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.cards);
        } }, dependencies: [CommonModule, i1.NgComponentOutlet, ApUiCardDevComponent, ApUiTocDevComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevBuyFeatureComponent, [{
        type: Component,
        args: [{ selector: 'dev-buy-feature', imports: [CommonModule, ApUiCardDevComponent, ApUiTocDevComponent], template: "<h1>Buy Feature \u958B\u767C\u6E2C\u8A66\u9801\u9762</h1>\n@for (c of cards; track c.title) {\n  <h2>{{ c.title }}</h2>\n  <ap-ui-card-dev align=\"center\">\n    <ng-container [ngComponentOutlet]=\"c.component\"></ng-container>\n  </ap-ui-card-dev>\n}\n<ap-ui-toc-dev></ap-ui-toc-dev>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevBuyFeatureComponent, { className: "DevBuyFeatureComponent", filePath: "src/app/pages/dev-buy-feature/dev-buy-feature.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=dev-buy-feature.component.js.map