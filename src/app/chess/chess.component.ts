import { Component, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
@Component({
  selector: 'app-chess',
  imports: [NgFor, NgIf, NgClass, NgStyle],
  templateUrl: './chess.component.html',
  styleUrl: './chess.component.css',
})
export class ChessComponent {
  selectedPiece = { name: '', color: '', row: -1, col: -1 };
  rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
  cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  chessBoard = [
    [
      { name: 'R', color: 'Black' },
      { name: 'N', color: 'Black' },
      { name: 'B', color: 'Black' },
      { name: 'Q', color: 'Black' },
      { name: 'K', color: 'Black' },
      { name: 'B', color: 'Black' },
      { name: 'N', color: 'Black' },
      { name: 'R', color: 'Black' },
    ],
    [
      { name: 'P', color: 'Black' },
      { name: 'P', color: 'Black' },
      { name: 'P', color: 'Black' },
      { name: 'P', color: 'Black' },
      { name: 'P', color: 'Black' },
      { name: 'P', color: 'Black' },
      { name: 'P', color: 'Black' },
      { name: 'P', color: 'Black' },
    ],
    [
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
    ],
    [
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
    ],
    [
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
    ],
    [
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
      { name: '', color: '' },
    ],
    [
      { name: 'P', color: 'White' },
      { name: 'P', color: 'White' },
      { name: 'P', color: 'White' },
      { name: 'P', color: 'White' },
      { name: 'P', color: 'White' },
      { name: 'P', color: 'White' },
      { name: 'P', color: 'White' },
      { name: 'P', color: 'White' },
    ],
    [
      { name: 'R', color: 'White' },
      { name: 'N', color: 'White' },
      { name: 'B', color: 'White' },
      { name: 'Q', color: 'White' },
      { name: 'K', color: 'White' },
      { name: 'B', color: 'White' },
      { name: 'N', color: 'White' },
      { name: 'R', color: 'White' },
    ],
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  moveOrSelect(row: number, col: number): void {
    const targetPiece = this.chessBoard[row][col];

    //check if target cell has an enemy piece
    if (this.selectedPiece.row === -1 || this.selectedPiece.col === -1) {
      this.selectPiece(row, col);
    } else {
      const selectedColor =
        this.chessBoard[this.selectedPiece.row]?.[this.selectedPiece.col]
          ?.color;

      if (
        selectedColor &&
        (this.selectedPiece.color !== targetPiece.color || !targetPiece.name)
      ) {
        this.movePiece(row, col);
      }
    }
    this.cdr.detectChanges();
  }

  selectPiece(row: number, col: number): void {
    const piece = this.chessBoard[row][col];
    if (piece && piece.name) {
      this.selectedPiece = {
        name: piece.name,
        color: piece.color,
        row,
        col,
      };
      this.cdr.detectChanges();
    }
  }

  isSelected(row: number, col: number): boolean {
    return this.selectedPiece.row === row && this.selectedPiece.col === col;
  }

  //need to finish building out this method
  checkMove(row: number, col: number): boolean {
    const selectedPiece =
      this.chessBoard[this.selectedPiece.row][this.selectedPiece.col];
    const targetPiece = this.chessBoard[row][col];

    const currentCase = `${selectedPiece.name}${selectedPiece.color}`;
    console.log(currentCase);
    switch (currentCase) {
      case 'PWhite':
        if (
          targetPiece.name === '' &&
          row === this.selectedPiece.row + 1 &&
          col === this.selectedPiece.col
        ) {
          return true;
        }
        return false;
      case 'PBlack':
        if (
          targetPiece.name === '' &&
          row === this.selectedPiece.row - 1 &&
          col === this.selectedPiece.col
        ) {
          return true;
        }
        return false;
      default:
        return false;
    }
  }

  movePiece(row: number, col: number): void {
    if (!this.checkMove(row, col)) {
      return;
    } else if (this.selectedPiece.name) {
      const targetPiece = this.chessBoard[row][col];
      const selectedColor =
        this.chessBoard[this.selectedPiece.row][this.selectedPiece.col].color;

      //add peice to target cell
      this.chessBoard[row][col] = {
        name: this.selectedPiece.name,
        color: selectedColor,
      };
      //remove piece from source cell
      this.chessBoard[this.selectedPiece.row][this.selectedPiece.col] = {
        name: '',
        color: '',
      };
      //empty selected piece variable
      this.selectedPiece = { name: '', color: '', row: -1, col: -1 };
      this.cdr.detectChanges();
    }
  }
}
