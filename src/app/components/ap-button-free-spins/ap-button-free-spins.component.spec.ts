import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApButtonFreeSpinsComponent } from './ap-button-free-spins.component';

describe('ApButtonFreeSpinsComponent', () => {
  let component: ApButtonFreeSpinsComponent;
  let fixture: ComponentFixture<ApButtonFreeSpinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApButtonFreeSpinsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApButtonFreeSpinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
