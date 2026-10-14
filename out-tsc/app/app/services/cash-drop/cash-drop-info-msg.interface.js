/**
 * Cash Drop 與後端通訊的訊息介面定義
 */
import { eCashDropMessageType } from "../../../diresoftcocoscreatorslotcommon/Promo/CashDrop/CashDropDataType";
/** Cash Drop Key對應的cd_type, 用來判斷info是否為Cash Drop訊息 */
export const CashDropCodeMap = {
    //ClickMystery: eCashDropMessageType.eCDMT_cd_type_Click_Mystery,
    PrizeList: eCashDropMessageType.eCDMT_cd_type_Prize_List,
    RuleData: eCashDropMessageType.eCDMT_cd_type_Rule_Data,
    LatestWinnerList: eCashDropMessageType.eCDMT_cd_type_Latest_Winner_List,
    BiggestWinnerList: eCashDropMessageType.eCDMT_cd_type_Biggest_Winner_List,
    //略過 MostWinnerList
    MostWinnerList: eCashDropMessageType.eCDMT_cd_type_Most_Winner_List,
    YouWinList: eCashDropMessageType.eCDMT_cd_type_You_Win_List,
    //CloseCashDrop: eCashDropMessageType.eCDMT_cd_type_Close_Cash_Drop,
};
//# sourceMappingURL=cash-drop-info-msg.interface.js.map