import { Component, HostListener, input, output, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  standalone: true,
  selector: 'ap-history-popup-replay',
  imports: [CommonModule,ApUiFramePopupComponent,ApButtonComponent,ApButtonComponent,ApIconComponent],
  templateUrl: './ap-history-popup-replay.component.html',
  styleUrls: ['./ap-history-popup-replay.component.css'],
})
export class ApHistoryPopupReplayComponent implements OnInit {
  readonly appI18n = inject(AppI18nService);
  header = this.appI18n.computed('replay_message_title', 'replay_message_title');
  description = this.appI18n.computed('replay_history_ticket_info', 'Spin History Replay. For display purposes only. This will not impact your balance or gameplay.');
  confirmText = this.appI18n.computed('replay_confirm', 'Confirm');
  cancelText = this.appI18n.computed('replay_cancel', 'Cancel');
  readonly close = output<void>();
  readonly confirm = output<void>();
  ngOnInit() {

  }
  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.close.emit();
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') this.onCancel();
    if (e.key === 'Enter') this.onConfirm();
  }
}
