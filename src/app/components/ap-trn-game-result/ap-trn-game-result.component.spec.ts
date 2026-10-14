import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApTrnGameResultComponent } from './ap-trn-game-result.component';

describe('ApTrnGameResultComponent', () => {
  let component: ApTrnGameResultComponent;
  let fixture: ComponentFixture<ApTrnGameResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnGameResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApTrnGameResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
