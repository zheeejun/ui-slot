import { Component, input, signal, effect, model, output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { first, firstValueFrom, timer } from 'rxjs';

type animationClip = 'default' | 'in' | 'out';

@Component({
  selector: 'ap-trn-game-starting',
  imports: [CommonModule],
  templateUrl: './ap-trn-game-starting.component.html',
})
export class ApTrnGameStartingComponent {
  accentColor = input<'yellow' | 'purple'>('yellow');
  message = input<string>('Game Starting');
  duration = input<number>(1500);
  setAnimation = input<animationClip>('default');
  animation = signal<animationClip>('default');
  close = output();

  constructor() {
    effect(async () => {
      if (this.setAnimation() === 'in') {
        this.animation.set('in');
        await firstValueFrom(timer(this.duration()));
        this.animation.set('out');
        await firstValueFrom(timer(500));
        this.close.emit();
      }
      else if (this.setAnimation() === 'out') {
        await firstValueFrom(timer(500));
        this.animation.set('out');
      }
    });
  }


}
