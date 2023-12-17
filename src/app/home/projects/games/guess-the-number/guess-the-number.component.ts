import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-the-number',
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css'],
})
export class GuessTheNumberComponent implements OnInit {
  public backgroundColor = '#222831';

  public buttonbgColor = '#e3fdfd';
  public buttonColor = '#222831';

  public displayNumbgColor = '#e3fdfd';
  public displayNumColor = '#222831';

  public minLimit: number = 1;
  public maxLimit: number = 20;
  public isDisabled: boolean = false;
  public inputValue: any = '';
  public CurrentScore: number = 20;
  public HighestScore: number = 0;

  public displayNumber: any = '?';
  public message: any = 'Start guessing...';
  public secretNumber!: number;
  constructor() {}

  ngOnInit(): void {
    this.secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(this.secretNumber);
  }

  checkGuess(guessedNumber: any) {
    guessedNumber = Number(guessedNumber);
    if (!guessedNumber) {
      this.message = '⛔️ No number!';
    } else if (guessedNumber === this.secretNumber) {
      this.message = '🎉 Correct Number!';
      this.displayNumber = this.secretNumber;
      this.changeBackground();
      if (this.CurrentScore > this.HighestScore) {
        this.HighestScore = this.CurrentScore;
      }
      this.isDisabled = true;
    } else if (guessedNumber !== this.secretNumber) {
      if (this.CurrentScore > 1) {
        this.message =
          guessedNumber > this.secretNumber ? '📈 Too high!' : '📉 Too low!';
        this.CurrentScore--;
      } else {
        this.message = '💥 You lost the game!';
        this.CurrentScore--;
        this.isDisabled = true;
      }
    }
  }
  resetGame() {
    this.isDisabled = false;
    this.secretNumber = Math.trunc(Math.random() * 20) + 1;
    this.message = 'Start guessing...';
    this.CurrentScore = 20;
    this.displayNumber = '?';
    this.inputValue = '';
    this.backgroundColor = '#222831';
    this.buttonbgColor = '#e3fdfd';
    this.buttonColor = '#222831';
    this.displayNumbgColor = '#e3fdfd';
    this.displayNumColor = '#222831';
  }

  changeBackground() {
    this.backgroundColor = '#60b347';
    this.buttonColor = '#e3fdfd';
    this.buttonbgColor = '#222831';
    this.displayNumbgColor = '#222831';
    this.displayNumColor = '#60b347';
  }
}
