/**
 * Spin Request Note 介面
 */

import { SpinModeType } from "../../../chiikawa/ApWeb/ApWebInterface";


export interface SpinDataNote {
  /** 買玩法都在這 所以後續要買什麼新玩法時 也會加在這個 key 裡面 */
  mode?: SpinModeType;
  /** 各遊戲的客製參數 */
  game?: string;
  /** 手選遊戲的 Free Game 就傳1 未來會新增其他模式 */
  game_stage?: string;
  /** 遊戲的RTP, 目前OG會用到 */
  game_rtp?: string;
  /** Server 效能參考變數 */
  game_parameters?: {
    /** 兩次點擊click的間隔, 首次為0 */
    round_time_gap: number;
    /** 兩次表演完的間隔, 首次為0 */
    last_spin_duration: number;
    /** Spin 速度 (0, 1, 2) */
    spin_speed: number;
    /** Date.now()的值 (milliseconds) */
    spin_epoch: number;
    /** 目前autospin的次數, 無限次 = -1, 沒有 = undefined */
    auto_spin?: number;
  };
  /** free 的種類, 目前有 "RS" */
  free_type?: string;
  /** 使用的 編號, RS是道具編號 ItemNo */
  free_no?: string;
  /** free 使用的 ticket. RS 是道具id ItemId */
  free_ticket?: string;
  /** Tournament ID */
  tournament_id?: string;
  /** Tournament 房間ID */
  room_id?: string
  /** Tournament 額外增加的金額 */;
  extra_amount?: number;
  /** 活動ID */
  campaign_id?: string;
  /** 活動錢包ID */
  bonus_wallet_id?: number;
  //以下 OG 使用
  /** 使用登入給的active server seed hash */
  server_seed_hash?: string;
  /** 使用登入給的active client seed */
  client_seed?: string;
  /** 登入會給nonce起始值, 之後每完成一把會+1 */
  nonce?: number;
}