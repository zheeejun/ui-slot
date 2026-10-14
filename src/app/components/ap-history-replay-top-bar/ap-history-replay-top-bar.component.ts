import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';
import { NavigatorShareService } from '../../services/navigator-share/navigator-share.service';

@Component({
  selector: 'ap-history-replay-top-bar',
  imports: [CommonModule, ApButtonComponent, ApIconComponent],
  templateUrl: './ap-history-replay-top-bar.component.html',
})
export class ApHistoryReplayTopBarComponent {
  /** 是否顯示畫面 */
  onClose = output<void>();
  detailItem = input<HistoryListItem | null>(null);
  share = output<HistoryListItem>();
  replay = output<HistoryListItem>();
  detail = output<HistoryListItem>();
  nav = inject(NavigatorShareService);
  readonly text = input<string>('Quick Race Mode On: Bet x');
  readonly multiplier = input<number>(1.2);

  async copyTransaction(item: HistoryListItem, event?: Event) {
    event?.stopPropagation();
    try {
      await this.nav.copyToClipboard(item.transaction);
      // Optional: You can replace alert with a toast notification
      alert(`${item.transaction} copied to clipboard!`);
    } catch (err) {
      alert('Failed to copy transaction to clipboard');
    }
  }
}
