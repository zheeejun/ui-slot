import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTrnComponent } from './dev-trn.component';

describe('DevTrnComponent', () => {
  let component: DevTrnComponent;
  let fixture: ComponentFixture<DevTrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevTrnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevTrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
