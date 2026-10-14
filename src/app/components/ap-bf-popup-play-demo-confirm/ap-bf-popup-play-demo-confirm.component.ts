import { Component, HostListener, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";

@Component({
  standalone: true,
  selector: 'ap-bf-popup-play-demo-confirm',
  imports: [CommonModule, ApUiFramePopupComponent, ApButtonComponent, ApIconComponent],
  templateUrl: './ap-bf-popup-play-demo-confirm.component.html',
  styleUrls: ['./ap-bf-popup-play-demo-confirm.component.css'],
})
export class ApBfPopupPlayDemoConfirmComponent {
  header = input('Message');
  description = input('To begin watching, please confirm if you would like to play');
  cancelText = input('Cancel');
  confirmText = input('Confirm');

  readonly close = output<void>();
  readonly confirm = output<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.close.emit();
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') this.onCancel();
    if (e.key === 'Enter') this.onConfirm();
  }
}
