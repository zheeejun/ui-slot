import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPopupComponent } from './dev-popup.component';

describe('DevPopupComponent', () => {
  let component: DevPopupComponent;
  let fixture: ComponentFixture<DevPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
