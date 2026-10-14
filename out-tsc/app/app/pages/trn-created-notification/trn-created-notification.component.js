import { Component, computed, effect, input, output, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApTrnCardTitleComponent } from '../../components/ap-trn-card-title/ap-trn-card-title.component';
import { timer } from 'rxjs';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/trn-ctrl/trn-ctrl.service";
import * as i2 from "../../services/app-interface/app-interface.service";
import * as i3 from "@angular/common";
const _c0 = (a0, a1) => ({ "border-yellow-300": a0, "border-purple-400": a1 });
const _c1 = (a0, a1) => ({ "bg-[linear-gradient(180deg,#FBBF24_0%,#FBBF24_50%,#F08407_100%)]": a0, "bg-[linear-gradient(180deg,#C084FC_0%,#C084FC_50%,#9333EA_100%)]": a1 });
function TrnCreatedNotificationComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    i0.ɵɵelement(3, "ap-trn-card-title", 3);
    i0.ɵɵelementStart(4, "span", 4);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelement(8, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 8)(10, "div", 9);
    i0.ɵɵelement(11, "ap-icon", 10);
    i0.ɵɵelementStart(12, "div", 11)(13, "div", 12);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 13);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "ap-button", 14);
    i0.ɵɵlistener("clicked", function TrnCreatedNotificationComponent_Conditional_0_Template_ap_button_clicked_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clickJoin()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "ap-icon", 15);
    i0.ɵɵlistener("click", function TrnCreatedNotificationComponent_Conditional_0_Template_ap_icon_click_18_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clickClose()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(13, _c0, ctx_r1.variant() === "yellow", ctx_r1.variant() === "purple"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("size", "small")("title", ctx_r1.getQuickTitle());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.countdownTime());
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("animation-duration", "10s");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(16, _c1, ctx_r1.variant() === "yellow", ctx_r1.variant() === "purple"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.currentCount(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" /", ctx_r1.totalCount(), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("label", ctx_r1.buttonJoinLabel())("severity", "primary")("accentColor", ctx_r1.variant())("size", "medium");
} }
export class TrnCreatedNotificationComponent {
    trn;
    api;
    appI18n = inject(AppI18nService);
    variant = input('yellow');
    buttonJoinLabel = this.appI18n.computed('JoinNow_Btn', 'JOIN NOW');
    getQuickTitle = this.appI18n.computed('InitiativeMatch_Title', 'RACE READY TO GO');
    title = input('RACE READY TO GO');
    currentCount = signal(1);
    totalCount = signal(30);
    countdownTime = computed(() => {
        const seconds = this.progressCurrent();
        return `00:${seconds.toString().padStart(2, '0')}`;
    });
    personImage = input('');
    progressCurrent = signal(10);
    isVisible = signal(false);
    countDownSub = null;
    closeSub = null;
    /** 目前提示對應的tier id */
    tierId = signal(null);
    /** 目前提示的玩家人數 */
    openWindow = output();
    constructor(trn, api) {
        this.trn = trn;
        this.api = api;
        effect(() => {
            if (this.trn.status() !== 'idle')
                this.isVisible.set(false);
        });
    }
    ngOnInit() {
        // Debug訊號
        this.trn.debugSignal$.subscribe(this.onDebugSignal.bind(this));
        this.trn.notifyQueueCreated$.subscribe(this.onCreated.bind(this));
        this.trn.notifyQueueUpdated$.subscribe(this.onUpdated.bind(this));
    }
    playNotification() {
        // 先結束之前的通知
        this.endNotification();
        this.isVisible.set(true);
        // 開始倒數計時, 使用rxjs timer每秒觸發
        this.countDownSub = timer(0, 1000).subscribe((sec) => {
            const remaining = Math.max(0, 10 - sec);
            this.progressCurrent.set(remaining);
            if (remaining <= 0) {
                this.countDownSub?.unsubscribe();
            }
        });
        // 倒數10秒之後觸發close.emit()
        this.closeSub = timer(10000).subscribe(() => {
            this.endNotification();
        });
    }
    endNotification() {
        this.tierId.set(null);
        this.currentCount.set(1);
        this.isVisible.set(false);
        this.countDownSub?.unsubscribe();
        this.closeSub?.unsubscribe();
    }
    ngOnDestroy() {
        this.countDownSub?.unsubscribe();
        this.closeSub?.unsubscribe();
    }
    clickJoin() {
        this.endNotification();
        this.trn.sendJoinQuick();
        this.openWindow.emit();
    }
    clickClose() {
        this.endNotification();
    }
    onCreated(data) {
        // 當下BetLevel的Tier不符合就不顯示
        if (this.trn.currentTier()?.id !== data.tierId)
            return;
        this.playNotification();
        this.tierId.set(data.tierId);
        this.currentCount.set(data.currentPlayers);
        this.totalCount.set(data.maxPlayers || 30);
        this.currentCount.set(1);
    }
    onUpdated(data) {
        if (this.tierId() === data.tierId) {
            this.currentCount.set(data.currentPlayers);
        }
    }
    onDebugSignal(key) {
        if (key === 'created-notification') {
            this.isVisible.set(!this.isVisible());
            if (this.isVisible()) {
                this.playNotification();
            }
            else {
                this.endNotification();
            }
        }
    }
    static ɵfac = function TrnCreatedNotificationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnCreatedNotificationComponent)(i0.ɵɵdirectiveInject(i1.TrnCtrlService), i0.ɵɵdirectiveInject(i2.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrnCreatedNotificationComponent, selectors: [["trn-created-notification"]], inputs: { variant: [1, "variant"], title: [1, "title"], personImage: [1, "personImage"] }, outputs: { openWindow: "openWindow" }, decls: 1, vars: 1, consts: [[1, "relative", "w-auto", "bg-zinc-900", "rounded-xl", "border-2", "animate-fade-right", "animate-duration-500", "select-none", 3, "ngClass"], [1, "relative", "p-2", "flex", "flex-col", "gap-1"], [1, "flex", "items-center", "gap-2"], [3, "size", "title"], [1, "w-10", "text-sm", "font-bold", "text-zinc-100"], [1, "w-8"], [1, "relative", "mt-1", "h-3", "rounded-full", "bg-zinc-800", "outline-1", "outline-offset-2", "outline-zinc-600", "overflow-hidden"], [1, "absolute", "left-0", "top-0", "h-full", "rounded-full", "animate-countdown", 3, "ngClass"], [1, "relative", "flex", "gap-2", "items-center", "justify-between", "mt-1"], [1, "rounded-xl", "w-auto", "flex", "items-center", "gap-1"], ["name", "user default", 1, "size-6", "text-white"], [1, "flex", "items-center", "relative", "mt-4"], [1, "text-white", "text-2xl", "font-semibold", "-translate-y-1/6", "tracking-wider"], [1, "text-zinc-400", "text-md", "font-semibold", "tracking-wide"], [1, "shrink-0", 3, "clicked", "label", "severity", "accentColor", "size"], ["name", "x-mark", 1, "absolute", "top-1", "right-1", "size-8", "text-zinc-300", "hover:text-zinc-100", "cursor-pointer", "active:scale-95", 3, "click"]], template: function TrnCreatedNotificationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, TrnCreatedNotificationComponent_Conditional_0_Template, 19, 19, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.isVisible() ? 0 : -1);
        } }, dependencies: [CommonModule, i3.NgClass, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent], styles: [".animate-countdown[_ngcontent-%COMP%] {\n  width: 100%;\n  animation: _ngcontent-%COMP%_countdown linear forwards;\n}\n\n@keyframes _ngcontent-%COMP%_countdown {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnCreatedNotificationComponent, [{
        type: Component,
        args: [{ selector: 'trn-created-notification', standalone: true, imports: [CommonModule, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent], template: "@if (isVisible()) {\n  <div\n    class=\"relative w-auto bg-zinc-900 rounded-xl border-2 animate-fade-right animate-duration-500 select-none\"\n    [ngClass]=\"{\n      'border-yellow-300': variant() === 'yellow',\n      'border-purple-400': variant() === 'purple'\n    }\"\n  >\n    <div class=\"relative p-2 flex flex-col gap-1\">\n      <!-- Title Card -->\n      <div class=\"flex items-center gap-2\">\n        <ap-trn-card-title [size]=\"'small'\" [title]=\"getQuickTitle()\"/>\n        <span class=\"w-10 text-sm font-bold text-zinc-100\">{{ countdownTime()}}</span>\n        <div class=\"w-8\"></div>\n      </div>\n      \n      <!-- Progress bar with countdown inside -->\n      <div\n        class=\"relative mt-1 h-3 rounded-full bg-zinc-800 outline-1 outline-offset-2 outline-zinc-600 overflow-hidden\"\n      >\n        <!-- Progress fill -->\n        <div\n          class=\"absolute left-0 top-0 h-full rounded-full animate-countdown\"\n          [ngClass]=\"{\n            'bg-[linear-gradient(180deg,#FBBF24_0%,#FBBF24_50%,#F08407_100%)]':\n              variant() === 'yellow',\n            'bg-[linear-gradient(180deg,#C084FC_0%,#C084FC_50%,#9333EA_100%)]':\n              variant() === 'purple'\n          }\"\n          [style.animation-duration]=\"'10s'\"\n        ></div>\n      </div>\n\n      <!-- Progress Bar using ap-trn-card-match -->\n      <div class=\"relative flex gap-2 items-center justify-between mt-1\">\n        <div class=\"rounded-xl w-auto flex items-center gap-1\">\n          <ap-icon name=\"user default\" class=\"size-6 text-white\"/>\n          <!-- Count Display -->\n          <div class=\"flex items-center relative mt-4\">\n            <div\n              class=\"text-white text-2xl font-semibold -translate-y-1/6 tracking-wider\"\n            >\n              {{ currentCount() }}\n            </div>\n            <div class=\"text-zinc-400 text-md font-semibold tracking-wide\">\n              /{{ totalCount() }}\n            </div>\n          </div>\n        </div>\n\n        <!-- Join Button -->\n        <ap-button\n          class=\"shrink-0\"\n          [label]=\"buttonJoinLabel()\"\n          [severity]=\"'primary'\"\n          [accentColor]=\"variant()\"\n          [size]=\"'medium'\"\n          (clicked)=\"clickJoin()\"\n        />\n      </div>\n    </div>\n    <ap-icon\n      name=\"x-mark\"\n      class=\"absolute top-1 right-1 size-8 text-zinc-300 hover:text-zinc-100 cursor-pointer active:scale-95\"\n      (click)=\"clickClose()\"\n    />\n  </div>\n}", styles: [".animate-countdown {\n  width: 100%;\n  animation: countdown linear forwards;\n}\n\n@keyframes countdown {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n"] }]
    }], () => [{ type: i1.TrnCtrlService }, { type: i2.AppInterfaceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrnCreatedNotificationComponent, { className: "TrnCreatedNotificationComponent", filePath: "src/app/pages/trn-created-notification/trn-created-notification.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=trn-created-notification.component.js.map