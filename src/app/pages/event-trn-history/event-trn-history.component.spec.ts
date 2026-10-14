import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTrnHistoryComponent } from './event-trn-history.component';

describe('EventTrnHistoryComponent', () => {
  let component: EventTrnHistoryComponent;
  let fixture: ComponentFixture<EventTrnHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTrnHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTrnHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
