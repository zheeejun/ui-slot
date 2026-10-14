import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/app-i18n/app-i18n.service";
/**
 * 多語言翻譯 Pipe
 * 使用方式：{{ 'key' | appI18n }} 或 {{ 'key' | appI18n:'預設值' }}
 */
export class AppI18nPipe {
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
    static ɵfac = function AppI18nPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppI18nPipe)(i0.ɵɵdirectiveInject(i1.AppI18nService, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "appI18n", type: AppI18nPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppI18nPipe, [{
        type: Pipe,
        args: [{
                name: 'appI18n',
                standalone: true,
                pure: true // ✅ Pure pipe 提升性能
            }]
    }], () => [{ type: i1.AppI18nService }], null); })();
//# sourceMappingURL=app-i18n.pipe.js.map