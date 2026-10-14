import { AfterViewInit, Component, computed, input, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApSelectComponent } from "../../../ap-components-lib/ap-select/ap-select.component";
import { ApInputBox } from "../../../ap-components-lib/ap-input-box/ap-input-box";
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { generatePlayerList } from '../../services/trn-ctrl/trn-ctrl.function';
import { ApRowListItem } from '../../components/ap-trn-list-row/ap-trn-list-row.interface';
import { TrnPageType } from '../trn-all/trn-all.interface';
import { SpinResult } from '../../shared/Protobuf/proto-ext';
import { TrnDebugSignalKey, TrnRaceUpdated } from '../../services/trn-ctrl/trn-ctrl.interface';

@Component({
  selector: 'trn-debug-panel',
  imports: [ApSelectComponent, ApInputBox, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent],
  templateUrl: './trn-debug-panel.component.html',
  styleUrl: './trn-debug-panel.component.css'
})
export class TrnDebugPanelComponent implements AfterViewInit, OnInit, OnDestroy {
  protected trn = inject(TrnCtrlService);
  protected wallet = inject(PlayerWalletService);
  protected api = inject(AppInterfaceService);
  /** Debug Panel Loading顯示開關 */
  isDebugLoading = signal(false);
  private destroy$ = new Subject<void>();
  /** Debug: Status Options */
  trnStatusOptions: ApSelectOption[] = [
    { label: 'idle', value: 'idle' },
    { label: 'matching', value: 'matching' },
    { label: 'playing quick', value: 'playing-quick' },
    { label: 'playing event', value: 'playing-event' },
  ];
  /** Debug: 用 Quick Match Event ID Options */
  debugTrnIdOptions = computed<ApSelectOption[]>(() => {
    return this.trn.trnList().map( trn => {
      return { label: `${trn.name} (${trn.id})`, value: trn.id };
    });
  }); 
  /** Debug: 選擇的Trn ID */
  debugTrnId = signal<string>('');
  /** 輸入的 Leader Board Page */
  inputPage = signal<number>(1);
  /** 輸入的 Leader Board Size */
  inputSize = signal<number>(10);
  /** 輸入的 Player History Limit */
  inputLimit = signal<number>(10);
  /** 輸入的 Player History Offset */
  inputOffset = signal<number>(0);
  /** 輸入的 Custom Action  */
  customAction = signal('');
  /** 顯示的 Spin Result */
  spinResultBalance = signal<string>('');
  /** 所有Signal切換清單 */
  signalList: { key: TrnDebugSignalKey, label: string }[] = [
    { key: 'game-starting', label: 'Game Starting' },
    { key: 'confirm-popup', label: 'Confirm Popup' },
    { key: 'event-popup', label: 'Event Popup' },
    { key: 'match-finished', label: 'Match Finished' },
    { key: 'created-notification', label: 'Created Notification' },
    { key: 'status-bar', label: 'Status Bar' },
    { key: 'game-result', label: 'Game Result' },
    { key: 'waiting-result', label: 'Waiting Result' },
  ];
  
  constructor() {
  }

  ngOnInit(): void {
    this.api.spinResult$.pipe(takeUntil(this.destroy$)).subscribe(this.onSpinResult.bind(this));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.spinResultBalance.set(this.wallet.balance().toString());
  }

  generateRoomState() {
    const list: ApRowListItem[] = generatePlayerList();
    const data: TrnRaceUpdated = {
      id: 'debug-room',
      rank: null,
      playersList: list,
      currentPool: Math.floor(Math.random() * 10000)
    };
    this.trn.debugAssignRoomUpdate(data);
  }

    /** 跟Server取得可用的Event */
  clickEventList() {
    this.trn.sendEventList(); 
  }

  /** 執行自訂Action */
  sendCustomAction(action: string) {
    this.trn.sendCustomAction(action as any);
  }

  /** 送出Leaderboard請求 */
  sendEvnetLeaderboard() {
    this.trn.sendEvnetLeaderboard(this.debugTrnId() || '', this.inputPage(), this.inputSize());
  }

  sendJoinEvent() {
    const trn = this.trn.trnList().find( trn => trn.id === this.debugTrnId());
    if (!trn) return;
    if (trn.type === 'quick') return; // 只處理Event的加入
    this.trn.sendJoinEvent(this.debugTrnId());
  }

  /** 送出Player History請求 */
  sendPlayerHistory() {
    this.trn.sendPlayerHistory(this.inputLimit(), this.inputOffset());
  }

  /** 取得Slot Spin結果 */
  sendTrnSpin() {
    this.isDebugLoading.set(true);
    this.wallet.sendSpinRequest();  
  }

  onSpinResult(result: SpinResult) {
    if (result.data.errorCode) throw new Error(`Error Code: ${result.data.errorCode}`);

    this.spinResultBalance.set( result.data.balance?.toString() || 'No Result');
    this.isDebugLoading.set(false);
  }

  toggleSignal(key: TrnDebugSignalKey) {
    this.trn.debugToggleSignal(key);
  }

  togglePage(page: TrnPageType) {
    this.trn.debugTogglePage(page);
  }
}
