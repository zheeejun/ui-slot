import { Component, signal } from '@angular/core';
import { ApTrnCardBonusComponent } from '../../components/ap-trn-card-bonus/ap-trn-card-bonus.component';
import { ApTrnCardMatchComponent } from '../../components/ap-trn-card-match/ap-trn-card-match.component';
import { ApTrnCardTitleComponent } from '../../components/ap-trn-card-title/ap-trn-card-title.component';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApTrnFloatCountdownComponent } from '../../components/ap-trn-float-countdown/ap-trn-float-countdown.component';
import { ApTrnGameMatchFinished } from '../../components/ap-trn-game-match-finished/ap-trn-game-match-finished.component';
import { ApTrnGameResultComponent } from '../../components/ap-trn-game-result/ap-trn-game-result.component';
import { TrnCreatedNotificationComponent } from '../trn-created-notification/trn-created-notification.component';
import { ApTrnGameStartingComponent } from '../../components/ap-trn-game-starting/ap-trn-game-starting.component';
import { TrnGameConfirmComponent } from '../trn-game-confirm/trn-game-confirm.component';
import { ApTrnGameHintComponent } from '../../components/ap-trn-game-hint/ap-trn-game-hint.component';
import { ApTrnFloatButtonComponent } from '../../components/ap-trn-float-button/ap-trn-float-button.component';
import { ApTrnListGameComponent } from '../../components/ap-trn-list-game/ap-trn-list-game.component';
import { ApTrnStatusBarComponent } from '../../components/ap-trn-status-bar/ap-trn-status-bar.component';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApTrnEventSelectionComponent } from '../../components/ap-trn-event-selection/ap-trn-event-selection.component';
import { ApTrnListRowComponent } from '../../components/ap-trn-list-row/ap-trn-list-row.component';
import { EventTrnTutorialComponent } from '../event-trn-tutorial/event-trn-tutorial.component';
import { EventTrnInfoComponent } from '../event-trn-info/event-trn-info.component';
import { EventTrnRankingComponent } from '../event-trn-ranking/event-trn-ranking.component';
import { EventTrnPrizeComponent } from '../event-trn-prize/event-trn-prize.component';
import { EventTrnRulesComponent } from '../event-trn-rules/event-trn-rules.component';
import { TrnGameEventLeaveConfirmComponent } from '../trn-game-event-leave-confirm/trn-game-event-leave-confirm.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ variant: a0 });
const _forTrack0 = ($index, $item) => $item.title;
function DevTrnComponent_For_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtext(1, " Toggle Event ");
    i0.ɵɵelementStart(2, "ap-toggle-switch", 3);
    i0.ɵɵlistener("checkedChange", function DevTrnComponent_For_3_Conditional_2_Template_ap_toggle_switch_checkedChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const c_r2 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(c_r2.variant.set($event ? "event" : "quick")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", false);
} }
function DevTrnComponent_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(2, DevTrnComponent_For_3_Conditional_2_Template, 3, 1, "div", 0);
    i0.ɵɵelementStart(3, "ap-ui-card-dev", 1);
    i0.ɵɵelementContainer(4, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵconditional(c_r2.variant ? 2 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngComponentOutlet", c_r2.component)("ngComponentOutletInputs", i0.ɵɵpureFunction1(4, _c0, c_r2.variant ? c_r2.variant() : undefined));
} }
export class DevTrnComponent {
    cards = [
        {
            title: 'ap-trn-card-bonus',
            component: ApTrnCardBonusComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-card-match',
            component: ApTrnCardMatchComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-card-title',
            component: ApTrnCardTitleComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-float-button',
            component: ApTrnFloatButtonComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-float-countdown',
            component: ApTrnFloatCountdownComponent,
            variant: signal('quick'),
        },
        {
            title: 'trn-game-confirm',
            component: TrnGameConfirmComponent,
            variant: signal('quick'),
        },
        {
            title: 'trn-game-event-leave-confirm',
            component: TrnGameEventLeaveConfirmComponent,
            variant: signal('event'),
        },
        {
            title: 'ap-trn-game-hint',
            component: ApTrnGameHintComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-game-match-finished',
            component: ApTrnGameMatchFinished,
            variant: signal('quick'),
        },
        {
            title: 'trn-created-notification',
            component: TrnCreatedNotificationComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-game-result',
            component: ApTrnGameResultComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-game-starting',
            component: ApTrnGameStartingComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-list-game',
            component: ApTrnListGameComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-status-bar',
            component: ApTrnStatusBarComponent,
            variant: signal('quick'),
        },
        {
            title: 'ap-trn-event-selection',
            component: ApTrnEventSelectionComponent,
            variant: signal('event'),
        },
        {
            title: 'ap-trn-list-row',
            component: ApTrnListRowComponent,
            variant: signal('event'),
        },
        {
            title: 'ap-trn-tutorial',
            component: EventTrnTutorialComponent,
            variant: signal('event'),
        },
        {
            title: 'event-trn-info',
            component: EventTrnInfoComponent,
            variant: signal('event'),
        },
        {
            title: 'event-trn-ranking',
            component: EventTrnRankingComponent,
            variant: signal('event'),
        },
        {
            title: 'event-trn-prizes',
            component: EventTrnPrizeComponent,
            variant: signal('event'),
        },
        {
            title: 'event-trn-rules',
            component: EventTrnRulesComponent,
            variant: signal('event'),
        },
    ];
    static ɵfac = function DevTrnComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevTrnComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevTrnComponent, selectors: [["dev-trn"]], decls: 5, vars: 0, consts: [[1, "flex", "gap-2", "items-center"], ["align", "center"], [3, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "checkedChange", "checked"]], template: function DevTrnComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "TRN \u958B\u767C\u6E2C\u8A66\u9801\u9762");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(2, DevTrnComponent_For_3_Template, 5, 6, null, null, _forTrack0);
            i0.ɵɵelement(4, "ap-ui-toc-dev");
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.cards);
        } }, dependencies: [CommonModule, i1.NgComponentOutlet, ApUiCardDevComponent,
            ApToggleSwitchComponent,
            ApUiTocDevComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevTrnComponent, [{
        type: Component,
        args: [{ selector: 'dev-trn', imports: [
                    CommonModule,
                    ApUiCardDevComponent,
                    ApToggleSwitchComponent,
                    ApUiTocDevComponent,
                ], template: "<h1>TRN \u958B\u767C\u6E2C\u8A66\u9801\u9762</h1>\n@for (c of cards; track c.title) {\n<h2>{{ c.title }}</h2>\n@if (c.variant) {\n<div class=\"flex gap-2 items-center\">\n  Toggle Event\n  <ap-toggle-switch\n    [checked]=\"false\"\n    (checkedChange)=\"c.variant.set($event ? 'event' : 'quick')\"\n  ></ap-toggle-switch>\n</div>\n}\n<ap-ui-card-dev align=\"center\">\n  <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n  <ng-container\n    [ngComponentOutlet]=\"c.component\"\n    [ngComponentOutletInputs]=\"{\n      variant: c.variant ? c.variant() : undefined\n    }\"\n  />\n</ap-ui-card-dev>\n}\n<ap-ui-toc-dev></ap-ui-toc-dev>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevTrnComponent, { className: "DevTrnComponent", filePath: "src/app/pages/dev-trn/dev-trn.component.ts", lineNumber: 44 }); })();
//# sourceMappingURL=dev-trn.component.js.map