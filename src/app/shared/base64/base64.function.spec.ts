import {
  base64StringToObject,
  base64StringToObjectDecrypted,
  objectToBase64String,
  objectToBase64StringEncrypted
} from './base64.function';

describe('base64 functions', () => {
  it('should encode and decode object to Base64', () => {
    const testData = {
      platform: 'test',
      ticketNo: '12345',
      replay: 'true'
    };

    const encoded = objectToBase64String(testData);
    expect(encoded).toBeTruthy();

    const decoded = base64StringToObject(encoded!);
    expect(decoded).toEqual(testData);
  });

  it('should encrypt and decrypt object correctly', () => {
    const testData = {
      platform: 'transferwallet',
      ticketNo: '7933967',
      replay: 'true',
      encoderequired: '1',
      env: null
    };
    const key = 'qoo';

    const encrypted = objectToBase64StringEncrypted(testData, key);
    expect(encrypted).toBeTruthy();

    const decrypted = base64StringToObjectDecrypted(encrypted!, key);
    expect(decrypted).toEqual(testData);
  });

  it('should return null for invalid Base64 string', () => {
    const result = base64StringToObject('invalid-base64');
    expect(result).toBeNull();
  });

  it('should return null for invalid encrypted string', () => {
    const result = base64StringToObjectDecrypted('invalid-encrypted', 'qoo');
    expect(result).toBeNull();
  });
});
