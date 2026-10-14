import { Component, signal, computed, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApCampaignListComponent } from '../../components/ap-campaign-list/ap-campaign-list.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { CampaignCtrlService } from '../../services/campaign-ctrl/campaign-ctrl.service';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["campaignListSection"];
const _forTrack0 = ($index, $item) => $item.id;
function EventCampaignContentComponent_Conditional_1_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3);
} }
function EventCampaignContentComponent_Conditional_1_For_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-campaign-list", 17);
    i0.ɵɵlistener("claim", function EventCampaignContentComponent_Conditional_1_For_19_Template_ap_campaign_list_claim_0_listener() { const base_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onClaim(base_r5)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const base_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("compaignData", base_r5)("currency", ctx_r1.currencySymbol());
} }
function EventCampaignContentComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 4)(2, "div", 5);
    i0.ɵɵelement(3, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7)(5, "div", 8);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ap-button", 9);
    i0.ɵɵlistener("click", function EventCampaignContentComponent_Conditional_1_Template_ap_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.scrollToCampaignList()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 10);
    i0.ɵɵelementStart(9, "div", 11)(10, "div", 12);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "ul", 13);
    i0.ɵɵrepeaterCreate(13, EventCampaignContentComponent_Conditional_1_For_14_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 14, 0)(17, "div", 15);
    i0.ɵɵrepeaterCreate(18, EventCampaignContentComponent_Conditional_1_For_19_Template, 1, 2, "ap-campaign-list", 16, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r1.groupImage(), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.groupTitle(), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("severity", "warn")("size", "small")("label", ctx_r1.jumpToRewardLabel())("icon", "arrow-down");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.groupDescription(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.baseCampaigns()[0].items);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.baseCampaigns());
} }
function EventCampaignContentComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 18);
    i0.ɵɵlistener("click", function EventCampaignContentComponent_Conditional_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeConfirmPopup()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ap-ui-frame-popup", 19);
    i0.ɵɵlistener("close", function EventCampaignContentComponent_Conditional_2_Template_ap_ui_frame_popup_close_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeConfirmPopup()); });
    i0.ɵɵelementStart(3, "div", 20)(4, "div", 21)(5, "div", 22)(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 22)(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 22)(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 22)(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 22)(27, "span");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 22)(32, "span");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "span");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(36, "div", 23)(37, "ap-button", 24);
    i0.ɵɵlistener("clicked", function EventCampaignContentComponent_Conditional_2_Template_ap_button_clicked_37_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onPlayNow()); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("header", ctx_r1.popupHeader())("size", "mobile")("enableClose", true);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.tipExpiryDateLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 22, (tmp_5_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_5_0.expiryDate, "yyyy-MM-dd hh:mm"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.tipTurnoverRequirementLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.currencySymbol(), " ", (tmp_7_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_7_0.turnoverRequirement);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.tipRemainingTurnoverLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.currencySymbol(), " ", (tmp_9_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_9_0.remainingTurnover);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.tipMaxWithdrawLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.currencySymbol(), " ", (tmp_11_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_11_0.maxWithdraw);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.tipMinWithdrawLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.currencySymbol(), " ", (tmp_13_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_13_0.minWithdraw);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.tipCampaignIdLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_15_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_15_0.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("size", "large")("accentColor", "yellow")("label", ctx_r1.playNowLabel());
} }
export class EventCampaignContentComponent {
    appI18n = inject(AppI18nService);
    api = inject(AppInterfaceService);
    campaign = inject(CampaignCtrlService);
    eventCenter = inject(EventCenterCtrlService);
    popupHeader = computed(() => {
        const campaign = this.selectedCampaign();
        return campaign ? `${campaign.title}` : this.appI18n.instant('message', 'MESSAGE');
    });
    playNowLabel = this.appI18n.computed('Play_Now_Btn', 'Play Now');
    cancelLabel = this.appI18n.computed('Cancel_Btn', 'Cancel');
    tipExpiryDateLabel = this.appI18n.computed('ExpiryDate_Text', 'Expiry Date:');
    tipTurnoverRequirementLabel = this.appI18n.computed('TurnoverRequirement_Text', 'Turnover Requirement:');
    tipRemainingTurnoverLabel = this.appI18n.computed('RemainingRequirement_Text', 'Remaining Requirement:');
    tipMaxWithdrawLabel = this.appI18n.computed('MaxWithdraw_Text', 'Max Withdraw:');
    tipMinWithdrawLabel = this.appI18n.computed('MinWithdraw_Text', 'Min Withdraw:');
    tipCampaignIdLabel = this.appI18n.computed('CampaignID_Text', 'Campaign ID:');
    campaignGroup = computed(() => {
        // 根據 eventCenter 的 subPath 決定要顯示哪一個 campaign group 的內容
        const currentId = this.eventCenter.subPath();
        const group = this.campaign.campaignGroupList().find(g => g.id === currentId);
        return group || null;
    });
    groupImage = computed(() => this.campaignGroup().image);
    groupTitle = computed(() => this.campaignGroup().title);
    groupDescription = computed(() => this.campaignGroup().description);
    campaignListSection;
    //* Button labels */
    jumpToRewardLabel = this.appI18n.computed('JumpToReward_Btn', 'Jump to Reward');
    //* Campaign status labels */
    endsOnLabel = this.appI18n.computed('EndsOn_Text', 'Ends On:');
    currencySymbol = computed(() => this.api.currencySymbol() || '$');
    selectedCampaign = signal(null);
    showConfirmPopup = computed(() => this.selectedCampaign() !== null);
    scrollToCampaignList() {
        const target = this.campaignListSection?.nativeElement;
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    //baseCampaigns = signal(DefaultBaseCampaigns);
    baseCampaigns = computed(() => {
        const group = this.campaignGroup();
        if (!group)
            return [];
        // 從 group 的 campaignIdList 找到對應的 CampaignType[]
        const campaignList = [];
        for (const campaignId of group.campaignIdList) {
            const campaign = this.campaign.campaignList().find(c => c.id === campaignId);
            if (campaign) {
                campaignList.push(campaign);
            }
        }
        const campaigns = [];
        // 把 campaigns 轉換成 CampaignComponentData[]格式
        for (const campaign of campaignList) {
            const variant = campaign.status;
            const turnoverRequirement = campaign.withdrawal ? campaign.withdrawal.turnoverThreshold : 0;
            const remainingTurnover = campaign.withdrawal ? campaign.withdrawal.turnoverRemaining : 0;
            const maxWithdraw = campaign.withdrawal ? campaign.withdrawal.limit : 0;
            const minWithdraw = campaign.withdrawal ? campaign.withdrawal.balanceThreshold : 0;
            campaigns.push({
                baseType: campaign.type,
                id: campaign.id || '',
                variant,
                image: '',
                imageAlt: '',
                title: campaign.name,
                description: '',
                items: [],
                endsOn: campaign.lastBetTime,
                progressCurrent: campaign.progressCurrent,
                progressTotal: campaign.progressTotal,
                balance: campaign.balance,
                isChallenge: campaign.isChallenge,
                expiryDate: campaign.endTime,
                turnoverRequirement,
                remainingTurnover,
                maxWithdraw,
                minWithdraw,
                displayType: campaign.displayType
            });
        }
        return campaigns;
    });
    onClaim(campaign) {
        if (campaign.variant !== 'inProgress') {
            return;
        }
        this.selectedCampaign.set(campaign);
    }
    closeConfirmPopup() {
        this.selectedCampaign.set(null);
    }
    onPlayNow() {
        const campaign = this.selectedCampaign();
        if (!campaign) {
            return;
        }
        this.closeConfirmPopup();
        this.eventCenter.close();
        this.campaign.setCurrentId(campaign.id);
    }
    static ɵfac = function EventCampaignContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventCampaignContentComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventCampaignContentComponent, selectors: [["event-campaign-content"]], viewQuery: function EventCampaignContentComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.campaignListSection = _t.first);
        } }, decls: 3, vars: 2, consts: [["campaignListSection", ""], [1, "relative", "bg-zinc-900", "min-h-full", "sm:pb-8", "pb-10", "p-2"], [1, "flex", "justify-center", "pt-6"], [1, "absolute", "inset-0", "z-overlay", "grid", "place-items-center", "select-none"], [1, "sticky", "w-full", "max-w-2xl", "rounded-xl", "flex", "flex-col", "border-[0.2rem]", "border-transparent", "overflow-hidden", "[background:linear-gradient(#27272A)_padding-box,linear-gradient(180deg,#FEFE7B,#D09600)_border-box]", "space-y-2"], [1, "relative", "w-full", "overflow-hidden", 2, "aspect-ratio", "670 / 223"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "flex-col", "gap-2", "items-center", "justify-center"], [1, "font-anton", "text-center", "text-yellow-gradient", "text-4xl", "tracking-wide", "uppercase"], [3, "click", "severity", "size", "label", "icon"], [1, "w-[70%]", "divider-gradient-yellow", "mx-auto", "mt-2"], [1, "w-full", "px-8", "text-zinc-300"], [1, "pb-2", "text-md", "font-medium"], [1, "list-disc", "list", "list-inside", "space-y-2", "text-sm", "text-left"], [1, "flex-1", "w-full", "px-4", "pb-4", "mt-4"], [1, "animate-fade-down", "animate-duration-500", "animate-ease-out"], [3, "compaignData", "currency"], [3, "claim", "compaignData", "currency"], [1, "absolute", "inset-0", "bg-black/60", "animate-fade", "animate-once", "animate-duration-200", 3, "click"], [1, "relative", "w-11/12", "md:w-3/4", "lg:w-1/2", "animate-fade", "animate-once", "animate-duration-300", 3, "close", "header", "size", "enableClose"], [1, "px-6", "pt-4", "pb-2", "text-zinc-300"], [1, "mt-4", "space-y-2", "text-sm"], [1, "flex", "justify-between", "gap-4"], [1, "flex", "items-center", "justify-center", "px-6", "pb-6", "pt-4"], [1, "w-[40%]", 3, "clicked", "size", "accentColor", "label"]], template: function EventCampaignContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵconditionalCreate(1, EventCampaignContentComponent_Conditional_1_Template, 20, 7, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(2, EventCampaignContentComponent_Conditional_2_Template, 38, 25, "div", 3);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.campaignGroup() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showConfirmPopup() ? 2 : -1);
        } }, dependencies: [CommonModule, i1.DatePipe, ApCampaignListComponent, ApButtonComponent, ApUiFramePopupComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventCampaignContentComponent, [{
        type: Component,
        args: [{ selector: 'event-campaign-content', standalone: true, imports: [CommonModule, ApCampaignListComponent, ApButtonComponent, ApUiFramePopupComponent], template: "<div class=\"relative bg-zinc-900 min-h-full sm:pb-8 pb-10 p-2\">\n  @if (campaignGroup()) {\n    <!-- Content Container -->\n    <div class=\"flex justify-center pt-6\">\n      <div\n        class=\"sticky w-full max-w-2xl rounded-xl flex flex-col border-[0.2rem] border-transparent overflow-hidden [background:linear-gradient(#27272A)_padding-box,linear-gradient(180deg,#FEFE7B,#D09600)_border-box] space-y-2\"\n      >\n        <!-- Banner Image -->\n        <div\n          class=\"relative w-full overflow-hidden\"\n          style=\"aspect-ratio: 670 / 223\"\n        >\n          <img [src]=\"groupImage()\" class=\"h-full w-full object-cover\" />\n        </div>\n        <!-- Title -->\n        <div class=\"flex flex-col gap-2 items-center justify-center\">\n          <div\n            class=\"font-anton text-center text-yellow-gradient text-4xl tracking-wide uppercase\"\n          >\n            {{ groupTitle() }}\n          </div>\n          <ap-button\n            [severity]=\"'warn'\"\n            [size]=\"'small'\"\n            [label]=\"jumpToRewardLabel()\"\n            [icon]=\"'arrow-down'\"\n            (click)=\"scrollToCampaignList()\"\n          />\n\n          <!-- Divider Line -->\n          <div class=\"w-[70%] divider-gradient-yellow mx-auto mt-2\"></div>\n          <!-- Description -->\n          <div class=\"w-full px-8 text-zinc-300\">\n            <div class=\"pb-2 text-md font-medium\">\n              {{ groupDescription() }}\n            </div>\n            <ul class=\"list-disc list list-inside space-y-2 text-sm text-left\">\n              @for (item of baseCampaigns()[0].items; track $index) {\n                <li>{{ item }}</li>\n              }\n            </ul>\n          </div>\n\n          <!-- Campaign List -->\n          <div class=\"flex-1 w-full px-4 pb-4 mt-4\" #campaignListSection>\n            <div\n              class=\"animate-fade-down animate-duration-500 animate-ease-out\"\n            >\n              @for (base of baseCampaigns(); track base.id) {\n                <ap-campaign-list\n                  [compaignData]=\"base\"\n                  [currency]=\"currencySymbol()\"\n                  (claim)=\"onClaim(base)\"\n                />\n              }\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n</div>\n\n@if (showConfirmPopup()) {\n  <div class=\"absolute inset-0 z-overlay grid place-items-center select-none\">\n    <div\n      class=\"absolute inset-0 bg-black/60 animate-fade animate-once animate-duration-200\"\n      (click)=\"closeConfirmPopup()\"\n    ></div>\n    <ap-ui-frame-popup\n      [header]=\"popupHeader()\"\n      [size]=\"'mobile'\"\n      [enableClose]=\"true\"\n      class=\"relative w-11/12 md:w-3/4 lg:w-1/2 animate-fade animate-once animate-duration-300\"\n      (close)=\"closeConfirmPopup()\"\n    >\n      <div class=\"px-6 pt-4 pb-2 text-zinc-300\">\n        <div class=\"mt-4 space-y-2 text-sm\">\n          <div class=\"flex justify-between gap-4\">\n            <span>{{ tipExpiryDateLabel() }}</span>\n            <span>{{\n              selectedCampaign()?.expiryDate | date: \"yyyy-MM-dd hh:mm\"\n            }}</span>\n          </div>\n          <div class=\"flex justify-between gap-4\">\n            <span>{{ tipTurnoverRequirementLabel() }}</span>\n            <span\n              >{{ currencySymbol() }}\n              {{ selectedCampaign()?.turnoverRequirement }}</span\n            >\n          </div>\n          <div class=\"flex justify-between gap-4\">\n            <span>{{ tipRemainingTurnoverLabel() }}</span>\n            <span\n              >{{ currencySymbol() }}\n              {{ selectedCampaign()?.remainingTurnover }}</span\n            >\n          </div>\n          <div class=\"flex justify-between gap-4\">\n            <span>{{ tipMaxWithdrawLabel() }}</span>\n            <span\n              >{{ currencySymbol() }}\n              {{ selectedCampaign()?.maxWithdraw }}</span\n            >\n          </div>\n          <div class=\"flex justify-between gap-4\">\n            <span>{{ tipMinWithdrawLabel() }}</span>\n            <span\n              >{{ currencySymbol() }}\n              {{ selectedCampaign()?.minWithdraw }}</span\n            >\n          </div>\n          <div class=\"flex justify-between gap-4\">\n            <span>{{ tipCampaignIdLabel() }}</span>\n            <span>{{ selectedCampaign()?.id }}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"flex items-center justify-center px-6 pb-6 pt-4\">\n        <ap-button\n          class=\"w-[40%]\"\n          [size]=\"'large'\"\n          [accentColor]=\"'yellow'\"\n          [label]=\"playNowLabel()\"\n          (clicked)=\"onPlayNow()\"\n        />\n      </div>\n    </ap-ui-frame-popup>\n  </div>\n}\n" }]
    }], null, { campaignListSection: [{
            type: ViewChild,
            args: ['campaignListSection']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventCampaignContentComponent, { className: "EventCampaignContentComponent", filePath: "src/app/pages/event-campaign-content/event-campaign-content.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=event-campaign-content.component.js.map