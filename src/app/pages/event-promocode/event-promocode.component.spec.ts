import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventPromoCodeComponent } from './event-promocode.component';

describe('EventPromoCodeComponent', () => {
  let component: EventPromoCodeComponent;
  let fixture: ComponentFixture<EventPromoCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPromoCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPromoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
