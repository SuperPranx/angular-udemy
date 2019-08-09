import { Component } from '@angular/core';
import {Timestamp} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  toggleCount = 0;
  toggleTimestamps = [];

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    this.toggleTimestamps.push(Date());
    this.toggleCount++;
  }

  getColor(index: number) {
    return index > 4 ? 'darkblue' : 'white';
  }

  getToggleStatusString() {
    return this.showDetails ? 'shown' : 'hidden';
  }
}
