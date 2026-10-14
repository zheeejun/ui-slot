import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { CommonModule } from '@angular/common';
import { SlotReelSettingComponent } from "../../pages/slot-reel-setting/slot-reel-setting.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { LoggerService } from '../../services/logger/logger.service';
import { TrnDebugPanelComponent } from "../../pages/trn-debug-panel/trn-debug-panel.component";
import { Router, RouterModule } from "@angular/router";
import { BottomPanelDebugComponent } from "../../pages/bottom-panel-debug/bottom-panel-debug.component";
import { LogDebugPanelComponent } from "../../pages/log-debug-panel/log-debug-panel.component";
import { MiscDebugPanelComponent } from "../../pages/misc-debug-panel/misc-debug-panel.component";
import { HistoryDebugPanelComponent } from "../../pages/history-debug-panel/history-debug-panel.component";
import { CampaignDebugPanelComponent } from "../../pages/campaign-debug-panel/campaign-debug-panel.component";
import { SlotDebugPanelComponent } from "../../pages/slot-debug-panel/slot-debug-panel.component";
import { CustomDebugPanelComponent } from "../../pages/custom-debug-panel/custom-debug-panel.component";
import { LayoutLabToggleItem } from './layout-lab.interface';
@Component({
  selector: 'layout-lab',
  imports: [CommonModule, ApIconComponent, SlotReelSettingComponent, ApToggleSwitchComponent, RouterModule],
  templateUrl: './layout-lab.component.html',
  styleUrl: './layout-lab.component.css'
})
export class LayoutLabComponent {
  protected router = inject(Router);
  showMenu = signal(false);
  showSlotSettings = signal(false);
  showTrnDebug = signal(false);
  showPanelDebug = signal(false);
  showLogDebug = signal(false);
  showMiscDebug = signal(false);
  showHistoryDebug = signal(false);
  showCampaignDebug = signal(false);
  showSlotDebug = signal(false);
  showCustomDebug = signal(false);
  toggleList: LayoutLabToggleItem[] = [];
  constructor(
    protected logger: LoggerService,
  ) {
    this.toggleList = [
      { label: 'Panel Debug', signal: this.showPanelDebug, component: BottomPanelDebugComponent },
      { label: 'Campaign Debug', signal: this.showCampaignDebug, component: CampaignDebugPanelComponent },
      { label: 'Tournament Debug', signal: this.showTrnDebug, component: TrnDebugPanelComponent },
      { label: 'Misc Debug', signal: this.showMiscDebug, component: MiscDebugPanelComponent },
      { label: 'Log Debug', signal: this.showLogDebug, component: LogDebugPanelComponent },
      { label: 'History Debug', signal: this.showHistoryDebug, component: HistoryDebugPanelComponent },
      { label: 'Slot Debug', signal: this.showSlotDebug, component: SlotDebugPanelComponent },
      { label: 'Custom Debug', signal: this.showCustomDebug, component: CustomDebugPanelComponent },
    ];
  }
  toggleSideMenu() {
    this.showMenu.set(!this.showMenu());
  }
}
