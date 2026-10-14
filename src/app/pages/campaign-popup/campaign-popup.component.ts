import { AfterViewInit, Component, computed, DestroyRef, effect, inject, signal, untracked } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { CampaignWaitToJoinType, CampaignUnderConditionType, CampaignReceivedType, CampaignOnGoingType, CampaignFreeBonus, CampaignFreeSpins, CampaignType, CampaignWithdrawSuccessType, CampaignWithdrawFailedType } from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { dec } from '../../services/player-wallet/player-wallet.function';
import { ClientSessionService } from '../../services/client-session/client-session.service';

/** 單一則 popup 要顯示的內容 */
interface CampaignPopupContent {
  header: string;
  content: string;
  buttonText: string;
  /** 關閉後要開啟的活動 groupId; undefined 表示沿用前一則的 groupId */
  groupId?: string | null;
}


@Component({
  selector: 'campaign-popup',
  imports: [ApUiFramePopupComponent, ApIconComponent, ApButtonComponent],
  templateUrl: './campaign-popup.component.html',
  styleUrl: './campaign-popup.component.css'
})
export class CampaignPopupComponent implements AfterViewInit {
  private readonly campaign = inject(CampaignFacadeService);
  private readonly eventCenter = inject(EventCenterCtrlService);
  private readonly panel = inject(BottomPanelService);
  private readonly i18n = inject(AppI18nService);
  private readonly session = inject(ClientSessionService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly locale = this.session.locale;

  // 儲存的訊息
  /** Queue of messages */
  protected readonly withdrawSuccessMessages = signal<CampaignWithdrawSuccessType[]>([]);
  /** Queue of messages */
  protected readonly withdrawFailedMessages = signal<CampaignWithdrawFailedType[]>([]);
  protected readonly waitToJoinMessage = signal<CampaignWaitToJoinType | null>(null);
  protected readonly underConditionMessage = signal<CampaignUnderConditionType | null>(null);
  protected readonly receivedCampaignMessage = signal<CampaignReceivedType | null>(null);
  protected readonly onGoingCampaignMessage = signal<CampaignOnGoingType | null>(null);

  /** 是否還有待處理的訊息 */
  protected readonly hasMessage = computed(() => {
    return !!(
      this.withdrawSuccessMessages().length > 0 ||
      this.withdrawFailedMessages().length > 0 ||
      this.waitToJoinMessage() ||
      this.underConditionMessage() ||
      this.receivedCampaignMessage() ||
      this.onGoingCampaignMessage()
    );
  });
  /** 儲存最後一個訊息的 groupId, 每次處理都會更新 */
  protected readonly lastGroupId = signal<string | null>(null);

  /** 顯示開關 */
  protected readonly showMessage = signal(false);
  protected readonly messageHeader = signal('');
  protected readonly messageContent = signal('');
  protected readonly buttonText = signal('OK');

  constructor() {
    // 以下順序為訊息處理的優先順序
    this.campaign.underCondition$.pipe(takeUntilDestroyed()).subscribe((message) => this.underConditionMessage.set(message));
    this.campaign.receivedCampaign$.pipe(takeUntilDestroyed()).subscribe((message) => this.receivedCampaignMessage.set(message));
    this.campaign.onGoingCampaign$.pipe(takeUntilDestroyed()).subscribe((message) => this.onGoingCampaignMessage.set(message));
    this.campaign.waitToJoin$.pipe(takeUntilDestroyed()).subscribe((message) => this.waitToJoinMessage.set(message));
    // 提領結果可能連續發生, 以 queue 保存每一則
    this.campaign.withdrawSuccess$.pipe(takeUntilDestroyed()).subscribe((message) => this.withdrawSuccessMessages.update(list => [...list, message]));
    this.campaign.withdrawFailed$.pipe(takeUntilDestroyed()).subscribe((message) => this.withdrawFailedMessages.update(list => [...list, message]));

    effect(() => {
      // 同步顯示狀態到 campaign 服務
      this.campaign.setPopupMessageVisible(this.showMessage());
    });

    effect(() => {
      // 如果 panel 忙碌, 關閉訊息彈窗
      if (this.panel.isBusy()) {
        this.showMessage.set(false);
        this.lastGroupId.set(null);
      }
    });

    effect(() => {
      // 有新訊息觸發 processMessage()
      if (this.hasMessage() && !this.panel.isBusy()) {
          untracked(() => {
            // 正在顯示訊息時, 交由 onClick 依序處理
            if (!this.showMessage()) {
              this.processMessage();
            }
        });
      }
    });

    this.destroyRef.onDestroy(() => {
      this.campaign.setPopupMessageVisible(false);
      this.campaign.setPopupActivated(false);
    });
  }

  ngAfterViewInit(): void {
    this.campaign.setPopupActivated(true);
  }

  onClick() {
    // 還有訊息就顯示下一則, 沒有則關閉彈窗並開啟最後一則訊息的活動頁
    if (this.hasMessage()) {
      this.processMessage();
      return;
    }
    this.showMessage.set(false);
    this.openCampaignPage(this.lastGroupId());
    this.lastGroupId.set(null);
  }

  openCampaignPage(groupId: string | null) {
    if (!groupId) return;
    this.eventCenter.open(`campaign/${groupId}`);
  }

  /** 依優先順序取出下一則訊息並顯示 */
  processMessage() {
    const popup = this.takeNextPopup();
    if (!popup) return;

    this.messageHeader.set(popup.header);
    this.messageContent.set(popup.content);
    this.buttonText.set(popup.buttonText);
    if (popup.groupId !== undefined) {
      this.lastGroupId.set(popup.groupId);
    }
    if (!this.showMessage()) {
      // 關掉auto play，讓玩家不會錯過popup內容
      this.panel.stopAutoSpin();
      this.showMessage.set(true);
    }
  }

  /** 取出優先順序最高的訊息, 清空對應的 message signals 並轉成 popup 內容 */
  private takeNextPopup(): CampaignPopupContent | null {
    const [withdrawSuccess, ...restSuccess] = this.withdrawSuccessMessages();
    if (withdrawSuccess) {
      this.withdrawSuccessMessages.set(restSuccess);
      return this.buildWithdrawSuccess(withdrawSuccess);
    }
    const [withdrawFailed, ...restFailed] = this.withdrawFailedMessages();
    if (withdrawFailed) {
      this.withdrawFailedMessages.set(restFailed);
      return this.buildWithdrawFailed(withdrawFailed);
    }
    const underCondition = this.underConditionMessage();
    if (underCondition) {
      this.underConditionMessage.set(null);
      return this.buildUnderCondition(underCondition);
    }
    const received = this.receivedCampaignMessage();
    if (received) {
      this.receivedCampaignMessage.set(null);
      return this.buildReceived(received);
    }
    const onGoing = this.onGoingCampaignMessage();
    if (onGoing) {
      this.onGoingCampaignMessage.set(null);
      return this.buildOnGoing(onGoing);
    }
    const waitToJoin = this.waitToJoinMessage();
    if (waitToJoin) {
      this.waitToJoinMessage.set(null);
      return this.buildWaitToJoin(waitToJoin);
    }
    return null;
  }

  private buildWithdrawSuccess(message: CampaignWithdrawSuccessType): CampaignPopupContent {
    const content = this.i18n.instant('promo_popup3'); // 恭喜您！\n您已达成 {0} 的提领条件！\n\n活动钱包：{1}\n提领上限：{2}
    // 提領訊息裡的活動通常只有一個
    const campaign = message.campaignList[0];
    let popupContent = content.replace('{0}', campaign?.name ?? '');
    popupContent = popupContent.replace('{1}', campaign ? dec.comma(campaign.balance) : 'N/A');
    popupContent = popupContent.replace('{2}', campaign?.withdrawal?.limit ? dec.comma(campaign.withdrawal.limit) : 'N/A');
    return {
      header: this.i18n.instant('promo_title'), // 活动
      content: popupContent,
      buttonText: this.i18n.instant('Confirm_Btn'),
    };
  }

  private buildWithdrawFailed(message: CampaignWithdrawFailedType): CampaignPopupContent {
    const content = this.i18n.instant('promo_fs_19'); // 您已完成本次活动\n {0}！\n \n 祝您下次好运！
    return {
      header: this.i18n.instant('promo_title'), // 活动
      content: content.replace('{0}', this.combineNames(message.campaignList)),
      buttonText: this.i18n.instant('Confirm_Btn'),
    };
  }

  private buildWaitToJoin(message: CampaignWaitToJoinType): CampaignPopupContent {
    return {
      header: this.i18n.instant('promo_manual_title'), // 新活动上线啦！
      content: this.i18n.instant('promo_manual_body'), // 全新活动正在进行中，赶快去看看吧！
      buttonText: this.i18n.instant('promo_manual_button'), // 立即前往
      groupId: message.campaignList[0]?.groupId || null,
    };
  }

  private buildUnderCondition(message: CampaignUnderConditionType): CampaignPopupContent {
    const singleContent = this.i18n.instant('promo_fs_21'); // 恭喜您！ \n\n 目前有「{0}」\n期间限定活动正在进行中！\n\n请在期限内完成条件，赢得活动！
    const multiContent = this.i18n.instant('promo_multi_21'); // 恭喜您！ \n\n目前有多个期间限定活动正在进行中！\n\n请在期间内完成条件，赢得活动！
    return {
      header: this.i18n.instant('promo_inprogress_title'), // 活动进行中
      content: message.campaignList.length > 1 ? multiContent : singleContent.replace('{0}', message.campaignList[0]?.name || ''),
      buttonText: this.i18n.instant('promo_inprogress_button'), // 继续游戏
    };
  }

  private buildReceived(message: CampaignReceivedType): CampaignPopupContent {
    let popupContent = '';
    // 單筆處理
    if (message.campaignList.length === 1) {
      // Free Spin
      if (message.campaignList[0]?.type === 'freeSpins') {
        const singleContent = this.i18n.instant('promo_fs_13'); // 恭喜您！\n \n 您刚领取了「总价值{1}的免费次数{0}次！」\n \n 请点击【确定】查询活动结束时间、提领条件和提领上限。
        const campaign = message.campaignList[0] as CampaignFreeSpins;
        popupContent = singleContent.replace('{0}', campaign.spinCount?.toString() ?? '0');
        popupContent = popupContent.replace('{1}', dec.comma(campaign.totalAmount));
      }
      else { // Free Bonus
        const singleContent = this.i18n.instant('promo_popup1'); // 恭喜您！\n\n您刚领取了「价值 {1} 的 {0} 活动钱包！」\n\n请点击【确定】查询活动结束时间、提领条件和提领上限。
        const campaign = message.campaignList[0] as CampaignFreeBonus;
        popupContent = singleContent.replace('{0}', campaign.name);
        popupContent = popupContent.replace('{1}', dec.comma(campaign.totalAmount));
      }
    }
    else {
      // 合併訊息
      const multiContent = this.i18n.instant('promo_popup_multi1'); // 恭喜您！\n您刚刚领取了如下所示的多个活动：\n{0}请点击“确定”选择您想先游玩的活动。
      popupContent = multiContent.replace('{0}', `\n${this.combineNames(message.campaignList)}`);
    }
    return {
      header: this.i18n.instant('promo_inprogress_title'), // 活动进行中
      content: popupContent,
      buttonText: this.i18n.instant('Confirm_Btn'),
      groupId: message.campaignList[0]?.groupId || null,
    };
  }

  private buildOnGoing(message: CampaignOnGoingType): CampaignPopupContent {
    let popupContent = '';
    // 單筆處理
    if (message.campaignList.length === 1) {
      // Free Spin
      if (message.campaignList[0]?.type === 'freeSpins') {
        const singleContent = this.i18n.instant('promo_fs_17'); // 欢迎回来！\n \n 您领取的 {0} 免费次数还在进行中，预计结束时间为\n{1}\n请把握时间完成活动。
        const campaign = message.campaignList[0] as CampaignFreeSpins;
        popupContent = singleContent.replace('{0}', campaign.name);
        popupContent = popupContent.replace('{1}', this.formatEndTime(campaign.endTime));
      }
      else { // Free Bonus
        const singleContent = this.i18n.instant('promo_popup4'); // 欢迎回来！\n\n您领取的 {0} 活动还在进行中，预计结束时间为\n{1}\n您需在活动结束前达到 {2}，才能将活动钱包的金额提领至现金钱包！
        const campaign = message.campaignList[0] as CampaignFreeBonus;
        popupContent = singleContent.replace('{0}', campaign.name);
        popupContent = popupContent.replace('{1}', this.formatEndTime(campaign.endTime));
        popupContent = popupContent.replace('{2}', campaign.withdrawal?.turnoverThreshold ? dec.comma(campaign.withdrawal.turnoverThreshold) : 'N/A');
      }
    }
    else {
      // 合併訊息
      const multiContent = this.i18n.instant('promo_popup_multi4'); // 欢迎回来！\n您仍有以下的活动正在进行：\n{0}您需在活动结束前达到活动要求，才能将活动钱包的金额提领至现金钱包！
      popupContent = multiContent.replace('{0}', `${this.combineNames(message.campaignList)}\n`);
    }
    return {
      header: this.i18n.instant('promo_inprogress_title'), // 活动进行中
      content: popupContent,
      buttonText: this.i18n.instant('Confirm_Btn'),
      groupId: message.campaignList[0]?.groupId || null,
    };
  }

  private formatEndTime(endTime: CampaignType['endTime']): string {
    return new Date(endTime).toLocaleString(this.locale, { hour12: false });
  }

  combineNames(campaigns: CampaignType[]): string {
    const willEndOn: string = this.i18n.instant('promo_multi_content4'); // {0}，预计结束时间为\n{1}。
    return campaigns
      .map((c, index) => `${index + 1}. ${willEndOn.replace('{0}', c.name).replace('{1}', this.formatEndTime(c.endTime))}`)
      .join('\n');
  }
}
