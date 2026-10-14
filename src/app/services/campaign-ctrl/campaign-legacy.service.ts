import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { CampaignGroupNoteType, CampaignLegacyNoteType, PromoEnum } from './campaign-info-msg.interface';
import { CampaignUnderConditionType, CampaignWithdrawFailedType, CampaignFailFullyRedeemedType,  CampaignGroup, CampaignOnGoingFreeBonusType, CampaignOnGoingFreeSpinType, CampaignPopupId, CampaignPopupMessageType, CampaignPopupResult, CampaignReceivedFreeBonusType, CampaignReceivedFreeSpinType, CampaignRequiredTurnoverType, CampaignSucessFullyClaimType, CampaignWithdrawSuccessType, CampaignType, CampaignStatus, PromoCodeExchangeTypeEnum, CampaignFreeSpinWithdrawMaximumType, CampaignJoinedSuccessType, CampaignOfferClaimSuccessType, CampaignOfferClaimFailType, CampaignWaitToJoinType, CampaignReceivedType, CampaignOnGoingType } from './campaign-ctrl.interface';
import { formatCampaignList } from './campaign-legacy.function';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { PlayerWalletService } from '../player-wallet/player-wallet.service';
import { LoginResult } from '../../shared/Protobuf/proto-ext';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';
import { Subject } from 'rxjs';
import { ClientSessionService } from '../client-session/client-session.service';
import { environment } from '../../../environments/app-environment';
import { StorageCtrlService } from '../storage-ctrl/storage-ctrl.service';
import { LoggerService } from '../logger/logger.service';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { CampaignActionType } from './campaign-action.interface';
import { CampaignOperation } from './campaign-operation.interface';

/** 處理舊版活動相關的資料 */
@Injectable({ providedIn: 'root' })
export class CampaignLegacyService implements CampaignOperation  {
  protected api = inject(AppInterfaceService);
  protected wallet = inject(PlayerWalletService);
  protected game =  inject(GameIframeCtrlService);
  protected session = inject(ClientSessionService);
  protected storage = inject(StorageCtrlService);
  protected logger = inject(LoggerService);
  protected imgFolder = '/ap-promo-images/';

  /** campaign popup是否啟動*/
  private readonly _popupActivated = signal(false);
  /** campaign popup是否啟動*/
  public readonly popupActivated = this._popupActivated.asReadonly();

  /** campaign popup 是否啟用 */
  public readonly popupEnabled = computed(() => { return true; });

  /** promo/campaign 訊息彈窗目前是否顯示中 */
  private readonly _popupMessageVisible = signal(false);
  /** promo/campaign 訊息彈窗目前是否顯示中 */
  public readonly popupMessageVisible = this._popupMessageVisible.asReadonly();

  /** 設定 campaign popup 是否啟動 */
  public setPopupActivated(value: boolean): void {
    this._popupActivated.set(value);
  }

  /** 設定 promo/campaign 訊息彈窗是否顯示中 */
  public setPopupMessageVisible(value: boolean): void {
    this._popupMessageVisible.set(value);
  }

  /** 所有Campaign */
  protected _campaignList = signal<CampaignType[]>([]);
  /** 所有Campaign */
  public readonly campaignList = this._campaignList.asReadonly();
  /** 所有Campaign Group */
  protected _campaignGroupList = signal<CampaignGroup[]>([]);
  /** 所有Campaign Group */
  public readonly campaignGroupList = this._campaignGroupList.asReadonly();

  /** 目前選取的活動的ID */
  protected _currentCampaignId = signal<string | null>(null);
  /** 目前選取的活動的ID */
  protected readonly currentCampaignId = this._currentCampaignId.asReadonly();
  /** 目前選取的活動 */
  public readonly currentCampaign = computed(() => {
    const id = this.currentCampaignId();
    return this.campaignList().find(c => c.id === id) || null;
  });
  /** Campaign運行中 */
  public readonly isRunning = computed(() => !!this.currentCampaign());
  /** Free Spin 運行中 */
  public readonly isFreeSpinRunning = computed(() => this.currentCampaign()?.displayType === 'freeSpins');
  /** Free Bonus 運行中 */
  public readonly isFreeBonusRunning = computed(() => this.currentCampaign()?.displayType === 'freeBonus');




  // 以下是各種事件的Subject和Observable
  protected activatedCampaignSubject = new Subject<CampaignType | null>();
  /** 當有活動被啟動的事件, 會帶入被啟動的活動, 沒有活動被啟動(取消選擇)的話會帶入null */
  public get activatedCampaign$() { return this.activatedCampaignSubject.asObservable(); }

