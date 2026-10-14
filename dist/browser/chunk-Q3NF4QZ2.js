import {
  LoggerService,
  MoneyText,
  ProtoBase,
  calc,
  dec,
  protoDecode,
  require_new_proto,
  safeParse
} from "./chunk-TIGXKRQH.js";
import {
  Injectable,
  Subject,
  __async,
  __toESM,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/app/services/network/network.service.ts
var NetworkService = class _NetworkService {
  socket = null;
  logger = inject(LoggerService);
  constructor() {
  }
  /** WebSocket事件訂閱 */
  openSubject = new Subject();
  messageSubject = new Subject();
  closeSubject = new Subject();
  errorSubject = new Subject();
  /** 外部訂閱接口 @example: network.open$.subscribe((event) => { ... }); */
  socketOpen$ = this.openSubject.asObservable();
  /** 外部訂閱接口 @example: network.message$.subscribe((event) => { ... }); */
  socketMessage$ = this.messageSubject.asObservable();
  /** 外部訂閱接口 @example: network.close$.subscribe((event) => { ... }); */
  socketClose$ = this.closeSubject.asObservable();
  /** 外部訂閱接口 @example: network.error$.subscribe((event) => { ... }); */
  socketError$ = this.errorSubject.asObservable();
  /** 發送封包訂閱 */
  sendSubject = new Subject();
  /** 外部訂閱接口 @example: network.send$.subscribe((pack) => { ... }); */
  socketSend$ = this.sendSubject.asObservable();
  /**
   * 開啟websocket連線
   * @param url WebSocket的URL
   * @returns
   */
  connect(url) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.socket = new WebSocket(url);
        this.socket.binaryType = "arraybuffer";
        this.socket.onopen = (event) => this.openSubject.next(event);
        this.socket.onmessage = (event) => this.messageSubject.next(event);
        this.socket.onclose = (event) => this.closeSubject.next(event);
        this.socket.onerror = (event) => this.errorSubject.next(event);
        let settled = false;
        const cleanup = () => {
          openSub.unsubscribe();
          errorSub.unsubscribe();
          closeSub.unsubscribe();
        };
        const resolveOnce = (ev) => {
          if (!settled) {
            settled = true;
            cleanup();
            resolve(ev);
          }
        };
        const rejectOnce = (err) => {
          if (!settled) {
            settled = true;
            cleanup();
            reject(err);
          }
        };
        const openSub = this.socketOpen$.subscribe((event) => resolveOnce(event));
        const errorSub = this.socketError$.subscribe((event) => rejectOnce(new Error(`WebSocket error: ${event}`)));
        const closeSub = this.socketClose$.subscribe((event) => rejectOnce(new Error(`WebSocket closed: ${event}`)));
      });
    });
  }
  pendingRejects = [];
  cleanupSocket(reason) {
    for (const reject of this.pendingRejects) {
      try {
        reject(new Error(reason || "WebSocket disconnected"));
      } catch {
      }
    }
    this.pendingRejects.length = 0;
    if (this.socket) {
      this.socket.onopen = null;
      this.socket.onmessage = null;
      this.socket.onclose = null;
      this.socket.onerror = null;
    }
  }
  /** 斷開WebSocket連線 */
  disconnect(code, reason) {
    if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
      try {
        this.socket.close(code, reason);
      } catch {
      }
    }
    this.cleanupSocket(reason);
    this.socket = null;
  }
  /**
   * 單純送出封包，不等待回覆，也不重試。
   */
  sendPack(pack) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      this.logger.error("WebSocket is not open");
      this.sendSubject.next(pack);
      return;
    }
    this.socket.send(pack);
    this.sendSubject.next(pack);
  }
  static \u0275fac = function NetworkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NetworkService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NetworkService, factory: _NetworkService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NetworkService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/Protobuf/proto-ext.ts
