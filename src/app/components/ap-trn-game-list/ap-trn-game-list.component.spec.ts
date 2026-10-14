import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApTrnGameListComponent } from './ap-trn-game-list.component';


describe('ApTrnGameListComponent', () => {
  let component: ApTrnGameListComponent;
  let fixture: ComponentFixture<ApTrnGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnGameListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApTrnGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
