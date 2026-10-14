import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApCampaignListComponent } from './ap-campaign-list.component';


describe('ApCampaignListComponent', () => {
  let component: ApCampaignListComponent;
  let fixture: ComponentFixture<ApCampaignListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApCampaignListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApCampaignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
