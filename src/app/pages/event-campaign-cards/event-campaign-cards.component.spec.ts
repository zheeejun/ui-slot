import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCampaignCardsComponent } from './event-campaign-cards.component';

describe('EventCampaignCardsComponent', () => {
  let component: EventCampaignCardsComponent;
  let fixture: ComponentFixture<EventCampaignCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCampaignCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCampaignCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
