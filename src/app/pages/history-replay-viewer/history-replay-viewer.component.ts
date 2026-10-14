import { Component, signal, input, output, OnDestroy, AfterViewInit, ViewChild, ElementRef, inject, DestroyRef, computed, OnInit, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LoggerService } from '../../services/logger/logger.service';
import { ApHistoryPopupReplayEndComponent } from '../../components/ap-history-popup-replay-end/ap-history-popup-replay-end.component';
import { ApWebBase } from '../../../chiikawa/ApWeb/ApWebBase';
import { ApWebMessages, createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { BottomPanelDemoComponent } from '../bottom-panel-demo/bottom-panel-demo.component';
import { BottomPanelReplayComponent } from '../bottom-panel-replay/bottom-panel-replay.component';
import { ApUiReplayModeComponent } from '../../components/ap-ui-replay-mode/ap-ui-replay-mode.component';
import { ApUiGameNameComponent } from '../../components/ap-ui-game-name/ap-ui-game-name.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApWebMessageMap } from '../../../chiikawa/ApWeb/ApWebInterface';
import { HistoryReplayService } from '../../services/history-replay/history-replay.service';
import { ApUiLogoNameComponent } from "../../components/ap-ui-logo-name/ap-ui-logo-name.component";
import { SpinButtonMode } from '../../services/bottom-panel/spin-button.type';
import { IGameCustomData } from '../../../chiikawa/Tool/util/IGameCustomData';
@Component({
  selector: 'history-replay-viewer',
  imports: [CommonModule, ApHistoryPopupReplayEndComponent, BottomPanelDemoComponent, BottomPanelReplayComponent, ApUiReplayModeComponent, ApUiGameNameComponent, ApUiLogoNameComponent],
  templateUrl: './history-replay-viewer.component.html',
  styleUrl: './history-replay-viewer.component.css'
})
export class HistoryReplayViewerComponent implements OnDestroy, AfterViewInit, OnInit {
  
  private logger = inject(LoggerService);
  private gameIframeCtrl = inject(GameIframeCtrlService);
  private bottomPanel = inject(BottomPanelService);
  private readonly appI18n = inject(AppI18nService);
  private replay = inject(HistoryReplayService);
  private session = inject(ClientSessionService);
  private sanitizer = inject(DomSanitizer);

  // 儲存開始 Replay 前的音樂和音效音量
  private savedMusicVolume: number = 0;
  private savedSoundVolume: number = 0;

  // Inputs
  readonly showWatchAgain = input<boolean>(true);
  readonly showCopyLink = input<boolean>(true);
  readonly showCloseButton = input<boolean>(true);
  readonly showReplayEndCloseButton = input<boolean>(true);
  // Demo Mode 字串
  readonly getDemoModeLabel = this.appI18n.computed('replay_demo_mode', 'DEMO MODE');
  readonly getReplayModeLabel = this.appI18n.computed('replay_replay_mode', 'REPLAY MODE');
  // Game Logo
  readonly showGameLogo = input<boolean>(true);

  // AP Logo
  readonly showAPLogo = input<boolean>(false);
  // Outputs
  readonly watchAgain = output<void>();
  readonly copyLinkRequest = output<void>();
  readonly close = output<void>();
  // 判斷是否為舊遊戲（使用 in-game UI）- 在 replay 模式下由 loadReplayUrl 設置
  readonly isOldGame = computed(() => this.replay.isOldGame());
  // State signals
  readonly replayIframeUrl = signal<SafeResourceUrl>(this.sanitizer.bypassSecurityTrustResourceUrl('about:blank'));
  readonly isReplayEnd = signal<boolean>(false);
  /** Replay正在跑遊戲畫面 */
  readonly isReplayRunning = signal<boolean>(false);
  readonly isLoadingFinished = signal<boolean>(false);
  /** 給轉場要把Panel關掉用的 */
  readonly isShowPanel = signal<boolean>(true);
  readonly isReplayPanel = input<boolean>(false); // false = bottom-panel-demo, true = bottom-panel-replay
  readonly replayWin = signal<number | null>(null); // 儲存 replay 的 win 值
  readonly replayBet = signal<number | null>(null); // 儲存 replay 的 bet 值
  readonly replayCurrencySymbol = signal<string>(''); // 儲存 replay 的 currency symbol
  
  readonly isDemoMusicPressed = signal<boolean>(false);
  readonly isReplayMusicPressed = signal<boolean>(false);
  readonly isTurboDisabled = computed(() => this.isFeatureMode()); // 舊遊戲使用 in-game UI，無法控制遊戲速度，因此禁用 Turbo 功能
  readonly isFeatureMode = signal<boolean>(false); // 儲存 replay 的 feature mode 狀態
  readonly featureModeRemaining = signal<number>(0); // 儲存 replay 的 feature mode remaining
  readonly featureModeTotal = signal<number>(0); // 儲存 replay 的 feature mode total
  /** Auto Spin 按鈕的 lighting effect 是否啟用；由 replay 的 featureTransition popup 資料決定 */
  readonly autoSpinLightingEffectEnabled = signal<boolean>(true);
  readonly spinButtnMode = computed<SpinButtonMode>(() => this.isFeatureMode() ? 'feature-mode' : 'default');
  readonly customData = signal<IGameCustomData | null>(null);

  readonly gameId = computed(() => {
    if (this.isReplayPanel()) {
      return this.replay.gameId();
    }
    return this.session.gameId;
  });

  /**
   * 接收 bottom-panel-demo 的 isMusicPressed 事件
   */
  onDemoMusicPressedChange(isPressed: boolean): void {
    this.setMusicAndSoundEnabledToReplayIFrame(!isPressed, !isPressed);
  }

  /**
   * 接收 bottom-panel-replay 的 isMusicPressed 事件
   */
  onReplayMusicPressedChange(isPressed: boolean): void {
    this.setMusicAndSoundEnabledToReplayIFrame(!isPressed, !isPressed);
  }

  onDemoMusicIconClicked(): void {
    const nextPressed = !this.isDemoMusicPressed();
    this.isDemoMusicPressed.set(nextPressed);
    this.setMusicAndSoundEnabledToReplayIFrame(!nextPressed, !nextPressed);
  }

  onReplayMusicIconClicked(): void {
    const nextPressed = !this.isReplayMusicPressed();
    this.isReplayMusicPressed.set(nextPressed);
    this.setMusicAndSoundEnabledToReplayIFrame(!nextPressed, !nextPressed);
  }

  /**
   * 接收 bottom-panel-demo / bottom-panel-replay 的 turboStateChange 事件
   */
  onTurboStateChange(speed: number): void {
    this.setGameSpeed(speed as 0 | 1 | 2);
  }

  replayIframeElement = viewChild.required<ElementRef<HTMLIFrameElement>>('replayIframe');
  readonly replayEndComponent = viewChild<ApHistoryPopupReplayEndComponent>(ApHistoryPopupReplayEndComponent);
  readonly bottomPanelDemo = viewChild<BottomPanelDemoComponent>(BottomPanelDemoComponent);
  readonly bottomPanelReplay = viewChild<BottomPanelReplayComponent>(BottomPanelReplayComponent);
  protected replayIframeRef: HTMLIFrameElement | null = null;
  protected replayMessageListener: ((event: MessageEvent) => void) | null = null;

  ngOnInit(): void {
    this.setupReplayMessageListener();
  }

  ngAfterViewInit(): void {
    this.loadReplayUrl();
  }

  ngOnDestroy(): void {
    this.removeReplayMessageListener();
  }

  /**
   * 載入 Replay URL - 由父組件呼叫
   * @param replayUrl 完整的 replay URL
   * @param isOldGame 是否為舊遊戲（使用 in-game UI）
   */
  loadReplayUrl(): void {
    // 記錄目前的音樂和音效音量
    this.savedMusicVolume = this.gameIframeCtrl.musicVolume();
    this.savedSoundVolume = this.gameIframeCtrl.soundVolume();

    // 關閉音樂和音效
    this.bottomPanel.enableMusic(false);
    this.bottomPanel.enableSound(false);

    // 初始化 replayWin 和 replayBet 為 null
    this.replayWin.set(null);
    this.replayCurrencySymbol.set('');
    this.isShowPanel.set(true);
    this.isReplayRunning.set(false);
    this.isDemoMusicPressed.set(false);
    this.isReplayMusicPressed.set(false);
    this.isFeatureMode.set(false);
    this.featureModeRemaining.set(0);
    this.featureModeTotal.set(0);
    this.autoSpinLightingEffectEnabled.set(false);

    // 設定 iframe name
    const apWebBase = new ApWebBase();
    apWebBase.setMode(this.isOldGame() ? 'ap-replay-game-ui' : 'ap-replay');
    const iframeName = apWebBase.toString();

    this.replayIframeRef = this.replayIframeElement().nativeElement;
    if (this.replayIframeRef.contentWindow) {
      this.replayIframeRef.contentWindow.name = iframeName;
    }
    const url = this.replay.replayUrl();
    if (url) this.replayIframeUrl.set(url);
  }

  /**
   * Replay iframe 載入完成
   */
  onReplayIframeLoad(): void {

  }

  /**
   * 顯示 Replay 結束畫面
   */
  showReplayEnd(): void {
    this.isReplayEnd.set(true);
  }

  /**
   * 重新觀看
   */
  onWatchAgain(): void {
    this.isReplayEnd.set(false);
    this.bottomPanelDemo()?.resetReplayStart();
    this.bottomPanelReplay()?.resetReplayStart();
    this.watchAgain.emit();
  }

  /**
   * 複製連結 - 發出事件讓父組件處理
   */
  onCopyLink(): void {
    this.copyLinkRequest.emit();
  }

  /**
   * 顯示複製連結成功 Toast
   */
  showCopyLinkToast(): void {
    this.replayEndComponent()?.copyLinkToast()?.show();
  }

  /**
   * 關閉 Replay
   */
  closeReplayIframe(): void {
    this.isReplayEnd.set(false);
    this.isShowPanel.set(true);
    this.isReplayRunning.set(false);
    this.isLoadingFinished.set(false);

    // 重置 replayWin 和 replayBet
    this.replayWin.set(null);
    this.isDemoMusicPressed.set(false);
    this.isReplayMusicPressed.set(false);
    this.isFeatureMode.set(false);
    this.featureModeRemaining.set(0);
    this.featureModeTotal.set(0);
    this.autoSpinLightingEffectEnabled.set(false);

    // 恢復原本的音樂和音效設定
    const restoreMusicEnabled = this.savedMusicVolume > 0;
    const restoreSoundEnabled = this.savedSoundVolume > 0;
    this.bottomPanel.enableMusic(restoreMusicEnabled);
    this.bottomPanel.enableSound(restoreSoundEnabled);

    this.close.emit();
  }

  /**
   * 設置 message 監聽器
   */
  private isLocalOrigin(): boolean {
    const origin = window.location.origin;
    return origin.includes('localhost') || origin.includes('192.168');
  }

  private setupReplayMessageListener(): void {
    this.replayMessageListener = (event: MessageEvent) => {
      if (!this.isLocalOrigin() && event.origin !== window.location.origin) {
        return;
      }
      this.logger.iframeReplayLog('iframe➡️:', event.data);
      const message = event.data;
      
      switch (message.type as keyof ApWebMessageMap) {
        case 'ReadyForSessionData': {
          // 當 iframe 準備好接收 Session Data 時，如果 session 中有遠端主機地址，則從 replay service 中取出之前暫存的 Session Data 並發送給 iframe
          if (this.session.remoteHost) {
            const payload = this.replay.consumePendingPostSessionData();
            if (payload && this.replayIframeRef?.contentWindow) {
              const sessionMessage = createApWebMessage('SessionData', payload);
              this.sendMessage(sessionMessage);
            }
          }
          break;
        }
        case 'ReadyForSpin':
          this.showReplayEnd();
          this.isReplayRunning.set(false);
          break;
        
        case 'LoadingFinished':
          this.isLoadingFinished.set(true);
          break;
        
        case 'WinMoneyUpdated':
          const winValue = message.content.win ?? 0;
          this.replayWin.set(winValue);
          break;
        
        case 'HistoryBetValueForShow':
          const betValue = message.content.bet ?? 0;
          const currencySymbol = message.content.currencySymbol ?? '';
          this.replayBet.set(betValue);
          this.replayCurrencySymbol.set(currencySymbol);
          break;
        
        case 'FeatureModeUpdated':
          if (message.content.remaining !== undefined) {
            this.featureModeRemaining.set(message.content.remaining);
          }

          //如果 total 有值, 就直接更新. 因為有可能是第一次進入 free game 就送 total 進來了.
          if (message.content.total !== undefined) {
            this.featureModeTotal.set(message.content.total);
          }

          // feature mode 更新表示可以關掉feature start提示了
          this.bottomPanelDemo()?.turnOffFeatureStart();
          this.bottomPanelReplay()?.turnOffFeatureStart();

          break;
        
        case 'FeatureModeEnabled':
          this.isFeatureMode.set(message.content.enabled);
          break;
        
        case 'InGamePopupOpened':
          this.isShowPanel.set(false);
          break;

        case 'InGamePopupClosed':
          this.isShowPanel.set(true);
          if (message.content.category === "featureTransition") {
            this.bottomPanelDemo()?.turnOnFeatureStart();
            this.bottomPanelReplay()?.turnOnFeatureStart();
            if( message.content.enableLightingEffect != undefined)
            {
              this.autoSpinLightingEffectEnabled.set(message.content.enableLightingEffect ?? false);
            }
          }
          break;
        case 'GameCustomSetting':
          this.customData.set(message.content.customData ?? null);
          break;
      }
    };

    window.addEventListener('message', this.replayMessageListener, false);
  }

  /**
   * 移除監聽器
   */
  private removeReplayMessageListener(): void {
    if (this.replayMessageListener) {
      window.removeEventListener('message', this.replayMessageListener);
      this.replayMessageListener = null;
    }
  }

  sendMessage(message: ApWebMessages): void {
    if (this.replayIframeRef?.contentWindow) {
      this.logger.iframeReplayLog('➡️iframe:', message);
      const targetOrigin = this.isLocalOrigin() ? '*' : window.location.origin;
      this.replayIframeRef.contentWindow.postMessage(message, targetOrigin);
    }
  }

  /**
   * 設置音樂和音效的啟用狀態
   */
  setMusicAndSoundEnabledToReplayIFrame(musicEnabled: boolean, soundEnabled: boolean): void {
    const musicMessage = createApWebMessage('SetMusic', { enabled: musicEnabled });
    const soundMessage = createApWebMessage('SetSound', { enabled: soundEnabled });
    this.sendMessage(musicMessage);
    this.sendMessage(soundMessage);
  }

  
  /** 設定遊戲速度 0: 慢速, 1: 正常, 2: 快速 */
  setGameSpeed(speed: 0 | 1 | 2) {
    const spintypemsg = createApWebMessage('SetSpinType', { speed: speed });
    this.sendMessage(spintypemsg);
  }

  /** Spin 遊戲 */
  spin() {
    // 如果正在運行 就是只送出immediately stop
    if (this.isReplayRunning()) {
      const message = createApWebMessage('ImmediatelyStop');
      this.sendMessage(message);
      return;
    }

    const message = createApWebMessage('ClickSpin', {useInGameResult: true});
    this.sendMessage(message);
    this.isReplayRunning.set(true);
  }
}
