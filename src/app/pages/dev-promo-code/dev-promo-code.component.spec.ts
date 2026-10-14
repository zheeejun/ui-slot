import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DevPromoCodeComponent } from './dev-promo-code.component';

describe('DevPromoCodeComponent', () => {
  let component: DevPromoCodeComponent;
  let fixture: ComponentFixture<DevPromoCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevPromoCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevPromoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
