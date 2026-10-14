import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutModeSelectComponent } from './layout-mode-select.component';

describe('LayoutModeSelectComponent', () => {
  let component: LayoutModeSelectComponent;
  let fixture: ComponentFixture<LayoutModeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutModeSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutModeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
