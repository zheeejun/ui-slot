import { Component, output, input, computed, inject, signal } from '@angular/core';
import { ApTrnListGameComponent } from '../../components/ap-trn-list-game/ap-trn-list-game.component';
import { defaultQuickSections, defaultEventSections, } from './event-trn-rules.data';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
function EventTrnRulesComponent_For_4_For_5_Conditional_0_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(child_r1);
} }
function EventTrnRulesComponent_For_4_For_5_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "ul", 6);
    i0.ɵɵrepeaterCreate(3, EventTrnRulesComponent_For_4_For_5_Conditional_0_For_4_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r2.text, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(item_r2.items);
} }
function EventTrnRulesComponent_For_4_For_5_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r2.text);
} }
function EventTrnRulesComponent_For_4_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, EventTrnRulesComponent_For_4_For_5_Conditional_0_Template, 5, 1, "li", 5)(1, EventTrnRulesComponent_For_4_For_5_Conditional_1_Template, 2, 1, "li", 5);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(ctx_r2.isRuleGroup(item_r2) ? 0 : 1);
} }
function EventTrnRulesComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul", 4);
    i0.ɵɵrepeaterCreate(4, EventTrnRulesComponent_For_4_For_5_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap("text-left font-medium " + ctx_r2.titleColor());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", section_r4.title, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(section_r4.items);
} }
export class EventTrnRulesComponent {
    appI18n = inject(AppI18nService);
    api = inject(AppInterfaceService);
    getQuickTimeLabel = this.appI18n.computed('RegularEvent_Tag', 'Regular Event');
    getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
    getHoursLabel = this.appI18n.computed('HRS', 'HRS');
    getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
    getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
    getCountdownStartTitle = this.appI18n.computed('StartIn_Tip', 'Start in');
    getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in');
    goBack = output();
    close = output();
    //* 積分
    bonusPoint = signal(500) || null;
    variant = computed(() => {
        return this.currentTrn()?.type || 'event';
    });
    currentTrn = input(null);
    quickSections = input(defaultQuickSections);
    eventSections = input(defaultEventSections);
    //* 字串轉換
    currentSections = computed(() => (this.variant() === 'quick' ? this.quickSections() : this.eventSections()).map((section) => ({
        ...section,
        title: section.titleKey ? this.appI18n.instant(section.titleKey, section.title) : section.title,
        items: section.items.map((item) => this.isRuleGroup(item)
            ? { ...item, text: item.textKey ? this.appI18n.instant(item.textKey, item.text) : item.text }
            : { ...item, text: item.key ? this.appI18n.instant(item.key, item.text) : item.text }),
    })));
    titleColor = computed(() => this.variant() === 'quick' ? 'text-yellow-200' : 'text-purple-200');
    // Event handlers
    handleBack() {
        this.goBack.emit();
    }
    handleClose() {
        this.close.emit();
    }
    // Get countdown time from data based on variant
    getCountdownTime() {
        return '';
    }
    isRuleGroup(item) {
        return 'items' in item;
    }
    static ɵfac = function EventTrnRulesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventTrnRulesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventTrnRulesComponent, selectors: [["event-trn-rules"]], inputs: { currentTrn: [1, "currentTrn"], quickSections: [1, "quickSections"], eventSections: [1, "eventSections"] }, outputs: { goBack: "goBack", close: "close" }, decls: 5, vars: 9, consts: [[1, "px-4", "sm:px-6", "pt-4", "sm:pt-6"], [3, "trnData", "getQuickTimeLabel", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "hasParticipated"], [1, "space-y-8", "mt-2", "sm:mt-4", "pb-10"], [1, "flex", "flex-col", "gap-3", "items-left", "px-4", "sm:px-6"], [1, "w-full", "max-w-2xl", "font-normal", "list-disc", "list-inside", "text-zinc-300", "leading-relaxed", "space-y-2", "-mt-4", "text-left"], [1, "text-sm", "sm:text-base"], [1, "mt-2", "list-disc", "list-inside", "space-y-1", "pl-4", "text-zinc-400"]], template: function EventTrnRulesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "ap-trn-list-game", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵrepeaterCreate(3, EventTrnRulesComponent_For_4_Template, 6, 3, "div", 3, _forTrack0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("trnData", ctx.currentTrn())("getQuickTimeLabel", ctx.getQuickTimeLabel())("getDaysLabel", ctx.getDaysLabel())("getHoursLabel", ctx.getHoursLabel())("getMinutesLabel", ctx.getMinutesLabel())("getSecondsLabel", ctx.getSecondsLabel())("getCountdownStartTitle", ctx.getCountdownStartTitle())("getCountdownEndTitle", ctx.getCountdownEndTitle())("hasParticipated", true);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.currentSections());
        } }, dependencies: [ApTrnListGameComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventTrnRulesComponent, [{
        type: Component,
        args: [{ selector: 'event-trn-rules', imports: [ApTrnListGameComponent], template: "<div class=\"px-4 sm:px-6 pt-4 sm:pt-6\">\n  <!-- Tournament List -->\n  <ap-trn-list-game\n    [trnData]=\"currentTrn()\"\n    [getQuickTimeLabel]=\"getQuickTimeLabel()\"\n    [getDaysLabel]=\"getDaysLabel()\"\n    [getHoursLabel]=\"getHoursLabel()\"\n    [getMinutesLabel]=\"getMinutesLabel()\"\n    [getSecondsLabel]=\"getSecondsLabel()\"\n    [getCountdownStartTitle]=\"getCountdownStartTitle()\"\n    [getCountdownEndTitle]=\"getCountdownEndTitle()\"\n    [hasParticipated]=\"true\"\n  />\n  <!-- Rules Sections -->\n  <div class=\"space-y-8 mt-2 sm:mt-4 pb-10\">\n    @for (section of currentSections(); track section.title) {\n      <div class=\"flex flex-col gap-3 items-left px-4 sm:px-6\">\n        <h2 [class]=\"'text-left font-medium ' + titleColor()\">\n          {{ section.title }}\n        </h2>\n        <ul\n          class=\"w-full max-w-2xl font-normal list-disc list-inside text-zinc-300 leading-relaxed space-y-2 -mt-4 text-left\"\n        >\n          @for (item of section.items; track item) {\n            @if (isRuleGroup(item)) {\n              <li class=\"text-sm sm:text-base\">\n                {{ item.text }}\n                <ul class=\"mt-2 list-disc list-inside space-y-1 pl-4 text-zinc-400\">\n                  @for (child of item.items; track child) {\n                    <li>{{ child }}</li>\n                  }\n                </ul>\n              </li>\n            } @else {\n              <li class=\"text-sm sm:text-base\">{{ item.text }}</li>\n            }\n          }\n        </ul>\n      </div>\n    }\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventTrnRulesComponent, { className: "EventTrnRulesComponent", filePath: "src/app/pages/event-trn-rules/event-trn-rules.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=event-trn-rules.component.js.map