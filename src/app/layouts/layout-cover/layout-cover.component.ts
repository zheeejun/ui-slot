import { Component, computed, DestroyRef, effect, ElementRef, inject, OnDestroy, signal, untracked} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { EventCenterComponent } from '../../pages/event-center/event-center.component';
import { HistoryListComponent } from '../../pages/history-list/history-list.component';
import { TrnAllComponent } from '../../pages/trn-all/trn-all.component';
import { InfoComponent } from '../../pages/info/info.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { GameIframeComponent } from '../../pages/game-iframe/game-iframe.component';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { BottomPanelComponent } from '../../pages/bottom-panel/bottom-panel.component';
import { ApUiLogoNameComponent } from '../../components/ap-ui-logo-name/ap-ui-logo-name.component';
import { ApUiGameNameComponent } from '../../components/ap-ui-game-name/ap-ui-game-name.component';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { CashDropService } from '../../services/cash-drop/cash-drop.service';
import { CampaignPopupLegacyComponent } from '../../pages/campaign-popup-legacy/campaign-popup-legacy.component';
import { BottomPanelPopupComponent } from '../../pages/bottom-panel-popup/bottom-panel-popup.component';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { EventCashdropToastComponent } from '../../pages/event-cashdrop-toast/event-cashdrop-toast.component';
import { ApUiDeviceRotationComponent } from '../../components/ap-ui-device-rotation/ap-ui-device-rotation.component';
import { GamePopupCategory, InGamePopupOpened, SpinModeType } from '../../../chiikawa/ApWeb/ApWebInterface';
import { HistoryReplayService } from '../../services/history-replay/history-replay.service';
import { ApUiVersionComponent } from '../../components/ap-ui-version/ap-ui-version.component';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { environment } from '../../../environments/app-environment';
import { RouterCtrlService } from '../../services/router-ctrl/router-ctrl.service';
import { NavigatorShareService } from '../../services/navigator-share/navigator-share.service';
import { GACollectorService } from '../../services/datacollector/gacollector.service';
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';
import { FaviconCtrlService } from '../../services/favicon-ctrl/favicon-ctrl.service';
import { CampaignPopupComponent } from '../../pages/campaign-popup/campaign-popup.component';

