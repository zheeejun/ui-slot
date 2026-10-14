import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoFeatureComponent } from './info-feature.component';

describe(' InfoFeatureComponent', () => {
  let component:  InfoFeatureComponent;
  let fixture: ComponentFixture< InfoFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InfoFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent( InfoFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
