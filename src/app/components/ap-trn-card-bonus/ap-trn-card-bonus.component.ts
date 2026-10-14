import { ChangeDetectionStrategy, Component, OnDestroy, computed, effect, input, signal, untracked, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';

@Component({
  selector: 'ap-trn-card-bonus',
  standalone: true,
  imports: [CommonModule, ApLoadingOverlayComponent],
  templateUrl: './ap-trn-card-bonus.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTrnCardBonusComponent implements OnDestroy {
  private readonly _displayValue = signal<number>(0);
  private _initialized = false;
  private _animationFrameId: number | null = null;

  accentColor = input<'yellow' | 'purple'>('yellow');
  multiplierTitle = input<string>('BET');
  isLoading = input<boolean>(false);
  currency = input<string>('$');
  amount = input<number | null>(null);
  isAnimated = input<boolean>(false);
  multiplier = input<number | null>(null);
  coinImage = input<string>('');
  betImage = input<string>('');

  readonly displayAmount = computed<string>(() => {
    if (!this.amount()) {
      return '----';
    }

    return this.formatNumber(Math.floor(this._displayValue()));
  });

  readonly multiplierString = computed<string>(() => {
    const mult = this.multiplier();
    return mult !== null && mult !== undefined ? `x${mult}` : '----';
  });

  readonly multiplierDisplay = computed<string>(() => {
    const text = this.multiplierTitle();
    if (text) {
      if (text.includes('{0}')) {
        const mult = this.multiplier();
        return text.replace('{0}', `${mult !== null && mult !== undefined ? mult : '----'}`);
      }

      return `${text} ${this.multiplierString()}`;
    }

    return this.multiplierString();
  });

  constructor() {
    effect(() => this.handleAmountChange());
  }

  ngOnDestroy() {
    this.cancelAnimation();
  }

  private handleAmountChange(): void {
    if (!this.isAnimated()) {
      this.cancelAnimation();
      this._displayValue.set(this.amount() || 0);
      return;
    }

    const target = this.amount();
    untracked(() => {
      if (target === null || target === undefined) {
        this.cancelAnimation();
        this._displayValue.set(0);
        return;
      }

      if (!this._initialized) {
        this._displayValue.set(target);
        this._initialized = true;
        return;
      }

      const current = this._displayValue();
      if (target > current) {
        this.animateValue(current, target);
      } else {
        this.cancelAnimation();
        this._displayValue.set(target);
      }
    });
  }

  private animateValue(start: number, end: number): void {
    this.cancelAnimation();

    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime: number): void => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const nextVal = start + (end - start) * ease;

      this._displayValue.set(nextVal);

      if (progress < 1) {
        this._animationFrameId = requestAnimationFrame(animate);
      } else {
        this._displayValue.set(end);
        this._animationFrameId = null;
      }
    };

    this._animationFrameId = requestAnimationFrame(animate);
  }

  private cancelAnimation(): void {
    if (this._animationFrameId !== null) {
      cancelAnimationFrame(this._animationFrameId);
      this._animationFrameId = null;
    }
  }

  private formatNumber(value: number | undefined): string {
    if (value === undefined) {
      return '';
    }

    const num = value;
    if (isNaN(num)) {
      return value.toString();
    }

    if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B`;
    }

    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
    }

    if (num >= 100_000) {
      return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
    }

    return num.toLocaleString();
  }
}
