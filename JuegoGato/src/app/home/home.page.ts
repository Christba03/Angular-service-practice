import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  players = { player1: '', player2: '' };
  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  gameStarted: boolean = false;
  gameOver: boolean = false;
  winner: string = '';

  constructor() {}

  startGame() {
    if (this.players.player1 && this.players.player2) {
      this.gameStarted = true;
      this.board = Array(9).fill('');
      this.currentPlayer = 'X';
      this.gameOver = false;
      this.winner = '';
    }
  }

  makeMove(index: number) {
    if (!this.gameOver && this.board[index] === '') {
      this.board[index] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.gameOver = true;
        this.winner = this.board[a] === 'X' ? this.players.player1 : this.players.player2;
        return;
      }
    }

    if (!this.board.includes('')) {
      this.gameOver = true;
      this.winner = 'Draw';
    }
  }

  resetGame() {
    this.gameStarted = false;
    this.gameOver = false;
    this.board = Array(9).fill('');
    this.winner = '';
  }
}
