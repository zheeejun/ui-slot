import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTrnEventSelectionComponent } from './ap-trn-event-selection.component';

describe('ApTrnEventSelectionComponent', () => {
  let component: ApTrnEventSelectionComponent;
  let fixture: ComponentFixture<ApTrnEventSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnEventSelectionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApTrnEventSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});