  /** 收到underCondition狀態的Campaign */
  protected underConditionSubject = new Subject<CampaignUnderConditionType>();
  /** 收到underCondition狀態的Campaign */
  public get underCondition$() { return this.underConditionSubject.asObservable();}
  
  protected receivedFreeBonusSubject = new Subject<CampaignReceivedFreeBonusType>();
  public get receivedFreeBonus$() { return this.receivedFreeBonusSubject.asObservable(); }

  protected receivedFreeSpinSubject = new Subject<CampaignReceivedFreeSpinType>();
  public get receivedFreeSpin$() { return this.receivedFreeSpinSubject.asObservable(); }

  protected onGoingFreeBonusSubject = new Subject<CampaignOnGoingFreeBonusType>();
  public get onGoingFreeBonus$() { return this.onGoingFreeBonusSubject.asObservable(); }

  protected onGoingFreeSpinSubject = new Subject<CampaignOnGoingFreeSpinType>();
  public get onGoingFreeSpin$() { return this.onGoingFreeSpinSubject.asObservable(); }

  /** 舊版不使用合併後的一般 Campaign 訊息, 只為了符合 CampaignOperation 介面, 不會觸發 */
  protected receivedCampaignSubject = new Subject<CampaignReceivedType>();
  public get receivedCampaign$() { return this.receivedCampaignSubject.asObservable(); }

  /** 舊版不使用合併後的一般 Campaign 訊息, 只為了符合 CampaignOperation 介面, 不會觸發 */
  protected onGoingCampaignSubject = new Subject<CampaignOnGoingType>();
  public get onGoingCampaign$() { return this.onGoingCampaignSubject.asObservable(); }

  protected requiredTurnoverSubject = new Subject<CampaignRequiredTurnoverType>();
  /** 當有free spin需要達到流水需求, 轉成free bonus */
  public get requiredTurnover$() { return this.requiredTurnoverSubject.asObservable(); }

  protected freeSpinWithdrawMaximumSubject = new Subject<CampaignFreeSpinWithdrawMaximumType>();
  /** 當free spin達到領取上限的事件 */
  public get freeSpinWithdrawMaximum$() { return this.freeSpinWithdrawMaximumSubject.asObservable(); }

  protected withdrawFailedSubject = new Subject<CampaignWithdrawFailedType>();
  public get withdrawFailed$() { return this.withdrawFailedSubject.asObservable(); }

  protected withdrawSuccessSubject = new Subject<CampaignWithdrawSuccessType>();
  public get withdrawSuccess$() { return this.withdrawSuccessSubject.asObservable(); }

  protected sucessFullyClaimSubject = new Subject<CampaignSucessFullyClaimType>();
  public get sucessFullyClaim$() { return this.sucessFullyClaimSubject.asObservable(); }

  protected failFullyRedeemedSubject = new Subject<CampaignFailFullyRedeemedType>();
  public get failFullyRedeemed$() { return this.failFullyRedeemedSubject.asObservable(); }

  protected openEventCenterCampaignSubject = new Subject<string>();
  public get openEventCenterCampaign$() { return this.openEventCenterCampaignSubject.asObservable(); }

  protected joinedSuccessSubject = new Subject<CampaignJoinedSuccessType>();
  /** 成功加入活動 */
  public get joinedSuccess$() { return this.joinedSuccessSubject.asObservable(); }

  protected offerClaimSuccessSubject = new Subject<CampaignOfferClaimSuccessType>();
  /** 成功領取活動獎勵 */
  public get offerClaimSuccess$() { return this.offerClaimSuccessSubject.asObservable(); }

  protected offerClaimFailSubject = new Subject<CampaignOfferClaimFailType>();
  /** 領取活動獎勵失敗 */
  public get offerClaimFail$() { return this.offerClaimFailSubject.asObservable(); }

  protected waitToJoinSubject = new Subject<CampaignWaitToJoinType>();
  /** 等待加入活動 */
  public get waitToJoin$() { return this.waitToJoinSubject.asObservable(); }

  protected readonly userId = computed(() => this.api.loginResultNote()?.nickname ?? '');

  public  readonly codeExchangeType = signal(PromoCodeExchangeTypeEnum.OpenExchangeAndQR);

