/**
 * 與後端溝通的 Campaign List, PromoCode 相關介面
 */

export enum PromoEnum {
  CashDrop = 4,
  FreeBonus = 5,
  FreeSpins = 6
}

/** Client請求Promo Code的訊息 */
export interface PromoCodeInfoRequestMsg {
  coupon_code: string;
}

/** Server回傳的Promo Code結果 */
export interface PromoCodeInfoResultMsg {
  /** 錯誤代碼，沒錯誤會回傳"0" */
  error_code: string;
  coupon_code: string;
  campaignlist: CampaignLegacyNoteType[];
  campaign_group_list: CampaignGroupNoteType[];
}

/** Server傳來的在Campaign List裡面Free Bonus結構 */
export interface CampaignLegacyFreeBonusNoteType {
  // ---- 必填（每個物件都有） ----
  /** 活動 ID */
  campaign_id: string;
  /** 活動名稱 */
  name: string;
  /** 活動類型 (5: Free Bonus) */
  type: PromoEnum.FreeBonus;
  /** 活動結束時間 YYYY-MM-DD HH:mm:ss*/
  endtime: string;
  /** 彈窗訊息 */
  popup_msg: number;

  // ---- 選填（部分物件才有） ----
  /** 活動開始時間 YYYY-MM-DD HH:mm:ss*/
  begintime?: string; 
  /** 最後下注時間 YYYY-MM-DD HH:mm:ss*/
  last_bet_time?: string;

  /** 錢包 ID */
  bw_id?: number;
  /** 錢包餘額 */
  bw_balance?: number;

  // 活動顯示條件: 下注次數
  /** 已下注次數 */
  bet_count?: number;
  /** 下注次數限制 */
  bet_count_limit?: number;

  // 活動顯示條件: 週轉量（流水）
  /** 已週轉量 */
  turnover?: number;
  /** 週轉量限制 */
  turnover_limit?: number;

  // 提領/換現金條件
  /** 已提領金額 */
  withdraw_amount?: number;              // 已提領金額
  /** 最低可提領門檻 */
  withdraw_lower_limit?: number;         // 最低可提領門檻
  /** 流水門檻 */
  withdraw_turnover_limit?: number;      // 流水門檻
  /** 最高可提領上限 */
  withdraw_upper_limit?: number;         // 最高可提領上限

  // 顯示/通知
  /** 1: in progress, 2: completed, 0: hidden */
  visible?: number;
  /** 活動通知訊息 */
  campaign_notify_message?: 'claim_reward_again' | string;

  /** hidden 狀態下的 Free Bonus 金額 */
  freebonus_amount?: number; // Free Bonus 金額
}

/** Server傳來Campaign List裡面的Free Spin結構 */
export interface CampaignLegacyFreeSpinNoteType {
  // ---- 必填（每個物件都有） ----
  /** 活動 ID */
  campaign_id: string;
  /** 活動名稱 */
  name: string;
  /** 活動類型 (6: Free Spins) */
  type: PromoEnum.FreeSpins;          
  /** 活動結束時間 YYYY-MM-DD HH:mm:ss*/
  endtime: string;
  /** 彈窗訊息 */
  popup_msg: number;

  // ---- 選填（部分物件才有） ----
  /** 活動開始時間 YYYY-MM-DD HH:mm:ss*/
  begintime?: string;
  /** 最後下注時間 YYYY-MM-DD HH:mm:ss*/
  last_bet_time?: string;

  /** 錢包 ID */
  bw_id?: number;
  /** 錢包餘額 */
  bw_balance?: number;

  // 活動顯示條件: 下注次數
  /** 已下注次數 */
  bet_count?: number;
  /** 下注次數限制 */
  bet_count_limit?: number;

  // 活動顯示條件: 週轉量（流水）
  /** 已週轉量 */
  turnover?: number;
  /** 週轉量限制 */
  turnover_limit?: number;

  // 提領/換現金條件
  /** 已提領金額 */
  withdraw_amount?: number;              // 已提領金額
  /** 最低可提領門檻 */
  withdraw_lower_limit?: number;         // 最低可提領門檻
  /** 流水門檻 */
  withdraw_turnover_limit?: number;      // 流水門檻
  /** 最高可提領上限 */
  withdraw_upper_limit?: number;         // 最高可提領上限

  // 顯示/通知
  /** 1: in progress, 2: completed, 0: hidden */
  visible?: number;
  /** 活動通知訊息 */
  campaign_notify_message?: 'claim_reward_again' | string;

  // Free Spin 專有欄位
  /** 是否為Free Spin活動 */
  is_freespin?: boolean;
  /** 活動初始的Free Spin次數 */
  freespin_total_count?: number;
  /** 活動剩餘的Free Spin次數 */
  freespin_remaining_count?: number;
  /** 活動每把FreeSpin的Bet金額 */
  freespin_single_bet_amount?: number;
  /** 活動總贏取金額 */
  freespin_total_win_amount?: number;

  /** hidden 狀態下的 Free Spin 次數 */
  freespin_count?: number; // Free Spin 次數
}


/** Server傳來在Campaign List裡面 Cash Drop 活動列表項目 */
export interface CampaignCashDropNoteType {
  /** 活動開始範圍 (時間範圍) */
  begin_range: string;
  /** 活動開始時間 YYYY-MM-DD HH:mm:ss (時區0)*/
  begintime: string;
  /** 活動ID */
  campaign_id: string;
  /** 是否為中獎 */
  cashdrop_iswin: boolean;
  /** 主要掉落金額 */
  cashdrop_main_amount: number;
  /** 主要掉落數量 */
  cashdrop_main_count: number;
  /** 主要掉落序號 */
  cashdrop_main_no: string;
  /** 主要掉落最大金額 */
  cashdrop_max_main_amount: number;
  /** 神祕獎項 */
  cashdrop_mystery_prizes: any[] | null;
  /** 活動結束範圍 (時間範圍) */
  end_range: string;
  /** 活動結束時間 YYYY-MM-DD HH:mm:ss (時區0)*/
  endtime: string;
  /** 圖片路徑 */
  image: string;
  /** 是否全天活動 */
  is_all_day: boolean;
  /** 最低下注金額 */
  min_bet_amount: number;
  /** 活動名稱 */
  name: string;
  /** 彈窗訊息編號 */
  popup_msg: number;
  /** 貨幣符號 */
  symbol: string;
  /** 活動類型 (4: Cash Drop) */
  type: number;
  /** 顯示狀態 (1: 可見, 其他: 隱藏) */
  visible: number;
}

/** Server傳來的Campaign結構 */
export type CampaignLegacyNoteType = CampaignLegacyFreeBonusNoteType | CampaignLegacyFreeSpinNoteType | CampaignCashDropNoteType;

/** Server傳來的 Campaign Group 結構 */
export interface CampaignGroupNoteType {
  /** 橫幅圖片檔名 */
  banner_url: string;
  /** 群組內的 Campaign ID 列表 */
  campaign_id_list: string[];
  /** 群組描述 */
  description: string;
  /** 群組 ID */
  group_id: string;
  /** 群組標題 */
  title: string;
  /** 排序權重 */
  weight: number;
}