import { LoginResultNote } from "../../services/app-interface/login-result-note.interface";
import { serverProto } from "./new_proto";
import { ProtoBase, safeParse } from "./proto-base";
import { ISpinResultNote } from "../../services/app-interface/spin-result-note.interface";



export class LoginRequest extends ProtoBase<serverProto.Ilogin>{
  override ResultCtor = LoginResult;
  protected get messageID() { return serverProto.eMessageEnum.eME_C2S_LOGIN_REQUEST; }
  protected encode(data: serverProto.Ilogin) { return serverProto.login.encode(data).finish(); }
  protected decode(data: Uint8Array) { return serverProto.login.decode(data); }
  constructor() {
    super();
    this.data = serverProto.login.create();
  }
}

export class LoginResult extends ProtoBase<serverProto.Ilogin_result>{
  protected get messageID() { return serverProto.eMessageEnum.eME_S2C_LOGIN_RESULT; }
  public get note(): LoginResultNote {
    return safeParse(this.data.note || '{}') as LoginResultNote;
  }
  protected encode(data: serverProto.Ilogin_result) { return serverProto.login_result.encode(data).finish(); }
  protected decode(data: Uint8Array) {
    const ret = serverProto.login_result.decode(data);
    return ret;
  }
  constructor(buffer?: ArrayBufferLike) {
    super();
    if (buffer === undefined) {
      this.data = serverProto.login_result.create();
      return;
    }
    this.pack = buffer;
  }
}
export class SpinRequest extends ProtoBase<serverProto.Ispin> {
  protected get messageID() { return serverProto.eMessageEnum.eME_C2S_SPIN_REQUEST; }
  override ResultCtor = SpinResult;
  protected encode(data: serverProto.Ispin) { return serverProto.spin.encode(data).finish(); }
  protected decode(data: Uint8Array) { return serverProto.spin.decode(data); }
  constructor(buffer?: ArrayBufferLike) {
    super();
    if (buffer === undefined) {
      this.data = serverProto.spin.create();
      return;
    }
    this.pack = buffer;
  }
}

export class SpinResult extends ProtoBase<serverProto.Ispin_result> {
  public get note(): ISpinResultNote {
    const noteString = this.data.note?.replace(/`/g, '"') || '{}';
    return safeParse(noteString) as ISpinResultNote;
  }
  protected get messageID() { return serverProto.eMessageEnum.eME_S2C_SPIN_RESULT; }
  protected encode(data: serverProto.Ispin_result) { return serverProto.spin_result.encode(data).finish(); }
  protected decode(data: Uint8Array) {
    const ret = serverProto.spin_result.decode(data);
    const noteBalance = this.note.balance;
    if (typeof noteBalance === 'number' && !isNaN(noteBalance))
      this.data.balance = noteBalance;
    return ret;
  }
  constructor(buffer?: ArrayBufferLike) {
    super();
    if (buffer === undefined) {
      this.data = serverProto.spin_result.create();
      return;
    }
    this.pack = buffer;
  }
}

export class ServerInfo extends ProtoBase<serverProto.Iinfo> {
  /** 已解析的json訊息 */
  public get msg(): any { 
    // 如果是合法json就回傳parsed物件，否則回傳原始字串
    try {
      return JSON.parse(this.data.msg || '{}');
    } catch {
      return this.data.msg;
    }
  }
  protected get messageID() { return serverProto.eMessageEnum.eME_S2C_INFO; }
  protected encode(data: serverProto.Iinfo) { return serverProto.info.encode(data).finish(); }
  protected decode(data: Uint8Array) {
    const ret = serverProto.info.decode(data);
    return ret;
  }
  constructor(buffer?: ArrayBufferLike) {
    super();
    if (buffer === undefined) {
      this.data = serverProto.info.create();
      return;
    }
    this.pack = buffer;
  }
}