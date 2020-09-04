import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';

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
        observer.next(count++);
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
      }, 1000);
    });

    this.counter = customIntervalObservable.subscribe(
      count => console.log(count),
      error => {
        console.log(error);
        alert(error.message);
      }
    );
  }

  ngOnDestroy() {
    this.counter.unsubscribe();
  }
}
