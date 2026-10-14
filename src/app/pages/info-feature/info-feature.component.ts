import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCtrlService } from '../../services/info-ctrl/info-ctrl.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';
import { ApBfCardFeatureComponent } from "../../components/ap-bf-card-feature/ap-bf-card-feature.component";
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'info-feature',
  imports: [CommonModule, ApBfCardFeatureComponent],
  templateUrl: './info-feature.component.html',
  styleUrl: './info-feature.component.css',
})
export class InfoFeatureComponent {
  protected info = inject(InfoCtrlService);
  protected wallet = inject(PlayerWalletService);
  protected symbol = inject(BaseSymbolTextureService);
  protected session = inject(ClientSessionService);
  /** info feature的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);

  protected positionClass(position?: string): string {
    switch (position) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      case 'left':
      default:
        return 'text-left';
    }
  }

  buyFeatureCard = computed(() => {
    return this.wallet.buyFeatureCards()[0];
  });
}
