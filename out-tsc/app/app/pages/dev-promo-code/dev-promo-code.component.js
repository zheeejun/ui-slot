import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApPromoCodeQrCodeComponent } from '../../components/ap-promo-code-code/ap-promo-code-code.component';
import { ApPopupComponent } from '../../components/ap-popup/ap-popup.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ({});
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function DevPromoCodeComponent_For_3_Conditional_2_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ap-ui-card-dev", 0);
    i0.ɵɵelementContainer(3, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const c_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(v_r1.subtitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngComponentOutlet", c_r2.component)("ngComponentOutletInputs", v_r1.inputs || i0.ɵɵpureFunction0(3, _c0));
} }
function DevPromoCodeComponent_For_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, DevPromoCodeComponent_For_3_Conditional_2_For_1_Template, 4, 4, null, null, _forTrack1);
} if (rf & 2) {
    const c_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵrepeater(c_r2.variants);
} }
function DevPromoCodeComponent_For_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ap-ui-card-dev", 0);
    i0.ɵɵelementContainer(1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", c_r2.component);
} }
function DevPromoCodeComponent_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(2, DevPromoCodeComponent_For_3_Conditional_2_Template, 2, 0)(3, DevPromoCodeComponent_For_3_Conditional_3_Template, 2, 1, "ap-ui-card-dev", 0);
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵconditional(c_r2.variants && c_r2.variants.length > 0 ? 2 : 3);
} }
export class DevPromoCodeComponent {
    cards = [
        {
            title: 'ap-promo-code-code',
            component: ApPromoCodeQrCodeComponent,
        },
        {
            title: 'ap-promo-code-popup',
            component: ApPopupComponent,
            variants: [
                {
                    subtitle: 'Insufficient Balance',
                    inputs: {
                        header: 'Message',
                        image: 'assets/images/eventcenter/img_insufficient.png',
                        description: 'Insufficient Balance',
                        button: 'confirm',
                        showDivider: true,
                        showDescription: true,
                    },
                },
            ],
        },
    ];
    static ɵfac = function DevPromoCodeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevPromoCodeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevPromoCodeComponent, selectors: [["dev-promo-code"]], decls: 5, vars: 0, consts: [["align", "center"], [3, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "ngComponentOutlet"]], template: function DevPromoCodeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "CashDrop \u958B\u767C\u6E2C\u8A66\u9801\u9762");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(2, DevPromoCodeComponent_For_3_Template, 4, 2, null, null, _forTrack0);
            i0.ɵɵelement(4, "ap-ui-toc-dev");
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.cards);
        } }, dependencies: [CommonModule, i1.NgComponentOutlet, ApUiCardDevComponent, ApUiTocDevComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevPromoCodeComponent, [{
        type: Component,
        args: [{ selector: 'dev-promo-code', imports: [CommonModule, ApUiCardDevComponent, ApUiTocDevComponent], template: "<h1>CashDrop \u958B\u767C\u6E2C\u8A66\u9801\u9762</h1>\n@for (c of cards; track c.title) {\n  <h2>{{ c.title }}</h2>\n  @if (c.variants && c.variants.length > 0) {\n    @for (v of c.variants; track v.subtitle) {\n      <h3>{{ v.subtitle }}</h3>\n      <ap-ui-card-dev align=\"center\">\n        <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n        <ng-container\n          [ngComponentOutlet]=\"c.component\"\n          [ngComponentOutletInputs]=\"v.inputs || {}\"\n        />\n      </ap-ui-card-dev>\n    }\n  } @else {\n    <ap-ui-card-dev align=\"center\">\n      <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n      <ng-container [ngComponentOutlet]=\"c.component\" />\n    </ap-ui-card-dev>\n  }\n}\n<ap-ui-toc-dev></ap-ui-toc-dev>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevPromoCodeComponent, { className: "DevPromoCodeComponent", filePath: "src/app/pages/dev-promo-code/dev-promo-code.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=dev-promo-code.component.js.map