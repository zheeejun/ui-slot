import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
export class ApCampaignTooltipComponent {
    // title
    TitleExpiryDate = input("Expiry Date:");
    TitleTurnoverRequirement = input("Turnover Requirement:");
    TitleRemainingRequirement = input("Remaining Requirement");
    TitleBonusBalance = input("Bonus Balance:");
    TitleMaxWithdraw = input("Max. Withdraw:");
    TitleMinWithdraw = input("Min. Withdraw:");
    TitleCampaignId = input("Campaign ID:");
    // content
    expiryDate = input("2025-07-23 17:40:31");
    turnoverRequirement = input("DEMO 50,000");
    remainingTurnover = input("DEMO 50,000");
    bonusBalance = input("DEMO 50,000");
    maxWithdraw = input("DEMO 50,000");
    minWithdraw = input("DEMO 50,000");
    campaignId = input("QWERTYUIOPASASDF");
    static ɵfac = function ApCampaignTooltipComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApCampaignTooltipComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApCampaignTooltipComponent, selectors: [["ap-campaign-tooltip"]], inputs: { TitleExpiryDate: [1, "TitleExpiryDate"], TitleTurnoverRequirement: [1, "TitleTurnoverRequirement"], TitleRemainingRequirement: [1, "TitleRemainingRequirement"], TitleBonusBalance: [1, "TitleBonusBalance"], TitleMaxWithdraw: [1, "TitleMaxWithdraw"], TitleMinWithdraw: [1, "TitleMinWithdraw"], TitleCampaignId: [1, "TitleCampaignId"], expiryDate: [1, "expiryDate"], turnoverRequirement: [1, "turnoverRequirement"], remainingTurnover: [1, "remainingTurnover"], bonusBalance: [1, "bonusBalance"], maxWithdraw: [1, "maxWithdraw"], minWithdraw: [1, "minWithdraw"], campaignId: [1, "campaignId"] }, decls: 32, vars: 12, consts: [[1, "bg-zinc-900", "text-white", "p-4", "rounded-b-xl", "border", "border-zinc-600", "min-w-72", "relative", "shadow-xl"], [1, "space-y-1", "text-sm"], [1, "flex", "justify-between", "items-center", "text-white"], [1, "text-zinc-400"]], template: function ApCampaignTooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 2)(8, "span", 3);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 2)(13, "span", 3);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "span");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 2)(18, "span", 3);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "span");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 2)(23, "span", 3);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 2)(28, "span", 3);
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "span");
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.TitleExpiryDate());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.expiryDate());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.TitleTurnoverRequirement());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.turnoverRequirement());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.TitleRemainingRequirement());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.remainingTurnover());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.TitleMaxWithdraw());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.maxWithdraw());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.TitleMinWithdraw());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.minWithdraw());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.TitleCampaignId());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.campaignId());
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApCampaignTooltipComponent, [{
        type: Component,
        args: [{ selector: "ap-campaign-tooltip", standalone: true, imports: [CommonModule], template: "<div\n  class=\"bg-zinc-900 text-white p-4 rounded-b-xl border border-zinc-600 min-w-72 relative shadow-xl\"\n>\n  <div class=\"space-y-1 text-sm\">\n    <div class=\"flex justify-between items-center text-white\">\n      <span class=\"text-zinc-400\">{{ TitleExpiryDate() }}</span>\n      <span>{{ expiryDate() }}</span>\n    </div>\n\n    <div class=\"flex justify-between items-center text-white\">\n      <span class=\"text-zinc-400\">{{ TitleTurnoverRequirement() }}</span>\n      <span>{{ turnoverRequirement() }}</span>\n    </div>\n\n    <div class=\"flex justify-between items-center text-white\">\n      <span class=\"text-zinc-400\">{{ TitleRemainingRequirement() }}</span>\n      <span>{{ remainingTurnover() }}</span>\n    </div>\n\n    <div class=\"flex justify-between items-center text-white\">\n      <span class=\"text-zinc-400\">{{ TitleMaxWithdraw() }}</span>\n      <span>{{ maxWithdraw() }}</span>\n    </div>\n\n    <div class=\"flex justify-between items-center text-white\">\n      <span class=\"text-zinc-400\">{{ TitleMinWithdraw() }}</span>\n      <span>{{ minWithdraw() }}</span>\n    </div>\n\n    <div class=\"flex justify-between items-center text-white\">\n      <span class=\"text-zinc-400\">{{ TitleCampaignId() }}</span>\n      <span>{{ campaignId() }}</span>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApCampaignTooltipComponent, { className: "ApCampaignTooltipComponent", filePath: "src/app/components/ap-campaign-tooltip/ap-campaign-tooltip.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-campaign-tooltip.component.js.map