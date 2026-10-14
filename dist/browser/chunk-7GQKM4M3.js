import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-QGU3BS3L.js";

// src/app/shared/pipe/app-i18n.pipe.ts
var AppI18nPipe = class _AppI18nPipe {
  appI18n;
  constructor(appI18n) {
    this.appI18n = appI18n;
  }
  /**
   * 翻譯轉換
   * @param key - 翻譯鍵值
   * @param defaultValue - 預設值（可選）
   * @returns 翻譯後的文字
   */
  transform(key, defaultValue) {
    return this.appI18n.instant(key, defaultValue);
  }
  static \u0275fac = function AppI18nPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppI18nPipe)(\u0275\u0275directiveInject(AppI18nService, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "appI18n", type: _AppI18nPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppI18nPipe, [{
    type: Pipe,
    args: [{
      name: "appI18n",
      standalone: true,
      pure: true
      // ✅ Pure pipe 提升性能
    }]
  }], () => [{ type: AppI18nService }], null);
})();

export {
  AppI18nPipe
};
//# sourceMappingURL=chunk-7GQKM4M3.js.map
