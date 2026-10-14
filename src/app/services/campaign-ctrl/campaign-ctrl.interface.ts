/**
 * Campaign, Promo Code 前端定義的介面
 */

import { CampaignLegacyFreeBonusNoteType, CampaignLegacyFreeSpinNoteType} from "./campaign-info-msg.interface";
import { CampaignActionError, CampaignOfferItem } from "./campaign-action.interface";



/** 活動執行狀態 */
export type CampaignStatus = 'waitingToJoin' | 'underCondition' | 'inProgress' | 'readyToWithdraw' |'completed' | 'failed';

/** 當inProgress時的進度狀態, 看這個詳細狀態 */
export type CampaignProgressStatus = 'claimable' | 'granted' | 'inPlay' ;

/** 活動類型名稱 */
export type CampaignTypeName = 'freeBonus' | 'freeSpins';

/** 錢包類型名稱 */
export type WalletTypeName = 'cash' | CampaignTypeName;

/** 顯示類型 */
export type CampaignDisplayType = 'freeSpins' | 'freeBonus' ;

/** 活動篩選條件 */
export interface CampaignFilter {
  types?: CampaignTypeName[];
  status?: CampaignStatus[];
}


export interface CampaignConditionContent {
  current: number;
  target: number;
  remaining: number;
  /** 百分比數字 0~100 */
  progress: number;
}

/** 顯示活動細節的條件 */
export interface CampaignCondition {
  /** 下注次數條件 */
  betCount?: CampaignConditionContent;
  /** 流水條件 */
  turnover?: CampaignConditionContent;
}

/** 提款條件 */
export interface CampaignWithdrawal {
  /** 目前流水 */
  turnover: number;
  /** 可提領的流水門檻 */
  turnoverThreshold: number;
  /** 距離流水門檻還有多少 */
  turnoverRemaining: number;
  /** 可提領的餘額門檻 */
  balanceThreshold: number;
  /** 提領上限 */
  limit: number;
  /** 提領金額 */
  amount: number;
}


/** Client使用Free Bonus結構 */
export interface CampaignFreeBonus {
  /** 獎勵類型 */
  type: 'freeBonus';

  /** 獎勵 ID */
  id: string;
  /** 獎勵名稱 */
  name: string;
  /** 目前狀態 */
  status: CampaignStatus;
  /** 活動顯示條件, 只有在狀態為underCondition時才會顯示 */
  condition?: CampaignCondition;
  /** 提款相關, inProgress時顯示 */
  withdrawal?: CampaignWithdrawal;
  /** 全部Spin的總獎金 */
  totalAmount: number;
  /** 用來offer claim用的 */
  offerId?: string;
  /** 用來給spin request note 使用的 ID */
  betId?: string;
  /** 錢包id */
  walletId?: number;
  /** 餘額 */
  balance: number;

  /** 活動結束時間 unix timestamp milliseconds*/
  endTime: number;
  /** 活動開始時間 unix timestamp milliseconds*/
  beginTime: number;
  /** 最後下注時間 unix timestamp milliseconds*/
  lastBetTime: number;

  // 以下為inProgress狀態下的進度相關欄位
  /** 當活動狀態為inProgress時的進度狀態 */
  progressStatus?: CampaignProgressStatus;
  /** 活動目前進度 */
  progressCurrent?: number;
  /** 活動總進度 */
  progressTotal?: number;
  /** 活動剩餘進度 */
  progressRemaining?: number;

  /** 是否已經完全領取 */
  isFullyClaimed: boolean;

  /** 顯示類型, 由於Free Spin會轉換成Free Bonus顯示, 前端流程看這個 */
  displayType: CampaignDisplayType;

  /** 原始資料 */
  _rawData: CampaignLegacyFreeBonusNoteType | CampaignOfferItem;

  /** 可選的活動群組ID，用於將相關活動歸類在一起 */
  groupId?: string | null;
}

/** Client使用Free Spins結構 */
export interface CampaignFreeSpins {
  /** 獎勵類型 */
  type: 'freeSpins';
  /** 每一把Spin的Bet金額 */
  spinBet: number;
  /** Spin的總數 */
  spinCount: number;

