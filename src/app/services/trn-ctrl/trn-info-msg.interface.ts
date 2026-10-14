/**
 * 後端傳來TRN的格式定義
 */

/** 獎品結構 - 固定獎品 */
export interface TrnFixedPrize {
  /** rank可以是單一rank 或 rank區間 (rank_from ~ rank_to) */
  rank?: number;
  /** rank區間的起始rank, 需要配合rank_to使用 */
  rank_from?: number;
  /** rank區間的結束rank, 需要配合rank_from使用 */
  rank_to?: number;
  /** 獎品金額, 需要s2c轉換, 需要乘上匯率 */
  amount: number;
}

/** 獎品結構 - 獎池獎品 */
export interface TrnPoolDistribution {
  /** rank可以是單一rank 或 rank區間 (rank_from ~ rank_to) */
  rank?: number;
  /** rank區間的起始rank, 需要配合rank_to使用 */
  rank_from?: number;
  /** rank區間的結束rank, 需要配合rank_from使用 */
  rank_to?: number;
  /** 獎池分配比例, 單位basis points, 1% = 100 basis points */
  basis_points: number;
}

/** 獎品結構 */
export interface TrnTierItem {
  tier_id: string;
  /** 需要JSON.parse */
  tier_name: string;
  tier_order: number;
  /** 此Tier的Bet上限, 需要s2c轉換 */
  max_stake_amount?: number;
  /** 此Tier的玩家最低餘額, 需要s2c轉換 */
  min_player_balance?: number;
  /** 此Tier的Bet下限, 需要s2c轉換 */
  min_stake_amount?: number;
  /** 依照Rank的固定獎金 */
  fixed_prizes?: TrnFixedPrize[];
  /** 依照Rank的額外獎池分配比例 */
  pool_distribution?: TrnPoolDistribution[];
}

export type TrnLoginRoomStatus = 'playing' | 'matching';

export interface TrnRankingItem {
  rank?: number | null;
  account_id: string;
  nickname: string;
  /** 用string儲存的number */
  score?: string;
  /** 用string儲存的number */
  final_score?: string;
  /** 獎品預估金額, 需要s2c轉換, 需要exchangeRate轉換 */
  prize_preview?: number;
  /** 獎品預估金額, 需要s2c轉換, 需要exchangeRate轉換 */
  prize_amount?: number;
  /** 獎品預估金額, 需要s2c轉換, 需要exchangeRate轉換 */
  prize?: number
  [key: string]: any;
}

/** 登入玩家狀態 */
export interface TrnLoginPlayerStatus {
  room_id: string;
  room_status: TrnLoginRoomStatus;
  /** 目前玩家總數 */
  current_players : number;
  /** 玩家目前分數 */
  current_score: number;
  /** 房間總獎金, 需要s2c轉換, 需要exchangeRate轉換 */
  total_pool_amount: number;
  /** 估計開始時間unix timestamp，單位為豪秒 */
  estimated_start_time?: number;
  /** 房間結束時間unix timestamp，單位為豪秒 */
  room_end_time?: number;
  /** 玩家清單 */
  players: PlayerListItemType[];
  /** 玩家排名 */
  room_rankings: TrnRankingItem[];
  /** 玩家所在的Tier */
  tier_id: string;
  [key: string]: any;
}


export interface TrnPrizeNotificationData {
  notification_id: string;
  /** Response only*/
  tournament_id?: string;
  /** Login only */
  contextual_rankings?: TrnRankingItem[];
  /** Response only */
  rankings?: TrnRankingItem[];
  [key: string]: any;
}

export interface TrnMultilingualText {
  [langCode: string]: string | undefined;
}

/** 賽事項目 */
export interface TrnBaseItem {
  tournament_id: string;
  banner?: string;
  /** 需要JSON.parse */
  name: string;
  /** 需要JSON.parse */
  description: string;
  type: 'quick_match' | 'long_term' | 'QUICK_MATCH' | 'LONG_TERM';
  status: 'running' | 'announced' | 'ending' | 'ended' | 'settled';
  min_players: number;
  max_players: number;
  duration_seconds: number;
  start_time: number;
  end_time: number;
  base_currency: string;
  /** user / base, 所以prize需要乘以此匯率 */
  exchange_rate: number;
  score_mode: string;
  /** 額外費用比例, 20 = bet * 1.2 */
  extra_fee_ratio: number;
  /** 獎金結構 */
  tiers: TrnTierItem[];
  /** 遊玩狀態 正在遊玩會有資料 */
  player_status?: TrnLoginPlayerStatus;
  prize_notifications?: TrnPrizeNotificationData[]; 
  [key: string]: any;
}

