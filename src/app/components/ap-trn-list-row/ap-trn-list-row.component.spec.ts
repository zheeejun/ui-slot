import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTrnListRowComponent } from './ap-trn-list-row.component';

describe('ApTrnListRowComponent', () => {
  let component: ApTrnListRowComponent;
  let fixture: ComponentFixture<ApTrnListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnListRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApTrnListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
