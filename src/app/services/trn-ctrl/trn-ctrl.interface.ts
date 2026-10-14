/** 
 * 前端TRN相關的結構定義, 這邊的數字皆為已轉換過的數字
 */
import { ApRowListItem } from "../../components/ap-trn-list-row/ap-trn-list-row.interface";
import { TrnLoginPlayerStatus } from "./trn-info-msg.interface";

export type TrnCtrlStatus = 'idle' | 'joining-quick' | 'joining-event' | 'matching-quick' | 'matching-event' |'playing-quick' | 'playing-event' | 'canceling-quick';

export type TrnRacingPlayer = {
  id: number;
  name: string;
  score: number;
  bonus: number;
};

/** 獎品結構 - 固定獎品 */
export interface TrnFixedPrizeDetail {
  /** rank可以是單一rank 或 rank區間 (rankFrom ~ rankTo) */
  rank?: number;
  /** rank區間的起始rank, 需要配合rankTo使用 */
  rankFrom?: number;
  /** rank區間的結束rank, 需要配合rankFrom使用 */
  rankTo?: number;
  /** 獎品金額, 已轉成玩家的Currency (已乘上匯率)  */
  amount: number;
}

/** 獎品結構 - 獎池獎品 */
export interface TrnPoolDistributionDetail {
  /** rank可以是單一rank 或 rank區間 (rankFrom ~ rankTo) */
  rank?: number;
  /** rank區間的起始rank, 需要配合rankTo使用 */
  rankFrom?: number;
  /** rank區間的結束rank, 需要配合rankFrom使用 */
  rankTo?: number;
  /** 獎池分配比例 */
  ratio: number;
}

export interface TrnTierDetailItem {
  id: string;
  name: string;
  order: number;
  /** 此Tier的總獎金 */
  totalPrize: number;
  /** 此Tier的Bet上限 */
  maxStakeAmount: number | null;
  /** 此Tier的玩家最低餘額 */
  minPlayerBalance: number;
  /** 此Tier的Bet下限 */
  minStakeAmount: number | null;
  /** 依照Rank的固定獎金 */
  fixedPrizes: TrnFixedPrizeDetail[];
  /** 依照Rank的額外獎池分配比例 */
  poolDistribution: TrnPoolDistributionDetail[];
}

/** TRN主體資料結構的外層 只存資料 不存狀態 */
export interface TrnData {
  id: string;
  name: string;
  /* 賽事類型 */
  type: 'quick' | 'event';
  /** 賽事目前狀態 */
  status: 'running' | 'announced' | 'ending' | 'ended' | 'settled';
  /** 開始時間 Unix timestamp，單位為毫秒 */
  startTime: number;
  /** 結束時間 Unix timestamp，單位為毫秒 */
  endTime: number;
  /** Match長度，單位秒 */
  matchDuration: number;
  /** 匯率, prize需要乘以此匯率 */
  exchangeRate: number;
  /** 後端詳細的獎金結構 */
  tiers: TrnTierDetailItem[];
  /** 額外費率 (ex: 0.2) */
  feeRatio: number;
  /** 下注倍率 (ex: 1.2) */
  betMultiplier: number;
  /** 最大參賽人數 */
  maxPlayers: number;
  /** 賽事描述 */
  description: string;
  /** 賽事圖片 */
  bannerImage: string;
  /** 賽事排名:  */
  raceData: TrnRaceUpdated;
}

export interface TrnPrizeNotification {
  type?: 'quick' | 'event';
  notificationId: string;
  /** 玩家的排名, 只能是大於0的整數 */
  rank: number | null;
  /** 玩家的獎金 */
  prize: number;
  playersList: ApRowListItem[];
}

export interface TrnQueueUpdated {
  tournamentId: string;
  tierId: string;
  maxPlayers?: number;
  currentPlayers: number;
}

/** 點擊Find Match之後的結果 */
export interface TrnRoomMatching {
  id: string;
}

/** Matching結束 競賽房間準備完成 */
export interface TrnRoomReady {
  /** 房間結束時間 Unix timestamp，單位為豪秒 */
  endTime: number;
  /** 起始玩家列表 */
  playersList: ApRowListItem[];
}

/** 競賽進行中 房間狀態更新 */
export interface TrnRaceUpdated {
  id: string;
  /** 玩家自己的排名 */
  rank: number | null;
  /** 目前總排名 */
  playersList: ApRowListItem[];
  /** 目前總獎池 */
  currentPool: number;
}


export interface TrnLeaderBoard {
  /** 目前頁面 */
  page: number;
  /** 每頁筆數 */
  pageSize: number;
  /** 總頁數 */
  totalPages: number;
   /** 本頁排名 */
  list: ApRowListItem[];
}

export interface TrnPlayerHistoryItem {
  name: string;
  id: string;
  type: 'quick' | 'event';
  rank: number;
  score: number;
  prize: number;
  /** unix timestamp, 單位為毫秒 */
  time: number;
  images: string;
  status: 'canceled' | 'finished' | 'settled' | string;
}

export interface TrnPlayerHistory {
    /** 目前頁面 */
  page: number;
  /** 每頁筆數 */
  pageSize: number;
  /** 總頁數 */
  totalPages: number;
  /** 歷史紀錄列表 */
  list: TrnPlayerHistoryItem[];
}

export type TrnDebugSignalKey = 'game-starting' | 'confirm-popup' | 'match-finished' |
  'created-notification' | 'status-bar' | 'hint' | 'event-popup' | 'game-result' |
  'bet-data' | 'show-exit' | 'players-list-loading' | 'waiting-result';