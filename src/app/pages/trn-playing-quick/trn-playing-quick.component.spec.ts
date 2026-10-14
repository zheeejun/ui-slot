import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnPlayingQuickComponent } from './trn-playing-quick.component';

describe('TrnPlayingQuickComponent', () => {
  let component: TrnPlayingQuickComponent;
  let fixture: ComponentFixture<TrnPlayingQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnPlayingQuickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrnPlayingQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
