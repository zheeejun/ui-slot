import {
  sequence
} from "./chunk-W2PA37WH.js";
import {
  GameIframeCtrlService
} from "./chunk-OW6577YR.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  ClientSessionService
} from "./chunk-54ITVL2G.js";
import {
  ANIMATION_MODULE_TYPE,
  DOCUMENT,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Injectable,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation,
  computed,
  inject,
  output,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵinject,
  ɵɵlistener,
  ɵɵresolveDocument
} from "./chunk-QGU3BS3L.js";

// src/app/shared/directives/click-out-side/click-out-side.directive.ts
var ClickOutsideDirective = class _ClickOutsideDirective {
  elementRef = inject(ElementRef);
  clickOutside = output();
  onDocumentPointerDown(event) {
    const target = event.target;
    if (!target)
      return;
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
  static \u0275fac = function ClickOutsideDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClickOutsideDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("pointerdown", function ClickOutsideDirective_pointerdown_HostBindingHandler($event) {
        return ctx.onDocumentPointerDown($event);
      }, \u0275\u0275resolveDocument);
    }
  }, outputs: { clickOutside: "clickOutside" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[clickOutside]",
      standalone: true
    }]
  }], null, { onDocumentPointerDown: [{
    type: HostListener,
    args: ["document:pointerdown", ["$event"]]
  }] });
})();

// src/app/services/info-ctrl/info-ctrl.data.ts
var featureEntriesData = [
  {
    category: "title",
    position: "left",
    content: "Cascading Reels"
  },
  {
    category: "content",
    position: "left",
    content: "Winning combinations will be removed, and new symbols fall from above to fill the reels that can possibly make consecutive wins. The cascade process will continue till no more wins are achieved."
  },
  {
    category: "content",
    position: "left",
    content: "Players have a chance to win consecutive prizes by cascading reels."
  },
  {
    category: "title",
    position: "center",
    content: "Wild"
  },
  {
    category: "image",
    position: "center",
    content: "bf1.png"
  },
  {
    category: "content",
    position: "left",
    content: "Wild substitute all symbols except Clay Pot and Pinata Board."
  },
  {
    category: "title",
    position: "center",
    content: "Clay Pot"
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p1.png"
  },
  {
    category: "content",
    position: "left",
    content: "Clay Pot appears with a random prize of 0.2 to 5 times the total bet, then the Clay Pot opens to reveal 0 to 3 Bat symbols randomly."
  },
  {
    category: "title",
    position: "center",
    content: "Pinata Board"
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p2.png"
  },
  {
    category: "content",
    position: "left",
    content: "If Pinata Board and Clay Pot appear at the same time, each Pinata Board collect the prize on all the Clay Pots, then player wins prize from all the Pinata Board."
  },
  {
    category: "content",
    position: "left",
    content: "If Pinata Board and Bat symbols appear at the same time, Pinata Board collect all the Bat symbols. Each Pinata Board collect at most 6 Bat symbols."
  },
  {
    category: "content",
    position: "left",
    content: "The first three Bat symbols collected by a Pinata Board are blue, and the fourth to sixth Bat symbol collected turn into red Bat symbols."
  },
  {
    category: "content",
    position: "left",
    content: "When there are multiple Pinata Boards and Bat symbols, each Pinata Board will collect at most 3 Bat symbols by order first, then Pinata Board collect remaining Bat symbols by order if there are still uncollected Bat symbols."
  },
  {
    category: "content",
    position: "left",
    content: "Order of collecting Bat symbols with multiple Pinata Boards."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p3.jpg"
  },
  {
    category: "title",
    position: "center",
    content: "Bonus Game"
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p4.png"
  },
  {
    category: "content",
    position: "left",
    content: "The first order Pinata Board collects 1 / 2 / 3 / 4 / 5 / 6 Bat symbols triggers 5 / 6 / 7 / 8 / 9 / 10 Bonus Game respectively."
  },
  {
    category: "content",
    position: "left",
    content: "When all Pinata Boards collect 6 Bat symbols, but there are still uncollected Bat symbol, each remaining Bat symbol will randomly convert into 1 or 2 Bonus Game spins."
  },
  {
    category: "content",
    position: "left",
    content: "When Bonus Game is triggered, all Pinata Boards on the reels are brought into the Bonus Game. Clay Pot, Yellow Candy, Purple Candy, Green Candy, Red Candy or nothing may appears on the reels in Bonus Game."
  },
  {
    category: "content",
    position: "left",
    content: "The number and color of Bat symbols collected by the first order Pinata Board determine the number of rows and color of the Star Pinatas above the reels."
  },
  {
    category: "content",
    position: "left",
    content: "1 / 2 / 3 or more Bat symbols collected by the first order Pinata Board activate 1 / 2 / 3 rows of the Star Pinata respectively."
  },
  {
    category: "content",
    position: "left",
    content: "A blue Bat symbol activate a row of Star Pinatas that contains yellow or blue Star Pinatas randomly. A red Bat symbol activate a row of Star Pinatas that contains yellow, blue or red Star Pinatas randomly"
  },
  {
    category: "content",
    position: "left",
    content: "Clay Pots stay on the reels in the Bonus Game untill be removed by Yellow Candy."
  },
  {
    category: "content",
    position: "left",
    content: "Each blue Bat symbol collected by Pinata Board in Bonus Game opens a yellow or blue Star Pinatas randomly. Each red Bat symbol collected by Pinata Board in Bonus Game opens a yellow or red Star Pinatas randomly."
  },
  {
    category: "content",
    position: "left",
    content: "When a Pinata Board collects 3 red Bat symbols, all Star Pinatas are opened."
  },
  {
    category: "content",
    position: "left",
    content: "The player wins 1 to 5 Bonus Game spins randomly when opening a yellow Star Pinata."
  },
  {
    category: "content",
    position: "left",
    content: "The player wins a random prize of 0.8 to 25 times the total bet when opening a blue Star Pinata."
  },
  {
    category: "content",
    position: "left",
    content: "The prize of a random Clay Pot is multiplied by 2 to 10 times randomly when opening a red Star Pinata."
  },
  {
    category: "content",
    position: "left",
    content: "When all Pinata Boards collect 6 Bat symbols, but there are still uncollected Bat symbol, one remaining Bat symbol will convert into a new Pinata Board at random position. Then the new Pinata Board continue to collect the remaining Bat symbols."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p5.png"
  },
  {
    category: "content",
    position: "left",
    content: "Yellow Candy remove all Clay Pots and convert into a Clay Pot with the prize that is the sum of all removed Clay Pots."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p6.png"
  },
  {
    category: "content",
    position: "left",
    content: "Purple Candy makes all Clay Pot prize multiply by 1.2 and convert into a Clay Pot with a random prize of 0.2 to 5 times the total bet."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p7.png"
  },
  {
    category: "content",
    position: "left",
    content: "Green Candy convert into a Clay Pot with the prize that is the highest prize among the top, bottom, left, right adjacent Clay Pots."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p8.png"
  },
  {
    category: "content",
    position: "left",
    content: "Red Candy convert into a Clay Pot with the prize that is the sum of all other Clay Pots."
  },
  {
    category: "content",
    position: "left",
    content: "When multiple different Candies appear at the same time, the Candies activate by the order of Green, Purple, Red and Yellow. When multiple same Candies appear at the same time, the Candies activate by the order of top to bottom, then left to right."
  },
  {
    category: "content",
    position: "left",
    content: "When all position appear Pinata Boards and Clay Pots, Pinata Boards convert into random Candies and then activate. The Pinata Boards convert by the order of top to bottom, then left to right."
  },
  {
    category: "content",
    position: "left",
    content: "Bonus Game ends when all position appear Clay Pots or there is no remaining Bonus Game spin."
  },
  {
    category: "content",
    position: "left",
    content: " When Bonus Game ends, the Pinata Boards convert into random Candies and then activate. The Pinata Boards convert by the order of top to bottom, then left to right. After all Candies activate, the player wins prize of all Clay Pots."
  },
  {
    category: "content",
    position: "left",
    content: "Bonus Game is played at the same bet level as the spin that triggered the Bonus Game feature."
  },
  {
    category: "content",
    position: "left",
    content: "Bonus Game wins is awarded to the play after the round completes."
  }
];

