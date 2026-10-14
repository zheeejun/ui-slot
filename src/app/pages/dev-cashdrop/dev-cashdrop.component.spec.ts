import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCashDropComponent } from './dev-cashdrop.component';

describe('DevCashDropComponent', () => {
  let component: DevCashDropComponent;
  let fixture: ComponentFixture<DevCashDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevCashDropComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevCashDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
