import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnCreatedNotificationComponent} from './trn-created-notification.component';

describe('TrnCreatedNotificationComponent', () => {
  let component: TrnCreatedNotificationComponent;
  let fixture: ComponentFixture<TrnCreatedNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnCreatedNotificationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrnCreatedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Game Start text when visible', () => {
    fixture.componentRef.setInput('isVisible', true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.game-start-text')?.textContent?.trim()).toBe('Game Start!');
  });

  it('should hide component when isVisible is false', () => {
    fixture.componentRef.setInput('isVisible', false);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.game-start-container')).toBeFalsy();
  });


});