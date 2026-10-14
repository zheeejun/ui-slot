import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrnGameEventLeaveConfirmComponent } from './trn-game-event-leave-confirm.component';


describe('TrnGameEventLeaveConfirmComponent', () => {
  let component: TrnGameEventLeaveConfirmComponent;
  let fixture: ComponentFixture<TrnGameEventLeaveConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnGameEventLeaveConfirmComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrnGameEventLeaveConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
