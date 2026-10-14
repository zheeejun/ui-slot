import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApUiDeviceRotationComponent } from './ap-ui-device-rotation.component';

describe('ApUiDeviceRotationComponent', () => {
  let component: ApUiDeviceRotationComponent;
  let fixture: ComponentFixture<ApUiDeviceRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApUiDeviceRotationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApUiDeviceRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
