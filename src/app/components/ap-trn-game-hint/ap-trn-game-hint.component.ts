import { Component, input, signal, effect, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { firstValueFrom, timer } from 'rxjs';

type animationClip = 'default' | 'in' | 'out';

@Component({
  selector: 'ap-trn-game-hint',
  standalone: true,
  imports: [CommonModule, ApIconComponent],
  templateUrl: './ap-trn-game-hint.component.html',
})
export class ApTrnGameHintComponent {
  readonly title = input<string>('Bet x');
  readonly multiplier = input<number>(1);
  readonly accentColor = input<'yellow' | 'purple'>('yellow');
  readonly duration = input<number>(3);
  readonly animation = signal<animationClip>('in');
  /* Hint Title */
  readonly displayTitle = computed(() => {
    const text = this.title();
    if (text) {
      if (text.includes('{0}')) {
        return text.replace('{0}', `${this.multiplier()}`);
      }
      return `${text} ${this.multiplier()}`;
    }
    return `Bet x${this.multiplier()}`;
  });

  /* Hint Description */
  readonly message = input<string>('');
  readonly displayMessage = computed(() => {
    const text = this.message();
    if (text) {
      if (text.includes('{0}')) {
        return text.replace('{0}', `${this.multiplier()}`);
      }
      return text;
    }
    return this.multiplier() > 1
      ? 'Points are earned for betting during the activation period.'
      : 'No points are earned for betting during the activation period.';
  });

  close = output<void>();

  constructor() {
    effect(async () => {
      if (this.duration() > 0) {
        this.animation.set('in');
        await firstValueFrom(timer(300 + this.duration() * 1000));
        this.animation.set('out');
        await firstValueFrom(timer(300));
        this.close.emit();
      }
    });
  }

  getBorderColor(): string {
    return this.accentColor() === 'yellow'
      ? 'border-yellow-300/70'
      : 'border-purple-300/70';
  }

  getIconColor(): string {
    return this.accentColor() === 'yellow' ? 'text-yellow-400' : 'text-purple-400';
  }
}
