import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  handleNextEmission(nextInLine: number) {
    console.log(nextInLine);
    if (nextInLine % 2 === 0) {
      this.evenNumbers.push(nextInLine);
    } else {
      this.oddNumbers.push(nextInLine);
    }
  }
}
