import { Component, inject, afterNextRender } from '@angular/core';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { ApTrnCardTitleComponent } from '../../components/ap-trn-card-title/ap-trn-card-title.component';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApCategorySelectionComponent } from '../../../ap-components-lib/ap-category-selection/ap-category-selection.component';
import type {
  TrnCardMatchCategory, TrnCardMatchVariantDemo, TrnGameTitleCategory, TrnGameTitleVariantDemo, TrnCardBonusCategory, TrnCardBonusVariantDemo, TrnFloatButtonCategory, TrnFloatButtonVariantDemo, TrnFloatCountdownVariantDemo, TrnFloatCountdownCategory, TrnStatusBarCategory, TrnStatusBarVariantDemo, TrnGameHintCategory, TrnGameHintVariantDemo, TrnGameListCategory, TrnGameListVariantDemo, TrnGameStartConfirmVariantDemo, TrnGameStartConfirmCategory, TrnGameLeaveConfirmCategory, TrnGameLeaveConfirmVariantDemo, TrnGameMatchFinishedCategory, TrnGameMatchFinishedVariantDemo, TrnGameCreatedNotificationCategory, TrnGameCreatedNotificationVariantDemo, TrnGameResultCategory, TrnGameResultVariantDemo
} from './dev-trn.interface';
import { ApTrnCardMatchComponent } from '../../components/ap-trn-card-match/ap-trn-card-match.component';
import { ApTrnCardBonusComponent } from '../../components/ap-trn-card-bonus/ap-trn-card-bonus.component';
import { ApTrnFloatButtonComponent } from '../../components/ap-trn-float-button/ap-trn-float-button.component';
import { ApTrnFloatCountdownComponent } from '../../components/ap-trn-float-countdown/ap-trn-float-countdown.component';
import { ApTrnStatusBarComponent } from '../../components/ap-trn-status-bar/ap-trn-status-bar.component';
import { ApTrnGameHintComponent } from '../../components/ap-trn-game-hint/ap-trn-game-hint.component';
import { ApTrnGameListComponent } from '../../components/ap-trn-game-list/ap-trn-game-list.component';
import { TrnGameConfirmComponent } from '../trn-game-confirm/trn-game-confirm.component';
import { TrnGameEventLeaveConfirmComponent } from '../trn-game-event-leave-confirm/trn-game-event-leave-confirm.component';
import { ApTrnGameMatchFinished } from '../../components/ap-trn-game-match-finished/ap-trn-game-match-finished.component';
import { TrnCreatedNotificationComponent } from '../trn-created-notification/trn-created-notification.component';
import { ApTrnGameResultComponent } from '../../components/ap-trn-game-result/ap-trn-game-result.component';

@Component({
  selector: 'dev-trn',
  imports: [CommonModule, ApUiCardDevComponent, ApCategorySelectionComponent, ApTrnCardTitleComponent, ApTrnCardMatchComponent, ApTrnCardBonusComponent, ApTrnFloatButtonComponent, ApTrnFloatCountdownComponent, ApTrnStatusBarComponent, ApTrnGameHintComponent, ApTrnGameListComponent, TrnGameConfirmComponent, TrnGameEventLeaveConfirmComponent, ApTrnGameMatchFinished, TrnCreatedNotificationComponent, TrnCreatedNotificationComponent, TrnCreatedNotificationComponent, ApTrnGameResultComponent],
  templateUrl: './dev-trn.component.html',
  styleUrl: './dev-trn.component.css',
})
export class DevTrnComponent {
  private trn = inject(TrnCtrlService);

  constructor() {
    afterNextRender(() => {
      this.trn.debugToggleSignal('created-notification');
    });
  }

