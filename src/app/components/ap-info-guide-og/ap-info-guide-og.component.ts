import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  INPUT_TYPE_CONFIG,
  I18nText,
  ORIGINAL_BOTTOM_PANEL_INPUT_TYPES,
  OriginalBottomPanelInputType,
} from '../ap-og-input/ap-og-input.interface';
import { ApOgInputComponent } from '../ap-og-input/ap-og-input.component';
import { ApOgInputBetComponent } from '../ap-og-input-bet/ap-og-input-bet.component';
import { TabItem } from '../ap-ui-tab-group/ap-ui-tab-group.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { OgBetLevelEntry } from '../../services/og-wallet/og-wallet.interface';

type PreviewTabItem = {
  readonly id: string;
  readonly label: I18nText;
};

type InputPreviewConfig = {
  readonly tabItems?: PreviewTabItem[];
  readonly value?: string;
  readonly selectedTab?: string;
};

const INPUT_PREVIEW_CONFIG: Partial<
  Record<OriginalBottomPanelInputType, InputPreviewConfig>
> = {
  modeTab: {
    value: 'manual',
    selectedTab: 'manual',
  },
  onWin: {
    tabItems: [
      { id: 'reset', label: { key: 'og_autobet_reset', fallback: 'Reset' } },
      {
        id: 'increase by',
        label: { key: 'og_autobet_add', fallback: 'Increase by:' },
      },
    ],
    value: '0.0',
    selectedTab: 'increase by',
  },
  onLoss: {
    tabItems: [
      { id: 'reset', label: { key: 'og_autobet_reset', fallback: 'Reset' } },
      {
        id: 'increase by',
        label: { key: 'og_autobet_add', fallback: 'Increase by:' },
      },
    ],
    value: '0.0',
    selectedTab: 'increase by',
  },
  difficulty: {
    value: 'easy',
  },
  autoCashOut: {
    value: '5',
  },
};

@Component({
  selector: 'ap-info-guide-og',
  imports: [CommonModule, ApOgInputComponent, ApOgInputBetComponent],
  templateUrl: './ap-info-guide-og.component.html',
  styleUrl: './ap-info-guide-og.component.css',
})
export class ApInfoGuideOGComponent {
  private readonly appI18n = inject(AppI18nService);
  title = input<string | null>('Title');
  getItem1 = input<string>('Item 1');
  getItem2 = input<string | null>('Item 2');
  variant = input<'default' | 'description'>('default');
  image = input<string | OriginalBottomPanelInputType | null>(null);
  currencyImage = input<string | null>(null);
  readonly isBetAmount = computed<boolean>(() => this.image() === 'betAmount');

  readonly imageType = computed<OriginalBottomPanelInputType | undefined>(
    () => {
      const img = this.image();
      return img &&
        ORIGINAL_BOTTOM_PANEL_INPUT_TYPES.has(
          img as OriginalBottomPanelInputType,
        )
        ? (img as OriginalBottomPanelInputType)
        : undefined;
    },
  );

  readonly imageUrl = computed<string | undefined>(() => {
    const img = this.image();
    return img &&
      !this.isBetAmount() &&
      !ORIGINAL_BOTTOM_PANEL_INPUT_TYPES.has(
        img as OriginalBottomPanelInputType,
      )
      ? img
      : undefined;
  });

  readonly previewBetLevel = computed<OgBetLevelEntry[]>(() => [
    { min: 0.1, max: 100, interval: 0.1 },
  ]);

  readonly previewBetValue = computed<number>(() => 1);

  readonly previewConfig = computed<InputPreviewConfig>(() => {
    const type = this.imageType();
    return (type && INPUT_PREVIEW_CONFIG[type]) ?? {};
  });

  readonly previewTabItems = computed<TabItem[]>(() => {
    const previewTabs = this.previewConfig().tabItems;
    if (previewTabs) {
      return previewTabs.map((tab) => ({
        id: tab.id,
        label: this.appI18n.instant(tab.label.key, tab.label.fallback),
      }));
    }

    const type = this.imageType();
    const options = type ? INPUT_TYPE_CONFIG[type].options : null;

    return (options ?? []).map((option) => ({
      id: option.value,
      label: option.labelKey
        ? this.appI18n.instant(option.labelKey, option.label)
        : option.label,
    }));
  });

  readonly previewValue = computed<string>(() => {
    return this.previewConfig().value ?? '0.1';
  });

  readonly previewSelectedTab = computed<string>(() => {
    return this.previewConfig().selectedTab ?? '';
  });
}
