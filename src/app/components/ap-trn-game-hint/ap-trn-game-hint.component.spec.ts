import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTrnGameHintComponent } from './ap-trn-game-hint.component';

describe('ApTrnGameHintComponent', () => {
  let component: ApTrnGameHintComponent;
  let fixture: ComponentFixture<ApTrnGameHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnGameHintComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApTrnGameHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
