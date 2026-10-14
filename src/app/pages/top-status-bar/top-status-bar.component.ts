import { CommonModule } from '@angular/common';
import { Component, input, inject, computed, output } from '@angular/core';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';

@Component({
  selector: 'top-status-bar',
  imports: [CommonModule],
  templateUrl: './top-status-bar.component.html',
  styleUrl: './top-status-bar.component.css',
})
export class TopStatusBarComponent {
  private readonly panel = inject(BottomPanelService);
  private readonly wallet = inject(PlayerWalletService);
  private readonly i18n = inject(AppI18nService);
  fontSize = input<string>('1.2rem');
  protected isVisible = computed(() => {
    return this.panel.isFreeSpinRound() || this.panel.isFreeBonusRound() || this.wallet.isDoubleChance();
  });
  readonly label = computed(() => {
    if (this.panel.isFreeSpinRound()) {
      return this.i18n.instant('buyfeature_fs_mode', 'Free Spin Mode');
    }
    else if (this.panel.isFreeBonusRound()) {
      return this.i18n.instant('buyfeature_fb_mode', 'Free Bonus Mode');
    }
    else if (this.wallet.isDoubleChance()) {
      // 預設使用共用的buyfeature_dc_mode, 如果有針對不同spin mode的buyfeature_xxx_mode字串，則使用該專屬字串
      const defaultDCText = this.i18n.instant('buyfeature_dc_mode','Double Chance Mode',);
      return this.i18n.instantGame(`buyfeature_${this.wallet.spinMode()}_mode`, defaultDCText);
    }
    else {
      return '';
    }
  });
}
