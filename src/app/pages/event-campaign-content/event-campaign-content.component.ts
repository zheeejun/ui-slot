import { Component, signal, computed, ViewChild, ElementRef, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { CampaignGroup, CampaignStatus, CampaignType } from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { ApCampaignListComponent } from '../../components/ap-campaign-list/ap-campaign-list.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { CampaignComponentData } from './event-campaign-content.interface';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { delay, filter, map, merge, take, timer } from 'rxjs';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { environment } from '../../../environments/app-environment';

@Component({
  selector: 'event-campaign-content',
  standalone: true,
  imports: [CommonModule, ApCampaignListComponent, ApButtonComponent, ApUiFramePopupComponent, MoneyTextPipe, ApIconComponent, ApLoadingOverlayComponent],
  templateUrl: './event-campaign-content.component.html',
  styleUrls: ['./event-campaign-content.component.css'],
})
export class EventCampaignContentComponent {
  private appI18n = inject(AppI18nService);
  protected api = inject(AppInterfaceService);
  protected session = inject(ClientSessionService);
  protected campaign = inject(CampaignFacadeService);
  protected eventCenter = inject(EventCenterCtrlService);
  protected locale = inject(ClientSessionService).locale;
  private readonly elRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private chineseCharPattern = /\p{Script=Han}/u;
  readonly popupHeader = this.appI18n.computed('promo_inprogress_title', 'Campaign In Progress');
  readonly playNowLabel = this.appI18n.computed('Campaign_Play_Btn', 'Play Now');
  readonly tipCampaignTitleLabel = this.appI18n.computed('Campaign_EventCenter_Tab', 'Campaign:');
  readonly tipCampaignNameLabel = computed(() => {const campaign = this.selectedCampaign(); return campaign ? `${campaign.title}` : '';});
  readonly tipExpiryDateLabel = this.appI18n.computed('ExpiryDate_Text', 'Expiry Date:');
  readonly tipTurnoverRequirementLabel = this.appI18n.computed('TurnoverRequirement_Text', 'Turnover Requirement:');
  readonly tipRemainingTurnoverLabel = this.appI18n.computed('RemainingRequirement_Text', 'Remaining Requirement:');
  readonly tipMaxWithdrawLabel = this.appI18n.computed('MaxWithdraw_Text', 'Max Withdraw:');
  readonly tipMinWithdrawLabel = this.appI18n.computed('MinWithdraw_Text', 'Min Withdraw:');
  readonly tipCampaignIdLabel = this.appI18n.computed('CampaignID_Text', 'Campaign ID:');
  protected campaignGroup = computed<CampaignGroup | null>(() => {
    // 根據 eventCenter 的 subPath 決定要顯示哪一個 campaign group 的內容
    const currentId = this.eventCenter.subPath();
    const group = this.campaign.campaignGroupList().find(g => g.id === currentId);
    return group || null;
  });
  groupImage = computed(() => this.campaignGroup()!.image);
  groupTitle = computed(() => this.campaignGroup()!.title);
  isChineseGroupTitle = computed(() => this.chineseCharPattern.test(this.groupTitle()));
  groupDescription = computed(() => this.campaignGroup()!.description);
  @ViewChild('campaignListSection')
  campaignListSection?: ElementRef<HTMLElement>;
  //* Button labels */
  readonly jumpToRewardLabel = this.appI18n.computed('JumpToReward_Btn', 'Jump to Reward');
  isLoading = signal(false);
  ngOnInit(): void {

  }

  //* Campaign status labels */
  readonly endsOnLabel = this.appI18n.computed('EndsOn_Text', 'Ends On:');
  readonly currencySymbol = computed(() => this.api.currencySymbol() || '');
  readonly selectedCampaign = signal<CampaignComponentData | null>(null);
  readonly selectedEndDateTime = computed(() => {
    const campaign = this.selectedCampaign();
    return campaign ? new Date(campaign.endTime).toLocaleString(this.locale, { hour12: false }) : '';
  });
  readonly showConfirmPopup = computed(() => this.selectedCampaign() !== null);
  readonly showJoinPopup = signal(false);
  scrollToCampaignList(): void {
    const target = this.campaignListSection?.nativeElement;
    if (!target) return;

    let scrollContainer: HTMLElement | null = target.parentElement;
    while (scrollContainer) {
      const overflow = getComputedStyle(scrollContainer).overflowY;
      if (overflow === 'auto' || overflow === 'scroll') break;
      scrollContainer = scrollContainer.parentElement;
    }

    if (scrollContainer) {
      const offset = target.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top;
      scrollContainer.scrollBy({ top: offset, behavior: 'smooth' });
    }
  }  

  readonly baseCampaigns = computed<CampaignComponentData[]>(() => {
    const group = this.campaignGroup();
    if (!group) return [];
    // 從 group 的 campaignIdList 找到對應的 CampaignType[]
    const campaignList: CampaignType[] = [];
    for (const campaignId of group.campaignIdList) {
      const campaign = this.campaign.campaignList().find(c => c.id === campaignId);
      if (campaign) { campaignList.push(campaign); }
    }

    const campaigns: CampaignComponentData[] = [];
    // 把 campaigns 轉換成 CampaignComponentData[]格式
    for (const campaign of campaignList) {
      if (campaign.status === 'completed') {
        continue; // 跳過已完成的活動
      }

      if (campaign.status === 'failed') {
        continue; // 跳過已失敗的活動
      }

      const variant = campaign.status;
      const turnoverRequirement = campaign.withdrawal ? campaign.withdrawal.turnoverThreshold : 0;
      const remainingTurnover = campaign.withdrawal ? campaign.withdrawal.turnoverRemaining : 0;
      const maxWithdraw = campaign.withdrawal ? campaign.withdrawal.limit : 0;
      const minWithdraw = campaign.withdrawal ? campaign.withdrawal.balanceThreshold : 0;
      campaigns.push({
        baseType: campaign.type,
        id: campaign.id || '',
        variant,
        image: '',
        imageAlt: '',
        title: campaign.name,
        description: '',
        items: [],
        condition: campaign.condition,
        progressStatus: campaign.progressStatus,
        progressCurrent: campaign.progressCurrent || 0,
        progressTotal: campaign.progressTotal || 0,
        balance: campaign.balance,
        isFullyClaimed: campaign.isFullyClaimed,
        endTime: campaign.endTime,
        beginTime: campaign.beginTime,
        lastBetTime: campaign.lastBetTime,
        turnoverRequirement,
        remainingTurnover,
        maxWithdraw,
        minWithdraw,
        displayType: campaign.displayType
      });
    }

    //先按照endtime排序
    campaigns.sort((a, b) => a.endTime - b.endTime);
    //再按照inProgress在最前面
    campaigns.sort((a, b) => {
      if (a.variant === 'inProgress' && b.variant !== 'inProgress') {
        return -1;
      } else if (a.variant !== 'inProgress' && b.variant === 'inProgress') {
        return 1;
      }
      return 0;
    });

    return campaigns;
  });
  
  /* 跳至內容上方 */ 
  private scrollToTop(): void {
    let container: HTMLElement | null = this.elRef.nativeElement.parentElement;
    while (container) {
      const overflow = getComputedStyle(container).overflowY;
      if (overflow === 'auto' || overflow === 'scroll') {
        container.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      container = container.parentElement;
    }
  }

  onClaim(campaign: CampaignComponentData): void {
    if (campaign.variant !== 'inProgress') {
      return;
    }

    // 跟後端Claim活動資料
    if (campaign.progressStatus === 'claimable') {
      const campaignInList = this.campaign.campaignList().find(c => c.id === campaign.id);
      const progressStatus = campaignInList?.progressStatus || '';
      this.isLoading.set(true);
      // 只等待一次領取結果(成功或失敗), 避免重複點擊時累積訂閱
      merge(
        this.campaign.offerClaimSuccess$.pipe(map(() => null)),
        this.campaign.offerClaimFail$
      ).pipe(
        take(1),
        delay(200),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(fail => {
        this.isLoading.set(false);
        // 領取失敗
        if (fail) {
          if(!environment.production) {
            // error message
            alert(`[${fail.errorCode}] ${fail.errorMessage}`);
          }
          return;
        }
        // 領取成功
        this.closeConfirmPopup();
        this.selectedCampaign.set(campaign);
      });
      // 發送領取請求
      this.campaign.sendOfferClaim(campaignInList?.offerId || '');
      return;
    }
    else {
      this.scrollToTop();
      this.selectedCampaign.set(campaign);
      return;
    }
  }

  onPlay(campaign: CampaignComponentData): void {
    if (campaign.variant !== 'inProgress') {
      return;
    }
    this.scrollToTop();
    this.selectedCampaign.set(campaign);
  }

  onJoin(campaign: CampaignComponentData): void {
    this.isLoading.set(true);
    // 收到joinedSuccess$後停止大概0.2秒再關閉loading
    const sub = this.campaign.joinedSuccess$.pipe(
      delay(200),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.isLoading.set(false);
      sub.unsubscribe();
    });
    this.campaign.sendEnrollmentCreate(campaign.id);
  }


  closeConfirmPopup(): void {
    this.selectedCampaign.set(null);
  }

  onPlayNow(): void {
    const campaign = this.selectedCampaign();
    if (!campaign) {
      return;
    }

    this.closeConfirmPopup();
    this.eventCenter.close();
    this.campaign.setCurrentId(campaign.id);
  }

  debugCampaignClick(campaign: CampaignComponentData) {
    if (!environment.production) {
      const campaignInList = this.campaign.campaignList().find(c => c.id === campaign.id);
      console.log('Campaign in list:', campaignInList);
    }
  }
}
