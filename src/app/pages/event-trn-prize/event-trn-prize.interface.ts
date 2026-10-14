export interface PrizeRow {
  number: string;
  winner: number;
  prize: number;
  tickets: number;
}

export interface PrizeItemText {
  key?: string;
  text: string;
}

export interface PrizeSection {
  items: PrizeItemText[];
}
