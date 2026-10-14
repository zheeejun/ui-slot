import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApUiFramePopupComponent } from './ap-ui-frame-popup.component';

describe('ApUiFramePopupComponent', () => {
  let component: ApUiFramePopupComponent;
  let fixture: ComponentFixture<ApUiFramePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApUiFramePopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApUiFramePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use text-base for list-content size', () => {
    fixture.componentRef.setInput('size', 'list-content');
    fixture.detectChanges();

    expect(component.getTextSizeClass()).toBe('text-base');
  });
});
