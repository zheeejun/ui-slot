import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCashDropListComponent } from './ap-cashdrop-list.component';

describe('ApCashDropListComponent', () => {
  let component: ApCashDropListComponent;
  let fixture: ComponentFixture<ApCashDropListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApCashDropListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApCashDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
