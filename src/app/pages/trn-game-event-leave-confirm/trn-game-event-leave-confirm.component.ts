import { Component, computed, inject, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApTrnCardTitleComponent } from '../../components/ap-trn-card-title/ap-trn-card-title.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { TrnData } from '../../services/trn-ctrl/trn-ctrl.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';

type TrnVariant = 'yellow' | 'purple';

@Component({
  standalone: true,
  selector: 'trn-game-event-leave-confirm',
  imports: [CommonModule, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent, ApIconComponent,],
  templateUrl: './trn-game-event-leave-confirm.component.html',
})
export class TrnGameEventLeaveConfirmComponent implements OnInit {
  private readonly appI18n = inject(AppI18nService);
  readonly header = this.appI18n.computed('message', 'Message');
  readonly getQuickTitle = this.appI18n.computed('QuickRace_Tab', 'QUICK');
  readonly getEventTitle = this.appI18n.computed('EventRace_Tab', 'EVENT');
  readonly getLeaveButton = this.appI18n.computed('Exit_Btn', 'Confirm');
  readonly subTitle = this.appI18n.computed(
    'EventLeave_Info_Title',
    'Confirm to leave the Event Race?',
  );
  readonly displayContent = this.appI18n.computed(
    'EventLeave_Info_Content',
    '‧ After Leave long-term match, you can rejoin Quick Match.‧ Leaving keeps your score (Ranking keeps updating) ‧ You can rejoin long-term via original entry.',);
  storage = inject(StorageCtrlService);
  trn = inject(TrnCtrlService);
  /** 目前選擇的長期競賽 */
  selectedEvent = input<TrnData | null>(null);
  accentColor = input<TrnVariant>('purple');
  getEventIcon = input('gift');
  getQuickIcon = input('trophy');
  title = computed(() => {
    return this.accentColor() === 'yellow' ? 'Event Race' : 'Quick Race';
  });
  description = input('Win bets earn points, higher rank wins bigger prizes');

  // Internal signals for displaying data
  displayVariant = computed<TrnVariant>(() => {
    return this.accentColor();
  });
  displayTitle = computed<string>(() => {
    return this.title();
  });
  displaySubTitle = computed<string>(() => {
    return this.selectedEvent()?.name || this.subTitle();
  });

  // Output events
  readonly close = output<void>();

  constructor() { }

  ngOnInit(): void { }

  onCancel() {
    this.close.emit();
  }

  /** 長期競賽 */
  onLeaveEvent(): void {
    this.close.emit();
    this.trn.closeEventRace();
    this.storage.trnEventRunning = null;
  }
}
