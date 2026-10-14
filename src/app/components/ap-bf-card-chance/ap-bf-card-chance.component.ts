import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, model, output, signal } from '@angular/core';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { SpinModeType } from '../../../chiikawa/ApWeb/ApWebInterface';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';
import { PointerDownSoundDirective } from '../../shared/directives/pointer-down-sound/pointer-down-sound.directive';
import { ApBuyFeatureCard } from '../../pages/event-buy-feature/event-buy-feature.interface';
import { ApIconRocketComponent } from "../../icons/ap-icon-rocket/ap-icon-rocket.component";
@Component({
  selector: 'ap-bf-card-chance',
  imports: [CommonModule, ApIconComponent, MoneyTextPipe, PointerDownSoundDirective, ApIconRocketComponent],
  templateUrl: './ap-bf-card-chance.component.html',
  styleUrl: './ap-bf-card-chance.component.css',
})
export class ApBfCardChanceComponent {
  readonly card = input<ApBuyFeatureCard | null>(null);
  private readonly i18n = inject(AppI18nService);
  private readonly symbol = inject(BaseSymbolTextureService);
  readonly order = input(0);
  readonly mode = computed<SpinModeType>(() => this.card()?.mode ?? 'dc');
  readonly image = computed<string | null>(() => this.symbol.getBuyChanceTextureUrl(this.mode()));
  readonly title = computed<string>(
    () =>
      this.i18n.instantGame(`buyfeature_${this.mode()}_title`, this.i18n.instant('dc_title', 'DOUBLE CHANCE'),)

  );
  readonly content = computed<string>(
    () =>
      this.i18n.instantGame(`buyfeature_${this.mode()}_content`, this.i18n.instant('buy_feature_double_chance', 'Pay to trigger Feature instantly.'))
  );
  readonly slogan = computed<string>(
    () => this.i18n.instantGame(`buyfeature_${this.mode()}_slogan`, this.i18n.instant('buyfeature_dc_slogan', 'Boost the odds!')),
  );
  readonly isSloganLong = computed<boolean>(() => this.slogan().length > 8);
  readonly currency = input<string>('$');
  readonly price = input(60);
  readonly unitText = computed<string>(() =>
    this.i18n.instant('buy_feature_per_spin', 'Spin'),
  );
  readonly activatedText = computed<string>(() =>
    this.i18n.instant('buy_feature_on', 'ON'),
  );
  readonly deactivatedText = computed<string>(() =>
    this.i18n.instant('buy_feature_off', 'OFF'),
  );
  readonly activated = model<boolean>(true);
  readonly disabled = input(false);
  readonly activate = output<void>();
  readonly deactivate = output<void>();

  readonly buttonText = computed<string>(() =>
    this.activated() ? this.activatedText() : this.deactivatedText(),
  );

  readonly showInfoModal = signal(false);

  openInfoModal(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.showInfoModal.set(!this.showInfoModal());
  }

  closeInfoModal(): void {
    this.showInfoModal.set(false);
  }

  isPriceLongMobile(price: number): boolean {
    return this.priceDisplayLength(price) > 8;
  }

  isPriceLongDesktop(price: number): boolean {
    return this.priceDisplayLength(price) > 10;
  }

  onButtonClick(): void {
    if (this.disabled()) return;
    const newState = !this.activated();
    this.activated.set(newState);
    if (newState) {
      this.activate.emit();
      return;
    }
    this.deactivate.emit();
  }

  private priceDisplayLength(price: number): number {
    if (price === null || price === undefined || isNaN(price)) return 0;
    const intStr = Math.abs(Math.floor(price)).toString();
    const commaCount = Math.floor((intStr.length - 1) / 3);
    return this.currency().length + 1 + intStr.length + commaCount;
  }
}
