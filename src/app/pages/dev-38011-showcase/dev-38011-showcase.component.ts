import { Component } from '@angular/core';

interface GameScreen {
  readonly title: string;
  readonly image: string;
}

@Component({
  selector: 'dev-38011-showcase',
  imports: [],
  templateUrl: './dev-38011-showcase.component.html',
  styleUrl: './dev-38011-showcase.component.css',
})
export class Dev38011ShowcaseComponent {
  readonly screens: readonly GameScreen[] = [
    { title: 'Gameplay', image: 'assets/images/portfolio/screen-38011-gameplay.jpg' },
    { title: 'Menu', image: 'assets/images/portfolio/screen-38011-menu.jpg' },
    { title: 'Info', image: 'assets/images/portfolio/screen-38011-info.jpg' },
  ];
}
