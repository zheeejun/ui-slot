import Decimal from 'decimal.js';
import { calc } from "../player-wallet/player-wallet.function";
import { CampaignFreeBonus, CampaignFreeSpins, CampaignType, CampaignStatus, CampaignProgressStatus, CampaignGroup, CampaignCondition } from "./campaign-ctrl.interface";
import { CampaignOfferItem, CampaignGroupItem, CampaignMoneyAmount, CampaignOfferState, CampaignOfferType } from "./campaign-action.interface";

/** 將CampaignMoneyAmount轉換為實際金額 */
export function offerAmount(amount: CampaignMoneyAmount | undefined): number {
  return calc.s2c(Number(amount?.scaledAmount ?? 0));
}

/** 將string | number格式的注數轉換為number */
function offerCount(value: string | number | undefined): number {
  return Number(value ?? 0);
}

/** 判斷offer目前的CampaignStatus, 參考CampaignOfferState */
function offerStatus(offer: CampaignOfferItem): CampaignStatus {
  switch (offer.state) {
    // 尚未報名
    case CampaignOfferState.NotEnrolled:
      return 'waitingToJoin';
    // 領取條件未達成
    case CampaignOfferState.Locked:
      return 'underCondition';
    // 已達成領取條件 / 已授予 / 使用中, 細部狀態看CampaignProgressStatus
    case CampaignOfferState.Claimable:
    case CampaignOfferState.Granted:
    case CampaignOfferState.InPlay:
      return 'inProgress';
    // 已達提領門檻, 等待campaign.reward.withdraw
    case CampaignOfferState.Qualified:
      return 'readyToWithdraw';
    // 已送出提領, 入帳中或入帳失敗重試中都不再顯示提領操作
    case CampaignOfferState.Settling:
    case CampaignOfferState.Settled:
    case CampaignOfferState.SettleFailed:
      return 'completed';
    // 名額用完、商務取消、餘額用完、過期、提領逾期
    case CampaignOfferState.Exhausted:
    case CampaignOfferState.Voided:
    case CampaignOfferState.BalanceDepleted:
    case CampaignOfferState.Expired:
    case CampaignOfferState.WithdrawExpired:
      return 'failed';
    // Unspecified或未知的state, 後端正常不會送出
    default:
      return 'failed';
  }
}

/** 判斷offer在inProgress時的CampaignProgressStatus, 非inProgress的state回傳undefined */
function offerProgressStatus(offer: CampaignOfferItem): CampaignProgressStatus | undefined {
  switch (offer.state) {
    // 領取條件已達成, 等待玩家領取
    case CampaignOfferState.Claimable:
      return 'claimable';
    // 已授予, 還沒用它下過注
    case CampaignOfferState.Granted:
      return 'granted';
    // 用過了, 未達提領門檻
    case CampaignOfferState.InPlay:
      return 'inPlay';
    default:
      return undefined;
  }
}

/** 處理panel.get offer的流水/注數條件與提款資訊 */
function processOfferCondition(campaign: CampaignFreeSpins | CampaignFreeBonus, offer: CampaignOfferItem) {
  if (campaign.status === 'underCondition') {
    let condition: CampaignCondition = {};
    const target = offerAmount(offer.progress?.turnoverLimit);
    // 有設定turnover條件
    if (target > 0) {
      const current = offerAmount(offer.progress?.turnover);
      const remaining = Decimal.max(0, new Decimal(target).sub(current)).toNumber();
      const progress = (target === 0) ? 0 : Math.min(100, new Decimal(current).div(target).mul(100).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).toNumber());
      condition.turnover = { current, target, remaining, progress };
    }

    const betCountCurrent = offerCount(offer.progress?.betCount);
    const betCountTarget = offerCount(offer.progress?.betCountLimit);
    // 有設定次數條件, 只有backend有給betCountLimit才會有這個條件
    if (betCountTarget > 0) {
      condition.betCount = {
        current: betCountCurrent,
        target: betCountTarget,
        remaining: Math.max(0, betCountTarget - betCountCurrent),
        progress: Math.min(100, Math.round((betCountCurrent / betCountTarget) * 100))
      };
    }

    campaign.condition = condition;
    return;
  }
}

