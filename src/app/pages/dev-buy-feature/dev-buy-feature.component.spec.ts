import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBuyFeatureComponent } from './dev-buy-feature.component';

describe('DevBuyFeatureComponent', () => {
  let component: DevBuyFeatureComponent;
  let fixture: ComponentFixture<DevBuyFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevBuyFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevBuyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
