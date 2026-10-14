import { IServerHistoryCampaignDetailResponse, IServerHistoryCashDropDetailResponse, IServerHistorySpinDetailResponse } from "./history-server.interface"

export const serverHistorySpinDetailResponse: IServerHistorySpinDetailResponse = {
  "info": {
    "type": "C",
    "free_no": "",
    "before_balance": 1000485720,
    "after_balance": 1000476720
  },
  "result": {
  }
}

export const serverHistoryCampaignDetailResponse: IServerHistoryCampaignDetailResponse = {
  "info": {
    "type": "CTP"
  },
  "transfer": {
    "campaign_id": "CP_eF5aBmHd3y9nBO",
    "name": "ChiikawaWithYouForever",
    "type": 5,
    "endtime": "2026-12-31 08:53:31",
    "withdraw_turnover_limit": 300000,
    "withdraw_lower_limit": 300000,
    "withdraw_upper_limit": 1000000,
    "status": 10,
    "turnover": 306000,
    "bw_id": 1374,
    "bw_balance": 1012240,
    "popup_msg": 0,
    "use_wallet": "",
    "visible": 0,
    "withdraw_amount": 1000000,
    "last_bet_time": "",
    "pickup_condition_stats_range": 2
  }
}

export const serverHistoryCashDropDetailResponse: IServerHistoryCashDropDetailResponse = {
  "info": {
    "type": "CTD"
  },
  "transfer": {
    "main_prize": 10000,
    "mystery_prize": 100000,
    "running_time": "2026-04-17 10:54:56",
    "settled_time": "2026-04-17 10:55:07",
    "after_balance": 976321480
  }
}