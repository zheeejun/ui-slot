import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTrnFloatButtonComponent } from './ap-trn-float-button.component';

describe('ApTrnFloatButtonComponent', () => {
  let component: ApTrnFloatButtonComponent;
  let fixture: ComponentFixture<ApTrnFloatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnFloatButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApTrnFloatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
