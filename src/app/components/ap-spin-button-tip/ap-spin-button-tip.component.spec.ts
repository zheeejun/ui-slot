import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApSpinButtonTipComponent } from './ap-spin-button-tip.component';

describe('ApSpinButtonTipComponent', () => {
  let component: ApSpinButtonTipComponent;
  let fixture: ComponentFixture<ApSpinButtonTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApSpinButtonTipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApSpinButtonTipComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct text for each mode', () => {});

  it('should display correct gradient class for each mode', () => {});
});
