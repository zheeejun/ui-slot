import { Component, input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';

@Component({
  selector: 'ap-trn-card-title',
  imports: [CommonModule, NgClass, ApIconComponent],
  templateUrl: './ap-trn-card-title.component.html',
})
export class ApTrnCardTitleComponent {
  accentColor = input<'yellow' | 'purple'>('yellow');
  title = input<string>('Event Race');
  size = input<'medium' | 'small'>('medium');
  iconQuick = input('trophy');
  iconEvent = input('gift');

  getIconSize(): string {
    return this.size() === 'small' ? 'size-4' : 'size-6';
  }

  getTextSize(): string {
    return this.size() === 'small' ? 'text-base' : 'text-2xl';
  }

  getContainerLayout(): string {
    return this.size() === 'small'
      ? 'w-fit mx-auto justify-center'
      : 'w-full';
  }

  getTextLayout(): string {
    return this.size() === 'small'
      ? 'text-left flex-none whitespace-nowrap'
      : 'min-w-0 flex-1 text-left break-words whitespace-nowrap overflow-hidden text-ellipsis';
  }
}
