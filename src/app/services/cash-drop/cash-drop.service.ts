import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { ICashDrop, ICashDropPage, ICashDropPrize, ICashDropWinner } from './cash-drop.interface';
import { CashDropResponseMsgType, CashDropWinnerListRequestMsgType, ICashDropPrizeListMsgRequest, ICashDropPrizeListMsgResponse, ICashDropRuleData, ICashDropRuleDataMsgRequest, ICashDropRuleDataMsgResponse, ICashDropLatestWinnerListMsgResponse, ICashDropBiggestWinnerListMsgResponse, ICashDropMostWinnerListMsgResponse, ICashDropYouWinListMsgResponse, ICashDropWinnerData } from './cash-drop-info-msg.interface';
import { eCashDropMessageType } from '../../../chiikawa/Promo/CashDrop/CashDropDataType';
import { CampaignLegacyNoteType, CampaignCashDropNoteType, PromoEnum } from '../campaign-ctrl/campaign-info-msg.interface';
import { environment } from '../../../environments/app-environment';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { LoginResult } from '../../shared/Protobuf/proto-ext';
import { calc } from '../player-wallet/player-wallet.function';
import { ClientSessionService } from '../client-session/client-session.service';
import { Subject } from 'rxjs';
import { PlayerWalletService } from '../player-wallet/player-wallet.service';
import { StorageCtrlService } from '../storage-ctrl/storage-ctrl.service';

@Injectable({
  providedIn: 'root'
})
export class CashDropService {
  private api = inject(AppInterfaceService);
  private session = inject(ClientSessionService);
  private storage = inject(StorageCtrlService);
  private wallet = inject(PlayerWalletService);
  /** 所有Cash Drop */
  private _cashDrops = signal<ICashDrop[]>([]); // 前端使用的Cash Drop
  /** 取得所有Cash Drop */
  public readonly cashDrops = this._cashDrops.asReadonly();
  /** 按照結束時間排序的Cash Drop, endTime越小越靠前 */
  public readonly cashDropsByEndTime = computed(() => {
    return [...this._cashDrops()].sort((a, b) => a.endTime - b.endTime);
  });
  /** 目前最快要結束的Cash Drop */
  public readonly focusCashDrop = computed<ICashDrop | null>(() => {
    // 首先選擇進行中的活動
    const now = Date.now();
    const ongoingCashDrops = this.cashDropsByEndTime().filter(cashDrop => cashDrop.beginTime <= now && cashDrop.endTime >= now);
    if (ongoingCashDrops.length > 0) {
      return ongoingCashDrops[0];
    }
    // 如果沒有進行中的活動，就選擇最前面的活動
    const cashDrops = this.cashDropsByEndTime();
    return cashDrops.length > 0 ? cashDrops[0] : null;
  });
  /** 目前最快要結束的Cash Drop的最小bet */
  public readonly focusCashDropMinBet = computed(() => {
    const focus = this.focusCashDrop();
    return focus ? focus.minBet : 0;
  });
  /** 是否超過最小投注額 */
  public isOverMinBet = computed(() => {// 沒有cash drop就不顯示
    const minBet = this.focusCashDropMinBet();
    const result =  minBet > 0 && this.wallet.bet() >= minBet;
    return result;
  });
  /** 是否顯示不符合投注額的Toast */
  public isShowFailToast = computed(() => {
    if (this.cashDrops().length === 0) return false;
    // focusCashDrop時間還沒到不顯示Toast
    const focus = this.focusCashDrop();    if (!focus) return false;
    const now = Date.now();
    if (focus.beginTime > now) return false;
    // 啟動campaign不能觸發cashdrop
    if (this.wallet.campaignSetting()) return false;
    return !this.isOverMinBet();
  });
  /** 是否顯示符合投注額的Toast */
  public isShowPassToast = computed(() => {
    if (this.cashDrops().length === 0) return false;
    // focusCashDrop時間還沒到不顯示Toast
    const focus = this.focusCashDrop();    if (!focus) return false;
    const now = Date.now();
    if (focus.beginTime > now) return false;
    // 啟動campaign不能觸發cashdrop
    if (this.wallet.campaignSetting()) return false;
    return this.isOverMinBet();
  });
  private prizeListSubject = new Subject<ICashDropPrize[]>();
  public prizeList$ = this.prizeListSubject.asObservable();

  private latestWinnersSubject = new Subject<ICashDropWinner[]>();
  public latestWinners$ = this.latestWinnersSubject.asObservable();

  private biggestWinnersSubject = new Subject<ICashDropWinner[]>();
  public biggestWinners$ = this.biggestWinnersSubject.asObservable();

  private mostWinnersSubject = new Subject<ICashDropWinner[]>();
  public mostWinners$ = this.mostWinnersSubject.asObservable();

  private youWinsSubject = new Subject<ICashDropWinner[]>();
  public youWins$ = this.youWinsSubject.asObservable();

  private ruleDataSubject = new Subject<ICashDropRuleData>();
  public ruleData$ = this.ruleDataSubject.asObservable();

