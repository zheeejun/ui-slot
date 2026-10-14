import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCampaignComponent } from './dev-campaign.component';

describe('DevCampaignComponent', () => {
  let component: DevCampaignComponent;
  let fixture: ComponentFixture<DevCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevCampaignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
