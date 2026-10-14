import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMessageComponent } from './dev-message.component';

describe('DevMessageComponent', () => {
  let component: DevMessageComponent;
  let fixture: ComponentFixture<DevMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
