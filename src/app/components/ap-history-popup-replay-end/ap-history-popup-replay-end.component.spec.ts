import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ApHistoryPopupReplayEndComponent } from './ap-history-popup-replay-end.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApToastComponent } from '../../../ap-components-lib/ap-toast/ap-toast.component';

describe('ApHistoryPopupReplayEndComponent', () => {
  let component: ApHistoryPopupReplayEndComponent;
  let fixture: ComponentFixture<ApHistoryPopupReplayEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApHistoryPopupReplayEndComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApHistoryPopupReplayEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show toast when copy link button is clicked', () => {
    const toast = component.copyLinkToast();
    expect(toast).toBeTruthy();
    if (!toast) {
      fail('copyLinkToast should be available when copy link is shown');
      return;
    }

    spyOn(toast, 'show');
    spyOn(component.copyLink, 'emit');

    const buttonDebugElements = fixture.debugElement.queryAll(By.directive(ApButtonComponent));
    const copyLinkButton = buttonDebugElements[1].componentInstance as ApButtonComponent;
    copyLinkButton.clicked.emit(new Event('click'));

    expect(component.copyLink.emit).toHaveBeenCalled();
    expect(toast.show).toHaveBeenCalled();
  });
});
