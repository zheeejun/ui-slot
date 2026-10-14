import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  compareLeaderBoardItems,
  EventLeaderBoardBannerComponent,
} from './event-leader-board-banner.component';
import { ILeaderBoardItem } from '../../services/leader-board/leader-board.interface';

describe('EventLeaderBoardBannerComponent', () => {
  let component: EventLeaderBoardBannerComponent;
  let fixture: ComponentFixture<EventLeaderBoardBannerComponent>;
  const createItem = (
    overrides: Partial<ILeaderBoardItem> = {},
  ): ILeaderBoardItem => ({
    rank: '1',
    game: 'game',
    gameId: '10001',
    time: 100,
    multiplier: 100,
    multiplierFromServer: 100,
    spin: 10,
    currencyCode: 'MYR',
    currencySymbol: 'RM',
    prize: 100,
    prizeForSort: 100,
    image: 'image.png',
    ticketNo: 'ticket',
    platformCode: 'platform',
    ...overrides,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventLeaderBoardBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventLeaderBoardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps spin sort ascending on repeated clicks', () => {
    component.sortType.set('spin');
    component.sortDirection.set('asc');

    component.onSpinSortClick();

    expect(component.sortType()).toBe('spin');
    expect(component.sortDirection()).toBe('asc');
  });

  it('uses newer date first when all previous sort keys are equal', () => {
    const newer = createItem({
      multiplier: 500,
      prizeForSort: 200,
      spin: 5,
      time: 300,
    });
    const older = createItem({
      multiplier: 500,
      prizeForSort: 200,
      spin: 5,
      time: 100,
    });

    expect(compareLeaderBoardItems(newer, older, 'multiplier', 'desc')).toBeLessThan(0);
    expect(compareLeaderBoardItems(newer, older, 'prize', 'desc')).toBeLessThan(0);
    expect(compareLeaderBoardItems(newer, older, 'spin', 'asc')).toBeLessThan(0);
  });

  it('uses smaller spin first when sorting by spin', () => {
    const fewerSpins = createItem({ spin: 2, prizeForSort: 1, multiplier: 1, time: 100 });
    const moreSpins = createItem({ spin: 8, prizeForSort: 999, multiplier: 999, time: 300 });

    expect(compareLeaderBoardItems(fewerSpins, moreSpins, 'spin', 'asc')).toBeLessThan(0);
    expect(compareLeaderBoardItems(fewerSpins, moreSpins, 'spin', 'desc')).toBeLessThan(0);
  });
});
