export interface TabConfig {
  name: 'Info' | 'Ranking' | 'Prizes' | 'Rules';
  icon: string;
  label: string;
}

export interface BetRangeConfig {
  level: string;
  start: number | null;
  end: number | null
}

export interface MatchConfigItem {
  label: string;
  content: string;
}
