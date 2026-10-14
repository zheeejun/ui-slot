export interface ITrnHistoryItem {
  game?: string;
  status?: 'canceled' | 'finished' | 'settled' | string;
  id?: string;
  /** Unix timestamp */
  time?: number;
  rank?: number;
  currency?: string;
  prizeAmount?: number;
  variant?: 'quick' | 'event';
  image?: string;
}
