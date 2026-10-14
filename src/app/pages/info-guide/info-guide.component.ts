import { Component,ElementRef,OnInit,ViewChild,computed, input,inject,signal,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApInfoGuideComponent } from '../../components/ap-info-guide/ap-info-guide.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApIconSpinComponent } from "../../icons/ap-icon-spin/ap-icon-spin.component";
import { ApIconAutoplayCircleComponent } from "../../icons/ap-icon-autoplay-circle/ap-icon-autoplay-circle.component";
import { ApIconTurboCircleComponent } from "../../icons/ap-icon-turbo-circle/ap-icon-turbo-circle.component";
import { ApIconIncDecComponent } from '../../icons/ap-icon-inc-dec/ap-icon-inc-dec.component';
import { ApIconHoldTurboSpinComponent } from '../../icons/ap-icon-hold-turbo-spin/ap-icon-hold-turbo-spin.component';


@Component({
  selector: 'info-guide',
  imports: [CommonModule, ApInfoGuideComponent, ApIconSpinComponent, ApIconAutoplayCircleComponent, ApIconTurboCircleComponent,
    ApIconIncDecComponent, ApIconHoldTurboSpinComponent],
  templateUrl: './info-guide.component.html',
  styleUrl: './info-guide.component.css',
})
export class InfoGuideComponent implements OnInit {
  @ViewChild('contentScroller')
  private contentScroller?: ElementRef<HTMLDivElement>;
  private session = inject(ClientSessionService);
  private appI18n = inject(AppI18nService);
  protected api = inject(AppInterfaceService);
  readonly hideTurbo = input(false);
  readonly hideHoldTurbo = input(true);
  readonly hideAutoplay = input(false);
  readonly hideNoteItem2 = input(false);
  readonly isDragging = signal(false);
  readonly isGhana = computed(() => this.session.isGhanaUI);
  private dragStartY = 0;
  private dragStartScrollTop = 0;
  /* Info Guide 文字說明，從API取得 */
  /* Spin */
  readonly getSpinTitle = this.appI18n.computedGame(
    'Spin_title', //先試讀取game的語系檔
    this.appI18n.instant('Spin_title') //如果game的語系檔沒有，再讀取common的語系檔
  );
  readonly getSpinItem1 = this.appI18n.computedGame(
    'Spin_content_01',
    this.appI18n.instant('Spin_content_01'),
  );
  /* Hold Spin */
  readonly getHoldTurboTitleDefault = this.appI18n.computedGame('Auto_title', this.appI18n.instant('Auto_title'));
  readonly getHoldTurboDefaultItem1 = this.appI18n.computedGame('Auto_content_01', this.appI18n.instant('Auto_content_01'));
  /* Auto Spin */
  readonly getAutoSpinTitle = this.appI18n.computedGame('Auto_title', this.appI18n.instant('Auto_title'));
  readonly getAutoSpinItem1 = this.appI18n.computedGame(
    'Auto_content_01',
    this.appI18n.instant('Auto_content_01'),
  );

  readonly getAutoSpinItem2 = this.appI18n.computedGame(
    'Auto_content_02',
    this.appI18n.instant('Auto_content_02'),
  );
  /* Turbo */
  readonly getTurboTitleDefault = this.appI18n.computedGame(
    'Turbo_title',
    this.appI18n.instant('Turbo_title'),
  );
  readonly getTurboDefaultItem1 = this.appI18n.computedGame(
    'Turbo_content',
    this.appI18n.instant('Turbo_content'),
  );
  readonly getTurboTitleFast = this.appI18n.computedGame(
    'Turbo_title_01',
    this.appI18n.instant('Turbo_title_01'),
  );
  readonly getTurboFastItem1 = this.appI18n.computedGame(
    'Turbo_content_01',
    this.appI18n.instant('Turbo_content_01'),
  );

  /* Add Bet */
  private readonly addBetTitleKey = this.isGhana()
    ? 'og_bet_info_stake'
    : 'Bet_title';
  readonly getAddBetTitle = this.appI18n.computedGame(
    this.addBetTitleKey,
    this.appI18n.instant(this.addBetTitleKey),
  );
  readonly getAddBetItem1 = this.appI18n.computedGame(
    'Bet_content',
    this.appI18n.instant('Bet_content'),
  );

  /* Demo Play */
  readonly getDemoPlayTitle = this.appI18n.computedGame('Replay_title', this.appI18n.instant('Replay_title'));
  readonly getDemoPlayItem1 = this.appI18n.computedGame(
    'Replay_content',
    this.appI18n.instant('Replay_content'),
  );

  /* Menu */
  readonly getMenuTitle = this.appI18n.computedGame('Option_title', this.appI18n.instant('Option_title'));
  readonly getMenuItem1 = this.appI18n.computedGame(
    'Option_content',
    this.appI18n.instant('Option_content'),
  );

  /* Info */
  readonly getInfoTitle = this.appI18n.computedGame('info', this.appI18n.instant('info'));
  readonly getInfoItem1 = this.appI18n.computedGame(
    'Option_Info_content',
    this.appI18n.instant('Option_Info_content'),
  );
  /* History */
  readonly getHistoryTitle = this.appI18n.computedGame('history', this.appI18n.instant('history'));
  readonly getHistoryItem1 = this.appI18n.computedGame(
    'Option_History_content',
    this.appI18n.instant('Option_History_content'),
  );
  /* Sound ON */
  readonly getSoundOnTitle = this.appI18n.computedGame('sound', this.appI18n.instant('sound'));
  readonly getSoundOnItem1 = this.appI18n.computedGame(
    'Option_Sound_content',
    this.appI18n.instant('Option_Sound_content'),
  );
  /* Music ON */
  readonly getMusicOnTitle = this.appI18n.computedGame('music', this.appI18n.instant('music'));
  readonly getMusicOnItem1 = this.appI18n.computedGame(
    'Option_Music_content',
    this.appI18n.instant('Option_Music_content'),
  );

  /* Note */
  readonly getNoteTitle = this.appI18n.computedGame('Note_title', this.appI18n.instant('Note_title'));
  readonly getNoteItem1 = this.appI18n.computedGame(
    'Note_content_01',
    this.appI18n.instant('Note_content_01'),
  );
  readonly getNoteItem2 = this.appI18n.computedGame(
    'Note_content_02',
    this.appI18n.instant('Note_content_02'),
  );

  private gameIframeCtrl = inject(GameIframeCtrlService);
  readonly gameVersion = computed(() => {
    return this.gameIframeCtrl.gameVersion() ?? '';
  });

  ngOnInit(): void { }

  onCellClick(cell: { row: number; col: number }) { }

  onDragStart(event: MouseEvent): void {
    const scroller = this.contentScroller?.nativeElement;
    if (!scroller) return;

    this.isDragging.set(true);
    this.dragStartY = event.clientY;
    this.dragStartScrollTop = scroller.scrollTop;
  }

  onDragMove(event: MouseEvent): void {
    const scroller = this.contentScroller?.nativeElement;
    if (!scroller || !this.isDragging()) return;

    const deltaY = event.clientY - this.dragStartY;
    scroller.scrollTop = this.dragStartScrollTop - deltaY;
  }

  onDragEnd(): void {
    this.isDragging.set(false);
  }
}
