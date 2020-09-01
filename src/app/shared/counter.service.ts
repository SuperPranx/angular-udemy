import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activationsCount = 0;
  deactivationsCount = 0;

  logActivation() {
    this.activationsCount++;
    console.log(`Activations: ${this.activationsCount}`);
  }

  logDeactivation() {
    this.deactivationsCount++;
    console.log(`Deactivations: ${this.deactivationsCount}`);
  }
}
