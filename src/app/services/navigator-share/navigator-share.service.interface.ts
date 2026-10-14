/**
 * Web Share API 分享資料
 */
export interface WebShareData {
  /** 分享標題 */
  title?: string;
  /** 分享文字內容 */
  text?: string;
  /** 分享 URL */
  url?: string;
  /** 分享檔案（選用，需要瀏覽器支援） */
  files?: File[];
}

/**
 * Web Share API 分享結果
 */
export interface WebShareResult {
  /** 是否支援 Web Share API */
  supported: boolean;
  /** 分享是否成功（僅在 supported 為 true 時有效） */
  success?: boolean;
  /** 錯誤訊息（如果有的話） */
  error?: any;
}
