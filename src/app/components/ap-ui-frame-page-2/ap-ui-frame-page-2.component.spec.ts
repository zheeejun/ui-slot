import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApUiFramePage2Component } from './ap-ui-frame-page-2.component';

describe('ApUiFramePage2Component', () => {
  let component: ApUiFramePage2Component;
  let fixture: ComponentFixture<ApUiFramePage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApUiFramePage2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ApUiFramePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
