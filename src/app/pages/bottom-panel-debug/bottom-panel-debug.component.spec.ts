import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPanelDebugComponent } from './bottom-panel-debug.component';

describe('BottomPanelDebugComponent', () => {
  let component: BottomPanelDebugComponent;
  let fixture: ComponentFixture<BottomPanelDebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomPanelDebugComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomPanelDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