  /** 獎勵 ID */
  id: string;
  /** 獎勵名稱 */
  name: string;
  /** 目前狀態 */
  status: CampaignStatus;
  /** 活動顯示條件, 只有在狀態為underCondition時才會顯示 */
  condition?: CampaignCondition;
  /** 提款相關, inProgress時顯示 */
  withdrawal?: CampaignWithdrawal;
  /** 全部Spin的總獎金 */
  totalAmount: number;
  /** 用來offer claim用的 */
  offerId?: string;
  /** 用來給spin request note 使用的ID */
  betId?: string;
  /** 錢包id */
  walletId?: number;
  /** 餘額 */
  balance: number;

  /** 活動開始時間 unix timestamp milliseconds*/
  beginTime: number;
  /** 活動結束時間 unix timestamp milliseconds */
  endTime: number;
  /** 最後下注時間 unix timestamp milliseconds*/
  lastBetTime: number;


  // 以下為inProgress狀態下的進度相關欄位
  /** 當活動狀態為inProgress時的進度狀態 */
  progressStatus?: CampaignProgressStatus;
  /** 活動目前進度 */
  progressCurrent?: number;
  /** 活動總進度 */
  progressTotal?: number;
  /** 活動剩餘進度 */
  progressRemaining?: number;

  /** 是否已經完全領取 */
  isFullyClaimed: boolean;
  /** 顯示類型, 由於Free Spin會轉換成Free Bonus顯示, 前端流程看這個 */
  displayType: CampaignDisplayType;

  /** 原始資料 */
  _rawData: CampaignLegacyFreeSpinNoteType | CampaignOfferItem;

  /** 可選的活動群組ID，用於將相關活動歸類在一起 */
  groupId?: string | null;
}

/** Client使用的Campaign結構 */
export type CampaignType = CampaignFreeBonus | CampaignFreeSpins;

/** Client使用的Promo Code結構 */
export interface IPromoCodeResult {
  /** 沒錯誤會回傳"0" */
  errorCode: string;
  promoCode: string;
  list: CampaignType[];
}


/** Client使用的Campaign Group結構 */
export interface CampaignGroup {
  /** 預設true, 但是如果campaign list為空則 或是campaign裡面都是complete 為false */
  visible: boolean; 
  id: string;
  title: string;
  /** 活動圖片url */
  image: string;
  campaignIdList: string[];
  description: string;
  weight: number;
  /** 活動結束時間, 從campaignIdList中取得的最晚結束時間 unix timestamp milliseconds */
  endTime: number;
}

/** 0: 全關, 1:開放兌換, 2:開放兌換跟QR */
export enum PromoCodeExchangeTypeEnum {
  AllClosed = 0,
  OpenExchange = 1,
  OpenExchangeAndQR = 2,
}

/** Campaign Popup 訊息編號 */
export enum CampaignPopupId {
  ReceivedFreeBonus    = 1,
  /** Free Bonus已完全領取 */
  FreeBonusFullyClaim  = 2,
  WithdrawSuccess    = 3,
  OnGoingFreeBonus     = 4,
  ReceivedFreeSpin     = 13,
  RequiredTurnover     = 14,
  /** Free Spin 完成, 領取達到上限 */
  FreeSpinWithdrawMaximum  = 15,
  OnGoingFreeSpin      = 17,
  WithdrawFailed       = 19,
  /** 提醒玩家可以領取活動獎勵 */
  UnderCondition       = 21,
  /** 成功領取, 但是限額沒了, 明天可以領到 */
  SucessFullyClaim     = 22,
  /** 領取失敗, 因為已領取完畢 */
  FailFullyRedeemed    = 23,
  /** Free Spin其他已領取 */
  FreeSpinFullyClaim   = 16,
  // 以下新增編號
  WaitToJoin           = 100,
  JoinedSuccess        = 101,
  OfferClaimSuccess    = 102,
  OfferClaimFail       = 103,
  ReceivedCampaign     = 104,
  OnGoingCampaign       = 105,
}

