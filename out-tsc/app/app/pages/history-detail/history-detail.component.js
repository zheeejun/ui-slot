import { Component, input, output, signal, computed, inject, ViewChild, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { ApWebBase } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebBase';
import { createApWebMessage } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebMessages';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';
import { LoggerService } from '../../services/logger/logger.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["gameIframe"];
const _c1 = a0 => ({ hidden: a0 });
function HistoryDetailComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 15);
    i0.ɵɵlistener("clicked", function HistoryDetailComponent_Conditional_20_Template_ap_button_clicked_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.replay.emit(ctx_r2.item())); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("icon", "replay")("variant", "rounded-icon")("size", "small")("accentColor", "zinc");
} }
function HistoryDetailComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 15);
    i0.ɵɵlistener("clicked", function HistoryDetailComponent_Conditional_21_Template_ap_button_clicked_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.share.emit(ctx_r2.item())); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("icon", "share")("variant", "rounded-icon")("size", "small")("accentColor", "zinc");
} }
function HistoryDetailComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-select", 41);
    i0.ɵɵlistener("onSelect", function HistoryDetailComponent_Conditional_23_Template_ap_select_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectRound($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hasPrize", true)("accentColor", "yellow")("options", ctx_r2.roundOptions())("selected", ctx_r2.currentRound().toString());
} }
function HistoryDetailComponent_Conditional_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.currency());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.formatAmount(ctx_r2.balanceOld()));
} }
function HistoryDetailComponent_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.currency());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.formatAmount(ctx_r2.balanceNew()));
} }
function HistoryDetailComponent_Conditional_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-loading-overlay", 35);
} if (rf & 2) {
    i0.ɵɵproperty("@fadeOut", undefined);
} }
function HistoryDetailComponent_Conditional_71_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 42);
    i0.ɵɵlistener("click", function HistoryDetailComponent_Conditional_71_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clickPreRound()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("icon", "chevron-left")("variant", "rounded-icon")("severity", "contrast")("size", "medium")("accentColor", "zinc");
} }
function HistoryDetailComponent_Conditional_73_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 43);
    i0.ɵɵlistener("click", function HistoryDetailComponent_Conditional_73_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clickNextRound()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("severity", "contrast")("icon", "chevron-right")("variant", "rounded-icon")("size", "medium")("accentColor", "zinc");
} }
function HistoryDetailComponent_Conditional_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 44)(2, "div", 45)(3, "span", 46);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 47);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 45)(8, "span", 46);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 47);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "table", 48)(13, "thead", 49)(14, "tr")(15, "th", 50);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th", 50);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "tbody")(20, "tr")(21, "td", 51);
    i0.ɵɵtext(22, " 2026-01-20 15:30:20 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "td", 52);
    i0.ɵɵtext(24, " Running ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "tr")(26, "td", 51);
    i0.ɵɵtext(27, " 2026-01-20 10:30:20 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "td", 52);
    i0.ɵɵtext(29, " Settled ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r2.listLabel1(), ":");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r2.currency(), "", ctx_r2.detailCurrencyNumber1());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.listLabel2(), ":");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r2.currency(), "", ctx_r2.detailCurrencyNumber1());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.dateTable(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.statusTable(), " ");
} }
function HistoryDetailComponent_Conditional_75_Template(rf, ctx) { }
export class HistoryDetailComponent {
    gameIframe;
    set iframeRef(ref) {
        this.setIframe(ref?.nativeElement);
    }
    iframe = null;
    detailCurrencyNumber1 = input('10,300.000');
    detailCurrencyNumber2 = input('20,300.000');
    api = inject(AppInterfaceService);
    login = inject(LoginCtrlService);
    appI18n = inject(AppI18nService);
    historyCtrl = inject(HistoryCtrlService);
    logger = inject(LoggerService);
    // Table Headers
    betTitle = this.appI18n.computed('history_bet', 'Bet');
    balanceTitle = this.appI18n.computed('history_balance', 'Balance');
    winTitle = this.appI18n.computed('history_win', 'Win');
    // List Labels
    listLabel1 = this.appI18n.computed('cashdrop_D2_3', 'Main Prize');
    listLabel2 = this.appI18n.computed('cashdrop_D2_4', 'Mystery Prize');
    dateTable = this.appI18n.computed('history_date', 'Date');
    statusTable = this.appI18n.computed('history_jackpot_status', 'Status');
    roundLabel = this.appI18n.computed('history_round', 'Round');
    wayLabel = this.appI18n.computed('history_way', 'WAY');
    kindLabel = this.appI18n.computed('history_kind', 'OF A KIND');
    winColumnLabel = this.appI18n.computed('history_win', 'WIN');
    lineLabel = this.appI18n.computed('history_line_bet', ' /Line');
    displayPrize = input('$500');
    // Localization for replay and share buttons
    isLoading = signal(true);
    /** 控制 replay 按鈕顯示 */
    showReplayButtons = computed(() => {
        if (this.historyCtrl.forceReplayDisplayed())
            return true;
        return (this.api.loginResult()?.note?.history_replay === 1 && this.item()?.replay);
    });
    /** 控制 share 按鈕顯示 */
    showShareButtons = computed(() => {
        if (this.historyCtrl.forceShareDisplayed())
            return true;
        return (this.api.loginResult()?.note?.history_replay === 1 && this.item()?.replay);
    });
    item = input(null);
    ticket = computed(() => this.item()?.transaction || 'N/A');
    currency = computed(() => this.item()?.currency || '$');
    balanceOld = signal(null);
    balanceNew = signal(null);
    bet = computed(() => {
        return this.item().bet || '';
    });
    win = computed(() => {
        return this.item().win || '';
    });
    roundIndex = signal(0);
    replay = output();
    share = output();
    isTrn = computed(() => {
        const item = this.item();
        if (!item)
            return false;
        const reward = (item.rewardType || '').toLowerCase();
        return reward.includes('tournament');
    });
    showPlateSelector = signal(false);
    currentRound = signal(0);
    maxRound = signal(0);
    togglePlateSelector() {
        this.showPlateSelector.set(!this.showPlateSelector());
    }
    // 根據 maxRound 產生 roundOptions，並在 label 顯示 roundLabel + 數字，prize 顯示 displayPrize
    roundOptions = computed(() => {
        const options = [];
        for (let i = 1; i <= this.maxRound(); i++) {
            options.push({
                value: (i - 1).toString(),
                label: this.roundLabel() + ' ' + i,
                prize: this.displayPrize(),
            });
        }
        return options;
    });
    // 顯示當前 round 的數字，例如 "Round (1/3)"
    roundNumberText = computed(() => {
        const totalRounds = this.maxRound();
        if (totalRounds <= 0)
            return '';
        return ` (${this.currentRound() + 1}/${totalRounds})`;
    });
    selectRound(value) {
        const index = parseInt(value, 10);
        if (isNaN(index))
            return;
        this.currentRound.set(index);
        this.sendMessage(createApWebMessage('ChangeHistoryPageIndex', { pageIndex: index }));
    }
    displayName = computed(() => {
        const item = this.item();
        if (!item)
            return 'Main Game';
        if (item.isStarred && item.isTrophy)
            return 'Free Game / Tournament';
        if (item.isStarred)
            return 'Free Game';
        if (item.isTrophy)
            return 'Tournament';
        return item.rewardType;
    });
    boundReceiveMessage = this.receiveMessage.bind(this);
    boundAdjustTopByWidth = this.adjustTopByWidth.bind(this);
    ngOnInit() {
        // 監聽message, 會在receiveMessage中處理來自iframe的訊息
        window.addEventListener('message', this.boundReceiveMessage, false);
    }
    ngAfterViewInit() {
        this.adjustTopByWidth();
        window.addEventListener('resize', this.boundAdjustTopByWidth);
        if (this.iframe?.contentWindow) {
            this.iframe.contentWindow.name = this.iframeName();
            this.iframe.src = this.iframeUrl();
        }
    }
    ngOnDestroy() {
        // 移除監聽
        window.removeEventListener('message', this.boundReceiveMessage, false);
        window.removeEventListener('resize', this.boundAdjustTopByWidth);
    }
    setIframe(iframe) {
        if (iframe)
            this.iframe = iframe;
    }
    iframeUrl = computed(() => {
        const urlParams = new URLSearchParams();
        urlParams.set('ticketNo', this.ticket());
        urlParams.set('platform', this.api.loginResult()?.note.pid || '');
        urlParams.set('site', 'default');
        urlParams.set('webangular', '1');
        const gameId = this.login.gameId?.toString() || '';
        // ex: /10076/?ticketNo=eqXKQGgrIcKFN7&platform=jk8master_t306&site=default&webangular=1
        return `/${gameId}/?${urlParams.toString()}`;
    });
    iframeName = computed(() => {
        const apweb = new ApWebBase();
        apweb.setMode('ap-history');
        return apweb.toString();
    });
    async copyTransaction(item, event) {
        event?.stopPropagation();
        try {
            await navigator.clipboard.writeText(item.transaction);
            alert(`${item.transaction} copied to clipboard!`);
        }
        catch (err) {
            alert('Failed to copy transaction to clipboard');
        }
    }
    isPreRoundEnabled = computed(() => this.currentRound() > 0);
    clickPreRound() {
        const pre = this.currentRound() - 1;
        if (pre < 0)
            return;
        this.currentRound.set(pre);
        this.sendMessage(createApWebMessage('ChangeHistoryPageIndex', {
            pageIndex: this.currentRound(),
        }));
    }
    isNextRoundEnabled = computed(() => this.currentRound() < this.maxRound());
    clickNextRound() {
        const next = this.currentRound() + 1;
        if (next >= this.maxRound())
            return;
        this.currentRound.set(next);
        this.sendMessage(createApWebMessage('ChangeHistoryPageIndex', {
            pageIndex: this.currentRound(),
        }));
    }
    sendMessage(message) {
        if (this.iframe?.contentWindow) {
            this.iframe.contentWindow.postMessage(message, window.location.origin);
        }
    }
    receiveMessage(event) {
        // 確保來自信任的來源
        if (event.origin !== window.location.origin)
            return;
        // 確保來自指定的 iframe
        if (event.source !== this.iframe?.contentWindow)
            return;
        this.logger.iframeHistoryLog('iframe➡️:', event.data);
        const message = event.data;
        if (message.type === 'HistoryDetailLoaded') {
            this.processHistoryDetailLoaded(message.content);
            return;
        }
    }
    processHistoryDetailLoaded(data) {
        this.isLoading.set(false);
        this.balanceNew.set(data.balance);
        this.balanceOld.set(data.balance - data.win + data.bet);
        const spinResult = data.spinResult;
        this.maxRound.set(spinResult.free_game?.length || 0);
    }
    // 根據長寬比例調整 iframe 的縮放，以適應不同尺寸的螢幕
    adjustTopByWidth() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const idealAspectRatio = 16 / 9;
        const currentAspectRatio = height / width;
        let scale = 1;
        // 如果當前螢幕比 16:9 更長（更高），則進行縮放
        if (currentAspectRatio > idealAspectRatio) {
            // 計算縮放比例，使 iframe 的寬度適應螢幕
            scale = (width * idealAspectRatio) / height;
        }
        if (this.gameIframe) {
            // 應用 transform scale 來縮放，並移除舊的 top 樣式
            this.gameIframe.nativeElement.style.transform = `scale(${scale})`;
            this.gameIframe.nativeElement.style.top = ''; // 移除舊的 top 設置
        }
    }
    formatAmount(value) {
        const stringValue = String(value);
        const [integerPart, decimalPart] = stringValue.split('.');
        const formattedInteger = Number(integerPart).toLocaleString('en-US');
        return decimalPart === undefined
            ? formattedInteger
            : `${formattedInteger}.${decimalPart}`;
    }
    static ɵfac = function HistoryDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistoryDetailComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HistoryDetailComponent, selectors: [["history-detail"]], viewQuery: function HistoryDetailComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gameIframe = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iframeRef = _t.first);
        } }, inputs: { detailCurrencyNumber1: [1, "detailCurrencyNumber1"], detailCurrencyNumber2: [1, "detailCurrencyNumber2"], displayPrize: [1, "displayPrize"], item: [1, "item"] }, outputs: { replay: "replay", share: "share" }, decls: 76, vars: 33, consts: [["gameIframe", ""], [1, "flex", "size-full", "flex-col", "max-w-4xl", "mx-auto"], [1, "mt-2", "sm:mt-4", "shrink-0", "bg-zinc-900", "border-b", "border-zinc-700", "sm:rounded-xl"], [1, "w-full"], [1, "flex", "flex-col", "sm:flex-row", "items-stretch", "sm:items-center", "p-1.5", "sm:p-4"], [1, "flex-1", "text-center", "sm:text-left", "pb-2", "sm:pb-0"], [1, "text-yellow-400", "text-xl", "sm:text-lg", "font-bold"], [1, "text-sm", "pb-2", "sm:pb-0", "text-center"], [1, "inline-flex", "flex-row", "items-center", "justify-center", "gap-2", "sm:flex-col", "sm:gap-1"], [1, "flex", "text-zinc-400", "space-x-1", "justify-center"], [1, "inline-flex", "items-center", "justify-center", "text-zinc-200"], ["name", "document-text", 1, "size-4"], [1, "flex-1", "border-zinc-700", "border-t", "sm:border-none", "pt-2", "sm:pt-0"], [1, "flex", "items-center", "justify-center", "sm:justify-end", "gap-4"], [3, "icon", "variant", "size", "accentColor"], [3, "clicked", "icon", "variant", "size", "accentColor"], [1, "md:w-[50%]", "w-[40%]", 3, "hasPrize", "accentColor", "options", "selected"], [1, "bg-zinc-900", "border-b", "border-zinc-700", "sm:rounded-t-xl", "font-medium", "text-sm", "sm:text-base", "mt-2", "sm:mt-4"], [1, "flex", "justify-between", "text-center", "uppercase", "text-zinc-300", "sm:text-zinc-400", "border-b", "border-zinc-700"], [1, "flex-1", "p-1", "sm:p-2"], [1, "flex", "text-center"], [1, "flex", "flex-col", "text-zinc-400", "text-center", "items-center"], [1, "flex", "space-x-0.5"], [1, "flex"], [1, "inline-flex", "items-center", "space-x-0.5", "text-white", "font-medium"], [1, "flex-1", "p-1", "sm:p-2", "text-white", "font-medium"], [1, "flex", "flex-col", "items-center"], [1, "invisible"], [1, "inline-flex", "items-center", "justify-center", "space-x-0.5"], [1, "flex", "flex-col"], [1, "inline-flex", "items-center", "justify-center", "space-x-0.5", "text-zinc-400"], [1, "flex-1", "relative", "bg-zinc-900", "overflow-hidden", "min-h-[22rem]", 3, "ngClass"], [1, "absolute", "inset-0", "flex", "items-center"], [1, "flex-1", "h-full", "flex", "items-center", "justify-center"], ["frameborder", "0", "scrolling", "no", 1, "absolute", "top-0", "w-full", "min-w-lg", "origin-top", "h-220"], [1, "absolute", "inset-0", "bg-zinc-900"], [1, "absolute", "left-0", "top-0", "h-full", "w-16", "flex", "items-center", "justify-center"], [3, "icon", "variant", "severity", "size", "accentColor"], [1, "absolute", "right-0", "top-0", "h-full", "w-16", "flex", "items-center", "justify-center", "z-10"], [3, "severity", "icon", "variant", "size", "accentColor"], [1, "flex", "flex-col", "bg-zinc-900", "min-h-[22rem]", "items-center", "pt-8", "rounded-xl"], [1, "md:w-[50%]", "w-[40%]", 3, "onSelect", "hasPrize", "accentColor", "options", "selected"], [3, "click", "icon", "variant", "severity", "size", "accentColor"], [3, "click", "severity", "icon", "variant", "size", "accentColor"], [1, "w-80", "space-y-2", "text-md", "min-w-[16rem]"], [1, "flex", "justify-between", "items-center"], [1, "text-left", "text-yellow-400", "justify-self-start", "uppercase"], [1, "text-yellow-200", "font-normal"], [1, "w-80", "items-center", "border-collapse", "mt-6", "text-sm"], [1, "bg-zinc-800"], [1, "px-2", "py-1", "border", "border-zinc-600", "font-normal", "uppercase"], [1, "px-2", "py-2", "text-sm", "text-center", "border", "border-zinc-600"], [1, "px-2", "py-2", "border", "text-center", "border-zinc-600", "uppercase"]], template: function HistoryDetailComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 10);
            i0.ɵɵelement(15, "ap-icon", 11);
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(18, "div", 12)(19, "div", 13);
            i0.ɵɵconditionalCreate(20, HistoryDetailComponent_Conditional_20_Template, 1, 4, "ap-button", 14);
            i0.ɵɵconditionalCreate(21, HistoryDetailComponent_Conditional_21_Template, 1, 4, "ap-button", 14);
            i0.ɵɵelementStart(22, "ap-button", 15);
            i0.ɵɵlistener("clicked", function HistoryDetailComponent_Template_ap_button_clicked_22_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.item() && ctx.copyTransaction(ctx.item(), $event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(23, HistoryDetailComponent_Conditional_23_Template, 1, 4, "ap-select", 16);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(24, "div", 17)(25, "div", 18)(26, "div", 19);
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 19);
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 19);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 20)(33, "div", 19)(34, "div", 21)(35, "div", 22)(36, "span");
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 23)(39, "span");
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "span");
            i0.ɵɵtext(42);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "div", 24)(44, "span");
            i0.ɵɵtext(45);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "span");
            i0.ɵɵtext(47);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(48, "div", 25)(49, "div", 26)(50, "div", 27)(51, "span");
            i0.ɵɵtext(52);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "span");
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "div", 28)(56, "span");
            i0.ɵɵtext(57);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "span");
            i0.ɵɵtext(59);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(60, "div", 25)(61, "div", 29);
            i0.ɵɵconditionalCreate(62, HistoryDetailComponent_Conditional_62_Template, 5, 2, "span", 30);
            i0.ɵɵconditionalCreate(63, HistoryDetailComponent_Conditional_63_Template, 5, 2, "span", 28);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(64, "div", 31)(65, "div", 32)(66, "div", 33);
            i0.ɵɵelement(67, "iframe", 34, 0);
            i0.ɵɵconditionalCreate(69, HistoryDetailComponent_Conditional_69_Template, 1, 1, "ap-loading-overlay", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 36);
            i0.ɵɵconditionalCreate(71, HistoryDetailComponent_Conditional_71_Template, 1, 5, "ap-button", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "div", 38);
            i0.ɵɵconditionalCreate(73, HistoryDetailComponent_Conditional_73_Template, 1, 5, "ap-button", 39);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(74, HistoryDetailComponent_Conditional_74_Template, 30, 8, "div", 40)(75, HistoryDetailComponent_Conditional_75_Template, 0, 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_2_0;
            let tmp_3_0;
            let tmp_4_0;
            let tmp_11_0;
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2(" ", ctx.displayName(), "", ctx.roundNumberText(), " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate((tmp_2_0 = ctx.item()) == null ? null : tmp_2_0.date);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((tmp_3_0 = ctx.item()) == null ? null : tmp_3_0.time);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate((tmp_4_0 = ctx.item()) == null ? null : tmp_4_0.transaction);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.showReplayButtons() ? 20 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showShareButtons() ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", "copy")("variant", "rounded-icon")("size", "small")("accentColor", "zinc");
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_11_0 = ctx.item()) == null ? null : tmp_11_0.isStarred) ? 23 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.betTitle());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.winTitle());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.balanceTitle());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.currency());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.formatAmount(ctx.bet()));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.lineLabel());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.currency());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.formatAmount(ctx.bet()));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.currency());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.formatAmount(ctx.win()));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.currency());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.formatAmount(ctx.win()));
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.balanceOld() !== null ? 62 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.balanceNew() !== null ? 63 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(31, _c1, ctx.isTrn()));
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.isLoading() ? 69 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isPreRoundEnabled() ? 71 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isNextRoundEnabled() ? 73 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isTrn() ? 74 : 75);
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent, ApButtonComponent, ApLoadingOverlayComponent, ApSelectComponent], encapsulation: 2, data: { animation: [
                trigger('fadeOut', [
                    transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
                ]),
            ] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryDetailComponent, [{
        type: Component,
        args: [{ selector: 'history-detail', imports: [CommonModule, ApIconComponent, ApButtonComponent, ApLoadingOverlayComponent, ApSelectComponent, ApSelectComponent,], animations: [
                    trigger('fadeOut', [
                        transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
                    ]),
                ], template: "<div class=\"flex size-full flex-col max-w-4xl mx-auto\">\n  <!-- Header: Game Info, Date, Actions, Round Selector -->\n  <div\n    class=\"mt-2 sm:mt-4 shrink-0 bg-zinc-900 border-b border-zinc-700 sm:rounded-xl\"\n  >\n    <div class=\"w-full\">\n      <div\n        class=\"flex flex-col sm:flex-row items-stretch sm:items-center p-1.5 sm:p-4\"\n      >\n        <!-- Left: Game Name -->\n        <div class=\"flex-1 text-center sm:text-left pb-2 sm:pb-0\">\n          <span class=\"text-yellow-400 text-xl sm:text-lg font-bold\">\n            {{ displayName() }}{{ roundNumberText() }}\n          </span>\n        </div>\n        <!-- Center: Date -->\n        <div class=\"text-sm pb-2 sm:pb-0 text-center\">\n          <div\n            class=\"inline-flex flex-row items-center justify-center gap-2 sm:flex-col sm:gap-1\"\n          >\n            <div class=\"flex text-zinc-400 space-x-1 justify-center\">\n              <div>{{ item()?.date }}</div>\n              <div>{{ item()?.time }}</div>\n            </div>\n            <div class=\"inline-flex items-center justify-center text-zinc-200\">\n              <ap-icon name=\"document-text\" class=\"size-4\" />\n              <span>{{ item()?.transaction }}</span>\n            </div>\n          </div>\n        </div>\n        <!-- Right: Buttons -->\n        <div\n          class=\"flex-1 border-zinc-700 border-t sm:border-none pt-2 sm:pt-0\"\n        >\n          <div class=\"flex items-center justify-center sm:justify-end gap-4\">\n            @if (showReplayButtons()) {\n              <ap-button\n                (clicked)=\"replay.emit(item())\"\n                [icon]=\"'replay'\"\n                [variant]=\"'rounded-icon'\"\n                [size]=\"'small'\"\n                [accentColor]=\"'zinc'\"\n              />\n            }\n            @if (showShareButtons()) {\n              <ap-button\n                (clicked)=\"share.emit(item())\"\n                [icon]=\"'share'\"\n                [variant]=\"'rounded-icon'\"\n                [size]=\"'small'\"\n                [accentColor]=\"'zinc'\"\n              />\n            }\n            <ap-button\n              (clicked)=\"item() && copyTransaction(item()!, $event)\"\n              [icon]=\"'copy'\"\n              [variant]=\"'rounded-icon'\"\n              [size]=\"'small'\"\n              [accentColor]=\"'zinc'\"\n            />\n            @if (item()?.isStarred) {\n              <ap-select\n                class=\"md:w-[50%] w-[40%]\"\n                [hasPrize]=\"true\"\n                [accentColor]=\"'yellow'\"\n                [options]=\"roundOptions()\"\n                [selected]=\"currentRound().toString()\"\n                (onSelect)=\"selectRound($event)\"\n              />\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Top Bar: Bet, Balance, Win -->\n  <div\n    class=\"bg-zinc-900 border-b border-zinc-700 sm:rounded-t-xl font-medium text-sm sm:text-base mt-2 sm:mt-4\"\n  >\n    <div\n      class=\"flex justify-between text-center uppercase text-zinc-300 sm:text-zinc-400 border-b border-zinc-700\"\n    >\n      <div class=\"flex-1 p-1 sm:p-2\">{{ betTitle() }}</div>\n      <div class=\"flex-1 p-1 sm:p-2\">{{ winTitle() }}</div>\n      <div class=\"flex-1 p-1 sm:p-2\">{{ balanceTitle() }}</div>\n    </div>\n    <div class=\"flex text-center\">\n      <div class=\"flex-1 p-1 sm:p-2\">\n        <div class=\"flex flex-col text-zinc-400 text-center items-center\">\n          <div class=\"flex space-x-0.5\">\n            <span>{{ currency() }}</span>\n            <div class=\"flex\">\n              <span>{{ formatAmount(bet()) }}</span\n              ><span>{{ lineLabel() }}</span>\n            </div>\n          </div>\n\n          <div\n            class=\"inline-flex items-center space-x-0.5 text-white font-medium\"\n          >\n            <span>{{ currency() }}</span>\n            <span>{{ formatAmount(bet()) }}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-1 p-1 sm:p-2 text-white font-medium\">\n        <div class=\"flex flex-col items-center\">\n          <div class=\"invisible\">\n            <span>{{ currency() }}</span>\n            <span>{{ formatAmount(win()) }}</span>\n          </div>\n          <div class=\"inline-flex items-center justify-center space-x-0.5\">\n            <span>{{ currency() }}</span>\n            <span>{{ formatAmount(win()) }}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex-1 p-1 sm:p-2 text-white font-medium\">\n        <div class=\"flex flex-col\">\n          @if (balanceOld() !== null) {\n            <span\n              class=\"inline-flex items-center justify-center space-x-0.5 text-zinc-400\"\n            >\n              <span>{{ currency() }}</span>\n              <span>{{ formatAmount(balanceOld()!) }}</span>\n            </span>\n          }\n          @if (balanceNew() !== null) {\n            <span class=\"inline-flex items-center justify-center space-x-0.5\">\n              <span>{{ currency() }}</span>\n              <span>{{ formatAmount(balanceNew()!) }}</span>\n            </span>\n          }\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Main Content: Default variant - Reel and Win Details -->\n  <div\n    class=\"flex-1 relative bg-zinc-900 overflow-hidden min-h-[22rem]\"\n    [ngClass]=\"{ hidden: isTrn() }\"\n  >\n    <div class=\"absolute inset-0 flex items-center\">\n      <!-- Content Area -->\n      <div class=\"flex-1 h-full flex items-center justify-center\">\n        <iframe\n          #gameIframe\n          class=\"absolute top-0 w-full min-w-lg origin-top h-220\"\n          frameborder=\"0\"\n          scrolling=\"no\"\n        ></iframe>\n        @if (isLoading()) {\n          <ap-loading-overlay class=\"absolute inset-0 bg-zinc-900\" @fadeOut />\n        }\n      </div>\n\n      <!-- Left Arrow -->\n      <div\n        class=\"absolute left-0 top-0 h-full w-16 flex items-center justify-center\"\n      >\n        @if (isPreRoundEnabled()) {\n          <ap-button\n            (click)=\"clickPreRound()\"\n            [icon]=\"'chevron-left'\"\n            [variant]=\"'rounded-icon'\"\n            [severity]=\"'contrast'\"\n            [size]=\"'medium'\"\n            [accentColor]=\"'zinc'\"\n          />\n        }\n      </div>\n\n      <!-- Right Arrow -->\n      <div\n        class=\"absolute right-0 top-0 h-full w-16 flex items-center justify-center z-10\"\n      >\n        @if (isNextRoundEnabled()) {\n          <ap-button\n            (click)=\"clickNextRound()\"\n            [severity]=\"'contrast'\"\n            [icon]=\"'chevron-right'\"\n            [variant]=\"'rounded-icon'\"\n            [size]=\"'medium'\"\n            [accentColor]=\"'zinc'\"\n          />\n        }\n      </div>\n    </div>\n  </div>\n\n  <!-- Bottom Bar: Plate Navigation -->\n\n  <!-- Main Content: TRN variant -->\n  @if (isTrn()) {\n    <div\n      class=\"flex flex-col bg-zinc-900 min-h-[22rem] items-center pt-8 rounded-xl\"\n    >\n      <div class=\"w-80 space-y-2 text-md min-w-[16rem]\">\n        <div class=\"flex justify-between items-center\">\n          <span class=\"text-left text-yellow-400 justify-self-start uppercase\"\n            >{{ listLabel1() }}:</span\n          >\n          <span class=\"text-yellow-200 font-normal\"\n            >{{ currency() }}{{ detailCurrencyNumber1() }}</span\n          >\n        </div>\n        <div class=\"flex justify-between items-center\">\n          <span class=\"text-left text-yellow-400 justify-self-start uppercase\"\n            >{{ listLabel2() }}:</span\n          >\n          <span class=\"text-yellow-200 font-normal\"\n            >{{ currency() }}{{ detailCurrencyNumber1() }}</span\n          >\n        </div>\n      </div>\n      <!-- Tournament -->\n      <table class=\"w-80 items-center border-collapse mt-6 text-sm\">\n        <thead class=\"bg-zinc-800\">\n          <tr>\n            <th class=\"px-2 py-1 border border-zinc-600 font-normal uppercase\">\n              {{ dateTable() }}\n            </th>\n            <th class=\"px-2 py-1 border border-zinc-600 font-normal uppercase\">\n              {{ statusTable() }}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"px-2 py-2 text-sm text-center border border-zinc-600\">\n              2026-01-20 15:30:20\n            </td>\n            <td class=\"px-2 py-2 border text-center border-zinc-600 uppercase\">\n              Running\n            </td>\n          </tr>\n          <tr>\n            <td class=\"px-2 py-2 text-sm text-center border border-zinc-600\">\n              2026-01-20 10:30:20\n            </td>\n            <td class=\"px-2 py-2 border text-center border-zinc-600 uppercase\">\n              Settled\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  } @else {}\n</div>\n" }]
    }], null, { gameIframe: [{
            type: ViewChild,
            args: ['gameIframe']
        }], iframeRef: [{
            type: ViewChild,
            args: ['gameIframe', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HistoryDetailComponent, { className: "HistoryDetailComponent", filePath: "src/app/pages/history-detail/history-detail.component.ts", lineNumber: 42 }); })();
//# sourceMappingURL=history-detail.component.js.map