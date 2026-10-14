import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApTagComponent } from '../../../ap-components-lib/ap-tag/ap-tag.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { CampaignGroup } from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { defaultCampaignGroups } from '../../pages/event-campaign-cards/event-campaign-data';
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'ap-campaign-card',
  standalone: true,
  imports: [CommonModule, ApTagComponent],
  templateUrl: './ap-campaign-card.component.html',
  styleUrl: './ap-campaign-card.component.css',
})
export class ApCampaignCardComponent {
  private appI18n = inject(AppI18nService);
  private locale = inject(ClientSessionService).locale;
  //* 用於判斷標題是否包含中文 */
  private chineseCharPattern = /\p{Script=Han}/u;

  campaignGroup = input<CampaignGroup>(defaultCampaignGroups[0]);
  isDisabled = signal(false);

  isNew = input(false);
  imageAlt = signal('Campaign Banner');

  id = computed(() => this.campaignGroup().id);
  image = computed(() => this.campaignGroup().image);
  
  title = computed(() => this.campaignGroup().title);
  /** 是否為中文標題 */
  isChineseTitle = computed(() => this.chineseCharPattern.test(this.title()));
  description = computed(() => this.campaignGroup().description);
  endDateLabel = computed(() => {
    // EndsOn_Text 這字串用不到 {0}
    return this.appI18n.computed('EndsOn_Text', 'Ends On:')().replace('{0}', '');
  });
  
  endDateTime = computed(() => {
    const endTime = this.campaignGroup().endTime;
    return new Date(endTime).toLocaleString(this.locale, {hour12: false});
  });

}
