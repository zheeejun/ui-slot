import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ap-icon-yellow-circle',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconYellowCircleComponent {
  private sanitizer = inject(DomSanitizer);

  private svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="oklch(27.4% 0.006 286.033)" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="34" stroke="oklch(90.5% 0.182 98.111)" stroke-width="4"/>
</svg>`
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg['default'])
  );
}
