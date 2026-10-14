import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Decimal from 'decimal.js';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { OgBetLevelEntry, OgSpinResultEvent } from './og-wallet.interface';
import { LoginResult, SpinRequest, SpinResult } from '../../shared/Protobuf/proto-ext';
import { calc } from '../player-wallet/player-wallet.function';
import { serverProto } from '../../shared/Protobuf/new_proto';
import { SpinDataNote } from '../app-interface/spin-data-note.interface';
import { delay, Subject, timer } from 'rxjs';
import { ClientSessionService } from '../client-session/client-session.service';
import { safeParse } from '../../shared/Protobuf/proto-base';
import { LoggerService } from '../logger/logger.service';
import { ChangeSeedResult } from '../app-interface/change-seed.interface';
@Injectable({
  providedIn: 'root'
})
export class OgWalletService {
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  logger = inject(LoggerService);
  private http = inject(HttpClient);

  /** 貨幣符號對應圖示檔名的對照表, 對應 CDN 上 system/Info/CurrencyIconTable.json */
  private _currencyIconTable = signal<Record<string, string> | null>(null);
  /** 貨幣圖示的遠端網址, 若查無對應圖示則為 null */
  public currencyIconUrl = computed<string | null>(() => {
    const symbol = this.api.currencySymbol();
    const iconName = symbol ? this._currencyIconTable()?.[symbol] : null;
    return iconName ? `${this.session.assetUrl}/system/Info/currency_icon/${iconName}.png` : null;
  });

  /** 使用者目前的餘額 (實際server回傳的, 給service判斷用的) */
  private balance = signal<number>(0);
  /** 顯示給玩家看的餘額 (顯示在UI上的, 讓其他component參考的)*/
  private readonly _displayBalance = signal<number>(0);
  /** 顯示給玩家看的餘額 (顯示在UI上的, 讓其他component參考的)*/
  public readonly displayBalance = this._displayBalance.asReadonly();
  /** 使用者目前的下注金額 */
  private _betAmount = signal<number>(0);
  /** 使用者目前的下注金額 */
  public readonly betAmount = this._betAmount.asReadonly();
  /** 使用者目前的下注階層 */
  private _betLevel = signal<OgBetLevelEntry[]>([]);
  /** 使用者目前的下注階層 */
  public readonly betLevel = this._betLevel.asReadonly();
  /** 使用者目前的下注間隔 */
  public betInterval = computed(() => {
    const bet = this._betAmount();
    const level = this.betLevel().find((l) => bet >= l.min && bet <= l.max);
    return level?.interval ?? 0;
  });
  private _rtp = signal<string>('');
  /** 使用者目前的RTP */
  public readonly rtp = this._rtp.asReadonly()
  private _decimalPlaces = signal<number>(3);
  /** Server指定的金額小數位數 */
  public readonly decimalPlaces = this._decimalPlaces.asReadonly();
  /** 使用者目前的最小下注金額 */
  public minBet = computed(() => {
    const levels = this.betLevel();
    if (levels.length === 0) return 0;
    return levels[0].min;
  });
  
  /** 允許的種子字元模式 (僅允許英文字母和數字) */
  public readonly seedAllowedCharacterPattern = /^[A-Za-z0-9]$/;

