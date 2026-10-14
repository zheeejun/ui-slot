import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDetailRewardComponent } from './history-detail-reward.component';

describe('HistoryDetailRewardComponent', () => {
  let component: HistoryDetailRewardComponent;
  let fixture: ComponentFixture<HistoryDetailRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryDetailRewardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryDetailRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