  private userId = computed(() => this.api.loginResultNote()?.nickname ?? '');
  /** 搜尋storage.cashDropClicked是否有對應 userId_cashdropId 的紀錄 */
  public readonly hasNew = computed(() => {
    const allClicked = this.storage.cashDropClickedSignal() ?? [];
    return this.cashDrops().some(
      cd => !allClicked.includes(`${this.userId()}_${cd.id}`)
    );
  });
  constructor() {
    // 訂閱登入結果變化
    effect(() => {
      const result = this.api.loginResult();
      untracked( () => { this.updateLoginResult(result); } );
    });

    if (!environment.production) {
      (window as any).cashDrop = this; // 方便在開發環境調試
    }

    this.api.cashDropResult$.subscribe(this.processCashDropResult.bind(this));

  }

  /** 是否開啟cash drop的tab */
  public showTab = computed(() => {
    return this.cashDrops().length > 0;
  });

  protected updateLoginResult(result: LoginResult | null) {
    if (!result) return;
    this.updateCampaignList(result.note?.campaignlist ?? []);
  }

  /** 從Campaign List的資料更新Cash Drops */
  protected updateCampaignList(campaignList: CampaignLegacyNoteType[]) {
    // 不更新任何資料
    if (!campaignList || campaignList.length === 0) {
      return;
    }

    const cashDrops = campaignList.filter((campaign) => campaign.type === PromoEnum.CashDrop) as CampaignCashDropNoteType[];
    const formattedCashDrops: ICashDrop[] = cashDrops.map((cashDrop) => ({
      id: cashDrop.campaign_id,
      name: cashDrop.name,
      minBet: calc.s2c(cashDrop.min_bet_amount),
      beginTime: new Date(cashDrop.begintime.replace(' ', 'T') + 'Z').getTime(),
      endTime: new Date(cashDrop.endtime.replace(' ', 'T') + 'Z').getTime(),
      rawData: cashDrop
    }));

    // 檢查目前_cashDrops是否有重複的id, 有就取代, 沒有就新增
    this._cashDrops.update((current) => {
      for (const newCashDrop of formattedCashDrops) {
        const existingIndex = current.findIndex((c) => c.id === newCashDrop.id);
        if (existingIndex === -1) {
          // 新的ID就加入
          current.push(newCashDrop);
        } else {
          // 已存在的ID就取代
          current[existingIndex] = newCashDrop;
        }
      }
      return current;
    });
  }

  requestPageData(id: string) {
    const ruleDataRequest: ICashDropRuleDataMsgRequest = {
      campaign_id: id,
      currency: this.api.currencySymbol() || '',
      language: this.session.language || '',
    };
    const prizeListRequest: ICashDropPrizeListMsgRequest = {
      campaign_id: id,
      currency: this.api.currencySymbol() || '',
    };
    const winnerListRequest: CashDropWinnerListRequestMsgType = {
      campaign_id: id,
      currency: this.api.currencySymbol() || '',
      page: 1,
      row_count: 100,
    };
    this.api.getCashDropResult('PrizeList', prizeListRequest);
    this.api.getCashDropResult('RuleData', ruleDataRequest);
    this.api.getCashDropResult('LatestWinnerList', winnerListRequest);
    this.api.getCashDropResult('BiggestWinnerList', winnerListRequest);
    this.api.getCashDropResult('MostWinnerList', winnerListRequest);
    this.api.getCashDropResult('YouWinList', winnerListRequest);
  }


  processCashDropResult(message: CashDropResponseMsgType) {
    const mapWinners = (list: ReturnType<typeof Array.prototype.slice>) => list.map((w: ICashDropWinnerData, index: number) => ({
      isYou: w.is_you !== -1,
      index,
      player: w.player_id,
      prize: calc.s2c(w.prize_amount),
    }));

    switch (message.cd_type) {
      case eCashDropMessageType.eCDMT_cd_type_Prize_List: {
        const res = message as ICashDropPrizeListMsgResponse;
        this.prizeListSubject.next(res.prize_list.map((p, index) => ({
          index,
          prize: calc.s2c(p.prize_amount),
          left: p.prize_left,
        })));
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_Rule_Data: {
        const res = message as ICashDropRuleDataMsgResponse;
        // 把伺服器時間(ex:2026-06-25 09:45:44) 轉換為本地時間
        res.rule_data.begin_time = new Date(res.rule_data.begin_time.replace(' ', 'T') + 'Z').toLocaleString(this.session.locale, {hour12: false});
        res.rule_data.end_time = new Date(res.rule_data.end_time.replace(' ', 'T') + 'Z').toLocaleString(this.session.locale, {hour12: false});
        res.rule_data.min_bet_amount = calc.s2c(res.rule_data.min_bet_amount);
        res.rule_data.total_prizes_amount = calc.s2c(res.rule_data.total_prizes_amount);
        this.ruleDataSubject.next(res.rule_data);
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_Latest_Winner_List: {
        const res = message as ICashDropLatestWinnerListMsgResponse;
        this.latestWinnersSubject.next(mapWinners(res.winner_list));
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_Biggest_Winner_List: {
        const res = message as ICashDropBiggestWinnerListMsgResponse;
        this.biggestWinnersSubject.next(mapWinners(res.winner_list));
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_Most_Winner_List: {
        const res = message as ICashDropMostWinnerListMsgResponse;
        this.mostWinnersSubject.next(mapWinners(res.winner_list));
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_You_Win_List: {
        const res = message as ICashDropYouWinListMsgResponse;
        this.youWinsSubject.next(mapWinners(res.winner_list));
        break;
      }
    }
  }
}
