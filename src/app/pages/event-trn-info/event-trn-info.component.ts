import { Component, signal, output, input, computed, AfterViewInit, OnInit, inject } from '@angular/core';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { TrnData, } from '../../services/trn-ctrl/trn-ctrl.interface';
import { BetRangeConfig } from './event-trn-info.interface';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { CommonModule } from '@angular/common';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApTrnInfoTableComponent } from '../../components/ap-trn-info-table/ap-trn-info-table.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApTrnGameListComponent } from '../../components/ap-trn-game-list/ap-trn-game-list.component';

type DropdownTab = 'Info' | 'Ranking' | 'Prizes' | 'Rules';

@Component({
  selector: 'event-trn-info',
  imports: [ ApButtonComponent, CommonModule, ApTrnInfoTableComponent,ApTrnGameListComponent],
  templateUrl: './event-trn-info.component.html',
})
export class EventTrnInfoComponent implements OnInit {
  private appI18n = inject(AppI18nService);
  readonly getQuickTimeLabel = this.appI18n.computed('RegularEvent_Tag', 'Regular Event');
  readonly getHowToPlayBtnText = this.appI18n.computed('HowToPlay_Btn', 'How to Play');
  readonly betRangeTitle = this.appI18n.computed('Bet_Ranges_Title', 'Bet Ranges by Level');
  readonly firstDescription = this.appI18n.computed('Content1_TournamentInfo', 'ㆍQuick matches are grouped by bet size ㆍHigher bets, bigger prize pools. ㆍOnly those who place bets will be included in the rankings and receive prizes.');
  readonly secondDescription = this.appI18n.computed('Content2_TournamentInfo', 'ㆍQuick Match settings are shown in the table below.');
  readonly matchRangeTitle = this.appI18n.computed('Match_Configuration_Title', 'Match Configuration');
  readonly getCondition1 = this.appI18n.computed('Condition1', 'Players per Match');
  readonly getCondition2 = this.appI18n.computed('Condition2', 'Prize Ranking');
  readonly getCondition3 = this.appI18n.computed('Condition3', 'Match Duration');
  readonly getCondition4 = this.appI18n.computed('Condition4', 'Prize Boost');
  readonly getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
  readonly getHoursLabel = this.appI18n.computed('HRS', 'HRS');
  readonly getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
  readonly getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
  readonly getCountdownStartTitle = this.appI18n.computed(
    'StartIn_Tip',
    'Start in',
  );
  readonly getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in')
  trn = inject(TrnCtrlService);
  protected api = inject(AppInterfaceService);
  /** 目前要顯示的Trn */
  currentTrn = input<TrnData | null>(null);
  openTutorial = output<void>();
  // Event List
  eventDescription1 = signal('Long term event settings are shown in the table below.');
  // Default match configuration
  minEntryBalance = computed<number | null>(() => this.currentTrn()?.tiers[0]?.minStakeAmount || null);
  playersPerMatch = computed<number | null>(() => this.currentTrn()?.maxPlayers || null);
  /** 給Quick秒數 */
  matchDuration = computed<number | null>(() => this.currentTrn()?.matchDuration || null);
  /** 給Event秒數, 從開始時間到結束時間 */
  eventDuration = computed<number | null>(() => {
    const trn = this.currentTrn();
    if (trn?.type === 'event' && trn.startTime && trn.endTime) {
      return Math.floor((trn.endTime - trn.startTime) / 1000);
    }
    return null;
  });
  /** ex: 1.2 */
  prizeBoost = computed<number>(() => this.currentTrn()?.betMultiplier || 1);
  betRanges = signal<BetRangeConfig[]>([]);
  //* 積分
  bonusPoint=signal<number>(500)||null;

  ngOnInit(): void {
    const ranges: BetRangeConfig[] = []
    this.currentTrn()?.tiers.forEach(tier => {
      ranges.push({
        level: tier.name,
        start: tier.minStakeAmount || 0,
        end: tier.maxStakeAmount
      });
    });
    this.betRanges.set(ranges);
  }

  onOpenTutorial() {
    this.openTutorial.emit();
  }

  /** 將秒數轉成 [d Days] h hours m mins [s secs], 有days就不顯示secs */
  formatDuration(seconds: number | null): string {
    if (seconds === null) {
      return '--';
    }
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    const dDisplay = d > 0 ? d + (d === 1 ? ' Day ' : ' Days ') : '';
    const hDisplay = h > 0 ? h + (h === 1 ? ' Hour ' : ' Hours ') : '';
    const mDisplay = m > 0 ? m + (m === 1 ? ' Min ' : ' Mins ') : '';
    const sDisplay = s > 0 ? s + (s === 1 ? ' Sec' : ' Secs') : '';
    return dDisplay + hDisplay + mDisplay + (d > 0 ? '' : sDisplay) || '--';
  }
}
