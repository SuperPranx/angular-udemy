import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  template: '<p style="background-color: lightblue">Even - {{ givenNumber }}</p>'
})
export class EvenComponent implements OnInit {
  @Input() givenNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
