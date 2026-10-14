import { Injectable, signal } from '@angular/core';
import {
  StorageCampaignGroupsClicked,
  StorageCampaignMessageShown,
  StorageCampaignSetting,
  StorageEventRunning,
  StorageGameIframeSetting,
  StorageLoginSetting,
  StorageLoggerSettings,
  StorageCashDropClicked,
} from './storage-ctrl.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageCtrlService {

  private readonly KEYS = {
    LOGIN_SETTING: 'ap_storage_login_setting',
    CAMPAIGN_GROUPS_CLICKED: 'ap_storage_campaign_groups_clicked',
    CASHDROP_CLICKED: 'ap_storage_cashdrop_clicked',
    TRN_GAME_CONFIRM_DONT_SHOW: 'ap_storage_trn_game_confirm_dont_show',
    TRN_EVENT_RUNNING: 'ap_storage_trn_event_running',
    LOGGER_SETTINGS: 'ap_storage_logger_settings',
    CAMPAIGN_SETTING: 'ap_storage_campaign_setting',
    CAMPAIGN_MESSAGE_SHOWN: 'ap_storage_campaign_message_shown',
    GAME_IFRAME_SETTING: 'ap_storage_game_iframe_setting',
  };

  // 用來給偵測用的signal, 實際的值還是存在localStorage裡面
  campaignGroupsClickedSignal = signal<StorageCampaignGroupsClicked | null>(this.getItem<StorageCampaignGroupsClicked>(this.KEYS.CAMPAIGN_GROUPS_CLICKED));
  cashDropClickedSignal = signal<StorageCashDropClicked | null>(this.getItem<StorageCashDropClicked>(this.KEYS.CASHDROP_CLICKED));

  constructor() { }

  // --- 核心 helper 方法 (私有) ---

  private setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('LocalStorage write error', e);
    }
  }

  private getItem<T>(key: string): T | null {

      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;

  }

  // --- 使用 Getter / Setter 封裝區塊 ---

  get trnGameConfirmDontShow(): number | null {
    return this.getItem<number>(this.KEYS.TRN_GAME_CONFIRM_DONT_SHOW);
  }

  set trnGameConfirmDontShow(value: number | null) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.TRN_GAME_CONFIRM_DONT_SHOW);
    } else {
      this.setItem(this.KEYS.TRN_GAME_CONFIRM_DONT_SHOW, value);
    }
  }

  get trnEventRunning(): StorageEventRunning | null {
    return this.getItem<StorageEventRunning>(this.KEYS.TRN_EVENT_RUNNING);
  }

  set trnEventRunning(value: StorageEventRunning | null) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.TRN_EVENT_RUNNING);
    } else {
      this.setItem(this.KEYS.TRN_EVENT_RUNNING, value);
    }
  }

  /**
   * Login Setting 存取器
   * 包含 token, url, gameId, uiMode, language 等資訊
   * 如果沒有設定，回傳 null
   * 如果設定為 null，則會從 localStorage 中移除該項目
   */
  get loginSetting(): StorageLoginSetting | null {
    return this.getItem<StorageLoginSetting>(this.KEYS.LOGIN_SETTING);
  }

  set loginSetting(value: StorageLoginSetting | null) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.LOGIN_SETTING);
    } else {
      this.setItem(this.KEYS.LOGIN_SETTING, value);
    }
  }

  get campaignGroupsClicked(): StorageCampaignGroupsClicked | null {
    return this.getItem<StorageCampaignGroupsClicked>(
      this.KEYS.CAMPAIGN_GROUPS_CLICKED
    );
  }

  set campaignGroupsClicked(value: StorageCampaignGroupsClicked | null) {
    // 更新 signal 的值, 讓依賴它的 computed 可以重新計算
    this.campaignGroupsClickedSignal.set(value);
    if (value === null) {
      localStorage.removeItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED);
    } else {
      this.setItem(this.KEYS.CAMPAIGN_GROUPS_CLICKED, value);
    }
  }

  get cashDropClicked(): StorageCashDropClicked | null {
    return this.getItem<StorageCashDropClicked>(this.KEYS.CASHDROP_CLICKED);
  }

  set cashDropClicked(value: StorageCashDropClicked | null) {
    // 更新 signal 的值, 讓依賴它的 computed 可以重新計算
    this.cashDropClickedSignal.set(value);
    if (value === null) {
      localStorage.removeItem(this.KEYS.CASHDROP_CLICKED);
    } else {
      this.setItem(this.KEYS.CASHDROP_CLICKED, value);
    }
  }

  // --- 其他工具方法 ---

  /**
   * 部分更新 Login Setting
   * @param partialValue 部分 Login Setting 內容
   */
  patchLoginSetting(partialValue: Partial<StorageLoginSetting>): void {
    const current = this.loginSetting;
    if (current) {
      this.loginSetting = { ...current, ...partialValue };
    }
  }
  
  get loggerSettings(): StorageLoggerSettings | null {
    return this.getItem<StorageLoggerSettings>(this.KEYS.LOGGER_SETTINGS);
  }

  set loggerSettings(value: StorageLoggerSettings | null) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.LOGGER_SETTINGS);
    } else {
      this.setItem(this.KEYS.LOGGER_SETTINGS, value);
    }
  }

  get campaignSetting(): StorageCampaignSetting | null {
    return this.getItem<StorageCampaignSetting>(this.KEYS.CAMPAIGN_SETTING);
  }

  set campaignSetting(value: StorageCampaignSetting | null) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.CAMPAIGN_SETTING);
    } else {
      this.setItem(this.KEYS.CAMPAIGN_SETTING, value);
    }
  }

  get campaignMessageShown(): StorageCampaignMessageShown | null {
    return this.getItem<StorageCampaignMessageShown>(this.KEYS.CAMPAIGN_MESSAGE_SHOWN);
  }

  set campaignMessageShown(value: StorageCampaignMessageShown | null) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.CAMPAIGN_MESSAGE_SHOWN);
    } else {
      this.setItem(this.KEYS.CAMPAIGN_MESSAGE_SHOWN, value);
    }
  }

  /**
   * 檢查活動今天是否已經提示過
   * @param type 提示類型 (joined / underCondition / claimed / inProgress)
   * @param id 活動 id
   */
  isCampaignMessageShownToday(type: keyof StorageCampaignMessageShown, id: string): boolean {
    const list = this.campaignMessageShown?.[type] ?? [];
    return list.some(item => item.id === id && this.isToday(item.time));
  }

  /**
   * 記錄活動今天已經提示過, 同時清除非今天的紀錄
   * @param type 提示類型 (joined / underCondition / claimed / inProgress)
   * @param id 活動 id
   */
  markCampaignMessageShown(type: keyof StorageCampaignMessageShown, id: string): void {
    console.log(`Marking campaign message shown for type: ${type}, id: ${id}`);
    const current = this.campaignMessageShown;
    const shown: StorageCampaignMessageShown = {
      joined: (current?.joined ?? []).filter(item => this.isToday(item.time)),
      underCondition: (current?.underCondition ?? []).filter(item => this.isToday(item.time)),
      received: (current?.received ?? []).filter(item => this.isToday(item.time)),
      onGoing: (current?.onGoing ?? []).filter(item => this.isToday(item.time)),
    };
    shown[type] = [...shown[type].filter(item => item.id !== id), { id, time: Date.now() }];
    this.campaignMessageShown = shown;
  }

  /** 時間戳是否為今天 (以本地時區判斷) */
  private isToday(time: number): boolean {
    return new Date(time).toDateString() === new Date().toDateString();
  }

  get gameIframeSetting(): StorageGameIframeSetting | null {
    return this.getItem<StorageGameIframeSetting>(this.KEYS.GAME_IFRAME_SETTING);
  }

  set gameIframeSetting(value: StorageGameIframeSetting | null) {
    if (value === null) {
      localStorage.removeItem(this.KEYS.GAME_IFRAME_SETTING);
    } else {
      this.setItem(this.KEYS.GAME_IFRAME_SETTING, value);
    }
  }

  /**
   * 部分更新 Game Iframe Setting
   * @param partialValue 部分 Game Iframe Setting 內容
   */
  patchGameIframeSetting(partialValue: Partial<StorageGameIframeSetting>): void {
    const current = this.gameIframeSetting;
    if (current) {
      this.gameIframeSetting = { ...current, ...partialValue };
    }
  }

  /**
   * 清除所有 LocalStorage (請謹慎使用)
   */
  clearAll(): void {
    localStorage.clear();
  }
}
