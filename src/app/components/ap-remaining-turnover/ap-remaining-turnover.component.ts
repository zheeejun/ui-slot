import { Component, input, inject, signal, computed } from '@angular/core';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'ap-remaining-turnover',
  standalone: true,
  imports: [ApIconComponent, MoneyTextPipe],
  templateUrl: './ap-remaining-turnover.component.html',
})
export class ApRemainingTurnoverComponent {
  private readonly i18n = inject(AppI18nService);
  private readonly session = inject(ClientSessionService);
  readonly iconSize = signal<string | number>('3cqw');
  readonly endTime = input<number>(0);
  readonly label = this.i18n.computed('promo_turnover_left', 'Remaining turnover');
  readonly turnover = input<number>(0);
  readonly endTimeString = computed(() => {
    const endTime = this.endTime();
    if (!endTime) {
      return '';
    }
    const date = new Date(endTime);
    return date.toLocaleString(this.session.locale);
  });
}
