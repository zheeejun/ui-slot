import {
  isPlatformBrowser
} from "./chunk-FH2ESRL7.js";
import {
  DOCUMENT,
  Inject,
  Injectable,
  PLATFORM_ID,
  __async,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QGU3BS3L.js";

// src/app/services/sound-service/sound-service.ts
var SoundService = class _SoundService {
  document;
  throttleMs = 100;
  sounds = {
    click: {
      src: "assets/sounds/ap_button.m4a",
      volume: 1
    }
  };
  audioMap = /* @__PURE__ */ new Map();
  isBrowser;
  lastPlayedAt = 0;
  unlocked = false;
  muted = false;
  masterVolume = 1;
  removeUnlockListeners = [];
  constructor(document, platformId) {
    this.document = document;
    this.isBrowser = isPlatformBrowser(platformId);
    if (!this.isBrowser) {
      return;
    }
    this.preloadAll();
    this.bindUnlockListeners();
  }
  playClick() {
    this.play("click");
  }
  play(type) {
    if (!this.isBrowser || !this.unlocked || this.muted) {
      return;
    }
    const now = Date.now();
    if (now - this.lastPlayedAt < this.throttleMs) {
      return;
    }
    const audio = this.audioMap.get(type);
    if (!audio) {
      return;
    }
    this.lastPlayedAt = now;
    audio.currentTime = 0;
    void audio.play().catch(() => {
      this.unlocked = false;
      this.bindUnlockListeners();
    });
  }
  setMuted(muted) {
    this.muted = muted;
  }
  setVolume(volume) {
    this.masterVolume = Math.min(Math.max(volume, 0), 1);
    for (const [type, audio] of this.audioMap.entries()) {
      audio.volume = this.sounds[type].volume * this.masterVolume;
    }
  }
  preloadAll() {
    for (const [type, options] of Object.entries(this.sounds)) {
      const audio = new Audio(options.src);
      audio.preload = "auto";
      audio.volume = options.volume * this.masterVolume;
      audio.load();
      this.audioMap.set(type, audio);
    }
  }
  bindUnlockListeners() {
    if (this.unlocked || this.removeUnlockListeners.length > 0) {
      return;
    }
    const unlockAudio = () => {
      void this.unlockAudio();
    };
    const listenerOptions = { passive: true };
    const events = ["pointerdown", "touchstart", "keydown"];
    for (const eventName of events) {
      this.document.addEventListener(eventName, unlockAudio, listenerOptions);
      this.removeUnlockListeners.push(() => {
        this.document.removeEventListener(eventName, unlockAudio, listenerOptions);
      });
    }
  }
  unlockAudio() {
    return __async(this, null, function* () {
      const clickAudio = this.audioMap.get("click");
      if (!clickAudio) {
        return;
      }
      this.clearUnlockListeners();
      try {
        clickAudio.muted = true;
        clickAudio.currentTime = 0;
        yield clickAudio.play();
        clickAudio.pause();
        clickAudio.currentTime = 0;
        clickAudio.muted = false;
        this.unlocked = true;
      } catch {
        clickAudio.muted = false;
        this.unlocked = false;
        this.bindUnlockListeners();
      }
    });
  }
  clearUnlockListeners() {
    for (const removeListener of this.removeUnlockListeners) {
      removeListener();
    }
    this.removeUnlockListeners = [];
  }
  static \u0275fac = function SoundService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SoundService)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SoundService, factory: _SoundService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SoundService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

export {
  SoundService
};
//# sourceMappingURL=chunk-FCZ4RVMP.js.map
