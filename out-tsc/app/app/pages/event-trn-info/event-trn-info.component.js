import { Component, signal, output, input, computed, inject } from '@angular/core';
import { ApTrnListGameComponent } from '../../components/ap-trn-list-game/ap-trn-list-game.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { CommonModule } from '@angular/common';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApTrnInfoTableComponent } from '../../components/ap-trn-info-table/ap-trn-info-table.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
function EventTrnInfoComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "ap-trn-list-game", 1);
    i0.ɵɵelementStart(2, "div", 2)(3, "ap-button", 3);
    i0.ɵɵlistener("click", function EventTrnInfoComponent_Conditional_0_Template_ap_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openTutorial.emit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "ap-trn-info-table", 4)(5, "ap-trn-info-table", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("trnData", ctx_r1.currentTrn())("getQuickTimeLabel", ctx_r1.getQuickTimeLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("accentColor", "yellow")("label", ctx_r1.getHowToPlayBtnText());
    i0.ɵɵadvance();
    i0.ɵɵproperty("description", ctx_r1.firstDescription())("type", "betRange")("title", ctx_r1.betRangeTitle())("currencySymbol", ctx_r1.trn.currencySymbol())("betRanges", ctx_r1.betRanges());
    i0.ɵɵadvance();
    i0.ɵɵproperty("variant", "quick")("description", ctx_r1.secondDescription())("title", ctx_r1.matchRangeTitle())("condition1", ctx_r1.getCondition1())("condition2", ctx_r1.getCondition2())("condition3", ctx_r1.getCondition3())("condition4", ctx_r1.getCondition4())("currencySymbol", ctx_r1.trn.currencySymbol())("minEntryBalance", ctx_r1.minEntryBalance())("playersPerMatch", ctx_r1.playersPerMatch())("matchDuration", ctx_r1.formatDuration(ctx_r1.matchDuration()))("prizeBoost", ctx_r1.prizeBoost());
} }
function EventTrnInfoComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "ap-trn-list-game", 6);
    i0.ɵɵelementStart(2, "div", 2)(3, "ap-button", 3);
    i0.ɵɵlistener("click", function EventTrnInfoComponent_Conditional_1_Template_ap_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onOpenTutorial()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "ap-trn-info-table", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("trnData", ctx_r1.currentTrn())("getDaysLabel", ctx_r1.getDaysLabel())("getHoursLabel", ctx_r1.getHoursLabel())("getMinutesLabel", ctx_r1.getMinutesLabel())("getSecondsLabel", ctx_r1.getSecondsLabel())("getCountdownStartTitle", ctx_r1.getCountdownStartTitle())("getCountdownEndTitle", ctx_r1.getCountdownEndTitle())("hasParticipated", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("accentColor", "purple")("label", ctx_r1.getHowToPlayBtnText());
    i0.ɵɵadvance();
    i0.ɵɵproperty("variant", "event")("description", ctx_r1.secondDescription())("title", ctx_r1.matchRangeTitle())("condition1", ctx_r1.getCondition1())("condition2", ctx_r1.getCondition2())("condition3", ctx_r1.getCondition3())("condition4", ctx_r1.getCondition4())("currencySymbol", ctx_r1.trn.currencySymbol())("minEntryBalance", ctx_r1.minEntryBalance())("playersPerMatch", ctx_r1.playersPerMatch())("matchDuration", ctx_r1.formatDuration(ctx_r1.matchDuration()))("prizeBoost", ctx_r1.prizeBoost());
} }
export class EventTrnInfoComponent {
    appI18n = inject(AppI18nService);
    getQuickTimeLabel = this.appI18n.computed('RegularEvent_Tag', 'Regular Event');
    getHowToPlayBtnText = this.appI18n.computed('HowToPlay_Btn', 'How to Play');
    betRangeTitle = this.appI18n.computed('Bet_Ranges_Title', 'Bet Ranges by Level');
    firstDescription = this.appI18n.computed('Content1_TournamentInfo', 'ㆍQuick matches are grouped by bet size ㆍHigher bets, bigger prize pools. ㆍOnly those who place bets will be included in the rankings and receive prizes.');
    secondDescription = this.appI18n.computed('Content2_TournamentInfo', 'ㆍQuick Match settings are shown in the table below.');
    matchRangeTitle = this.appI18n.computed('Match_Configuration_Title', 'Match Configuration');
    getCondition1 = this.appI18n.computed('Condition1', 'Players per Match');
    getCondition2 = this.appI18n.computed('Condition2', 'Prize Ranking');
    getCondition3 = this.appI18n.computed('Condition3', 'Match Duration');
    getCondition4 = this.appI18n.computed('Condition4', 'Prize Boost');
    getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
    getHoursLabel = this.appI18n.computed('HRS', 'HRS');
    getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
    getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
    getCountdownStartTitle = this.appI18n.computed('StartIn_Tip', 'Start in');
    getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in');
    trn = inject(TrnCtrlService);
    api = inject(AppInterfaceService);
    /** 目前要顯示的Trn */
    currentTrn = input(null);
    openTutorial = output();
    // Event List
    eventDescription1 = signal('Long term event settings are shown in the table below.');
    // Default match configuration
    minEntryBalance = computed(() => this.currentTrn()?.tiers[0]?.minStakeAmount || null);
    playersPerMatch = computed(() => this.currentTrn()?.maxPlayers || null);
    /** 給Quick秒數 */
    matchDuration = computed(() => this.currentTrn()?.matchDuration || null);
    /** 給Event秒數, 從開始時間到結束時間 */
    eventDuration = computed(() => {
        const trn = this.currentTrn();
        if (trn?.type === 'event' && trn.startTime && trn.endTime) {
            return Math.floor((trn.endTime - trn.startTime) / 1000);
        }
        return null;
    });
    /** ex: 1.2 */
    prizeBoost = computed(() => this.currentTrn()?.betMultiplier || 1);
    betRanges = signal([]);
    //* 積分
    bonusPoint = signal(500) || null;
    ngOnInit() {
        const ranges = [];
        this.currentTrn()?.tiers.forEach(tier => {
            ranges.push({
                level: tier.name,
                start: tier.minStakeAmount || 0,
                end: tier.maxStakeAmount
            });
        });
        this.betRanges.set(ranges);
    }
    onOpenTutorial() {
        this.openTutorial.emit();
    }
    /** 將秒數轉成 [d Days] h hours m mins [s secs], 有days就不顯示secs */
    formatDuration(seconds) {
        if (seconds === null) {
            return '--';
        }
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor((seconds % (3600 * 24)) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        const dDisplay = d > 0 ? d + (d === 1 ? ' Day ' : ' Days ') : '';
        const hDisplay = h > 0 ? h + (h === 1 ? ' Hour ' : ' Hours ') : '';
        const mDisplay = m > 0 ? m + (m === 1 ? ' Min ' : ' Mins ') : '';
        const sDisplay = s > 0 ? s + (s === 1 ? ' Sec' : ' Secs') : '';
        return dDisplay + hDisplay + mDisplay + (d > 0 ? '' : sDisplay) || '--';
    }
    static ɵfac = function EventTrnInfoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventTrnInfoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventTrnInfoComponent, selectors: [["event-trn-info"]], inputs: { currentTrn: [1, "currentTrn"] }, outputs: { openTutorial: "openTutorial" }, decls: 2, vars: 2, consts: [[1, "px-4", "sm:px-6", "pt-4", "sm:pt-6"], [3, "trnData", "getQuickTimeLabel"], [1, "flex", "flex-col", "items-center", "p-8", "gap-8"], [3, "click", "accentColor", "label"], [1, "whitespace-pre-line", 3, "description", "type", "title", "currencySymbol", "betRanges"], [3, "variant", "description", "title", "condition1", "condition2", "condition3", "condition4", "currencySymbol", "minEntryBalance", "playersPerMatch", "matchDuration", "prizeBoost"], [3, "trnData", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "hasParticipated"]], template: function EventTrnInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, EventTrnInfoComponent_Conditional_0_Template, 6, 21, "div", 0);
            i0.ɵɵconditionalCreate(1, EventTrnInfoComponent_Conditional_1_Template, 5, 22, "div", 0);
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            i0.ɵɵconditional(((tmp_0_0 = ctx.currentTrn()) == null ? null : tmp_0_0.type) === "quick" ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_1_0 = ctx.currentTrn()) == null ? null : tmp_1_0.type) === "event" ? 1 : -1);
        } }, dependencies: [ApTrnListGameComponent, ApButtonComponent, CommonModule, ApTrnInfoTableComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventTrnInfoComponent, [{
        type: Component,
        args: [{ selector: 'event-trn-info', imports: [ApTrnListGameComponent, ApButtonComponent, CommonModule, ApTrnInfoTableComponent], template: "<!--Quick-->\n@if (currentTrn()?.type === \"quick\") {\n  <div class=\"px-4 sm:px-6 pt-4 sm:pt-6\">\n    <ap-trn-list-game\n      [trnData]=\"currentTrn()\"\n      [getQuickTimeLabel]=\"getQuickTimeLabel()\"\n    />\n    <div class=\"flex flex-col items-center p-8 gap-8\">\n      <ap-button\n        [accentColor]=\"'yellow'\"\n        [label]=\"getHowToPlayBtnText()\"\n        (click)=\"openTutorial.emit()\"\n      />\n      <ap-trn-info-table\n        [description]=\"firstDescription()\"\n        [type]=\"'betRange'\"\n        [title]=\"betRangeTitle()\"\n        [currencySymbol]=\"trn.currencySymbol()\"\n        [betRanges]=\"betRanges()\"\n        class=\"whitespace-pre-line\"\n      />\n\n      <ap-trn-info-table\n        [variant]=\"'quick'\"\n        [description]=\"secondDescription()\"\n        [title]=\"matchRangeTitle()\"\n        [condition1]=\"getCondition1()\"\n        [condition2]=\"getCondition2()\"\n        [condition3]=\"getCondition3()\"\n        [condition4]=\"getCondition4()\"\n        [currencySymbol]=\"trn.currencySymbol()\"\n        [minEntryBalance]=\"minEntryBalance()\"\n        [playersPerMatch]=\"playersPerMatch()\"\n        [matchDuration]=\"formatDuration(matchDuration())\"\n        [prizeBoost]=\"prizeBoost()\"\n      />\n    </div>\n  </div>\n}\n\n<!--Event-->\n@if (currentTrn()?.type === \"event\") {\n  <!-- \u80CC\u666F\u8868\u683C -->\n  <!--div class=\"relative w-full bg-zinc-800 flex flex-col min-h-screen rounded-t-2xl shadow-xl mt-8 select-none\"-->\n  <div class=\"px-4 sm:px-6 pt-4 sm:pt-6\">\n    <ap-trn-list-game\n      [trnData]=\"currentTrn()\"\n      [getDaysLabel]=\"getDaysLabel()\"\n      [getHoursLabel]=\"getHoursLabel()\"\n      [getMinutesLabel]=\"getMinutesLabel()\"\n      [getSecondsLabel]=\"getSecondsLabel()\"\n      [getCountdownStartTitle]=\"getCountdownStartTitle()\"\n      [getCountdownEndTitle]=\"getCountdownEndTitle()\"\n      [hasParticipated]=\"true\"\n    />\n    <div class=\"flex flex-col items-center p-8 gap-8\">\n      <ap-button\n        [accentColor]=\"'purple'\"\n        [label]=\"getHowToPlayBtnText()\"\n        (click)=\"onOpenTutorial()\"\n      />\n      <ap-trn-info-table\n        [variant]=\"'event'\"\n        [description]=\"secondDescription()\"\n        [title]=\"matchRangeTitle()\"\n        [condition1]=\"getCondition1()\"\n        [condition2]=\"getCondition2()\"\n        [condition3]=\"getCondition3()\"\n        [condition4]=\"getCondition4()\"\n        [currencySymbol]=\"trn.currencySymbol()\"\n        [minEntryBalance]=\"minEntryBalance()\"\n        [playersPerMatch]=\"playersPerMatch()\"\n        [matchDuration]=\"formatDuration(matchDuration())\"\n        [prizeBoost]=\"prizeBoost()\"\n      />\n    </div>\n  </div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventTrnInfoComponent, { className: "EventTrnInfoComponent", filePath: "src/app/pages/event-trn-info/event-trn-info.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=event-trn-info.component.js.map