import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTrnInfoTableComponent } from './ap-trn-info-table.component';

describe('ApTrnInfoTableComponent', () => {
  let component: ApTrnInfoTableComponent;
  let fixture: ComponentFixture<ApTrnInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnInfoTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApTrnInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
