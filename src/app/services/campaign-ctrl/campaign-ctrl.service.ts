import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { CampaignGroupNoteType, CampaignLegacyNoteType, PromoEnum } from './campaign-info-msg.interface';
import { CampaignUnderConditionType, CampaignWithdrawFailedType, CampaignFailFullyRedeemedType,  CampaignGroup, CampaignOnGoingFreeBonusType, CampaignOnGoingFreeSpinType, CampaignPopupId, CampaignPopupMessageType, CampaignPopupResult, CampaignReceivedFreeBonusType, CampaignReceivedFreeSpinType, CampaignRequiredTurnoverType, CampaignSucessFullyClaimType, CampaignWithdrawSuccessType, CampaignType, CampaignStatus, PromoCodeExchangeTypeEnum, CampaignFreeSpinWithdrawMaximumType, CampaignJoinedSuccessType, CampaignOfferClaimSuccessType, CampaignOfferClaimFailType, CampaignWaitToJoinType, CampaignReceivedType, CampaignOnGoingType } from './campaign-ctrl.interface';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';
import { delay, Subject } from 'rxjs';
import { ClientSessionService } from '../client-session/client-session.service';
import { StorageCtrlService } from '../storage-ctrl/storage-ctrl.service';
import { LoggerService } from '../logger/logger.service';
import { CampaignActionEnrollmentCreate, CampaignActionEnrollmentCreateResponse, CampaignActionOfferClaim, CampaignActionOfferClaimResponse, CampaignActionPanelGet, CampaignActionPanelGetResponse, CampaignActionResponseType, CampaignActionRewardWithdraw, CampaignActionRewardWithdrawResponse, CampaignActionType } from './campaign-action.interface';
import { addCampaignConditionProgress, addCampaignSpinCountProgress, addCampaignWithdrawalProgress, formatCampaignOffer, isCampaignConditionMet, formatCampaignPanelGroups, formatCampaignPanelOffers, offerAmount, refreshCampaignGroups } from './campaign-ctrl.function';
import { CampaignOperation } from './campaign-operation.interface';
import { LoginResult, SpinResult } from '../../shared/Protobuf/proto-ext';
import { PlayerWalletService } from '../player-wallet/player-wallet.service';
import { environment } from '../../../environments/app-environment.prod';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { WalletSpinResult } from '../player-wallet/player-wallet.interface';
import { calc } from '../player-wallet/player-wallet.function';

/** 處理獎勵相關的資料 */
@Injectable({ providedIn: 'root' })
export class CampaignCtrlService implements CampaignOperation  {
  protected api = inject(AppInterfaceService);
  protected game =  inject(GameIframeCtrlService);
  protected wallet = inject(PlayerWalletService)
  protected session = inject(ClientSessionService);
  protected storage = inject(StorageCtrlService);
  protected logger = inject(LoggerService);

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

  /** status = waitingToJoin的Campaigns */
  protected readonly waitToJoinCampaigns = computed<CampaignType[]>(() => this.campaignList().filter(c => c.status === 'waitingToJoin'));
  /** status = underCondition的Campaigns */
  protected readonly underConditionCampaigns = computed<CampaignType[]>(() => this.campaignList().filter(c => c.status === 'underCondition'));
  /** status = inProgress的Campaigns */
  protected readonly inProgressCampaigns = computed<CampaignType[]>(() => this.campaignList().filter(c => c.status === 'inProgress'));
  /** status = inProgress 且 progressStatus = claimable 的 Campaigns */
  protected readonly claimableCampaigns = computed<CampaignType[]>(() => this.inProgressCampaigns().filter(c => c.progressStatus === 'claimable'));
  /** status = inProgress 且 progressStatus = granted 的 Campaigns */
  protected readonly grantedCampaigns = computed<CampaignType[]>(() => this.inProgressCampaigns().filter(c => c.progressStatus === 'granted'));
  /** status = inProgress 且 progressStatus = inPlay 的 Campaigns */
  protected readonly inPlayCampaigns = computed<CampaignType[]>(() => this.inProgressCampaigns().filter(c => c.progressStatus === 'inPlay'));
  /** status = readyToWithdraw 的 Campaigns */
  protected readonly readyToWithdrawCampaigns = computed<CampaignType[]>(() => this.campaignList().filter(c => c.status === 'readyToWithdraw'));

