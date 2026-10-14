import { serverProto } from "../../shared/Protobuf/new_proto";

export const offlineFreeBonusInfoResult: serverProto.Iinfo = {
    "code": 10,
    "msg": "{\"error_code\":\"\",\"coupon_code\":\"uKUiemysUZx3eIuY56nn\",\"campaignlist\":[{\"campaign_id\":\"CP_ddeA3CM8jwGAF3\",\"name\":\"FBYOOOMAN\",\"type\":5,\"begintime\":\"2025-09-01 06:40:00\",\"endtime\":\"2025-09-30 06:40:00\",\"last_bet_time\":\"2025-09-30 06:40:00\",\"withdraw_turnover_limit\":42459,\"withdraw_lower_limit\":42459,\"withdraw_upper_limit\":84919,\"bw_id\":645,\"bw_balance\":84919,\"turnover\":48000,\"withdraw_amount\":0,\"popup_msg\":1,\"visible\":1}]}"
}

export const offlineFreeSpinsInfoResult: serverProto.Iinfo = {
    "code": 10,
    "msg": "{\"error_code\":\"\",\"coupon_code\":\"GjHAfBWCaUUnNhTPexIJ\",\"campaignlist\":[{\"campaign_id\":\"CP_de3dSRmrhhL5Ft\",\"name\":\"FSYOOOOOOOOMAN\",\"type\":6,\"begintime\":\"2025-09-03 08:15:18\",\"endtime\":\"2025-12-31 08:15:18\",\"last_bet_time\":\"2025-12-31 08:15:18\",\"withdraw_turnover_limit\":0,\"withdraw_lower_limit\":21229,\"withdraw_upper_limit\":84919,\"is_freespin\":true,\"freespin_total_count\":5,\"freespin_remaining_count\":5,\"freespin_single_bet_amount\":42459,\"freespin_total_win_amount\":0,\"bw_id\":0,\"bw_balance\":0,\"turnover\":0,\"withdraw_amount\":0,\"popup_msg\":13,\"visible\":1}]}"
}

/** 領取到需要滿足Bet Count才顯示細節的活動 */
const offlineFreeBonusNeedBetCountReceived  = {
    "popup_msg": 21,
    "campaign_id": "CP_dhf7vubm4YQd0T",
    "name": "FreeBonusBetCount3",
    "type": 5,
    "endtime": "2025-12-31 09:48:45",
    "bet_count": 0,
    "bet_count_limit": 3
}

/** 領取到需要滿足Turnover才顯示細節的活動 */
const offlineFreeBonusNeedTurnoverReceived  = { 
    "popup_msg": 21,
    "campaign_id": "CP_dhf9Zg2sa6ItBO",
    "name": "FreeBonusTurnover3",
    "type": 5,
    "endtime": "2025-12-31 09:50:21",
    "turnover": 0,
    "turnover_limit": 127379
}

/** 領取到需要同時滿足Bet Count與Turnover才顯示細節的活動 */
const offlineFreeBonusNeedBetCountAndTurnoverReceived  = {
    "popup_msg": 21,
    "campaign_id": "CP_dhfeSaZZSEHB3A",
    "name": "FreeBonusBetCount3Turnover3",
    "type": 5,
    "endtime": "2025-12-31 09:54:14",
    "bet_count": 0,
    "bet_count_limit": 3,
    "turnover": 0,
    "turnover_limit": 127379
}

/** 正在滿足條件的活動, 尚未顯示細節 */
const offlineFreeBonusNeedBetCountInProgress  = {
    "bet_count": 2,
    "bet_count_limit": 3,
    "campaign_id": "CP_dhf7vubm4YQd0T",
    "endtime": "2025-12-31 09:48:45",
    "name": "FreeBonusBetCount3",
    "popup_msg": 0,
    "type": 5
}

