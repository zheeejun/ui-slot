import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { firstValueFrom, interval, Subject, Subscription, timer } from 'rxjs';
import { TrnCtrlStatus, TrnData, TrnRoomMatching, TrnRoomReady, TrnRaceUpdated, TrnDebugSignalKey, TrnPrizeNotification, TrnTierDetailItem, TrnLeaderBoard, TrnPlayerHistory, TrnQueueUpdated } from './trn-ctrl.interface';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { LoginResult } from '../../shared/Protobuf/proto-ext';
import { createApRowListByPlayerList, createApRowListByRankings, createPrizeNotification, createTrnBetList, formatTrnLogin, updateApRowListByRankings } from './trn-ctrl.function';
import { RoomStateType, TrnActionType,  TrnEventListRequest,  TrnEventListResponse,  TrnEventRankingRequest,  TrnEventRankingResponse,  TrnJoinMatchRequest, TrnJoinMatchResponse, TrnBaseItem, TrnLoginRoomStatus, TrnPrizeAck, TrnPrizeAwardResponse, TrnResponseMsgType, TrnRoomCreatedResponse, TrnRoomPlayerJoinedResponse, TrnRoomReadyResponse, TrnRoomStateResponse, TrnEventLeaderboardRequest, TrnEventLeaderboardResponse, TrnPlayerHistoryRequest, TrnPlayerHistoryResponse, TrnPlayerHistoryResponseItem, TrnEventRefreshResponse, TrnCancelMatchRequest, TrnCancelMatchResponse, TrnQueueUpdatedResponse, TrnQueueHeartbeatRequest, TrnQueuePlayerRemovedResponse, TrnQueueWaitingResponse } from './trn-info-msg.interface';
import { environment } from '../../../environments/app-environment';
import { ApRowListItem } from '../../components/ap-trn-list-row/ap-trn-list-row.interface';
import { TrnPageType } from '../../pages/trn-all/trn-all.interface';
import { calc } from '../player-wallet/player-wallet.function';
import { PlayerWalletService } from '../player-wallet/player-wallet.service';
import { BetDataTournamentInterface } from '../../../chiikawa/ApWeb/ApWebInterface';
import { ClientSessionService } from '../client-session/client-session.service';
import { LoggerService } from '../logger/logger.service';
import { safeParse } from '../../shared/Protobuf/proto-base';
import { StorageCtrlService } from '../storage-ctrl/storage-ctrl.service';

@Injectable({
  providedIn: 'root'
})
export class TrnCtrlService {
  /** 目前TRN狀態 */
  private _status = signal<TrnCtrlStatus>('idle');
  /** 目前TRN狀態 */
  public readonly status = this._status.asReadonly();

  /** 目前所有Trn資料 */
  private _trnList = signal<TrnData[]>([]);
  /** 目前所有Trn資料 */
  public readonly trnList = this._trnList.asReadonly();
  /** 所有需要通知的獎項 */
  private _prizeNotificationList = signal<TrnPrizeNotification[]>([]);
  /** 所有需要通知的獎項 */
  public readonly prizeNotificationList = this._prizeNotificationList.asReadonly();


  /** 目前正在投注的TrnId (用來判斷betData) */
  private _betDataTrnId = signal<string | null>(null);
  /** 目前正在投注的TrnId (用來判斷betData) */
  public readonly betDataTrnId = this._betDataTrnId.asReadonly();
  /** 目前運行的房間ID */
  private _roomId = signal<string | null>(null);
  /** 目前運行的房間ID */
  public readonly roomId = this._roomId.asReadonly();
  /** 房間心跳間隔 (秒) */
  protected roomHeartbeatInterval = signal<number | null>(null);
  /** 排隊心跳計時器 */
  private heartbeatSubscription: Subscription | null = null;

  private notifyQueueCreatedSubject = new Subject<TrnQueueUpdated>();
  /** 有玩家加入排隊 */
  public get notifyQueueCreated$() { return this.notifyQueueCreatedSubject.asObservable();}
  private notifyQueueUpdatedSubject = new Subject<TrnQueueUpdated>();
  /** 排隊狀態更新 */
  public get notifyQueueUpdated$() { return this.notifyQueueUpdatedSubject.asObservable();}

