import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * 把常用的 router.navigate() 功能包裝起來，方便在 component 內使用
 */
@Injectable({
  providedIn: 'root'
})
export class RouterCtrlService {
  router = inject(Router);
  route = inject(ActivatedRoute);
  /** 相對路徑轉址, 並且帶入目前的 query 參數 */
  navigateRelative(path: string) {
    this.router.navigate([path], {
      relativeTo: this.route,
      replaceUrl: true,
      queryParams: window.location.search ? Object.fromEntries(new URLSearchParams(window.location.search)) : {} }
    );
  }
  constructor() { }
}
