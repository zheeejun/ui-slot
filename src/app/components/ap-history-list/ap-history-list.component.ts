import { CommonModule } from '@angular/common';
import { Component, input, output, signal, computed, ViewChild, inject, effect } from '@angular/core';
import { ApHistoryListOutputs, HistoryWinLoseFilter } from './ap-history-list.interface';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { MoneyTextPipe } from "../../shared/pipe/money-text.pipe";
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'ap-history-list',
  imports: [CommonModule, ApIconComponent, ScrollingModule, MoneyTextPipe],
  templateUrl: './ap-history-list.component.html',
  styleUrl: './ap-history-list.component.css',
})
export class ApHistoryListComponent implements ApHistoryListOutputs {
  private readonly i18n = inject(AppI18nService);
  private readonly session = inject(ClientSessionService);
  protected isGhana = computed(() => this.session.isGhanaUI);
  accentColor = input<'yellow' | 'slate'>('yellow');
  list = input<HistoryListItem[]>([]);
  isLoadingMore = input<boolean>(false);
  showTypeColumn = input<boolean>(true);
  showOtherColumn = input<boolean>(true);
  /** EX: GMT+08:00 */
  zoneString = signal('GMT+08:00');
  readonly dateLabel = this.i18n.computed('history_date', 'DATE');
  readonly betLabel = this.i18n.computed( this.isGhana() ? 'og_bet_info_stake' : 'history_bet', 'BET');
  readonly typeLabel = this.i18n.computed('history_type', 'TYPE');
  readonly otherLabel = this.i18n.computed('history_others', 'OTHERS');
  readonly emptyStateLabel = this.i18n.computed('history_no_records_text', 'No records available.');
  readonly maxPayoutLabel = this.i18n.computed('og_maxPayout', 'Max Payout');
  private readonly winLabelText = this.i18n.computed('history_win', 'WIN');
  private readonly loseLabelText = this.i18n.computed('history_lose', 'LOSE');
  private readonly winLoseLabelText = this.i18n.computed('history_win_lose', 'WIN/LOSE');
  readonly winLoseLabel = computed(() => {
    const filter = this.filterWinLose();
    if (filter === 'win') return this.winLabelText();
    if (filter === 'lose') return this.loseLabelText();
    return this.winLoseLabelText();
  });
  forcedReplayButton = input<boolean>(false);
  forcedShareButton = input<boolean>(false);
  serverReplayEnabled = input<boolean>(true);
  share = output<HistoryListItem>();
  replay = output<HistoryListItem>();
  detail = output<HistoryListItem>();
  openCalendar = output<void>();
  //dateRangeChange = output<DateRange | null>();
  winLoseLabelClick = output<HistoryWinLoseFilter>();
  scrollNearEnd = output<void>(); // 新增：滚动接近底部时触发
  historyDateRange = input<string>('');

  @ViewChild(CdkVirtualScrollViewport) viewport?: CdkVirtualScrollViewport;

  sortDirection = signal<'asc' | 'desc'>('desc');
  sortType = signal<'date' | 'bet'>('date');
  filterWinLose = signal<HistoryWinLoseFilter>('winlose');


