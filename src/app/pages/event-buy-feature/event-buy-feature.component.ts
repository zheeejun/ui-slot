import { AfterViewInit, Component, OnInit, output, signal, inject, computed, ViewChild } from '@angular/core';
import { ApBfCardBetControlComponent } from '../../components/ap-bf-card-bet-control/ap-bf-card-bet-control.component';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApBuyFeatureCard } from './event-buy-feature.interface';
import { BetDataInterface } from '../../../chiikawa/ApWeb/ApWebInterface';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { CommonModule } from '@angular/common';
import { ApBfPopupConfirmFeatureComponent } from '../../components/ap-bf-popup-confirm-feature/ap-bf-popup-confirm-feature.component';
import { ApBfPopupConfirmChanceComponent } from '../../components/ap-bf-popup-confirm-chance/ap-bf-popup-confirm-chance.component';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { HistoryReplayService } from '../../services/history-replay/history-replay.service';
import { HistoryReplayViewerComponent } from '../history-replay-viewer/history-replay-viewer.component';
import { ApBfPopupPlayDemoConfirmComponent } from '../../components/ap-bf-popup-play-demo-confirm/ap-bf-popup-play-demo-confirm.component';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { GACollectorService } from '../../services/datacollector/gacollector.service';
import { TO_GA_ID } from '../../services/datacollector/gacollector.interface';
import { dec } from '../../services/player-wallet/player-wallet.function';
import { FindModeIndex } from './event-buy-feature.function';
import { isHistoryReplaySupported } from '../../services/history-replay/history-replay.function';
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';
import { ApBfCardChanceComponent } from '../../components/ap-bf-card-chance/ap-bf-card-chance.component';
import { ApBfCardFeatureComponent } from '../../components/ap-bf-card-feature/ap-bf-card-feature.component';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';

@Component({
  selector: 'event-buy-feature',
  imports: [CommonModule, ApBfCardBetControlComponent, ApBfPopupConfirmFeatureComponent, ApBfPopupConfirmChanceComponent, ApLoadingOverlayComponent, ApIconComponent, HistoryReplayViewerComponent, ApBfPopupPlayDemoConfirmComponent, ApBfCardChanceComponent, ApBfCardFeatureComponent],
  templateUrl: './event-buy-feature.component.html',
  styleUrl: './event-buy-feature.component.css',
})
export class EventBuyFeatureComponent implements OnInit, AfterViewInit {
  protected wallet = inject(PlayerWalletService);
  protected eventCenter = inject(EventCenterCtrlService);
  protected api = inject(AppInterfaceService);
  protected symbol = inject(BaseSymbolTextureService);
  protected session = inject(ClientSessionService);
  protected appI18n = inject(AppI18nService);
  protected trn = inject(TrnCtrlService);
  protected bottom = inject(BottomPanelService);
  protected replay = inject(HistoryReplayService);
  private readonly gaCollector = inject(GACollectorService);
  /** Feature 內文價格說明 */
  readonly getFeatureConfirmDescription = computed(() => {
    const raw = this.appI18n.instant('buy_feature_check_message', 'Click Confirm to complete your purchase.');
    const price = dec.comma(this.wallet.multiplyUserBet(this.confirmCard()?.rate));
    const currency = this.confirmCard()?.currency ?? '$';
    return raw.replace('{0}', currency).replace('{1}', price).replace(/\n/g, '<br>');
  });
  /** Double Chance 內文價格說明 */
  readonly getChanceConfirmDescription = computed(() => {
    const raw = this.appI18n.instant('double_chance_check_message', 'Click Confirm to complete your purchase.');
    const price = dec.comma(this.wallet.multiplyUserBet(this.confirmCard()?.rate));
    const currency = this.confirmCard()?.currency ?? '$';
    return raw.replace('{0}', currency).replace('{1}', price).replace(/\n/g, '<br>');
  });
  /** 沒有 Feature 或 Double Chance 的情況下，顯示的空頁面 */
  readonly isEmpty = computed(() => {
    return this.wallet.buyFeatureCards().length === 0 && this.wallet.buyChanceCards().length === 0;
  });
  readonly getEmptyText = this.appI18n.computed('buyfeature_no_items_text', 'No Buy Feature or Double Chance available.');
  /** Play Demo 確認內文說明 */
  readonly getGameName = this.appI18n.computed(this.session.gameId ?? '', this.session.gameId ?? '');
  readonly getConfirmHeaderText = this.appI18n.computed('message', 'Message');
  readonly getConfirmButtonText = this.appI18n.computed('replay_confirm', 'Confirm');
  readonly getCancelButtonText = this.appI18n.computed('replay_cancel', 'Cancel');

