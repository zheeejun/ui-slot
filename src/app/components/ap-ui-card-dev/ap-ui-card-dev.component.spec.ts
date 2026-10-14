import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApUiCardDevComponent } from './ap-ui-card-dev.component';

describe('ApUiCardDevComponent', () => {
  let component: ApUiCardDevComponent;
  let fixture: ComponentFixture<ApUiCardDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApUiCardDevComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApUiCardDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