  /** 正在配對, 房間狀態更新 */
  private roomMatchingSubject = new Subject<TrnRoomMatching>();
  /** 正在配對, 房間狀態更新 */
  public get roomMatching$() { return this.roomMatchingSubject.asObservable();}
  /** 房間準備完成 */
  private roomReadySubject = new Subject<TrnRoomReady>();
  /** 房間準備完成 */
  public get roomReady$() { return this.roomReadySubject.asObservable();}
  /** 房間狀態更新 */
  private roomUpdatedSubject = new Subject<TrnRaceUpdated>();
  /** 房間狀態更新 */
  public get roomUpdated$() { return this.roomUpdatedSubject.asObservable();}
  /** 競賽結束 */
  private roomEndingSubject = new Subject<TrnRaceUpdated>();
  /** 競賽結束 */
  public get roomEnding$() { return this.roomEndingSubject.asObservable();}
  /** 統計結束 */
  //private roomEndedSubject = new Subject<TrnRaceUpdated>();
  /** 統計結束 */
  //public get roomEnded$() { return this.roomEndedSubject.asObservable();}
  /** 正在取消配對 */
  private roomCancellingSubject = new Subject<void>();
  /** 正在取消配對 */
  public get roomCancelling$() { return this.roomCancellingSubject.asObservable();}
  /** 取消配對 */
  private roomCancelledSubject = new Subject<void>();
  /** 取消配對 */
  public get roomCancelled$() { return this.roomCancelledSubject.asObservable();}

  /** 獎項通知 */
  private prizeNotificationSubject = new Subject<TrnPrizeNotification>();
  /** 獎項通知 */
  public get prizeNotification$() { return this.prizeNotificationSubject.asObservable();}

  /** Event競賽準備完成 */
  private eventRaceReadySubject = new Subject<TrnRaceUpdated>();
  /** Event競賽準備完成 */
  public get eventRaceReady$() { return this.eventRaceReadySubject.asObservable();}
  /** Event競賽狀態更新 */
  private eventRaceUpdatedSubject = new Subject<TrnRaceUpdated>();
  /** Event競賽狀態更新 */
  public get eventRaceUpdated$() { return this.eventRaceUpdatedSubject.asObservable();}
  /** Event競賽結束 */
  private eventRaceEndedSubject = new Subject<void>();
  /** Event競賽結束 */
  public get eventRaceEnded$() { return this.eventRaceEndedSubject.asObservable();}
  /** 活動賽事排行榜頁面 */
  private eventLeaderboardSubject = new Subject<TrnLeaderBoard>();
  /** 活動賽事排行更新 */
  public get eventLeaderboard$() { return this.eventLeaderboardSubject.asObservable();}
  /** 活動賽事排名更新 */
  eventRankingSubject = new Subject<TrnRaceUpdated>();
  /** 活動賽事排名更新 */
  eventRanking$ = this.eventRankingSubject.asObservable();

  /** 活動賽事更新通知 */
  private eventRefreshSubject = new Subject<TrnEventRefreshResponse>();
  /** 活動賽事更新通知 */
  public get eventRefresh$() { return this.eventRefreshSubject.asObservable();}

  /** 發生錯誤 */
  private errorSubject = new Subject<any>();
  /** 發生錯誤 */
  public get error$() { return this.errorSubject.asObservable();}



  /** 玩家歷史紀錄 */
  private playerHistorySubject = new Subject<TrnPlayerHistory>();
  /** 玩家歷史紀錄 */
  public get playerHistory$() { return this.playerHistorySubject.asObservable();}

  /** Debug Panel用: 強制觸發Signal */
  private debugSignalSubject = new Subject<TrnDebugSignalKey>();
  /** Debug Panel用: 強制觸發Signal */
  public get debugSignal$() { return this.debugSignalSubject.asObservable();}
  /** Debug Panel用: 強制切換頁面 */
  private debugPageSubject = new Subject<TrnPageType>();
  /** Debug Panel用: 強制切換頁面 */
  public get debugPage$() { return this.debugPageSubject.asObservable();}
  /** Debug Panel用: 強制開啟 */
  public readonly debugForceEnable = signal(false);

  /** 玩家的貨幣代號 */
  private currency: string = '';
  /** 玩家暱稱 */
  private nickname: string = '';
  /** 玩家帳號 */
  private account: string = '';
  /** 玩家的貨幣符號 */
  private _currencySymbol = signal<string>('$');
  /** 玩家的貨幣符號 */
  public get currencySymbol() { return this._currencySymbol.asReadonly(); }
  /** 參考由wallet.bet()產生出來的目前的Tier */
  public readonly currentTier = computed<TrnTierDetailItem | null>(() => {
    const bet = this.wallet.bet();
    const trn = this.trnQuick();
    if (!trn) return null;
    return trn.tiers.find((tier) => {
      return (tier.maxStakeAmount === null || bet <= tier.maxStakeAmount) && (tier.minStakeAmount === null || bet >= tier.minStakeAmount);
    }) || null;
  });


  // Room相關參數 (Quick使用)
  /** Room開始時間 Unix timestamp，單位為毫秒 */
  readonly matchingStartTime = signal<number | null>(null);
  /** Room結束時間 Unix timestamp，單位為毫秒 */
  readonly roomEndTime = signal<number | null>(null);
  /** Room的玩家數量 */
  readonly roomCurrentPlayers = signal<number>(1);
  /** Room正在玩的玩家列表 */
  readonly roomPlayerList = signal<ApRowListItem[]>([]);
  /** Room總獎金 */
  readonly roomPrize = signal<number | null>(null);
  /** Room玩家排名 */
  readonly roomRank = signal<number | null>(null);
  /** Room玩家階級 */
  readonly roomTier = signal<TrnTierDetailItem | null>(null);
  /** Room最大玩家數量 */
  readonly roomMaxPlayers = computed<number | null>(() => {
    const trn = this.trnQuick(); return trn ? trn.maxPlayers : null;
  });

