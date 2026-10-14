import { WritableSignal } from "@angular/core";

export interface LayoutLabToggleItem {
  label: string;
  signal: WritableSignal<boolean>;
  component: any,
}