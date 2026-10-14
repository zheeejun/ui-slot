import { Pipe, PipeTransform } from '@angular/core';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

/**
 * 多語言翻譯 Pipe
 * 使用方式：{{ 'key' | appI18n }} 或 {{ 'key' | appI18n:'預設值' }}
 */
@Pipe({
  name: 'appI18n',
  standalone: true,
  pure: true  // ✅ Pure pipe 提升性能
})
export class AppI18nPipe implements PipeTransform {
  constructor(private appI18n: AppI18nService) {}

  /**
   * 翻譯轉換
   * @param key - 翻譯鍵值
   * @param defaultValue - 預設值（可選）
   * @returns 翻譯後的文字
   */
  transform(key: string, defaultValue?: string): string {
    return this.appI18n.instant(key, defaultValue);
  }
}
