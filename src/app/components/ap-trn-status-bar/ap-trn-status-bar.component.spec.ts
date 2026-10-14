import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApTrnStatusBarComponent  } from './ap-trn-status-bar.component';

describe('ApTrnStatusBarComponent', () => {
  let component: ApTrnStatusBarComponent;
  let fixture: ComponentFixture<ApTrnStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnStatusBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApTrnStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
