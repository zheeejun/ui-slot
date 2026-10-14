import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * QueryParamsService 用來管理查詢參數的操作,
 * 包括讀取和寫入DSShowLog、lang、gameId等參數,
 */
export class QueryParamsService {
    route;
    router;
    defaultParams = {
        DSShowLog: null,
        lang: null,
        gameId: null,
        backurl: null,
        uimode: null
    };
    subject = new BehaviorSubject(this.defaultParams);
    params$ = this.subject.asObservable();
    constructor(route, router) {
        this.route = route;
        this.router = router;
        // 初始化 query string
        this.route.queryParamMap.subscribe((params) => {
            const parsed = { ...this.defaultParams };
            for (const key of Object.keys(this.defaultParams)) {
                parsed[key] = params.get(key);
            }
            this.subject.next(parsed);
        });
        // 更新 URL，並避免重複寫入
        this.params$
            .pipe(distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)))
            .subscribe((params) => {
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: params,
                queryParamsHandling: 'merge',
                replaceUrl: true,
            });
        });
    }
    updateParam(key, value) {
        const updated = { ...this.subject.value, [key]: value };
        this.subject.next(updated);
    }
    get DSShowLog() {
        return this.subject.value.DSShowLog;
    }
    set DSShowLog(value) {
        this.updateParam('DSShowLog', value);
    }
    get lang() {
        return this.subject.value.lang;
    }
    set lang(value) {
        this.updateParam('lang', value);
    }
    get gameId() {
        return this.subject.value.gameId;
    }
    set gameId(value) {
        this.updateParam('gameId', value);
    }
    get backurl() {
        return this.subject.value.backurl;
    }
    set backurl(value) {
        this.updateParam('backurl', value);
    }
    get uimode() {
        return this.subject.value.uimode;
    }
    set uimode(value) {
        this.updateParam('uimode', value);
    }
    static ɵfac = function QueryParamsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || QueryParamsService)(i0.ɵɵinject(i1.ActivatedRoute), i0.ɵɵinject(i1.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QueryParamsService, factory: QueryParamsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QueryParamsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i1.Router }], null); })();
//# sourceMappingURL=query-params.service.js.map