  constructor() {
    console.log('CampaignLegacyService initialized');
    this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
    this.api.loginResult$.subscribe(result => {
      this.updateLoginResult(result);
    });

    // 遊戲啟動後 PopupComponent會打開popupActivated處理popup的訊息
    effect(() => {
      if (this.popupActivated()) {
        untracked( () => {
          // 第一次處理訊息才會使用combine=true的方式
          const result: CampaignPopupResult = this.processPopupMessages(this.api.loginResult()?.note.campaignlist ?? [], true);
          this.logger.campaignLog("Process campaign popup message on login", result);
          // 打開最後一則pupup訊息的group
          if (result.relatedGroupList.length > 0) {
            // relatedGroupList最後一個groupId
            const endGroupId = result.relatedGroupList[result.relatedGroupList.length - 1].id;
            this.openEventCenterCampaignSubject.next(endGroupId);
          }
        });
      }
    });

    // Spin結果可能會帶新的Campaign資訊，更新之
    this.api.spinResult$.subscribe((result) => {
      this.setCampaignList(result.note?.campaignlist ?? []);
      this.setCampaignGroupList(result.note?.campaign_group_list ?? []);
      // 等演出完成之後, 處理popup的訊息
      const sub = this.game.readyForSpin$.subscribe(() => {
        const messages = this.processPopupMessages(result.note?.campaignlist ?? []);
        this.logger.campaignLog("Process campaign popup message on spin result", messages);
        // 如果有receivedFreeBonus或receivedFreeSpin的訊息, 就打開最後一個相關的group
        const list = [CampaignPopupId.ReceivedFreeBonus, CampaignPopupId.ReceivedFreeSpin];
        if (messages.popupList.some(m => list.includes(m.id as CampaignPopupId))) {
          const relatedGroups = messages.relatedGroupList;
          if (relatedGroups.length > 0) {
            const endGroupId = relatedGroups[relatedGroups.length - 1].id;
            this.openEventCenterCampaignSubject.next(endGroupId);
          }
        }
        sub.unsubscribe();
      });
      this.logger.campaignLog("Receive campaignlist", result.note?.campaignlist);
    });

    effect(() => {
      // 當currentCampaignId改變的時候, 呼叫updateBetList來更新Bet List
      this.currentCampaignId();
      untracked(() => { this.updateBetList(); });
    });

    this.requiredTurnover$.subscribe(() => {
      // 當有free spin需要達到流水需求, 轉成free bonus, 就更新Bet List
      this.updateBetList();
    });

    if (!environment.production) {
      (window as any).campaign = this;
    }
  }

  /** 是否要顯示Campaign在event center的tab條件 */
  public showTab = computed(() => {
    return true;
  });


  protected updateLoginResult(result: LoginResult | null) {
    if (!result) return;
    this.setCampaignList(result.note?.campaignlist ?? []);
    this.setCampaignGroupList(result.note?.campaign_group_list ?? []);

    // 更新codeExchangeType
    this.codeExchangeType.set(result.note?.coupon ?? PromoCodeExchangeTypeEnum.OpenExchangeAndQR);
  }

  /** 設定現在使用中的活動錢包, null表示沒有活動被選擇 */
  public setCurrentId(id: string | null) {
    // 如果id是null, 就表示活動取消選擇
    if (!id) {
      const preId = this.currentCampaignId(); 
      // 如果之前沒有活動, 就不需要更新Bet
      if (!preId) return;

      this._currentCampaignId.set(null);
      this.wallet.campaignSetting.set(null);

      // 發出Campaign被取消選擇的事件
      this.activatedCampaignSubject.next(null);
      this.game.send(createApWebMessage("UseCampaign", { campaignId: null }));
      return;
    }
      
    const campaign = this.campaignList().find(c => c.id === id);

    // campaign不能使用buy feature跟buy chance
    this.wallet.updateSpinMode(null);

    // 如果找不到對應的活動, 就不做任何事情
    if (!campaign) return;

    // 如果活動是underCondition或completed狀態, 不讓他被選擇, 不做任何事情
    if (campaign.status === 'underCondition') return;
    if (campaign.status === 'completed') return;

    this._currentCampaignId.set(id);
    
    // 同時也要設定到UserProfile
    this.wallet.campaignSetting.set(this.currentCampaign());

    // 發送Campaign被選擇的事件
    this.activatedCampaignSubject.next(campaign);
    this.game.send(createApWebMessage("UseCampaign", {
      campaignId: id,
      type: campaign.displayType,
      campaignWalletId: this.currentCampaign()?.walletId
    }));
  

    if (campaign.displayType === 'freeBonus') {
      // 如果是Free Bonus, 把bet設定為BetLevel最小的那個
      const betList = this.wallet.betList();
      if (betList && betList.length > 0) {
        this.wallet.updateBet(betList[0]);
      }
    }
  }

