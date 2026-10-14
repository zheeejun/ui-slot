import { Component, output, signal, inject, computed, ViewChild } from '@angular/core';
import { ApBfCardBetControlComponent } from '../../components/ap-bf-card-bet-control/ap-bf-card-bet-control.component';
import { ApBfCardFeatureComponent } from '../../components/ap-bf-card-feature/ap-bf-card-feature.component';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { checkValidUrl } from '../../services/app-interface/app-interface.function';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { CommonModule } from '@angular/common';
import { ApBfPopupConfirmFeatureComponent } from '../../components/ap-bf-popup-confirm-feature/ap-bf-popup-confirm-feature.component';
import { ApBfPopupConfirmChanceComponent } from '../../components/ap-bf-popup-confirm-chance/ap-bf-popup-confirm-chance.component';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { createApWebMessage } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebMessages';
import { HistoryReplayService } from '../../services/history-replay/history-replay.service';
import { HistoryReplayViewerComponent } from '../history-replay-viewer/history-replay-viewer.component';
import { ApBfCardChanceComponent } from '../../components/ap-bf-card-chance/ap-bf-card-chance.component';
import { ApBfPopupPlayDemoConfirmComponent } from '../../components/ap-bf-popup-play-demo-confirm/ap-bf-popup-play-demo-confirm.component';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import * as i0 from "@angular/core";
function EventBuyFeatureComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-loading-overlay");
} }
function EventBuyFeatureComponent_Conditional_6_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-bf-card-chance", 11);
    i0.ɵɵlistener("activate", function EventBuyFeatureComponent_Conditional_6_For_1_Template_ap_bf_card_chance_activate_0_listener() { const card_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openBuyChanceConfirm(card_r2)); })("deactivate", function EventBuyFeatureComponent_Conditional_6_For_1_Template_ap_bf_card_chance_deactivate_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.stopByChance()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("animate-fade-down animate-duration-500 animate-delay-", card_r2.order));
    i0.ɵɵproperty("title", card_r2.title)("image", card_r2.image)("content", card_r2.content)("unitText", card_r2.unitText)("activatedText", card_r2.activatedText)("deactivatedText", card_r2.deactivatedText)("currency", card_r2.currency)("price", card_r2.rate * ctx_r2.user.bet())("disabled", card_r2.rate * ctx_r2.user.bet() > ctx_r2.user.balance() || ctx_r2.isCampaignActive())("activated", ctx_r2.user.spinMode() === card_r2.mode);
} }
function EventBuyFeatureComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, EventBuyFeatureComponent_Conditional_6_For_1_Template, 1, 13, "ap-bf-card-chance", 10, i0.ɵɵrepeaterTrackByIndex);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.buyChanceCards());
} }
function EventBuyFeatureComponent_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-bf-card-feature", 12);
    i0.ɵɵlistener("buttonClick", function EventBuyFeatureComponent_For_8_Template_ap_bf_card_feature_buttonClick_0_listener() { const card_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openBuyFeatureConfirm(card_r5)); })("playDemo", function EventBuyFeatureComponent_For_8_Template_ap_bf_card_feature_playDemo_0_listener() { const $index_r6 = i0.ɵɵrestoreView(_r4).$index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openPlayDemoConfirm($index_r6)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("animate-fade-down animate-duration-500 animate-delay-", card_r5.order));
    i0.ɵɵproperty("image", card_r5.image)("title", card_r5.title)("content", card_r5.content)("currency", card_r5.currency)("getPlayDemoLabel", ctx_r2.getPlayDemoLabel())("price", card_r5.rate * ctx_r2.user.bet())("buttonText", card_r5.buttonText)("disabled", card_r5.rate * ctx_r2.user.bet() > ctx_r2.user.balance() || ctx_r2.user.isDoubleChance() || ctx_r2.isCampaignActive());
} }
function EventBuyFeatureComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ap-icon", 13);
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.hintLabel(), " ");
} }
function EventBuyFeatureComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-bf-popup-confirm-feature", 15);
    i0.ɵɵlistener("close", function EventBuyFeatureComponent_Conditional_10_Template_ap_bf_popup_confirm_feature_close_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeBuyFeatureConfirm()); })("confirm", function EventBuyFeatureComponent_Conditional_10_Template_ap_bf_popup_confirm_feature_confirm_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.startBuyFeature()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("header", ctx_r2.getConfirmHeaderText())("description", ctx_r2.getFeatureConfirmDescription())("confirmText", ctx_r2.getConfirmButtonText())("cancelText", ctx_r2.getCancelButtonText())("image", ((tmp_5_0 = ctx_r2.confirmCard()) == null ? null : tmp_5_0.image) ?? ctx_r2.bfImageDefault)("currency", ((tmp_6_0 = ctx_r2.confirmCard()) == null ? null : tmp_6_0.currency) ?? "$")("price", (((tmp_7_0 = ctx_r2.confirmCard()) == null ? null : tmp_7_0.rate) ?? 0) * ctx_r2.user.bet());
} }
function EventBuyFeatureComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-bf-popup-confirm-chance", 15);
    i0.ɵɵlistener("close", function EventBuyFeatureComponent_Conditional_11_Template_ap_bf_popup_confirm_chance_close_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeBuyChanceConfirm()); })("confirm", function EventBuyFeatureComponent_Conditional_11_Template_ap_bf_popup_confirm_chance_confirm_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeAll.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("header", ctx_r2.getConfirmHeaderText())("description", ctx_r2.getChanceConfirmDescription())("confirmText", ctx_r2.getConfirmButtonText())("cancelText", ctx_r2.getCancelButtonText())("image", ((tmp_5_0 = ctx_r2.confirmCard()) == null ? null : tmp_5_0.image) ?? ctx_r2.bfImageDefault)("currency", ((tmp_6_0 = ctx_r2.confirmCard()) == null ? null : tmp_6_0.currency) ?? "$")("price", (((tmp_7_0 = ctx_r2.confirmCard()) == null ? null : tmp_7_0.rate) ?? 0) * ctx_r2.user.bet());
} }
function EventBuyFeatureComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-bf-popup-play-demo-confirm", 16);
    i0.ɵɵlistener("confirm", function EventBuyFeatureComponent_Conditional_12_Template_ap_bf_popup_play_demo_confirm_confirm_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDemoReplayConfirmRequest()); })("close", function EventBuyFeatureComponent_Conditional_12_Template_ap_bf_popup_play_demo_confirm_close_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDemoReplayCancel()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("header", ctx_r2.replayPopupLabel())("description", ctx_r2.replayPopupHint())("cancelText", ctx_r2.getCancelButtonText())("confirmText", ctx_r2.getConfirmButtonText());
} }
export class EventBuyFeatureComponent {
    user = inject(UserProfileService);
    game = inject(GameIframeCtrlService);
    api = inject(AppInterfaceService);
    login = inject(LoginCtrlService);
    appI18n = inject(AppI18nService);
    trn = inject(TrnCtrlService);
    bottom = inject(BottomPanelService);
    getFeatureLabel = this.appI18n.computed('buy_feature', 'Buy Feature');
    getConfirmHeaderText = this.appI18n.computed('message', 'Message');
    //* Feature 內文價格說明
    getFeatureConfirmDescription = computed(() => {
        const raw = this.appI18n.instant('buy_feature_check_message', 'Click Confirm to complete your purchase.');
        const price = ((this.confirmCard()?.rate ?? 0) * this.user.bet()).toFixed(2);
        const currency = this.confirmCard()?.currency ?? '$';
        return raw.replace('{0}', currency).replace('{1}', price).replace(/\n/g, '');
    });
    //* Double Chance 內文價格說明
    getChanceConfirmDescription = computed(() => {
        const raw = this.appI18n.instant('double_chance_check_message', 'Click Confirm to complete your purchase.');
        const price = ((this.confirmCard()?.rate ?? 0) * this.user.bet()).toFixed(2);
        const currency = this.confirmCard()?.currency ?? '$';
        return raw.replace('{0}', currency).replace('{1}', price).replace(/\n/g, '<br>');
    });
    getDemoConfirmDescription = this.appI18n.computed('PlayMessage_Info', 'Confirm to play demo?');
    getGameName = this.appI18n.computed(this.login.gameId ?? '', this.login.gameId ?? '');
    getBuyFeatureLabel = this.appI18n.computed('buy_feature', 'Buy Feature');
    getConfirmButtonText = this.appI18n.computed('replay_confirm', 'replay_confirm');
    getCancelButtonText = this.appI18n.computed('replay_cancel', 'replay_cancel');
    getPlayDemoLabel = this.appI18n.computed('buy_feature_demo_link', 'Feel the win!');
    showBuyFeatureConfirm = signal(false);
    showBuyChanceConfirm = signal(false);
    showPlayDemoConfirm = signal(false);
    showLoadingOverlay = signal(false);
    buyFeatureCards = signal([]);
    buyChanceCards = signal([]);
    confirmCard = signal(null);
    closeAll = output();
    playDemoDisabled = signal(true);
    bfImageDefault = '/assets/images/icons/img-feature.png';
    bcImageDefault = '/assets/images/icons/img-chance.png';
    showTrnHint = computed(() => { return this.trn.betDataTrn() !== null; });
    hintLabel = this.appI18n.computed('BuyFeature_TournamentTip', 'Costs Increased.');
    historyReplayService = inject(HistoryReplayService);
    isCampaignActive = computed(() => this.user.campaignSetting() !== null);
    // Replay viewer 相關
    replayViewerComponent;
    isPlayDemo = signal(false);
    selectedDemoIndex = signal(0);
    replayPopupLabel = this.appI18n.computed('replay_message_title', 'MESSAGE');
    replayPopupHint = this.appI18n.computed('replay_demo_ticket_info', 'Feature Preview. For display purposes only. This will not impact your balance or  gameplay.');
    demoGameName = signal('');
    constructor() { }
    ngOnInit() {
        // 關閉確認視窗
        this.showBuyFeatureConfirm.set(false);
        this.showLoadingOverlay.set(false); // 關閉讀取畫面
        this.playDemoDisabled.set(true);
    }
    async ngAfterViewInit() {
        // 初始化Play Demo按鈕狀態
        this.checkPlayDemoResult();
        const bfCards = [];
        let order = 0;
        for (const mode of this.user.buyFeatureModes()) {
            const bfImg = await this.getImgPath(mode.name ?? '');
            const bfCard = {
                mode: mode.name,
                // 使用順序 1.info的bfx 2.使用S1 3.預設圖
                image: bfImg ?? this.api.getSymbolTexture('S1') ?? this.bfImageDefault,
                // 使用順序 1.遊戲string 2.通用string 3.固定string
                title: this.appI18n.gameStr(`${mode.name}_title`) ??
                    this.appI18n.instant('bf_title', 'FREE GAME'),
                // 使用順序 1.遊戲string 2.通用string 3.固定string
                content: this.appI18n.gameStr(`${mode.name}_content`) ??
                    this.appI18n.instant('buy_feature_buy_feature', 'Trigger the FREE GAME, win big rewards!'),
                currency: this.user.currencySymbol(),
                rate: mode.rate,
                buttonText: this.appI18n.instant('buy_feature_buy', 'Buy Feature'),
                order: order++,
            };
            bfCards.push(bfCard);
        }
        this.buyFeatureCards.set(bfCards);
        // 展示Buy Chance卡片
        const dcCards = [];
        for (const mode of this.user.buyChanceModes()) {
            //const bcImg = await this.getImgPath(mode.name ?? "");
            const dcCard = {
                mode: mode.name,
                // 使用順序 1.info的bcx 2.預設圖
                image: this.bcImageDefault,
                // 使用順序 1.遊戲string 2.通用string 3.固定string
                title: this.appI18n.gameStr(`${mode.name}_title`) ??
                    this.appI18n.instant('dc_title', 'DOUBLE CHANCE'),
                // 使用順序 1.遊戲string 2.通用string 3.固定string
                content: this.appI18n.gameStr(`${mode.name}_content`) ??
                    this.appI18n.instant('buy_feature_double_chance', 'Boost the odds of entering FREE GAME with each spin!'),
                currency: this.user.currencySymbol(),
                rate: mode.rate,
                unitText: this.appI18n.instant('history_round', 'Round'),
                activatedText: this.appI18n.instant('buy_feature_on', 'ACTIVATED'),
                deactivatedText: this.appI18n.instant('buy_feature_off', 'DEACTIVATED'),
                order: order++,
            };
            dcCards.push(dcCard);
        }
        this.buyChanceCards.set(dcCards);
        // Card展示完成, 關掉Loading
        this.showLoadingOverlay.set(false);
    }
    openBuyFeatureConfirm(card) {
        this.confirmCard.set(card);
        this.showBuyFeatureConfirm.set(true);
    }
    openPlayDemoConfirm(index) {
        this.selectedDemoIndex.set(index);
        this.isPlayDemo.set(true);
    }
    closeBuyFeatureConfirm() {
        this.showBuyFeatureConfirm.set(false);
        this.confirmCard.set(null);
    }
    closePlayDemoConfirm() {
        this.showPlayDemoConfirm.set(false);
    }
    startBuyFeature() {
        // 開始Buy Feature
        this.user.updateSpinMode(this.confirmCard()?.mode ?? 'bf');
        this.bottom.spin();
        // 清除確認視窗
        this.showBuyFeatureConfirm.set(false);
        this.confirmCard.set(null);
        this.closeAll.emit();
    }
    openBuyChanceConfirm(card) {
        this.confirmCard.set(card);
        this.showBuyChanceConfirm.set(true);
        this.startBuyChance(card);
    }
    closeBuyChanceConfirm() {
        this.showBuyChanceConfirm.set(false);
        this.confirmCard.set(null);
        this.stopByChance();
    }
    startBuyChance(card) {
        // 切換成Buy Chance模式
        this.user.updateSpinMode(card.mode ?? 'dc');
    }
    stopByChance() {
        // 關閉Buy Chance模式
        this.user.updateSpinMode(null);
    }
    onChangeBet(betData) {
        this.user.updateBet(betData.bet ?? this.user.bet());
    }
    /**
     * 開啟 Play Demo 確認對話框
     */
    startPlayDemoInIframe() {
        this.isPlayDemo.set(true);
    }
    /**
     * 處理 Replay 確認請求 - 生成並載入 Demo URL
     */
    async onDemoReplayConfirmRequest() {
        // 關閉確認對話框
        this.isPlayDemo.set(false);
        // 從 loginResult 取得 pid, brand, site
        const note = this.api.loginResult()?.note;
        const pid = note?.pid ?? '';
        const brand = note?.brand ?? '';
        const site = note?.site ?? '';
        const gameId = this.login.gameId ?? '';
        // 使用 AppI18nService 獲取遊戲名稱
        const gameName = this.appI18n.instant(gameId, gameId);
        this.demoGameName.set(gameName);
        // 取得 Buy Feature Demo 的 URL，使用選中的按鈕索引
        let demoUrl = this.historyReplayService.GetBuyFeatureDemoAddress(this.selectedDemoIndex(), gameId, pid, brand, site);
        // 呼叫子組件載入 URL
        if (this.replayViewerComponent) {
            this.replayViewerComponent.loadReplayUrl(demoUrl, this.login.isUseInGameUI());
        }
    }
    /**
     * 取消 Replay
     */
    onDemoReplayCancel() {
        this.isPlayDemo.set(false);
        //this.closeAll.emit();
    }
    /**
     * 關閉 Replay
     */
    onDemoReplayClose() {
        this.isPlayDemo.set(false);
        this.closeAll.emit();
    }
    /**
     * 在遊戲內播放 Demo（舊方法）
     * @deprecated 此方法已棄用，請使用 startPlayDemoInIframe()
     */
    startPlayDemoInGame() {
        this.showPlayDemoConfirm.set(false);
        this.closeAll.emit();
        // 把UI換成隱藏(米字號)
        this.game.send(createApWebMessage('SlotSpinLogicDisplay', {
            balance: 'hide',
            bet: 'hide',
            win: 'hide',
        }));
        // 先暫時使用Buy Feature模式來進行Demo
        this.user.updateSpinMode(this.user.buyFeatureModes()[0]?.name ?? 'bf');
        this.game.send(createApWebMessage('ClickSpin', { betData: this.user.betData() }));
        this.user.sendSpinRequest();
        // 恢復UI顯示
        const sub = this.game.readyForSpin$.subscribe(() => {
            this.game.send(createApWebMessage('SlotSpinLogicDisplay', {
                balance: 'normal',
                bet: 'normal',
                win: 'normal',
            }));
            sub.unsubscribe();
        });
    }
    //* 根據遊戲ID和語言獲取對應的圖片URL，並檢查URL是否有效
    getGameImage() {
        const gameId = this.login.gameId ?? '10087';
        const language = this.login.language ?? 'en';
        const imageLanguage = language === 'cn' ? 'cn' : 'en';
        const baseUrl = (this.login.assetUrl ?? 'https://dev.diresoft.net').replace(/\/+$/, '');
        return (this.appI18n.instant('game_image') ||
            `${baseUrl}/icon/${gameId}/112x112/icon_${gameId}_112x112_bkg_${imageLanguage}.jpg`);
    }
    async getImgPath(target) {
        const url = `/system/Info/${this.login.gameId}/${this.login.language}/${target}.png`;
        if (await checkValidUrl(url)) {
            return Promise.resolve(url);
        }
        return Promise.resolve(null);
    }
    async checkPlayDemoResult() {
        const url = `/History/${this.login.gameId}_0.json`;
        if (await checkValidUrl(url)) {
            this.playDemoDisabled.set(false);
        }
    }
    static ɵfac = function EventBuyFeatureComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventBuyFeatureComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventBuyFeatureComponent, selectors: [["event-buy-feature"]], viewQuery: function EventBuyFeatureComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(HistoryReplayViewerComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.replayViewerComponent = _t.first);
        } }, outputs: { closeAll: "closeAll" }, decls: 14, vars: 13, consts: [[1, "flex", "flex-wrap", "bg-zinc-900", "justify-center", "items-start", "pb-8", "pt-6", "min-h-full"], [1, "relative", "w-full"], [1, "flex", "justify-center", "items-center", "p-4"], [3, "increase", "decrease", "bet", "isMax", "isMin", "currencySymbol"], [1, "flex", "flex-wrap", "justify-center", "items-start", "p-6", "gap-4", "space-y-8"], [3, "image", "title", "content", "currency", "getPlayDemoLabel", "price", "buttonText", "disabled", "class"], [1, "absolute", "bottom-0", "left-0", "right-0", "bg-zinc-950/90", "px-3", "py-2", "flex", "items-center", "justify-center", "gap-1"], [1, "absolute", "inset-0", 3, "header", "description", "confirmText", "cancelText", "image", "currency", "price"], [1, "absolute", "inset-0", 3, "header", "description", "cancelText", "confirmText"], [3, "close", "showConfirmDialog", "showWatchAgain", "showCopyLink", "gameName"], [3, "title", "image", "content", "unitText", "activatedText", "deactivatedText", "currency", "price", "disabled", "activated", "class"], [3, "activate", "deactivate", "title", "image", "content", "unitText", "activatedText", "deactivatedText", "currency", "price", "disabled", "activated"], [3, "buttonClick", "playDemo", "image", "title", "content", "currency", "getPlayDemoLabel", "price", "buttonText", "disabled"], ["name", "exclamation-circle", 1, "size-5", "text-red-500"], [1, "text-red-500", "font-bold", "text-sm"], [1, "absolute", "inset-0", 3, "close", "confirm", "header", "description", "confirmText", "cancelText", "image", "currency", "price"], [1, "absolute", "inset-0", 3, "confirm", "close", "header", "description", "cancelText", "confirmText"]], template: function EventBuyFeatureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ap-bf-card-bet-control", 3);
            i0.ɵɵlistener("increase", function EventBuyFeatureComponent_Template_ap_bf_card_bet_control_increase_3_listener() { return ctx.user.increaseBet(); })("decrease", function EventBuyFeatureComponent_Template_ap_bf_card_bet_control_decrease_3_listener() { return ctx.user.decreaseBet(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵconditionalCreate(5, EventBuyFeatureComponent_Conditional_5_Template, 1, 0, "ap-loading-overlay")(6, EventBuyFeatureComponent_Conditional_6_Template, 2, 0);
            i0.ɵɵrepeaterCreate(7, EventBuyFeatureComponent_For_8_Template, 1, 11, "ap-bf-card-feature", 5, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(9, EventBuyFeatureComponent_Conditional_9_Template, 4, 1, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(10, EventBuyFeatureComponent_Conditional_10_Template, 1, 7, "ap-bf-popup-confirm-feature", 7);
            i0.ɵɵconditionalCreate(11, EventBuyFeatureComponent_Conditional_11_Template, 1, 7, "ap-bf-popup-confirm-chance", 7);
            i0.ɵɵconditionalCreate(12, EventBuyFeatureComponent_Conditional_12_Template, 1, 4, "ap-bf-popup-play-demo-confirm", 8);
            i0.ɵɵelementStart(13, "history-replay-viewer", 9);
            i0.ɵɵlistener("close", function EventBuyFeatureComponent_Template_history_replay_viewer_close_13_listener() { return ctx.onDemoReplayClose(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("bet", ctx.user.displayBet())("isMax", ctx.user.isBetMax())("isMin", ctx.user.isBetMin())("currencySymbol", ctx.user.currencySymbol());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showLoadingOverlay() ? 5 : 6);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.buyFeatureCards());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showTrnHint() ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showBuyFeatureConfirm() ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showBuyChanceConfirm() ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isPlayDemo() ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("showConfirmDialog", false)("showWatchAgain", true)("showCopyLink", false)("gameName", ctx.demoGameName());
        } }, dependencies: [CommonModule, ApBfCardBetControlComponent, ApBfCardChanceComponent, ApBfCardFeatureComponent, ApBfPopupConfirmFeatureComponent, ApBfPopupConfirmChanceComponent, ApLoadingOverlayComponent, ApIconComponent, HistoryReplayViewerComponent, ApBfPopupPlayDemoConfirmComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventBuyFeatureComponent, [{
        type: Component,
        args: [{ selector: 'event-buy-feature', imports: [CommonModule, ApBfCardBetControlComponent, ApBfCardChanceComponent, ApBfCardFeatureComponent, ApBfPopupConfirmFeatureComponent, ApBfPopupConfirmChanceComponent, ApLoadingOverlayComponent, ApIconComponent, HistoryReplayViewerComponent, ApBfPopupPlayDemoConfirmComponent], template: "<div\n  class=\"flex flex-wrap bg-zinc-900 justify-center items-start pb-8 pt-6 min-h-full\"\n>\n  <div class=\"relative w-full\">\n    <!-- Play demo -->\n    <!--\n    <div class=\"flex justify-center items-center\">\n      <ap-bf-card-play-demo\n        [image]=\"getGameImage()\"\n        (playDemo)=\"openPlayDemoConfirm($event)\"\n        [disabled]=\"playDemoDisabled()\"\n        [title]=\"getGameName()\"\n        [buttonText]=\"getDemoButtonText()\"\n      />\n    </div>-->\n\n    <!-- Bet Amount -->\n    <div class=\"flex justify-center items-center p-4\">\n      <ap-bf-card-bet-control\n        [bet]=\"user.displayBet()\"\n        [isMax]=\"user.isBetMax()\"\n        [isMin]=\"user.isBetMin()\"\n        [currencySymbol]=\"user.currencySymbol()\"\n        (increase)=\"user.increaseBet()\"\n        (decrease)=\"user.decreaseBet()\"\n      />\n    </div>\n  </div>\n  <div class=\"flex flex-wrap justify-center items-start p-6 gap-4 space-y-8\">\n    @if (showLoadingOverlay()) {\n      <ap-loading-overlay />\n    } @else {\n      <!-- Buy Chance Cards -->\n      @for (card of buyChanceCards(); track $index) {\n        <ap-bf-card-chance\n          (activate)=\"openBuyChanceConfirm(card)\"\n          (deactivate)=\"stopByChance()\"\n          [title]=\"card.title\"\n          [image]=\"card.image\"\n          [content]=\"card.content\"\n          [unitText]=\"card.unitText!\"\n          [activatedText]=\"card.activatedText!\"\n          [deactivatedText]=\"card.deactivatedText!\"\n          [currency]=\"card.currency\"\n          [price]=\"card.rate * this.user.bet()\"\n          [disabled]=\"card.rate * this.user.bet() > this.user.balance() || isCampaignActive()\"\n          [activated]=\"this.user.spinMode() === card.mode\"\n          class=\"animate-fade-down animate-duration-500 animate-delay-{{\n            card.order\n          }}\"\n        />\n      }\n    }\n    <!-- Buy Feature Cards -->\n    @for (card of buyFeatureCards(); track $index) {\n      <ap-bf-card-feature\n        (buttonClick)=\"openBuyFeatureConfirm(card)\"\n        [image]=\"card.image\"\n        [title]=\"card.title\"\n        [content]=\"card.content\"\n        [currency]=\"card.currency\"\n        [getPlayDemoLabel]=\"getPlayDemoLabel()\"\n        [price]=\"card.rate * this.user.bet()\"\n        (playDemo)=\"openPlayDemoConfirm($index)\"\n        [buttonText]=\"card.buttonText!\"\n        [disabled]=\"\n          card.rate * this.user.bet() > this.user.balance() ||\n          this.user.isDoubleChance() ||\n          isCampaignActive()\n        \"\n        class=\"animate-fade-down animate-duration-500 animate-delay-{{\n          card.order\n        }}\"\n      />\n    }\n  </div>\n\n  <!-- Buy Feature Hint -->\n  @if (showTrnHint()) {\n    <div\n      class=\"absolute bottom-0 left-0 right-0 bg-zinc-950/90 px-3 py-2 flex items-center justify-center gap-1\"\n    >\n      <ap-icon name=\"exclamation-circle\" class=\"size-5 text-red-500\" />\n      <span class=\"text-red-500 font-bold text-sm\"> {{ hintLabel() }} </span>\n    </div>\n  }\n</div>\n\n@if (showBuyFeatureConfirm()) {\n  <ap-bf-popup-confirm-feature\n    [header]=\"getConfirmHeaderText()\"\n    [description]=\"getFeatureConfirmDescription()\"\n    [confirmText]=\"getConfirmButtonText()\"\n    [cancelText]=\"getCancelButtonText()\"\n    class=\"absolute inset-0\"\n    (close)=\"closeBuyFeatureConfirm()\"\n    (confirm)=\"startBuyFeature()\"\n    [image]=\"confirmCard()?.image ?? bfImageDefault\"\n    [currency]=\"confirmCard()?.currency ?? '$'\"\n    [price]=\"(confirmCard()?.rate ?? 0) * this.user.bet()\"\n  />\n}\n\n@if (showBuyChanceConfirm()) {\n  <ap-bf-popup-confirm-chance\n    [header]=\"getConfirmHeaderText()\"\n    [description]=\"getChanceConfirmDescription()\"\n    [confirmText]=\"getConfirmButtonText()\"\n    [cancelText]=\"getCancelButtonText()\"\n    class=\"absolute inset-0\"\n    (close)=\"closeBuyChanceConfirm()\"\n    (confirm)=\"closeAll.emit()\"\n    [image]=\"confirmCard()?.image ?? bfImageDefault\"\n    [currency]=\"confirmCard()?.currency ?? '$'\"\n    [price]=\"(confirmCard()?.rate ?? 0) * this.user.bet()\"\n  />\n}\n\n<!-- Play Demo Confirm -->\n@if (isPlayDemo()) {\n  <ap-bf-popup-play-demo-confirm\n    class=\"absolute inset-0\"\n    [header]=\"replayPopupLabel()\"\n    [description]=\"replayPopupHint()\"\n    [cancelText]=\"getCancelButtonText()\"\n    [confirmText]=\"getConfirmButtonText()\"\n    (confirm)=\"onDemoReplayConfirmRequest()\"\n    (close)=\"onDemoReplayCancel()\"\n  />\n}\n\n<!-- Replay Viewer -->\n<history-replay-viewer\n  [showConfirmDialog]=\"false\"\n  [showWatchAgain]=\"true\"\n  [showCopyLink]=\"false\"\n  [gameName]=\"demoGameName()\"\n  (close)=\"onDemoReplayClose()\"\n/>\n" }]
    }], () => [], { replayViewerComponent: [{
            type: ViewChild,
            args: [HistoryReplayViewerComponent]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventBuyFeatureComponent, { className: "EventBuyFeatureComponent", filePath: "src/app/pages/event-buy-feature/event-buy-feature.component.ts", lineNumber: 32 }); })();
//# sourceMappingURL=event-buy-feature.component.js.map