import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDebugPanelComponent } from './history-debug-panel.component';

describe('HistoryDebugPanelComponent', () => {
  let component: HistoryDebugPanelComponent;
  let fixture: ComponentFixture<HistoryDebugPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryDebugPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryDebugPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