  /** 更新campaigns, 新的ID就加入, 存在的ID就取代 */
  protected updateCampaigns(campaigns: CampaignType[]) {
    this._campaignList.update(list => {
      const updated = [...list];
      for (const campaign of campaigns) {
        const existingIndex = updated.findIndex((c) => c.id === campaign.id);
        if (existingIndex === -1) {
          updated.push(campaign);
        } else {
          updated[existingIndex] = campaign;
        }
      }
      return updated;
    });

    // 同時也要更新到UserProfile
    this.wallet.campaignSetting.set(this.currentCampaign());
  }

  /** 從server note 更新CampaignList, 新的ID就加入, 存在的ID就取代 */
  public updateCampaignList(campaignNotes: CampaignLegacyNoteType[]) {
    const campaignAll = formatCampaignList(campaignNotes);
    const campaigns = [...campaignAll.freeBonus, ...campaignAll.freeSpins];
    this.updateCampaigns(campaigns);
  }

  /** 從server note 設定CampaignList, 直接覆蓋現有的CampaignList */
  protected setCampaignList(campaignNotes: CampaignLegacyNoteType[]) {
    const campaignAll = formatCampaignList(campaignNotes);
    const campaigns = [...campaignAll.freeBonus, ...campaignAll.freeSpins];
    this._campaignList.set(campaigns);

    // 同時也要更新到UserProfile
    this.wallet.campaignSetting.set(this.currentCampaign());
  }

  /** 從server note 更新CampaignGroupList, 新的ID就加入, 存在的ID就取代 */
  public updateCampaignGroupList(campaignGroupNotes: CampaignGroupNoteType[]) {
    // 新的ID加入，存在的ID就更新title, image, description, weight, endTime
    const updated = [...this.campaignGroupList()];
    for (const groupNote of campaignGroupNotes) {
      // 在this.campaignList有對應的id, 才會放進list
      const list = groupNote.campaign_id_list.filter(campaignId => this.campaignList().some(c => c.id === campaignId));
      if (list.length === 0)
        continue; // 如果這個活動群組裡面沒有任何有效的活動, 就不顯示這個活動群組
      const existingIndex = updated.findIndex((g) => g.id === groupNote.group_id);
      // 如果list為空
      const emptyList = list.length === 0;
      // 如果這個活動群組裡面的活動都是completed, 就把這個活動群組設為invisible, 反之則設為visible
      const allCompletely = this.campaignList().filter(c => groupNote.campaign_id_list.includes(c.id)).every(c => c.status === 'completed');

      const newGroup: CampaignGroup = {
        visible: !emptyList && !allCompletely,
        id: groupNote.group_id,
        title: groupNote.title,
        image: this.session.assetUrl + this.imgFolder + groupNote.banner_url,
        campaignIdList: list,
        description: groupNote.description,
        weight: groupNote.weight,
        endTime: Math.max(...list.map(campaignId => {
          const campaign = this.campaignList().find(c => c.id === campaignId);
          return campaign ? campaign.endTime : 0;
        }))
      };
      if (existingIndex === -1) {
        updated.push(newGroup);
      } else {
        // 必須先把舊的campaignIdList裡面不重複campaignId的更新到newGroup的campaignIdList
        const existingGroup = updated[existingIndex];
        const existingCampaignIdList = existingGroup.campaignIdList;
        const newCampaignIdList = newGroup.campaignIdList;
        // 合併 existingCampaignIdList 和 newCampaignIdList，去除重複
        const combinedCampaignIdList = Array.from(new Set([...existingCampaignIdList, ...newCampaignIdList]));
        newGroup.campaignIdList = combinedCampaignIdList;
        updated[existingIndex] = newGroup;
      }
    }

    // 按照weight從大到小排序
    updated.sort((a, b) => b.weight - a.weight);

    this._campaignGroupList.set(updated);

    // 更新campaign list裡面的groupId
    this._campaignList.update(list => {
      return list.map(campaign => {
        const group = updated.find(g => g.campaignIdList.includes(campaign.id));
        return { ...campaign, groupId: group ? group.id : null };
      });
    });
  }

