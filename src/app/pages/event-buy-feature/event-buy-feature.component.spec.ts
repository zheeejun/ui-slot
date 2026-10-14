import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBuyFeatureComponent } from './event-buy-feature.component';

describe('EventBuyFeatureComponent', () => {
  let component: EventBuyFeatureComponent;
  let fixture: ComponentFixture<EventBuyFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBuyFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBuyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
