import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnDebugPanelComponent } from './trn-debug-panel.component';

describe('TrnDebugPanelComponent', () => {
  let component: TrnDebugPanelComponent;
  let fixture: ComponentFixture<TrnDebugPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnDebugPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrnDebugPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
