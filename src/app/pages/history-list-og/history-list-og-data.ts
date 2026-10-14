export interface HistoryListOGItem {
  date: string;
  time: string;
  transaction: string;
  currency: string;
  bet: number;
  win: number;
  isWin?: boolean;
  detailTheme?: 'gray' | 'dark';
  maxPayout:boolean;
}

export interface HistorySpinDetail {
  beforeBalance: number;
  afterBalance: number;
  winList: number[];
  balanceList: number[];
  result: unknown;
}

function formatDate(offsetDays = 0): string {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export const historyListOG: HistoryListOGItem[] = [
  {
    date: '2026-07-23',
    time: '14:35:12',
    transaction: 'DF5G6H7J8K9L0M',
    currency: 'DEMO',
    bet: 1000,
    win: 0,
    isWin: false,
    maxPayout:true,
  },
  {
    date: '2026-07-23',
    time: '09:12:44',
    transaction: 'QW5EDCDRT5HGRB',
    currency: 'DEMO',
    bet: 500,
    win: 1500,
    isWin: true,
     maxPayout:false,
  },
  {
    date: '2026-07-23',
    time: '10:48:09',
    transaction: 'DF5G6H7J8K9L0M',
    currency: 'DEMO',
    bet: 2000,
    win: 0,
    isWin: false,
     maxPayout:false,
  },
  {
    date: '2026-07-23',
    time: '09:12:44',
    transaction: 'QW5EDCDRT5HGRB',
    currency: 'DEMO',
    bet: 2000,
    win: 5600,
    isWin: true,
    maxPayout:true,
  },
  {
    date: '2026-07-20',
    time: '10:48:09',
    transaction: 'DF5G6H7J8K9L0M',
    currency: 'DEMO',
    bet: 1500,
    win: 0,
    maxPayout:false,
  },
  {
    date: '2026-07-21',
    time: '14:22:31',
    transaction: 'TGA5H6J7K8L9M0',
    currency: 'DEMO',
    bet: 1000,
    win: 12500,
    isWin: true,
    maxPayout:false,
  },
  {
    date: '2026-07-21',
    time: '17:03:55',
    transaction: 'DF5G6H7J8K9L0M',
    currency: 'DEMO',
    bet: 3000,
    win: 7200,
    isWin: true,
    maxPayout:false,
  },
  {
    date: '2026-07-22',
    time: '08:19:14',
    transaction: 'RT5G6H7J8K9L0M',
    currency: 'DEMO',
    bet: 2500,
    win: 9400,
    isWin: true,
    maxPayout:false,
  },
  {
    date: '2026-07-22',
    time: '12:41:02',
    transaction: 'G5H6J7K8L9M0N',
    currency: 'DEMO',
    bet: 4000,
    win: 0,
    isWin: false,
    maxPayout:false,
  },
  {
    date: '2026-07-22',
    time: '15:57:48',
    transaction: 'DF5G6H7J8K9L0M',
    currency: 'DEMO',
    bet: 1800,
    win: 3600,
    isWin: true,
    maxPayout:false,
    
  },
  {
    date: '2026-07-22',
    time: '11:26:17',
    transaction: 'S5G6H7J8K9L0M',
    currency: 'DEMO',
    bet: 2200,
    win: 0,
    isWin: false,
    maxPayout:false,
  },
];
