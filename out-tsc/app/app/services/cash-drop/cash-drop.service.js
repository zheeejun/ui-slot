import { computed, effect, Injectable, signal } from '@angular/core';
import { PromoEnum } from '../campaign-ctrl/campaign-info-msg.interface';
import * as i0 from "@angular/core";
import * as i1 from "../app-interface/app-interface.service";
export class CashDropService {
    api;
    /** 所有Cash Drop */
    _cashDrops = signal([]); // 前端使用的Cash Drop
    /** 取得所有Cash Drop */
    cashDrops = this._cashDrops.asReadonly();
    /** 按照結束時間排序的Cash Drop */
    cashDropsByEndTime = computed(() => {
        return [...this._cashDrops()].sort((a, b) => new Date(a.endtime).getTime() - new Date(b.endtime).getTime());
    });
    constructor(api) {
        this.api = api;
        // 訂閱登入結果變化
        effect(() => {
            this.updateLoginResult(this.api.loginResult());
        });
    }
    /** 是否開啟cash drop的tab */
    showTab = computed(() => {
        return this.cashDrops().length > 0;
    });
    updateLoginResult(result) {
        if (!result)
            return;
        this.updateCampaignList(result.note?.campaignlist ?? []);
    }
    /** 從Campaign List的資料更新Cash Drops */
    updateCampaignList(campaignList) {
        // 不更新任何資料
        if (!campaignList || campaignList.length === 0) {
            return;
        }
        const cashDrops = campaignList.filter((campaign) => campaign.type === PromoEnum.CashDrop);
        const formattedCashDrops = cashDrops.map((cashDrop) => ({
            id: cashDrop.campaign_id,
            name: cashDrop.name,
            endtime: cashDrop.endtime,
            rawData: cashDrop
        }));
        // 檢查目前_cashDrops是否有重複的id, 有就取代, 沒有就新增
        this._cashDrops.update((current) => {
            for (const newCashDrop of formattedCashDrops) {
                const existingIndex = current.findIndex((c) => c.id === newCashDrop.id);
                if (existingIndex === -1) {
                    // 新的ID就加入
                    current.push(newCashDrop);
                }
                else {
                    // 已存在的ID就取代
                    current[existingIndex] = newCashDrop;
                }
            }
            return current;
        });
    }
    static ɵfac = function CashDropService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CashDropService)(i0.ɵɵinject(i1.AppInterfaceService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CashDropService, factory: CashDropService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CashDropService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.AppInterfaceService }], null); })();
//# sourceMappingURL=cash-drop.service.js.map