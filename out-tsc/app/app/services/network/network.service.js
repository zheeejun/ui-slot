import { Injectable, inject } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * NetworkService 用來處理WebSocket連線、發送和接收資料包等,
 */
export class NetworkService {
    socket = null;
    logger = inject(LoggerService);
    constructor() { }
    /** WebSocket事件訂閱 */
    openSubject = new Subject();
    messageSubject = new Subject();
    closeSubject = new Subject();
    errorSubject = new Subject();
    /** 外部訂閱接口 @example: network.open$.subscribe((event) => { ... }); */
    socketOpen$ = this.openSubject.asObservable();
    /** 外部訂閱接口 @example: network.message$.subscribe((event) => { ... }); */
    socketMessage$ = this.messageSubject.asObservable();
    /** 外部訂閱接口 @example: network.close$.subscribe((event) => { ... }); */
    socketClose$ = this.closeSubject.asObservable();
    /** 外部訂閱接口 @example: network.error$.subscribe((event) => { ... }); */
    socketError$ = this.errorSubject.asObservable();
    /** 發送封包訂閱 */
    sendSubject = new Subject();
    /** 外部訂閱接口 @example: network.send$.subscribe((pack) => { ... }); */
    socketSend$ = this.sendSubject.asObservable();
    /**
     * 開啟websocket連線
     * @param url WebSocket的URL
     * @returns
     */
    async connect(url) {
        return new Promise((resolve, reject) => {
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
            const resolveOnce = (ev) => { if (!settled) {
                settled = true;
                cleanup();
                resolve(ev);
            } };
            const rejectOnce = (err) => { if (!settled) {
                settled = true;
                cleanup();
                reject(err);
            } };
            const openSub = this.socketOpen$.subscribe((event) => resolveOnce(event));
            const errorSub = this.socketError$.subscribe((event) => rejectOnce(new Error(`WebSocket error: ${event}`)));
            const closeSub = this.socketClose$.subscribe((event) => rejectOnce(new Error(`WebSocket closed: ${event}`)));
        });
    }
    pendingRejects = [];
    cleanupSocket(reason) {
        // 拒絕所有等待中的 Promise，並清掉引用
        for (const reject of this.pendingRejects) {
            try {
                reject(new Error(reason || 'WebSocket disconnected'));
            }
            catch { }
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
    disconnect(code, reason) {
        if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
            try {
                this.socket.close(code, reason);
            }
            catch { }
        }
        this.cleanupSocket(reason);
        this.socket = null;
    }
    /**
     * 單純送出封包，不等待回覆，也不重試。
     */
    sendPack(pack) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            this.logger.error('WebSocket is not open');
            this.sendSubject.next(pack);
            return;
        }
        this.socket.send(pack);
        this.sendSubject.next(pack);
    }
    static ɵfac = function NetworkService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NetworkService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NetworkService, factory: NetworkService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NetworkService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=network.service.js.map