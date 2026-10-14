import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'demo-overlay-banner',
  imports: [CommonModule],
  templateUrl: './demo-overlay-banner.component.html',
  styleUrl: './demo-overlay-banner.component.css'
})
export class DemoOverlayBannerComponent {
  isOverlay = signal<boolean>(false);
  isSidebar = signal<boolean>(false);

  onOverlayClick() {
    this.isOverlay.set(!this.isOverlay());
  }
  setSidebar(value: boolean) {
    this.isSidebar.set(value);
  }
}
