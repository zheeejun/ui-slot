import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTrnComponent } from './event-trn.component';

describe('EventTrnComponent', () => {
  let component: EventTrnComponent;
  let fixture: ComponentFixture<EventTrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTrnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
