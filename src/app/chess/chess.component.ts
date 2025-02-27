import { Component, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-chess',
  imports: [NgFor, NgIf],
  templateUrl: './chess.component.html',
  styleUrl: './chess.component.css',
})
export class ChessComponent {
  selectedPiece = { name: '', row: -1, col: -1 };
  rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
  cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  chessBoard = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ];
  constructor(private cdr: ChangeDetectorRef) {}

  selectPiece(row: number, col: number): void {
    this.selectedPiece = {
      name: this.chessBoard[row][col],
      row,
      col,
    };
    this.cdr.detectChanges();
  }
}
