import { PayTableRow } from '../../components/ap-info-pay-table-symbol/ap-info-pay-table-symbol.component';
import { PaylineCell } from '../../components/ap-info-pay-table-payline/ap-info-pay-table-payline.component';

export const tableData: PayTableRow[] = [
  { multiplier: 'x15+', payline: '15.00' },
  { multiplier: 'x14+', payline: '7.00' },
  { multiplier: 'x13', payline: '4.00' },
  { multiplier: 'x12', payline: '1.80' },
  { multiplier: 'x11', payline: '1.20' },
  { multiplier: 'x10', payline: '0.80' },
  { multiplier: 'x9', payline: '0.60' },
  { multiplier: 'x8', payline: '0.40' },
  { multiplier: 'x7', payline: '0.32' },
  { multiplier: 'x6', payline: '0.20' },
  { multiplier: 'x5', payline: '0.16' },
  { multiplier: 'x4', payline: '0.08' },
];

export const symbolsListItems: string[] = [
  'Only the highest winning combination will be paid each cluster.',
  'The winning combination is paid accordingly to the payout of the paytable.',
];

export const paylineListItems: string[] = [
  'All wins pay from left to right.',
  'Wins on different paylines are added.',
];
export const payline1: PaylineCell[] = [
  { row: 0, col: 0 },
  { row: 0, col: 1 },
  { row: 0, col: 2 },
  { row: 0, col: 3 },
  { row: 0, col: 4 },
];

export const payline2: PaylineCell[] = [
  { row: 0, col: 0 },
  { row: 1, col: 1 },
  { row: 2, col: 2 },
  { row: 1, col: 3 },
  { row: 0, col: 4 },
];
export const payline3: PaylineCell[] = [
  { row: 2, col: 0 },
  { row: 0, col: 1 },
  { row: 1, col: 2 },
  { row: 2, col: 3 },
  { row: 0, col: 4 },
];
export const payline4: PaylineCell[] = [
  { row: 1, col: 0 },
  { row: 2, col: 1 },
  { row: 1, col: 2 },
  { row: 0, col: 3 },
  { row: 0, col: 4 },
];
export const payline5: PaylineCell[] = [
  { row: 0, col: 0 },
  { row: 1, col: 1 },
  { row: 0, col: 2 },
  { row: 0, col: 3 },
  { row: 0, col: 4 },
];