  /** 全部長期賽事各階段排名快取 */
  protected allEventCachedData = signal<Record<string, TrnRaceUpdated>>({});
  /** 全部長期競賽參與狀態 */
  protected allEventPlayerJoined = signal<Record<string, boolean>>({});

  /** 當下開啟的長期賽事結束時間 Unix timestamp，單位為毫秒 */
  readonly eventEndedTime = signal<number | null>(null);
  /** 當下開啟的長期賽事玩家列表 */
  readonly eventPlayerList = signal<ApRowListItem[]>([]);
  /** 當下開啟的長期賽事總獎金 */
  readonly eventPrize = signal<number | null>(null);
  /** 當下開啟的長期賽事玩家排名 */
  readonly eventRank = signal<number | null>(null);
  // inject 其他Service
  protected readonly api = inject(AppInterfaceService);
  protected readonly wallet = inject(PlayerWalletService);
  protected readonly session = inject(ClientSessionService);
  protected readonly logger = inject(LoggerService);
  protected readonly storage = inject(StorageCtrlService);
  /** 是否需要更新Trn列表 */
  protected readonly needUpdateTrnList = signal<boolean>(true);
  constructor() {
    // Debug: 將Service掛到window上方便測試
    if (environment.production === false) {
      (window as any).trn = this;
    }

    // 訂閱Trn相關訊息
    this.api.trn$.subscribe(this.onServerTrn.bind(this));

    // 初始化
    effect(() => {
      // 只追蹤這個，當loginResult變化時觸發，但updateLoginResult內部的讀取不被追蹤
      const loginResult = this.api.loginResult();
      untracked(() => this.updateLoginResult(loginResult));
    });

    // 如果campaign啟用，取消Trn的BetData
    effect(() => {
      if (this.wallet.campaignSetting()) {
        this.enableBetData(false);
      }
    });

    // 如果status是matching-quick, 就啟動心跳
    effect(() => {
      this.enabledHeartbeat(this.status() === 'matching-quick');
    });
  }

  /** 重置Quick房間相關的Signal */
  public closeQuickRoom() {
    this._betDataTrnId.set(null);
    this.enableBetData(false);

    this.matchingStartTime.set(null);

    this._roomId.set(null);
    this.roomEndTime.set(null);
    this.roomCurrentPlayers.set(1);
    this.roomPlayerList.set([]);
    this.roomRank.set(null);
    this.roomTier.set(null);
    this.roomPrize.set(null);

    this._status.set('idle');
  }

  /** 關閉長期賽事頁面 */
  public closeEventRace() {
    this._betDataTrnId.set(null);
    this.enableBetData(false);

    this.eventRaceEndedSubject.next();
    this.eventEndedTime.set(null);
    this.eventPlayerList.set([]);
    this.eventPrize.set(null);
    this.eventRank.set(null);

    this._status.set('idle');
  }

  /** 是否顯示主面板 */
  public showMainPanel = computed<boolean>(() => {
    if (this.debugForceEnable()) { return true; }
    // Trn主畫面啟動條件: 1. 沒有disable_tournament的  2. 有可進行的賽事
    return (this.trnRunningList() || []).length > 0 && this.api.loginResult()?.note?.disable_tournament !== true;
  });

  /** 是否要啟用Trn Component */
  public enabled = computed<boolean>(() => {
    // 當前啟動條件: 顯示主畫面或是有獎項通知沒看 
    return this.showMainPanel() || this.prizeNotificationList().length > 0;
  });

  /** 是否要顯示Trn tab */
  public showTab = computed<boolean>(() => {
    // Trn tab啟動條件: 1. 沒有disable_tournament的  2. 有任何狀態的賽事
    return (this.trnList() || []).length > 0 && this.api.loginResult()?.note?.disable_tournament !== true;
  });

  /** 快速賽事資料 */
  public trnQuick = computed<TrnData | null>(() => {
    return this.trnList().find(trn => trn.type === 'quick') || null;
  });

  /** 長期活動賽事資料 */
  public trnEventList = computed<TrnData[] | null>(() => {
    return this.trnList().filter(trn => trn.type === 'event') || null;
  });

  /** 正在運行的長期活動賽事 */
  public trnEventRunningList = computed<TrnData[] | null>(() => {
    return this.trnEventList()?.filter(trn => trn.status === 'running') || null;
  });

  /** 所有正在運行的賽事 */
  public trnRunningList = computed<TrnData[] | null>(() => {
    return this.trnList()?.filter(trn => trn.status === 'running') || null;
  });

  /** 目前的活動下注倍率 */
  public betDataMultiplier = computed<number>(() => {
    const trnId = this._betDataTrnId();
    if (!trnId) return 0;
    const trnData = this._trnList().find(trn => trn.id === trnId);
    return trnData?.betMultiplier || 1;
  });

