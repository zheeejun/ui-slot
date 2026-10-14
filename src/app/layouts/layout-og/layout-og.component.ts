import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, effect, ElementRef, inject, signal, untracked } from '@angular/core';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { OgLayoutType } from './layout-og.interface';
import { OgHeaderComponent } from "../../pages/og-header/og-header.component";
import { environment } from '../../../environments/app-environment';
import { RouterCtrlService } from '../../services/router-ctrl/router-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';
import { NavigatorShareService } from '../../services/navigator-share/navigator-share.service';
import { ApUiToastQueueComponent } from '../../components/ap-ui-toast-queue/ap-ui-toast-queue.component';
import { ToastQueueMessage } from '../../components/ap-ui-toast-queue/ap-ui-toast-queue.interface';
import { OgBetLevelEntry } from '../../services/og-wallet/og-wallet.interface';
import { OgPanelComponent } from "../../pages/og-panel/og-panel.component";
import { OgPanelPopupComponent } from '../../pages/og-panel-popup/og-panel-popup.component';
import { GameIframeComponent } from "../../pages/game-iframe/game-iframe.component";
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { OgChickenGameState } from '../../pages/og-panel/og-panel.interface';
import { ApUiDeviceRotationComponent } from "../../components/ap-ui-device-rotation/ap-ui-device-rotation.component";
import { ApUiVersionComponent } from "../../components/ap-ui-version/ap-ui-version.component";
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';
import { FaviconCtrlService } from '../../services/favicon-ctrl/favicon-ctrl.service';

const LANDSCAPE_RATIO = 4 / 3;
const PORTRAIT_RATIO = 9 / 16;

@Component({
  selector: 'layout-og',
  imports: [CommonModule, OgHeaderComponent, ApUiToastQueueComponent, OgPanelComponent, GameIframeComponent, ApUiDeviceRotationComponent, ApUiVersionComponent],
  templateUrl: './layout-og.component.html',
  styleUrl: './layout-og.component.css',
  host: {
    '(contextmenu)': '$event.preventDefault()', // 禁止右鍵選單
  },
})
export class LayoutOgComponent {
  /** OG Layout 需要的service列表 */
  private readonly favicon = inject(FaviconCtrlService);
  private readonly wallet = inject(OgWalletService);
  private readonly i18n = inject(AppI18nService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly session = inject(ClientSessionService);
  private readonly routerCtrl = inject(RouterCtrlService);
  private readonly navigator = inject(NavigatorShareService);
  private readonly api = inject(AppInterfaceService);
  private readonly appI18n = inject(AppI18nService);
  private readonly game = inject(GameIframeCtrlService);
  private readonly symbolTexture = inject(BaseSymbolTextureService);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  
    /** 顯示旋轉提示: 轉成直向模式 */
  readonly showRotateTips = computed<boolean>(() => this.session.isMobile() && this.session.isLandscape());
  private nextMessageId = 0;
  isLoading = signal<boolean>(true);
  layoutType = signal<OgLayoutType>(this.resolveLayoutType());
  isShowPanel = computed(() => {
    return !this.isLoading() && !this.game.popupMessageBox();
  });
  readonly autoMessages = signal<ToastQueueMessage[]>([]);
  readonly gameState = signal<OgChickenGameState>('ready');
  readonly isAutoRunning = signal<boolean>(false);
  /** auto 模式下，即使 gameState 回到 ready，回合間仍視為進行中，公平性驗證與歷史紀錄需維持停用 */
  readonly isFairnessDisabled = computed<boolean>(() => this.gameState() === 'playing' || this.isAutoRunning());
  readonly isHistoryDisabled = computed<boolean>(() => this.gameState() === 'playing' || this.isAutoRunning());
  /** 下注階層 */
  readonly betLevel = computed<OgBetLevelEntry[]>(() => this.wallet.betLevel());
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

    const updateLayoutType = () => this.layoutType.set(this.resolveLayoutType());
    window.addEventListener('resize', updateLayoutType);
    this.destroyRef.onDestroy(() => window.removeEventListener('resize', updateLayoutType));
  }

  ngOnInit() {
    // 阻止手勢縮放
    this.navigator.preventPinchZoom(this.elementRef.nativeElement, this.destroyRef);

    // 阻擋非OG UI的使用者進入OG模式
    if (environment.production && !this.session.isOgUI) {
      this.routerCtrl.navigateRelative('');
      return;
    }

    this.game.loadingFinished$.subscribe(() => this.onLoadingComplete());

    this.api.setup(this.session.setting);
    this.api.connect();
  }
  // 當遊戲狀態改變時, 會觸發此事件, 讓選公平性驗證按鈕可以隨著遊戲狀態改變而啟用或停用
  onGameStateChange(value: OgChickenGameState): void {
    this.gameState.set(value);
  }

  onAutoRunningChange(value: boolean): void {
    this.isAutoRunning.set(value);
    const text = value
      ? (this.appI18n.instant('og_autobet_autoStartTip') ?? 'Autobet started')
      : (this.appI18n.instant('og_autobet_autoEndTip') ?? 'Autobet finished');
    const message: ToastQueueMessage = {
      id: this.nextMessageId++,
      text,
    };
    this.autoMessages.update((messages) => [message, ...messages]);
  }

  dismissAutoMessage(id: number): void {
    this.autoMessages.update((messages) =>
      messages.filter((message) => message.id !== id),
    );
  }

  private resolveLayoutType(): OgLayoutType {
    const ratio = window.innerWidth / window.innerHeight;
    // 非行動裝置且寬高比大於 LANDSCAPE_RATIO，則為橫向
    if (ratio > LANDSCAPE_RATIO) {
      return 'landscape';
    }
    if (ratio < PORTRAIT_RATIO) {
      return 'portrait';
    }
    return 'square';
  }

  onLoadingComplete(): void {
    this.isLoading.set(false);
  }

  panelVariant = computed<'desktop' | 'mobile'>(() => {
    if (this.layoutType() === 'portrait' || this.layoutType() === 'square') {
      return 'mobile';
    }
    return 'desktop';
  });
}
