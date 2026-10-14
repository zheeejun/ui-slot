import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApInfoPayTableSymbolComponent,
  PayTableRow,
} from '../../components/ap-info-pay-table-symbol/ap-info-pay-table-symbol.component';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { TabItem } from '../../components/ap-ui-tab-group/ap-ui-tab-group.interface';
import {
  tableData,
  symbolsListItems,
  paylineListItems,
  payline1,
  payline2,
  payline3,
  payline4,
  payline5,
} from './info-pay-table.data';
import { ApInfoPayTablePaylineComponent } from '../../components/ap-info-pay-table-payline/ap-info-pay-table-payline.component';
import { InfoCtrlService } from '../../services/info-ctrl/info-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';

type SelectedTabType = 'SYMBOLS' | 'PAYLINES';

@Component({
  selector: 'info-pay-table',
  imports: [CommonModule, ApInfoPayTableSymbolComponent, ApUiTabGroupComponent, ApInfoPayTablePaylineComponent],
  templateUrl: './info-pay-table.component.html',
  styleUrl: './info-pay-table.component.css',
})
export class InfoPayTableComponent implements OnInit {
  @ViewChild('contentScroller')
  private contentScroller?: ElementRef<HTMLDivElement>;
  protected readonly api = inject(AppInterfaceService);
  protected readonly info = inject(InfoCtrlService);
  protected readonly symbol = inject(BaseSymbolTextureService);
  private readonly i18n = inject(AppI18nService);
  private readonly session = inject(ClientSessionService);
  /** info的版本是看system info的版本 */
  protected version = computed(() => this.session.version().sys);
  readonly symbolLabel = this.i18n.computed('history_symbol', 'Symbols');
  readonly paylineLabel = this.i18n.computed('history_line', 'Paylines');
  readonly paylineHeader = this.i18n.computed('history_line', 'Paylines');
  readonly symbolHeader = this.i18n.computed('history_symbol', 'Symbols');
  selectedTab = signal<SelectedTabType>('SYMBOLS');
  readonly isDragging = signal(false);
  private dragStartY = 0;
  private dragStartScrollTop = 0;
  readonly tabs = computed<TabItem[]>(() => [
    { id: 'SYMBOLS', label: this.symbolLabel() },
    { id: 'PAYLINES', label: this.paylineLabel() },
  ]);
  tableData: PayTableRow[] = tableData;
  readonly symbolsListItems = computed<string[]>(() =>
    symbolsListItems.map((item) => this.i18n.instant(item, item)),
  );
  readonly paylineListItems = computed<string[]>(() =>
    paylineListItems.map((item) => this.i18n.instant(item, item)),
  );
  readonly symbolCodes = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'];

  payline1 = payline1;
  payline2 = payline2;
  payline3 = payline3;
  payline4 = payline4;
  payline5 = payline5;

  ngOnInit() {

  }


  onCellClick(cell: { row: number; col: number }) {
  }

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

  selectTab(tabId: string) {
    if (tabId === 'SYMBOLS' || tabId === 'PAYLINES') {
      this.selectedTab.set(tabId);
      this.scrollToSection(tabId);
    }
  }

  scrollToSection(tabId: string) {
    const sectionId = tabId === 'SYMBOLS' ? 'symbols-section' : 'paylines-section';
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