  /** 目前正在運行的下注倍率  */
  public currentBetMultiplier = computed<number>(() => {
    return this.betDataEnabled() ? this.betDataMultiplier() : 1;
  });

  /** 目前的額外費用比例 */
  public betDataFeeRatio = computed<number>(() => {
    const trnId = this._betDataTrnId();
    if (!trnId) return 0;
    const trnData = this._trnList().find(trn => trn.id === trnId);
    return trnData?.feeRatio || 0;
  });

  /** 處理伺服器Info資訊 */
  protected onServerTrn(response: TrnResponseMsgType){
    // 有錯誤直接返回
    if (response.error) {
      this.processError(response.error);
      return;
    }
    
    // 判斷回傳的action
    if (response.action === 'tournament.event.list') {
      // 活動列表回應
      this.processEventList(response as TrnEventListResponse);
    }
    else if (response.action === 'tournament.event.join') {
      // 處理Find Match的回應
      this.processJoining(response as TrnJoinMatchResponse);
    }
    else if (response.action === 'tournament.room.ready') {
      // 遊戲準備好
      this.processRoomReady(response as TrnRoomReadyResponse);
    }
    else if (response.action === 'tournament.room.updated') {
      // 房間狀態更新
      this.processRoomStateUpdated(response as TrnRoomStateResponse);
    }
    else if (response.action === 'tournament.prize.awarded') {
      // 獎項通知
      this.processPrizeAwarded(response as TrnPrizeAwardResponse);
    }
    else if (response.action === 'tournament.event.ranking') {
      // 活動排名回應
      this.processEventRanking(response as TrnEventRankingResponse);
    }
    else if (response.action === 'tournament.event.leaderboard') {
      // 活動排行榜回應
      this.processEventLeaderboard(response as TrnEventLeaderboardResponse);
    }
    else if (response.action === 'tournament.events.refresh') {
      // 賽事更新通知
      this.processEventRefresh(response as TrnEventRefreshResponse);
    }
    else if (response.action === 'tournament.player.history') {
      // 玩家歷史紀錄回應
      this.processPlayerHistory(response as TrnPlayerHistoryResponse);
    }
    else if (response.action === 'tournament.event.cancel') {
      // 玩家取消配對回應
      this.processCancelJoin(response as TrnCancelMatchResponse);
    }
    else if (response.action === 'tournament.queue.updated') {
      // 排隊狀態更新
      this.processQueueUpdated(response as TrnQueueUpdatedResponse);
    }
    else if (response.action === 'tournament.queue.player_removed') {
      // 玩家被移出排隊
      this.processQueuePlayerRemoved(response as TrnQueuePlayerRemovedResponse);
    }
    else if (response.action === 'tournament.queue.waiting') {
      // 排隊等待狀態
      this.processTrnQueueWaiting(response as TrnQueueWaitingResponse);
    }
  }

  /** 處理登入結果資訊 */
  protected updateLoginResult(result: LoginResult | null){
    if (!result) return;
    if (result.note?.nickname)
      this.nickname = result.note.nickname;
    if (result.note?.currency)
      this.currency = result.note.currency;
    if (result.note?.uid)
      this.account = result.note.uid;
    if (result.note?.currency_symbol)
      this._currencySymbol.set(result.note.currency_symbol);

    const list: TrnData[] = [];
    const prizeList: TrnPrizeNotification[] = [];
    // 處理需要回覆狀態的資料
    result.note?.tournament?.forEach((trnItem: TrnBaseItem) => {
      const trnData: TrnData = formatTrnLogin(trnItem, this.session.language, this.account);
      list.push(trnData);
        
      // 處理Quick重連, 有room狀態表示 玩家已經在比賽中 處理斷線重連
      const reconnectStatus = ['matching', 'playing'];
      if (trnData.type === 'quick' && reconnectStatus.includes(trnItem.player_status?.room_status as TrnLoginRoomStatus)) {
        if (trnItem.player_status?.room_status === 'matching') {
          this._status.set('matching-quick');
          //this.enableBetListLimit(true);
        }
        else if (trnItem.player_status?.room_status === 'playing') {
          this._status.set('playing-quick');
          //this.enableBetData(true);
        }
        // 恢復各項Room參數
        this._betDataTrnId.set(trnData.id);
        this._roomId.set(trnItem.player_status?.room_id || null);

        this.roomEndTime.set(trnItem.player_status?.room_end_time || null);
        this.roomTier.set(trnData.tiers.find(tier => tier.id === trnItem.player_status?.tier_id) || null);
        this.roomCurrentPlayers.set(trnItem.player_status?.current_players || 0);
        this.roomPrize.set(calc.s2c(trnItem.player_status?.total_pool_amount || 0) * trnData.exchangeRate || null);
        const rankings: ApRowListItem[] = createApRowListByPlayerList(trnItem.player_status?.players || [], this.account);
        this.roomPlayerList.set(updateApRowListByRankings(rankings, trnItem.player_status?.room_rankings || [], trnData.exchangeRate));
      }

      // 處理Event參與狀態
      if (trnData.type === 'event') {
        const isJoined: boolean = trnItem.player_status? true: false;
        this.allEventPlayerJoined.update((prev) => { return { ...prev, [trnData.id]: isJoined}});
        // 處理Event重連, stroge有對應的event id, 就切換到playing-event狀態
        if (trnData.id === this.storage.trnEventRunning?.id) {
          this._status.set('playing-event');
        }
      }

      // 處理獎項通知
      trnItem.prize_notifications?.forEach((notification) => {
        const prizeNotification: TrnPrizeNotification = createPrizeNotification(notification, this.account, trnData.exchangeRate);
        prizeNotification.type = trnData.type;
        prizeList.push(prizeNotification);
      });
    });    
    // 更新Trn資料
    this._trnList.set(list);

    // 更新獎項通知資料
    this._prizeNotificationList.set(prizeList);
  }

