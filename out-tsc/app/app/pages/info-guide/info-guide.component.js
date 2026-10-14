import { Component, ViewChild, computed, inject, signal, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApInfoGuideComponent } from '../../components/ap-info-guide/ap-info-guide.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import * as i0 from "@angular/core";
const _c0 = ["contentScroller"];
function InfoGuideComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.gameVersion(), " ");
} }
export class InfoGuideComponent {
    contentScroller;
    appI18n = inject(AppI18nService);
    api = inject(AppInterfaceService);
    isDragging = signal(false);
    dragStartY = 0;
    dragStartScrollTop = 0;
    //** Info Guide 文字說明，從API取得 */
    //* Spin */
    getSpinItem1 = this.appI18n.computed('Spin_content_01', 'Tap to start spinning by the selected bet.');
    getSpinItem2 = this.appI18n.computed('Spin_content_02', 'Tap to stop Auto Spin.');
    getSpinTitle = this.appI18n.computed('Spin_title', 'SPIN');
    //* Auto Spin */
    getAutoSpinItem1 = this.appI18n.computed('Auto_content_01', 'Tap to select numbers of Auto Spins.');
    getAutoSpinItem2 = this.appI18n.computed('Auto_content_02', 'Remaining spins will be shown in the spin button.');
    getAutoSpinTitle = this.appI18n.computed('Auto_title', 'AUTO SPIN');
    //* Turbo Spin */
    getTurboItem1 = this.appI18n.computed('Turbo_content', 'Tap to start Turbo Spin.');
    getTurboTitle = this.appI18n.computed('Turbo_title', 'TURBO');
    //* Add Bet */
    getAddBetItem1 = this.appI18n.computed('Bet_content', 'Tap to increase or reduce the bet amount.');
    getAddBetTitle = this.appI18n.computed('Bet_title', 'BET');
    //* Menu */
    getMenuItem1 = this.appI18n.computed('Option_content', 'Tap to open the options panel.');
    getMenuTitle = this.appI18n.computed('Option_title', 'OPTION');
    //* Info */
    getInfoItem1 = this.appI18n.computed('Option_Info_content', 'Tap to view the game rules and paytable.');
    //* History */
    getHistoryItem1 = this.appI18n.computed('Option_History_content', 'Tap to view your betting history.');
    //* Sound ON */
    getSoundOnItem1 = this.appI18n.computed('Option_Sound_content', 'Tap to turn on the sound.');
    //* Music ON */
    getMusicOnItem1 = this.appI18n.computed('Option_Music_content', 'Tap to turn on the music.');
    //* Note */
    getNoteItem1 = this.appI18n.computed('Note_content_01', 'Tap to view the noteFailed network connection or malfunction, all winning prizes and games are voids..');
    getNoteItem2 = this.appI18n.computed('Note_content_02', 'When the internet is disconnected, the triggered free games or bonus games will be automatically completed.');
    getNoteTitle = this.appI18n.computed('Note_title', 'NOTE');
    gameIframeCtrl = inject(GameIframeCtrlService);
    gameVersion = computed(() => {
        const data = this.gameIframeCtrl.clickIntoMainGameData();
        return data?.gameVersion ?? 'unknown';
    });
    ngOnInit() { }
    onCellClick(cell) { }
    onDragStart(event) {
        const scroller = this.contentScroller?.nativeElement;
        if (!scroller)
            return;
        this.isDragging.set(true);
        this.dragStartY = event.clientY;
        this.dragStartScrollTop = scroller.scrollTop;
    }
    onDragMove(event) {
        const scroller = this.contentScroller?.nativeElement;
        if (!scroller || !this.isDragging())
            return;
        const deltaY = event.clientY - this.dragStartY;
        scroller.scrollTop = this.dragStartScrollTop - deltaY;
    }
    onDragEnd() {
        this.isDragging.set(false);
    }
    static ɵfac = function InfoGuideComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InfoGuideComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoGuideComponent, selectors: [["info-guide"]], viewQuery: function InfoGuideComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentScroller = _t.first);
        } }, decls: 23, vars: 36, consts: [["contentScroller", ""], [1, "flex", "h-full", "max-h-full", "flex-col", "overflow-y-auto", "bg-zinc-900", "pt-8", "pb-8", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "w-full", "max-w-xl", "mx-auto", "flex", "flex-col"], [1, "flex-col", "justify-left", "w-full", "select-none"], [3, "icon", "title", "getItem1", "getItem2"], [1, "flex-col", "pl-10"], [3, "variant", "icon", "getItem1"], [1, "flex-1", "p-4", "sm:p-0"], [1, "text-xl", "font-semibold", "text-yellow-200", "mt-8", "space-y-2"], [1, "list-disc", "list-inside", "space-y-2"], [1, "text-center", "text-sm", "text-zinc-400", "mt-4"]], template: function InfoGuideComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1, 0);
            i0.ɵɵlistener("mousedown", function InfoGuideComponent_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragStart($event)); })("mousemove", function InfoGuideComponent_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragMove($event)); })("mouseup", function InfoGuideComponent_Template_div_mouseup_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragEnd()); })("mouseleave", function InfoGuideComponent_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragEnd()); });
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "ap-info-guide", 4)(5, "ap-info-guide", 4)(6, "ap-info-guide", 4)(7, "ap-info-guide", 4)(8, "ap-info-guide", 4);
            i0.ɵɵelementStart(9, "div", 5);
            i0.ɵɵelement(10, "ap-info-guide", 6)(11, "ap-info-guide", 6)(12, "ap-info-guide", 6)(13, "ap-info-guide", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 7)(15, "div", 8);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "ul", 9)(18, "li");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "li");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(22, InfoGuideComponent_Conditional_22_Template, 2, 1, "div", 10);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("icon", "spin default")("title", ctx.getSpinTitle())("getItem1", ctx.getSpinItem1())("getItem2", ctx.getSpinItem2());
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", "autoplay")("title", ctx.getAutoSpinTitle())("getItem1", ctx.getAutoSpinItem1())("getItem2", ctx.getAutoSpinItem2());
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", "turbo")("title", ctx.getTurboTitle())("getItem1", ctx.getTurboItem1())("getItem2", "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", "increase default")("title", ctx.getAddBetTitle())("getItem1", ctx.getAddBetItem1())("getItem2", "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", "bar-3")("title", ctx.getMenuTitle())("getItem1", ctx.getMenuItem1())("getItem2", "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("variant", "description")("icon", "exclamation-circle default")("getItem1", ctx.getInfoItem1());
            i0.ɵɵadvance();
            i0.ɵɵproperty("variant", "description")("icon", "document-text default")("getItem1", ctx.getHistoryItem1());
            i0.ɵɵadvance();
            i0.ɵɵproperty("variant", "description")("icon", "speaker-wave default")("getItem1", ctx.getSoundOnItem1());
            i0.ɵɵadvance();
            i0.ɵɵproperty("variant", "description")("icon", "musical-note default")("getItem1", ctx.getMusicOnItem1());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.getNoteTitle(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.getNoteItem1());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getNoteItem2());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.gameVersion() ? 22 : -1);
        } }, dependencies: [CommonModule, ApInfoGuideComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoGuideComponent, [{
        type: Component,
        args: [{ selector: 'info-guide', imports: [CommonModule, ApInfoGuideComponent], template: "<div\n  #contentScroller\n  class=\"flex h-full max-h-full flex-col overflow-y-auto bg-zinc-900 pt-8 pb-8\"\n  (mousedown)=\"onDragStart($event)\"\n  (mousemove)=\"onDragMove($event)\"\n  (mouseup)=\"onDragEnd()\"\n  (mouseleave)=\"onDragEnd()\"\n>\n  <div class=\"w-full max-w-xl mx-auto flex flex-col\">\n    <div class=\"flex-col justify-left w-full select-none\">\n      <!-- Spin -->\n      <ap-info-guide\n        [icon]=\"'spin default'\"\n        [title]=\"getSpinTitle()\"\n        [getItem1]=\"getSpinItem1()\"\n        [getItem2]=\"getSpinItem2()\"\n      />\n      <!-- Auto Spin -->\n      <ap-info-guide\n        [icon]=\"'autoplay'\"\n        [title]=\"getAutoSpinTitle()\"\n        [getItem1]=\"getAutoSpinItem1()\"\n        [getItem2]=\"getAutoSpinItem2()\"\n      />\n      <!-- Turbo Spin -->\n      <ap-info-guide\n        [icon]=\"'turbo'\"\n        [title]=\"getTurboTitle()\"\n        [getItem1]=\"getTurboItem1()\"\n        [getItem2]=\"''\"\n      />\n      <!-- Add Bet -->\n      <ap-info-guide\n        [icon]=\"'increase default'\"\n        [title]=\"getAddBetTitle()\"\n        [getItem1]=\"getAddBetItem1()\"\n        [getItem2]=\"''\"\n      />\n\n      <!-- Menu -->\n      <ap-info-guide\n        [icon]=\"'bar-3'\"\n        [title]=\"getMenuTitle()\"\n        [getItem1]=\"getMenuItem1()\"\n        [getItem2]=\"''\"\n      />\n      <div class=\"flex-col pl-10\">\n        <!-- Info -->\n        <ap-info-guide\n          [variant]=\"'description'\"\n          [icon]=\"'exclamation-circle default'\"\n          [getItem1]=\"getInfoItem1()\"\n        />\n        <!-- History -->\n        <ap-info-guide\n          [variant]=\"'description'\"\n          [icon]=\"'document-text default'\"\n          [getItem1]=\"getHistoryItem1()\"\n        />\n        <!-- Sound ON -->\n        <ap-info-guide\n          [variant]=\"'description'\"\n          [icon]=\"'speaker-wave default'\"\n          [getItem1]=\"getSoundOnItem1()\"\n        />\n        <!-- Music ON -->\n        <ap-info-guide\n          [variant]=\"'description'\"\n          [icon]=\"'musical-note default'\"\n          [getItem1]=\"getMusicOnItem1()\"\n        />\n      </div>\n\n      <div class=\"flex-1 p-4 sm:p-0\">\n        <div class=\"text-xl font-semibold text-yellow-200 mt-8 space-y-2\">\n          {{ getNoteTitle() }}\n        </div>\n        <ul class=\"list-disc list-inside space-y-2\">\n          <li>{{ getNoteItem1() }}</li>\n          <li>{{ getNoteItem2() }}</li>\n        </ul>\n        @if (gameVersion()) {\n          <div class=\"text-center text-sm text-zinc-400 mt-4\">\n            {{ gameVersion() }}\n          </div>\n        }\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, { contentScroller: [{
            type: ViewChild,
            args: ['contentScroller']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfoGuideComponent, { className: "InfoGuideComponent", filePath: "src/app/pages/info-guide/info-guide.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=info-guide.component.js.map