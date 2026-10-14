import Decimal from 'decimal.js';
import { calc } from "../player-wallet/player-wallet.function";
import { CampaignLegacyNoteType, CampaignLegacyFreeBonusNoteType, CampaignLegacyFreeSpinNoteType, PromoEnum } from "./campaign-info-msg.interface";
import { CampaignFreeBonus, CampaignFreeSpins, CampaignStatus, CampaignDisplayType, CampaignPopupId, CampaignCondition, CampaignWithdrawal } from "./campaign-ctrl.interface";

/**
 * 格式化Campaign, 將Server傳來的格式轉換為前端所需的格式,
 * CampaignLegacyNoteType -> CampaignType
 */
export function formatCampaignList(
  campaignList: CampaignLegacyNoteType[]
): { freeBonus: CampaignFreeBonus[]; freeSpins: CampaignFreeSpins[] } {
  const ret = {
    freeBonus: [] as CampaignFreeBonus[],
    freeSpins: [] as CampaignFreeSpins[]
  }

  for (const campaign of campaignList ?? []) {
    /** 不考慮處理
     * FailFullyRedeemed
     * FreeSpinFullyClaim
     * FreeBonusFullyClaim
     */
    if (campaign.popup_msg === CampaignPopupId.FailFullyRedeemed ||
      campaign.popup_msg === CampaignPopupId.FreeSpinFullyClaim ||
      campaign.popup_msg === CampaignPopupId.FreeBonusFullyClaim) {
      continue;
    }

    let item: CampaignFreeSpins | CampaignFreeBonus | null;

    // Free Spins
    const fs = createFreeSpins(campaign as CampaignLegacyFreeSpinNoteType);

    // Free Bonus
    const fb = createFreeBonus(campaign as CampaignLegacyFreeBonusNoteType);

    // 只能是其中一種
    item = fs ?? fb;

    if (!item) {
      // 無法辨識的類型
      continue;
    }

    // 處理optional的欄位
    // 處理condition
    processCondition(item);

    // 處理withdrawal
    processWithdrawal(item);

    // 依照type分類
    if (fs) ret.freeSpins.push(fs);
    if (fb) ret.freeBonus.push(fb);
  }

  return ret;
}

const statusList: CampaignStatus[] = ['underCondition', 'inProgress', 'completed'];

/**
 * 將 YYYY-MM-DD HH:mm:ss 格式的 UTC 時間字串轉換為毫秒時間戳
 * @param timeString 時間字串
 * @returns 毫秒時間戳，若輸入無效則回傳 0
 */
function parseTimeToTimestamp(timeString: string | undefined | null): number {
  if (!timeString) {
    return 0;
  }
  // 將字串轉為 ISO 格式 (e.g., "2026-04-30T08:20:08Z")
  const isoString = timeString.replace(' ', 'T') + 'Z';
  const date = new Date(isoString);
  // 檢查日期是否有效，無效則回傳 0
  return isNaN(date.getTime()) ? 0 : date.getTime();
}

