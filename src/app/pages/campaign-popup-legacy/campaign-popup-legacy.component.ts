import { AfterViewInit, Component, DestroyRef, effect, inject, input, signal, output, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { trigger, transition, style, animate } from '@angular/animations';
import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { CampaignOnGoingFreeSpinType, CampaignUnderConditionType, CampaignWithdrawFailedType, CampaignOnGoingFreeBonusType, CampaignReceivedFreeBonusType, CampaignReceivedFreeSpinType, CampaignRequiredTurnoverType, CampaignWithdrawSuccessType, CampaignSucessFullyClaimType, CampaignFailFullyRedeemedType, CampaignType, CampaignFreeSpins, CampaignFreeBonus, CampaignFreeSpinWithdrawMaximumType, } from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { timer } from 'rxjs';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { dec } from '../../services/player-wallet/player-wallet.function';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';

interface PopupType {
  content?: string;
  // 需要打開的活動群組ID，如果有提供就打開對應活動群組的頁面，沒有提供就打開活動列表頁面
  groupId?: string;
}

@Component({
  selector: 'campaign-popup-legacy',
  imports: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent],
  templateUrl: './campaign-popup-legacy.component.html',
  styleUrl: './campaign-popup-legacy.component.css',
})
export class CampaignPopupLegacyComponent implements AfterViewInit {
  session = inject(ClientSessionService);
  ctrl = inject(CampaignFacadeService);
  lang = inject(ClientSessionService).language;
  locale = inject(ClientSessionService).locale;
  panel = inject(BottomPanelService);
  eventCenter = inject(EventCenterCtrlService);
  i18n = inject(AppI18nService);
  destroyRef = inject(DestroyRef);
  readonly showWindow = this.ctrl.popupMessageVisible;
  windowContent = signal<string>('');
  popupQueue: PopupType[] = [];
  private appI18n = inject(AppI18nService);
  readonly header = computed(() => this.appI18n.instant('message', 'Message'));
  readonly buttonText = computed(() => this.appI18n.instant('Confirm_Btn', 'Confirm'));

