import { Component, input, output, signal, computed, inject, ViewChild, ElementRef, OnDestroy, DestroyRef, effect, untracked, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { serverProto } from '../../shared/Protobuf/new_proto';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApWebHistoryDetailSessionKey, HistoryDetailDataInterface } from '../../../chiikawa/ApWeb/ApWebInterface';
import { ApWebBase } from '../../../chiikawa/ApWeb/ApWebBase';
import { ApWebMessages, createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';
import { LoggerService } from '../../services/logger/logger.service';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { safeParse } from '../../shared/Protobuf/proto-base';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import Decimal from 'decimal.js';
import { calc, dec } from '../../services/player-wallet/player-wallet.function';
import { MoneyTextPipe } from "../../shared/pipe/money-text.pipe";
import { TicketMessageResponse } from '../../services/history-replay/history-replay.interface';
import { IServerHistorySpinDetailResponse } from '../../services/history-ctrl/history-server.interface';

@Component({
  selector: 'history-detail',
  imports: [CommonModule, ApIconComponent, ApButtonComponent, ApLoadingOverlayComponent, ApSelectComponent, ApSelectComponent, MoneyTextPipe],
  templateUrl: './history-detail.component.html',
  styleUrl: './history-detail.component.css',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HistoryDetailComponent implements OnDestroy {
  @ViewChild('gameIframe') gameIframe!: ElementRef<HTMLIFrameElement>;
  @ViewChild('gameIframe', { static: true }) set iframeRef(
    ref: ElementRef<HTMLIFrameElement>,
  ) {
    this.setIframe(ref?.nativeElement);
  }
  protected iframe: HTMLIFrameElement | null = null;
  private readonly i18n = inject(AppI18nService);
  protected readonly api = inject(AppInterfaceService);
  protected readonly session = inject(ClientSessionService);
  protected readonly historyCtrl = inject(HistoryCtrlService);
  protected readonly logger = inject(LoggerService);
  protected readonly wallet = inject(PlayerWalletService);
  protected readonly gameIframeCtrl = inject(GameIframeCtrlService);
  protected isGhana = computed(() => this.session.isGhanaUI);
  private readonly destroyRef = inject(DestroyRef);
  // Table Headers
  readonly betTitle = this.i18n.computed(this.isGhana() ? 'og_bet_info_stake' : 'history_bet', 'Bet');
  readonly balanceTitle = this.i18n.computed('history_balance', 'Balance');
  readonly winTitle = this.i18n.computed('history_win', 'Win');
  readonly loseTitle = this.i18n.computed('history_lose', 'Lose');
  // List Labels
  readonly roundLabel = this.i18n.computed('history_round', 'Round');
  readonly wayLabel = this.i18n.computed('history_way', 'WAY');
  readonly kindLabel = this.i18n.computed('history_kind', 'OF A KIND');
  readonly winColumnLabel = this.i18n.computed('history_win', 'WIN');
  readonly lineLabel = this.i18n.computed('history_line_bet', ' /Line');
  readonly normalGamelabel = this.i18n.computed('history_normal_game', 'Normal Spin');
  readonly freeGameLabel = this.i18n.computedGame( 'buyfeature_bf_title', this.i18n.instant('history_free_game') );
  readonly showLineBetLabel = computed<boolean>(() => {
    const gameType = this.gameIframeCtrl.slotGameType();
    return gameType === 'Line' || gameType === 'Line_way' || gameType === 'One_Line';
  });

  /** 轉圈遮蓋 */
  isLoading = signal<boolean>(true);
  item = input<HistoryListItem | null>(null);
  ticket = computed<string>(() => this.item()?.transaction || 'N/A');
  currency = computed<string>(() => this.item()?.currency || '');
  currentBalance = computed<number | null>(() => this.balanceList()[this.currentRound()] ?? null);
  currentWin = computed<number>(() => this.winList()[this.currentRound()] ?? 0);
  /** 計算舊的餘額 */
  balanceOld = computed<number | null>(() => {
    let balance = this.currentBalance();
    if (balance === null) return null;
    // 如果是round = 0，舊的餘額需加上投注金額
    if (this.currentRound() === 0) balance = new Decimal(balance).plus(this.bet()).toNumber();
    return new Decimal(balance).minus(this.currentWin()).toNumber();
  });
  balanceNew = computed<number | null>(() => this.currentBalance());
  balanceList = signal<number[]>([]);
  line = computed<number | null>(() => { return this.gameIframeCtrl.lineRule()?.length ?? null; });
  bet = computed<number>(() => { return this.item()!.bet || 0; });
  displayBet = computed<number>(() => {
    if (this.currentRound() === 0) return this.bet();
    // 從round >= 1開始，顯示的投注金額皆為0
    return 0;
  });
  baseBet = computed<number>(() => new Decimal(this.bet()).div(this.bfRate()).toNumber());
  lineBet = computed<number | null>(() => this.line() !== null ? new Decimal(this.baseBet()).div(this.line()!).toNumber() : null);

  win = computed<number>(() => this.currentWin());
  winList = signal<number[]>([]);
  private isLongAmount(value: number | null): boolean {
    if (value === null) return false;
    return dec.comma(value).replace(/\D/g, '').length > 9;
  }

  // Bet column
  readonly betSummaryTitle = computed(() =>
    this.betTitle() + (this.showLineBetLabel() ? this.lineLabel() : ''));

  // Win column
  readonly isWinResult = computed(() => !!this.item()?.isWin);
  readonly winSummaryTitle = computed(() =>
    this.isWinResult() ? this.winTitle() : this.loseTitle());

  // Balance column
  readonly balanceOldIsHidden = computed(() => this.balanceOld() === null);
  readonly balanceNewIsHidden = computed(() => this.balanceNew() === null);
  readonly balanceOldIsLong = computed(() => this.isLongAmount(this.balanceOld()));
  readonly balanceNewIsLong = computed(() => this.isLongAmount(this.balanceNew()));

  readonly isDetailThemeDark = computed(() => this.item()?.detailTheme === 'dark');
  replay = output<HistoryListItem | null>();
  share = output<HistoryListItem | null>();
  bfMode = signal<string>('');
  bfRate = computed<number>(() => {
    return this.wallet.allSpinModes().find(mode => mode.name === this.bfMode())?.rate ?? 1;
  });

  showPlateSelector = signal<boolean>(false);
  /** 當前 round，從 0 開始 */
  currentRound = signal<number>(0);
  /** 有FG就是從1~XX */
  maxRound = signal<number>(0);
  showRoundSelector = computed<boolean>(() => this.item()?.isStarred || false);
  roundSelectorDisabled = computed<boolean>(() => this.isLoading() || this.maxRound() <= 1);

  /** 顯示當前 round 的數字，例如 "Round (1/3)" */
  readonly roundNumberText = computed<string>(() => {
    if (this.currentRound() <= 0) return '';
    return ` (${this.currentRound()}/${this.maxRound()})`;
  });

  //readonly defaultDoubleChanceLabel = this.i18n.computed('history_double_chance', 'Double Chance');
  //readonly defaultBuyFeatureLabel = this.i18n.computed('BuyFeature_EventCenter_Tab', 'Buy Feature');
  /** 最左上角的顯示名稱 */
  displayName = computed((): string => {
    const item = this.item();
    if (!item) return this.normalGamelabel();
    if (item.isStarred && this.currentRound() > 0) return this.freeGameLabel();
    //if (item.isDoubleChance) { return this.i18n.instantGame(`buyfeature_${item.buyFeatureMode}_title`, this.defaultDoubleChanceLabel()); };
    //if (item.buyFeatureMode) { return this.defaultBuyFeatureLabel(); };
    return this.normalGamelabel();
  });

  private boundReceiveMessage = this.receiveMessage.bind(this);
  private boundAdjustTopByWidth = this.adjustTopByWidth.bind(this);

  copyTransaction = output<string>();
  ngOnInit() {
    // 監聽message, 會在receiveMessage中處理來自iframe的訊息
    window.addEventListener('message', this.boundReceiveMessage, false);

    this.historyCtrl.spinDetail$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((detail) => {
      const note = detail.result.note;
      // 從note中解析出bfMode
      if (note && note.length > 0) {
        const mode = safeParse(note, { mode: '' }).mode;
        this.bfMode.set(mode);
      }

      this.balanceList.set(detail.balanceList);
      this.winList.set(detail.winList);
    });

    // 取得詳細資料
    this.historyCtrl.getHistoryDetail(this.item() || null);
  }

  ngAfterViewInit() {
    this.adjustTopByWidth();
    window.addEventListener('resize', this.boundAdjustTopByWidth);

    if (this.iframe?.contentWindow) {
      this.iframe.contentWindow.name = this.iframeName();
      this.iframe.src = this.iframeUrl();
    }
  }

  ngOnDestroy() {
    // 移除監聽
    window.removeEventListener('message', this.boundReceiveMessage, false);
    window.removeEventListener('resize', this.boundAdjustTopByWidth);
  }

  setIframe(iframe: HTMLIFrameElement | null) {
    if (iframe) this.iframe = iframe;
  }

  iframeUrl = computed<string>(() => {
    const urlParams = new URLSearchParams();
    urlParams.set('webangular', '1');
    urlParams.set('sessionHistory', '1');
    urlParams.set('lang', this.session.language);
    const gameId: string = this.session.gameId?.toString() || '';
    // ex: /10076/?ticketNo=eqXKQGgrIcKFN7&platform=jk8master_t306&site=default&webangular=1

    if (this.session.remoteHost) {
      return `${this.session.remoteHost}?${urlParams.toString()}`
    }
    else {
      return `/${gameId}/?${urlParams.toString()}`;
    }
  });

  iframeName = computed<string>(() => {
    const apweb = new ApWebBase();
    apweb.setMode('ap-history');
    return apweb.toString();
  });

  clickCopyTransaction(item: HistoryListItem, event?: Event) {
    event?.stopPropagation();
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
        value: (i).toString(),
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

  isNextRoundEnabled = computed<boolean>(() => this.maxRound() > this.currentRound());

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

  receiveMessage(event: MessageEvent) {
    // 確保來自信任的來源
    if (!this.isLocalOrigin() && event.origin !== window.location.origin) return;

    // 確保來自指定的 iframe
    if (event.source !== this.iframe?.contentWindow) return;

    this.logger.iframeHistoryLog('iframe➡️:', event.data);

    const message: ApWebMessages = event.data;
    if (message.type === 'HistoryDetailLoaded') {
      this.processHistoryDetailLoaded(message.content);
      return;
    }
  }

  processHistoryDetailLoaded(data: HistoryDetailDataInterface) {
    this.isLoading.set(false);
    const spinResult: serverProto.Ispin_result = data.spinResult;
    this.maxRound.set(spinResult.free_game?.length || 0);
  }

  // 根據長寬比例調整 iframe 的縮放，以適應不同尺寸的螢幕
  adjustTopByWidth() {
    const width = window.innerWidth;
    // 當寬度小於 512px 時，開始縮放
    const scale = width < 512 ? width / 512 : 1;
    if (this.gameIframe) {
      // 應用 transform scale 來縮放，並移除舊的 top 樣式
      this.gameIframe.nativeElement.style.transform = `scale(${scale})`;
    }
  }

}
