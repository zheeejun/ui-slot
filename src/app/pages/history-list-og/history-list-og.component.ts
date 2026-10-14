import { AfterViewInit, Component, computed, DestroyRef, inject, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApUiFramePageComponent } from '../../components/ap-ui-frame-page/ap-ui-frame-page.component';
import { ApHistoryListComponent } from '../../components/ap-history-list/ap-history-list.component';
import { ApHistoryCalenderComponent } from '../../components/ap-history-calender/ap-history-calender.component';
import { ClickOutsideDirective } from '../../shared/directives/click-out-side/click-out-side.directive';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';
import { DateRange, DateRangeOption } from '../../components/ap-history-calender/ap-history-calender.interface';
import { HistoryWinLoseFilter } from '../../components/ap-history-list/ap-history-list.interface';
import { HistoryListItem, IHistoryResponse } from '../../services/history-ctrl/history-list.interface';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { HistoryDetailOGComponent } from "../history-detail-og/history-detail-og.component";
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';
import { OgFairnessComponent } from '../og-fairness/og-fairness.component';
import {
  OgFairnessRequest,
  OgFairnessTabType,
  OgFairnessView,
  OgSeedData,
} from '../og-fairness/og-fairness.interface';

@Component({
  selector: 'history-list-og',
  imports: [CommonModule, ApUiFramePageComponent, ApHistoryListComponent, ApHistoryCalenderComponent,
    ClickOutsideDirective, AppI18nPipe, ApButtonComponent, MoneyTextPipe,
    ApIconComponent, ApUiFramePopupComponent, HistoryDetailOGComponent, ApLoadingOverlayComponent,
    OgFairnessComponent],
  templateUrl: './history-list-og.component.html',
  styleUrl: './history-list-og.component.css',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HistoryListOGComponent implements AfterViewInit {
  private readonly appI18n = inject(AppI18nService);
  private readonly session = inject(ClientSessionService);
  private readonly wallet = inject(OgWalletService);
  protected readonly history = inject(HistoryCtrlService);
  private readonly destroyRef = inject(DestroyRef);
  readonly header = this.appI18n.computed('history_history', 'History');
  readonly close = output<void>();
  readonly isLoading = signal<boolean>(true);
  readonly showCalendar = signal<boolean>(false);
  readonly winLabelState = signal<HistoryWinLoseFilter>('winlose');
  readonly selectedDateRange = signal<DateRange | null>(this.getTodayRange());
  readonly isDetail = signal<boolean>(false);
  readonly detailItem = signal<HistoryListItem | null>(null);
  readonly isLoadingMore = signal<boolean>(false);
  readonly showCopyNotification = signal<boolean>(false);
  readonly copiedTransaction = signal<string>('');
  /** 公平性視窗由歷史列表層管理，確保 overlay 能覆蓋列表、明細與頁首。 */
  readonly showFairness = signal<boolean>(false);
  readonly fairnessInitialView = signal<OgFairnessView>('fairness');
  readonly fairnessInitialTab = signal<OgFairnessTabType>('seeds');
  readonly fairnessInitialSeedData = signal<OgSeedData | null>(null);
  readonly popupHeader = this.appI18n.computed('message', 'Message');
  readonly batchSize = 20;
  readonly cashList = signal<HistoryListItem[]>([]);
  /** 取得錢包的最大投注額 */
  private readonly maxBet = computed<number>(() => { const levels = this.wallet.betLevel(); if (levels.length === 0) return 0; return levels[levels.length - 1].max; });
  readonly totalCount = signal<number>(0);
  readonly totalBet = signal<number>(0);
  readonly totalWin = signal<number>(0);
  private readonly cashTotalCount = signal<number>(0);
  private readonly cashFirstIndex = signal<number>(0);
  private isLoadMoreRequest = false;

  ngAfterViewInit() {
    this.history.historyList$
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe((response) => {
        this.onHistoryListResponse(response);
      });

    this.loadCashHistoryList();
  }

  /** 載入 Cash 錢包歷史記錄 */
  private loadCashHistoryList() {
    this.isLoading.set(true);
    // 增加延遲避免來回切換時閃爍, 也不要讓使用者連續點擊切換時發太多請求
    const range = this.selectedDateRange();
    const startDate = range?.from || new Date();
    const endDate = range?.to || new Date();

    // 根據 winLabelState 決定過濾條件
    const filterType = this.winLabelState();

    // 重置分頁索引
    this.cashFirstIndex.set(0);
    this.isLoadMoreRequest = false;

    this.history.getCashHistoryList(filterType, startDate, endDate, 0, this.batchSize);
  }

  /** 載入更多 Cash 記錄 */
  loadMoreCash() {
    if (this.isLoadingMore() || this.isLoading()) return;

    // 如果已經載入所有資料，不再請求
    if (this.cashList().length >= this.cashTotalCount()) return;

    this.isLoadingMore.set(true);
    this.isLoadMoreRequest = true;

    const range = this.selectedDateRange();
    const startDate = range?.from || new Date();
    const endDate = range?.to || new Date();
    const filterType = this.winLabelState();

    this.history.getCashHistoryList(filterType, startDate, endDate, this.cashFirstIndex(), this.batchSize);
  }

  /** 接收 Cash history list的回應 */
  onHistoryListResponse(response: IHistoryResponse) {
    this.cashTotalCount.set(response.total_count);

    if (this.isLoadMoreRequest) {
      // 追加資料到現有清單
      this.cashList.update((list) => [...list, ...response.items]);
      this.cashFirstIndex.update((index) => index + response.items.length);
      this.isLoadingMore.set(false);
      return;
    }

    this.totalCount.set(response.total_count);
    this.totalBet.set(response.total_bet);
    this.totalWin.set(response.total_win);

    this.cashList.set(response.items);
    this.cashFirstIndex.set(response.items.length);
    this.isLoading.set(false);
  }

  onWinLabelClick(state: HistoryWinLoseFilter) {
    this.winLabelState.set(state);
    this.loadCashHistoryList();
  }

  showDetail(item: HistoryListItem) {
    this.detailItem.set(item);
    this.isDetail.set(true);
  }

  onScrollNearEnd() {
    this.loadMoreCash();
  }

  async copyTransaction(transaction: string) {
    try {
      await navigator.clipboard.writeText(transaction);
    } catch {
      // Keep the feedback popup usable even if clipboard access is blocked.
    }

    this.copiedTransaction.set(transaction);
    this.showCopyNotification.set(true);
  }

  dismissCopyNotification() {
    this.showCopyNotification.set(false);
  }

  /** 套用明細傳入的初始狀態後，再顯示最上層公平性視窗。 */
  openFairness(request: OgFairnessRequest): void {
    this.fairnessInitialView.set(request.view);
    this.fairnessInitialTab.set(request.selectedTab);
    this.fairnessInitialSeedData.set(request.seedData);
    this.showFairness.set(true);
  }

  closeFairness(): void {
    this.showFairness.set(false);
  }


  readonly historyDateRange = computed<string>(() => {
    const list = this.cashList();
    const range = this.selectedDateRange();

    if (range?.from && range?.to) {
      const fromStr = range.from.toLocaleDateString(this.session.locale);
      const toStr = range.to.toLocaleDateString(this.session.locale);
      return fromStr === toStr ? fromStr : `${fromStr} ~ ${toStr}`;
    }

    if (list.length === 0) return '-';

    const sortedByDate = [...list].sort((a, b) => {
      const dateA = this.parseItemDateTime(a.date, a.time);
      const dateB = this.parseItemDateTime(b.date, b.time);
      return dateA.getTime() - dateB.getTime();
    });

    const oldest = sortedByDate[0];
    const newest = sortedByDate[sortedByDate.length - 1];

    return `${oldest.date} - ${newest.date}`;
  });



  onDateRangeConfirm(localRange: DateRange) {
    if (!localRange.from || !localRange.to) {
      return;
    }

    // 轉換為 GMT+00 時區的時間
    const utcRange = this.history.getUtcDateRange(localRange.from, localRange.to);

    this.selectedDateRange.set({
      from: utcRange.from,
      to: utcRange.to,
      type: localRange.type,
    });
    this.showCalendar.set(false);

    this.loadCashHistoryList();
  }

  private parseItemDateTime(date: string, time: string): Date {
    const isoString = `${(date || '').trim()}T${(time || '').trim()}`;
    const parsed = new Date(isoString);
    return isNaN(parsed.getTime()) ? new Date(date) : parsed;
  }

  private getTodayRange(): DateRange {
    const range = this.history.getTodayRange();
    return { from: range.from, to: range.to, type: 'today' as DateRangeOption };
  }

  private toHistoryListItem(item: HistoryListItem): HistoryListItem {
    return {
      date: item.date,
      time: item.time,
      type: 'C',
      rewardType: 'Normal Game',
      buyFeatureMode: '',
      transaction: item.transaction,
      currency: item.currency,
      bet: item.bet,
      win: item.win,
      replay: false,
      isWin: item.isWin,
      maxPayout: item.maxPayout || this.isMaxBet(item.bet),
      detailTheme: item.detailTheme,
    };
  }
  /** 最大下注額 */
  private isMaxBet(bet: number): boolean {
    const maxBet = this.maxBet();
    return maxBet > 0 && Math.abs(bet - maxBet) < 1e-9;
  }
}
