import { ServerHistoryItemType } from "../history-ctrl/history-server.interface";

/**
 * 歷史記錄 URI Ticket 資料, 傳給 game 的資料結構
 * 對應 IHistoryURITicketData
 */
export interface IHistoryURITicketData {
  platform: string;
  ticketNo: string;
  env?: string;
  replay?: string;
  encoderequired?: string;
}
/**
 * Leaderboard URI Ticket 資料, 傳給 game 的資料結構
 * 對應 ILeaderboardURITicketData
 */
export interface ILeaderboardURITicketData {
  PlatformCode: string;
  TicketNo: string;
  Multiplier : number; //Server 原值.
  GameCode: string;
  ReplayType: string;
  AccountID: string;
}

/**
 * Replay 資料
 */
export interface ReplayData {
  gameId: string;
  userId?: string;
  timestamp?: number;
  [key: string]: any;
}


interface HistoryTicketDataType {
  time: string;
  ticket: string;
  type?: ServerHistoryItemType;
  fg: string;
  bg: string;
  jp: string;
  free: string;
  free_no: string;
  bet: number;
  win: number;
  campaign_id: string;
  cd_amount: number | null;
  mode: string;
}

/**
 * 整包History Replay拿到的資料結構
 */
export interface TicketMessageResponse {
  AmountRatio?: string;
  CurrencyCode?: string;
  CurrencySymbol?: string;
  CpSettle?: any;
  DecimalPlaces?: string;
  DisableComma?: string;
  GameCode?: string;
  GameMode?: any;
  HistoryDetailData?: any;
  HistoryTicketData?: HistoryTicketDataType;
  Platform?: string;
  PlatformCode?: string;
  BrandCode?: string;
  SiteCode?: string;
  Ts?: any;
  X?: any;
  Bg?: any;
}

/** History Replay 的縮址 */
export interface ShortURLMessageResponse {
  url: string;                           // url.
}


export type HistoryReplayMessageResponse = ShortURLMessageResponse | TicketMessageResponse ;