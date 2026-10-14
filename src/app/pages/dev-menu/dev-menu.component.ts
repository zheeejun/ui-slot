import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApCategorySelectionComponent } from '../../../ap-components-lib/ap-category-selection/ap-category-selection.component';
import {
  ApTabMenuIconComponent,
  type TabMenuAccentColor,
  type TabMenuItem,
} from '../../../ap-components-lib/ap-tab-menu-icon/ap-tab-menu-icon.component';
import {
  ApTabMenuTextComponent,
  type TabMenuItem as TabTextMenuItem,
  type TabMenuTextAccentColor,
} from '../../../ap-components-lib/ap-tab-menu-text/ap-tab-menu-text.component';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { TabItem } from '../../components/ap-ui-tab-group/ap-ui-tab-group.interface';

type TabGroupAccentColor = 'yellow' | 'orange' | 'slate';

interface TabGroupVariant {
  subtitle: string;
  tabs?: TabItem[];
  selectedTab?: string;
  accentColor?: TabGroupAccentColor;
  size?: 'default' | 'small';
  disabled?: boolean;
}

interface TabGroupCategory {
  title: string;
  variants: TabGroupVariant[];
}

interface TabTextMenuVariant {
  subtitle: string;
  tabs?: TabTextMenuItem[];
  selectedTab?: string;
  accentColor?: TabMenuTextAccentColor;
  justify?: 'center' | 'start';
}

interface TabTextMenuCategory {
  title: string;
  variants: TabTextMenuVariant[];
}

interface TabIconMenuVariant {
  subtitle: string;
  tabs?: TabMenuItem[];
  selectedTab?: string;
  accentColor?: TabMenuAccentColor;
  justify?: 'center' | 'start';
}

interface TabIconMenuCategory {
  title: string;
  variants: TabIconMenuVariant[];
}

@Component({
  selector: 'dev-menu',
  imports: [CommonModule,ApCategorySelectionComponent,ApTabMenuIconComponent,ApTabMenuTextComponent,ApUiCardDevComponent,ApUiTabGroupComponent,
  ],
  templateUrl: './dev-menu.component.html',
  styleUrl: './dev-menu.component.css',
})
export class DevMenuComponent {
  /* UI Tab Group */
  readonly defaultTabGroupTabs: TabItem[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
    { id: 'rules', label: 'Rules' },
  ];

  readonly tabGroupCategories: TabGroupCategory[] = [
    {
      title: 'Accent Colors',
      variants: [
        { subtitle: 'Yellow Accent', accentColor: 'yellow' },
        { subtitle: 'Orange Accent', accentColor: 'orange' },
        { subtitle: 'Slate Accent', accentColor: 'slate' },
      ],
    },
    {
      title: 'States',
      variants: [
        { subtitle: 'Default' },
        {
          subtitle: 'Small',
          selectedTab: 'week',
          size: 'small',
          tabs: [
            { id: 'day', label: 'Day' },
            { id: 'week', label: 'Week' },
            { id: 'month', label: 'Month' },
          ],
        },
        { subtitle: 'Disabled', disabled: true },
      ],
    },
  ];

  getTabGroupCodeSnippet(variant: TabGroupVariant): string {
    const attrs: string[] = [];

    if (variant.tabs !== undefined) {
      attrs.push(`[tabs]='${JSON.stringify(variant.tabs)}'`);
    }
    if (variant.selectedTab !== undefined) {
      attrs.push(`[selectedTab]="'${variant.selectedTab}'"`);
    }
    if (variant.accentColor !== undefined) {
      attrs.push(`[accentColor]="'${variant.accentColor}'"`);
    }
    if (variant.size !== undefined) {
      attrs.push(`[size]="'${variant.size}'"`);
    }
    if (variant.disabled) {
      attrs.push(`[disabled]="true"`);
    }

    return `<ap-ui-tab-group ${attrs.join(' ')}></ap-ui-tab-group>`;
  }

  /* Tab Menu Text */
  readonly defaultTabTextMenuTabs: TabTextMenuItem[] = [
    { id: 'pay-table', label: 'Pay Table' },
    { id: 'feature', label: 'Feature' },
    { id: 'guide', label: 'Guide' },
  ];

