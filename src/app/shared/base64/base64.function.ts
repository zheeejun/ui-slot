import * as CryptoJS from 'crypto-js';
import { safeParse } from '../Protobuf/proto-base';

export function base64StringToObject(str: string): any | null {
  try {
    const decoded = CryptoJS.enc.Base64.parse(str);
    const decodedString = CryptoJS.enc.Utf8.stringify(decoded);
    return safeParse(decodedString);
  } catch {
    return null;
  }
}

export function objectToBase64String(obj: any): string | null {
  try {
    const jsonString = JSON.stringify(obj);
    const utf8 = CryptoJS.enc.Utf8.parse(jsonString);
    return CryptoJS.enc.Base64.stringify(utf8);
  } catch {
    return null;
  }
}

export function objectToBase64StringEncrypted(obj: any, key: string): string | null {
  try {
    const jsonString = JSON.stringify(obj);
    const encrypted = CryptoJS.AES.encrypt(jsonString, key).toString();
    const utf8 = CryptoJS.enc.Utf8.parse(encrypted);
    return CryptoJS.enc.Base64.stringify(utf8);
  } catch {
    return null;
  }
}

export function base64StringToObjectDecrypted(str: string, key: string): any | null {
  try {
    const decoded = CryptoJS.enc.Base64.parse(str);
    const decodedString = CryptoJS.enc.Utf8.stringify(decoded);
    const decrypted = CryptoJS.AES.decrypt(decodedString, key).toString(CryptoJS.enc.Utf8);
    return safeParse(decrypted);
  } catch {
    return null;
  }
}
