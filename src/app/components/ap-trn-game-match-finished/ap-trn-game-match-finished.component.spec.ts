import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApTrnGameMatchFinished } from './ap-trn-game-match-finished.component';

describe('ApTrnGameMatchFinished', () => {
  let component: ApTrnGameMatchFinished;
  let fixture: ComponentFixture<ApTrnGameMatchFinished>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnGameMatchFinished],
    }).compileComponents();

    fixture = TestBed.createComponent(ApTrnGameMatchFinished);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
