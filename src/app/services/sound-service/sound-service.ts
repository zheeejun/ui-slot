import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

export type SoundType = 'click';

interface SoundOptions {
  src: string;
  volume: number;
}

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private readonly throttleMs = 100;
  private readonly sounds: Record<SoundType, SoundOptions> = {
    click: {
      src: 'assets/sounds/ap_button.m4a',
      volume: 1,
    },
  };

  private readonly audioMap = new Map<SoundType, HTMLAudioElement>();
  private readonly isBrowser: boolean;

  private lastPlayedAt = 0;
  private unlocked = false;
  private muted = false;
  private masterVolume = 1;
  private removeUnlockListeners: Array<() => void> = [];

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (!this.isBrowser) {
      return;
    }

    this.preloadAll();
    this.bindUnlockListeners();
  }

  playClick(): void {
    this.play('click');
  }

  play(type: SoundType): void {
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

  setMuted(muted: boolean): void {
    this.muted = muted;
  }

  setVolume(volume: number): void {
    this.masterVolume = Math.min(Math.max(volume, 0), 1);

    for (const [type, audio] of this.audioMap.entries()) {
      audio.volume = this.sounds[type].volume * this.masterVolume;
    }
  }

  private preloadAll(): void {
    for (const [type, options] of Object.entries(this.sounds) as Array<[SoundType, SoundOptions]>) {
      const audio = new Audio(options.src);
      audio.preload = 'auto';
      audio.volume = options.volume * this.masterVolume;
      audio.load();
      this.audioMap.set(type, audio);
    }
  }

  private bindUnlockListeners(): void {
    if (this.unlocked || this.removeUnlockListeners.length > 0) {
      return;
    }

    const unlockAudio = () => {
      void this.unlockAudio();
    };

    const listenerOptions: AddEventListenerOptions = { passive: true };
    const events = ['pointerdown', 'touchstart', 'keydown'];

    for (const eventName of events) {
      this.document.addEventListener(eventName, unlockAudio, listenerOptions);
      this.removeUnlockListeners.push(() => {
        this.document.removeEventListener(eventName, unlockAudio, listenerOptions);
      });
    }
  }

  private async unlockAudio(): Promise<void> {
    const clickAudio = this.audioMap.get('click');
    if (!clickAudio) {
      return;
    }

    this.clearUnlockListeners();

    try {
      clickAudio.muted = true;
      clickAudio.currentTime = 0;
      await clickAudio.play();
      clickAudio.pause();
      clickAudio.currentTime = 0;
      clickAudio.muted = false;
      this.unlocked = true;
    } catch {
      clickAudio.muted = false;
      this.unlocked = false;
      this.bindUnlockListeners();
    }
  }

  private clearUnlockListeners(): void {
    for (const removeListener of this.removeUnlockListeners) {
      removeListener();
    }

    this.removeUnlockListeners = [];
  }
}
