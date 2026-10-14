import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPanelPopupComponent } from './bottom-panel-popup.component';

describe('BottomPanelPopupComponent', () => {
  let component: BottomPanelPopupComponent;
  let fixture: ComponentFixture<BottomPanelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomPanelPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomPanelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
