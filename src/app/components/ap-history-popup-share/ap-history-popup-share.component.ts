import { Component, computed, inject, input, output, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { ApUiFramePopupComponent } from '../ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApIconSnsWhatsappComponent } from '../../icons/ap-icon-sns-whatsapp/ap-icon-sns-whatsapp.component';
import { ApIconSnsFacebookComponent } from '../../icons/ap-icon-sns-facebook/ap-icon-sns-facebook.component';
import { ApIconSnsLineComponent } from '../../icons/ap-icon-sns-line/ap-icon-sns-line.component';
import { ApIconSnsXComponent } from '../../icons/ap-icon-sns-x/ap-icon-sns-x.component';

type ShareChannel = {
  label: string;
  comp?: Type<unknown>;
  imageSrc?: string;
  imageAlt?: string;
  action: () => Promise<void> | void;
};

@Component({
  selector: 'ap-history-popup-share',
  imports: [NgComponentOutlet, ApUiFramePopupComponent, ApButtonComponent],
  templateUrl: './ap-history-popup-share.component.html',
  styleUrl: './ap-history-popup-share.component.css',
})
export class ApHistoryPopupShareComponent {
  header = input('SHARE');
  linkLabel = input('Copy Link');
  item = input<HistoryListItem | null>(null);
  session = inject(ClientSessionService);
  version = computed(() => this.session.version().app);
  getShareUrl = input<() => Promise<string | null>>();
  close = output<void>();
  copyLink = output<HistoryListItem | null>();

  readonly shareChannels = computed<readonly ShareChannel[]>(() => [
    {
      label: 'Whatsapp',
      comp: ApIconSnsWhatsappComponent,
      action: () => this.shareViaUrl((shareUrl) =>
        `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`),
    },
    {
      label: 'Facebook',
      comp: ApIconSnsFacebookComponent,
      action: () => this.shareViaUrl((shareUrl) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`),
    },
    {
      label: 'Line',
      comp: ApIconSnsLineComponent,
      action: () => this.shareViaUrl((shareUrl) =>
        `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`),
    },
    {
      label: 'Telegram',
      imageSrc: 'assets/images/telegram_logo.svg',
      imageAlt: 'Telegram',
      action: () => this.shareViaUrl((shareUrl) =>
        `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`),
    },
    {
      label: 'X',
      comp: ApIconSnsXComponent,
      action: () => this.shareViaUrl((shareUrl) =>
        `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`),
    },


  ]);

  private async shareViaUrl(buildUrl: (shareUrl: string) => string): Promise<void> {
    const getUrl = this.getShareUrl();
    if (!getUrl) return;

    const shareUrl = await getUrl();
    if (!shareUrl) return;

    window.open(buildUrl(shareUrl), '_blank');
  }

  onCopyLink() {
    this.copyLink.emit(this.item());
  }

  onCancel() {
    this.close.emit();
  }
}
