import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ap-icon-blue-circle',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconBlueCircleComponent {
  private sanitizer = inject(DomSanitizer);

  private svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#2563EB" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="34" stroke="#e0e0e0" stroke-width="4"/>
</svg>`
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg['default'])
  );
}
