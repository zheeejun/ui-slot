import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PaylineCell {
  row: number;
  col: number;
}

@Component({
  selector: 'ap-info-pay-table-payline',
  imports: [CommonModule],
  templateUrl: './ap-info-pay-table-payline.component.html',
  styleUrl: './ap-info-pay-table-payline.component.css',
})
export class ApInfoPayTablePaylineComponent {
  /** Payline number to display */
  readonly paylineNumber = input<number>(1);
  /** Grid rows count */
  readonly rows = input<number>(3);
  /** Grid columns count */
  readonly cols = input<number>(5);
  /** Active cells in the payline (highlighted in yellow) */
  readonly activeCells = input<PaylineCell[]>([
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 0, col: 3 },
    { row: 0, col: 4 },
  ]);
  /** Enable cell click interaction */
  readonly clickable = input<boolean>(true);
  /** Background color for the component */
  readonly backgroundColor = input<string>('bg-zinc-900');
  /** Active cell color */
  readonly activeCellColor = input<string>('bg-yellow-300');
  /** Inactive cell color */
  readonly inactiveCellColor = input<string>('bg-zinc-700');
  /** Cell click event */
  readonly cellClick = output<PaylineCell>();

  /** Generate grid array */
  getGridRows(): number[] {
    return Array.from({ length: this.rows() }, (_, i) => i);
  }

  getGridCols(): number[] {
    return Array.from({ length: this.cols() }, (_, i) => i);
  }

  /** Check if a cell is active */
  isCellActive(row: number, col: number): boolean {
    return this.activeCells().some(
      (cell) => cell.row === row && cell.col === col
    );
  }

  /** Handle cell click */
  onCellClick(row: number, col: number): void {
    if (this.clickable()) {
      this.cellClick.emit({ row, col });
    }
  }
}
