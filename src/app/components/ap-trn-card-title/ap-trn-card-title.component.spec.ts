import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApTrnCardTitleComponent } from './ap-trn-card-title.component';

describe('ApTrnCardTitleComponent', () => {
  let component: ApTrnCardTitleComponent;
  let fixture: ComponentFixture<ApTrnCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnCardTitleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApTrnCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
