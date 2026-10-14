import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ApUiLogoNameComponent } from './ap-ui-logo-name.component';
describe('ApUiLogoNameComponent', () => {
  let component:ApUiLogoNameComponent;
  let fixture: ComponentFixture<ApUiLogoNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApUiLogoNameComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ApUiLogoNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
