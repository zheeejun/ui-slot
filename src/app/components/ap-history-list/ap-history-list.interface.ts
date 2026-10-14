import type { OutputEmitterRef } from '@angular/core';
import type { DateRange } from '../ap-history-calender/ap-history-calender.interface';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';


export type HistoryWinLoseFilter = 'win' | 'lose' | 'winlose';

export interface ApHistoryListOutputs {
  share: OutputEmitterRef<HistoryListItem>;
  replay: OutputEmitterRef<HistoryListItem>;
  detail: OutputEmitterRef<HistoryListItem>;
}
