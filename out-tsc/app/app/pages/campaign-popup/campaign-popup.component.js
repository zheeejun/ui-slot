import { Component, DestroyRef, inject, signal, output, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CampaignCtrlService } from '../../services/campaign-ctrl/campaign-ctrl.service';
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { dec } from '../../services/user-profile/user-profile.function';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
function CampaignPopupComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
    i0.ɵɵlistener("click", function CampaignPopupComponent_Conditional_0_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCancel()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ap-ui-frame-popup", 2);
    i0.ɵɵlistener("close", function CampaignPopupComponent_Conditional_0_Template_ap_ui_frame_popup_close_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close.emit()); });
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelement(4, "ap-icon", 4)(5, "div", 5);
    i0.ɵɵelementStart(6, "div", 6)(7, "span", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 8)(10, "ap-button", 9);
    i0.ɵɵlistener("clicked", function CampaignPopupComponent_Conditional_0_Template_ap_button_clicked_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAndCheckQueue()); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("header", ctx_r1.header())("size", "mobile")("enableClose", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", "gift default");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.windowContent());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("size", "large")("accentColor", "yellow")("label", ctx_r1.buttonText());
} }
export class CampaignPopupComponent {
    ctrl = inject(CampaignCtrlService);
    lang = inject(LoginCtrlService).language;
    eventCenter = inject(EventCenterCtrlService);
    i18n = inject(AppI18nService);
    destroyRef = inject(DestroyRef);
    showWindow = signal(false);
    windowContent = signal('');
    popupQueue = [];
    appI18n = inject(AppI18nService);
    header = computed(() => this.appI18n.instant('message', 'MESSAGE'));
    buttonText = computed(() => this.appI18n.instant('Confirm_Btn', 'OK'));
    close = output();
    constructor() {
        this.ctrl.receivedFreeBonus$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onReceivedFreeBonus.bind(this));
        this.ctrl.receivedFreeSpin$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onReceivedFreeSpin.bind(this));
        this.ctrl.onGoingFreeBonus$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onOnGoingFreeBonus.bind(this));
        this.ctrl.onGoingFreeSpin$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onOnGoingFreeSpin.bind(this));
        this.ctrl.requiredTurnover$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onRequiredTurnover.bind(this));
        this.ctrl.failed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onFailed.bind(this));
        this.ctrl.success$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onSuccess.bind(this));
        this.ctrl.claimedEvent$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onClaimedEvent.bind(this));
        this.ctrl.openEventCenterCampaign$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onOpenEventCenterCampaign.bind(this));
    }
    ngAfterViewInit() {
        this.ctrl.popupActivated.set(true);
    }
    // 按popup外可以關閉popup
    onCancel() {
        this.close.emit();
    }
    closeAndCheckQueue() {
        this.showWindow.set(false);
        // 關閉目前的popup後，檢查是否有queue中的popup需要顯示
        if (this.popupQueue.length > 0) {
            const nextPopup = this.popupQueue.shift();
            if (nextPopup.content) {
                this.windowContent.set(nextPopup.content || '');
                this.showWindow.set(true);
            }
            else if (nextPopup.groupId) {
                this.eventCenter.open(`campaign/${nextPopup.groupId}`);
            }
        }
    }
    addPopupToQueue(popup) {
        // 如果目前有在顯示popup，就先把新的popup放到queue裡，等關閉目前的popup後再顯示下一個
        if (this.showWindow()) {
            this.popupQueue.push(popup);
        }
        else {
            if (popup.content) {
                this.windowContent.set(popup.content || '');
                this.showWindow.set(true);
            }
            else if (popup.groupId) {
                this.eventCenter.open(`campaign/${popup.groupId}`);
            }
        }
    }
    onOnGoingFreeBonus(message) {
        if (message.campaignList.length === 0)
            return;
        const singleContent = this.i18n.instant('promo_popup4'); // 欢迎回来！\n\n您领取的 {0} 活动还在进行中，预计结束时间为\n{1}\n您需在活动结束前达到 {2}，才能将活动钱包的金额提领至现金钱包！
        const multiContent = this.i18n.instant('promo_popup_multi4'); // 欢迎回来！\n您仍有以下的活动正在进行：\n{0}您需在活动结束前达到活动要求，才能将活动钱包的金额提领至现金钱包！
        let popupContent = '';
        if (message.campaignList.length > 1) {
            const campaignNames = this.combineNames(message.campaignList);
            popupContent = multiContent.replace('{0}', `${campaignNames}\n`);
        }
        else if (message.campaignList.length === 1) {
            const campaign = message.campaignList[0];
            popupContent = singleContent.replace('{0}', campaign.name);
            popupContent = popupContent.replace('{1}', new Date(campaign.endTime).toLocaleString(this.lang)); // YYYY/MM/DD HH:mm:ss
            popupContent = popupContent.replace('{2}', campaign.withdrawal?.turnoverThreshold ? dec.place(campaign.withdrawal?.turnoverThreshold).toString() : 'N/A');
        }
        const popup = {
            content: popupContent,
        };
        this.addPopupToQueue(popup);
    }
    onReceivedFreeBonus(message) {
        if (message.campaignList.length === 0)
            return;
        const singleContent = this.i18n.instant('promo_popup1'); // 恭喜您！\n\n您刚领取了「价值 {1} 的 {0} 活动钱包！」\n\n请点击【确定】查询活动结束时间、提领条件和提领上限。
        const multiContent = this.i18n.instant('promo_popup_multi1'); // 恭喜您！\n您刚刚领取了如下所示的多个活动：\n{0}请点击“确定”选择您想先游玩的活动。
        let popupContent = '';
        if (message.campaignList.length > 1) {
            const campaignNames = this.combineNames(message.campaignList);
            popupContent = multiContent.replace('{0}', `${campaignNames}`);
        }
        else if (message.campaignList.length === 1) {
            const campaign = message.campaignList[0];
            popupContent = singleContent.replace('{0}', campaign.name);
            popupContent = popupContent.replace('{1}', dec.place(campaign.totalAmount).toString());
        }
        const popup = {
            content: popupContent,
        };
        this.addPopupToQueue(popup);
    }
    onReceivedFreeSpin(message) {
        if (message.campaignList.length === 0)
            return;
        const singleContent = this.i18n.instant('promo_fs_13'); // 恭喜您！\n \n 您刚领取了「总价值{1}的免费次数{0}次！」\n \n 请点击【确定】查询活动结束时间、提领条件和提领上限。
        const multiContent = this.i18n.instant('promo_fs_multi13'); // 恭喜您！\n 您刚刚领取了如下所示的多个活动：{0}\n请点击“确定”选择您想先游玩的活动。
        let popupContent = '';
        if (message.campaignList.length > 1) {
            const campaignNames = this.combineNames(message.campaignList);
            popupContent = multiContent.replace('{0}', `${campaignNames}`);
        }
        else if (message.campaignList.length === 1) {
            const campaign = message.campaignList[0];
            popupContent = singleContent.replace('{0}', campaign.spinCount?.toString() ?? '0');
            popupContent = popupContent.replace('{1}', dec.place(campaign.totalAmount).toString());
        }
        const popup = {
            content: popupContent,
        };
        this.addPopupToQueue(popup);
    }
    onOnGoingFreeSpin(message) {
        if (message.campaignList.length === 0)
            return;
        const singleContent = this.i18n.instant('promo_fs_17'); // 欢迎回来！\n \n 您领取的 {0} 免费次数还在进行中，预计结束时间为\n{1}\n请把握时间完成活动。
        const multiContent = this.i18n.instant('promo_fs_multi17'); // 欢迎回来！\n 您仍有以下的活动正在进行：{0}\n请把握时间完成活动。
        let popupContent = '';
        if (message.campaignList.length > 1) {
            const campaignNames = this.combineNames(message.campaignList);
            popupContent = multiContent.replace('{0}', `${campaignNames}`);
        }
        else if (message.campaignList.length === 1) {
            const campaign = message.campaignList[0];
            popupContent = singleContent.replace('{0}', campaign.name);
            popupContent = popupContent.replace('{1}', new Date(campaign.endTime).toLocaleString(this.lang)); // YYYY/MM/DD HH:mm:ss
        }
        const popup = {
            content: popupContent,
        };
        this.addPopupToQueue(popup);
    }
    onRequiredTurnover(message) {
        if (message.campaignList.length === 0)
            return;
        const content = this.i18n.instant('promo_fs_3_14'); //恭喜您！\n 您已完成 {0} 的所有次数！\n \n 请继续在活动钱包进行游戏，完成提领条件。
        const popupContent = content.replace('{0}', this.combineNames(message.campaignList));
        const popup = {
            content: popupContent,
        };
        this.addPopupToQueue(popup);
    }
    onFailed(message) {
        if (message.campaignList.length === 0)
            return;
        const content = this.i18n.instant('promo_fs_19'); // 您已完成本次活动\n {0}！\n \n 祝您下次好运！",
        const popupContent = content.replace('{0}', this.combineNames(message.campaignList));
        const popup = {
            content: popupContent,
        };
        this.addPopupToQueue(popup);
    }
    onSuccess(message) {
        if (message.campaignList.length === 0)
            return;
        const content = this.i18n.instant('promo_fs_3_3'); //恭喜您！\n您已达成 {0} 的提领条件！\n\n活动钱包：{1}\n提领上限：{2}
        // 提領訊息裡的活動通常只有一個
        const campaign = message.campaignList[0];
        let popupContent = content.replace('{0}', campaign.name);
        popupContent = popupContent.replace('{1}', dec.place(campaign.balance));
        popupContent = popupContent.replace('{2}', campaign.withdrawal?.limit ? dec.place(campaign.withdrawal.limit) : 'N/A');
        const popup = {
            content: popupContent,
        };
        this.addPopupToQueue(popup);
    }
    onClaimedEvent(message) {
        if (message.campaignList.length === 0)
            return;
        const singleContent = this.i18n.instant('promo_fs_21'); // 恭喜您！ \n\n 目前有「{0}」\n期间限定活动正在进行中！\n\n请在期限内完成条件，赢得活动！
        const multiContent = this.i18n.instant('promo_multi_21'); // 恭喜您！ \n\n目前有多个期间限定活动正在进行中！\n\n请在期间内完成条件，赢得活动！
        const pupupContent = message.campaignList.length > 1 ? multiContent : singleContent.replace('{0}', message.campaignList[0]?.name || '');
        const popup = {
            content: pupupContent,
        };
        this.addPopupToQueue(popup);
    }
    /** 打開Event Center的Campaign tab
     * @param groupId 活動群組ID，如果有提供就打開對應活動群組的頁面，沒有提供就打開活動列表頁面
    */
    onOpenEventCenterCampaign(groupId) {
        // 等到this.popupQueue裡的popup都顯示完後再打開Event Center的Campaign tab，避免popup擋住Event Center的頁面
        if (this.showWindow() || this.popupQueue.length > 0) {
            // 如果目前有在顯示popup，就先把打開Event Center的動作放到queue裡，等關閉目前的popup後再執行
            const popup = {
                groupId: groupId, // 點擊後會打開Event Center的Campaign tab裡面對應的groundId的頁面
            };
            this.addPopupToQueue(popup);
        }
        else { // 如果目前沒有在顯示popup，就直接打開Event Center的Campaign tab
            this.eventCenter.open(`campaign/${groupId}`);
        }
    }
    combineNames(campaigns) {
        const willEndOn = this.i18n.instant('promo_multi_content4'); // {0}，预计结束时间为\n{1}。
        const retList = [];
        campaigns.forEach((c, index) => {
            const line = `${index + 1}. ${willEndOn.replace('{0}', c.name).replace('{1}', new Date(c.endTime).toLocaleString(this.lang))}`;
            retList.push(line);
        });
        return retList.join('\n');
    }
    getGroupIdByCampaign(campaign) {
        const group = this.ctrl.campaignGroupList().find(g => g.campaignIdList.includes(campaign.id));
        return group ? group.id : '';
    }
    static ɵfac = function CampaignPopupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CampaignPopupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CampaignPopupComponent, selectors: [["campaign-popup"]], outputs: { close: "close" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "grid", "place-items-center", "select-none"], [1, "absolute", "inset-0", "bg-black/60", "animate-fade", "animate-once", "animate-duration-200", 3, "click"], [1, "relative", "w-11/12", "md:w-3/4", "lg:w-1/2", "animate-fade", "animate-once", "animate-duration-300", 3, "close", "header", "size", "enableClose"], [1, "px-6", "pt-4", "pb-1", "text-center", "space-y-2"], [1, "text-yellow-400", "size-20", "mx-auto", 3, "name"], [1, "h-px", "divider-gradient-yellow", "opacity-80"], [1, "text-base", "sm:text-lg", "font-medium", "text-zinc-300", "max-h-48", "overflow-auto"], [1, "whitespace-pre-line"], [1, "flex", "px-6", "pb-6", "pt-4", "flex", "gap-6", "justify-center"], [1, "w-40", 3, "clicked", "size", "accentColor", "label"]], template: function CampaignPopupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, CampaignPopupComponent_Conditional_0_Template, 11, 8, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showWindow() ? 0 : -1);
        } }, dependencies: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CampaignPopupComponent, [{
        type: Component,
        args: [{ selector: 'campaign-popup', imports: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], template: "@if (showWindow()) {\n  <div class=\"fixed inset-0 grid place-items-center select-none\">\n    <div\n      class=\"absolute inset-0 bg-black/60 animate-fade animate-once animate-duration-200\"\n      (click)=\"onCancel()\"\n    ></div>\n    <ap-ui-frame-popup\n      [header]=\"header()\"\n      [size]=\"'mobile'\"\n      [enableClose]=\"false\"\n      class=\"relative w-11/12 md:w-3/4 lg:w-1/2 animate-fade animate-once animate-duration-300\"\n      (close)=\"close.emit()\"\n    >\n      <!-- Content -->\n      <div class=\"px-6 pt-4 pb-1 text-center space-y-2\">\n        <ap-icon\n          [name]=\"'gift default'\"\n          class=\"text-yellow-400 size-20 mx-auto\"\n        />\n        <div class=\"h-px divider-gradient-yellow opacity-80\"></div>\n        <div class=\"text-base sm:text-lg font-medium text-zinc-300  max-h-48 overflow-auto\">\n          <span class=\"whitespace-pre-line\">{{ windowContent()}}</span>\n        </div>\n      </div>\n\n      <div class=\"flex px-6 pb-6 pt-4 flex gap-6 justify-center\">\n        <ap-button\n          class=\"w-40\"\n          [size]=\"'large'\"\n          [accentColor]=\"'yellow'\"\n          [label]=\"buttonText()\"\n          (clicked)=\"closeAndCheckQueue()\"\n        />\n      </div>\n    </ap-ui-frame-popup>\n  </div>\n}\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CampaignPopupComponent, { className: "CampaignPopupComponent", filePath: "src/app/pages/campaign-popup/campaign-popup.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=campaign-popup.component.js.map