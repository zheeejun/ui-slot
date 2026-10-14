import { Component } from '@angular/core';

interface GameScreen {
  readonly title: string;
  readonly image: string;
}

@Component({
  selector: 'dev-10098-showcase',
  imports: [],
  templateUrl: './dev-10098-showcase.component.html',
  styleUrl: './dev-10098-showcase.component.css',
})
export class Dev10098ShowcaseComponent {
  readonly screens: readonly GameScreen[] = [
    { title: 'Gameplay', image: 'assets/images/portfolio/screen-10098-football.jpg' },
    { title: 'Menu', image: 'assets/images/portfolio/screen-10098-menu.jpg' },
    { title: 'Campaign', image: 'assets/images/portfolio/screen-10098-campaign.jpg' },
  ];
}