  readonly trnGameTitleCategories: TrnGameTitleCategory[] = [
    {
      title: 'Size',
      variants: [
        { subtitle: 'Default', title: 'Quick', accentColor: 'yellow', size: 'default' },
        { subtitle: 'Small', title: 'Quick', accentColor: 'yellow', size: 'small' }],
    },
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick', title: 'Quick Race', accentColor: 'yellow', size: 'default' },
        { subtitle: 'Event', title: 'Event Race', accentColor: 'purple', size: 'default', },
      ],
    },
  ];

  readonly trnCardBonusCategories: TrnCardBonusCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow', currency: '$', amount: 10 },
        { subtitle: 'Event Default', accentColor: 'purple', currency: '$', amount: 100 },
      ],
    },
  ];

  readonly trnCardMatchCategories: TrnCardMatchCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow', currentCount: 5, totalCount: 10 },
        { subtitle: 'Event Default', accentColor: 'purple', currentCount: 50, totalCount: 100 },
      ],
    },
  ];

  readonly trnFloatButtonCategories: TrnFloatButtonCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow', rank: 10, isPlaying: false },
        { subtitle: 'Quick Playing', accentColor: 'yellow', rank: 10, isPlaying: true },
        { subtitle: 'Event Default', accentColor: 'purple', rank: 100, isPlaying: false },
        { subtitle: 'Event Playing', accentColor: 'purple', rank: 100, isPlaying: true },
      ],
    },]

  readonly trnFloatCountdownCategories: TrnFloatCountdownCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow', days: 10, hours: 10, minutes: 10, seconds: 10 },
        { subtitle: 'Event Default', accentColor: 'purple', days: 10, hours: 10, minutes: 10, seconds: 10 },
      ],
    },]

  readonly trnStatusBarCategories: TrnStatusBarCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow' },
        { subtitle: 'Event Default', accentColor: 'purple' },
      ],
    },
  ];

  readonly trnGameHintCategories: TrnGameHintCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow', rank: 10 },
        { subtitle: 'Event Default', accentColor: 'purple', rank: 100 },
      ],
    },
  ];

  readonly trnGameListCategories: TrnGameListCategory[] = [
    {
      title: 'Type',
      variants: [
        {
          subtitle: 'Quick Default',
          trnData: {
            id: 'dev-quick-race',
            name: 'Quick Race',
            type: 'quick',
            status: 'running',
            startTime: Date.now() - 60_000,
            endTime: Date.now() + 600_000,
            matchDuration: 120,
            exchangeRate: 1,
            tiers: [],
            feeRatio: 0,
            betMultiplier: 1,
            maxPlayers: 20,
            description: 'Fast tournament match with instant matchmaking.',
            bannerImage: 'assets/images/banners/img-trn-quick-banner-default-h.jpg',
            raceData: {
              id: 'dev-quick-race-data',
              rank: 3,
              currentPool: 0,
              playersList: [
                { id: 'dev-player-quick', name: 'You', rank: 3, score: 12800, win: 0, highlighted: true },
              ],
            },
          },
        },
        {
          subtitle: 'Event Default',
          trnData: {
            id: 'dev-event-race',
            name: 'Event Race',
            type: 'event',
            status: 'running',
            startTime: Date.now() - 3_600_000,
            endTime: Date.now() + 86_400_000,
            matchDuration: 180,
            exchangeRate: 1,
            tiers: [],
            feeRatio: 0,
            betMultiplier: 1,
            maxPlayers: 100,
            description: 'Limited-time tournament with a shared prize pool.',
            bannerImage: 'assets/images/banners/img-trn-event-banner-default-2.jpg',
            raceData: {
              id: 'dev-event-race-data',
              rank: 12,
              currentPool: 500000,
              playersList: [
                { id: 'dev-player-event', name: 'You', rank: 12, score: 24600, win: 500, highlighted: true },
              ],
            },
          },
        },
      ],
    },
  ];

  readonly trnGameStartConfirmCategories: TrnGameStartConfirmCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow', },
        { subtitle: 'Event Default', accentColor: 'purple', },
      ],
    },
  ];

  readonly trnGameLeaveConfirmCategories: TrnGameLeaveConfirmCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow', },
        { subtitle: 'Event Default', accentColor: 'purple', },
      ],
    },
  ];

  readonly trnGameMatchFinishedCategories: TrnGameMatchFinishedCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow', },
        { subtitle: 'Event Default', accentColor: 'purple', },
      ],
    },
  ]

  readonly trnGameCreatedNotificationCategories: TrnGameCreatedNotificationCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow', },
      ],
    },
  ]

  readonly trnGameResultCategories: TrnGameResultCategory[] = [
    {
      title: 'AccentColor',
      variants: [
        { subtitle: 'Quick Default', accentColor: 'yellow' },
        { subtitle: 'Event Default', accentColor: 'purple' },
      ],
    },
  ]

  /* Code */
  getTrnGameTitleSnippet(variant: TrnGameTitleVariantDemo): string {
    return `<ap-trn-card-title  title="${variant.title}" accentColor="${variant.accentColor}" size="${variant.size}"/>`;
  }

  getTrnCardBonusSnippet(variant: TrnCardBonusVariantDemo): string {
    return `<ap-trn-card-bonus variant="${variant.accentColor}" [currency]="${variant.currency}" [amount]="${variant.amount}"/>`;
  }

  getTrnCardMatchSnippet(variant: TrnCardMatchVariantDemo): string {
    return `<ap-trn-card-match variant="${variant.accentColor}" [currentCount]="${variant.currentCount}" [totalCount]="${variant.totalCount}"/>`;
  }

  getTrnFloatButtonSnippet(variant: TrnFloatButtonVariantDemo): string {
    return `<ap-trn-float-button variant="${variant.accentColor}" [isPlaying]="${variant.isPlaying}"/>`;
  }

  getTrnFloatCountdownSnippet(variant: TrnFloatCountdownVariantDemo): string {
    return `<ap-trn-float-countdown variant="${variant.accentColor}" [days]="${variant.days}" [hours]="${variant.hours}" [seconds]="${variant.seconds}" [minutes]="${variant.minutes}"/>`;
  }

  getTrnStatusBarSnippet(variant: TrnStatusBarVariantDemo): string {
    return `<ap-trn-status-bar variant="${variant.accentColor}" />`;
  }

  getTrnGameHintSnippet(variant: TrnGameHintVariantDemo): string {
    return `<ap-trn-game-hint variant="${variant.accentColor}" [rank]="${variant.rank}"/>`;
  }
  getTrnGameListSnippet(_variant: TrnGameListVariantDemo): string {
    return `<ap-trn-game-list [trnData]="trnData"/>`;
  }

  getTrnGameStartConfirmSnippet(variant: TrnGameStartConfirmVariantDemo): string {
    return `<trn-game-confirm variant="${variant.accentColor}"/>`;
  }

  getTrnGameLeaveConfirmSnippet(variant: TrnGameLeaveConfirmVariantDemo): string {
    return `<trn-game-event-leave-confirm accentColor="${variant.accentColor}"/>`;
  }

  getTrnGameMatchFinishedSnippet(variant: TrnGameMatchFinishedVariantDemo): string {
    return `<ap-trn-game-match-finished accentColor="${variant.accentColor}"/>`;
  }

  getTrnGameCreatedNotificationSnippet(variant: TrnGameCreatedNotificationVariantDemo): string {
    return `<trn-created-notification variant="${variant.accentColor}"/>`;
  }

  getTrnGameResultSnippet(variant: TrnGameResultVariantDemo): string {
    return `<ap-trn-game-result accentColor="${variant.accentColor}"/>`;
  }
}
