import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html'
})
export class GameControlComponent implements OnInit {
  @Output() nextNumber = new EventEmitter<number>();
  currentNumber: number;
  intervalId: number;

  constructor() {
    this.currentNumber = 0;
  }

  ngOnInit() {
  }

  startGame() {
    this.intervalId = setInterval(() => {
      this.currentNumber++;
      this.nextNumber.emit(this.currentNumber);
    }, 1000);
  }

  pauseGame() {
    clearInterval(this.intervalId);
  }
}
