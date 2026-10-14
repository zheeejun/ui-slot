import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'ap-info-feature',
  imports: [CommonModule],
  templateUrl: './ap-info-feature.component.html',
  styleUrl: './ap-info-feature.component.css',
})
export class ApInfoFeatureComponent {
  session = inject(ClientSessionService);
  /** info feature的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);
  title = input<string>('Feature Title');
  description = input<string>('Feature description goes here.');
  symbolImages = input<string[]>([]);
  variant = input<'with-images' | 'text-only'>('with-images');
}
