import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ITrnHistoryItem } from './event-trn-history.interface';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { TrnPlayerHistory } from '../../services/trn-ctrl/trn-ctrl.interface';
import { delay, Subject, takeUntil } from 'rxjs';
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApUiPaginationComponent, PaginationConfig } from '../../../ap-components-lib/ap-ui-pagination/ap-pagination.component';
@Component({
  selector: 'event-trn-history',
  imports: [CommonModule, ApUiPaginationComponent, ApIconComponent, ApLoadingOverlayComponent],
  templateUrl: './event-trn-history.component.html',
  styleUrl: './event-trn-history.component.css',
})
export class EventTrnHistoryComponent implements OnInit {
  //** 服務注入 */
  private appI18n = inject(AppI18nService);
  protected api = inject(AppInterfaceService);
  protected trn = inject(TrnCtrlService);
  readonly getGameLabel = this.appI18n.computed('EventName_History', 'Event');
  readonly getStatusLabel = this.appI18n.computed('history_jackpot_status', 'Status');
  readonly getTimeLabel = this.appI18n.computed('Time_History', 'Time');
  readonly getRankLabel = this.appI18n.computed('RankNo_History', 'Rank');
  readonly getPrizeLabel = this.appI18n.computed('Prize_History', 'Prize');
  historyItems = signal<ITrnHistoryItem[]>([]);
  itemsPerPage = signal(10);
  currentPage = signal<number>(1);
  totalPages = signal<number>(1);
  limit = computed(() => this.itemsPerPage());
  offset = computed(() => (this.currentPage() - 1) * this.itemsPerPage());
  sortDirection = signal<'asc' | 'desc'>('desc');
  sortType = signal<'time' | 'rank' | 'prize'>('time');
  isLoading = signal(true);
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.trn.playerHistory$.pipe(delay(500), takeUntil(this.destroy$)).subscribe(this.onPlayerHistory.bind(this));
    this.trn.sendPlayerHistory(this.limit(), this.offset());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onPlayerHistory(history: TrnPlayerHistory) {
    this.isLoading.set(false);
    this.currentPage.set(history.page);
    this.itemsPerPage.set(history.pageSize);
    this.totalPages.set(history.totalPages);
    const items: ITrnHistoryItem[] = history.list.map((item) => {
      return {
        game: item.name,
        id: item.id,
        status: item.status,
        time: item.time,
        rank: item.rank,
        currency: this.trn.currencySymbol(),
        variant: item.type,
        prizeAmount: item.prize,
        image: item.images,
      };
    });
    this.historyItems.set(items);
  }

  onTimeSortClick() {
    if (this.sortType() === 'time') {
      const currentDirection = this.sortDirection();
      this.sortDirection.set(currentDirection === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortType.set('time');
      this.sortDirection.set('desc');
    }
    this.currentPage.set(1);
  }

  onRankSortClick() {
    if (this.sortType() === 'rank') {
      const currentDirection = this.sortDirection();
      this.sortDirection.set(currentDirection === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortType.set('rank');
      this.sortDirection.set('asc');
    }
    this.currentPage.set(1);
  }

  onPrizeSortClick() {
    if (this.sortType() === 'prize') {
      const currentDirection = this.sortDirection();
      this.sortDirection.set(currentDirection === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortType.set('prize');
      this.sortDirection.set('desc');
    }
    this.currentPage.set(1);
  }
  readonly paginationConfig = computed<PaginationConfig>(() => {
    return {
      currentPage: this.currentPage(),
      totalPages: this.totalPages(),
      showPages: 1,
    };
  });

  getGameBannerClass(
    variant: 'quick' | 'event',
    hasImage: boolean = false
  ): string {
    if (hasImage) {
      const borderColor =
        variant === 'quick' ? 'border-yellow-300/50' : 'border-purple-400/50';
      return `border-1 ${borderColor} bg-contain bg-center bg-no-repeat`;
    }
    return variant === 'quick'
      ? 'border-2 border-yellow-300'
      : 'border-2 border-purple-400';
  }

  getGameBannerStyle(image: string): { [key: string]: string } {
    return image ? { 'background-image': `url(${image})` } : {};
  }

  getGameListClass(variant: 'quick' | 'event' | undefined): string {
    if (!variant) {
      return '';
    }

    return variant === 'quick'
      ? 'border-l-2 border-yellow-300'
      : 'border-l-2 border-purple-400';
  }

  // 縮短游戲名稱，超過長度則加上省略號
  shortenGameName(gameName: string = '', maxLength: number = 15): string {
    return gameName.length > maxLength
      ? gameName.substring(0, maxLength) + '...'
      : gameName;
  }

  getTimeSortIcon(): string {
    return this.sortDirection() === 'asc'
      ? 'bars-arrow-up default'
      : 'bars-arrow-down default';
  }

  getRankSortIcon(): string {
    return this.sortDirection() === 'asc'
      ? 'bars-arrow-up default'
      : 'bars-arrow-down default';
  }

  getPrizeSortIcon(): string {
    return this.sortDirection() === 'asc'
      ? 'bars-arrow-up default'
      : 'bars-arrow-down default';
  }

  readonly sortedItems = computed<ITrnHistoryItem[]>(() => {
    const items = [...this.historyItems()];
    const direction = this.sortDirection();
    const sortType = this.sortType();

    return items.sort((a, b) => {
      if (sortType === 'time') {
        if (direction === 'asc') {
          return (a.time || 0) - (b.time || 0);
        } else {
          return (b.time || 0) - (a.time || 0);
        }
      } else if (sortType === 'rank') {
        const rankA = a.rank || 0;
        const rankB = b.rank || 0;

        if (direction === 'asc') {
          return rankA - rankB;
        } else {
          return rankB - rankA;
        }
      } else if (sortType === 'prize') {
        // Sort by prize (extract number from "$X.XX" format, handle commas)
        const prizeA = a.prizeAmount || 0;
        const prizeB = b.prizeAmount || 0;

        if (direction === 'asc') {
          return prizeA - prizeB;
        } else {
          return prizeB - prizeA;
        }
      }
      return 0;
    });
  });

  paginationChanged(page: number): void {
    this.currentPage.set(page);
    this.isLoading.set(true);
    this.trn.sendPlayerHistory(this.limit(), this.offset());
  }
}
