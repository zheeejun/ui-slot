import { Pipe, PipeTransform } from '@angular/core';
import { dec } from '../../services/player-wallet/player-wallet.function';

/**
 * 將數字轉換為指定的小數點位數
 * @example
 * {{ 123.4567 | decimal:2 }}
 * // result: 123.46
 */
@Pipe({
  name: 'decimal',
  standalone: true
})
export class DecimalPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = dec.decimalPlaces): string {
    if (isNaN(value)) {
      return String(value);
    }
    const factor = Math.pow(10, decimalPlaces);
    return (Math.floor(value * factor) / factor).toFixed(decimalPlaces);
  }
}
