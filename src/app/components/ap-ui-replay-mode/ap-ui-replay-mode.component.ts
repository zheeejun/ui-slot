import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { ApIconMusicCircleComponent } from "../../icons/ap-icon-music-circle/ap-icon-music-circle.component";
import { ApIconCloseCircleComponent } from "../../icons/ap-icon-close-circle/ap-icon-close-circle.component";

@Component({
  selector: 'ap-ui-replay-mode',
  imports: [CommonModule, ApIconMusicCircleComponent, ApIconCloseCircleComponent],
  templateUrl: './ap-ui-replay-mode.component.html',
  styleUrl: './ap-ui-replay-mode.component.css',
})
export class ApUiReplayModeComponent {
  label = input<string>('Replay Mode');
  showIcon = input<boolean>(true);
  showCloseButton = input<boolean>(true);
  enableMusicSound = output<void>();
  close = output<void>();
  isMusicPressed = signal(false);
}
