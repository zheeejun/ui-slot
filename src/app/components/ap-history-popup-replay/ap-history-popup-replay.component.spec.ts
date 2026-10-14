import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApHistoryPopupReplayComponent } from './ap-history-popup-replay.component';

describe('ApHistoryPopupReplayComponent', () => {
  let component: ApHistoryPopupReplayComponent;
  let fixture: ComponentFixture<ApHistoryPopupReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApHistoryPopupReplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApHistoryPopupReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
