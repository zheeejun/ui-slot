import {
  ClientSessionService
} from "./chunk-B2M5HODU.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/app/services/favicon-ctrl/favicon-ctrl.service.ts
var FaviconCtrlService = class _FaviconCtrlService {
  session = inject(ClientSessionService);
  constructor() {
  }
  setByCustomKey(key) {
    if (key) {
      const url = `${this.session.assetUrlSignal()}/system/Info/custom_theme/${key}/favicon.ico?v=${this.session.systemVersion()}`;
      this.preloadFavicon(url);
    } else if (this.session.isApGame) {
      const url = "ap.ico";
      this.preloadFavicon(url);
    }
  }
  /** 先預加載 favicon 圖片, 有成功再設定 favicon */
  preloadFavicon(url) {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      this.setFaviconUrl(url);
    };
    img.onerror = () => {
    };
  }
  /**
   * 設定網頁的 favicon 圖片連結
   * @param url favicon 圖片的 URL，若為 null 則改用透明 favicon 蓋掉原本的預設 icon
   */
  setFaviconUrl(url) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
  }
  static \u0275fac = function FaviconCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaviconCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FaviconCtrlService, factory: _FaviconCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaviconCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  FaviconCtrlService
};
//# sourceMappingURL=chunk-V3SIYJ3E.js.map
