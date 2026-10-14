import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ap-icon-gift-coupon',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconGiftCouponComponent {
  private sanitizer = inject(DomSanitizer);

  private svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.765 28.4L20.5 24.375L14.235 28.4L16.125 21.19L10.3675 16.5L17.805 16.045L20.5 9.15L23.195 16.045L30.6325 16.5L24.875 21.19M34.5 20C34.5 19.0717 34.8687 18.1815 35.5251 17.5251C36.1815 16.8687 37.0717 16.5 38 16.5V9.5C38 8.57174 37.6313 7.6815 36.9749 7.02513C36.3185 6.36875 35.4283 6 34.5 6L6.5 6C5.57174 6 4.6815 6.36875 4.02513 7.02513C3.36875 7.6815 3 8.57174 3 9.5L3 16.5C3.92826 16.5 4.8185 16.8687 5.47487 17.5251C6.13125 18.1815 6.5 19.0717 6.5 20C6.5 20.9283 6.13125 21.8185 5.47487 22.4749C4.8185 23.1313 3.92826 23.5 3 23.5L3 30.5C3 31.4283 3.36875 32.3185 4.02513 32.9749C4.6815 33.6313 5.57174 34 6.5 34H34.5C35.4283 34 36.3185 33.6313 36.9749 32.9749C37.6313 32.3185 38 31.4283 38 30.5V23.5C37.0717 23.5 36.1815 23.1313 35.5251 22.4749C34.8687 21.8185 34.5 20.9283 34.5 20Z" fill="url(#paint0_linear_10141_27486)"/>
<defs>
<linearGradient id="paint0_linear_10141_27486" x1="20.5" y1="9.5" x2="20.5" y2="29.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDE68A"/>
<stop offset="0.663464" stop-color="#FBBF24"/>
<stop offset="0.956737" stop-color="#D09600"/>
</linearGradient>
</defs>
</svg>`
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg['default'])
  );
}
