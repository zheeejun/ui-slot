import { AfterViewInit, Component, computed, effect, ElementRef, inject, OnDestroy, OnInit, signal, untracked } from '@angular/core';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { EventCenterComponent } from '../../pages/event-center/event-center.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { TrnAllComponent } from '../../pages/trn-all/trn-all.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { ApHistoryReplayTopBarComponent } from '../../components/ap-history-replay-top-bar/ap-history-replay-top-bar.component';
import { GameIframeComponent } from "../../pages/game-iframe/game-iframe.component";
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { ApUiLogoNameComponent } from '../../components/ap-ui-logo-name/ap-ui-logo-name.component';
import { ApUiGameNameComponent } from '../../components/ap-ui-game-name/ap-ui-game-name.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { environment } from '../../../environments/app-environment';
import { RouterCtrlService } from '../../services/router-ctrl/router-ctrl.service';
import { NavigatorShareService } from '../../services/navigator-share/navigator-share.service';
import { GACollectorService } from '../../services/datacollector/gacollector.service';
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';
import { FaviconCtrlService } from '../../services/favicon-ctrl/favicon-ctrl.service';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { ApRemainingTurnoverComponent } from '../../components/ap-remaining-turnover/ap-remaining-turnover.component';
import { GameDisplayData, SpinModeType } from '../../../chiikawa/ApWeb/ApWebInterface';
import { CampaignPopupComponent } from '../../pages/campaign-popup/campaign-popup.component';
import { InfoComponent } from '../../pages/info/info.component';


/**
 * 遊戲橋接模式(bridge)的組件，請注意跟覆蓋模式(cover)不同的行為要寫在這邊, 方便跟覆蓋模式方開維護
 * 如果兩者行為通用的話，可以寫在組件裡面。
 */
@Component({
  selector: 'layout-bridge',
  imports: [EventCenterComponent, TrnAllComponent, ApHistoryReplayTopBarComponent, GameIframeComponent, ApLoadingOverlayComponent, ApUiLogoNameComponent, ApUiGameNameComponent, ApRemainingTurnoverComponent, CampaignPopupComponent, InfoComponent],
  templateUrl: './layout-bridge.component.html',
  styleUrl: './layout-bridge.component.css',
})
export class LayoutBridgeComponent implements OnInit, AfterViewInit, OnDestroy {
  protected i18n = inject(AppI18nService);
  protected session = inject(ClientSessionService);
  private favicon = inject(FaviconCtrlService);
  protected game = inject(GameIframeCtrlService);
  protected wallet = inject(PlayerWalletService);
  protected api = inject(AppInterfaceService);
  protected trn = inject(TrnCtrlService);
  protected campaign = inject(CampaignFacadeService);
  protected eventCenter = inject(EventCenterCtrlService);
  protected routerCtrl = inject(RouterCtrlService);
  protected navigator = inject(NavigatorShareService);
  protected gaCollector = inject(GACollectorService);
  protected symbolTexture = inject(BaseSymbolTextureService);
  /** 顯示所有介面, 給Loading Finished使用的 */
  showAll = signal(false);
  /** 隱藏所有遊戲iframe之外的物件, 是用hidden, 不是用@if */
  hideAll = signal(false);
  /** 顯示活動中心 */
  showEventCenter = computed(() => this.eventCenter.isVisible());
  /** 顯示Tournament浮動介面 */
  showTournament = computed<boolean>(() => { return this.trn.enabled() });
  /** 顯示AP Logo */
  readonly showAPLogo = signal<boolean>(false);
  /** 顯示Game Logo */
  readonly showGameLogo = signal<boolean>(true);
  /** 顯示歷史回放頂部欄 */
  showHistoryReplayTopBar = signal(false);
  /** 顯示Info頁面, 由遊戲傳送OpenInfo開啟 */
  readonly showInfo = signal<boolean>(false);
  /** 版面高度，透過 ResizeObserver 偵測 host 元素高度變化 */
  private readonly elRef = inject(ElementRef<HTMLElement>);
  protected readonly layoutHeight = signal(0);
  protected readonly layoutWidth = signal(0);
  private resizeObserver: ResizeObserver | null = null;
  /** Remaining Turnover 寬度，依 9:16 遊戲比例換算，且不超過版面寬度（不超出遊戲範圍） */
  protected readonly gameWidth = computed(() => Math.min(this.layoutWidth(), this.layoutHeight() * 9 / 16));
  /** 遊戲畫面（9:16 置中）下緣距離版面底部的距離，讓 Remaining Turnover 貼在遊戲最下方而非螢幕最下方 */
  protected readonly gameBottom = computed(() => Math.max(0, (this.layoutHeight() - this.gameWidth() * 16 / 9) / 2));
  readonly showLatestCampaign = computed<boolean>(() => this.session.isLatestCampaign);
  /** 顯示showRemainingTurnoverPanel */
  protected readonly showRemainingTurnoverPanel = computed(() => this.campaign.isFreeBonusRunning());
  protected readonly remainingTurnover = computed(() => this.campaign.currentCampaign()?.progressRemaining || 0);
  protected readonly remainingEndTime = computed(() => this.campaign.currentCampaign()?.endTime || 0);
  constructor() {
    // 設定分頁標題, 會在字串讀取完成後, 也就是i18n.enGameName()有值後設定
    effect(() => {
      const title = this.i18n.enGameName();
      untracked(() => { this.navigator.setPageTitle(title); });
    });

    // 監聽遊戲自訂資料變更, 以取得 customGameKey
    effect(() => {
      const customGameKey = this.game.customGameKey();
      untracked(() => {
        if (customGameKey) {
          this.symbolTexture.assignCustomGameKey(customGameKey);
          this.i18n.assignCustomGameKey(customGameKey);
        }
      });
    });

      // 監聽遊戲自訂設定變更，以更新 favicon
    this.game.customSetting$.subscribe((message) => {
      this.favicon.setByCustomKey(message.customData?.customGamekey ?? null);
    });
    
    // 在cover模式下, 偵測wallet的betData變更, 傳送給遊戲
    effect(() => {
      const data = this.wallet.betData(); // 這是我們真正想追蹤的   
      // 使用 untracked 包住後續動作
      untracked(() => { 
        this.game.send(createApWebMessage('UpdateBetData', data));
      });
    });

    // 更新display data
    effect(() => {
      this.wallet.campaignId(); // 依賴campaignId的變化
      untracked(() => { this.updateDisplayData(); });
    });
    this.game.readyForSpin$.subscribe(() => { this.updateDisplayData(); });

    // 監聽遊戲選擇的活動變更
    this.game.selectCampaign$.subscribe(this.onGameSelectCampaign.bind(this));
  }

