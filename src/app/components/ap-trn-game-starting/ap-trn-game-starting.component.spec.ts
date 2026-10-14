import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTrnGameStartingComponent } from './ap-trn-game-starting.component';

describe('ApTrnGameStartingComponent', () => {
  let component: ApTrnGameStartingComponent;
  let fixture: ComponentFixture<ApTrnGameStartingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApTrnGameStartingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApTrnGameStartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Game Start text when visible', () => {
    fixture.componentRef.setInput('isVisible', true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.game-start-text')?.textContent?.trim()).toBe('Game Start!');
  });

  it('should hide component when isVisible is false', () => {
    fixture.componentRef.setInput('isVisible', false);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.game-start-container')).toBeFalsy();
  });

  it('should set default duration to 3000ms', () => {
    expect(component.duration()).toBe(3000);
  });

  it('should accept custom duration', () => {
    fixture.componentRef.setInput('duration', 5000);
    fixture.detectChanges();

    expect(component.duration()).toBe(5000);
  });
});