  readonly close = output<void>();
  constructor() {
    this.ctrl.underCondition$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onUnderConditionEvent.bind(this));
    this.ctrl.receivedFreeBonus$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onReceivedFreeBonus.bind(this));
    this.ctrl.receivedFreeSpin$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onReceivedFreeSpin.bind(this));
    this.ctrl.onGoingFreeBonus$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onOnGoingFreeBonus.bind(this));
    this.ctrl.onGoingFreeSpin$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onOnGoingFreeSpin.bind(this));
    this.ctrl.requiredTurnover$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onRequiredTurnover.bind(this));
    this.ctrl.freeSpinWithdrawMaximum$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onFreeSpinWithdrawMaximum.bind(this));
    this.ctrl.withdrawFailed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onFailed.bind(this));
    this.ctrl.withdrawSuccess$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onSuccess.bind(this));
    this.ctrl.sucessFullyClaim$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onSucessFullyClaim.bind(this));
    this.ctrl.failFullyRedeemed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onFailFullyRedeemed.bind(this));
    this.ctrl.openEventCenterCampaign$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onOpenEventCenterCampaign.bind(this));
  }

  ngAfterViewInit(): void {
    this.ctrl.setPopupActivated(true);
  }

  // 按popup外可以關閉popup
  onCancel() {
    this.close.emit();
  }

  closeAndCheckQueue() {
    this.ctrl.setPopupMessageVisible(false);
    // 關閉目前的popup後，檢查是否有queue中的popup需要顯示
    if (this.popupQueue.length > 0) {
      const nextPopup = this.popupQueue.shift()!;
      if (nextPopup.content) {
        this.windowContent.set(nextPopup.content || '');
        this.ctrl.setPopupMessageVisible(true);
      }
      else if (nextPopup.groupId) {
        this.eventCenter.open(`campaign/${nextPopup.groupId}`);
      }
    }
  }

  addPopupToQueue(popup: PopupType) {
    // 如果目前有在顯示popup，就先把新的popup放到queue裡，等關閉目前的popup後再顯示下一個
    if (this.showWindow()) {
      this.popupQueue.push(popup);
    } else {
      // 如果目前沒有在顯示popup，就直接顯示新的popup
      if (popup.content) {
        this.windowContent.set(popup.content || '');
        this.ctrl.setPopupMessageVisible(true);
      }
      else if (popup.groupId) {
        this.eventCenter.open(`campaign/${popup.groupId}`);
      }
      // 關掉auto play，讓玩家不會錯過popup內容
      this.panel.stopAutoSpin();
    }
  }

  onOnGoingFreeBonus(message: CampaignOnGoingFreeBonusType) {
    if (message.campaignList.length === 0) return;

    const singleContent = this.i18n.instant('promo_popup4'); // 欢迎回来！\n\n您领取的 {0} 活动还在进行中，预计结束时间为\n{1}\n您需在活动结束前达到 {2}，才能将活动钱包的金额提领至现金钱包！
    const multiContent = this.i18n.instant('promo_popup_multi4'); // 欢迎回来！\n您仍有以下的活动正在进行：\n{0}您需在活动结束前达到活动要求，才能将活动钱包的金额提领至现金钱包！
    let popupContent = '';
    if (message.campaignList.length > 1) {
      const campaignNames = this.combineNames(message.campaignList);
      popupContent = multiContent.replace('{0}', `${campaignNames}\n`);
    } else if (message.campaignList.length === 1) {
      const campaign = message.campaignList[0];
      popupContent = singleContent.replace('{0}', campaign.name);
      popupContent = popupContent.replace('{1}', new Date(campaign.endTime).toLocaleString(this.locale, { hour12: false }));
      popupContent = popupContent.replace('{2}', campaign.withdrawal?.turnoverThreshold ? dec.comma(campaign.withdrawal?.turnoverThreshold) : 'N/A');
    }
    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onReceivedFreeBonus(message: CampaignReceivedFreeBonusType) {
    if (message.campaignList.length === 0) return;

    const singleContent = this.i18n.instant('promo_popup1'); // 恭喜您！\n\n您刚领取了「价值 {1} 的 {0} 活动钱包！」\n\n请点击【确定】查询活动结束时间、提领条件和提领上限。
    const multiContent = this.i18n.instant('promo_popup_multi1'); // 恭喜您！\n您刚刚领取了如下所示的多个活动：\n{0}请点击“确定”选择您想先游玩的活动。
    let popupContent = '';
    if (message.campaignList.length > 1) {
      const campaignNames = this.combineNames(message.campaignList);
      popupContent = multiContent.replace('{0}', `${campaignNames}`);
    }
    else if (message.campaignList.length === 1) {
      const campaign = message.campaignList[0] as CampaignFreeBonus;
      popupContent = singleContent.replace('{0}', campaign.name);
      popupContent = popupContent.replace('{1}', dec.comma(campaign.totalAmount));
    }
    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onReceivedFreeSpin(message: CampaignReceivedFreeSpinType) {
    if (message.campaignList.length === 0) return;

    const singleContent = this.i18n.instant('promo_fs_13'); // 恭喜您！\n \n 您刚领取了「总价值{1}的免费次数{0}次！」\n \n 请点击【确定】查询活动结束时间、提领条件和提领上限。
    const multiContent = this.i18n.instant('promo_fs_multi13'); // 恭喜您！\n 您刚刚领取了如下所示的多个活动：{0}\n请点击“确定”选择您想先游玩的活动。
    let popupContent = '';
    if (message.campaignList.length > 1) {
      const campaignNames = this.combineNames(message.campaignList);
      popupContent = multiContent.replace('{0}', `\n${campaignNames}`);
    }
    else if (message.campaignList.length === 1) {
      const campaign = message.campaignList[0] as CampaignFreeSpins;
      popupContent = singleContent.replace('{0}', campaign.spinCount?.toString() ?? '0');
      popupContent = popupContent.replace('{1}', dec.comma(campaign.totalAmount));
    }
    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onOnGoingFreeSpin(message: CampaignOnGoingFreeSpinType) {
    if (message.campaignList.length === 0) return;

    const singleContent = this.i18n.instant('promo_fs_17'); // 欢迎回来！\n \n 您领取的 {0} 免费次数还在进行中，预计结束时间为\n{1}\n请把握时间完成活动。
    const multiContent = this.i18n.instant('promo_fs_multi17'); // 欢迎回来！\n 您仍有以下的活动正在进行：{0}\n请把握时间完成活动。
    let popupContent = '';
    if (message.campaignList.length > 1) {
      const campaignNames = this.combineNames(message.campaignList);
      popupContent = multiContent.replace('{0}', `\n${campaignNames}`);
    }
    else if (message.campaignList.length === 1) {
      const campaign = message.campaignList[0];
      popupContent = singleContent.replace('{0}', campaign.name);
      popupContent = popupContent.replace('{1}', new Date(campaign.endTime).toLocaleString(this.locale, { hour12: false }));
    }

    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onRequiredTurnover(message: CampaignRequiredTurnoverType) {
    if (message.campaignList.length === 0) return;

    const content = this.i18n.instant('promo_fs_3_14');  //恭喜您！\n 您已完成 {0} 的所有次数！\n \n 请继续在活动钱包进行游戏，完成提领条件。
    const popupContent = content.replace('{0}', this.combineNames(message.campaignList));

    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onFreeSpinWithdrawMaximum(message: CampaignFreeSpinWithdrawMaximumType) {
    if (message.campaignList.length === 0) return;

    const content = this.i18n.instant('promo_fs_3_15'); //  "恭喜您！\n 您已完成 {0} 的所有次数！\n \n 总赢得：{1}\n提领上限：{2}"

    // 此訊息不會合併, 活動只有一個
    const campaign = message.campaignList[0];

    let popupContent = content.replace('{0}', campaign.name);
    popupContent = popupContent.replace('{1}', dec.comma(campaign.balance));
    popupContent = popupContent.replace('{2}', campaign.withdrawal?.limit ? dec.comma(campaign.withdrawal.limit) : 'N/A');

    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onFailed(message: CampaignWithdrawFailedType) {
    if (message.campaignList.length === 0) return;

    const content = this.i18n.instant('promo_fs_19'); // 您已完成本次活动\n {0}！\n \n 祝您下次好运！",
    const popupContent = content.replace('{0}', this.combineNames(message.campaignList));

    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onSuccess(message: CampaignWithdrawSuccessType) {
    if (message.campaignList.length === 0) return;

    const content = this.i18n.instant('promo_popup3'); //恭喜您！\n您已达成 {0} 的提领条件！\n\n活动钱包：{1}\n提领上限：{2}

    // 提領訊息裡的活動通常只有一個
    const campaign = message.campaignList[0];

    let popupContent = content.replace('{0}', campaign.name);
    popupContent = popupContent.replace('{1}', dec.comma(campaign.balance));
    popupContent = popupContent.replace('{2}', campaign.withdrawal?.limit ? dec.comma(campaign.withdrawal.limit) : 'N/A');

    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onSucessFullyClaim(message: CampaignSucessFullyClaimType) {
    if (message.campaignList.length === 0) return;

    const content = this.i18n.instant('promo_fs_22'); // 你已完成「{0}」的領取条件！\n本日活动次数已尽数提领完毕，请明日尽早来领取。
    const popupContent = content.replace('{0}', message.campaignList[0].name);

    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onFailFullyRedeemed(message: CampaignFailFullyRedeemedType) {
    if (message.campaignList.length === 0) return;

    const content = this.i18n.instant('promo_fs_23'); // 很抱歉\n\n本次活动「{0}」\n奖励已尽数提领完毕\n\n祝您下次好运！
    const popupContent = content.replace('{0}', message.campaignList[0].name);

    const popup: PopupType = {
      content: popupContent,
    }
    this.addPopupToQueue(popup);
  }

  onUnderConditionEvent(message: CampaignUnderConditionType) {
    if (message.campaignList.length === 0) return;

    const singleContent = this.i18n.instant('promo_fs_21'); // 恭喜您！ \n\n 目前有「{0}」\n期间限定活动正在进行中！\n\n请在期限内完成条件，赢得活动！
    const multiContent = this.i18n.instant('promo_multi_21'); // 恭喜您！ \n\n目前有多个期间限定活动正在进行中！\n\n请在期间内完成条件，赢得活动！
    const pupupContent = message.campaignList.length > 1 ? multiContent : singleContent.replace('{0}', message.campaignList[0]?.name || '');

    const popup: PopupType = {
      content: pupupContent,
    }
    this.addPopupToQueue(popup);
  }

  /** 打開Event Center的Campaign tab 
   * @param groupId 活動群組ID，如果有提供就打開對應活動群組的頁面，沒有提供就打開活動列表頁面
  */
  onOpenEventCenterCampaign(groupId: string) {
    // 等到this.popupQueue裡的popup都顯示完後再打開Event Center的Campaign tab，避免popup擋住Event Center的頁面
    if (this.showWindow() || this.popupQueue.length > 0) {
      // 如果目前有在顯示popup，就先把打開Event Center的動作放到queue裡，等關閉目前的popup後再執行
      const popup: PopupType = {
        groupId: groupId, // 點擊後會打開Event Center的Campaign tab裡面對應的groundId的頁面
      }
      this.addPopupToQueue(popup);
    }
    else { // 如果目前沒有在顯示popup，就直接打開Event Center的Campaign tab
      this.eventCenter.open(`campaign/${groupId}`);
    }
  }

  combineNames(campaigns: CampaignType[]): string {
    const willEndOn: string = this.i18n.instant('promo_multi_content4'); // {0}，预计结束时间为\n{1}。
    const retList: string[] = [];
    campaigns.forEach((c, index) => {
      const line = `${index + 1}. ${willEndOn.replace('{0}', c.name).replace('{1}', new Date(c.endTime).toLocaleString(this.locale, { hour12: false }))}`;
      retList.push(line);
    });
    return retList.join('\n');
  }

  getGroupIdByCampaign(campaign: CampaignType): string {
    const group = this.ctrl.campaignGroupList().find(g => g.campaignIdList.includes(campaign.id));
    return group ? group.id : '';
  }
}
