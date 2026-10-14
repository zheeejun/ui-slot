export interface CampaignActionRequestBaseType {
  action: string,
  /** 用來標識此操作的唯一命令ID, 目前先用unix timestamp */
  command_id: string,
  payload: any
}

export interface CampaignActionPanelGet extends CampaignActionRequestBaseType {
  action: "campaign.panel.get",
  payload: {
    languageCode: string;
  }
}

export interface CampaignActionEnrollmentCreate extends CampaignActionRequestBaseType {
  action: "campaign.enrollment.create",
  payload: {
    campaignId: string;
    /** 目前先使用enroll + unix timestamp 作為 enrollId (毫秒) */
    enrollId: string;
  }
}

export interface CampaignActionOfferClaim extends CampaignActionRequestBaseType {
  action: "campaign.offer.claim",
  payload: {
    offerId: string;
    /** 唯一領取ID, 範例值為 claim + unix timestamp (毫秒) */
    claimId: string;
  }
}

export interface CampaignActionRewardWithdraw extends CampaignActionRequestBaseType {
  action: "campaign.reward.withdraw",
  payload: {
    offerId: string;
    /** 唯一提領ID, 範例值為 withdraw + unix timestamp (毫秒) */
    withdrawId: string;
  }
}

export type CampaignActionType = CampaignActionRequestBaseType | CampaignActionPanelGet | CampaignActionEnrollmentCreate | CampaignActionOfferClaim | CampaignActionRewardWithdraw;


/** Campaign Action失敗時回傳的錯誤資訊 */
export interface CampaignActionError {
  /** 錯誤代碼, 例如 INVALID_ARGUMENT */
  code: string;
  /** 錯誤訊息, 例如 campaign: that offer cannot be claimed */
  message: string;
}

export interface CampaignActionResponseBaseType {
  action: string,
  command_id: string,
  success: boolean,
  /** success為false時不會有payload */
  payload?: any,
  /** success為false時才會有 */
  error?: CampaignActionError
}

/** 金額結構, scaledAmount為string儲存的number, 需要s2c轉換 */
export interface CampaignMoneyAmount {
  /** 就是 progressTotal, 需要s2c轉換 */
  scaledAmount?: string;
  currencyCode: string;
}

export interface CampaignOfferRef {
  campaignId: string;
  rewardId?: string;
}

export interface CampaignOfferProgress {
  /** 進度快照時間 Unix timestamp (毫秒), 尚未報名時不會有 */
  asOf?: number;
  /** 已累積的注數, 為 0 時後端可能不送 */
  betCount?: string | number;
  /** 注數門檻, 沒有設定次數條件時後端不送 */
  betCountLimit?: string | number;
  /** 已累積的流水 */
  turnover: CampaignMoneyAmount;
  /** 流水門檻 */
  turnoverLimit: CampaignMoneyAmount;
}

export type CampaignOfferSource = 'OFFER_SOURCE_CAMPAIGN' | string;
export enum CampaignOfferType {
  FreeBonus = 'REWARD_TYPE_FREE_BONUS',
  FreeSpin = 'REWARD_TYPE_FREE_SPIN'
}
export enum CampaignOfferState {
  /** 後端不會送出這個值 */
  Unspecified = 'OFFER_STATE_UNSPECIFIED',
  /** 尚未報名, 屬於waitToJoin */
  NotEnrolled = 'OFFER_STATE_NOT_ENROLLED',
  /** 領取條件未達成, 屬於underCondition */
  Locked = 'OFFER_STATE_LOCKED',
  /** 領取條件已達成, 屬於inProgress - claimable */
  Claimable = 'OFFER_STATE_CLAIMABLE',
  /** 該玩家的名額已用完, 特殊狀態isFullyClaimed = true */
  Exhausted = 'OFFER_STATE_EXHAUSTED',
  /** 已授予，還沒用它下過注, 屬於inProgress - granted */
  Granted = 'OFFER_STATE_GRANTED',
  /** 用過了，未達提領門檻, 屬於inProgress - inPlay */
  InPlay = 'OFFER_STATE_IN_PLAY',
  /** 已達提領門檻。後端停在這個狀態等 campaign.reward.withdraw，這是常態停留的狀態, 屬於readyToWithdraw*/
  Qualified = 'OFFER_STATE_QUALIFIED',
  /** 入帳處理中, 屬於completed */
  Settling = 'OFFER_STATE_SETTLING',
  /** 已入帳（終態）, 屬於completed */
  Settled = 'OFFER_STATE_SETTLED',
  /** 技術上失敗、等待處理。非終態，account 重試成功會回到 SETTLED, 屬於failed */
  SettleFailed = 'OFFER_STATE_SETTLE_FAILED',
  /** 商務決定不發（終態）。面板兩種模式都不回這個值, 屬於failed */
  Voided = 'OFFER_STATE_VOIDED',
  /** 錢用完、未達標（終態）, 屬於failed */
  BalanceDepleted = 'OFFER_STATE_BALANCE_DEPLETED',
  /** 時間用完、未達標（終態）, 屬於failed */
  Expired = 'OFFER_STATE_EXPIRED',
  /** 已達標、金額已算好，而到了 withdrawDeadline 仍未收到提領指令（終態）, 屬於failed */
  WithdrawExpired = 'OFFER_STATE_WITHDRAW_EXPIRED',
}
export type CampaignOfferWithdrawMode = 'WITHDRAW_MODE_AUTO' | string;
export type CampaignOfferEnrollmentMode = 'ENROLLMENT_MODE_OPT_IN' | string;

