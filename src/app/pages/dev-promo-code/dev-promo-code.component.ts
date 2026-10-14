import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApPromoCodeQrCodeComponent } from '../../components/ap-promo-code-code/ap-promo-code-code.component';
import { ApCategorySelectionComponent } from '../../../ap-components-lib/ap-category-selection/ap-category-selection.component';

interface PromoQRCodeVariantDemo {
  subtitle: string;
  qrcodeAlt?: string;
  size?: string;
  borderColor?: string;
  backgroundColor?: string;
}

interface PromoQRCodeCategory {
  title: string;
  variants: PromoQRCodeVariantDemo[];
}

@Component({
  selector: 'dev-promo-code',
  imports: [CommonModule, ApUiCardDevComponent, ApCategorySelectionComponent, ApPromoCodeQrCodeComponent],
  templateUrl: './dev-promo-code.component.html',
  styleUrl: './dev-promo-code.component.css',
})
export class DevPromoCodeComponent {
  readonly promoQRCodeCategories: PromoQRCodeCategory[] = [
    {
      title: 'Variants',
      variants: [
        {
          subtitle: 'Default',
          qrcodeAlt: 'Promo Code QR Code',
          size: '24',
        },
      ],
    },
  ];

  getPromoQRCodeSnippet(variant: PromoQRCodeVariantDemo): string {
    const attrs: string[] = [];

    if (variant.qrcodeAlt !== undefined) {
      attrs.push(`[qrcodeAlt]="'${variant.qrcodeAlt}'"`);
    }
    if (variant.size !== undefined) {
      attrs.push(`[size]="'${variant.size}'"`);
    }
    if (variant.borderColor !== undefined) {
      attrs.push(`[borderColor]="'${variant.borderColor}'"`);
    }
    if (variant.backgroundColor !== undefined) {
      attrs.push(`[backgroundColor]="'${variant.backgroundColor}'"`);
    }

    return `<ap-promo-code-code ${attrs.join(' ')}></ap-promo-code-code>`;
  }
}
