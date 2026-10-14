import { Component, input, output, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApTrnCardTitleComponent } from '../../components/ap-trn-card-title/ap-trn-card-title.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "border-yellow-300": a0, "border-purple-300": a1 });
export class TrnGameConfirmComponent {
    dontShowStorageKey = 'ap_storage_trn_game_confirm_dont_show';
    appI18n = inject(AppI18nService);
    getQuickTitle = this.appI18n.computed('QuickRace_Tab', 'QUICK');
    getEventTitle = this.appI18n.computed('EventRace_Tab', 'EVENT');
    checkboxText = this.appI18n.computed('DontShow_CheckBox', 'Do not show again in this week.');
    getStartButton = this.appI18n.computed('Start_Btn', 'Start');
    storage = inject(StorageCtrlService);
    trn = inject(TrnCtrlService);
    /** 目前選擇的長期競賽 */
    selectedEvent = input(null);
    variant = input('event');
    header = input('Message');
    bannerImage = input('assets/images/tournament/quick-race/banner_default.png');
    iconImage = input('assets/images/tournament/icon-event.png');
    title = computed(() => { return this.variant() === 'event' ? 'Event Race' : 'Quick Race'; });
    subTitle = input('Tournament Confirmation Title');
    description = input('Win bets earn points, higher rank wins bigger prizes');
    // Internal signals for displaying data
    displayVariant = computed(() => { return this.variant(); });
    displayBanner = computed(() => { return this.bannerImage(); });
    displayTitle = computed(() => { return this.title(); });
    displaySubTitle = computed(() => { return this.selectedEvent()?.name || this.subTitle(); });
    displayDescription = computed(() => { return this.selectedEvent()?.description || this.description(); });
    // Checkbox state
    dontShowAgain = signal(false);
    // Output events
    close = output();
    constructor() {
    }
    ngOnInit() {
    }
    onCancel() {
        this.close.emit();
    }
    /* 這週不再顯示 */
    onCheckboxChange(event) {
        const target = event.target;
        this.dontShowAgain.set(target.checked);
    }
    getBannerImage() {
        const banner = this.displayBanner();
        const variant = this.displayVariant();
        const defaultBanner = variant === 'quick' || variant === 'yellow'
            ? 'assets/images/tournament/quick-race/banner_default.png'
            : 'assets/images/tournament/event-race/banner_default.png';
        return banner || defaultBanner;
    }
    /** 長期競賽 */
    onJoinEvent() {
        const selectedEvent = this.selectedEvent();
        if (!selectedEvent) {
            return;
        }
        if (this.dontShowAgain()) {
            this.setDontShowAgainByEvent(selectedEvent.id, new Date().getTime());
        }
        this.close.emit();
        this.trn.openEventRace(selectedEvent.id);
    }
    onJoinQuick() {
        const selectedQuick = this.selectedEvent();
        if (!selectedQuick) {
            return;
        }
        if (this.dontShowAgain()) {
            this.setDontShowAgainByEvent(selectedQuick.id, new Date().getTime());
        }
        this.close.emit();
        this.trn.sendJoinQuick();
    }
    setDontShowAgainByEvent(eventId, timestamp) {
        const raw = localStorage.getItem(this.dontShowStorageKey);
        const parsed = raw ? JSON.parse(raw) : null;
        const data = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
        data[eventId] = timestamp;
        localStorage.setItem(this.dontShowStorageKey, JSON.stringify(data));
    }
    static ɵfac = function TrnGameConfirmComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnGameConfirmComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrnGameConfirmComponent, selectors: [["trn-game-confirm"]], inputs: { selectedEvent: [1, "selectedEvent"], variant: [1, "variant"], header: [1, "header"], bannerImage: [1, "bannerImage"], iconImage: [1, "iconImage"], subTitle: [1, "subTitle"], description: [1, "description"] }, outputs: { close: "close" }, decls: 17, vars: 25, consts: [[1, "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "bg-black/60"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "variant", "header", "size"], [1, "relative", "px-4", "py-4", "text-center", "mx-8", "text-zinc-300", "select-none", "flex", "flex-col", "justify-center", "items-center", "gap-4"], [3, "variant", "title"], [1, "relative", "rounded-lg", "border-2", "object-contain-scale", "mx-auto", "w-72", "md:w-80", 3, "ngClass", "src"], [1, "relative", "text-xl", "font-bold", "tracking-wide"], [1, "list-disc", "list-inside", "text-left", "text-md", "md:text-sm", "space-y-2", "w-72", "md:w-80"], [1, "h-[0.15rem]", "mx-2", "my-2", "w-80", "bg-linear-to-r", "from-transparent", "to-transparent"], [1, "flex", "items-center", "justify-center", "gap-2", "mb-6"], ["type", "checkbox", "id", "dontShowAgain", 1, "w-5", "h-5", "cursor-pointer", 3, "change", "checked"], ["for", "dontShowAgain", 1, "text-left", "cursor-pointer"], [1, "pb-8", "flex", "justify-center"], [1, "w-48", 3, "clicked", "label", "accentColor", "size"]], template: function TrnGameConfirmComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
            i0.ɵɵlistener("close", function TrnGameConfirmComponent_Template_ap_ui_frame_popup_close_2_listener() { return ctx.onCancel(); });
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "ap-trn-card-title", 4)(5, "img", 5);
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "ul", 7);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "div", 8);
            i0.ɵɵelementStart(11, "div", 9)(12, "input", 10);
            i0.ɵɵlistener("change", function TrnGameConfirmComponent_Template_input_change_12_listener($event) { return ctx.onCheckboxChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "label", 11);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "div", 12)(16, "ap-button", 13);
            i0.ɵɵlistener("clicked", function TrnGameConfirmComponent_Template_ap_button_clicked_16_listener() { return ctx.displayVariant() === "quick" ? ctx.onJoinQuick() : ctx.onJoinEvent(); });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            let tmp_8_0;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("variant", ctx.displayVariant() === "event" ? "event" : "quick")("header", ctx.header())("size", "mobile");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("variant", ctx.displayVariant() === "event" ? "event" : "quick")("title", ctx.displayVariant() === "event" ? ctx.getEventTitle() : ctx.getQuickTitle());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(22, _c0, ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow", ctx.displayVariant() === "event" || ctx.displayVariant() === "purple"))("src", ctx.getBannerImage(), i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.displaySubTitle(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", `All bets boosted x${(tmp_8_0 = ctx.selectedEvent()) == null ? null : tmp_8_0.betMultiplier}, extra added to prize pool. Win bets earn points, higher rank wins bigger prizes.`, " ");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("via-yellow-300", ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow")("via-purple-300", ctx.displayVariant() === "event" || ctx.displayVariant() === "purple");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("accent-yellow-400", ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow")("accent-purple-400", ctx.displayVariant() === "event" || ctx.displayVariant() === "purple");
            i0.ɵɵproperty("checked", ctx.dontShowAgain());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.checkboxText(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("label", ctx.getStartButton())("accentColor", ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow" ? "yellow" : "purple")("size", "large");
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnGameConfirmComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'trn-game-confirm', imports: [
                    CommonModule, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent,
                ], template: "<div class=\"relative size-full grid place-items-center\">\n  <div class=\"absolute inset-0 bg-black/60\"></div>\n  <ap-ui-frame-popup\n    [variant]=\"displayVariant() === 'event' ? 'event' : 'quick'\"\n    [header]=\"header()\"\n    [size]=\"'mobile'\"\n    class=\"w-11/12 md:w-3/4 lg:w-1/2\"\n    (close)=\"onCancel()\"\n  >\n    <!-- Content -->\n    <div\n      class=\"relative px-4 py-4 text-center mx-8 text-zinc-300 select-none flex flex-col justify-center items-center gap-4\"\n    >\n      <!-- Tournament Title -->\n      <ap-trn-card-title\n        [variant]=\"displayVariant() === 'event' ? 'event' : 'quick'\"\n        [title]=\"displayVariant() === 'event' ? getEventTitle() : getQuickTitle()\"\n      />\n\n      <!-- Tournament Banner -->\n      <img\n        class=\"relative rounded-lg border-2 object-contain-scale mx-auto w-72 md:w-80\"\n        [ngClass]=\"{\n          'border-yellow-300': displayVariant() === 'quick' || displayVariant() === 'yellow',\n          'border-purple-300': displayVariant() === 'event' || displayVariant() === 'purple'\n        }\"\n        [src]=\"getBannerImage()\"\n      />\n\n      <!-- Match Details -->\n      <div class=\"relative text-xl font-bold tracking-wide\">\n        {{ displaySubTitle() }}\n      </div>\n\n      <!-- Bullet Points -->\n      <ul\n        class=\"list-disc list-inside text-left text-md md:text-sm space-y-2 w-72 md:w-80\"\n      >\n        {{`All bets boosted x${selectedEvent()?.betMultiplier}, extra added to prize pool.\n        Win bets earn points, higher rank wins bigger prizes.`}}\n        \n      </ul>\n\n      <!-- Separator -->\n      <div \n        class=\"h-[0.15rem] mx-2 my-2 w-80 bg-linear-to-r from-transparent to-transparent\"\n        [class.via-yellow-300]=\"displayVariant() === 'quick' || displayVariant() === 'yellow'\"\n        [class.via-purple-300]=\"displayVariant() === 'event' || displayVariant() === 'purple'\"\n      ></div>\n\n      <!-- checkbox -->\n      <div class=\"flex items-center justify-center gap-2 mb-6\">\n        <input\n          type=\"checkbox\"\n          id=\"dontShowAgain\"\n          [checked]=\"dontShowAgain()\"\n          (change)=\"onCheckboxChange($event)\"\n          class=\"w-5 h-5 cursor-pointer\"\n          [class.accent-yellow-400]=\"displayVariant() === 'quick' || displayVariant() === 'yellow'\"\n          [class.accent-purple-400]=\"displayVariant() === 'event' || displayVariant() === 'purple'\"\n        />\n\n        <label for=\"dontShowAgain\" class=\"text-left cursor-pointer\">\n          {{ checkboxText() }}\n        </label>\n      </div>\n    </div>\n\n    <!-- Footer -->\n    <div class=\"pb-8 flex justify-center\">\n      <ap-button\n        class=\"w-48\"\n        [label]=\"getStartButton()\"\n        (clicked)=\"displayVariant() === 'quick' ? onJoinQuick() : onJoinEvent()\"\n        [accentColor]=\"(displayVariant() === 'quick' || displayVariant() === 'yellow') ? 'yellow' : 'purple'\"\n        [size]=\"'large'\"\n      />\n    </div>\n  </ap-ui-frame-popup>\n</div>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrnGameConfirmComponent, { className: "TrnGameConfirmComponent", filePath: "src/app/pages/trn-game-confirm/trn-game-confirm.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=trn-game-confirm.component.js.map