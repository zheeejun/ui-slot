import { Component,signal } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApCategorySelectionComponent } from '../../../ap-components-lib/ap-category-selection/ap-category-selection.component';
import { ApTagComponent } from '../../../ap-components-lib/ap-tag/ap-tag.component';
import { TagAccentColor, TagVariant } from '../../../ap-components-lib/ap-tag/ap-tag.interface';
import { ApBadgeComponent } from '../../../ap-components-lib/ap-badge/ap-badge.component';
import {BadgeSize,BadgeAccentColor,} from '../../../ap-components-lib/ap-badge/ap-badge.interface';

interface TagVariantDemo {
  subtitle: string;
  label?: string;
  accentColor?: TagAccentColor;
  variant?: TagVariant;
  icon?: string;
  rounded?: boolean;
}

interface TagCategory {
  title: string;
  variants: TagVariantDemo[];
}

interface BadgeVariantDemo {
  subtitle: string;
  value?: string | number;
  size?: BadgeSize;
  accentColor?: BadgeAccentColor;
}

interface BadgeCategory {
  title: string;
  variants: BadgeVariantDemo[];
}

@Component({
  selector: 'dev-misc',
  imports: [ CommonModule,ApUiCardDevComponent,ApCategorySelectionComponent,ApTagComponent,ApBadgeComponent,
  ],
  templateUrl: './dev-misc.component.html',
  styleUrl: './dev-misc.component.css',
})
export class DevMiscComponent {
  private readonly tagAccentColors: TagAccentColor[] = ['orange', 'green', 'sky', 'yellow', 'red', 'zinc'];

  readonly tabGroupCategories: TagCategory[] = [
    ...(['default', 'pill', 'icons'] as const).map((variant) => ({
      title: `${variant[0].toUpperCase()}${variant.slice(1)} Variant`,
      variants: this.tagAccentColors.map((accentColor) => ({
        subtitle: accentColor,
        label: variant === 'icons' ? 'Icon tag' : `${accentColor} tag`,
        accentColor,
        variant,
        ...(variant === 'icons' ? { icon: 'play' } : {}),
      })),
    })),
  ];

  getTabGroupCodeSnippet(variant: TagVariantDemo): string {
    const attrs: string[] = [];

    if (variant.label !== undefined) {
      attrs.push(`[label]="'${variant.label}'"`);
    }
    if (variant.accentColor !== undefined) {
      attrs.push(`[accentColor]="'${variant.accentColor}'"`);
    }
    if (variant.variant !== undefined) {
      attrs.push(`[variant]="'${variant.variant}'"`);
    }
    if (variant.icon !== undefined) {
      attrs.push(`[icon]="'${variant.icon}'"`);
    }
    if (variant.rounded !== undefined) {
      attrs.push(`[rounded]="${variant.rounded}"`);
    }

    return `<ap-tag ${attrs.join(' ')}></ap-tag>`;
  }

  readonly badgeGroupCategories: BadgeCategory[] = [
    {
      title: 'Sizes',
      variants: [
        { subtitle: 'xs', value: '2', size: 'xs' },
        { subtitle: 'sm', value: '4', size: 'sm' },
        { subtitle: 'md', value: '6', size: 'md' },
        { subtitle: 'lg', value: '8', size: 'lg' },
      ],
    },
    
    {
      title: 'Accent Colors',
      variants: [
        { subtitle: 'Orange', value: 1, accentColor: 'orange' },
        { subtitle: 'Green', value: 2, accentColor: 'green' },
        { subtitle: 'Blue', value: 3, accentColor: 'blue' },
        { subtitle: 'Yellow', value: 4, accentColor: 'yellow' },
        { subtitle: 'Red', value: 5, accentColor: 'red' },
      ],
    },
  ];

 selectedCategory = signal('all');
  getBadgeGroupCodeSnippet(variant: BadgeVariantDemo): string {
    const attrs: string[] = [];

    if (variant.value !== undefined) {
      attrs.push(`[value]="'${variant.value}'"`);
    }
    if (variant.size !== undefined) {
      attrs.push(`[size]="'${variant.size}'"`);
    }
    if (variant.accentColor !== undefined) {
      attrs.push(`[accentColor]="'${variant.accentColor}'"`);
    }

    return `<ap-badge ${attrs.join(' ')}></ap-badge>`;
  }
}
