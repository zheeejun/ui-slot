import { Component, computed, output, signal, OnInit, OnDestroy, AfterViewInit,inject } from '@angular/core';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { Subject, takeUntil } from 'rxjs';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { ApRowListItem } from '../../components/ap-trn-list-row/ap-trn-list-row.interface';
import { ApTrnFloatCountdownComponent } from "../../components/ap-trn-float-countdown/ap-trn-float-countdown.component";
import { ApTrnCardBonusComponent } from "../../components/ap-trn-card-bonus/ap-trn-card-bonus.component";
import { ApTrnListRowComponent } from "../../components/ap-trn-list-row/ap-trn-list-row.component";
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { ApTrnGameHintComponent } from "../../components/ap-trn-game-hint/ap-trn-game-hint.component";
import { ApTrnTabComponent } from "../../components/ap-trn-tab/ap-trn-tab.component";
import { TrnRaceUpdated } from '../../services/trn-ctrl/trn-ctrl.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';

@Component({
  selector: 'trn-playing-quick',
  imports: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, ApTrnListRowComponent, CommonModule, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApTrnTabComponent],
  templateUrl: './trn-playing-quick.component.html',
  styleUrl: './trn-playing-quick.component.css'
})
export class TrnPlayingQuickComponent implements OnInit, OnDestroy, AfterViewInit {
  protected appI18n = inject(AppI18nService);
  protected trn = inject(TrnCtrlService);
  protected wallet = inject(PlayerWalletService);
  protected game = inject(GameIframeCtrlService);
  protected api = inject(AppInterfaceService);
  readonly getQuickTabText = this.appI18n.computed('QuickRace_Tab', 'QUICK');
  readonly betMultiplierTitle = this.appI18n.computed('BetBoost', 'BET');
  readonly getBetTitle = this.appI18n.computed('BetBoost', 'BET');
    readonly getQuickMessage = computed(() => {
    const isEnabled = this.trn.currentBetMultiplier() > 1;
    const key = isEnabled ? 'BetToggleOn_Tip' : 'BetToggleOff_Tip';
    const fallback = isEnabled
      ? 'Enable Tournament Bet'
      : 'Disable Tournament Bet';
    return this.appI18n.instant(key, fallback);
  });
  /** 是否使用 BetData */
  isBetData = computed<boolean>(() => { return this.wallet.trnData() !== null; });
  /** Room 結束時間 (Unix timestamp 豪秒) */
  endTime = signal<number | null>(null);
  /** 玩家列表載入中 */
  isPlayersListLoading = signal(false);
  /** 玩家列表 */
  playerListAll = signal<ApRowListItem[]>([]);
  /** 顯示完整玩家列表 */
  showAllPlayerList = signal(false);
  /** 顯示切換Enable Bet提示 */
  showHint = signal(false);
  /** 總獎金 */
  totalPrize = signal<number | null>(null);
  /** 下注倍率 */
  multiplier = signal<number>(1);
  isBetDataToggleEnabled = computed(() => this.game.status() === 'Idle');
  private destroy$ = new Subject<void>();

  constructor() {
  }

  ngOnInit(): void {

    this.trn.roomUpdated$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomUpdate.bind(this));
    this.endTime.set(this.trn.roomEndTime() || null);
    this.playerListAll.set( (this.trn.roomPlayerList()));
    this.totalPrize.set(this.trn.roomPrize() || null);
    this.multiplier.set(this.trn.betDataMultiplier());
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** 遊戲中片段顯示的玩家列表 */
  playerListPart= computed(() => { 
    // 包括isHighlight的玩家 跟isHighlight的玩家前4名
    const highlightIndex = this.playerListAll().findIndex( item => item.highlighted );
    if (highlightIndex === -1 || highlightIndex < 4) {
      return this.playerListAll().slice(0, 5);
    } else {
      const start = Math.max(0, highlightIndex - 4);
      const end = Math.min(this.playerListAll().length, highlightIndex + 1);
      return this.playerListAll().slice(start, end);
    }
  });

  onRoomUpdate(state: TrnRaceUpdated) {
    this.playerListAll.set(state.playersList);
    this.totalPrize.set(state.currentPool || null);
  }

  onToggleBetData(enable: boolean) {
    this.showHint.set(enable)
    this.trn.enableBetData(enable);
  }
}
