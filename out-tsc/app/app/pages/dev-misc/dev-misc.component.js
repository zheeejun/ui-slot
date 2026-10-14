import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApTagListComponent } from '../../../ap-components-lib/ap-tag-list/ap-tag-list.component';
import { ApBadgeListComponent } from '../../../ap-components-lib/ap-badge-list/ap-badge-list.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ({});
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function DevMiscComponent_For_2_Conditional_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
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
function DevMiscComponent_For_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, DevMiscComponent_For_2_Conditional_0_For_1_Template, 4, 4, null, null, _forTrack1);
} if (rf & 2) {
    const c_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵrepeater(c_r2.variants);
} }
function DevMiscComponent_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ap-ui-card-dev", 0);
    i0.ɵɵelementContainer(1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", c_r2.component);
} }
function DevMiscComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, DevMiscComponent_For_2_Conditional_0_Template, 2, 0)(1, DevMiscComponent_For_2_Conditional_1_Template, 2, 1, "ap-ui-card-dev", 0);
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵconditional(c_r2.variants && c_r2.variants.length > 0 ? 0 : 1);
} }
export class DevMiscComponent {
    cards = [
        {
            title: 'ap-tag-list',
            component: ApTagListComponent,
        },
        {
            title: 'ap-badge-list',
            component: ApBadgeListComponent,
        },
    ];
    static ɵfac = function DevMiscComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevMiscComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevMiscComponent, selectors: [["dev-misc"]], decls: 4, vars: 0, consts: [["align", "center"], [3, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "ngComponentOutlet"]], template: function DevMiscComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵrepeaterCreate(1, DevMiscComponent_For_2_Template, 2, 1, null, null, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "ap-ui-toc-dev");
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.cards);
        } }, dependencies: [CommonModule, i1.NgComponentOutlet, ApUiCardDevComponent,
            ApUiTocDevComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevMiscComponent, [{
        type: Component,
        args: [{ selector: 'dev-misc', imports: [
                    CommonModule,
                    ApUiCardDevComponent,
                    ApUiTocDevComponent,
                ], template: "<div>\n  @for (c of cards; track c.title) { @if (c.variants && c.variants.length > 0) {\n  @for (v of c.variants; track v.subtitle) {\n  <h2>{{ v.subtitle }}</h2>\n  <ap-ui-card-dev align=\"center\">\n    <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n    <ng-container\n      [ngComponentOutlet]=\"c.component\"\n      [ngComponentOutletInputs]=\"v.inputs || {}\"\n    ></ng-container>\n  </ap-ui-card-dev>\n\n  } } @else {\n  <ap-ui-card-dev align=\"center\">\n    <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n    <ng-container [ngComponentOutlet]=\"c.component\"></ng-container>\n  </ap-ui-card-dev>\n  } }\n</div>\n<ap-ui-toc-dev></ap-ui-toc-dev>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevMiscComponent, { className: "DevMiscComponent", filePath: "src/app/pages/dev-misc/dev-misc.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=dev-misc.component.js.map