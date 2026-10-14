import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGameScreenComponent } from './demo-game-screen.component';

describe('DemoGameScreenComponent', () => {
  let component: DemoGameScreenComponent;
  let fixture: ComponentFixture<DemoGameScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoGameScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoGameScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
