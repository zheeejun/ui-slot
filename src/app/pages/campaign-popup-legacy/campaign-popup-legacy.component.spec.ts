import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPopupLegacyComponent } from './campaign-popup-legacy.component';

describe('CampaignPopupLegacyComponent', () => {
  let component: CampaignPopupLegacyComponent;
  let fixture: ComponentFixture<CampaignPopupLegacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignPopupLegacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignPopupLegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
