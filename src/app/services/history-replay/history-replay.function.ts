import { UNSUPPORTED_REPLAY_GAME_IDS } from "./history-replay.config";

  /**
   * 檢查指定遊戲是否支援 History Replay 功能
   * @param gameId 遊戲 ID
   * @returns true 表示支援 History Replay，false 表示不支援
   */
  export function isHistoryReplaySupported(gameId: string): boolean {
    return !UNSUPPORTED_REPLAY_GAME_IDS.includes(gameId);
  }