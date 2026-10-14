import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { formatNumber } from '@angular/common';

/**
 * 數字縮寫 Pipe (Compact Number)
 * 超過 100K 會縮寫為 K/M/B
 * 未達縮寫標準時，支援 Angular 數字格式參數
 * 
 * 使用方式：
 * {{ 1500000 | compactNumber }} => 1.5M
 * {{ 1234.56 | compactNumber:'1.0-2' }} => 1,234.56
 */
@Pipe({
  name: 'compactNumber',
  standalone: true
})
export class CompactNumberPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(value: number | null | undefined, digitsInfo?: string): string {
    if (value === null || value === undefined) return '';
    
    // 確保輸入是數字
    const num = Number(value);
    if (isNaN(num)) return value.toString();

    const absValue = Math.abs(num);

    // Billion (10億)
    if (absValue >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    // Million (百萬)
    if (absValue >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    // 100K+ (十萬以上)
    if (absValue >= 100_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }

    // 未達縮寫門檻 (小於 100,000)
    // 如果有傳入格式參數 (如 '1.0-2')，使用 Angular 內建 formatNumber
    if (digitsInfo) {
      return formatNumber(num, this.locale, digitsInfo);
    }

    // 預設行為：只加千分位
    return num.toLocaleString(this.locale);
  }
}
