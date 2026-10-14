import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApBfCardBetControlComponent } from './ap-bf-card-bet-control.component';

describe('ApBfCardBetControlComponent', () => {
  let component: ApBfCardBetControlComponent;
  let fixture: ComponentFixture<ApBfCardBetControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApBfCardBetControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApBfCardBetControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
