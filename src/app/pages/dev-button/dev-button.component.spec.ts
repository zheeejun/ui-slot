import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevButtonComponent } from './dev-button.component';

describe('DevButtonComponent', () => {
  let component: DevButtonComponent;
  let fixture: ComponentFixture<DevButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