/** 處理panel.get offer的提款條件 (withdrawTerms), underCondition或沒有withdrawTerms時不處理 */
function processOfferWithdrawTerms(campaign: CampaignFreeSpins | CampaignFreeBonus, offer: CampaignOfferItem) {
  const terms = offer.withdrawTerms;
  if (!terms) return;

  const turnover = offerAmount(terms.turnoverAccrued);
  const threshold = offerAmount(terms.turnoverRequired);
  const limit = offerAmount(terms.maxAmount);
  // 新版沒有提供提領金額, 先設為0
  const amount = 0

  // 如果提領門檻為0, 就不需要處理
  if (threshold === 0) return;

  campaign.withdrawal = {
    // 目前流水
    turnover: turnover,
    // 可提領的流水門檻
    turnoverThreshold: threshold,
    // 可提領的流水還有多少
    turnoverRemaining: Decimal.max(0, new Decimal(threshold).sub(turnover)).toNumber(),
    // 可提領的餘額門檻
    balanceThreshold: offerAmount(terms.minAmount),
    // 提領上限
    limit: limit,
    // 提領金額
    amount: amount
  };
}

/** 計算條件進度百分比 0~100 */
function conditionProgress(current: number, target: number): number {
  if (target === 0) return 0;
  return Math.min(100, new Decimal(current).div(target).mul(100).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).toNumber());
}

/**
 * 依照本次Spin累加underCondition的條件進度 (turnover與bet count)
 * @param condition 原本的條件
 * @param turnover 本次Spin的流水
 * @returns 新的條件物件
 */
export function addCampaignConditionProgress(condition: CampaignCondition, turnover: number): CampaignCondition {
  const result: CampaignCondition = { ...condition };

  if (condition.turnover) {
    const { target } = condition.turnover;
    const current = Math.min(target, new Decimal(condition.turnover.current).add(turnover).toNumber());
    const remaining = Decimal.max(0, new Decimal(target).sub(current)).toNumber();
    result.turnover = { current, target, remaining, progress: conditionProgress(current, target) };
  }

  if (condition.betCount) {
    const { target } = condition.betCount;
    const current = Math.min(target, condition.betCount.current + 1);
    const remaining = Math.max(0, target - current);
    result.betCount = { current, target, remaining, progress: conditionProgress(current, target) };
  }

  return result;
}

/**
 * 依照本次Spin累加inProgress的提款流水與進度 (withdrawal與progress相關欄位)
 * granted在下注後轉為inPlay, 流水達到提領門檻時轉為readyToWithdraw
 * @param campaign 原本的campaign, 必須是inProgress狀態
 * @param turnover 本次Spin的流水
 * @param betTime 本次下注時間 unix timestamp milliseconds
 * @returns 新的campaign物件
 */
export function addCampaignWithdrawalProgress(campaign: CampaignType, turnover: number, betTime: number): CampaignType {
  const result = { ...campaign, lastBetTime: betTime } as CampaignType;

  // 已授予的獎勵在第一次下注後轉為使用中
  if (campaign.progressStatus === 'granted') {
    result.progressStatus = 'inPlay';
  }

  // 進度跟流水同步, 只有在有總進度時才更新
  const progressTotal = campaign.progressTotal ?? 0;
  if (progressTotal > 0) {
    const progressCurrent = Decimal.min(progressTotal, new Decimal(campaign.progressCurrent ?? 0).add(turnover)).toNumber();
    result.progressCurrent = progressCurrent;
    result.progressRemaining = Decimal.max(0, new Decimal(progressTotal).sub(progressCurrent)).toNumber();
  }

  if (campaign.withdrawal) {
    const { turnoverThreshold } = campaign.withdrawal;
    const current = new Decimal(campaign.withdrawal.turnover).add(turnover).toNumber();
    const turnoverRemaining = Decimal.max(0, new Decimal(turnoverThreshold).sub(current)).toNumber();
    result.withdrawal = { ...campaign.withdrawal, turnover: current, turnoverRemaining };
  }

  return result;
}

