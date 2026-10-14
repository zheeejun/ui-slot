import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TruncatePipe {
    /**
     * 無條件捨去小數部分
     * @param value - 原始數值
     * @returns 捨去小數後的整數
     * @example
     * 1.2 → 1
     * 1.9 → 1
     * 2.0 → 2
     */
    transform(value) {
        // 處理異常值
        if (value === null || value === undefined || isNaN(value)) {
            return 0;
        }
        // 無條件捨去小數
        return Math.floor(value);
    }
    static ɵfac = function TruncatePipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TruncatePipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "truncate", type: TruncatePipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TruncatePipe, [{
        type: Pipe,
        args: [{
                name: 'truncate',
                standalone: true,
                pure: true // ✅ 只在輸入變化時執行
            }]
    }], null, null); })();
//# sourceMappingURL=truncate.pipe.js.map