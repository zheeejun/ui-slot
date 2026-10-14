import { Pipe, PipeTransform } from '@angular/core';
import { MoneyText } from '../../services/player-wallet/player-wallet.function';

/**
 * 將金額數字格式化為顯示字串，使用 MoneyText.format 的全域設定
 * @example
 * {{ balance | moneyText }}
 * {{ balance | moneyText: { addSymbol: true } }}
 * {{ balance | moneyText: { addSymbol: true, stripTrailingZeros: true } }}
 */
@Pipe({
  name: 'moneyText',
  standalone: true
})
export class MoneyTextPipe implements PipeTransform {

  transform(value: number | null | undefined, options?: {
    addSymbol?: boolean;
    addSpace?: boolean;
    stripTrailingZeros?: boolean;
    customCurrencySymbol?: string;
    nonBreakingSpace?: boolean;
  }): string {
    if (value === null || value === undefined) {
      return '';
    }

    return MoneyText.format(value, options);
  }
}
