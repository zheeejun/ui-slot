import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApButtonAutoSpinTimesComponent } from './ap-button-auto-spin-times.component';

describe('ApButtonAutoSpinTimesComponent', () => {
  let component: ApButtonAutoSpinTimesComponent;
  let fixture: ComponentFixture<ApButtonAutoSpinTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApButtonAutoSpinTimesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApButtonAutoSpinTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
