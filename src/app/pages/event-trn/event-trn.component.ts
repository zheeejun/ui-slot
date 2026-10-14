import { Component, computed, ElementRef, input, OnInit, output, signal, ViewChild, inject, effect, untracked } from '@angular/core';
import { EventTrnListComponent } from '../event-trn-list/event-trn-list.component';
import { EventTrnHistoryComponent } from '../event-trn-history/event-trn-history.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { EventTrnInfoComponent } from '../event-trn-info/event-trn-info.component';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { TabItem } from '../../components/ap-ui-tab-group/ap-ui-tab-group.interface';
import { IBottomTab } from './event-trn.interface';
import { EventTrnRulesComponent } from "../event-trn-rules/event-trn-rules.component";
import { EventTrnRankingComponent } from "../event-trn-ranking/event-trn-ranking.component";
import { EventTrnPrizeComponent } from "../event-trn-prize/event-trn-prize.component";
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { EventTrnTutorialComponent } from "../event-trn-tutorial/event-trn-tutorial.component";
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { TrnData } from '../../services/trn-ctrl/trn-ctrl.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';

@Component({
  selector: 'event-trn',
  imports: [EventTrnListComponent, EventTrnHistoryComponent, EventTrnInfoComponent, ApUiTabGroupComponent, ApIconComponent, EventTrnRulesComponent, EventTrnRankingComponent, EventTrnPrizeComponent, ApButtonComponent, EventTrnTutorialComponent],
  templateUrl: './event-trn.component.html',
  styleUrl: './event-trn.component.css',
})
export class EventTrnComponent implements OnInit {
  //** 服務注入 */
  private appI18n = inject(AppI18nService);
  protected trn = inject(TrnCtrlService);
  protected session = inject(ClientSessionService);
  protected api = inject(AppInterfaceService);
  protected eventCenter = inject(EventCenterCtrlService);
  readonly getBackLabel = this.appI18n.computed('BackToGame_Link', 'Back to Game');
  /** 要顯示的賽事ID */
  path = input<string>('');
  /** Top Tab Event 跟 History 切換 */
  topTab = signal<'event' | 'history' | string>('event');
  /** Top Tab 列表 */
  readonly eventTabLabel = this.appI18n.computed('Event_Tab', 'Event');
  readonly historyTabLabel = this.appI18n.computed('History_Tab', 'History');
  topTabs: TabItem[] = [
    { id: 'event', label: this.eventTabLabel() },
    { id: 'history', label: this.historyTabLabel() },
  ];
  /** Bottom Tab Info, Ranking, Prizes, Rules 切換 */
  bottomTab = signal<string>('info');
  /** Bottom Tab 列表 */
  bottomTabs = computed<IBottomTab[]>(() => this.detailTrn()?.type === 'quick' ? this.quickBottomTabs : this.eventBottomTabs);
  /** 是否顯示詳細資訊 */
  showDetail = computed(() => this.detailTrn() !== null);
  /** 詳細資訊的賽事資料 */
  detailTrn = computed<TrnData | null>(() => {
    const trnId = this.path();
    if (!trnId) return null;
    return this.trn.trnList().find(t => t.id === trnId) || null;
  });
  /** 主題，決定要顯示quick還是event的相關資訊 */
  themeType = computed<'quick' | 'event'>(() => {
    const type = this.detailTrn()?.type;
    if (type === 'quick') return 'quick';
    return 'event';
  });
  /** 是否顯示 TRN 教學 */
  showTrnTutorial = signal<boolean>(false);
  /** 是否顯示 Event 教學 */
  showEventTutorial = signal<boolean>(false);
  /** 是否顯示畫面 */
  onClose = output<void>();

  /** 詳細資訊容器的引用 */
  @ViewChild('detailContainer', { static: false }) detailContainer!: ElementRef<HTMLElement>;

  readonly infoTabLabel = this.appI18n.computed('Info_EventDetailTab', 'Info');
  readonly prizeTabLabel = this.appI18n.computed('Prizes_EventDetailTab', 'Prize');
  readonly ruleTabLabel = this.appI18n.computed('Rules_EventDetailTab', 'Rules');
  readonly rankingTabLabel = this.appI18n.computed('Ranking_EventDetailTab', 'Ranking');
  quickBottomTabs: IBottomTab[] = [
    { name: 'info', icon: 'setting', label: this.infoTabLabel() },
    { name: 'prize', icon: 'prizes', label: this.prizeTabLabel() },
    { name: 'rule', icon: 'view-columns', label: this.ruleTabLabel() },
  ];

  eventBottomTabs: IBottomTab[] = [
    { name: 'info', icon: 'setting', label: this.infoTabLabel() },
    { name: 'ranking', icon: 'ranking', label: this.rankingTabLabel() },
    { name: 'prize', icon: 'prizes', label: this.prizeTabLabel() },
    { name: 'rule', icon: 'view-columns', label: this.ruleTabLabel() },
  ];

  constructor() {
    effect(() => {
      this.path();
      this.bottomTab.set('info');
    });
  }

  ngOnInit(): void {
    this.trn.updateTrnListIfNeeded();
  }

  resetDetailScroll() {
    if (this.detailContainer) {
      this.detailContainer.nativeElement.scrollTop = 0;
    }
  }

  showDetailInfo(trn: TrnData | null) {
    this.eventCenter.open(`tournament/${trn?.id}`);
    this.resetDetailScroll();
  }
}
