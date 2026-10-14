import { Component, signal } from '@angular/core';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { MobileComponent } from './mobile';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { ApHistoryReplayTopBarComponent } from '../ap-history-replay-top-bar/ap-history-replay-top-bar.component';

@Component({
  selector: 'demo-game-screen',
  imports: [
    CommonModule,
    ApSelectComponent,
    ApInputBox,
    DesktopComponent,
    MobileComponent,
    ApToggleSwitchComponent,
    ApHistoryReplayTopBarComponent,
  ],
  templateUrl: './demo-game-screen.component.html',
  styleUrl: './demo-game-screen.component.css',
})
export class DemoGameScreenComponent {
  variant = signal<'desktop' | 'mobile'>('desktop');
  reelScale = signal(1.0);
  screenOrientation = signal<'portrait' | 'landscape'>('portrait');
  showControls = signal<boolean>(false);
  showReplayTopBar = signal<boolean>(false);
  modeOptions: ApSelectOption[] = [
    { value: 'reel', label: 'Reel Only' },
    { value: 'all', label: 'Full Screen' },
  ];

  variantOptions: ApSelectOption[] = [
    { value: 'desktop', label: 'Desktop' },
    { value: 'mobile', label: 'Mobile' },
  ];

  onReelScaleChange(value: string) {
    const num = Number(value);
    if (!isNaN(num)) {
      this.reelScale.set(num);
    }
  }
}
