import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { GameIframeComponent } from "../game-iframe/game-iframe.component";
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { HistoryListComponent } from '../history-list/history-list.component';
import { InfoComponent } from '../info/info.component';
import { BottomPanelPopupComponent } from "../bottom-panel-popup/bottom-panel-popup.component";
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApUiDeviceRotationComponent } from "../../components/ap-ui-device-rotation/ap-ui-device-rotation.component";
import { OgPanelComponent } from '../og-panel/og-panel.component';

@Component({
  selector: 'game-chicken',
  imports: [ApLoadingOverlayComponent, GameIframeComponent, HistoryListComponent, InfoComponent, BottomPanelPopupComponent, OgPanelComponent, ApUiDeviceRotationComponent],
  templateUrl: './game-chicken.component.html',
  styleUrl: './game-chicken.component.css'
})
export class GameChickenComponent implements OnInit {
  game = inject(GameIframeCtrlService);
  session = inject(ClientSessionService);
  showAll = signal(false);
  readonly showHistory = signal<boolean>(false);
  readonly showInfo = signal<boolean>(false);
  readonly showRotateTips = computed<boolean>(() => this.session.isMobile() && this.session.isLandscape());
  ngOnInit(): void {
    this.game.loadingFinished$.subscribe(this.onGameLoadingFinished.bind(this));
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
}
