/** 
 * serverProto.info.eCodeEnum 對應的 Info Key
 */


import { serverProto } from "../../shared/Protobuf/new_proto";

/** Info Key對應的Code */
export const InfoCodeMap: Record<string, serverProto.info.eCodeEnum | number> = {
  UpdateBalance: serverProto.info.eCodeEnum.eCE_UPDATE_BALANCE,
  PromoCode: serverProto.info.eCodeEnum.eCE_CASH_DROP_INFO,
  CashDrop: serverProto.info.eCodeEnum.eCE_CASH_DROP_INFO,
  LeaderBoard: serverProto.info.eCodeEnum.eCE_HISTORY_INFO,
  History: serverProto.info.eCodeEnum.eCE_HISTORY_INFO,
  RewardSystem: serverProto.info.eCodeEnum.eCE_RS,
  RSNotifyCenter: serverProto.info.eCodeEnum.eCE_RS_NOTIFY_CENTER,
  /** [API] ⬆️Server: [info] 14 RLeXOT43Vu */
  ChangeSeed: serverProto.info.eCodeEnum.eCE_CHANGE_SEED,
  Tournament: 17,
  /** 新版Campaign */
  Campaign: 18,
  /** 心跳包 */ 
  KeepAlive: 9999
};

/** 從code反查Info Key */
export const InfoKeyMap: Record<number, string> = Object.entries(InfoCodeMap).reduce((obj, [key, value]) => {
  obj[value] = key;
  return obj;
}, {} as Record<number, string>);

export type InfoMsgKey = keyof typeof InfoCodeMap;

export type InfoRequestMsgOf<K extends InfoMsgKey> =
  K extends "UpdateBalance" ? number :
  never;