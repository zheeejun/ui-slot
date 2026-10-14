import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApCampaignCardComponent } from '../../components/ap-campaign-card/ap-campaign-card.component';
import { ApCampaignListComponent } from '../../components/ap-campaign-list/ap-campaign-list.component';
import { ApCampaignTooltipComponent } from '../../components/ap-campaign-tooltip/ap-campaign-tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.title;
function DevCampaignComponent_For_3_Template(rf, ctx) { if (rf & 1) {
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
export class DevCampaignComponent {
    cards = [
        {
            title: 'ap-campaign-card',
            component: ApCampaignCardComponent,
        },
        { title: 'ap-campaign-list', component: ApCampaignListComponent },
        { title: 'ap-campaign-tooltip', component: ApCampaignTooltipComponent },
    ];
    static ɵfac = function DevCampaignComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevCampaignComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevCampaignComponent, selectors: [["dev-campaign"]], decls: 5, vars: 0, consts: [["align", "center"], [3, "ngComponentOutlet"]], template: function DevCampaignComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Campaign \u958B\u767C\u6E2C\u8A66\u9801\u9762");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(2, DevCampaignComponent_For_3_Template, 4, 2, null, null, _forTrack0);
            i0.ɵɵelement(4, "ap-ui-toc-dev");
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.cards);
        } }, dependencies: [CommonModule, i1.NgComponentOutlet, ApUiCardDevComponent, ApUiTocDevComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevCampaignComponent, [{
        type: Component,
        args: [{ selector: 'dev-campaign', imports: [CommonModule, ApUiCardDevComponent, ApUiTocDevComponent], template: "<h1>Campaign \u958B\u767C\u6E2C\u8A66\u9801\u9762</h1>\n@for (c of cards; track c.title) {\n<h2>{{ c.title }}</h2>\n<ap-ui-card-dev align=\"center\">\n  <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n  <ng-container [ngComponentOutlet]=\"c.component\"></ng-container>\n</ap-ui-card-dev>\n}\n<ap-ui-toc-dev></ap-ui-toc-dev>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevCampaignComponent, { className: "DevCampaignComponent", filePath: "src/app/pages/dev-campaign/dev-campaign.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=dev-campaign.component.js.map