import { Component, input } from '@angular/core';
import { FloorNumberPipe } from '../../library/pipe/floor-number.pipe';
import { NgClass } from '@angular/common';
import * as i0 from "@angular/core";
const _c0 = (a0, a1) => ({ "border-yellow-300/30": a0, "border-purple-300/20": a1 });
const _c1 = (a0, a1, a2, a3) => ({ "border-yellow-300/30": a0, "border-purple-300/20": a1, "bg-yellow-300/20": a2, "bg-purple-500/15": a3 });
const _c2 = (a0, a1) => ({ "text-yellow-400": a0, "text-purple-200": a1 });
const _c3 = (a0, a1) => ({ "hover:bg-yellow-300/5": a0, "hover:bg-purple-500/5": a1 });
const _c4 = (a0, a1) => ({ "text-yellow-200": a0, "text-purple-300": a1 });
const _forTrack0 = ($index, $item) => $item.level;
function ApTrnInfoTableComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.description());
} }
function ApTrnInfoTableComponent_Conditional_2_For_7_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "floorNumber");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const betRange_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("~", i0.ɵɵpipeBind2(2, 1, betRange_r2.end, "1.0-2"));
} }
function ApTrnInfoTableComponent_Conditional_2_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 8)(1, "td", 9)(2, "span", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td", 11);
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "floorNumber");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, ApTrnInfoTableComponent_Conditional_2_For_7_Conditional_9_Template, 3, 4, "span");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const betRange_r2 = ctx.$implicit;
    const ɵ$index_19_r3 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("bg-zinc-900", !(ɵ$index_19_r3 % 2 === 0))("bg-zinc-800", ɵ$index_19_r3 % 2 === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(betRange_r2.level);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.currencySymbol(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(8, 8, betRange_r2.start, "1.0-2"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(betRange_r2.end ? 9 : -1);
} }
function ApTrnInfoTableComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 3)(2, "div", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "table", 5)(5, "tbody", 6);
    i0.ɵɵrepeaterCreate(6, ApTrnInfoTableComponent_Conditional_2_For_7_Template, 10, 11, "tr", 7, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.betRanges());
} }
function ApTrnInfoTableComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 12)(2, "div", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "table", 5)(5, "tbody", 6)(6, "tr", 14)(7, "td", 15)(8, "span", 10);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td", 16);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "tr", 14)(13, "td", 15)(14, "span", 10);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td", 16);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "tr", 17)(19, "td", 15)(20, "span", 10);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td", 16);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(16, _c0, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(19, _c1, ctx_r0.variant() === "quick", ctx_r0.variant() === "event", ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(24, _c2, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(27, _c3, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.condition1());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(30, _c4, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.playersPerMatch() ?? "N/A", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(33, _c3, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.condition3());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(36, _c4, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.matchDuration(), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(39, _c3, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.condition4());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(42, _c4, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" x", ctx_r0.prizeBoost(), " ");
} }
export class ApTrnInfoTableComponent {
    // 'quick' 顯示快速賽事資訊表格，'event' 顯示活動賽事資訊表格
    variant = input('quick');
    // 'betRange' 顯示投注範圍表格
    type = input('match');
    description = input('');
    title = input('');
    condition1 = input('');
    condition2 = input('');
    condition3 = input('');
    condition4 = input('');
    // 'match' 顯示比賽資訊表格
    currencySymbol = input('');
    betRanges = input([]);
    minEntryBalance = input(null);
    playersPerMatch = input(null);
    matchDuration = input('--');
    prizeBoost = input(1);
    static ɵfac = function ApTrnInfoTableComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnInfoTableComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnInfoTableComponent, selectors: [["ap-trn-info-table"]], hostAttrs: [1, "block", "w-full", "max-w-lg"], inputs: { variant: [1, "variant"], type: [1, "type"], description: [1, "description"], title: [1, "title"], condition1: [1, "condition1"], condition2: [1, "condition2"], condition3: [1, "condition3"], condition4: [1, "condition4"], currencySymbol: [1, "currencySymbol"], betRanges: [1, "betRanges"], minEntryBalance: [1, "minEntryBalance"], playersPerMatch: [1, "playersPerMatch"], matchDuration: [1, "matchDuration"], prizeBoost: [1, "prizeBoost"] }, decls: 4, vars: 2, consts: [[1, "w-full", "max-w-lg", "space-y-2", "text-left", "text-zinc-300", "leading-relaxed"], [1, "w-full", "max-w-lg", "border-2", "border-yellow-300/30", "rounded-xl", "sm:rounded-2xl", "overflow-hidden"], [1, "w-full", "max-w-lg", "border-2", "rounded-xl", "sm:rounded-2xl", "overflow-hidden", 3, "ngClass"], [1, "bg-yellow-300/20", "px-4", "py-2", "border-b", "border-yellow-300/20"], [1, "text-center", "text-yellow-400", "font-semibold", "text-xl", "sm:text-lg"], [1, "w-full"], [1, "divide-y", "divide-zinc-700/50"], [1, "text-zinc-300", "font-medium", "transition-all", "duration-200", "hover:bg-yellow-300/5", 3, "bg-zinc-900", "bg-zinc-800"], [1, "text-zinc-300", "font-medium", "transition-all", "duration-200", "hover:bg-yellow-300/5"], [1, "px-3", "sm:px-4", "py-2", "sm:py-4", "text-left"], [1, "text-md", "sm:text-base"], [1, "px-3", "sm:px-4", "py-3", "sm:py-4", "text-yellow-200", "text-right", "text-md", "sm:text-base", "font-medium", "tracking-wide"], [1, "px-4", "py-2", "border-b", 3, "ngClass"], [1, "text-center", "font-semibold", "text-xl", "sm:text-lg", 3, "ngClass"], [1, "transition-all", "duration-200", "bg-zinc-900", 3, "ngClass"], [1, "px-3", "sm:px-4", "py-2", "sm:py-4", "text-zinc-300", "text-left"], [1, "px-3", "sm:px-4", "py-3", "sm:py-4", "text-right", "text-md", "sm:text-base", "font-medium", "tracking-wide", 3, "ngClass"], [1, "transition-all", "duration-200", "bg-zinc-800", 3, "ngClass"]], template: function ApTrnInfoTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, ApTrnInfoTableComponent_Conditional_1_Template, 2, 1, "div");
            i0.ɵɵconditionalCreate(2, ApTrnInfoTableComponent_Conditional_2_Template, 8, 1, "div", 1)(3, ApTrnInfoTableComponent_Conditional_3_Template, 24, 45, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.description() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.type() === "betRange" ? 2 : 3);
        } }, dependencies: [FloorNumberPipe, NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnInfoTableComponent, [{
        type: Component,
        args: [{ selector: 'ap-trn-info-table', standalone: true, imports: [FloorNumberPipe, NgClass], host: {
                    class: 'block w-full max-w-lg',
                }, template: "<div class=\"w-full max-w-lg space-y-2 text-left text-zinc-300 leading-relaxed\">\n  @if (description()) {\n    <div>{{ description() }}</div>\n  }\n  @if (type() === \"betRange\") {\n    <div\n      class=\"w-full max-w-lg border-2 border-yellow-300/30 rounded-xl sm:rounded-2xl overflow-hidden\"\n    >\n      <div class=\"bg-yellow-300/20 px-4 py-2 border-b border-yellow-300/20\">\n        <div\n          class=\"text-center text-yellow-400 font-semibold text-xl sm:text-lg\"\n        >\n          {{ title() }}\n        </div>\n      </div>\n      <table class=\"w-full\">\n        <tbody class=\"divide-y divide-zinc-700/50\">\n          @for (\n            betRange of betRanges();\n            track betRange.level;\n            let isEven = $even\n          ) {\n            <tr\n              [class.bg-zinc-900]=\"!isEven\"\n              [class.bg-zinc-800]=\"isEven\"\n              class=\"text-zinc-300 font-medium transition-all duration-200 hover:bg-yellow-300/5\"\n            >\n              <td class=\"px-3 sm:px-4 py-2 sm:py-4 text-left\">\n                <span class=\"text-md sm:text-base\">{{ betRange.level }}</span>\n              </td>\n              <td\n                class=\"px-3 sm:px-4 py-3 sm:py-4 text-yellow-200 text-right text-md sm:text-base font-medium tracking-wide\"\n              >\n                {{ currencySymbol() }}\n                <span>{{ betRange.start | floorNumber: \"1.0-2\" }}</span>\n                @if (betRange.end) {\n                  <span>~{{ betRange.end | floorNumber: \"1.0-2\" }}</span>\n                }\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  } @else {\n    <div\n      class=\"w-full max-w-lg border-2 rounded-xl sm:rounded-2xl overflow-hidden\"\n      [ngClass]=\"{\n        'border-yellow-300/30': variant() === 'quick',\n        'border-purple-300/20': variant() === 'event',\n      }\"\n    >\n      <div\n        class=\"px-4 py-2 border-b\"\n        [ngClass]=\"{\n          'border-yellow-300/30': variant() === 'quick',\n          'border-purple-300/20': variant() === 'event',\n          'bg-yellow-300/20': variant() === 'quick',\n          'bg-purple-500/15': variant() === 'event',\n        }\"\n      >\n        <div\n          class=\"text-center font-semibold text-xl sm:text-lg\"\n          [ngClass]=\"{\n            'text-yellow-400': variant() === 'quick',\n            'text-purple-200': variant() === 'event',\n          }\"\n        >\n          {{ title() }}\n        </div>\n      </div>\n      <table class=\"w-full\">\n        <tbody class=\"divide-y divide-zinc-700/50\">\n          <tr\n            class=\"transition-all duration-200 bg-zinc-900\"\n            [ngClass]=\"{\n              'hover:bg-yellow-300/5': variant() === 'quick',\n              'hover:bg-purple-500/5': variant() === 'event',\n            }\"\n          >\n            <td class=\"px-3 sm:px-4 py-2 sm:py-4 text-zinc-300 text-left\">\n              <span class=\"text-md sm:text-base\">{{ condition1() }}</span>\n            </td>\n            <td\n              class=\"px-3 sm:px-4 py-3 sm:py-4 text-right text-md sm:text-base font-medium tracking-wide\"\n              [ngClass]=\"{\n                'text-yellow-200': variant() === 'quick',\n                'text-purple-300': variant() === 'event',\n              }\"\n            >\n              {{ playersPerMatch() ?? \"N/A\" }}\n            </td>\n          </tr>\n\n          <tr\n            class=\"transition-all duration-200 bg-zinc-900\"\n            [ngClass]=\"{\n              'hover:bg-yellow-300/5': variant() === 'quick',\n              'hover:bg-purple-500/5': variant() === 'event',\n            }\"\n          >\n            <td class=\"px-3 sm:px-4 py-2 sm:py-4 text-zinc-300 text-left\">\n              <span class=\"text-md sm:text-base\">{{ condition3() }}</span>\n            </td>\n            <td\n              class=\"px-3 sm:px-4 py-3 sm:py-4 text-right text-md sm:text-base font-medium tracking-wide\"\n              [ngClass]=\"{\n                'text-yellow-200': variant() === 'quick',\n                'text-purple-300': variant() === 'event',\n              }\"\n            >\n              {{ matchDuration() }}\n            </td>\n          </tr>\n\n          <tr\n            class=\"transition-all duration-200 bg-zinc-800\"\n            [ngClass]=\"{\n              'hover:bg-yellow-300/5': variant() === 'quick',\n              'hover:bg-purple-500/5': variant() === 'event',\n            }\"\n          >\n            <td class=\"px-3 sm:px-4 py-2 sm:py-4 text-zinc-300 text-left\">\n              <span class=\"text-md sm:text-base\">{{ condition4() }}</span>\n            </td>\n            <td\n              class=\"px-3 sm:px-4 py-3 sm:py-4 text-right text-md sm:text-base font-medium tracking-wide\"\n              [ngClass]=\"{\n                'text-yellow-200': variant() === 'quick',\n                'text-purple-300': variant() === 'event',\n              }\"\n            >\n              x{{ prizeBoost() }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  }\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnInfoTableComponent, { className: "ApTrnInfoTableComponent", filePath: "src/app/components/ap-trn-info-table/ap-trn-info-table.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=ap-trn-info-table.component.js.map