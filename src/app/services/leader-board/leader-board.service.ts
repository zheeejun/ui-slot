import { Injectable, signal, computed, inject } from '@angular/core';
import {  ILeaderBoardItem,  ILeaderListRequest, ILeaderBoardMessageResponse, eLeaderUserType, ICurrencyDataResponse} from './leader-board.interface';
import { environment } from '../../../environments/app-environment';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { AppI18nService } from '../app-i18n/app-i18n.service';
import { LoggerService } from '../logger/logger.service';
import { PlayerWalletService } from '../player-wallet/player-wallet.service';
import { calc } from '../player-wallet/player-wallet.function';
import { isLeaderboardPersonalResponse, genLeadboardCacheKey } from './leader-board.function';
import Decimal from 'decimal.js';
import { ClientSessionService } from '../client-session/client-session.service';

/** 快取項目介面 */
interface CacheItem {
  items: ILeaderBoardItem[];
  timestamp: number;
  expiryTime: number;
}

@Injectable({
  providedIn: 'root'
})
export class LeaderBoardService {
  // ===== 快取資料結構 =====
  
  /** 快取 Map */
  private readonly cache = new Map<string, CacheItem>();
  
  /** 快取有效期限（10 秒） */
  private readonly CACHE_DURATION = 10 * 1000;

  // ===== Subject =====
  


  // ===== 公開的 Signal =====
  
  /** 當前顯示的排行榜項目 */
  readonly currentItems = signal<ILeaderBoardItem[]>([]);
  
  /** 是否正在載入 */
  readonly isLoading = signal<boolean>(false);
  
  /** 最後更新時間 */
  readonly lastUpdated = signal<Date | null>(null);
  
  /** 錯誤訊息 */
  readonly error = signal<string | null>(null);
  
  /** 預設幣別兌換率 */
  readonly defaultCurrencyConversionRate = signal<number>(1);
  
  /** 幣別資料 Map (currency_code -> ICurrencyDataResponse) */
  readonly currencyMap = signal<Map<string, import('./leader-board.interface').ICurrencyDataResponse>>(new Map());
  
  /** LeaderBoard ShortURL */
  readonly shortUrl = signal<string | null>(null);
  

  
  // ===== 私有狀態 =====
  
  /** 最後請求的 tag（用於防止快速切換時顯示舊資料） */
  private lastRequestTag = '';
  private session = inject(ClientSessionService);
  constructor(
    protected api: AppInterfaceService,
    protected logger: LoggerService,
    protected userProfile: PlayerWalletService,
    private appI18n: AppI18nService
  ) {
    if (environment.production === false) {
      (window as any).leaderBoard = this;
    }
    
    // 🔔 訂閱 LeaderBoard 回應
    this.api.leaderBoard$.subscribe(this.onLeaderBoardResponse.bind(this));
  }

  // ===== 公開方法 =====

  /**
   * 發送排行榜請求
   * @param tag - 請求標籤（用於快取和識別）
   * @param userType - 使用者類型（個人或全部玩家）
   * @param gameCode - 遊戲代碼（空字串 = 全部遊戲）
   * @param language - 語系
   */
  public sendLeaderBoardList(
    tag: string,
    userType: eLeaderUserType,
    gameCode: string = '',
    language: string = ''
  ): void {
    // ✅ 1. 儲存當前請求的 tag
    this.lastRequestTag = tag;
    
    // ✅ 2. 直接使用 tag 作為 cache key
    const cacheKey = tag;
    
    // 檢查快取是否有效
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() < cached.expiryTime) {
      this.logger.leaderboardLog(`📦 LeaderBoard: Using valid cache - ${cacheKey}`);
      this.currentItems.set(cached.items);
      this.lastUpdated.set(new Date(cached.timestamp));
      this.error.set(null);
      return;
    }
    
