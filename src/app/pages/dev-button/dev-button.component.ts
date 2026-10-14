import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { ApButtonListComponent } from '../../../ap-components-lib/ap-button-list/ap-button-list.component';
import { ApButtonAutoSpinTimesComponent } from '../../components/ap-button-auto-spin-times/ap-button-auto-spin-times.component';
import { ApButtonFreeSpinsComponent } from '../../components/ap-button-free-spins/ap-button-free-spins.component';
import { ApCategorySelectionComponent } from '../../../ap-components-lib/ap-category-selection/ap-category-selection.component';

type AutoSpinMode = 'auto-spin' | 'double-chance-auto-spin' | 'free-bonus-auto-spin';
type AutoSpinVariant = 'default' | 'infinity';

interface AutoSpinDemoVariant {
  subtitle: string;
  mode?: AutoSpinMode;
  variant?: AutoSpinVariant;
  currentSpins?: number;
  totalSpins?: number;
  disabled?: boolean;
  scale?: number;
  pressHintEnabled?: boolean;
}

interface AutoSpinDemoCategory {
  title: string;
  variants: AutoSpinDemoVariant[];
}

interface FreeSpinsDemoVariant {
  subtitle: string;
  currentSpins?: number;
  totalSpins?: number;
  disabled?: boolean;
  scale?: number;
}

interface FreeSpinsDemoCategory {
  title: string;
  variants: FreeSpinsDemoVariant[];
}

@Component({
  selector: 'dev-button',
  imports: [
    ApUiCardDevComponent,
    ApButtonListComponent,
    ApButtonAutoSpinTimesComponent,
    ApButtonFreeSpinsComponent,
    ApCategorySelectionComponent,
  ],
  templateUrl: './dev-button.component.html',
  styleUrl: './dev-button.component.css',
})
export class DevButtonComponent {
  autoSpinCategories: AutoSpinDemoCategory[] = [
    {
      title: 'Modes',
      variants: [
        { subtitle: 'Auto Spin', mode: 'auto-spin' },
        { subtitle: 'Double Chance', mode: 'double-chance-auto-spin' },
        { subtitle: 'Free Bonus', mode: 'free-bonus-auto-spin' },
      ],
    },
    {
      title: 'Variants',
      variants: [
        { subtitle: 'Default', variant: 'default' },
        { subtitle: 'Infinity', variant: 'infinity' },
      ],
    },
    {
      title: 'States',
      variants: [
        { subtitle: 'Disabled', disabled: true },
        { subtitle: 'Press Hint', pressHintEnabled: true },
        { subtitle: 'Scaled', scale: 0.8 },
      ],
    },
    {
      title: 'Spin Counts',
      variants: [
        { subtitle: 'Low Count', currentSpins: 3, totalSpins: 10 },
        { subtitle: 'High Count', currentSpins: 103, totalSpins: 486 },
      ],
    },
  ];

  getAutoSpinCodeSnippet(variant: AutoSpinDemoVariant): string {
    const attrs: string[] = [];

    if (variant.mode && variant.mode !== 'auto-spin') {
      attrs.push(`[mode]="'${variant.mode}'"`);
    }
    if (variant.variant && variant.variant !== 'default') {
      attrs.push(`[variant]="'${variant.variant}'"`);
    }
    if (variant.currentSpins !== undefined) {
      attrs.push(`[currentSpins]="${variant.currentSpins}"`);
    }
    if (variant.totalSpins !== undefined) {
      attrs.push(`[totalSpins]="${variant.totalSpins}"`);
    }
    if (variant.disabled) attrs.push(`[disabled]="true"`);
    if (variant.scale !== undefined) attrs.push(`[scale]="${variant.scale}"`);
    if (variant.pressHintEnabled) attrs.push(`[pressHintEnabled]="true"`);

    return `<ap-button-auto-spin-times ${attrs.join(' ')}></ap-button-auto-spin-times>`;
  }

  freeSpinsCategories: FreeSpinsDemoCategory[] = [
    {
      title: 'States',
      variants: [
        { subtitle: 'Default' },
        { subtitle: 'Disabled', disabled: true },
        { subtitle: 'Scaled', scale: 0.8 },
      ],
    },
  ];

  getFreeSpinsCodeSnippet(variant: FreeSpinsDemoVariant): string {
    const attrs: string[] = [];

    if (variant.currentSpins !== undefined) {
      attrs.push(`[currentSpins]="${variant.currentSpins}"`);
    }
    if (variant.totalSpins !== undefined) {
      attrs.push(`[totalSpins]="${variant.totalSpins}"`);
    }
    if (variant.disabled) attrs.push(`[disabled]="true"`);
    if (variant.scale !== undefined) attrs.push(`[scale]="${variant.scale}"`);

    return `<ap-button-free-spins ${attrs.join(' ')}></ap-button-free-spins>`;
  }
}
