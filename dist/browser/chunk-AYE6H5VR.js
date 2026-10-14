import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  LoggerService
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService,
  environment
} from "./chunk-54ITVL2G.js";
import {
  HttpClient
} from "./chunk-FH2ESRL7.js";
import {
  Injectable,
  __async,
  catchError,
  computed,
  effect,
  firstValueFrom,
  inject,
  of,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/app/services/base-symbol-texture/base-symbol-texture.service.ts
var BaseSymbolTextureService = class _BaseSymbolTextureService {
  http = inject(HttpClient);
  logger = inject(LoggerService);
  session = inject(ClientSessionService);
  i18n = inject(AppI18nService);
  customGameKey = signal(null);
  /** 若 customGameKey 存在，Info 資產路徑會加上 customGameKey 前綴 */
  infoUrl = computed(() => {
    const key = this.customGameKey();
    const prefix = key ? `${key}_` : "";
    return `${this.session.assetUrlSignal()}/system/Info/${prefix}${this.session.gameId}/en/`;
  });
  symbolTextureList = signal(null);
  croppedImageCache = /* @__PURE__ */ new Map();
  constructor() {
    if (!environment.production) {
      window.symbolTexture = this;
    }
    effect(() => {
      if (this.session.isSlotGame && this.session.systemRemoteConfig()) {
        const assetUrl = this.session.assetUrlSignal();
        untracked(() => {
          this.fetchSymbolTextureList(this.session.gameId || "");
        });
      }
    });
  }
  /** 從 sessionStorage 取得遊戲端寫入的 customGamekey，僅在存在時才賦值 */
  assignCustomGameKey(key) {
    if (key) {
      this.customGameKey.set(key);
    }
  }
  /** 載入 symbol 圖片對應表，已載入則直接回傳快取 */
  fetchSymbolTextureList(gameId) {
    return __async(this, null, function* () {
      const url = `${this.session.assetUrlSignal()}/${gameId}/SlotSymbolsURI.json?v=${this.session.systemVersion()}`;
      const res = yield firstValueFrom(this.http.get(url).pipe(catchError(() => {
        this.logger.warn("Symbol image url mapping file Load Failed:");
        return of({});
      })));
      const v = Date.now();
      const mapped = {};
      for (const [key, value] of Object.entries(res)) {
        if (!key || !value)
          continue;
        mapped[key] = `/${gameId}/${value}?v=${v}`;
      }
      this.symbolTextureList.set(mapped);
      return mapped;
    });
  }
  /** 獲取 symbol 圖片連結，需先呼叫 waitSymbolTextureList 載入對應表 */
  getTextureUrl(symbol) {
    if (!symbol)
      return null;
    const list = this.symbolTextureList();
    if (!list || !list[symbol])
      return null;
    return list[symbol];
  }
  /** 獲取 buy chance 圖片連結，會先嘗試從遊戲字串表取得對應圖片名稱，沒有的話回傳 null */
  getBuyChanceTextureUrl(mode) {
    const gameImageName = this.i18n.gameStr(`buyfeature_${mode}_img`);
    if (!gameImageName)
      return null;
    const url = this.infoUrl() + `${gameImageName}?v=${this.session.version().sys}`;
    return url;
  }
  /** 獲取 buy feature 圖片連結，會先嘗試從遊戲字串表取得對應圖片名稱，沒有的話回傳 null */
  getBuyFeatureTextureUrl(mode) {
    const gameImageName = this.i18n.gameStr(`buyfeature_${mode}_img`);
    if (!gameImageName)
      return this.getTextureUrl("S1");
    const url = this.infoUrl() + `${gameImageName}?v=${this.session.version().sys}`;
    return url;
  }
  /** 依 Info 圖片檔名組成網址，檔名為空則回傳null */
  getHistoryTextureUrl(gameImageName) {
    if (!gameImageName)
      return null;
    const url = this.infoUrl() + `${gameImageName}?v=${this.session.version().sys}`;
    return url;
  }
  /** 裁切圖片透明邊界，裁切結果依來源網址快取於 service 內，不受 component 生命週期影響 */
  cropImageBlank(source) {
    return __async(this, null, function* () {
      const cachedImage = this.croppedImageCache.get(source);
      if (cachedImage)
        return cachedImage;
      try {
        const img = yield this.loadImage(source);
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (!w || !h)
          return source;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx)
          return source;
        ctx.drawImage(img, 0, 0);
        const { data } = ctx.getImageData(0, 0, w, h);
        let minX = w, minY = h, maxX = -1, maxY = -1;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] > 10) {
            const x = i / 4 % w;
            const y = Math.floor(i / 4 / w);
            if (x < minX)
              minX = x;
            if (x > maxX)
              maxX = x;
            if (y < minY)
              minY = y;
            if (y > maxY)
              maxY = y;
          }
        }
        if (maxX < minX || maxY < minY)
          return source;
        const contentW = maxX - minX + 1;
        const contentH = maxY - minY + 1;
        if (contentW === w && contentH === h)
          return source;
        const croppedCanvas = document.createElement("canvas");
        croppedCanvas.width = contentW;
        croppedCanvas.height = contentH;
        const croppedCtx = croppedCanvas.getContext("2d");
        if (!croppedCtx)
          return source;
        croppedCtx.drawImage(canvas, minX, minY, contentW, contentH, 0, 0, contentW, contentH);
        const croppedImage = croppedCanvas.toDataURL("image/png");
        this.croppedImageCache.set(source, croppedImage);
        return croppedImage;
      } catch {
        return source;
      }
    });
  }
  loadImage(source) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = source;
    });
  }
  static \u0275fac = function BaseSymbolTextureService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseSymbolTextureService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BaseSymbolTextureService, factory: _BaseSymbolTextureService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseSymbolTextureService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  BaseSymbolTextureService
};
//# sourceMappingURL=chunk-AYE6H5VR.js.map
