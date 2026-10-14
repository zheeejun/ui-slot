import { WritableSignal } from "@angular/core";
import { TrnDebugSignalKey } from "../../services/trn-ctrl/trn-ctrl.interface";

export type TrnPageType = 'idle' | 'matching' | 'playing-quick' | 'playing-event';



/** Debug用: 讓Signal在介面上顯示切換 */
export interface TrnSignalToggleItem {
  key: TrnDebugSignalKey;
  signal: WritableSignal<boolean>;
}