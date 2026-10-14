import { Pipe } from '@angular/core';
import { dec } from '../../services/user-profile/user-profile.function';
import * as i0 from "@angular/core";
/**
 * 將數字轉換為指定的小數點位數，並加上千位分隔符
 * @example
 * {{ 1234567.4567 | decimalComma:2 }}
 * // result: 1,234,567.46
 *
 * {{ 1000.123 | decimalComma:3 }}
 * // result: 1,000.123
 */
export class DecimalCommaPipe {
    transform(value, decimalPlaces = dec.decimalPlaces) {
        if (isNaN(value)) {
            return String(value);
        }
        // 先固定小數位數
        const fixed = value.toFixed(decimalPlaces);
        // 使用 toLocaleString 加上千位分隔符
        // 分離整數和小數部分
        const [integerPart, decimalPart] = fixed.split('.');
        // 為整數部分加上千位分隔符
        const formattedInteger = parseInt(integerPart).toLocaleString('en-US');
        // 重新組合
        return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
    }
    static ɵfac = function DecimalCommaPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DecimalCommaPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "decimalComma", type: DecimalCommaPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DecimalCommaPipe, [{
        type: Pipe,
        args: [{
                name: 'decimalComma',
                standalone: true
            }]
    }], null, null); })();
//# sourceMappingURL=decimal-comma.pipe.js.map