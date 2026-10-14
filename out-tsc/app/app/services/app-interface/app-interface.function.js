/**
 * app-interface.function.ts
 * 網路API相關的函式, 不需要整個 Service 的功能
 */
import { protoDecode } from "../../library/Protobuf/proto-base";
import { serverProto } from "../../library/Protobuf/new_proto";
import { LoginResult, ServerInfo, SpinResult } from "../../library/Protobuf/proto-ext";
import { offlineLoginResult } from "./login-result.response";
import { offlineSpinResult } from "./spin-result.response";
/** 離線模式下，單純送封包的回應處理 */
export function offlinePackResponse(data) {
    switch (protoDecode(data).message) {
        /** 登入請求 */
        case serverProto.eMessageEnum.eME_C2S_LOGIN_REQUEST: {
            const loginResult = new LoginResult();
            loginResult.data = offlineLoginResult;
            return loginResult.pack;
        }
        /* Spin 請求 */
        case serverProto.eMessageEnum.eME_C2S_SPIN_REQUEST: {
            const spinResult = new SpinResult();
            spinResult.data = offlineSpinResult;
            return spinResult.pack;
        }
        case serverProto.eMessageEnum.eME_S2C_INFO: {
            const info = new ServerInfo(data);
        }
    }
    return null;
}
/** 確認圖片路徑是否有效 */
export async function checkValidImgPath(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true); // 成功載入
        img.onerror = () => resolve(false); // 載入失敗
        img.src = url;
        // 確保 cache 不影響檢查（可選）
        if (img.complete) {
            resolve(true);
        }
    });
}
/**
 * 確認某個  URL 是否存在且可存取
 * 必須同源或伺服器支援 CORS，否則會被瀏覽器擋下
 */
export async function checkValidUrl(url) {
    try {
        const res = await fetch(url, { method: 'HEAD' });
        return res.ok; // HTTP 狀態碼 200~299 就算成功
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=app-interface.function.js.map