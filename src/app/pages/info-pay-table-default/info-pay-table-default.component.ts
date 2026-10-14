import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCtrlService } from '../../services/info-ctrl/info-ctrl.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'info-pay-table-default',
  imports: [CommonModule],
  templateUrl: './info-pay-table-default.component.html',
})
export class InfoPayTableDefaultComponent {
  protected info = inject(InfoCtrlService);
  protected session = inject(ClientSessionService);
  /** info的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);
  protected positionClass(position?: string, useFlex = false): string {
    switch (position) {
      case 'center':
        return useFlex ? 'justify-center text-center' : 'text-center';
      case 'right':
        return useFlex ? 'justify-end text-right' : 'text-right';
      case 'left':
      default:
        return useFlex ? 'justify-start text-left' : 'text-left';
    }
  }
}