  /** 目前正在進行的比賽資料 */
  public betDataTrn = computed<TrnData | null>(() => {
    const trnId = this._betDataTrnId();
    if (!trnId) {
      return null;
    }
    return this.trnList().find(trn => trn.id === trnId) || null;
  });

  /** 如果需要就更新Trn列表 */
  public updateTrnListIfNeeded() {
    if (this.needUpdateTrnList()) {
      this.sendEventList();
      // 更新完就把旗標降下來
      this.needUpdateTrnList.set(false);
    }
  }

  /** 發送賽事列表請求 */
  public sendEventList(filterType: 'quick_match' | 'long_term' | string = ""): void {
    const request: TrnEventListRequest = {
      action: "tournament.event.list",
      payload: {
        filter_type: filterType,
        currency: this.currency,
        game_code: this.session.gameId?.toString() || '',
      }
    };
    this.api.sendInfoMsg('Tournament', request);
  }

  /** 發送快速配對請求 */
  public sendJoinQuick(): void {
    const request: TrnJoinMatchRequest = {
      action: "tournament.event.join",
      payload: {
        tournament_id: this.trnQuick()?.id || '',
        currency: this.currency,
        stake_amount: calc.c2s(this.wallet.bet()),
        nickname: this.nickname
      }
    };
    // 紀錄現在的Tier
    this.roomTier.set(this.currentTier());

    this.api.sendInfoMsg('Tournament', request);
    this._status.set('joining-quick');
  }

  public sendCancelJoinQuick(): void {
    const request: TrnCancelMatchRequest = {
      action: "tournament.event.cancel",
      payload: {}
    };
    this.api.sendInfoMsg('Tournament', request);
    this._status.set('canceling-quick');
    this.roomCancellingSubject.next();
  }

  /** 是否啟動按照heartbeatInterval的間隔發送心跳 */
  public enabledHeartbeat(enabled: boolean): void {
    this.heartbeatSubscription?.unsubscribe();
    this.heartbeatSubscription = null;

    if (!enabled) return;

    const intervalSeconds = this.roomHeartbeatInterval();
    if (!intervalSeconds) return;

    this.heartbeatSubscription = interval(intervalSeconds * 1000).subscribe(() => {
      const tournamentId = this._betDataTrnId();
      if (!tournamentId) return;
      const request: TrnQueueHeartbeatRequest = {
        action: 'tournament.queue.heartbeat',
        payload: { tournament_id: tournamentId }
      };
      this.api.sendInfoMsg('Tournament', request);
    });
  }

  /** 發送長期競賽加入請求 */
  public sendJoinEvent(eventId: string): void {
    const request: TrnJoinMatchRequest = {
      action: "tournament.event.join",
      payload: {
        tournament_id: eventId,
        currency: this.currency,
        stake_amount: calc.c2s(this.wallet.bet()),
        nickname: this.nickname
      }
    };
    this.api.sendInfoMsg('Tournament', request);
    this._status.set('joining-event');
  }

  /** 發送活動排名請求 */
  public sendEventRanking(eventId: string): void {
    const request: TrnEventRankingRequest = {
      action: "tournament.event.ranking",
      payload: {
        tournament_id: eventId
      }
    };
    this.api.sendInfoMsg('Tournament', request);
  }

  /** 詳細頁面的分頁排行榜 */
  public sendEvnetLeaderboard(eventId: string, page: number = 1, pageSize: number = 10): void {
    const request: TrnEventLeaderboardRequest = {
      action: "tournament.event.leaderboard",
      payload: {
        tournament_id: eventId,
        page: page,
        page_size: pageSize,
      }
    };
    this.api.sendInfoMsg('Tournament', request);
  }

  /** 請求獎項通知 */
  public sendPrizeRequest(): void {
    if (this.prizeNotificationList().length === 0) {
      return;
    }
    const notification = this.prizeNotificationList()[0];
    this.prizeNotificationSubject.next(notification);
  }

