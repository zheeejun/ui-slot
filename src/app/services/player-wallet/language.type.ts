/** 網站內部看的語系 */
export type LanguageType = 
  'en' | /** 英 英文語系 */
  'cn' | /** 中 中文語系(簡體) */
  'id' | /** 印 印尼語系 */
  'th' | /** 泰 泰國語系 */
  'vi' | /** 越 越南語系 */
  'ko' | /** 韓 韓國語系 */
  'pt' | /** 葡 Portugal */
  'ja' | /** 日 Japanese */
  'my' | /** 緬 Myanmar */
  'km' | /** 高 khmae,Cambodia */
  'hi' | /** 度 India,Hindī */
  'ru' | // (Russia)
  'tr' | // (Turkish)
  'bn' // (Bangladesh)
;

/** 客戶會使用到的語系 */
export const LANGUAGE_MAP: Record<string, LanguageType> = {
  'en'     : 'en',
  'en-us'  : 'en',
  'cn'     : 'cn',
  'zh-cn'  : 'cn',
  'id'     : 'id',
  'id-id'  : 'id',
  'th'     : 'th',
  'th-th'  : 'th',
  'vi'     : 'vi',
  'vi-vn'  : 'vi',
  'kr'     : 'ko',
  'ko'     : 'ko',
  'ko-kr'  : 'ko',
  'pt'     : 'pt',
  'pt-pt'  : 'pt',
  'my'     : 'my',
  'my-mm'  : 'my',
  'kh'     : 'km',
  'km'     : 'km',
  'km-kh'  : 'km',
  'ja'     : 'ja',
  'ja-jp'  : 'ja',
  'hi'     : 'hi',
  'hi-in'  : 'hi',
  'ru'     : 'ru',
  'ru-ru'  : 'ru',
  'tr'     : 'tr',
  'tr-tr'  : 'tr',
  'bn'     : 'bn',
  'bn-bd'  : 'bn',
};
