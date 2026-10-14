import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnPlayingEventComponent } from './trn-playing-event.component';

describe('TrnPlayingEventComponent', () => {
  let component: TrnPlayingEventComponent;
  let fixture: ComponentFixture<TrnPlayingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnPlayingEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrnPlayingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
