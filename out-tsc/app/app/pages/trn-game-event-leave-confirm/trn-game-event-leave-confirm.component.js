import { Component, computed, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApTrnCardTitleComponent } from '../../components/ap-trn-card-title/ap-trn-card-title.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "text-yellow-300": a0, "text-purple-300": a1 });
export class TrnGameEventLeaveConfirmComponent {
    appI18n = inject(AppI18nService);
    header = this.appI18n.computed('message', 'Message');
    getQuickTitle = this.appI18n.computed('QuickRace_Tab', 'QUICK');
    getEventTitle = this.appI18n.computed('EventRace_Tab', 'EVENT');
    getLeaveButton = this.appI18n.computed('Exit_Btn', 'Confirm');
    subTitle = this.appI18n.computed('EventLeave_Info_Title', 'Confirm to leave the Event Race?');
    displayContent = this.appI18n.computed('EventLeave_Info_Content', '‧ After Leave long-term match, you can rejoin Quick Match.‧ Leaving keeps your score (Ranking keeps updating) ‧ You can rejoin long-term via original entry.');
    storage = inject(StorageCtrlService);
    trn = inject(TrnCtrlService);
    /** 目前選擇的長期競賽 */
    selectedEvent = input(null);
    variant = input('event');
    getEventIcon = input('gift');
    getQuickIcon = input('trophy');
    title = computed(() => {
        return this.variant() === 'event' ? 'Event Race' : 'Quick Race';
    });
    description = input('Win bets earn points, higher rank wins bigger prizes');
    // Internal signals for displaying data
    displayVariant = computed(() => {
        return this.variant();
    });
    displayTitle = computed(() => {
        return this.title();
    });
    displaySubTitle = computed(() => {
        return this.selectedEvent()?.name || this.subTitle();
    });
    // Output events
    close = output();
    constructor() { }
    ngOnInit() { }
    onCancel() {
        this.close.emit();
    }
    /** 長期競賽 */
    onLeaveEvent() {
        this.close.emit();
        this.trn.closeEventRace();
        this.storage.trnEventRunning = null;
    }
    static ɵfac = function TrnGameEventLeaveConfirmComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnGameEventLeaveConfirmComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrnGameEventLeaveConfirmComponent, selectors: [["trn-game-event-leave-confirm"]], inputs: { selectedEvent: [1, "selectedEvent"], variant: [1, "variant"], getEventIcon: [1, "getEventIcon"], getQuickIcon: [1, "getQuickIcon"], description: [1, "description"] }, outputs: { close: "close" }, decls: 13, vars: 19, consts: [[1, "relative", "size-full", "grid", "place-items-center"], [1, "absolute", "inset-0", "bg-black/60"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "variant", "header", "size"], [1, "relative", "px-4", "py-4", "text-center", "mx-8", "text-zinc-300", "select-none", "flex", "flex-col", "justify-center", "items-center", "gap-4"], [3, "variant", "title"], [1, "size-20", 3, "ngClass", "name"], [1, "relative", "text-2xl", "font-bold", "w-72", "md:w-80", "tracking-wide"], [1, "text-left", "text-md", "md:text-sm", "space-y-2", "w-72", "md:w-80"], [1, "h-[0.15rem]", "mx-2", "my-2", "w-80", "bg-linear-to-r", "from-transparent", "to-transparent"], [1, "pb-8", "flex", "justify-center"], [1, "w-48", 3, "clicked", "label", "accentColor", "size"]], template: function TrnGameEventLeaveConfirmComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
            i0.ɵɵlistener("close", function TrnGameEventLeaveConfirmComponent_Template_ap_ui_frame_popup_close_2_listener() { return ctx.onCancel(); });
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "ap-trn-card-title", 4)(5, "ap-icon", 5);
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 9)(12, "ap-button", 10);
            i0.ɵɵlistener("clicked", function TrnGameEventLeaveConfirmComponent_Template_ap_button_clicked_12_listener() { return ctx.onLeaveEvent(); });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("variant", ctx.displayVariant() === "event" ? "event" : "quick")("header", ctx.header())("size", "mobile");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("variant", ctx.displayVariant() === "event" ? "event" : "quick")("title", ctx.displayVariant() === "event" ? ctx.getEventTitle() : ctx.getQuickTitle());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(16, _c0, ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow", ctx.displayVariant() === "event" || ctx.displayVariant() === "purple"))("name", ctx.displayVariant() === "event" ? ctx.getEventIcon() : ctx.getQuickIcon());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.displaySubTitle(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.displayContent(), " ");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("via-yellow-300", ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow")("via-purple-300", ctx.displayVariant() === "event" || ctx.displayVariant() === "purple");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("label", ctx.getLeaveButton())("accentColor", ctx.displayVariant() === "quick" || ctx.displayVariant() === "yellow" ? "yellow" : "purple")("size", "large");
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnGameEventLeaveConfirmComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'trn-game-event-leave-confirm', imports: [CommonModule, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent, ApIconComponent,], template: "<div class=\"relative size-full grid place-items-center\">\n  <div class=\"absolute inset-0 bg-black/60\"></div>\n  <ap-ui-frame-popup\n    [variant]=\"displayVariant() === 'event' ? 'event' : 'quick'\"\n    [header]=\"header()\"\n    [size]=\"'mobile'\"\n    class=\"w-11/12 md:w-3/4 lg:w-1/2\"\n    (close)=\"onCancel()\"\n  >\n    <!-- Content -->\n    <div\n      class=\"relative px-4 py-4 text-center mx-8 text-zinc-300 select-none flex flex-col justify-center items-center gap-4\"\n    >\n      <!-- Tournament Title -->\n      <ap-trn-card-title\n        [variant]=\"displayVariant() === 'event' ? 'event' : 'quick'\"\n        [title]=\"\n          displayVariant() === 'event' ? getEventTitle() : getQuickTitle()\n        \"\n      />\n\n      <!-- Tournament Icon -->\n      <ap-icon\n        class=\"size-20\"\n        [ngClass]=\"{\n          'text-yellow-300':\n            displayVariant() === 'quick' || displayVariant() === 'yellow',\n          'text-purple-300':\n            displayVariant() === 'event' || displayVariant() === 'purple',\n        }\"\n        [name]=\"displayVariant() === 'event' ? getEventIcon() : getQuickIcon()\"\n      />\n\n      <!-- Match Details -->\n      <div class=\"relative text-2xl font-bold w-72 md:w-80 tracking-wide\">\n        {{ displaySubTitle() }}\n      </div>\n\n      <!-- Content -->\n      <div class=\"text-left text-md md:text-sm space-y-2 w-72 md:w-80\">\n        {{ displayContent() }}\n      </div>\n\n      <!-- Separator -->\n      <div\n        class=\"h-[0.15rem] mx-2 my-2 w-80 bg-linear-to-r from-transparent to-transparent\"\n        [class.via-yellow-300]=\"\n          displayVariant() === 'quick' || displayVariant() === 'yellow'\n        \"\n        [class.via-purple-300]=\"\n          displayVariant() === 'event' || displayVariant() === 'purple'\n        \"\n      ></div>\n    </div>\n\n    <!-- Footer -->\n    <div class=\"pb-8 flex justify-center\">\n      <ap-button\n        class=\"w-48\"\n        [label]=\"getLeaveButton()\"\n        (clicked)=\"onLeaveEvent()\"\n        [accentColor]=\"\n          displayVariant() === 'quick' || displayVariant() === 'yellow'\n            ? 'yellow'\n            : 'purple'\n        \"\n        [size]=\"'large'\"\n      />\n    </div>\n  </ap-ui-frame-popup>\n</div>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrnGameEventLeaveConfirmComponent, { className: "TrnGameEventLeaveConfirmComponent", filePath: "src/app/pages/trn-game-event-leave-confirm/trn-game-event-leave-confirm.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=trn-game-event-leave-confirm.component.js.map