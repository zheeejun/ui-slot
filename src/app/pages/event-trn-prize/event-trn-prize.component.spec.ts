import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTrnPrizeComponent } from './event-trn-prize.component';

describe('EventTrnPrizeComponent', () => {
  let component: EventTrnPrizeComponent;
  let fixture: ComponentFixture<EventTrnPrizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTrnPrizeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventTrnPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
