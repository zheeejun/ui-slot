import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ap-icon-set-circle',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconSetCircleComponent {
  private sanitizer = inject(DomSanitizer);

  path = "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z";

  private svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_set)" filter="url(#filter0_i_set)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(16 16) scale(2.0)">
  <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
  <defs>
    <filter id="filter0_i_set" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_set"/>
    </filter>
    <linearGradient id="paint0_linear_set" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A6A6A"/>
      <stop offset="0.4" stop-color="#424242"/>
      <stop offset="0.8" stop-color="#343434"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>`
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg['default'])
  );
}
