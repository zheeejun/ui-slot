import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCampaignCardComponent } from './ap-campaign-card.component';

describe('ApCampaignCardComponent', () => {
  let component: ApCampaignCardComponent;
  let fixture: ComponentFixture<ApCampaignCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApCampaignCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApCampaignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
