import { TestBed } from '@angular/core/testing';
import { AppI18nService } from './app-i18n.service';
import { AppInterfaceService } from '../app-interface/app-interface.service';

describe('AppI18nService', () => {
  let service: AppI18nService;
  let mockAppInterface: jasmine.SpyObj<AppInterfaceService>;

  beforeEach(() => {
    // 創建 AppInterfaceService 的 mock
    mockAppInterface = jasmine.createSpyObj('AppInterfaceService', ['commonStr']);

    TestBed.configureTestingModule({
      providers: [
        AppI18nService,
        { provide: AppInterfaceService, useValue: mockAppInterface }
      ]
    });
    service = TestBed.inject(AppI18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('instant', () => {
    it('應該返回翻譯文字', () => {
      mockAppInterface.commonStr.and.returnValue('排行榜');
      const result = service.instant('leaderBoard_title');
      expect(result).toBe('排行榜');
      expect(mockAppInterface.commonStr).toHaveBeenCalledWith('leaderBoard_title');
    });

    it('應該在找不到翻譯時返回預設值', () => {
      mockAppInterface.commonStr.and.returnValue(null);
      const result = service.instant('unknown_key', '預設文字');
      expect(result).toBe('預設文字');
    });

    it('應該在沒有翻譯和預設值時返回 key', () => {
      mockAppInterface.commonStr.and.returnValue(null);
      const result = service.instant('unknown_key');
      expect(result).toBe('unknown_key');
    });
  });

  describe('computed', () => {
    it('應該創建響應式 computed signal', () => {
      mockAppInterface.commonStr.and.returnValue('個人');
      const computed = service.computed('leaderBoard_toggle_personal', 'PERSONAL');
      expect(computed()).toBe('個人');
    });
  });

  describe('getMany', () => {
    it('應該批量獲取翻譯', () => {
      mockAppInterface.commonStr.and.returnValues('遊戲', '獎金', '旋轉');
      const result = service.getMany(['key1', 'key2', 'key3']);
      expect(result).toEqual({
        key1: '遊戲',
        key2: '獎金',
        key3: '旋轉'
      });
    });
  });

  describe('use', () => {
    it('應該設定當前語言', () => {
      service.use('en-US');
      expect(service.getCurrentLang()).toBe('en-US');
    });
  });
});