  /** 確認獎項通知 */
  public sendPrizeAck(id: string): void {
    const request: TrnPrizeAck = {
      action: "tournament.prize.ack",
      payload: { notification_id: id }
    }
    // 將對應的notification_id從列表中移除
    const updatedList = this.prizeNotificationList().filter(item => item.notificationId !== id);
    this._prizeNotificationList.set(updatedList);
    this.api.sendInfoMsg('Tournament', request);
  }

  public sendPlayerHistory(limit: number, offset: number): void {
    const request: TrnPlayerHistoryRequest = {
      action: "tournament.player.history",
      payload: {
        limit: limit,
        offset: offset
      }
    };
    this.api.sendInfoMsg('Tournament', request);
  }

  /** 執行自訂的Action */
  public sendCustomAction(action: TrnActionType): void {
    const request = {
      action: action
    };
    this.api.sendInfoMsg('Tournament', request);
  }


  /** 直接開啟長期賽事頁面 */
  public openEventRace(eventId: string) {
    // 如果還沒參加過長期賽事就先發送加入請求
    if (!this.allEventPlayerJoined()[eventId]) {
      this.sendJoinEvent(eventId);
      return;
    }

    // 先切到mathcing狀態等待排名
    this._betDataTrnId.set(eventId);
    this._status.set('matching-event');


    // 如果沒快取的排名資料就直接發送
    const cached = this.allEventCachedData()[eventId];
    if (!cached) {
      this.sendEventRanking(eventId);
      return;
    }

    // 有快取資料就開啟賽事頁面
    const data: TrnRaceUpdated = {
      id: eventId,
      rank: cached.rank,
      playersList: cached.playersList,
      currentPool: cached.currentPool
    };

    const endTime = this.trnEventList()?.find(trn => trn.id === eventId)?.endTime || null;
    this.eventEndedTime.set(endTime);
    this.eventPlayerList.set(data.playersList);
    this.eventPrize.set(data.currentPool);
    this.eventRank.set(data.rank);
    this.eventRaceReadySubject.next(data);
    this.enableBetData(true);
    this._status.set('playing-event');
  }

  /** 是否啟用 BetData, 會從wallet.trnSetting()取得 */
  betDataEnabled = computed<boolean>(() => {
    if (!this.wallet.trnSetting()) return false;
    const trnId = this._betDataTrnId();
    if (!trnId) return false;
    return this.wallet.trnSetting()?.id === trnId;
  });

  /** 暫時啟用/關閉 BetData, 維持betDataTrn()不變 */
  enableBetData(enable: boolean) {
    if (!enable) {
      this.wallet.trnSetting.set(null);
      this.enableBetListLimit(false);
      return;
    }

    this.enableBetListLimit(true);

    // 算出對應的TrnSetting
    const setting: BetDataTournamentInterface = {
      id: this.betDataTrn()?.id || '',
      roomId: this.roomId() || '',
      feeRatio: this.betDataFeeRatio(),
    }

    this.wallet.trnSetting.set( setting );
  }

  /** 是否啟用 BetList限制 */
  enableBetListLimit(enable: boolean) {
    if (!enable) {
      this.wallet.trnBetList.set(null);
      return;
    }

    // 如果目前是event賽事, 就不限制下注清單
    if (this.betDataTrn()?.type === 'event') {
      this.wallet.trnBetList.set(null);
      return;
    }

    //  參考roomTier的maxStakeAmount跟minStakeAmount, 從cashBetSet.betList過濾出可用的下注清單
    const betList = createTrnBetList(
      this.wallet.baseBetList(),
      this.roomTier()?.maxStakeAmount || null,
      this.roomTier()?.minStakeAmount || null,
    );
    if (betList.length === 0) {
      this.logger.warn('trn-ctrl.service: Tournament BetData: No available bet list for current tier.');
      return;
    }

    // 如果目前的bet不在可用清單中，調整到最接近的值
    if (betList.indexOf(this.wallet.bet()) === -1) {
      if (this.wallet.bet() < betList[0]) {
        this.wallet.updateBet(betList[0]);
      }
      if (this.wallet.bet() > betList[betList.length - 1]) {
        this.wallet.updateBet(betList[betList.length - 1]);
      }
    }

    this.wallet.trnBetList.set(betList);
  }

  /** 更新活動列表 */
  protected processEventList(response: TrnEventListResponse) {
    const list: TrnData[] = response.data.events.map( (item) => {
      return formatTrnLogin(item, this.session.language, this.account);
    });
    this._trnList.set(list);
  }

