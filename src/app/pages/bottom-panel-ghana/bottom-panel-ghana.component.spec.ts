import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPanelGhanaComponent } from './bottom-panel-ghana.component';

describe('BottomPanelGhanaComponent', () => {
  let component: BottomPanelGhanaComponent;
  let fixture: ComponentFixture<BottomPanelGhanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomPanelGhanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomPanelGhanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
