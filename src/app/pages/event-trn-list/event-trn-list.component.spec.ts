import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTrnListComponent } from './event-trn-list.component';

describe('EventTrnListComponent', () => {
  let component: EventTrnListComponent;
  let fixture: ComponentFixture<EventTrnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTrnListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventTrnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
