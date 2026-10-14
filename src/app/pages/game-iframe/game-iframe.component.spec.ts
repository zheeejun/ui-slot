import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIframeComponent } from './game-iframe.component';

describe('GameIframeComponent', () => {
  let component: GameIframeComponent;
  let fixture: ComponentFixture<GameIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameIframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
