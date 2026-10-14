import {
  Component,
  computed,
  input,
  output,
  signal,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItem } from './ap-ui-tab-group.interface';

@Component({
  selector: 'ap-ui-tab-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ap-ui-tab-group.component.html',
  styleUrls: ['./ap-ui-tab-group.component.css'],
})
export class ApUiTabGroupComponent implements OnInit {
  tabs = input<TabItem[]>([
    { id: 'tab1', label: 'Tab 1' },
    { id: 'tab2', label: 'Tab 2' },
    { id: 'tab3', label: 'Tab 3' },
  ]);
  size = input<'default' | 'small'>('default');
  accentColor = input<'yellow' | 'orange' | 'slate'>('yellow');
  selectedTab = input<string>('tab1');
  disabled = input<boolean>(false);
  current = signal<string>('tab1');
  tabChange = output<string>();

  readonly containerClasses = computed(() =>
    this.size() === 'small' ? 'rounded-md p-0.5' : 'rounded-lg p-1',
  );

  readonly tabClasses = computed(() =>
    this.size() === 'small'
      ? 'py-2.5 px-2 rounded-sm text-sm'
      : 'py-2 px-2 rounded-md',
  );

  readonly labelClasses = computed(() =>
    this.size() === 'small' ? 'font-medium leading-5' : 'font-semibold',
  );

  readonly activeTabClasses = computed(() =>
    this.accentColor() === 'orange'
      ? 'bg-orange-500 text-white'
      : this.accentColor() === 'slate'
        ? 'bg-slate-700 text-white'
        : 'bg-yellow-400 text-zinc-900',
  );

  getTabClasses(tabId: string): string {
    return `${this.tabClasses()} ${this.current() === tabId
      ? this.activeTabClasses()
      : this.disabled()
        ? 'text-zinc-500'
        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700'
      }`;
  }

  ngOnInit(): void {
    this.current.set(this.selectedTab());
  }

  onClick(value: string): void {
    if (this.disabled()) {
      return;
    }
    this.current.set(value);
    this.tabChange.emit(value);
  }
}
