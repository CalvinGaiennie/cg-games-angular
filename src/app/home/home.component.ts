import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { GameCardComponent } from '../game-card/game-card.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [NgFor, GameCardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items = [
    {
      name: 'Chess',
      description: 'Here is an example description.',
      link: '/chess',
      photo: 'assets/images/chess.jpeg',
    },
    {
      name: 'Sudoku',
      description: 'Here is an example description.',
      link: '/sudoku',
      photo: 'assets/images/sudoku.png',
    },
    {
      name: 'Blackjack',
      description: 'Here is an example description.',
      link: '/blackjack',
      photo: 'assets/images/blackjack.webp',
    },
    {
      name: 'Go',
      description: 'Here is an example description.',
      link: '/go',
      photo: 'assets/images/go.jpg',
    },
  ];
}
