import { Component, computed, signal, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApTrnFloatCountdownComponent } from "../../components/ap-trn-float-countdown/ap-trn-float-countdown.component";
import { ApTrnCardBonusComponent } from "../../components/ap-trn-card-bonus/ap-trn-card-bonus.component";
import { ApTrnListRowComponent } from "../../components/ap-trn-list-row/ap-trn-list-row.component";
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { ApTrnGameHintComponent } from "../../components/ap-trn-game-hint/ap-trn-game-hint.component";
import { ApTrnTabComponent } from "../../components/ap-trn-tab/ap-trn-tab.component";
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/trn-ctrl/trn-ctrl.service";
import * as i2 from "../../services/user-profile/user-profile.service";
import * as i3 from "../../services/game-iframe-ctrl/game-iframe-ctrl.service";
import * as i4 from "../../services/app-interface/app-interface.service";
import * as i5 from "@angular/common";
const _c0 = a0 => ({ "max-h-64": a0 });
function TrnPlayingQuickComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "ap-button", 10);
    i0.ɵɵlistener("click", function TrnPlayingQuickComponent_Conditional_7_Template_ap_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showAllPlayerList.set(!ctx_r1.showAllPlayerList())); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("variant", "rounded-outlined")("icon", "x-mark")("icon", ctx_r1.showAllPlayerList() ? "arrow-up" : "arrow-down");
} }
function TrnPlayingQuickComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "ap-loading-overlay", 11);
    i0.ɵɵelementEnd();
} }
function TrnPlayingQuickComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-trn-game-hint", 12);
    i0.ɵɵlistener("close", function TrnPlayingQuickComponent_Conditional_11_Template_ap_trn_game_hint_close_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showHint.set(false)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r1.getBetTitle())("message", ctx_r1.getQuickMessage())("multiplier", ctx_r1.trn.currentBetMultiplier());
} }
export class TrnPlayingQuickComponent {
    trn;
    user;
    game;
    api;
    appI18n = inject(AppI18nService);
    getQuickTabText = this.appI18n.computed('QuickRace_Tab', 'QUICK');
    betMultiplierTitle = this.appI18n.computed('BetBoost', 'BET');
    getBetTitle = this.appI18n.computed('BetBoost', 'BET');
    getQuickMessage = computed(() => {
        const isEnabled = this.trn.currentBetMultiplier() > 1;
        const key = isEnabled ? 'BetToggleOn_Tip' : 'BetToggleOff_Tip';
        const fallback = isEnabled
            ? 'Enable Tournament Bet'
            : 'Disable Tournament Bet';
        return this.appI18n.instant(key, fallback);
    });
    /** 是否使用 BetData */
    isBetData = computed(() => { return this.user.trnData() !== null; });
    /** Room 結束時間 (Unix timestamp 豪秒) */
    endTime = signal(null);
    /** 玩家列表載入中 */
    isPlayersListLoading = signal(false);
    /** 玩家列表 */
    playerListAll = signal([]);
    /** 顯示完整玩家列表 */
    showAllPlayerList = signal(false);
    /** 顯示切換Enable Bet提示 */
    showHint = signal(false);
    /** 總獎金 */
    totalPrize = signal(null);
    /** 下注倍率 */
    multiplier = signal(1);
    isBetDataToggleEnabled = computed(() => this.game.status() === 'Idle');
    destroy$ = new Subject();
    constructor(
    // 服務注入
    trn, user, game, api) {
        this.trn = trn;
        this.user = user;
        this.game = game;
        this.api = api;
    }
    ngOnInit() {
        this.trn.roomUpdated$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomUpdate.bind(this));
        this.endTime.set(this.trn.roomEndTime() || null);
        this.playerListAll.set((this.trn.roomPlayerList()));
        this.totalPrize.set(this.trn.roomPrize() || null);
        this.multiplier.set(this.trn.betDataMultiplier());
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
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
    onRoomUpdate(state) {
        this.playerListAll.set(state.playersList);
        this.totalPrize.set(state.currentPool || null);
    }
    onToggleBetData(enable) {
        this.showHint.set(enable);
        this.trn.enableBetData(enable);
    }
    static ɵfac = function TrnPlayingQuickComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnPlayingQuickComponent)(i0.ɵɵdirectiveInject(i1.TrnCtrlService), i0.ɵɵdirectiveInject(i2.UserProfileService), i0.ɵɵdirectiveInject(i3.GameIframeCtrlService), i0.ɵɵdirectiveInject(i4.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrnPlayingQuickComponent, selectors: [["trn-playing-quick"]], decls: 12, vars: 19, consts: [["selected", "quick", 3, "getQuickTabText", "showTabEvent"], [1, "flex", "justify-center"], ["variant", "quick", 3, "targetTime"], ["variant", "quick", 3, "currency", "amount", "isAnimated", "multiplierTitle", "multiplier"], [1, "relative", "w-full", "max-w-xs"], [1, "overflow-y-auto", "scrollbar-thin", 3, "ngClass"], ["variant", "quick", 1, "min-h-16", 3, "currency", "items", "showDividers"], [1, "absolute", "inset-0", "bg-black/50"], ["accentColor", "yellow", 3, "checkedChange", "disabled", "checked"], ["variant", "quick", 1, "absolute", 3, "title", "message", "multiplier"], ["accentColor", "yellow", 1, "-translate-y-1/3", "opacity-70", "hover:opacity-100", "transition-opacity", 3, "click", "variant", "icon"], [1, "size-full"], ["variant", "quick", 1, "absolute", 3, "close", "title", "message", "multiplier"]], template: function TrnPlayingQuickComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ap-trn-tab", 0)(1, "div", 1);
            i0.ɵɵelement(2, "ap-trn-float-countdown", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "ap-trn-card-bonus", 3);
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5);
            i0.ɵɵelement(6, "ap-trn-list-row", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(7, TrnPlayingQuickComponent_Conditional_7_Template, 2, 3, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(8, TrnPlayingQuickComponent_Conditional_8_Template, 2, 0, "div", 7);
            i0.ɵɵelementStart(9, "div")(10, "ap-toggle-switch", 8);
            i0.ɵɵlistener("checkedChange", function TrnPlayingQuickComponent_Template_ap_toggle_switch_checkedChange_10_listener($event) { return ctx.onToggleBetData($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(11, TrnPlayingQuickComponent_Conditional_11_Template, 1, 3, "ap-trn-game-hint", 9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("getQuickTabText", ctx.getQuickTabText())("showTabEvent", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("targetTime", ctx.endTime());
            i0.ɵɵadvance();
            i0.ɵɵproperty("currency", ctx.trn.currencySymbol())("amount", ctx.totalPrize())("isAnimated", true)("multiplierTitle", ctx.betMultiplierTitle())("multiplier", ctx.multiplier());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c0, ctx.showAllPlayerList()));
            i0.ɵɵadvance();
            i0.ɵɵproperty("currency", ctx.trn.currencySymbol())("items", ctx.showAllPlayerList() ? ctx.playerListAll() : ctx.playerListPart())("showDividers", false);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.playerListAll().length > 5 ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isPlayersListLoading() ? 8 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx.isBetDataToggleEnabled())("checked", ctx.isBetData());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showHint() ? 11 : -1);
        } }, dependencies: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, ApTrnListRowComponent, CommonModule, i5.NgClass, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApTrnTabComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnPlayingQuickComponent, [{
        type: Component,
        args: [{ selector: 'trn-playing-quick', imports: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, ApTrnListRowComponent, CommonModule, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApTrnTabComponent], template: "<ap-trn-tab\n  selected=\"quick\"\n  [getQuickTabText]=\"getQuickTabText()\"\n  [showTabEvent]=\"false\"\n  >\n\n  <div class=\"flex justify-center\">\n    <!-- Room \u6642\u9593\u5012\u6578 -->\n    <ap-trn-float-countdown [targetTime]=\"endTime()\" variant=\"quick\" />\n  </div>\n\n  <!-- \u734E\u9805 -->\n  <ap-trn-card-bonus\n    [currency]=\"trn.currencySymbol()\"\n    [amount]=\"totalPrize()\"\n    [isAnimated]=\"true\"\n    variant=\"quick\"\n    [multiplierTitle]=\"betMultiplierTitle()\"\n    [multiplier]=\"multiplier()\"\n  />\n\n  <!-- \u73A9\u5BB6\u5217\u8868 -->\n  <div class=\"relative w-full max-w-xs\">\n    <div\n      class=\"overflow-y-auto scrollbar-thin\"\n      [ngClass]=\"{ 'max-h-64': showAllPlayerList() }\"\n    >\n      <ap-trn-list-row\n        [currency]=\"trn.currencySymbol()\"\n        class=\"min-h-16\"\n        [items]=\"showAllPlayerList() ? playerListAll() : playerListPart()\"\n        [showDividers]=\"false\"\n        variant=\"quick\"\n      />\n    </div>\n\n    <!-- Toggle List Button -->\n    @if (playerListAll().length > 5) {\n      <div class=\"flex justify-center\">\n        <ap-button\n          class=\"-translate-y-1/3 opacity-70 hover:opacity-100 transition-opacity\"\n          [variant]=\"'rounded-outlined'\"\n          [icon]=\"'x-mark'\"\n          [icon]=\"showAllPlayerList() ? 'arrow-up' : 'arrow-down'\"\n          accentColor=\"yellow\"\n          (click)=\"showAllPlayerList.set(!showAllPlayerList())\"\n        />\n      </div>\n    }\n  </div>\n\n  @if (isPlayersListLoading()) {\n    <div class=\"absolute inset-0 bg-black/50\">\n      <ap-loading-overlay class=\"size-full\" />\n    </div>\n  }\n\n  <div>\n    <!-- \u5207\u63DBBetData\u958B\u95DC -->\n    <ap-toggle-switch\n      accentColor=\"yellow\"\n      [disabled]=\"!isBetDataToggleEnabled()\"\n      [checked]=\"isBetData()\"\n      (checkedChange)=\"onToggleBetData($event)\"\n    />\n\n    <!-- Popup notification -->\n    @if (showHint()) {\n      <ap-trn-game-hint\n        class=\"absolute\"\n        [title]=\"getBetTitle()\"\n        [message]=\"getQuickMessage()\"\n        [multiplier]=\"trn.currentBetMultiplier()\"\n        variant=\"quick\"\n        (close)=\"showHint.set(false)\"\n      />\n    }\n  </div>\n</ap-trn-tab>\n" }]
    }], () => [{ type: i1.TrnCtrlService }, { type: i2.UserProfileService }, { type: i3.GameIframeCtrlService }, { type: i4.AppInterfaceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrnPlayingQuickComponent, { className: "TrnPlayingQuickComponent", filePath: "src/app/pages/trn-playing-quick/trn-playing-quick.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=trn-playing-quick.component.js.map