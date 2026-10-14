import { Injectable, signal, inject } from '@angular/core';
import { ClientSessionService } from '../client-session/client-session.service';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';


@Injectable({
  providedIn: 'root'
})
export class FaviconCtrlService {
  private readonly session = inject(ClientSessionService);
  constructor() {}

  public setByCustomKey(key: string | null) {
    // 有custom key 直接使用該 key 的 favicon
    if (key) {
      // ex: /system/Info/custom_theme/12bet/favicon.ico
      const url = `${this.session.assetUrlSignal()}/system/Info/custom_theme/${key}/favicon.ico?v=${this.session.systemVersion()}`;
      this.preloadFavicon(url);
    } // 確認是不是ap遊戲
    else if (this.session.isApGame) {
      const url = 'ap.ico';
      this.preloadFavicon(url);
    }
  }


  /** 先預加載 favicon 圖片, 有成功再設定 favicon */
  private preloadFavicon(url: string) {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      this.setFaviconUrl(url);
    };
    img.onerror = () => {
      // do nothing 
    };
  }

  /**
   * 設定網頁的 favicon 圖片連結
   * @param url favicon 圖片的 URL，若為 null 則改用透明 favicon 蓋掉原本的預設 icon
   */
  setFaviconUrl(url: string): void {
    // index.html 不預設 icon link（避免閃現預設 icon），確認 gameId 後才動態建立
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = url;
  }
}
