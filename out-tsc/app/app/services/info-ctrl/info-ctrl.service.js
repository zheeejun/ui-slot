import { Injectable, computed, inject } from '@angular/core';
import { LoginCtrlService } from '../login-ctrl/login-ctrl.service';
import { AppI18nService } from '../app-i18n/app-i18n.service';
import { featureEntriesData, paytableEntriesData, } from './info-ctrl.data';
import * as i0 from "@angular/core";
export class InfoCtrlService {
    appI18n = inject(AppI18nService);
    login = inject(LoginCtrlService);
    featureEntries = computed(() => {
        const data = this.appI18n.getGameWordList();
        const entries = Object.entries(data || {})
            .filter(([key]) => key.startsWith('info_feature_'))
            .map(([, value]) => this.parseInfoEntry(value))
            .filter((entry) => !!entry);
        return entries.length > 0 ? entries : featureEntriesData;
    });
    paytableEntries = computed(() => {
        const data = this.appI18n.getGameWordList();
        const entries = Object.entries(data || {})
            .filter(([key]) => key.startsWith('info_paytable_'))
            .map(([, value]) => this.parseInfoEntry(value))
            .filter((entry) => !!entry);
        return entries.length > 0 ? entries : paytableEntriesData;
    });
    gameId = this.login.gameId || '10087';
    assetUrl = this.login.assetUrl + '/system/Info/' + this.gameId;
    entryMap = [
        'title_left',
        'title_center',
        'title_right',
        'subtitle_left',
        'subtitle_center',
        'subtitle_right',
        'image_left',
        'image_center',
        'image_right',
        'content_left',
        'content_center',
        'content_right',
    ];
    parseInfoEntry(value) {
        const match = value.match(/^(\d+)@(.+)$/);
        if (!match)
            return null;
        const index = Number(match[1]);
        const prefix = this.entryMap[index];
        if (!prefix)
            return null;
        const [category, position] = prefix.split('_');
        return {
            category: category,
            position: position,
            content: match[2],
        };
    }
    getImageUrl(fileName) {
        // 目前先把info_feature_p99.jpg當作特殊案例
        if (fileName === 'info_feature_p99.jpg') {
            return this.assetUrl + '/' + fileName;
        }
        return this.assetUrl + '/en/' + fileName;
    }
    static ɵfac = function InfoCtrlService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InfoCtrlService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InfoCtrlService, factory: InfoCtrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoCtrlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=info-ctrl.service.js.map