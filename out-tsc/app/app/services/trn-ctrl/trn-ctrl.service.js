import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { firstValueFrom, interval, Subject, timer } from 'rxjs';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { createApRowListByPlayerList, createApRowListByRankings, createPrizeNotification, createTrnBetList, formatTrnLogin, updateApRowListByRankings } from './trn-ctrl.function';
import { environment } from '../../../environments/app-environment';
import { calc } from '../user-profile/user-profile.function';
import { UserProfileService } from '../user-profile/user-profile.service';
import { LoginCtrlService } from '../login-ctrl/login-ctrl.service';
import { LoggerService } from '../logger/logger.service';
import { safeParse } from '../../library/Protobuf/proto-base';
import { StorageCtrlService } from '../storage-ctrl/storage-ctrl.service';
import * as i0 from "@angular/core";
export class TrnCtrlService {
    /** 目前TRN狀態 */
    _status = signal('idle');
    /** 目前TRN狀態 */
    status = this._status.asReadonly();
    /** 目前所有Trn資料 */
    _trnList = signal([]);
    /** 目前所有Trn資料 */
    trnList = this._trnList.asReadonly();
    /** 所有需要通知的獎項 */
    _prizeNotificationList = signal([]);
    /** 所有需要通知的獎項 */
    prizeNotificationList = this._prizeNotificationList.asReadonly();
    /** 目前正在投注的TrnId (用來判斷betData) */
    _betDataTrnId = signal(null);
    /** 目前正在投注的TrnId (用來判斷betData) */
    betDataTrnId = this._betDataTrnId.asReadonly();
    /** 目前運行的房間ID */
    _roomId = signal(null);
    /** 目前運行的房間ID */
    roomId = this._roomId.asReadonly();
    /** 房間心跳間隔 (秒) */
    roomHeartbeatInterval = signal(null);
    /** 排隊心跳計時器 */
    heartbeatSubscription = null;
    notifyQueueCreatedSubject = new Subject();
    /** 有玩家加入排隊 */
    get notifyQueueCreated$() { return this.notifyQueueCreatedSubject.asObservable(); }
    notifyQueueUpdatedSubject = new Subject();
    /** 排隊狀態更新 */
    get notifyQueueUpdated$() { return this.notifyQueueUpdatedSubject.asObservable(); }
    /** 正在配對, 房間狀態更新 */
    roomMatchingSubject = new Subject();
    /** 正在配對, 房間狀態更新 */
    get roomMatching$() { return this.roomMatchingSubject.asObservable(); }
    /** 房間準備完成 */
    roomReadySubject = new Subject();
    /** 房間準備完成 */
    get roomReady$() { return this.roomReadySubject.asObservable(); }
    /** 房間狀態更新 */
    roomUpdatedSubject = new Subject();
    /** 房間狀態更新 */
    get roomUpdated$() { return this.roomUpdatedSubject.asObservable(); }
    /** 競賽結束 */
    roomEndingSubject = new Subject();
    /** 競賽結束 */
    get roomEnding$() { return this.roomEndingSubject.asObservable(); }
    /** 統計結束 */
    //private roomEndedSubject = new Subject<TrnRaceUpdated>();
    /** 統計結束 */
    //public get roomEnded$() { return this.roomEndedSubject.asObservable();}
    /** 正在取消配對 */
    roomCancellingSubject = new Subject();
    /** 正在取消配對 */
    get roomCancelling$() { return this.roomCancellingSubject.asObservable(); }
    /** 取消配對 */
    roomCancelledSubject = new Subject();
    /** 取消配對 */
    get roomCancelled$() { return this.roomCancelledSubject.asObservable(); }
    /** 獎項通知 */
    prizeNotificationSubject = new Subject();
    /** 獎項通知 */
    get prizeNotification$() { return this.prizeNotificationSubject.asObservable(); }
    /** Event競賽準備完成 */
    eventRaceReadySubject = new Subject();
    /** Event競賽準備完成 */
    get eventRaceReady$() { return this.eventRaceReadySubject.asObservable(); }
    /** Event競賽狀態更新 */
    eventRaceUpdatedSubject = new Subject();
    /** Event競賽狀態更新 */
    get eventRaceUpdated$() { return this.eventRaceUpdatedSubject.asObservable(); }
    /** Event競賽結束 */
    eventRaceEndedSubject = new Subject();
    /** Event競賽結束 */
    get eventRaceEnded$() { return this.eventRaceEndedSubject.asObservable(); }
    /** 活動賽事排行榜頁面 */
    eventLeaderboardSubject = new Subject();
    /** 活動賽事排行更新 */
    get eventLeaderboard$() { return this.eventLeaderboardSubject.asObservable(); }
    /** 活動賽事排名更新 */
    eventRankingSubject = new Subject();
    /** 活動賽事排名更新 */
    eventRanking$ = this.eventRankingSubject.asObservable();
    /** 活動賽事更新通知 */
    eventRefreshSubject = new Subject();
    /** 活動賽事更新通知 */
    get eventRefresh$() { return this.eventRefreshSubject.asObservable(); }
    /** 發生錯誤 */
    errorSubject = new Subject();
    /** 發生錯誤 */
    get error$() { return this.errorSubject.asObservable(); }
    /** 玩家歷史紀錄 */
    playerHistorySubject = new Subject();
    /** 玩家歷史紀錄 */
    get playerHistory$() { return this.playerHistorySubject.asObservable(); }
    /** Debug Panel用: 強制觸發Signal */
    debugSignalSubject = new Subject();
    /** Debug Panel用: 強制觸發Signal */
    get debugSignal$() { return this.debugSignalSubject.asObservable(); }
    /** Debug Panel用: 強制切換頁面 */
    debugPageSubject = new Subject();
    /** Debug Panel用: 強制切換頁面 */
    get debugPage$() { return this.debugPageSubject.asObservable(); }
    /** Debug Panel用: 強制開啟 */
    debugForceEnable = signal(false);
    /** 玩家的貨幣代號 */
    currency = '';
    /** 玩家暱稱 */
    nickname = '';
    /** 玩家帳號 */
    account = '';
    /** 玩家的貨幣符號 */
    _currencySymbol = signal('$');
    /** 玩家的貨幣符號 */
    get currencySymbol() { return this._currencySymbol.asReadonly(); }
    /** 參考由user.bet()產生出來的目前的Tier */
    currentTier = computed(() => {
        const bet = this.user.bet();
        const trn = this.trnQuick();
        if (!trn)
            return null;
        return trn.tiers.find((tier) => {
            return (tier.maxStakeAmount === null || bet <= tier.maxStakeAmount) && (tier.minStakeAmount === null || bet >= tier.minStakeAmount);
        }) || null;
    });
    // Room相關參數 (Quick使用)
    /** Room開始時間 Unix timestamp，單位為毫秒 */
    matchingStartTime = signal(null);
    /** Room結束時間 Unix timestamp，單位為毫秒 */
    roomEndTime = signal(null);
    /** Room的玩家數量 */
    roomCurrentPlayers = signal(1);
    /** Room正在玩的玩家列表 */
    roomPlayerList = signal([]);
    /** Room總獎金 */
    roomPrize = signal(null);
    /** Room玩家排名 */
    roomRank = signal(null);
    /** Room玩家階級 */
    roomTier = signal(null);
    /** Room最大玩家數量 */
    roomMaxPlayers = computed(() => {
        const trn = this.trnQuick();
        return trn ? trn.maxPlayers : null;
    });
    /** 全部長期賽事各階段排名快取 */
    allEventCachedData = signal({});
    /** 全部長期競賽參與狀態 */
    allEventPlayerJoined = signal({});
    /** 當下開啟的長期賽事結束時間 Unix timestamp，單位為毫秒 */
    eventEndedTime = signal(null);
    /** 當下開啟的長期賽事玩家列表 */
    eventPlayerList = signal([]);
    /** 當下開啟的長期賽事總獎金 */
    eventPrize = signal(null);
    /** 當下開啟的長期賽事玩家排名 */
    eventRank = signal(null);
    // inject 其他Service
    api = inject(AppInterfaceService);
    user = inject(UserProfileService);
    login = inject(LoginCtrlService);
    logger = inject(LoggerService);
    storage = inject(StorageCtrlService);
    /** 是否需要更新Trn列表 */
    needUpdateTrnList = signal(true);
    constructor() {
        // Debug: 將Service掛到window上方便測試
        if (environment.production === false) {
            window.trn = this;
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
            if (this.user.campaignSetting()) {
                this.enableBetData(false);
            }
        });
        // 如果status是matching-quick, 就啟動心跳
        effect(() => {
            this.enabledHeartbeat(this.status() === 'matching-quick');
        });
    }
    /** 重置Quick房間相關的Signal */
    closeQuickRoom() {
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
    closeEventRace() {
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
    showMainPanel = computed(() => {
        if (this.debugForceEnable()) {
            return true;
        }
        // Trn主畫面啟動條件: 1. 沒有disable_tournament的  2. 有可進行的賽事
        return (this.trnRunningList() || []).length > 0 && this.api.loginResult()?.note?.disable_tournament !== true;
    });
    /** 是否要啟用Trn Component */
    enabled = computed(() => {
        // 當前啟動條件: 顯示主畫面或是有獎項通知沒看 
        return this.showMainPanel() || this.prizeNotificationList().length > 0;
    });
    /** 是否要顯示Trn tab */
    showTab = computed(() => {
        // Trn tab啟動條件: 1. 沒有disable_tournament的  2. 有任何狀態的賽事
        return (this.trnList() || []).length > 0 && this.api.loginResult()?.note?.disable_tournament !== true;
    });
    /** 快速賽事資料 */
    trnQuick = computed(() => {
        return this.trnList().find(trn => trn.type === 'quick') || null;
    });
    /** 長期活動賽事資料 */
    trnEventList = computed(() => {
        return this.trnList().filter(trn => trn.type === 'event') || null;
    });
    /** 正在運行的長期活動賽事 */
    trnEventRunningList = computed(() => {
        return this.trnEventList()?.filter(trn => trn.status === 'running') || null;
    });
    /** 所有正在運行的賽事 */
    trnRunningList = computed(() => {
        return this.trnList()?.filter(trn => trn.status === 'running') || null;
    });
    /** 目前的活動下注倍率 */
    betDataMultiplier = computed(() => {
        const trnId = this._betDataTrnId();
        if (!trnId)
            return 0;
        const trnData = this._trnList().find(trn => trn.id === trnId);
        return trnData?.betMultiplier || 1;
    });
    /** 目前正在運行的下注倍率  */
    currentBetMultiplier = computed(() => {
        return this.betDataEnabled() ? this.betDataMultiplier() : 1;
    });
    /** 目前的額外費用比例 */
    betDataFeeRatio = computed(() => {
        const trnId = this._betDataTrnId();
        if (!trnId)
            return 0;
        const trnData = this._trnList().find(trn => trn.id === trnId);
        return trnData?.feeRatio || 0;
    });
    /** 處理伺服器Info資訊 */
    onServerTrn(response) {
        // 有錯誤直接返回
        if (response.error) {
            this.processError(response.error);
            return;
        }
        // 判斷回傳的action
        if (response.action === 'tournament.event.list') {
            // 活動列表回應
            this.processEventList(response);
        }
        else if (response.action === 'tournament.event.join') {
            // 處理Find Match的回應
            this.processJoining(response);
        }
        else if (response.action === 'tournament.room.ready') {
            // 遊戲準備好
            this.processRoomReady(response);
        }
        else if (response.action === 'tournament.room.updated') {
            // 房間狀態更新
            this.processRoomStateUpdated(response);
        }
        else if (response.action === 'tournament.prize.awarded') {
            // 獎項通知
            this.processPrizeAwarded(response);
        }
        else if (response.action === 'tournament.event.ranking') {
            // 活動排名回應
            this.processEventRanking(response);
        }
        else if (response.action === 'tournament.event.leaderboard') {
            // 活動排行榜回應
            this.processEventLeaderboard(response);
        }
        else if (response.action === 'tournament.events.refresh') {
            // 賽事更新通知
            this.processEventRefresh(response);
        }
        else if (response.action === 'tournament.player.history') {
            // 玩家歷史紀錄回應
            this.processPlayerHistory(response);
        }
        else if (response.action === 'tournament.event.cancel') {
            // 玩家取消配對回應
            this.processCancelJoin(response);
        }
        else if (response.action === 'tournament.queue.updated') {
            // 排隊狀態更新
            this.processQueueUpdated(response);
        }
        else if (response.action === 'tournament.queue.player_removed') {
            // 玩家被移出排隊
            this.processQueuePlayerRemoved(response);
        }
        else if (response.action === 'tournament.queue.waiting') {
            // 排隊等待狀態
            this.processTrnQueueWaiting(response);
        }
    }
    /** 處理登入結果資訊 */
    updateLoginResult(result) {
        if (!result)
            return;
        if (result.note?.nickname)
            this.nickname = result.note.nickname;
        if (result.note?.currency)
            this.currency = result.note.currency;
        if (result.note?.uid)
            this.account = result.note.uid;
        if (result.note?.currency_symbol)
            this._currencySymbol.set(result.note.currency_symbol);
        const list = [];
        const prizeList = [];
        // 處理需要回覆狀態的資料
        result.note?.tournament?.forEach((trnItem) => {
            const trnData = formatTrnLogin(trnItem, this.login.language, this.account);
            list.push(trnData);
            // 處理Quick重連, 有room狀態表示 玩家已經在比賽中 處理斷線重連
            const reconnectStatus = ['matching', 'playing'];
            if (trnData.type === 'quick' && reconnectStatus.includes(trnItem.player_status?.room_status)) {
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
                const rankings = createApRowListByPlayerList(trnItem.player_status?.players || [], this.account);
                this.roomPlayerList.set(updateApRowListByRankings(rankings, trnItem.player_status?.room_rankings || [], trnData.exchangeRate));
            }
            // 處理Event參與狀態
            if (trnData.type === 'event') {
                const isJoined = trnItem.player_status ? true : false;
                this.allEventPlayerJoined.update((prev) => { return { ...prev, [trnData.id]: isJoined }; });
                // 處理Event重連, stroge有對應的event id, 就切換到playing-event狀態
                if (trnData.id === this.storage.trnEventRunning?.id) {
                    this._status.set('playing-event');
                }
            }
            // 處理獎項通知
            trnItem.prize_notifications?.forEach((notification) => {
                const prizeNotification = createPrizeNotification(notification, this.account, trnData.exchangeRate);
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
    betDataTrn = computed(() => {
        const trnId = this._betDataTrnId();
        if (!trnId) {
            return null;
        }
        return this.trnList().find(trn => trn.id === trnId) || null;
    });
    /** 如果需要就更新Trn列表 */
    updateTrnListIfNeeded() {
        if (this.needUpdateTrnList()) {
            this.sendEventList();
            // 更新完就把旗標降下來
            this.needUpdateTrnList.set(false);
        }
    }
    /** 發送賽事列表請求 */
    sendEventList(filterType = "") {
        const request = {
            action: "tournament.event.list",
            payload: {
                filter_type: filterType,
                currency: this.currency,
                game_code: this.login.gameId?.toString() || '',
            }
        };
        this.api.sendInfoMsg('Tournament', request);
    }
    /** 發送快速配對請求 */
    sendJoinQuick() {
        const request = {
            action: "tournament.event.join",
            payload: {
                tournament_id: this.trnQuick()?.id || '',
                currency: this.currency,
                stake_amount: calc.c2s(this.user.bet()),
                nickname: this.nickname
            }
        };
        // 紀錄現在的Tier
        this.roomTier.set(this.currentTier());
        this.api.sendInfoMsg('Tournament', request);
        this._status.set('joining-quick');
    }
    sendCancelJoinQuick() {
        const request = {
            action: "tournament.event.cancel",
            payload: {}
        };
        this.api.sendInfoMsg('Tournament', request);
        this._status.set('canceling-quick');
        this.roomCancellingSubject.next();
    }
    /** 是否啟動按照heartbeatInterval的間隔發送心跳 */
    enabledHeartbeat(enabled) {
        this.heartbeatSubscription?.unsubscribe();
        this.heartbeatSubscription = null;
        if (!enabled)
            return;
        const intervalSeconds = this.roomHeartbeatInterval();
        if (!intervalSeconds)
            return;
        this.heartbeatSubscription = interval(intervalSeconds * 1000).subscribe(() => {
            const tournamentId = this._betDataTrnId();
            if (!tournamentId)
                return;
            const request = {
                action: 'tournament.queue.heartbeat',
                payload: { tournament_id: tournamentId }
            };
            this.api.sendInfoMsg('Tournament', request);
        });
    }
    /** 發送長期競賽加入請求 */
    sendJoinEvent(eventId) {
        const request = {
            action: "tournament.event.join",
            payload: {
                tournament_id: eventId,
                currency: this.currency,
                stake_amount: calc.c2s(this.user.bet()),
                nickname: this.nickname
            }
        };
        this.api.sendInfoMsg('Tournament', request);
        this._status.set('joining-event');
    }
    /** 發送活動排名請求 */
    sendEventRanking(eventId) {
        const request = {
            action: "tournament.event.ranking",
            payload: {
                tournament_id: eventId
            }
        };
        this.api.sendInfoMsg('Tournament', request);
    }
    /** 詳細頁面的分頁排行榜 */
    sendEvnetLeaderboard(eventId, page = 1, pageSize = 10) {
        const request = {
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
    sendPrizeRequest() {
        if (this.prizeNotificationList().length === 0) {
            return;
        }
        const notification = this.prizeNotificationList()[0];
        this.prizeNotificationSubject.next(notification);
    }
    /** 確認獎項通知 */
    sendPrizeAck(id) {
        const request = {
            action: "tournament.prize.ack",
            payload: { notification_id: id }
        };
        // 將對應的notification_id從列表中移除
        const updatedList = this.prizeNotificationList().filter(item => item.notificationId !== id);
        this._prizeNotificationList.set(updatedList);
        this.api.sendInfoMsg('Tournament', request);
    }
    sendPlayerHistory(limit, offset) {
        const request = {
            action: "tournament.player.history",
            payload: {
                limit: limit,
                offset: offset
            }
        };
        this.api.sendInfoMsg('Tournament', request);
    }
    /** 執行自訂的Action */
    sendCustomAction(action) {
        const request = {
            action: action
        };
        this.api.sendInfoMsg('Tournament', request);
    }
    /** 直接開啟長期賽事頁面 */
    openEventRace(eventId) {
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
        const data = {
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
    /** 是否啟用 BetData, 會從user.trnSetting()取得 */
    betDataEnabled = computed(() => {
        if (!this.user.trnSetting())
            return false;
        const trnId = this._betDataTrnId();
        if (!trnId)
            return false;
        return this.user.trnSetting()?.id === trnId;
    });
    /** 暫時啟用/關閉 BetData, 維持betDataTrn()不變 */
    enableBetData(enable) {
        if (!enable) {
            this.user.trnSetting.set(null);
            this.enableBetListLimit(false);
            return;
        }
        this.enableBetListLimit(true);
        // 算出對應的TrnSetting
        const setting = {
            id: this.betDataTrn()?.id || '',
            roomId: this.roomId() || '',
            feeRatio: this.betDataFeeRatio(),
        };
        this.user.trnSetting.set(setting);
    }
    /** 是否啟用 BetList限制 */
    enableBetListLimit(enable) {
        if (!enable) {
            this.user.trnBetList.set(null);
            return;
        }
        // 如果目前是event賽事, 就不限制下注清單
        if (this.betDataTrn()?.type === 'event') {
            this.user.trnBetList.set(null);
            return;
        }
        //  參考roomTier的maxStakeAmount跟minStakeAmount, 從cashBetSet.betList過濾出可用的下注清單
        const betList = createTrnBetList(this.user.baseBetList(), this.roomTier()?.maxStakeAmount || null, this.roomTier()?.minStakeAmount || null);
        if (betList.length === 0) {
            this.logger.warn('trn-ctrl.service: Tournament BetData: No available bet list for current tier.');
            return;
        }
        // 如果目前的bet不在可用清單中，調整到最接近的值
        if (betList.indexOf(this.user.bet()) === -1) {
            if (this.user.bet() < betList[0]) {
                this.user.updateBet(betList[0]);
            }
            if (this.user.bet() > betList[betList.length - 1]) {
                this.user.updateBet(betList[betList.length - 1]);
            }
        }
        this.user.trnBetList.set(betList);
    }
    /** 更新活動列表 */
    processEventList(response) {
        const list = response.data.events.map((item) => {
            return formatTrnLogin(item, this.login.language, this.account);
        });
        this._trnList.set(list);
    }
    /** 點擊Find Match之後 處理開始Matching的回應 */
    processJoining(response) {
        const id = response.data.tournament_id;
        this._betDataTrnId.set(id);
        this.roomHeartbeatInterval.set(response.data.heartbeat_interval_seconds);
        // 現在的時間
        this.matchingStartTime.set(new Date().getTime());
        const isQuickMatch = this.trnQuick()?.id === id;
        if (isQuickMatch) { // 快速配對
            const data = {
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
    processQueueUpdated(response) {
        const data = response.data;
        // teir id 跟目前一樣才更新
        if (this.currentTier()?.id !== data.tier_id)
            return;
        const updated = {
            tournamentId: data.tournament_id,
            tierId: data.tier_id,
            currentPlayers: data.queue_size,
        };
        this.roomCurrentPlayers.set(data.queue_size);
        this.notifyQueueUpdatedSubject.next(updated);
    }
    /** 開啟通知排隊等待狀態 */
    processTrnQueueWaiting(response) {
        const data = response.data;
        // 只有在idle狀態才會開啟排隊等待的通知，其他狀態不處理
        if (this.status() !== 'idle')
            return;
        // teir id 跟目前一樣才更新
        if (this.currentTier()?.id !== data.tier_id)
            return;
        const updated = {
            tournamentId: data.tournament_id,
            tierId: data.tier_id,
            currentPlayers: data.queue_size,
            maxPlayers: data.max_players,
        };
        this.notifyQueueCreatedSubject.next(updated);
    }
    /** 處理玩家被移出排隊 */
    processQueuePlayerRemoved(response) {
        const data = response.data;
        if (this._betDataTrnId() !== data.tournament_id)
            return;
        this.closeQuickRoom();
        this.roomCancelledSubject.next();
    }
    /** 遊戲準備好 開始競賽 */
    processRoomReady(response) {
        const list = createApRowListByPlayerList(response.data.players || [], this.account);
        const prize = this.roomTier()?.totalPrize || null;
        this._roomId.set(response.data.room_id);
        this.roomEndTime.set(response.data.end_time);
        this.roomPlayerList.set(list);
        this.roomPrize.set(prize || null);
        this.roomCurrentPlayers.set(list.length);
        this.roomRank.set(null);
        const data = {
            endTime: response.data.end_time,
            playersList: list
        };
        this.roomReadySubject.next(data);
        this._status.set('playing-quick');
        this.enableBetData(true);
    }
    /** 處理Server房間狀態更新 */
    processRoomStateUpdated(response) {
        const serverStatus = response.data.status;
        const list = updateApRowListByRankings(this.roomPlayerList(), response.data.rankings, this.trnQuick()?.exchangeRate || 1);
        const totalPrize = calc.s2c(response.data.total_pool_amount) * (this.trnQuick()?.exchangeRate || 1);
        const userRank = list.find(p => p.highlighted)?.rank || null;
        this.roomPrize.set(totalPrize);
        this.roomPlayerList.set(list);
        this.roomRank.set(userRank);
        const data = {
            id: response.data.room_id,
            rank: userRank,
            playersList: list,
            currentPool: totalPrize
        };
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
    processPrizeAwarded(response) {
        const exchangeRate = this.trnEventList()?.find(trn => trn.id === response.data.tournament_id)?.exchangeRate || 1;
        const prizeNotification = createPrizeNotification(response.data, this.account, exchangeRate);
        prizeNotification.type = (response.data.tournament_id === this.trnQuick()?.id ? 'quick' : 'event');
        this.prizeNotificationSubject.next(prizeNotification);
    }
    /** 處理活動排名回應 */
    processEventRanking(response) {
        const exchangeRate = this.trnEventList()?.find(trn => trn.id === response.data.tournament_id)?.exchangeRate || 1;
        const data = {
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
    async processEventLeaderboard(response) {
        const exchangeRate = this.trnEventList()?.find(trn => trn.id === response.data.tournament_id)?.exchangeRate || 1;
        const leaderBoard = {
            page: response.data.page,
            pageSize: response.data.page_size,
            totalPages: response.data.total_pages,
            list: createApRowListByRankings(response.data.rankings || [], this.account, exchangeRate)
        };
        this.eventLeaderboardSubject.next(leaderBoard);
    }
    processEventRefresh(response) {
        this.eventRefreshSubject.next(response);
        // 收到更新通知, 設定旗標
        this.needUpdateTrnList.set(true);
        // 更新Trn列表如果需要的話
        this.updateTrnListIfNeeded();
    }
    async processPlayerHistory(response) {
        const totalCount = response.data.total_count;
        const pageSize = response.data.limit;
        // 有餘數的話頁數+1
        const totalPages = Math.ceil(totalCount / pageSize);
        // 假如pagSize: 10, (offset: 0, page: 1), (offset: 10, page: 2)...
        const page = Math.floor(response.data.offset / pageSize) + 1;
        const playHistory = {
            page: page,
            pageSize: pageSize,
            totalPages: totalPages,
            list: response.data.history.map((item) => {
                const names = safeParse(item.tournament_name);
                const name = names ? names[this.login.language] : 'Unknown Tournament';
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
        };
        this.playerHistorySubject.next(playHistory);
    }
    /** 給Debug Panel用, 強制更新Room State */
    debugRoomUpdate(data) {
        this.roomUpdatedSubject.next(data);
    }
    /** 給Debug Panel用, 強制觸發Signal */
    debugToggleSignal(key) {
        this.debugSignalSubject.next(key);
    }
    debugTogglePage(page) {
        this.debugPageSubject.next(page);
    }
    debugAssignRoomUpdate(data) {
        this.roomUpdatedSubject.next(data);
    }
    processCancelJoin(response) {
        // 只有快速配對會有取消配對的流程
        if (this.trnQuick() && this._status() === 'canceling-quick') {
            this.closeQuickRoom();
            this.roomCancelledSubject.next();
        }
    }
    processError(error) {
        this.errorSubject.next(error);
        // 重製各種狀態 回到idle
        this.closeQuickRoom();
        this.closeEventRace();
    }
    static ɵfac = function TrnCtrlService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnCtrlService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TrnCtrlService, factory: TrnCtrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnCtrlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=trn-ctrl.service.js.map