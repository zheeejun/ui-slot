import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPopupComponent } from './campaign-popup.component';

describe('CampaignPopupComponent', () => {
  let component: CampaignPopupComponent;
  let fixture: ComponentFixture<CampaignPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
