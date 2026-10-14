import { ShortURLMessageResponse } from '../history-replay/history-replay.interface';
import { eLeaderBoardGameScope, eLeaderUserType, ILeaderBoardMessageResponse } from './leader-board.interface';


/**
 * 建立屬性檢查的 Type Guard
 */
export function hasRequiredProperties<T>(
  obj: any,
  properties: (keyof T)[]
): obj is T {
  return properties.every(prop => prop in obj);
}

/** 類型守衛：檢查物件是否為 ILeaderBoardMessageResponse 格式 */
export function isLeaderBoardMessage(obj: any): obj is ILeaderBoardMessageResponse {
  return obj && typeof obj === 'object' && 'tag' in obj;
}

/**
 * 判斷 tag 是否為個人排行榜
 * @param tag - Tag name 字串
 * @returns 是否為個人排行榜（包含 'Personal' 字串）
 * 
 * @example
 */
export function isLeaderboardPersonalResponse(tag: string): boolean {
  return tag.includes(eLeaderUserType.SingleUser);
}

/**
 * 產生快取 key
 * @param userType - 用戶類型
 * @param gameCode - 遊戲代碼
 * @returns 快取 key 字串
 * 
 * @example
 */
export function genLeadboardCacheKey(userType: string, gameCode: string): string {
  const gametype = gameCode ? eLeaderBoardGameScope.Single : eLeaderBoardGameScope.All;
  return `${userType}_${gametype}`;
}



