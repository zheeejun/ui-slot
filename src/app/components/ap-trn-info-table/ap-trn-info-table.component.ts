import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyTextPipe } from "../../shared/pipe/money-text.pipe";

type TrnInfoTableType = 'match' | 'betRange';

interface BetRangeRow {
  level: string;
  start: number | null;
  end: number | null;
}

@Component({
  selector: 'ap-trn-info-table',
  standalone: true,
  imports: [CommonModule, MoneyTextPipe],
  host: {
    class: 'block w-full max-w-lg',
  },
  templateUrl: './ap-trn-info-table.component.html',
})
export class ApTrnInfoTableComponent {
  // 'quick' 顯示快速賽事資訊表格，'event' 顯示活動賽事資訊表格
  variant = input<'quick' | 'event'>('quick');
  // 'betRange' 顯示投注範圍表格
  type = input<TrnInfoTableType>('match');
  description = input<string>('');
  title = input<string>('');
  condition1 = input<string>('');
  condition2 = input<string>('');
  condition3 = input<string>('');
  condition4 = input<string>('');
  betRanges = input<BetRangeRow[]>([]);
  minEntryBalance = input<number | string | null>(null);
  playersPerMatch = input<number | string | null>(null);
  matchDuration = input<string>('--');
  prizeBoost = input<number | string>(1);
}
