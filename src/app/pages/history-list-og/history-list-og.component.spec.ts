import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HistoryListOGComponent } from './history-list-og.component';

describe('HistoryListOGComponent', () => {
  let component: HistoryListOGComponent;
  let fixture: ComponentFixture<HistoryListOGComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryListOGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryListOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