/** 條件滿足, 顯示活動細節 */
const offlineFreeBonusNeedBetCountRevealed  =
{ 
    "begintime": "2025-09-11 09:48:45",
    "bw_balance": 127379,
    "bw_id": 675,
    "campaign_id": "CP_dhf7vubm4YQd0T",
    "endtime": "2025-12-31 09:48:45",
    "last_bet_time": "2025-12-31 09:48:45",
    "name": "FreeBonusBetCount3",
    "popup_msg": 1,
    "turnover": 0,
    "type": 5,
    "visible": 1,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 42459,
    "withdraw_turnover_limit": 84919,
    "withdraw_upper_limit": 254759
}


/** 領取到已顯示細節的活動 */
const offlineFreeBonusReceived = {
    "campaign_id": "CP_dgoTwvL2XNlCfc",
    "name": "FBYOOOMAN333333",
    "type": 5,
    "begintime": "2025-09-09 06:45:23",
    "endtime": "2025-12-31 06:45:23",
    "last_bet_time": "2025-12-31 06:45:23",
    "withdraw_turnover_limit": 42459,
    "withdraw_lower_limit": 42459,
    "withdraw_upper_limit": 84919,
    "bw_id": 672,
    "bw_balance": 84919,
    "turnover": 0,
    "withdraw_amount": 0,
    "popup_msg": 1,
    "visible": 1
}

/** 活動進行中 */
const offlineFreeBonusInProgress = {
    "begintime": "2025-09-09 06:45:23",
    "bw_balance": 86719,
    "bw_id": 674,
    "campaign_id": "CP_dgoTwvL2XNlCfc",
    "endtime": "2025-12-31 06:45:23",
    "last_bet_time": "2025-12-31 06:45:23",
    "name": "FBYOOOMAN333333",
    "popup_msg": 0,
    "turnover": 18000,
    "type": 5,
    "visible": 1,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 42459,
    "withdraw_turnover_limit": 42459,
    "withdraw_upper_limit": 84919
}

/** 活動結束, 未達提款門檻 */
const offlineFreeBonusEnd = {
    "begintime": "2025-09-09 06:45:23",
    "bw_balance": 1919,
    "bw_id": 672,
    "campaign_id": "CP_dgoTwvL2XNlCfc",
    "campaign_notify_message": "claim_reward_again",
    "endtime": "2025-12-31 06:45:23",
    "last_bet_time": "2025-12-31 06:45:23",
    "name": "FBYOOOMAN333333",
    "popup_msg": 19,
    "turnover": 95000,
    "type": 5,
    "visible": 2,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 42459,
    "withdraw_turnover_limit": 42459,
    "withdraw_upper_limit": 84919
}

/** 活動結束, 成功提款 */
const offlineFreeBonusEndSuccess = {
    "begintime": "2025-09-09 06:45:23",
    "bw_balance": 84919,
    "bw_id": 674,
    "campaign_id": "CP_dgoTwvL2XNlCfc",
    "campaign_notify_message": "claim_reward_again",
    "endtime": "2025-12-31 06:45:23",
    "last_bet_time": "2025-12-31 06:45:23",
    "name": "FBYOOOMAN333333",
    "popup_msg": 3,
    "turnover": 45000,
    "type": 5,
    "visible": 2,
    "withdraw_amount": 84919,
    "withdraw_lower_limit": 42459,
    "withdraw_turnover_limit": 42459,
    "withdraw_upper_limit": 84919
}


/** 領取到需要同時滿足Bet Count與Turnover才顯示細節的Free Spins */
const offlineFreeSpinNeedBetCountAndTurnoverReceived2 = 
{
    "popup_msg": 21,
    "campaign_id": "CP_djeT8Xnwk4UC4a",
    "name": "FSEasyPass",
    "type": 6,
    "endtime": "2026-01-31 10:51:43",
    "bet_count": 0,
    "bet_count_limit": 3,
    "turnover": 0,
    "turnover_limit": 21200
}

/** 正在滿足條件的Free Spins, 尚未顯示細節 */
const offlineFreeSpinNeedBetCountAndTurnoverInProgress = {
    "bet_count": 1,
    "bet_count_limit": 3,
    "campaign_id": "CP_djeT8Xnwk4UC4a",
    "endtime": "2026-01-31 10:51:43",
    "name": "FSEasyPass",
    "popup_msg": 0,
    "turnover": 9000,
    "turnover_limit": 21200,
    "type": 6
}

