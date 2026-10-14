import { PaylineCell } from './ap-info-pay-table-payline.component';

/**
 * Sample payline patterns for ap-info-pay-table-payline component
 */

// Payline 1: Top row (from the image)
export const payline1: PaylineCell[] = [
  { row: 0, col: 0 },
  { row: 0, col: 1 },
  { row: 0, col: 2 },
  { row: 0, col: 3 },
  { row: 0, col: 4 },
];

// Payline 2: Middle row
export const payline2: PaylineCell[] = [
  { row: 1, col: 0 },
  { row: 1, col: 1 },
  { row: 1, col: 2 },
  { row: 1, col: 3 },
  { row: 1, col: 4 },
];

// Payline 3: Bottom row
export const payline3: PaylineCell[] = [
  { row: 2, col: 0 },
  { row: 2, col: 1 },
  { row: 2, col: 2 },
  { row: 2, col: 3 },
  { row: 2, col: 4 },
];

// Payline 4: Diagonal down
export const payline4: PaylineCell[] = [
  { row: 0, col: 0 },
  { row: 1, col: 1 },
  { row: 2, col: 2 },
  { row: 1, col: 3 },
  { row: 0, col: 4 },
];

// Payline 5: Diagonal up
export const payline5: PaylineCell[] = [
  { row: 2, col: 0 },
  { row: 1, col: 1 },
  { row: 0, col: 2 },
  { row: 1, col: 3 },
  { row: 2, col: 4 },
];

// Payline 6: V shape
export const payline6: PaylineCell[] = [
  { row: 0, col: 0 },
  { row: 1, col: 1 },
  { row: 2, col: 2 },
  { row: 1, col: 3 },
  { row: 0, col: 4 },
];

// Payline 7: W shape
export const payline7: PaylineCell[] = [
  { row: 0, col: 0 },
  { row: 1, col: 1 },
  { row: 0, col: 2 },
  { row: 1, col: 3 },
  { row: 0, col: 4 },
];

// Payline 8: M shape
export const payline8: PaylineCell[] = [
  { row: 2, col: 0 },
  { row: 1, col: 1 },
  { row: 2, col: 2 },
  { row: 1, col: 3 },
  { row: 2, col: 4 },
];

// Payline 9: Zigzag top
export const payline9: PaylineCell[] = [
  { row: 1, col: 0 },
  { row: 0, col: 1 },
  { row: 1, col: 2 },
  { row: 0, col: 3 },
  { row: 1, col: 4 },
];

// Payline 10: Zigzag bottom
export const payline10: PaylineCell[] = [
  { row: 1, col: 0 },
  { row: 2, col: 1 },
  { row: 1, col: 2 },
  { row: 2, col: 3 },
  { row: 1, col: 4 },
];

/**
 * Complete usage example:
 *
 * In your component.ts:
 * ```typescript
 * import { payline1, payline2 } from './ap-info-pay-table-payline.sample';
 *
 * export class YourComponent {
 *   payline1 = payline1;
 *   payline2 = payline2;
 *
 *   onCellClick(cell: PaylineCell) {
 *     
 *   }
 * }
 * ```
 *
 * In your template.html:
 * ```html
 * <!-- Example 1: Single payline (from the image) -->
 * <ap-info-pay-table-payline
 *   [paylineNumber]="1"
 *   [activeCells]="payline1"
 *   [clickable]="true"
 *   (cellClick)="onCellClick($event)"
 * />
 *
 * <!-- Example 2: Multiple paylines in a grid -->
 * <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
 *   <ap-info-pay-table-payline
 *     [paylineNumber]="1"
 *     [activeCells]="payline1"
 *   />
 *   <ap-info-pay-table-payline
 *     [paylineNumber]="2"
 *     [activeCells]="payline2"
 *   />
 *   <ap-info-pay-table-payline
 *     [paylineNumber]="3"
 *     [activeCells]="payline3"
 *   />
 *   <ap-info-pay-table-payline
 *     [paylineNumber]="4"
 *     [activeCells]="payline4"
 *   />
 *   <ap-info-pay-table-payline
 *     [paylineNumber]="5"
 *     [activeCells]="payline5"
 *   />
 * </div>
 *
 * <!-- Example 3: Custom colors and non-clickable -->
 * <ap-info-pay-table-payline
 *   [paylineNumber]="1"
 *   [activeCells]="payline1"
 *   [clickable]="false"
 *   [activeCellColor]="'bg-green-500'"
 *   [backgroundColor]="'bg-gray-800'"
 * />
 *
 * <!-- Example 4: Different grid size (4x6 grid) -->
 * <ap-info-pay-table-payline
 *   [paylineNumber]="1"
 *   [rows]="4"
 *   [cols]="6"
 *   [activeCells]="customPayline"
 * />
 * ```
 */