/** 產生Client使用的Free Spins物件 */
function createFreeSpins(fs: CampaignLegacyFreeSpinNoteType): CampaignFreeSpins | null {
  if (fs.type !== PromoEnum.FreeSpins) {
    return null;
  }

  // 處理status
  let status: CampaignStatus = statusList[(fs.visible ?? 0)];

  const spinBet = calc.s2c(fs.freespin_single_bet_amount ?? 0);

  // 計算目前balance
  let balance = 0;
  if (fs.is_freespin === true) {
    balance = calc.s2c(fs.freespin_total_win_amount ?? 0);
  }
  else {
    balance = calc.s2c(fs.bw_balance ?? 0);
  }

  let displayType: CampaignDisplayType = (fs.is_freespin) ? 'freeSpins' : 'freeBonus';

  // 總次數
  let total = fs.freespin_total_count ?? 0

  // 目前進度
  let currentSpins = (fs.freespin_total_count ?? 0) - (fs.freespin_remaining_count ?? 0);

  let remaining = total - currentSpins;

  let totalAmount = new Decimal(total).mul(spinBet).toNumber();

  let isFullyClaimed = false;

  // hidden狀態下的特殊處理
  if (status === 'underCondition') {
    displayType = 'freeSpins';
    total = fs.freespin_count ?? 0;

    // bet count條件完成, 未定義表示沒有條件, 直接算完成
    let isBetCountCompleted = true;
    if (typeof fs.bet_count_limit === 'number') {
      isBetCountCompleted = (fs.bet_count ?? 0) >= fs.bet_count_limit;
    }

    // turnover條件完成, 未定義表示沒有條件, 直接算完成
    let isTurnoverCompleted = true;
    if (typeof fs.turnover_limit === 'number') {
      isTurnoverCompleted = (fs.turnover ?? 0) >= fs.turnover_limit;
    }

    // 兩項條件都完成但是visible還是hidden, 代表已經領取完畢
    isFullyClaimed = isBetCountCompleted && isTurnoverCompleted;
  }

  // 如果 displayType 是 freeBonus，則把 total 和 currentSpins 都設為流水相關的數值
  if (displayType === 'freeBonus') {
    total = calc.s2c(fs.withdraw_turnover_limit ?? 0);
    currentSpins = calc.s2c(fs.turnover ?? 0);
    remaining = Decimal.max(0, new Decimal(total).sub(currentSpins)).toNumber();
  }

  const beginTime = parseTimeToTimestamp(fs.begintime);
  const endTime = parseTimeToTimestamp(fs.endtime);
  const lastBetTime = parseTimeToTimestamp(fs.last_bet_time);

  // 如果endTime是比今天還之前，表示活動已經結束，將status改為failed
  if (endTime < Date.now() && status !== 'completed') {
    status = 'failed';
  }

  return {
    id: fs.campaign_id,
    type: 'freeSpins',
    name: fs.name,
    status: status,
    spinCount: total,
    spinBet: spinBet,
    totalAmount: totalAmount,
    walletId: fs.bw_id,
    balance: balance,
    _rawData: fs,

    beginTime: beginTime,
    endTime: endTime,
    lastBetTime: lastBetTime,

    progressCurrent: currentSpins,
    progressTotal: total,
    progressRemaining: remaining,
    isFullyClaimed: isFullyClaimed,
    displayType: displayType,

    groupId: null
  };
}

/** 產生Client使用的Free Bonus物件 */
function createFreeBonus(fb: CampaignLegacyFreeBonusNoteType): CampaignFreeBonus | null {
  if (fb.type !== PromoEnum.FreeBonus) {
    return null;
  }

  // 處理status
  let status: CampaignStatus = statusList[(fb.visible ?? 0)];

  // 目前流水
  const turnover = calc.s2c(fb.turnover ?? 0);

  // 目標流水
  const target = calc.s2c(fb.withdraw_turnover_limit ?? 0);

  const remaining = Decimal.max(0, new Decimal(target).sub(turnover)).toNumber();

  let totalAmount = calc.s2c(fb.bw_balance ?? 0);

  let isFullyClaimed = false;

  if (status === 'underCondition') {
    totalAmount = calc.s2c(fb.freebonus_amount ?? 0);
    isFullyClaimed = (fb.visible === undefined);

    // bet count條件完成, 未定義表示沒有條件, 直接算完成
    let isBetCountCompleted = true;
    if (typeof fb.bet_count_limit === 'number') {
      isBetCountCompleted = (fb.bet_count ?? 0) >= fb.bet_count_limit;
    }

    // turnover條件完成, 未定義表示沒有條件, 直接算完成
    let isTurnoverCompleted = true;
    if (typeof fb.turnover_limit === 'number') {
      isTurnoverCompleted = (fb.turnover ?? 0) >= fb.turnover_limit;
    }

    // 兩項條件都完成但是visible還是hidden, 代表已經領取完畢
    isFullyClaimed = isBetCountCompleted && isTurnoverCompleted;
  }

  const beginTime = parseTimeToTimestamp(fb.begintime);
  const endTime = parseTimeToTimestamp(fb.endtime);
  const lastBetTime = parseTimeToTimestamp(fb.last_bet_time);

  // 如果endTime是比今天還之前，表示活動已經結束，將status改為failed
  if (endTime < Date.now() && status !== 'completed') {
    status = 'failed';
  }

  return {
    id: fb.campaign_id,
    type: 'freeBonus',
    name: fb.name,
    status: status,
    totalAmount: totalAmount,
    walletId: fb.bw_id,
    balance: totalAmount,
    _rawData: fb,

    beginTime: beginTime,
    endTime: endTime,
    lastBetTime: lastBetTime,

    progressCurrent: turnover,
    progressTotal: target,
    progressRemaining: remaining,
    isFullyClaimed: isFullyClaimed,
    displayType: 'freeBonus',

    groupId: null
  };
}

