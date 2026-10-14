export interface IHistoryEntry {
  time: string;
  ticket: string;
  type: string;
  fg: string;
  bg: string;
  max_payout: string;
  jp: string;
  free: string;
  free_no: string;
  bet: number;
  win: number;
}

export interface IHistoryList{
  total_count: number;
  total_bet: number;
  total_win: number;
  data: IHistoryEntry[];
}