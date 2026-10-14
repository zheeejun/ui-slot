import { Component, input, signal, OnInit, OnDestroy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  selector: 'ap-cashdrop-card-component-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ap-cashdrop-card-component-countdown.component.html',
  styleUrl: './ap-cashdrop-card-component-countdown.component.css'
})
export class ApCashdropCardComponentCountdown implements OnInit, OnDestroy {
  protected i18n = inject(AppI18nService);
  daysLabel = this.i18n.computed('cashdrop_D4_4', 'DAYS');
  hoursLabel = this.i18n.computed('cashdrop_D4_5', 'HRS');
  minutesLabel = this.i18n.computed('cashdrop_D4_6', 'MINS');
  secondsLabel = this.i18n.computed('cashdrop_D4_7', 'SECS');
  /** 結束時間 (Unix timestamp 豪秒) */
  endTime = input<number>(0);
  /** 開始時間 (Unix timestamp 豪秒) */
  beginTime = input<number>(0);
  /** 如果還沒到開始時間，返回開始時間，否則返回結束時間 */
  countDownTime = computed(() => {
    const now = Date.now();
    if (now < this.beginTime()) {
      return this.beginTime();
    } else {
      return this.endTime();
    }
  });
  days = signal(0);
  hours = signal(23);
  minutes = signal(59);
  seconds = signal(2);
  variant = input<'default' | 'event'>('default');

  private timer: any;

  ngOnInit() {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateCountdown() {
    const countDownTime = this.countDownTime();
    if (countDownTime === 0) {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
      return;
    }
    const distance = countDownTime - Date.now();

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.days.set(days);
      this.hours.set(hours);
      this.minutes.set(minutes);
      this.seconds.set(seconds);
    } else {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
    }
  }

  formatTime(value: number): string {
    return value.toString().padStart(2, '0');
  }
}