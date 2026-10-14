import { Component, HostListener, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApTrnCardTitleComponent } from '../ap-trn-card-title/ap-trn-card-title.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
type TrnVariant = 'yellow' | 'purple';
@Component({
  standalone: true,
  selector: 'ap-trn-game-match-finished',
  imports: [CommonModule, ApButtonComponent, ApTrnCardTitleComponent, ApUiFramePopupComponent, ApIconComponent,],
  templateUrl: './ap-trn-game-match-finished.component.html',
  styleUrls: ['./ap-trn-game-match-finished.component.css'],
})
export class ApTrnGameMatchFinished {
  accentColor = input<TrnVariant>('yellow');
  header = input('Match Finished');
  getQuickTitle = input<string>('QUICK');
  getEventTitle = input<string>('EVENT');
  getEventIcon = input('gift');
  getQuickIcon = input('trophy');
  getConfirmButtonText = input<string>('Confirm');
  getList01 = input<string>('Tallying results...(5~10mins)');
  getList02 = input<string>('Prizes will be credited after tallying.');
  readonly onClose = output<void>();
  readonly onConfirm = output<void>();

  oppositeColor = computed<TrnVariant>(() =>
    this.accentColor() === 'yellow' ? 'purple' : 'yellow',
  );

  displayTitle = computed(() =>
    this.accentColor() === 'yellow' ? this.getEventTitle() : this.getQuickTitle(),
  );

  displayIcon = computed(() =>
    this.accentColor() === 'yellow' ? this.getEventIcon() : this.getQuickIcon(),
  );

  clickConfirm() {
    this.onConfirm.emit();
  }

  clickCancel() {
    this.onClose.emit();
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Enter') this.clickConfirm();
  }
}
