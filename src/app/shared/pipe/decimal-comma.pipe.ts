import { Pipe, PipeTransform } from '@angular/core';
import { dec } from '../../services/player-wallet/player-wallet.function';

/**
 * 將數字轉換為指定的小數點位數，並加上千位分隔符
 * @example
 * {{ 1234567.4567 | decimalComma:2 }}
 * // result: 1,234,567.46
 * 
 * {{ 1000.123 | decimalComma:3 }}
 * // result: 1,000.123
 */
@Pipe({
  name: 'decimalComma',
  standalone: true
})
export class DecimalCommaPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = dec.decimalPlaces): string {
    if (isNaN(value)) {
      return String(value);
    }

    // 先固定小數位數 (無條件捨去)
    const factor = Math.pow(10, decimalPlaces);
    const fixed = (Math.floor(value * factor) / factor).toFixed(decimalPlaces);
    
    // 使用 toLocaleString 加上千位分隔符
    // 分離整數和小數部分
    const [integerPart, decimalPart] = fixed.split('.');
    
    // 為整數部分加上千位分隔符
    const formattedInteger = parseInt(integerPart).toLocaleString('en-US');
    
    // 重新組合
    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  }
}
