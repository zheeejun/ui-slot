import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBridgeComponent } from './layout-bridge.component';

describe('LayoutBridgeComponent', () => {
  let component: LayoutBridgeComponent;
  let fixture: ComponentFixture<LayoutBridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutBridgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
