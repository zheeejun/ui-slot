import {Component,signal,output,input,computed,OnInit,inject,} from '@angular/core';
import { ApTrnGameListComponent} from '../../components/ap-trn-game-list/ap-trn-game-list.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { PrizeRow, PrizeSection } from './event-trn-prize.interface';
import { defaultLevelTitles,defaultTableTitles,defaultQuickSections,defaultEventSections,prizeDataByLevel,
} from './event-trn-prize.data';
import {TrnData,TrnFixedPrizeDetail,TrnPoolDistributionDetail,} from '../../services/trn-ctrl/trn-ctrl.interface';
import { CommonModule } from '@angular/common';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { MoneyTextPipe } from "../../shared/pipe/money-text.pipe";
@Component({
  selector: 'event-trn-prize',
  imports: [ApTrnGameListComponent, ApIconComponent, CommonModule, MoneyTextPipe],
  templateUrl: './event-trn-prize.component.html',
})
export class EventTrnPrizeComponent implements OnInit {
  protected readonly api = inject(AppInterfaceService);
  protected readonly i18n = inject(AppI18nService);
  readonly getQuickTimeLabel = this.i18n.computed(
    'RegularEvent_Tag',
    'Regular Event',
  );
  readonly getTableTitle1 = this.i18n.computed('Rank_PrizeList', 'Rank');
  readonly getTableTitle2 = this.i18n.computed('Winners_PrizeList', 'Winners');
  readonly getTableTitle3 = this.i18n.computed('Pirze_PrizeList', 'Prize');
  readonly getDaysLabel = this.i18n.computed('DAYS', 'DAYS');
  readonly getHoursLabel = this.i18n.computed('HRS', 'HRS');
  readonly getMinutesLabel = this.i18n.computed('MINS', 'MINS');
  readonly getSecondsLabel = this.i18n.computed('SECS', 'SECS');
  readonly getCountdownStartTitle = this.i18n.computed(
    'StartIn_Tip',
    'Start in',
  );
  readonly getCountdownEndTitle = this.i18n.computed('EndIn_Tip', 'End in');
  //* 積分
  bonusPoint=signal<number>(500)||null;
  trn = inject(TrnCtrlService);
  /** 上一頁 */
  goBack = output<void>();
  /** 關閉 */
  close = output<void>();
  // Component configuration
  variant = computed<'quick' | 'event'>(() => {
    return this.currentTrn()?.type || 'event';
  });
  currentTrn = input<TrnData | null>(null);
  /** Level Tag Name */
  levelTitles = signal<string[]>(defaultLevelTitles);
  quickSections = signal(defaultQuickSections);
  eventSections = signal(defaultEventSections);
  currentSections = computed<PrizeSection[]>(() =>
    (this.variant() === 'quick' ? this.quickSections() : this.eventSections()).map(
      (section) => ({
        ...section,
        items: section.items.map((item) => ({
          ...item,
          text: item.key ? this.i18n.instant(item.key, item.text) : item.text,
        })),
      }),
    ),
  );
  // Level selection
  selectedLevel = signal<number>(0);
  // Prize data for each level
  protected readonly prizeData = signal<PrizeRow[][]>(prizeDataByLevel);

  ngOnInit(): void {
    if (!this.currentTrn()) return;
    const prizes: PrizeRow[][] = [];
    const titles: string[] = [];
    this.currentTrn()?.tiers.forEach((tier) => {
      titles.push(tier.name);
      const rows = this.formatPrizeRow(tier.fixedPrizes, tier.poolDistribution);
      prizes.push(rows);
    });
    this.prizeData.set(prizes);
    this.levelTitles.set(titles);
  }

  formatPrizeRow(
    fix: TrnFixedPrizeDetail[],
    pool: TrnPoolDistributionDetail[],
  ): PrizeRow[] {
    // 這裡的邏輯會根據實際的獎金結構來調整
    // 目前假設固定獎金和獎池分配是分開的，並且每個rank對應一個PrizeRow
    const rows: PrizeRow[] = [];
    fix.forEach((fp, index) => {
      const poolRatio = pool[index]?.ratio || 0;
      if (fp.rank) {
        rows.push({
          number: fp.rank.toString(),
          winner: 1,
          prize: fp.amount,
          tickets: poolRatio, // 這裡的tickets數量需要根據實際情況來填充
        });
      } else if (fp.rankFrom && fp.rankTo) {
        rows.push({
          number: `${fp.rankFrom}-${fp.rankTo}`,
          winner: fp.rankTo - fp.rankFrom + 1,
          prize: fp.amount,
          tickets: poolRatio, // 這裡的tickets數量需要根據實際情況來填充
        });
      }
    });
    return rows;
  }

  // Methods
  getCurrentPrizes = computed(() => {
    const level = this.selectedLevel();
    return this.prizeData()[level] || [];
  });

  selectLevel(level: number): void {
    this.selectedLevel.set(level);
  }

  handleBack(): void {
    this.goBack.emit();
  }

  handleClose(): void {
    this.close.emit();
  }
  // Get countdown time from data based on variant
  getCountdownTime(): string {
    return '';
  }
}
