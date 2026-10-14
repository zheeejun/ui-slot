import { eLeaderBoardGameScope, eLeaderUserType } from './leader-board.interface';
/**
 * 建立屬性檢查的 Type Guard
 */
export function hasRequiredProperties(obj, properties) {
    return properties.every(prop => prop in obj);
}
/** 類型守衛：檢查物件是否為 ILeaderBoardMessageResponse 格式 */
export function isLeaderBoardMessage(obj) {
    return obj && typeof obj === 'object' && 'tag' in obj;
}
/**
 * 判斷 tag 是否為個人排行榜
 * @param tag - Tag name 字串
 * @returns 是否為個人排行榜（包含 'Personal' 字串）
 *
 * @example
 */
export function isLeaderboardPersonalResponse(tag) {
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
export function genLeadboardCacheKey(userType, gameCode) {
    const gametype = gameCode ? eLeaderBoardGameScope.Single : eLeaderBoardGameScope.All;
    return `${userType}_${gametype}`;
}
//# sourceMappingURL=leader-board.function.js.map