  /** 點擊Find Match之後 處理開始Matching的回應 */
  protected processJoining(response: TrnJoinMatchResponse) {
    const id = response.data.tournament_id;
    this._betDataTrnId.set(id);
    this.roomHeartbeatInterval.set(response.data.heartbeat_interval_seconds);
    // 現在的時間
    this.matchingStartTime.set(new Date().getTime());
    const isQuickMatch = this.trnQuick()?.id === id;
    if (isQuickMatch) { // 快速配對
      const data: TrnRoomMatching = {
        id: id,
      };
      this.enableBetListLimit(true);
      /** 因為server送來的順序有可能不同，所以要檢查狀態
       * 這次的狀況是server先送room.ready的訊息，讓前端切到playing-quick狀態，之後才送join的回應，如果不檢查狀態就會被切回matching-quick
       */
      if (this._status() !== 'playing-quick') {
        this.roomMatchingSubject.next(data);
        this._status.set('matching-quick');
      }
    }
    else { // 長期競賽
      // 更新trnList
      this.sendEventList();
      // 加入完成之後直接拿排名資料
      this.sendEventRanking(id);
      this._status.set('matching-event');
    }
  }

  /** 更新排隊狀態 */
  protected processQueueUpdated(response: TrnQueueUpdatedResponse) {
    const data = response.data;

    // teir id 跟目前一樣才更新
    if (this.currentTier()?.id !== data.tier_id) return;


    const updated: TrnQueueUpdated = {
      tournamentId: data.tournament_id,
      tierId: data.tier_id,
      currentPlayers: data.queue_size,
    };

    this.roomCurrentPlayers.set(data.queue_size);

    this.notifyQueueUpdatedSubject.next(updated);
  }

  /** 開啟通知排隊等待狀態 */
  protected processTrnQueueWaiting(response: TrnQueueWaitingResponse) {
    const data = response.data;
    // 只有在idle狀態才會開啟排隊等待的通知，其他狀態不處理
    if (this.status() !== 'idle') return;
    // teir id 跟目前一樣才更新
    if (this.currentTier()?.id !== data.tier_id) return;

    const updated: TrnQueueUpdated = {
      tournamentId: data.tournament_id,
      tierId: data.tier_id,
      currentPlayers: data.queue_size,
      maxPlayers: data.max_players,
    };

    this.notifyQueueCreatedSubject.next(updated);
  }

  /** 處理玩家被移出排隊 */
  protected processQueuePlayerRemoved(response: TrnQueuePlayerRemovedResponse) {
    const data = response.data;
    if (this._betDataTrnId() !== data.tournament_id) return;

    this.closeQuickRoom();
    this.roomCancelledSubject.next();
  }

  /** 遊戲準備好 開始競賽 */
  protected processRoomReady(response: TrnRoomReadyResponse) {
    const list: ApRowListItem[] = createApRowListByPlayerList(response.data.players || [], this.account);
    const prize = this.roomTier()?.totalPrize || null;
    this._roomId.set(response.data.room_id);
    this.roomEndTime.set(response.data.end_time);
    this.roomPlayerList.set(list);
    this.roomPrize.set(prize || null);
    this.roomCurrentPlayers.set(list.length);
    this.roomRank.set(null)
    const data: TrnRoomReady = {
      endTime: response.data.end_time,
      playersList: list
    };
    this.roomReadySubject.next(data);
    this._status.set('playing-quick');
    this.enableBetData(true);
  }

  /** 處理Server房間狀態更新 */
  protected processRoomStateUpdated(response: TrnRoomStateResponse) {
    const serverStatus: RoomStateType = response.data.status;
    const list: ApRowListItem[] = updateApRowListByRankings(this.roomPlayerList(), response.data.rankings, this.trnQuick()?.exchangeRate || 1);
    const totalPrize = calc.s2c(response.data.total_pool_amount) * (this.trnQuick()?.exchangeRate || 1);
    const userRank: number | null = list.find( p => p.highlighted )?.rank || null;
    this.roomPrize.set(totalPrize);
    this.roomPlayerList.set(list);
    this.roomRank.set(userRank);
    const data: TrnRaceUpdated = {
      id: response.data.room_id,
      rank: userRank,
      playersList: list,
      currentPool: totalPrize
    }

    if (serverStatus === 'matching') {
      this.enableBetListLimit(true);
      this.roomCurrentPlayers.set(response.data.current_players);
    }

    if (serverStatus === 'playing') {
      this.roomUpdatedSubject.next(data);
    }

    if (serverStatus === 'ending') {
      // Quick賽事結束 清除相關資料
      this._betDataTrnId.set(null);
      this.closeQuickRoom();
      this.roomEndingSubject.next(data);
    } 

    // 統計結束的狀態目前沒有相關邏輯
    /** if (serverStatus === 'ended') {
      this.roomEndedSubject.next(data);
    }*/

    if (serverStatus === 'cancelled') {
      // Quick賽事取消 清除相關資料
      this.closeQuickRoom();
      this._status.set('canceling-quick');
      this.roomCancellingSubject.next();
      // 延遲2秒之後再發送取消配對通知
      firstValueFrom(timer(2000)).then(() => {
        this.closeQuickRoom();
        this.roomCancelledSubject.next();
      });
    }
  }

