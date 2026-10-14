/**
 * 存放在window.name裡面的資料結構, 用來存放遊戲啟動可讀取的參數
 */
export class ApWebBase {
    _mode = "ap-none"; // 模式
    setMode(mode) { this._mode = mode; }
    get mode() { return this._mode; }
    /** 是否使用ApWebSocket */
    get isUseApSocket() {
        return this.mode === "ap-bridge" || this.mode === "ap-cover";
    }
    /** 遊戲是否在離線模式下運行 */
    get isOfflineMode() {
        return this.mode === "ap-master";
    }
    /** 是否關閉左上角遊戲名稱 */
    get isCloseGameName() {
        return this.mode === "ap-cover" ||
            this.mode === "ap-bridge" ||
            this.mode === "ap-history" ||
            this.mode === "ap-replay" ||
            this.mode === "ap-replay-game-ui";
    }
    /** 是否在關閉遊戲內建的UI */
    get isCloseInGameUi() {
        return this.mode === "ap-cover" ||
            this.mode === "ap-master" ||
            this.mode === "ap-history" ||
            this.mode === "ap-replay";
    }
    /** 是否使用ApWeb覆蓋遊戲UI */
    get isUseInGameUI() {
        return !this.isCloseInGameUi;
    }
    /** 遊戲是否需要Handler處理與父窗口的通訊 */
    get isNeedHandler() {
        return this.mode === "ap-cover" ||
            this.mode === "ap-bridge" ||
            this.mode === "ap-master" ||
            this.mode === "ap-history" ||
            this.mode === "ap-replay" ||
            this.mode === "ap-replay-game-ui";
    }
    /** 是否回傳重播時候的Bet */
    get isReturnBetInReplay() {
        return this.mode === "ap-replay" || this.mode === "ap-replay-game-ui";
    }
    /** 將Buy Feature按鈕的功能由ApWeb處理 */
    get isBuyFeatureToApWeb() {
        return this.mode === "ap-bridge" || this.mode === "ap-cover" || this.mode === "ap-master";
    }
    /** 將open promo按鈕的功能由ApWeb處理 */
    get isOpenPromoToApWeb() {
        return this.mode === "ap-cover" || this.mode === "ap-master";
    }
    /** 是否需要替換轉址由ApWeb處理 */
    get isReplaceRedirection() {
        return this.mode === "ap-bridge" || this.mode === "ap-cover";
    }
    /** 是否需要將下注資料傳送到ApWeb */
    get isSendBetDataToApWeb() {
        return this.mode === "ap-bridge";
    }
    /** 解析JSON */
    constructor(json) {
        // 需要用catch包起來, 因為有可能會parse失敗
        try {
            if (json) {
                const obj = JSON.parse(json);
                for (const key in obj) {
                    if (this.hasOwnProperty(key)) {
                        this[key] = obj[key];
                    }
                }
            }
        }
        catch (e) {
        }
    }
    toString() {
        return JSON.stringify(this);
    }
}
//# sourceMappingURL=ApWebBase.js.map