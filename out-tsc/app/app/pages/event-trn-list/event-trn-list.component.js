import { Component, output, inject, signal } from '@angular/core';
import { ApTrnListGameComponent } from '../../components/ap-trn-list-game/ap-trn-list-game.component';
import { CommonModule } from '@angular/common';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/trn-ctrl/trn-ctrl.service";
const _forTrack0 = ($index, $item) => $item.id;
function EventTrnListComponent_For_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-list-game", 8);
    i0.ɵɵlistener("click", function EventTrnListComponent_For_7_Template_ap_trn_list_game_click_0_listener() { const data_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clicked.emit(data_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("getQuickTimeLabel", ctx_r2.getQuickTimeLabel())("trnData", data_r2);
} }
function EventTrnListComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-list-game", 9);
    i0.ɵɵlistener("click", function EventTrnListComponent_For_9_Template_ap_trn_list_game_click_0_listener() { const data_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clicked.emit(data_r5)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getPrizePoolLabel", ctx_r2.getPrizePoolLabel())("getScoreLabel", ctx_r2.getScoreLabel())("getPointLabel", ctx_r2.getPointLabel())("getJoinButtonLabel", ctx_r2.getJoinButtonLabel())("getRejoinButtonLabel", ctx_r2.getRejoinButtonLabel())("getFinishedButtonLabel", ctx_r2.getFinishedButtonLabel())("hasParticipated", ctx_r2.hasJoinedEvent(data_r5))("trnData", data_r5);
} }
export class EventTrnListComponent {
    trn;
    appI18n = inject(AppI18nService);
    api = inject(AppInterfaceService);
    // Quick賽事的字串
    getQuickTimeLabel = this.appI18n.computed('RegularEvent_Tag', 'Regular Event');
    // Event賽事的字串
    getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
    getHoursLabel = this.appI18n.computed('HRS', 'HRS');
    getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
    getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
    getCountdownStartTitle = this.appI18n.computed('StartIn_Tip', 'Start in');
    getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in');
    getPointLabel = this.appI18n.computed('Pts', 'Pts');
    getScoreLabel = this.appI18n.computed('Your_Score', 'Your Score');
    getPrizePoolLabel = this.appI18n.computed('Prize_Pool', 'Prize Pool');
    getRejoinButtonLabel = this.appI18n.computed('Rejoin_Btn', 'Rejoin');
    getJoinButtonLabel = this.appI18n.computed('Join_Btn', 'Join');
    getFinishedButtonLabel = this.appI18n.computed('Finished_Tag', 'Finished');
    constructor(trn) {
        this.trn = trn;
    }
    bonusPoint = signal(500) || null;
    clicked = output();
    // Access events directly from imported data
    get evenData() {
        const ret = [];
        const event = this.trn.trnList().filter(data => data.type === 'event');
        // 先取出running的賽事
        const running = event.filter(data => data.status === 'running');
        ret.push(...running);
        // 再取出announced的賽事
        const announced = event.filter(data => data.status === 'announced');
        ret.push(...announced);
        // 最後取出其他狀態的賽事
        const other = event.filter(data => data.status !== 'running' && data.status !== 'announced');
        ret.push(...other);
        return ret;
    }
    // 拿取 quick 賽事資料
    get quickData() {
        const ret = this.trn.trnList()
            .filter(data => data.type === 'quick');
        return ret;
    }
    hasJoinedEvent(data) {
        return data.raceData?.rank !== null || !!data.raceData?.playersList?.some(player => player.highlighted);
    }
    static ɵfac = function EventTrnListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventTrnListComponent)(i0.ɵɵdirectiveInject(i1.TrnCtrlService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventTrnListComponent, selectors: [["event-trn-list"]], outputs: { clicked: "clicked" }, decls: 10, vars: 0, consts: [[1, "relative", "bg-zinc-900", "min-h-full", "pb-10"], [1, "flex", "flex-wrap", "justify-center"], [1, "max-w-3xl", "w-full"], [1, "max-w-3xl", "flex", "flex-col", "flex-wrap", "items-left", "animate-fade-down", "animate-duration-500"], [1, "w-full", "px-4", "animate-fade-down", "animate-duration-500"], [1, "grid", "grid-cols-1", "gap-8", "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "pt-2"], [1, "hover:scale-102", "duration-300", 3, "getQuickTimeLabel", "trnData"], [1, "hover:scale-102", "duration-300", 3, "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "getPrizePoolLabel", "getScoreLabel", "getPointLabel", "getJoinButtonLabel", "getRejoinButtonLabel", "getFinishedButtonLabel", "hasParticipated", "trnData"], [1, "hover:scale-102", "duration-300", 3, "click", "getQuickTimeLabel", "trnData"], [1, "hover:scale-102", "duration-300", 3, "click", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "getPrizePoolLabel", "getScoreLabel", "getPointLabel", "getJoinButtonLabel", "getRejoinButtonLabel", "getFinishedButtonLabel", "hasParticipated", "trnData"]], template: function EventTrnListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
            i0.ɵɵrepeaterCreate(6, EventTrnListComponent_For_7_Template, 1, 2, "ap-trn-list-game", 6, _forTrack0);
            i0.ɵɵrepeaterCreate(8, EventTrnListComponent_For_9_Template, 1, 14, "ap-trn-list-game", 7, _forTrack0);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.quickData);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.evenData);
        } }, dependencies: [CommonModule, ApTrnListGameComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventTrnListComponent, [{
        type: Component,
        args: [{ selector: 'event-trn-list', imports: [
                    CommonModule, ApTrnListGameComponent,
                ], template: "<div class=\"relative bg-zinc-900 min-h-full pb-10\">\n  <!-- Content Section -->\n  <div class=\"flex flex-wrap justify-center\">\n    <div class=\"max-w-3xl w-full\">\n      <!--Event Info-->\n      <div\n        class=\"max-w-3xl flex flex-col flex-wrap items-left animate-fade-down animate-duration-500\"\n      >\n        <div class=\"w-full px-4 animate-fade-down animate-duration-500\">\n          <div class=\"grid grid-cols-1 gap-8 max-w-7xl mx-auto px-4 sm:px-6 pt-2\">\n            <!-- Quick Races: Using data from event-data.data.ts -->\n            @for (data of quickData; track data.id) {\n              <ap-trn-list-game\n                class=\"hover:scale-102 duration-300\"\n                [getQuickTimeLabel]=\"getQuickTimeLabel()\"\n                [trnData]=\"data\"\n                (click)=\"clicked.emit(data)\"\n              />\n            }\n            <!-- Events: Using data from event-data.data.ts -->\n            @for (data of evenData; track data.id) {\n              <ap-trn-list-game\n                class=\"hover:scale-102 duration-300\"\n                [getDaysLabel]=\"getDaysLabel()\"\n                [getHoursLabel]=\"getHoursLabel()\"\n                [getMinutesLabel]=\"getMinutesLabel()\"\n                [getSecondsLabel]=\"getSecondsLabel()\"\n                [getCountdownStartTitle]=\"getCountdownStartTitle()\"\n                [getCountdownEndTitle]=\"getCountdownEndTitle()\"\n                [getPrizePoolLabel]=\"getPrizePoolLabel()\"\n                [getScoreLabel]=\"getScoreLabel()\"\n                [getPointLabel]=\"getPointLabel()\"\n                [getJoinButtonLabel]=\"getJoinButtonLabel()\"\n                [getRejoinButtonLabel]=\"getRejoinButtonLabel()\"\n                [getFinishedButtonLabel]=\"getFinishedButtonLabel()\"\n                [hasParticipated]=\"hasJoinedEvent(data)\"\n                [trnData]=\"data\"\n                (click)=\"clicked.emit(data)\"\n              />\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [":host {\n  display: block;\n}"] }]
    }], () => [{ type: i1.TrnCtrlService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventTrnListComponent, { className: "EventTrnListComponent", filePath: "src/app/pages/event-trn-list/event-trn-list.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=event-trn-list.component.js.map