// src/app/services/info-ctrl/info-ctrl.service.ts
var InfoCtrlService = class _InfoCtrlService {
  appI18n = inject(AppI18nService);
  session = inject(ClientSessionService);
  game = inject(GameIframeCtrlService);
  featureEntries = computed(() => {
    const data = this.appI18n.getGameWordList();
    const entries = Object.entries(data || {}).filter(([key]) => key.startsWith("info_feature_")).map(([, value]) => this.parseInfoEntry(value)).filter((entry) => !!entry);
    return entries.length > 0 ? entries : featureEntriesData;
  });
  paytableEntries = computed(() => {
    const data = this.appI18n.getGameWordList();
    const entries = Object.entries(data || {}).filter(([key]) => key.startsWith("info_paytable_")).map(([, value]) => this.parseInfoEntry(value)).filter((entry) => !!entry);
    return entries.length > 0 ? entries : [];
  });
  gameId = this.session.gameId || "10087";
  infoFolder = computed(() => {
    const customGamekey = this.customGamekey();
    return customGamekey ? `${customGamekey}_${this.gameId}` : this.gameId;
  });
  assetUrl = computed(() => `${this.session.assetUrl}/system/Info/${this.infoFolder()}`);
  customGamekey = computed(() => this.game.customGameKey());
  entryMap = [
    "title_left",
    "title_center",
    "title_right",
    "subtitle_left",
    "subtitle_center",
    "subtitle_right",
    "image_left",
    "image_center",
    "image_right",
    "content_left",
    "content_center",
    "content_right"
  ];
  parseInfoEntry(value) {
    const match = value.split("@");
    if (!match)
      return null;
    const index = Number(match[0]);
    const prefix = this.entryMap[index];
    if (!prefix)
      return null;
    let [category, position] = prefix.split("_");
    let content = match[1];
    if (content === "info_feature_p99.jpg")
      category = "buyFeature";
    return {
      category,
      position,
      content
    };
  }
  getImageUrl(fileName) {
    if (fileName === "info_feature_p99.jpg") {
      return this.assetUrl() + "/" + fileName;
    }
    return this.assetUrl() + "/en/" + fileName;
  }
  static \u0275fac = function InfoCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InfoCtrlService, factory: _InfoCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

export {
  ClickOutsideDirective,
  InfoCtrlService
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.0.6
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-S5BUS6WA.js.map
