import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ap-promo-code-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ap-promo-code-code.component.html',
  styleUrl: './ap-promo-code-code.component.css'
})
export class ApPromoCodeQrCodeComponent {
  qrcodeAlt = input('QR Code');
  url = signal('https://t.me/advantplayofficial');
  size = input('24');
  borderColor = input('border-yellow-600');
  backgroundColor = input('bg-[radial-gradient(circle,_#FFF8DC_0%,_#F3D992_40%,_#BD9A4B_100%)]');

  openLink() {
    const linkUrl = this.url();
    if (linkUrl) {
      window.open(linkUrl, '_blank');
    }
  }
}