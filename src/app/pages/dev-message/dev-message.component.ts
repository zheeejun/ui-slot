import { CommonModule} from '@angular/common';
import { Component} from '@angular/core';
import { ApMessageComponent } from '../../../ap-components-lib/ap-message/ap-message.component';
import { MessageVariant } from '../../../ap-components-lib/ap-message/ap-message.interface';
import { ApToastComponent } from '../../../ap-components-lib/ap-toast/ap-toast.component';
import { ToastAccentColor } from '../../../ap-components-lib/ap-toast/ap-toast.interface';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { ApCategorySelectionComponent } from '../../../ap-components-lib/ap-category-selection/ap-category-selection.component';

interface MessageVariantDemo {
  subtitle: string;
  message?: string;
  variant?: MessageVariant;
}

interface MessageCategory {
  title: string;
  variants: MessageVariantDemo[];
}


interface ToastVariantDemo {
  subtitle: string;
  message?: string;
  accentColor?: ToastAccentColor;
}

interface ToastCategory {
  title: string;
  variants: ToastVariantDemo[];
}

@Component({
  selector: 'dev-message',
  imports: [CommonModule, ApUiCardDevComponent, ApMessageComponent, ApToastComponent, ApCategorySelectionComponent],
  templateUrl: './dev-message.component.html',
  styleUrl: './dev-message.component.css',
})
export class DevMessageComponent {
  /* Message */
  readonly messageCategories: MessageCategory[] = [
    {
      title: 'Variants',
      variants: [
        { subtitle: 'Success', message: 'Success Message', variant: 'success' },
        { subtitle: 'Info', message: 'Info Message', variant: 'info' },
        { subtitle: 'Warn', message: 'Warn Message', variant: 'warn' },
        { subtitle: 'Error', message: 'Error Message', variant: 'error' },
        { subtitle: 'Secondary', message: 'Secondary Message', variant: 'secondary' },
        { subtitle: 'Contrast', message: 'Contrast Message', variant: 'contrast' },
        { subtitle: 'Original Game', message: 'Original Game Message', variant: 'origin' },
      ],
    },
  ];

  getMessageCodeSnippet(variant: MessageVariantDemo): string {
    const attrs: string[] = [];

    if (variant.message !== undefined) {
      attrs.push(`[message]="'${variant.message}'"`);
    }
    if (variant.variant !== undefined) {
      attrs.push(`[variant]="'${variant.variant}'"`);
    }

    return `<ap-message ${attrs.join(' ')}/>`;
  }

  /* Toast */
  readonly toastCategories: ToastCategory[] = [
    {
      title: 'Accent Colors',
      variants: [
        { subtitle: 'Zinc', message: 'Zinc', accentColor: 'zinc' },
        { subtitle: 'Green', message: 'Green', accentColor: 'green' },
        { subtitle: 'Sky', message: 'Sky', accentColor: 'sky' },
        { subtitle: 'Orange', message: 'Orange', accentColor: 'orange' },
        { subtitle: 'Red', message: 'Red', accentColor: 'red' },
        { subtitle: 'Slate', message: 'Slate', accentColor: 'slate' },
      ],
    },
  ];

  getToastCodeSnippet(variant: ToastVariantDemo): string {
    const attrs: string[] = [];
    if (variant.message !== undefined) {
      attrs.push(`[message]="'${variant.message}'"`);
    }
    if (variant.accentColor !== undefined) {
      attrs.push(`[accentColor]="'${variant.accentColor}'"`);
    }
    return `<ap-toast ${attrs.join(' ')}/>`;
  }
}
