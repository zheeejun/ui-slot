import { Component, output, input, signal, computed, inject, OnInit, OnDestroy, } from '@angular/core';
import { delay, Subject, takeUntil } from 'rxjs';
import { ApTrnGameListComponent} from '../../components/ap-trn-game-list/ap-trn-game-list.component';
import { RankingRow, TableHeader } from './event-trn-ranking.interface';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { TrnData,TrnLeaderBoard,} from '../../services/trn-ctrl/trn-ctrl.interface';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { ApRowListItem, defaultPlayersList } from '../../components/ap-trn-list-row/ap-trn-list-row.interface';
import { CommonModule } from '@angular/common';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApUiPaginationComponent, PaginationConfig } from '../../../ap-components-lib/ap-ui-pagination/ap-pagination.component';

@Component({
  selector: 'event-trn-ranking',
  imports: [ApTrnGameListComponent, ApUiPaginationComponent, ApButtonComponent, CommonModule, ApLoadingOverlayComponent,],
  templateUrl: './event-trn-ranking.component.html',
})
export class EventTrnRankingComponent implements OnInit, OnDestroy {
  private appI18n = inject(AppI18nService);
  readonly getRefreshButtonText = this.appI18n.computed('Refresh_Btn', 'Refresh');
  readonly getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
  readonly getHoursLabel = this.appI18n.computed('HRS', 'HRS');
  readonly getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
  readonly getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
  readonly getCountdownStartTitle = this.appI18n.computed('StartIn_Tip', 'Start in',);
  readonly getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in');
  protected api = inject(AppInterfaceService);
  trn = inject(TrnCtrlService);
  currentTrn = input<TrnData | null>(null);
  isLoading = signal(true);
  readonly goBack = output<void>();
  readonly getNOLabel = this.appI18n.computed('RankNo_RankList', 'No.');
  readonly playerNameLabel = this.appI18n.computed('PlayerName__RankList', 'Player Name');
  readonly scoreLabel = this.appI18n.computed('Score__RankList', 'Score');
  readonly prizeLabel = this.appI18n.computed('Prize__RankList', 'Prize');
  readonly tableHeaders = signal<TableHeader[]>([
    { label: this.getNOLabel(), width: 'w-[15%]', align: 'text-left' },
    { label: this.playerNameLabel(), width: 'w-[15%]', align: 'text-left' },
    { label: this.scoreLabel(), width: 'w-[40%]', align: 'text-right' },
    { label: this.prizeLabel(), width: 'w-[40%]', align: 'text-right' },
  ]);
  //* 積分
  bonusPoint=signal<number>(500)||null;

  //** 每頁顯示幾筆資料 */
  readonly itemsPerPage = signal<number>(10);
  readonly currentPage = signal<number>(1);
  readonly totalPages = signal(1);
  readonly currentPageData = signal<ApRowListItem[]>(defaultPlayersList);
  private destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.trn.eventLeaderboard$
      .pipe(delay(500), takeUntil(this.destroy$))
      .subscribe(this.onLeadboardUpdate.bind(this));
    this.sendLeaderboardRequest();
  }

  readonly paginationConfig = computed(
    (): PaginationConfig => ({
      currentPage: this.currentPage(),
      totalPages: this.totalPages(),
      showPages: 1,
    }),
  );

  onPageChanged(page: number): void {
    this.isLoading.set(true);
    this.currentPage.set(page);
    this.sendLeaderboardRequest();
  }

  handleBack(): void {
    this.goBack.emit();
  }

  clickRefresh(): void {
    this.sendLeaderboardRequest();
  }

  onLeadboardUpdate(data: TrnLeaderBoard) {
    this.currentPageData.set(data.list);
    this.totalPages.set(data.totalPages);
    this.isLoading.set(false);
  }

  sendLeaderboardRequest() {
    this.trn.sendEvnetLeaderboard(
      this.currentTrn()?.id || '',
      this.currentPage(),
      this.itemsPerPage(),
    );
  }

  // Get countdown time from event data
  getCountdownTime(): string {
    return '';
  }
}
