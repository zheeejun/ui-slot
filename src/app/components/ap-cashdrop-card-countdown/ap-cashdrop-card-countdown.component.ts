import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApCashdropCardComponentCountdown } from '../ap-cashdrop-card-component-countdown/ap-cashdrop-card-component-countdown.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  selector: 'ap-cashdrop-card-countdown',
  standalone: true,
  imports: [CommonModule, ApCashdropCardComponentCountdown],
  templateUrl: './ap-cashdrop-card-countdown.component.html',
  styleUrl: './ap-cashdrop-card-countdown.component.css',
})
export class ApCashdropCardCountdownComponent {
  protected i18n = inject(AppI18nService);
  title = input<string>('');
  remainingLabel = this.i18n.computed('cashdrop_D1_2', 'Event Remaining');
  startingInLabel = this.i18n.computed('cashdrop_D3', 'Starting In');
  /** timestamp in milliseconds */
  endTime = input<number>(0);
  /** timestamp in milliseconds */
  beginTime = input<number>(0);
  showRemainingLabel = computed<boolean>(() => {
    const now = Date.now();
    if (this.beginTime() > now) {
      return false;
    }
    return true;
  });
  selected = input<boolean>(false);

  getFrameClass(): string {
    return this.selected()
      ? 'cashdrop-card-gold-frame cashdrop-card-selected-shadow'
      : 'cashdrop-card-gold-frame';
  }

  getCardClass(): string {
    return this.selected()
      ? 'cashdrop-card-body cashdrop-card-body-selected'
      : 'cashdrop-card-body cashdrop-card-body-default';
  }
}