  /** 正在等待 Reward Withdraw 回應的請求, 一次只處理一個 */
  protected pendingWithdraw: { campaignId: string; commandId: string } | null = null;


  // 注意: 以下讀取 localStorage(非 signal), 不能用 computed, 否則標記已顯示後不會重新計算, 造成訊息重複顯示
  /** 尚未顯示過的等待加入活動的 Campaigns */
  protected waitToJoinNoShownCampaigns(): CampaignType[] { return this.waitToJoinCampaigns().filter(c => !this.storage.isCampaignMessageShownToday('joined', c.id)); }
  /** 尚未顯示過的 underCondition 的 Campaigns */
  protected underConditionNoShownCampaigns(): CampaignType[] { return this.underConditionCampaigns().filter(c => !this.storage.isCampaignMessageShownToday('underCondition', c.id)); }
  /** 尚未顯示過的需要提示收到新campaign 的 Campaigns, 包含 claimableCampaigns */
  protected receivedNoShownCampaigns(): CampaignType[] { return this.claimableCampaigns().filter(c => !this.storage.isCampaignMessageShownToday('received', c.id)); }
  /** 尚未顯示過的正在遊玩 的 Campaigns, 包含 inPlayCampaigns 跟 grantedCampaigns */
  protected onGoingNoShownCampaigns(): CampaignType[] { return [...this.grantedCampaigns(), ...this.inPlayCampaigns() ].filter(c => !this.storage.isCampaignMessageShownToday('onGoing', c.id)); }
  

  // 以下是各種事件的Subject和Observable
  protected activatedCampaignSubject = new Subject<CampaignType | null>();
  /** 當有活動被啟動的事件, 會帶入被啟動的活動, 沒有活動被啟動(取消選擇)的話會帶入null */
  public get activatedCampaign$() { return this.activatedCampaignSubject.asObservable(); }

  protected underConditionSubject = new Subject<CampaignUnderConditionType>();
  public get underCondition$() { return this.underConditionSubject.asObservable();}
  
  protected receivedFreeBonusSubject = new Subject<CampaignReceivedFreeBonusType>();
  public get receivedFreeBonus$() { return this.receivedFreeBonusSubject.asObservable(); }

  protected receivedFreeSpinSubject = new Subject<CampaignReceivedFreeSpinType>();
  public get receivedFreeSpin$() { return this.receivedFreeSpinSubject.asObservable(); }

  protected onGoingFreeBonusSubject = new Subject<CampaignOnGoingFreeBonusType>();
  public get onGoingFreeBonus$() { return this.onGoingFreeBonusSubject.asObservable(); }

  protected onGoingFreeSpinSubject = new Subject<CampaignOnGoingFreeSpinType>();
  public get onGoingFreeSpin$() { return this.onGoingFreeSpinSubject.asObservable(); }

  protected receivedCampaignSubject = new Subject<CampaignReceivedType>();
  /** 收到一般 Campaign 的事件, 會合併今天尚未顯示過的 received campaigns */
  public get receivedCampaign$() { return this.receivedCampaignSubject.asObservable(); }

  protected onGoingCampaignSubject = new Subject<CampaignOnGoingType>();
  /** 一般 Campaign 進行中提醒事件, 會合併今天尚未顯示過的 inPlay campaigns */
  public get onGoingCampaign$() { return this.onGoingCampaignSubject.asObservable(); }

  protected requiredTurnoverSubject = new Subject<CampaignRequiredTurnoverType>();
  /** 當有free spin需要達到流水需求, 轉成free bonus */
  public get requiredTurnover$() { return this.requiredTurnoverSubject.asObservable(); }

  protected freeSpinWithdrawMaximumSubject = new Subject<CampaignFreeSpinWithdrawMaximumType>();
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

  public readonly codeExchangeType = signal(PromoCodeExchangeTypeEnum.OpenExchangeAndQR);

