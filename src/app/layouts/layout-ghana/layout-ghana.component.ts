import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { GameIframeComponent } from "../../pages/game-iframe/game-iframe.component";
import { BottomPanelGhanaComponent } from "../../pages/bottom-panel-ghana/bottom-panel-ghana.component";
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { HistoryListComponent } from '../../pages/history-list/history-list.component';
import { InfoComponent } from '../../pages/info/info.component';
import { BottomPanelPopupComponent } from "../../pages/bottom-panel-popup/bottom-panel-popup.component";
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApUiDeviceRotationComponent } from "../../components/ap-ui-device-rotation/ap-ui-device-rotation.component";
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { environment } from '../../../environments/app-environment';
import { RouterCtrlService } from '../../services/router-ctrl/router-ctrl.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';

@Component({
  selector: 'layout-ghana',
  imports: [ApLoadingOverlayComponent, GameIframeComponent, BottomPanelGhanaComponent, HistoryListComponent, InfoComponent, BottomPanelPopupComponent, ApUiDeviceRotationComponent],
  templateUrl: './layout-ghana.component.html',
  styleUrl: './layout-ghana.component.css'
})
export class LayoutGhanaComponent implements OnInit {
  api = inject(AppInterfaceService);
  game = inject(GameIframeCtrlService);
  session = inject(ClientSessionService);
  routerCtrl = inject(RouterCtrlService);
  wallet = inject(PlayerWalletService);
  showAll = signal(false);
  readonly showHistory = signal<boolean>(false);
  readonly showInfo = signal<boolean>(false);
  readonly showRotateTips = computed<boolean>(() => this.session.isMobile() && this.session.isLandscape());
  ngOnInit(): void {
    // 非使用Ghana UI的遊戲, 如果在prod環境用ghana開啟, 就導回首頁
    if (environment.production && !this.session.isGhanaUI) {
      this.routerCtrl.navigateRelative('');
      return;
    }

    this.api.setup(this.session.setting);
    this.api.connect();

    this.game.loadingFinished$.subscribe(this.onGameLoadingFinished.bind(this));

    // 偵測game準備好可以開始Spin的時候，傳送目前的下注資訊給遊戲
    this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
    // 偵測game更變下注的時候，更新PlayerWalletService裡的下注資訊
    this.game.betChanged$.subscribe(this.onChangeBet.bind(this));
  }

  private onGameLoadingFinished(): void {
    // 遊戲載入完成後，開啟整個 UI 介面
    this.showAll.set(true);
  }

  /** 偵測各種情況, 決定是否關閉目前UI */
  readonly hideAll = computed(() => {
    const inGamePopupOpen = this.game.popupMessageBox();
    return inGamePopupOpen;
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
}
