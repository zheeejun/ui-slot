import { PayTableRow } from './ap-info-pay-table-symbol.component';

/**
 * Sample data for ap-info-pay-table-symbol component
 */

// Sample 1: Purple Symbol (from the image)
export const purpleSymbolData: PayTableRow[] = [
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

// Sample 2: High Value Symbol
export const highValueSymbolData: PayTableRow[] = [
  { multiplier: 'x5', payline: '100.00' },
  { multiplier: 'x4', payline: '50.00' },
  { multiplier: 'x3', payline: '25.00' },
  { multiplier: 'x2', payline: '10.00' },
];

// Sample 3: Medium Value Symbol
export const mediumValueSymbolData: PayTableRow[] = [
  { multiplier: 'x5', payline: '50.00' },
  { multiplier: 'x4', payline: '20.00' },
  { multiplier: 'x3', payline: '10.00' },
  { multiplier: 'x2', payline: '5.00' },
];

// Sample 4: Low Value Symbol
export const lowValueSymbolData: PayTableRow[] = [
  { multiplier: 'x5', payline: '25.00' },
  { multiplier: 'x4', payline: '10.00' },
  { multiplier: 'x3', payline: '5.00' },
  { multiplier: 'x2', payline: '2.00' },
];

// Sample 5: Wild Symbol
export const wildSymbolData: PayTableRow[] = [
  { multiplier: 'x5', payline: '500.00' },
  { multiplier: 'x4', payline: '200.00' },
  { multiplier: 'x3', payline: '100.00' },
  { multiplier: 'x2', payline: '50.00' },
  { multiplier: 'x1', payline: '10.00' },
];

// Sample 6: Scatter Symbol
export const scatterSymbolData: PayTableRow[] = [
  { multiplier: '5 Scatters', payline: '100x' },
  { multiplier: '4 Scatters', payline: '20x' },
  { multiplier: '3 Scatters', payline: '5x' },
];

/**
 * Complete usage example in a component:
 *
 * In your component.ts:
 * ```typescript
 * import { purpleSymbolData } from './ap-info-pay-table-symbol.sample';
 *
 * export class YourComponent {
 *   purpleSymbol = purpleSymbolData;
 * }
 * ```
 *
 * In your template.html:
 * ```html
 * <!-- Example 1: Purple Symbol -->
 * <ap-info-pay-table-symbol
 *   [symbolImage]="'assets/images/symbols/purple-symbol.png'"
 *   [symbolName]="'Purple Symbol'"
 *   [multiplierHeader]="'Symbols'"
 *   [paylineHeader]="'Payline'"
 *   [tableData]="purpleSymbol"
 *   [backgroundColor]="'bg-zinc-900'"
 *   [textColor]="'text-white'"
 *   [accentColor]="'text-yellow-400'"
 * />
 *
 * <!-- Example 2: Wild Symbol -->
 * <ap-info-pay-table-symbol
 *   [symbolImage]="'assets/images/symbols/wild-symbol.png'"
 *   [symbolName]="'Wild Symbol'"
 *   [multiplierHeader]="'Wilds'"
 *   [paylineHeader]="'Win'"
 *   [tableData]="wildSymbolData"
 *   [backgroundColor]="'bg-purple-900'"
 *   [textColor]="'text-white'"
 *   [accentColor]="'text-yellow-300'"
 * />
 *
 * <!-- Example 3: Scatter Symbol -->
 * <ap-info-pay-table-symbol
 *   [symbolImage]="'assets/images/symbols/scatter-symbol.png'"
 *   [symbolName]="'Scatter Symbol'"
 *   [multiplierHeader]="'Trigger'"
 *   [paylineHeader]="'Multiplier'"
 *   [tableData]="scatterSymbolData"
 *   [backgroundColor]="'bg-blue-900'"
 *   [textColor]="'text-white'"
 *   [accentColor]="'text-cyan-400'"
 * />
 *
 * <!-- Example 4: Multiple symbols in a grid -->
 * <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 *   <ap-info-pay-table-symbol
 *     [symbolImage]="'assets/images/symbols/high-symbol.png'"
 *     [tableData]="highValueSymbolData"
 *   />
 *   <ap-info-pay-table-symbol
 *     [symbolImage]="'assets/images/symbols/medium-symbol.png'"
 *     [tableData]="mediumValueSymbolData"
 *   />
 *   <ap-info-pay-table-symbol
 *     [symbolImage]="'assets/images/symbols/low-symbol.png'"
 *     [tableData]="lowValueSymbolData"
 *   />
 * </div>
 * ```
 */
