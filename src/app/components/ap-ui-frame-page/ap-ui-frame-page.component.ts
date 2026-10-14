import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';

@Component({
  selector: 'ap-ui-frame-page',
  imports: [ApButtonComponent, CommonModule],
  templateUrl: './ap-ui-frame-page.component.html',
  styleUrls: ['./ap-ui-frame-page.component.css'],
})
export class ApUiFramePageComponent {
  /** 讓框架辨識這frame的用途 */
  readonly id = input('');
  readonly header = input('');
  readonly enableBack = input(false);
  readonly enableClose = input(true);
  close = output<void>();
  back = output<void>();
}
