import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevIconsComponent } from './dev-icons.component';

describe('DevIconsComponent', () => {
  let component: DevIconsComponent;
  let fixture: ComponentFixture<DevIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
