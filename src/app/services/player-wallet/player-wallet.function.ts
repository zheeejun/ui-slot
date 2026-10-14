import Decimal from 'decimal.js';

/** Server數值轉換 */
export const calc = {
    /** 多少代表1 */
  numberBase: 10000,
  /** 顯示還要除以多少 */
  amountRatio: 1,
  /** 計算實際金額 */
  s2c(value: number): number {
    return new Decimal(value).div(new Decimal(this.numberBase).mul(this.amountRatio)).toNumber();
  },
  /** 計算實際金額 */
  c2s(value: number): number {
    return Math.floor(new Decimal(value).mul(new Decimal(this.numberBase).mul(this.amountRatio)).toNumber());
  }
}

/** 小數點位數設定 */
export const dec = {
  /** 小數點位數 */
  decimalPlaces: 3,
  /** 不使用千分位逗號（對應 loginResultNote.disable_comma） */
  disableComma: false,

  /** 將數字轉換為固定小數點位數的字串 */
  fix(value: any): string {
    // null, undefined, NaN 都會轉成 0
    if (isNaN(value) || value === null || value === undefined) {
      value = 0;
    }
    const factor = new Decimal(10).pow(this.decimalPlaces);
    return new Decimal(value).mul(factor).floor().div(factor).toFixed(this.decimalPlaces);
  },
  /** 將數字轉換為固定小數點位數, 並且帶有千分位分隔符的字串 */
  comma(value: any): string {
    // null, undefined, NaN 都會轉成 0
    if (isNaN(value) || value === null || value === undefined) {
      value = 0;
    }
    const factor = new Decimal(10).pow(this.decimalPlaces);
    const fixed = new Decimal(value).mul(factor).floor().div(factor).toFixed(this.decimalPlaces);
    const [integerPart, decimalPart] = fixed.split('.');
    const formattedInteger = parseInt(integerPart).toLocaleString('en-US');
    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  }
}

/** 金額顯示字串（貨幣符號與格式化，登入後設定一次） */
export const MoneyText = {
  /** 貨幣符號（對應 loginResultNote.currency_symbol） */
  currencySymbol: '',

  /**
   * 將金額數字格式化為顯示字串。
   * 小數位數與千分位從 dec 讀取，貨幣符號從 MoneyText.currencySymbol 讀取。
   * @param value 金額（已換算後的 client 端數值）
   * @param options.addSymbol 是否加貨幣符號前綴，預設 true
   * @param options.addSpace  符號與數字之間是否加空格，預設 true
   * @param options.stripTrailingZeros 去除小數尾端的 0（如 1.500 → 1.5），預設 false
   * @param options.nonBreakingSpace 符號與數字之間改用非斷行空格（ ），防止貨幣符號與金額斷行，預設 false
   */
  format(
    value: number | null | undefined,
    options?: {
      addSymbol?: boolean;
      addSpace?: boolean;
      stripTrailingZeros?: boolean;
      customCurrencySymbol?: string;
      nonBreakingSpace?: boolean;
    }
  ): string {
    const { addSymbol = true, addSpace = true, stripTrailingZeros = false, customCurrencySymbol, nonBreakingSpace = false } = options ?? {};

    if (value === null || value === undefined || isNaN(value)) {
      value = 0;
    }

    const factor = new Decimal(10).pow(dec.decimalPlaces);
    const fixed = new Decimal(value).mul(factor).floor().div(factor).toFixed(dec.decimalPlaces);
    const [integerPart, rawDecimalPart] = fixed.split('.');

    let decimalPart = rawDecimalPart ?? '';
    if (stripTrailingZeros && decimalPart) {
      decimalPart = decimalPart.replace(/0+$/, '');
    }

    const integerStr = dec.disableComma
      ? integerPart
      : parseInt(integerPart).toLocaleString('en-US');

    const numberStr = decimalPart.length > 0 ? `${integerStr}.${decimalPart}` : integerStr;

    const symbol = customCurrencySymbol ?? this.currencySymbol;

    if (!addSymbol || !symbol) {
      return numberStr;
    }

    const space = nonBreakingSpace ? '\u00A0' : ' ';
    return addSpace ? `${symbol}${space}${numberStr}` : `${symbol}${numberStr}`;
  }
}

