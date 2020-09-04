import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  counter: Subscription;

  constructor() { }

  ngOnInit() {
    // this.counter = interval(1000).subscribe(
    //   count => console.log(count)
    // );
    const customIntervalObservable = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    }).pipe(map(countNumber => 'Round: ' + (countNumber + 1)));

    this.counter = customIntervalObservable.subscribe(
      count => console.log(count),
      error => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Completed!');
      });
  }

  ngOnDestroy() {
    this.counter.unsubscribe();
  }
}
