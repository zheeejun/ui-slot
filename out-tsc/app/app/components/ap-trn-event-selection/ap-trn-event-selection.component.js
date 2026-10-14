import { Component, output, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApTrnListGameComponent } from '../ap-trn-list-game/ap-trn-list-game.component';
import { trnDefaultDataList } from '../../services/trn-ctrl/trn-ctrl.data';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function ApTrnEventSelectionComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-list-game", 9);
    i0.ɵɵlistener("click", function ApTrnEventSelectionComponent_For_9_Template_ap_trn_list_game_click_0_listener() { const trn_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onEventClick(trn_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const trn_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("hasParticipated", true)("trnData", trn_r2);
} }
export class ApTrnEventSelectionComponent {
    getDaysLabel = input('DAYS');
    getHoursLabel = input('HRS');
    getMinutesLabel = input('MINS');
    getSecondsLabel = input('SECS');
    getCountdownStartTitle = input('Start in');
    getCountdownEndTitle = input('End in');
    //* 賽事資料
    trnData = input(trnDefaultDataList[0]);
    getBonus = computed(() => { return this.trnData()?.raceData?.playersList.find((player) => player.highlighted)?.win || null; });
    trnList = input(trnDefaultDataList);
    selectedEvent = output();
    onClose = output();
    header = input('Event Selection');
    constructor() { }
    onEventClick(trn) {
        this.selectedEvent.emit(trn);
    }
    clickClose() {
        this.onClose.emit();
    }
    static ɵfac = function ApTrnEventSelectionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnEventSelectionComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnEventSelectionComponent, selectors: [["ap-trn-event-selection"]], inputs: { getDaysLabel: [1, "getDaysLabel"], getHoursLabel: [1, "getHoursLabel"], getMinutesLabel: [1, "getMinutesLabel"], getSecondsLabel: [1, "getSecondsLabel"], getCountdownStartTitle: [1, "getCountdownStartTitle"], getCountdownEndTitle: [1, "getCountdownEndTitle"], trnData: [1, "trnData"], trnList: [1, "trnList"], header: [1, "header"] }, outputs: { selectedEvent: "selectedEvent", onClose: "onClose" }, decls: 11, vars: 5, consts: [[1, "relative", "size-full", "flex", "items-center", "justify-center", "p-2"], [1, "absolute", "inset-0", "bg-black/60"], [1, "w-full", "sm:w-200", "border-[0.2rem]", "border-purple-300", "bg-zinc-900", "rounded-xl", "text-zinc-300", "duration-300", "select-none", "h-[78vh]", "flex", "flex-col"], [1, "relative", "w-full", "font-semibold", "h-16", "text-3xl", "md:text-4xl", "pt-3", "pb-2", "flex-shrink-0"], [1, "bg-zinc-800", "relative", "rounded-b-xl", "flex-1", "overflow-y-auto"], [1, "px-4", "py-4", "select-none", "flex", "flex-col", "text-left"], [1, "relative", "w-full", "flex", "flex-col", "gap-4"], [3, "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "hasParticipated", "trnData"], [1, "absolute", "right-3", "top-4", "hidden", 3, "click", "icon", "size", "severity", "accentColor"], [3, "click", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "hasParticipated", "trnData"]], template: function ApTrnEventSelectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "div", 6);
            i0.ɵɵrepeaterCreate(8, ApTrnEventSelectionComponent_For_9_Template, 1, 8, "ap-trn-list-game", 7, _forTrack0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "ap-button", 8);
            i0.ɵɵlistener("click", function ApTrnEventSelectionComponent_Template_ap_button_click_10_listener() { return ctx.clickClose(); });
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.header(), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.trnList());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", "x-mark")("size", "medium")("severity", "contrast")("accentColor", "purple");
        } }, dependencies: [CommonModule, ApTrnListGameComponent, ApButtonComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnEventSelectionComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-event-selection', imports: [CommonModule, ApTrnListGameComponent, ApButtonComponent], template: "<div class=\"relative size-full flex items-center justify-center p-2\">\n  <div class=\"absolute inset-0 bg-black/60\"></div>\n  <div\n    class=\"w-full sm:w-200 border-[0.2rem] border-purple-300 bg-zinc-900 rounded-xl text-zinc-300 duration-300 select-none h-[78vh] flex flex-col\"\n  >\n    <div\n      class=\"relative w-full font-semibold h-16 text-3xl md:text-4xl pt-3 pb-2 flex-shrink-0\"\n    >\n      {{ header() }}\n    </div>\n    <div class=\"bg-zinc-800 relative rounded-b-xl flex-1 overflow-y-auto\">\n      <div class=\"px-4 py-4 select-none flex flex-col text-left\">\n        <div class=\"relative w-full flex flex-col gap-4\">\n          @for (trn of trnList(); track trn.id) {\n            <ap-trn-list-game\n              [getCountdownStartTitle]=\"getCountdownStartTitle()\"\n              [getCountdownEndTitle]=\"getCountdownEndTitle()\"\n              [getDaysLabel]=\"getDaysLabel()\"\n              [getHoursLabel]=\"getHoursLabel()\"\n              [getMinutesLabel]=\"getMinutesLabel()\"\n              [getSecondsLabel]=\"getSecondsLabel()\"\n              [hasParticipated]=\"true\"\n              [trnData]=\"trn\"\n              (click)=\"onEventClick(trn)\"\n            />\n          }\n        </div>\n      </div>\n    </div>\n    <ap-button\n      class=\"absolute right-3 top-4 hidden\"\n      [icon]=\"'x-mark'\"\n      [size]=\"'medium'\"\n      [severity]=\"'contrast'\"\n      [accentColor]=\"'purple'\"\n      (click)=\"clickClose()\"\n    />\n  </div>\n</div>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnEventSelectionComponent, { className: "ApTrnEventSelectionComponent", filePath: "src/app/components/ap-trn-event-selection/ap-trn-event-selection.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=ap-trn-event-selection.component.js.map