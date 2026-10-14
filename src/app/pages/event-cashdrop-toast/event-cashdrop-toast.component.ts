import { Component, OnDestroy, OnInit, output, inject, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, timer } from 'rxjs';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { CashDropService } from '../../services/cash-drop/cash-drop.service';
import { calc, MoneyText } from '../../services/player-wallet/player-wallet.function';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
@Component({
  selector: 'event-cashdrop-toast',
  standalone: true,
  imports: [CommonModule,ApButtonComponent],
  templateUrl: './event-cashdrop-toast.component.html',
  styleUrl: './event-cashdrop-toast.component.css',
})
export class EventCashdropToastComponent implements OnInit, OnDestroy {
  isVisible = signal(true);
  isFadingOut = signal(false);
  variant = input<'fail' | 'pass'>('fail');
  private appI18n = inject(AppI18nService);
  private cashDrop = inject(CashDropService);
  private eventCenter = inject(EventCenterCtrlService);
  private bottomPanel = inject(BottomPanelService);
  failLabel = this.appI18n.computed('cashdrop_difference_info', 'Bet {0}+ to trigger Cash Drop!');
  failMessage = computed(() => {
    const minBet = this.cashDrop.focusCashDrop()?.minBet ?? 0;
    return this.failLabel().replace('{0}', MoneyText.format(minBet, { addSpace: false }));
  });

  passMessage = this.appI18n.computed('cashdrop_D1_5', 'Stand a chance to win Daily Cash Drop!');


  readonly moreDetailLabel = this.appI18n.computed('cashdrop_to_detail_btn', 'Click for more details.');

  private autoCloseSub: Subscription | null = null;
  private fadeOutSub: Subscription | null = null;

  ngOnInit(): void {
    this.autoCloseSub = timer(5000).subscribe(() => this.closeToast());
  }

  ngOnDestroy(): void {
    this.autoCloseSub?.unsubscribe();
    this.autoCloseSub = null;
    this.fadeOutSub?.unsubscribe();
    this.fadeOutSub = null;
  }

  closeToast(): void {
    this.autoCloseSub?.unsubscribe();
    this.autoCloseSub = null;
    this.isFadingOut.set(true);
    this.fadeOutSub = timer(500).subscribe(() => {
      this.isVisible.set(false);
      this.isFadingOut.set(false);
    });
  }

  clickMoreDetail(): void {
    if (this.bottomPanel.isBusy()) {
      return;
    }
    this.eventCenter.open('cash-drop');
    this.isVisible.set(false);
  }
}
