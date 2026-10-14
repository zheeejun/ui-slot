import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApHistoryListComponent } from './ap-history-list.component';

describe('ApHistoryListComponent', () => {
  let component: ApHistoryListComponent;
  let fixture: ComponentFixture<ApHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApHistoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
