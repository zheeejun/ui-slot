import { Component } from '@angular/core';
import { ApCampaignListComponent } from '../../components/ap-campaign-list/ap-campaign-list.component';
import { DefaultBaseCampaigns } from '../event-campaign-content/event-campaign-content.data';

@Component({
  selector: 'dev-campaign-demo',
  imports: [ApCampaignListComponent],
  templateUrl: './dev-campaign-demo.component.html',
  styleUrl: './dev-campaign-demo.component.css',
})
export class DevCampaignDemoComponent {
  readonly waitToJoinCampaign = DefaultBaseCampaigns[0];
  readonly underConditionCampaign = DefaultBaseCampaigns[1];
  readonly inProgressCampaign = DefaultBaseCampaigns[2]
  readonly readyToWithdrawCampaign = DefaultBaseCampaigns[3]
  readonly currency = '$';
}
