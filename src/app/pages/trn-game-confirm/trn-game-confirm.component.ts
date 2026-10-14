import { Component, HostListener, input, output, signal, effect, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApTrnCardTitleComponent } from '../../components/ap-trn-card-title/ap-trn-card-title.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { TrnData } from '../../services/trn-ctrl/trn-ctrl.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';

type TrnVariant = 'yellow' | 'purple';

@Component({
  standalone: true,
  selector: 'trn-game-confirm',
  imports: [CommonModule, FormsModule, ApUiFramePopupComponent, ApButtonComponent, ApTrnCardTitleComponent,],
  templateUrl: './trn-game-confirm.component.html',
})
export class TrnGameConfirmComponent implements OnInit {
  private readonly dontShowStorageKey = 'ap_storage_trn_game_confirm_dont_show';
  private readonly appI18n = inject(AppI18nService);
  readonly getQuickTitle = this.appI18n.computed('QuickRace_Tab', 'QUICK');
  readonly getEventTitle = this.appI18n.computed('EventRace_Tab', 'EVENT');
  readonly checkboxText = this.appI18n.computed('DontShow_CheckBox', 'Do not show again in this week.');
  readonly getStartButton = this.appI18n.computed('Start_Btn', 'Start');
  storage = inject(StorageCtrlService);
  trn = inject(TrnCtrlService);
  /** 目前選擇的長期競賽 */
  selectedEvent = input<TrnData | null>(null);
  accentColor = input<TrnVariant>('purple');
  header = input('Message');
  bannerImage = input<string>('assets/images/tournament/quick-race/banner_default.png');
  iconImage = input<string>('assets/images/tournament/icon-event.png');
  title = computed(() => { return this.accentColor() === 'purple' ? 'Event Race' : 'Quick Race'; });
  subTitle = input('Tournament Confirmation Title');
  description = input('Win bets earn points, higher rank wins bigger prizes');
  // Internal signals for displaying data
  displayVariant = computed<TrnVariant>(() => { return this.accentColor(); });
  displayBanner = computed<string>(() => { return this.bannerImage(); });
  displayTitle = computed<string>(() => { return this.title(); });
  displaySubTitle = computed<string>(() => { return this.selectedEvent()?.name || this.subTitle(); });
  displayDescription = computed<string>(() => { return this.selectedEvent()?.description || this.description(); });

  // Checkbox state
  dontShowAgain = signal(false);

  // Output events
  readonly close = output<void>();

  constructor() {

  }

  ngOnInit(): void {
  }

  onCancel() {
    this.close.emit();
  }

  /* 這週不再顯示 */
  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.dontShowAgain.set(target.checked);
  }

  getBannerImage(): string {
    const banner = this.displayBanner();
    const variant = this.displayVariant();
    const defaultBanner =
      variant === 'yellow'
        ? 'assets/images/tournament/quick-race/banner_default.png'
        : 'assets/images/tournament/event-race/banner_default.png';

    return banner || defaultBanner;
  }

  /** 長期競賽 */
  onJoinEvent(): void {
    const selectedEvent = this.selectedEvent();
    if (!selectedEvent) {
      return;
    }

    if (this.dontShowAgain()) {
      this.setDontShowAgainByEvent(selectedEvent.id, new Date().getTime());
    }

    this.close.emit();
    this.trn.openEventRace(selectedEvent.id);

  }

  onJoinQuick(): void {
    const selectedQuick = this.selectedEvent();
    if (!selectedQuick) {
      return;
    }

    if (this.dontShowAgain()) {
      this.setDontShowAgainByEvent(selectedQuick.id, new Date().getTime());
    }
    this.close.emit();
    this.trn.sendJoinQuick();
  }

  private setDontShowAgainByEvent(eventId: string, timestamp: number): void {
    const raw = localStorage.getItem(this.dontShowStorageKey);
    const parsed = raw ? JSON.parse(raw) : null;
    const data: Record<string, number> =
      parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};

    data[eventId] = timestamp;
    localStorage.setItem(this.dontShowStorageKey, JSON.stringify(data));
  }
}
