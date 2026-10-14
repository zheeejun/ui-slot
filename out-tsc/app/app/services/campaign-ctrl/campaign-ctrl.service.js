import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { PromoEnum } from './campaign-info-msg.interface';
import { formatCampaignList } from './campaign-ctrl.function';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { UserProfileService } from '../user-profile/user-profile.service';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';
import { Subject } from 'rxjs';
import { LoginCtrlService } from '../login-ctrl/login-ctrl.service';
import { environment } from '../../../environments/app-environment';
import { StorageCtrlService } from '../storage-ctrl/storage-ctrl.service';
import { LoggerService } from '../logger/logger.service';
import * as i0 from "@angular/core";
/** 處理獎勵相關的資料 */
export class CampaignCtrlService {
    api = inject(AppInterfaceService);
    user = inject(UserProfileService);
    game = inject(GameIframeCtrlService);
    login = inject(LoginCtrlService);
    storage = inject(StorageCtrlService);
    logger = inject(LoggerService);
    imgFolder = '/ap-promo-images/';
    /** campaign popup是否啟動*/
    popupActivated = signal(false);
    /** campaign popup 是否啟用 */
    popupEnabled = computed(() => {
        // 目前的條件是有活動在進行中才顯示popup, 之後如果有其他條件也可以加在這裡
        return this.campaignList().length > 0;
    });
    /** 所有Campaign */
    _campaignList = signal([]);
    /** 所有Campaign */
    campaignList = this._campaignList.asReadonly();
    /** 所有Campaign Group */
    _campaignGroupList = signal([]);
    /** 所有Campaign Group */
    campaignGroupList = this._campaignGroupList.asReadonly();
    /** 目前選取的活動的ID */
    _currentCampaignId = signal(null);
    /** 目前選取的活動的ID */
    currentCampaignId = this._currentCampaignId.asReadonly();
    /** 目前選取的活動 */
    currentCampaign = computed(() => {
        const id = this.currentCampaignId();
        return this.campaignList().find(c => c.id === id) || null;
    });
    /** 需要達成目標才會啟動的Campaign */
    claimedEventSubject = new Subject();
    /** 需要達成目標才會啟動的Campaign */
    get claimedEvent$() { return this.claimedEventSubject.asObservable(); }
    receivedFreeBonusSubject = new Subject();
    get receivedFreeBonus$() { return this.receivedFreeBonusSubject.asObservable(); }
    receivedFreeSpinSubject = new Subject();
    get receivedFreeSpin$() { return this.receivedFreeSpinSubject.asObservable(); }
    onGoingFreeBonusSubject = new Subject();
    get onGoingFreeBonus$() { return this.onGoingFreeBonusSubject.asObservable(); }
    onGoingFreeSpinSubject = new Subject();
    get onGoingFreeSpin$() { return this.onGoingFreeSpinSubject.asObservable(); }
    requiredTurnoverSubject = new Subject();
    get requiredTurnover$() { return this.requiredTurnoverSubject.asObservable(); }
    failedSubject = new Subject();
    get failed$() { return this.failedSubject.asObservable(); }
    successSubject = new Subject();
    get success$() { return this.successSubject.asObservable(); }
    openEventCenterCampaignSubject = new Subject();
    get openEventCenterCampaign$() { return this.openEventCenterCampaignSubject.asObservable(); }
    userId = computed(() => this.api.loginResultNote()?.nickname ?? '');
    haveNewGroup = computed(() => {
        const clicked = this.storage.campaignGroupsClickedSignal() || [];
        // 只要有一個活動群組的ID不在clicked裡面就算有新的活動群組, key = `${this.userId()}_${groupId}`;
        return this.campaignGroupList().some(group => {
            const key = `${this.userId()}_${group.id}`;
            return !clicked.includes(key);
        });
    });
    constructor() {
        this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
        this.api.loginResult$.subscribe(result => {
            this.updateLoginResult(result);
        });
        // 遊戲啟動後 PopupComponent會打開popupActivated處理popup的訊息
        effect(() => {
            if (this.popupActivated()) {
                untracked(() => {
                    // 第一次處理訊息才會使用combine=true的方式
                    const result = this.processPopupMessages(this.api.loginResult()?.note.campaignlist ?? [], true);
                    this.logger.campaignLog("Process campaign popup message on login", result);
                    // 打開最後一則pupup訊息的group
                    if (result.relatedGroupList.length > 0) {
                        // relatedGroupList最後一個groupId
                        const endGroupId = result.relatedGroupList[result.relatedGroupList.length - 1].id;
                        this.openEventCenterCampaignSubject.next(endGroupId);
                    }
                    else {
                        // 遊戲開啟沒有收到彈窗訊息, 如果有group, 就打開weight最高的group
                        const groups = this.campaignGroupList();
                        if (groups.length > 0) {
                            const sortedGroups = [...groups].sort((a, b) => b.weight - a.weight);
                            this.openEventCenterCampaignSubject.next(sortedGroups[0].id);
                        }
                    }
                });
            }
        });
        this.api.spinResult$.subscribe((result) => {
            // Spin結果可能會帶新的Campaign資訊，更新之
            this.setCampaignList(result.note?.campaignlist ?? []);
            this.setCampaignGroupList(result.note?.campaign_group_list ?? []);
            // 等演出完成之後, 處理popup的訊息
            const sub = this.game.readyForSpin$.subscribe(() => {
                this.processPopupMessages(result.note?.campaignlist ?? []);
                sub.unsubscribe();
            });
        });
        //
        if (!environment.production) {
            window.campaign = this;
        }
    }
    /** 是否要顯示Campaign在event center的tab條件 */
    showTab = computed(() => {
        return this.campaignList().length > 0;
    });
    updateLoginResult(result) {
        if (!result)
            return;
        this.setCampaignList(result.note?.campaignlist ?? []);
        this.setCampaignGroupList(result.note?.campaign_group_list ?? []);
    }
    /** 設定現在使用中的活動錢包, null表示沒有活動被選擇 */
    setCurrentId(id) {
        // 如果id是null, 就表示活動取消選擇
        if (!id) {
            const preId = this.currentCampaignId();
            // 如果之前沒有活動, 就不需要更新Bet
            if (!preId)
                return;
            this._currentCampaignId.set(null);
            this.user.campaignSetting.set(null);
            // 把Bet更新到Bet List最小的那個
            const betList = this.user.betList();
            if (betList && betList.length > 0) {
                this.user.updateBet(betList[0]);
            }
            return;
        }
        const campaign = this.campaignList().find(c => c.id === id);
        // 如果找不到對應的活動, 就不做任何事情
        if (!campaign)
            return;
        // 如果活動是hidden或completed狀態, 不讓他被選擇, 不做任何事情
        if (campaign.status === 'hidden')
            return;
        if (campaign.status === 'completed')
            return;
        this._currentCampaignId.set(id);
        // 同時也要設定到UserProfile
        this.user.campaignSetting.set(this.currentCampaign());
        // 如果是Free Spin, 把Bet設定為Spin Bet
        if (campaign.displayType === 'freeSpins' && campaign.type === 'freeSpins') {
            this.user.updateBet(campaign.spinBet);
        }
        // 如果是Free Bonus, 把bet設定為BetLevel最小的那個
        if (campaign.displayType === 'freeBonus') {
            const betList = this.user.betList();
            if (betList && betList.length > 0) {
                this.user.updateBet(betList[0]);
            }
        }
    }
    /** 更新campaigns, 新的ID就加入, 存在的ID就取代 */
    updateCampaigns(campaigns) {
        this._campaignList.update(list => {
            const updated = [...list];
            for (const campaign of campaigns) {
                const existingIndex = updated.findIndex((c) => c.id === campaign.id);
                if (existingIndex === -1) {
                    updated.push(campaign);
                }
                else {
                    updated[existingIndex] = campaign;
                }
            }
            return updated;
        });
        // 同時也要更新到UserProfile
        this.user.campaignSetting.set(this.currentCampaign());
    }
    /** 從server note 更新CampaignList, 新的ID就加入, 存在的ID就取代 */
    updateCampaignList(campaignNotes) {
        const campaignAll = formatCampaignList(campaignNotes);
        const campaigns = [...campaignAll.freeBonus, ...campaignAll.freeSpins];
        this.updateCampaigns(campaigns);
    }
    /** 從server note 設定CampaignList, 直接覆蓋現有的CampaignList */
    setCampaignList(campaignNotes) {
        const campaignAll = formatCampaignList(campaignNotes);
        const campaigns = [...campaignAll.freeBonus, ...campaignAll.freeSpins];
        this._campaignList.set(campaigns);
        // 同時也要更新到UserProfile
        this.user.campaignSetting.set(this.currentCampaign());
    }
    /** 從server note 更新CampaignGroupList, 新的ID就加入, 存在的ID就取代 */
    updateCampaignGroupList(campaignGroupNotes) {
        // 新的ID加入，存在的ID就取代
        const updated = [...this.campaignGroupList()];
        for (const groupNote of campaignGroupNotes) {
            // 在this.campaignList有對應的id, 才會放進list
            const list = groupNote.campaign_id_list.filter(campaignId => this.campaignList().some(c => c.id === campaignId));
            if (list.length === 0)
                continue; // 如果這個活動群組裡面沒有任何有效的活動, 就不顯示這個活動群組
            const existingIndex = updated.findIndex((g) => g.id === groupNote.group_id);
            const newGroup = {
                id: groupNote.group_id,
                title: groupNote.title,
                image: this.login.assetUrl + this.imgFolder + groupNote.banner_url,
                campaignIdList: list,
                description: groupNote.description,
                weight: groupNote.weight,
                endTime: Math.max(...list.map(campaignId => {
                    const campaign = this.campaignList().find(c => c.id === campaignId);
                    return campaign ? campaign.endTime : 0;
                }))
            };
            if (existingIndex === -1) {
                updated.push(newGroup);
            }
            else {
                updated[existingIndex] = newGroup;
            }
        }
        this._campaignGroupList.set(updated);
        // 更新campaign list裡面的groupId
        this._campaignList.update(list => {
            return list.map(campaign => {
                const group = updated.find(g => g.campaignIdList.includes(campaign.id));
                return { ...campaign, groupId: group ? group.id : null };
            });
        });
    }
    /** 從server note 設定CampaignGroupList, 直接覆蓋現有的CampaignGroupList */
    setCampaignGroupList(campaignGroupNotes) {
        const groups = [];
        for (const groupNote of campaignGroupNotes) {
            // 在this.campaignList有對應的id, 才會放進list
            const list = groupNote.campaign_id_list.filter(campaignId => this.campaignList().some(c => c.id === campaignId));
            if (list.length === 0)
                continue; // 如果這個活動群組裡面沒有任何有效的活動, 就不顯示這個活動群組
            const newGroup = {
                id: groupNote.group_id,
                title: groupNote.title,
                description: groupNote.description,
                image: this.login.assetUrl + this.imgFolder + groupNote.banner_url,
                campaignIdList: groupNote.campaign_id_list,
                weight: groupNote.weight,
                endTime: Math.max(...groupNote.campaign_id_list.map(campaignId => {
                    const campaign = this.campaignList().find(c => c.id === campaignId);
                    return campaign ? campaign.endTime : 0;
                }))
            };
            groups.push(newGroup);
        }
        this._campaignGroupList.set(groups);
        // 更新campaign list裡面的groupId
        this._campaignList.update(list => {
            return list.map(campaign => {
                const group = groups.find(g => g.campaignIdList.includes(campaign.id));
                return { ...campaign, groupId: group ? group.id : null };
            });
        });
    }
    /** 觸發popup訊息, 回傳是否有有效訊息 */
    processPopupMessages(campaignNotes, combine = false) {
        const result = { popupList: [], relatedGroupList: [] };
        for (const campaignNote of campaignNotes) {
            if (campaignNote.type === PromoEnum.CashDrop) {
                continue; // CashDrop沒有popup訊息;
            }
            const popupMsg = campaignNote.popup_msg;
            const id = campaignNote.campaign_id;
            // pupupMsg是數字且大於0才是有效訊息
            if (typeof popupMsg === 'number' && popupMsg > 0) {
                const pupup = {
                    id: popupMsg,
                    campaignList: this.campaignList().filter(c => c.id === id)
                };
                // 如果這個活動的ID在campaign list裡找不到, 就不顯示這個popup
                if (pupup.campaignList.length === 0)
                    continue;
                if (combine) {
                    // 如果這個popup的ID已經在result裡面, 就不重複加入, 更新這個popup裡面的campaignList
                    const existingPopup = result.popupList.find(p => p.id === popupMsg);
                    if (existingPopup) {
                        existingPopup.campaignList = Array.from(new Set([...existingPopup.campaignList, ...pupup.campaignList]));
                    }
                    else {
                        result.popupList.push(pupup);
                    }
                }
                else { // 不合併, 直接加入
                    result.popupList.push(pupup);
                }
            }
        }
        // 把 id=3 放在最前面
        result.popupList.sort((a, b) => {
            if (a.id === 3)
                return -1;
            if (b.id === 3)
                return 1;
            return 0;
        });
        // 觸發事件
        result.popupList.forEach((message) => {
            switch (message.id) {
                case 21:
                    this.claimedEventSubject.next(message);
                    break;
                case 1:
                    this.receivedFreeBonusSubject.next(message);
                    break;
                case 13:
                    this.receivedFreeSpinSubject.next(message);
                    break;
                case 4:
                    this.onGoingFreeBonusSubject.next(message);
                    break;
                case 17:
                    this.onGoingFreeSpinSubject.next(message);
                    break;
                case 14:
                    this.requiredTurnoverSubject.next(message);
                    break;
                case 19:
                    this.failedSubject.next(message);
                    break;
                case 3:
                    this.successSubject.next(message);
                    break;
            }
            // 列出此message相關的活動群組
            const groups = this.campaignGroupList().filter(group => group.campaignIdList.some(campaignId => message.campaignList.some(c => c.id === campaignId)));
            // 只把沒有重複的活動群組加進去
            groups.forEach(group => {
                if (!result.relatedGroupList.some(g => g.id === group.id)) {
                    result.relatedGroupList.push(group);
                }
            });
        });
        return result;
    }
    /** 遊戲演出完成之後要處理的事情 */
    onReadyForSpin() {
        const current = this.currentCampaign();
        if (!current)
            return;
        // 如果目前的活動是hidden或completed狀態, 就取消選擇
        if (current.status === 'hidden' || current.status === 'completed') {
            this.setCurrentId(null);
        }
        // 如果目前的Bet不在Bet List裡, 就更新Bet為Bet List最小的那個, 主要是處理Free Spin轉換成Free Bonus之後Bet不合法的問題
        const betList = this.user.betList();
        if (betList && betList.length > 0 && !betList.includes(this.user.bet())) {
            this.user.updateBet(betList[0]);
        }
    }
    cleanClickedGroups() {
        this.storage.campaignGroupsClicked = null;
    }
    static ɵfac = function CampaignCtrlService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CampaignCtrlService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CampaignCtrlService, factory: CampaignCtrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CampaignCtrlService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
//# sourceMappingURL=campaign-ctrl.service.js.map