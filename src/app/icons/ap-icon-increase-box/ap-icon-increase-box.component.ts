import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ap-icon-increase-box',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconIncreaseBoxComponent {
  private sanitizer = inject(DomSanitizer);

  path = "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z";

  private svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <rect x="2" y="2" width="76" height="76" rx="14" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <rect x="6" y="6" width="68" height="68" rx="10" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(16 16) scale(2.0)">
  <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
</svg>`
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg['default'])
  );
}
