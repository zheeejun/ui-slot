import { Component, output, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { timer } from 'rxjs';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { CashDropService } from '../../services/cash-drop/cash-drop.service';
import { calc } from '../../services/user-profile/user-profile.function';
import * as i0 from "@angular/core";
export class EventCashdropToastComponent {
    appI18n = inject(AppI18nService);
    user = inject(UserProfileService);
    cashDrop = inject(CashDropService);
    fallbackMessage = 'Bet {0} more to trigger Cash Drop!\nMinimum qualifying bet: {1}';
    messageTitle = computed(() => {
        const raw = this.appI18n.instant('cashdrop_difference_info', this.appI18n.instant('cashdrop_bettip', this.fallbackMessage));
        const minBet = this.minimumQualifyingBet();
        const betDifference = Math.max(minBet - this.user.bet(), 0);
        return raw
            .replace('{0}', this.formatAmount(betDifference))
            .replace('{1}', this.formatAmount(minBet));
    });
    messageUrlLabel = this.appI18n.computed('cashdrop_to_detail_btn', 'Click for more details.');
    closed = output();
    autoCloseSub = null;
    ngOnInit() {
        this.autoCloseSub = timer(5000).subscribe(() => this.closeToast());
    }
    ngOnDestroy() {
        this.autoCloseSub?.unsubscribe();
        this.autoCloseSub = null;
    }
    closeToast() {
        this.autoCloseSub?.unsubscribe();
        this.autoCloseSub = null;
        this.closed.emit();
    }
    minimumQualifyingBet() {
        const campaign = this.cashDrop.cashDropsByEndTime()[0]?.rawData;
        if (!campaign)
            return 0;
        return calc.s2c(campaign.min_bet_amount ?? 0);
    }
    formatAmount(value) {
        const safeValue = Number.isFinite(value) ? Math.max(value, 0) : 0;
        const hasFraction = !Number.isInteger(safeValue);
        return `${this.user.currencySymbol()}${safeValue.toLocaleString(undefined, {
            minimumFractionDigits: hasFraction ? 2 : 0,
            maximumFractionDigits: 3,
        })}`;
    }
    static ɵfac = function EventCashdropToastComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventCashdropToastComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventCashdropToastComponent, selectors: [["event-cashdrop-toast"]], outputs: { closed: "closed" }, decls: 14, vars: 4, consts: [[1, "relative", "w-auto", "bg-zinc-900", "rounded-xl", "border-2", "border-yellow-300", "animate-fade-right", "animate-duration-500", "select-none"], [1, "relative", "flex", "p-4", "gap-6", "items-center"], [1, "flex", "flex-col", "justify-center", "gap-2"], [1, "flex", "gap-4"], [1, "coin-wrapper"], ["src", "assets/images/icons/img-ap-coin.png", "alt", "AP Coin", 1, "w-12", "h-12", "object-contain", "coin-image"], [1, "flex", "flex-col", "gap-1"], [1, "sm:text-lg", "whitespace-pre-line"], [1, "sm:text-md", "text-sm", "text-zinc-400", "underline", "cursor-pointer"], [1, "relative", "mt-1.5", "h-1.5", "rounded-full", "bg-zinc-800", "outline-1", "outline-offset-1", "outline-zinc-600", "overflow-hidden"], [1, "absolute", "bg-[linear-gradient(180deg,#FBBF24_0%,#FBBF24_50%,#F08407_100%)]", "left-0", "top-0", "h-full", "rounded-full", "animate-countdown"], ["name", "x-mark", 1, "sm:size-8", "size-6", "text-zinc-300", "hover:text-zinc-100", "cursor-pointer", "active:scale-95", 3, "click"]], template: function EventCashdropToastComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵelement(5, "img", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6)(7, "div", 7);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 8);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 9);
            i0.ɵɵelement(12, "div", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "ap-icon", 11);
            i0.ɵɵlistener("click", function EventCashdropToastComponent_Template_ap_icon_click_13_listener() { return ctx.closeToast(); });
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.messageTitle());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.messageUrlLabel(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("animation-duration", "5s");
        } }, dependencies: [CommonModule, ApIconComponent], styles: [".animate-countdown[_ngcontent-%COMP%] {\n  width: 100%;\n  animation: _ngcontent-%COMP%_countdown linear forwards;\n}\n\n@keyframes _ngcontent-%COMP%_countdown {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventCashdropToastComponent, [{
        type: Component,
        args: [{ selector: 'event-cashdrop-toast', standalone: true, imports: [CommonModule, ApIconComponent], template: "<div\n  class=\"relative w-auto bg-zinc-900 rounded-xl border-2 border-yellow-300 animate-fade-right animate-duration-500 select-none\"\n>\n  <div class=\"relative flex p-4 gap-6 items-center\">\n    <div class=\"flex flex-col justify-center gap-2\">\n      <div class=\"flex gap-4\">\n        <div class=\"coin-wrapper\">\n          <img\n            src=\"assets/images/icons/img-ap-coin.png\"\n            alt=\"AP Coin\"\n            class=\"w-12 h-12 object-contain coin-image\"\n          />\n        </div>\n        <!-- Coin Text -->\n        <div class=\"flex flex-col gap-1\">\n          <div class=\"sm:text-lg whitespace-pre-line\">{{ messageTitle() }}</div>\n          <div class=\"sm:text-md text-sm text-zinc-400 underline cursor-pointer\">\n            {{ messageUrlLabel() }} \n          </div>\n        </div>\n      </div>\n      <!-- Progress bar -->\n      <div\n        class=\"relative mt-1.5 h-1.5 rounded-full bg-zinc-800 outline-1 outline-offset-1 outline-zinc-600 overflow-hidden\"\n      >\n        <!-- Progress fill -->\n        <div\n          class=\"absolute bg-[linear-gradient(180deg,#FBBF24_0%,#FBBF24_50%,#F08407_100%)] left-0 top-0 h-full rounded-full animate-countdown\"\n          [style.animation-duration]=\"'5s'\"\n        ></div>\n      </div>\n    </div>\n    <ap-icon\n      name=\"x-mark\"\n      class=\"sm:size-8 size-6 text-zinc-300 hover:text-zinc-100 cursor-pointer active:scale-95\"\n      (click)=\"closeToast()\"\n    />\n  </div>\n</div>\n", styles: [".animate-countdown {\n  width: 100%;\n  animation: countdown linear forwards;\n}\n\n@keyframes countdown {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventCashdropToastComponent, { className: "EventCashdropToastComponent", filePath: "src/app/pages/event-cashdrop-toast/event-cashdrop-toast.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=event-cashdrop-toast.component.js.map