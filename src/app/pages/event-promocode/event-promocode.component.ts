import { Component, input, output, signal, computed, inject } from '@angular/core';
import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { CommonModule } from '@angular/common';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApPromoCodeQrCodeComponent } from '../../components/ap-promo-code-code/ap-promo-code-code.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { firstValueFrom, timer } from 'rxjs';
import {
  CampaignType, CampaignFreeBonus, CampaignFreeSpins, IPromoCodeResult,
  PromoCodeExchangeTypeEnum,
} from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { PromoCodeInfoResultMsg } from '../../services/campaign-ctrl/campaign-info-msg.interface';
import { formatCampaignList } from '../../services/campaign-ctrl/campaign-legacy.function';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApIconGiftCouponComponent } from "../../icons/ap-icon-gift-coupon/ap-icon-gift-coupon.component";
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'event-promocode',
  imports: [CommonModule, ApButtonComponent, ApInputBox, ApIconComponent, ApPromoCodeQrCodeComponent, ApLoadingOverlayComponent, ApUiFramePopupComponent, ApIconGiftCouponComponent],
  templateUrl: './event-promocode.component.html',
  styleUrl: './event-promocode.component.css',
})
export class EventPromoCodeComponent {
  private appI18n = inject(AppI18nService);
  protected api = inject(AppInterfaceService);
  protected session = inject(ClientSessionService);

  protected campaign = inject(CampaignFacadeService);

  constructor() {
    this.api.promoCodeResult$.subscribe((msg) => this.onPromoCodeResultMsg(msg));
  }
  promoCode = signal('');
  showPopup = signal(false);
  loading = signal(false);
  passHint = signal('');
  errorHint = signal('');
  ctaSubTitle = signal('');
  allowedCharacterPattern = /[0-9a-zA-Z_]/g;  // 僅允許 0~9, a~z, A~Z , _
  popUpDescription = signal('You have received Free Bonus from campaign');
  popUpConfirmText = signal('OK');
  popUpHeader = signal('Congratulations!');

  readonly couponTitle = this.appI18n.computed('coupon', 'PROMO CODE');
  readonly placeholder = this.appI18n.computed('coupon_1', 'Please input redeem code');
  readonly claimLabel = this.appI18n.computed('coupon_2', 'Claim');
  readonly ctaTitle = this.appI18n.computed('coupon_3', 'Get rewarded and stay ahead!');
  readonly passString = this.appI18n.computed('coupon_popup_1', 'Promo code redeemed successfully.');
  readonly hintString = this.appI18n.computed('code_input_tip', 'Enter the code to get the reward.');
  readonly couponInfo1 = this.appI18n.computed('coupon_info_1', 'Enter the code to get the reward.');
  readonly couponInfo2 = this.appI18n.computed('coupon_info_2', 'Cannot be combined with other offers.');
  readonly couponInfo3 = this.appI18n.computed('coupon_info_3', 'May not be valid on all items');
  readonly couponInfo4 = this.appI18n.computed('coupon_info_4', 'Terms and conditions apply.');
  inputHint = signal(this.hintString());

  readonly errorRecord = computed<Record<string, string>>(() => ({
    '0005000':
      this.appI18n.instant('coupon_popup_2') ??
      'Invalid promo code. Please check the code and try again.',
    '0006001':
      this.appI18n.instant('coupon_popup_2') ??
      'Invalid promo code. Please check the code and try again.',
    '0006002':
      this.appI18n.instant('coupon_popup_3') ??
      'All rewards for this event have been redeemed. Stay tuned for the next one.',
    '0006003':
      this.appI18n.instant('coupon_popup_4') ??
      " This game doesn't support bonus redemption. Please try our recommended games.",
    '0006004':
      this.appI18n.instant('coupon_popup_5') ??
      'All promo codes for today have been claimed. Try again tomorrow.',
    '0006005':
      this.appI18n.instant('coupon_popup_0006005') ??
      'All promo codes for today have been claimed. Try again tomorrow.',
  }));

  readonly showQR = computed(() => this.campaign.codeExchangeType() === PromoCodeExchangeTypeEnum.OpenExchangeAndQR);

  popUpQueue: CampaignType[] = [];


  isPromoCodeValid = computed(() => {
    return this.promoCode().length >= 1 && this.promoCode().length <= 20;
  });

  isValid = computed(() => {
    return this.passHint().length > 0;
  });

  hasError = computed(() => {
    return this.errorHint().length > 0;
  });

  onPromoCodeChange(value: string): void {
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

  onPromoCodeResultMsg(msg: PromoCodeInfoResultMsg): void {
    const campaigns = formatCampaignList(msg.campaignlist);
    const result: IPromoCodeResult = {
      errorCode: msg.error_code,
      promoCode: msg.coupon_code,
      list: [...campaigns.freeBonus, ...campaigns.freeSpins],
    };

    if (result.errorCode?.length > 0 && result.errorCode !== '0') {
      this.loading.set(false);
      this.inputHint.set('');
      this.passHint.set('');
      this.errorHint.set(
        this.errorRecord()[result.errorCode] ?? `Unknown error: ${result.errorCode}`,
      );
      return;
    }

    this.loading.set(false);
    this.inputHint.set('');
    this.passHint.set(this.passString());
    this.errorHint.set('');

    this.popUpQueue = result.list.slice(0);

    this.campaign.updateCampaignList(msg.campaignlist);
    this.campaign.updateCampaignGroupList(msg.campaign_group_list);

    this.openPopUp(this.popUpQueue.pop());
  }
  

  onClosePopUp(): void {
    this.showPopup.set(false);
    this.openPopUp(this.popUpQueue.pop());
  }

  openPopUp(campaign: CampaignFreeBonus | CampaignFreeSpins | undefined) {
    if (!campaign) return;

    this.showPopup.set(true);
    if (campaign.condition) {
      const defaultDescription =
        'Special Event: {0} is now live! Complete the conditions and grab your reward!';
      let description = this.appI18n.instant('promo_fs_21') ?? defaultDescription;
      description = description.replace('{0}', campaign.name);
      this.popUpDescription.set(description);
    } else if (campaign.type === 'freeSpins') {
      const defaultDescription =
        "You have just received '{0}' free spins, with a value of {1}!";
      let description = this.appI18n.instant('promo_fs_13') ?? defaultDescription;
      description = description.replace('{0}', campaign.spinCount.toString());
      description = description.replace('{1}', campaign.totalAmount.toFixed(3));
      this.popUpDescription.set(description);
    } else if (campaign.type === 'freeBonus') {
      const defaultDescription =
        "You've received {1} Free Bonus from {0} campaign!";
      let description = this.appI18n.instant('promo_popup1') ?? defaultDescription;
      description = description.replace('{0}', campaign.name);
      description = description.replace('{1}', campaign.totalAmount.toFixed(3));
      this.popUpDescription.set(description);
    }
  }
}
