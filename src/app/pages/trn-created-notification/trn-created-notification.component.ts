import { Component, computed, effect, input, OnInit, output, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApTrnCardTitleComponent } from '../../components/ap-trn-card-title/ap-trn-card-title.component';
import { firstValueFrom, Subscription, timer } from 'rxjs';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { TrnDebugSignalKey, TrnQueueUpdated } from '../../services/trn-ctrl/trn-ctrl.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
@Component({
  selector: 'trn-created-notification',
  standalone: true,
  imports: [CommonModule, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent],
  templateUrl: './trn-created-notification.component.html',
  styleUrl: './trn-created-notification.component.css',
})
export class TrnCreatedNotificationComponent implements OnInit {
  private appI18n = inject(AppI18nService);
  readonly accentColor = input<'yellow' | 'purple'>('yellow');
  readonly autoHide = input<boolean>(true);
  readonly buttonJoinLabel = this.appI18n.computed('JoinNow_Btn', 'JOIN NOW');
  readonly getQuickTitle = this.appI18n.computed('InitiativeMatch_Title', 'RACE READY TO GO');
  readonly title = input<string>('RACE READY TO GO');
  readonly currentCount = signal<number>(1);
  readonly totalCount = signal<number>(30);
  readonly countdownTime = computed<string>(() => {
    const seconds = this.progressCurrent();
    return `00:${seconds.toString().padStart(2, '0')}`;
  });

  readonly personImage = input<string>('');
  progressCurrent = signal(10);

  readonly isVisible = signal<boolean>(false);
  countDownSub: Subscription | null = null;
  closeSub: Subscription | null = null;

  /** 目前提示對應的tier id */
  tierId = signal<string | null>(null);
  /** 目前提示的玩家人數 */

  openWindow = output<void>();
  constructor(
    protected trn: TrnCtrlService,
    protected api: AppInterfaceService,
  ) {
    effect(() => {
      if (this.trn.status() !== 'idle')
        this.isVisible.set(false);
    });
  }

  ngOnInit(): void {
    // Debug訊號
    this.trn.debugSignal$.subscribe(this.onDebugSignal.bind(this));
    this.trn.notifyQueueCreated$.subscribe(this.onCreated.bind(this));
    this.trn.notifyQueueUpdated$.subscribe(this.onUpdated.bind(this));
  }

  playNotification(): void {
    // 先結束之前的通知
    this.endNotification();
    this.isVisible.set(true);
    // 開始倒數計時, 使用rxjs timer每秒觸發
    this.countDownSub = timer(0, 1000).subscribe((sec) => {
      const remaining = Math.max(0, 10 - sec);
      this.progressCurrent.set(remaining);
      if (remaining <= 0) {
        this.countDownSub?.unsubscribe();
      }
    });
    // 倒數10秒之後觸發close.emit()
    if (this.autoHide()) {
      this.closeSub = timer(10000).subscribe(() => {
        this.endNotification();
      });
    }
  }

  endNotification(): void {
    this.tierId.set(null);
    this.currentCount.set(1);
    this.isVisible.set(false);
    this.countDownSub?.unsubscribe();
    this.closeSub?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.countDownSub?.unsubscribe();
    this.closeSub?.unsubscribe();
  }

  clickJoin(): void {
    this.endNotification();
    this.trn.sendJoinQuick();
    this.openWindow.emit();
  }

  clickClose(): void {
    this.endNotification();
  }

  onCreated(data: TrnQueueUpdated): void {
    // 當下BetLevel的Tier不符合就不顯示
    if (this.trn.currentTier()?.id !== data.tierId)
      return;
    this.playNotification();
    this.tierId.set(data.tierId);
    this.currentCount.set(data.currentPlayers);
    this.totalCount.set(data.maxPlayers || 30);
    this.currentCount.set(1);
  }

  onUpdated(data: TrnQueueUpdated): void {
    if (this.tierId() === data.tierId) {
      this.currentCount.set(data.currentPlayers);
    }
  }

  onDebugSignal(key: TrnDebugSignalKey) {
    if (key === 'created-notification') {
      this.isVisible.set(!this.isVisible());
      if (this.isVisible()) {
        this.playNotification();
      }
      else {
        this.endNotification();
      }
    }
  }
}
