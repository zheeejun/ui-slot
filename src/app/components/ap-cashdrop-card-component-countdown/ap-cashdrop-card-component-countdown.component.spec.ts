import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCashdropCardComponentCountdown } from './ap-cashdrop-card-component-countdown.component';

describe('ApCashdropCardComponentCountdown', () => {
  let component: ApCashdropCardComponentCountdown;
  let fixture: ComponentFixture<ApCashdropCardComponentCountdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApCashdropCardComponentCountdown]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApCashdropCardComponentCountdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});