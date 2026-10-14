import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMiscComponent } from './dev-misc.component';

describe('DevMiscComponent', () => {
  let component: DevMiscComponent;
  let fixture: ComponentFixture<DevMiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevMiscComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