/** 處理活動的條件 */
function processCondition(campaign: CampaignFreeSpins | CampaignFreeBonus) {
  /** 活動顯示條件, 只有在狀態為hidden時才會顯示 */
  if (campaign.status !== 'underCondition') {
    return;
  }

  const condition: CampaignCondition = {};

  // 處理condition的兩種目標
  if ('bet_count_limit' in campaign._rawData) {
    // 下注次數條件
    const current = campaign._rawData.bet_count ?? 0;
    const target = campaign._rawData.bet_count_limit ?? 0;
    const progress = (target === 0) ? 0 : Math.min(100, Math.round((current / target) * 100));
    condition.betCount = {
      current: current,
      target: target,
      remaining: Math.max(0, target - current),
      progress: progress
    };
  }
  if ('turnover_limit' in campaign._rawData) {
    // 流水條件
    const current = calc.s2c(campaign._rawData.turnover ?? 0);
    const target = calc.s2c(campaign._rawData.turnover_limit ?? 0);
    const progress = (target === 0) ? 0 : Math.min(100, new Decimal(current).div(target).mul(100).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).toNumber());
    condition.turnover = {
      current: current,
      target: target,
      remaining: Decimal.max(0, new Decimal(target).sub(current)).toNumber(),
      progress: progress
    };
  }
  campaign.condition = condition;
}

/** 處理活動的提款條件 */
function processWithdrawal(campaign: CampaignFreeSpins | CampaignFreeBonus) {
  /** 提款相關, hidden時不會顯示 */
  if (campaign.status === 'underCondition') {
    return;
  }

  // 這裡只處理legacy格式的rawData, 新版panel.get的offer由formatCampaignPanelOffers另外組出withdrawal
  if (!('withdraw_turnover_limit' in campaign._rawData)) {
    return;
  }
  const rawData = campaign._rawData;

  // 提領條件
  const turnover = calc.s2c(rawData.turnover ?? 0);
  const threshold = calc.s2c(rawData.withdraw_turnover_limit ?? 0);
  const withdrawal: CampaignWithdrawal = {
    // 目前流水
    turnover: turnover,
    // 可提領的流水門檻
    turnoverThreshold: threshold,
    // 可提領的流水還有多少
    turnoverRemaining: Decimal.max(0, new Decimal(threshold).sub(turnover)).toNumber(),
    // 可提領的餘額門檻
    balanceThreshold: calc.s2c(rawData.withdraw_lower_limit ?? 0),
    // 提領上限
    limit: calc.s2c(rawData.withdraw_upper_limit ?? 0),
    // 提領金額
    amount: calc.s2c(rawData.withdraw_amount ?? 0)
  };
  campaign.withdrawal = withdrawal;
}
