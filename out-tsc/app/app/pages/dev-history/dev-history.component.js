import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApHistoryDetailReelComponent } from '../../components/ap-history-detail-reel/ap-history-detail-reel.component';
import { ApHistoryDetailWinComponent } from '../../components/ap-history-detail-win/ap-history-detail-win.component';
import { ApHistoryListComponent } from '../../components/ap-history-list/ap-history-list.component';
import { ApHistoryPopupShareComponent } from '../../components/ap-history-popup-share/ap-history-popup-share.component';
import { ApHistoryImgComponent } from '../../components/ap-history-img/ap-history-img.component';
import { ApHistoryPopupReplayComponent } from '../../components/ap-history-popup-replay/ap-history-popup-replay.component';
import { ApHistoryReplayTopBarComponent } from '../../components/ap-history-replay-top-bar/ap-history-replay-top-bar.component';
import { ApHistoryCalenderComponent } from '../../components/ap-history-calender/ap-history-calender.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.title;
function DevHistoryComponent_For_3_Template(rf, ctx) { if (rf & 1) {
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
export class DevHistoryComponent {
    cards = [
        {
            title: 'ap-history-calender',
            component: ApHistoryCalenderComponent,
        },
        {
            title: 'ap-history-detail-reel',
            component: ApHistoryDetailReelComponent,
        },
        {
            title: 'ap-history-detail-win',
            component: ApHistoryDetailWinComponent,
        },
        {
            title: 'ap-history-list',
            component: ApHistoryListComponent,
        },
        {
            title: 'ap-history-img',
            component: ApHistoryImgComponent,
        },
        {
            title: 'ap-history-popup-replay',
            component: ApHistoryPopupReplayComponent,
        },
        /*{
          title: 'ap-history-popup-replay-end',
          component: ApHistoryPopupReplayEndComponent,
        },*/
        {
            title: 'ap-history-popup-share',
            component: ApHistoryPopupShareComponent,
        },
        {
            title: 'ap-history-replay-top-bar',
            component: ApHistoryReplayTopBarComponent,
        },
    ];
    static ɵfac = function DevHistoryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevHistoryComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevHistoryComponent, selectors: [["dev-history"]], decls: 5, vars: 0, consts: [["align", "center"], [3, "ngComponentOutlet"]], template: function DevHistoryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "History \u958B\u767C\u6E2C\u8A66\u9801\u9762");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(2, DevHistoryComponent_For_3_Template, 4, 2, null, null, _forTrack0);
            i0.ɵɵelement(4, "ap-ui-toc-dev");
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.cards);
        } }, dependencies: [CommonModule, i1.NgComponentOutlet, ApUiCardDevComponent, ApUiTocDevComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevHistoryComponent, [{
        type: Component,
        args: [{ selector: 'dev-history', imports: [CommonModule, ApUiCardDevComponent, ApUiTocDevComponent], template: "<h1>History \u958B\u767C\u6E2C\u8A66\u9801\u9762</h1>\n@for (c of cards; track c.title) {\n<h2>{{ c.title }}</h2>\n<ap-ui-card-dev align=\"center\">\n  <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n  <ng-container [ngComponentOutlet]=\"c.component\"></ng-container>\n</ap-ui-card-dev>\n}\n<ap-ui-toc-dev></ap-ui-toc-dev>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevHistoryComponent, { className: "DevHistoryComponent", filePath: "src/app/pages/dev-history/dev-history.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=dev-history.component.js.map