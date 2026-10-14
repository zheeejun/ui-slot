import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDebugPanelComponent } from './campaign-debug-panel.component';

describe('CampaignDebugPanelComponent', () => {
  let component: CampaignDebugPanelComponent;
  let fixture: ComponentFixture<CampaignDebugPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignDebugPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignDebugPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
