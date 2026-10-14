import { Component, input, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApAlnumInputComponent } from '../../../ap-components-lib/ap-alnum-input/ap-alnum-input.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApPromoCodeQrCodeComponent } from '../../components/ap-promo-code-code/ap-promo-code-code.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { firstValueFrom, timer } from 'rxjs';
import { CampaignCtrlService } from '../../services/campaign-ctrl/campaign-ctrl.service';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApPopupComponent } from '../../components/ap-popup/ap-popup.component';
import { formatCampaignList } from '../../services/campaign-ctrl/campaign-ctrl.function';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
function EventPromoCodeComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("- ", ctx_r0.inputHint());
} }
function EventPromoCodeComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("- ", ctx_r0.passHint());
} }
function EventPromoCodeComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("- ", ctx_r0.errorHint());
} }
function EventPromoCodeComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-popup", 24);
    i0.ɵɵlistener("close", function EventPromoCodeComponent_Conditional_27_Template_ap_popup_close_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onClosePopUp()); })("confirm", function EventPromoCodeComponent_Conditional_27_Template_ap_popup_confirm_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onClosePopUp()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("showDivider", true)("image", ctx_r0.image())("header", ctx_r0.popUpHeader())("description", ctx_r0.popUpDescription())("showDescription", true)("button", ctx_r0.popUpConfirmText());
} }
function EventPromoCodeComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelement(1, "ap-loading-overlay");
    i0.ɵɵelementEnd();
} }
export class EventPromoCodeComponent {
    appI18n = inject(AppI18nService);
    api = inject(AppInterfaceService);
    campaign = inject(CampaignCtrlService);
    image = input('assets/images/eventcenter/treasure.png');
    imageAlt = input('PromoCode');
    qrImage = input('assets/images/eventcenter/qrcode-ad.png');
    qrImageAlt = input('QR Code');
    promoCode = signal('');
    showPopup = signal(false);
    loading = signal(false);
    passHint = signal('');
    errorHint = signal('');
    ctaSubTitle = signal('');
    popUpDescription = signal('You have received Free Bonus from campaign');
    popUpConfirmText = signal('OK');
    popUpHeader = signal('Congratulations!');
    couponTitle = this.appI18n.computed('coupon', 'PROMO CODE');
    placeholder = this.appI18n.computed('coupon_1', 'Please input redeem code');
    claimLabel = this.appI18n.computed('coupon_2', 'Claim');
    ctaTitle = this.appI18n.computed('coupon_3', 'Get rewarded and stay ahead!');
    passString = this.appI18n.computed('coupon_popup_1', 'Promo code redeemed successfully.');
    hintString = this.appI18n.computed('code_input_tip', 'Enter the code to get the reward.');
    couponInfo1 = this.appI18n.computed('coupon_info_1', 'Enter the code to get the reward.');
    couponInfo2 = this.appI18n.computed('coupon_info_2', 'Cannot be combined with other offers.');
    couponInfo3 = this.appI18n.computed('coupon_info_3', 'May not be valid on all items');
    couponInfo4 = this.appI18n.computed('coupon_info_4', 'Terms and conditions apply.');
    inputHint = signal(this.hintString());
    errorRecord = computed(() => ({
        '0005000': this.appI18n.instant('coupon_popup_2') ??
            'Invalid promo code. Please check the code and try again.',
        '0006001': this.appI18n.instant('coupon_popup_2') ??
            'Invalid promo code. Please check the code and try again.',
        '0006002': this.appI18n.instant('coupon_popup_3') ??
            'All rewards for this event have been redeemed. Stay tuned for the next one.',
        '0006003': this.appI18n.instant('coupon_popup_4') ??
            " This game doesn't support bonus redemption. Please try our recommended games.",
        '0006004': this.appI18n.instant('coupon_popup_5') ??
            'All promo codes for today have been claimed. Try again tomorrow.',
        '0006005': this.appI18n.instant('coupon_popup_0006005') ??
            'All promo codes for today have been claimed. Try again tomorrow.',
    }));
    popUpQueue = [];
    isPromoCodeValid = computed(() => {
        return this.promoCode().length >= 1 && this.promoCode().length <= 20;
    });
    isValid = computed(() => {
        return this.passHint().length > 0;
    });
    hasError = computed(() => {
        return this.errorHint().length > 0;
    });
    onPromoCodeChange(value) {
        this.promoCode.set(value);
        this.inputHint.set(this.hintString());
        this.passHint.set('');
        this.errorHint.set('');
    }
    async onClaimClick() {
        this.loading.set(true);
        await firstValueFrom(timer(250));
        this.api.sendPromoCode(this.promoCode());
    }
    onPromoCodeResultMsg(msg) {
        const campaigns = formatCampaignList(msg.campaignlist);
        const result = {
            errorCode: msg.error_code,
            promoCode: msg.coupon_code,
            list: [...campaigns.freeBonus, ...campaigns.freeSpins],
        };
        if (result.errorCode?.length > 0) {
            this.loading.set(false);
            this.inputHint.set('');
            this.passHint.set('');
            this.errorHint.set(this.errorRecord()[result.errorCode] ?? `Unknown error: ${result.errorCode}`);
            return;
        }
        this.loading.set(false);
        this.inputHint.set('');
        this.passHint.set(this.passString());
        this.errorHint.set('');
        this.popUpQueue = result.list.slice(0);
        this.openPopUp(this.popUpQueue.pop());
    }
    onClosePopUp() {
        this.showPopup.set(false);
        this.openPopUp(this.popUpQueue.pop());
    }
    openPopUp(campaign) {
        if (!campaign)
            return;
        this.showPopup.set(true);
        if (campaign.condition) {
            const defaultDescription = 'Special Event: {0} is now live! Complete the conditions and grab your reward!';
            let description = this.appI18n.instant('promo_fs_21') ?? defaultDescription;
            description = description.replace('{0}', campaign.name);
            this.popUpDescription.set(description);
        }
        else if (campaign.type === 'freeSpins') {
            const defaultDescription = "You have just received '{0}' free spins, with a value of {1}!";
            let description = this.appI18n.instant('promo_fs_13') ?? defaultDescription;
            description = description.replace('{0}', campaign.spinCount.toString());
            description = description.replace('{1}', campaign.totalAmount.toFixed(3));
            this.popUpDescription.set(description);
        }
        else if (campaign.type === 'freeBonus') {
            const defaultDescription = "You've received {1} Free Bonus from {0} campaign!";
            let description = this.appI18n.instant('promo_popup1') ?? defaultDescription;
            description = description.replace('{0}', campaign.name);
            description = description.replace('{1}', campaign.totalAmount.toFixed(3));
            this.popUpDescription.set(description);
        }
        this.campaign.updateCampaigns([campaign]);
    }
    static ɵfac = function EventPromoCodeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventPromoCodeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventPromoCodeComponent, selectors: [["event-promocode"]], inputs: { image: [1, "image"], imageAlt: [1, "imageAlt"], qrImage: [1, "qrImage"], qrImageAlt: [1, "qrImageAlt"] }, decls: 29, vars: 24, consts: [[1, "flex", "flex-wrap", "bg-zinc-900", "justify-center", "items-start", "h-full", "p-2"], [1, "promo-background", "border-2", "rounded-lg", "p-4", "max-w-2xl", "w-full", "border-yellow-200", "text-white", "mt-4"], [1, "text-4xl", "font-medium", "font-anton", "text-gradient-gold", "text-center", "mb-2", "tracking-wide"], [1, "h-px", "divider-gradient-yellow", "mx-4"], [1, "flex", "justify-center", "mt-2"], [1, "shrink-0"], [1, "w-16", "h-16", "md:w-24", "md:h-24", "object-scale-down", 3, "src", "alt"], [1, "mt-2", "max-w-md", "align-center", "mx-auto"], [1, "w-full", 3, "valueChange", "type", "placeholder", "maxLength", "isSuccess", "isError"], [1, "max-w-md", "align-center", "mx-auto", "text-sm", "font-medium"], [1, "text-zinc-500"], [1, "text-green-400"], [1, "text-red-400"], [1, "flex", "justify-center", "mx-auto", "mt-2"], [1, "w-40", 3, "clicked", "severity", "accentColor", "label", "disabled"], [1, "h-px", "divider-gradient-yellow", "mx-4", "mt-4"], [1, "flex", "items-center", "justify-center", "gap-4", "text-center", "mt-4", "pb-4"], [1, "text-xl", "font-bold", "text-yellow-200", "tracking-wide", 2, "white-space", "pre-line"], [1, "text-lg", "font-medium", "text-yellow-200", "tracking-wide"], [1, "flex", "items-center", "justify-center", "relative"], [3, "qrcodeUrl", "qrcodeAlt", "size", "borderColor", "backgroundColor"], ["name", "finger-point", 1, "size-7", "relative", "-left-1", "top-8"], [3, "showDivider", "image", "header", "description", "showDescription", "button"], [1, "absolute", "inset-0", "bg-black/30"], [3, "close", "confirm", "showDivider", "image", "header", "description", "showDescription", "button"]], template: function EventPromoCodeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "div", 3);
            i0.ɵɵelementStart(6, "div", 4)(7, "div", 5);
            i0.ɵɵelement(8, "img", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 7)(10, "ap-alnum-input", 8);
            i0.ɵɵlistener("valueChange", function EventPromoCodeComponent_Template_ap_alnum_input_valueChange_10_listener($event) { return ctx.onPromoCodeChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 9);
            i0.ɵɵconditionalCreate(12, EventPromoCodeComponent_Conditional_12_Template, 2, 1, "div", 10);
            i0.ɵɵconditionalCreate(13, EventPromoCodeComponent_Conditional_13_Template, 2, 1, "div", 11);
            i0.ɵɵconditionalCreate(14, EventPromoCodeComponent_Conditional_14_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 13)(16, "ap-button", 14);
            i0.ɵɵlistener("clicked", function EventPromoCodeComponent_Template_ap_button_clicked_16_listener() { return ctx.onClaimClick(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(17, "div", 15);
            i0.ɵɵelementStart(18, "div", 16)(19, "div")(20, "span", 17);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "span", 18);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 19);
            i0.ɵɵelement(25, "ap-promo-code-code", 20)(26, "ap-icon", 21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(27, EventPromoCodeComponent_Conditional_27_Template, 1, 6, "ap-popup", 22);
            i0.ɵɵconditionalCreate(28, EventPromoCodeComponent_Conditional_28_Template, 2, 0, "div", 23);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.couponTitle());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.image(), i0.ɵɵsanitizeUrl)("alt", ctx.imageAlt());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("type", "text")("placeholder", ctx.placeholder())("maxLength", 20)("isSuccess", ctx.isValid())("isError", ctx.hasError());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.inputHint().length > 0 ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.passHint().length > 0 ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.errorHint().length > 0 ? 14 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("severity", ctx.isPromoCodeValid() ? "primary" : "secondary")("accentColor", "yellow")("label", ctx.claimLabel())("disabled", !ctx.isPromoCodeValid());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.ctaTitle(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.ctaSubTitle(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("qrcodeUrl", ctx.qrImage())("qrcodeAlt", ctx.qrImageAlt())("size", "20")("borderColor", "border-yellow-200")("backgroundColor", "bg-[radial-gradient(circle,_#71471E_0%,_#000002_70%,_#000000_100%)]");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showPopup() ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 28 : -1);
        } }, dependencies: [CommonModule, ApButtonComponent, ApAlnumInputComponent, ApIconComponent, ApPromoCodeQrCodeComponent, ApLoadingOverlayComponent, ApPopupComponent], styles: [".promo-background[_ngcontent-%COMP%] {\n  background-image: url('/assets/images/eventcenter/promo-background.png');\n  background-size: contain;\n  background-position: center;\n  min-height: no-repeat;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventPromoCodeComponent, [{
        type: Component,
        args: [{ selector: 'event-promocode', imports: [CommonModule, ApButtonComponent, ApAlnumInputComponent, ApIconComponent, ApPromoCodeQrCodeComponent, ApLoadingOverlayComponent, ApPopupComponent,
                ], template: "<div class=\"flex flex-wrap bg-zinc-900 justify-center items-start h-full p-2\">\n  <div\n    class=\"promo-background border-2 rounded-lg p-4 max-w-2xl w-full border-yellow-200 text-white mt-4\"\n  ><div>\n      <div class=\"text-4xl font-medium font-anton text-gradient-gold text-center mb-2 tracking-wide\"> {{ couponTitle() }}</div>\n      <div class=\"h-px divider-gradient-yellow mx-4\"></div>\n      <div class=\"flex justify-center mt-2\">\n        <div class=\"shrink-0\">\n          <img\n            [src]=\"image()\"\n            [alt]=\"imageAlt()\"\n            class=\"w-16 h-16 md:w-24 md:h-24 object-scale-down\"/></div>\n      </div>\n\n      <!-- Input Field -->\n      <div class=\"mt-2 max-w-md align-center mx-auto\">\n        <ap-alnum-input\n          [type]=\"'text'\"\n          [placeholder]=\"placeholder()\"\n          [maxLength]=\"20\"\n          [isSuccess]=\"isValid()\"\n          [isError]=\"hasError()\"\n          (valueChange)=\"onPromoCodeChange($event)\"\n          class=\"w-full\"/>\n      </div>\n\n      <!-- Input Hint -->\n      <div class=\"max-w-md align-center mx-auto text-sm font-medium\">\n        @if (inputHint().length > 0) {\n        <div class=\"text-zinc-500\">- {{ inputHint() }}</div>\n        } @if (passHint().length > 0) {\n        <div class=\"text-green-400\">- {{ passHint() }}</div>\n        } @if (errorHint().length > 0) {\n        <div class=\"text-red-400\">- {{ errorHint() }}</div>\n        }\n      </div>\n\n      <!-- Claim Button -->\n      <div class=\"flex justify-center mx-auto mt-2\">\n        <ap-button\n          class=\"w-40\"\n          (clicked)=\"onClaimClick()\"\n          [severity]=\"isPromoCodeValid() ? 'primary' : 'secondary'\"\n          [accentColor]=\"'yellow'\"\n          [label]=\"claimLabel()\"\n          [disabled]=\"!isPromoCodeValid()\"/>\n      </div>\n\n      <!-- Terms and Conditions -->\n      <!-- <div class=\"text-sm max-w-md font-base text-zinc-400 mx-auto mt-2\">\n        <div class=\"relative\">{{ \"- \" + couponInfo1() }}</div>\n        <div class=\"relative\">{{ \"- \" + couponInfo2() }}</div>\n        <div class=\"relative\">{{ \"- \" + couponInfo3() }}</div>\n        <div class=\"relative\">{{ \"- \" + couponInfo4() }}</div>\n      </div> -->\n    </div>\n\n    <!-- Divider -->\n    <div class=\"h-px divider-gradient-yellow mx-4 mt-4\"></div>\n\n    <!-- Subscribe Section -->\n    <div class=\"flex items-center justify-center gap-4 text-center mt-4 pb-4\">\n      <div>\n        <span\n          class=\"text-xl font-bold text-yellow-200 tracking-wide\"\n          style=\"white-space: pre-line\"\n        >\n          {{ ctaTitle() }}\n        </span>\n        <span class=\"text-lg font-medium text-yellow-200 tracking-wide\">\n          {{ ctaSubTitle() }}\n        </span>\n      </div>\n      <div class=\"flex items-center justify-center relative\">\n        <ap-promo-code-code\n          [qrcodeUrl]=\"qrImage()\"\n          [qrcodeAlt]=\"qrImageAlt()\"\n          [size]=\"'20'\"\n          [borderColor]=\"'border-yellow-200'\"\n          [backgroundColor]=\"\n            'bg-[radial-gradient(circle,_#71471E_0%,_#000002_70%,_#000000_100%)]'\n          \"\n        />\n        <ap-icon\n          name=\"finger-point\"\n          class=\"size-7 relative -left-1 top-8\"\n        />\n      </div>\n    </div>\n  </div>\n\n  <!-- Message Popup -->\n  @if (showPopup()) {\n  <ap-popup\n    [showDivider]=\"true\"\n    [image]=\"image()\"\n    [header]=\"popUpHeader()\"\n    [description]=\"popUpDescription()\"\n    [showDescription]=\"true\"\n    [button]=\"popUpConfirmText()\"\n    (close)=\"onClosePopUp()\"\n    (confirm)=\"onClosePopUp()\"\n  />\n  } @if(loading()) {\n  <div class=\"absolute inset-0 bg-black/30\">\n    <ap-loading-overlay />\n  </div>\n  }\n</div>\n", styles: [".promo-background {\n  background-image: url('/assets/images/eventcenter/promo-background.png');\n  background-size: contain;\n  background-position: center;\n  min-height: no-repeat;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventPromoCodeComponent, { className: "EventPromoCodeComponent", filePath: "src/app/pages/event-promocode/event-promocode.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=event-promocode.component.js.map