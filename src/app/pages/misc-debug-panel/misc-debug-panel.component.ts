import { Component, inject, signal } from '@angular/core';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { EventCashdropToastComponent } from '../event-cashdrop-toast/event-cashdrop-toast.component';
import { ApUiReplayModeComponent } from '../../components/ap-ui-replay-mode/ap-ui-replay-mode.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  selector: 'misc-debug-panel',
  imports: [ApToggleSwitchComponent, EventCashdropToastComponent, ApUiReplayModeComponent],
  templateUrl: './misc-debug-panel.component.html',
  styleUrl: './misc-debug-panel.component.css'
})
export class MiscDebugPanelComponent {
  private i18n = inject(AppI18nService);
  readonly replaceByKeyEnabled = this.i18n.replaceByKeyEnabled;
  readonly showCashdropDebug = signal(false);
  readonly showPlayModeDebug = signal(false);

  onReplaceByKeyChange(value: boolean) {
    this.i18n.setReplaceByKeyEnabled(value);
  }
}
