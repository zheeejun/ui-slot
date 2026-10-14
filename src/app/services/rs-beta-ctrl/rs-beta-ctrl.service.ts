import { computed, inject, Injectable, signal } from '@angular/core';
import { ClientSessionService } from '../client-session/client-session.service';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';
import { LoggerService } from '../logger/logger.service';
import { IEnterRSItemSpinMode } from '../../../chiikawa/RewardSystem/RewardSystem.Interface';
import { calc } from '../player-wallet/player-wallet.function';

@Injectable({
  providedIn: 'root'
})
export class RsBetaCtrlService {
  readonly game = inject(GameIframeCtrlService);
  readonly session = inject(ClientSessionService);
  readonly logger = inject(LoggerService);
  readonly iconName = signal<string>('');
  readonly iconPath = computed(() => this.iconName() ? this.toRSItemIconAssetDownloadUrl(this.iconName()) : '');
  readonly spinButtonMode = signal<'free-game' | 'double-chance' | null>(null);
  readonly isFreeGameMode = computed(() => this.spinButtonMode() === 'free-game');
  readonly totalSpins = signal<number>(0);
  readonly currentSpins = signal<number>(0);
  readonly displayBet = signal<number>(0);
  readonly hasNew = computed(() => this.game.rsNotification());
  constructor() {
    this.game.RSEnterRSItemSpinMode$.subscribe(this.onRSEnterRSItemSpinMode.bind(this));
    this.game.RSLeaveRSItemSpinMode$.subscribe(this.onRSLeaveRSItemSpinMode.bind(this));
    this.game.RSUpdateUseItemCount$.subscribe(this.onRSUpdateUseItemCount.bind(this));
  }

  protected onRSEnterRSItemSpinMode(message: IEnterRSItemSpinMode) {
    this.logger.rewardSystemLog('Enter RS Item Spin Mode:', message);

    //this.bottomPanel.showRsPanel();
    this.iconName.set(message.iconName);
    this.spinButtonMode.set(
      message.BuyfeatureName ? 'free-game' : 'double-chance'
    );
    
    // 初始化 RS spins 計數
    this.totalSpins.set(message.UseAmout);
    this.currentSpins.set(message.UseAmout);
    
    // 設定 RS 的投注金額（使用 s2c 轉換）
    this.displayBet.set(calc.s2c(message.BetValue));
  }

  protected onRSLeaveRSItemSpinMode(shouldLeave: boolean) {
    this.logger.rewardSystemLog('Leave RS Item Spin Mode:', shouldLeave);
    //this.bottomPanel.hideRsPanel();
    this.iconName.set('');
    this.spinButtonMode.set(null);
    this.totalSpins.set(0);
    this.currentSpins.set(0);
    this.displayBet.set(0);
  }

  protected onRSUpdateUseItemCount(message: { total?: number; remaining?: number }) {
    this.logger.rewardSystemLog('RS Update Use Item Count:', message);
    
    if (message.total !== undefined) {
      this.totalSpins.set(message.total);
    }
    if (message.remaining !== undefined) {
      this.currentSpins.set(message.remaining);
    }
  }

  toRSItemIconAssetDownloadUrl(imgname:string):string
  {
      let ret = "";
      // ///usr/share/nginx/html/games/system/Info/RewardSystem/store/item_icon
      // ret = l_strURL + "/system/Info/RewardSystem/store/item_icon/" + imgname + ".png" + verstr;
      ret = this.toIMGDataAssetDownloadUrl("/system/Info/RewardSystem/store/item_icon/", imgname);

      return ret;
  }

  toIMGDataAssetDownloadUrl(relpath:string, imgname:string):string
  {
      let ret = "";

      let l_strURL = location.origin;
      if (l_strURL.includes("192.168") || l_strURL.includes("localhost")) {
          l_strURL = this.session.assetUrl;
      }
      else
      {
          //do this?
          //let l_strURL = InfoMgr.CDN_URL;
          l_strURL = window.location.origin;
      }

      ///usr/share/nginx/html/games/system/Info/RewardSystem/common/openrs_icon
      ret = l_strURL + relpath + imgname + ".png";

      return ret;
  }

}
