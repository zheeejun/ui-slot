/**
 * 遊戲game-iframe-service的component，負責載入遊戲iframe以及處理與遊戲iframe的溝通
 * 一些game-iframe與其他service的溝通邏輯也會放在這裡
 */
import { AfterViewInit, Component, computed, DestroyRef, effect, ElementRef, inject, input, OnInit, untracked, viewChild, ViewChild } from '@angular/core';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { ApWebType } from '../../../chiikawa/ApWeb/ApWebInterface';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';

@Component({
  selector: 'game-iframe',
  imports: [],
  templateUrl: './game-iframe.component.html',
  styleUrl: './game-iframe.component.css'
})
export class GameIframeComponent implements OnInit, AfterViewInit {
  protected api = inject(AppInterfaceService);
  protected session = inject(ClientSessionService);
  protected game = inject(GameIframeCtrlService);

  /** 開啟遊戲的模式  */
  uiMode = input<ApWebType>('ap-none');
  /** 取得遊戲的iframe元素, 永遠存在的元素 -> required */
  iframeRef = viewChild.required<ElementRef<HTMLIFrameElement>>('gameIframe');

  constructor(

  ) {
    // 偵測game啟動socket
    this.game.socketWakeUp$.subscribe(() => {this.game.send(createApWebMessage('SocketOnOpen', undefined));});

    // 連結game -> network
    this.game.socketSend$.subscribe( (message) => { this.api.sendPack(message.data as ArrayBufferLike); });
    this.game.socketClose$.subscribe((message) => {this.api.close(message.code, message.reason);});

    // 連結network -> game
    this.api.socketError$.subscribe((ev: Event) => this.game.send(createApWebMessage('SocketOnError', undefined)));
    this.api.socketClose$.subscribe((ev: CloseEvent) => this.game.send( createApWebMessage('SocketOnClose', {code: ev.code, reason: ev.reason,})));
    this.api.socketMessage$.subscribe((ev: MessageEvent) => this.game.send(createApWebMessage('SocketOnMessage',  { data: ev.data })));

    // 偵測game轉址的時候，導回目前頁面或是backurl
    this.game.UrlRedirection$.subscribe(this.onUrlRedirection.bind(this));

    // 偵測iframe元素的變化，並更新GameIframeCtrlService裡的iframe元素
    effect(() => {
      const ref = this.iframeRef(); // 這是 Signal，DOM 重建時自動更新
      // 使用 untracked 包住後續動作
      untracked(() => { 
          this.game.setIframe(ref.nativeElement);
      });
    });
  }
  
  ngOnInit(): void {
    // 啟動GameIframeCtrlService
    this.game.mode = this.uiMode();
    this.game.launch(this.session.gameId);
  }

  ngAfterViewInit(): void {}


  /** 偵測遊戲轉址 */
  protected onUrlRedirection(content: { url: string }) {
    window.location.href = window.location.href;
  }
}