var import_new_proto = __toESM(require_new_proto());
var LoginRequest = class extends ProtoBase {
  ResultCtor = LoginResult;
  get messageID() {
    return import_new_proto.serverProto.eMessageEnum.eME_C2S_LOGIN_REQUEST;
  }
  encode(data) {
    return import_new_proto.serverProto.login.encode(data).finish();
  }
  decode(data) {
    return import_new_proto.serverProto.login.decode(data);
  }
  constructor() {
    super();
    this.data = import_new_proto.serverProto.login.create();
  }
};
var LoginResult = class extends ProtoBase {
  get messageID() {
    return import_new_proto.serverProto.eMessageEnum.eME_S2C_LOGIN_RESULT;
  }
  get note() {
    return safeParse(this.data.note || "{}");
  }
  encode(data) {
    return import_new_proto.serverProto.login_result.encode(data).finish();
  }
  decode(data) {
    const ret = import_new_proto.serverProto.login_result.decode(data);
    return ret;
  }
  constructor(buffer) {
    super();
    if (buffer === void 0) {
      this.data = import_new_proto.serverProto.login_result.create();
      return;
    }
    this.pack = buffer;
  }
};
var SpinRequest = class extends ProtoBase {
  get messageID() {
    return import_new_proto.serverProto.eMessageEnum.eME_C2S_SPIN_REQUEST;
  }
  ResultCtor = SpinResult;
  encode(data) {
    return import_new_proto.serverProto.spin.encode(data).finish();
  }
  decode(data) {
    return import_new_proto.serverProto.spin.decode(data);
  }
  constructor(buffer) {
    super();
    if (buffer === void 0) {
      this.data = import_new_proto.serverProto.spin.create();
      return;
    }
    this.pack = buffer;
  }
};
var SpinResult = class extends ProtoBase {
  get note() {
    const noteString = this.data.note?.replace(/`/g, '"') || "{}";
    return safeParse(noteString);
  }
  get messageID() {
    return import_new_proto.serverProto.eMessageEnum.eME_S2C_SPIN_RESULT;
  }
  encode(data) {
    return import_new_proto.serverProto.spin_result.encode(data).finish();
  }
  decode(data) {
    const ret = import_new_proto.serverProto.spin_result.decode(data);
    const noteBalance = this.note.balance;
    if (typeof noteBalance === "number" && !isNaN(noteBalance))
      this.data.balance = noteBalance;
    return ret;
  }
  constructor(buffer) {
    super();
    if (buffer === void 0) {
      this.data = import_new_proto.serverProto.spin_result.create();
      return;
    }
    this.pack = buffer;
  }
};
var ServerInfo = class extends ProtoBase {
  /** 已解析的json訊息 */
  get msg() {
    try {
      return JSON.parse(this.data.msg || "{}");
    } catch {
      return this.data.msg;
    }
  }
  get messageID() {
    return import_new_proto.serverProto.eMessageEnum.eME_S2C_INFO;
  }
  encode(data) {
    return import_new_proto.serverProto.info.encode(data).finish();
  }
  decode(data) {
    const ret = import_new_proto.serverProto.info.decode(data);
    return ret;
  }
  constructor(buffer) {
    super();
    if (buffer === void 0) {
      this.data = import_new_proto.serverProto.info.create();
      return;
    }
    this.pack = buffer;
  }
};

// src/app/services/app-interface/app-interface.service.ts
var import_new_proto4 = __toESM(require_new_proto());

// src/app/services/app-interface/info.interface.ts
var import_new_proto2 = __toESM(require_new_proto());
var InfoCodeMap = {
  UpdateBalance: import_new_proto2.serverProto.info.eCodeEnum.eCE_UPDATE_BALANCE,
  PromoCode: import_new_proto2.serverProto.info.eCodeEnum.eCE_CASH_DROP_INFO,
  CashDrop: import_new_proto2.serverProto.info.eCodeEnum.eCE_CASH_DROP_INFO,
  LeaderBoard: import_new_proto2.serverProto.info.eCodeEnum.eCE_HISTORY_INFO,
  History: import_new_proto2.serverProto.info.eCodeEnum.eCE_HISTORY_INFO,
  RewardSystem: import_new_proto2.serverProto.info.eCodeEnum.eCE_RS,
  RSNotifyCenter: import_new_proto2.serverProto.info.eCodeEnum.eCE_RS_NOTIFY_CENTER,
  /** [API] ⬆️Server: [info] 14 RLeXOT43Vu */
  ChangeSeed: import_new_proto2.serverProto.info.eCodeEnum.eCE_CHANGE_SEED,
  Tournament: 17,
  /** 新版Campaign */
  Campaign: 18,
  /** 心跳包 */
  KeepAlive: 9999
};
var InfoKeyMap = Object.entries(InfoCodeMap).reduce((obj, [key, value]) => {
  obj[value] = key;
  return obj;
}, {});

// src/chiikawa/Promo/CashDrop/CashDropDataType.ts
var eCashDropMessageType;
(function(eCashDropMessageType2) {
  eCashDropMessageType2[eCashDropMessageType2["eCDMT_cd_type_Click_Mystery"] = 1] = "eCDMT_cd_type_Click_Mystery";
  eCashDropMessageType2[eCashDropMessageType2["eCDMT_cd_type_Prize_List"] = 2] = "eCDMT_cd_type_Prize_List";
  eCashDropMessageType2[eCashDropMessageType2["eCDMT_cd_type_Rule_Data"] = 3] = "eCDMT_cd_type_Rule_Data";
  eCashDropMessageType2[eCashDropMessageType2["eCDMT_cd_type_Latest_Winner_List"] = 4] = "eCDMT_cd_type_Latest_Winner_List";
  eCashDropMessageType2[eCashDropMessageType2["eCDMT_cd_type_Biggest_Winner_List"] = 5] = "eCDMT_cd_type_Biggest_Winner_List";
  eCashDropMessageType2[eCashDropMessageType2["eCDMT_cd_type_Most_Winner_List"] = 6] = "eCDMT_cd_type_Most_Winner_List";
  eCashDropMessageType2[eCashDropMessageType2["eCDMT_cd_type_You_Win_List"] = 7] = "eCDMT_cd_type_You_Win_List";
  eCashDropMessageType2[eCashDropMessageType2["eCDMT_cd_type_Close_Cash_Drop"] = 8] = "eCDMT_cd_type_Close_Cash_Drop";
  eCashDropMessageType2[eCashDropMessageType2["eCDMT_MAX"] = 9] = "eCDMT_MAX";
})(eCashDropMessageType || (eCashDropMessageType = {}));

// src/app/services/cash-drop/cash-drop-info-msg.interface.ts
var CashDropCodeMap = {
  //ClickMystery: eCashDropMessageType.eCDMT_cd_type_Click_Mystery,
  PrizeList: eCashDropMessageType.eCDMT_cd_type_Prize_List,
  RuleData: eCashDropMessageType.eCDMT_cd_type_Rule_Data,
  LatestWinnerList: eCashDropMessageType.eCDMT_cd_type_Latest_Winner_List,
  BiggestWinnerList: eCashDropMessageType.eCDMT_cd_type_Biggest_Winner_List,
  //略過 MostWinnerList
  MostWinnerList: eCashDropMessageType.eCDMT_cd_type_Most_Winner_List,
  YouWinList: eCashDropMessageType.eCDMT_cd_type_You_Win_List
  //CloseCashDrop: eCashDropMessageType.eCDMT_cd_type_Close_Cash_Drop,
};

// src/app/services/app-interface/app-interface.function.ts
var import_new_proto3 = __toESM(require_new_proto());

// src/app/services/app-interface/login-result.response.ts
var offlineLoginResult = {
  "version": "1.1.200617.2",
  "currency": "MYR",
  "money": 1998523579119,
  "note": '{"error":null,"uid":"1sDfmkOz7Z2saG8b","nickname":"AdvantPlayShawnPoorManPCAdvance_ForPC","auth":"L/K95s9rqif+sFoWjJBIW47W2q10A99PqoWcpbO5OOSnv9cjOZhEi3UWbAfnuFaT/o1SOR2AsHonk8dMiWed93txSlzqW962BmYD15rFaO8=","pid":"transferwallet","brand":"default","site":"transferwallet","status":"0","playcount":1235,"totalbet":5826071000,"totalwin":7341286632,"rswin":27703155,"rsbfrebate":8476245,"currency":"MYR","currency_symbol":"RM","balance":1998523579119,"forex":{},"betlevels":[2500,6000,9000,12000,18000,24000,60000,90000,120000,350000,600000,900000,1200000,3500000,10000000,15000000],"bet_level":["2500","6000","9000","12000","18000","24000","60000","90000","120000","350000","600000","900000","1200000","3500000","10000000","15000000"],"amountratio":1,"defaultbet":2,"freeticket":"","jackpot":"ggbook,ggbook","campaignlist":[{"begintime":"2025-09-09 06:45:23","bw_balance":84919,"bw_id":717,"campaign_id":"CP_dgoTwvL2XNlCfc","endtime":"2025-12-31 06:45:23","last_bet_time":"2025-12-31 06:45:23","name":"FBYOOOMAN333333","popup_msg":4,"turnover":0,"type":5,"visible":1,"withdraw_amount":0,"withdraw_lower_limit":42459,"withdraw_turnover_limit":42459,"withdraw_upper_limit":84919},{"campaign_id":"CP_dhf9Zg2sa6ItBO","endtime":"2025-12-31 09:50:21","name":"FreeBonusTurnover3","popup_msg":0,"turnover":9000,"turnover_limit":127379,"type":5},{"bet_count":0,"bet_count_limit":3,"campaign_id":"CP_dhfeSaZZSEHB3A","endtime":"2025-12-31 09:54:14","name":"FreeBonusBetCount3Turnover3","popup_msg":0,"turnover":0,"turnover_limit":127379,"type":5},{"bet_count":0,"bet_count_limit":3,"campaign_id":"CP_dj7BoqORcvJoPf","endtime":"2026-03-31 03:44:22","name":"FSBetCountTurnoverRe4","popup_msg":0,"turnover":0,"turnover_limit":42400,"type":6},{"begintime":"2025-09-18 10:18:10","bw_balance":0,"bw_id":0,"campaign_id":"CP_dk1ndolwghGQBT","endtime":"2026-07-31 10:18:10","freespin_remaining_count":3,"freespin_single_bet_amount":42400,"freespin_total_count":3,"freespin_total_win_amount":0,"is_freespin":true,"last_bet_time":"2026-07-31 10:18:10","name":"FSShowMeTheMoneyGG2","popup_msg":17,"turnover":0,"type":6,"visible":1,"withdraw_amount":0,"withdraw_lower_limit":42400,"withdraw_turnover_limit":0,"withdraw_upper_limit":254400},{"begintime":"2025-09-19 10:18:12","bw_balance":127200,"bw_id":715,"campaign_id":"CP_dkpVizf5n5QPQ1","endtime":"2026-03-31 10:18:12","last_bet_time":"2026-03-31 10:18:12","name":"FBGiveYouWaWa","popup_msg":4,"turnover":0,"type":5,"visible":1,"withdraw_amount":0,"withdraw_lower_limit":42400,"withdraw_turnover_limit":42400,"withdraw_upper_limit":254400}],"buyfeature":{"enable":1,"money_maxlimit":0},"rewardsystem":true,"coupon":1,"decimalplaces":3,"conversion_rate":10000,"livecheck_ttl":6000,"game_mode":[["bf1",50],["bf2",75],["dc",1.2]]}',
  "betList": [
    2500,
    6e3,
    9e3,
    12e3,
    18e3,
    24e3,
    6e4,
    9e4,
    12e4,
    35e4,
    6e5,
    9e5,
    12e5,
    35e5,
    1e7,
    15e6
  ]
};
var offlineLoginNote = {
  "error": null,
  "uid": "1sDfmkOz7Z2saG8b",
  "nickname": "AdvantPlayShawnPoorManPCAdvance_ForPC",
  "auth": "L/K95s9rqif+sFoWjJBIW47W2q10A99PqoWcpbO5OOSnv9cjOZhEi3UWbAfnuFaT/o1SOR2AsHonk8dMiWed93txSlzqW962BmYD15rFaO8=",
  "pid": "transferwallet",
  "brand": "default",
  "site": "transferwallet",
  "status": "0",
  "playcount": 1353,
  "totalbet": 5847051500,
  "totalwin": 7348378104,
  "rswin": 27782395,
  "rsbfrebate": 9651735,
  "currency": "MYR",
  "currency_symbol": "RM",
  "balance": 1998457145845,
  "forex": {},
  "betlevels": [
    2500,
    6e3,
    9e3,
    12e3,
    18e3,
    24e3,
    6e4,
    9e4,
    12e4,
    35e4,
    6e5,
    9e5,
    12e5,
    35e5,
    1e7,
    15e6
  ],
  "bet_level": [
    "2500",
    "6000",
    "9000",
    "12000",
    "18000",
    "24000",
    "60000",
    "90000",
    "120000",
    "350000",
    "600000",
    "900000",
    "1200000",
    "3500000",
    "10000000",
    "15000000"
  ],
  "amountratio": 1,
  "defaultbet": 2,
  "freeticket": "",
  "jackpot": "ggbook,ggbook",
  "campaignlist": [
    {
      "begintime": "2025-09-11 09:50:21",
      "bw_balance": 127379,
      "bw_id": 733,
      "campaign_id": "CP_dhf9Zg2sa6ItBO",
      "endtime": "2025-12-31 09:50:21",
      "last_bet_time": "2025-12-31 09:50:21",
      "name": "FreeBonusTurnover3",
      "popup_msg": 4,
      "turnover": 0,
      "type": 5,
      "visible": 1,
      "withdraw_amount": 0,
      "withdraw_lower_limit": 42459,
      "withdraw_turnover_limit": 84919,
      "withdraw_upper_limit": 254759
    },
    {
      "begintime": "2025-09-16 03:44:22",
      "bw_balance": 0,
      "bw_id": 0,
      "campaign_id": "CP_dj7BoqORcvJoPf",
      "endtime": "2026-03-31 03:44:22",
      "freespin_remaining_count": 3,
      "freespin_single_bet_amount": 4240,
      "freespin_total_count": 3,
      "freespin_total_win_amount": 0,
      "is_freespin": true,
      "last_bet_time": "2026-04-16 03:44:22",
      "name": "FSBetCountTurnoverRe4",
      "popup_msg": 17,
      "turnover": 0,
      "type": 6,
      "visible": 1,
      "withdraw_amount": 0,
      "withdraw_lower_limit": 12720,
      "withdraw_turnover_limit": 0,
      "withdraw_upper_limit": 42400
    },
    {
      "begintime": "2025-09-22 08:33:28",
      "bw_balance": 127200,
      "bw_id": 732,
      "campaign_id": "CP_dlzJwLE5y85Oby",
      "endtime": "2026-03-31 08:33:28",
      "last_bet_time": "2026-03-31 08:33:28",
      "name": "FreeBonusNeedBetCountWahahaReWardCount3",
      "popup_msg": 4,
      "turnover": 0,
      "type": 5,
      "visible": 1,
      "withdraw_amount": 0,
      "withdraw_lower_limit": 21200,
      "withdraw_turnover_limit": 84800,
      "withdraw_upper_limit": 254400
    },
    {
      "begintime": "2025-09-22 08:47:21",
      "bw_balance": 0,
      "bw_id": 0,
      "campaign_id": "CP_dlzYfWpRCUYahv",
      "endtime": "2026-04-30 08:47:21",
      "freespin_remaining_count": 3,
      "freespin_single_bet_amount": 21200,
      "freespin_total_count": 3,
      "freespin_total_win_amount": 0,
      "is_freespin": true,
      "last_bet_time": "2026-04-30 08:47:21",
      "name": "FreeSpinsBetCountRequireCound3",
      "popup_msg": 17,
      "turnover": 0,
      "type": 6,
      "visible": 1,
      "withdraw_amount": 0,
      "withdraw_lower_limit": 21200,
      "withdraw_turnover_limit": 0,
      "withdraw_upper_limit": 254400
    },
    {
      "begin_range": "",
      "begintime": "2025-09-25 10:00:07",
      "campaign_id": "CP_dmMG6LXHchQxKP",
      "cashdrop_iswin": false,
      "cashdrop_main_amount": 0,
      "cashdrop_main_count": 10,
      "cashdrop_main_no": "",
      "cashdrop_max_main_amount": 42400,
      "cashdrop_mystery_prizes": null,
      "end_range": "",
      "endtime": "2026-07-30 09:49:07",
      "image": "",
      "is_all_day": true,
      "min_bet_amount": 5e5,
      "name": "WahahaCD",
      "popup_msg": 0,
      "symbol": "coin_ap",
      "type": 4,
      "visible": 1
    },
    {
      "begin_range": "",
      "begintime": "2025-09-25 10:38:28",
      "campaign_id": "CP_dmNspjH5RR6eJL",
      "cashdrop_iswin": false,
      "cashdrop_main_amount": 0,
      "cashdrop_main_count": 9990,
      "cashdrop_main_no": "",
      "cashdrop_max_main_amount": 42400,
      "cashdrop_mystery_prizes": null,
      "end_range": "",
      "endtime": "2026-06-25 10:33:28",
      "image": "",
      "is_all_day": true,
      "min_bet_amount": 5e5,
      "name": "WahahaCDMyGo",
      "popup_msg": 0,
      "symbol": "egg",
      "type": 4,
      "visible": 1
    },
    {
      "begin_range": "10:25:32",
      "begintime": "2025-10-01 10:25:32",
      "campaign_id": "CP_dpTwxdJPkpRAaL",
      "cashdrop_iswin": false,
      "cashdrop_main_amount": 0,
      "cashdrop_main_count": 10,
      "cashdrop_main_no": "",
      "cashdrop_max_main_amount": 42400,
      "cashdrop_mystery_prizes": null,
      "end_range": "09:25:32",
      "endtime": "2025-10-16 09:25:32",
      "image": "",
      "is_all_day": false,
      "min_bet_amount": 5e5,
      "name": "CCCCDDDD",
      "popup_msg": 0,
      "symbol": "water_ballon",
      "type": 4,
      "visible": 1
    }
  ],
  "buyfeature": {
    "enable": 1,
    "money_maxlimit": 0
  },
  "rewardsystem": true,
  "coupon": 1,
  "decimalplaces": 3,
  "conversion_rate": 1e4,
  "livecheck_ttl": 6e3,
  "game_mode": []
};
offlineLoginResult.note = JSON.stringify(offlineLoginNote);

// src/app/services/app-interface/spin-result.response.ts
var offlineSpinResult = {
  "mainGame": {
    "plate": [
      {
        "winScore": 0,
        "reel": [
          {
            "symbol": [
              "L3",
              "L4",
              "H2"
            ]
          },
          {
            "symbol": [
              "L3",
              "L2",
              "H4"
            ]
          },
          {
            "symbol": [
              "L2",
              "H3",
              "L1"
            ]
          },
          {
            "symbol": [
              "E1",
              "E1",
              "L3"
            ]
          },
          {
            "symbol": [
              "L1",
              "H4",
              "L4"
            ]
          }
        ],
        "winData": [],
        "winPos": [],
        "event": '{"taichi":[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],"score":[[0,0,0],[0,0,0],[0,0,0],[50000,20000,0],[0,0,0]],"fgtimes":0,"tcfgtimes":[],"randomseed":3350073277}'
      }
    ]
  },
  "freeGame": [],
  "errorCode": "",
  "balance": 10005419686983,
  "note": "",
  "jp": ""
};

// src/app/services/app-interface/app-interface.function.ts
function offlinePackResponse(data) {
  switch (protoDecode(data).message) {
    /** 登入請求 */
    case import_new_proto3.serverProto.eMessageEnum.eME_C2S_LOGIN_REQUEST: {
      const loginResult = new LoginResult();
      loginResult.data = offlineLoginResult;
      return loginResult.pack;
    }
    /* Spin 請求 */
    case import_new_proto3.serverProto.eMessageEnum.eME_C2S_SPIN_REQUEST: {
      const spinResult = new SpinResult();
      spinResult.data = offlineSpinResult;
      return spinResult.pack;
    }
    case import_new_proto3.serverProto.eMessageEnum.eME_S2C_INFO: {
      const info = new ServerInfo(data);
    }
  }
  return null;
}
function isShortUrlMessage(obj) {
  return obj && typeof obj === "object" && "url" in obj;
}
function isTicketMessage(obj) {
  return obj && typeof obj === "object" && ("HistoryDetailData" in obj || "HistoryTicketData" in obj);
}

// src/app/services/leader-board/leader-board.interface.ts
var eLeaderUserType;
(function(eLeaderUserType2) {
  eLeaderUserType2["SingleUser"] = "SingleUserLeaderBoard";
  eLeaderUserType2["AllUser"] = "AllUserLeaderBoard";
})(eLeaderUserType || (eLeaderUserType = {}));
var eLeaderBoardGameScope;
(function(eLeaderBoardGameScope2) {
  eLeaderBoardGameScope2["Single"] = "SingleGame";
  eLeaderBoardGameScope2["All"] = "AllGames";
})(eLeaderBoardGameScope || (eLeaderBoardGameScope = {}));

// src/app/services/leader-board/leader-board.function.ts
function isLeaderBoardMessage(obj) {
  return obj && typeof obj === "object" && "tag" in obj;
}
function isLeaderboardPersonalResponse(tag) {
  return tag.includes(eLeaderUserType.SingleUser);
}
function genLeadboardCacheKey(userType, gameCode) {
  const gametype = gameCode ? eLeaderBoardGameScope.Single : eLeaderBoardGameScope.All;
  return `${userType}_${gametype}`;
}

// src/app/services/app-interface/app-interface.service.ts
var AppInterfaceService = class _AppInterfaceService {
  network = inject(NetworkService);
  logger = inject(LoggerService);
  _isOffline = false;
  /** 是否為離線模式 */
  get isOffline() {
    return this._isOffline;
  }
  /** Demo Spin結果 */
  demoSpinResult = null;
  // 以下都是給離線用的Socket訂閱
  openSubject = new Subject();
  messageSubject = new Subject();
  closeSubject = new Subject();
  errorSubject = new Subject();
  /** SocketOpen訂閱接口 @example: network.open$.subscribe((event) => { ... }); */
  get socketOpen$() {
    return this.openSubject.asObservable();
  }
  /** SocketMessage訂閱接口 @example: network.message$.subscribe((event) => { ... }); */
  get socketMessage$() {
    return this.messageSubject.asObservable();
  }
  /** SocketClose訂閱接口 @example: network.close$.subscribe((event) => { ... }); */
  get socketClose$() {
    return this.closeSubject.asObservable();
  }
  /** SocketError訂閱接口 @example: network.error$.subscribe((event) => { ... }); */
  get socketError$() {
    return this.errorSubject.asObservable();
  }
  //主動發送封包訂閱
  spinRequestSubject = new Subject();
  infoRequestSubject = new Subject();
  /** SpinRequest訂閱接口 @example: app.spinRequest$.subscribe((event) => { ... }); */
  get spinRequest$() {
    return this.spinRequestSubject.asObservable();
  }
  /** InfoRequest訂閱接口 @example: app.infoRequest$.subscribe((event) => { ... }); */
  get infoRequest$() {
    return this.infoRequestSubject.asObservable();
  }
  //依照服務類型的訂閱
  loginResultSubject = new Subject();
  spinResultSubject = new Subject();
  infoResultSubject = new Subject();
  updateBalanceSubject = new Subject();
  cashDropResultSubject = new Subject();
  promoCodeResultSubject = new Subject();
  trnSubject = new Subject();
  campaignSubject = new Subject();
  leaderBoardSubject = new Subject();
  historyReplaySubject = new Subject();
  historyResultSubject = new Subject();
  changedSeedSubject = new Subject();
  /** LoginResult訂閱接口 @example: app.loginResult$.subscribe((event) => { ... }); */
  get loginResult$() {
    return this.loginResultSubject.asObservable();
  }
  /** SpinResult訂閱接口 @example: app.spinResult$.subscribe((event) => { ... }); */
  get spinResult$() {
    return this.spinResultSubject.asObservable();
  }
  /** ServerInfo訂閱接口 @example: app.serverInfo$.subscribe((event) => { ... }); */
  get infoResult$() {
    return this.infoResultSubject.asObservable();
  }
  /** CashDropResult訂閱接口 @example: app.cashDropResult$.subscribe((event) => { ... }); */
  get cashDropResult$() {
    return this.cashDropResultSubject.asObservable();
  }
  /** PromoCodeResult訂閱接口 @example: app.promoCodeResult$.subscribe((event) => { ... }); */
  get promoCodeResult$() {
    return this.promoCodeResultSubject.asObservable();
  }
  /** Trn訂閱接口 @example: app.trn$.subscribe((event) => { ... }); */
  get trn$() {
    return this.trnSubject.asObservable();
  }
  /** Campaign訂閱接口 @example: app.campaign$.subscribe((event) => { ... }); */
  get campaign$() {
    return this.campaignSubject.asObservable();
  }
  /** LeaderBoard訂閱接口 @example: app.leaderBoard$.subscribe((event) => { ... }); */
  get leaderBoard$() {
    return this.leaderBoardSubject.asObservable();
  }
  /** LeaderBoard ShortLink訂閱接口 @example: app.getShortLink$.subscribe((event) => { ... }); */
  get historyReplay$() {
    return this.historyReplaySubject.asObservable();
  }
  /** 更新餘額訂閱接口 @example: app.updateBalance$.subscribe((event) => { ... }); */
  get updateBalance$() {
    return this.updateBalanceSubject.asObservable();
  }
  /** History訂閱接口 @example: app.historyResult$.subscribe((event) => { ... }); */
  get historyResult$() {
    return this.historyResultSubject.asObservable();
  }
  /** ChangeSeed訂閱接口 @example: app.changedSeed$.subscribe((event) => { ... }); */
  get changedSeed$() {
    return this.changedSeedSubject.asObservable();
  }
  /** 遊戲ID ex: 10001 */
  gameId = "10087";
  /** 使用的語言, api調閱資料很常需要語系, 直接綁在api裡面了 */
  language = "en";
  /** 目前連線的url */
  url = "";
  /** 登入用的Token */
  token = "";
  /** 顯示Log */
  get showLog() {
    return this.logger.apiLogEnabled;
  }
  /** 登入結果 */
  _loginResult = signal(null);
  /** 登入結果 */
  get loginResult() {
    return this._loginResult.asReadonly();
  }
  /** Login Result Note */
  loginResultNote = computed(() => this._loginResult()?.note || null);
  /** 使用者ID */
  userId = computed(() => this.loginResultNote()?.nickname ?? "");
  // 可以把常用的登入結果資料拆出來當成獨立的computed，避免每次使用都要寫loginResult()?.note?.xxx
  /** 貨幣符號 */
  currencySymbol = computed(() => this._loginResult()?.note?.currency_symbol);
  /** 貨幣符號代碼 */
  currencyCode = computed(() => this._loginResult()?.note?.currency);
  constructor() {
    this.network.socketSend$.subscribe(this.onSocketSend.bind(this));
    this.network.socketOpen$.subscribe((event) => {
      this.openSubject.next(event);
    });
    this.network.socketMessage$.subscribe((event) => {
      this.messageSubject.next(event);
    });
    this.network.socketClose$.subscribe((event) => {
      this.closeSubject.next(event);
    });
    this.network.socketError$.subscribe((event) => {
      this.errorSubject.next(event);
    });
    this.socketMessage$.subscribe((event) => {
      this.handleSocketMessage(event);
    });
  }
  /** 設定登入資訊, 用來給非Prod環境的登入 */
  setup(setting) {
    this.gameId = setting.gameId;
    this.url = setting.socketUrl || "";
    this.token = setting.authToken || "";
    this.language = setting.language;
    this._isOffline = setting.offline;
  }
  /** Socket連線 */
  connect() {
    return __async(this, null, function* () {
      if (this.isOffline) {
        this.openSubject.next(new Event("open"));
        return;
      }
      yield this.network.connect(this.url);
    });
  }
  /** 單純送出封包，不等待回覆，也不重試。 */
  sendPack(data) {
    if (this.isOffline) {
      const response = offlinePackResponse(data);
      if (response)
        this.messageSubject.next(new MessageEvent("message", { data: response }));
      return;
    }
    this.network.sendPack(data);
  }
  /** 傳送登入資訊, 可以用await等待回覆 */
  sendLogin() {
    return __async(this, null, function* () {
      const login = new LoginRequest();
      login.data.auth = this.token;
      const originalParams = new URLSearchParams(location.search);
      const params = new URLSearchParams();
      originalParams.forEach((value, key) => {
        params.append(key.toLowerCase(), value);
      });
      if (params.has("gameid")) {
        login.data.gameId = params.get("gameid");
      } else {
        login.data.gameId = this.gameId;
      }
      this.sendPack(login.pack);
      return new Promise((resolve, reject) => {
        const subscription = this.loginResult$.subscribe((result) => {
          resolve(result);
          subscription.unsubscribe();
        });
      });
    });
  }
  /** 傳送info msg到伺服器, 沒有等待回覆 */
  sendInfoMsg(key, msg) {
    const infoRequest = new ServerInfo();
    infoRequest.data.code = InfoCodeMap[key];
    infoRequest.data.msg = JSON.stringify(msg || {});
    this.sendPack(infoRequest.pack);
  }
  /** 傳送info msg到伺服器, 沒有等待回覆 , 不轉成JSON string*/
  sendInfoMsgNostringify(key, msg) {
    const infoRequest = new ServerInfo();
    infoRequest.data.code = InfoCodeMap[key];
    infoRequest.data.msg = msg || "";
    this.sendPack(infoRequest.pack);
  }
  /** 獲取兌換碼結果 */
  sendPromoCode(promoCode) {
    if (this.isOffline) {
    } else {
      this.sendInfoMsg("PromoCode", { coupon_code: promoCode });
    }
  }
  /**
   * 獲取Cash Drop結果，會依照key的類型強制補齊cd_type
   * 可以支援連續cash drop的request發送，再依照cd_type來分辨回傳結果
   * 之後可以補上timeout的機制
   */
  getCashDropResult(key, request) {
    if (this.isOffline) {
    }
    request.cd_type = CashDropCodeMap[key];
    const infoRequest = new ServerInfo();
    infoRequest.data.code = InfoCodeMap["CashDrop"];
    infoRequest.data.msg = JSON.stringify(request || {});
    this.sendPack(infoRequest.pack);
  }
  processLoginResult(event) {
    const loginResult = new LoginResult(event.data);
    const note = loginResult.note;
    calc.numberBase = note.conversion_rate;
    calc.amountRatio = note.amountratio ?? 1;
    Object.freeze(calc);
    dec.decimalPlaces = note.decimalplaces ?? 3;
    dec.disableComma = note.disable_comma ?? false;
    Object.freeze(dec);
    MoneyText.currencySymbol = note.currency_symbol ?? "";
    Object.freeze(MoneyText);
    loginResult.note.disable_tournament = true;
    this._loginResult.set(loginResult);
    this.loginResultSubject.next(loginResult);
    this.logger.apiLog("Server\u2B07\uFE0F: LoginResult Note", loginResult.note);
  }
  processSpinResult(event) {
    const spinResult = new SpinResult(event.data);
    this.spinResultSubject.next(spinResult);
    this.logger.apiLog("Server\u2B07\uFE0F: SpinResult", spinResult.data);
  }
  processInfo(event) {
    const info = new ServerInfo(event.data);
    this.infoResultSubject.next(info);
    if (info.data.code === InfoCodeMap["Tournament"]) {
      this.trnSubject.next(info.msg);
      this.logger.apiLog("Server\u2B07\uFE0F: Tournament Msg", info.msg);
      return;
    } else if (info.data.code === InfoCodeMap["Campaign"]) {
      this.campaignSubject.next(info.msg);
      this.logger.apiLog("Server\u2B07\uFE0F: Campaign Msg", info.msg);
      return;
    } else if (info.msg.coupon_code) {
      this.promoCodeResultSubject.next(info.msg);
      this.logger.apiLog("Server\u2B07\uFE0F: PromoCode Msg", info.msg);
      return;
    } else if (info.msg.cd_type) {
      this.cashDropResultSubject.next(info.msg);
      this.logger.apiLog("Server\u2B07\uFE0F: CashDrop Msg", info.msg);
      return;
    } else if (info.data.code === InfoCodeMap["UpdateBalance"]) {
      this.updateBalanceSubject.next(calc.s2c(info.msg));
      this.logger.apiLog("Server\u2B07\uFE0F: UpdateBalance Msg", info.msg);
      return;
    } else if (info.data.code === InfoCodeMap["ChangeSeed"]) {
      this.changedSeedSubject.next(info.msg);
      this.logger.apiLog("Server\u2B07\uFE0F: ChangeSeed Msg", info.msg);
      return;
    } else if (info.data.code === InfoCodeMap["LeaderBoard"] || info.data.code === InfoCodeMap["History"]) {
      if (isLeaderBoardMessage(info.msg)) {
        this.logger.apiLog("Server\u2B07\uFE0F: LeaderBoard Msg", info.data.code, info.msg);
        this.leaderBoardSubject.next(info.msg);
      } else if (isShortUrlMessage(info.msg) || isTicketMessage(info.msg)) {
        this.logger.apiLog("Server\u2B07\uFE0F: Replay Msg", info.data.code, info.msg);
        this.historyReplaySubject.next(info.msg);
      } else {
        this.logger.apiLog("Server\u2B07\uFE0F: History Msg", info.data.code, info.msg);
        this.historyResultSubject.next(info.msg);
      }
      return;
    } else {
      this.logger.apiLog("Server\u2B07\uFE0F: Info Msg", InfoKeyMap[info.data.code] || info.data.code, info.msg);
      return;
    }
  }
  /** 依照類型處理收到的Socket訊息，對應到訂閱 */
  handleSocketMessage(event) {
    const msg = protoDecode(event.data).message;
    switch (msg) {
      case import_new_proto4.serverProto.eMessageEnum.eME_S2C_LOGIN_RESULT:
        this.processLoginResult(event);
        break;
      case import_new_proto4.serverProto.eMessageEnum.eME_S2C_SPIN_RESULT:
        this.processSpinResult(event);
        break;
      case import_new_proto4.serverProto.eMessageEnum.eME_S2C_INFO:
        this.processInfo(event);
        break;
    }
  }
  onSocketSend(data) {
    const type = protoDecode(data).message;
    switch (type) {
      case import_new_proto4.serverProto.eMessageEnum.eME_C2S_SPIN_REQUEST:
        const spinRequest = new SpinRequest();
        spinRequest.pack = data;
        this.spinRequestSubject.next(spinRequest);
        this.logger.apiLog("\u2B06\uFE0FServer: [SpinRequest]", spinRequest.data);
        break;
      case import_new_proto4.serverProto.eMessageEnum.eME_S2C_INFO:
        const info = new ServerInfo();
        info.pack = data;
        this.infoRequestSubject.next(info);
        if (InfoKeyMap[info.data.code] === "KeepAlive")
          break;
        this.logger.apiLog("\u2B06\uFE0FServer: [info]", InfoKeyMap[info.data.code] || info.data.code, info.msg);
        break;
    }
  }
  /** 關閉API */
  close(code, reason) {
    this.network.disconnect(code, reason);
  }
  static \u0275fac = function AppInterfaceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInterfaceService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppInterfaceService, factory: _AppInterfaceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppInterfaceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SpinRequest,
  eCashDropMessageType,
  isShortUrlMessage,
  isTicketMessage,
  eLeaderUserType,
  isLeaderboardPersonalResponse,
  genLeadboardCacheKey,
  AppInterfaceService
};
//# sourceMappingURL=chunk-Q3NF4QZ2.js.map
