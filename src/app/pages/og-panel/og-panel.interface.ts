export type OgChickenGameState = 'ready' | 'playing';

export type OgChickenDifficultyType = 'easy' | 'medium' | 'hard' | 'expert';

/** 難度等級：0（最低）～ 3（最高） */
export enum OgChickenDifficultyEnum {
  easy = 0,
  medium = 1,
  hard = 2,
  expert = 3,
}

export enum OgChickenGameStage {
  firstGo = '0',
  afterFirstGo = '1',
}

/** 玩家請求前進或兌獎的參數 */
export type OgChickenGameRequest = {
  /** 難度等級 */
  risk: OgChickenDifficultyEnum;
  /** 目前所在的格數（絕對值），可從 0 開始，即上一次回應停在的格數 */
  start: number;
  /** 玩家想直接抵達的目標格數（絕對值，≥ 1，需 ≥ start），可一次跳多步 */
  end: number;
  /** true = 兌獎（CashOut）；false = 繼續前進 */
  finish: boolean;
};

/** 從請求的 start 前進到目前所在格之間，其中一步的過程 */
export type OgChickenGameStep = {
  /** 這一步開始的格數 */
  begin: number;
  /** 這一步結束的格數 */
  end: number;
  /** 這一步移動的格數 */
  move: number;
  /** 這一步的轉盤結果，格式為 `倍率_分數_位置`，沒有則為空字串, ex: 3_30000, 分數部分需要s2c */
  wheels: string[];
  /** 這一步的收集結果，格式為 `步數_本格之前階段_本格之後階段`, ex: "1_0_0" */
  collect: string;
  /** 這一步的固定格子倍率與分數，格式為 `倍率_分數`, ex: 1.1_11000, 分數部分需要s2c */
  step_rate: string;
  /** 這一步贏得的分數 */
  step_score: number;
  /** true = 這一步玩家死亡（僅死亡時出現） */
  is_dead?: boolean;
  /** true = 這一步玩家兌獎（僅兌獎時出現） */
  is_cashout?: boolean;
};

/** 遊戲進行、死亡或兌獎後的回應結果 */
export type OgChickenGameEvent = {
  /** true = 本局已結算（派彩或歸零） */
  finish: boolean;
  /** 本局種子使用次數，用於公平性驗證 */
  nonce: number;
  /** 本局使用的 RTP ex: "96" */
  rtp: string;
  /** 本局難度等級 */
  risk: OgChickenDifficultyEnum;
  /** 目前為止累積拿到的分數, 需要s2c（兌獎時等於最終派彩分數；死亡時為死亡前已贏得的轉盤獎金） */
  total_score: number;
  /** 從請求的 start 之後到目前所在格的過程 */
  steps: OgChickenGameStep[];
  /** 死亡格數（僅當死亡時出現），玩家在此格結束 */
  dead: number;
  /** 最大倍率 (死亡的前一格) ex: "2.41" */
  max: string;
  /** 兌獎格數（僅當兌獎時出現），玩家在此格結束 */
  cashout?: number;
};
