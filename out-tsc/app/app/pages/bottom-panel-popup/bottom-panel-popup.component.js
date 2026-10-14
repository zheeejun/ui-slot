import { Component, DestroyRef, computed, inject, input, output, signal, } from '@angular/core';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import * as i0 from "@angular/core";
function BottomPanelPopupComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
    i0.ɵɵlistener("click", function BottomPanelPopupComponent_Conditional_0_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCancel()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
    i0.ɵɵlistener("close", function BottomPanelPopupComponent_Conditional_0_Template_ap_ui_frame_popup_close_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCancel()); });
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelement(4, "ap-icon", 4)(5, "div", 5)(6, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7)(8, "ap-button", 8);
    i0.ɵɵlistener("click", function BottomPanelPopupComponent_Conditional_0_Template_ap_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onConfirm()); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("header", ctx_r1.displayHeader())("size", "mobile")("enableClose", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", "insufficient");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.displayDescription(), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("size", "large")("accentColor", "yellow")("label", ctx_r1.displayConfirmText());
} }
export class BottomPanelPopupComponent {
    appI18n = inject(AppI18nService);
    destroyRef = inject(DestroyRef);
    bottomPanel = inject(BottomPanelService);
    header = input();
    description = input();
    confirmText = input();
    isVisible = signal(false);
    displayHeader = computed(() => this.header() ?? this.appI18n.instant('replay_message_title', 'MESSAGE'));
    displayDescription = computed(() => this.description() ??
        this.appI18n.instant('not_enough_bet', 'Insufficient balance'));
    displayConfirmText = computed(() => this.confirmText() ?? this.appI18n.instant('OK', 'OK'));
    close = output();
    confirm = output();
    constructor() {
        const subscription = this.bottomPanel.insufficientBalance$.subscribe(() => { this.isVisible.set(true); });
        this.destroyRef.onDestroy(() => subscription.unsubscribe());
    }
    onCancel() {
        this.isVisible.set(false);
        this.close.emit();
    }
    onConfirm() {
        this.isVisible.set(false);
        this.confirm.emit();
    }
    static ɵfac = function BottomPanelPopupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BottomPanelPopupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomPanelPopupComponent, selectors: [["bottom-panel-popup"]], inputs: { header: [1, "header"], description: [1, "description"], confirmText: [1, "confirmText"] }, outputs: { close: "close", confirm: "confirm" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "grid", "place-items-center", "select-none"], [1, "absolute", "inset-0", "bg-black/60", "animate-fade", "animate-once", "animate-duration-200", 3, "click"], [1, "relative", "w-11/12", "md:w-3/4", "lg:w-1/2", "animate-fade", "animate-once", "animate-duration-300", 3, "close", "header", "size", "enableClose"], [1, "px-6", "pt-6", "pb-2", "text-center", "space-y-4"], [1, "text-yellow-400", "size-28", "mx-auto", 3, "name"], [1, "h-px", "divider-gradient-yellow", "opacity-80"], [1, "text-base", "sm:text-lg", "font-medium", "text-zinc-300", 3, "innerHTML"], [1, "px-6", "pb-6", "pt-4", "flex", "justify-center"], [1, "w-[50%]", 3, "click", "size", "accentColor", "label"]], template: function BottomPanelPopupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, BottomPanelPopupComponent_Conditional_0_Template, 9, 8, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.isVisible() ? 0 : -1);
        } }, dependencies: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomPanelPopupComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'bottom-panel-popup', imports: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], template: "@if (isVisible()) {\n  <div class=\"fixed inset-0 grid place-items-center select-none\">\n    <div\n      class=\"absolute inset-0 bg-black/60 animate-fade animate-once animate-duration-200\"\n      (click)=\"onCancel()\"\n    ></div>\n    <ap-ui-frame-popup\n      [header]=\"displayHeader()\"\n      [size]=\"'mobile'\"\n      [enableClose]=\"false\"\n      class=\"relative w-11/12 md:w-3/4 lg:w-1/2 animate-fade animate-once animate-duration-300\"\n      (close)=\"onCancel()\"\n    >\n      <div class=\"px-6 pt-6 pb-2 text-center space-y-4\">\n        <ap-icon\n          [name]=\"'insufficient'\"\n          class=\"text-yellow-400 size-28 mx-auto\"\n        />\n        <div class=\"h-px divider-gradient-yellow opacity-80\"></div>\n        <div\n          class=\"text-base sm:text-lg font-medium text-zinc-300\"\n          [innerHTML]=\"displayDescription()\"\n        ></div>\n      </div>\n\n      <div class=\"px-6 pb-6 pt-4 flex justify-center\">\n        <ap-button\n          class=\"w-[50%]\"\n          [size]=\"'large'\"\n          [accentColor]=\"'yellow'\"\n          [label]=\"displayConfirmText()\"\n          (click)=\"onConfirm()\"\n        />\n      </div>\n    </ap-ui-frame-popup>\n  </div>\n}\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BottomPanelPopupComponent, { className: "BottomPanelPopupComponent", filePath: "src/app/pages/bottom-panel-popup/bottom-panel-popup.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=bottom-panel-popup.component.js.map