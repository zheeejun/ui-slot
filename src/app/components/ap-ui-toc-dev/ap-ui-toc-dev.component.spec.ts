import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApUiTocDevComponent } from './ap-ui-toc-dev.component';

describe('ApUiTocDevComponent', () => {
  let component: ApUiTocDevComponent;
  let fixture: ComponentFixture<ApUiTocDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApUiTocDevComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApUiTocDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
