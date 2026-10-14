import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventCashdropToastComponent } from './event-cashdrop-toast.component';

describe('EventCashdropToastComponent', () => {
  let component: EventCashdropToastComponent;
  let fixture: ComponentFixture<EventCashdropToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCashdropToastComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventCashdropToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