/**
 * 依照本次Spin累加inProgress的Free Spins次數進度 (progressCurrent + 1, progressRemaining - 1)
 * granted在下注後轉為inPlay
 * @param campaign 原本的campaign, 必須是inProgress狀態的freeSpins
 * @param betTime 本次下注時間 unix timestamp milliseconds
 * @returns 新的campaign物件
 */
export function addCampaignSpinCountProgress(campaign: CampaignFreeSpins, betTime: number): CampaignFreeSpins {
  const result: CampaignFreeSpins = { ...campaign, lastBetTime: betTime };

  // 已授予的獎勵在第一次下注後轉為使用中
  if (campaign.progressStatus === 'granted') {
    result.progressStatus = 'inPlay';
  }

  // 總次數以progressTotal為主, 沒有的話使用spinCount
  const progressTotal = campaign.progressTotal || campaign.spinCount;
  if (progressTotal > 0) {
    const progressCurrent = Math.min(progressTotal, (campaign.progressCurrent ?? 0) + 1);
    result.progressCurrent = progressCurrent;
    result.progressRemaining = Math.max(0, progressTotal - progressCurrent);
  }

  return result;
}

/**
 * 判斷條件是否已全部達成 (turnover與bet count都需達到target), 沒有任何條件時視為未達成
 * @param condition 條件物件
 */
export function isCampaignConditionMet(condition: CampaignCondition): boolean {
  const contents = [condition.turnover, condition.betCount].filter(c => !!c);
  if (contents.length === 0) return false;
  return contents.every(c => c.current >= c.target);
}

/** 產生Client使用的Free Bonus物件 (panel.get offer) */
function createFreeBonusFromOffer(offer: CampaignOfferItem): CampaignFreeBonus {
  const status = offerStatus(offer);
  const progressStatus = offerProgressStatus(offer);
  const totalAmount = offerAmount(offer.rewardValue);
  // 確認offer.bonusWalletBalance是有效數字
  const isVaildBalance = (typeof Number(offer.bonusWalletBalance?.scaledAmount)) === 'number' && !isNaN(Number(offer.bonusWalletBalance?.scaledAmount));
  // 如果bonusWalletBalance無效, 表示後端還沒有提供該資訊, 使用totalAmount作為balance
  const balance = isVaildBalance ? offerAmount(offer.bonusWalletBalance) : totalAmount;
  const turnoverAccrued = offerAmount(offer.withdrawTerms?.turnoverAccrued);
  const turnoverRequired = offerAmount(offer.withdrawTerms?.turnoverRequired);
  const turnoverRemaining = new Decimal(turnoverRequired).sub(turnoverAccrued).toNumber();

  const campaign: CampaignFreeBonus = {
    id: offer.ref.campaignId,
    offerId: offer.offerId,
    betId: offer.betCampaignId,
    walletId: Number(offer.bonusWalletId),
    type: 'freeBonus',
    name: offer.name,
    status: status,
    totalAmount: totalAmount,
    balance: balance,
    _rawData: offer,

    beginTime: offer.beginTime,
    endTime: offer.endTime,
    lastBetTime: 0,

    progressStatus: progressStatus,
    progressCurrent: turnoverAccrued,
    progressTotal: turnoverRequired,
    progressRemaining: turnoverRemaining,
    isFullyClaimed: false,
    displayType: 'freeBonus',

    groupId: offer.groupId ?? null
  };

  processOfferCondition(campaign, offer);
  processOfferWithdrawTerms(campaign, offer); // 處理campain的withdrawal
  return campaign;
}

