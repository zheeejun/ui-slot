import { PrizeRow, PrizeSection } from './event-trn-prize.interface';

// Default level titles
export const defaultLevelTitles: string[] = ['Level 1', 'Level 2', 'Level 3'];

// 標題欄位
export const defaultTableTitles = {
  title1: 'No.',
  title2: 'Winners',
  title3: 'Prize',
};

// Quick 字串
export const defaultQuickSections: PrizeSection[] = [
  {
    items: [
      {
        key: 'Quick_Prizes_Content1',
        text: 'Special registration requirements for events.',
      },
      {
        key: 'Quick_Prizes_Content2',
        text: 'Higher entry fees for premium tournaments.',
      },
      {
        key: 'Quick_Prizes_Content3',
        text: 'Extended tournament duration.',
      },
      {
        key: 'Quick_Prizes_Content4',
        text: 'Exclusive rewards and prizes.',
      },
    ],
  },
];

// Event 字串
export const defaultEventSections: PrizeSection[] = [
  {
    items: [
      {
        key: 'Event_Prizes_Content1',
        text: 'Special registration requirements for events',
      },
      {
        key: 'Event_Prizes_Content2',
        text: 'Higher entry fees for premium tournaments',
      },
      {
        key: 'Event_Prizes_Content3',
        text: 'Extended tournament duration',
      },
      {
        key: 'Event_Prizes_Content4',
        text: 'Exclusive rewards and prizes',
      },
    ],
  },
];

// 假資料
export const prizeDataByLevel: PrizeRow[][] = [
  [
    { number: '1', winner: 1, prize: 300000, tickets: 0.3 },
    { number: '2', winner: 1, prize: 30000, tickets: 0.2 },
    { number: '3', winner: 1, prize: 10000, tickets: 0.1 },
    { number: '4-5', winner: 2, prize: 8000, tickets: 0.05 },
    { number: '6-10', winner: 5, prize: 7000, tickets: 0.03 },
    { number: '11-20', winner: 10, prize: 6000, tickets: 0.01 },
    { number: '21-50', winner: 12, prize: 5000, tickets: 0.03 },
    { number: '51-100', winner: 15, prize: 300, tickets: 0.01 },
  ],
  [
    { number: '1', winner: 1, prize: 500000, tickets: 0.5 },
    { number: '2', winner: 1, prize: 50000, tickets: 0.15 },
    { number: '3', winner: 1, prize: 20000, tickets: 0.15 },
    { number: '4-5', winner: 2, prize: 15000, tickets: 0.02 },
    { number: '6-10', winner: 4, prize: 12000, tickets: 0.04 },
    { number: '11-20', winner: 8, prize: 10000, tickets: 0.02 },
    { number: '21-50', winner: 10, prize: 8000, tickets: 0.04 },
    { number: '51-100', winner: 12, prize: 500, tickets: 0.02 },
  ],
  [
    { number: '1', winner: 1, prize: 1000000, tickets: 0.7 },
    { number: '2', winner: 1, prize: 100000, tickets: 0.1 },
    { number: '3', winner: 1, prize: 50000, tickets: 0.1 },
    { number: '4-5', winner: 1, prize: 30000, tickets: 0.03 },
    { number: '6-10', winner: 2, prize: 25000, tickets: 0.06 },
    { number: '11-20', winner: 4, prize: 20000, tickets: 0.03 },
    { number: '21-50', winner: 5, prize: 15000, tickets: 0.06 },
    { number: '51-100', winner: 8, prize: 1000, tickets: 0.03 },
  ],
];
