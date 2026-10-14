import { computed, inject, Injectable } from '@angular/core';
import { CampaignOperation } from './campaign-operation.interface';
import { CampaignCtrlService } from './campaign-ctrl.service';
import { CampaignLegacyService } from './campaign-legacy.service';
import { ClientSessionService } from '../client-session/client-session.service';
import { CampaignGroupNoteType, CampaignLegacyNoteType } from './campaign-info-msg.interface';
import { CampaignActionType } from './campaign-action.interface';
import { StorageCtrlService } from '../storage-ctrl/storage-ctrl.service';
import { AppInterfaceService } from '../app-interface/app-interface.service';

/**
 * Campaign 功能的統一入口。依 `ClientSessionService.isLatestCampaign` 決定委派給
 * `CampaignCtrlService`（新版）或 `CampaignLegacyService`（舊版），讓 page/layout 不需要
 * 各自重複判斷版本，過渡期結束後只需要修改這個 facade。
 *
 * 這裡刻意讓一個 application service 同時 inject 另外兩個 application service，
 * 屬於明確設計的 owner relationship（見 service-architecture 的例外說明）。
 */
@Injectable({ providedIn: 'root' })
export class CampaignFacadeService implements CampaignOperation {
  private session = inject(ClientSessionService);
  private storage = inject(StorageCtrlService);
  private api = inject(AppInterfaceService);
  private userId = computed(() => this.api.userId());
  private readonly active: CampaignOperation = this.session.isLatestCampaign
    ? inject(CampaignCtrlService)
    : inject(CampaignLegacyService);

  get campaignList() { return this.active.campaignList; }
  get campaignGroupList() { return this.active.campaignGroupList; }
  get currentCampaign() { return this.active.currentCampaign; }
  get isRunning() { return this.active.isRunning; }
  get isFreeSpinRunning() { return this.active.isFreeSpinRunning; }
  get isFreeBonusRunning() { return this.active.isFreeBonusRunning; }
  get popupEnabled() { return this.active.popupEnabled; }
  get popupActivated() { return this.active.popupActivated; }
  get popupMessageVisible() { return this.active.popupMessageVisible; }
  get codeExchangeType() { return this.active.codeExchangeType; }
  get showTab() { return this.active.showTab; }
  get activatedCampaign$() { return this.active.activatedCampaign$; }
  get requiredTurnover$() { return this.active.requiredTurnover$; }
  get freeSpinWithdrawMaximum$() { return this.active.freeSpinWithdrawMaximum$; }
  get underCondition$() { return this.active.underCondition$; }
  get receivedFreeBonus$() { return this.active.receivedFreeBonus$; }
  get receivedFreeSpin$() { return this.active.receivedFreeSpin$; }
  get onGoingFreeBonus$() { return this.active.onGoingFreeBonus$; }
  get onGoingFreeSpin$() { return this.active.onGoingFreeSpin$; }
  get receivedCampaign$() { return this.active.receivedCampaign$; }
  get onGoingCampaign$() { return this.active.onGoingCampaign$; }
  get withdrawFailed$() { return this.active.withdrawFailed$; }
  get withdrawSuccess$() { return this.active.withdrawSuccess$; }
  get sucessFullyClaim$() { return this.active.sucessFullyClaim$; }
  get failFullyRedeemed$() { return this.active.failFullyRedeemed$; }
  get openEventCenterCampaign$() { return this.active.openEventCenterCampaign$; }
  get joinedSuccess$() { return this.active.joinedSuccess$; }
  get offerClaimSuccess$() { return this.active.offerClaimSuccess$; }
  get offerClaimFail$() { return this.active.offerClaimFail$; }
  get waitToJoin$() { return this.active.waitToJoin$; }

  setPopupActivated(value: boolean): void { this.active.setPopupActivated(value); }
  setPopupMessageVisible(value: boolean): void { this.active.setPopupMessageVisible(value); }

  // 舊的接口
  setCurrentId(id: string | null): void { this.active.setCurrentId(id); }
  updateCampaignList(campaignNotes: CampaignLegacyNoteType[]): void { this.active.updateCampaignList(campaignNotes); }
  updateCampaignGroupList(campaignGroupNotes: CampaignGroupNoteType[]): void { this.active.updateCampaignGroupList(campaignGroupNotes); }

  // 新的接口
  sendAction(action: CampaignActionType): void { this.active.sendAction(action); }
  sendEnrollmentCreate(campaignId: string): void { this.active.sendEnrollmentCreate(campaignId); }
  sendOfferClaim(offerId: string): void { this.active.sendOfferClaim(offerId); }

  // 新舊共用的部分
  private readonly maxRecordedClickedCards = 20;
  /** 紀錄已點擊的活動群組 */
  public recordClickedGroup(groupId: string) {
    // 記錄點擊過的活動卡片, 點擊過的不會重複紀錄 (同時包含userId是為了區分不同使用者的點擊紀錄，避免同一個活動卡片被不同使用者點擊後互相影響)
    const key = `${this.userId()}_${groupId}`;
    if (!(this.storage.campaignGroupsClicked || []).includes(key)) {
      this.storage.campaignGroupsClicked = [...(this.storage.campaignGroupsClicked || []), key];
    }
    // 只保留最近的maxRecordedClickedCards筆點擊紀錄，避免storage佔用過多空間
    if ((this.storage.campaignGroupsClicked || []).length > this.maxRecordedClickedCards) {
      this.storage.campaignGroupsClicked = (this.storage.campaignGroupsClicked || []).slice(-this.maxRecordedClickedCards);
    }
  }

  /** 是否有尚未點開過的新活動群組 */
  public haveNewGroup = computed(() => {
    const clicked = this.storage.campaignGroupsClickedSignal() || [];
    // 只要有一個活動群組的ID不在clicked裡面就算有新的活動群組, key = `${this.userId()}_${groupId}`;
    return this.campaignGroupList().some(group => {
      const key = `${this.userId()}_${group.id}`;
      return !clicked.includes(key);
    });
  });

  /** 檢查指定的活動群組是否已被點擊過 */
  public checkNewGroup(groupId: string): boolean {
    const key = `${this.userId()}_${groupId}`;
    return !(this.storage.campaignGroupsClicked || []).includes(key);
  }

  /** 清除「活動群組已點開」的紀錄 */
  public cleanClickedGroups() {
    this.storage.campaignGroupsClicked = null;
  }
}
