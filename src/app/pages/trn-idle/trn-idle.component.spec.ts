import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnIdleComponent } from './trn-idle.component';

describe('TrnIdleComponent', () => {
  let component: TrnIdleComponent;
  let fixture: ComponentFixture<TrnIdleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnIdleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrnIdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
