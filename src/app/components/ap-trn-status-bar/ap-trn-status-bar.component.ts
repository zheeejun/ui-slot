import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";

@Component({
  selector: 'ap-trn-status-bar',
  imports: [CommonModule, ApIconComponent],
  templateUrl: './ap-trn-status-bar.component.html',
})
export class ApTrnStatusBarComponent {
  iconQuick = signal('trophy default');
  iconEvent = signal('gift default');
  accentColor = input<'yellow' | 'purple'>('yellow');
  text = input<string>('Quick Race Mode On: Bet x');
  multiplier = input<number>(1.2);

  getTextColor() {
    return this.accentColor() === 'yellow' ? 'text-yellow-300' : 'text-purple-300';
  }

  getDisplayText() {
    const text = this.text();
    if (text) {
      if (text.includes('{0}')) {
        return text.replace('{0}', `${this.multiplier()}`);
      }
      return `${text}${this.multiplier()}`;
    }
    const mode = this.accentColor() === 'yellow' ? 'Quick Race' : 'purple';
    return `${mode} Mode On(Bet x${this.multiplier()})`;
  }
}
