import { Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignUnderConditionType, CampaignWithdrawFailedType, CampaignFailFullyRedeemedType, CampaignGroup, CampaignOnGoingFreeBonusType, CampaignOnGoingFreeSpinType, CampaignReceivedFreeBonusType, CampaignReceivedFreeSpinType, CampaignRequiredTurnoverType, CampaignSucessFullyClaimType, CampaignWithdrawSuccessType, CampaignType, PromoCodeExchangeTypeEnum, CampaignFreeSpinWithdrawMaximumType, CampaignJoinedSuccessType, CampaignOfferClaimSuccessType, CampaignOfferClaimFailType, CampaignWaitToJoinType, CampaignReceivedType, CampaignOnGoingType } from './campaign-ctrl.interface';
import { CampaignGroupNoteType, CampaignLegacyNoteType } from './campaign-info-msg.interface';
import { CampaignActionType } from './campaign-action.interface';

/**
 * `CampaignCtrlService` 目前被其他 component / service 實際引用到的功能整理。
 * 每個成員的註解說明「哪裡有用到」與「做什麼」，方便評估修改 `CampaignCtrlService` 時的影響範圍。
 * 注意：這是既有用量的盤點文件，不是強制要求 `CampaignCtrlService` 實作此介面。
 */
export interface CampaignOperation {
  /**
   * 所有 Campaign。
   * - `campaign-debug-panel`：組出下拉選單的 campaign 選項清單。
   * - `event-campaign-content`：依 group 的 `campaignIdList` 找出對應的完整 `CampaignType`。
   */
  readonly campaignList: Signal<CampaignType[]>;

  /**
   * 所有 Campaign Group。
   * - `campaign-debug-panel`：依目前活動的 `groupId` 找出對應的 group。
   * - `event-campaign-content`：依路徑 `subPath` 找出對應的 group。
   * - `event-center`：依 group id 找出 group title 顯示於 breadcrumb。
   * - `event-campaign-cards`：作為畫出活動卡片的來源資料。
   * - `campaign-popup`：依 campaign id 找出所屬的 group id。
   */
  readonly campaignGroupList: Signal<CampaignGroup[]>;

  /**
   * 目前選取的活動。
   * - `campaign-debug-panel`：取得目前活動 id 供 UI 顯示。
   * - `bottom-panel`：取消目前活動、判斷 free bonus 剩餘流水以驅動 autoplay 次數。
   */
  readonly currentCampaign: Signal<CampaignType | null>;

  /**
   * Campaign 運行中（是否有目前選取的活動）。
   * - `bottom-panel`：`isCampaignDisabled`，運行中時停用 Campaign 按鈕。
   */
  readonly isRunning: Signal<boolean>;

  /**
   * Free Spin 運行中。
   * - `bottom-panel`：決定 spin 按鈕行為（停止 autospin vs. 一般 spin）與是否走 auto-spin 流程。
   */
  readonly isFreeSpinRunning: Signal<boolean>;

  /**
   * Free Bonus 運行中。
   * - `bottom-panel`：Free Bonus 進行中時的 spin 按鈕行為判斷。
   */
  readonly isFreeBonusRunning: Signal<boolean>;

  /**
   * campaign popup 是否啟用。
   * - `layout-cover`：`showCampaignPopup`，決定是否渲染 `<campaign-popup>`。
   */
  readonly popupEnabled: Signal<boolean>;

  /**
   * campaign popup 是否啟動（由畫面層通知 service 已掛載，觸發登入後訊息處理流程）。readonly signal
   */
  readonly popupActivated: Signal<boolean>;

  /**
   * - `campaign-popup`：`ngAfterViewInit()` 呼叫 setPopupActivated，寫入 popupActivated。
   * @param value 
   */
  setPopupActivated(value: boolean): void;

  /**
   * promo/campaign 訊息彈窗目前是否顯示中。
   * - `bottom-panel`：`isHoldTurboEnabled`，顯示中時暫停 hold-to-turbo 。readonly signal
   */
  readonly popupMessageVisible: Signal<boolean>;

  /**
   * `campaign-popup`：呼叫 `setPopupMessageVisible`，寫入popupMessageVisible。
   */
  setPopupMessageVisible(value: boolean): void;

  /** promo/campaign 兌換方式（QR / code）目前狀態。
   * - `event-promocode`：`showQR`，決定顯示 QR 兌換或一般兌換 UI。
   * - `event-center`：`showPromoCodeTab`，決定是否顯示 Coupon tab。
   */
  readonly codeExchangeType: Signal<PromoCodeExchangeTypeEnum>;

  /**
   * 是否要顯示 Campaign 在 event center 的 tab。
   * - `event-center`：`tabs`，決定 tab 清單是否包含 Campaign。
   */
  readonly showTab: Signal<boolean>;

  /** 當有活動被啟動(或取消選擇, 帶入 null)的事件。
   * - `bottom-panel`：`onActivatedCampaign`，更新畫面上顯示的流水/結束時間/剩餘次數。
   */
  readonly activatedCampaign$: Observable<CampaignType | null>;

  /** 當有 free spin 需要達到流水需求, 轉成 free bonus 的事件。
   * - `bottom-panel`：`onActivatedCampaign`，接收流水轉換訊息更新畫面顯示。
   * - `campaign-popup`：組出「已達成流水需求」的 popup 訊息並排入佇列。
   */
  readonly requiredTurnover$: Observable<CampaignRequiredTurnoverType>;

  /** 提醒收到 underCondition 狀態的 Campaign 事件。
   * - `campaign-popup`：組出「限時活動進行中」的 popup 訊息並排入佇列。
   */
  readonly underCondition$: Observable<CampaignUnderConditionType>;

