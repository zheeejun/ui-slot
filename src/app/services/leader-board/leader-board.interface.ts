/** Leader Board Item - 前端使用的格式 */
export interface ILeaderBoardItem {
  rank: string;
  game: string;
  /** 下注時間的 second timestamp. */
  time: number; 
  multiplier: number;
  multiplierFromServer: number;//原值.
  spin: number;
  currencyCode: string; // 幣別代碼，例如: "MYR"
  currencySymbol: string; // 幣別符號，例如: "RM","$".
  prize: number; // 贏得金額.
  image: string;
  prizeForSort: number; // 用於排序的下注值
  ticketNo: string; // 票號，來源為 ILeaderListItemResponse.ticket_no
  platformCode: string; // 平台代碼，來源為 ILeaderListItemResponse.platform_code
  gameId: string; // 遊戲代碼，來源為 ILeaderListItemResponse.game_code
  /** 排序完之後的順序 */
  sortedIndex?: number;
}

/** Leader Board User Type - 使用者類型 */
export const enum eLeaderUserType {
  /** 個人排行榜 */
  SingleUser = 'SingleUserLeaderBoard',
  /** 全部玩家排行榜 */
  AllUser = 'AllUserLeaderBoard'
}

/** Leader Board Game Scope - 遊戲範圍 */
export const enum eLeaderBoardGameScope {
  /** 當前遊戲 */
  Single = 'SingleGame',
  /** 全部遊戲 */
  All = 'AllGames'
}

/** Leader Board View Type */
export type LeaderBoardViewType = 'personal' | 'allPlayers';

/** Leader Board Tab Type */
export type LeaderBoardTabType = 'CURRENT GAMES' | 'ALL GAMES';


/** Leader Board List Request */
export interface ILeaderListRequest {
  Messages: string;
}

/** Leader Board List Response Item - 伺服器回傳的格式 */
export interface ILeaderListItemResponse {
  bet_time: number;        // 下注時間，例如: "2026-02-03 07:55:13"
  win: number;             // 贏得金額
  multiplier: number;      // 倍數
  bet_count: number;       // 下注次數
  ticket_no: string;       // 票號
  platform_code: string;   // 平台代碼，例如: "m88"
  currency_code: string;   // 幣別代碼，例如: "MYR"
  game_code: string;       // 遊戲代碼，例如: "10076"
  icon:string;              // 遊戲圖示 URL
}

/** Currency Data Response - 幣別資料回應格式 */
export interface ICurrencyDataResponse {
  currency_code: string;   // 幣別代碼，例如: "MYR"
  symbol: string;          // 幣別符號，例如: "RM"
  conversion_rate: number; // 兌換率.
  amount_ratio: number;    // 金額比例
  to_myr_ratio: number;    // 兌換馬幣比例
}

/** Leader Board Message Response - 排行榜訊息回應格式 */
export interface ILeaderBoardMessageResponse {
  tag: string;                           // client 自我辨識的訊息標籤.
  data: ILeaderListItemResponse[];           // 排行榜資料列表
  currency?: ICurrencyDataResponse[];         // 幣別資料列表
  default_currency_conversion_rate?: number;  // 預設幣別兌換率
}

