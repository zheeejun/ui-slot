import { serverProto } from "./new_proto";

type PacketSecurity = {
    mMask: number[][],
    mMaskCount: number
}


const protoMask: number[][] = [
  [7, 94, 5, 3, 56, 11, 4, 41, 17, 44, 22, 87, 74, 156, 210, 5, 50, 66],
  [159, 123, 44, 21, 2, 17, 14, 4, 2],
  [74, 72, 114, 117, 46, 52, 103, 52, 103, 106, 57, 52, 44, 32, 106, 105, 51, 114, 117, 46, 52, 120, 48, 52],
  [189, 230, 98, 172, 34, 81, 65, 17, 48, 190, 23, 84, 7, 80, 39, 217, 4, 80, 91, 72, 58, 71, 230, 46, 183, 6, 5, 81, 93, 70, 81, 4, 70, 81, 92, 37, 40, 9, 82, 7, 134],
  [62, 3, 7, 8, 195, 67, 38, 254, 78, 9, 123, 47, 89, 213, 64, 78, 96, 129, 7, 46, 7, 238, 46, 78, 235, 19],
  [162, 34, 7, 8, 9, 72, 36, 5, 97, 86, 28, 9, 34],
  [9, 84, 71, 230, 85, 6, 3, 2, 87, 4, 193, 56, 120, 4, 70, 89, 234, 3, 109, 28, 56, 8, 167, 34],
  [78, 19, 30, 25, 63, 89, 47, 120, 39, 84, 70, 3, 217, 4, 56, 239, 84, 7, 10],
  [98, 74, 21, 35, 32, 14, 91, 230, 4, 73, 27, 48, 97, 35, 78, 21, 64, 78, 96, 21, 41],
  [109, 81, 72, 35, 87, 13, 20, 47, 21, 38, 90, 7, 40, 9, 38, 125, 6, 30, 79, 182, 40, 81, 23, 89, 5, 60, 62, 14, 78, 12, 49, 1],
  [73, 2, 84, 9, 105, 61, 3, 72, 9, 80, 1, 72, 30, 56, 39, 5, 69, 3, 78, 40, 39, 186, 30, 5, 62, 4, 7, 80, 46, 5, 78, 9, 235, 69, 8, 76, 9, 7, 86, 4, 29, 3, 78, 67, 1, 128, 93, 40, 63, 45, 60, 89, 132, 4, 70, 8, 21, 234, 54, 5, 66, 7, 75, 6, 74],
  [54, 123, 45, 13, 241, 45, 231, 241, 35, 31, 54, 3, 215, 43, 1, 254, 31, 254, 31, 254, 213, 54, 3, 215, 43, 215, 43, 1, 253, 215, 32, 154, 32, 153, 12, 35, 12, 53, 3, 213, 2],
  [38, 90, 7, 40, 9, 38, 125, 6, 30, 79, 182, 89, 213, 64, 78, 96, 129, 7, 46, 7, 238, 46, 78, 235, 231, 241, 35, 31, 54],
  [233, 179, 186, 147, 94, 39, 80, 180, 7, 80, 62, 162, 29, 37, 120, 194, 235, 229, 236, 165, 65, 239, 18, 73, 117],
  [147, 115, 87, 55, 210, 5, 175, 38, 216, 67, 84, 1, 148, 83],
  [253, 12, 221, 95, 253, 188, 29, 229, 75, 105, 128, 19, 11, 126, 215, 46, 29, 41, 137, 236, 29, 22, 76, 140, 123, 28, 142, 154, 127, 219, 151, 13, 65, 203, 93, 226, 83, 60, 166, 14, 138, 140, 99, 34, 33, 194, 61, 233, 14],
  [96, 108, 207, 85, 233, 134, 99, 82, 153, 170, 140, 166, 251, 79, 0, 115, 143, 93, 18, 120, 57, 93, 191, 43, 250, 170, 11, 244, 152, 142, 233, 154, 69, 11, 179, 72, 43, 242, 35, 37, 232],
  [40, 137, 153, 4, 179, 117, 28, 87, 2, 214, 212, 209, 229, 216, 247, 27],
  [112, 47, 80, 231, 249, 44, 102, 218, 110, 99, 152, 173, 185, 89, 109, 57, 212, 82, 238, 85, 29, 225, 227, 89],
  [94, 187, 40, 231, 16, 89, 116, 245, 120, 247, 32, 223, 13, 121, 96, 165, 87, 233, 123, 238, 43, 138, 12, 17, 155, 192, 5, 6, 238, 80, 38, 191, 13, 241, 86, 132, 216, 151, 53, 135, 193, 33, 158],
  [173, 144, 81, 193, 206, 215, 132, 244, 67, 7, 27, 214, 230, 90, 35, 11, 123, 197, 55, 121, 61, 15, 192, 165, 110, 7, 193, 216, 251, 145, 81],
  [173, 20, 179, 121, 40, 180, 200, 181, 202, 0, 97, 177, 75, 90, 246, 228, 25, 169, 38, 41, 239, 183, 217, 213, 87, 222, 118, 87, 178, 213, 205, 118, 189, 104, 174, 105, 250, 9, 49, 148, 5, 37, 44, 236, 70, 174],
  [147, 115, 87, 55, 210, 5, 175, 38, 216, 67, 84, 1, 148, 83, 108, 138, 81]
]
const proto_mask_count = protoMask.length;
const protoSecurity: PacketSecurity = {
  mMask: protoMask,
  mMaskCount: proto_mask_count
};

