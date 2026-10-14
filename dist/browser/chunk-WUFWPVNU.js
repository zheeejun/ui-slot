import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-NMZ7HZYU.js";
import {
  AppInterfaceService
} from "./chunk-Q3NF4QZ2.js";
import {
  ClientSessionService
} from "./chunk-B2M5HODU.js";
import {
  Component,
  effect,
  inject,
  input,
  setClassMetadata,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵqueryAdvance,
  ɵɵviewQuerySignal
} from "./chunk-QGU3BS3L.js";

// src/app/pages/game-iframe/game-iframe.component.ts
var _c0 = ["gameIframe"];
var GameIframeComponent = class _GameIframeComponent {
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  game = inject(GameIframeCtrlService);
  /** 開啟遊戲的模式  */
  uiMode = input("ap-none");
  /** 取得遊戲的iframe元素, 永遠存在的元素 -> required */
  iframeRef = viewChild.required("gameIframe");
  constructor() {
    this.game.socketWakeUp$.subscribe(() => {
      this.game.send(createApWebMessage("SocketOnOpen", void 0));
    });
    this.game.socketSend$.subscribe((message) => {
      this.api.sendPack(message.data);
    });
    this.game.socketClose$.subscribe((message) => {
      this.api.close(message.code, message.reason);
    });
    this.api.socketError$.subscribe((ev) => this.game.send(createApWebMessage("SocketOnError", void 0)));
    this.api.socketClose$.subscribe((ev) => this.game.send(createApWebMessage("SocketOnClose", { code: ev.code, reason: ev.reason })));
    this.api.socketMessage$.subscribe((ev) => this.game.send(createApWebMessage("SocketOnMessage", { data: ev.data })));
    this.game.UrlRedirection$.subscribe(this.onUrlRedirection.bind(this));
    effect(() => {
      const ref = this.iframeRef();
      untracked(() => {
        this.game.setIframe(ref.nativeElement);
      });
    });
  }
  ngOnInit() {
    this.game.mode = this.uiMode();
    this.game.launch(this.session.gameId);
  }
  ngAfterViewInit() {
  }
  /** 偵測遊戲轉址 */
  onUrlRedirection(content) {
    window.location.href = window.location.href;
  }
  static \u0275fac = function GameIframeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GameIframeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GameIframeComponent, selectors: [["game-iframe"]], viewQuery: function GameIframeComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.iframeRef, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { uiMode: [1, "uiMode"] }, decls: 2, vars: 0, consts: [["gameIframe", ""], ["frameborder", "0", "scrolling", "no", 1, "relative", "w-full", "h-full"]], template: function GameIframeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "iframe", 1, 0);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background-color: black;\n}\n/*# sourceMappingURL=game-iframe.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameIframeComponent, [{
    type: Component,
    args: [{ selector: "game-iframe", imports: [], template: '<iframe #gameIframe class="relative w-full h-full " frameborder="0" scrolling="no"></iframe>', styles: ["/* src/app/pages/game-iframe/game-iframe.component.css */\n:host {\n  display: block;\n  background-color: black;\n}\n/*# sourceMappingURL=game-iframe.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GameIframeComponent, { className: "GameIframeComponent", filePath: "src/app/pages/game-iframe/game-iframe.component.ts", lineNumber: 19 });
})();

export {
  GameIframeComponent
};
//# sourceMappingURL=chunk-WUFWPVNU.js.map
