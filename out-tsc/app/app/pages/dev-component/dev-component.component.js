import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApUiPaginationListComponent } from '../../components/ap-ui-pagination-list/ap-ui-pagination-list.component';
import { ApStatusModeBarComponent } from '../../components/ap-status-mode-bar/ap-status-mode-bar.component';
import { ApButtonAutoSpinTimesComponent } from '../../components/ap-button-auto-spin-times/ap-button-auto-spin-times.component';
import { ApButtonFreeSpinsComponent } from '../../components/ap-button-free-spins/ap-button-free-spins.component';
import { ApUiPlayModeComponent } from '../../components/ap-ui-play-mode/ap-ui-play-mode.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ accentColor: a0 });
function DevComponent_For_1_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵproperty("ngComponentOutlet", c_r1.component)("ngComponentOutletInputs", i0.ɵɵpureFunction1(3, _c0, c_r1.accentColor));
} }
export class DevComponent {
    cards = [
        {
            title: 'ap-button-auto-spin-times/auto-spin',
            component: ApButtonAutoSpinTimesComponent,
            accentColor: 'auto-spin',
        },
        {
            title: 'ap-button-auto-spin-times/double-chance',
            component: ApButtonAutoSpinTimesComponent,
            accentColor: 'double-chance-auto-spin',
        },
        {
            title: 'ap-button-free-spins',
            component: ApButtonFreeSpinsComponent,
        },
        {
            title: 'ap-ui-pagination-list',
            component: ApUiPaginationListComponent,
        },
        {
            title: 'ap-status-mode-bar',
            component: ApStatusModeBarComponent,
        },
        {
            title: 'ap-ui-play-mode',
            component: ApUiPlayModeComponent,
        },
    ];
    static ɵfac = function DevComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevComponent, selectors: [["dev-component"]], decls: 3, vars: 0, consts: [["align", "center"], [3, "ngComponentOutlet", "ngComponentOutletInputs"]], template: function DevComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, DevComponent_For_1_Template, 4, 5, null, null, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelement(2, "ap-ui-toc-dev");
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.cards);
        } }, dependencies: [CommonModule, i1.NgComponentOutlet, ApUiCardDevComponent, ApUiTocDevComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevComponent, [{
        type: Component,
        args: [{ selector: 'dev-component', imports: [CommonModule, ApUiCardDevComponent, ApUiTocDevComponent], template: "@for (c of cards; track $index) {\n  <h2>{{ c.title }}</h2>\n  <ap-ui-card-dev align=\"center\">\n    <ng-container\n      [ngComponentOutlet]=\"c.component\"\n      [ngComponentOutletInputs]=\"{ accentColor: c.accentColor }\"\n    ></ng-container>\n  </ap-ui-card-dev>\n}\n<ap-ui-toc-dev></ap-ui-toc-dev>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevComponent, { className: "DevComponent", filePath: "src/app/pages/dev-component/dev-component.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=dev-component.component.js.map