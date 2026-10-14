import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ApUiVersionComponent } from './ap-ui-version.component';

describe('ApUiVersionComponent', () => {
  let component: ApUiVersionComponent;
  let fixture: ComponentFixture<ApUiVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApUiVersionComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ApUiVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
