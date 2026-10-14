import {
  Component, input, output, signal, computed, inject, ViewChild, ElementRef, OnDestroy, DestroyRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { serverProto } from '../../shared/Protobuf/new_proto';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { HistoryDetailDataInterface } from '../../../chiikawa/ApWeb/ApWebInterface';
import { ApWebBase } from '../../../chiikawa/ApWeb/ApWebBase';
import {
  ApWebMessages,
  createApWebMessage,
} from '../../../chiikawa/ApWeb/ApWebMessages';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';
import { LoggerService } from '../../services/logger/logger.service';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';
import { safeParse } from '../../shared/Protobuf/proto-base';
import Decimal from 'decimal.js';
import { dec, MoneyText } from '../../services/player-wallet/player-wallet.function';
import { ApOgHistoryDetailChickenComponent } from '../../components/ap-og-history-detail-chicken/ap-og-history-detail-chicken.component';
import { ApOgHistoryDetailTopComponent } from '../../components/ap-og-history-detail-top/ap-og-history-detail-top.component';
import { debounceTime } from 'rxjs';
import { IServerHistorySpinDetailSeed } from '../../services/history-ctrl/history-server.interface';
import { OgFairnessRequest, OgSeedData } from '../og-fairness/og-fairness.interface';
import { ChangeSeedResult } from '../../services/app-interface/change-seed.interface';

@Component({
  selector: 'history-detail-og',
  imports: [ CommonModule, ApOgHistoryDetailChickenComponent, ApOgHistoryDetailTopComponent, ApLoadingOverlayComponent,],
  templateUrl: './history-detail-og.component.html',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HistoryDetailOGComponent implements OnDestroy {
  protected iframe: HTMLIFrameElement | null = null;
  private readonly i18n = inject(AppI18nService);
  protected readonly api = inject(AppInterfaceService);
  protected readonly historyCtrl = inject(HistoryCtrlService);
  protected readonly logger = inject(LoggerService);
  private readonly destroyRef = inject(DestroyRef);

  // List Labels
  readonly winColumnLabel = this.i18n.computed('history_win', 'WIN');
  readonly normalGamelabel = this.i18n.computed(
    'history_normal_game',
    'Normal Spin',
  );
  readonly freeGameLabel = this.i18n.computed(
    'buyfeature_bf_title',
    this.i18n.instant('history_free_game'),
  );

  /** game 30011 該局的實際紀錄資料，由外部（history list/detail server 回應）帶入 */


  /** 轉圈遮蓋 */
  isLoading = signal<boolean>(true);
  item = input<HistoryListItem | null>(null);
  ticket = computed<string>(() => this.item()?.transaction || 'N/A');
  currency = computed<string>(() => this.item()?.currency || '');
  currentBalance = computed<number | null>(
    () => this.balanceList()[this.currentRound()] ?? null,
  );
  currentWin = computed<number>(() => this.winList()[this.currentRound()] ?? 0);
  /** 計算舊的餘額 */
  balanceOld = computed<number | null>(() => {
    let balance = this.currentBalance();
    if (balance === null) return null;
    // 如果是round = 0，舊的餘額需加上投注金額
    if (this.currentRound() === 0) balance = balance + this.bet();
    return new Decimal(balance).minus(this.currentWin()).toNumber();
  });

  /** 計算新的餘額 */
  balanceNew = computed<number | null>(() => this.currentBalance());


  balanceList = signal<number[]>([]);
  line = computed<number | null>(() => {
    return null;
  });

  bet = computed<number>(() => {
    return this.item()!.bet || 0;
  });
  displayBet = computed<number>(() => {
    if (this.currentRound() === 0) return this.bet();
    // 從round >= 1開始，顯示的投注金額皆為0
    return 0;
  });
  baseBet = computed<number>(() =>
    new Decimal(this.bet()).div(this.bfRate()).toNumber(),
  );

  /* Win column */
  win = computed<number>(() => this.currentWin());
  /** Win column 顯示的文字 */
  winText = computed<string>(() => {
    const win = this.win();
    if (win === 0) return '--';
    return MoneyText.format(win);
  });
  winList = signal<number[]>([]);

  // Win column
  readonly isWin = computed(() => !!this.item()?.isWin);


  readonly isDetailThemeDark = computed(
    () => this.item()?.detailTheme === 'dark',
  );

  replay = output<HistoryListItem | null>();
  share = output<HistoryListItem | null>();

  bfRate = signal<number>(1);
  eventString = signal<string>('{}');
  seed = signal<IServerHistorySpinDetailSeed>({
    server_seed: '',
    server_seed_hash: '',
    client_seed: '',
  });

  showPlateSelector = signal<boolean>(false);
  /** 當前 round，從 0 開始 */
  currentRound = signal<number>(0);
  /** 有FG就是從1~XX */
  maxRound = signal<number>(0);
  showRoundSelector = computed<boolean>(() => this.item()?.isStarred || false);
  roundSelectorDisabled = computed<boolean>(
    () => this.isLoading() || this.maxRound() <= 1,
  );

  /** 顯示當前 round 的數字，例如 "Round (1/3)" */
  readonly roundNumberText = computed<string>(() => {
    if (this.currentRound() <= 0) return '';
    return ` (${this.currentRound()}/${this.maxRound()})`;
  });

  copyTransaction = output<string>();

  /** 將公平性視窗的開啟需求交由 history-list-og 顯示在歷史頁最上層。 */
  readonly fairnessRequested = output<OgFairnessRequest>();

  ngOnInit() {
    this.historyCtrl.spinDetail$
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(500))
      .subscribe((detail) => {
        const mgPlate = detail.result.main_game?.plate;
        if (mgPlate && mgPlate.length > 0) {
          this.eventString.set(mgPlate[0]?.event || '{}');
        }
        const seed = detail.seed;
        if (seed) {
          this.seed.set(seed);
        }

        this.balanceList.set(detail.balanceList);
        this.winList.set(detail.winList);
        this.isLoading.set(false);
      });

    // 取得詳細資料
    this.historyCtrl.getHistoryDetail(this.item() || null);

    // 監聽公平性驗證的serverSeed變化
    this.api.changedSeed$.subscribe((seed: ChangeSeedResult) => {
      // 如果serverSeed變化，重新取得歷史紀錄詳細資料
      this.historyCtrl.getHistoryDetail(this.item() || null);
    })
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {

  }


  async clickCopyTransaction(item: HistoryListItem, event?: Event) {
    this.copyTransaction.emit(item.transaction);
  }

  /** ap-select的選項 先放入Normal Game, 再根據 maxRound 產生 roundOptions，並在 label 顯示 XxxxGame + 數字 */
  readonly roundOptions = computed<ApSelectOption[]>(() => {
    const options: ApSelectOption[] = [];
    options.push({
      value: '0',
      label: this.normalGamelabel(),
      content: [this.currency() + dec.comma(this.winList()[0])],
    });
    for (let i = 1; i <= this.maxRound(); i++) {
      options.push({
        value: i.toString(),
        label: this.freeGameLabel() + ' ' + i,
        content: [this.currency() + dec.comma(this.winList()[i])],
      });
    }
    return options;
  });

  /** 給ap-select使用的 */
  selectRound(value: string): void {
    const index = parseInt(value, 10);
    if (isNaN(index)) return;
    this.currentRound.set(index);
    this.sendMessage(
      createApWebMessage('ChangeHistoryPageIndex', { pageIndex: index }),
    );
  }

  /** 控制 replay 按鈕顯示 */
  readonly showReplayButtons = computed(() => {
    if (this.historyCtrl.forceReplayDisplayed()) return true;
    return (
      this.api.loginResult()?.note?.history_replay === 1 && this.item()?.replay
    );
  });

  /** 控制 share 按鈕顯示 */
  readonly showShareButtons = computed(() => {
    if (this.historyCtrl.forceShareDisplayed()) return true;
    return (
      this.api.loginResult()?.note?.history_replay === 1 && this.item()?.replay
    );
  });

  isPreRoundEnabled = computed<boolean>(() => this.currentRound() > 0);

  clickPreRound() {
    const pre = this.currentRound() - 1;
    if (pre < 0) return;
    this.currentRound.set(pre);
    this.sendMessage(
      createApWebMessage('ChangeHistoryPageIndex', {
        pageIndex: this.currentRound(),
      }),
    );
  }

  isNextRoundEnabled = computed<boolean>(
    () => this.maxRound() > this.currentRound(),
  );

  clickNextRound() {
    const next = this.currentRound() + 1;
    const nextRound = next > this.maxRound() ? 0 : next;
    this.currentRound.set(nextRound);
    this.sendMessage(
      createApWebMessage('ChangeHistoryPageIndex', {
        pageIndex: this.currentRound(),
      }),
    );
  }

  private isLocalOrigin(): boolean {
    const origin = window.location.origin;
    return origin.includes('localhost') || origin.includes('192.168');
  }

  sendMessage(message: ApWebMessages) {
    if (this.iframe?.contentWindow) {
      const targetOrigin = this.isLocalOrigin() ? '*' : window.location.origin;
      this.iframe.contentWindow.postMessage(message, targetOrigin);
    }
  }

  processHistoryDetailLoaded(data: HistoryDetailDataInterface) {
    this.isLoading.set(false);
    const spinResult: serverProto.Ispin_result = data.spinResult;
    this.maxRound.set(spinResult.free_game?.length || 0);
  }

  clickSeed(): void {
    // Seeds 不需要帶入單筆驗證資料，避免沿用前一次 Verify 的 seed。
    this.fairnessRequested.emit({
      view: 'fairness',
      selectedTab: 'seeds',
      seedData: null,
    });
  }

  clickVerify(seedData: OgSeedData): void {
    // 將目前歷史紀錄的 seed 帶入 Verify 頁籤。
    this.fairnessRequested.emit({
      view: 'fairness',
      selectedTab: 'verify',
      seedData,
    });
  }

  clickProvable(): void {
    // 直接開啟 Provably Fair 說明，不保留前一次 Verify 的 seed。
    this.fairnessRequested.emit({
      view: 'provable',
      selectedTab: 'seeds',
      seedData: null,
    });
  }
}
