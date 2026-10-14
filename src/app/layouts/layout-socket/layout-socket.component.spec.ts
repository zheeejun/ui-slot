import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSocketComponent } from './layout-socket.component';

describe('LayoutSocketComponent', () => {
  let component: LayoutSocketComponent;
  let fixture: ComponentFixture<LayoutSocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
