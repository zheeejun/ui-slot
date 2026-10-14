import { AppI18nPipe } from './app-i18n.pipe';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

describe('AppI18nPipe', () => {
  let pipe: AppI18nPipe;
  let mockService: jasmine.SpyObj<AppI18nService>;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('AppI18nService', ['instant']);
    pipe = new AppI18nPipe(mockService);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('應該調用 appI18n.instant 並返回翻譯', () => {
    mockService.instant.and.returnValue('排行榜');
    const result = pipe.transform('leaderBoard_title', '預設值');
    
    expect(result).toBe('排行榜');
    expect(mockService.instant).toHaveBeenCalledWith('leaderBoard_title', '預設值');
  });

  it('應該處理沒有預設值的情況', () => {
    mockService.instant.and.returnValue('個人');
    const result = pipe.transform('leaderBoard_toggle_personal');
    
    expect(result).toBe('個人');
    expect(mockService.instant).toHaveBeenCalledWith('leaderBoard_toggle_personal', undefined);
  });
});