    // 發送請求到 Server
    this.logger.leaderboardLog(`🚀 LeaderBoard: Requesting - ${cacheKey} (UserType: ${userType}, GameCode: ${gameCode}, Language: ${language})`);
    this.isLoading.set(true);
    this.error.set(null);
    
    const request: ILeaderListRequest = {
      Messages: `${tag},${userType},${gameCode},${language}`
    };
    this.api.sendInfoMsgNostringify('LeaderBoard', request.Messages);
  }
  
  
  /**
   * 清除所有快取
   */
  public clearCache(): void {
    this.cache.clear();
    this.logger.leaderboardLog('🗑️ LeaderBoard: Cache cleared');
  }
  
  /**
   * 清除過期的快取項目
   */
  public clearExpiredCache(): void {
    const now = Date.now();
    let clearedCount = 0;
    
    for (const [key, item] of this.cache.entries()) {
      if (now >= item.expiryTime) {
        this.cache.delete(key);
        clearedCount++;
      }
    }
    
    if (clearedCount > 0) {
      this.logger.leaderboardLog(`🗑️ LeaderBoard: Cleared ${clearedCount} expired cache items`);
    }
  }
  
  // ===== 私有方法 =====  
  /**
   * 處理 LeaderBoard 回應（從 Server 接收資料）
   * @param response - Server 回應的排行榜資料
   */
  private onLeaderBoardResponse(response: ILeaderBoardMessageResponse): void {
    this.logger.leaderboardLog('📥 LeaderBoard: Response received', response);
    
    // ✅ 3. 比對 response.tag 是否與 lastRequestTag 一樣
    const isLatestRequest = response.tag === this.lastRequestTag;
    
    if (!isLatestRequest) {
      this.logger.warn(`⚠️ LeaderBoard: Ignoring outdated response (expected: ${this.lastRequestTag}, got: ${response.tag})`);
    }
    
    try {
      // 1️⃣ 儲存預設幣別兌換率
      if (response.default_currency_conversion_rate) {
        this.defaultCurrencyConversionRate.set(response.default_currency_conversion_rate);
      }

      // 2️⃣ 使用 update 方式逐個添加 currency 資料（不替換整個 Map）
      if (response.currency && response.currency.length > 0) {
        this.currencyMap.update(currentMap => {
          // 創建新的 Map（保留原有資料）
          const updatedMap = new Map(currentMap);
          
          // 逐個添加或更新 currency 資料
          response.currency!.forEach((currency: ICurrencyDataResponse)  => {
            // 先處理 amountRatio 歷史紀錄的amountRatio計算方法不一樣, 是login來的值的倒數, 所以要用1除以calc.amountRatio
            currency.amount_ratio = new Decimal(1).dividedBy(currency.amount_ratio).toNumber();
            updatedMap.set(currency.currency_code, currency);
          });
          
          this.logger.leaderboardLog(`💱 Currency Map updated: ${updatedMap.size} currencies`);
          return updatedMap;
        });
      }
      
      // 3️⃣ 轉換格式
      const items = this.formatResponseToItems(response);
      
      // 4️⃣ 只有最新請求才更新當前資料
      if (isLatestRequest) {
        this.currentItems.set(items);
        this.lastUpdated.set(new Date());
        this.isLoading.set(false);
        this.error.set(null);
        this.logger.leaderboardLog(`✅ LeaderBoard: Updated current items (${items.length} items)`);
      }
      
      // 5️⃣ 不管是否為最新請求，都儲存到快取
      const now = Date.now();
      const cacheKey = response.tag;
      
      this.cache.set(cacheKey, {
        items: items,
        timestamp: now,
        expiryTime: now + this.CACHE_DURATION
      });
      
      this.logger.leaderboardLog(`💾 LeaderBoard: Cached - ${cacheKey} (${items.length} items, expires in ${this.CACHE_DURATION / 1000}s)`);
      //this.logger.log(`💱 Currency conversion rate: ${response.default_currency_conversion_rate}, currencies: ${currencyMap.size}`);
    } catch (error) {
      this.logger.error('❌ LeaderBoard: Error processing response', error);
      
      // 只有最新請求才更新錯誤狀態
      if (isLatestRequest) {
        this.error.set('Failed to process leaderboard data');
        this.isLoading.set(false);
      }
    }
  }
  
  /**
   * 轉換 Server 回應格式為前端格式
   * @param response - Server 回應
   * @returns 前端使用的排行榜項目陣列
   */
  private formatResponseToItems(
    response: ILeaderBoardMessageResponse
  ): ILeaderBoardItem[] {
    // ✅ 直接使用已儲存的 currencyMap，不需要重新建立
    const currencyMap = this.currencyMap();
    
    return response.data.map((item, index) => {

      const currency = currencyMap.get(item.currency_code);
      const symbol = currency?.symbol || '';
      
      const isPersonal = isLeaderboardPersonalResponse(response.tag);
      
      // 根據個人或全部玩家使用不同的 currency symbol
      let currencySymbol = symbol;
      
      if (isPersonal) {
        // 個人排行榜：從 PlayerWalletService 取得使用者的 currency symbol
        currencySymbol = this.userProfile.currencySymbol() || symbol;
      }

      let retvale:ILeaderBoardItem = {
        rank: String(index + 1),
        game: this.appI18n.instant(item.game_code, item.game_code),
        gameId: item.game_code,
        time: item.bet_time,
        multiplier: this.calcMultiplier(item.currency_code, item.multiplier, isPersonal),
        multiplierFromServer: item.multiplier, // 原始倍數，未經換算
        spin: item.bet_count,
        currencyCode: item.currency_code,
        currencySymbol: currencySymbol,
        prize: this.ChangeValueFromServerToDisplay(item.win, item.currency_code, isPersonal),
        image: this.buildImageURLString(item.game_code, item.icon),
        prizeForSort: this.calcPrizeForSort(item.currency_code, item.win, isPersonal),
        ticketNo: item.ticket_no,
        platformCode: item.platform_code
      };
      return retvale;
    });
  }

  /**
   * 計算用於排序的獎金（統一換算成 MYR）
   * @param currencyCode - 幣別代碼
   * @param originalPrize - 原始獎金金額
   * @param isPersonal - 是否為個人排行榜
   * @returns 換算後的獎金（用於排序）
   */
  private calcPrizeForSort(currencyCode: string, originalPrize: number, isPersonal: boolean = false): number {
    // 取得幣別資料（個人排行榜不需要）
    const currencyData = isPersonal ? null : this.currencyMap().get(currencyCode);
    
    // 取得兌換率和金額比例
    const conversionRate = isPersonal 
      ? calc.numberBase 
      : (currencyData?.conversion_rate || this.defaultCurrencyConversionRate() || calc.numberBase);
    
    const amountRatio = isPersonal 
      ? calc.amountRatio 
      : (currencyData?.amount_ratio || calc.amountRatio);
    
    const toMyrRatio = isPersonal 
      ? 1 
      : (currencyData?.to_myr_ratio || 1);
    
    // 如果是全部玩家且找不到幣別資料，記錄警告
    if (!isPersonal && !currencyData) {
      this.logger.warn(`⚠️ calcPrizeForSort Currency not found: ${currencyCode}, using default values`);
    }

    // 計算換算後的金額：原始獎金 / 兌換率 / 金額比例 * 兌換馬幣比例
    return originalPrize / conversionRate / amountRatio * toMyrRatio;
  }

  /**
   * 計算倍數
   * @param currencyCode - 幣別代碼
   * @param original - 原始倍數
   * @param isPersonal - 是否為個人排行榜
   * @returns 計算後的倍數
   */
  private calcMultiplier(currencyCode: string, original: number, isPersonal: boolean = false): number {
    // 取得兌換率：個人排行榜使用 calc.numberBase，全部玩家使用 currency 資料
    const conversionRate = isPersonal 
      ? calc.numberBase 
      : this.getCurrencyConversion(currencyCode);
    
    // 計算倍數 捨去小數點後部分
    return Math.floor(original / conversionRate);
  }

  ChangeValueFromServerToDisplay(value: number, currencyCode: string, isPersonal: boolean = false): number {
    const conversionRate = isPersonal 
      ? calc.numberBase 
      : this.getCurrencyConversion(currencyCode);

      const amountRatio = isPersonal 
        ? calc.amountRatio 
        : this.getCurrencyAmountRatio(currencyCode);

    return (value / conversionRate / amountRatio);
  }

  /**
   * 格式化獎金字串（包含幣別符號和千分位符號）
   * @param prize - 獎金金額
   * @param currencyCode - 幣別代碼
   * @param customSymbol - 自訂幣別符號（選填，個人排行榜使用）
   * @returns 格式化後的獎金字串，例如: "$1,234.56"
   */
  formatPrizeString(prize: number, currencyCode: string, customSymbol?: string): string {
    let symbol: string;
    
    if (customSymbol) {
      // 如果有提供自訂符號（個人排行榜），使用它
      symbol = customSymbol;
    } else {
      // 否則從 currencyMap 取得符號
      const currencyMap = this.currencyMap();
      const currencyData = currencyMap.get(currencyCode);
      symbol = currencyData?.symbol || '';
    }
    
    // 使用 toLocaleString 加入千分位符號.
    // 統一用 en-US 格式顯示千分位和小數點.未來如果規格有變更，可以再調整這裡.
    const formattedAmount = prize.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    let retstr = `${symbol}${formattedAmount}`;
    return retstr;
  }

  /**
   * 取得幣別兌換率（用於換算成 MYR）
   * @param currencyCode - 幣別代碼
   * @returns 兌換率（to_myr_ratio），若查不到則回傳預設兌換率
   */
  public getCurrencyConversion(currencyCode: string): number {
    // 從 currencyMap Signal 取得當前的 Map
    const currencyMap = this.currencyMap();
    const currencyData = currencyMap.get(currencyCode);
    
    // 如果找不到幣別資料，回傳預設兌換率
    if (!currencyData || !currencyData.conversion_rate) {
      //this.logger.warn(`⚠️ Currency not found: ${currencyCode}, using default conversion rate`);
      return this.defaultCurrencyConversionRate();
    }
    
    // 回傳幣別的兌換比例
    return currencyData.conversion_rate;
  }

  /**
   * 取得幣別金額比例
   * @param currencyCode - 幣別代碼
   * @returns 金額比例（amount_ratio），若查不到則回傳 1
   */
  public getCurrencyAmountRatio(currencyCode: string): number {
    // 從 currencyMap Signal 取得當前的 Map
    const currencyMap = this.currencyMap();
    const currencyData = currencyMap.get(currencyCode);
    
    // 如果找不到幣別資料，回傳 1
    if (!currencyData || !currencyData.amount_ratio) {
      //this.logger.warn(`⚠️ Currency not found: ${currencyCode}, using default amount ratio 1`);
      return calc.amountRatio;
    }
    
    // 回傳幣別的金額比例
    return currencyData.amount_ratio;
  }

  /**
   * 建立遊戲圖片 URL
   * @param gameId - 遊戲 ID
   * @param iconStr - 圖示檔名
   * @returns 完整的圖片 URL
   */
  private buildImageURLString(gameId: string, iconStr: string): string {
    let l_strURL = location.origin;
    if (l_strURL.includes("192.168") || l_strURL.includes("localhost")) {
        l_strURL = this.session.assetUrl;
    }
    const imageURL = l_strURL + "/icon/" + gameId + "/" + iconStr;
    return imageURL;
  }

}

