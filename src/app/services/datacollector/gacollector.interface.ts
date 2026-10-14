/** GA4 事件的平台資訊 */
export interface GAPlatformInfo {
  /** 平台 ID */
  pid: string;
  /** 品牌名稱 */
  brand: string;
  /** 站點名稱 */
  site: string;
}

/** GA4 按鈕點擊事件資料 (只需要傳 buttonName，其餘由 GACollectorService 自動填入) */
export interface GAButtonClickEvent {
  /** 按鈕名稱 */
  buttonName: string;
}

/** GA4 登入後不會變動的 Session 資料 (由 loginResult 自動取得) */
export interface GASessionData {
  /** 遊戲 ID */
  gameId: string;
  /** 貨幣代碼 (例如: MYR, USD) */
  currency: string;
  /** 貨幣符號 (例如: RM, $) */
  currencySymbol: string;
  /** 使用者 ID */
  userId: string;
}

/** GA4 Spin 結果事件資料 (gameId, currency, currencySymbol, utcTime, userId 由 Session 自動填入) */
export interface GASpinResultEvent {
  /** 回合數 */
  round: number;
  /** 下注索引 */
  betIndex: number;
  /** 贏得比率 */
  winRatio: number;
  /** 下注類型 */
  type: string;
  /** 轉速 */
  spinSpeed: number;
  /** 淨金額變動 */
  netMoneyChange: number;
}

/** GA4 自訂事件資料 (通用) */
export interface GACustomEvent {
  /** 事件名稱 */
  eventName: string;
  /** 事件參數 (鍵值對) */
  params: Record<string, string | number | boolean>;
}

/** GA4 事件參數 (送出至 gtag 的完整物件) */
export interface GAEventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * TO_GA_ID 對應表 (To google analytics Log ID)
 * 對應 Cocos Creator 端的 cGameObjectID.ToServerLogID
 * 統一管理所有 GA 事件名稱，避免各頁面重複宣告
 */
export const TO_GA_ID = {
  // 音效/音樂
  MusicSwitch: 'MusicSwitch',
  SoundSwitch: 'SoundSwitch',
  VibrationSwitch: 'VibrationSwitch',

  // History
  HistoryPageStayTime: 'HistoryPageStayTime',
  HistorySortWithToday: 'HistorySortWithToday',
  HistorySortWith7Days: 'HistorySortWith7Days',
  HistorySortWithCustom: 'HistorySortWithCustom',
  HistoryWinLose: 'HistoryWinLose',
  HistoryReplayBySelectedTicket: 'HistoryReplayBySelectedTicket',

  // Info
  InfoPageGuide: 'InfoPageGuide',
  InfoPagePayTable: 'InfoPagePayTable',
  InfoPageFeature: 'InfoPageFeature',

  // AutoSpin
  AutoSpin10: 'AutoSpin10',
  AutoSpin50: 'AutoSpin50',
  AutoSpin100: 'AutoSpin100',
  AutoSpin300: 'AutoSpin300',
  AutoSpinInfinity: 'AutoSpinInfinity',

  // Buy Feature
  BuyFeatureStayTime: 'BuyFeatureStayTime',
  PlayWithBuyFeature: 'PlayWithBuyFeature',
  PlayWithBuyFeatureDemo: 'PlayWithBuyFeatureDemo',
  PlayWithDoubleChance: 'PlayWithDoubleChance',

  // Spin
  SpinResult: 'SpinResult',
  PlayRounds: 'PlayRounds',
  IntoFreeGame: 'IntoFreeGame',
  DoGameSkip: 'DoGameSkip',

  // Bet
  CashBetIndex: 'CashBetIndex',
  PromoBetIndex: 'PromoBetIndex',

  // Download
  DownloadTime: 'DownloadTime',
  DownloadFinishClickToMainGame: 'DownloadFinishClickToMainGame',

  // CashDrop
  CashDropLoginCampaignInfoPage: 'CashDropLoginCampaignInfoPage',
  CashDropCloseBetNotEnoughButton: 'CashDropCloseBetNotEnoughButton',
  CashDropInfoPrize: 'CashDropInfoPrize',
  CashDropInfoWinner: 'CashDropInfoWinner',
  CashDropInfoWinnerChangeSort: 'CashDropInfoWinnerChangeSort',
  CashDropInfoRule: 'CashDropInfoRule',
  CashDropChangeCampaign: 'CashDropChangeCampaign',
  BonusWalletCampaignDialog: 'BonusWalletCampaignDialog',

  // Reward System
  RSIconButton: 'RSIconButton',
  RSVIPPrivilegeButton: 'RSVIPPrivilegeButton',
  RSVIPGuidelineButton: 'RSVIPGuidelineButton',
  RSVIPPartiallyAvailableButton: 'RSVIPPartiallyAvailableButton',
  RSVIPNextLevelButton: 'RSVIPNextLevelButton',
  RSVIPButton: 'RSVIPButton',
  RSVIPHistory: 'RSVIPHistory',
  RSStoreButton: 'RSStoreButton',
  RSStoreMyItemsButton: 'RSStoreMyItemsButton',
  RSStoreNotAvailabileItemsButton: 'RSStoreNotAvailabileItemsButton',
  RSStoreSelectableItemsButton: 'RSStoreSelectableItemsButton',
  RSStoreHistoryButton: 'RSStoreHistoryButton',
  RSStoreItemHistoryButton: 'RSStoreItemHistoryButton',
  RSStoreUseMyItem: 'RSStoreUseMyItem',
  RSStoreRecommandGameButton: 'RSStoreRecommandGameButton',
  RSLuckyWheelButton: 'RSStoreLuckyWheelButton',
  RSLuckyWheelTicketButton: 'RSStoreLuckyWheelTicketButton',
  RSLuckyWheelHistoryButton: 'RSStoreLuckyWheelHistoryButton',
  RSLuckyWheelSpinButton: 'RSLuckyWheelSpinButton',
  RSHistoryButton: 'RSHistoryButton',
  RSHistoryChangeTypeButton: 'RSHistoryChangeTypeButton',
} as const;

/** TSLID 字串型別 */
export type TSLIDType = typeof TO_GA_ID[keyof typeof TO_GA_ID];

/** Info 頁籤 TabId -> TSLID 對應 */
export const InfoTabGAMap: Record<string, string> = {
  'Pay Table': TO_GA_ID.InfoPagePayTable,
  'Feature': TO_GA_ID.InfoPageFeature,
  'Guide': TO_GA_ID.InfoPageGuide,
};

/** History 日期篩選 DateRangeOption -> TSLID 對應 */
export const HistoryDateOptionGAMap: Record<string, string> = {
  'today': TO_GA_ID.HistorySortWithToday,
  'last7days': TO_GA_ID.HistorySortWith7Days,
  'custom': TO_GA_ID.HistorySortWithCustom,
};
