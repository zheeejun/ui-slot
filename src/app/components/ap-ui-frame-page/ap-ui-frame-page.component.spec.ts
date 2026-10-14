import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApUiFramePageComponent } from './ap-ui-frame-page.component';

describe('ApUiFramePageComponent', () => {
  let component: ApUiFramePageComponent;
  let fixture: ComponentFixture<ApUiFramePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApUiFramePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApUiFramePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
