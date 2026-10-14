import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnMatchingComponent } from './trn-matching.component';

describe('TrnMatchingComponent', () => {
  let component: TrnMatchingComponent;
  let fixture: ComponentFixture<TrnMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnMatchingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrnMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
