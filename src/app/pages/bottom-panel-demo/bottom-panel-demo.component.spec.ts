import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomPanelDemoComponent } from './bottom-panel-demo.component';

describe('BottomPanelDemoComponent', () => {
  let component: BottomPanelDemoComponent;
  let fixture: ComponentFixture<BottomPanelDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomPanelDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomPanelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
