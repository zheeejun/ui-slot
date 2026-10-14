/** Server數值轉換 */
export const calc = {
    /** 多少代表1 */
    numberBase: 10000,
    /** 顯示還要除以多少 */
    amountRatio: 1,
    /** 計算實際金額 */
    s2c(value) {
        return value / (this.numberBase * this.amountRatio);
    },
    /** 計算實際金額 */
    c2s(value) {
        return Math.floor(value * (this.numberBase * this.amountRatio));
    }
};
/** 小數點位數設定 */
export const dec = {
    /** 小數點位數 */
    decimalPlaces: 3,
    place(value) {
        // null, undefined, NaN 都會轉成 0
        if (isNaN(value) || value === null || value === undefined) {
            value = 0;
        }
        return value.toFixed(this.decimalPlaces);
    }
};
//# sourceMappingURL=user-profile.function.js.map