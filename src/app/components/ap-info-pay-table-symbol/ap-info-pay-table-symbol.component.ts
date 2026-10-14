import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSessionService } from '../../services/client-session/client-session.service';

export interface PayTableRow {
  multiplier: string;
  payline: string;
  items?: string[];
}

@Component({
  selector: 'ap-info-pay-table-symbol',
  imports: [CommonModule],
  templateUrl: './ap-info-pay-table-symbol.component.html',
  styleUrl: './ap-info-pay-table-symbol.component.css',
})
export class ApInfoPayTableSymbolComponent {
  session = inject(ClientSessionService);
  /** Pay table symbol的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);
  readonly symbolImage = input<string>('');
  readonly symbolName = input<string>('Symbols');
  readonly symbolHeader = input<string>('Symbols');
  readonly paylineHeader = input<string>('Payline');
  /** Pay table data rows */
  readonly tableData = input<PayTableRow[]>([
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
  ]);
  /** Background color */
  readonly backgroundColor = input<string>('bg-zinc-900');
  /** Text color */
  readonly textColor = input<string>('text-white');
  /** Accent color for payline values */
  readonly accentColor = input<string>('text-yellow-200');
}
