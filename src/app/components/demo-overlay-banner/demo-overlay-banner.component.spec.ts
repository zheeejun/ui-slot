import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOverlayBannerComponent } from './demo-overlay-banner.component';

describe('DemoOverlayBannerComponent', () => {
  let component: DemoOverlayBannerComponent;
  let fixture: ComponentFixture<DemoOverlayBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoOverlayBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoOverlayBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
