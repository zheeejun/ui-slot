import { Component, signal, inject, computed, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';
import { EventCampaignCardsComponent } from '../event-campaign-cards/event-campaign-cards.component';
import { EventBuyFeatureComponent } from '../event-buy-feature/event-buy-feature.component';
import { EventCashdropComponent } from '../event-cashdrop/event-cashdrop.component';
import { EventPromoCodeComponent } from '../event-promocode/event-promocode.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApUiFramePageComponent } from '../../components/ap-ui-frame-page/ap-ui-frame-page.component';
import { EventTrnComponent } from "../event-trn/event-trn.component";
import { EventLeaderBoardComponent } from '../event-leader-board/event-leader-board.component';
import { ApTabMenu4Component, } from '../../../ap-components-lib/ap-tab-menu-4/ap-tab-menu-4.component';
import { LoggerService } from '../../services/logger/logger.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { createApWebMessage } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebMessages';
import { CampaignCtrlService } from '../../services/campaign-ctrl/campaign-ctrl.service';
import { CashDropService } from '../../services/cash-drop/cash-drop.service';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { ApMenuBreadcrumb } from "../../../ap-components-lib/ap-menu-breadcrumb/ap-menu-breadcrumb";
import * as i0 from "@angular/core";
function EventCenterComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-buy-feature", 5);
    i0.ɵɵlistener("closeAll", function EventCenterComponent_Conditional_4_Template_event_buy_feature_closeAll_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClickClose()); });
    i0.ɵɵelementEnd();
} }
function EventCenterComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-campaign-cards");
} }
function EventCenterComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-cashdrop");
} }
function EventCenterComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-trn", 6);
    i0.ɵɵlistener("onClose", function EventCenterComponent_Conditional_7_Template_event_trn_onClose_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClickClose()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("path", ctx_r1.subPath());
} }
function EventCenterComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-promocode");
} }
function EventCenterComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-leader-board");
} }
function EventCenterComponent_Conditional_10_Template(rf, ctx) { }
export class EventCenterComponent {
    api = inject(AppInterfaceService);
    appI18n = inject(AppI18nService);
    logger = inject(LoggerService);
    loginCtrl = inject(LoginCtrlService);
    eventCenter = inject(EventCenterCtrlService);
    trn = inject(TrnCtrlService);
    campaignCtrl = inject(CampaignCtrlService);
    user = inject(UserProfileService);
    cashDrop = inject(CashDropService);
    gameIframe = inject(GameIframeCtrlService);
    destroyRef = inject(DestroyRef);
    isVisible = computed(() => this.eventCenter.isVisible());
    CampaignNoteType = signal('freeBonus');
    activedTab = computed(() => { return this.eventCenter.path(); });
    subPath = computed(() => { return this.eventCenter.subPath(); });
    isBack = computed(() => this.subPath() !== '');
    activeTabLabel = computed(() => {
        const tab = this.tabs().find(t => t.id === this.activedTab());
        return tab?.label ?? this.activedTab();
    });
    gameBreadcrumbLabel = this.appI18n.computed(this.loginCtrl.gameId ?? '', this.loginCtrl.gameId ?? 'Game');
    breadcrumbs = computed(() => {
        const items = [
            {
                label: this.gameBreadcrumbLabel(),
                onClick: () => this.onClickClose(),
            },
        ];
        if (this.subPath()) {
            items.push({
                label: this.activeTabLabel(),
                onClick: () => this.eventCenter.open(this.activedTab()),
            });
            items.push({
                label: this.detailName(),
            });
            return items;
        }
        items.push({
            label: this.activeTabLabel(),
        });
        return items;
    });
    trnLabel = this.appI18n.computed('Tournament_EventCenter_Tab', 'Event Center');
    detailTrn = computed(() => {
        const id = this.subPath();
        if (!id)
            return null;
        return this.trn.trnList().find(t => t.id === id) ?? null;
    });
    detailName = computed(() => {
        const tab = this.activedTab();
        const id = this.subPath();
        if (!id)
            return '';
        if (tab === 'tournament')
            return this.detailTrn()?.name ?? id;
        if (tab === 'campaign')
            return this.campaignCtrl.campaignGroupList().find(g => g.id === id)?.title ?? id;
        return id;
    });
    buyFeatureTab = computed(() => ({ id: 'buy-feature', label: this.appI18n.instant('BuyFeature_EventCenter_Tab', 'Buy Feature'), icon: 'ticket', hasBadge: false }));
    trnTab = computed(() => ({ id: 'tournament', label: this.appI18n.instant('Tournament_EventCenter_Tab', 'Tournament'), icon: 'trophy', hasBadge: false, disabled: this.trn.trnList().length === 0 }));
    campaignTab = computed(() => ({
        id: 'campaign', label: this.appI18n.instant('Campaign_EventCenter_Tab', 'Campaign'), icon: 'gift',
        hasBadge: this.campaignCtrl.haveNewGroup()
    }));
    cashDropTab = computed(() => ({ id: 'cash-drop', label: this.appI18n.instant('cashdrop_D1_1', 'Cash Drop'), icon: 'two-coins', hasBadge: false }));
    promoCodeTab = computed(() => ({ id: 'promo-code', label: this.appI18n.instant('coupon_lower', 'Coupon'), icon: 'star', hasBadge: false }));
    leaderBoardTab = computed(() => ({ id: 'leader-board', label: this.appI18n.instant('LeaderBoard_EventCenter_Tab', 'Leader Board'), icon: 'ranking', hasBadge: false }));
    rewardSystemTab = computed(() => ({ id: 'reward-system', label: this.appI18n.instant('RewardSystem_EventCenter_Tab', 'Reward System'), icon: 'crown', hasBadge: false }));
    ngOnInit() {
    }
    tabs = computed(() => {
        const tabs = [];
        const isOffline = this.loginCtrl.offline;
        const note = this.api.loginResult()?.note;
        // offline 模式顯示全部分頁, 其餘有各自的顯示條件
        // Buy Feature 是否顯示
        if (isOffline || !this.user.noBuyFeatureOrChanceMode()) {
            tabs.push(this.buyFeatureTab());
        }
        ;
        // Tournament 是否顯示
        if (isOffline || this.trn.showTab()) {
            tabs.push(this.trnTab());
        }
        // Campaign 是否顯示
        if (isOffline || this.campaignCtrl.showTab()) {
            tabs.push(this.campaignTab());
        }
        // Cash Drop 是否顯示
        if (isOffline || this.cashDrop.showTab()) {
            tabs.push(this.cashDropTab());
        }
        // Promo Code 是否顯示
        if (isOffline || (note?.coupon ?? 0) > 0) {
            tabs.push(this.promoCodeTab());
        }
        // Leader Board 是否顯示
        if (isOffline || (Number(note?.leader_board ?? 0) > 0)) {
            tabs.push(this.leaderBoardTab());
        }
        // Reward System 是否顯示
        if (isOffline || (note?.rewardsystem ?? false)) {
            tabs.push(this.rewardSystemTab());
        }
        return tabs;
    });
    changeTab(tab) {
        // 如果點擊 reward-system tab，開啟獎勵系統並關閉 event center
        if (tab === 'reward-system') {
            this.openRewardSystem();
            return;
        }
        this.eventCenter.open(tab);
    }
    /**
     * 開啟獎勵系統
     * 1. 對 GameIframeCtrlService 送出 OpenRewardSystem, true 的 Message
     * 2. 關閉 event center UI
     */
    openRewardSystem() {
        // 發送訊息到遊戲 iframe 開啟獎勵系統
        this.gameIframe.send(createApWebMessage('OpenRewardSystem', { enabled: true }));
        // 慢1~2禎後(防止閃一下)關閉 event center 
        timer(30).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
            this.eventCenter.close();
        });
    }
    onClickBack() {
        this.eventCenter.back();
    }
    onClickClose() {
        this.eventCenter.close();
    }
    static ɵfac = function EventCenterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventCenterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventCenterComponent, selectors: [["event-center"]], decls: 11, vars: 9, consts: [[1, "fixed", "inset-0", 3, "close", "back", "header", "enableBack"], [3, "tabChange", "tabs", "justify", "selectedTab", "color", "accentColor"], [1, "absolute", "-top-2", "left-0", 3, "items"], [1, "h-[calc(100%-4.5rem)]", "overflow-y-auto", "pt-0"], [3, "path"], [3, "closeAll"], [3, "onClose", "path"]], template: function EventCenterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ap-ui-frame-page", 0);
            i0.ɵɵlistener("close", function EventCenterComponent_Template_ap_ui_frame_page_close_0_listener() { return ctx.onClickClose(); })("back", function EventCenterComponent_Template_ap_ui_frame_page_back_0_listener() { return ctx.onClickBack(); });
            i0.ɵɵelementStart(1, "ap-tab-menu-4", 1);
            i0.ɵɵlistener("tabChange", function EventCenterComponent_Template_ap_tab_menu_4_tabChange_1_listener($event) { return ctx.changeTab($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "ap-menu-breadcrumb", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵconditionalCreate(4, EventCenterComponent_Conditional_4_Template, 1, 0, "event-buy-feature")(5, EventCenterComponent_Conditional_5_Template, 1, 0, "event-campaign-cards")(6, EventCenterComponent_Conditional_6_Template, 1, 0, "event-cashdrop")(7, EventCenterComponent_Conditional_7_Template, 1, 1, "event-trn", 4)(8, EventCenterComponent_Conditional_8_Template, 1, 0, "event-promocode")(9, EventCenterComponent_Conditional_9_Template, 1, 0, "event-leader-board")(10, EventCenterComponent_Conditional_10_Template, 0, 0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("header", ctx.activeTabLabel())("enableBack", ctx.isBack());
            i0.ɵɵadvance();
            i0.ɵɵproperty("tabs", ctx.tabs())("justify", "center")("selectedTab", ctx.activedTab())("color", "zinc")("accentColor", "yellow");
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.breadcrumbs());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.activedTab() === "buy-feature" ? 4 : ctx.activedTab() === "campaign" ? 5 : ctx.activedTab() === "cash-drop" ? 6 : ctx.activedTab() === "tournament" ? 7 : ctx.activedTab() === "promo-code" ? 8 : ctx.activedTab() === "leader-board" ? 9 : ctx.activedTab() === "reward-system" ? 10 : -1);
        } }, dependencies: [ApUiFramePageComponent, EventBuyFeatureComponent, EventCashdropComponent, EventPromoCodeComponent, EventTrnComponent, EventLeaderBoardComponent, ApTabMenu4Component,
            EventCampaignCardsComponent, ApMenuBreadcrumb], styles: ["[_nghost-%COMP%]{\n  display: block;\n}\n\n.scrollbar-hide[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.scrollbar-hide[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  scroll-snap-type: x proximity;\n  -webkit-overflow-scrolling: touch;\n}\n\n.tab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n}\n\n.grabbing[_ngcontent-%COMP%] { cursor: grabbing !important; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventCenterComponent, [{
        type: Component,
        args: [{ selector: 'event-center', standalone: true, imports: [
                    ApUiFramePageComponent, EventBuyFeatureComponent, EventCashdropComponent, EventPromoCodeComponent, EventTrnComponent, EventLeaderBoardComponent, ApTabMenu4Component,
                    EventCampaignCardsComponent, ApMenuBreadcrumb
                ], template: "\n<ap-ui-frame-page\n  class=\"fixed inset-0\"\n  [header]=\"activeTabLabel()\"\n  (close)=\"onClickClose()\"\n  [enableBack]=\"isBack()\"\n  (back)=\"onClickBack()\"\n>\n  <ap-tab-menu-4\n    [tabs]=\"tabs()\"\n    [justify]=\"'center'\"\n    [selectedTab]=\"activedTab()\"\n    [color]=\"'zinc'\"\n    [accentColor]=\"'yellow'\"\n    (tabChange)=\"changeTab($event)\"\n  />\n  <ap-menu-breadcrumb class=\"absolute -top-2 left-0\" [items]=\"breadcrumbs()\" />\n  <!--\n   <nav class=\"absolute top-0 left-0 flex items-center gap-2 text-sm px-2 py-1\">\n    <span\n      class=\"text-zinc-400 cursor-pointer hover:text-yellow-400 transition-colors duration-200\"\n      (click)=\"onClickClose()\"\n    >Game</span>\n    <span class=\"text-zinc-600\">></span>\n    @if (subPath()) {\n      <span\n        class=\"text-zinc-400 cursor-pointer hover:text-yellow-400 transition-colors duration-200\"\n        (click)=\"eventCenter.open(activedTab())\"\n      >{{ activeTabLabel() }}</span>\n      <span class=\"text-zinc-600\">></span>\n      <span class=\"text-zinc-500 truncate\">{{ detailName() }}</span>\n    } @else {\n      <span class=\"text-zinc-500 truncate\">{{ activeTabLabel() }}</span>\n    }\n  </nav>-->\n\n  <div class=\"h-[calc(100%-4.5rem)] overflow-y-auto pt-0\">\n    @if (activedTab() === \"buy-feature\") {\n      <event-buy-feature\n        (closeAll)=\"onClickClose()\"\n      />\n    } @else if (activedTab() === \"campaign\") {\n      <event-campaign-cards></event-campaign-cards>\n    } @else if (activedTab() === \"cash-drop\") {\n      <event-cashdrop />\n    } @else if (activedTab() === \"tournament\") {\n      <event-trn\n        [path]=\"subPath()\"\n        (onClose)=\"onClickClose()\"\n      />\n    } @else if (activedTab() === \"promo-code\") {\n      <event-promocode />\n    } @else if (activedTab() === \"leader-board\") {\n      <event-leader-board />\n    } @else if (activedTab() === \"reward-system\") {\n    }\n  </div>\n</ap-ui-frame-page>\n\n", styles: [":host{\n  display: block;\n}\n\n.scrollbar-hide {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.scrollbar-hide::-webkit-scrollbar {\n  display: none;\n}\n\n.tab-container {\n  scroll-snap-type: x proximity;\n  -webkit-overflow-scrolling: touch;\n}\n\n.tab-container > div {\n  scroll-snap-align: start;\n}\n\n.grabbing { cursor: grabbing !important; }"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventCenterComponent, { className: "EventCenterComponent", filePath: "src/app/pages/event-center/event-center.component.ts", lineNumber: 38 }); })();
//# sourceMappingURL=event-center.component.js.map