/** 收到hidden狀態的Campaign */
export interface CampaignUnderConditionType {
  /** 編號 */
  id: CampaignPopupId.UnderCondition;
  /** 活動列表 */
  campaignList: CampaignType[];
}


export interface CampaignReceivedFreeBonusType {
  /** 編號 */
  id: CampaignPopupId.ReceivedFreeBonus;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignReceivedFreeSpinType {
  /** 編號 */
  id: CampaignPopupId.ReceivedFreeSpin;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignReceivedType {
  /** 編號 */
  id: CampaignPopupId.ReceivedCampaign;
  /** 活動列表 */
  campaignList: CampaignType[];
}

/**進行中的Campaign Free Bonus */
export interface CampaignOnGoingFreeBonusType {
  /** 編號 */
  id: CampaignPopupId.OnGoingFreeBonus;
  /** 活動列表 */
  campaignList: CampaignType[];
}

/** 進行中的Campaign Free Spin */
export interface CampaignOnGoingFreeSpinType {
  /** 編號 */
  id: CampaignPopupId.OnGoingFreeSpin;
  /** 活動列表 */
  campaignList: CampaignType[];
}


/** 進行中的Campaign */
export interface CampaignOnGoingType {
  /** 編號 */
  id: CampaignPopupId.OnGoingCampaign;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignFreeSpinWithdrawMaximumType {
  /** 編號 */
  id: CampaignPopupId.FreeSpinWithdrawMaximum;
  /** 活動列表 */
  campaignList: CampaignType[];
}

/** 需要滿足流水條件的Free Spin */
export interface CampaignRequiredTurnoverType {
  /** 編號 */
  id: CampaignPopupId.RequiredTurnover;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignWithdrawFailedType {
  /** 編號 */
  id: CampaignPopupId.WithdrawFailed;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignWithdrawSuccessType {
  /** 編號 */
  id: CampaignPopupId.WithdrawSuccess;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignSucessFullyClaimType {
  /** 編號 */
  id: CampaignPopupId.SucessFullyClaim;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignFailFullyRedeemedType {
  /** 編號 */
  id: CampaignPopupId.FailFullyRedeemed;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignJoinedSuccessType {
  /** 編號 */
  id: CampaignPopupId.JoinedSuccess;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignOfferClaimSuccessType {
  /** 編號 */
  id: CampaignPopupId.OfferClaimSuccess;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignOfferClaimFailType {
  /** 編號 */
  id: CampaignPopupId.OfferClaimFail;
  /** 錯誤代碼, 優先取 response.error.code */
  errorCode: string;
  /** 錯誤訊息 */
  errorMessage: string;
}

export interface CampaignBasePopupType {
  /** 編號 */
  id: number;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export interface CampaignWaitToJoinType {
  /** 編號 */
  id: CampaignPopupId.WaitToJoin;
  /** 活動列表 */
  campaignList: CampaignType[];
}

export type CampaignPopupMessageType  = CampaignUnderConditionType | CampaignReceivedFreeBonusType | CampaignReceivedFreeSpinType | CampaignOnGoingFreeBonusType | CampaignOnGoingFreeSpinType | CampaignRequiredTurnoverType | CampaignFreeSpinWithdrawMaximumType | CampaignWithdrawFailedType | CampaignWithdrawSuccessType | CampaignSucessFullyClaimType | CampaignFailFullyRedeemedType | CampaignBasePopupType;


export interface CampaignPopupResult {
  popupList: CampaignPopupMessageType[];
  relatedGroupList: CampaignGroup[]
}

export type CampaignMessageType = CampaignUnderConditionType | CampaignReceivedFreeBonusType | CampaignReceivedFreeSpinType | CampaignOnGoingFreeBonusType | CampaignOnGoingFreeSpinType | CampaignRequiredTurnoverType | CampaignFreeSpinWithdrawMaximumType | CampaignWithdrawFailedType | CampaignWithdrawSuccessType | CampaignSucessFullyClaimType | CampaignFailFullyRedeemedType;