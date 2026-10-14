import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGhanaComponent } from './layout-ghana.component';

describe('LayoutGhanaComponent', () => {
  let component: LayoutGhanaComponent;
  let fixture: ComponentFixture<LayoutGhanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutGhanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutGhanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
