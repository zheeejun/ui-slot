import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotDebugPanelComponent } from './slot-debug-panel.component';

describe('SlotDebugPanelComponent', () => {
  let component: SlotDebugPanelComponent;
  let fixture: ComponentFixture<SlotDebugPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotDebugPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotDebugPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
