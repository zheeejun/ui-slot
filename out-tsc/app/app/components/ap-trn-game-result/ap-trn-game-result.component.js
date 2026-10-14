import { Component, input, output, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApTrnCardTitleComponent } from '../ap-trn-card-title/ap-trn-card-title.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApTrnListRowComponent } from '../ap-trn-list-row/ap-trn-list-row.component';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { defaultPlayersList, } from '../ap-trn-list-row/ap-trn-list-row.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "text-yellow-gradient": a0, "text-purple-gradient": a1 });
const _c1 = (a0, a1) => ({ "text-yellow-200": a0, "text-purple-300": a1 });
function ApTrnGameResultComponent_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div");
    i0.ɵɵtext(2, "Campaign ID : ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.getCampaignID());
} }
export class ApTrnGameResultComponent {
    getEventDetailsButtonText = input('Event Details');
    getPrizeLabel = input('Prize');
    getButtonLabel = input('Confirm');
    getQuickTitle = input('QUICK');
    getEventTitle = input('EVENT');
    getRoomID = input('123456abcdefg'); //要改成實際此筆的Room ID
    getCampaignID = input('abcdefg123456'); //要改成實際此筆的活動 ID
    data = input(null);
    playList = input(defaultPlayersList.slice(0, 5));
    currency = input('$');
    rank = input(1);
    prize = input(0);
    // Customizable inputs (can be overridden)
    variant = input('quick');
    EventIcon = input('assets/images/tournament/icon-event.png');
    EventTitle = input('Event Title');
    header = input('Game Result');
    displayVariant = signal('quick');
    displayEventIcon = signal('');
    displayEventTitle = signal('');
    constructor() {
        effect(() => {
            const listData = this.data();
            if (listData) {
                this.displayVariant.set(listData.variant);
            }
            else {
                // Use input values when no data provided
                this.displayVariant.set(this.variant());
                this.displayEventIcon.set(this.EventIcon());
                this.displayEventTitle.set(this.EventTitle());
            }
        });
    }
    clickClose = output();
    clickConfirm = output();
    raceDetails = output();
    onRaceDetails() {
        this.raceDetails.emit();
    }
    /*
    @HostListener('document:keydown', ['$event'])
    onKey(e: KeyboardEvent) {
      if (e.key === 'Enter') this.clickConfirm();
    }*/
    getButtonSeverity() {
        const variant = this.displayVariant();
        return variant === 'quick' || variant === 'yellow' ? 'yellow' : 'purple';
    }
    static ɵfac = function ApTrnGameResultComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnGameResultComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnGameResultComponent, selectors: [["ap-trn-game-result"]], inputs: { getEventDetailsButtonText: [1, "getEventDetailsButtonText"], getPrizeLabel: [1, "getPrizeLabel"], getButtonLabel: [1, "getButtonLabel"], getQuickTitle: [1, "getQuickTitle"], getEventTitle: [1, "getEventTitle"], getRoomID: [1, "getRoomID"], getCampaignID: [1, "getCampaignID"], data: [1, "data"], playList: [1, "playList"], currency: [1, "currency"], rank: [1, "rank"], prize: [1, "prize"], variant: [1, "variant"], EventIcon: [1, "EventIcon"], EventTitle: [1, "EventTitle"], header: [1, "header"] }, outputs: { clickClose: "clickClose", clickConfirm: "clickConfirm", raceDetails: "raceDetails" }, decls: 36, vars: 28, consts: [[1, "relative", "size-full", "flex", "items-center", "justify-center"], [1, "absolute", "inset-0", "bg-black/60", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", "relative", 3, "click", "variant", "header", "size"], [1, "bg-zinc-800", "px-4", "py-4", "text-center", "mx-8", "select-none", "flex", "flex-col", "justify-center", "items-center"], [1, "mb-2"], [3, "variant", "title"], [1, "relative", "w-24", "h-24", "mx-auto", "flex", "items-center", "justify-center"], ["viewBox", "0 0 110 100", 1, "w-full", "h-full"], ["points", "55,5 95,30 95,70 55,95 15,70 15,30", "stroke-width", "4", "fill", "bg-black"], [1, "absolute", "font-anton", "inset-0", "flex", "items-center", "justify-center", "text-[2.5rem]", 3, "ngClass"], [1, "w-auto", "h-10", "px-4", "bg-zinc-900", "text-yellow-200", "rounded-full", "mt-4", 3, "ngClass"], [1, "text-xs", "text-left", "-translate-y-2", "font-medium"], [1, "flex", "-translate-y-2", "justify-center", "items-center", "space-x-1"], [1, "text-md"], [1, "text-2xl", "text-center", "font-bold"], [1, "flex", "flex-col", "w-[85%]", "mt-2"], [1, "mt-4", 3, "currency", "items", "showDividers", "variant"], ["type", "button", 1, "flex", "items-center", "justify-center", "text-zinc-300", "font-normal", "tracking-wide", "select-none", "mt-2", "cursor-pointer", 3, "click"], [1, "border-b", "border-zinc-300", "flex", "items-center", "gap-1"], ["name", "exclamation-circle default", 1, "size-4"], [1, "inline-flex", "gap-3", "absolute", "bottom-1", "right-2.5", "text-zinc-500", "text-xs"], [1, "inline-flex", "gap-0.5", "items-start", "flex-col", "min-[365px]:flex-row"], [1, "pb-12", "min-[365px]:pb-8", "mt-6", "flex", "justify-center"], [1, "w-48", 3, "clicked", "label", "accentColor", "size"]], template: function ApTrnGameResultComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function ApTrnGameResultComponent_Template_div_click_1_listener() { return ctx.clickClose.emit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
            i0.ɵɵlistener("click", function ApTrnGameResultComponent_Template_ap_ui_frame_popup_click_2_listener() { return ctx.clickClose.emit(); });
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
            i0.ɵɵelement(5, "ap-trn-card-title", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(7, "svg", 7);
            i0.ɵɵelement(8, "polygon", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(9, "div", 9)(10, "span");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 10)(13, "div", 11);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 12)(16, "div", 13);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 14);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(20, "div", 15);
            i0.ɵɵelement(21, "ap-trn-list-row", 16);
            i0.ɵɵelementStart(22, "button", 17);
            i0.ɵɵlistener("click", function ApTrnGameResultComponent_Template_button_click_22_listener($event) { ctx.onRaceDetails(); return $event.stopPropagation(); });
            i0.ɵɵelementStart(23, "div", 18);
            i0.ɵɵelement(24, "ap-icon", 19);
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(27, "div", 20)(28, "div", 21)(29, "div");
            i0.ɵɵtext(30, "Room ID : ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(33, ApTrnGameResultComponent_Conditional_33_Template, 5, 1, "div", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 22)(35, "ap-button", 23);
            i0.ɵɵlistener("clicked", function ApTrnGameResultComponent_Template_ap_button_clicked_35_listener() { return ctx.clickConfirm.emit(); });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("variant", ctx.displayVariant() === "quick" ? "quick" : "event")("header", ctx.header())("size", "mobile");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("variant", ctx.displayVariant() === "event" ? "event" : "quick")("title", ctx.displayVariant() === "event" ? ctx.getEventTitle() : ctx.getQuickTitle());
            i0.ɵɵadvance(3);
            i0.ɵɵattribute("stroke", ctx.displayVariant() === "quick" ? "#FFD700" : "#E9D4FF");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(22, _c0, ctx.variant() === "quick", ctx.variant() === "event"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.rank());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(25, _c1, ctx.variant() === "quick", ctx.variant() === "event"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.getPrizeLabel(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.currency());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prize(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("currency", ctx.currency())("items", ctx.playList())("showDividers", false)("variant", ctx.displayVariant() === "quick" ? "quick" : "event");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.getEventDetailsButtonText());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.getRoomID());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.displayVariant() === "quick" ? 33 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("label", ctx.getButtonLabel())("accentColor", ctx.getButtonSeverity())("size", "large");
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule,
            ApTrnCardTitleComponent,
            ApUiFramePopupComponent,
            ApIconComponent,
            ApTrnListRowComponent,
            ApButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnGameResultComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ap-trn-game-result', imports: [
                    CommonModule,
                    FormsModule,
                    ApTrnCardTitleComponent,
                    ApUiFramePopupComponent,
                    ApIconComponent,
                    ApTrnListRowComponent,
                    ApButtonComponent,
                ], template: "<div class=\"relative size-full flex items-center justify-center\">\n  <div class=\"absolute inset-0 bg-black/60\" (click)=\"clickClose.emit()\"></div>\n  <ap-ui-frame-popup\n    [variant]=\"displayVariant() === 'quick' ? 'quick' : 'event'\"\n    [header]=\"header()\"\n    [size]=\"'mobile'\"\n    class=\"w-11/12 md:w-3/4 lg:w-1/2 relative\"\n    (click)=\"clickClose.emit()\"\n  >\n    <!-- Content -->\n    <div\n      class=\"bg-zinc-800 px-4 py-4 text-center mx-8 select-none flex flex-col justify-center items-center\"\n    >\n      <!-- Tournament Title -->\n      <div class=\"mb-2\">\n        <ap-trn-card-title\n          [variant]=\"displayVariant() === 'event' ? 'event' : 'quick'\"\n          [title]=\"\n            displayVariant() === 'event' ? getEventTitle() : getQuickTitle()\n          \"\n        />\n      </div>\n      <!-- Hexagon with Rank Number -->\n      <div class=\"relative w-24 h-24 mx-auto flex items-center justify-center\">\n        <svg viewBox=\"0 0 110 100\" class=\"w-full h-full\">\n          <polygon\n            points=\"55,5 95,30 95,70 55,95 15,70 15,30\"\n            [attr.stroke]=\"displayVariant() === 'quick' ? '#FFD700' : '#E9D4FF'\"\n            stroke-width=\"4\"\n            fill=\"bg-black\"\n          />\n        </svg>\n        <!--Rank Number-->\n        <div\n          class=\"absolute font-anton inset-0 flex items-center justify-center text-[2.5rem]\"\n          [ngClass]=\"{\n            'text-yellow-gradient': variant() === 'quick',\n            'text-purple-gradient': variant() === 'event',\n          }\"\n        >\n          <span>{{ rank() }}</span>\n        </div>\n      </div>\n      <!-- Prize -->\n      <div\n        class=\"w-auto h-10 px-4 bg-zinc-900 text-yellow-200 rounded-full mt-4\"\n        [ngClass]=\"{\n          'text-yellow-200': variant() === 'quick',\n          'text-purple-300': variant() === 'event',\n        }\"\n      >\n        <div class=\"text-xs text-left -translate-y-2 font-medium\">\n          {{ getPrizeLabel() }}\n        </div>\n        <div class=\"flex -translate-y-2 justify-center items-center space-x-1\">\n          <div class=\"text-md\">{{ currency() }}</div>\n          <div class=\"text-2xl text-center font-bold\">\n            {{ prize() }}\n          </div>\n        </div>\n      </div>\n\n      <!-- List -->\n      <div class=\"flex flex-col w-[85%] mt-2\">\n        <ap-trn-list-row\n          [currency]=\"currency()\"\n          class=\"mt-4\"\n          [items]=\"playList()\"\n          [showDividers]=\"false\"\n          [variant]=\"displayVariant() === 'quick' ? 'quick' : 'event'\"\n        />\n        <button\n          type=\"button\"\n          class=\"flex items-center justify-center text-zinc-300 font-normal tracking-wide select-none mt-2 cursor-pointer\"\n          (click)=\"onRaceDetails(); $event.stopPropagation()\"\n        >\n          <div class=\"border-b border-zinc-300 flex items-center gap-1\">\n            <ap-icon name=\"exclamation-circle default\" class=\"size-4\" />\n            <span> {{ getEventDetailsButtonText() }}</span>\n          </div>\n        </button>\n      </div>\n      \n      <!-- room ID -->\n      <div class=\"inline-flex gap-3 absolute bottom-1 right-2.5 text-zinc-500 text-xs\">\n        <div class=\"inline-flex gap-0.5 items-start flex-col min-[365px]:flex-row\">\n          <div>Room ID : </div>\n          <div>{{ getRoomID() }}</div>\n        </div>\n        @if (displayVariant() === 'quick') {\n          <div class=\"inline-flex gap-0.5 items-start flex-col min-[365px]:flex-row\">\n            <div>Campaign ID : </div>\n            <div>{{ getCampaignID() }}</div>\n          </div>\n        }\n        \n      </div>\n    </div>\n\n    <!-- Footer -->\n    <div class=\"pb-12 min-[365px]:pb-8 mt-6 flex justify-center\">\n      <ap-button\n        class=\"w-48\"\n        [label]=\"getButtonLabel()\"\n        (clicked)=\"clickConfirm.emit()\"\n        [accentColor]=\"getButtonSeverity()\"\n        [size]=\"'large'\"\n      />\n    </div>\n  </ap-ui-frame-popup>\n</div>\n", styles: [":host {\n  display: block;\n}"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnGameResultComponent, { className: "ApTrnGameResultComponent", filePath: "src/app/components/ap-trn-game-result/ap-trn-game-result.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=ap-trn-game-result.component.js.map