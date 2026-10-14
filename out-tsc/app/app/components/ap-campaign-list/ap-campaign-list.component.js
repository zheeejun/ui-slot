import { Component, input, output, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { DecimalPipe } from "../../library/pipe/decimal.pipe";
import { DefaultBaseCampaigns } from '../../pages/event-campaign-content/event-campaign-content.data';
import { dec } from '../../services/user-profile/user-profile.function';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "[background:linear-gradient(#27272A)_padding-box,linear-gradient(180deg,#FEFE7B,#3F3F46)_border-box]": a0, "[background:linear-gradient(#27272A)_padding-box,linear-gradient(180deg,#6A6A6A,#3F3F46)_border-box]": a1 });
const _c1 = (a0, a1) => ({ "text-white": a0, "text-yellow-300": a1 });
const _c2 = (a0, a1) => ({ "text-yellow-300": a0, "text-white": a1 });
function ApCampaignListComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 12)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 13);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 14);
    i0.ɵɵelement(7, "div", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.betCountRequirementLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.progressCurrent(), "/", ctx_r0.progressTotal(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r0.progress(), "%");
} }
function ApCampaignListComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 12)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 13);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 14);
    i0.ɵɵelement(7, "div", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.turnoverRequirementLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.progress(), "% ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r0.progress(), "%");
} }
function ApCampaignListComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-icon", 16);
    i0.ɵɵlistener("click", function ApCampaignListComponent_Conditional_14_Template_ap_icon_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onClickTooltip()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("name", "exclamation-circle");
} }
function ApCampaignListComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 17)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 17)(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "decimal");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 17)(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "decimal");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 17)(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "decimal");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 17)(26, "span");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span");
    i0.ɵɵtext(29);
    i0.ɵɵpipe(30, "decimal");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 17)(32, "span");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "span");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.tipExpiryDateLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 16, ctx_r0.expiryDate(), "yyyy-MM-dd hh:mm"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.tipTurnoverRequirementLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.currency(), " ", i0.ɵɵpipeBind1(12, 19, ctx_r0.turnoverRequirement()));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.tipRemainingTurnoverLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.currency(), " ", i0.ɵɵpipeBind1(18, 21, ctx_r0.remainingTurnover()));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.tipMaxWithdrawLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.currency(), " ", i0.ɵɵpipeBind1(24, 23, ctx_r0.maxWithdraw()));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.tipMinWithdrawLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.currency(), " ", i0.ɵɵpipeBind1(30, 25, ctx_r0.minWithdraw()));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.tipCampaignIdLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.campaignId());
} }
export class ApCampaignListComponent {
    appI18n = inject(AppI18nService);
    compaignData = input(DefaultBaseCampaigns[0]);
    currency = input('$');
    baseType = computed(() => this.compaignData().baseType);
    variant = computed(() => this.compaignData().variant);
    displayType = computed(() => this.compaignData().displayType);
    /** unix timestamp milliseconds */
    endDate = computed(() => this.compaignData().endsOn);
    title = computed(() => this.compaignData().title);
    progressCurrent = computed(() => this.compaignData().progressCurrent);
    progressTotal = computed(() => this.compaignData().progressTotal);
    progress = computed(() => {
        if (this.progressTotal() === 0)
            return 0;
        return Math.min(100, Math.round((this.progressCurrent() / this.progressTotal()) * 100));
    });
    /** unix timestamp milliseconds */
    expiryDate = computed(() => this.compaignData().expiryDate);
    turnoverRequirement = computed(() => this.compaignData().turnoverRequirement);
    remainingTurnover = computed(() => this.compaignData().remainingTurnover);
    maxWithdraw = computed(() => this.compaignData().maxWithdraw);
    minWithdraw = computed(() => this.compaignData().minWithdraw);
    campaignId = computed(() => this.compaignData().id);
    freeBonusHiddenSubtitle = signal('Free Bonus');
    freeBonusInProgessSubtitle = this.appI18n.computed('promo_balance', 'Bonus Balance:');
    freeSpinsHiddenSubtitle = this.appI18n.computed('promo_free_spins', 'Free Spins');
    freeSpinsSubtitle = this.appI18n.computed('promo_fs_spin', 'Free Spin:');
    freeSpinBonusSubtitle = this.appI18n.computed('promo_fs_balance', 'Balance:');
    // EndsOn_Text 這字串用不到 {0}
    endDateLabel = computed(() => { return this.appI18n.computed('EndsOn_Text', 'Ends On:')().replace('{0}', ''); });
    buttonLabel = this.appI18n.computed('Claim_Btn', 'Claim');
    betCountRequirementLabel = this.appI18n.computed('promo_bet_counts_requirement', 'Bet Counts Requirement:');
    turnoverRequirementLabel = this.appI18n.computed('promo_turnover_requirement', 'Turnover Requirement:');
    // Tooltip data inputs
    tipExpiryDateLabel = this.appI18n.computed('ExpiryDate_Text', 'Expiry Date:');
    tipTurnoverRequirementLabel = this.appI18n.computed('TurnoverRequirement_Text', 'Turnover Requirement:');
    tipRemainingTurnoverLabel = this.appI18n.computed('RemainingRequirement_Text', 'Remaining Requirement:');
    tipMaxWithdrawLabel = this.appI18n.computed('MaxWithdraw_Text', 'Max Withdraw:');
    tipMinWithdrawLabel = this.appI18n.computed('MinWithdraw_Text', 'Min Withdraw:');
    tipCampaignIdLabel = this.appI18n.computed('CampaignID_Text', 'Campaign ID:');
    claim = output();
    showTooltip = signal(false);
    subtitle = computed(() => {
        // 根據 baseType 和 displayType 決定 subtitle 內容
        if (this.baseType() === 'freeBonus') {
            if (this.variant() === 'hidden') {
                return `${this.freeBonusHiddenSubtitle()}`;
            }
            else { // InProgress
                return `${this.freeBonusInProgessSubtitle()} ${this.currency()}${dec.place(this.compaignData().balance)}`;
            }
        }
        else {
            if (this.variant() === 'hidden') {
                return `${this.freeSpinsHiddenSubtitle()}`;
            }
            else { // InProgress
                if (this.displayType() === 'freeSpins') {
                    return `${this.freeSpinsSubtitle()} ${this.compaignData().progressCurrent}/${this.compaignData().progressTotal}`;
                }
                else { // display as freeBonus
                    return `${this.freeSpinBonusSubtitle()} ${this.currency()}${dec.place(this.compaignData().balance)}`;
                }
            }
        }
    });
    handleButtonClick() {
        this.claim.emit(this.campaignId());
    }
    onClickTooltip() {
        this.showTooltip.set(!this.showTooltip());
    }
    static ɵfac = function ApCampaignListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApCampaignListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApCampaignListComponent, selectors: [["ap-campaign-list"]], inputs: { compaignData: [1, "compaignData"], currency: [1, "currency"] }, outputs: { claim: "claim" }, decls: 17, vars: 26, consts: [[1, "relative", "rounded-lg", "bg-zinc-800", "p-3", "mb-4", "select-none", "shadow-xl", "border-[0.15rem]", "border-transparent", 3, "ngClass"], [1, "flex", "items-start", "justify-between", "text-left"], [1, "flex-1", "min-w-0"], [1, "text-2xl", "font-bold", "tracking-wide", 3, "ngClass"], [1, "italic", "font-semibold", "mb-1", 3, "ngClass"], [1, "m-1", "pt-2"], [1, "flex", "items-center", "justify-between"], [1, "text-zinc-400", "text-xs", "italic"], [1, "flex", "flex-col", "items-end", "gap-3", "ml-4"], [1, "text-zinc-400", "hover:text-white", "cursor-pointer", "transition-colors", "sm:size-6", "size-7", 3, "name"], [3, "click", "accentColor", "disabled", "label"], [1, "mt-3", "pt-2", "border-t", "border-zinc-700", "text-xs", "text-zinc-300", "animate-fade", "animate-duration-300"], [1, "flex", "justify-between", "text-zinc-300", "text-sm", "font-medium", "italic", "mb-1", "leading-4"], [1, "text-yellow-400", "text-xs", "italic", "font-medium"], [1, "h-[0.8rem]", "rounded-full", "bg-zinc-900", "p-[0.1rem]", "outline-2", "outline-zinc-600", "w-full"], [1, "h-full", "rounded-full", "progress-bar"], [1, "text-zinc-400", "hover:text-white", "cursor-pointer", "transition-colors", "sm:size-6", "size-7", 3, "click", "name"], [1, "flex", "justify-between", "py-1"]], template: function ApCampaignListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(7, ApCampaignListComponent_Conditional_7_Template, 8, 5, "div", 5);
            i0.ɵɵconditionalCreate(8, ApCampaignListComponent_Conditional_8_Template, 8, 4, "div", 5);
            i0.ɵɵelementStart(9, "div", 6)(10, "span", 7);
            i0.ɵɵtext(11);
            i0.ɵɵpipe(12, "date");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "div", 8);
            i0.ɵɵconditionalCreate(14, ApCampaignListComponent_Conditional_14_Template, 1, 1, "ap-icon", 9);
            i0.ɵɵelementStart(15, "ap-button", 10);
            i0.ɵɵlistener("click", function ApCampaignListComponent_Template_ap_button_click_15_listener() { return ctx.handleButtonClick(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(16, ApCampaignListComponent_Conditional_16_Template, 36, 27, "div", 11);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(17, _c0, ctx.variant() === "completed" || ctx.variant() === "hidden", ctx.variant() === "inProgress"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(20, _c1, ctx.variant() === "inProgress" || ctx.variant() === "hidden", ctx.variant() === "completed"));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.title(), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(23, _c2, ctx.variant() === "completed" || ctx.variant() === "hidden", ctx.variant() === "inProgress"));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.subtitle(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.displayType() === "betCount" ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.displayType() === "turnover" ? 8 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2(" ", ctx.endDateLabel(), " ", i0.ɵɵpipeBind2(12, 14, ctx.endDate(), "yyyy-MM-dd hh:mm"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.variant() === "inProgress" ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("accentColor", "yellow")("disabled", ctx.variant() !== "inProgress")("label", ctx.buttonLabel());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showTooltip() ? 16 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, i1.DatePipe, ApIconComponent, ApButtonComponent, DecimalPipe], styles: [".progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.5s ease-in-out;\n}\n\n.shadow-glow-soft[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px rgba(244, 196, 75, 0.8), 0 0 10px rgba(244, 196, 75, 0.6),\n    inset 0 0 3px rgba(255, 255, 255, 0.3);\n  filter: brightness(1.3) saturate(1.2);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApCampaignListComponent, [{
        type: Component,
        args: [{ selector: 'ap-campaign-list', standalone: true, imports: [CommonModule, ApIconComponent, ApButtonComponent, DecimalPipe], template: "<div\n  class=\"relative rounded-lg bg-zinc-800 p-3 mb-4 select-none shadow-xl border-[0.15rem] border-transparent\"\n  [ngClass]=\"{\n    '[background:linear-gradient(#27272A)_padding-box,linear-gradient(180deg,#FEFE7B,#3F3F46)_border-box]':\n      variant() === 'completed' || variant() === 'hidden',\n    '[background:linear-gradient(#27272A)_padding-box,linear-gradient(180deg,#6A6A6A,#3F3F46)_border-box]':\n      variant() === 'inProgress',\n  }\"\n>\n  <div class=\"flex items-start justify-between text-left\">\n    <!-- Left Content -->\n    <div class=\"flex-1 min-w-0\">\n      <!-- Title -->\n      <div\n        class=\"text-2xl font-bold tracking-wide\"\n        [ngClass]=\"{\n          'text-white': variant() === 'inProgress' || variant() === 'hidden',\n          'text-yellow-300': variant() === 'completed',\n        }\"\n      >\n        {{ title() }}\n      </div>\n\n      <!-- Prize -->\n      <div\n        class=\"italic font-semibold mb-1\"\n        [ngClass]=\"{\n          'text-yellow-300':\n            variant() === 'completed' || variant() === 'hidden',\n          'text-white': variant() === 'inProgress',\n        }\"\n      >\n        {{ subtitle() }}\n      </div>\n\n      <!-- Progress Bar 'pending'  -->\n      @if (displayType() === \"betCount\") {\n        <div class=\"m-1 pt-2\">\n          <div\n            class=\"flex justify-between text-zinc-300 text-sm font-medium italic mb-1 leading-4\"\n          >\n            <span>{{ betCountRequirementLabel() }}</span>\n            <span class=\"text-yellow-400 text-xs italic font-medium\">\n              {{ progressCurrent() }}/{{ progressTotal() }}\n            </span>\n          </div>\n          <div\n            class=\"h-[0.8rem] rounded-full bg-zinc-900 p-[0.1rem] outline-2 outline-zinc-600 w-full\"\n          >\n            <div\n              class=\"h-full rounded-full progress-bar\"\n              [style.width.%]=\"progress()\"\n            ></div>\n          </div>\n        </div>\n      }\n\n      @if (displayType() === \"turnover\") {\n        <div class=\"m-1 pt-2\">\n          <div\n            class=\"flex justify-between text-zinc-300 text-sm font-medium italic mb-1 leading-4\"\n          >\n            <span>{{ turnoverRequirementLabel() }}</span>\n            <span class=\"text-yellow-400 text-xs italic font-medium\">\n              {{ progress() }}%\n            </span>\n          </div>\n          <div\n            class=\"h-[0.8rem] rounded-full bg-zinc-900 p-[0.1rem] outline-2 outline-zinc-600 w-full\"\n          >\n            <div\n              class=\"h-full rounded-full progress-bar\"\n              [style.width.%]=\"progress()\"\n            ></div>\n          </div>\n        </div>\n      }\n\n      <!-- End Date -->\n      <div class=\"flex items-center justify-between\">\n        <span class=\"text-zinc-400 text-xs italic\">\n          {{ endDateLabel() }} {{ endDate() | date: \"yyyy-MM-dd hh:mm\" }}\n        </span>\n      </div>\n    </div>\n\n    <!-- Right: Info Icon + Button -->\n    <div class=\"flex flex-col items-end gap-3 ml-4\">\n      <!-- Info Icon -->\n      @if (variant() === \"inProgress\") {\n        <ap-icon\n          [name]=\"'exclamation-circle'\"\n          class=\"text-zinc-400 hover:text-white cursor-pointer transition-colors sm:size-6 size-7\"\n          (click)=\"onClickTooltip()\"\n        />\n      }\n      <!-- Claim Button -->\n      <ap-button\n        (click)=\"handleButtonClick()\"\n        [accentColor]=\"'yellow'\"\n        [disabled]=\"variant() !== 'inProgress'\"\n        [label]=\"buttonLabel()\"\n      />\n    </div>\n  </div>\n\n  <!-- Details List -->\n  @if (showTooltip()) {\n    <div\n      class=\"mt-3 pt-2 border-t border-zinc-700 text-xs text-zinc-300 animate-fade animate-duration-300\"\n    >\n      <div class=\"flex justify-between py-1\">\n        <span>{{ tipExpiryDateLabel() }}</span>\n        <span>{{ expiryDate() | date: \"yyyy-MM-dd hh:mm\" }}</span>\n      </div>\n      <div class=\"flex justify-between py-1\">\n        <span>{{ tipTurnoverRequirementLabel() }}</span>\n        <span>{{ currency() }} {{ turnoverRequirement() | decimal }}</span>\n      </div>\n      <div class=\"flex justify-between py-1\">\n        <span>{{ tipRemainingTurnoverLabel() }}</span>\n        <span>{{ currency() }} {{ remainingTurnover() | decimal }}</span>\n      </div>\n      <div class=\"flex justify-between py-1\">\n        <span>{{ tipMaxWithdrawLabel() }}</span>\n        <span>{{ currency() }} {{ maxWithdraw() | decimal }}</span>\n      </div>\n      <div class=\"flex justify-between py-1\">\n        <span>{{ tipMinWithdrawLabel() }}</span>\n        <span>{{ currency() }} {{ minWithdraw() | decimal }}</span>\n      </div>\n      <div class=\"flex justify-between py-1\">\n        <span>{{ tipCampaignIdLabel() }}</span>\n        <span>{{ campaignId() }}</span>\n      </div>\n    </div>\n  }\n</div>\n", styles: [".progress-bar {\n  transition: width 0.5s ease-in-out;\n}\n\n.shadow-glow-soft {\n  box-shadow: 0 0 5px rgba(244, 196, 75, 0.8), 0 0 10px rgba(244, 196, 75, 0.6),\n    inset 0 0 3px rgba(255, 255, 255, 0.3);\n  filter: brightness(1.3) saturate(1.2);\n}\n\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApCampaignListComponent, { className: "ApCampaignListComponent", filePath: "src/app/components/ap-campaign-list/ap-campaign-list.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=ap-campaign-list.component.js.map