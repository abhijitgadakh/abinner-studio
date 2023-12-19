import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pig-game',
  templateUrl: './pig-game.component.html',
  styleUrls: ['./pig-game.component.css'],
})
export class PigGameComponent implements OnInit {
  public playing: boolean = true;
  public winner: number = 0;
  public dice: string = `../../../../../assets/project-images/games/pig-game/dice-1.png`;
  public showDice = false;

  public player1Score: number = 0;
  public player2Score: number = 0;

  public player1CScore: number = 0;
  public player2CScore: number = 0;

  public activePlayer!: number;
  constructor() {}

  ngOnInit(): void {
    this.activePlayer = Math.floor(Math.random() * 6 + 1) % 2 == 0 ? 2 : 1;
  }

  holdPlayer() {
    if (this.playing) {
      if (this.activePlayer == 1) {
        this.player1Score += this.player1CScore;
      } else {
        this.player2Score += this.player2CScore;
      }
      this.activePlayer = this.activePlayer == 1 ? 2 : 1;
      this.player1CScore = 0;
      this.player2CScore = 0;
    }
  }

  diceRolled() {
    if (this.playing) {
      this.showDice = true;
      const dice = this.rollDice();
      if (dice !== 1) {
        if (this.activePlayer == 1) {
          this.player1CScore += dice;
          if (this.player1Score + this.player1CScore >= 100) {
            this.setWinner(1);
            return;
          }
        } else {
          this.player2CScore += dice;
          if (this.player2Score + this.player2CScore >= 100) {
            this.setWinner(2);
            return;
          }
        }
      } else {
        this.activePlayer = this.activePlayer == 1 ? 2 : 1;
        this.player1CScore = 0;
        this.player2CScore = 0;
      }
    }
  }

  setWinner(winner: number) {
    this.playing = false;
    this.showDice = false;
    if (this.activePlayer == 1) {
      this.player1Score += this.player1CScore;
    } else {
      this.player2Score += this.player2CScore;
    }
    this.player1CScore = 0;
    this.player2CScore = 0;
    this.activePlayer = 0;
    this.winner = winner;
  }

  resetGame() {
    this.winner = 0;
    this.playing = true;
    this.player1Score = 0;
    this.player1CScore = 0;
    this.player2Score = 0;
    this.player2CScore = 0;
    this.activePlayer = Math.floor(Math.random() * 6 + 1) % 2 == 0 ? 2 : 1;
  }

  rollDice() {
    const dice = Math.floor(Math.random() * 6 + 1);
    this.dice = `../../../../../assets/project-images/games/pig-game/dice-${dice}.png`;
    return dice;
  }
}
