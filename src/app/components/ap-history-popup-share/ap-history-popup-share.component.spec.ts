import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApHistoryPopupShareComponent } from './ap-history-popup-share.component';

describe('ApHistoryPopupShareComponent', () => {
  let component: ApHistoryPopupShareComponent;
  let fixture: ComponentFixture<ApHistoryPopupShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApHistoryPopupShareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApHistoryPopupShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
