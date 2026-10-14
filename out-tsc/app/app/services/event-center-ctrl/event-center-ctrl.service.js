import { Injectable, signal } from '@angular/core';
import { EventcenterTabNameList } from '../../pages/event-center/event-center.type';
import * as i0 from "@angular/core";
export class EventCenterCtrlService {
    /** 是否顯示 Event Center component */
    _isVisible = signal(false);
    /** 是否顯示 Event Center component */
    isVisible = this._isVisible.asReadonly();
    /** 主要路徑: buy-feature,  campaign, 請參靠EventcenterTabName*/
    _path = signal('buy-feature');
    /** 主要路徑: buy-feature,  campaign, 請參靠EventcenterTabName*/
    path = this._path.asReadonly();
    /** 次要路徑: buy-feature/tournmentId, campaign/campaignId */
    _subPath = signal('');
    /** 次要路徑: buy-feature/tournmentId, campaign/campaignId */
    subPath = this._subPath.asReadonly();
    constructor() { }
    /** 打開 Event Center，並設定要打開的分頁路徑
     *  因為Event Center裡面有分主要路徑跟次要路徑的概念，所以任何切換Tab或是上下頁的切換都必須呼叫這個函式，並帶入正確的路徑參數
     * @param target 目標路徑格式為 mainPath/subPath，例如 "tournament/12345" 或 "campaign/campaignId"，如果沒有提供則預設打開 "buy-feature" 分頁
    */
    open(target) {
        // 預設打開 buy-feature 分頁
        this._path.set('buy-feature');
        this._subPath.set('');
        this._isVisible.set(true);
        if (!target) {
            return;
        }
        // 排除錯誤path
        const path = target.split('/')[0];
        if (!EventcenterTabNameList.includes(path)) {
            return;
        }
        this._path.set(path);
        // 有次要路徑才設定
        const subPath = target.split('/').slice(1).join('/');
        if (subPath) {
            this._subPath.set(subPath);
        }
    }
    /** 關閉 Event Center，並重置路徑 */
    close() {
        this._isVisible.set(false);
        this._path.set('buy-feature');
        this._subPath.set('');
    }
    back() {
        this._subPath.set('');
    }
    static ɵfac = function EventCenterCtrlService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventCenterCtrlService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EventCenterCtrlService, factory: EventCenterCtrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventCenterCtrlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=event-center-ctrl.service.js.map