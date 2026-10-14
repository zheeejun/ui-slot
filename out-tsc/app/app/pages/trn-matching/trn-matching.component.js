import { Component, signal, inject, computed } from '@angular/core';
import { ApTrnTabComponent } from "../../components/ap-trn-tab/ap-trn-tab.component";
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { ApTrnCardMatchComponent } from "../../components/ap-trn-card-match/ap-trn-card-match.component";
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { interval, Subject, takeUntil } from 'rxjs';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/trn-ctrl/trn-ctrl.service";
import * as i2 from "../../services/app-interface/app-interface.service";
function TrnMatchingComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.getMatchingButtonText());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("(", ctx_r0.matchingTime(), ")");
} }
function TrnMatchingComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1, "CANCELING");
    i0.ɵɵelementEnd();
} }
export class TrnMatchingComponent {
    trn;
    api;
    appI18n = inject(AppI18nService);
    getQuickTabText = this.appI18n.computed('QuickRace_Tab', 'QUICK');
    getEventDetailsButtonText = this.appI18n.computed('GameResult_DetailLink', 'Event details');
    getMatchingButtonText = this.appI18n.computed('Matching_Btn', 'Matching...');
    matchingTime = signal(0);
    startTime = signal(null);
    roomStatus = signal('matching');
    destroy$ = new Subject();
    isButtonDisabled = computed(() => this.roomStatus() === 'canceling');
    constructor(trn, api) {
        this.trn = trn;
        this.api = api;
    }
    ngOnInit() {
        // 監聽玩家加入房間事件
        this.trn.roomCancelling$
            .pipe(takeUntil(this.destroy$))
            .subscribe(this.onRoomCancelling.bind(this));
        this.startTime.set(this.trn.matchingStartTime() || null);
        // 每秒更新 matchingTime
        interval(1000)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            const start = this.startTime();
            if (start === null)
                return;
            this.matchingTime.set(Math.floor((Date.now() - start) / 1000));
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClickCancel() {
        this.trn.sendCancelJoinQuick();
    }
    onClickDetail() {
    }
    onRoomCancelling() {
        this.roomStatus.set('canceling');
    }
    static ɵfac = function TrnMatchingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnMatchingComponent)(i0.ɵɵdirectiveInject(i1.TrnCtrlService), i0.ɵɵdirectiveInject(i2.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrnMatchingComponent, selectors: [["trn-matching"]], decls: 13, vars: 10, consts: [["selected", "quick", 3, "getQuickTabText", "showTabEvent"], ["name", "trophy", 1, "size-14", "mt-2", "text-yellow-300"], [1, "flex", "items-center", "text-zinc-300", "font-semibold", "tracking-wide", "-mb-2"], [1, "border-b", "border-zinc-300", "flex", "items-center", "gap-1", "cursor-pointer", 3, "click"], ["name", "exclamation-circle default", 1, "size-5"], ["variant", "quick", 1, "mt-4", 3, "currentCount", "totalCount"], [1, "flex", "w-full", "pl-10", "text-xs", "text-zinc-300"], [1, "animate-pulse"], [1, "in-match"], ["label", "Cancel", "accentColor", "zinc", 1, "w-[85%]", "mt-2", "mb-2", 3, "clicked", "size", "severity", "disabled"], [1, ""]], template: function TrnMatchingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ap-trn-tab", 0);
            i0.ɵɵelement(1, "ap-icon", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵlistener("click", function TrnMatchingComponent_Template_div_click_3_listener() { return ctx.onClickDetail(); });
            i0.ɵɵelement(4, "ap-icon", 4);
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(7, "ap-trn-card-match", 5);
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵconditionalCreate(9, TrnMatchingComponent_Conditional_9_Template, 4, 2);
            i0.ɵɵconditionalCreate(10, TrnMatchingComponent_Conditional_10_Template, 2, 0, "span", 7);
            i0.ɵɵelement(11, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "ap-button", 9);
            i0.ɵɵlistener("clicked", function TrnMatchingComponent_Template_ap_button_clicked_12_listener() { return ctx.onClickCancel(); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵproperty("getQuickTabText", ctx.getQuickTabText())("showTabEvent", false);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.getEventDetailsButtonText());
            i0.ɵɵadvance();
            i0.ɵɵproperty("currentCount", ctx.trn.roomCurrentPlayers())("totalCount", ((tmp_4_0 = ctx.trn.trnQuick()) == null ? null : tmp_4_0.maxPlayers) || 30);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.roomStatus() === "matching" ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.roomStatus() === "canceling" ? 10 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("size", "small")("severity", "primary")("disabled", ctx.isButtonDisabled());
        } }, dependencies: [ApTrnTabComponent, ApIconComponent, ApTrnCardMatchComponent, ApButtonComponent], styles: [".in-match[_ngcontent-%COMP%]::after {\n  content: \".\";\n  animation: _ngcontent-%COMP%_dots 1.5s steps(3, end) infinite;\n}\n\n@keyframes _ngcontent-%COMP%_dots {\n  0%   { content: \".\"; }\n  33%  { content: \"..\"; }\n  66%  { content: \"...\"; }\n  100% { content: \".\"; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnMatchingComponent, [{
        type: Component,
        args: [{ selector: 'trn-matching', imports: [ApTrnTabComponent, ApIconComponent, ApTrnCardMatchComponent, ApButtonComponent], template: "<ap-trn-tab selected=\"quick\" [getQuickTabText]=\"getQuickTabText()\" [showTabEvent]=\"false\">\n <ap-icon name=\"trophy\" class=\"size-14 mt-2 text-yellow-300\" />\n\n  <!-- Details-->\n  <div\n    class=\"flex items-center text-zinc-300 font-semibold tracking-wide -mb-2\"\n  >\n    <div\n      class=\"border-b border-zinc-300 flex items-center gap-1 cursor-pointer\"\n      (click)=\"onClickDetail()\"\n    >\n      <ap-icon name=\"exclamation-circle default\" class=\"size-5\" />\n      <span>{{ getEventDetailsButtonText() }}</span>\n    </div>\n  </div>\n\n  <!-- Matching -->\n  <ap-trn-card-match\n    class=\"mt-4\"\n    variant=\"quick\"\n    [currentCount]=\"trn.roomCurrentPlayers()\"\n    [totalCount]=\"trn.trnQuick()?.maxPlayers || 30\"\n  />\n\n  <div class=\"flex w-full pl-10 text-xs text-zinc-300\">\n    @if (roomStatus() === \"matching\") {\n      <span class=\"\">{{ getMatchingButtonText() }}</span >\n      <span>({{ matchingTime() }})</span >\n    }\n    @if (roomStatus() === \"canceling\") {\n      <span class=\"animate-pulse\">CANCELING</span>\n    }\n    <span class=\"in-match\"></span>\n  </div>\n\n  <!-- Match\u6309\u9215 -->\n  <ap-button\n    class=\"w-[85%] mt-2 mb-2\"\n    [size]=\"'small'\"\n    [severity]=\"'primary'\"\n    [disabled]=\"isButtonDisabled()\"\n    label=\"Cancel\"\n    accentColor=\"zinc\"\n    (clicked)=\"onClickCancel()\"\n  >\n  </ap-button>\n</ap-trn-tab>\n", styles: [".in-match::after {\n  content: \".\";\n  animation: dots 1.5s steps(3, end) infinite;\n}\n\n@keyframes dots {\n  0%   { content: \".\"; }\n  33%  { content: \"..\"; }\n  66%  { content: \"...\"; }\n  100% { content: \".\"; }\n}"] }]
    }], () => [{ type: i1.TrnCtrlService }, { type: i2.AppInterfaceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrnMatchingComponent, { className: "TrnMatchingComponent", filePath: "src/app/pages/trn-matching/trn-matching.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=trn-matching.component.js.map