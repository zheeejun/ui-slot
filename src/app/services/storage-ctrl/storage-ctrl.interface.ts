import { SiteUIMode } from "../client-session/client-session.interface";
import { LanguageType } from "../player-wallet/language.type";

export interface StorageLoginSetting {
  token: string;
  url: string;
  assetUrl: string;
  gameId: string;
  uiMode: SiteUIMode;
  language: LanguageType;
  cocosEditorHost?: string;
  cloudHost?: string;
}

export type StorageCampaignGroupsClicked = string[];

export type StorageCashDropClicked = string[];

export interface StorageEventRunning {
  id: string | null;
  betDataEnabled: boolean;
}

export interface StorageLoggerSettings {
  logEnabled: boolean;
  iframeLogEnabled: boolean;
  iframeSocketLogEnabled: boolean;
  iframeReplayLogEnabled: boolean;
  iframeHistoryLogEnabled: boolean;
  apiLogEnabled: boolean;
  leaderboardLogEnabled: boolean;
  rewardSystemLogEnabled: boolean;
  campaignLogEnabled: boolean;
  ogLogEnabled: boolean;
}

export interface StorageCampaignSetting {
  mode: 'legacy' | 'current'; // 預設為 'legacy'
}
export interface StorageCampaignMessageShown {
  /** 今天已經提示過的 join 活動列表
   * 每個元素包含活動的 id 以及提示的時間戳
   */
  joined: {id: string, time: number}[];
  /**
   * 今天已經提示過的 underCondition 活動列表
   * 每個元素包含活動的 id 以及提示的時間戳
   */
  underCondition: {id: string, time: number}[];
  /** 今天已經提示過的 received 活動列表
   * 每個元素包含活動的 id 以及提示的時間戳
   */
  received: {id: string, time: number}[];
  /** 今天已經提示過的 onGoing 活動列表
   * 每個元素包含活動的 id 以及提示的時間戳
   */
  onGoing: {id: string, time: number}[];
}

export interface StorageGameIframeSetting {
  closeInGameBuyFeature: boolean;
  closeInGameOpenPromo: boolean;
}