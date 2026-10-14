import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTrnRulesComponent } from './event-trn-rules.component';

describe('EventTrnRulesComponent', () => {
  let component: EventTrnRulesComponent;
  let fixture: ComponentFixture<EventTrnRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTrnRulesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventTrnRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
