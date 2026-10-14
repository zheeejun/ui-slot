import { Component, input, output, signal,computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { CampaignConditionContent, CampaignDisplayType, CampaignStatus } from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { CampaignComponentData } from '../../pages/event-campaign-content/event-campaign-content.interface';
import { DefaultBaseCampaigns } from '../../pages/event-campaign-content/event-campaign-content.data';
import { dec } from '../../services/player-wallet/player-wallet.function';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { MoneyTextPipe } from "../../shared/pipe/money-text.pipe";

@Component({
  selector: 'ap-campaign-list',
  standalone: true,
  imports: [CommonModule, ApIconComponent, ApButtonComponent, MoneyTextPipe],
  templateUrl: './ap-campaign-list.component.html',
  styleUrls: ['./ap-campaign-list.component.css'],
})
export class ApCampaignListComponent {
  private appI18n = inject(AppI18nService);
  private locale = inject(ClientSessionService).locale;
  campaignData = input<CampaignComponentData>(DefaultBaseCampaigns[0]);
  currency = input('');

  baseType = computed(() => this.campaignData().baseType);
  variant = computed<CampaignStatus>(() => this.campaignData().variant);
  progressStatus = computed(() => this.campaignData().progressStatus);
  displayType = computed<CampaignDisplayType>(() => this.campaignData().displayType);
  conditionBetCount = computed<CampaignConditionContent| null>(() =>  this.campaignData().condition?.betCount || null );
  conditionTurnover = computed<CampaignConditionContent| null>(() =>  this.campaignData().condition?.turnover || null );
  isFullyClaimed = computed<boolean>(() => this.campaignData().isFullyClaimed);


  endDateTime = computed(() =>
    new Date(this.campaignData().endTime).toLocaleString(this.locale, { hour12: false })
  );
  title = computed(() => this.campaignData().title);


  lastBetDateTime = computed(() =>
    new Date(this.campaignData().lastBetTime).toLocaleString(this.locale, { hour12: false })
  );
  
  turnoverRequirement = computed(() => this.campaignData().turnoverRequirement);
  remainingTurnover = computed(() => this.campaignData().remainingTurnover);
  maxWithdraw = computed(() => this.campaignData().maxWithdraw);
  minWithdraw = computed(() => this.campaignData().minWithdraw);
  campaignId = computed(() => this.campaignData().id);

  freeBonusHiddenSubtitle = this.appI18n.computed('promo_free_bonus');
  freeBonusInProgessSubtitle = this.appI18n.computed('promo_free_bonus');
  freeSpinsHiddenSubtitle = this.appI18n.computed('promo_free_spins');
  freeSpinsSubtitle = this.appI18n.computed('promo_free_spins');
  freeSpinBonusSubtitle = this.appI18n.computed('promo_free_bonus');

  // EndsOn_Text 這字串用不到 {0}
  betCountRequirementLabel = this.appI18n.computed('promo_bet_counts_requirement', 'Bet Counts Requirement:');
  turnoverRequirementLabel = this.appI18n.computed('promo_turnover_requirement', 'Turnover Requirement:');
  endDateLabel = computed(() => { return this.appI18n.computed('EndsOn_Text', 'Ends On:')().replace('{0}', '');});
  claimLabel = this.appI18n.computed('Claim_Btn', 'Claim')();
  playLabel =  this.appI18n.computed('campaign_play', 'Play')();
  joinLabel = this.appI18n.computed('Join_Btn', 'Join')();


  // Tooltip data inputs
  tipExpiryDateLabel= this.appI18n.computed('ExpiryDate_Text', 'Expiry Date:');
  tipTurnoverRequirementLabel = this.appI18n.computed('TurnoverRequirement_Text', 'Turnover Requirement:');
  tipRemainingTurnoverLabel = this.appI18n.computed('RemainingRequirement_Text', 'Remaining Requirement:');
  tipMaxWithdrawLabel = this.appI18n.computed('MaxWithdraw_Text', 'Max Withdraw:');
  tipMinWithdrawLabel = this.appI18n.computed('MinWithdraw_Text', 'Min Withdraw:');
  tipCampaignIdLabel = this.appI18n.computed('CampaignID_Text', 'Campaign ID:');

  fullyClaimedLabel = this.appI18n.computed('promo_complete', 'Promo Complete');

  claim = output<string>();
  play = output<string>();
  join = output<string>();
  titleClicked = output<string>();
  showTooltip = signal(false);

  showDetailIcon = computed(() => this.campaignData().variant === 'inProgress');

  subtitle = computed(() => {
    // 根據 baseType 和 displayType 決定 subtitle 內容
    if (this.baseType() === 'freeBonus') {
      return `${this.freeBonusInProgessSubtitle()} ${this.currency()}${dec.comma(this.campaignData().balance)}`;
    }
    else { // freeSpins
      if (this.variant() === 'underCondition' || this.variant() === 'waitingToJoin') {
        return `${this.freeSpinsSubtitle()} x${this.campaignData().progressTotal}`;
      }
      else { // InProgress
        if (this.displayType() === 'freeSpins') {
          const total = this.campaignData().progressTotal;
          const remaining = total - this.campaignData().progressCurrent;
          return `${this.freeSpinsSubtitle()} ${remaining}/${total}`;
        }
        else { // display as freeBonus
          return `${this.freeSpinBonusSubtitle()} ${this.currency()}${dec.comma(this.campaignData().balance)}`;
        }
      }
    }
  });

  clickClaim(): void {
    this.claim.emit(this.campaignId());
  }

  clickJoin(): void {
    this.join.emit(this.campaignId());
  }

  clickPlay(): void {
    this.play.emit(this.campaignId());
  }

  clickTitle(): void {
    this.titleClicked.emit(this.campaignId());
  }

  onClickDetailIcon() {
    this.showTooltip.set(!this.showTooltip());
  }
}