/** 正在滿足條件的Free Spins (bet count滿足, turnover未滿足), 尚未顯示細節 */
const offlineFreeSpinNeedTurnoverInProgress = {
    "bet_count": 4,
    "bet_count_limit": 3,
    "campaign_id": "CP_dj7BoqORcvJoPf",
    "endtime": "2026-03-31 03:44:22",
    "name": "FSBetCountTurnoverRe4",
    "popup_msg": 0,
    "turnover": 36000,
    "turnover_limit": 42400,
    "type": 6
}

/** 條件滿足, 顯示活動細節 */
const offlineFreeSpinInReceived = {
    "begintime": "2025-09-16 03:44:22",
    "bw_balance": 0,
    "bw_id": 0,
    "campaign_id": "CP_dj7BoqORcvJoPf",
    "endtime": "2026-03-31 03:44:22",
    "freespin_remaining_count": 3,
    "freespin_single_bet_amount": 4240,
    "freespin_total_count": 3,
    "freespin_total_win_amount": 0,
    "is_freespin": true,
    "last_bet_time": "2026-04-16 03:44:22",
    "name": "FSBetCountTurnoverRe4",
    "popup_msg": 13,
    "turnover": 0,
    "type": 6,
    "visible": 1,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 12720,
    "withdraw_turnover_limit": 0,
    "withdraw_upper_limit": 42400
}

/** 活動進行中 */
const offlineFreeSpinInProgress = {
    "begintime": "2025-09-16 03:44:22",
    "bw_balance": 0,
    "bw_id": 0,
    "campaign_id": "CP_dj7BoqORcvJoPf",
    "endtime": "2026-03-31 03:44:22",
    "freespin_remaining_count": 1,
    "freespin_single_bet_amount": 4240,
    "freespin_total_count": 3,
    "freespin_total_win_amount": 8480,
    "is_freespin": true,
    "last_bet_time": "2026-04-16 03:44:22",
    "name": "FSBetCountTurnoverRe4",
    "popup_msg": 0,
    "turnover": 0,
    "type": 6,
    "visible": 1,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 12720,
    "withdraw_turnover_limit": 0,
    "withdraw_upper_limit": 42400
}

/** Free Spins活動結束, 轉成Free Bonus */
const offlineFreeSpinIntoFreeBonusReceived = {
    "begintime": "2025-09-16 03:44:22",
    "bw_balance": 8480,
    "bw_id": 677,
    "campaign_id": "CP_dj7BoqORcvJoPf",
    "endtime": "2026-03-31 03:44:22",
    "freespin_remaining_count": 0,
    "freespin_single_bet_amount": 4240,
    "freespin_total_count": 3,
    "freespin_total_win_amount": 8480,
    "is_freespin": false,
    "last_bet_time": "2026-04-16 03:44:22",
    "name": "FSBetCountTurnoverRe4",
    "popup_msg": 14,
    "turnover": 0,
    "type": 6,
    "visible": 1,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 12720,
    "withdraw_turnover_limit": 8480,
    "withdraw_upper_limit": 42400
}

/** Free Spins活動結束, 轉成Free Bonus, 同時滿足了提領需求 */
const offlineFreeSpinIntoFreeBonusReceivedAndEnd ={
    "begintime": "2025-09-16 10:51:43",
    "bw_balance": 4240,
    "bw_id": 692,
    "campaign_id": "CP_djeT8Xnwk4UC4a",
    "endtime": "2026-01-31 10:51:43",
    "freespin_remaining_count": 0,
    "freespin_single_bet_amount": 4240,
    "freespin_total_count": 3,
    "freespin_total_win_amount": 4240,
    "is_freespin": false,
    "last_bet_time": "2026-01-31 10:51:43",
    "name": "FSEasyPass",
    "popup_msg": 0,
    "turnover": 2500,
    "type": 6,
    "visible": 1,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 424,
    "withdraw_turnover_limit": 424,
    "withdraw_upper_limit": 42400
}

