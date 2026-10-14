import { Component, computed, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  selector: 'ap-spin-button-tip',
  imports: [CommonModule],
  templateUrl: './ap-spin-button-tip.component.html',
  styleUrl: './ap-spin-button-tip.component.css',
})
export class ApSpinButtonTipComponent {
  readonly i18n = inject(AppI18nService);
  readonly type = input<'replay-start' | 'feature-start' | 'none'>('none');
  readonly label = computed<string | null>(() => {
    if (this.type() === 'none') {
      return null;
    } else if (this.type() === 'replay-start') {
      return this.i18n.instant('repla_tip','Free Bonus Mode');
    } else if (this.type() === 'feature-start') {
      return this.i18n.gameStr('game_state_0');
    }
    return null;
  });
}
