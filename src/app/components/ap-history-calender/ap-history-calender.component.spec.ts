import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApHistoryCalenderComponent } from './ap-history-calender.component';

describe('ApHistoryCalenderComponent', () => {
  let component: ApHistoryCalenderComponent;
  let fixture: ComponentFixture<ApHistoryCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApHistoryCalenderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApHistoryCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
