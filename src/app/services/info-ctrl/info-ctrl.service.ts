import { Injectable, computed, inject } from '@angular/core';
import { ClientSessionService } from '../client-session/client-session.service';
import { AppI18nService } from '../app-i18n/app-i18n.service';
import { featureEntriesData, InfoEntryInterface } from './info-ctrl.data';
import { GameIframeCtrlService } from '../game-iframe-ctrl/game-iframe-ctrl.service';

@Injectable({
  providedIn: 'root',
})
export class InfoCtrlService {
  protected readonly appI18n = inject(AppI18nService);
  protected readonly session = inject(ClientSessionService);
  protected readonly game = inject(GameIframeCtrlService);
  readonly featureEntries = computed<InfoEntryInterface[]>(() => {
    const data = this.appI18n.getGameWordList();
    const entries = Object.entries(data || {})
      .filter(([key]) => key.startsWith('info_feature_'))
      .map(([, value]) => this.parseInfoEntry(value))
      .filter((entry): entry is InfoEntryInterface => !!entry);
    return entries.length > 0 ? entries : featureEntriesData;
  });
  readonly paytableEntries = computed<InfoEntryInterface[]>(() => {
    const data = this.appI18n.getGameWordList();
    const entries = Object.entries(data || {})
      .filter(([key]) => key.startsWith('info_paytable_'))
      .map(([, value]) => this.parseInfoEntry(value))
      .filter((entry) => !!entry);
    return entries.length > 0 ? entries : [];
  });
  readonly gameId: string =  this.session.gameId || '10087';
  private readonly infoFolder = computed(() => {
    const customGamekey = this.customGamekey();
    return customGamekey ? `${customGamekey}_${this.gameId}` : this.gameId;
  });
  readonly assetUrl = computed(() => `${this.session.assetUrl}/system/Info/${this.infoFolder()}`);
  private customGamekey = computed(() => this.game.customGameKey());

  private readonly entryMap = [
    'title_left',
    'title_center',
    'title_right',
    'subtitle_left',
    'subtitle_center',
    'subtitle_right',
    'image_left',
    'image_center',
    'image_right',
    'content_left',
    'content_center',
    'content_right',
  ] as const;

  private parseInfoEntry(value: string): InfoEntryInterface | null {
    const match = value.split('@');
    if (!match) return null;
    const index = Number(match[0]);
    const prefix = this.entryMap[index];
    if (!prefix) return null;
    let [category, position] = prefix.split('_');
    let content = match[1];
    if (content === 'info_feature_p99.jpg')
      category = 'buyFeature';
    return {
      category: category as InfoEntryInterface['category'],
      position: position as InfoEntryInterface['position'],
      content: content,
    };
  }

  getImageUrl(fileName: string): string{
    // 目前先把info_feature_p99.jpg當作特殊案例
    if (fileName === 'info_feature_p99.jpg') {
      return this.assetUrl() + '/' + fileName;
    }
    return this.assetUrl() + '/en/' + fileName;
  }
}
