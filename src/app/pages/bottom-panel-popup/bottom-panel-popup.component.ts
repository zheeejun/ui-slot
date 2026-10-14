import {
  Component,
  DestroyRef,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  standalone: true,
  selector: 'bottom-panel-popup',
  imports: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent],
  templateUrl: './bottom-panel-popup.component.html',
  styleUrl: './bottom-panel-popup.component.css',
})
export class BottomPanelPopupComponent {
  protected appI18n = inject(AppI18nService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly bottomPanel = inject(BottomPanelService);
  readonly header = input<string>();
  readonly description = input<string>();
  readonly confirmText = input<string>();
  readonly isVisible = this.bottomPanel.isMessagePopupVisible;
  private readonly mode = signal<'insufficient' | 'exit'>('insufficient');

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
  confirm = output<void>();

  constructor() {
    const insufficientSub = this.bottomPanel.insufficientBalance$.subscribe(() => {
      this.mode.set('insufficient');
      this.isVisible.set(true);
    });
    const exitSub = this.bottomPanel.exitConfirm$.subscribe(() => {
      this.mode.set('exit');
      this.isVisible.set(true);
    });
    this.destroyRef.onDestroy(() => {
      insufficientSub.unsubscribe();
      exitSub.unsubscribe();
    });
  }

  onCancel() {
    this.isVisible.set(false);
    this.close.emit();
  }

  onConfirm() {
    this.isVisible.set(false);
    if (this.mode() === 'exit') {
      this.bottomPanel.exitAndRedirect();
      return;
    }
    this.confirm.emit();
  }
}
