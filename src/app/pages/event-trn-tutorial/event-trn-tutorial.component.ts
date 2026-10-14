import { Component, input, HostListener, output, signal, computed, inject, } from '@angular/core';
import { TutorialPage } from './event-trn-tutorial.interface';
import { quickPages, eventPages, } from './event-trn-tutorial.data';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { LoggerService } from '../../services/logger/logger.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  selector: 'event-trn-tutorial',
  imports: [ApUiFramePopupComponent, ApButtonComponent, ApUiFramePopupComponent,],
  templateUrl: './event-trn-tutorial.component.html',
})
export class EventTrnTutorialComponent {
  //* 服務注入 */
  private appI18n = inject(AppI18nService);
  protected api = inject(AppInterfaceService);
  //* 本地化文本 */
  readonly header = this.appI18n.computed('Tutorial_Title', 'Tutorial');
  readonly getNextLabel = this.appI18n.computed('Next_Btn', 'Next');
  readonly getPrevLabel = this.appI18n.computed('Previous_Btn', 'Previous');
  readonly getConfirmText = this.appI18n.computed('OK_Btn', 'Got It');
  readonly getQuickTutorialContent1 = this.appI18n.computed(
    'Quick_Tutorial_Content1',
    'Click "Find Match" to join a Quick Match.',
  );
  readonly getQuickTutorialContent2 = this.appI18n.computed(
    'Quick_Tutorial_Content2',
    'Win bets earn points— higher scores mean bigger prizes.',
  );
  readonly getQuickTutorialContent3 = this.appI18n.computed(
    'Quick_Tutorial_Content3',
    'UBets x1.2 in match, extra goes to prize pool.',
  );
  readonly getQuickTutorialContent4 = this.appI18n.computed(
    'Quick_Tutorial_Content4',
    'You can toggle off extra bets anytime (no points counted).',
  );
  readonly getEventTutorialContent1 = this.appI18n.computed(
    'Event_Tutorial_Content1',
    'Join special tournament events.',
  );
  readonly getEventTutorialContent2 = this.appI18n.computed(
    'Event_Tutorial_Content2',
    'Compete for exclusive prizes.',
  );
  readonly getEventTutorialContent3 = this.appI18n.computed(
    'Event_Tutorial_Content3',
    'Track your ranking in real-time.',
  )
  readonly getEventTutorialContent4 = this.appI18n.computed(
    'Event_Tutorial_Content4',
    'Win exclusive event rewards.',
  );
  constructor(private logger: LoggerService) { }
  //* 輸出事件 */
  close = output<void>();
  back = output<void>();
  //* 組件輸入 */
  variant = input<'quick' | 'event'>('quick');
  isVisible = input(true);
  confirmText = input('Confirm');
  confirm = output<void>();
  //* 內部狀態 */
  currentPage = signal(0);
  quickPages: TutorialPage[] = quickPages;
  readonly eventPages: TutorialPage[] = eventPages;
  readonly quickPagesLocalized = computed<TutorialPage[]>(() => {
    const pages = [...this.quickPages];
    if (pages[0]) {
      pages[0] = {
        ...pages[0],
        image: 'assets/images/tutorial/quick/tutorial-1.png',
        description: this.getQuickTutorialContent1(),
      };
    } if (pages[1]) {
      pages[1] = {
        ...pages[1],
        image: 'assets/images/tutorial/quick/tutorial-2.png',
        description: this.getQuickTutorialContent2(),
      };
    } if (pages[2]) {
      pages[2] = {
        ...pages[2],
        image: 'assets/images/tutorial/quick/tutorial-3.png',
        description: this.getQuickTutorialContent3(),
      };
    } if (pages[3]) {
      pages[3] = {
        ...pages[3],
        image: 'assets/images/tutorial/quick/tutorial-4.png',
        description: this.getQuickTutorialContent4(),
      };
    }
    return pages;
  });

  readonly eventPagesLocalized = computed<TutorialPage[]>(() => {
    const pages = [...this.eventPages];
    if (pages[0]) {
      pages[0] = {
        ...pages[0],
        image: 'assets/images/tutorial/event/tutorial-1.png',
        description: this.getEventTutorialContent1(),
      };
    } if (pages[1]) {
      pages[1] = {
        ...pages[1],
        image: 'assets/images/tutorial/event/tutorial-2.png',
        description: this.getEventTutorialContent2(),
      };
    } if (pages[2]) {
      pages[2] = {
        ...pages[2],
        image: 'assets/images/tutorial/event/tutorial-3.png',
        description: this.getEventTutorialContent3(),
      };
    } if (pages[3]) {
      pages[3] = {
        ...pages[3],
        image: 'assets/images/tutorial/event/tutorial-4.png',
        description: this.getEventTutorialContent4(),
      };
    }
    return pages;
  });

  readonly pages = computed(() =>
    this.variant() === 'quick'
      ? this.quickPagesLocalized()
      : this.eventPagesLocalized(),
  );

  readonly totalPages = computed(() => this.pages().length);
  readonly currentPageData = computed(() => this.pages()[this.currentPage()]);
  readonly isFirstPage = computed(() => this.currentPage() === 0);
  readonly isLastPage = computed(
    () => this.currentPage() === this.totalPages() - 1,
  );

  onConfirm() {
    this.confirm.emit();
    this.close.emit();
  }

  onCancel() {
    this.currentPage.set(0);
    this.close.emit();
  }

  //* 分頁控制方法 */
  nextPage(): void {
    if (!this.isLastPage()) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  prevPage(): void {
    if (!this.isFirstPage()) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }

  goToPage(index: number): void {
    if (index >= 0 && index < this.totalPages()) {
      this.currentPage.set(index);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') this.onCancel();
    if (e.key === 'Enter') this.onConfirm();
    if (e.key === 'ArrowLeft') this.prevPage();
    if (e.key === 'ArrowRight') this.nextPage();
  }

  handleClose(): void {
    this.onCancel();
  }

  handleBack(): void {
    this.back.emit();
  }
}
