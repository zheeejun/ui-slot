import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrnGameConfirmComponent } from './trn-game-confirm.component';


describe('TrnGameConfirmComponent', () => {
  let component: TrnGameConfirmComponent;
  let fixture: ComponentFixture<TrnGameConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnGameConfirmComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrnGameConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