  readonly showBuyFeatureConfirm = signal(false);
  readonly showBuyChanceConfirm = signal(false);
  readonly showPlayDemoConfirm = signal(false);
  readonly showLoadingOverlay = signal(false);
  readonly buyFeatureCards = computed<ApBuyFeatureCard[]>(() => { return this.wallet.buyFeatureCards() });
  readonly buyChanceCards = computed<ApBuyFeatureCard[]>(() => { return this.wallet.buyChanceCards() });
  readonly confirmCard = signal<ApBuyFeatureCard | null>(null);
  readonly closeAll = output<void>();
  readonly playDemoDisabled = signal<boolean>(true);
  readonly showTrnHint = computed(() => { return this.trn.betDataTrn() !== null });
  readonly hintLabel = this.appI18n.computed('BuyFeature_TournamentTip', 'Costs Increased.');
  private historyReplayService = inject(HistoryReplayService);
  readonly isCampaignActive = computed(() => this.wallet.campaignSetting() !== null);
  // Replay viewer 相關
  readonly isPlayDemo = signal<boolean>(false);
  readonly selectedDemoIndex = signal<number>(0);
  readonly replayPopupLabel = this.appI18n.computed('replay_message_title', 'MESSAGE');
  readonly replayPopupHint = this.appI18n.computed('replay_demo_ticket_info', 'Feature Preview. For display purposes only. This will not impact your balance or  gameplay.');
  readonly demoGameName = signal<string>('');
  readonly showReplayViewer = computed(() => this.historyReplayService.showReplayViewer());
  constructor() { }

  ngOnInit(): void {
    // 關閉確認視窗
    this.showBuyFeatureConfirm.set(false);
    this.showLoadingOverlay.set(false); // 關閉讀取畫面
    this.playDemoDisabled.set(true);
  }

  ngAfterViewInit() {
    // 初始化Play Demo按鈕狀態

    // Card展示完成, 關掉Loading
    this.showLoadingOverlay.set(false);
  }

  openBuyFeatureConfirm(card: ApBuyFeatureCard) {
    this.confirmCard.set(card);
    this.showBuyFeatureConfirm.set(true);
  }

  openPlayDemoConfirm(card: ApBuyFeatureCard) {
    const index = FindModeIndex(card.mode ?? 'bf');
    this.selectedDemoIndex.set(index);
    this.isPlayDemo.set(true);
    this.gaCollector.trackButtonClick({ buttonName: TO_GA_ID.PlayWithBuyFeatureDemo });
  }

  closeBuyFeatureConfirm() {
    this.showBuyFeatureConfirm.set(false);
    this.confirmCard.set(null);
  }

  closePlayDemoConfirm() {
    this.showPlayDemoConfirm.set(false);
  }

  startBuyFeature() {
    // 開始Buy Feature
    this.wallet.updateSpinMode(this.confirmCard()?.mode ?? 'bf');
    this.bottom.spin();

    // 清除確認視窗
    this.showBuyFeatureConfirm.set(false);
    this.confirmCard.set(null);
    this.closeAll.emit();
  }

  openBuyChanceConfirm(card: ApBuyFeatureCard) {
    this.confirmCard.set(card);
    this.showBuyChanceConfirm.set(true);
    this.startBuyChance(card);
  }

  closeBuyChanceConfirm() {
    this.showBuyChanceConfirm.set(false);
    this.confirmCard.set(null);
    this.stopByChance();
  }

  startBuyChance(card: ApBuyFeatureCard) {
    // 切換成Buy Chance模式
    this.wallet.updateSpinMode(card.mode ?? 'dc');
    this.eventCenter.close(); // 關閉Event Center
  }

