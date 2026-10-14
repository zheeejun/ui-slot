import { Component, signal, OnInit, OnDestroy, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApCashDropListComponent } from '../../components/ap-cashdrop-list/ap-cashdrop-list.component';
import { ApCashdropCardCountdownComponent } from '../../components/ap-cashdrop-card-countdown/ap-cashdrop-card-countdown.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { CashDropService } from '../../services/cash-drop/cash-drop.service';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { TabItem } from '../../components/ap-ui-tab-group/ap-ui-tab-group.interface';
import { SelectedTableType, SelectedTabType } from './event-cashdrop.interface';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { ICashDrop, ICashDropPrize, ICashDropWinner } from '../../services/cash-drop/cash-drop.interface';
import { ICashDropRuleData } from '../../services/cash-drop/cash-drop-info-msg.interface';

import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { Subject, takeUntil } from 'rxjs';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { MoneyTextPipe } from "../../shared/pipe/money-text.pipe";
import { MoneyText } from '../../services/player-wallet/player-wallet.function';

@Component({
  selector: 'event-cashdrop',
  imports: [CommonModule, ApCashDropListComponent, ApCashdropCardCountdownComponent, ApButtonComponent, ApUiTabGroupComponent, MoneyTextPipe],
  templateUrl: './event-cashdrop.component.html',
  styleUrl: './event-cashdrop.component.css',
})
export class EventCashdropComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  // Services
  private appI18n = inject(AppI18nService);
  protected wallet = inject(PlayerWalletService);
  protected api = inject(AppInterfaceService);
  protected cashDrop = inject(CashDropService);
  private storage = inject(StorageCtrlService);
  readonly selectedCashDrop = signal<ICashDrop | null>(this.cashDrop.focusCashDrop());
  readonly selectedCashDropId = computed(() => this.selectedCashDrop()?.id || "");
  // Selected Tab & Table
  selectedTab = signal<SelectedTabType>('PRIZES');
  selectedTable = signal<SelectedTableType>('LatestWinner');
  readonly dailyRewardItem = computed(() => {
    const items = this.cashDrop.cashDropsByEndTime();
    return items.length > 0 ? items[0] : null;
  });

  // Tab labels
  readonly prizesTabLabel = this.appI18n.computed('cashdrop_tab1', 'PRIZES');
  readonly winnersTabLabel = this.appI18n.computed('cashdrop_tab2', 'WINNERS');
  readonly rulesTabLabel = this.appI18n.computed('cashdrop_tab3', 'RULES');
  readonly tabs = computed<TabItem[]>(() => [
    { id: 'PRIZES', label: this.prizesTabLabel() },
    { id: 'WINNERS', label: this.winnersTabLabel() },
    { id: 'RULES', label: this.rulesTabLabel() },
  ]);

  // Prizes
  readonly prizeHeaderLeftLabel = this.appI18n.computed('cashdrop_P1', 'Prize');
  readonly prizeHeaderRightLabel = this.appI18n.computed('cashdrop_P2', 'Prize Left');
  // Winners
  readonly latestWinnerTitle = this.appI18n.computed('cashdrop_W3', 'Latest Winners');
  readonly biggestWinnerTitle = this.appI18n.computed('cashdrop_W4', 'Biggest Winners');
  readonly youWinTitle = this.appI18n.computed('cashdrop_W6', 'You Win');
  readonly mostWinnerTitle = this.appI18n.computed('cashdrop_W5', 'Most Winners');
  readonly selectedTableTitle = computed(() => {
    switch (this.selectedTable()) {
      case 'BiggestWinner':
        return this.biggestWinnerTitle();
      case 'YouWin':
        return this.youWinTitle();
      case 'MostWinner':
        return this.mostWinnerTitle();
      default:
        return this.latestWinnerTitle();
    }
  });
  readonly winnerHeaderLeftLabel = this.appI18n.computed('cashdrop_W1', 'Player ID');
  readonly winnerHeaderRightLabel = this.appI18n.computed('cashdrop_W2', 'Prize');

  // Popup
  readonly popupTitle = this.appI18n.computed('cashdrop_D1_5', 'Stand a chance to win Daily Cash Drops!');
  readonly popupButton = this.appI18n.computed('cashdrop_btn2', 'OK');
  readonly popupListItems = computed(() => [
    this.appI18n.instant('cashdrop_D4_8') || 'Expiry Date:',
    this.appI18n.instant('cashdrop_D4_1') || 'Number of prizes:',
    this.appI18n.instant('cashdrop_D4_2') || 'Max prize:',
    this.appI18n.instant('cashdrop_D4_3') || 'Min Bet:',
  ]);
  // Cache 頁面資料
  readonly prizes = signal<ICashDropPrize[]>([]);
  readonly latestWinners = signal<ICashDropWinner[]>([]);
  readonly biggestWinners = signal<ICashDropWinner[]>([]);
  readonly mostWinners = signal<ICashDropWinner[]>([]);
  readonly youWins = signal<ICashDropWinner[]>([]);
  readonly ruleData = signal<ICashDropRuleData | null>(null);
  // Rules 內容
  readonly rulesContent = computed(() => {
    const rule = this.ruleData();
    if (!rule) return [];
    const str = (key: string, fallback: string) => this.appI18n.instant(key, fallback);
    const result: string[] = [];

    if (Number(rule.all_day) > 0) {
      result.push(
        str('cashdrop_R1_1', '1. {0} Cash Drop event period from {2} to {3}')
          .replace('{0}', rule.name)
          .replace('{2}', rule.begin_time)
          .replace('{3}', rule.end_time)
      );
    } else {
      result.push(
        str('cashdrop_R1_2', '1. {0} Cash Drop event period from {4} to {5}, and daily period from {6} to {7}')
          .replace('{0}', rule.name)
          .replace('{4}', rule.begin_time)
          .replace('{5}', rule.end_time)
          .replace('{6}', rule.begin_range)
          .replace('{7}', rule.end_range)
      );
    }
    result.push(
      str('cashdrop_R2', '2. Minimum bet requirement to join in the event is {8}{1}')
        .replace('{8}', '')
        .replace('{1}', MoneyText.format(rule.min_bet_amount, {addSpace: false}))
    );
    result.push(
      str('cashdrop_R3', '3. Total amount of this event is {8}{9}, which will be randomly given to {10} lucky players.')
        .replace('{8}', '')
        .replace('{9}', MoneyText.format(rule.total_prizes_amount, {addSpace: false}))
        .replace('{10}', rule.total_prizes_count.toLocaleString())
    );
    const gameNames = rule.game_code_list.map(code => this.appI18n.instant(code)).join(', ');
    result.push(str('cashdrop_R4', '4. During the event period, players have the chance to win more than one prizes with a random cash prize.'));
    result.push(str('cashdrop_R5', '5. Qualified Games for this event: ') + gameNames);
    result.push(str('cashdrop_R6', '6. When you win a prize, the settlement will be completed within one hour at the latest, details available in game history.'));
    result.push(str('cashdrop_R7', 'Noted 1: When players win any Cash Drop prize, they can also click on the lucky items to get additional prize rewards.'));
    result.push(str('cashdrop_R8', 'Noted 2: Please make sure the internet is stable when participating in the event. If you disconnect when playing the mini-game, you will be directly settled with Cash Drop prize and the additional rewards obtained from the mini-game.'));
    result.push(str('cashdrop_R9', 'Noted 3: As mentioned note 2; incase you disconnected from the server during mysterious prize feature.'));
    result.push(str('cashdrop_R10', 'Situation 1: If you disconnect after clicking on the FALLING REWARDS and win 3 mysterious prizes, you will get the main prize and 3 mysterious prizes for settlement.'));
    result.push(str('cashdrop_R11', 'Situation 2: If you disconnect before you are able to click on any FALLING REWARDS, you will only get the main prize reward for settlement.'));
    return result;
  });
  readonly isYouLabel = this.appI18n.computed('cashdrop_W7', 'You');
  userId = computed(() => this.api.loginResultNote()?.nickname ?? '');
  /** 載入 cash drop id 對應的頁面資料 */
  ngOnInit() {
    this.cashDrop.prizeList$.pipe(takeUntil(this.destroy$)).subscribe(v => this.prizes.set(v));
    this.cashDrop.latestWinners$.pipe(takeUntil(this.destroy$)).subscribe(v => this.latestWinners.set(v));
    this.cashDrop.biggestWinners$.pipe(takeUntil(this.destroy$)).subscribe(v => this.biggestWinners.set(v));
    this.cashDrop.mostWinners$.pipe(takeUntil(this.destroy$)).subscribe(v => this.mostWinners.set(v));
    this.cashDrop.youWins$.pipe(takeUntil(this.destroy$)).subscribe(v => this.youWins.set(v));
    this.cashDrop.ruleData$.pipe(takeUntil(this.destroy$)).subscribe(v => this.ruleData.set(v));

    this.cashDrop.requestPageData(this.selectedCashDropId());

    // 先搜尋storage.cashDropClicked是否有對應所有cashdrops的 userId_cashdropId 的紀錄
    // 沒有就新增, 最多20筆紀錄, 避免storage佔用過多空間
    const userId = this.userId();
    const allKeys = this.cashDrop.cashDrops().map(cd => `${userId}_${cd.id}`);
    let clicked = this.storage.cashDropClicked ?? [];
    let changed = false;
    for (const key of allKeys) {
      if (!clicked.includes(key)) {
        clicked = [...clicked, key];
        changed = true;
      }
    }
    if (changed) {
      this.storage.cashDropClicked = clicked.length > 20 ? clicked.slice(-20) : clicked;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectCashDrop(cashDrop: ICashDrop) {
    this.selectedCashDrop.set(cashDrop);
    this.cashDrop.requestPageData(cashDrop.id);
  }

  // 選擇 Tab
  selectTab(buttonType: string): void {
    this.selectedTab.set(buttonType as SelectedTabType);
  }

  readonly nextTable: Record<SelectedTableType, SelectedTableType> = {
    LatestWinner: 'BiggestWinner',
    BiggestWinner: 'MostWinner',
    MostWinner: 'YouWin',
    YouWin: 'LatestWinner',
  };

  // 切換到下一個 Table
  setNextTable() {
    this.selectedTable.set(this.nextTable[this.selectedTable()]);
  }

  readonly prevTable: Record<SelectedTableType, SelectedTableType> = {
    LatestWinner: 'YouWin',
    BiggestWinner: 'LatestWinner',
    MostWinner: 'BiggestWinner',
    YouWin: 'MostWinner',
  };

  // 切換到上一個 Table
  setPrevTable() {
    this.selectedTable.set(this.prevTable[this.selectedTable()]);
  }

  readonly selectedTableContent = computed(() => {
    const tableMap: Record<SelectedTableType, ICashDropWinner[]> = {
      LatestWinner: this.latestWinners(),
      BiggestWinner: this.biggestWinners(),
      MostWinner: this.mostWinners(),
      YouWin: this.youWins(),
    };
    return tableMap[this.selectedTable()];
  });
}
