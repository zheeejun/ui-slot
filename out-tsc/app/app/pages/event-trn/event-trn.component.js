import { Component, computed, input, output, signal, ViewChild, inject, effect } from '@angular/core';
import { EventTrnListComponent } from '../event-trn-list/event-trn-list.component';
import { EventTrnHistoryComponent } from '../event-trn-history/event-trn-history.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { EventTrnInfoComponent } from '../event-trn-info/event-trn-info.component';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { EventTrnRulesComponent } from "../event-trn-rules/event-trn-rules.component";
import { EventTrnRankingComponent } from "../event-trn-ranking/event-trn-ranking.component";
import { EventTrnPrizeComponent } from "../event-trn-prize/event-trn-prize.component";
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { EventTrnTutorialComponent } from "../event-trn-tutorial/event-trn-tutorial.component";
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import * as i0 from "@angular/core";
const _c0 = ["detailContainer"];
const _forTrack0 = ($index, $item) => $item.name;
function EventTrnComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-trn-list", 9);
    i0.ɵɵlistener("clicked", function EventTrnComponent_Conditional_9_Template_event_trn_list_clicked_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showDetailInfo($event)); });
    i0.ɵɵelementEnd();
} }
function EventTrnComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-trn-history");
} }
function EventTrnComponent_Conditional_11_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-trn-info", 18);
    i0.ɵɵlistener("openTutorial", function EventTrnComponent_Conditional_11_Conditional_3_Template_event_trn_info_openTutorial_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showTrnTutorial.set(true)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("currentTrn", ctx_r1.detailTrn());
} }
function EventTrnComponent_Conditional_11_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-trn-ranking", 12);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("currentTrn", ctx_r1.detailTrn());
} }
function EventTrnComponent_Conditional_11_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-trn-prize", 12);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("currentTrn", ctx_r1.detailTrn());
} }
function EventTrnComponent_Conditional_11_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-trn-rules", 12);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("currentTrn", ctx_r1.detailTrn());
} }
function EventTrnComponent_Conditional_11_For_11_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bg-yellow-400", ctx_r1.themeType() === "quick")("bg-purple-400", ctx_r1.themeType() === "event");
} }
function EventTrnComponent_Conditional_11_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵlistener("click", function EventTrnComponent_Conditional_11_For_11_Template_div_click_0_listener() { const tab_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.bottomTab.set(tab_r5.name); return i0.ɵɵresetView(ctx_r1.resetDetailScroll()); });
    i0.ɵɵelement(1, "ap-icon", 20);
    i0.ɵɵelementStart(2, "div", 21);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, EventTrnComponent_Conditional_11_For_11_Conditional_4_Template, 1, 4, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("text-yellow-400", ctx_r1.bottomTab() === tab_r5.name && ctx_r1.themeType() === "quick")("text-purple-400", ctx_r1.bottomTab() === tab_r5.name && ctx_r1.themeType() === "event")("text-zinc-400", ctx_r1.bottomTab() !== tab_r5.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", tab_r5.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", tab_r5.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.bottomTab() === tab_r5.name ? 4 : -1);
} }
function EventTrnComponent_Conditional_11_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-trn-tutorial", 24);
    i0.ɵɵlistener("close", function EventTrnComponent_Conditional_11_Conditional_12_Template_event_trn_tutorial_close_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showTrnTutorial.set(false)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("variant", ctx_r1.themeType());
} }
function EventTrnComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10, 0)(2, "div", 11);
    i0.ɵɵconditionalCreate(3, EventTrnComponent_Conditional_11_Conditional_3_Template, 1, 1, "event-trn-info", 12)(4, EventTrnComponent_Conditional_11_Conditional_4_Template, 1, 1, "event-trn-ranking", 12)(5, EventTrnComponent_Conditional_11_Conditional_5_Template, 1, 1, "event-trn-prize", 12)(6, EventTrnComponent_Conditional_11_Conditional_6_Template, 1, 1, "event-trn-rules", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 13)(8, "div", 14)(9, "div", 15);
    i0.ɵɵrepeaterCreate(10, EventTrnComponent_Conditional_11_For_11_Template, 5, 9, "div", 16, _forTrack0);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(12, EventTrnComponent_Conditional_11_Conditional_12_Template, 1, 1, "event-trn-tutorial", 17);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.bottomTab() === "info" ? 3 : ctx_r1.bottomTab() === "ranking" ? 4 : ctx_r1.bottomTab() === "prize" ? 5 : ctx_r1.bottomTab() === "rule" ? 6 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("border-color", ctx_r1.themeType() === "quick" ? "rgb(253 224 71 / 0.2)" : ctx_r1.themeType() === "event" ? "rgb(216 180 254 / 0.2)" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.bottomTabs());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.showTrnTutorial() ? 12 : -1);
} }
export class EventTrnComponent {
    //** 服務注入 */
    appI18n = inject(AppI18nService);
    user = inject(UserProfileService);
    trn = inject(TrnCtrlService);
    login = inject(LoginCtrlService);
    api = inject(AppInterfaceService);
    eventCenter = inject(EventCenterCtrlService);
    getBackLabel = this.appI18n.computed('BackToGame_Link', 'Back to Game');
    /** 要顯示的賽事ID */
    path = input('');
    /** Top Tab Event 跟 History 切換 */
    topTab = signal('event');
    /** Top Tab 列表 */
    eventTabLabel = this.appI18n.computed('Event_Tab', 'Event');
    historyTabLabel = this.appI18n.computed('History_Tab', 'History');
    topTabs = [
        { id: 'event', label: this.eventTabLabel() },
        { id: 'history', label: this.historyTabLabel() },
    ];
    /** Bottom Tab Info, Ranking, Prizes, Rules 切換 */
    bottomTab = signal('info');
    /** Bottom Tab 列表 */
    bottomTabs = computed(() => this.detailTrn()?.type === 'quick' ? this.quickBottomTabs : this.eventBottomTabs);
    /** 是否顯示詳細資訊 */
    showDetail = computed(() => this.detailTrn() !== null);
    /** 詳細資訊的賽事資料 */
    detailTrn = computed(() => {
        const trnId = this.path();
        if (!trnId)
            return null;
        return this.trn.trnList().find(t => t.id === trnId) || null;
    });
    /** 主題，決定要顯示quick還是event的相關資訊 */
    themeType = computed(() => {
        const type = this.detailTrn()?.type;
        if (type === 'quick')
            return 'quick';
        return 'event';
    });
    /** 是否顯示 TRN 教學 */
    showTrnTutorial = signal(false);
    /** 是否顯示 Event 教學 */
    showEventTutorial = signal(false);
    /** 是否顯示畫面 */
    onClose = output();
    /** 詳細資訊容器的引用 */
    detailContainer;
    infoTabLabel = this.appI18n.computed('Info_EventDetailTab', 'Info');
    prizeTabLabel = this.appI18n.computed('Prizes_EventDetailTab', 'Prize');
    ruleTabLabel = this.appI18n.computed('Rules_EventDetailTab', 'Rules');
    rankingTabLabel = this.appI18n.computed('Ranking_EventDetailTab', 'Ranking');
    quickBottomTabs = [
        { name: 'info', icon: 'setting', label: this.infoTabLabel() },
        { name: 'prize', icon: 'prizes', label: this.prizeTabLabel() },
        { name: 'rule', icon: 'view-columns', label: this.ruleTabLabel() },
    ];
    eventBottomTabs = [
        { name: 'info', icon: 'setting', label: this.infoTabLabel() },
        { name: 'ranking', icon: 'ranking', label: this.rankingTabLabel() },
        { name: 'prize', icon: 'prizes', label: this.prizeTabLabel() },
        { name: 'rule', icon: 'view-columns', label: this.ruleTabLabel() },
    ];
    constructor() {
        effect(() => {
            this.path();
            this.bottomTab.set('info');
        });
    }
    ngOnInit() {
        this.trn.updateTrnListIfNeeded();
    }
    resetDetailScroll() {
        if (this.detailContainer) {
            this.detailContainer.nativeElement.scrollTop = 0;
        }
    }
    showDetailInfo(trn) {
        this.eventCenter.open(`tournament/${trn?.id}`);
        this.resetDetailScroll();
    }
    static ɵfac = function EventTrnComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventTrnComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventTrnComponent, selectors: [["event-trn"]], viewQuery: function EventTrnComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.detailContainer = _t.first);
        } }, inputs: { path: [1, "path"] }, outputs: { onClose: "onClose" }, decls: 12, vars: 8, consts: [["detailContainer", ""], [1, "relative", "bg-zinc-900", "justify-center", "h-full"], [1, "relative", "w-full", "h-30", "md:h-24", "pt-6", "bg-zinc-900"], [3, "tabChange", "tabs", "selectedTab"], [1, "relative", "md:absolute", "md:top-8", "flex", "gap-2", "ml-3", "mt-2", "items-center", "cursor-pointer", 3, "click"], [3, "severity", "size", "icon"], [1, "relative", "text-lg", "font-semibold"], [1, "relative", "w-full", "h-[calc(100%-7.5rem)]", "md:h-[calc(100%-6rem)]"], [1, "relative", "size-full", "overflow-auto"], [3, "clicked"], [1, "absolute", "inset-0", "bg-zinc-900", "overflow-auto"], [1, "relative", "max-w-2xl", "min-h-full", "mx-auto"], [3, "currentTrn"], [1, "sticky", "bottom-0", "left-0", "right-0"], [1, "flex", "justify-center", "bg-zinc-900", "border-t-2"], [1, "flex", "justify-center", "items-center", "space-x-6", "sm:space-x-12", "max-w-xs", "sm:max-w-none"], [1, "flex", "flex-col", "items-center", "cursor-pointer", "relative", "px-1", "sm:px-2", "py-1", "transition-all", "duration-200", "hover:scale-105", 3, "text-yellow-400", "text-purple-400", "text-zinc-400"], [1, "fixed", "inset-0", 3, "variant"], [3, "openTutorial", "currentTrn"], [1, "flex", "flex-col", "items-center", "cursor-pointer", "relative", "px-1", "sm:px-2", "py-1", "transition-all", "duration-200", "hover:scale-105", 3, "click"], [1, "size-6", "sm:size-8", "mb-1", 3, "name"], [1, "font-semibold", "text-md", "sm:text-md"], [1, "h-[0.1rem]", "w-full", "absolute", "bottom-0", "left-0", "rounded-t", 3, "bg-yellow-400", "bg-purple-400"], [1, "h-[0.1rem]", "w-full", "absolute", "bottom-0", "left-0", "rounded-t"], [1, "fixed", "inset-0", 3, "close", "variant"]], template: function EventTrnComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "ap-ui-tab-group", 3);
            i0.ɵɵlistener("tabChange", function EventTrnComponent_Template_ap_ui_tab_group_tabChange_2_listener($event) { return ctx.topTab.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 4);
            i0.ɵɵlistener("click", function EventTrnComponent_Template_div_click_3_listener() { return ctx.onClose.emit(); });
            i0.ɵɵelement(4, "ap-button", 5);
            i0.ɵɵelementStart(5, "div", 6);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 7)(8, "div", 8);
            i0.ɵɵconditionalCreate(9, EventTrnComponent_Conditional_9_Template, 1, 0, "event-trn-list")(10, EventTrnComponent_Conditional_10_Template, 1, 0, "event-trn-history");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(11, EventTrnComponent_Conditional_11_Template, 13, 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("tabs", ctx.topTabs)("selectedTab", ctx.topTab());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("severity", "contrast")("size", "small")("icon", "chevron-left");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getBackLabel());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.topTab() === "event" ? 9 : ctx.topTab() === "history" ? 10 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showDetail() ? 11 : -1);
        } }, dependencies: [EventTrnListComponent, EventTrnHistoryComponent, EventTrnInfoComponent, ApUiTabGroupComponent, ApIconComponent, EventTrnRulesComponent, EventTrnRankingComponent, EventTrnPrizeComponent, ApButtonComponent, EventTrnTutorialComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventTrnComponent, [{
        type: Component,
        args: [{ selector: 'event-trn', imports: [EventTrnListComponent, EventTrnHistoryComponent, EventTrnInfoComponent, ApUiTabGroupComponent, ApIconComponent, EventTrnRulesComponent, EventTrnRankingComponent, EventTrnPrizeComponent, ApButtonComponent, EventTrnTutorialComponent], template: "<div class=\"relative bg-zinc-900 justify-center h-full\">\n  <!-- Tab Section -->\n  <div class=\"relative w-full h-30 md:h-24 pt-6 bg-zinc-900\">\n    <ap-ui-tab-group\n      [tabs]=\"topTabs\"\n      [selectedTab]=\"topTab()\"\n      (tabChange)=\"topTab.set($event)\"\n    />\n    <!--Back to Game-->\n    <div\n      class=\"relative md:absolute md:top-8 flex gap-2 ml-3 mt-2 items-center cursor-pointer\"\n      (click)=\"onClose.emit()\"\n    >\n      <ap-button\n        [severity]=\"'contrast'\"\n        [size]=\"'small'\"\n        [icon]=\"'chevron-left'\"\n      />\n\n      <div class=\"relative text-lg font-semibold\">{{ getBackLabel() }}</div>\n    </div>\n  </div>\n  <!-- Content and Back to Game Section -->\n  <div class=\"relative w-full h-[calc(100%-7.5rem)] md:h-[calc(100%-6rem)]\">\n    <!-- Content Section -->\n    <div class=\"relative size-full overflow-auto\">\n      @if (topTab() === \"event\") {\n        <event-trn-list (clicked)=\"showDetailInfo($event)\" />\n      } @else if (topTab() === \"history\") {\n        <event-trn-history />\n      }\n    </div>\n  </div>\n  <!-- Detail Overlay -->\n  @if (showDetail()) {\n    <div #detailContainer class=\"absolute inset-0 bg-zinc-900 overflow-auto\">\n      <div class=\"relative max-w-2xl min-h-full mx-auto\">\n        @if (bottomTab() === \"info\") {\n          <event-trn-info\n            [currentTrn]=\"detailTrn()\"\n            (openTutorial)=\"showTrnTutorial.set(true)\"\n          />\n        } @else if (bottomTab() === \"ranking\") {\n          <event-trn-ranking [currentTrn]=\"detailTrn()\" />\n        } @else if (bottomTab() === \"prize\") {\n          <event-trn-prize [currentTrn]=\"detailTrn()\" />\n        } @else if (bottomTab() === \"rule\") {\n          <event-trn-rules [currentTrn]=\"detailTrn()\" />\n        }\n      </div>\n      <!-- Bottom Tab Navigation -->\n      <div class=\"sticky bottom-0 left-0 right-0\">\n        <div\n          class=\"flex justify-center bg-zinc-900 border-t-2\"\n          [style.border-color]=\"\n            themeType() === 'quick'\n              ? 'rgb(253 224 71 / 0.2)'\n              : themeType() === 'event'\n                ? 'rgb(216 180 254 / 0.2)'\n                : null\n          \"\n        >\n          <div\n            class=\"flex justify-center items-center space-x-6 sm:space-x-12 max-w-xs sm:max-w-none\"\n          >\n            @for (tab of bottomTabs(); track tab.name) {\n              <div\n                class=\"flex flex-col items-center cursor-pointer relative px-1 sm:px-2 py-1 transition-all duration-200 hover:scale-105\"\n                [class.text-yellow-400]=\"\n                  bottomTab() === tab.name && themeType() === 'quick'\n                \"\n                [class.text-purple-400]=\"\n                  bottomTab() === tab.name && themeType() === 'event'\n                \"\n                [class.text-zinc-400]=\"bottomTab() !== tab.name\"\n                (click)=\"bottomTab.set(tab.name); resetDetailScroll()\"\n              >\n                <ap-icon\n                  [name]=\"tab.icon\"\n                  class=\"size-6 sm:size-8 mb-1\"\n                ></ap-icon>\n                <div class=\"font-semibold text-md sm:text-md\">\n                  {{ tab.label }}\n                </div>\n                @if (bottomTab() === tab.name) {\n                  <div\n                    class=\"h-[0.1rem] w-full absolute bottom-0 left-0 rounded-t\"\n                    [class.bg-yellow-400]=\"themeType() === 'quick'\"\n                    [class.bg-purple-400]=\"themeType() === 'event'\"\n                  ></div>\n                }\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n\n    @if (showTrnTutorial()) {\n      <event-trn-tutorial\n        [variant]=\"themeType()\"\n        class=\"fixed inset-0\"\n        (close)=\"showTrnTutorial.set(false)\"\n      />\n    }\n  }\n</div>\n", styles: [":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}"] }]
    }], () => [], { detailContainer: [{
            type: ViewChild,
            args: ['detailContainer', { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventTrnComponent, { className: "EventTrnComponent", filePath: "src/app/pages/event-trn/event-trn.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=event-trn.component.js.map