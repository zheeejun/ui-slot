import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionTab } from './ap-lb-selection.interface';

@Component({
  selector: 'ap-lb-selection',
  imports: [CommonModule],
  templateUrl: './ap-lb-selection.component.html',
  styleUrl: './ap-lb-selection.component.css',
})
export class ApLbSelectionComponent {
  tabs = input<SelectionTab[]>([]);
  selectedTab = input<string>('');
  tabChange = output<string>();

  onTabClick(tabId: string): void {
    this.tabChange.emit(tabId);
  }
}
