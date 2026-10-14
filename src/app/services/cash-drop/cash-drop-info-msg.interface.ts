/**
 * Cash Drop 與後端通訊的訊息介面定義
 */

import { eCashDropMessageType } from "../../../chiikawa/Promo/CashDrop/CashDropDataType";


/** 獎品資訊 */
interface ICashDropPrize {
  /** 獎品金額 */
  prize_amount: number;
  /** 剩餘獎品數量 */
  prize_left: number;
  /** 總獎品數量 */
  prize_total: number;
}

/** 中獎者資訊 */
export interface ICashDropWinnerData {
  /** 是否為自己 (-1: 否, 其他值: 是) */
  is_you: number;
  /** 玩家ID (可能會遮罩) */
  player_id: string;
  /** 貨幣類型 */
  currency: string;
  /** 中獎時間 */
  prize_time: string;
  /** 中獎金額 */
  prize_amount: number;
  /** 總中獎金額 */
  prize_total: number;
  /** 中獎次數 */
  prize_count: number;
}

/** 規則資料 */
export interface ICashDropRuleData {
  /** 活動ID */
  name: string;
  /** 開始時間 */
  begin_time: string;
  /** 結束時間 */
  end_time: string;
  /** 是否全天 (1: 是, 其他: 否) */
  all_day: string;
  /** 開始範圍 */
  begin_range: string;
  /** 結束範圍 */
  end_range: string;
  /** 最低下注金額 */
  min_bet_amount: number;
  /** 總獎品數量 */
  total_prizes_count: number;
  /** 總獎品金額 */
  total_prizes_amount: number;
  /** 遊戲代碼列表 */
  game_code_list: string[];
}

/** 獎品列表請求 */
export interface ICashDropPrizeListMsgRequest {
  /** Cash Drop 類型 (2: 獎品列表) */
  cd_type?: number;
  /** 活動ID */
  campaign_id: string;
  /** 貨幣類型 */
  currency: string;
}

/** 獎品列表回應 */
export interface ICashDropPrizeListMsgResponse {
  /** 錯誤代碼 */
  error_code: string;
  /** Cash Drop 類型 */
  cd_type: number;
  /** 活動ID */
  campaign_id: string;
  /** 總行數 */
  total_row: number;
  /** 餘額 */
  balance: number;
  /** 獎品列表 */
  prize_list: ICashDropPrize[];
  /** 中獎者列表 */
  winner_list: ICashDropWinnerData[];
  /** 規則資料 */
  rule_data: ICashDropRuleData;
}

/** 規則資料請求 */
export interface ICashDropRuleDataMsgRequest {
  /** Cash Drop 類型 (3: 規則資料) */
  cd_type?: number;
  /** 活動ID */
  campaign_id: string;
  /** 貨幣類型 */
  currency: string;
  /** 語言 */
  language: string;
}

/** 規則資料回應 */
export interface ICashDropRuleDataMsgResponse {
  /** 錯誤代碼 */
  error_code: string;
  /** Cash Drop 類型 */
  cd_type: number;
  /** 活動ID */
  campaign_id: string;
  /** 總行數 */
  total_row: number;
  /** 餘額 */
  balance: number;
  /** 獎品列表 */
  prize_list: ICashDropPrize[];
  /** 中獎者列表 */
  winner_list: ICashDropWinnerData[];
  /** 規則資料 */
  rule_data: ICashDropRuleData;
}

/** 最新中獎者列表請求 */
export interface ICashDropLatestWinnerListMsgRequest {
  /** Cash Drop 類型 (4: 最新中獎者) */
  cd_type?: number;
  /** 活動ID */
  campaign_id: string;
  /** 貨幣類型 */
  currency: string;
  /** 頁碼 */
  page: number;
  /** 每頁行數 */
  row_count: number;
}

/** 最新中獎者列表回應 */
export interface ICashDropLatestWinnerListMsgResponse {
  /** 錯誤代碼 */
  error_code: string;
  /** Cash Drop 類型 */
  cd_type: number;
  /** 活動ID */
  campaign_id: string;
  /** 總行數 */
  total_row: number;
  /** 餘額 */
  balance: number;
  /** 獎品列表 */
  prize_list: ICashDropPrize[];
  /** 中獎者列表 */
  winner_list: ICashDropWinnerData[];
}

/** 最大獎金中獎者列表請求 */
export interface ICashDropBiggestWinnerListMsgRequest {
  /** Cash Drop 類型 (5: 最大獎金中獎者) */
  cd_type?: number;
  /** 活動ID */
  campaign_id: string;
  /** 貨幣類型 */
  currency: string;
  /** 頁碼 */
  page: number;
  /** 每頁行數 */
  row_count: number;
}

/** 最大獎金中獎者列表回應 */
export interface ICashDropBiggestWinnerListMsgResponse {
  /** 錯誤代碼 */
  error_code: string;
  /** Cash Drop 類型 */
  cd_type: number;
  /** 活動ID */
  campaign_id: string;
  /** 總行數 */
  total_row: number;
  /** 餘額 */
  balance: number;
  /** 獎品列表 */
  prize_list: ICashDropPrize[];
  /** 中獎者列表 */
  winner_list: ICashDropWinnerData[];
}

/** 最常中獎者列表請求 */
export interface ICashDropMostWinnerListMsgRequest {
  /** Cash Drop 類型 (6: 最常中獎者) */
  cd_type?: number;
  /** 活動ID */
  campaign_id: string;
  /** 貨幣類型 */
  currency: string;
  /** 頁碼 */
  page: number;
  /** 每頁行數 */
  row_count: number;
}

