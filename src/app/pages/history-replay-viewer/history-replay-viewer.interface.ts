/**
 * Replay 項目資料介面
 */
export interface IReplayItemData {
  platformCode: string;
  ticketNo: string;
  gameId: string;
  multiplier : number;
  multiplierFromServer : number;
  [key: string]: any;
}
