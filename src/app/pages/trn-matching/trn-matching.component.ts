import { Component,  OnInit, OnDestroy, signal,inject, computed } from '@angular/core';
import { ApTrnTabComponent } from "../../components/ap-trn-tab/ap-trn-tab.component";
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { ApTrnCardMatchComponent } from "../../components/ap-trn-card-match/ap-trn-card-match.component";
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { firstValueFrom, interval, Subject, takeUntil, timer } from 'rxjs';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';

@Component({
  selector: 'trn-matching',
  imports: [ApTrnTabComponent, ApIconComponent, ApTrnCardMatchComponent, ApButtonComponent],
  templateUrl: './trn-matching.component.html',
  styleUrl: './trn-matching.component.css'
})
export class TrnMatchingComponent implements OnInit, OnDestroy {
  private appI18n = inject(AppI18nService);
  readonly getQuickTabText = this.appI18n.computed('QuickRace_Tab', 'QUICK');
  readonly getEventDetailsButtonText = this.appI18n.computed('GameResult_DetailLink', 'Event details');
  readonly getMatchingButtonText = this.appI18n.computed('Matching_Btn', 'Matching...');
  matchingTime = signal<number>(0);
  startTime = signal<number | null>(null);
  roomStatus = signal<'matching' | 'canceling'>('matching');
  private destroy$ = new Subject<void>();
  isButtonDisabled = computed(() => this.roomStatus() === 'canceling');
  constructor(protected trn: TrnCtrlService,
    protected api: AppInterfaceService,
  ) {
  }


  ngOnInit(): void {
    // 監聽玩家加入房間事件
    this.trn.roomCancelling$
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.onRoomCancelling.bind(this));

    this.startTime.set(this.trn.matchingStartTime() || null);

    // 每秒更新 matchingTime
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const start = this.startTime();
        if (start === null) return;
        this.matchingTime.set(Math.floor((Date.now() - start) / 1000));
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClickCancel() {
    this.trn.sendCancelJoinQuick();
  }

  onClickDetail() {

  }



  onRoomCancelling() {
    this.roomStatus.set('canceling');
  }
}
