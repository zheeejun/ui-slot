import { Component, viewChild, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApToastComponent } from '../../../ap-components-lib/ap-toast/ap-toast.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  standalone: true,
  selector: 'ap-history-popup-replay-end',
  imports: [CommonModule, ApButtonComponent, ApToastComponent],
  templateUrl: './ap-history-popup-replay-end.component.html',
  styleUrls: ['./ap-history-popup-replay-end.component.css'],
})
export class ApHistoryPopupReplayEndComponent {
  protected readonly appI18n = inject(AppI18nService);
  showWatchAgain = input<boolean>(true);
  showCopyLink = input<boolean>(true);
  showCloseButton = input<boolean>(true);
  readonly watchAgain = output<void>();
  readonly copyLink = output<void>();
  readonly close = output<void>();
  readonly copyLinkToast = viewChild<ApToastComponent>('copyLinkToast');

  onWatchAgain() {
    this.watchAgain.emit();
  }

  onCopyLink() {
    this.copyLink.emit();
    this.copyLinkToast()?.show();
  }

  onClose() {
    this.close.emit();
  }
}