@Component({
  selector: 'layout-cover',
  imports: [
    CommonModule, EventCenterComponent, HistoryListComponent, InfoComponent, GameIframeComponent,
    ApLoadingOverlayComponent, TrnAllComponent, BottomPanelComponent, ApUiLogoNameComponent, ApUiGameNameComponent,
    CampaignPopupLegacyComponent, BottomPanelPopupComponent, EventCashdropToastComponent, ApUiDeviceRotationComponent,
    ApUiVersionComponent, CampaignPopupComponent
],
  templateUrl: './layout-cover.component.html',
  styleUrl: './layout-cover.component.css',
  host: {
    '(contextmenu)': '$event.preventDefault()', // 禁止右鍵選單
  },
})
export class LayoutCoverComponent implements OnDestroy {
  // inject在slot模式下會用到的services, 
  protected i18n = inject(AppI18nService);
  protected session = inject(ClientSessionService);
  protected favicon = inject(FaviconCtrlService);
  protected game = inject(GameIframeCtrlService);
  protected wallet = inject(PlayerWalletService);
  protected api = inject(AppInterfaceService);
  protected trn = inject(TrnCtrlService);
  protected campaign = inject(CampaignFacadeService);
  protected cashDrop = inject(CashDropService);
  protected eventCenter = inject(EventCenterCtrlService);
  protected bottomPanel = inject(BottomPanelService);
  protected replay = inject(HistoryReplayService);
  protected routerCtrl = inject(RouterCtrlService);
  protected navigator = inject(NavigatorShareService);
  protected gaCollector = inject(GACollectorService);
  protected elementRef = inject(ElementRef<HTMLElement>);
  protected symbolTexture = inject(BaseSymbolTextureService);
  protected destroyRef = inject(DestroyRef);
  /** 讀取結束, 開啟整個UI介面 */
  readonly showAll = signal<boolean>(false);
  readonly showEventCenter = computed<boolean>(() => this.eventCenter.isVisible() && !this.game.popupMessageBox(),);
  readonly showHistory = signal<boolean>(false);
  readonly showInfo = signal<boolean>(false);
  readonly showAPLogo = signal<boolean>(false);
  readonly showGameLogo = signal<boolean>(false);
  readonly showVersion = signal<boolean>(true);
  readonly showTrn = computed<boolean>(() => this.trn.enabled());
  readonly showCampaignPopup = computed<boolean>(() =>this.campaign.popupEnabled());
  readonly showCashDropFailToast = computed<boolean>(() =>this.cashDrop.isShowFailToast());
  readonly showCashDropPassToast = computed<boolean>(() =>this.cashDrop.isShowPassToast());
  /** 顯示旋轉提示: 轉成直向模式 */
  readonly showRotateTips = computed<boolean>(() => this.session.isMobile() && this.session.isLandscape());
  readonly showLatestCampaign = computed<boolean>(() => this.session.isLatestCampaign);
  /** 會關掉AutoSpin的popup */
  readonly popupTypesThatCloseAutoSpin: GamePopupCategory[] = [
    'rewardSystemMain',
    'cashDropMain',
    'cashDropDialog',
    'cashDropPickup',
  ];
  readonly customData = computed(() => this.game.customData());
  constructor() {
    // 設定分頁標題, 會在字串讀取完成後, 也就是i18n.enGameName()有值後設定
    effect(() => {
      const title = this.i18n.enGameName();
      untracked(() => { this.navigator.setPageTitle(title); });
    });

    // 在cover模式下, 偵測wallet的betData變更, 傳送給遊戲
    effect(() => {
      const data = this.wallet.betData(); // 這是我們真正想追蹤的   
      // 使用 untracked 包住後續動作
      untracked(() => { 
        this.game.send(createApWebMessage('UpdateBetData', data));
      });
    });

    // 監聽遊戲內訊息, 例如彈窗開啟等, 以決定是否要關閉目前的UI
    effect(() => {
      if (this.game.popupMessageBox()) {
        this.showHistory.set(false);
        this.showInfo.set(false);
      }
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

    // 監聽遊戲開始旋轉的事件, 以關閉目前的UI
    this.game.startSpinning$.subscribe(() => {
      this.eventCenter.close();
      this.showHistory.set(false);
      this.showInfo.set(false);
    });
  }

  ngOnInit() {
    // 使用in-game UI的遊戲, 如果在prod環境用cover開啟, 就導回首頁
    if (environment.production && !this.session.isUseHtmlUI) {
      this.routerCtrl.navigateRelative('');
      return;
    }

    // 初始化 Google Analytics
    this.gaCollector.loadGtagScript();

    this.api.setup(this.session.setting);
    this.api.connect();

    this.game.loadingFinished$.subscribe(this.onGameLoadingFinished.bind(this));
    // 部分遊戲彈窗會暫停自動旋轉功能
    this.game.InGamePopupOpened$.subscribe((popup: InGamePopupOpened) => {
      if (this.popupTypesThatCloseAutoSpin.includes(popup.category)) {
        this.bottomPanel.stopAutoSpin();
      }
    });
    // 偵測game準備好可以開始Spin的時候，傳送目前的下注資訊給遊戲
    this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
    // 偵測game更變下注的時候，更新PlayerWalletService裡的下注資訊
    this.game.betChanged$.subscribe(this.onChangeBet.bind(this));
    this.game.betModeChanged$.subscribe(this.onBetModeChanged.bind(this));

    this.navigator.preventPinchZoom(this.elementRef.nativeElement, this.destroyRef);
  }

  ngAfterViewInit() { }

  ngOnDestroy() { }

  protected onGameLoadingFinished() {
    this.showAll.set(true);
    this.showGameLogo.set(true);

    // Loading結束進入遊戲時，開始把buyFeature, buyChance使用到的圖片preload
    this.wallet.buyFeatureModes().concat(this.wallet.buyChanceModes()).forEach(mode => {
      const imageUrl = this.symbolTexture.getBuyFeatureTextureUrl(mode.name);
      if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
      }
    });
  }

  /** 偵測各種情況, 決定是否關閉目前UI */
  readonly hideAll = computed(() => {
    // 以下幾種情況會關閉UI: "rewardSystemMain", "rewarSystemLevelUp", "cashDropMain", "cashDropDialog", "cashDropPickup"
    const inGamePopupOpen =
      this.game.popupRewardSystemMain() ||
      this.game.popupRewardSystemLevelUp() ||
      this.game.popupCashDropMain() ||
      this.game.popupCashDropDialog() ||
      this.game.popupCashDropPickup() ||
      this.game.popupFeatureTransition() ||
      this.game.popupBigWinTransition() ||
      this.game.popupMessageBox() ||
      this.game.popupOther() ||
      this.game.popupInGameSelection();
    return inGamePopupOpen;
  });

  readonly hidePanel = computed(() => {
    // replay viewer也會讓底下的panel重新顯示 解決老iOS icon出問題的情況
    return this.hideAll() || this.replay.showReplayViewer();
  });

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

  /** 偵測遊戲更變下注模式 */
  protected onBetModeChanged(content: {modeName: SpinModeType}) {
    this.wallet.updateSpinMode(content.modeName);
  }
}
