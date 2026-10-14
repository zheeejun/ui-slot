import { Injectable, inject, signal } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { Subject } from 'rxjs';
import { ProtoBase } from '../../shared/Protobuf/proto-base';

/**
 * NetworkService 用來處理WebSocket連線、發送和接收資料包等,
 */
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  protected socket: WebSocket | null = null;
  private logger = inject(LoggerService);
  constructor(
  ) {}

  /** WebSocket事件訂閱 */
  private openSubject = new Subject<Event>();
  private messageSubject = new Subject<MessageEvent>();
  private closeSubject = new Subject<CloseEvent>();
  private errorSubject = new Subject<Event>();

  /** 外部訂閱接口 @example: network.open$.subscribe((event) => { ... }); */
  public socketOpen$ = this.openSubject.asObservable();
  /** 外部訂閱接口 @example: network.message$.subscribe((event) => { ... }); */
  public socketMessage$ = this.messageSubject.asObservable();
  /** 外部訂閱接口 @example: network.close$.subscribe((event) => { ... }); */
  public socketClose$ = this.closeSubject.asObservable();
  /** 外部訂閱接口 @example: network.error$.subscribe((event) => { ... }); */
  public socketError$ = this.errorSubject.asObservable();

  /** 發送封包訂閱 */
  private sendSubject = new Subject<ArrayBufferLike>();
  /** 外部訂閱接口 @example: network.send$.subscribe((pack) => { ... }); */
  public socketSend$ = this.sendSubject.asObservable();

  /**
   * 開啟websocket連線
   * @param url WebSocket的URL 
   * @returns 
   */
  public async connect(url: string): Promise<Event> {
    return new Promise<Event>((resolve, reject) => {
      this.socket = new WebSocket(url);
      this.socket.binaryType = 'arraybuffer';

      this.socket.onopen = (event) => this.openSubject.next(event);
      this.socket.onmessage = (event) => this.messageSubject.next(event);
      this.socket.onclose = (event) => this.closeSubject.next(event);
      this.socket.onerror = (event) => this.errorSubject.next(event);

      let settled = false;
      const cleanup = () => {
        openSub.unsubscribe();
        errorSub.unsubscribe();
        closeSub.unsubscribe();
      };
      const resolveOnce = (ev: Event) => { if (!settled) { settled = true; cleanup(); resolve(ev); } };
      const rejectOnce  = (err: any)   => { if (!settled) { settled = true; cleanup(); reject(err); } };

      const openSub  = this.socketOpen$.subscribe((event) => resolveOnce(event));
      const errorSub = this.socketError$.subscribe((event) => rejectOnce(new Error(`WebSocket error: ${event}`)));
      const closeSub = this.socketClose$.subscribe((event) => rejectOnce(new Error(`WebSocket closed: ${event}`)));
    });
  }


  private pendingRejects: Array<(err: Error) => void> = [];

  private cleanupSocket(reason?: string) {
    // 拒絕所有等待中的 Promise，並清掉引用
    for (const reject of this.pendingRejects) {
      try { reject(new Error(reason || 'WebSocket disconnected')); } catch {}
    }
    this.pendingRejects.length = 0;

    if (this.socket) {
      // 若之前用屬性掛事件（onopen/onmessage/...），要清掉
      this.socket.onopen = null;
      this.socket.onmessage = null;
      this.socket.onclose = null;
      this.socket.onerror = null;
    }

    // 不要 complete，否則後續 connect 時無法再 next
    // this.errorSubject.complete?.();
  }

  /** 斷開WebSocket連線 */
  public disconnect(code?: number, reason?: string) {
    if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
      try { this.socket.close(code, reason); } catch {}
    }
    this.cleanupSocket(reason);
    this.socket = null;
  }


  /**
   * 單純送出封包，不等待回覆，也不重試。
   */
  public sendPack(pack: ArrayBufferLike): void {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      this.logger.error('WebSocket is not open');
      this.sendSubject.next(pack);
      return;
    }
    this.socket.send(pack as ArrayBuffer);
    this.sendSubject.next(pack);
  }
}