  /** 從server note 設定CampaignGroupList, 直接覆蓋現有的CampaignGroupList */
  protected setCampaignGroupList(campaignGroupNotes: CampaignGroupNoteType[]) {
    const groups: CampaignGroup[] = [];
    for (const groupNote of campaignGroupNotes) {
      // 在this.campaignList有對應的id, 才會放進list
      const list = groupNote.campaign_id_list.filter(campaignId => this.campaignList().some(c => c.id === campaignId));
      if (list.length === 0) continue; // 如果這個活動群組裡面沒有任何有效的活動, 就不顯示這個活動群組
      const allCompletely = this.campaignList().filter(c => groupNote.campaign_id_list.includes(c.id)).every(c => c.status === 'completed');
      const newGroup: CampaignGroup = {
        visible: !allCompletely,
        id: groupNote.group_id,
        title: groupNote.title,
        description: groupNote.description,
        image: this.session.assetUrl + this.imgFolder + groupNote.banner_url,
        campaignIdList: groupNote.campaign_id_list,
        weight: groupNote.weight,
        endTime: Math.max(...groupNote.campaign_id_list.map(campaignId => {
          const campaign = this.campaignList().find(c => c.id === campaignId);
          return campaign ? campaign.endTime : 0;
        }))
      };
      groups.push(newGroup);
    }

    // 按照weight從大到小排序
    groups.sort((a, b) => b.weight - a.weight);

    this._campaignGroupList.set(groups);

    // 更新campaign list裡面的groupId
    this._campaignList.update(list => {
      return list.map(campaign => {
        const group = groups.find(g => g.campaignIdList.includes(campaign.id));
        return {...campaign, groupId: group ? group.id : null };
      });
    });  
  }

