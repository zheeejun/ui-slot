import { serverProto } from "./new_proto";
import { ProtoBase, safeParse } from "./proto-base";
export class LoginRequest extends ProtoBase {
    ResultCtor = LoginResult;
    get messageID() { return serverProto.eMessageEnum.eME_C2S_LOGIN_REQUEST; }
    encode(data) { return serverProto.login.encode(data).finish(); }
    decode(data) { return serverProto.login.decode(data); }
    constructor() {
        super();
        this.data = serverProto.login.create();
    }
}
export class LoginResult extends ProtoBase {
    get messageID() { return serverProto.eMessageEnum.eME_S2C_LOGIN_RESULT; }
    get note() {
        return safeParse(this.data.note || '{}');
    }
    encode(data) { return serverProto.login_result.encode(data).finish(); }
    decode(data) {
        const ret = serverProto.login_result.decode(data);
        return ret;
    }
    constructor(buffer) {
        super();
        if (buffer === undefined) {
            this.data = serverProto.login_result.create();
            return;
        }
        this.pack = buffer;
    }
}
export class SpinRequest extends ProtoBase {
    get messageID() { return serverProto.eMessageEnum.eME_C2S_SPIN_REQUEST; }
    ResultCtor = SpinResult;
    encode(data) { return serverProto.spin.encode(data).finish(); }
    decode(data) { return serverProto.spin.decode(data); }
    constructor(buffer) {
        super();
        if (buffer === undefined) {
            this.data = serverProto.spin.create();
            return;
        }
        this.pack = buffer;
    }
}
export class SpinResult extends ProtoBase {
    get note() {
        const noteString = this.data.note?.replace(/`/g, '"') || '{}';
        return safeParse(noteString);
    }
    get messageID() { return serverProto.eMessageEnum.eME_S2C_SPIN_RESULT; }
    encode(data) { return serverProto.spin_result.encode(data).finish(); }
    decode(data) {
        const ret = serverProto.spin_result.decode(data);
        const noteBalance = this.note.balance;
        if (typeof noteBalance === 'number' && !isNaN(noteBalance))
            this.data.balance = noteBalance;
        return ret;
    }
    constructor(buffer) {
        super();
        if (buffer === undefined) {
            this.data = serverProto.spin_result.create();
            return;
        }
        this.pack = buffer;
    }
}
export class ServerInfo extends ProtoBase {
    /** 已解析的json訊息 */
    get msg() {
        // 如果是合法json就回傳parsed物件，否則回傳原始字串
        try {
            return JSON.parse(this.data.msg || '{}');
        }
        catch {
            return this.data.msg;
        }
    }
    get messageID() { return serverProto.eMessageEnum.eME_S2C_INFO; }
    encode(data) { return serverProto.info.encode(data).finish(); }
    decode(data) {
        const ret = serverProto.info.decode(data);
        return ret;
    }
    constructor(buffer) {
        super();
        if (buffer === undefined) {
            this.data = serverProto.info.create();
            return;
        }
        this.pack = buffer;
    }
}
//# sourceMappingURL=proto-ext.js.map