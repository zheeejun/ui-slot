import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ap-cashdrop-list',
  imports: [CommonModule],
  templateUrl: './ap-cashdrop-list.component.html',
  styleUrl: './ap-cashdrop-list.component.css',
})
export class ApCashDropListComponent {
  // Type
  variant = input<'header' | 'list'>('header');

  // Left
  leftLabel = input('Prize');
  leftValue = input('5,000,000');

  // Right
  rightLabel = input('Prize Left');
  rightValue = input('10');
  bgShade = input<'800' | '900'>('900');

}
