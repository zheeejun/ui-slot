import { Component, computed, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApIconBadgeFirstComponent } from "../../icons/ap-icon-badge-first/ap-icon-badge-first.component";

@Component({
  selector: 'ap-lb-rank-first',
  imports: [CommonModule, ApIconComponent, ApButtonComponent, ApIconBadgeFirstComponent],
  templateUrl: './ap-lb-rank-first.component.html',
  styleUrl: './ap-lb-rank-first.component.css',
})
export class ApLbRankFirstComponent {
  rank = input<number>(1);
  gameTitle = input<string>('');
  gameImage = input<string>('');
  date = input<string>('');
  multiplier = input<string>('');
  prize = input<string>('');
  onReplay = output<void>();

  handleReplay(): void {
    this.onReplay.emit();
  }

  /** 背景圖樣式 (避開 CSS 編譯檢查) */
  readonly bgStyle = "linear-gradient(135deg, rgba(148, 100, 30, 0.2), rgba(46, 28, 0, 0.92)), url('assets/images/leader_board/leader_board_background.jpg')";
}