  // OG遊戲的serverSeedHash, clientSeed, nonce, 這些值會在登入時由server傳給client, 並且在每次下注時都要帶回給server
  protected serverSeedHash = signal<string>('');
  protected nextServerSeedHash = signal<string>('');
  protected clientSeed = signal<string>('');
  protected nextClientSeed = signal<string>('');
  protected nonce = signal<number>(0);
  /** Fairness UI 顯示目前使用中的種子配對資料 */
  public readonly activeServerSeedHash = this.serverSeedHash.asReadonly();
  public readonly activeClientSeed = this.clientSeed.asReadonly();
  public readonly activeNonce = this.nonce.asReadonly();
  public readonly displayedNextServerSeedHash = this.nextServerSeedHash.asReadonly();
  /** Fairness UI 顯示下一個要使用的clientSeed */
  public readonly displayedNextClientSeed = this.nextClientSeed.asReadonly();
  /** Sever回傳的spin event 結構 */
  private spinResultEventSubject = new Subject<OgSpinResultEvent>();
  /** Sever回傳的spin event 結構 */
  public get spinResultEvent$() { return this.spinResultEventSubject.asObservable(); }
  private seedChangedSubject = new Subject<ChangeSeedResult>();
  public get seedChanged$() { return this.seedChangedSubject.asObservable(); }
  constructor() {
    // 初始化
    effect(() => {
      // 只追蹤這個
      const result = this.api.loginResult(); 
      // 當loginResult有值時, 會呼叫onLoginResult, 更新登入拿到的數值
      untracked(() => { if (result) this.onLoginResult(result); });
    });

    // 監聽spinResult, 當spinResult有值時, 會呼叫processSpinResult, 更新spinResult拿到的數值
    this.api.spinResult$.subscribe((result) => {
      this.onSpinResult(result);
    });

    // 監聽changedSeed, 當更換種子的結果回來時, 會呼叫onChangeClientSeedResult, 更新種子配對資料
    this.api.changedSeed$.pipe(delay(1000)).subscribe((result) => { // 增加一點延遲, 避免玩家連續更換種子造成的問題
      this.onChangeClientSeedResult(result);
    });

    this.fetchCurrencyIconTable();
  }

  /** 從CDN讀取貨幣符號對應圖示檔名的對照表 */
  private fetchCurrencyIconTable(): void {
    const url = `${this.session.assetUrl}/system/Info/CurrencyIconTable.json`;
    this.http.get<Record<string, string>>(url).subscribe({
      next: (table) => { this._currencyIconTable.set(table); },
      error: () => { this._currencyIconTable.set(null); },
    });
  }

  onLoginResult(result: LoginResult | null) {
    this.balance.set(calc.s2c(result?.note?.balance || 0));
    this._displayBalance.set(this.balance());

    // 處理betLevel
    const betLevel = result?.note?.bet_level;
    this.processBetLevel(betLevel);

    // 設定bet最小的值, 如果betLevel有值的話
    this._betAmount.set(this.minBet());

    // 設定rtp
    this._rtp.set(result?.note?.game_rtp || '');

    // 設定金額小數位數
    this._decimalPlaces.set(result?.note?.decimalplaces ?? 3);

    // 設定serverSeedHash, clientSeed, nonce
    this.serverSeedHash.set(result?.note?.active_server_seed_hash || '');
    this.clientSeed.set(result?.note?.active_client_seed || '');
    this.nonce.set(result?.note?.active_nonce || 0);
    this.nextServerSeedHash.set(result?.note?.next_server_seed_hash || '');

    // 產生nextClientSeed
    this.nextClientSeed.set(this.generateRandomString(16));
  }

  processBetLevel(stringArray: string[] | undefined) {
    if (!stringArray) return;

    //stringArray結構: min-max,interval
    // ['1000-10000000,1000', '10000000-100000000, 5000']
    const betLevel: OgBetLevelEntry[] = stringArray.map((entry) => {
      const [range, interval] = entry.split(',');
      const [min, max] = range.split('-');
      return { min: calc.s2c(Number(min)), max: calc.s2c(Number(max)), interval: calc.s2c(Number(interval)) };
    });

    // sort
    betLevel.sort((a, b) => a.min - b.min);

    this._betLevel.set(betLevel);
  }

  /** 設定顯示給玩家看的餘額 */
  setDisplayBalance(value: number): void {
    this._displayBalance.set(value);
  }

  /** 設定顯示給玩家看的餘額為目前的餘額 */
  setFinalBalance(): void {
    this._displayBalance.set(this.balance());
  }

