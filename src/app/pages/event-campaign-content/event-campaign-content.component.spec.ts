import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCampaignContentComponent } from './event-campaign-content.component';

describe('EventCampaignContentComponent', () => {
  let component: EventCampaignContentComponent;
  let fixture: ComponentFixture<EventCampaignContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCampaignContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventCampaignContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
