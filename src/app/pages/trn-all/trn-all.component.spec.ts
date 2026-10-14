import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnAllComponent } from './trn-all.component';

describe('TrnAllComponent', () => {
  let component: TrnAllComponent;
  let fixture: ComponentFixture<TrnAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrnAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