  stopByChance() {
    // 關閉Buy Chance模式
    this.wallet.updateSpinMode(null);
  }

  onChangeBet(betData: BetDataInterface) {
    this.wallet.updateBet(betData.bet ?? this.wallet.bet());
  }

  /**
   * 開啟 Play Demo 確認對話框
   */
  startPlayDemoInIframe() {
    this.isPlayDemo.set(true);
  }



  /**
   * 處理 Replay 確認請求 - 生成並載入 Demo URL
   */
  onDemoReplayConfirmRequest() {
    // 關閉確認對話框
    this.isPlayDemo.set(false);

    // 從 loginResult 取得 pid, brand, site
    const note = this.api.loginResult()?.note;
    const pid = note?.pid ?? '';
    const brand = note?.brand ?? '';
    const site = note?.site ?? '';

    const gameId = this.session.gameId ?? '';

    // 使用 AppI18nService 獲取遊戲名稱
    const gameName = this.appI18n.instant(gameId, gameId);
    this.demoGameName.set(gameName);

    // 取得 Buy Feature Demo 的 URL，使用選中的按鈕索引
    let demoUrl = this.GetBuyFeatureDemoAddress(
      this.selectedDemoIndex(),
      gameId,
      pid,
      brand,
      site
    );

    this.historyReplayService.openReplayViewer(demoUrl, this.session.isUseInGameUI);
  }

  /**
   * 取消 Replay
   */
  onDemoReplayCancel(): void {
    this.isPlayDemo.set(false);
    //this.closeAll.emit();
  }

  /**
   * 關閉 Replay
   */
  onDemoReplayClose(): void {
    this.isPlayDemo.set(false);
    this.historyReplayService.closeReplayViewer();
    this.closeAll.emit();
  }

  //* 根據遊戲ID和語言獲取對應的圖片URL，並檢查URL是否有效
  getGameImage(): string {
    const gameId = this.session.gameId ?? '10087';
    const language = this.session.language ?? 'en';
    const imageLanguage = language === 'cn' ? 'cn' : 'en';
    const baseUrl = this.session.assetUrl.replace(/\/+$/, '');
    return (
      this.appI18n.instant('game_image') ||
      `${baseUrl}/icon/${gameId}/112x112/icon_${gameId}_112x112_bkg_${imageLanguage}.jpg`
    );
  }

  /**
   * 检查指定索引的 Play Demo 是否可用
   * 需同时满足：1. 游戏支持 Replay 2. 文件存在
   * @param index Buy Feature 索引
   * @returns true 表示可用，false 表示不可用
   */
  checkPlayDemoAvailable(): boolean {
    // 1. 检查游戏是否支持 History Replay
    const gameId = this.session.gameId ?? '';
    if (!isHistoryReplaySupported(gameId)) {
      return false;
    }
    return true;
  }

  private readonly BUY_FEATURE_DEMO_KEY = 'buyfeaturedemo';
  /**
   * 產生 Buy Feature Demo 地址
   * 對應 GetBuyFeatureDemoAddress
   * @param buyFeatureIndex Buy Feature 索引
   * @param gameId 遊戲 ID
   * @param pid 平台 ID
   * @param brand 品牌
   * @param site 站點
   * @returns 完整的 Buy Feature Demo URL
   */
  GetBuyFeatureDemoAddress(
    buyFeatureIndex: number,
    gameId: string,
    pid: string,
    brand: string,
    site: string
  ): string {
    // 1. 準備 URL 參數：將 gameId 設定為目標遊戲
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('gameId', gameId);
    
    // 2. 添加 Buy Feature 相關參數
    urlParams.set('platform', pid);
    urlParams.set('brand', brand);
    urlParams.set('site', site);

    urlParams.set(this.BUY_FEATURE_DEMO_KEY, buyFeatureIndex.toString());
    
    // 3. 建立完整 URL：網域 + 遊戲路徑 + 查詢參數
    const queryString = urlParams.toString();
    let gamePath: string;
    if (this.session.remoteHost) {
      gamePath = this.session.remoteHost;
    } else {
      gamePath = `/${gameId}/index.html`;
    }
    const finalUrl = `${gamePath}?${queryString}`;
    
    return finalUrl;
  }
}
