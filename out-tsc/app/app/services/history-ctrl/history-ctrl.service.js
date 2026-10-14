import { inject, Injectable, signal } from '@angular/core';
import { catchError, firstValueFrom, map, of, timeout } from 'rxjs';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { offlineHistoryCashList, offlineHistoryBonusList } from '../app-interface/history-list.response';
import { offlinehistoryDetail } from '../app-interface/history-detail.response';
import { calc } from '../user-profile/user-profile.function';
import { safeParse } from '../../library/Protobuf/proto-base';
import { timer } from 'rxjs';
import * as i0 from "@angular/core";
export class HistoryCtrlService {
    api = inject(AppInterfaceService);
    /** 控制 share 按鈕顯示 */
    forceShareDisplayed = signal(false);
    /** 控制 replay 按鈕顯示 */
    forceReplayDisplayed = signal(false);
    rewardTypeMap = {
        'C': 'Normal Game',
        'B': 'Bonus Wallet',
        'TournamentWinTicket': 'Tournament Reward'
    };
    /** 獲取遊戲的歷史列表
     * @param filter 篩選條件: 'W'=win, 'L'=lose, 'A'=all
     * @param startDate 起始時間 (格式: 'YYYY/MM/DD HH:mm:ss')
     * @param endDate 結束時間 (格式: 'YYYY/MM/DD HH:mm:ss')
     * @param firstIndex 資料起點 (分頁用)
     * @param count 取出筆數
     */
    async getCashHistoryList(filter = 'A', startDate, endDate, firstIndex = 0, count = 20) {
        if (this.api.isOffline) {
            await firstValueFrom(timer(500));
            let result = [...offlineHistoryCashList];
            if (filter === 'W')
                result = result.filter(item => item.isWin);
            else if (filter === 'L')
                result = result.filter(item => !item.isWin);
            const items = result.slice(firstIndex, firstIndex + count);
            return {
                items,
                total_count: result.length,
                total_bet: items.reduce((sum, item) => sum + item.betRaw, 0),
                total_win: items.reduce((sum, item) => sum + item.winRaw, 0),
            };
        }
        const msg = `${filter},${startDate},${endDate},${firstIndex},${count},C`;
        this.api.sendInfoMsgNostringify('History', msg);
        return firstValueFrom(this.api.historyResult$.pipe(map((response) => this.parseFullHistoryResponse(response)), timeout(10000), catchError(() => of({ items: [], total_count: 0, total_bet: 0, total_win: 0 }))));
    }
    /** 獲取遊戲的 Bonus 歷史列表
     * @param filter 篩選條件: 'W'=win, 'L'=lose, 'A'=all
     * @param startDate 起始時間 (格式: 'YYYY/MM/DD HH:mm:ss')
     * @param endDate 結束時間 (格式: 'YYYY/MM/DD HH:mm:ss')
     * @param firstIndex 資料起點 (分頁用)
     * @param count 取出筆數
     */
    async getBonusHistoryList(filter = 'A', startDate, endDate, firstIndex = 0, count = 20) {
        if (this.api.isOffline) {
            await firstValueFrom(timer(500));
            let result = [...offlineHistoryBonusList];
            if (filter === 'W')
                result = result.filter(item => item.isWin);
            else if (filter === 'L')
                result = result.filter(item => !item.isWin);
            const items = result.slice(firstIndex, firstIndex + count);
            return {
                items,
                total_count: result.length,
                total_bet: items.reduce((sum, item) => sum + item.betRaw, 0),
                total_win: items.reduce((sum, item) => sum + item.winRaw, 0),
            };
        }
        const msg = `${filter},${startDate},${endDate},${firstIndex},${count},B`;
        this.api.sendInfoMsgNostringify('History', msg);
        return firstValueFrom(this.api.historyResult$.pipe(map((response) => this.parseFullHistoryResponse(response)), timeout(10000), catchError(() => of({ items: [], total_count: 0, total_bet: 0, total_win: 0 }))));
    }
    /** 獲取遊戲的歷史詳情 */
    async getHistoryDetail(item) {
        await firstValueFrom(timer(1000));
        return Promise.resolve(offlinehistoryDetail);
    }
    /** 解析 Server History 回應為 IHistoryResponse (包含 metadata) */
    parseFullHistoryResponse(response) {
        const parsed = typeof response === 'string'
            ? safeParse(response)
            : response;
        if (!parsed)
            return { items: [], total_count: 0, total_bet: 0, total_win: 0 };
        const total_count = parsed.total_count || 0;
        const total_bet = parsed.total_bet || 0;
        const total_win = parsed.total_win || 0;
        const items = this.parseHistoryResponse(parsed);
        return { items, total_count, total_bet, total_win };
    }
    /** 解析 Server History 回應為 HistoryListItem[] */
    parseHistoryResponse(response) {
        const parsed = typeof response === 'string'
            ? safeParse(response)
            : response;
        if (!parsed)
            return [];
        const items = Array.isArray(parsed)
            ? parsed
            : (parsed.data || []);
        return items.map((item) => {
            const betValue = item.bet || 0;
            const winValue = item.win || 0;
            const rewardType = this.rewardTypeMap[item.type] || 'Normal Game';
            // Tournament Reward 加上黃色高亮
            const isTrnHighlight = rewardType === 'Tournament Reward';
            // 1. 將伺服器時間字串格式化為 ISO 8601 UTC 格式
            const utcDateString = item.time.replace(' ', 'T') + 'Z';
            // 2. 建立 Date 物件，此時它會正確解析為 UTC 時間
            const localTime = new Date(utcDateString);
            // 3. 使用 toLocaleDateString 和 toLocaleTimeString 取得本地時間的日期和時間
            const date = localTime.toLocaleDateString();
            const time = localTime.toLocaleTimeString([], { hour12: false });
            return {
                transaction: item.ticket || '',
                date,
                time,
                bet: calc.s2c(betValue).toFixed(3),
                betRaw: betValue,
                win: calc.s2c(winValue).toFixed(3),
                winRaw: winValue,
                replay: item.replay || false,
                currency: '$',
                isWin: winValue > 0,
                featureType: item.fg === '1' ? 'bf1' : item.bg === '1' ? 'bf2' : undefined,
                isStarred: item.fg === '1' || item.bg === '1',
                isTrophy: item.tournament !== '0',
                isTrnHighlight: isTrnHighlight,
                rewardType: rewardType,
            };
        });
    }
    static ɵfac = function HistoryCtrlService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistoryCtrlService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HistoryCtrlService, factory: HistoryCtrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryCtrlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=history-ctrl.service.js.map