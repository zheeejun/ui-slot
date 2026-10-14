import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChickenComponent } from './game-chicken.component';

describe('GameChickenComponent', () => {
  let component: GameChickenComponent;
  let fixture: ComponentFixture<GameChickenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameChickenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameChickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