/** 最常中獎者列表回應 */
export interface ICashDropMostWinnerListMsgResponse {
  /** 錯誤代碼 */
  error_code: string;
  /** Cash Drop 類型 */
  cd_type: number;
  /** 活動ID */
  campaign_id: string;
  /** 總行數 */
  total_row: number;
  /** 餘額 */
  balance: number;
  /** 獎品列表 */
  prize_list: ICashDropPrize[];
  /** 中獎者列表 */
  winner_list: ICashDropWinnerData[];
}

/** 您的中獎列表請求 */
export interface ICashDropYouWinListMsgRequest {
  /** Cash Drop 類型 (7: 您的中獎) */
  cd_type?: number;
  /** 活動ID */
  campaign_id: string;
  /** 貨幣類型 */
  currency: string;
  /** 頁碼 */
  page: number;
  /** 每頁行數 */
  row_count: number;
}

/** 您的中獎列表回應 */
export interface ICashDropYouWinListMsgResponse {
  /** 錯誤代碼 */
  error_code: string;
  /** Cash Drop 類型 */
  cd_type: number;
  /** 活動ID */
  campaign_id: string;
  /** 總行數 */
  total_row: number;
  /** 餘額 */
  balance: number;
  /** 獎品列表 */
  prize_list: ICashDropPrize[];
  /** 中獎者列表 */
  winner_list: ICashDropWinnerData[];
}

/** 定義每個 Cash Drop 訊息的 request/response 格式 */
export type CashDropMsgMap = {
  /** 點擊神秘獎勵 (暫定內容) */
  /*ClickMystery: {
    request: string;
    response: string;
  };*/
  /** 獎品列表 */
  PrizeList: {
    request: ICashDropPrizeListMsgRequest;
    response: ICashDropPrizeListMsgResponse;
  };
  /** 規則資料 */
  RuleData: {
    request: ICashDropRuleDataMsgRequest;
    response: ICashDropRuleDataMsgResponse;
  };
  /** 最新中獎者列表 */
  LatestWinnerList: {
    request: ICashDropLatestWinnerListMsgRequest;
    response: ICashDropLatestWinnerListMsgResponse;
  };
  /** 最大獎金中獎者列表 */
  BiggestWinnerList: {
    request: ICashDropBiggestWinnerListMsgRequest;
    response: ICashDropBiggestWinnerListMsgResponse;
  };
  /** 最常中獎者列表 */
  MostWinnerList: {
    request: ICashDropMostWinnerListMsgRequest;
    response: ICashDropMostWinnerListMsgResponse;
  };
  /** 您的中獎列表 */
  YouWinList: {
    request: ICashDropYouWinListMsgRequest;
    response: ICashDropYouWinListMsgResponse;
  };
  /** 關閉 Cash Drop */
  /*CloseCashDrop: {
    request: string;
    response: string;
  };*/
};

/** 所有 Cash Drop 訊息的 key*/
export type CashDropMsgKey = keyof CashDropMsgMap; // "ClickMystery" | "PrizeList" | "RuleData" | "LatestWinnerList" | "BiggestWinnerList" | "MostWinnerList" | "YouWinList" | "CloseCashDrop"

/** Cash Drop 通用請求類型 */
export type CashDropRequestMsgType = CashDropMsgMap[CashDropMsgKey]['request'];

/** Cash Drop 通用回應類型 */
export type CashDropResponseMsgType = CashDropMsgMap[CashDropMsgKey]['response'];

/** Cash Drop 通用類型 */
export type CashDropMsgType = CashDropRequestMsgType | CashDropResponseMsgType;

/** Cash Drop Key對應的Request */
export type CashDropRequestMsgOf<K extends CashDropMsgKey> = CashDropMsgMap[K]['request'];

/** Cash Drop Key對應的Response */
export type CashDropResultMsgOf<K extends CashDropMsgKey> = CashDropMsgMap[K]['response'];

/** Cash Drop Key對應的cd_type, 用來判斷info是否為Cash Drop訊息 */
export const CashDropCodeMap: Record<CashDropMsgKey, eCashDropMessageType> = {
  //ClickMystery: eCashDropMessageType.eCDMT_cd_type_Click_Mystery,
  PrizeList: eCashDropMessageType.eCDMT_cd_type_Prize_List,
  RuleData: eCashDropMessageType.eCDMT_cd_type_Rule_Data,
  LatestWinnerList: eCashDropMessageType.eCDMT_cd_type_Latest_Winner_List,
  BiggestWinnerList: eCashDropMessageType.eCDMT_cd_type_Biggest_Winner_List,
  //略過 MostWinnerList
  MostWinnerList: eCashDropMessageType.eCDMT_cd_type_Most_Winner_List,
  YouWinList: eCashDropMessageType.eCDMT_cd_type_You_Win_List,
  //CloseCashDrop: eCashDropMessageType.eCDMT_cd_type_Close_Cash_Drop,
};

/** Cash Drop 中獎者列表請求 (Winner List類型) */
export type CashDropWinnerListRequestMsgType = ICashDropMostWinnerListMsgRequest | ICashDropYouWinListMsgRequest | ICashDropLatestWinnerListMsgRequest | ICashDropBiggestWinnerListMsgRequest;

/** 一整包Cash Drop結果 */
export interface CashDropMsgFullResponse {
  prizeList: ICashDropPrizeListMsgResponse;
  ruleData: ICashDropRuleDataMsgResponse;
  latestWinner: ICashDropLatestWinnerListMsgResponse;
  biggestWinner: ICashDropBiggestWinnerListMsgResponse;
  mostWinner: ICashDropMostWinnerListMsgResponse;
  youWin: ICashDropYouWinListMsgResponse;
}
