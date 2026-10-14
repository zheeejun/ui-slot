import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCenterComponent } from './event-center.component';

describe('EventCenterComponent', () => {
  let component: EventCenterComponent;
  let fixture: ComponentFixture<EventCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
