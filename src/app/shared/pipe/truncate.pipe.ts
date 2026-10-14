import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
  pure: true  // ✅ 只在輸入變化時執行
})
export class TruncatePipe implements PipeTransform {
  /**
   * 無條件捨去小數部分
   * @param value - 原始數值
   * @returns 捨去小數後的整數
   * @example
   * 1.2 → 1
   * 1.9 → 1
   * 2.0 → 2
   */
  transform(value: number): number {
    // 處理異常值
    if (value === null || value === undefined || isNaN(value)) {
      return 0;
    }
    
    // 無條件捨去小數
    return Math.floor(value);
  }
}
