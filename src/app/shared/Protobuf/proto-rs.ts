/*import { serverProto } from "./new_proto";
import { ProtoBase, ProtoRequest, ProtoResult } from "./proto-base";
import { rs } from "./rs.interface";

export class RsResultVipData extends ProtoResult<serverProto.info> {
  public msg!: rs.IVipDataMsg;
  constructor() {
    super();
    this.decodeFunc = (data: serverProto.info) => {
      const ret = serverProto.info.decode(data);
      this.msg = JSON.parse(ret.msg);
      if (ret.code !== rs.info.eCodeEnum.eCe_RS)
        throw new Error(`${ret.code} is not eCe_RS`);
      return ret;
    }
    this.messageID = serverProto.eMessageEnum.eME_S2C_INFO;
    this.data = serverProto.info.create();
  }
}

export class RsRequestVipData extends ProtoRequest<serverProto.info> {
  public override ResultCtor = RsResultVipData;
  public type: number = rs.info.eTypEnum.eVIP_DATA
  constructor() {
    super();
    this.encodeFunc = (data: serverProto.info) => { 
      data.msg = JSON.stringify({type: this.type});
      return serverProto.info.encode(data).finish();
    }
    this.messageID = serverProto.eMessageEnum.eME_S2C_INFO;
    this.data = serverProto.info.create();
    this.data.code = rs.info.eCodeEnum.eCe_RS;
  }
}*/

