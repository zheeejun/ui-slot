import { inject, Injectable, signal } from '@angular/core';
import Decimal from 'decimal.js';
import { catchError, firstValueFrom, map, of, Subject, timeout } from 'rxjs';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { HistoryCampaignDetail, HistoryCashDropDetail, HistoryListItem, HistoryRewardType, HistorySpinDetail, IHistoryResponse } from './history-list.interface';
import { offlineHistoryCashList, offlineHistoryBonusList } from './history-list.item';
import { calc, dec } from '../player-wallet/player-wallet.function';
import { HistoryResponseType, IServerHistoryCampaignDetailResponse, IServerHistoryCashDropDetailResponse, IServerHistoryItem, IServerHistoryResponse, IServerHistorySpinDetailResponse } from './history-server.interface';
import { safeParse } from '../../shared/Protobuf/proto-base';
import { timer } from 'rxjs';
import { ClientSessionService } from '../client-session/client-session.service';
import { serverHistoryCampaignDetailResponse, serverHistoryCashDropDetailResponse, serverHistorySpinDetailResponse } from './history-server.response';
import { serverProto } from '../../shared/Protobuf/new_proto';
import { HistoryDetailStyleType } from './history-detail-style.type';
import { TicketMessageResponse } from '../history-replay/history-replay.interface';
import { ApWebHistoryDetailSessionKey } from '../../../chiikawa/ApWeb/ApWebInterface';
import { HistoryWinLoseFilter } from '../../components/ap-history-list/ap-history-list.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryCtrlService {
  private api = inject(AppInterfaceService)
  private session = inject(ClientSessionService);
  private locale = this.session.locale;

  /** 控制 share 按鈕顯示 */
  public forceShareDisplayed = signal<boolean>(false);
  /** 控制 replay 按鈕顯示 */
  public forceReplayDisplayed = signal<boolean>(false);
  /** 控制 history detail 呈現版本 */
  public historyDetailStyle = signal<HistoryDetailStyleType>('default');
  /** 交易類型對應的獎勵類型 */
  rewardTypeMap: Record<string, HistoryRewardType> = {
    'C': 'Normal Game',
    'B': 'Bonus Wallet',
    'CTP': 'Bonus Withdraw',
    'CTD': 'CashDrop Reward',
    'BTP': 'Bonus Withdraw',
    'BRS': 'Bonus Withdraw',
    'BTD': 'Bonus Withdraw',
    'TournamentWinTicket': 'Tournament Reward'
  };

  private spinDetailSubject = new Subject<HistorySpinDetail>();
  /** SpinDetail訂閱接口 @example: historyCtrl.spinDetail$.subscribe((event) => { ... }); */
  public get spinDetail$() { return this.spinDetailSubject.asObservable(); }
  private campaignDetailSubject = new Subject<HistoryCampaignDetail>();
  /** CampaignDetail訂閱接口 @example: historyCtrl.campaignDetail$.subscribe((event) => { ... }); */
  public get campaignDetail$() { return this.campaignDetailSubject.asObservable(); }
  private cashDropDetailSubject = new Subject<HistoryCashDropDetail>();
  /** CashDropDetail訂閱接口 @example: historyCtrl.cashDropDetail$.subscribe((event) => { ... }); */
  public get cashDropDetail$() { return this.cashDropDetailSubject.asObservable(); }
  /** HistoryList訂閱接口 @example: historyCtrl.historyList$.subscribe((event) => { ... }); */
  private historyListSubject = new Subject<IHistoryResponse>();
  /** HistoryList訂閱接口 @example: historyCtrl.historyList$.subscribe((event) => { ... }); */
  public get historyList$() { return this.historyListSubject.asObservable(); }

  /** 當前歷史詳情的投注金額 */
  private detailBet = 0;
  /** 當前歷史詳情的贏取金額 */
  private detailWin = 0;
  constructor() {
    // 監聽來自 AppInterfaceService 的 historyResult$，當有新的歷史資料時觸發
    this.api.historyResult$.subscribe(this.processHistoryResponse.bind(this));
  }

  /** 格式化日期為服務器需要的格式 'YYYY/MM/DD HH:mm:ss' */
  private formatDateTimeForServer(d: Date): string {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  }

  /** 獲取遊戲的歷史列表
   * @param filter 篩選條件: 'W'=win, 'L'=lose, 'A'=all
   * @param startDate 起始時間 (格式: 'YYYY/MM/DD HH:mm:ss')
   * @param endDate 結束時間 (格式: 'YYYY/MM/DD HH:mm:ss')
   * @param firstIndex 資料起點 (分頁用)
   * @param count 取出筆數
   */
  public async getCashHistoryList(
    filter: HistoryWinLoseFilter = 'winlose',
    startDate?: Date,
    endDate?: Date,
    firstIndex: number = 0,
    count: number = 20
  ): Promise<IHistoryResponse> {
    if (this.api.isOffline) {
      await firstValueFrom(timer(500));
      let result = [...offlineHistoryCashList];
      if (filter === 'win') result = result.filter(item => item.isWin);
      else if (filter === 'lose') result = result.filter(item => !item.isWin);
      const items = result.slice(firstIndex, firstIndex + count);
      return {
        items,
        total_count: result.length,
        total_bet: items.reduce((sum, item) => sum + item.bet, 0),
        total_win: items.reduce((sum, item) => sum + item.win, 0),
      };
    }

    const startDateStr = startDate ? this.formatDateTimeForServer(startDate) : '';
    const endDateStr = endDate ? this.formatDateTimeForServer(endDate) : '';
    const filterString = filter === 'win' ? 'W' : filter === 'lose' ? 'L' : 'A';

    const msg = `${filterString},${startDateStr},${endDateStr},${firstIndex},${count},C`;
    this.api.sendInfoMsgNostringify('History', msg);

    return firstValueFrom(
      this.api.historyResult$.pipe(
        map((response: any) => this.parseFullHistoryResponse(response)),
        timeout(10000),
        catchError(() => of({ items: [], total_count: 0, total_bet: 0, total_win: 0 }))
      )
    );
  }

  /** 獲取遊戲的 Bonus 歷史列表
   * @param filter 篩選條件: 'W'=win, 'L'=lose, 'A'=all
   * @param startDate 起始時間 (格式: 'YYYY/MM/DD HH:mm:ss')
   * @param endDate 結束時間 (格式: 'YYYY/MM/DD HH:mm:ss')
   * @param firstIndex 資料起點 (分頁用)
   * @param count 取出筆數
   */
  public async getBonusHistoryList(
    filter: HistoryWinLoseFilter,
    startDate?: Date,
    endDate?: Date,
    firstIndex: number = 0,
    count: number = 20
  ): Promise<IHistoryResponse> {
    if (this.api.isOffline) {
      await firstValueFrom(timer(500));
      let result = [...offlineHistoryBonusList];
      if (filter === 'win') result = result.filter(item => item.isWin);
      else if (filter === 'lose') result = result.filter(item => !item.isWin);
      const items = result.slice(firstIndex, firstIndex + count);
      return {
        items,
        total_count: result.length,
        total_bet: items.reduce((sum, item) => sum + item.bet, 0),
        total_win: items.reduce((sum, item) => sum + item.win, 0),
      };
    }

    const startDateStr = startDate ? this.formatDateTimeForServer(startDate) : '';
    const endDateStr = endDate ? this.formatDateTimeForServer(endDate) : '';

    const filterString = filter === 'win' ? 'W' : filter === 'lose' ? 'L' : 'A';
    const msg = `${filterString},${startDateStr},${endDateStr},${firstIndex},${count},B`;
    this.api.sendInfoMsgNostringify('History', msg);

    return firstValueFrom(
      this.api.historyResult$.pipe(
        map((response: any) => this.parseFullHistoryResponse(response)),
        timeout(10000),
        catchError(() => of({ items: [], total_count: 0, total_bet: 0, total_win: 0 }))
      )
    );
  }

  /** 獲取本地今天的日期範圍（00:00:00 到 隔日 00:00:00）是要傳給服務器使用所以要轉成 GMT+00 時區的時間
   * @example (GMT+8) 會傳出 {from: 2026/04/09 16:00:00 , to: 2026/04/10 16:00:00}
  */
  public getTodayRange(): { from: Date, to: Date } {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;

    const localFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    // 因為是到隔日的 00:00:00，所以 to 的時間要加一天
    const localTo = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);

    const from = new Date(localFrom.getTime() + offsetMs);
    const to = new Date(localTo.getTime() + offsetMs);

    return { from, to };
  }

  /** 將本地時間範圍換為 GMT+00 時區的時間
   * @example (GMT+8) 從日曆選擇 2026/04/09 到 2026/04/09 會傳出 {from: 2026/04/08 16:00:00 , to: 2026/04/09 16:00:00}
   */
  public getUtcDateRange(from: Date, to: Date): { from: Date, to: Date } {
    const utcFrom = from;
    // 因為是到隔日的 00:00:00，所以 to 的時間要加一天
    const utcTo = new Date(to.getTime());
    utcTo.setDate(utcTo.getDate() + 1);

    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const fromWithOffset = new Date(utcFrom.getTime() + offsetMs);
    const toWithOffset = new Date(utcTo.getTime() + offsetMs);
    return { from: fromWithOffset, to: toWithOffset };
  }

  /** 獲取遊戲的歷史詳情 */
  public getHistoryDetail(item: HistoryListItem | null) {
    if (!item) return;

    if (this.api.isOffline) {
      // 先延遲一秒模擬API請求
      timer(1000).subscribe(() => {
        if (item.rewardType === 'Bonus Withdraw') {
          this.processHistoryResponse(serverHistoryCampaignDetailResponse)
        }
        else if (item.rewardType === 'CashDrop Reward') {
          this.processHistoryResponse(serverHistoryCashDropDetailResponse)
        }
        else {
          this.processHistoryResponse(serverHistorySpinDetailResponse)
        }
      });
      return;
    }
    this.detailBet = item.bet;
    this.detailWin = item.win;
    const msg = `${item.transaction},${item.type}`;
    this.api.sendInfoMsgNostringify('History', msg);
  }

  /** 解析 Server History 回應為 IHistoryResponse (包含 metadata) */
  private parseFullHistoryResponse(response: IServerHistoryResponse | string): IHistoryResponse {
    const parsed: IServerHistoryResponse = typeof response === 'string'
      ? safeParse(response)
      : response;
    if (!parsed) return { items: [], total_count: 0, total_bet: 0, total_win: 0 };

    const total_count = parsed.total_count || 0;
    const total_bet = calc.s2c(parsed.total_bet) || 0;
    const total_win = calc.s2c(parsed.total_win) || 0;
    const items = this.parseHistoryResponse(parsed);
    const list = { items, total_count, total_bet, total_win };

    this.historyListSubject.next(list);

    return list;
  }

  /** 解析 Server History 回應為 HistoryListItem[] */
  private parseHistoryResponse(response: IServerHistoryResponse | string): HistoryListItem[] {
    const parsed: IServerHistoryResponse = typeof response === 'string'
      ? safeParse(response)
      : response;
    if (!parsed) return [];

    const items: IServerHistoryItem[] = Array.isArray(parsed)
      ? parsed
      : (parsed.data || []);

    return items.map((item: IServerHistoryItem): HistoryListItem => {
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
      const date = localTime.toLocaleDateString(this.locale);
      const time = localTime.toLocaleTimeString(this.locale, { hour12: false });
      const isCampaignReward = item.type === 'CTP' || item.type === 'BTP' || item.type === 'BRS' || item.type === 'BTD';
      const isCashDropReward = item.type === 'CTD';

      return {
        transaction: item.ticket || '',
        type: item.type,
        date,
        time,
        bet: calc.s2c(betValue),
        win: calc.s2c(winValue),
        replay: item.replay || false,
        currency: this.api.currencySymbol() || '$',
        isWin: winValue > 0,
        maxPayout: this.isMaxPayout(item.max_payout, winValue),
        featureType: item.fg === '1' ? 'bf1' : item.bg === '1' ? 'bf2' : undefined,
        isStarred: item.fg === '1' || item.bg === '1',
        isTrophy: item.tournament === '1',
        isTrnHighlight: isTrnHighlight,
        isCampaignHighlight: isCampaignReward,
        isCashDropHighlight: isCashDropReward,
        rewardType: rewardType,
        buyFeatureMode: item.mode || '',
        isDoubleChance: item.mode.startsWith('dc'),
        isBuyFeature: item.mode.startsWith('bf'),
      };
    });
  }
  /** 最大下注額 */
  private isMaxPayout(maxPayout: string | undefined, winValue: number): boolean {
    const value = (maxPayout || '').trim().toLowerCase();
    if (!value) return false;
    if (['true', 'yes', 'y'].includes(value)) return true;
    if (['false', 'no', 'n'].includes(value)) return false;

    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) return false;
    if (numericValue === 1) return true;
    if (numericValue === 0) return false;

    return calc.s2c(numericValue) === calc.s2c(winValue);
  }

  protected processHistoryResponse(response: HistoryResponseType) {
    if (!response) return;

    // 把spin result存到session方辨遊戲可以畫出歷史紀錄
    if ('result' in response) {
      this.saveSpinResultToStorage(response as IServerHistorySpinDetailResponse);
    }

    if ('info' in response) {
      this.processHistoryDetailResponse(response);
    }
  }

  /** 處理 History Detail 回應 */
  processHistoryDetailResponse(response: HistoryResponseType) {
    if (!response) return;
    if (!('info' in response)) return;

    const type = response.info.type;
    if (type === 'C' || type === 'B' || type === 'BRS' || type === 'CRS') {
      const r = response as IServerHistorySpinDetailResponse;
      const spinResult = r.result as serverProto.Ispin_result;
      const sumWinScore = (round: serverProto.Iround_data | null | undefined): number =>
        (round?.plate ?? []).reduce((sum, plate) => new Decimal(sum).plus(Number(plate.win_score ?? 0)).toNumber(), 0);
      // 0: spinResult.main_game.plate foreach sum of win_score
      // 1~X: spinResult.free_game[i].plate foreach sum of win_score
      const winList: number[] = [
        calc.s2c(sumWinScore(spinResult.main_game)),
        ...(spinResult.free_game ?? []).map(round => calc.s2c(sumWinScore(round))),
      ];
      // balanceList[i] = balance after round i
      // afterBalance = balance after last round, work backwards
      const afterBalance = calc.s2c(r.info.after_balance);
      const balanceList: number[] = winList.map((_, i) => {
        const winsAfter = winList.slice(i + 1).reduce((s, w) => new Decimal(s).plus(w).toNumber(), 0);
        return new Decimal(afterBalance).minus(winsAfter).toNumber();
      });

      this.spinDetailSubject.next({
        beforeBalance: calc.s2c(r.info.before_balance),
        afterBalance: calc.s2c(r.info.after_balance),
        winList,
        balanceList,
        result: r.result,
        seed: r.seed
      });
    }
    else if (type === 'CTD') {
      const r = response as IServerHistoryCashDropDetailResponse;
      const toTs = (s: string) => new Date(s.replace(' ', 'T') + 'Z').getTime();
      const mainPrize = calc.s2c(r.transfer.main_prize);
      const mysteryPrize = calc.s2c(r.transfer.mystery_prize);
      const totalWin = mainPrize + mysteryPrize;
      const afterBalance = calc.s2c(r.transfer.after_balance);
      const beforeBalance = afterBalance - mainPrize - mysteryPrize;
      this.cashDropDetailSubject.next({
        beforeBalance,
        afterBalance,
        mainPrize,
        mysteryPrize,
        totalWin,
        runningTime: toTs(r.transfer.running_time),
        settledTime: toTs(r.transfer.settled_time),
      });
    }
    else if (type === 'CTP' || type === 'BTP' || type === 'BTD') {
      const r = response as IServerHistoryCampaignDetailResponse;
      const toTs = (s: string) => new Date(s.replace(' ', 'T') + 'Z').getTime();
      this.campaignDetailSubject.next({
        name: r.transfer.name,
        amount: calc.s2c(r.transfer.withdraw_amount),
        expiryDate: toTs(r.transfer.endtime),
        turnoverRequirement: calc.s2c(r.transfer.withdraw_turnover_limit),
        bonusBalance: calc.s2c(r.transfer.bw_balance),
        maxWithdraw: calc.s2c(r.transfer.withdraw_upper_limit),
        minWithdraw: calc.s2c(r.transfer.withdraw_lower_limit),
      });
    }
  }

  saveSpinResultToStorage(response: IServerHistorySpinDetailResponse) {
    const data: TicketMessageResponse = {
      // 歷史紀錄的amountRatio計算方法不一樣, 是login來的值的倒數, 所以要用1除以calc.amountRatio
      AmountRatio: new Decimal(1).dividedBy(calc.amountRatio).toString(),
      CurrencyCode: this.api.currencyCode() || '',
      CurrencySymbol: this.api.currencySymbol() || '',
      DecimalPlaces: dec.decimalPlaces.toString(),
      DisableComma: dec.disableComma ? '1' : '0',
      GameCode: this.session.gameId || '',
      GameMode: "",
      HistoryDetailData: response,
      HistoryTicketData: {
        time: "",
        ticket: "",
        fg: "",
        bg: "",
        jp: "",
        free: "",
        free_no: "",
        // 這邊是模擬伺服器送來的rawData，所以用calc.c2s
        bet: calc.c2s(this.detailBet),
        win: calc.c2s(this.detailWin),
        campaign_id: "",
        cd_amount: null,
        mode: ""
      },
      Platform: '',
      PlatformCode: '',
      SiteCode: '',
      Ts: '',
      X: '',
      Bg: '',
    }
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem(ApWebHistoryDetailSessionKey, jsonData);
  }
}
