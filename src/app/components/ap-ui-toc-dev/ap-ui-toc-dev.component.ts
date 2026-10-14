import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TocItem {
  id: string;
  text: string;
  level: number;
}
/** * ap-dev-toc component generates a table of contents based on specified header elements within a target container.
 * It scans the target container for headers matching the specified selector and creates a list of clickable items*/
@Component({
  selector: 'ap-ui-toc-dev',
  imports: [CommonModule],
  templateUrl: './ap-ui-toc-dev.component.html',
  styleUrl: './ap-ui-toc-dev.component.css',
})
export class ApUiTocDevComponent implements AfterViewInit {
  @Input() selector = 'h1, h2';
  @Input() target = '#content';

  tocItems: TocItem[] = [];

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.generateToc();
  }

  private generateToc(): void {
    const root = document.querySelector(this.target);
    if (!root) return;

    const headers = root.querySelectorAll(this.selector);
    const items: TocItem[] = [];

    headers.forEach((el, index) => {
      const tag = el.tagName.toLowerCase();
      // Determine the level of the header based on its tag name.
      const level = tag === 'h1' ? 1 : tag === 'h2' ? 2 : 3;

      if (!el.id) el.id = `toc-${index}`;
      items.push({
        id: el.id,
        text: el.textContent?.trim() || '',
        level
      });
    });

    this.tocItems = items;
  }

  scrollToId(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
