/**
 * serverProto.info.eCodeEnum 對應的 Info Key
 */
import { serverProto } from "../../library/Protobuf/new_proto";
/** Info Key對應的Code */
export const InfoCodeMap = {
    UpdateBalance: serverProto.info.eCodeEnum.eCE_UPDATE_BALANCE,
    PromoCode: serverProto.info.eCodeEnum.eCE_CASH_DROP_INFO,
    CashDrop: serverProto.info.eCodeEnum.eCE_CASH_DROP_INFO,
    LeaderBoard: serverProto.info.eCodeEnum.eCE_HISTORY_INFO,
    History: serverProto.info.eCodeEnum.eCE_HISTORY_INFO,
    RewardSystem: serverProto.info.eCodeEnum.eCE_RS,
    RSNotifyCenter: serverProto.info.eCodeEnum.eCE_RS_NOTIFY_CENTER,
    Tournament: 17,
    /** 心跳包 */
    KeepAlive: 9999
};
/** 從code反查Info Key */
export const InfoKeyMap = Object.entries(InfoCodeMap).reduce((obj, [key, value]) => {
    obj[value] = key;
    return obj;
}, {});
//# sourceMappingURL=info.interface.js.map