import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output, signal } from '@angular/core';
import { ApTrnCardTitleComponent } from "../ap-trn-card-title/ap-trn-card-title.component";
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";

@Component({
  selector: 'ap-trn-tab',
  imports: [CommonModule, ApTrnCardTitleComponent],
  templateUrl: './ap-trn-tab.component.html',
  styleUrl: './ap-trn-tab.component.css'
})
export class ApTrnTabComponent implements OnInit {
  /** 分頁文字 */
  getQuickTabText = input<string>('QUICK');
  getEventTabText = input<string>('EVENT');
  /** 預設選擇的分頁 */
  selected = input<'quick' | 'event'>('quick');
  /** 選擇的分頁 */
  currentTab = signal<'quick' | 'event'>('quick');
  /** 顯示快速賽事分頁 */
  showTabQuick = input<boolean>(true);
  /** 顯示活動賽事分頁 */
  showTabEvent = input<boolean>(true);
  /** 禁用快速賽事分頁 */
  isTabQuickDisabled = input(false);
  /** 禁用活動賽事分頁 */
  isTabEventDisabled = input(false);
  /** 點擊分頁事件 */
  clickTab = output<'quick' | 'event'>();
  /** 點擊內容區背景事件 */
  clickBackground = output<void>();
  ngOnInit(): void {
    this.currentTab.set(this.selected());
  }

  onTabClick(tab: 'quick' | 'event') {
    this.currentTab.set(tab);
    this.clickTab.emit(tab);
  }

  onBackgroundClick(event: MouseEvent, contentEl: HTMLElement) {
    const target = event.target as HTMLElement | null;
    const currentTarget = event.currentTarget as HTMLElement | null;
    if (!target || !currentTarget) return;
    // 僅在點擊黑色背景區(非互動元件)時觸發
    if (target === currentTarget || target === contentEl) {
      this.clickBackground.emit();
    }
  }
}
