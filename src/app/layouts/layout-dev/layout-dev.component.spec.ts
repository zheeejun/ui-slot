import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDevComponent } from './layout-dev.component';

describe('LayoutDevComponent', () => {
  let component: LayoutDevComponent;
  let fixture: ComponentFixture<LayoutDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
