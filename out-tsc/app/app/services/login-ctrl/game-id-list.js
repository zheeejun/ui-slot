import { UseInGameUIIDArray } from "../../../diresoftcocoscreatorslotcommon/Common/UseInGameUIList";
/** 判斷是否使用舊的 in-game UI
 * @augments id: 要檢查的遊戲ID. 如果要知道目前遊戲的UI模式，請使用 LoginCtrlService 的 isUseInGameUI()
 */
export function isUseInGameUI(id) {
    return useInGameUIlist.includes(id || '');
}
/** 判斷是否使用 HTML UI
 * @augments id: 要檢查的遊戲ID. 如果要知道目前遊戲的UI模式，請使用 LoginCtrlService 的 isUseHtmlUI()
 */
export function isUseHtmlUI(id) {
    return !isUseInGameUI(id);
}
export const useInGameUIlist = UseInGameUIIDArray || [];
//# sourceMappingURL=game-id-list.js.map