import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDebugPanelComponent } from './log-debug-panel.component';

describe('LogDebugPanelComponent', () => {
  let component: LogDebugPanelComponent;
  let fixture: ComponentFixture<LogDebugPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogDebugPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogDebugPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
