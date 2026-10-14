import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscDebugPanelComponent } from './misc-debug-panel.component';

describe('MiscDebugPanelComponent', () => {
  let component: MiscDebugPanelComponent;
  let fixture: ComponentFixture<MiscDebugPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscDebugPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscDebugPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
