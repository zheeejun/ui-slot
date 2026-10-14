import { DestroyRef, Injectable, inject } from '@angular/core';
import { WebShareData, WebShareResult } from './navigator-share.service.interface';
import { LoggerService } from '../logger/logger.service';

/** Common browser utility service. */
@Injectable({
  providedIn: 'root'
})
export class NavigatorShareService {
  private logger = inject(LoggerService);
  constructor() {}

  /** Share data through the Web Share API when supported. */
  async shareToWebSns(shareData: WebShareData): Promise<WebShareResult> {
    // 檢查瀏覽器是否支援 Web Share API
    if (!navigator.share) {
      this.logger.warn('Web Share API not supported in this browser');
      return {
        supported: false
      };
    }

    try {
      // 準備分享資料
      const sharePayload: ShareData = {};

      if (shareData.title) sharePayload.title = shareData.title;
      if (shareData.text) sharePayload.text = shareData.text;
      if (shareData.url) sharePayload.url = shareData.url;
      if (shareData.files && shareData.files.length > 0) {
        // 檢查是否支援檔案分享
        if (navigator.canShare && navigator.canShare({ files: shareData.files })) {
          sharePayload.files = shareData.files;
        } else {
          this.logger.warn('File sharing not supported, excluding files from share');
        }
      }

      // 呼叫 Web Share API
      await navigator.share(sharePayload);

      return {
        supported: true,
        success: true
      };
    } catch (error) {
      // 用戶取消分享或其他錯誤
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      // AbortError 表示用戶取消分享，不算真正的錯誤
      if (errorMessage === 'AbortError' || (error as any)?.name === 'AbortError') {
        this.logger.warn('Sharing cancelled:', error);
      } else {
        this.logger.warn(error);
      }

      return {
        supported: true,
        success: false,
        error
      };
    }
  }

  async copyToClipboard(text: string): Promise<boolean> {
    // 先暫時略過navigator.clipboard 直接使用舊方法
    /*
    if (window.isSecureContext && navigator.clipboard?.writeText) {
      try {
          await navigator.clipboard.writeText(text);
          return true;
      } catch {}
    }*/

    // 複製的舊方法
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    textarea.select();

    const success = document.execCommand('copy');

    document.body.removeChild(textarea);

    return success;
  }

  // 設定分頁標題
  setPageTitle(title: string): void {
    document.title = title;
  }

  /**
   * 禁用雙指縮放 (pinch-zoom)：touch-action CSS 無法涵蓋所有瀏覽器（尤其 iOS Safari），
   * 需搭配多點觸控 touchmove 與 Safari 專屬 gesturestart 事件一併阻擋。
   * @example navigatorShare.preventPinchZoom(this.elementRef.nativeElement, this.destroyRef);
   */
  preventPinchZoom(host: HTMLElement, destroyRef: DestroyRef): void {
    const preventPinchZoomTouch = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };
    const preventGesture = (event: Event) => event.preventDefault();

    host.addEventListener('touchmove', preventPinchZoomTouch, { passive: false });
    host.addEventListener('gesturestart', preventGesture);

    destroyRef.onDestroy(() => {
      host.removeEventListener('touchmove', preventPinchZoomTouch);
      host.removeEventListener('gesturestart', preventGesture);
    });
  }
}
