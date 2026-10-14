import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ap-icon-autoplay-circle',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconAutoplayCircleComponent {
  private sanitizer = inject(DomSanitizer);

  path = "M11.194.665a8 8 0 1 0 4.194 10.404a.75.75 0 0 0-1.385-.575a6.5 6.5 0 1 1-.526-5.994H11.75a.75.75 0 0 0 0 1.5H16V1.75a.75.75 0 0 0-1.5 0v1.586a8 8 0 0 0-3.306-2.67Zm-.423 6.913a.5.5 0 0 1 0 .844l-4.003 2.54A.5.5 0 0 1 6 10.538V5.461a.5.5 0 0 1 .768-.422z";

  private svg = {
    /*default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
   <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
   <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_autoplay)" filter="url(#filter0_i_autoplay)"/>
   <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
   <g transform="translate(20 20) scale(2.5)">
   <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
   <defs>
     <filter id="filter0_i_autoplay" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
       <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
       <feOffset dy="-4"/>
       <feGaussianBlur stdDeviation="2"/>
       <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
       <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
       <feBlend mode="normal" in2="shape" result="effect1_innerShadow_autoplay"/>
     </filter>
     <linearGradient id="paint0_linear_autoplay" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
       <stop stop-color="#6A6A6A"/>
       <stop offset="0.4" stop-color="#424242"/>
       <stop offset="0.8" stop-color="#343434"/>
       <stop offset="1" stop-color="#303030"/>
     </linearGradient>
   </defs>
 </svg>`*/
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_autoplay)" filter="url(#filter0_i_autoplay)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(20 20) scale(2.5)">
  <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
  <defs>
    <filter id="filter0_i_autoplay" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_autoplay"/>
    </filter>
    <linearGradient id="paint0_linear_autoplay" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
     <stop stop-color="#4A7F96"/>
<stop offset="0.4" stop-color="#2F5466"/>
<stop offset="0.8" stop-color="#1F3442"/>
<stop offset="1" stop-color="#16242E"/>
    </linearGradient>
  </defs>
</svg>`
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg['default'])
  );
}
