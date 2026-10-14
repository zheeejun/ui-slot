import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ApMessageComponent } from '../../../ap-components-lib/ap-message/ap-message.component';
import { ToastQueueMessage } from './ap-ui-toast-queue.interface';

@Component({
  selector: 'ap-ui-toast-queue',
  imports: [CommonModule, ApMessageComponent],
  templateUrl: './ap-ui-toast-queue.component.html',
})
export class ApUiToastQueueComponent {
  readonly messages = input<ToastQueueMessage[]>([]);
  readonly dismissed = output<number>();
}
