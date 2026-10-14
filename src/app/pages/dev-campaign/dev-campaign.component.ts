import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApCampaignCardComponent } from '../../components/ap-campaign-card/ap-campaign-card.component';
import { ApCampaignListComponent } from '../../components/ap-campaign-list/ap-campaign-list.component';
import { ApCategorySelectionComponent } from '../../../ap-components-lib/ap-category-selection/ap-category-selection.component';
import { CampaignComponentData } from '../event-campaign-content/event-campaign-content.interface';
import { DefaultBaseCampaigns } from '../event-campaign-content/event-campaign-content.data';

interface CampaignVariantDemo {
  subtitle: string;
}

interface CampaignCardCategory {
  title: string;
  variants: CampaignVariantDemo[];
}

interface CampaignListVariantDemo {
  subtitle: string;
  data: CampaignComponentData;
  currency?: string;
}

interface CampaignListCategory {
  title: string;
  variants: CampaignListVariantDemo[];
}

@Component({
  selector: 'dev-campaign',
  imports: [CommonModule, ApUiCardDevComponent, ApCategorySelectionComponent, ApCampaignCardComponent, ApCampaignListComponent],
  templateUrl: './dev-campaign.component.html',
  styleUrl: './dev-campaign.component.css',
})
export class DevCampaignComponent {
  readonly campaignCardCategories: CampaignCardCategory[] = [
    {
      title: 'Variants',
      variants: [
        {
          subtitle: 'Default',
        },
      ],
    },
  ];

  readonly campaignListCategories: CampaignListCategory[] = [
    {
      title: 'Status',
      variants: [
        {
          subtitle: 'In Progress Free Bonus',
          data: DefaultBaseCampaigns[0],
          currency: '$',
        },
        {
          subtitle: 'In Progress Free Spins',
          data: DefaultBaseCampaigns[1],
          currency: '$',
        },
        {
          subtitle: 'Completed',
          data: {
            ...DefaultBaseCampaigns[0],
            id: 'demo-completed',
            title: 'Completed Free Bonus',
            variant: 'completed',
            balance: 12000,
            progressCurrent: 100,
            progressTotal: 100,
          },
          currency: '$',
        },
      ],
    },
    {
      title: 'Hidden Conditions',
      variants: [
        {
          subtitle: 'Bet Count Requirement',
          data: {
            ...DefaultBaseCampaigns[2],
            id: 'demo-hidden-bet-count',
            title: 'Hidden Bet Count Requirement',
            condition: {
              betCount: {
                current: 3,
                target: 10,
                remaining: 7,
                progress: 30,
              },
            },
          },
          currency: '$',
        },
        {
          subtitle: 'Turnover Requirement',
          data: {
            ...DefaultBaseCampaigns[3],
            id: 'demo-hidden-turnover',
            title: 'Hidden Turnover Requirement',
            condition: {
              turnover: {
                current: 12000,
                target: 50000,
                remaining: 38000,
                progress: 24,
              },
            },
          },
          currency: '$',
        },
      ],
    },
  ];

  getCampaignCardSnippet(_variant: CampaignVariantDemo): string {
    return '<ap-campaign-card></ap-campaign-card>';
  }

  getCampaignListSnippet(variant: CampaignListVariantDemo): string {
    return `<ap-campaign-list [compaignData]="campaignData" [currency]="'${variant.currency ?? ''}'"></ap-campaign-list>`;
  }
}
