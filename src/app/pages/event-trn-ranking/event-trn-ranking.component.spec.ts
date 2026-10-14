import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTrnRankingComponent } from './event-trn-ranking.component';

describe(' EventTrnRankingComponent', () => {
  let component: EventTrnRankingComponent;
  let fixture: ComponentFixture<EventTrnRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTrnRankingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventTrnRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