/** 產生Client使用的Free Spins物件 (panel.get offer) */
function createFreeSpinsFromOffer(offer: CampaignOfferItem): CampaignFreeSpins {
  const status = offerStatus(offer);
  const totalAmount = offerAmount(offer.rewardValue);
  const balance = offerAmount(offer.freeSpinWin);
  const spinBet = offerAmount(offer.freeSpinBetAmount);

  const campaign: CampaignFreeSpins = {
    id: offer.ref.campaignId,
    offerId: offer.offerId,
    betId: offer.betCampaignId,
    type: 'freeSpins',
    name: offer.name,
    status: status,
    spinCount: offer.freeSpinCount ?? 0,
    // 新版panel.get目前沒有提供每把的bet金額
    spinBet: spinBet,
    totalAmount: totalAmount,
    balance: balance,
    _rawData: offer,

    beginTime: offer.beginTime,
    endTime: offer.endTime,
    lastBetTime: 0,

    progressStatus: offerProgressStatus(offer),
    /** 待實作 */
    progressCurrent: Math.floor((offer.freeSpinCount ?? 0) - (offer.freeSpinRemaining ?? 0)),
    progressTotal: offer.freeSpinCount ?? 0,
    progressRemaining: offer.freeSpinRemaining ?? 0,
    isFullyClaimed: false,
    displayType: 'freeSpins',

    groupId: offer.groupId ?? null
  };

  processOfferCondition(campaign, offer);
  processOfferWithdrawTerms(campaign, offer); // 處理campain的withdrawal
  return campaign;
}

/**
 * 格式化panel.get回傳的offers, 將Server傳來的格式轉換為前端所需的格式,
 * CampaignOfferItem -> CampaignType
 */
export function formatCampaignPanelOffers(
  offers: CampaignOfferItem[]
): { freeBonus: CampaignFreeBonus[]; freeSpins: CampaignFreeSpins[] } {
  const ret = {
    freeBonus: [] as CampaignFreeBonus[],
    freeSpins: [] as CampaignFreeSpins[]
  };

  for (const offer of offers ?? []) {
    if (offer.type === CampaignOfferType.FreeSpin) {
      ret.freeSpins.push(createFreeSpinsFromOffer(offer));
    } else if (offer.type === CampaignOfferType.FreeBonus) {
      ret.freeBonus.push(createFreeBonusFromOffer(offer));
    }
  }

  return ret;
}

/**
 * 格式化單一offer, 將Server傳來的格式轉換為前端所需的格式,
 * CampaignOfferItem -> CampaignType, 不支援的type回傳null
 */
export function formatCampaignOffer(offer: CampaignOfferItem): CampaignType | null {
  if (offer.type === CampaignOfferType.FreeSpin) return createFreeSpinsFromOffer(offer);
  if (offer.type === CampaignOfferType.FreeBonus) return createFreeBonusFromOffer(offer);
  return null;
}

/**
 * 依照最新的campaignList更新groups的visible與endTime
 */
export function refreshCampaignGroups(groups: CampaignGroup[], campaignList: CampaignType[]): CampaignGroup[] {
  return groups.map(group => {
    const campaigns = campaignList.filter(c => group.campaignIdList.includes(c.id));
    return {
      ...group,
      visible: !campaigns.every(c => c.status === 'completed'),
      endTime: Math.max(0, ...campaigns.map(c => c.endTime))
    };
  });
}

/**
 * 格式化panel.get回傳的groups, 將Server傳來的格式轉換為前端所需的格式,
 * CampaignGroupItem -> CampaignGroup, 只保留campaignList裡面找得到對應活動的group
 */
export function formatCampaignPanelGroups(
  groups: CampaignGroupItem[],
  campaignList: CampaignType[],
  assetUrl: string = ""
): CampaignGroup[] {
  const result: CampaignGroup[] = [];

  for (const groupItem of groups ?? []) {
    const list = groupItem.campaignIds.filter(campaignId => campaignList.some(c => c.id === campaignId));
    if (list.length === 0) continue; // 如果這個活動群組裡面沒有任何有效的活動, 就不顯示這個活動群組

    const allCompleted = campaignList.filter(c => list.includes(c.id)).every(c => c.status === 'completed');

    result.push({
      visible: !allCompleted,
      id: groupItem.groupId,
      title: groupItem.title ?? 'Noname',
      image: `/ap-promo-images/${groupItem.bannerUrl || '150e4004-d72d-4a44-afca-86c303d4825b.png'}`,
      campaignIdList: list,
      description: '',
      weight: groupItem.weight,
      endTime: Math.max(0, ...list.map(campaignId => campaignList.find(c => c.id === campaignId)?.endTime ?? 0))
    });
  }

  // 按照weight從大到小排序
  result.sort((a, b) => b.weight - a.weight);

  return result;
}
