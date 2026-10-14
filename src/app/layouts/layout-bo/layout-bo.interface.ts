import { serverProto } from "../../shared/Protobuf/new_proto";
import { IServerHistorySpinDetailSeed, ServerHistoryItemType } from "../../services/history-ctrl/history-server.interface";

/** `BoHistoryResult` 的 HistoryTicketData 欄位 */
export interface BoHistoryTicketData {
  time: string;
  ticket: string;
  type: ServerHistoryItemType;
  fg: string;
  bg: string;
  jp: string;
  free: string;
  free_no: string;
  bet: number;
  win: number;
  campaign_id: string;
  cd_amount: number | null;
  mode: string;
}

/** `BoHistoryResult` 的 HistoryDetailData 欄位 */
export interface BoHistoryDetailData {
  info: {
    type: ServerHistoryItemType;
    free_no: string;
    before_balance: string;
    after_balance: string;
    amount: string;
  };
  seed: IServerHistorySpinDetailSeed;
  result: serverProto.Ispin_result;
  jp: {
    status: string | null;
    before_balance: string;
    after_balance: string;
  };
}

/** `/web/history/ticket/result` 的回應格式，platform + ticketNo 直接以 HTTP GET 撈取單筆 ticket 結果，不經過 game socket */
export interface BoHistoryResultInterface {
  AmountRatio: string;
  HistoryTicketData: BoHistoryTicketData;
  HistoryDetailData: BoHistoryDetailData;
  CurrencyCode: string;
  CurrencySymbol: string;
  DecimalPlaces: string;
  DisableComma: string;
  Platform: string;
  BrandCode: string;
  SiteCode: string;
  GameCode: string;
  LangCode: string;
  PlatformCode: string;
  X: string;
  Ts: string;
}
