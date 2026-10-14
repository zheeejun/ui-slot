import { Component, computed, HostListener, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { MoneyTextPipe } from "../../shared/pipe/money-text.pipe";
import { ApBuyFeatureCard } from '../../pages/event-buy-feature/event-buy-feature.interface';
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';
import { ApIconRocketComponent } from '../../icons/ap-icon-rocket/ap-icon-rocket.component';

@Component({
  standalone: true,
  selector: 'ap-bf-popup-confirm-chance',
  imports: [ApUiFramePopupComponent, CommonModule, MoneyTextPipe, ApIconRocketComponent],
  templateUrl: './ap-bf-popup-confirm-chance.component.html',
  styleUrls: ['./ap-bf-popup-confirm-chance.component.css'],
})
export class ApBfPopupConfirmChanceComponent {
  readonly card = input<ApBuyFeatureCard | null>(null);
  readonly symbol = inject(BaseSymbolTextureService);
  header = input('Message');
  currency = input('$');
  price = input(0);
  title = input('Buy Now?');
  image = computed<string | null>(() => {
    const mode = this.card()?.mode ?? 'dc';
    return this.symbol.getBuyChanceTextureUrl(mode);
  });
  description = input('Click "Confirm" to complete your purchase.');
  confirmText = input('CONFIRM');
  cancelText = input('CANCEL');
  close = output<void>();
  confirm = output<void>();

  clickConfirm() {
    this.confirm.emit();
  }

  clickCancel() {
    this.close.emit();
  }

  clickClose() {
    this.close.emit();
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') this.clickCancel();
    if (e.key === 'Enter') this.clickConfirm();
  }
}
