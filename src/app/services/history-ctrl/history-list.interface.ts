import { serverProto } from "../../shared/Protobuf/new_proto";
import { IServerHistorySpinDetailSeed, ServerHistoryItemType } from "./history-server.interface";

export type HistoryRewardType = 'Normal Game' | 'Tournament Reward' | 'Bonus Wallet' | 'Bonus Withdraw' | 'CashDrop Reward';
export interface HistoryListItem {
  /** 無資料 */
  date: string;
  /** 格式: YYYY-MM-DD HH:mm:ss */
  time: string;
  /** 原始類型 */
  type: ServerHistoryItemType;
  /** 獎勵類型描述 */
  rewardType: HistoryRewardType;
  /** buy feature的模式: bf, bf1, bf2, dc */
  buyFeatureMode: string;
  /** 交易識別名稱或代號 */
  transaction: string;
  /** 貨幣單位（例如 USD, EUR 等） */
  currency: string;
  /** 投注金額 */
  bet: number;
  /** 獲勝金額 */
  win: number;
  /** 是否有回放，0 或 1 */
  replay: boolean;
  /** bf1 = fg, bf2 = bg */
  featureType?: string;
  /** 是否使用dc (or dc1, dc2...) */
  isDoubleChance?: boolean;
  /** 是否使用 buy feature (bf, bf1, bf2) */
  isBuyFeature?: boolean;
  /** 是否是加上星號 (進入Free Game) */
  isStarred?: boolean;
  /** 是否加上獎盃: Tournament模式 */
  isTrophy?: boolean;
  /** 是否加上黃色標籤: Tournament入帳 */
  isTrnHighlight?: boolean;
  /** 是否加上綠色標籤: Cash Drop入帳 */
  isCashDropHighlight?: boolean;
  /** 是否加上紫色標籤: Campaign 入帳 */
  isCampaignHighlight?: boolean;
  /** 是否為贏得的紀錄 */
  isWin?: boolean;
  /** 是否為最大投注 */
  maxPayout?: boolean;
  /** 點開 detail 時沿用 list row 的背景色 */
  detailTheme?: 'gray' | 'dark';
}

/** History API 回應格式 */
export interface IHistoryResponse {
  items: HistoryListItem[];
  total_count: number;
  total_bet: number;
  total_win: number;
}

/** History 一般Spin 詳細資訊 */
export interface HistorySpinDetail {
  beforeBalance: number;
  afterBalance: number;
  /** 每一Round 的贏分 */
  winList: number[];
  /** 每一Round 加了贏分的 balance */
  balanceList: number[];
  result: serverProto.Ispin_result;
  seed?: IServerHistorySpinDetailSeed;
}

export interface HistoryCampaignDetail {
  /** 活動名稱 */
  name: string;
  /** 提領金額 */
  amount: number;
  /** 到期時間 (unix timestamp milliseconds) */
  expiryDate: number;
  /** 流水需求金額 */
  turnoverRequirement: number;
  /** 剩餘金額 */
  bonusBalance: number;
  /** 最大提現金額 */
  maxWithdraw: number;
  /** 最小提現金額 */
  minWithdraw: number;
}

export interface HistoryCashDropDetail {
  /** 獎金入帳前餘額 */
  beforeBalance: number;
  /** 獎金入帳後餘額 */
  afterBalance: number;
  /** 主獎金額 */
  mainPrize: number;
  /** 神秘獎金額 */
  mysteryPrize: number;
  /** 總獲勝金額 */
  totalWin: number;
  /** (unix timestamp milliseconds) */
  runningTime: number;
  /** (unix timestamp milliseconds) */
  settledTime: number;
}
