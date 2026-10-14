import { UseInGameUIIDArray } from "../../../chiikawa/Common/UseInGameUIList";

/** 判斷是否使用舊的 in-game UI
 * @augments id: 要檢查的遊戲ID. 如果要知道目前遊戲的UI模式，請使用 ClientSessionService 的 isUseInGameUI()
 */
export function isUseInGameUI(id: string | null | undefined): boolean {
  return useInGameUIlist.includes(id || '');
}

/** 判斷是否使用 HTML UI
 * @augments id: 要檢查的遊戲ID. 如果要知道目前遊戲的UI模式，請使用 ClientSessionService 的 isUseHtmlUI()
 */
export function isUseHtmlUI(id: string | null | undefined): boolean {
  return !isUseInGameUI(id);
}

export const useInGameUIlist: string[] = UseInGameUIIDArray || [];