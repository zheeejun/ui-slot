import { Component, computed, signal, inject, output, effect } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { ApTrnFloatCountdownComponent } from "../../components/ap-trn-float-countdown/ap-trn-float-countdown.component";
import { ApTrnCardBonusComponent } from "../../components/ap-trn-card-bonus/ap-trn-card-bonus.component";
import { CommonModule } from '@angular/common';
import { ApTrnListRowComponent } from "../../components/ap-trn-list-row/ap-trn-list-row.component";
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { ApTrnTabComponent } from "../../components/ap-trn-tab/ap-trn-tab.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { ApTrnGameHintComponent } from "../../components/ap-trn-game-hint/ap-trn-game-hint.component";
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component"; //確認版面用按鈕移除後，這個也移除
import * as i0 from "@angular/core";
import * as i1 from "../../services/trn-ctrl/trn-ctrl.service";
import * as i2 from "../../services/user-profile/user-profile.service";
import * as i3 from "../../services/game-iframe-ctrl/game-iframe-ctrl.service";
import * as i4 from "../../services/app-interface/app-interface.service";
import * as i5 from "@angular/common";
const _c0 = a0 => ({ "max-h-64": a0 });
function TrnPlayingEventComponent_Conditional_3_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "ap-button", 19);
    i0.ɵɵlistener("click", function TrnPlayingEventComponent_Conditional_3_Conditional_12_Template_ap_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showAllPlayerList.set(!ctx_r1.showAllPlayerList())); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("variant", "rounded-outlined")("icon", "x-mark")("icon", ctx_r1.showAllPlayerList() ? "arrow-up" : "arrow-down");
} }
function TrnPlayingEventComponent_Conditional_3_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "ap-loading-overlay", 20);
    i0.ɵɵelementEnd();
} }
function TrnPlayingEventComponent_Conditional_3_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-game-hint", 21);
    i0.ɵɵlistener("close", function TrnPlayingEventComponent_Conditional_3_Conditional_16_Template_ap_trn_game_hint_close_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showHint.set(false)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r1.getBetTitle())("message", ctx_r1.getEventMessage())("multiplier", ctx_r1.trn.currentBetMultiplier());
} }
function TrnPlayingEventComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "ap-trn-float-countdown", 10);
    i0.ɵɵlistener("onComplete", function TrnPlayingEventComponent_Conditional_3_Template_ap_trn_float_countdown_onComplete_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onMatchTimeout()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "ap-trn-card-bonus", 11);
    i0.ɵɵelementStart(9, "div", 12)(10, "div", 13);
    i0.ɵɵelement(11, "ap-trn-list-row", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(12, TrnPlayingEventComponent_Conditional_3_Conditional_12_Template, 2, 3, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, TrnPlayingEventComponent_Conditional_3_Conditional_13_Template, 2, 0, "div", 15);
    i0.ɵɵelementStart(14, "div")(15, "ap-toggle-switch", 16);
    i0.ɵɵlistener("checkedChange", function TrnPlayingEventComponent_Conditional_3_Template_ap_toggle_switch_checkedChange_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onToggleBetData($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(16, TrnPlayingEventComponent_Conditional_3_Conditional_16_Template, 1, 3, "ap-trn-game-hint", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "ap-button", 18);
    i0.ɵɵlistener("clicked", function TrnPlayingEventComponent_Conditional_3_Template_ap_button_clicked_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClickExit()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ((tmp_1_0 = ctx_r1.trnData()) == null ? null : tmp_1_0.name) ?? ctx_r1.getEventTabText(), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("targetTime", ctx_r1.endTime());
    i0.ɵɵadvance();
    i0.ɵɵproperty("currency", ctx_r1.trn.currencySymbol())("amount", ctx_r1.prize())("isAnimated", true)("multiplierTitle", ctx_r1.betMultiplierTitle())("multiplier", ctx_r1.multiplier());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(20, _c0, ctx_r1.showAllPlayerList()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("currency", ctx_r1.trn.currencySymbol())("items", ctx_r1.showAllPlayerList() ? ctx_r1.playerListAll() : ctx_r1.playerListPart())("showDividers", false);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.playerListAll().length > 5 ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isPlayersListLoading() ? 13 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.isBetDataToggleEnabled())("checked", ctx_r1.isBetDataEnabled());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showHint() ? 16 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.isExitDisabled())("label", ctx_r1.getExitButton())("severity", "secondary")("size", "small");
} }
function TrnPlayingEventComponent_Conditional_4_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "ap-button", 19);
    i0.ɵɵlistener("click", function TrnPlayingEventComponent_Conditional_4_Conditional_7_Template_ap_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showAllPlayerList.set(!ctx_r1.showAllPlayerList())); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("variant", "rounded-outlined")("icon", "x-mark")("icon", ctx_r1.showAllPlayerList() ? "arrow-up" : "arrow-down");
} }
function TrnPlayingEventComponent_Conditional_4_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "ap-loading-overlay", 20);
    i0.ɵɵelementEnd();
} }
function TrnPlayingEventComponent_Conditional_4_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-game-hint", 21);
    i0.ɵɵlistener("close", function TrnPlayingEventComponent_Conditional_4_Conditional_11_Template_ap_trn_game_hint_close_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showHint.set(false)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r1.getBetTitle())("message", ctx_r1.getEventMessage())("multiplier", ctx_r1.trn.currentBetMultiplier());
} }
function TrnPlayingEventComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-tab", 3)(1, "div", 9)(2, "ap-trn-float-countdown", 10);
    i0.ɵɵlistener("onComplete", function TrnPlayingEventComponent_Conditional_4_Template_ap_trn_float_countdown_onComplete_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onMatchTimeout()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(3, "ap-trn-card-bonus", 11);
    i0.ɵɵelementStart(4, "div", 12)(5, "div", 13);
    i0.ɵɵelement(6, "ap-trn-list-row", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, TrnPlayingEventComponent_Conditional_4_Conditional_7_Template, 2, 3, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, TrnPlayingEventComponent_Conditional_4_Conditional_8_Template, 2, 0, "div", 15);
    i0.ɵɵelementStart(9, "div")(10, "ap-toggle-switch", 16);
    i0.ɵɵlistener("checkedChange", function TrnPlayingEventComponent_Conditional_4_Template_ap_toggle_switch_checkedChange_10_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onToggleBetData($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(11, TrnPlayingEventComponent_Conditional_4_Conditional_11_Template, 1, 3, "ap-trn-game-hint", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "ap-button", 18);
    i0.ɵɵlistener("clicked", function TrnPlayingEventComponent_Conditional_4_Template_ap_button_clicked_12_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClickExit()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("getEventTabText", ctx_r1.getEventTabText())("showTabQuick", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("targetTime", ctx_r1.endTime());
    i0.ɵɵadvance();
    i0.ɵɵproperty("currency", ctx_r1.trn.currencySymbol())("amount", ctx_r1.prize())("isAnimated", true)("multiplierTitle", ctx_r1.betMultiplierTitle())("multiplier", ctx_r1.multiplier());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c0, ctx_r1.showAllPlayerList()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("currency", ctx_r1.trn.currencySymbol())("items", ctx_r1.showAllPlayerList() ? ctx_r1.playerListAll() : ctx_r1.playerListPart())("showDividers", false);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.playerListAll().length > 5 ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isPlayersListLoading() ? 8 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.isBetDataToggleEnabled())("checked", ctx_r1.isBetDataEnabled());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showHint() ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.isExitDisabled())("label", ctx_r1.getExitButton())("severity", "secondary")("size", "small");
} }
export class TrnPlayingEventComponent {
    trn;
    user;
    game;
    api;
    appI18n = inject(AppI18nService);
    getEventTabText = this.appI18n.computed('EventRace_Tab', 'EVENT');
    getBetTitle = this.appI18n.computed('BetBoost', 'BET');
    betMultiplierTitle = this.appI18n.computed('BetBoost', 'BET');
    getExitButton = this.appI18n.computed('Exit_Btn', 'EXIT');
    getEventMessage = computed(() => {
        const isEnabled = this.trn.currentBetMultiplier() > 1;
        const key = isEnabled ? 'BetToggleOn_Tip' : 'BetToggleOff_Tip';
        const fallback = isEnabled
            ? 'Enable Tournament Bet'
            : 'Disable Tournament Bet';
        return this.appI18n.instant(key, fallback);
    });
    storage = inject(StorageCtrlService);
    /** 目前的長期競賽資料 */
    trnData = computed(() => this.trn.betDataTrn());
    /** 是否使用 BetData */
    isBetDataEnabled = computed(() => { return this.user.trnData() !== null; });
    /** 結束時間 (Unix timestamp 豪秒) */
    endTime = signal(null);
    /** 玩家列表載入中 */
    isPlayersListLoading = signal(false);
    /** 玩家列表 */
    playerListAll = signal([]);
    /** 顯示完整玩家列表 */
    showAllPlayerList = signal(false);
    /** 顯示切換Enable Bet提示 */
    showHint = signal(false);
    /** 確認版面用-切換新舊版面 */
    useNewLayout = signal(true);
    /** 總獎金 */
    prize = signal(null);
    /** 下注倍率 */
    multiplier = signal(1);
    /** 是否允許離開競賽 */
    isExitDisabled = computed(() => this.game.status() !== 'Idle');
    /** Toggle能不能作用 */
    isBetDataToggleEnabled = computed(() => this.game.status() === 'Idle');
    /** 存到 Storage 的長期競賽狀態 */
    storageEventRunning = computed(() => { return { id: this.trn.betDataTrnId(), betDataEnabled: this.isBetDataEnabled() }; });
    destroy$ = new Subject();
    updateInterval;
    /** 退出競賽事件 */
    exitLeave = output();
    /** 競賽時間到事件 */
    matchTimeout = output();
    constructor(
    // 服務注入
    trn, user, game, api) {
        this.trn = trn;
        this.user = user;
        this.game = game;
        this.api = api;
        effect(() => {
            if (this.trnData()?.status !== 'running') {
                // 競賽結束或尚未開始，觸發退出事件
                this.trn.closeEventRace();
            }
        });
    }
    ngOnInit() {
        // 監聽比賽更新
        this.trn.eventRaceUpdated$.pipe(takeUntil(this.destroy$)).subscribe(this.onStatusUpdate.bind(this));
        this.game.readyForSpin$.pipe(takeUntil(this.destroy$)).subscribe(this.sendRankingRequest.bind(this));
        this.playerListAll.set(this.trn.eventPlayerList());
        this.endTime.set(this.trn.eventEndedTime());
        this.prize.set(this.trn.eventPrize());
        this.multiplier.set(this.trn.betDataMultiplier());
        this.updateInterval = interval(10000).subscribe(this.sendRankingRequest.bind(this));
        // 將目前正在運行的長期競賽ID存到storage
        this.storage.trnEventRunning = this.storageEventRunning();
    }
    ngOnDestroy() {
        this.updateInterval?.unsubscribe();
        // 清除目前正在運行的長期競賽ID
        this.storage.trnEventRunning = null;
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClickExit() {
        this.exitLeave.emit();
    }
    onMatchTimeout() {
        this.matchTimeout.emit();
    }
    /** 遊戲中片段顯示的玩家列表 */
    playerListPart = computed(() => {
        // 包括isHighlight的玩家 跟isHighlight的玩家前4名
        const highlightIndex = this.playerListAll().findIndex(item => item.highlighted);
        if (highlightIndex === -1 || highlightIndex < 4) {
            return this.playerListAll().slice(0, 5);
        }
        else {
            const start = Math.max(0, highlightIndex - 4);
            const end = Math.min(this.playerListAll().length, highlightIndex + 1);
            return this.playerListAll().slice(start, end);
        }
    });
    sendRankingRequest() {
        this.trn.sendEventRanking(this.trn.betDataTrn()?.id || '');
    }
    onToggleBetData(enable) {
        this.showHint.set(true);
        this.trn.enableBetData(enable);
        if (!enable) {
            this.storage.trnEventRunning = null;
        }
    }
    onStatusUpdate(status) {
        this.playerListAll.set(status.playersList);
        this.prize.set(status.currentPool || null);
    }
    static ɵfac = function TrnPlayingEventComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnPlayingEventComponent)(i0.ɵɵdirectiveInject(i1.TrnCtrlService), i0.ɵɵdirectiveInject(i2.UserProfileService), i0.ɵɵdirectiveInject(i3.GameIframeCtrlService), i0.ɵɵdirectiveInject(i4.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrnPlayingEventComponent, selectors: [["trn-playing-event"]], outputs: { exitLeave: "exitLeave", matchTimeout: "matchTimeout" }, decls: 5, vars: 2, consts: [[1, "relative"], [1, "absolute", "-top-1", "-right-1", "z-10", "size-5", "flex", "items-center", "justify-center", "rounded-full", "bg-zinc-700/80", "hover:bg-zinc-600", "text-zinc-300", "hover:text-white", "transition-colors", 3, "click", "title"], ["name", "arrows-right-left", 1, "size-3"], ["selected", "event", 3, "getEventTabText", "showTabQuick"], [1, "top-0", "left-0", "flex", "relative"], [1, "px-2", "py-[3px]", "bg-black/80", "border-2", "border-b-0", "rounded-t-xl", "w-44", "text-center", "font-anton", "text-2xl", "tracking-[0.5px]"], [1, "tracking-wideduration-200", "border-purple-300", "text-purple-gradient"], [1, "relative", "w-44", "min-h-auto", "bg-black/80", "border-2", "rounded-b-lg", "cursor-pointer", "border-purple-300"], [1, "duration-200", "pt-1", "pb-2", "flex", "flex-col", "items-center", "gap-1"], [1, "flex", "justify-center"], ["variant", "event", 3, "onComplete", "targetTime"], ["variant", "event", 3, "currency", "amount", "isAnimated", "multiplierTitle", "multiplier"], [1, "relative", "w-full", "max-w-xs"], [1, "overflow-y-auto", "scrollbar-thin", 3, "ngClass"], ["variant", "event", 1, "min-h-16", 3, "currency", "items", "showDividers"], [1, "absolute", "inset-0", "bg-black/50"], ["accentColor", "purple", 3, "checkedChange", "disabled", "checked"], ["variant", "event", 1, "absolute", 3, "title", "message", "multiplier"], [1, "w-[85%]", "mt-2", "opacity-65", 3, "clicked", "disabled", "label", "severity", "size"], ["accentColor", "purple", 1, "-translate-y-1/3", "opacity-70", "hover:opacity-100", "transition-opacity", 3, "click", "variant", "icon"], [1, "size-full"], ["variant", "event", 1, "absolute", 3, "close", "title", "message", "multiplier"]], template: function TrnPlayingEventComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function TrnPlayingEventComponent_Template_button_click_1_listener() { return ctx.useNewLayout.set(!ctx.useNewLayout()); });
            i0.ɵɵelement(2, "ap-icon", 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(3, TrnPlayingEventComponent_Conditional_3_Template, 18, 22)(4, TrnPlayingEventComponent_Conditional_4_Template, 13, 23, "ap-trn-tab", 3);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("title", ctx.useNewLayout() ? "\u78BA\u8A8D\u7248\u9762\u7528 - \u5207\u63DB\u5230\u539F\u672C\u6A23\u5F0F" : "\u78BA\u8A8D\u7248\u9762\u7528 - \u5207\u63DB\u5230\u4EE5\u6D3B\u52D5\u540D\u7A31\u986F\u793A");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.useNewLayout() ? 3 : 4);
        } }, dependencies: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, CommonModule, i5.NgClass, ApTrnListRowComponent, ApButtonComponent, ApLoadingOverlayComponent, ApTrnTabComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnPlayingEventComponent, [{
        type: Component,
        args: [{ selector: 'trn-playing-event', imports: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, CommonModule, ApTrnListRowComponent, ApButtonComponent, ApLoadingOverlayComponent, ApTrnTabComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApIconComponent], template: "<div class=\"relative\">\n  <!-- \u78BA\u8A8D\u7248\u9762\u7528 - \u7248\u9762\u5207\u63DB\u6309\u9215 -->\n  <button\n    class=\"absolute -top-1 -right-1 z-10 size-5 flex items-center justify-center rounded-full bg-zinc-700/80 hover:bg-zinc-600 text-zinc-300 hover:text-white transition-colors\"\n    (click)=\"useNewLayout.set(!useNewLayout())\"\n    [title]=\"useNewLayout() ? '\u78BA\u8A8D\u7248\u9762\u7528 - \u5207\u63DB\u5230\u539F\u672C\u6A23\u5F0F' : '\u78BA\u8A8D\u7248\u9762\u7528 - \u5207\u63DB\u5230\u4EE5\u6D3B\u52D5\u540D\u7A31\u986F\u793A'\"\n  >\n    <ap-icon name=\"arrows-right-left\" class=\"size-3\" />\n  </button>\n</div>\n\n@if (useNewLayout()){\n  <!-- New - \u7528\u6D3B\u52D5\u540D\u7A31\u986F\u793A-->\n<div class=\"top-0 left-0 flex relative\">\n  <div class=\"px-2 py-[3px] bg-black/80 border-2 border-b-0 rounded-t-xl w-44 text-center font-anton text-2xl tracking-[0.5px]\">\n    <div class=\"tracking-wideduration-200 border-purple-300 text-purple-gradient\">\n    {{ trnData()?.name ?? getEventTabText() }}\n  </div>\n  </div>\n</div> \n\n<div class=\"relative w-44 min-h-auto bg-black/80 border-2 rounded-b-lg cursor-pointer border-purple-300\">\n  <div class=\"duration-200 pt-1 pb-2 flex flex-col items-center gap-1\">\n  <div class=\"flex justify-center\">\n    <!-- Room \u6642\u9593\u5012\u6578 -->\n    <ap-trn-float-countdown\n      [targetTime]=\"endTime()\"\n      variant=\"event\"\n      (onComplete)=\"onMatchTimeout()\"\n    />\n  </div>\n\n  <!-- \u734E\u9805 -->\n  <ap-trn-card-bonus\n    [currency]=\"trn.currencySymbol()\"\n    [amount]=\"prize()\"\n    [isAnimated]=\"true\"\n    variant=\"event\"\n    [multiplierTitle]=\"betMultiplierTitle()\"\n    [multiplier]=\"multiplier()\"\n  />\n\n  <!-- \u73A9\u5BB6\u5217\u8868 -->\n  <div class=\"relative w-full max-w-xs\">\n    <div\n      class=\"overflow-y-auto scrollbar-thin\"\n      [ngClass]=\"{ 'max-h-64': showAllPlayerList() }\"\n    >\n      <ap-trn-list-row\n        class=\"min-h-16\"\n        [currency]=\"trn.currencySymbol()\"\n        [items]=\"showAllPlayerList() ? playerListAll() : playerListPart()\"\n        [showDividers]=\"false\"\n        variant=\"event\"\n      />\n    </div>\n\n    <!-- Toggle List Button -->\n    @if (playerListAll().length > 5) {\n      <div class=\"flex justify-center\">\n        <ap-button\n          class=\"-translate-y-1/3 opacity-70 hover:opacity-100 transition-opacity\"\n          [variant]=\"'rounded-outlined'\"\n          [icon]=\"'x-mark'\"\n          [icon]=\"showAllPlayerList() ? 'arrow-up' : 'arrow-down'\"\n          accentColor=\"purple\"\n          (click)=\"showAllPlayerList.set(!showAllPlayerList())\"\n        />\n      </div>\n    }\n  </div>\n    @if (isPlayersListLoading()) {\n      <div class=\"absolute inset-0 bg-black/50\">\n        <ap-loading-overlay class=\"size-full\" />\n      </div>  \n    }\n  <div>\n    <!-- \u5207\u63DBBetData\u958B\u95DC -->\n    <ap-toggle-switch\n      accentColor=\"purple\"\n      [disabled]=\"!isBetDataToggleEnabled()\"\n      [checked]=\"isBetDataEnabled()\"\n      (checkedChange)=\"onToggleBetData($event);\"\n    />\n\n    <!-- Popup notification -->\n    @if (showHint()) {\n      <ap-trn-game-hint\n        class=\"absolute\"\n        [title]=\"getBetTitle()\"\n        [message]=\"getEventMessage()\"\n        [multiplier]=\"trn.currentBetMultiplier()\"\n        variant=\"event\"\n        (close)=\"showHint.set(false)\"\n      />\n    }\n  </div>\n\n  <!-- Exit Button - only show for event tab after game starting -->\n  <ap-button\n    class=\"w-[85%] mt-2 opacity-65\"\n    [disabled]=\"isExitDisabled()\"\n    [label]=\"getExitButton()\"\n    [severity]=\"'secondary'\"\n    [size]=\"'small'\"\n    (clicked)=\"onClickExit()\"\n  />\n  </div>\n  </div>\n} @else {\n  <!-- Old - \u7528 ap-trn-tab \u63A7\u5236\u986F\u793A\u540D\u7A31-->\n  <ap-trn-tab\n  selected=\"event\"\n  [getEventTabText]=\"getEventTabText()\"\n  [showTabQuick]=\"false\"\n>\n  <div class=\"flex justify-center\">\n    <!-- Room \u6642\u9593\u5012\u6578 -->\n    <ap-trn-float-countdown\n      [targetTime]=\"endTime()\"\n      variant=\"event\"\n      (onComplete)=\"onMatchTimeout()\"\n    />\n  </div>\n\n  <!-- \u734E\u9805 -->\n  <ap-trn-card-bonus\n    [currency]=\"trn.currencySymbol()\"\n    [amount]=\"prize()\"\n    [isAnimated]=\"true\"\n    variant=\"event\"\n    [multiplierTitle]=\"betMultiplierTitle()\"\n    [multiplier]=\"multiplier()\"\n  />\n\n  <!-- \u73A9\u5BB6\u5217\u8868 -->\n  <div class=\"relative w-full max-w-xs\">\n    <div\n      class=\"overflow-y-auto scrollbar-thin\"\n      [ngClass]=\"{ 'max-h-64': showAllPlayerList() }\"\n    >\n      <ap-trn-list-row\n        class=\"min-h-16\"\n        [currency]=\"trn.currencySymbol()\"\n        [items]=\"showAllPlayerList() ? playerListAll() : playerListPart()\"\n        [showDividers]=\"false\"\n        variant=\"event\"\n      />\n    </div>\n\n    <!-- Toggle List Button -->\n    @if (playerListAll().length > 5) {\n      <div class=\"flex justify-center\">\n        <ap-button\n          class=\"-translate-y-1/3 opacity-70 hover:opacity-100 transition-opacity\"\n          [variant]=\"'rounded-outlined'\"\n          [icon]=\"'x-mark'\"\n          [icon]=\"showAllPlayerList() ? 'arrow-up' : 'arrow-down'\"\n          accentColor=\"purple\"\n          (click)=\"showAllPlayerList.set(!showAllPlayerList())\"\n        />\n      </div>\n    }\n  </div>\n    @if (isPlayersListLoading()) {\n      <div class=\"absolute inset-0 bg-black/50\">\n        <ap-loading-overlay class=\"size-full\" />\n      </div>  \n    }\n  <div>\n    <!-- \u5207\u63DBBetData\u958B\u95DC -->\n    <ap-toggle-switch\n      accentColor=\"purple\"\n      [disabled]=\"!isBetDataToggleEnabled()\"\n      [checked]=\"isBetDataEnabled()\"\n      (checkedChange)=\"onToggleBetData($event);\"\n    />\n\n    <!-- Popup notification -->\n    @if (showHint()) {\n      <ap-trn-game-hint\n        class=\"absolute\"\n        [title]=\"getBetTitle()\"\n        [message]=\"getEventMessage()\"\n        [multiplier]=\"trn.currentBetMultiplier()\"\n        variant=\"event\"\n        (close)=\"showHint.set(false)\"\n      />\n    }\n  </div>\n\n  <!-- Exit Button - only show for event tab after game starting -->\n  <ap-button\n    class=\"w-[85%] mt-2 opacity-65\"\n    [disabled]=\"isExitDisabled()\"\n    [label]=\"getExitButton()\"\n    [severity]=\"'secondary'\"\n    [size]=\"'small'\"\n    (clicked)=\"onClickExit()\"\n  />\n  </ap-trn-tab>\n}\n" }]
    }], () => [{ type: i1.TrnCtrlService }, { type: i2.UserProfileService }, { type: i3.GameIframeCtrlService }, { type: i4.AppInterfaceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrnPlayingEventComponent, { className: "TrnPlayingEventComponent", filePath: "src/app/pages/trn-playing-event/trn-playing-event.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=trn-playing-event.component.js.map