  readonly tabTextMenuCategories: TabTextMenuCategory[] = [
    {
      title: 'States',
      variants: [
        { subtitle: 'Default' },
        {
          subtitle: 'Selected Feature',
          selectedTab: 'feature',
        },
      ],
    },
    {
      title: 'Layout',
      variants: [
        { subtitle: 'Centered', justify: 'center' },
        { subtitle: 'Start', justify: 'start' },
        {
          subtitle: 'Overflow',
          justify: 'start',
          tabs: [
            { id: 'pay-table', label: 'Pay Table' },
            { id: 'feature', label: 'Feature' },
            { id: 'guide', label: 'Guide' },
            { id: 'rules', label: 'Rules' },
            { id: 'symbols', label: 'Symbols' },
            { id: 'bonus', label: 'Bonus' },
            { id: 'settings', label: 'Settings' },
          ],
        },
      ],
    },
    {
      title: 'Accent Colors',
      variants: [
        { subtitle: 'Yellow Accent', accentColor: 'yellow' },
        { subtitle: 'Orange Accent', accentColor: 'orange' },
        { subtitle: 'Slate Accent', accentColor: 'slate' },
      ],
    },
  ];

  getTabTextMenuCodeSnippet(variant: TabTextMenuVariant): string {
    const attrs: string[] = [];

    if (variant.tabs !== undefined) {
      attrs.push(`[tabs]='${JSON.stringify(variant.tabs)}'`);
    }
    if (variant.selectedTab !== undefined) {
      attrs.push(`[selectedTab]="'${variant.selectedTab}'"`);
    }
    if (variant.accentColor !== undefined) {
      attrs.push(`[accentColor]="'${variant.accentColor}'"`);
    }
    if (variant.justify !== undefined) {
      attrs.push(`[justify]="'${variant.justify}'"`);
    }

    return `<ap-tab-menu-text ${attrs.join(' ')}></ap-tab-menu-text>`;
  }

  /* Tab Menu Icon */
  readonly defaultTabIconMenuTabs: TabMenuItem[] = [
    { id: 'buy-feature', label: 'Buy Feature', icon: 'shopping-cart' },
    { id: 'tournament', label: 'Tournament', icon: 'trophy' },
    { id: 'campaign', label: 'Campaign', icon: 'gift', hasBadge: true },
  ];

  readonly tabIconMenuCategories: TabIconMenuCategory[] = [
    {
      title: 'States',
      variants: [
        { subtitle: 'Default' },
        {
          subtitle: 'Disabled Item',
          selectedTab: 'tournament',
          tabs: [
            { id: 'buy-feature', label: 'Buy Feature', icon: 'shopping-cart' },
            {
              id: 'tournament',
              label: 'Tournament',
              icon: 'trophy',
              disabled: true,
            },
            { id: 'campaign', label: 'Campaign', icon: 'gift', hasBadge: true },
          ],
        },
      ],
    },
    {
      title: 'Layout',
      variants: [
        { subtitle: 'Centered', justify: 'center' },
        { subtitle: 'Start', justify: 'start' },
        {
          subtitle: 'Overflow',
          justify: 'start',
          tabs: [
            { id: 'buy-feature', label: 'Buy Feature', icon: 'shopping-cart' },
            { id: 'tournament', label: 'Tournament', icon: 'trophy' },
            { id: 'campaign', label: 'Campaign', icon: 'gift', hasBadge: true },
            { id: 'vip', label: 'VIP', icon: 'crown' },
            { id: 'shop', label: 'Shop', icon: 'store' },
            { id: 'news', label: 'News', icon: 'newspaper' },
            { id: 'events', label: 'Events', icon: 'calendar' },
            { id: 'mail', label: 'Mail', icon: 'mail' },
            { id: 'settings', label: 'Settings', icon: 'settings' },
          ],
        },
      ],
    },
    {
      title: 'Accent Colors',
      variants: [
        { subtitle: 'Yellow Accent', accentColor: 'yellow' },
        { subtitle: 'Orange Accent', accentColor: 'orange' },
        { subtitle: 'Slate Accent', accentColor: 'slate' },
      ],
    },
  ];

  getTabIconMenuCodeSnippet(variant: TabIconMenuVariant): string {
    const attrs: string[] = [];

    if (variant.tabs !== undefined) {
      attrs.push(`[tabs]='${JSON.stringify(variant.tabs)}'`);
    }
    if (variant.selectedTab !== undefined) {
      attrs.push(`[selectedTab]="'${variant.selectedTab}'"`);
    }
    if (variant.accentColor !== undefined) {
      attrs.push(`[accentColor]="'${variant.accentColor}'"`);
    }
    if (variant.justify !== undefined) {
      attrs.push(`[justify]="'${variant.justify}'"`);
    }

    return `<ap-tab-menu-icon ${attrs.join(' ')}></ap-tab-menu-icon>`;
  }
}
