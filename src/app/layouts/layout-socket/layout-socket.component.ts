import { Component, effect, inject, untracked } from '@angular/core';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { GameIframeComponent } from '../../pages/game-iframe/game-iframe.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { NavigatorShareService } from '../../services/navigator-share/navigator-share.service';
import { RouterCtrlService } from '../../services/router-ctrl/router-ctrl.service';
import { environment } from '../../../environments/app-environment.prod';

@Component({
  selector: 'layout-socket',
  imports: [ApLoadingOverlayComponent, GameIframeComponent],
  templateUrl: './layout-socket.component.html',
  styleUrl: './layout-socket.component.css'
})
export class LayoutSocketComponent {
  private i18n = inject(AppI18nService);
  private session = inject(ClientSessionService);
  private api = inject(AppInterfaceService);
  private routerCtrl = inject(RouterCtrlService);
  private navigator = inject(NavigatorShareService);
  constructor() {
    // 設定分頁標題, 會在字串讀取完成後, 也就是i18n.enGameName()有值後設定
    effect(() => {
      const title = this.i18n.enGameName();
      untracked(() => { this.navigator.setPageTitle(title); });
    });
  }

  ngOnInit() {
    // 使用html UI的遊戲, 如果在prod環境用bridge開啟, 就導回首頁
    if (environment.production && !this.session.isSocketOnly) {
      this.routerCtrl.navigateRelative('');
      return;
    }

    this.api.setup(this.session.setting);
    this.api.connect();
  }
}
