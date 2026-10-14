import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPayTableDefaultComponent } from './info-pay-table-default.component';


describe(' InfoPayTableDefaultComponent', () => {
  let component:  InfoPayTableDefaultComponent;
  let fixture: ComponentFixture< InfoPayTableDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InfoPayTableDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent( InfoPayTableDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