export type TrnActionType = 
  'tournament.event.list' | // 玩家取得賽事項目列表
  'tournament.event.join'| // 玩家點擊參與賽事, Quick&Event 通用
  'tournament.event.cancel' | // 玩家取消配對
  'tournament.event.ranking' | // 玩家取得賽事排名
  'tournament.event.leaderboard' | 
  'tournament.room.created' | // Server主動通知房間建立
  'tournament.room.player_joined'| // Server主動通知有玩家加入房間
  'tournament.room.updated' | // server主動通知房間狀態更新
  'tournament.room.ready' | // server主動通知房間建立完成
  'tournament.prize.awarded' | // Server 主動通知玩家獲獎
  'tournament.prize.ack'| // 玩家回覆已收到獎金
  'tournament.player.history' | // 玩家取得歷史紀錄
  'tournament.events.refresh' | // Server主動通知賽事更新
  'tournament.queue.updated' | // Server主動通知排隊狀態更新
  'tournament.queue.player_removed' | // Server主動通知玩家被移出排隊
  'tournament.queue.waiting' | // Server主動通知排隊等待狀態
  'tournament.queue.heartbeat'; // 玩家發送排隊心跳


export type PlayerListItemType = {
  account_id: string,
  nickname: string
}

export interface TrnBaseRequest {
  action: TrnActionType;
  [key: string]: any;
}

export interface TrnBaseResponse {
  action: TrnActionType;
  success: boolean;
  error: string | null;
  /** 伺服器回應的時間戳記 (毫秒) */
  timestamp: number;
  [key: string]: any;
}

export interface TrnEventListRequest extends TrnBaseRequest {
  action: "tournament.event.list"
  payload: {
    filter_type: "quick_match" | "long_term" | string;
    currency: string;
    game_code: string;
    locale?: string;
  }  
}

export interface TrnEventListResponse extends TrnBaseResponse {
  action: "tournament.event.list",
  data: {
    events: TrnBaseItem[];
  },
}

export interface TrnEventRankingRequest extends TrnBaseRequest {
  action: "tournament.event.ranking",
  payload: {
    tournament_id: string;
  }
}
export interface TrnEventRankingResponse extends TrnBaseResponse {
  action: "tournament.event.ranking";
  data: {
    tournament_id: string;
    current_pool: number;
    status: 'running' | 'ending' | 'ended';
    player_rank?: TrnRankingItem;
    rankings?: TrnRankingItem[];
  };
}

export interface TrnEventLeaderboardRequest extends TrnBaseRequest {
  action: "tournament.event.leaderboard",
  payload: {
    tournament_id: string;
    page?: number;
    page_size?: number;
  }
}

export interface TrnEventLeaderboardResponse extends TrnBaseResponse {
  action: "tournament.event.leaderboard";
  data: {
    tournament_id: string;
    page: number;
    page_size: number;
    total_pages: number;
    player_rank: TrnRankingItem;
    rankings: TrnRankingItem[];
  }
};

/** Quick跟Event共用 */
export interface TrnJoinMatchRequest extends TrnBaseRequest {
  action: "tournament.event.join",
  payload: {
    tournament_id: string;
    stake_amount: number;
    currency: string;
    nickname: string;
  }
}

export interface TrnJoinMatchResponse extends TrnBaseResponse {
  action: "tournament.event.join"
  data: {
    tournament_id: string;
    currency: string;
    /** 心跳間隔秒數 */
    heartbeat_interval_seconds: number;
    /** 排隊位置 */
    queue_position: number;
    status: 'queued' | string;
    [key: string]: any;
  }
}

/** Server主動通知排隊狀態更新 */
export interface TrnQueueUpdatedResponse extends TrnBaseResponse {
  action: "tournament.queue.updated";
  data: {
    tournament_id: string;
    /** 目前所在的Tier */
    tier_id: string;
    /** 目前排隊人數 */
    queue_size: number;
  };
}



/** Server主動通知排隊等待狀態 */
export interface TrnQueueWaitingResponse extends TrnBaseResponse {
  action: "tournament.queue.waiting";
  data: {
    tournament_id: string;
    tier_id: string;
    /** 最大玩家數 */
    max_players: number;
    /** 最小玩家數 */
    min_players: number;
    /** 還需要幾位玩家才能開始 */
    players_needed: number;
    /** 目前排隊人數 */
    queue_size: number;
  };
}

/** Server主動通知玩家被移出排隊 */
export interface TrnQueuePlayerRemovedResponse extends TrnBaseResponse {
  action: "tournament.queue.player_removed";
  data: {
    tournament_id: string;
    /** 玩家被移出排隊的Tier */
    tier_id: string;
    /** 移除原因, e.g. 'queue_timeout' */
    reason: string;
  };
}



