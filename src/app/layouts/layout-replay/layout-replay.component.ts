import { Component, inject, OnInit, AfterViewInit, ViewChild, signal, computed, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HistoryReplayViewerComponent } from '../../pages/history-replay-viewer/history-replay-viewer.component';
import { LoggerService } from '../../services/logger/logger.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { useInGameUIlist } from '../../services/client-session/game-id-list';
import { ApWebReplaySessionKey } from '../../../chiikawa/ApWeb/ApWebInterface';
import { HistoryReplayService } from '../../services/history-replay/history-replay.service';
import { NavigatorShareService } from '../../services/navigator-share/navigator-share.service';

/**
 * LayoutReplayComponent 獨立的 Replay 頁面入口
 * 讀取 URL query params 決定播放哪段 Replay，
 * 直接驅動 HistoryReplayViewerComponent，無需確認彈窗與關閉按鈕
 *
 * 支援的 query params (與 HistoryReplayService 產生的 URL 對應):
 *   gameId       - 遊戲 ID (必要)
 *   replayticket - 一般 history replay 加密票券
 *   replayleader - Leaderboard replay 加密票券
 *   platform     - 平台名稱
 *   leaderboarddataapiurl - Leaderboard replay 的 API URL
 *   panelmode            - 'replay' 顯示 bottom-panel-replay，'demo'(預設) 顯示 bottom-panel-demo
 *   (其餘 params 原樣帶入遊戲 iframe URL)
 */
@Component({
  selector: 'layout-replay',
  imports: [CommonModule, HistoryReplayViewerComponent],
  templateUrl: './layout-replay.component.html',
  styleUrl: './layout-replay.component.css',
})
export class LayoutReplayComponent implements OnInit, AfterViewInit {
  protected session = inject(ClientSessionService);
  protected route = inject(ActivatedRoute);
  protected logger = inject(LoggerService);
  protected replay = inject(HistoryReplayService);
  protected i18n = inject(AppI18nService);
  protected nav = inject(NavigatorShareService);

  @ViewChild(HistoryReplayViewerComponent) replayViewerComponent?: HistoryReplayViewerComponent;

  // 根據 URL panelmode 參數決定是否顯示 replay panel (含 copy link)
  readonly isReplayPanel = signal<boolean>(false);
  readonly showReplayViewer = computed(() => this.replay.showReplayViewer());

  constructor(
  ) {
    // 當 commonStringList 載入後，用 gameId 更新頁面標題
    effect(() => {
      const gameId = this.session.gameId ?? '';
      const gameName = this.i18n.instant(gameId);
      if (gameName && gameName !== gameId) {
        document.title = gameName;
      }
    });
  }

  ngOnInit(): void {
    // 把 ApWebReplaySessionKey 的sessionStorage資料清掉，避免舊資料干擾新 Replay 的產生
    sessionStorage.removeItem(ApWebReplaySessionKey);

    // 在 OnInit 中讀取 panelmode 參數
    const params = this.route.snapshot.queryParamMap;
    const panelMode = params.get('panelmode');
    
    // panelMode === 'replay' 時設置為 true，會顯示 copy link UI
    if (panelMode === 'replay') {
      this.isReplayPanel.set(true);
    } else {
      this.isReplayPanel.set(false);
    }
  }

  ngAfterViewInit(): void {
    const params = this.route.snapshot.queryParamMap;
    const gameId = params.get('gameId');

    if (!gameId) {
      this.logger.error('[LayoutReplay] Missing required query param: gameId');
      return;
    }

    // 將 URL 的 query params，除 gameId 外，全部帶入遊戲 iframe URL
    const urlParams = new URLSearchParams();
    for (const key of params.keys) {
      if (key !== 'gameId' && key !== 'panelmode') {
        urlParams.set(key, params.get(key) ?? '');
      }
    }

    let replayUrl: string;
    if (this.session.remoteHost) {
      replayUrl = `${this.session.remoteHost}?${urlParams.toString()}`;
    } else {
      replayUrl = `${window.location.origin}/${gameId}/index.html?${urlParams.toString()}`;
    }

    const isOldGame = useInGameUIlist.includes(gameId || '');

    this.replay.openReplayViewer(replayUrl, isOldGame);
  }

  onCopyLinkRequest() {
    // 直接copy當前頁面 URL，因為 URL 已經包含了 replay 的必要參數
    const currentUrl = window.location.href;

    // 在 currentUrl 裡找 copylink 的參數
    const url = new URL(currentUrl);
    const copylink = url.searchParams.get('copylink');
    
    if (!copylink) {
      this.logger.error('copylink parameter not found in URL');
      return;
    }

    this.nav.copyToClipboard(copylink || "")
      .then(() => {
        this.replayViewerComponent?.showCopyLinkToast();
      })
  }
}
