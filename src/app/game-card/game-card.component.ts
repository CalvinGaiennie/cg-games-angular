import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
})
export class GameCardComponent {
  @Input() game!: {
    name: string;
    description?: string;
    photo: string;
    link: string;
  };
}
