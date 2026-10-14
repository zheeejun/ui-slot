import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApBfPopupPlayDemoConfirmComponent } from './ap-bf-popup-play-demo-confirm.component';

describe('ApBfPopupPlayDemoConfirmComponent', () => {
  let component: ApBfPopupPlayDemoConfirmComponent;
  let fixture: ComponentFixture<ApBfPopupPlayDemoConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApBfPopupPlayDemoConfirmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApBfPopupPlayDemoConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