  //showCalendar = signal<boolean>(false);
  //selectedDateRange = signal<DateRange | null>(null);
  copyTransaction = output<string>();
  /* 取消GMT */
  constructor() {
    // 設定zoneString
    const offsetMinutes = new Date().getTimezoneOffset();
    const offsetHours = -offsetMinutes / 60;
    const sign = offsetHours >= 0 ? '+' : '-';
    const absOffsetHours = Math.abs(offsetHours);
    const hours = Math.floor(absOffsetHours);
    const minutes = (absOffsetHours - hours) * 60;
    this.zoneString.set(`GMT${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
  }

  onViewportScroll() {
    if (!this.viewport || this.isLoadingMore()) return;
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    if (end >= total - 5) {
      this.scrollNearEnd.emit();
    }
  }

  onReplay(item: HistoryListItem, event?: Event) {
    event?.stopPropagation();
    this.replay.emit(item);
  }

  onShare(item: HistoryListItem, event?: Event) {
    event?.stopPropagation();
    this.share.emit(item);
  }

  onClickCopyTransaction(item: HistoryListItem, event?: Event) {
    event?.stopPropagation();
    this.copyTransaction.emit(item.transaction);
  }

  emitDetail(item: HistoryListItem, index: number) {
    this.detail.emit({
      ...item,
      detailTheme: index % 2 === 1 ? 'dark' : 'gray' // 以 index 奇偶性決定 detailTheme，確保相鄰項目有不同的背景色,
    });
  }

  showReplayButton(item: HistoryListItem) {
    if (this.forcedReplayButton()) return true;
    return this.serverReplayEnabled() &&  item.replay;
  }

  showShareButton(item: HistoryListItem) {
    if (this.forcedShareButton()) return true;
    return this.serverReplayEnabled() && item.replay;
  }


  getDateSortIcon(): string {
    if (this.sortType() !== 'date') {
      return 'bars-arrow-down';
    }
    return this.sortDirection() === 'asc' ? 'bars-arrow-up' : 'bars-arrow-down';
  }

  getBetSortIcon(): string {
    if (this.sortType() !== 'bet') {
      return 'bars-arrow-down';
    }
    return this.sortDirection() === 'asc' ? 'bars-arrow-up' : 'bars-arrow-down';
  }

  onWinLoseFilterClick() {
    const current = this.filterWinLose();
    if (current === 'winlose') {
      this.filterWinLose.set('win');
    } else if (current === 'win') {
      this.filterWinLose.set('lose');
    } else {
      this.filterWinLose.set('winlose');
    }
    this.winLoseLabelClick.emit(this.filterWinLose());
  }

  getWinLoseTitle(): string {
    const filter = this.filterWinLose();
    if (filter === 'win') return 'WIN';
    if (filter === 'lose') return 'LOSE';
    return 'WIN/LOSE';
  }

  // Display Label
  readonly campaignRewardLabel = this.i18n.computed('history_bonus_withdraw', 'Bonus Withdraw');
  readonly cashDropRewardLabel = this.i18n.computed('cashdrop_D1_1', 'CashDrop Reward');
  readonly normalGamelabel = this.i18n.computed('history_normal_game', 'normal game');
  readonly freeGameLabel = this.i18n.computed('history_free_game', 'free games');
  readonly defaultDoubleChanceLabel = this.i18n.computed('history_double_chance', 'Double Chance');
  readonly defaultBuyFeatureLabel = this.i18n.computed('BuyFeature_EventCenter_Tab', 'Buy Feature');
  getTypeLabel(item: HistoryListItem): string {
    if (item.rewardType === 'CashDrop Reward') return this.cashDropRewardLabel();
    if (item.rewardType === 'Bonus Withdraw') return this.campaignRewardLabel();
    if (item.isDoubleChance) { return this.i18n.instantGame(`buyfeature_${item.buyFeatureMode}_title`, this.defaultDoubleChanceLabel()); };
    if (item.isBuyFeature) { return this.defaultBuyFeatureLabel(); };
    return this.normalGamelabel();
  }

  readonly sortedList = computed<HistoryListItem[]>(() => {
    let items = [...this.list()];
    const direction = this.sortDirection();
    const sortType = this.sortType();

    return items.sort((a, b) => {
      if (sortType === 'date') {

        const dateTimeA = this.parseItemDateTime(a.date, a.time);
        const dateTimeB = this.parseItemDateTime(b.date, b.time);

        if (direction === 'asc') {
          return dateTimeA.getTime() - dateTimeB.getTime();
        } else {
          return dateTimeB.getTime() - dateTimeA.getTime();
        }
      } else if (sortType === 'bet') {

        const betA = a.bet;
        const betB = b.bet;

        if (direction === 'asc') {
          return betA - betB;
        } else {
          return betB - betA;
        }
      }
      return 0;
    });
  });

  private parseItemDateTime(date: string, time: string): Date {
    const isoString = `${(date || '').trim()}T${(time || '').trim()}`;
    const parsed = new Date(isoString);
    return isNaN(parsed.getTime()) ? new Date(date) : parsed;
  }

  toggleCalendar(event: Event) {
    event?.stopPropagation();
    this.openCalendar.emit();
  }
}
