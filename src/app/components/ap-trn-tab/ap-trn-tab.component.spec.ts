import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTrnTabComponent } from './ap-trn-tab.component';

describe('ApTrnTabComponent', () => {
  let component: ApTrnTabComponent;
  let fixture: ComponentFixture<ApTrnTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApTrnTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
