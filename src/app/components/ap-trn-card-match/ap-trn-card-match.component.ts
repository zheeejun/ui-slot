import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';

@Component({
  selector: 'ap-trn-card-match',
  standalone: true,
  imports: [CommonModule, ApIconComponent],
  templateUrl: './ap-trn-card-match.component.html',
})
export class ApTrnCardMatchComponent {
  accentColor = input<'yellow' | 'purple'>('yellow');
  currentCount = input<number>(0);
  totalCount = input<number>(0);
}