import { Component, inject, signal } from '@angular/core';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { StorageGameIframeSetting } from '../../services/storage-ctrl/storage-ctrl.interface';

@Component({
  selector: 'slot-debug-panel',
  imports: [ApInputBox, ApToggleSwitchComponent, ApButtonComponent],
  templateUrl: './slot-debug-panel.component.html',
  styleUrl: './slot-debug-panel.component.css',
})
export class SlotDebugPanelComponent {
  private gameIframeCtrl = inject(GameIframeCtrlService);
  private storageCtrl = inject(StorageCtrlService);
  readonly landscapeAspectRatio = signal(0.56);
  readonly gameIframeSetting = signal<StorageGameIframeSetting>(this.loadGameIframeSetting());

  onLandscapeAspectRatioChange(value: string) {
    const aspectRatio = +value;
    this.landscapeAspectRatio.set(aspectRatio);
    this.gameIframeCtrl.send(createApWebMessage('UpdatelandscapeAspectRatio', { aspectRatio }));
  }

  onGameIframeSettingChange(key: keyof StorageGameIframeSetting, value: boolean) {
    this.gameIframeSetting.update((setting) => ({ ...setting, [key]: value }));
  }

  saveGameIframeSetting() {
    this.storageCtrl.gameIframeSetting = this.gameIframeSetting();
    location.reload();
  }

  private loadGameIframeSetting(): StorageGameIframeSetting {
    const setting = this.storageCtrl.gameIframeSetting;
    return {
      closeInGameBuyFeature: setting?.closeInGameBuyFeature ?? false,
      closeInGameOpenPromo: setting?.closeInGameOpenPromo ?? false,
    };
  }
}