  /** 收到 Free Bonus 的事件。
   * - `campaign-popup`：組出「收到 Free Bonus」的 popup 訊息並排入佇列。
   */
  readonly receivedFreeBonus$: Observable<CampaignReceivedFreeBonusType>;

  /** 收到 Free Spin 的事件。
   * - `campaign-popup`：組出「收到 Free Spin」的 popup 訊息並排入佇列。
   */
  readonly receivedFreeSpin$: Observable<CampaignReceivedFreeSpinType>;

  /** 收到一般 Campaign 的事件。
   * - `campaign-popup`：組出「收到 Campaign」的 popup 訊息並排入佇列。
   */
  readonly receivedCampaign$: Observable<CampaignReceivedType>;

  /** Free Bonus 進行中提醒事件。
   * - `campaign-popup`：組出「Free Bonus 進行中」提醒 popup 訊息並排入佇列。
   */
  readonly onGoingFreeBonus$: Observable<CampaignOnGoingFreeBonusType>;

  /** Free Spin 進行中提醒事件。
   * - `campaign-popup`：組出「Free Spin 進行中」提醒 popup 訊息並排入佇列。
   */
  readonly onGoingFreeSpin$: Observable<CampaignOnGoingFreeSpinType>;

  /** 一般 Campaign 進行中提醒事件。
   * - `campaign-popup`：組出「一般 Campaign 進行中」提醒 popup 訊息並排入佇列。
   */
  readonly onGoingCampaign$: Observable<CampaignOnGoingType>;

  /** Free Spin 完成, 領取達到上限事件。
   * - `campaign-popup`：組出「Free Spin 完成, 領取達到上限事件」的 popup 訊息並排入佇列。
   */
  readonly freeSpinWithdrawMaximum$: Observable<CampaignFreeSpinWithdrawMaximumType>;

  /** 活動失敗/過期事件。
   * - `campaign-popup`：組出「活動失敗/過期」的 popup 訊息並排入佇列。
   */
  readonly withdrawFailed$: Observable<CampaignWithdrawFailedType>;

  /** 活動成功（達成提領條件）事件。
   * - `campaign-popup`：組出「達成提領條件」的 popup 訊息並排入佇列。
   */
  readonly withdrawSuccess$: Observable<CampaignWithdrawSuccessType>;

  /** 活動已完全領取事件。
   * - `campaign-popup`：組出「已完全領取」的 popup 訊息並排入佇列。
   */
  readonly sucessFullyClaim$: Observable<CampaignSucessFullyClaimType>;

  /** 活動已完全兌換失敗事件。
   * - `campaign-popup`：組出「已完全兌換/失敗」的 popup 訊息並排入佇列。
   */
  readonly failFullyRedeemed$: Observable<CampaignFailFullyRedeemedType>;

  /** 要求開啟 Event Center 特定活動群組的事件。
   * - `campaign-popup`：`onOpenEventCenterCampaign`，開啟 Event Center 的 Campaign tab 並導向指定 group（若目前有 popup 顯示中則先排入佇列）。
   */
  readonly openEventCenterCampaign$: Observable<string>;

  /** 成功加入活動事件。
   * - `campaign-popup`：組出「成功加入活動」的 popup 訊息並排入佇列。
   */
  readonly joinedSuccess$: Observable<CampaignJoinedSuccessType>;

  /** 成功領取活動獎勵（offer claim）事件。
   * - `event-campaign-content`：送出 offer claim 後等待此事件關閉 loading。
   */
  readonly offerClaimSuccess$: Observable<CampaignOfferClaimSuccessType>;

  /** 領取活動獎勵（offer claim）失敗事件。
   * - `event-campaign-content`：送出 offer claim 後等待此事件關閉 loading。
   */
  readonly offerClaimFail$: Observable<CampaignOfferClaimFailType>;

  /** 等待加入活動事件。
   * - `campaign-popup`：組出「等待加入活動」的 popup 訊息並排入佇列。
   */
  readonly waitToJoin$: Observable<CampaignWaitToJoinType>;

  /**
   * 設定現在使用中的活動, null 表示取消選擇。
   * - `campaign-debug-panel`：debug UI 從下拉選單選擇/取消選擇活動。
   * - `event-campaign-content`：「立即遊玩」按鈕確認並啟用選擇的活動。
   * - `bottom-panel`：取消目前選擇的活動（cancel feature/campaign）。
   */
  setCurrentId(id: string | null): void;

  /**
   * 從 server note 更新 CampaignList（新增或覆蓋既有 id）。
   * - `event-promocode`：Promo code 兌換結果回來後，把回傳的 campaign 合併進共用的 campaign list。
   */
  updateCampaignList(campaignNotes?: CampaignLegacyNoteType[]): void;

  /**
   * 從 server note 更新 CampaignGroupList（新增或覆蓋既有 id）。
   * - `event-promocode`：Promo code 兌換結果回來後，把回傳的 campaign group 合併進共用的 campaign group list。
   */
  updateCampaignGroupList(campaignGroupNotes: CampaignGroupNoteType[]): void;


  // 以下為新版新增的功能 legacy可以忽略

  /**
   * 送出 Campaign 相關的 action 給 server。
   * - `campaign-debug-panel`：debug UI 用於手動送出任意 action payload 測試。
   */
  sendAction(action: CampaignActionType): void;

  /**
   * 玩家參加campaign, 送出 Campaign enrollment create 給 server。
   */
  sendEnrollmentCreate(campaignId: string): void;

  /**
   * 送出 Campaign offer claim 給 server。
   */
  sendOfferClaim(offerId: string): void;
}
