import { Component, computed, inject } from '@angular/core';
import { ApCampaignCardComponent } from '../../components/ap-campaign-card/ap-campaign-card.component';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { CommonModule } from '@angular/common';
import { CampaignCtrlService } from '../../services/campaign-ctrl/campaign-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { EventCampaignContentComponent } from "../event-campaign-content/event-campaign-content.component";
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function EventCampaignCardsComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-campaign-content");
} }
function EventCampaignCardsComponent_Conditional_1_For_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-campaign-card", 3);
    i0.ɵɵlistener("click", function EventCampaignCardsComponent_Conditional_1_For_3_Template_ap_campaign_card_click_0_listener() { const group_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onClickCard(group_r2.id)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("isNew", ctx_r2.checkNew(group_r2.id))("campaignGroup", group_r2);
} }
function EventCampaignCardsComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
    i0.ɵɵrepeaterCreate(2, EventCampaignCardsComponent_Conditional_1_For_3_Template, 1, 2, "ap-campaign-card", 2, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.campaignGroups());
} }
export class EventCampaignCardsComponent {
    /** Service injections */
    user = inject(UserProfileService);
    campaignCtrl = inject(CampaignCtrlService);
    api = inject(AppInterfaceService);
    eventCenter = inject(EventCenterCtrlService);
    storage = inject(StorageCtrlService);
    /** 最大記錄的點擊過的活動卡片數量 */
    maxRecordedClickedCards = 20;
    /** Campaign card data and events */
    campaignGroups = computed(() => this.campaignCtrl.campaignGroupList());
    showContent = computed(() => { return this.eventCenter.subPath() !== ''; });
    userId = computed(() => this.api.loginResultNote()?.nickname ?? '');
    onClickCard(groupId) {
        // 記錄點擊過的活動卡片, 點擊過的不會重複紀錄 (同時包含userId是為了區分不同使用者的點擊紀錄，避免同一個活動卡片被不同使用者點擊後互相影響)
        const key = `${this.userId()}_${groupId}`;
        if (!(this.storage.campaignGroupsClicked || []).includes(key)) {
            this.storage.campaignGroupsClicked = [...(this.storage.campaignGroupsClicked || []), key];
        }
        // 只保留最近的maxRecordedClickedCards筆點擊紀錄，避免storage佔用過多空間
        if ((this.storage.campaignGroupsClicked || []).length > this.maxRecordedClickedCards) {
            this.storage.campaignGroupsClicked = (this.storage.campaignGroupsClicked || []).slice(-this.maxRecordedClickedCards);
        }
        this.eventCenter.open(`campaign/${groupId}`);
    }
    checkNew(groupId) {
        const key = `${this.userId()}_${groupId}`;
        return !(this.storage.campaignGroupsClicked || []).includes(key);
    }
    static ɵfac = function EventCampaignCardsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventCampaignCardsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventCampaignCardsComponent, selectors: [["event-campaign-cards"]], decls: 2, vars: 1, consts: [[1, "min-h-full", "bg-zinc-900", "sm:pt-6", "pt-4", "animate-fade-down", "animate-duration-500"], [1, "flex", "flex-wrap", "justify-center", "p-6", "gap-8", "sm:space-y-8"], [1, "hover:scale-102", "duration-300", 3, "isNew", "campaignGroup"], [1, "hover:scale-102", "duration-300", 3, "click", "isNew", "campaignGroup"]], template: function EventCampaignCardsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, EventCampaignCardsComponent_Conditional_0_Template, 1, 0, "event-campaign-content")(1, EventCampaignCardsComponent_Conditional_1_Template, 4, 0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showContent() ? 0 : 1);
        } }, dependencies: [ApCampaignCardComponent, CommonModule, EventCampaignContentComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventCampaignCardsComponent, [{
        type: Component,
        args: [{ selector: 'event-campaign-cards', imports: [ApCampaignCardComponent, CommonModule, EventCampaignContentComponent], template: "@if (showContent()) {\n  <event-campaign-content />\n} @else {\n  <div class=\"min-h-full bg-zinc-900 sm:pt-6 pt-4 animate-fade-down animate-duration-500\">\n    <div class=\"flex flex-wrap justify-center p-6 gap-8 sm:space-y-8\">\n      @for (group of campaignGroups(); track  group.id) {\n        <ap-campaign-card\n          class=\"hover:scale-102 duration-300\"\n          [isNew]=\"checkNew(group.id)\"\n          [campaignGroup]=\"group\"\n          (click)=\"onClickCard(group.id)\"\n        ></ap-campaign-card>\n      }\n    </div>\n  </div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventCampaignCardsComponent, { className: "EventCampaignCardsComponent", filePath: "src/app/pages/event-campaign-cards/event-campaign-cards.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=event-campaign-cards.component.js.map