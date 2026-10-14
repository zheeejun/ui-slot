import {Component,DestroyRef,computed,inject,input,model,output,signal,} from '@angular/core';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';

@Component({
  standalone: true,
  selector: 'og-panel-popup',
  imports: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent],
  templateUrl: './og-panel-popup.component.html',
})
export class OgPanelPopupComponent {
  protected appI18n = inject(AppI18nService);
  readonly header = input<string>();
  readonly description = input<string>();
  readonly confirmText = input<string>();
  readonly isVisible = model<boolean>(false);
  readonly mode = input<'insufficient' | 'exit'>('insufficient');

  readonly displayHeader = computed(
    () =>
      this.header() ?? this.appI18n.instant('replay_message_title', 'MESSAGE'),
  );

  /** 根據不同模式顯示不同圖示 */
  readonly displayIconName = computed(() => {
    if (this.mode() === 'exit') {
      return 'arrow-right-start-on-rectangle';
    }
    return 'insufficient';
  });

  /** 根據不同模式顯示不同描述 */
  readonly displayDescription = computed(() => {
    if (this.mode() === 'exit') {
      return this.description() ?? this.appI18n.instant('confirm_to_leave_the_game', 'Confirm to exit?');
    }
    return this.description() ?? this.appI18n.instant('not_enough_bet', 'Insufficient balance');
  });

  readonly displayConfirmText = computed(
    () => this.confirmText() ?? this.appI18n.instant('OK', 'OK'),
  );

  close = output<void>();
  confirm = output<'insufficient' | 'exit'>();

  constructor() {

  }

  onCancel() {
    this.isVisible.set(false);
    this.close.emit();
  }

  onConfirm() {
    this.isVisible.set(false);
    this.confirm.emit(this.mode());
  }
}
