import { Component, computed, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';

export interface FrameTab {
  label: string;
  value: string;
}

@Component({
  selector: 'ap-ui-frame-page-2',
  imports: [ApButtonComponent, CommonModule],
  templateUrl: './ap-ui-frame-page-2.component.html',
  styleUrls: ['./ap-ui-frame-page-2.component.css'],
})
export class ApUiFramePage2Component {
  readonly header = input('Event Center');
  readonly enableBack = input(false);
  readonly enableClose = input(true);
  readonly tabs = input<FrameTab[]>([]);
  readonly activeTab = model<string>('');
  readonly hasTabs = computed(() => this.tabs().length > 0);

  close = output<void>();
  back = output<void>();
}
