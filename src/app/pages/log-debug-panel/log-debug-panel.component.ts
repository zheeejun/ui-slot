import { Component, inject, WritableSignal } from '@angular/core';
import { LoggerService } from '../../services/logger/logger.service';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";

@Component({
  selector: 'log-debug-panel',
  imports: [ApToggleSwitchComponent, ApButtonComponent],
  templateUrl: './log-debug-panel.component.html',
  styleUrl: './log-debug-panel.component.css'
})
export class LogDebugPanelComponent {
  protected readonly logger = inject(LoggerService);

  readonly toggleList: { label: string; signal: WritableSignal<boolean> }[] = [
    { label: 'Normal Log', signal: this.logger.logEnabled },
    { label: 'Iframe Log', signal: this.logger.iframeLogEnabled },
    { label: 'Iframe Socket Log', signal: this.logger.iframeSocketLogEnabled },
    { label: 'API Log', signal: this.logger.apiLogEnabled },
    { label: 'LeaderBoard Log', signal: this.logger.leaderboardLogEnabled },
    { label: 'Iframe Replay Log', signal: this.logger.iframeReplayLogEnabled },
    { label: 'Iframe History Log', signal: this.logger.iframeHistoryLogEnabled },
    { label: 'Reward System Log', signal: this.logger.rewardSystemLogEnabled },
    { label: 'Campaign Log', signal: this.logger.campaignLogEnabled },
    { label: 'OG Log', signal: this.logger.ogLogEnabled },
  ];

  clickSave() {
    this.logger.saveSettings();
  }

  clickDelete() {
    this.logger.deleteSettings();
  }
}
