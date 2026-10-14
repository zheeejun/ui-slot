import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export type ApIconTurboVariant = 'default' | 'pressed1' | 'pressed2' | 'black';

@Component({
  selector: 'ap-icon-turbo-circle',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconTurboCircleComponent {
  variant = input<ApIconTurboVariant>('default');

  private sanitizer = inject(DomSanitizer);

  boltPath = "M18.8429 24.5293L11.3429 24.5392L21.8127 1.61631L21.83 14.7072L29.33 14.6973L18.8601 37.6202L18.8429 24.5293Z";
  bolt2Path = "M30.2598 24.7119L35.1875 25.9482L24.5117 39.2686L26.6699 30.668L21.7422 29.4316L32.418 16.1104L30.2598 24.7119ZM15.0078 13.9824L22.5283 12.4443L16.6963 37.5703L14.0127 24.4424L6.49121 25.9805L12.3232 0.854492L15.0078 13.9824Z";

  private svg: Record<ApIconTurboVariant, string> = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_turbo)" filter="url(#filter0_i_turbo)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(14 15) scale(1.3)">
    <path fill-rule="evenodd" d="${this.boltPath}" clip-rule="evenodd" fill="#D4D4D8"/></g><defs>
    <filter id="filter0_i_turbo" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_turbo"/>
    </filter>
    <linearGradient id="paint0_linear_turbo" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A6A6A"/>
      <stop offset="0.4" stop-color="#424242"/>
      <stop offset="0.8" stop-color="#343434"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>`,
    pressed1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_turbo_pressed1)" filter="url(#filter0_i_turbo_pressed1)"/>
  <circle cx="40" cy="40" r="34" stroke="#FDC700" stroke-width="4"/>
  <g transform="translate(14 15) scale(1.3)">
    <path fill-rule="evenodd" d="${this.boltPath}" clip-rule="evenodd" fill="#FDC700"/></g><defs>
    <filter id="filter0_i_turbo_pressed1" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_turbo_pressed1"/>
    </filter>
    <linearGradient id="paint0_linear_turbo_pressed1" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A6A6A"/>
      <stop offset="0.4" stop-color="#424242"/>
      <stop offset="0.8" stop-color="#343434"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>`,
    pressed2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_turbo_pressed2)" filter="url(#filter0_i_turbo_pressed2)"/>
  <circle cx="40" cy="40" r="34" stroke="#00E5FF" stroke-width="4"/>
  <g transform="translate(15 15) scale(1.3)">
    <path fill-rule="evenodd" d="${this.bolt2Path}" clip-rule="evenodd" fill="#00E5FF"/></g><defs>
    <filter id="filter0_i_turbo_pressed2" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_turbo_pressed2"/>
    </filter>
    <linearGradient id="paint0_linear_turbo_pressed2" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4F6784"/>
      <stop offset="0.4" stop-color="#37506B"/>
      <stop offset="0.8" stop-color="#2B4158"/>
      <stop offset="1" stop-color="#23374A"/>
    </linearGradient>
  </defs>
</svg>`,
    black: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10244_83)">
<g clip-path="url(#clip1_10244_83)">
<circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
<g filter="url(#filter0_i_10244_83)">
<circle cx="40" cy="40" r="36" fill="url(#paint0_linear_10244_83)"/>
</g>
<circle cx="40" cy="40" r="34" stroke="#E4E4E7" stroke-width="4"/>
<path d="M51.0137 45.4834L56.9268 46.9668L44.1162 62.9512L46.7061 52.6309L40.793 51.1475L53.6035 35.1611L51.0137 45.4834ZM32.7119 32.6084L41.7363 30.7627L34.7373 60.9131L31.5176 45.1602L22.4912 47.0059L29.4902 16.8545L32.7119 32.6084Z" fill="#F4F4F5"/>
</g>
</g>
<defs>
<filter id="filter0_i_10244_83" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_10244_83"/>
</filter>
<linearGradient id="paint0_linear_10244_83" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
<stop stop-color="#6A6A6A"/>
<stop offset="0.4" stop-color="#424242"/>
<stop offset="0.8" stop-color="#343434"/>
<stop offset="1" stop-color="#303030"/>
</linearGradient>
<clipPath id="clip0_10244_83">
<rect width="80" height="80" fill="white"/>
</clipPath>
<clipPath id="clip1_10244_83">
<rect width="80" height="80" fill="white"/>
</clipPath>
</defs>
</svg>`
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg[this.variant()])
  );
}
