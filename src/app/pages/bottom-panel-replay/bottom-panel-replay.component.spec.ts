import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomPanelReplayComponent } from './bottom-panel-replay.component';

describe('BottomPanelReplayComponent', () => {
  let component: BottomPanelReplayComponent;
  let fixture: ComponentFixture<BottomPanelReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomPanelReplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomPanelReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
