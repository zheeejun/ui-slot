import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCashdropCardCountdownComponent } from './ap-cashdrop-card-countdown.component';

describe('ApCashdropCardCountdownComponent', () => {
  let component: ApCashdropCardCountdownComponent;
  let fixture: ComponentFixture<ApCashdropCardCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApCashdropCardCountdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApCashdropCardCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
