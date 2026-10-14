import { Component, output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrnData, } from '../../services/trn-ctrl/trn-ctrl.interface';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApTrnGameListComponent } from '../../components/ap-trn-game-list/ap-trn-game-list.component';

@Component({
  selector: 'event-trn-list',
  imports: [ CommonModule, ApTrnGameListComponent,],
  templateUrl: './event-trn-list.component.html',
  styleUrl: './event-trn-list.component.css'
})
export class EventTrnListComponent {
  private appI18n = inject(AppI18nService);
  protected api = inject(AppInterfaceService);
  // Quick賽事的字串
  readonly getQuickTimeLabel = this.appI18n.computed('RegularEvent_Tag', 'Regular Event');
  // Event賽事的字串
  readonly getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
  readonly getHoursLabel = this.appI18n.computed('HRS', 'HRS');
  readonly getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
  readonly getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
  readonly getCountdownStartTitle = this.appI18n.computed('StartIn_Tip', 'Start in');
  readonly getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in')
  readonly getPointLabel  = this.appI18n.computed('Pts', 'Pts');
  readonly getScoreLabel = this.appI18n.computed('Your_Score', 'Your Score');
  readonly getPrizePoolLabel = this.appI18n.computed('Prize_Pool', 'Prize Pool');
  readonly getRejoinButtonLabel = this.appI18n.computed('Rejoin_Btn', 'Rejoin');
  readonly getJoinButtonLabel = this.appI18n.computed('Join_Btn', 'Join');
  readonly getFinishedButtonLabel = this.appI18n.computed('Finished_Tag', 'Finished');

  constructor(protected trn: TrnCtrlService) { }
  bonusPoint = signal<number>(500) || null;
  clicked = output<TrnData>();
  // Access events directly from imported data
  get evenData(): TrnData[] {
    const ret: TrnData[] = [];
    const event = this.trn.trnList().filter(data => data.type === 'event')
    // 先取出running的賽事
    const running = event.filter(data => data.status === 'running');
    ret.push(...running);
    // 再取出announced的賽事
    const announced = event.filter(data => data.status === 'announced');
    ret.push(...announced);
    // 最後取出其他狀態的賽事
    const other = event.filter(data => data.status !== 'running' && data.status !== 'announced');
    ret.push(...other);
    return ret;
  }

  // 拿取 quick 賽事資料
  get quickData(): TrnData[] {
    const ret = this.trn.trnList()
      .filter(data => data.type === 'quick')
    return ret;
  }

  hasJoinedEvent(data: TrnData): boolean {
    return data.raceData?.rank !== null || !!data.raceData?.playersList?.some(player => player.highlighted);
  }
}
