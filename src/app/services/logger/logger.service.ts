import { Injectable, effect, inject, signal } from '@angular/core';
import { StorageCtrlService } from '../storage-ctrl/storage-ctrl.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  readonly logEnabled = signal(false);
  readonly iframeLogEnabled = signal(false);
  readonly iframeSocketLogEnabled = signal(false);
  readonly iframeReplayLogEnabled = signal(false);
  readonly iframeHistoryLogEnabled = signal(false);
  readonly apiLogEnabled = signal(false);
  readonly leaderboardLogEnabled = signal(false);
  readonly rewardSystemLogEnabled = signal(false);
  readonly campaignLogEnabled = signal(false);
  readonly ogLogEnabled = signal(false);

  private storage = inject(StorageCtrlService);

  constructor() {
    this.loadSavedSettings();
  }

  private loadSavedSettings(): void {
    const saved = this.storage.loggerSettings;
    if (!saved) return;
    this.logEnabled.set(saved.logEnabled);
    this.iframeLogEnabled.set(saved.iframeLogEnabled);
    this.iframeSocketLogEnabled.set(saved.iframeSocketLogEnabled);
    this.iframeReplayLogEnabled.set(saved.iframeReplayLogEnabled);
    this.iframeHistoryLogEnabled.set(saved.iframeHistoryLogEnabled);
    this.apiLogEnabled.set(saved.apiLogEnabled);
    this.leaderboardLogEnabled.set(saved.leaderboardLogEnabled);
    this.rewardSystemLogEnabled.set(saved.rewardSystemLogEnabled);
    this.campaignLogEnabled.set(saved.campaignLogEnabled);
    this.ogLogEnabled.set(saved.ogLogEnabled);
  }

  /** 用於記錄一般訊息 */
  log(...args: any[]) {
    if (!this.logEnabled())
      return;
    console.log("[LOG]", ...args);
  }
  
  /** 用於記錄來自 iframe 的訊息 */
  iframeLog(...args: any[]) {
    if (!this.iframeLogEnabled())
      return;
    console.log("[IFRAME]", ...args);
  }

  iframeSocketLog(...args: any[]) {
    if (!this.iframeSocketLogEnabled())
      return;
    console.log("[IFRAME-SOCKET]", ...args);
  }

    /** 用於記錄 replay iframe 的訊息 */
  iframeReplayLog(...args: any[]) {
    if (!this.iframeReplayLogEnabled())
      return;
    console.log("[IFRAME-REPLAY]", ...args);
  }

  /** 用於記錄 history iframe 的訊息 */
  iframeHistoryLog(...args: any[]) {
    if (!this.iframeHistoryLogEnabled())
      return;
    console.log("[IFRAME-HISTORY]", ...args);
  }

  /** 用於記錄 API 訊息 */
  apiLog(...args: any[]) {
    if (!this.apiLogEnabled())
      return;
    console.log("[API]", ...args);
  }

  /** 用於記錄排行榜訊息 */
  leaderboardLog(...args: any[]) {
    if (!this.leaderboardLogEnabled())
      return;
    console.log("[LEADERBOARD]", ...args);
  }

  /** 用於記錄獎勵系統訊息 */
  rewardSystemLog(...args: any[]) {
    if (!this.rewardSystemLogEnabled())
      return;
    console.log("[REWARD-SYSTEM]", ...args);
  }

  /** 用於記錄活動訊息 */
  campaignLog(...args: any[]) {
    if (!this.campaignLogEnabled())
      return;
    console.log("[CAMPAIGN]", ...args);
  }

  /** 用於紀錄OG的相關訊息 */
  ogLog(...args: any[]) {
    if (!this.ogLogEnabled())
      return;
    console.log("[OG]", ...args);
  }

  warn(...args: any[]) {
     // 警告通常不需要被關閉，或者有獨立開關
     console.warn(...args);
  }

  error(...args: any[]) {
    // 錯誤通常不需要被關閉，或者有獨立開關
    console.error(...args);
  }

  saveSettings(): void {
    this.storage.loggerSettings = {
      logEnabled: this.logEnabled(),
      iframeLogEnabled: this.iframeLogEnabled(),
      iframeSocketLogEnabled: this.iframeSocketLogEnabled(),
      iframeReplayLogEnabled: this.iframeReplayLogEnabled(),
      iframeHistoryLogEnabled: this.iframeHistoryLogEnabled(),
      apiLogEnabled: this.apiLogEnabled(),
      leaderboardLogEnabled: this.leaderboardLogEnabled(),
      rewardSystemLogEnabled: this.rewardSystemLogEnabled(),
      campaignLogEnabled: this.campaignLogEnabled(),
      ogLogEnabled: this.ogLogEnabled(),
    };
  }

  deleteSettings(): void {
    this.storage.loggerSettings = null;
  }
}
