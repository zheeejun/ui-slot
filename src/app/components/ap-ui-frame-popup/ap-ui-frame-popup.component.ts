import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';

@Component({
  selector: 'ap-ui-frame-popup',
  imports: [CommonModule, ApButtonComponent],
  templateUrl: './ap-ui-frame-popup.component.html',
  styleUrls: ['./ap-ui-frame-popup.component.css'],
})
export class ApUiFramePopupComponent {
  readonly header = input('Message');
  readonly enableBack = input(false);
  readonly enableClose = input(true);
  readonly size = input<'default' | 'mobile' | 'list-content'>('default');
  readonly accentColor = input<'default' | 'purple' | 'yellow'>('default');
  close = output<void>();
  back = output<void>();

  getTextSizeClass() {
    switch (this.size()) {
      case 'mobile':
        return 'text-4xl';
      case 'list-content':
        return 'text-lg';
      default:
        return 'text-3xl';
    }
  }

  getPaddingClass() {
    return this.size() === 'mobile' ? 'py-4' : 'py-4';
  }

  getBorderStyle() {
    switch (this.accentColor()) {
      case 'yellow':
        return '2px solid rgb(216 180 254)';
      case 'purple':
        return '2px solid rgb(253 224 71)';
      default:
        return '2px solid rgb(82 82 91)';
    }
  }
}
