import { Component, computed, inject, signal } from '@angular/core';
import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { CampaignGroup, CampaignStatus } from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'campaign-debug-panel',
  imports: [CommonModule, ApSelectComponent, DatePipe],
  templateUrl: './campaign-debug-panel.component.html',
  styleUrl: './campaign-debug-panel.component.css'
})
export class CampaignDebugPanelComponent {
  protected session = inject(ClientSessionService);
  protected ctrl = inject(CampaignFacadeService);
  protected currentCampaignId = computed(() => this.ctrl.currentCampaign()?.id || '');
  protected storageCtrl = inject(StorageCtrlService);
  /** 下拉選單：從現有 campaignList 產生 */
  campaignOptions = computed<ApSelectOption[]>(() => [
    { label: '(none)', value: '' },
    ...this.ctrl.campaignList().map(c => ({
      label: `[${c.type}] ${c.name}, ${c.status}`,
      value: c.id
    }))
  ]);

  /** 目前選取的 ID（用於下拉顯示） */
  selectedCampaignId = signal<string>('');

  selectedGroup = computed<CampaignGroup | null>(() => {
    const current = this.ctrl.currentCampaign();
    if (!current || !current.groupId) return null;
    return this.ctrl.campaignGroupList().find(g => g.id === current.groupId) || null;
  });

  onSelectCampaign(id: string) {
    this.selectedCampaignId.set(id);
    this.ctrl.setCurrentId(id.length > 0 ? id : null);
  }

  /** Campaign mode 切換選項 */
  campaignModeOptions: ApSelectOption[] = [
    { label: 'legacy', value: 'legacy' },
    { label: 'current', value: 'current' },
  ];

  /** 目前的 campaign mode，初始值來自 storageCtrl */
  campaignMode = signal<'legacy' | 'current'>(this.storageCtrl.campaignSetting?.mode ?? 'legacy');

  onSelectCampaignMode(mode: string) {
    const pre = this.storageCtrl.campaignSetting?.mode || 'legacy';
    const value = mode as 'legacy' | 'current';
    this.campaignMode.set(value);
    this.storageCtrl.campaignSetting = { mode: value };
    // 如果 mode 有變更，直接refresh網頁
    if (pre !== value) {
      location.reload();
    }
  }

  onCleanClickedGroups() {
    this.ctrl.cleanClickedGroups();
  }

  onCleanCampaignMessageShown() {
    this.storageCtrl.campaignMessageShown = null;
  }

  /** Demo campaign 狀態下拉選項 */
  demoVariantOptions: ApSelectOption[] = [
    { label: 'waitingToJoin', value: 'waitingToJoin' },
    { label: 'inChange', value: 'underCondition' },
    { label: 'inProgress', value: 'inProgress' },
  ];

  /** 目前選取的 demo campaign 狀態 */
  selectedDemoVariant = signal<CampaignStatus>('waitingToJoin');

  onSelectDemoVariant(variant: string) {
    this.selectedDemoVariant.set(variant as CampaignStatus);
  }

  readonly actionName = signal<string>('campaign.panel.get');
  readonly commandId = signal<string>('abc123');
  readonly payloadString = signal<string>('{"languageCode": "zh-TW"}');

  sendAction() {
    this.ctrl.sendAction({
      action: this.actionName(),
      command_id: this.commandId(),
      payload: JSON.parse(this.payloadString())
    });
  }
}
