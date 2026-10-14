import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApCashdropCardCountdownComponent } from '../../components/ap-cashdrop-card-countdown/ap-cashdrop-card-countdown.component';
import { ApCashDropListComponent } from '../../components/ap-cashdrop-list/ap-cashdrop-list.component';
import { ApCashdropCardComponentCountdown } from '../../components/ap-cashdrop-card-component-countdown/ap-cashdrop-card-component-countdown.component';
import { ApCashdropWinComponent } from '../../components/ap-cashdrop-win/ap-cashdrop-win.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.title;
function DevCashDropComponent_For_3_Template(rf, ctx) { if (rf & 1) {
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
export class DevCashDropComponent {
    cards = [
        {
            title: 'ap-cashdrop-card-countdown',
            component: ApCashdropCardCountdownComponent,
        },
        {
            title: 'ap-cashdrop-card-component-countdown',
            component: ApCashdropCardComponentCountdown,
        },
        {
            title: 'ap-cashdrop-list',
            component: ApCashDropListComponent,
        },
        {
            title: 'ap-cashdrop-win',
            component: ApCashdropWinComponent,
        },
    ];
    static ɵfac = function DevCashDropComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevCashDropComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevCashDropComponent, selectors: [["dev-cashdrop"]], decls: 5, vars: 0, consts: [["align", "center"], [3, "ngComponentOutlet"]], template: function DevCashDropComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "CashDrop \u958B\u767C\u6E2C\u8A66\u9801\u9762");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(2, DevCashDropComponent_For_3_Template, 4, 2, null, null, _forTrack0);
            i0.ɵɵelement(4, "ap-ui-toc-dev");
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.cards);
        } }, dependencies: [CommonModule, i1.NgComponentOutlet, ApUiCardDevComponent, ApUiTocDevComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevCashDropComponent, [{
        type: Component,
        args: [{ selector: 'dev-cashdrop', imports: [CommonModule, ApUiCardDevComponent, ApUiTocDevComponent], template: "<h1>CashDrop \u958B\u767C\u6E2C\u8A66\u9801\u9762</h1>\n@for (c of cards; track c.title) {\n<h2>{{ c.title }}</h2>\n<ap-ui-card-dev align=\"center\">\n  <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n  <ng-container [ngComponentOutlet]=\"c.component\"></ng-container>\n</ap-ui-card-dev>\n}\n<ap-ui-toc-dev></ap-ui-toc-dev>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevCashDropComponent, { className: "DevCashDropComponent", filePath: "src/app/pages/dev-cashdrop/dev-cashdrop.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=dev-cashdrop.component.js.map