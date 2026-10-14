import { Pipe, Inject, LOCALE_ID } from '@angular/core';
import { formatNumber } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * 無條件捨去 Pipe
 *
 * 行為類似 Angular 的 | number，但不會四捨五入，而是無條件捨去多餘小數。
 *
 * 使用範例：
 * {{ 1.259 | floorNumber:'1.0-2' }} => 1.25  (原本 number pipe 會變成 1.26)
 * {{ 1.9 | floorNumber:'1.0-0' }}   => 1     (原本 number pipe 會變成 2)
 */
export class FloorNumberPipe {
    locale;
    constructor(locale) {
        this.locale = locale;
    }
    transform(value, digitsInfo) {
        if (value === null || value === undefined)
            return '';
        let num = Number(value);
        if (isNaN(num))
            return String(value);
        // 解析 digitsInfo，預設與 Angular 相同 '1.0-3'
        // 格式: {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}
        const info = digitsInfo || '1.0-3';
        // 1. 取得 maxFractionDigits (小數位數上限)
        let maxFraction = 3;
        // 嘗試解析標準格式 .min-max
        const match = info.match(/\.(\d+)-(\d+)$/);
        if (match) {
            maxFraction = parseInt(match[2], 10);
        }
        else {
            // 嘗試解析簡單格式 .min (Angular 當作 min=max)
            const simpleMatch = info.match(/\.(\d+)$/);
            if (simpleMatch) {
                maxFraction = parseInt(simpleMatch[1], 10);
            }
        }
        // 2. 執行截斷 (無條件捨去)
        // 使用字串處理方式來避免浮點數運算的誤差 (例如 0.29 * 100 = 28.999999...)
        const s = num.toString();
        // 處理科學記號 e-7 等狀況，若有 e 則回退到 Math 方法或直接顯示
        if (s.indexOf('e') > -1) {
            const factor = Math.pow(10, maxFraction);
            num = Math.floor(num * factor) / factor;
        }
        else {
            const decimalIndex = s.indexOf('.');
            if (decimalIndex > -1) {
                // 有小數點，檢查位數
                if (s.length - decimalIndex - 1 > maxFraction) {
                    // 截斷多餘位數
                    // 注意：這裡直接截斷字串，相當於 floor for positive, ceil for negative visual magnitude
                    // 如果需要真正的數學 floor (負數向下)，行為會不同。
                    // 但通常 UI 顯示期待的是 "截斷顯示" (Truncate toward zero)。
                    const truncatedStr = s.substring(0, decimalIndex + 1 + maxFraction);
                    num = Number(truncatedStr);
                }
            }
        }
        // 3. 交給 Angular 處理 Localize (千分位、最小位數補零)
        return formatNumber(num, this.locale, info);
    }
    static ɵfac = function FloorNumberPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FloorNumberPipe)(i0.ɵɵdirectiveInject(LOCALE_ID, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "floorNumber", type: FloorNumberPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FloorNumberPipe, [{
        type: Pipe,
        args: [{
                name: 'floorNumber',
                standalone: true
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }], null); })();
//# sourceMappingURL=floor-number.pipe.js.map