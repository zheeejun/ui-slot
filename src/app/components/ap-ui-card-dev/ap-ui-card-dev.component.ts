import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'ap-ui-card-dev',
  imports: [CommonModule],
  templateUrl: './ap-ui-card-dev.component.html',
  styleUrl: './ap-ui-card-dev.component.css'
})
export class ApUiCardDevComponent {
  readonly align = input<'start' | 'center' | 'end'>('start');
}
