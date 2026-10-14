import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApTrnCardTitleComponent } from '../ap-trn-card-title/ap-trn-card-title.component';
import type { TrnListData } from '../ap-trn-game-list/ap-trn-game-list.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApTrnListRowComponent } from '../ap-trn-list-row/ap-trn-list-row.component';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApRowListItem, defaultPlayersList, } from '../ap-trn-list-row/ap-trn-list-row.interface';

type TrnAccentColor = 'yellow' | 'purple';

@Component({
  standalone: true,
  selector: 'ap-trn-game-result',
  imports: [CommonModule, ApTrnCardTitleComponent, ApUiFramePopupComponent, ApIconComponent, ApTrnListRowComponent, ApButtonComponent,
  ],
  templateUrl: './ap-trn-game-result.component.html',
  styleUrls: ['./ap-trn-game-result.component.css'],
})
export class ApTrnGameResultComponent {
  getEventDetailsButtonText = input<string>('Event Details');
  getPrizeLabel = input<string>('Prize');
  getButtonLabel = input<string>('Confirm');
  getQuickTitle = input<string>('QUICK');
  getEventTitle = input<string>('EVENT');
  getRoomID = input<string>('123456abcdefg');
  getCampaignID = input<string>('abcdefg123456');
  readonly data = input<TrnListData | null>(null);
  readonly playList = input<ApRowListItem[]>(defaultPlayersList.slice(0, 5));
  readonly currency = input<string>('$');
  rank = input<number | null>(1);
  prize = input<number | null>(0);


  // Customizable inputs (can be overridden)
  readonly accentColor = input<TrnListData['variant']>('yellow');
  readonly EventIcon = input<string>('assets/images/tournament/icon-event.png');
  readonly EventTitle = input<string>('Event Title');
  header = input('Game Result');

  readonly displayAccentColor = computed<TrnAccentColor>(() => {
    const variant = this.data()?.variant ?? this.accentColor();
    return variant === 'quick' || variant === 'yellow' ? 'yellow' : 'purple';
  });
  readonly displayEventIcon = computed(() => this.data()?.banner ?? this.EventIcon());
  readonly displayEventTitle = computed(() => this.data()?.title ?? this.EventTitle());

  readonly clickClose = output<void>();
  readonly clickConfirm = output<void>();
  readonly raceDetails = output<void>();

  onRaceDetails() {
    this.raceDetails.emit();
  }
  /*
  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Enter') this.clickConfirm();
  }*/

  getButtonAccentColor(): 'yellow' | 'purple' {
    return this.displayAccentColor();
  }
}
