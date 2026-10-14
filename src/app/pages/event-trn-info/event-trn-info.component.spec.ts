import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTrnInfoComponent } from './event-trn-info.component';

describe('EventTrnInfoComponent', () => {
  let component: EventTrnInfoComponent;
  let fixture: ComponentFixture<EventTrnInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTrnInfoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventTrnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
