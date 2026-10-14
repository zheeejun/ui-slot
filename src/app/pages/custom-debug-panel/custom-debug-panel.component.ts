import { Component, computed, inject } from '@angular/core';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { IGameCustomData, IGameCutomRuleType } from '../../../chiikawa/Tool/util/IGameCustomData';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { RULE_GA_ES } from '../../../chiikawa/Tool/util/IGameCustomData';

@Component({
  selector: 'custom-debug-panel',
  imports: [ApInputBox, ApButtonComponent, ApSelectComponent],
  templateUrl: './custom-debug-panel.component.html',
  styleUrl: './custom-debug-panel.component.css',
})
export class CustomDebugPanelComponent {
  private gameIframeCtrl = inject(GameIframeCtrlService);

  readonly logoTypeOptions: ApSelectOption[] = [
    { value: 'image', label: 'image' },
    { value: 'spine', label: 'spine' },
  ];

  readonly ruleOptions: ApSelectOption[] = [
    { value: RULE_GA_ES, label: RULE_GA_ES },
    { value: 'bmm', label: 'bmm' },
  ];

  readonly customLogoKey = computed(() => this.gameIframeCtrl.customData()?.customLogoKey ?? '');
  readonly customLogoType = computed(() => this.gameIframeCtrl.customData()?.customLogoType ?? '');
  readonly customGamekey = computed(() => this.gameIframeCtrl.customData()?.customGamekey ?? '');
  readonly customBackground = computed(() => this.gameIframeCtrl.customData()?.customBackground ?? '');
  readonly customRule = computed(() => this.gameIframeCtrl.customData()?.customRule ?? '');
  readonly customRTP = computed(() => this.gameIframeCtrl.customData()?.customRTP ?? '');

  onCustomLogoKeyChange(value: string) {
    this.updateCustomData({ customLogoKey: value || null });
  }

  onCustomLogoTypeChange(value: string) {
    this.updateCustomData({ customLogoType: value || null });
  }

  onCustomGamekeyChange(value: string) {
    this.updateCustomData({ customGamekey: value || null });
  }

  onCustomBackgroundChange(value: string) {
    this.updateCustomData({ customBackground: value || null });
  }

  onCustomRuleChange(value: IGameCutomRuleType) {
    this.updateCustomData({ customRule: value || null });
  }

  onCustomRTPChange(value: string) {
    this.updateCustomData({ customRTP: value || null });
  }

  clearCustomData() {
    this.gameIframeCtrl.debugSetCustomData(null);
  }

  private updateCustomData(partial: Partial<IGameCustomData>) {
    const current = this.gameIframeCtrl.customData();
    const next: IGameCustomData = {
      customLogoKey: current?.customLogoKey ?? null,
      customLogoType: current?.customLogoType ?? null,
      customGamekey: current?.customGamekey ?? null,
      customBackground: current?.customBackground ?? null,
      customRule: current?.customRule ?? null,
      customRTP: current?.customRTP ?? null,
      ...partial,
    };
    this.gameIframeCtrl.debugSetCustomData(next);
  }
}
