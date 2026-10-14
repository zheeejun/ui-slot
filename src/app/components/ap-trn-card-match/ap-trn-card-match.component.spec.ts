import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApTrnCardMatchComponent } from './ap-trn-card-match.component';

describe('ApTrnCardMatchComponent', () => {
  let component: ApTrnCardMatchComponent;
  let fixture: ComponentFixture<ApTrnCardMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnCardMatchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApTrnCardMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
