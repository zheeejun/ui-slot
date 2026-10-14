import { Pipe } from '@angular/core';
import { dec } from '../../services/user-profile/user-profile.function';
import * as i0 from "@angular/core";
/**
 * 將數字轉換為指定的小數點位數
 * @example
 * {{ 123.4567 | decimal:2 }}
 * // result: 123.46
 */
export class DecimalPipe {
    transform(value, decimalPlaces = dec.decimalPlaces) {
        if (isNaN(value)) {
            return String(value);
        }
        return value.toFixed(decimalPlaces);
    }
    static ɵfac = function DecimalPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DecimalPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "decimal", type: DecimalPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DecimalPipe, [{
        type: Pipe,
        args: [{
                name: 'decimal',
                standalone: true
            }]
    }], null, null); })();
//# sourceMappingURL=decimal.pipe.js.map