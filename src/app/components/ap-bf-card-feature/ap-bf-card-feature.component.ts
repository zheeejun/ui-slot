import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { SpinModeType } from '../../../chiikawa/ApWeb/ApWebInterface';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApBuyFeatureCard } from '../../pages/event-buy-feature/event-buy-feature.interface';
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { PointerDownSoundDirective } from '../../shared/directives/pointer-down-sound/pointer-down-sound.directive';
@Component({
  selector: 'ap-bf-card-feature',
  imports: [CommonModule, ApIconComponent, MoneyTextPipe, ApLoadingOverlayComponent, PointerDownSoundDirective],
  templateUrl: './ap-bf-card-feature.component.html',
})
export class ApBfCardFeatureComponent {
  private readonly i18n = inject(AppI18nService);
  private readonly symbol = inject(BaseSymbolTextureService);
  /** ex: dev.diresoft.net/system/game_word/10093/en/ */
  readonly card = input<ApBuyFeatureCard | null>(null);
  readonly mode = computed<SpinModeType>(() => this.card()?.mode ?? 'bf');
  private readonly imageSource = computed<string | null>(() => this.symbol.getBuyFeatureTextureUrl(this.mode()));
  readonly image = signal<string | null>(null);
  readonly title = computed<string>(
    () => this.i18n.instantGame(`buyfeature_${this.mode()}_title`, this.i18n.instant('bf_title', 'FREE GAME')),
  );
  readonly content = computed<string>(
    () => this.i18n.instantGame(`buyfeature_${this.mode()}_content`, this.i18n.instant('buy_feature_buy_feature', 'Trigger the FREE GAME, win big rewards!')),
  );
  readonly playDemoLabel = computed<string>(() =>
    this.i18n.instant('buy_feature_demo_link', 'Feel the win!'),
  );
  readonly currency = computed<string>(() => this.card()?.currency ?? '$');
  readonly price = input<number>(0);
  readonly buttonText = computed<string>(() =>
    this.i18n.instant('buy_feature_buy', 'Buy'),
  );
  readonly disabled = input(false);
  readonly showPlayDemo = computed<boolean>(
    () => this.card()?.isDemoAvailable ?? false,
  );
  readonly buttonClick = output<void>();
  readonly playDemo = output<number>();

  readonly showInfoModal = signal(false);

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
    return this.priceDisplayLength(price) > 12;
  }

  onButtonClick(): void {
    if (this.disabled()) return;
    this.buttonClick.emit();
  }

  /* 數字長度縮小字型大小 */
  private priceDisplayLength(price: number): number {
    if (price === null || price === undefined || isNaN(price)) return 0;
    const intStr = Math.abs(Math.floor(price)).toString();
    const commaCount = Math.floor((intStr.length - 1) / 3);
    return this.currency().length + 1 + intStr.length + commaCount;
  }
}
