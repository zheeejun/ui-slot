import { Component, effect, inject, OnInit} from '@angular/core';
import { CommonModule} from '@angular/common';
import { environment } from '../../../environments/app-environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { GACollectorService } from '../../services/datacollector/gacollector.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { GlobalClickSoundDirective } from '../../shared/directives/global-click-sound/global-click-sound.directive';
import { RouterCtrlService } from '../../services/router-ctrl/router-ctrl.service';


/**
 * LayoutModeSelectComponent 依 session 狀態判斷要切換到哪種 UI 模式（bridge/cover/ghana）
 */
@Component({
  selector: 'layout-mode-select',
  imports: [CommonModule],
  hostDirectives: [GlobalClickSoundDirective],
  templateUrl: './layout-mode-select.component.html',
  styleUrl: './layout-mode-select.component.css',
})
export class LayoutModeSelectComponent implements OnInit {
  protected session = inject(ClientSessionService);
  protected i18n = inject(AppI18nService);
  protected router = inject(Router);
  protected route = inject(ActivatedRoute);
  protected routerCtrl = inject(RouterCtrlService);
  
  constructor(
  ) {
    // 當 commonStringList 載入後，用 gameId 更新頁面標題
    effect(() => {
      const gameId = this.session.gameId ?? '';
      const gameName = this.i18n.instant(gameId);
      if (gameName && gameName !== gameId) {
        document.title = gameName;
      }
    });
  }

  ngOnInit() {
    // 如果是正式環境，直接開啟選擇模式
    if (environment.production) {
      this.selectMode();
    }
    else {
      // Dev 環境會判斷是否要輸入token等登入資訊
      if (this.session.needLogin) {
        // 保留 query params（token, gameid, cloudhost...），讓 login 頁面可以自動帶入
        this.router.navigate(['login'], { queryParamsHandling: 'preserve' });
      }
      else {
        this.selectMode();
      }
    }
  }

  selectMode() {
    // 迦納模式的遊戲走這邊
    if (this.session.isGhanaUI) {
      this.runGhanaMode();
      return;
    }

    // 使用Web ui的Original Game
    if (this.session.isOgUI) {
      this.runOgMode();
      return;
    }

    // 純使用Socket的模式
    if (this.session.isSocketOnly) {
      this.runSocketMode();
      return;
    }

    // 使用html UI的遊戲走這邊
    if (this.session.isUseHtmlUI) {
      // 可以使用uimode決定要使用哪種UI模式
      if (this.session.uimode === 'in-game')
        this.runBridgeMode();
      else
        this.runCoverMode();
      return
    }

    // 其餘情況由uimode決定使用哪種UI模式
    if (this.session.uimode === 'html')
      this.runCoverMode();
    else
      this.runBridgeMode();
    return;
  }

  
  /** 迦納是UI覆蓋遊戲模式, 目前由Web連接Socket, Cocos遊戲端來發起登入 */
  runGhanaMode() {
    this.routerCtrl.navigateRelative('ghana');
  }

  /** 橋接模式使用Cocos遊戲端UI, 目前由Web連接Socket, Cocos遊戲端來發起登入  */
  runBridgeMode() {
    this.routerCtrl.navigateRelative('bridge');
  }

  /** UI覆蓋遊戲模式, 目前由Web連接Socket, Cocos遊戲端來發起登入 */
  runCoverMode() {
    this.routerCtrl.navigateRelative('cover');
  }

  /** OG模式, 目前由Web連接Socket, Cocos遊戲端來發起登入 */
  runOgMode() {
    this.routerCtrl.navigateRelative('og');
  }

  runSocketMode() {
    this.routerCtrl.navigateRelative('socket');
  }
}
