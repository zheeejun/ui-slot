import {
  LoggerService
} from "./chunk-CFCPEQLG.js";
import {
  Injectable,
  __async,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/app/services/navigator-share/navigator-share.service.ts
var NavigatorShareService = class _NavigatorShareService {
  logger = inject(LoggerService);
  constructor() {
  }
  /** Share data through the Web Share API when supported. */
  shareToWebSns(shareData) {
    return __async(this, null, function* () {
      if (!navigator.share) {
        this.logger.warn("Web Share API not supported in this browser");
        return {
          supported: false
        };
      }
      try {
        const sharePayload = {};
        if (shareData.title)
          sharePayload.title = shareData.title;
        if (shareData.text)
          sharePayload.text = shareData.text;
        if (shareData.url)
          sharePayload.url = shareData.url;
        if (shareData.files && shareData.files.length > 0) {
          if (navigator.canShare && navigator.canShare({ files: shareData.files })) {
            sharePayload.files = shareData.files;
          } else {
            this.logger.warn("File sharing not supported, excluding files from share");
          }
        }
        yield navigator.share(sharePayload);
        return {
          supported: true,
          success: true
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        if (errorMessage === "AbortError" || error?.name === "AbortError") {
          this.logger.warn("Sharing cancelled:", error);
        } else {
          this.logger.warn(error);
        }
        return {
          supported: true,
          success: false,
          error
        };
      }
    });
  }
  copyToClipboard(text) {
    return __async(this, null, function* () {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success;
    });
  }
  // 設定分頁標題
  setPageTitle(title) {
    document.title = title;
  }
  /**
   * 禁用雙指縮放 (pinch-zoom)：touch-action CSS 無法涵蓋所有瀏覽器（尤其 iOS Safari），
   * 需搭配多點觸控 touchmove 與 Safari 專屬 gesturestart 事件一併阻擋。
   * @example navigatorShare.preventPinchZoom(this.elementRef.nativeElement, this.destroyRef);
   */
  preventPinchZoom(host, destroyRef) {
    const preventPinchZoomTouch = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };
    const preventGesture = (event) => event.preventDefault();
    host.addEventListener("touchmove", preventPinchZoomTouch, { passive: false });
    host.addEventListener("gesturestart", preventGesture);
    destroyRef.onDestroy(() => {
      host.removeEventListener("touchmove", preventPinchZoomTouch);
      host.removeEventListener("gesturestart", preventGesture);
    });
  }
  static \u0275fac = function NavigatorShareService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigatorShareService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NavigatorShareService, factory: _NavigatorShareService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorShareService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  NavigatorShareService
};
//# sourceMappingURL=chunk-DODGKEVZ.js.map
