import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApCategorySelectionComponent } from '../../../ap-components-lib/ap-category-selection/ap-category-selection.component';
import { ApHistoryCalenderComponent } from '../../components/ap-history-calender/ap-history-calender.component';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { ApUiReplayModeComponent } from '../../components/ap-ui-replay-mode/ap-ui-replay-mode.component';

type HistoryCalendarAccentColor = 'yellow' | 'purple' | 'zinc' | 'slate';

interface ReplayModeVariantDemo {
  subtitle: string;
  label?: string;
  showIcon?: boolean;
  showCloseButton?: boolean;
}

interface ReplayModeCategory {
  title: string;
  variants: ReplayModeVariantDemo[];
}

interface HistoryCalendarVariantDemo {
  subtitle: string;
  accentColor?: HistoryCalendarAccentColor;
}

interface HistoryCalendarCategory {
  title: string;
  variants: HistoryCalendarVariantDemo[];
}

@Component({
  selector: 'dev-component',
  imports: [
    CommonModule,
    ApUiCardDevComponent,
    ApCategorySelectionComponent,
    ApUiReplayModeComponent,
    ApHistoryCalenderComponent,
  ],
  templateUrl: './dev-component.component.html',
  styleUrl: './dev-component.component.css',
})
export class DevComponent {
  readonly replayModeCategories: ReplayModeCategory[] = [
    {
      title: 'Variants',
      variants: [
        { subtitle: 'Default' },
        { subtitle: 'Custom label', label: 'Demo Mode' },
        { subtitle: 'Without music icon', showIcon: false },
        { subtitle: 'Without close button', showCloseButton: false },
      ],
    },
  ];

  getReplayModeCodeSnippet(variant: ReplayModeVariantDemo): string {
    const attrs: string[] = [];

    if (variant.label !== undefined) {
      attrs.push(`[label]="'${variant.label}'"`);
    }
    if (variant.showIcon !== undefined) {
      attrs.push(`[showIcon]="${variant.showIcon}"`);
    }
    if (variant.showCloseButton !== undefined) {
      attrs.push(`[showCloseButton]="${variant.showCloseButton}"`);
    }

    return `<ap-ui-replay-mode ${attrs.join(' ')}></ap-ui-replay-mode>`;
  }

  readonly historyCalendarCategories: HistoryCalendarCategory[] = [
    {
      title: 'Accent colors',
      variants: [
        { subtitle: 'Yellow', accentColor: 'yellow' },
        { subtitle: 'Purple', accentColor: 'purple' },
        { subtitle: 'Zinc', accentColor: 'zinc' },
        { subtitle: 'Slate', accentColor: 'slate' },
      ],
    },
  ];

  getHistoryCalendarCodeSnippet(
    variant: HistoryCalendarVariantDemo,
  ): string {
    const attrs: string[] = [];

    if (variant.accentColor !== undefined) {
      attrs.push(`[accentColor]="'${variant.accentColor}'"`);
    }

    return `<ap-history-calender ${attrs.join(' ')}></ap-history-calender>`;
  }
}
