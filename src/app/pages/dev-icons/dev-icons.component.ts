import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApIconListComponent } from '../../../ap-components-lib/ap-icon-list/ap-icon-list.component';
import { ApIconAutoplayCircleComponent } from '../../icons/ap-icon-autoplay-circle/ap-icon-autoplay-circle.component';
import { ApIconBadgeFirstComponent } from '../../icons/ap-icon-badge-first/ap-icon-badge-first.component';
import { ApIconBadgeSecondComponent } from '../../icons/ap-icon-badge-second/ap-icon-badge-second.component';
import { ApIconBadgeThirdComponent } from '../../icons/ap-icon-badge-third/ap-icon-badge-third.component';
import { ApIconBlueCircleComponent } from '../../icons/ap-icon-blue-circle/ap-icon-blue-circle.component';
import { ApIconBuyFeatureCircleComponent } from '../../icons/ap-icon-buy-feature-circle/ap-icon-buy-feature-circle.component';
import { ApIconCampaignCircleComponent } from '../../icons/ap-icon-campaign-circle/ap-icon-campaign-circle.component';
import { ApIconCloseCircleComponent } from '../../icons/ap-icon-close-circle/ap-icon-close-circle.component';
import { ApIconDarkCircleComponent } from '../../icons/ap-icon-dark-circle/ap-icon-dark-circle.component';
import { ApIconDecreaseBoxComponent } from '../../icons/ap-icon-decrease-box/ap-icon-decrease-box.component';
import { ApIconGiftCouponComponent } from '../../icons/ap-icon-gift-coupon/ap-icon-gift-coupon.component';
import { ApIconGreenCircleComponent } from '../../icons/ap-icon-green-circle/ap-icon-green-circle.component';
import { ApIconIncDecComponent } from '../../icons/ap-icon-inc-dec/ap-icon-inc-dec.component';
import { ApIconIncreaseBoxComponent } from '../../icons/ap-icon-increase-box/ap-icon-increase-box.component';
import { ApIconMusicCircleComponent } from '../../icons/ap-icon-music-circle/ap-icon-music-circle.component';
import { ApIconRocketComponent } from '../../icons/ap-icon-rocket/ap-icon-rocket.component';
import { ApIconSetCircleComponent } from '../../icons/ap-icon-set-circle/ap-icon-set-circle.component';
import { ApIconSnsFacebookComponent } from '../../icons/ap-icon-sns-facebook/ap-icon-sns-facebook.component';
import { ApIconSnsLineComponent } from '../../icons/ap-icon-sns-line/ap-icon-sns-line.component';
import { ApIconSnsWhatsappComponent } from '../../icons/ap-icon-sns-whatsapp/ap-icon-sns-whatsapp.component';
import { ApIconSnsXComponent } from '../../icons/ap-icon-sns-x/ap-icon-sns-x.component';
import { ApIconSpinComponent } from '../../icons/ap-icon-spin/ap-icon-spin.component';
import { ApIconTurboCircleComponent } from '../../icons/ap-icon-turbo-circle/ap-icon-turbo-circle.component';
import { ApIconYellowCircleComponent } from '../../icons/ap-icon-yellow-circle/ap-icon-yellow-circle.component';
import { ApIconCopiedComponent } from '../../icons/ap-icon-copied/ap-icon-copied.component';
import { ApIconChickenComponent } from "../../icons/ap-icon-chicken/ap-icon-chicken.component";
import { ApIconHoldTurboSpinComponent } from '../../icons/ap-icon-hold-turbo-spin/ap-icon-hold-turbo-spin.component';


@Component({
  selector: 'dev-icons',
  imports: [CommonModule, ApUiTocDevComponent, ApIconListComponent, ApIconCopiedComponent, ApIconAutoplayCircleComponent, ApIconBadgeFirstComponent, ApIconBadgeSecondComponent,
    ApIconBadgeThirdComponent, ApIconBlueCircleComponent, ApIconBuyFeatureCircleComponent, ApIconCampaignCircleComponent, ApIconCloseCircleComponent, ApIconDarkCircleComponent, ApIconDecreaseBoxComponent, ApIconGiftCouponComponent, ApIconGreenCircleComponent, ApIconIncDecComponent, ApIconIncreaseBoxComponent, ApIconMusicCircleComponent, ApIconSetCircleComponent, ApIconSnsFacebookComponent, ApIconSnsLineComponent, ApIconSnsWhatsappComponent, ApIconSnsXComponent, ApIconSpinComponent, ApIconTurboCircleComponent, ApIconYellowCircleComponent, ApIconHoldTurboSpinComponent, ApIconChickenComponent, ApIconRocketComponent],
  templateUrl: './dev-icons.component.html',
  styleUrl: './dev-icons.component.css',
})
export class DevIconsComponent {}
