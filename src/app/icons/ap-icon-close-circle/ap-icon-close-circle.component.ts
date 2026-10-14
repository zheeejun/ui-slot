import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ap-icon-close-circle',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconCloseCircleComponent {
  private sanitizer = inject(DomSanitizer);

  path = "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z";

  private svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_close)" filter="url(#filter0_i_close)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(16 16) scale(2.0)">
  <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
  <defs>
    <filter id="filter0_i_close" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_close"/>
    </filter>
    <linearGradient id="paint0_linear_close" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
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
