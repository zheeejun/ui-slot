import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
interface MenuItem {
  name: string;
  path: string;
  icon: string;
  fragment?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'layout-dev',
  imports: [RouterModule, CommonModule, ApIconComponent],
  templateUrl: './layout-dev.component.html',
  styleUrl: './layout-dev.component.css',
})
export class LayoutDevComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly contentRef = viewChild<ElementRef<HTMLElement>>('contentRef');

  isCollapsed = signal(false);
  menuItems: MenuItem[] = [
    { name: 'Icon', path: 'icons', icon: 'squares-2x2' },
    {
      name: 'Button', path: 'button', icon: 'cube',
      children: [
        { name: 'Button', path: 'button', icon: 'bar-3', fragment: 'ap-button-list' },
        { name: 'Auto Spin', path: 'button', icon: 'bar-3', fragment: 'ap-button-auto-spin-times' },
        { name: 'Free Spin', path: 'button', icon: 'bar-3', fragment: 'ap-button-free-spins' },
      ],
    },
    {
      name: 'Input',
      path: 'input',
      icon: 'pencil-square',
      children: [
        { name: 'Input', path: 'input', icon: 'bar-3', fragment: 'ap-input-list' },
        { name: 'Select', path: 'input', icon: 'bar-3', fragment: 'ap-select-list' },
        { name: 'Toggle Switch', path: 'input', icon: 'bar-3', fragment: 'ap-toggle-switch-list' },
        { name: 'Radio', path: 'input', icon: 'bar-3', fragment: 'ap-radio-list' },
        { name: 'Checkbox', path: 'input', icon: 'bar-3', fragment: 'ap-check-box-list' },
      ],
    },
    {
      name: 'Menu', path: 'menu', icon: 'bar-3',
      children: [
        { name: 'Tab Button', path: 'menu', icon: 'bar-3', fragment: 'ap-ui-tab-group' },
        { name: 'Tab Text Button', path: 'menu', icon: 'bar-3', fragment: 'ap-tab-menu-text' },
        { name: 'Tab Icon Button', path: 'menu', icon: 'bar-3', fragment: 'ap-tab-menu-icon' },
      ],
    },
    {
      name: 'Message', path: 'message', icon: 'chat-bubble-left-right',
      children: [
        { name: 'Message', path: 'message', icon: 'bar-3', fragment: 'ap-message' },
        { name: 'Toast', path: 'message', icon: 'bar-3', fragment: 'ap-toast' },
      ],
    },
    {
      name: 'Component', path: 'component', icon: 'cube',
      children: [
        { name: 'Status Mode', path: 'component', icon: 'bar-3', fragment: 'ap-ui-replay-mode' },
        { name: 'Calender', path: 'component', icon: 'bar-3', fragment: 'ap-history-calendar' },
      ],
    },
    {
      name: 'Misc', path: 'misc', icon: 'window',
      children: [
        { name: 'Tag', path: 'misc', icon: 'bar-3', fragment: 'ap-tag' },
        { name: 'Badge', path: 'misc', icon: 'bar-3', fragment: 'ap-badge' },
      ],
    },
    { name: 'Popup', path: 'popup', icon: 'window' },
    {
      name: 'History', path: 'history', icon: 'clock',
      children: [
        { name: 'History List', path: 'history', icon: 'bar-3', fragment: 'ap-history-list' },

      ],
    },
    {
      name: 'Buy Feature', path: 'feature', icon: 'shopping-cart',
      children: [
        { name: 'Bet Control', path: 'feature', icon: 'bar-3', fragment: 'ap-bf-card-bet-control' },
        { name: 'Buy Feature Card', path: 'feature', icon: 'bar-3', fragment: 'ap-bf-card-feature' },
        { name: 'Buy Chance Card', path: 'feature', icon: 'bar-3', fragment: 'ap-bf-card-chance' },

      ],
    },
    {
      name: 'Campaign', path: 'campaign', icon: 'gift',
      children: [
        { name: 'Campaign Card', path: 'campaign', icon: 'bar-3', fragment: 'ap-campaign-card' },
        { name: 'Campaign List', path: 'campaign', icon: 'bar-3', fragment: 'ap-campaign-list' },

      ],
    },
    {
      name: 'Cash Drop', path: 'cashdrop', icon: 'two-coins',
      children: [
        { name: 'Count Down', path: 'cashdrop', icon: 'bar-3', fragment: 'ap-cashdrop-card-countdown' },
        { name: 'Count Down Component', path: 'cashdrop', icon: 'bar-3', fragment: 'ap-cashdrop-card-component-countdown' },
        { name: 'List', path: 'cashdrop', icon: 'bar-3', fragment: 'ap-cashdrop-list' },

      ],
    },
    { name: 'Promo Code', path: 'promo-code', icon: 'star' },
    {
      name: 'Tournament', path: 'trn', icon: 'trophy',
      children: [
        { name: 'Card Title', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-card-title' },
        { name: 'Card Bonus', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-card-bonus' },
        { name: 'Card Match', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-card-match' },
        { name: 'Float Button', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-float-button' },
        { name: 'Float Countdown', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-float-countdown' },
        { name: 'Status Bar', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-status-bar' },
        { name: 'Game Hint', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-game-hint' },
        { name: 'Game List', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-list-game' },
        { name: 'Game Start Confirm', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-game-confirm' },
        { name: 'Game Leave Confirm', path: 'trn', icon: 'bar-3', fragment: 'trn-game-event-leave-confirm' },
        { name: 'Game Match Finished', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-game-match-finished' },
        { name: 'Game Notification Created', path: 'trn', icon: 'bar-3', fragment: 'trn-created-notification' },
        { name: 'Game Result', path: 'trn', icon: 'bar-3', fragment: 'ap-trn-game-result' },
      ],
    },
    { name: 'Campaign Demo', path: 'campaigndemo', icon: 'gift' },
  ];

  expandedMenus = signal<Set<string>>(new Set());
  isMobileMenuOpen: boolean = false;

  constructor() {
    afterNextRender(() => {
      this.scrollToFragment(this.router.parseUrl(this.router.url).fragment);
    });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.scrollToFragment(this.router.parseUrl(this.router.url).fragment);
      });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  onChildSelected(fragment?: string): void {
    this.closeMobileMenu();
    this.scrollToFragment(fragment);
  }

  toggleCollapse(): void {
    this.isCollapsed.update((value) => !value);
  }

  toggleSubmenu(name: string): void {
    this.expandedMenus.update((current) => {
      const next = new Set(current);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }

  isSubmenuExpanded(name: string): boolean {
    return this.expandedMenus().has(name);
  }

  private scrollToFragment(fragment: string | null | undefined): void {
    if (!fragment) {
      return;
    }

    setTimeout(() => {
      const content = this.contentRef()?.nativeElement;
      const target = document.getElementById(fragment);

      if (!content || !target || !content.contains(target)) {
        return;
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
