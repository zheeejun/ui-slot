import { CampaignCashDropNoteType } from "../campaign-ctrl/campaign-info-msg.interface";
import { ICashDropRuleData } from "./cash-drop-info-msg.interface";

/** 前端使用的Cash Drop 格式 */
export interface ICashDrop {
  id: string;
  name: string;
  /** timestamp unit: milliseconds */
  beginTime: number;
  /** timestamp unit: milliseconds */
  endTime: number;
  /** 最低下注金額 */
  minBet: number;
  rawData: CampaignCashDropNoteType;
}

/** Prize頁面 每一筆Entry格式 */
export interface ICashDropPrize {
  index: number;
  prize: number;
  left: number;
}

/** Winner頁面 每一筆Entry格式 */
export interface ICashDropWinner {
  isYou: boolean;
  index: number;
  player: string;
  prize: number;
}

/** Cash Drop 全部頁面格式 */
export interface ICashDropPage {
  prizes: ICashDropPrize[];
  latestWinners: ICashDropWinner[];
  biggestWinners: ICashDropWinner[];
  mostWinners: ICashDropWinner[];
  youWins: ICashDropWinner[];
  ruleData: ICashDropRuleData | null;
}