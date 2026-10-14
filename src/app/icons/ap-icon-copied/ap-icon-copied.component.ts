import { Component, OnDestroy, computed, input, signal } from '@angular/core';

@Component({
  selector: 'ap-icon-copied',
  imports: [],
  template: `
    <button
      type="button"
      class="group flex w-full min-w-0 cursor-pointer flex-col items-center gap-2 text-left"
      [attr.aria-label]="ariaLabel()"
      (click)="copyIconName()"
    >
      <div class="card-container">
        <ng-content></ng-content>
        <h5 class="hover-overlay" [class.opacity-100]="hasCopied()">
          {{ hasCopied() ? "Copied!" : "Copy name" }}
        </h5>
      </div>
      <h6 class="w-full truncate text-center text-zinc-300" [title]="name()">
        {{ name() }}
      </h6>
    </button>
  `,
  styles: `
    :host {
      display: block;
      min-width: 0;
    }

    .card-container {
      position: relative;
      display: flex;
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: 1px solid #71717a;
      background-color: #18181b;
      color: #09090b;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      transition: border-color 0.15s ease-in-out;
    }

    .group:hover .card-container {
      border-color: #d4d4d8;
    }

    .group:focus-visible .card-container {
      border-color: #a1a1aa;
      outline: 2px solid #71717a;
      outline-offset: 2px;
    }

    .hover-overlay {
      pointer-events: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(9, 9, 11, 0.8);
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      text-align: center;
      color: #fb923c;
      opacity: 0;
      transition: opacity 0.15s ease-in-out;
    }

    .group:hover .hover-overlay,
    .group:focus-visible .hover-overlay {
      opacity: 1;
    }
  `,
})
export class ApIconCopiedComponent implements OnDestroy {
  private copiedIconNameResetTimer: ReturnType<typeof setTimeout> | null = null;

  readonly name = input.required<string>();
  readonly hasCopied = signal(false);
  readonly ariaLabel = computed(() => `Copy ${this.name()} icon name`);

  async copyIconName(): Promise<void> {
    const copied = await this.copyToClipboard(this.name());

    if (!copied) {
      return;
    }

    this.hasCopied.set(true);

    if (this.copiedIconNameResetTimer) {
      clearTimeout(this.copiedIconNameResetTimer);
    }

    this.copiedIconNameResetTimer = setTimeout(() => {
      this.hasCopied.set(false);
      this.copiedIconNameResetTimer = null;
    }, 1500);
  }

  ngOnDestroy(): void {
    if (this.copiedIconNameResetTimer) {
      clearTimeout(this.copiedIconNameResetTimer);
    }
  }

  private async copyToClipboard(text: string): Promise<boolean> {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        return this.copyToClipboardFallback(text);
      }
    }

    return this.copyToClipboardFallback(text);
  }

  private copyToClipboardFallback(text: string): boolean {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy');
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
