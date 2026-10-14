import { Component, computed, effect, HostListener, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { MoneyTextPipe } from "../../shared/pipe/money-text.pipe";
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';
import { ApBuyFeatureCard } from '../../pages/event-buy-feature/event-buy-feature.interface';
import { SpinModeType } from '../../../chiikawa/ApWeb/ApWebInterface';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
@Component({
  standalone: true,
  selector: 'ap-bf-popup-confirm-feature',
  imports: [ApUiFramePopupComponent, CommonModule, MoneyTextPipe, ApLoadingOverlayComponent],
  templateUrl: './ap-bf-popup-confirm-feature.component.html',
  styleUrls: ['./ap-bf-popup-confirm-feature.component.css'],
})
export class ApBfPopupConfirmFeatureComponent {
  private readonly symbol = inject(BaseSymbolTextureService);
  readonly card = input<ApBuyFeatureCard | null>(null);
  readonly mode = computed<SpinModeType>(() => this.card()?.mode ?? 'bf');
  private readonly imageSource = computed<string | null>(() => this.symbol.getBuyFeatureTextureUrl(this.mode()));
  readonly image = signal<string | null>(null);
  header = input('Message');
  currency = input('$');
  price = input(0);
  title = input('Buy Now?');
  description = input('Click "Confirm" to complete your purchase.');
  confirmText = input('CONFIRM');
  cancelText = input('CANCEL');
  close = output<void>();
  confirm = output<void>();

  constructor() {
    effect((onCleanup) => {
      const source = this.imageSource();
      let canceled = false;
      onCleanup(() => {
        canceled = true;
      });

      this.image.set(source);
      if (!source) return;

      void this.symbol.cropImageBlank(source).then((croppedImage) => {
        if (!canceled) this.image.set(croppedImage);
      });
    });
  }

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
