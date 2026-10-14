import { Component, inject, WritableSignal } from '@angular/core';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { HistoryDetailStyleType } from '../../services/history-ctrl/history-detail-style.type';

@Component({
  selector: 'history-debug-panel',
  imports: [ApToggleSwitchComponent],
  templateUrl: './history-debug-panel.component.html',
  styleUrl: './history-debug-panel.component.css',
})
export class HistoryDebugPanelComponent {
  protected readonly ctrl = inject(HistoryCtrlService);
  readonly toggleList: { label: string; signal: WritableSignal<boolean> }[] = [
    { label: 'Show Replay', signal: this.ctrl.forceReplayDisplayed },
    { label: 'Show Share', signal: this.ctrl.forceShareDisplayed },
  ];
  historyStyleOptions: ApSelectOption[] = [
    { label: 'Default', value: 'default' },
    { label: 'Style 1', value: 'style1' },
  ];

  sendHistoryStyle(style: string) {
    this.ctrl.historyDetailStyle.set(style as HistoryDetailStyleType);
  }
}