export interface CampaignOfferWithdrawTerms {
  /** 提領所需流水 */
  turnoverRequired: CampaignMoneyAmount;
  /** 已累積的流水 */
  turnoverAccrued: CampaignMoneyAmount;
  /** 最高可提領金額 */
  maxAmount: CampaignMoneyAmount;
  /** 最低可提領金額 */
  minAmount: CampaignMoneyAmount;
  /** 流水倍數, string儲存的number, 需要s2c轉換 */
  turnoverMultiple: string;
}

export interface CampaignOfferItem {
  source: CampaignOfferSource;
  ref: CampaignOfferRef;
  type: CampaignOfferType;
  name: string;
  offerId: string;
  enrolled?: boolean;
  /** Unix timestamp (毫秒) */
  enrolledAt?: number;
  betCampaignId?: string;
  bonusWalletId?: string;
  bonusWalletBalance?: CampaignMoneyAmount;
  state: CampaignOfferState;
  /** Unix timestamp (毫秒) */
  beginTime: number;
  /** Unix timestamp (毫秒) */
  endTime: number;
  /** Unix timestamp (毫秒) */
  claimableUntil: number;
  /** condition的進度, 包含流水門檻跟次數門檻, (不是inProgress的進度, 後端前端命名有差異) */
  progress: CampaignOfferProgress;
  /** 在inProgress狀態下的獎勵金額 */
  rewardValue: CampaignMoneyAmount;
  /** 只有 REWARD_TYPE_FREE_SPIN 才會有 */
  freeSpinCount?: number;
  /** 每把free spin的下注金額, 只有 REWARD_TYPE_FREE_SPIN 才會有 */
  freeSpinBetAmount?: CampaignMoneyAmount;
  /** free spin累積贏分, 為 0 時不會有scaledAmount, 只有 REWARD_TYPE_FREE_SPIN 才會有 */
  freeSpinWin?: CampaignMoneyAmount;
  /** 剩餘free spin次數, 只有 REWARD_TYPE_FREE_SPIN 才會有 */
  freeSpinRemaining?: number;
  withdrawMode: CampaignOfferWithdrawMode;
  enrollmentMode: CampaignOfferEnrollmentMode;
  /** 所屬的group, 可能沒有 */
  groupId?: string;
  /** 提領截止時間 Unix timestamp (毫秒), claim 之後才會有 */
  withdrawDeadline?: number;
  /** 可使用 bonus 下注的截止時間 Unix timestamp (毫秒), claim 之後才會有 */
  playableUntil?: number;
  /** 提領條件 */
  withdrawTerms?: CampaignOfferWithdrawTerms;
}

export interface CampaignGroupItem {
  groupId: string;
  weight: number;
  campaignIds: string[];
  bannerUrl?: string;
  title?: string;
}

export interface CampaignActionPanelGetResponse extends CampaignActionResponseBaseType {
  action: "campaign.panel.get",
  payload: {
    offers: CampaignOfferItem[];
    groups: CampaignGroupItem[];
    /** Unix timestamp (毫秒) */
    snapshotAt: number;
  }
}


export type CampaignEnrollResult = 'ENROLL_RESULT_OK' | string;

export interface CampaignActionEnrollmentCreateResponse extends CampaignActionResponseBaseType {
  action: "campaign.enrollment.create",
  payload: {
    result: CampaignEnrollResult;
    offer: CampaignOfferItem;
  }
}

export type CampaignClaimResult = 'CLAIM_RESULT_OK' | string;


export interface CampaignActionOfferClaimResponse extends CampaignActionResponseBaseType {
  action: "campaign.offer.claim",
  /** success為false時不會有payload, 改由error帶回錯誤資訊 */
  payload?: {
    result: CampaignClaimResult;
    offer: CampaignOfferItem;
    /** 實際授予的金額 */
    grantedValue: CampaignMoneyAmount;
    bonusWalletId: string;
  }
}

export type CampaignWithdrawResult = 'WITHDRAW_RESULT_OK' | string;

export interface CampaignActionRewardWithdrawResponse extends CampaignActionResponseBaseType {
  action: "campaign.reward.withdraw",
  /** success為false時不會有payload, 改由error帶回錯誤資訊 */
  payload?: {
    result: CampaignWithdrawResult;
    /** 實際提領的金額 */
    withdrawnAmount: CampaignMoneyAmount;
  }
}

export type CampaignActionResponseType = CampaignActionResponseBaseType | CampaignActionPanelGetResponse | CampaignActionEnrollmentCreateResponse | CampaignActionOfferClaimResponse | CampaignActionRewardWithdrawResponse;