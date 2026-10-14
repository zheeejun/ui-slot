import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconBadgeComponent } from '../../../ap-components-lib/ap-icon-badge/ap-icon-badge.component';
import { ApIconYellowCircleComponent } from "../../icons/ap-icon-yellow-circle/ap-icon-yellow-circle.component";

@Component({
  selector: 'ap-button-free-spins',
  imports: [CommonModule, ApIconBadgeComponent, ApIconYellowCircleComponent],
  templateUrl: './ap-button-free-spins.component.html',
  styleUrl: './ap-button-free-spins.component.css',
})
export class ApButtonFreeSpinsComponent {
  currentSpins = input<number>(103);
  totalSpins = input<number>(486);
  scale = input<number>(1);
  disabled = input<boolean>(false);
  buttonClick = output<void>();

  pointerDown(): void {
    if (!this.disabled()) {
      this.buttonClick.emit();
    }
  }

  getScaleStyle(): string | null {
    const scale = this.scale();
    if (!scale || scale === 1) {
      return null;
    }
    return `scale(${scale})`;
  }
}
