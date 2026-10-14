import { Component, signal, output, input,computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApTrnGameListComponent} from '../ap-trn-game-list/ap-trn-game-list.component';
import { trnDefaultDataList } from '../../services/trn-ctrl/trn-ctrl.data';
import { TrnData } from '../../services/trn-ctrl/trn-ctrl.interface';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';

@Component({
  selector: 'ap-trn-event-selection',
  imports: [CommonModule, ApTrnGameListComponent, ApButtonComponent],
  templateUrl: './ap-trn-event-selection.component.html',
})
export class ApTrnEventSelectionComponent {
  getDaysLabel=input<string>('DAYS');
  getHoursLabel=input<string>('HRS');
  getMinutesLabel=input<string>('MINS');
  getSecondsLabel=input<string>('SECS');
  getCountdownStartTitle=input<string>('Start in');
  getCountdownEndTitle=input<string>('End in');
  //* 賽事資料
  trnData = input<TrnData | null>(trnDefaultDataList[0]);
  getBonus = computed<number | null>(() => { return this.trnData()?.raceData?.playersList.find((player) => player.highlighted)?.win || null; });
  readonly trnList = input<TrnData[]>(trnDefaultDataList);
  readonly selectedEvent = output<TrnData>();
  readonly onClose = output<void>();
  header = input('Event Selection');
  constructor() { }


  onEventClick(trn: TrnData): void {
    this.selectedEvent.emit(trn);
  }

  clickClose() {
    this.onClose.emit();
  }
}