/** Free Spins活動結束, 無法轉成Free Bonus (balance = 0) */
const offlineFreeSpinIntoFreeBonusFailed = {
    "begintime": "2025-09-16 03:44:22",
    "bw_balance": 0,
    "bw_id": 684,
    "campaign_id": "CP_dj7BoqORcvJoPf",
    "campaign_notify_message": "claim_reward_again",
    "endtime": "2026-03-31 03:44:22",
    "freespin_remaining_count": 0,
    "freespin_single_bet_amount": 4240,
    "freespin_total_count": 3,
    "freespin_total_win_amount": 0,
    "is_freespin": false,
    "last_bet_time": "2026-04-16 03:44:22",
    "name": "FSBetCountTurnoverRe4",
    "popup_msg": 19,
    "turnover": 0,
    "type": 6,
    "visible": 2,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 12720,
    "withdraw_turnover_limit": 0,
    "withdraw_upper_limit": 42400
}

/** Free Spin轉換Free Bonus之後進行中, 尚未達現金提領門檻 */
const offlineFreeSpinIntoFreeBonusInProgress = {
    "begintime": "2025-09-16 03:44:22",
    "bw_balance": 11600,
    "bw_id": 689,
    "campaign_id": "CP_dj7BoqORcvJoPf",
    "endtime": "2026-03-31 03:44:22",
    "freespin_remaining_count": 0,
    "freespin_single_bet_amount": 4240,
    "freespin_total_count": 3,
    "freespin_total_win_amount": 0,
    "is_freespin": false,
    "last_bet_time": "2026-04-16 03:44:22",
    "name": "FSBetCountTurnoverRe4",
    "popup_msg": 0,
    "turnover": 12000,
    "type": 6,
    "visible": 1,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 12720,
    "withdraw_turnover_limit": 21200,
    "withdraw_upper_limit": 42400
}

/** Free Spin轉換Free Bonus之後結束, 未達現金提領門檻 */
const offlineFreeSpinIntoFreeBonusEnd = {
    "begintime": "2025-09-16 03:44:22",
    "bw_balance": 2480,
    "bw_id": 677,
    "campaign_id": "CP_dj7BoqORcvJoPf",
    "campaign_notify_message": "claim_reward_again",
    "endtime": "2026-03-31 03:44:22",
    "freespin_remaining_count": 0,
    "freespin_single_bet_amount": 4240,
    "freespin_total_count": 3,
    "freespin_total_win_amount": 0,
    "is_freespin": false,
    "last_bet_time": "2026-04-16 03:44:22",
    "name": "FSBetCountTurnoverRe4",
    "popup_msg": 19,
    "turnover": 6000,
    "type": 6,
    "visible": 2,
    "withdraw_amount": 0,
    "withdraw_lower_limit": 12720,
    "withdraw_turnover_limit": 8480,
    "withdraw_upper_limit": 42400
}

/** Free Spin轉換Free Bonus之後結束, 成功現金提領 */
const offlineFreeSpinIntoFreeBonusEndSuccess = {
    "begintime": "2025-09-16 10:51:43",
    "bw_balance": 7740,
    "bw_id": 692,
    "campaign_id": "CP_djeT8Xnwk4UC4a",
    "campaign_notify_message": "claim_reward_again",
    "endtime": "2026-01-31 10:51:43",
    "freespin_remaining_count": 0,
    "freespin_single_bet_amount": 4240,
    "freespin_total_count": 3,
    "freespin_total_win_amount": 0,
    "is_freespin": false,
    "last_bet_time": "2026-01-31 10:51:43",
    "name": "FSEasyPass",
    "popup_msg": 3,
    "turnover": 5000,
    "type": 6,
    "visible": 2,
    "withdraw_amount": 7740,
    "withdraw_lower_limit": 424,
    "withdraw_turnover_limit": 424,
    "withdraw_upper_limit": 42400
}