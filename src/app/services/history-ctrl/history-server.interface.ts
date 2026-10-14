import { serverProto } from "../../shared/Protobuf/new_proto";
import { PromoEnum } from "../campaign-ctrl/campaign-info-msg.interface";


/** 
 * C: 使用Cash Wallet,
 * B, BRS : 使用Bonus Wallet,
 * CTP: Campaign獎金入帳到Cash Wallet,
 * CTD: CashDrop獎金入帳到Cash Wallet,
 * BTP BTD: Campaign獎金入帳到Bonus Wallet,
 * CRS: 使用RS系統獎金入帳到Cash Wallet (視為C處理),
 * TournamentWinTicket: 競賽獎金入帳到Cash Wallet
 * */
export type ServerHistoryItemType = "C" | "B" | "CTP" | "CTD" | "BTP" | "BRS" | "BTD" | "CRS" | "TournamentWinTicket";

/** Server 回傳的單筆歷史記錄 */
export interface IServerHistoryItem {
  time: string;
  ticket: string;
  type: ServerHistoryItemType;
  /** 有沒有進去fg 0: 未進入, 1: 已進入 */
  fg: string;
  /** 有沒有進去bg 0: 未進入, 1: 已進入 */
  bg: string;
  /**如果有使用 "bf", "bf1", "bf2", "dc", 否則是空字串 */
  mode: string;
  max_payout: string;
  jp: string;
  free: string;
  free_no: string;
  bet: number;
  win: number;
  /** "0": 未參加, "1": 參加 */
  tournament?: string;
  replay: boolean;
}

/** Server 回傳的歷史列表完整回應 */
export interface IServerHistoryResponse {
  total_count: number;
  total_bet: number;
  total_win: number;
  data: IServerHistoryItem[];
}


export interface IServerHistorySpinDetailSeed {
  server_seed: string;
  server_seed_hash: string;
  client_seed: string;
}

/** Server 回傳的單筆歷史記錄詳細資訊 (一般spin) */
export interface IServerHistorySpinDetailResponse {
  info: {
    /** C, B */ 
    type: ServerHistoryItemType;
    free_no: string;
    before_balance: number;
    after_balance: number;
  };
  result: serverProto.Ispin_result;
  /** OG會回傳Seed相關資訊 */
  seed?: IServerHistorySpinDetailSeed;
}

/** Server 回傳的單筆歷史記錄詳細資訊 (Campaign獎金) */
export interface IServerHistoryCampaignDetailResponse {
  info: {
    /** CTP, BTP, BRS, BTD */
    type: ServerHistoryItemType;
  };
  transfer: {
    campaign_id: string;
    name: string;
    type: PromoEnum;
    /** "2026-12-31 08:53:31" */
    endtime: string;
    /** 提款流水限制 */
    withdraw_turnover_limit: number;
    /** 提款下限 */
    withdraw_lower_limit: number;
    /** 提款上限 */
    withdraw_upper_limit: number;
    status: number;
    turnover: number;
    bw_id: number;
    /** 總餘額 */
    bw_balance: number;
    popup_msg: number;
    use_wallet: string;
    visible: number;
    /** 提款金額 */
    withdraw_amount: number;
    last_bet_time: string;
    pickup_condition_stats_range: number;
  };
}

/** Server 回傳的單筆歷史記錄詳細資訊 (CashDrop獎金) */
export interface IServerHistoryCashDropDetailResponse {
  info: {
    /** CTD */
    type: ServerHistoryItemType;
  };
  transfer: {
    main_prize: number;
    mystery_prize: number;
    /** "2026-04-17 10:54:56" */
    running_time: string;
    /** "2026-04-17 10:54:56" */
    settled_time: string;
    after_balance: number;
  };
}


export type HistoryResponseType = IServerHistoryResponse | IServerHistorySpinDetailResponse | IServerHistoryCampaignDetailResponse | IServerHistoryCashDropDetailResponse;