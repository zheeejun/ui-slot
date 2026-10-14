import { Component, inject, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { dec, MoneyText } from '../../services/player-wallet/player-wallet.function';

@Component({
  selector: 'ap-og-history-detail-top',
  imports: [CommonModule, ApIconComponent, ApSelectComponent, MoneyTextPipe],
  templateUrl: './ap-og-history-detail-top.component.html',
  styleUrl: './ap-og-history-detail-top.component.css',
})
export class ApOgHistoryDetailTopComponent {
  readonly i18n = inject(AppI18nService);
  readonly isDetailThemeDark = input<boolean>(false);

  /** Header: 遊戲名稱 + round 資訊 */
  readonly displayName = this.i18n.computed(
    'history_normal_game',
    'Normal Spin',
  );
  readonly roundNumberText = input<string>('');
  readonly ticket = input<string>('');
  readonly showRoundSelector = input<boolean>(false);
  readonly roundSelectorDisabled = input<boolean>(false);
  readonly roundOptions = input<ApSelectOption[]>([]);
  readonly currentRound = input<number>(0);

    /** Top bar: Bet column */
  readonly betSummaryTitle = this.i18n.computed('history_bet', 'Bet');
  readonly bet = input<number>(0);
  readonly lineBet = input<number | null>(null);

  readonly winTitle = this.i18n.computed('history_win', 'Win');
  readonly loseTitle = this.i18n.computed('history_lose', 'Lose');

  /** Top bar: Win/Lose column */
  readonly isWin = input<boolean>(false);
  readonly winSummaryTitle = computed<string>(() => {
    return this.isWin() ? this.winTitle() : this.loseTitle();
  });

  /* Win column */
  win = input<number>(0);
  /** Win column 顯示的文字 */
  winText = computed<string>(() => {
    const win = this.win();
    if (win === 0) return '--';
    return MoneyText.format(win);
  });

  /** Top bar: Balance column */
  readonly balanceTitle = this.i18n.computed('history_balance', 'Balance');
  readonly balanceNew = input<number | null>(null);
  readonly balanceNewIsHidden = computed(() => this.balanceNew() === null);
  readonly balanceNewText = computed<string>(() => {
    const balance = this.balanceNew();
    if (balance === null) return '--';
    return MoneyText.format(balance);
  });
  readonly balanceOld = input<number | null>(null);
  readonly balanceOldIsHidden = computed(() => this.balanceOld() === null);
  readonly balanceOldText = computed<string>(() => {
    const balance = this.balanceOld();
    if (balance === null) return '--';
    return MoneyText.format(balance);
  });

  /** 判斷數字是否超過9位數，若超過則顯示為長數字格式 */
  private isLongAmount(value: number | null): boolean {
    if (value === null) return false;
    return dec.comma(value).replace(/\D/g, '').length > 9;
  }

  readonly balanceOldIsLong = computed(() =>
    this.isLongAmount(this.balanceOld()),
  );
  readonly balanceNewIsLong = computed(() =>
    this.isLongAmount(this.balanceNew()),
  );


  readonly ticketCopyClicked = output<Event>();
  readonly roundSelected = output<string>();

  clickCopyTicket(event: Event): void {
    this.ticketCopyClicked.emit(event);
  }

  selectRound(value: string): void {
    this.roundSelected.emit(value);
  }
}
