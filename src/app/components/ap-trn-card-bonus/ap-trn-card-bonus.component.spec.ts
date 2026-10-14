import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApTrnCardBonusComponent } from './ap-trn-card-bonus.component';

describe('ApTrnCardBonusComponent', () => {
  let component: ApTrnCardBonusComponent;
  let fixture: ComponentFixture<ApTrnCardBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnCardBonusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApTrnCardBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
