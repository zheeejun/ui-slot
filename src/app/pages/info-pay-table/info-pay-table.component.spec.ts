import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPayTableComponent } from './info-pay-table.component';

describe(' InfoPayTableComponent', () => {
  let component:  InfoPayTableComponent;
  let fixture: ComponentFixture< InfoPayTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InfoPayTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent( InfoPayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