/** 發送給所有線上玩家, 有房間建立（全局廣播） */
export interface TrnRoomCreatedResponse extends TrnBaseResponse {
  action: "tournament.room.created"
  data: {
    created_at: number;
    max_players: number;
    min_players: number;
    tier_id: string;
    room_id: string;
    tournament_id: string;
  }
}

/** 發送給所有線上玩家, 有玩家加入房間（全局廣播）
 * @deprecated 目前換成 TrnQueueWaitingResponse
 */
export interface TrnRoomPlayerJoinedResponse extends TrnBaseResponse {
  action: "tournament.room.player_joined"
  data: {
    current_players: number;
    tier_id: string;
    max_players: number;
    [key: string]: any;
  }
  [key: string]: any;
}

export interface TrnRoomReadyResponse extends TrnBaseResponse {
  action: "tournament.room.ready"
  data: {
    /** 房間id */
    room_id: string;
    /** 房間結束時間 Unix timestamp，單位為豪秒 */
    end_time: number;
    players: PlayerListItemType[];
    [key: string]: any;
  }
}

export type RoomStateType = 'matching' | 'playing' | 'ending' |'ended' | 'cancelled';


export interface TrnRoomStateResponse extends TrnBaseResponse { 
  action: "tournament.room.updated"
  data: {
    tournament_id: string;
    room_id: string;
    rankings: TrnRankingItem[];
    status: RoomStateType;
    current_players: number;
    /** 房間總獎金 */
    total_pool_amount: number;
    [key: string]: any;
  }
}

export interface TrnPrizeAwardResponse extends TrnBaseResponse {
  action: "tournament.prize.awarded"
  data: TrnPrizeNotificationData;
}

export interface TrnPrizeAck extends TrnBaseRequest {
  action: "tournament.prize.ack";
  payload: {
    notification_id: string;
  }
}

export interface TrnEventRefreshItem {
  status: 'running';
  tournament_id: string;
}

export interface TrnEventRefreshResponse extends TrnBaseResponse {
  action: "tournament.events.refresh";
  data: {
    changed_at: string;
    events: TrnEventRefreshItem[];
  }
}


export interface TrnPrizeAck extends TrnBaseRequest {
  payload: {
    notification_id: string
  }
}

export interface TrnPlayerHistoryRequest extends TrnBaseRequest {
  action: "tournament.player.history",
  payload: {
    limit: number,
    offset: number
  }
}

/** 歷史紀錄單項 */
export interface TrnPlayerHistoryResponseItem {
  currency: string;
  event_type: 'quick_match' | 'long_term' | string;
  final_rank: number;
  final_score: number;
  /** Unix timestamp (e.g. 1617187200000) */
  finished_at: number;
  /** JSON string (e.g. "{\"icon\":\"...\"}"), 需要JSON.parse */
  images: string;
  /** 需要s2c轉換 */
  prize_amount: number;
  room_id: string;
  /** Unix timestamp (e.g. 1617187200000) */
  start_time: number;
  status: 'canceled' | 'finished' | 'settled' | string;
  tournament_id: string;
  /** JSON string, 需要JSON.parse */
  tournament_name: string;
}

export interface TrnPlayerHistoryResponse extends TrnBaseResponse {
  action: "tournament.player.history",
  data: {
    account_id: string,
    total_count: number,
    limit: number,
    offset: number,
    history: TrnPlayerHistoryResponseItem[];
  }
}

/** 排隊心跳請求 */
export interface TrnQueueHeartbeatRequest extends TrnBaseRequest {
  action: "tournament.queue.heartbeat";
  payload: {
    tournament_id: string;
  };
}

/** 取消配對請求 (僅允許在 matching 狀態下操作) */
export interface TrnCancelMatchRequest extends TrnBaseRequest {
  action: "tournament.event.cancel";
  payload: {};
}

/** 取消配對回應 */
export interface TrnCancelMatchResponse extends TrnBaseResponse {
  action: "tournament.event.cancel";
  data: {
    message: string;
  };
}

export type TrnRequestMsgType = TrnJoinMatchRequest | TrnCancelMatchRequest | TrnQueueHeartbeatRequest | TrnEventRankingRequest | TrnPlayerHistoryRequest | TrnBaseRequest;
export type TrnResponseMsgType = TrnJoinMatchResponse | TrnCancelMatchResponse | TrnQueuePlayerRemovedResponse | TrnQueueWaitingResponse | TrnRoomPlayerJoinedResponse |
 TrnRoomReadyResponse | TrnRoomStateResponse | TrnPlayerHistoryResponse | TrnBaseResponse;