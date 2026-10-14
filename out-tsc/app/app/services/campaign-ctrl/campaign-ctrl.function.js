import { calc } from "../user-profile/user-profile.function";
import { PromoEnum } from "./campaign-info-msg.interface";
/**
 * 格式化Campaign, 將Server傳來的格式轉換為前端所需的格式,
 * CampaignNoteType -> CampaignType
 */
export function formatCampaignList(campaignList) {
    const ret = {
        freeBonus: [],
        freeSpins: []
    };
    for (const campaign of campaignList ?? []) {
        let item;
        // Free Spins
        const fs = createFreeSpins(campaign);
        // Free Bonus
        const fb = createFreeBonus(campaign);
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
        if (fs)
            ret.freeSpins.push(fs);
        if (fb)
            ret.freeBonus.push(fb);
    }
    return ret;
}
const statusList = ['hidden', 'inProgress', 'completed'];
/**
 * 將 YYYY-MM-DD HH:mm:ss 格式的 UTC 時間字串轉換為毫秒時間戳
 * @param timeString 時間字串
 * @returns 毫秒時間戳，若輸入無效則回傳 0
 */
function parseTimeToTimestamp(timeString) {
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
function createFreeSpins(fs) {
    if (fs.type !== PromoEnum.FreeSpins) {
        return null;
    }
    // 處理status
    let status = statusList[(fs.visible ?? 0)];
    const spinBet = calc.s2c(fs.freespin_single_bet_amount ?? 0);
    // 計算目前balance
    let balance = 0;
    if (fs.is_freespin === true) {
        balance = calc.s2c(fs.freespin_total_win_amount ?? 0);
    }
    else {
        balance = calc.s2c(fs.bw_balance ?? 0);
    }
    // 總次數
    const total = fs.freespin_total_count ?? 0;
    // 目前進度
    const currentSpins = (fs.freespin_total_count ?? 0) - (fs.freespin_remaining_count ?? 0);
    return {
        id: fs.campaign_id,
        type: 'freeSpins',
        name: fs.name,
        status: status,
        spinCount: total,
        spinBet: spinBet,
        totalAmount: total * spinBet,
        balance: balance,
        rawData: fs,
        beginTime: parseTimeToTimestamp(fs.begintime),
        endTime: parseTimeToTimestamp(fs.endtime),
        lastBetTime: parseTimeToTimestamp(fs.last_bet_time),
        progressCurrent: currentSpins,
        progressTotal: total,
        progressRemaining: total - currentSpins,
        isChallenge: status !== 'hidden',
        displayType: (fs.is_freespin) ? 'freeSpins' : 'freeBonus',
        groupId: null
    };
}
/** 產生Client使用的Free Bonus物件 */
function createFreeBonus(fb) {
    if (fb.type !== PromoEnum.FreeBonus) {
        return null;
    }
    // 處理status
    let status = statusList[(fb.visible ?? 0)];
    // 目前流水
    const turnover = calc.s2c(fb.turnover ?? 0);
    // 目標流水
    const target = calc.s2c(fb.withdraw_turnover_limit ?? 0);
    return {
        id: fb.campaign_id,
        type: 'freeBonus',
        name: fb.name,
        status: status,
        totalAmount: calc.s2c(fb.bw_balance ?? 0),
        walletId: fb.bw_id,
        balance: calc.s2c(fb.bw_balance ?? 0),
        rawData: fb,
        beginTime: parseTimeToTimestamp(fb.begintime),
        endTime: parseTimeToTimestamp(fb.endtime),
        lastBetTime: parseTimeToTimestamp(fb.last_bet_time),
        progressCurrent: turnover,
        progressTotal: target,
        progressRemaining: Math.max(0, target - turnover),
        isChallenge: status !== 'hidden',
        displayType: 'freeBonus',
        groupId: null
    };
}
/** 處理活動的條件 */
function processCondition(campaign) {
    /** 活動顯示條件, 只有在狀態為hidden時才會顯示 */
    if (campaign.status !== 'hidden') {
        return;
    }
    const condition = {};
    // 處理condition的兩種目標
    if ('bet_count_limit' in campaign.rawData) {
        // 下注次數條件
        condition.betCount = {
            current: campaign.rawData.bet_count ?? 0,
            target: campaign.rawData.bet_count_limit ?? 0
        };
        // 若尚未達成目標, 寫入到progressCurrent/progressTotal
        // 兩種目標都有時, 目前以turnover為主
        if (condition.betCount.current < condition.betCount.target) {
            campaign.progressCurrent = condition.betCount.current;
            campaign.progressTotal = condition.betCount.target;
            campaign.progressRemaining = Math.max(0, condition.betCount.target - condition.betCount.current);
            campaign.displayType = 'betCount';
        }
    }
    if ('turnover_limit' in campaign.rawData) {
        // 流水條件
        condition.turnover = {
            current: calc.s2c(campaign.rawData.turnover ?? 0),
            target: calc.s2c(campaign.rawData.turnover_limit ?? 0)
        };
        // 若尚未達成目標, 寫入到progressCurrent/progressTotal
        // 兩種目標都有時, 目前以turnover為主
        if (condition.turnover.current < condition.turnover.target) {
            campaign.progressCurrent = condition.turnover.current;
            campaign.progressTotal = condition.turnover.target;
            campaign.progressRemaining = Math.max(0, condition.turnover.target - condition.turnover.current);
            campaign.displayType = 'turnover';
        }
    }
    campaign.condition = condition;
}
/** 處理活動的提款條件 */
function processWithdrawal(campaign) {
    /** 提款相關, hidden時不會顯示 */
    if (campaign.status === 'hidden') {
        return;
    }
    // 提領條件
    const turnover = calc.s2c(campaign.rawData.turnover ?? 0);
    const threshold = calc.s2c(campaign.rawData.withdraw_turnover_limit ?? 0);
    const withdrawal = {
        // 目前流水
        turnover: turnover,
        // 可提領的流水門檻
        turnoverThreshold: threshold,
        // 可提領的流水還有多少
        turnoverRemaining: Math.max(0, threshold - turnover),
        // 可提領的餘額門檻
        balanceThreshold: calc.s2c(campaign.rawData.withdraw_lower_limit ?? 0),
        // 提領上限
        limit: calc.s2c(campaign.rawData.withdraw_upper_limit ?? 0),
        // 提領金額
        amount: calc.s2c(campaign.rawData.withdraw_amount ?? 0)
    };
    campaign.withdrawal = withdrawal;
}
//# sourceMappingURL=campaign-ctrl.function.js.map