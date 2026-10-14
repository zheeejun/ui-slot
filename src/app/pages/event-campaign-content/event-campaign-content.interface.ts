import { CampaignCondition, CampaignDisplayType, CampaignProgressStatus, CampaignStatus } from "../../services/campaign-ctrl/campaign-ctrl.interface";

export interface CampaignComponentData {
  baseType: 'freeBonus' | 'freeSpins';
  id: string;
  variant: CampaignStatus;
  image: string;
  imageAlt: string;
  title: string;
  description?: string;
  items?: string[];

  progressStatus?: CampaignProgressStatus;
  // displayType是freespin表示betCount和spinCount, displayType是freeBonus表示balance
  progressCurrent: number;
  progressTotal: number;

  /** 活動顯示條件, 只有在狀態為hidden時才會顯示 */
  condition?: CampaignCondition;
  
  balance: number;

  isFullyClaimed: boolean;
  
  /** unix timestamp milliseconds */
  beginTime: number;
  /** unix timestamp milliseconds */
  endTime: number;
  /** unix timestamp milliseconds */
  lastBetTime: number;
  turnoverRequirement: number;
  remainingTurnover: number;
  maxWithdraw: number;
  minWithdraw: number;
  displayType: CampaignDisplayType;
}