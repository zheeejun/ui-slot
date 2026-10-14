import { Injectable, inject } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { LoggerService } from '../logger/logger.service';
import * as i0 from "@angular/core";
/**
 * 通用工具服務
 * 對應原 CommonFunction.ts 的功能
 * 提供加密、解密、Base64 編碼等通用工具方法
 */
export class CommonFunctionService {
    logger = inject(LoggerService);
    /**
     * 將 Base64 字串轉換為物件
     * 對應原方法 Base64StringToObject
     * @param str Base64 編碼的字串
     * @returns 解碼後的物件，失敗時返回 null
     */
    base64StringToObject(str) {
        try {
            const decoded = CryptoJS.enc.Base64.parse(str);
            const decodedString = CryptoJS.enc.Utf8.stringify(decoded);
            return JSON.parse(decodedString);
        }
        catch (e) {
            this.logger.error('Error parsing Base64 to object:', e);
            return null;
        }
    }
    /**
     * 將物件轉換為 Base64 字串
     * 對應原方法 ObjectToBase64String
     * @param obj 要編碼的物件
     * @returns Base64 編碼的字串，失敗時返回 null
     */
    objectToBase64String(obj) {
        try {
            const jsonString = JSON.stringify(obj);
            const utf8 = CryptoJS.enc.Utf8.parse(jsonString);
            return CryptoJS.enc.Base64.stringify(utf8);
        }
        catch (e) {
            this.logger.error('Error encoding object to Base64:', e);
            return null;
        }
    }
    /**
     * 將物件加密並轉換為 Base64
     * 對應原方法 ObjectToBase64StringEncrypted
     * @param obj 要加密的物件
     * @param key 加密金鑰
     * @returns 加密後的 Base64 字串，失敗時返回 null
     */
    objectToBase64StringEncrypted(obj, key) {
        try {
            // 1. 將物件轉換為 JSON 字串
            const jsonString = JSON.stringify(obj);
            // 2. 使用 AES 加密
            const encrypted = CryptoJS.AES.encrypt(jsonString, key).toString();
            // 3. 轉換為 UTF-8
            const utf8 = CryptoJS.enc.Utf8.parse(encrypted);
            // 4. 轉換為 Base64
            const base64Encoded = CryptoJS.enc.Base64.stringify(utf8);
            return base64Encoded;
        }
        catch (e) {
            this.logger.error('Error encoding and encrypting object to Base64:', e);
            return null;
        }
    }
    /**
     * 將 Base64 解密為物件
     * 對應原方法 Base64StringToObjectDecrypted
     * @param str 加密的 Base64 字串
     * @param key 解密金鑰
     * @returns 解密後的物件，失敗時返回 null
     */
    base64StringToObjectDecrypted(str, key) {
        try {
            // 1. Base64 解碼
            const decoded = CryptoJS.enc.Base64.parse(str);
            // 2. 轉換為 UTF-8 字串
            const decodedString = CryptoJS.enc.Utf8.stringify(decoded);
            // 3. AES 解密
            const decrypted = CryptoJS.AES.decrypt(decodedString, key)
                .toString(CryptoJS.enc.Utf8);
            // 4. 解析 JSON
            return JSON.parse(decrypted);
        }
        catch (e) {
            this.logger.error('Error decrypting and parsing Base64 to object:', e);
            return null;
        }
    }
    /**
     * 呼叫 Web Share API 進行分享
     * 會自動檢測瀏覽器是否支援，如不支援會在結果中標示
     * 由呼叫者決定如何處理不支援的情況
     *
     * @param shareData 要分享的資料
     * @returns Promise<WebShareResult> 包含支援狀態、執行成功與否及錯誤訊息
     *
     * @example
     * ```typescript
     * const result = await this.commonFunction.shareToWebSns({
     *   title: '分享標題',
     *   text: '分享內容',
     *   url: 'https://example.com'
     * });
     *
     * if (!result.supported) {
     *   // 瀏覽器不支援，使用其他方式處理
     *   this.showCopyLinkDialog();
     * } else if (result.success) {
     *   // 分享成功
     *   this.showSuccessMessage();
     * } else {
     *   // 分享失敗或用戶取消
     *   this.logger.error('分享失敗', result.error);
     * }
     * ```
     */
    async shareToWebSns(shareData) {
        // 檢查瀏覽器是否支援 Web Share API
        if (!navigator.share) {
            this.logger.warn('Web Share API not supported in this browser');
            return {
                supported: false
            };
        }
        try {
            // 準備分享資料
            const sharePayload = {};
            if (shareData.title)
                sharePayload.title = shareData.title;
            if (shareData.text)
                sharePayload.text = shareData.text;
            if (shareData.url)
                sharePayload.url = shareData.url;
            if (shareData.files && shareData.files.length > 0) {
                // 檢查是否支援檔案分享
                if (navigator.canShare && navigator.canShare({ files: shareData.files })) {
                    sharePayload.files = shareData.files;
                }
                else {
                    this.logger.warn('File sharing not supported, excluding files from share');
                }
            }
            // 呼叫 Web Share API
            await navigator.share(sharePayload);
            return {
                supported: true,
                success: true
            };
        }
        catch (error) {
            // 用戶取消分享或其他錯誤
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            // AbortError 表示用戶取消分享，不算真正的錯誤
            if (errorMessage === 'AbortError' || error?.name === 'AbortError') {
                // Share cancelled by user
            }
            else {
                this.logger.error('Error sharing content:', error);
            }
            return {
                supported: true,
                success: false,
                error
            };
        }
    }
    /**
     * 判斷是否為移動設備
     * 使用 Tailwind CSS 的 sm breakpoint (640px) 作為判斷依據
     * 小於 640px 視為移動設備
     *
     * @returns boolean - true 表示移動設備，false 表示桌面設備
     *
     * @example
     * ```typescript
     * if (this.commonFunction.isMobile()) {
     *   // 移動設備邏輯
     * } else {
     *   // 桌面設備邏輯
     * }
     * ```
     */
    isMobile() {
        // 使用 Tailwind sm breakpoint: max-width 639px
        return window.matchMedia('(max-width: 639px)').matches;
    }
    static ɵfac = function CommonFunctionService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommonFunctionService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommonFunctionService, factory: CommonFunctionService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonFunctionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=common-function.service.js.map