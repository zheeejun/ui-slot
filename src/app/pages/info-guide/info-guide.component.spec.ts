import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoGuideComponent } from './info-guide.component';

describe(' InfoGuideComponent', () => {
  let component: InfoGuideComponent;
  let fixture: ComponentFixture<InfoGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoGuideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
