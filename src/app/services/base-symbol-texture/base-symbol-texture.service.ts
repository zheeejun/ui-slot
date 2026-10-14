import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, of } from 'rxjs';
import { LoggerService } from '../logger/logger.service';
import { ClientSessionService } from '../client-session/client-session.service';
import { AppI18nService } from '../app-i18n/app-i18n.service';
import { SpinModeType } from '../../../chiikawa/ApWeb/ApWebInterface';
import { environment } from '../../../environments/app-environment';

/**
 * 統一處理跟 symbol url相關的服務，目前包含載入 symbol 圖片對應表以及提供buyfeature圖片連結
 */
@Injectable({
  providedIn: 'root'
})
export class BaseSymbolTextureService {
  private readonly http = inject(HttpClient);
  private readonly logger = inject(LoggerService);
  private readonly session = inject(ClientSessionService);
  private readonly i18n = inject(AppI18nService);
  private customGameKey = signal<string | null>(null);
  /** 若 customGameKey 存在，Info 資產路徑會加上 customGameKey 前綴 */
  readonly infoUrl = computed<string>(() => {
    const key = this.customGameKey();
    const prefix = key ? `${key}_` : '';
    return `${this.session.assetUrlSignal()}/system/Info/${prefix}${this.session.gameId}/en/`;
  });
  private readonly symbolTextureList = signal<Record<string, string> | null>(null);
  private readonly croppedImageCache = new Map<string, string>();
  constructor() {
    if (!environment.production) {
      (window as any).symbolTexture = this;
    }

    // 當 assetUrlSignal 變化時，自動重新載入 slot game 的  symbol 圖片對應表
      effect(() => {
        if (this.session.isSlotGame && this.session.systemRemoteConfig()) {
          // track
          const assetUrl = this.session.assetUrlSignal();
          untracked(() => {
            this.fetchSymbolTextureList(this.session.gameId || '');
          });
        }
      });
  }

  /** 從 sessionStorage 取得遊戲端寫入的 customGamekey，僅在存在時才賦值 */
  public assignCustomGameKey(key: string): void {
    if (key) {
      this.customGameKey.set(key);
    }
  }

  /** 載入 symbol 圖片對應表，已載入則直接回傳快取 */
  private async fetchSymbolTextureList(gameId: string): Promise<Record<string, string>> {
    const url = `${this.session.assetUrlSignal()}/${gameId}/SlotSymbolsURI.json?v=${this.session.systemVersion()}`;
    const res = await firstValueFrom(
      this.http.get<Record<string, string>>(url).pipe(
        catchError(() => {
          this.logger.warn('Symbol image url mapping file Load Failed:');
          return of({});
        })
      )
    );

    const v = Date.now();
    const mapped: Record<string, string> = {};
    for (const [key, value] of Object.entries(res)) {
      if (!key || !value) continue;
      mapped[key] = `/${gameId}/${value}?v=${v}`;
    }
    this.symbolTextureList.set(mapped);

    return mapped;
  }

  /** 獲取 symbol 圖片連結，需先呼叫 waitSymbolTextureList 載入對應表 */
  private getTextureUrl(symbol: string | null | undefined): string | null {
    if (!symbol) return null;
    const list = this.symbolTextureList();
    if (!list || !list[symbol]) return null;
    return list[symbol];
  }

  /** 獲取 buy chance 圖片連結，會先嘗試從遊戲字串表取得對應圖片名稱，沒有的話回傳 null */
  public getBuyChanceTextureUrl(mode: SpinModeType): string | null {
    const gameImageName = this.i18n.gameStr(`buyfeature_${mode}_img`);
    if (!gameImageName) return null;
    const url = this.infoUrl() + `${gameImageName}?v=${this.session.version().sys}`;
    return url;
  }

  /** 獲取 buy feature 圖片連結，會先嘗試從遊戲字串表取得對應圖片名稱，沒有的話回傳 null */
  public getBuyFeatureTextureUrl(mode: SpinModeType): string | null {
    const gameImageName = this.i18n.gameStr(`buyfeature_${mode}_img`);
    if (!gameImageName) return this.getTextureUrl('S1'); // buy feature 預設圖如果沒有特別指定的話就回傳 S1 圖
    const url = this.infoUrl() + `${gameImageName}?v=${this.session.version().sys}`;
    return url;
  }

  /** 依 Info 圖片檔名組成網址，檔名為空則回傳null */
  public getHistoryTextureUrl(gameImageName: string | null | undefined): string | null {
    if (!gameImageName) return null;
    const url = this.infoUrl() + `${gameImageName}?v=${this.session.version().sys}`;
    return url;
  }

  /** 裁切圖片透明邊界，裁切結果依來源網址快取於 service 內，不受 component 生命週期影響 */
  public async cropImageBlank(source: string): Promise<string> {
    const cachedImage = this.croppedImageCache.get(source);
    if (cachedImage) return cachedImage;

    try {
      const img = await this.loadImage(source);
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      if (!w || !h) return source;

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return source;

      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(0, 0, w, h);
      let minX = w, minY = h, maxX = -1, maxY = -1;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] > 10) {
          const x = (i / 4) % w;
          const y = Math.floor(i / 4 / w);
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
      if (maxX < minX || maxY < minY) return source;

      const contentW = maxX - minX + 1;
      const contentH = maxY - minY + 1;
      if (contentW === w && contentH === h) return source;

      const croppedCanvas = document.createElement('canvas');
      croppedCanvas.width = contentW;
      croppedCanvas.height = contentH;
      const croppedCtx = croppedCanvas.getContext('2d');
      if (!croppedCtx) return source;

      croppedCtx.drawImage(canvas, minX, minY, contentW, contentH, 0, 0, contentW, contentH);
      const croppedImage = croppedCanvas.toDataURL('image/png');
      this.croppedImageCache.set(source, croppedImage);
      return croppedImage;
    } catch {
      return source;
    }
  }

  private loadImage(source: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = source;
    });
  }
}
