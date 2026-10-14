import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApHistoryReplayTopBarComponent } from './ap-history-replay-top-bar.component';

describe('ApHistoryReplayTopBarComponent', () => {
  let component: ApHistoryReplayTopBarComponent;
  let fixture: ComponentFixture<ApHistoryReplayTopBarComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApHistoryReplayTopBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApHistoryReplayTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
