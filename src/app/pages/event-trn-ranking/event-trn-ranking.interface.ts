export interface RankingRow {
  number: string;
  username: string;
  score: string;
  currency: string;
  prize: string;
  isCurrentUser?: boolean;
}

export interface TableHeader {
  label: string;
  width: string;
  align: string;
}
