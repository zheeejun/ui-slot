export type OgFairnessTabType = 'seeds' | 'verify';
export type OgFairnessView = 'fairness' | 'provable';

/** 歷史明細通知父層開啟公平性視窗時所需的初始狀態。 */
export interface OgFairnessRequest {
  view: OgFairnessView;
  selectedTab: OgFairnessTabType;
  seedData: OgSeedData | null;
}

/** 用來描述公平性種子資料的結構 */
export interface OgSeedData {
  serverSeed: string;
  serverSeedHashed: string;
  clientSeed: string;
  nonce: string;
  rtp: string;
  difficulty?: string;
  // 之後有其他遊戲需要的欄位再加
}