  ngOnInit() {
    // 使用html UI的遊戲, 如果在prod環境用bridge開啟, 就導回首頁
    if (environment.production && !this.session.isUseInGameUI) {
      this.routerCtrl.navigateRelative('');
      return;
    }

    // 初始化 Google Analytics
    this.gaCollector.loadGtagScript();

    this.api.setup(this.session.setting);
    this.api.connect();

    // 偵測遊戲iframe的操作
    this.game.buyFeature$.subscribe(this.onGameBuyFeature.bind(this));
    this.game.OpenPromo$.subscribe(this.onGameOpenPromo.bind(this));
    this.game.loadingFinished$.subscribe(this.onGameLoadingFinished.bind(this));
    this.game.GameMessageBox$.subscribe(this.onGameMessageBox.bind(this));
    this.game.openInfo$.subscribe(this.onGameOpenInfo.bind(this));

    // 偵測game準備好可以開始Spin的時候，傳送目前的下注資訊給遊戲
    this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
    // 偵測game更變下注的時候，更新PlayerWalletService裡的下注資訊
    this.game.betChanged$.subscribe(this.onChangeBet.bind(this));
    // 偵測遊戲更變下注模式
    this.game.betModeChanged$.subscribe(this.onBetModeChanged.bind(this));
  }

  ngAfterViewInit() {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.layoutHeight.set(entry.contentRect.height);
        this.layoutWidth.set(entry.contentRect.width);
      }
    });
    this.resizeObserver.observe(this.elRef.nativeElement);
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  /** 偵測遊戲讀取完成的時候 */
  protected onGameLoadingFinished() {
    // 遊戲讀取完成進入遊戲後，顯示所有的UI元件
    this.showAll.set(true);
  }

  /** 遊戲點擊Open Promo */
  protected onGameOpenPromo() {
    this.eventCenter.open('campaign');
  }

  /** 遊戲點擊buy Feature */
  protected onGameBuyFeature() {
    this.eventCenter.open('buy-feature');
  }

  /** 遊戲點擊Open Info */
  protected onGameOpenInfo() {
    this.showInfo.set(true);
  }

  /** 遊戲顯示訊息框 */
  protected onGameMessageBox() {
    this.eventCenter.close();
  }

  /** 偵測遊戲準備好可以開始Spin的時候 */
  protected onReadyForSpin() {
    // 每次準備好Spin的時候，如果目前是Buy Feature模式，關閉Buy Feature模式
    if (this.wallet.isBuyFeature()) {
      this.wallet.updateSpinMode(null);
    }
    this.wallet.updateGameDuration();
  }

  /** 遊戲更變下注 */
  protected onChangeBet(content: {bet: number, betIndex: number}) {
    this.wallet.updateBet(content.bet);
  }

  /**
   * 更新遊戲顯示的資料，包括玩家餘額和免費旋轉次數
   */
  updateDisplayData() {
    const displayData: GameDisplayData = {
      balance: this.wallet.balance(),
    }
    // 如果目前是free spin模式，加入free spin相關資料
    if (this.campaign.currentCampaign()?.type === 'freeSpins') {
        displayData.freeSpinCount = {
          total: this.campaign.currentCampaign()?.progressTotal || 0,
          remain: this.campaign.currentCampaign()?.progressRemaining || 0
        }
    }
    this.game.send(createApWebMessage('UpdateDisplayData', { displayData: displayData }));
  }

  /** 遊戲端選擇活動 */
  onGameSelectCampaign(content: {campaignId: string | null}) {
    this.campaign.setCurrentId(content.campaignId);
  }

  /** 偵測遊戲更變下注模式 */
  protected onBetModeChanged(content: {modeName: SpinModeType}) {
    this.wallet.updateSpinMode(content.modeName);
  }
}
