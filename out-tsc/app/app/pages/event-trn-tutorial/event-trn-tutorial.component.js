import { Component, input, HostListener, output, signal, computed, inject, } from '@angular/core';
import { quickPages, eventPages, } from './event-trn-tutorial.data';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/logger/logger.service";
function EventTrnTutorialComponent_Conditional_0_Conditional_0_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_For_9_Template_button_click_0_listener() { const $index_r4 = i0.ɵɵrestoreView(_r3).$index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.goToPage($index_r4)); });
    i0.ɵɵelement(1, "span", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const $index_r4 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("aria-label", "Go to slide " + ($index_r4 + 1));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bg-yellow-400", ctx_r1.currentPage() === $index_r4)("bg-zinc-600", ctx_r1.currentPage() !== $index_r4);
} }
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 16);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_15_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.prevPage()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("size", "large")("label", ctx_r1.getPrevLabel())("severity", "secondary");
} }
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_16_Template(rf, ctx) { }
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 17);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_17_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.nextPage()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("size", "large")("label", ctx_r1.getNextLabel())("accentColor", "yellow");
} }
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 17);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_18_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onConfirm()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("size", "large")("label", ctx_r1.getConfirmText())("accentColor", "yellow");
} }
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onCancel()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
    i0.ɵɵlistener("close", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Template_ap_ui_frame_popup_close_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.close.emit()); });
    i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    i0.ɵɵelement(6, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵrepeaterCreate(8, EventTrnTutorialComponent_Conditional_0_Conditional_0_For_9_Template, 2, 5, "button", 8, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 9);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 10);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 11);
    i0.ɵɵconditionalCreate(15, EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_15_Template, 1, 3, "ap-button", 12)(16, EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_16_Template, 0, 0);
    i0.ɵɵconditionalCreate(17, EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_17_Template, 1, 3, "ap-button", 13)(18, EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_18_Template, 1, 3, "ap-button", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("variant", "quick")("size", "mobile")("header", ctx_r1.header());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.currentPageData().image, i0.ɵɵsanitizeUrl)("alt", "Tutorial page " + (ctx_r1.currentPage() + 1));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.pages());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.currentPageData().description, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.currentPage() + 1, " / ", ctx_r1.totalPages(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.isFirstPage() ? 15 : 16);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.isLastPage() ? 17 : 18);
} }
function EventTrnTutorialComponent_Conditional_0_Conditional_1_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_For_9_Template_button_click_0_listener() { const $index_r10 = i0.ɵɵrestoreView(_r9).$index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.goToPage($index_r10)); });
    i0.ɵɵelement(1, "span", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const $index_r10 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("aria-label", "Go to slide " + ($index_r10 + 1));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bg-purple-400", ctx_r1.currentPage() === $index_r10)("bg-zinc-600", ctx_r1.currentPage() !== $index_r10);
} }
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 16);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_15_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.prevPage()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("size", "large")("label", ctx_r1.getPrevLabel())("severity", "secondary");
} }
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_16_Template(rf, ctx) { }
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 17);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_17_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.nextPage()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("size", "large")("label", ctx_r1.getNextLabel())("accentColor", "purple");
} }
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 17);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_18_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.nextPage()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("size", "large")("label", ctx_r1.getConfirmText())("accentColor", "purple");
} }
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
    i0.ɵɵlistener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onCancel()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
    i0.ɵɵlistener("close", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Template_ap_ui_frame_popup_close_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.close.emit()); });
    i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    i0.ɵɵelement(6, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵrepeaterCreate(8, EventTrnTutorialComponent_Conditional_0_Conditional_1_For_9_Template, 2, 5, "button", 8, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 9);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 10);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 11);
    i0.ɵɵconditionalCreate(15, EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_15_Template, 1, 3, "ap-button", 12)(16, EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_16_Template, 0, 0);
    i0.ɵɵconditionalCreate(17, EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_17_Template, 1, 3, "ap-button", 13)(18, EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_18_Template, 1, 3, "ap-button", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("variant", "event")("size", "mobile")("header", ctx_r1.header());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.currentPageData().image, i0.ɵɵsanitizeUrl)("alt", "Tutorial page " + (ctx_r1.currentPage() + 1));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.pages());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.currentPageData().description, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.currentPage() + 1, " / ", ctx_r1.totalPages(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.isFirstPage() ? 15 : 16);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.isLastPage() ? 17 : 18);
} }
function EventTrnTutorialComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, EventTrnTutorialComponent_Conditional_0_Conditional_0_Template, 19, 10, "div", 0);
    i0.ɵɵconditionalCreate(1, EventTrnTutorialComponent_Conditional_0_Conditional_1_Template, 19, 10, "div", 0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.variant() === "quick" ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.variant() === "event" ? 1 : -1);
} }
export class EventTrnTutorialComponent {
    logger;
    //* 服務注入 */
    appI18n = inject(AppI18nService);
    api = inject(AppInterfaceService);
    //* 本地化文本 */
    header = this.appI18n.computed('Tutorial_Title', 'Tutorial');
    getNextLabel = this.appI18n.computed('Next_Btn', 'Next');
    getPrevLabel = this.appI18n.computed('Previous_Btn', 'Previous');
    getConfirmText = this.appI18n.computed('OK_Btn', 'Got It');
    getQuickTutorialContent1 = this.appI18n.computed('Quick_Tutorial_Content1', 'Click "Find Match" to join a Quick Match.');
    getQuickTutorialContent2 = this.appI18n.computed('Quick_Tutorial_Content2', 'Win bets earn points— higher scores mean bigger prizes.');
    getQuickTutorialContent3 = this.appI18n.computed('Quick_Tutorial_Content3', 'UBets x1.2 in match, extra goes to prize pool.');
    getQuickTutorialContent4 = this.appI18n.computed('Quick_Tutorial_Content4', 'You can toggle off extra bets anytime (no points counted).');
    getEventTutorialContent1 = this.appI18n.computed('Event_Tutorial_Content1', 'Join special tournament events.');
    getEventTutorialContent2 = this.appI18n.computed('Event_Tutorial_Content2', 'Compete for exclusive prizes.');
    getEventTutorialContent3 = this.appI18n.computed('Event_Tutorial_Content3', 'Track your ranking in real-time.');
    getEventTutorialContent4 = this.appI18n.computed('Event_Tutorial_Content4', 'Win exclusive event rewards.');
    constructor(logger) {
        this.logger = logger;
    }
    //* 輸出事件 */
    close = output();
    back = output();
    //* 組件輸入 */
    variant = input('quick');
    isVisible = input(true);
    confirmText = input('Confirm');
    confirm = output();
    //* 內部狀態 */
    currentPage = signal(0);
    quickPages = quickPages;
    eventPages = eventPages;
    quickPagesLocalized = computed(() => {
        const pages = [...this.quickPages];
        if (pages[0]) {
            pages[0] = {
                ...pages[0],
                image: 'assets/images/tutorial/quick/tutorial-1.png',
                description: this.getQuickTutorialContent1(),
            };
        }
        if (pages[1]) {
            pages[1] = {
                ...pages[1],
                image: 'assets/images/tutorial/quick/tutorial-2.png',
                description: this.getQuickTutorialContent2(),
            };
        }
        if (pages[2]) {
            pages[2] = {
                ...pages[2],
                image: 'assets/images/tutorial/quick/tutorial-3.png',
                description: this.getQuickTutorialContent3(),
            };
        }
        if (pages[3]) {
            pages[3] = {
                ...pages[3],
                image: 'assets/images/tutorial/quick/tutorial-4.png',
                description: this.getQuickTutorialContent4(),
            };
        }
        return pages;
    });
    eventPagesLocalized = computed(() => {
        const pages = [...this.eventPages];
        if (pages[0]) {
            pages[0] = {
                ...pages[0],
                image: 'assets/images/tutorial/event/tutorial-1.png',
                description: this.getEventTutorialContent1(),
            };
        }
        if (pages[1]) {
            pages[1] = {
                ...pages[1],
                image: 'assets/images/tutorial/event/tutorial-2.png',
                description: this.getEventTutorialContent2(),
            };
        }
        if (pages[2]) {
            pages[2] = {
                ...pages[2],
                image: 'assets/images/tutorial/event/tutorial-3.png',
                description: this.getEventTutorialContent3(),
            };
        }
        if (pages[3]) {
            pages[3] = {
                ...pages[3],
                image: 'assets/images/tutorial/event/tutorial-4.png',
                description: this.getEventTutorialContent4(),
            };
        }
        return pages;
    });
    pages = computed(() => this.variant() === 'quick'
        ? this.quickPagesLocalized()
        : this.eventPagesLocalized());
    totalPages = computed(() => this.pages().length);
    currentPageData = computed(() => this.pages()[this.currentPage()]);
    isFirstPage = computed(() => this.currentPage() === 0);
    isLastPage = computed(() => this.currentPage() === this.totalPages() - 1);
    onConfirm() {
        this.confirm.emit();
        this.close.emit();
    }
    onCancel() {
        this.currentPage.set(0);
        this.close.emit();
    }
    //* 分頁控制方法 */
    nextPage() {
        if (!this.isLastPage()) {
            this.currentPage.set(this.currentPage() + 1);
        }
    }
    prevPage() {
        if (!this.isFirstPage()) {
            this.currentPage.set(this.currentPage() - 1);
        }
    }
    goToPage(index) {
        if (index >= 0 && index < this.totalPages()) {
            this.currentPage.set(index);
        }
    }
    onKey(e) {
        if (e.key === 'Escape')
            this.onCancel();
        if (e.key === 'Enter')
            this.onConfirm();
        if (e.key === 'ArrowLeft')
            this.prevPage();
        if (e.key === 'ArrowRight')
            this.nextPage();
    }
    handleClose() {
        this.onCancel();
    }
    handleBack() {
        this.back.emit();
    }
    static ɵfac = function EventTrnTutorialComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventTrnTutorialComponent)(i0.ɵɵdirectiveInject(i1.LoggerService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventTrnTutorialComponent, selectors: [["event-trn-tutorial"]], hostBindings: function EventTrnTutorialComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function EventTrnTutorialComponent_keydown_HostBindingHandler($event) { return ctx.onKey($event); }, i0.ɵɵresolveDocument);
        } }, inputs: { variant: [1, "variant"], isVisible: [1, "isVisible"], confirmText: [1, "confirmText"] }, outputs: { close: "close", back: "back", confirm: "confirm" }, decls: 1, vars: 1, consts: [[1, "relative", "size-full", "flex", "items-center", "justify-center"], [1, "absolute", "inset-0", "bg-black/60", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "variant", "size", "header"], [1, "bg-zinc-800", "px-4", "py-8", "text-center", "mx-8", "select-none"], [1, "relative", "w-full"], [1, "relative", "overflow-hidden", "rounded-lg", "h-64", "flex", "items-center", "justify-center"], [1, "max-h-full", "scale-105", "object-contain", "transition-all", "duration-300", 3, "src", "alt"], [1, "flex", "justify-center", "gap-2", "mt-4"], ["type", "button", 1, "transition-all", "duration-200", "hover:scale-110", "cursor-pointer"], [1, "mt-4", "text-xl", "font-medium", "text-zinc-200", "h-16", "sm:h-20"], [1, "mt-2", "text-sm", "text-zinc-400"], [1, "px-8", "pb-8", "flex", "justify-between", "gap-8"], [1, "w-full", 3, "size", "label", "severity"], [1, "w-full", 3, "size", "label", "accentColor"], ["type", "button", 1, "transition-all", "duration-200", "hover:scale-110", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "justify-center", "rounded-full", "size-2"], [1, "w-full", 3, "click", "size", "label", "severity"], [1, "w-full", 3, "click", "size", "label", "accentColor"]], template: function EventTrnTutorialComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, EventTrnTutorialComponent_Conditional_0_Template, 2, 2);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.isVisible() ? 0 : -1);
        } }, dependencies: [ApUiFramePopupComponent, ApButtonComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventTrnTutorialComponent, [{
        type: Component,
        args: [{ selector: 'event-trn-tutorial', imports: [ApUiFramePopupComponent, ApButtonComponent, ApUiFramePopupComponent,], template: "@if (isVisible()) {\n  @if (variant() === \"quick\") {\n    <div class=\"relative size-full flex items-center justify-center\">\n      <div class=\"absolute inset-0 bg-black/60\" (click)=\"onCancel()\"></div>\n      <ap-ui-frame-popup\n        [variant]=\"'quick'\"\n        [size]=\"'mobile'\"\n        [header]=\"header()\"\n        class=\"w-11/12 md:w-3/4 lg:w-1/2\"\n        (close)=\"close.emit()\"\n      >\n        <!-- Content -->\n        <div class=\"bg-zinc-800 px-4 py-8 text-center mx-8 select-none\">\n          <div class=\"relative w-full\">\n            <!-- Carousel wrapper -->\n            <div\n              class=\"relative overflow-hidden rounded-lg h-64 flex items-center justify-center\"\n            >\n              <!-- Current Page Image -->\n              <img\n                [src]=\"currentPageData().image\"\n                class=\"max-h-full scale-105 object-contain transition-all duration-300\"\n                [alt]=\"'Tutorial page ' + (currentPage() + 1)\"\n              />\n            </div>\n\n            <!-- Page Indicators -->\n            <div class=\"flex justify-center gap-2 mt-4\">\n              @for (page of pages(); track $index) {\n                <button\n                  type=\"button\"\n                  (click)=\"goToPage($index)\"\n                  class=\"transition-all duration-200 hover:scale-110 cursor-pointer\"\n                  [attr.aria-label]=\"'Go to slide ' + ($index + 1)\"\n                >\n                  <span\n                    class=\"flex items-center justify-center rounded-full size-2\"\n                    [class.bg-yellow-400]=\"currentPage() === $index\"\n                    [class.bg-zinc-600]=\"currentPage() !== $index\"\n                  ></span>\n                </button>\n              }\n            </div>\n\n            <!-- Description -->\n            <div class=\"mt-4 text-xl font-medium text-zinc-200 h-16 sm:h-20\">\n              {{ currentPageData().description }}\n            </div>\n\n            <!-- Page Counter -->\n            <div class=\"mt-2 text-sm text-zinc-400\">\n              {{ currentPage() + 1 }} / {{ totalPages() }}\n            </div>\n          </div>\n        </div>\n\n        <!-- Footer -->\n        <div class=\"px-8 pb-8 flex justify-between gap-8\">\n          @if (!isFirstPage()) {\n            <ap-button\n              class=\"w-full\"\n              [size]=\"'large'\"\n              [label]=\"getPrevLabel()\"\n              (click)=\"prevPage()\"\n              [severity]=\"'secondary'\"\n            />\n          } @else {}\n          @if (!isLastPage()) {\n            <ap-button\n              class=\"w-full\"\n              [size]=\"'large'\"\n              [label]=\"getNextLabel()\"\n              (click)=\"nextPage()\"\n              [accentColor]=\"'yellow'\"\n            />\n          } @else {\n            <ap-button\n              class=\"w-full\"\n              [size]=\"'large'\"\n              [label]=\"getConfirmText()\"\n              (click)=\"onConfirm()\"\n              [accentColor]=\"'yellow'\"\n            />\n          }\n        </div>\n      </ap-ui-frame-popup>\n    </div>\n  }\n  @if (variant() === \"event\") {\n    <div class=\"relative size-full flex items-center justify-center\">\n      <div class=\"absolute inset-0 bg-black/60\" (click)=\"onCancel()\"></div>\n      <ap-ui-frame-popup\n        [variant]=\"'event'\"\n        [size]=\"'mobile'\"\n        [header]=\"header()\"\n        class=\"w-11/12 md:w-3/4 lg:w-1/2\"\n        (close)=\"close.emit()\"\n      >\n        <!-- Content -->\n        <div class=\"bg-zinc-800 px-4 py-8 text-center mx-8 select-none\">\n          <div class=\"relative w-full\">\n            <!-- Carousel wrapper -->\n            <div\n              class=\"relative overflow-hidden rounded-lg h-64 flex items-center justify-center\"\n            >\n              <!-- Current Page Image -->\n              <img\n                [src]=\"currentPageData().image\"\n                class=\"max-h-full scale-105 object-contain transition-all duration-300\"\n                [alt]=\"'Tutorial page ' + (currentPage() + 1)\"\n              />\n            </div>\n\n            <!-- Page Indicators -->\n            <div class=\"flex justify-center gap-2 mt-4\">\n              @for (page of pages(); track $index) {\n                <button\n                  type=\"button\"\n                  (click)=\"goToPage($index)\"\n                  class=\"transition-all duration-200 hover:scale-110 cursor-pointer\"\n                  [attr.aria-label]=\"'Go to slide ' + ($index + 1)\"\n                >\n                  <span\n                    class=\"flex items-center justify-center rounded-full size-2\"\n                    [class.bg-purple-400]=\"currentPage() === $index\"\n                    [class.bg-zinc-600]=\"currentPage() !== $index\"\n                  >\n                  </span>\n                </button>\n              }\n            </div>\n\n            <!-- Description -->\n            <div class=\"mt-4 text-xl font-medium text-zinc-200 h-16 sm:h-20\">\n              {{ currentPageData().description }}\n            </div>\n\n            <!-- Page Counter -->\n            <div class=\"mt-2 text-sm text-zinc-400\">\n              {{ currentPage() + 1 }} / {{ totalPages() }}\n            </div>\n          </div>\n        </div>\n\n        <!-- Footer -->\n        <div class=\"px-8 pb-8 flex justify-between gap-8\">\n          @if (!isFirstPage()) {\n            <ap-button\n              class=\"w-full\"\n              [size]=\"'large'\"\n              [label]=\"getPrevLabel()\"\n              (click)=\"prevPage()\"\n              [severity]=\"'secondary'\"\n            />\n          } @else {}\n          @if (!isLastPage()) {\n            <ap-button\n              class=\"w-full\"\n              [size]=\"'large'\"\n              [label]=\"getNextLabel()\"\n              (click)=\"nextPage()\"\n              [accentColor]=\"'purple'\"\n            />\n          } @else {\n            <ap-button\n              class=\"w-full\"\n              [size]=\"'large'\"\n              [label]=\"getConfirmText()\"\n              (click)=\"nextPage()\"\n              [accentColor]=\"'purple'\"\n            />\n          }\n        </div>\n      </ap-ui-frame-popup>\n    </div>\n  }\n}\n" }]
    }], () => [{ type: i1.LoggerService }], { onKey: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventTrnTutorialComponent, { className: "EventTrnTutorialComponent", filePath: "src/app/pages/event-trn-tutorial/event-trn-tutorial.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=event-trn-tutorial.component.js.map