  /** 設定下注金額, 如果不合法會自動修正成合法的下注金額 */
  setBet(value: number): boolean {
    // 不合法的數字: 直接改成0
    if (isNaN(value) || value < 0) {
      value = 0;
    }

    let bet = value;
    if (!this.isValidBet(bet)) {
      // 如果下注金額不合法, 捨去餘數, 讓他合法
      const corrected = this.correctBet(bet);
      if (corrected === null) {
        this._betAmount.set(this._betAmount());
        return false;
      }
      bet = corrected;
    }
    this._betAmount.set(bet);
    return true;
  }

  /** 檢查下注金額是否合法 */
  private isValidBet(value: number): boolean {
    return this.betLevel().some(
      (level) => value >= level.min && value <= level.max && new Decimal(value).mod(level.interval).isZero()
    );
  }

  /** 依照最接近的betLevel, 將value修正成合法的下注金額(捨去interval餘數並限制在min-max內) */
  private correctBet(value: number): number | null {
    const levels = this.betLevel();
    if (levels.length === 0) return null;

    const level = levels.find((l) => value >= l.min && value <= l.max)
      ?? (value < levels[0].min ? levels[0] : levels[levels.length - 1]);

    const clamped = Decimal.min(Decimal.max(value, level.min), level.max);
    const steps = clamped.div(level.interval).floor();
    return Decimal.max(steps.mul(level.interval), level.min).toNumber();
  }

  /** 發送下注請求
   * @param gameString 帶入遊戲下注資訊
   * @param inputBet 覆蓋目前 BetAmount
   */
  public sendSpinRequest(note: SpinDataNote, inputBet?: number): boolean {
    try {
      const bet = inputBet ?? this._betAmount();

      const spinData: serverProto.spin = serverProto.spin.create();
      // 轉換bet格式
      spinData.bet = Math.floor(calc.c2s(bet ?? 0));


      // 加入登入時拿到的serverSeedHash, clientSeed, nonce
      note.game_rtp = this.rtp();
      note.server_seed_hash = this.serverSeedHash();
      note.client_seed = this.clientSeed();
      note.nonce = this.nonce();
      this.logger.ogLog('sendSpinRequest note:', note);
      spinData.note = JSON.stringify(note);

      const spin = new SpinRequest();
      spin.data = spinData;
      this.api.sendPack(spin.pack);
      return true;
    } catch (error) {
      this.logger.ogLog('sendSpinRequest error:', error);
      return false;
    }
  }

  private onSpinResult(result: SpinResult) {
    this.balance.set(calc.s2c(result.data.balance as number || 0));

    let eventString = "{}";
    const plates = result.data.mainGame?.plate;
    if (plates && plates.length > 0) {
      eventString = plates[0].event || "{}";
    }
    else {
      // 錯誤結果
      return;
    }
    const event = safeParse(eventString) as OgSpinResultEvent;
    this.nonce.set(event.nonce);
    // 延遲大概0.05秒再發送
    timer(50).subscribe(() => this.spinResultEventSubject.next(event));
  }

  /** 把nextClientSeed設為新的clientSeed */
  public changeClientSeed(seed: string): void {
    // ClientSeed必須長度為1~64
    if (seed.length < 1 || seed.length > 64) {
      this.logger.ogLog('changeClientSeed error: seed length must be 1~64');
      return;
    }
    this.api.sendInfoMsgNostringify("ChangeSeed", seed);
  }

  /** 處理更換種子(ChangeSeed)結果, 更新目前使用中的種子配對, 並重新產生下一組nextClientSeed */
  private onChangeClientSeedResult(result: ChangeSeedResult) {
    if (result.error) {
      this.logger.ogLog('onChangeClientSeedResult error:', result.error);
      return;
    }

    // 重新產生下一組預設clientSeed
    this.nextClientSeed.set(this.generateRandomString(16));

    this.serverSeedHash.set(result.active_server_seed_hash);
    this.clientSeed.set(result.active_client_seed);
    this.nonce.set(result.active_nonce);
    this.nextServerSeedHash.set(result.next_server_seed_hash);

    this.seedChangedSubject.next(result);
  }

  //產生英數隨機字串.
  public generateRandomString(length:number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
}