  /** 觸發popup訊息, 回傳是否有有效訊息 */
  protected processPopupMessages(campaignNotes: CampaignLegacyNoteType[], combine: boolean = false): CampaignPopupResult {
    const result: CampaignPopupResult= { popupList: [], relatedGroupList: [] };
    for (const campaignNote of campaignNotes) {
      if (campaignNote.type === PromoEnum.CashDrop) {
        continue; // CashDrop沒有popup訊息;
      }

      const popupMsg = campaignNote.popup_msg;
      const id = campaignNote.campaign_id;

      /** 這兩個情況不考慮處理
       * FailFullyRedeemed
       * FreeSpinFullyClaim
       * FreeBonusFullyClaim
       */
      if (popupMsg === CampaignPopupId.FailFullyRedeemed ||
        popupMsg === CampaignPopupId.FreeSpinFullyClaim ||
        popupMsg === CampaignPopupId.FreeBonusFullyClaim) {
        continue;
      }

      // pupupMsg是數字且大於0才是有效訊息
      if (typeof popupMsg === 'number' && popupMsg > 0) {
        const pupup: CampaignPopupMessageType = {
          id: popupMsg,
          campaignList: this.campaignList().filter(c => c.id === id)
        };
        // 如果這個活動的ID在campaign list裡找不到, 就不顯示這個popup
        if (pupup.campaignList.length === 0) continue;

        /** 這些popup訊息會合併, 其他的popup訊息不會合併
         *  ReceivedFreeBonus    = 1,
            OnGoingFreeBonus     = 4,
            ReceivedFreeSpin     = 13,
            RequiredTurnover     = 14,
            OnGoingFreeSpin      = 17,
            Claimed              = 21,
         */
        const combinePopupIds = [
          CampaignPopupId.ReceivedFreeBonus,
          CampaignPopupId.OnGoingFreeBonus,
          CampaignPopupId.ReceivedFreeSpin,
          CampaignPopupId.RequiredTurnover,
          CampaignPopupId.OnGoingFreeSpin,
          CampaignPopupId.UnderCondition,
        ];

        if (combine && combinePopupIds.includes(popupMsg as CampaignPopupId)) {
          // 如果這個popup的ID已經在result裡面, 就不重複加入, 更新這個popup裡面的campaignList
          const existingPopup = result.popupList.find(p => p.id === popupMsg);
          if (existingPopup) {
            existingPopup.campaignList = Array.from(new Set([...existingPopup.campaignList, ...pupup.campaignList]));
          } else {
            result.popupList.push(pupup);
          }
        }
        else { // 不合併, 直接加入
          result.popupList.push(pupup);
        }
      }
    }

    /**
     * 先按照這順序
     * 1. Success
     * 其餘的popup訊息按照原本的順序
     */

    const sortOrder = [
      CampaignPopupId.WithdrawSuccess,
    ];
    result.popupList.sort((a, b) => {
      const aIndex = sortOrder.indexOf(a.id as CampaignPopupId);
      const bIndex = sortOrder.indexOf(b.id as CampaignPopupId);
      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

    // 觸發事件
    result.popupList.forEach((message: CampaignPopupMessageType) => {
      switch (message.id as CampaignPopupId) {
        case CampaignPopupId.UnderCondition:
          this.underConditionSubject.next(message as CampaignUnderConditionType);
          break;
        case CampaignPopupId.ReceivedFreeBonus:
          this.receivedFreeBonusSubject.next(message as CampaignReceivedFreeBonusType);
          break;
        case CampaignPopupId.ReceivedFreeSpin:
          this.receivedFreeSpinSubject.next(message as CampaignReceivedFreeSpinType);
          break;
        case CampaignPopupId.OnGoingFreeBonus:
          this.onGoingFreeBonusSubject.next(message as CampaignOnGoingFreeBonusType);
          break;
        case CampaignPopupId.OnGoingFreeSpin:
          this.onGoingFreeSpinSubject.next(message as CampaignOnGoingFreeSpinType);
          break;
        case CampaignPopupId.RequiredTurnover:
          this.requiredTurnoverSubject.next(message as CampaignRequiredTurnoverType);
          break;
        case CampaignPopupId.FreeSpinWithdrawMaximum:
          this.freeSpinWithdrawMaximumSubject.next(message as CampaignFreeSpinWithdrawMaximumType);
          break;
        case CampaignPopupId.WithdrawFailed:
          this.withdrawFailedSubject.next(message as CampaignWithdrawFailedType);
          break;
        case CampaignPopupId.WithdrawSuccess:
          this.withdrawSuccessSubject.next(message as CampaignWithdrawSuccessType);
          break;
        case CampaignPopupId.SucessFullyClaim:
          this.sucessFullyClaimSubject.next(message as CampaignSucessFullyClaimType);
          break;
        case CampaignPopupId.FailFullyRedeemed:
          this.failFullyRedeemedSubject.next(message as CampaignFailFullyRedeemedType);
          break;
      }
      // 列出此message相關的活動群組
      const groups = this.campaignGroupList().filter(group => group.campaignIdList.some(campaignId => message.campaignList.some(c => c.id === campaignId)));
      // 只把沒有重複的活動群組加進去
      groups.forEach(group => {
        if (!result.relatedGroupList.some(g => g.id === group.id)) {
          result.relatedGroupList.push(group);
        }
      });
    });
    return result;
  }

  /** 遊戲演出完成之後要處理的事情 */
  protected onReadyForSpin() {
    const current = this.currentCampaign();
    if (!current) return;
    
    // 如果目前的活動是hidden或completed狀態, 就取消選擇
    if (current.status === 'underCondition' || current.status === 'completed') {
      this.setCurrentId(null);
    }
  }

  /** 更新Bet列表, 更新時機點是切換campaign跟當free spin轉換成free bonus時 */
  protected updateBetList() {
    // 如果沒有活動設定, 就設定campaignBetList null
    if (!this.currentCampaign()) {
      this.wallet.campaignBetList.set(null);
      // 因為Bet List有更新了, 所以把Bet更新成baseBetList的第一個
      this.wallet.updateBet(this.wallet.baseBetList()[0]);
      return;
    };

    const campaign = this.currentCampaign()!;

    // 如果是Free Spins活動, 就回傳活動裡面設定的Bet列表
    if (campaign.displayType === 'freeSpins' && campaign.type === 'freeSpins') {
      this.wallet.campaignBetList.set([campaign.spinBet]);
      this.wallet.updateBet(campaign.spinBet);
      return;
    }

    // 如果是Free Bonus活動, 就回傳整個Bet列表, 但是超過bonusWalletMaxBetIndex的部分要過濾掉
    if (campaign.displayType === 'freeBonus') {
      const maxIndex = this.wallet.bonusWalletMaxBetIndex();
      if (maxIndex === null) {
        this.wallet.campaignBetList.set(this.wallet.baseBetList());
      }
      else {
        this.wallet.campaignBetList.set(this.wallet.baseBetList().filter((bet, index) => index <= maxIndex));
      }
      // 最後因為BetList有更新 所以把Bet更新成baseBetList的第一個
      this.wallet.updateBet(this.wallet.baseBetList()[0]);
      return;
    }
  }

  public sendAction(action: CampaignActionType) {
    
  }

  public sendEnrollmentCreate(campaignId: string) {

  }

  public sendOfferClaim(offerId: string) {
    
  }
}
