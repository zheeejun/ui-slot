import { Component, output, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';

type FloatButtonAccentColor = 'yellow' | 'purple';

@Component({
  selector: 'ap-trn-float-button',
  imports: [CommonModule, ApButtonComponent, ApIconComponent],
  templateUrl: './ap-trn-float-button.component.html',
  styleUrl: './ap-trn-float-button.component.css',
})
export class ApTrnFloatButtonComponent {
  iconImage = input<string>('');
  accentColor = input<FloatButtonAccentColor>('yellow');
  isPlaying = input<boolean>(false);
  rank = input<number | null>(null);
  click = output();

  isYellow = computed(() => this.accentColor() === 'yellow');

  iconName = computed(() => (this.isYellow() ? 'trophy' : 'gift'));

  iconColorClass = computed(() => (this.isYellow() ? 'text-yellow-300' : 'text-purple-300'));

  spinnerColorClass = computed(() =>
    this.isYellow()
      ? 'border-t-yellow-200 border-r-yellow-300'
      : 'border-t-fuchsia-200 border-r-purple-300'
  );

  rankLabel = computed(() => this.rank() ?? '?');
}
