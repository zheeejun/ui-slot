import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApBfCardBetControlComponent } from '../../components/ap-bf-card-bet-control/ap-bf-card-bet-control.component';
import { ApBfCardChanceComponent } from '../../components/ap-bf-card-chance/ap-bf-card-chance.component';
import { ApBfCardFeatureComponent } from '../../components/ap-bf-card-feature/ap-bf-card-feature.component';
import { ApCategorySelectionComponent } from '../../../ap-components-lib/ap-category-selection/ap-category-selection.component';
import { ApBuyFeatureCard } from '../event-buy-feature/event-buy-feature.interface';

interface BetControlVariantDemo {
  subtitle: string;
  bet: number;
  isMin?: boolean;
  isMax?: boolean;
}

interface BuyChanceVariantDemo {
  subtitle: string;
  card: ApBuyFeatureCard;
  price: number;
  disabled?: boolean;
  activated: boolean;
}

interface BuyFeatureVariantDemo {
  subtitle: string;
  card: ApBuyFeatureCard;
  price: number;
  disabled?: boolean;
}

interface BuyFeatureCategory<T extends { subtitle: string }> {
  title: string;
  variants: T[];
}

@Component({
  selector: 'dev-buy-feature',
  imports: [CommonModule, ApUiCardDevComponent, ApCategorySelectionComponent, ApBfCardBetControlComponent, ApBfCardChanceComponent, ApBfCardFeatureComponent],
  templateUrl: './dev-buy-feature.component.html',
  styleUrl: './dev-buy-feature.component.css',
})
export class DevBuyFeatureComponent {
  private readonly mockBuyChanceCard: ApBuyFeatureCard = {
    mode: 'dc',
    currency: 'USD',
    rate: 50,
    order: 1,
  };

  private readonly mockBuyFeatureCard: ApBuyFeatureCard = {
    mode: 'bf',
    currency: 'USD',
    rate: 100,
    order: 2,
    isDemoAvailable: true,
  };

  readonly betControlCategories: BuyFeatureCategory<BetControlVariantDemo>[] = [
    {
      title: 'States',
      variants: [
        {
          subtitle: 'Default',
          bet: 100,
        },
        {
          subtitle: 'Minimum',
          bet: 10,
          isMin: true,
        },
        {
          subtitle: 'Maximum',
          bet: 1000000,
          isMax: true,
        },
      ],
    },
  ];

  readonly buyChanceCategories: BuyFeatureCategory<BuyChanceVariantDemo>[] = [
    {
      title: 'States',
      variants: [
        {
          subtitle: 'Active',
          card: this.mockBuyChanceCard,
          price: 60,
          activated: true,
        },
        {
          subtitle: 'Inactive',
          card: this.mockBuyChanceCard,
          price: 60,
          activated: false,
        },
        {
          subtitle: 'Disabled',
          card: this.mockBuyChanceCard,
          price: 60,
          disabled: true,
          activated: false,
        },
      ],
    },
  ];

  readonly buyFeatureCategories: BuyFeatureCategory<BuyFeatureVariantDemo>[] = [
    {
      title: 'States',
      variants: [
        {
          subtitle: 'Default',
          card: this.mockBuyFeatureCard,
          price: 100,
        },
        {
          subtitle: 'Disabled',
          card: this.mockBuyFeatureCard,
          price: 100,
          disabled: true,
        },
      ],
    },
  ];

  increaseBet(variant: BetControlVariantDemo): void {
    variant.bet += 10;
    variant.isMin = false;
  }

  decreaseBet(variant: BetControlVariantDemo): void {
    variant.bet = Math.max(0, variant.bet - 10);
    variant.isMin = variant.bet === 0;
  }

  getBetControlSnippet(variant: BetControlVariantDemo): string {
    const attrs = [`[bet]="${variant.bet}"`];

    if (variant.isMin !== undefined) {
      attrs.push(`[isMin]="${variant.isMin}"`);
    }
    if (variant.isMax !== undefined) {
      attrs.push(`[isMax]="${variant.isMax}"`);
    }

    return `<ap-bf-card-bet-control ${attrs.join(' ')}></ap-bf-card-bet-control>`;
  }

  getBuyChanceSnippet(variant: BuyChanceVariantDemo): string {
    const attrs = [
      '[card]="card"',
      `[currency]="'${variant.card.currency}'"`,
      `[price]="${variant.price}"`,
      `[activated]="${variant.activated}"`,
    ];

    if (variant.disabled !== undefined) {
      attrs.push(`[disabled]="${variant.disabled}"`);
    }

    return `<ap-bf-card-chance ${attrs.join(' ')}></ap-bf-card-chance>`;
  }

  getBuyFeatureSnippet(variant: BuyFeatureVariantDemo): string {
    const attrs = [
      '[card]="card"',
      `[price]="${variant.price}"`,
    ];

    if (variant.disabled !== undefined) {
      attrs.push(`[disabled]="${variant.disabled}"`);
    }

    return `<ap-bf-card-feature ${attrs.join(' ')}></ap-bf-card-feature>`;
  }
}