/** 產生mask編碼 */
function protoCreateMask() {
  /** 筆數 */
  let count = 20;
  /** 單筆最大長度 */
  let length_max = 50;
  /** 數值上限 */
  let n_max = 256;
  for (let i = 0; i < count; i++) {
    // 可能會有長度為0或是過短的問題
    let random_length = Math.floor(Math.random() * length_max);


    let temp_array: number[] = [];
    for (let j = 0; j < random_length; j++) {
        let temp_num = Math.floor(Math.random() * n_max);
        temp_array.push(temp_num);
    }
  }
}

/** 取得檢查碼 */
function getCheckCode(data: Uint8Array): Uint8Array {
  let tempUint8: Uint8Array = new Uint8Array(5);
  tempUint8[0] = 0; // 回傳值
  tempUint8[1] = 0; // 加7計算值
  tempUint8[2] = 0; // 乘7計算值
  tempUint8[3] = 3; // 固定除值
  tempUint8[4] = 0; // 餘數

  for (let i = 0; i < data.length; ++i) {
    tempUint8[1] = i + 7;
    tempUint8[2] = data[i] * tempUint8[1];
    tempUint8[4] = tempUint8[2] / tempUint8[3]; //javascript 所有運算都是以浮點數(number)為單位

    if (i % 2 == 0) {
        tempUint8[0] += tempUint8[4];
    }
    else {
        tempUint8[0] -= tempUint8[4];
    }
  
  }
  return tempUint8.slice(0, 1);
}

export function bindMessageID(e_ProtoBuf:Uint8Array,e_iMessageID:number): Uint8Array {
  // 產生檢查碼
  let args_data: Uint8Array = new Uint8Array(e_ProtoBuf.length + 1);
  args_data.set([e_iMessageID], 0);
  args_data.set(e_ProtoBuf, 1);

  // 建立封包
  let packet: Uint8Array = new Uint8Array(args_data.length + 1);
  let args_checkCode = getCheckCode(args_data);
  packet.set([args_checkCode[0]], 0);
  packet.set(args_data, 1);

  return packet;
}

  /** Encrypt 加密 */
export function protoEncrypt(data: Uint8Array) {
  let maskNum: number = data[0] % protoSecurity.mMaskCount;  //表的總量
  let maskLen: number = protoSecurity.mMask[maskNum].length; //該表的數量

  //加密(檢查碼不加密)
  for (let i: number = 1; i < data.length; ++i) {
    data[i] = data[i] + protoSecurity.mMask[maskNum][i % maskLen];
  }

  return data;
}

/** Decrypt 解密 */
function protoDecrypt(data: Uint8Array) {
  const ret = new Uint8Array(data);
  let maskNum: number = (ret[0] ?? 0) % protoSecurity.mMaskCount;  //表的總量
  let maskLen: number = protoSecurity.mMask[maskNum].length; //該表的數量

  //解密(檢查碼不解密)
  for (let i: number = 1; i < data.length; ++i) {
    ret[i] = ret[i] - protoSecurity.mMask[maskNum][i % maskLen];
  }

  return ret;
}

/** 解包 */
export function protoDecode(data: ArrayBufferLike): {message: serverProto.eMessageEnum, decode: Uint8Array} {
  let uint = new Uint8Array(data);
  // 解密
  let decrypt: Uint8Array = protoDecrypt(uint);
  let context: Uint8Array = decrypt.slice(1);
  if (decrypt[0] !== getCheckCode(context)[0]) {
    // 解密失敗
    console.warn("Decode fail.");
    return {message: serverProto.eMessageEnum.eME_MAX, decode: new Uint8Array()};
  }
  // Protobuf 解碼
  let decode: Uint8Array = context.slice(1);
  return {message: context[0] as serverProto.eMessageEnum, decode};
}

/** 安全的 JSON.parse */
export function safeParse(str: string | null | undefined, defaultValue: any = {}): any {
  try {
    return JSON.parse(str as string);
  } catch (e) {
    console.warn('跳過不合法 JSON:', e);
    return defaultValue;
  }
}

export abstract class ProtoBase<ProtoType> {
  /** 由子類提供：綁定/加密所需的 MessageID
   *  用 getter 才能在 super() 執行期間就拿到子類的值 */
  protected abstract get messageID(): serverProto.eMessageEnum;

  /** Protobuf 編碼/解碼 */
  protected abstract encode(data: ProtoType): Uint8Array;
  protected abstract decode(data: Uint8Array): ProtoType;

  /** Protobuf格式資料 */
  public data: ProtoType = {} as ProtoType;

  /** 封包（加密 + 綁 ID 後的原始位元組緩衝區） */
  protected _pack: ArrayBufferLike = new ArrayBuffer(0);


  /** Protobuf格式資料 --> 封包（加密 + 綁 ID ） */
  public get pack(): ArrayBufferLike {
    // 呼叫子類覆寫的方法, 將Protobuf格式的data編碼成Uint8Array
    // 再加上 MessageID 與加密
    // 最後存成 ArrayBufferLike
    const encoded = this.encode(this.data);
    const withId = bindMessageID(encoded, this.messageID);
    const encrypted = protoEncrypt(withId);

    // 以 buffer 形式存 pack
    this._pack = encrypted.buffer;

    return this._pack;
  }

  /** 封包 -> Protobuf格式資料 (解密 + 去除 ID) */
  public set pack(buffer: ArrayBufferLike) {
    this._pack = buffer;

    // 這裡 protoDecode 會處理解密與去除 ID，並回傳 { decode: Uint8Array }
    const { decode } = protoDecode(buffer) as { decode: Uint8Array };

    // 呼叫子類覆寫的方法解開成Protobuf格式
    this.data = this.decode(decode);
  }

  /**
   * 對應的 Result 類別, 給network的getServerResult使用
   * 方便讓network service知道給server request之後要用哪一個 result來接
  */
  public ResultCtor?: new (...args: any[]) => ProtoBase<any>;
}



