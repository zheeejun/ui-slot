import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApUiGameNameComponent } from './ap-ui-game-name.component';

describe('ApUiGameNameComponent', () => {
  let component:ApUiGameNameComponent;
  let fixture: ComponentFixture<ApUiGameNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApUiGameNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApUiGameNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