  /** 處理Server獎項通知 */
  protected processPrizeAwarded(response: TrnPrizeAwardResponse) {
    const exchangeRate = this.trnEventList()?.find(trn => trn.id === response.data.tournament_id)?.exchangeRate || 1
    const prizeNotification: TrnPrizeNotification = createPrizeNotification(response.data, this.account, exchangeRate);
    prizeNotification.type = (response.data.tournament_id === this.trnQuick()?.id ? 'quick' : 'event');
    this.prizeNotificationSubject.next(prizeNotification);
  }

  /** 處理活動排名回應 */
  protected processEventRanking(response: TrnEventRankingResponse) {
    const exchangeRate = this.trnEventList()?.find(trn => trn.id === response.data.tournament_id)?.exchangeRate || 1
    const data: TrnRaceUpdated = {
      id: response.data.tournament_id,
      rank: response.data.player_rank?.rank || null,
      playersList: createApRowListByRankings(response.data.rankings || [], this.account, exchangeRate),
      currentPool: calc.s2c(response.data.current_pool) * exchangeRate
    };

    // 存排名快取
    this.allEventCachedData.update(prev => ({ ...prev, [data.id]: data }));
    this.eventPlayerList.set(data.playersList);
    this.eventPrize.set(data.currentPool);
    this.eventRank.set(data.rank);

    // idle
    if (this._status() === 'idle') {
      this.eventRankingSubject.next(data);
    }

    // Event Ready
    if (this._status() === 'matching-event') {
      const endTime = this.trnEventList()?.find(trn => trn.id === data.id)?.endTime || null;
      this.eventEndedTime.set(endTime);
      this.eventRaceReadySubject.next(data);
      this.enableBetData(true);
      this._status.set('playing-event');
    }

    // Event Updated
    if (this._status() === 'playing-event') {
      this.eventRaceUpdatedSubject.next(data);
    }
  }

  public async processEventLeaderboard(response: TrnEventLeaderboardResponse) {
    const exchangeRate = this.trnEventList()?.find(trn => trn.id === response.data.tournament_id)?.exchangeRate || 1
    const leaderBoard: TrnLeaderBoard = {
      page: response.data.page,
      pageSize: response.data.page_size,
      totalPages: response.data.total_pages,
      list: createApRowListByRankings(response.data.rankings || [], this.account, exchangeRate)
    }
    this.eventLeaderboardSubject.next(leaderBoard);
  }

  public processEventRefresh(response: TrnEventRefreshResponse) {
    this.eventRefreshSubject.next(response);
    // 收到更新通知, 設定旗標
    this.needUpdateTrnList.set(true);
    // 更新Trn列表如果需要的話
    this.updateTrnListIfNeeded();
  }

  public async processPlayerHistory(response: TrnPlayerHistoryResponse) {
    const totalCount = response.data.total_count;
    const pageSize = response.data.limit;
    // 有餘數的話頁數+1
    const totalPages = Math.ceil(totalCount / pageSize);
    // 假如pagSize: 10, (offset: 0, page: 1), (offset: 10, page: 2)...
    const page = Math.floor(response.data.offset / pageSize) + 1;
    const playHistory: TrnPlayerHistory = {
      page: page,
      pageSize: pageSize,
      totalPages: totalPages,
      list: response.data.history.map((item: TrnPlayerHistoryResponseItem) => {
        const names = safeParse(item.tournament_name);
        const name = names ? names[this.session.language] : 'Unknown Tournament';
        return {
          name: name,
          id: item.room_id,
          type: item.event_type === 'quick_match' ? 'quick' : 'event',
          rank: item.final_rank,
          score: item.final_score,
          prize: calc.s2c(item.prize_amount),
          /** unix timestamp, 單位為毫秒 */
          time: item.finished_at,
          /** 暫時放入固定值 */
          images: 'assets/images/tournament/event-race/banner_default.png',
          status: item.status
        };
      })
    }
    this.playerHistorySubject.next(playHistory);
  }

  /** 給Debug Panel用, 強制更新Room State */
  public debugRoomUpdate(data: TrnRaceUpdated) {
    this.roomUpdatedSubject.next(data);
  }

  /** 給Debug Panel用, 強制觸發Signal */
  public debugToggleSignal(key: TrnDebugSignalKey) {
    this.debugSignalSubject.next(key);
  }

  public debugTogglePage(page: TrnPageType) {
    this.debugPageSubject.next(page);
  }

  public debugAssignRoomUpdate(data: TrnRaceUpdated) {
    this.roomUpdatedSubject.next(data);
  }

  public processCancelJoin(response: TrnCancelMatchResponse) {
    // 只有快速配對會有取消配對的流程
    if (this.trnQuick() && this._status() === 'canceling-quick') {
      this.closeQuickRoom();
      this.roomCancelledSubject.next();
    }
  }

  public processError(error: any) {
    this.errorSubject.next(error);
    // 重製各種狀態 回到idle
    this.closeQuickRoom();
    this.closeEventRace();
  }
}