  constructor() {
    // 監聽登入結果，當登入成功之後延遲0.1秒再呼叫 onLoginResult
    this.api.loginResult$.pipe(delay(100)).subscribe((result: LoginResult) => this.onLoginResult(result));
    this.api.campaign$.subscribe((response: CampaignActionResponseType) => this.onCampaignActionResponse(response));
    this.api.spinResult$.subscribe((result: SpinResult) => this.onSpinResult(result));
    this.game.readyForSpin$.subscribe(() => this.onReadyForSpin());

    if (!environment.production) {
      (window as any).campaign = this;
    }

    effect(() => {
      // 檢查是否有彈窗被激活
      if (this.popupActivated()) {
        untracked(() => {
          this.processLoginMessage();
        });
      }
    });

    effect(() => {
      // 同步更新當前活動到錢包
      const currentCampaign = this.currentCampaign();
      untracked(() => {
        this.wallet.campaignSetting.set(currentCampaign);
      });
    })

    effect(() => {
      // 當有readyToWithdraw的活動時, 做一些處理
      const readyToWithdraw = this.readyToWithdrawCampaigns();
      if (readyToWithdraw.length > 0) {
        // 從第一個readyToWithdrawCampaigns開始處理
        untracked(() => this.processReadyToWithdraw(readyToWithdraw[0]));
      }
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

  }

  /** 是否要顯示Campaign在event center的tab條件 */
  public showTab = computed(() => { return true;});

  /** 設定現在使用中的活動錢包, null表示沒有活動被選擇 */
  public setCurrentId(id: string | null) {
    // 如果id是null, 就表示活動取消選擇
    if (!id) {
      const preId = this.currentCampaignId(); 
      // 如果之前沒有活動, 就不需要更新Bet
      if (!preId) return;

      this._currentCampaignId.set(null);

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

    // 發送Campaign被選擇的事件
    this.activatedCampaignSubject.next(campaign);
    
    this.game.send(createApWebMessage("UseCampaign", { 
      campaignId: this.currentCampaign()?.betId ?? null,
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

  /** 
   * 處理登入結果
   * @param result 登入結果
   */
  protected onLoginResult(result: LoginResult) {
    const offers = result.note.campaign_panel?.offers ?? [];
    const groups = result.note.campaign_panel?.groups ?? [];
    const { freeBonus, freeSpins } = formatCampaignPanelOffers(offers);
    const campaigns: CampaignType[] = [...freeBonus, ...freeSpins];
    this._campaignList.set(campaigns);

    const formattedGroups = formatCampaignPanelGroups(groups, campaigns, this.session.assetUrl);
    this._campaignGroupList.set(formattedGroups);

    // 如果campaignList是空的, 會跟後端額外請求一次
    if (campaigns.length === 0) {
      this.sendPanelGet();
    }
  }

  protected onSpinResult(result: SpinResult) {
    const turnover = this.wallet.realBet();

    // 如果有當前的campaign, 先更新它的settled balance 並更新withdrawal進度,
    if (this.currentCampaign()) {
      const currentCampaign = this.currentCampaign()!;
      // 更新 current campaign free bonus 的 withdrawal 進度
      if (currentCampaign.status === 'inProgress' && currentCampaign.type === 'freeBonus') {
        // 更新 settled balance
        const settledBalance = calc.s2c(result.note.settled_bonus_wallet?.balance ?? 0);
        currentCampaign.balance = settledBalance;
        const updatedCampaign = addCampaignWithdrawalProgress(currentCampaign, turnover, Date.now());
        // 開始判斷提領條件
        if (updatedCampaign.withdrawal) {
          const { turnoverThreshold, turnoverRemaining, balanceThreshold } = updatedCampaign.withdrawal;
          // betList最小值, betList為空時為Infinity, 不判斷失敗
          const minBet = Math.min(...this.wallet.betList(), Infinity);
          // 已達提領流水門檻, 且balance大於balanceThreshold, status = 'readyToWithdraw' 對應後端的Qualified
          if (turnoverThreshold > 0 && turnoverRemaining === 0 && updatedCampaign.balance > (balanceThreshold ?? 0)) {
            updatedCampaign.status = 'readyToWithdraw';
            updatedCampaign.progressStatus = undefined;
          }
          // 流水尚未達標, 但balance已經不夠下最小注, 也嘗試提領 (基本Sever會回應失敗), 讓失敗訊息彈出
          else if (turnoverRemaining > 0 && Number.isFinite(minBet) && updatedCampaign.balance < minBet) {
            updatedCampaign.status = 'readyToWithdraw';
            updatedCampaign.progressStatus = undefined;
          }
        }
        
        this._campaignList.update(list => list.map(c => c.id === updatedCampaign.id ? updatedCampaign : c));
      }
      else if (currentCampaign.status === 'inProgress' && currentCampaign.type === 'freeSpins') {
        // 待實作, 先將balance設為0
        currentCampaign.balance = 0;
        // 更新 current campaign free spin 的 spin count 進度 (progressCurrent + 1, progressRemaining - 1)
        const updatedCampaign = addCampaignSpinCountProgress(currentCampaign, Date.now());
        this._campaignList.update(list => list.map(c => c.id === updatedCampaign.id ? updatedCampaign : c));
      }

      return;
    }

    // 無當前的campaign, 表示使用cash balance, 可以累積status為underCondition的campaign的condition進度, 包括增加turnover與spin count
    let updated = false;
    const campaigns = this.campaignList().map(campaign => {
      if (campaign.status !== 'underCondition' || !campaign.condition) return campaign;
      updated = true;
      const condition = addCampaignConditionProgress(campaign.condition, turnover);
      // 如果條件已經達成, 更新campaign的status = inProgress, progressStatus = 'claimable', 並且清空condition
      if (isCampaignConditionMet(condition)) {
        return { ...campaign, condition: undefined, status: 'inProgress', progressStatus: 'claimable' } as CampaignType;
      }

      return { ...campaign, condition };
    });

    if (!updated) return;
    this._campaignList.set(campaigns);
  }

  protected onReadyForSpin() {
    // 提示訊息給使用者
    this.processReadyForSpinMessage();

    const current = this.currentCampaign();
    if (!current) return;

    // 活動complete 或是 fail, 關閉current campaign, 並且從campaign列表中移除
    if (current.status === 'completed' || current.status === 'failed') {
      this.setCurrentId(null);
      this._campaignList.update(list => list.filter(c => c.id !== current.id));
    }
  }

  /**
   * 用來分類不同類型的Campaign Action回應
   * @param response Campaign Action回應
   */
  protected onCampaignActionResponse(response: CampaignActionResponseType) {
    if (response.action === 'campaign.panel.get') {
      this.onPanelGetResponse(response as CampaignActionPanelGetResponse);
    }
    else if (response.action === 'campaign.enrollment.create') {
      this.onEnrollmentCreateResponse(response as CampaignActionEnrollmentCreateResponse);
    }
    else if (response.action === 'campaign.offer.claim') {
      this.onOfferClaimResponse(response as CampaignActionOfferClaimResponse);
    }
    else if (response.action === 'campaign.reward.withdraw') {
      this.onRewardWithdrawResponse(response as CampaignActionRewardWithdrawResponse);
    }
  }

  /**
   * 處理Campaign Panel Get的回應
   * @param response Campaign Panel Get回應
   */
  protected onPanelGetResponse(response: CampaignActionPanelGetResponse) {
    const { freeBonus, freeSpins } = formatCampaignPanelOffers(response.payload.offers);
    const campaigns: CampaignType[] = [...freeBonus, ...freeSpins];
    this._campaignList.set(campaigns);

    const groups = formatCampaignPanelGroups(response.payload.groups, campaigns, this.session.assetUrl);
    this._campaignGroupList.set(groups);
  }

  /**
   * 處理Campaign Enrollment Create的回應
   * @param response Campaign Enrollment Create回應
   */
  protected onEnrollmentCreateResponse(response: CampaignActionEnrollmentCreateResponse) {
    const offer = response.payload?.offer;
    if (!response.success || !offer) {
      this.logger.campaignLog("Enrollment create failed", response);
      return;
    }

    // 將收到的OfferItem更新到對應的Campaign中
    const campaign = formatCampaignOffer(offer);
    if (!campaign) return;

    // 標記該活動的underCondition訊息已顯示
    this.storage.markCampaignMessageShown('underCondition', campaign.id);

    this._campaignList.update(list => {
      const index = list.findIndex(c => c.id === campaign.id);
      if (index === -1) return [...list, campaign];
      return list.map((c, i) => i === index ? campaign : c);
    });

    // campaign狀態改變後, 同步更新group的visible與endTime
    this._campaignGroupList.update(groups => refreshCampaignGroups(groups, this.campaignList()));

    this.joinedSuccessSubject.next({ id: CampaignPopupId.JoinedSuccess, campaignList: [campaign] });
  }


  /**
   * 處理Campaign Offer Claim的回應
   * @param response Campaign Offer Claim回應
   */
  protected onOfferClaimResponse(response: CampaignActionOfferClaimResponse) {
    const offerId = response.payload?.offer?.offerId;
    const errorCode = response.error?.code ?? response.payload?.result ?? '';
    const errorMessage = response.error?.message ?? '';

    // error handling
    if (!response.success || !offerId) {
      this.logger.campaignLog("Offer claim failed", response);
      this.offerClaimFailSubject.next({ id: CampaignPopupId.OfferClaimFail, errorCode, errorMessage });
      return;
    }

    // 將收到的OfferItem格式化成Campaign
    const target = formatCampaignOffer(response.payload?.offer!);

    const walletId = Number(response.payload?.bonusWalletId || '0');
    // 領取成功後進入inProgress - granted, 金額以實際授予的金額為準
    const grantedAmount = offerAmount(response.payload?.grantedValue);
    const campaign: CampaignType = {
      ...target,
      walletId,
      status: 'inProgress',
      progressStatus: 'granted',
      condition: undefined,
      totalAmount: grantedAmount,
      balance: grantedAmount,
    } as CampaignType;

    this._campaignList.update(list => list.map(c => c.id === campaign.id ? campaign : c));

    // campaign狀態改變後, 同步更新group的visible與endTime
    this._campaignGroupList.update(groups => refreshCampaignGroups(groups, this.campaignList()));

    this.offerClaimSuccessSubject.next({ id: CampaignPopupId.OfferClaimSuccess, campaignList: [campaign] });
  }

  /** 當收到Campaign Reward Withdraw的回應 */
  protected onRewardWithdrawResponse(response: CampaignActionRewardWithdrawResponse) {
    const pending = this.pendingWithdraw;
    // 不是目前等待中的請求, 忽略
    if (!pending || pending.commandId !== response.command_id) {
      this.logger.campaignLog("Reward withdraw response not matched", response);
      return;
    }
    this.pendingWithdraw = null;

    const isSuccess = response.success && response.payload?.result === 'WITHDRAW_RESULT_OK';
    if (!isSuccess) {
      this.logger.campaignLog("Reward withdraw failed", response);
    }
    this.completeWithdraw(pending.campaignId, isSuccess);

    // 處理下一個 readyToWithdrawCampaigns
    const next = this.readyToWithdrawCampaigns()[0];
    if (next) this.processReadyToWithdraw(next);
  }

  /**
   * 提領結束後更新campaign狀態並發出事件
   * @param campaignId 提領的活動ID
   * @param isSuccess 成功 狀態改成completed 並傳送 withdrawSuccessSubject, 失敗 狀態改成failed 並傳送 withdrawFailedSubject
   */
  protected completeWithdraw(campaignId: string, isSuccess: boolean) {
    const campaign = this.campaignList().find(c => c.id === campaignId);
    if (!campaign) return;

    const updated: CampaignType = { ...campaign, status: isSuccess ? 'completed' : 'failed', progressStatus: undefined };
    this._campaignList.update(list => list.map(c => c.id === campaignId ? updated : c));

    // campaign狀態改變後, 同步更新group的visible與endTime
    this._campaignGroupList.update(groups => refreshCampaignGroups(groups, this.campaignList()));

    if (isSuccess) {
      this.withdrawSuccessSubject.next({ id: CampaignPopupId.WithdrawSuccess, campaignList: [updated] });
    } else {
      this.withdrawFailedSubject.next({ id: CampaignPopupId.WithdrawFailed, campaignList: [updated] });
    }
  }

  /** 當使用者登入時, 處理各種campaign訊息 */
  protected processLoginMessage() {
    // 以下按照顯示順序處理訊息, 每個區塊先取一次快照, 避免 next() 觸發的同步流程改變清單
    this.processUnderConditionMessage();
    this.processReceivedMessage();
    this.processOnGoingMessage();
    this.processWaitToJoinMessage();
  }

  /** 每次spin完成後, 處理相關的campaign訊息 */
  protected processReadyForSpinMessage() {
    this.processWaitToJoinMessage();
    this.processUnderConditionMessage();
    this.processReceivedMessage();
  }

  /** underConditionCampaigns 裡面今天還沒有顯示過訊息的 campaigns */
  protected processUnderConditionMessage() {
    const underConditionCampaigns = this.underConditionNoShownCampaigns();
    if (underConditionCampaigns.length > 0) {
      this.underConditionSubject.next({ id: CampaignPopupId.UnderCondition, campaignList: underConditionCampaigns });
      // 把這些campaign標記為今天已顯示過訊息
      underConditionCampaigns.forEach(c => this.storage.markCampaignMessageShown('underCondition', c.id));
    }
  }

  /** receivedCampaigns 裡面今天還沒有顯示過訊息的 campaigns */
  protected processReceivedMessage() {
    const receivedCampaigns = this.receivedNoShownCampaigns();
    if (receivedCampaigns.length > 0) {
      this.receivedCampaignSubject.next({ id: CampaignPopupId.ReceivedCampaign, campaignList: receivedCampaigns });
      // 把這些campaign標記為今天已顯示過訊息
      receivedCampaigns.forEach(c => this.storage.markCampaignMessageShown('received', c.id));
    }
  }

  /** onGoingCampaigns 裡面今天還沒有顯示過訊息的 campaigns */
  protected processOnGoingMessage() {
    const onGoingCampaigns = this.onGoingNoShownCampaigns();
    if (onGoingCampaigns.length > 0) {
      this.onGoingCampaignSubject.next({ id: CampaignPopupId.OnGoingCampaign, campaignList: onGoingCampaigns });
      // 把這些campaign標記為今天已顯示過訊息
      onGoingCampaigns.forEach(c => this.storage.markCampaignMessageShown('onGoing', c.id));
    }
  }

  /** waitToJoinCampaigns 裡面今天還沒有顯示過訊息的 campaigns */
  protected processWaitToJoinMessage() {
    const waitToJoinCampaigns = this.waitToJoinNoShownCampaigns();
    if (waitToJoinCampaigns.length > 0) {
      this.waitToJoinSubject.next({ id: CampaignPopupId.WaitToJoin, campaignList: waitToJoinCampaigns });
      // 把這些campaign標記為今天已顯示過訊息
      waitToJoinCampaigns.forEach(c => this.storage.markCampaignMessageShown('joined', c.id));
    }
  }

  /** 處理withdarw的相關action */
  protected processReadyToWithdraw(campaign: CampaignType) {
    // 已經有請求在等待回應, 等回應後再處理下一個
    if (this.pendingWithdraw) return;

    if (!campaign.offerId) {
      this.logger.campaignLog("Reward withdraw failed, offerId not found", campaign);
      this.completeWithdraw(campaign.id, false);
      return;
    }

    // 使用 sendRewardWithdraw 發送 Reward Withdraw 請求
    const commandId = this.sendRewardWithdraw(campaign.offerId, `withdraw${Date.now()}`);
    this.pendingWithdraw = { campaignId: campaign.id, commandId };
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

  /**
   * @deprecated
   */
  public updateCampaignList(campaignNotes: CampaignLegacyNoteType[]) {

  }

  /** 
   * @deprecated
   */
  public updateCampaignGroupList(campaignGroupNotes: CampaignGroupNoteType[]) {

  }

  public sendAction(action: CampaignActionType) {
    this.api.sendInfoMsg('Campaign', action);
  }

  protected sendPanelGet() {
    const action: CampaignActionPanelGet = {
      action: 'campaign.panel.get',
      command_id: `${Date.now()}`,
      payload: { languageCode: this.session.locale }
    };
    this.sendAction(action);
  }

  public sendEnrollmentCreate(campaignId: string) {
    const action: CampaignActionEnrollmentCreate = {
      action: 'campaign.enrollment.create',
      command_id: `${Date.now()}`,
      payload: {
        campaignId,
        enrollId: `enroll${Date.now()}`
      }
    };
    this.sendAction(action);
  }

  public sendOfferClaim(offerId: string) {
    const commandId = `${Date.now()}`;
    const action: CampaignActionOfferClaim = {
      action: 'campaign.offer.claim',
      command_id: commandId,
      payload: {
        offerId,
        // claimId 為奈秒 unix timestamp, 以毫秒補零換算
        claimId: `claim${Date.now()}`
      }
    };
    this.sendAction(action);
  }

  // CampaignActionRewardWithdraw
  protected sendRewardWithdraw(offerId: string, withdrawId: string): string {
    const commandId = `${Date.now()}`;
    const action: CampaignActionRewardWithdraw = {
      action: 'campaign.reward.withdraw',
      command_id: commandId,
      payload: {
        offerId,
        withdrawId,
      }
    };
    this.sendAction(action);
    return commandId;
  }
}
