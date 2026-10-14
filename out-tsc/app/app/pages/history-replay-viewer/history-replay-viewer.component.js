import { Component, signal, input, output, ViewChild, ElementRef, inject, DestroyRef, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { timer } from 'rxjs';
import { LoggerService } from '../../services/logger/logger.service';
import { ApHistoryPopupReplayComponent } from '../../components/ap-history-popup-replay/ap-history-popup-replay.component';
import { ApHistoryPopupReplayEndComponent } from '../../components/ap-history-popup-replay-end/ap-history-popup-replay-end.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApWebBase } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebBase';
import { createApWebMessage } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebMessages';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { BottomPanelDemoComponent } from '../bottom-panel-demo/bottom-panel-demo.component';
import { BottomPanelReplayComponent } from '../bottom-panel-replay/bottom-panel-replay.component';
import { ApUiPlayModeComponent } from '../../components/ap-ui-play-mode/ap-ui-play-mode.component';
import { ApUiGameNameComponent } from '../../components/ap-ui-game-name/ap-ui-game-name.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import * as i0 from "@angular/core";
const _c0 = ["replayIframe"];
function HistoryReplayViewerComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-history-popup-replay", 3);
    i0.ɵɵlistener("confirm", function HistoryReplayViewerComponent_Conditional_0_Template_ap_history_popup_replay_confirm_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onReplayConfirm()); })("close", function HistoryReplayViewerComponent_Conditional_0_Template_ap_history_popup_replay_close_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onReplayCancel()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("header", ctx_r1.popupLabel())("description", ctx_r1.popupHintReplay())("cancelText", ctx_r1.cancelLabel())("confirmText", ctx_r1.confirmLabel());
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-ui-game-name", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("gameName", ctx_r1.gameName());
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "ap-button", 8);
    i0.ɵɵlistener("click", function HistoryReplayViewerComponent_Conditional_1_Conditional_4_Template_ap_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeReplayIframe()); });
    i0.ɵɵelementEnd()();
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-history-popup-replay-end", 9);
    i0.ɵɵlistener("watchAgain", function HistoryReplayViewerComponent_Conditional_1_Conditional_5_Template_ap_history_popup_replay_end_watchAgain_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onWatchAgain()); })("copyLink", function HistoryReplayViewerComponent_Conditional_1_Conditional_5_Template_ap_history_popup_replay_end_copyLink_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onCopyLink()); })("close", function HistoryReplayViewerComponent_Conditional_1_Conditional_5_Template_ap_history_popup_replay_end_close_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeReplayIframe()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("showWatchAgain", ctx_r1.showWatchAgain())("showCopyLink", ctx_r1.isReplayPanel())("showCloseButton", ctx_r1.showReplayEndCloseButton());
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-ui-play-mode", 11);
    i0.ɵɵlistener("enableMusicSound", function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_0_Template_ap_ui_play_mode_enableMusicSound_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onDemoMusicIconClicked()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("showIcon", true)("label", ctx_r1.getDemoModeLabel());
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bottom-panel-demo", 13);
    i0.ɵɵlistener("musicPressedChange", function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_1_Conditional_1_Template_bottom_panel_demo_musicPressedChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onDemoMusicPressedChange($event)); })("turboStateChange", function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_1_Conditional_1_Template_bottom_panel_demo_turboStateChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onTurboStateChange($event)); })("spin", function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_1_Conditional_1_Template_bottom_panel_demo_spin_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.spin()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("freeGameRemaining", ctx_r1.featureModeRemaining())("freeGameTotal", ctx_r1.featureModeTotal())("spinButtonMode", ctx_r1.spinButtnMode());
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-ui-play-mode", 10);
    i0.ɵɵconditionalCreate(1, HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_1_Conditional_1_Template, 1, 3, "bottom-panel-demo", 12);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("showIcon", false)("label", ctx_r1.getDemoModeLabel());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isShowPanel() ? 1 : -1);
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_0_Template, 1, 2, "ap-ui-play-mode", 10)(1, HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Conditional_1_Template, 2, 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional(ctx_r1.isOldGame() ? 0 : 1);
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-ui-play-mode", 11);
    i0.ɵɵlistener("enableMusicSound", function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_0_Template_ap_ui_play_mode_enableMusicSound_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onReplayMusicIconClicked()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("showIcon", true)("label", ctx_r1.getReplayModeLabel());
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bottom-panel-replay", 15);
    i0.ɵɵlistener("copyLink", function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Conditional_1_Template_bottom_panel_replay_copyLink_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onCopyLink()); })("musicPressedChange", function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Conditional_1_Template_bottom_panel_replay_musicPressedChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onReplayMusicPressedChange($event)); })("turboStateChange", function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Conditional_1_Template_bottom_panel_replay_turboStateChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onTurboStateChange($event)); })("spin", function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Conditional_1_Template_bottom_panel_replay_spin_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.spin()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("displayCurrency", "$")("displayBet", ctx_r1.replayBet() ?? 0)("displayWin", ctx_r1.replayWin() ?? 0)("freeGameRemaining", ctx_r1.featureModeRemaining())("freeGameTotal", ctx_r1.featureModeTotal())("spinButtonMode", ctx_r1.spinButtnMode());
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-ui-play-mode", 10);
    i0.ɵɵconditionalCreate(1, HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Conditional_1_Template, 1, 6, "bottom-panel-replay", 14);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("showIcon", false)("label", ctx_r1.getReplayModeLabel());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isShowPanel() ? 1 : -1);
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_0_Template, 1, 2, "ap-ui-play-mode", 10)(1, HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Template, 2, 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional(ctx_r1.isOldGame() ? 0 : 1);
} }
function HistoryReplayViewerComponent_Conditional_1_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_0_Template, 2, 1)(1, HistoryReplayViewerComponent_Conditional_1_Conditional_6_Conditional_1_Template, 2, 1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(!ctx_r1.isReplayPanel() ? 0 : 1);
} }
function HistoryReplayViewerComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "iframe", 4, 0);
    i0.ɵɵlistener("load", function HistoryReplayViewerComponent_Conditional_1_Template_iframe_load_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onReplayIframeLoad()); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, HistoryReplayViewerComponent_Conditional_1_Conditional_3_Template, 1, 1, "ap-ui-game-name", 5);
    i0.ɵɵconditionalCreate(4, HistoryReplayViewerComponent_Conditional_1_Conditional_4_Template, 2, 0, "div", 6);
    i0.ɵɵconditionalCreate(5, HistoryReplayViewerComponent_Conditional_1_Conditional_5_Template, 1, 3, "ap-history-popup-replay-end", 7);
    i0.ɵɵconditionalCreate(6, HistoryReplayViewerComponent_Conditional_1_Conditional_6_Template, 2, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r1.replayIframeName());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.showGameLogo() ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showCloseButton() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isReplayEnd() ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isLoadingFinished() ? 6 : -1);
} }
export class HistoryReplayViewerComponent {
    sanitizer = inject(DomSanitizer);
    logger = inject(LoggerService);
    gameIframeCtrl = inject(GameIframeCtrlService);
    bottomPanel = inject(BottomPanelService);
    destroyRef = inject(DestroyRef);
    appI18n = inject(AppI18nService);
    login = inject(LoginCtrlService);
    // 儲存開始 Replay 前的音樂和音效音量
    savedMusicVolume = 0;
    savedSoundVolume = 0;
    // Inputs
    showConfirmDialog = input(false);
    popupLabel = input('Message');
    popupHintReplay = input('To begin watching, please confirm if you would like to play.');
    cancelLabel = input('Cancel');
    confirmLabel = input('Confirm');
    showWatchAgain = input(true);
    showCopyLink = input(true);
    showCloseButton = input(true);
    showReplayEndCloseButton = input(true);
    // Demo Mode 字串
    getDemoModeLabel = this.appI18n.computed('replay_demo_mode', 'replay_demo_mode');
    getReplayModeLabel = this.appI18n.computed('replay_replay_mode', 'replay_replay_mode');
    // Game Logo
    showGameLogo = input(true);
    gameName = input('');
    // Outputs
    confirmReplayRequest = output();
    cancelReplay = output();
    watchAgain = output();
    copyLinkRequest = output();
    close = output();
    // 判斷是否為舊遊戲（使用 in-game UI）- 在 replay 模式下由 loadReplayUrl 設置
    isOldGame = signal(false);
    // State signals
    isReplayIframe = signal(false);
    replayIframeUrl = signal(null);
    replayIframeName = signal('');
    isReplayEnd = signal(false);
    /** Replay正在跑遊戲畫面 */
    isReplayRunning = signal(false);
    isLoadingFinished = signal(false);
    /** 給轉場要把Panel關掉用的 */
    isShowPanel = signal(true);
    isReplayPanel = input(false); // false = bottom-panel-demo, true = bottom-panel-replay
    replayWin = signal(null); // 儲存 replay 的 win 值
    replayBet = signal(null); // 儲存 replay 的 bet 值
    isDemoMusicPressed = signal(false);
    isReplayMusicPressed = signal(false);
    isFeatureMode = signal(false); // 儲存 replay 的 feature mode 狀態
    featureModeRemaining = signal(0); // 儲存 replay 的 feature mode remaining
    featureModeTotal = signal(0); // 儲存 replay 的 feature mode total
    spinButtnMode = computed(() => this.isFeatureMode() ? 'free-game' : 'default');
    /**
     * 接收 bottom-panel-demo 的 isMusicPressed 事件
     */
    onDemoMusicPressedChange(isPressed) {
        this.setMusicAndSoundEnabledToReplayIFrame(!isPressed, !isPressed);
    }
    /**
     * 接收 bottom-panel-replay 的 isMusicPressed 事件
     */
    onReplayMusicPressedChange(isPressed) {
        this.setMusicAndSoundEnabledToReplayIFrame(!isPressed, !isPressed);
    }
    onDemoMusicIconClicked() {
        const nextPressed = !this.isDemoMusicPressed();
        this.isDemoMusicPressed.set(nextPressed);
        this.setMusicAndSoundEnabledToReplayIFrame(!nextPressed, !nextPressed);
    }
    onReplayMusicIconClicked() {
        const nextPressed = !this.isReplayMusicPressed();
        this.isReplayMusicPressed.set(nextPressed);
        this.setMusicAndSoundEnabledToReplayIFrame(!nextPressed, !nextPressed);
    }
    /**
     * 接收 bottom-panel-demo / bottom-panel-replay 的 turboStateChange 事件
     */
    onTurboStateChange(speed) {
        this.setGameSpeed(speed);
    }
    replayIframeElement;
    replayEndComponent;
    bottomPanelReplayComponent;
    replayIframeRef = null;
    replayMessageListener = null;
    ngAfterViewInit() {
        // Setup will be done in onReplayConfirm
    }
    ngOnDestroy() {
        this.removeReplayMessageListener();
    }
    /**
     * 確認開始 Replay - 發出事件讓父組件處理
     */
    onReplayConfirm() {
        this.confirmReplayRequest.emit();
    }
    /**
     * 載入 Replay URL - 由父組件呼叫
     * @param replayUrl 完整的 replay URL
     * @param isOldGame 是否為舊遊戲（使用 in-game UI）
     */
    loadReplayUrl(replayUrl, isOldGame) {
        if (!replayUrl) {
            this.logger.error('Replay URL is empty');
            return;
        }
        // 設置是否為舊遊戲
        this.isOldGame.set(isOldGame);
        // 記錄目前的音樂和音效音量
        this.savedMusicVolume = this.gameIframeCtrl.musicVolume();
        this.savedSoundVolume = this.gameIframeCtrl.soundVolume();
        // 關閉音樂和音效
        this.bottomPanel.enableMusic(false);
        this.bottomPanel.enableSound(false);
        // 初始化 replayWin 和 replayBet 為 null
        this.replayWin.set(null);
        this.replayBet.set(null);
        this.isShowPanel.set(true);
        this.isReplayRunning.set(false);
        this.isDemoMusicPressed.set(false);
        this.isReplayMusicPressed.set(false);
        this.isFeatureMode.set(false);
        this.featureModeRemaining.set(0);
        this.featureModeTotal.set(0);
        // 設定 iframe name
        const apWebBase = new ApWebBase();
        apWebBase.setMode(this.isOldGame() ? 'ap-replay-game-ui' : 'ap-replay');
        const iframeName = apWebBase.toString();
        this.replayIframeName.set(iframeName);
        const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(replayUrl);
        this.isReplayIframe.set(true);
        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            if (this.replayIframeElement?.nativeElement) {
                this.replayIframeRef = this.replayIframeElement.nativeElement;
                if (this.replayIframeRef.contentWindow) {
                    this.replayIframeRef.contentWindow.name = iframeName;
                }
                this.setupReplayMessageListener();
                this.replayIframeRef.src = replayUrl;
            }
        });
    }
    /**
     * 取消 Replay
     */
    onReplayCancel() {
        this.cancelReplay.emit();
    }
    /**
     * Replay iframe 載入完成
     */
    onReplayIframeLoad() {
    }
    /**
     * 顯示 Replay 結束畫面
     */
    showReplayEnd() {
        this.isReplayRunning.set(false);
        if (this.isReplayIframe()) {
            this.isReplayEnd.set(true);
        }
    }
    /**
     * 重新觀看
     */
    onWatchAgain() {
        this.isReplayEnd.set(false);
        if (this.replayIframeRef?.contentWindow) {
            //改成手動.
            //const message = createApWebMessage('ClickSpin', {useInGameResult: true});
            //this.replayIframeRef.contentWindow.postMessage(message, window.location.origin);
        }
        else {
            this.logger.error('Replay iframe contentWindow not available');
        }
        this.watchAgain.emit();
    }
    /**
     * 複製連結 - 發出事件讓父組件處理
     */
    onCopyLink() {
        this.copyLinkRequest.emit();
    }
    /**
     * 顯示複製連結成功 Toast
     */
    showCopyLinkToast() {
        this.replayEndComponent?.copyLinkToast?.show();
    }
    /**
     * 獲取當前 Replay URL - 由父組件呼叫
     */
    getReplayUrl() {
        if (this.replayIframeRef?.src) {
            return this.replayIframeRef.src;
        }
        this.logger.error('Replay iframe URL not available');
        return null;
    }
    /**
     * 關閉 Replay
     */
    closeReplayIframe() {
        this.removeReplayMessageListener();
        this.isReplayIframe.set(false);
        this.isReplayEnd.set(false);
        this.isShowPanel.set(true);
        this.isReplayRunning.set(false);
        this.isLoadingFinished.set(false);
        this.replayIframeUrl.set(null);
        this.replayIframeName.set('');
        this.replayIframeRef = null;
        // 重置 isOldGame
        this.isOldGame.set(false);
        // 重置 replayWin 和 replayBet
        this.replayWin.set(null);
        this.replayBet.set(null);
        this.isDemoMusicPressed.set(false);
        this.isReplayMusicPressed.set(false);
        this.isFeatureMode.set(false);
        this.featureModeRemaining.set(0);
        this.featureModeTotal.set(0);
        // 恢復原本的音樂和音效設定
        const restoreMusicEnabled = this.savedMusicVolume > 0;
        const restoreSoundEnabled = this.savedSoundVolume > 0;
        this.bottomPanel.enableMusic(restoreMusicEnabled);
        this.bottomPanel.enableSound(restoreSoundEnabled);
        this.close.emit();
    }
    /**
     * 設置 message 監聽器
     */
    setupReplayMessageListener() {
        if (this.replayMessageListener) {
            this.removeReplayMessageListener();
        }
        this.replayMessageListener = (event) => {
            if (event.origin !== window.location.origin) {
                return;
            }
            this.logger.iframeReplayLog('iframe➡️:', event.data);
            const message = event.data;
            switch (message.type) {
                case 'ReadyForSpin':
                    this.showReplayEnd();
                    break;
                case 'LoadingFinished':
                    this.isLoadingFinished.set(true);
                    break;
                case 'WinMoneyUpdated':
                    const winValue = message.content.win ?? 0;
                    this.replayWin.set(winValue);
                    break;
                case 'HistoryBetValueForShow':
                    const betValue = message.content.bet ?? 0;
                    this.replayBet.set(betValue);
                    break;
                case 'FeatureModeUpdated':
                    if (message.content.remaining !== undefined) {
                        this.featureModeRemaining.set(message.content.remaining);
                    }
                    //如果 total 有值, 就直接更新. 因為有可能是第一次進入 free game 就送 total 進來了.
                    if (message.content.total !== undefined) {
                        this.featureModeTotal.set(message.content.total);
                    }
                    break;
                case 'FeatureModeEnabled':
                    this.isFeatureMode.set(message.content.enabled);
                    break;
                case 'InGamePopupOpened':
                    this.isShowPanel.set(false);
                    break;
                case 'InGamePopupClosed':
                    this.isShowPanel.set(true);
                    break;
            }
        };
        window.addEventListener('message', this.replayMessageListener, false);
    }
    /**
     * 移除監聽器
     */
    removeReplayMessageListener() {
        if (this.replayMessageListener) {
            window.removeEventListener('message', this.replayMessageListener);
            this.replayMessageListener = null;
        }
    }
    /**
     * 設置音樂和音效的啟用狀態
     */
    setMusicAndSoundEnabledToReplayIFrame(musicEnabled, soundEnabled) {
        if (this.replayIframeRef?.contentWindow) {
            const musicMessage = createApWebMessage('SetMusic', { enabled: musicEnabled });
            const soundMessage = createApWebMessage('SetSound', { enabled: soundEnabled });
            this.replayIframeRef.contentWindow.postMessage(musicMessage, window.location.origin);
            this.replayIframeRef.contentWindow.postMessage(soundMessage, window.location.origin);
        }
    }
    /** 設定遊戲速度 0: 慢速, 1: 正常, 2: 快速 */
    setGameSpeed(speed) {
        if (this.replayIframeRef?.contentWindow) {
            const spintypemsg = createApWebMessage('SetSpinType', { speed: speed });
            this.replayIframeRef.contentWindow.postMessage(spintypemsg, window.location.origin);
        }
    }
    /** Spin 遊戲 */
    spin() {
        // 如果正在運行 就是只送出immediately stop
        if (this.isReplayRunning()) {
            if (this.replayIframeRef?.contentWindow) {
                const message = createApWebMessage('ImmediatelyStop');
                this.replayIframeRef.contentWindow.postMessage(message, window.location.origin);
            }
            return;
        }
        if (this.replayIframeRef?.contentWindow) {
            const message = createApWebMessage('ClickSpin', { useInGameResult: true });
            this.replayIframeRef.contentWindow.postMessage(message, window.location.origin);
        }
        this.isReplayRunning.set(true);
    }
    static ɵfac = function HistoryReplayViewerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistoryReplayViewerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HistoryReplayViewerComponent, selectors: [["history-replay-viewer"]], viewQuery: function HistoryReplayViewerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
            i0.ɵɵviewQuery(ApHistoryPopupReplayEndComponent, 5);
            i0.ɵɵviewQuery(BottomPanelReplayComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.replayIframeElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.replayEndComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bottomPanelReplayComponent = _t.first);
        } }, inputs: { showConfirmDialog: [1, "showConfirmDialog"], popupLabel: [1, "popupLabel"], popupHintReplay: [1, "popupHintReplay"], cancelLabel: [1, "cancelLabel"], confirmLabel: [1, "confirmLabel"], showWatchAgain: [1, "showWatchAgain"], showCopyLink: [1, "showCopyLink"], showCloseButton: [1, "showCloseButton"], showReplayEndCloseButton: [1, "showReplayEndCloseButton"], showGameLogo: [1, "showGameLogo"], gameName: [1, "gameName"], isReplayPanel: [1, "isReplayPanel"] }, outputs: { confirmReplayRequest: "confirmReplayRequest", cancelReplay: "cancelReplay", watchAgain: "watchAgain", copyLinkRequest: "copyLinkRequest", close: "close" }, decls: 2, vars: 2, consts: [["replayIframe", ""], [1, "absolute", "inset-0", "z-overlay", 3, "header", "description", "cancelText", "confirmText"], [1, "fixed", "inset-0", "z-overlay", "bg-black"], [1, "absolute", "inset-0", "z-overlay", 3, "confirm", "close", "header", "description", "cancelText", "confirmText"], ["allowfullscreen", "", "allow", "autoplay; fullscreen", 1, "w-full", "h-full", "border-0", 3, "load", "name"], [1, "absolute", "top-1", "left-1", 3, "gameName"], [1, "absolute", "top-4", "sm:right-1/4", "right-0", "flex", "items-center", "justify-end", "px-3", "py-2"], [3, "showWatchAgain", "showCopyLink", "showCloseButton"], ["icon", "x-mark", "accentColor", "zinc", "severity", "contrast", 3, "click"], [3, "watchAgain", "copyLink", "close", "showWatchAgain", "showCopyLink", "showCloseButton"], [1, "absolute", "top-4", "left-1/2", "-translate-x-1/2", 3, "showIcon", "label"], [1, "absolute", "top-4", "left-1/2", "-translate-x-1/2", 3, "enableMusicSound", "showIcon", "label"], [3, "freeGameRemaining", "freeGameTotal", "spinButtonMode"], [3, "musicPressedChange", "turboStateChange", "spin", "freeGameRemaining", "freeGameTotal", "spinButtonMode"], [3, "displayCurrency", "displayBet", "displayWin", "freeGameRemaining", "freeGameTotal", "spinButtonMode"], [3, "copyLink", "musicPressedChange", "turboStateChange", "spin", "displayCurrency", "displayBet", "displayWin", "freeGameRemaining", "freeGameTotal", "spinButtonMode"]], template: function HistoryReplayViewerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, HistoryReplayViewerComponent_Conditional_0_Template, 1, 4, "ap-history-popup-replay", 1);
            i0.ɵɵconditionalCreate(1, HistoryReplayViewerComponent_Conditional_1_Template, 7, 5, "div", 2);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showConfirmDialog() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isReplayIframe() ? 1 : -1);
        } }, dependencies: [CommonModule, ApHistoryPopupReplayComponent, ApHistoryPopupReplayEndComponent, ApButtonComponent, BottomPanelDemoComponent, BottomPanelReplayComponent, ApUiPlayModeComponent, ApUiGameNameComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryReplayViewerComponent, [{
        type: Component,
        args: [{ selector: 'history-replay-viewer', imports: [CommonModule, ApHistoryPopupReplayComponent, ApHistoryPopupReplayEndComponent, ApButtonComponent, BottomPanelDemoComponent, BottomPanelReplayComponent, ApUiPlayModeComponent, ApUiGameNameComponent], template: "<!-- Replay \u78BA\u8A8D\u5F48\u7A97 -->\n@if (showConfirmDialog()) {\n  <ap-history-popup-replay\n    class=\"absolute inset-0 z-overlay\"\n    [header]=\"popupLabel()\"\n    [description]=\"popupHintReplay()\"\n    [cancelText]=\"cancelLabel()\"\n    [confirmText]=\"confirmLabel()\"\n    (confirm)=\"onReplayConfirm()\"\n    (close)=\"onReplayCancel()\"\n  />\n}\n\n<!-- Replay iframe \u986F\u793A -->\n@if (isReplayIframe()) {\n  <div class=\"fixed inset-0 z-overlay bg-black\">\n    <iframe\n      #replayIframe\n      [name]=\"replayIframeName()\"\n      class=\"w-full h-full border-0\"\n      allowfullscreen\n      allow=\"autoplay; fullscreen\"\n      (load)=\"onReplayIframeLoad()\"\n    ></iframe>\n    @if (showGameLogo()) {\n      <ap-ui-game-name class=\"absolute top-1 left-1\" [gameName]=\"gameName()\" />\n    }\n    @if (showCloseButton()) {\n      <div\n        class=\"absolute top-4 sm:right-1/4 right-0 flex items-center justify-end px-3 py-2\"\n      >\n        <ap-button\n          icon=\"x-mark\"\n          accentColor=\"zinc\"\n          severity=\"contrast\"\n          (click)=\"closeReplayIframe()\"\n        />\n      </div>\n    }\n\n    <!-- Replay \u7D50\u675F\u5F48\u7A97 -->\n    @if (isReplayEnd()) {\n      <ap-history-popup-replay-end\n        [showWatchAgain]=\"showWatchAgain()\"\n        [showCopyLink]=\"isReplayPanel()\"\n        [showCloseButton]=\"showReplayEndCloseButton()\"\n        (watchAgain)=\"onWatchAgain()\"\n        (copyLink)=\"onCopyLink()\"\n        (close)=\"closeReplayIframe()\"\n      />\n    }\n\n    <!-- Bottom Panel: demo (\u9810\u8A2D) \u6216 replay \u4E8C\u9078\u4E00\uFF0C\u758A\u5728 iframe \u4E4B\u4E0A -->\n    @if (isLoadingFinished()) {\n      @if (!isReplayPanel()) {\n        <!-- Demo \u72C0\u614B -->\n        @if (isOldGame()) {\n          <!-- Old game: only show mode label -->\n          <ap-ui-play-mode\n            [showIcon]=\"true\"\n            [label]=\"getDemoModeLabel()\"\n            (enableMusicSound)=\"onDemoMusicIconClicked()\"\n            class=\"absolute top-4 left-1/2 -translate-x-1/2\"\n          />\n        } @else {\n          <!-- Default: show mode label + bottom panel -->\n          <ap-ui-play-mode\n            [showIcon]=\"false\"\n            [label]=\"getDemoModeLabel()\"\n            class=\"absolute top-4 left-1/2 -translate-x-1/2\"\n          />\n          @if (isShowPanel()) {\n            <bottom-panel-demo\n              [freeGameRemaining]=\"featureModeRemaining()\"\n              [freeGameTotal]=\"featureModeTotal()\"\n              [spinButtonMode]=\"spinButtnMode()\"\n              (musicPressedChange)=\"onDemoMusicPressedChange($event)\"\n              (turboStateChange)=\"onTurboStateChange($event)\"\n              (spin)=\"spin()\"\n            />\n          }\n        }\n      } @else {\n        <!-- Replay \u72C0\u614B -->\n        @if (isOldGame()) {\n          <ap-ui-play-mode\n            [showIcon]=\"true\"\n            [label]=\"getReplayModeLabel()\"\n            (enableMusicSound)=\"onReplayMusicIconClicked()\"\n            class=\"absolute top-4 left-1/2 -translate-x-1/2\"\n          />\n        } @else {\n          <ap-ui-play-mode\n            [showIcon]=\"false\"\n            [label]=\"getReplayModeLabel()\"\n            class=\"absolute top-4 left-1/2 -translate-x-1/2\"\n          />\n          @if (isShowPanel()) {\n            <!-- \u9700\u8981\u88DC\u4E0AdisplayCurrency -->\n            <bottom-panel-replay\n              [displayCurrency]=\"'$'\" \n              [displayBet]=\"replayBet() ?? 0\"\n              [displayWin]=\"replayWin() ?? 0 \"\n              [freeGameRemaining]=\"featureModeRemaining()\"\n              [freeGameTotal]=\"featureModeTotal()\"\n              [spinButtonMode]=\"spinButtnMode()\"\n              (copyLink)=\"onCopyLink()\"\n              (musicPressedChange)=\"onReplayMusicPressedChange($event)\"\n              (turboStateChange)=\"onTurboStateChange($event)\"\n              (spin)=\"spin()\"\n            />\n          }\n        }\n      }\n    }\n  </div>\n}\n" }]
    }], null, { replayIframeElement: [{
            type: ViewChild,
            args: ['replayIframe', { read: ElementRef }]
        }], replayEndComponent: [{
            type: ViewChild,
            args: [ApHistoryPopupReplayEndComponent]
        }], bottomPanelReplayComponent: [{
            type: ViewChild,
            args: [BottomPanelReplayComponent]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HistoryReplayViewerComponent, { className: "HistoryReplayViewerComponent", filePath: "src/app/pages/history-replay-viewer/history-replay-viewer.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=history-replay-viewer.component.js.map