import { Component, input, output, OnInit, OnDestroy, signal, computed, } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'ap-trn-float-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ap-trn-float-countdown.component.html',
})
export class ApTrnFloatCountdownComponent implements OnInit, OnDestroy {
  /** 結束的時間 (Unix timestamp 毫秒) */
  targetTime = input<number | null>(Date.now() + 3 * 60 * 1000); // Default: 3 minutes from now
  accentColor = input<'yellow' | 'purple'>('yellow');
  onComplete = output<void>();
  onUpdate = output<number>(); // Emits remaining seconds
  /** 預設是5分鐘後 */
  target = computed(() => { return this.targetTime() ?? (new Date().getTime() + 5 * 60 * 1000); });
  timeRemaining = signal<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0, });
  isExpired = signal<boolean>(false);
  /** 是否顯示天數與小時 */
  isShowDaysHours = computed(() => {
    return this.timeRemaining().days > 0;
  });
  /** 是否顯示小時與分鐘 */
  isShowHoursMinutes = computed(() => {
    return this.timeRemaining().days <= 0 && this.timeRemaining().hours > 0;
  });
  /** 是否顯示分鐘與秒數 */
  isShowMinutesSeconds = computed(() => {
    return this.timeRemaining().days <= 0 && this.timeRemaining().hours <= 0 && (this.timeRemaining().minutes > 0 || this.timeRemaining().seconds >= 0);
  });

  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startCountdown(): void {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  private updateCountdown(): void {
    const difference = this.target() - Date.now();

    if (difference <= 0) {
      this.timeRemaining.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      this.isExpired.set(true);
      this.onComplete.emit();
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    this.timeRemaining.set({ days, hours, minutes, seconds });
    this.isExpired.set(false);

    // Emit total remaining seconds
    const totalSeconds = Math.floor(difference / 1000);
    this.onUpdate.emit(totalSeconds);
  }

  formatNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
