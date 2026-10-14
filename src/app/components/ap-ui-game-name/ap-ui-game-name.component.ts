import { Component, input, signal, OnInit, OnDestroy, inject, computed,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  selector: 'ap-ui-game-name',
  imports: [CommonModule],
  templateUrl: './ap-ui-game-name.component.html',
  styleUrl: './ap-ui-game-name.component.css',
})
export class ApUiGameNameComponent implements OnInit, OnDestroy {
  session = inject(ClientSessionService);
  gameId = input<string | null>(this.session.gameId);
  i18n = inject(AppI18nService);
  gameName = computed(() => {
    const id = this.gameId();
    if (!id) return '';
    return this.i18n.enGameName();
  });
  showTime = input<boolean>(true);

  /** 遊戲計時器 */
  readonly gameTime = signal<string>('00:00:00');
  private _gameTimerInterval: ReturnType<typeof setInterval> | null = null;
  private _gameTimeSeconds = 0;

  ngOnInit() {
    if (!this.showTime()) return;
    if (this._gameTimerInterval) return;
    // 開始計時
    this._gameTimerInterval = setInterval(() => {
      this._gameTimeSeconds++;
      const h = Math.floor(this._gameTimeSeconds / 3600);
      const m = Math.floor((this._gameTimeSeconds % 3600) / 60);
      const s = this._gameTimeSeconds % 60;
      this.gameTime.set(
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      );
    }, 1000);
  }

  ngOnDestroy() {
    if (this._gameTimerInterval) clearInterval(this._gameTimerInterval);
  }

}
