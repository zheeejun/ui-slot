import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotReelSettingComponent } from './slot-reel-setting.component';

describe('SlotReelSettingComponent', () => {
  let component: SlotReelSettingComponent;
  let fixture: ComponentFixture<SlotReelSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotReelSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotReelSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
