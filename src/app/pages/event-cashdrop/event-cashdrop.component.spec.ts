import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventCashdropComponent } from './event-cashdrop.component';

describe('EventCashdropComponent', () => {
  let component: EventCashdropComponent;
  let fixture: ComponentFixture<EventCashdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCashdropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCashdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
