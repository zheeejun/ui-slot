import { Component, OnDestroy, OnInit, input, model, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApIconBadgeComponent } from "../../../ap-components-lib/ap-icon-badge/ap-icon-badge.component";
import { ApIconBlueCircleComponent } from "../../icons/ap-icon-blue-circle/ap-icon-blue-circle.component";
import { ApIconGreenCircleComponent } from "../../icons/ap-icon-green-circle/ap-icon-green-circle.component";
import { ApIconDarkCircleComponent } from "../../icons/ap-icon-dark-circle/ap-icon-dark-circle.component";
@Component({
  selector: 'ap-button-auto-spin-times',
  imports: [CommonModule, ApIconComponent, ApIconBadgeComponent, ApIconBlueCircleComponent, ApIconGreenCircleComponent, ApIconDarkCircleComponent],
  templateUrl: './ap-button-auto-spin-times.component.html',
  styleUrl: './ap-button-auto-spin-times.component.css',
})
export class ApButtonAutoSpinTimesComponent implements OnInit, OnDestroy {
  /* 5秒未觸動，播放動態 */
  private static readonly PRESS_HINT_DELAY_MS = 5000;
  private pressHintTimeoutId: ReturnType<typeof setTimeout> | null = null;
  currentSpins = input<number>(103);
  totalSpins = input<number>(486);
  disabled = input<boolean>(false);
  /** 使用pointerdown的click */
  buttonClick = output<void>();
  scale = input<number>(1);
  pressHintEnabled = model<boolean>(false);
  pressHintType = input('blur')
  pressHintTimerEnabled = input<boolean>(false);
  mode = input<'auto-spin' | 'double-chance-auto-spin' | 'free-bonus-auto-spin'>('auto-spin');
  variant = input<'default' | 'infinity'>('default');
  enableLightingEffect = input<boolean>(true);

  isPressed = signal(false);
  showIdleHalo = signal(false);

  ngOnInit(): void {
    if (this.pressHintTimerEnabled()) {
      this.restartPressHintTimer();
    }
  }

  ngOnDestroy(): void {
    this.clearPressHintTimer();
  }

  getScaleStyle(): string | null {
    const scale = this.scale() || 1;
    const pressScale = this.isPressed() ? 0.94 : 1;
    const totalScale = scale * pressScale;
    if (totalScale === 1) {
      return null;
    }
    return `scale(${totalScale})`;
  }

  setPressed(isPressed: boolean): void {
    this.isPressed.set(isPressed && !this.disabled());
  }

  handlePointerDown(): void {
    this.setPressed(true);
    if (this.pressHintTimerEnabled()) {
      this.restartPressHintTimer();
    }
  }

  pointerDown(): void {
    this.pressHintEnabled.set(false);
    this.showIdleHalo.set(false);
    if (!this.disabled()) {
      this.buttonClick.emit();
    }
  }

  private restartPressHintTimer(): void {
    this.clearPressHintTimer();
    this.showIdleHalo.set(false);
    this.pressHintTimeoutId = setTimeout(() => {
      if (!this.disabled()) {
        this.showIdleHalo.set(true);
      }
    }, ApButtonAutoSpinTimesComponent.PRESS_HINT_DELAY_MS);
  }

  private clearPressHintTimer(): void {
    if (this.pressHintTimeoutId !== null) {
      clearTimeout(this.pressHintTimeoutId);
      this.pressHintTimeoutId = null;
    }
  }
}
