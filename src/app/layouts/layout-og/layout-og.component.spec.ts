import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOgComponent } from './layout-og.component';

describe('LayoutOgComponent', () => {
  let component: LayoutOgComponent;
  let fixture: ComponentFixture<LayoutOgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutOgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutOgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
