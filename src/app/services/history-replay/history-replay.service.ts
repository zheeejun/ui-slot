import { Injectable, inject, signal } from '@angular/core';
import { HistoryReplayMessageResponse, ShortURLMessageResponse, TicketMessageResponse } from './history-replay.interface';
import { LoggerService } from '../logger/logger.service';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { eLeaderUserType, ILeaderListRequest } from '../leader-board/leader-board.interface';
import { isShortUrlMessage, isTicketMessage } from '../app-interface/app-interface.function';
import { ApWebReplaySessionKey } from '../../../chiikawa/ApWeb/ApWebInterface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ClientSessionService } from '../client-session/client-session.service';
import { Subject } from 'rxjs';

/**
 * 歷史記錄 Replay 服務
 * 對應 HistoryFromHttpGet.ts 的功能
 * 處理歷史記錄和 history replay viewer 相關的業務邏輯
 */
@Injectable({
  providedIn: 'root'
})
export class HistoryReplayService {
  private session = inject(ClientSessionService);
  private sanitizer = inject(DomSanitizer);
  private logger = inject(LoggerService);
  protected api = inject(AppInterfaceService);

  /** ShortURL Subject */
  private shortUrlSubject = new Subject<ShortURLMessageResponse>();
  /** ShortURL 訂閱接口 @example: shortUrl$.subscribe((response) => { ... }); */
  public get shortUrl$() { return this.shortUrlSubject.asObservable(); }
  /** Ticket Subject */
  private ticketSubject = new Subject<TicketMessageResponse>();
  /** Ticket 訂閱接口 @example: ticket$.subscribe((response) => { ... }); */
  public get ticket$() { return this.ticketSubject.asObservable(); }

  // 給replay viewer用的變數
  readonly isOldGame = signal<boolean>(false);
  readonly showReplayViewer = signal<boolean>(false);
  readonly replayUrl = signal<SafeResourceUrl | null>(null);
  readonly gameId = signal<string | null>(null);

  private readonly pendingPostSessionData = signal<Record<string, string> | null>(null);

  setPendingPostSessionData(payload: Record<string, string>): void {
    this.pendingPostSessionData.set(payload);
  }

  consumePendingPostSessionData(): Record<string, string> | null {
    const data = this.pendingPostSessionData();
    this.pendingPostSessionData.set(null);
    return data;
  }

  constructor() {
    this.api.historyReplay$.subscribe(this.onApiResponse.bind(this));
    this.removeReplayData();
  }

  /**
   * 處理 ShortLink 回應（從 Server 接收資料）
   * @param response - Server 回應的 ShortURL 資料
   */
  private onApiResponse(response: HistoryReplayMessageResponse): void {
    // 發送事件給訂閱者
    if (isShortUrlMessage(response)) {
      this.shortUrlSubject.next(response);  
    }
    else if (isTicketMessage(response)) {
      this.storageReplayData(response);
      this.ticketSubject.next(response);
    } 
  }

  private storageReplayData(data: TicketMessageResponse) {
    // 把 Replay 資料存到 sessionStorage，讓遊戲頁面可以取用
    try {
      this.gameId.set(data?.GameCode ?? null);
      const jsonData = JSON.stringify(data);
      sessionStorage.setItem(ApWebReplaySessionKey, jsonData);
    } catch (e) {
      this.logger.error('Failed to store replay data in sessionStorage:', e);
    }
  }

  public removeReplayData() {
    // 把 ApWebReplaySessionKey 的sessionStorage資料清掉，避免舊資料干擾新 Replay 的產生
    this.gameId.set(null);
    sessionStorage.removeItem(ApWebReplaySessionKey);
  }

  getTicketDetail(
    ticketNo: string,
    type: 'History' | eLeaderUserType.AllUser | eLeaderUserType.SingleUser,
    gameCode: string | null  = null,
    multiplier: number | null = null
  ) {
    if (!ticketNo) return;
    let mulstring = multiplier !== null ? multiplier.toString() : "";
    let gameCodeString = gameCode !== null ? gameCode : "";
    this.api.sendInfoMsgNostringify('History', `${ticketNo},REPLAY,${type},${gameCodeString},${mulstring}`);
  }

  getShortUrl(
    ticketNo: string,
    type: 'History' | eLeaderUserType.AllUser | eLeaderUserType.SingleUser,
    gameCode: string | null  = null,
    multiplier: number | null = null
  ){

    let mulstring = multiplier !== null ? multiplier.toString() : "";
    let gameCodeString = gameCode !== null ? gameCode : "";

    const request: ILeaderListRequest = {
      Messages: `${ticketNo},COPYLINK,${type},${gameCodeString},${mulstring}`
    };
    this.api.sendInfoMsgNostringify('History', request.Messages);

  }

  openReplayViewer(url: string, oldGame: boolean): void {
    // 先暫時用這方法處理掉angular本機環境問題
    if (this.session.assetUrl.includes('launch')) {
      url = url.replace('/', '/launch/' );
    }

    // 後面加上語系參數&lang=
    url += (url.includes('?') ? '&' : '?') + `lang=${this.session.language}`;

    if (this.session.remoteHost) {
      // 開啟game的dev模式
      url = url + '&_ga_session=kvpvre3uwdp1an9n88u4'; 
    }

    this.isOldGame.set(oldGame);
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.replayUrl.set(safeUrl);
    this.showReplayViewer.set(true);
  }

  closeReplayViewer(): void {
    this.showReplayViewer.set(false);
    this.replayUrl.set(null);
    this.removeReplayData();
  }
}
