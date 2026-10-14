export type VersionType = {
  /** 此專案的版本號 */
  app: string;
  /** System資料夾的版本號 */
  sys: string;
}

/**
 * 此專案的版本資訊結構
 */
export type AppVersionInfo = {
  version: string;
  time: string;
  branch: string;
  sha: string;
};

declare global {
  interface Window {
    /** build 直接注入的版本資訊 */
    __APP_VERSION_INFO__?: string;
  }
}

export type SiteUIMode = 'in-game' | 'html' | null;

export interface LoginSetting {
  /** 遊戲ID */
  gameId: string;
  /** Socket 連線URL */
  socketUrl: string | null;
  /** Asset URL */
  assetUrl: string | null;
  /** 認證Token */
  authToken: string | null;
  /** 語言 */
  language: string;
  /** 離線模式 */
  offline: boolean;
}

interface GameInfoMap {
  [key: string]: string;
}

interface OGFairVerifyDisable {
  [key: string]: boolean;
}

interface UIPosition {
  CashDropOpenMainUICoinIconPosition: string;
  GameNameLabelPosition: string;
}


/** 
 * System設定檔
 * i18n字串表, 額外上傳的圖片, 跟`${assetUrl}/system/ 相關的素材
 * 都會使用這邊的版本號, 以確保在遊戲運行時載入的資源是正確的版本
 * */
export interface SystemRemoteConfig {
  /** System版本號 */
  LazyGlobalAppVersion: string;
  '1bulletin': string;
  AllowReplayHostName: string;
  AndroidMaxConcurrency: string;
  BigSuperMegaAnimation: string;
  BonusWalletMaxBetIndex: string;
  BuyFeature: string;
  CashDrop: string;
  CommonAssetbundleSp: Record<string, unknown>;
  CurrencyTable: string;
  DisableOrientationDetection: boolean;
  EnableCoupon: boolean;
  EncodeLog: boolean;
  FairVerify: string;
  FullScreen: boolean;
  GLI: string;
  GameInfo: GameInfoMap;
  GameName: string;
  IntoFreeGameMakeSpinSpeedNormal: boolean;
  OGCommonAssetbundleSp: Record<string, unknown>;
  OGCrashGoodLentency: number;
  OGCrashNormalLentency: number;
  OGFairVerifyDisable: OGFairVerifyDisable;
  OGFairVerifyList: string[];
  OGGhanaFairVerifyList: string[];
  OGMaxNoBetCountForDisonnect: number;
  PlayFakeVideo: number;
  RewardSystemAssetbundleSp: Record<string, unknown>;
  RewardSystemData: string;
  SendColletDataToServer: number;
  TelegramQRLink: string;
  UIPosition: UIPosition;
  WhatIsFair: string;
}
