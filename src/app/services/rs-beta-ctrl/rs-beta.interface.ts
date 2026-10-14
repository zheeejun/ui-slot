export namespace rs {
  export namespace info {
    /** eCodeEnum enum. */
    export enum eCodeEnum {
      eCE_JP = 0,
      eCE_ERROR = 1,
      eCE_HISTORY_INFO = 2,
      eCE_UPDATE_BALANCE = 3,
      eCE_GAME_INFO = 4,
      eCE_JP_WIN_DATA = 5,
      eCE_CASH_DROP_INFO = 10,
      eCe_RS = 11,
      eCe_CommonMessage = 12,
      eCe_ChangeSeed = 14,
      eCE_MAX
    }

    /** eCodeEnum enum. */
    // 裡面的 數值 亂跳, 是因為 server 改動幾次後結果.
    export enum eTypEnum {
      eBACKPACK_ITEM_SETTING = 101,
      eBACKPACK_USER_ITEM_LIST = 102,
      eBACKPACK_USE_USER_ITEM = 103,
      eBACKPACK_DEL_USER_ITEM = 104,
      eBACKPACK_FEATURED_GAME_LIST = 105,
      eBACKPACK_ITEM_HISTORY = 107,
      eVIP_DATA = 201,
      eVIP_SETTING = 202,
      eVIP_REWARD_HISTORY = 203,
      eVIP_REBATES_HISTORY = 204,
      eVIP_REWARD_HISTORY_TOTAL = 205,
      eVIP_REBATES_HISTORY_TOTAL = 206,
      eBACKPACK_SELL_ITEM_LIST = 301,
      eBACKPACK_BUY_ITEM = 302,
      eMISSION_LUCKWHEEL_TICKET_EXP = 504,
      eLUCKWHEEL_USER_TICKETS_DATA = 501,
      eLUCKWHEEL_USE_TICKET = 502,
      eLUCKWHEEL_GET_WHEEL_PLATE = 503,
      eLUCKWHEEL_RP_CASH_HISTORY = 505,
      eLUCKWHEEL_RP_CASH_HISTORY_TOTAL = 506,
      eCOMMON_MSG = 801,
      eLUCKWHEEL_CHANGE_PLATE = 802,
      eBACKPACK_CHANGE_ITEM_SETTING = 803,
      eBACKPACK_CHANGE_ITEM_STATUS = 804,
      eVIP_USER_SPIN_VIP_LV_UP = 805,
      eBACKPACK_CHANGE_STORE_ITEM = 806,
      eRSServerDown = 801,
      eDEV_GET_ITEM = 901,
      eDEV_VIP_EXP = 902,
      eDEV_LUCKWHEEL_EXP = 903,
      eDEV__CHANGE_PLATE = 904,
      eDEV_CHANGE_ITEMSTATUS = 905,
      eDEV_CHANGE_ITEMSTATUS_V2 = 906,
      e_MAX
    }

    /** eCodeEnum enum. */
    export enum eCommonMsgTypEnum {
      eVIP = 1,
      eBACKPACK = 2,
      eLUCKWHEEL = 3,
      eCashItem = 4,
      e_MAX
    }

    /** eCodeEnum enum. */
    export enum eRSVIPCommonMsgEventEnum {
      eLVUP = 1,
    }

    /** eCodeEnum enum. */
    export enum eRSBackPackCommonMsgEventEnum {
      eUnknow = 1,
      eNewItem = 2,
      eNearExpireItem = 3,
      eExpireItem = 4,
      eCashItemSuccess = 5,
      eCahsItemFailed = 6,
      eRPItemSuccess = 7,
      eError = 99,
      e_MAX
    }

    /** eFuncTypeEnum enum. */
    export enum eFuncTypeEnum {
      eRealTime = 2001, //即時訊息.
      eUnreadCount = 2002,   //未讀訊息數量.
      eReaded = 2003, //已讀訊息.
      eQueryMessageList = 2004, //訊息列表.
      eExtraCount = 2005, // NotifyType = Extra 未讀數量.
      eExtraMessageList = 2006, // NotifyType = ExtraMessage 即時訊息[].
      eQueryServiceMantainInfo = 3001,  //維修資訊.及附帶訊息.
      eReadedServiceManntainFinishMsg = 3002, //己讀維修完成資訊.
      eServiceStatusChange = 8001, //系統維護狀態變更.
      eUnreadedServiceMantianFinishMsg = 8002, //即時系統維護結束訊息.
      eDevSendFakeMsg = 9001, //發送 Message.	
      e_MAX
    }

    /** eFuncTypeEnum enum. */
    export enum eNotifyTypeEnum {
      eMessage = "Message",
      eExtra = "Extra",
      eLetter = "Letter",
      eBroadcast = "Broadcast"
    }

    export enum NofityServiceNamesEnum {
      ePromoRS = "PromoRS"
    }

    export enum NofityExtraTypeNamesEnum {
      ePromoRS_VIP = "VIP",
      ePromoRS_BACKPACK = "Item",
      ePromoRS_LUCKWHEEL = "LuckyWheel",
      ePromoRS_CASHITEM = "CashItem",
    }

  }

  export interface IVipDataMsg {
    Type: number;
    Points: number;
    PointRation: string;
    LV: number;
    EXP: number;
    EXP_MON: string;
    LV_EXP_List: any[]; // 若已知內部型別可進一步細化
    History_Year: string;
    History: string; // 如果想轉成數字陣列可改成 `number[]`
  }
}